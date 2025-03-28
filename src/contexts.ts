import { createContext } from "react";
import { User } from "./types.ts";

export type userContext = {
  user: User | undefined;
  setUser: (user: User) => void;
};

export const UserContext = createContext<userContext>({
  user: undefined,
  setUser: () => {},
});
