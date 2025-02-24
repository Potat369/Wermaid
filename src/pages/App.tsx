import { useState } from "react";
import { ThemeContext } from "../contexts.tsx";
import { Outlet } from "react-router";

export default function App() {
  const localTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(
    localTheme != null ? localTheme : "system",
  );

  localStorage.setItem("theme", theme);

  let classTheme = "";
  if (theme == "system") {
    classTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "";
  } else {
    classTheme = theme == "dark" ? "dark" : "";
  }

  document.documentElement.className = classTheme;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Outlet />
    </ThemeContext.Provider>
  );
}
