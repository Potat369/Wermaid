import { User } from "./types.ts";

const siteNames = new Map<string, string>([
  ["play.google.com", "Google Play"],
  ["apps.apple.com", "App Store"],
  ["store.steampowered.com", "Steam"],
  ["store.epicgames.com", "Epic Games"],
]);

export function siteName(url: string) {
  let slashCount = 0;
  let index;

  for (let i = 0; i < url.length; i++) {
    if (url[i] == "/") {
      slashCount += 1;
    } else if (slashCount == 2) {
      index = i + 1;
    }
  }
  const name = siteNames.get(url.substring(8, index));

  return name == null ? "Official Site" : name;
}

export function fetchWithToken(
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<Response> {
  if (init == undefined) {
    init = {};
  }
  init.headers = {
    ...init.headers,
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
  return fetch(input, init);
}

export function login(): Promise<User> {
  return fetchWithToken(import.meta.env.VITE_SERVER_URL + "api/v1/user").then(
    (response) => response.json(),
  );
}

export function getColorFromRating(rating: number) {
  return rating == 0
    ? "rgb(113 113 122)"
    : `hsl(${(rating - 1) * 24}, 80%, 60%)`;
}
