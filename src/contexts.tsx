import { createContext } from "react";

export type themeContext = {
  theme: string;
  setTheme: (theme: string) => void;
};

export const ThemeContext = createContext<themeContext>({
  theme: "",
  setTheme: () => {},
});
