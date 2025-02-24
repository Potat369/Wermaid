import { useState } from "react";
import { ThemeContext } from "../contexts.tsx";
import { Outlet } from "react-router";

export default function App() {
  const [theme, setTheme] = useState("system");

  let theme1 = "";
  if (theme == "system") {
    theme1 = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "";
  } else {
    theme1 = theme == "dark" ? "dark" : "";
  }

  document.documentElement.className = theme1;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Outlet />
    </ThemeContext.Provider>
  );
}
