import { useState } from "react";
import { UserContext } from "../contexts.ts";
import { Outlet } from "react-router";
import Header from "../components/Header.tsx";
import { Theme, User } from "../types.ts";
import { login } from "../utils.ts";
import Footer from "../components/Footer.tsx";

export default function App() {
  const localTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState<Theme>((localTheme as Theme) || "system");
  const [user, setUser] = useState<User | undefined>();

  if (
    theme == "dark" ||
    (theme == "system" && window.matchMedia("(prefers-color-scheme: dark)"))
  ) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
  localStorage.setItem("theme", theme);

  if (!user) {
    const token = localStorage.getItem("token");
    if (token) {
      login().then((value) => setUser(value));
    }
  }
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Header themeData={{ theme, setTheme }} />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
}
