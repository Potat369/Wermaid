import { createContext } from "react";

export type themeType = "system" | "light" | "dark";

export type themeContext = {
  theme: themeType;
  setTheme: (theme: themeType) => void;
};

export const ThemeContext = createContext<themeContext>({
  theme: "system",
  setTheme: () => {},
});
