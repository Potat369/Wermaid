import { NavLink } from "react-router";
import ThemeSwitcher from "./ThemeSwitcher.tsx";
import { ThemeData } from "../types.ts";
import { useContext } from "react";
import { UserContext } from "../contexts.ts";

export default function Header({ themeData }: { themeData: ThemeData }) {
  const { user } = useContext(UserContext);

  return (
    <>
      <header className="fixed top-0 z-30 w-full bg-zinc-100/75 backdrop-blur dark:bg-zinc-900/75">
        <div className="flex justify-between p-2">
          <div className="flex items-center">
            <span className="p-2 font-semibold">Wermaid</span>
            <nav className="flex">
              <NavLink
                to="/"
                aria-label="Go to home page"
                className="p-2 text-zinc-500 transition-colors hover:text-current [&.active]:cursor-default [&.active]:text-current/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  fill="currentColor"
                  className="size-4"
                >
                  <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                </svg>
              </NavLink>
              <NavLink
                to="/discovery"
                aria-label="Go to discovery page"
                className="p-2 text-zinc-500 transition-colors hover:text-current [&.active]:cursor-default [&.active]:text-current/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  fill="currentColor"
                  className="size-4"
                >
                  <path d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192 32 192c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512L430 512c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32l-85.6 0L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192l-232.6 0L253.3 35.1zM192 304l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16zm128 16l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
                </svg>
              </NavLink>
              <NavLink
                to="/info"
                aria-label="Go to info page"
                className="p-2 text-zinc-500 transition-colors hover:text-current [&.active]:cursor-default [&.active]:text-current/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="size-4"
                  viewBox="0 0 320 512"
                >
                  <path d="M80 160c0-35.3 28.7-64 64-64l32 0c35.3 0 64 28.7 64 64l0 3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74l0 1.4c0 17.7 14.3 32 32 32s32-14.3 32-32l0-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7l0-3.6c0-70.7-57.3-128-128-128l-32 0C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
                </svg>
              </NavLink>
            </nav>
          </div>
          <div className="flex items-center">
            {user?.role.includes("ADMIN") && (
              <NavLink
                to="/game/add"
                aria-label="Go to game addition page"
                className="p-2 text-zinc-500 transition-colors hover:text-current [&.active]:cursor-default [&.active]:text-current/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="size-4"
                >
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
                </svg>
              </NavLink>
            )}
            <ThemeSwitcher themeData={themeData} />
            <NavLink
              to="/profile"
              aria-label="Go to profile page"
              className="p-2 text-zinc-500 transition-colors hover:text-current [&.active]:cursor-default [&.active]:text-current/75"
            >
              {user ? (
                user.displayName
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                  className="size-4"
                >
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                </svg>
              )}
            </NavLink>
          </div>
        </div>
      </header>
      <div className="h-14"></div>
    </>
  );
}
