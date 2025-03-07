import { useState } from "react";
import { ThemeContext, themeType } from "../contexts.tsx";
import { Outlet } from "react-router";
import Header from "../components/Header.tsx";

export default function App() {
  const localTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState<themeType>(
    localTheme != null ? (localTheme as themeType) : "system",
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
      <Header />
      <Outlet />
    </ThemeContext.Provider>
  );
}
