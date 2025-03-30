import { getColorFromRating } from "../utils.ts";
import { Link } from "react-router";
import { Game } from "../types.ts";

export default function GameCard({ game }: { game: Game }) {
  return (
    <Link to={"/game/" + game.slug} className="bg-zinc-100 dark:bg-zinc-900">
      <div
        className="rounded-t-md text-center font-bold text-zinc-950"
        style={{
          backgroundColor: getColorFromRating(game.rating),
        }}
      >
        {game.rating == 0 ? "-" : game.rating.toFixed(1)}
      </div>
      <div className="relative size-28 overflow-hidden rounded-b-md sm:size-32">
        <img
          src={game.pictureUrl}
          alt={game.name + " Picture"}
          className="size-full object-cover"
        />
        <div className="absolute z-10 w-full -translate-y-6 rounded-b-md bg-zinc-900/75 p-1 text-xs text-nowrap text-zinc-50 backdrop-blur-xs sm:text-sm">
          {game.name}
        </div>
      </div>
    </Link>
  );
}
