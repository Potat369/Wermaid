import Avatar from "./Avatar.tsx";
import { getColorFromRating } from "../utils.ts";
import { useContext } from "react";
import { UserContext } from "../contexts.ts";
import { GameRating } from "../types.ts";
import { Link } from "react-router";
import TimeAgo from "javascript-time-ago";

export default function Rating({ rating }: { rating: GameRating }) {
  const { user } = useContext(UserContext);

  console.log(rating);

  return (
    <div className="flex rounded-md bg-zinc-100 p-2 *:p-2 dark:bg-zinc-900">
      <div className="w-full space-y-2">
        <div className="flex justify-between">
          <Link
            to={`/profile/${rating.username}`}
            className="flex items-center space-x-2"
          >
            <Avatar className="size-6" />
            <span>{rating.displayName}</span>
            <span
              style={{ backgroundColor: getColorFromRating(rating.rating) }}
              className="flex aspect-square h-6 items-center rounded-full p-2 font-medium text-zinc-950"
            >
              {rating.rating}
            </span>
            <span className="text-zinc-500">
              {new TimeAgo("en_US").format(new Date(rating.date))}
            </span>
          </Link>
          {user && (
            <div className="flex items-center space-x-2">
              {user.role.includes("ADMIN") && (
                <button
                  type="button"
                  className="cursor-pointer p-2 text-zinc-500 transition-colors hover:text-current"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
                  </svg>
                </button>
              )}
            </div>
          )}
        </div>
        {rating.comment && <div className="text-balance">{rating.comment}</div>}
      </div>
    </div>
  );
}
