import { siteName } from "../utils.ts";
import globe from "../static/globe.svg";
import { ReactNode } from "react";

export default function SiteLink({
  url,
  isEditing,
  children,
}: {
  url: string;
  isEditing: boolean;
  children?: ReactNode;
}) {
  const name = siteName(url);

  return (
    <a
      className="relative space-x-2 rounded-md bg-zinc-200 p-2 text-nowrap no-underline hover:underline dark:bg-zinc-800"
      href={url}
    >
      <img
        src={
          name == "Official Site"
            ? globe
            : `https://simpleicons.org/icons/${name.toLowerCase().replace(" ", "")}.svg`
        }
        alt=""
        className="inline size-5 align-middle dark:invert-100"
      />
      <span className="align-middle">{name}</span>
      {isEditing ? children : children}
    </a>
  );
}
