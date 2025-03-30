export interface Game {
  id: string;
  slug: string;
  name: string;
  description: string;
  genres: string[];
  links: string[];
  releaseDate: string;
  pictureUrl: string;
  rating: number;
}

export interface User {
  id: string;
  username: string;
  displayName: string;
  role: Array<Role>;
  registrationDate: string;
}

export type Role = "USER" | "ADMIN";

type Rating = {
  id: string;
  rating: number;
  comment?: string;
};

export type GameRating = Rating & {
  username: string;
  displayName: string;
};

export type UserRating = Rating & {
  slug: string;
  name: string;
};

export type Theme = "system" | "light" | "dark";
export type ThemeData = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
