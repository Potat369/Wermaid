export interface Game {
  id: string;
  slug: string;
  name: string;
  description: string;
  genres: string[];
  links: string[];
  releaseDate: string;
  pictureUrl: string;
  ratings: Rating[];
}

export interface User {
  id: string;
  username: string;
  displayName: string;
  role: Array<Role>;
}

export type Role = "USER" | "ADMIN";

export interface Rating {
  id: string;
  gameId: string;
  userId: string;
  rating: number;
  comment?: string;
}

export type Theme = "system" | "light" | "dark";
export type ThemeData = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
