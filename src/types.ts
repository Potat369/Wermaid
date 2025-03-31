export interface Game {
  slug: string;
  name: string;
  pictureUrl: string;
  rating: number;
}

export interface GamePage extends Game {
  id: string;
  description: string;
  genres: string[];
  links: string[];
  releaseDate: string;
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
  date: string;
};

export type GameRatingType = Rating & {
  username: string;
  displayName: string;
};

export type UserRatingType = Rating & {
  pictureUrl: string;
  slug: string;
  name: string;
};

export type Theme = "system" | "light" | "dark";
export type ThemeData = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
