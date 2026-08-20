import { useCallback, useEffect, useState } from "react";
import {
  applyTheme,
  getStoredTheme,
  getSystemTheme,
  type Theme,
} from "@/lib/theme";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if (!getStoredTheme()) setTheme(getSystemTheme());
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const toggleTheme = useCallback(
    () => setTheme((current) => (current === "dark" ? "light" : "dark")),
    []
  );

  return { theme, toggleTheme };
};
