export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

export const getStoredTheme = (): Theme | null => {
  const value = localStorage.getItem(STORAGE_KEY);
  return value === "light" || value === "dark" ? value : null;
};

export const getSystemTheme = (): Theme =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export const applyTheme = (theme: Theme): void => {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
  localStorage.setItem(STORAGE_KEY, theme);
};
