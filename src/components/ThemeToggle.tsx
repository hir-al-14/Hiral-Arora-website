import { useEffect, useState } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
    >
      {theme === "dark" ? "☾" : "☀"}
    </button>
  );
}

export default ThemeToggle;