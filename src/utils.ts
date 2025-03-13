const siteNames = new Map<string, string>([
  ["play.google.com", "Google Play"],
  ["apps.apple.com", "App Store"],
  ["store.steampowered.com", "Steam"],
  ["overwatch.blizzard.com", "Blizzard"],
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
