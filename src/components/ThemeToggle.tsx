import { useTheme } from "@/hooks/useTheme";
import { Icon } from "./Icon";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const next = theme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className="grid size-8 shrink-0 place-items-center rounded-full border border-line sm:size-9
                 text-muted transition-colors duration-200
                 hover:border-accent hover:text-accent">
      <Icon name={theme === "dark" ? "sun" : "moon"} size={16} />
    </button>
  );
};
