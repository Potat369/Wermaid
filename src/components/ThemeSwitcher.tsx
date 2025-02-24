import { useContext } from "react";
import { ThemeContext } from "../contexts.tsx";

export default function ThemeSwitcher() {
  const { setTheme } = useContext(ThemeContext);

  return (
    <div>
      <button onClick={() => setTheme("system")}>System</button>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </div>
  );
}
