import { useEffect, useState } from "react";
import type { Game } from "../types.ts";
import { Link } from "react-router";

export default function Section({ genre }: { genre: string }) {
  const [games, setGames] = useState<Array<Game>>();

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        import.meta.env.VITE_SERVER_URL + "api/v1/games?page=0&genre=" + genre,
      )
        .then((response) => response.json())
        .then((data) => setGames(data));
    };

    fetchData();
  }, [genre]);

  return (
    <div className="border-y border-zinc-400 bg-zinc-200/25 p-2 dark:border-zinc-700 dark:bg-zinc-800/25">
      <div className="text-sm sm:text-base md:text-xl">Best in {genre}</div>
      <div className="flex space-x-2 overflow-x-auto">
        {games &&
          games.map((game) => (
            <Link
              key={game.id}
              to={`${game.slug}`}
              className="group rounded-md bg-zinc-200/50 p-2 inset-ring-1 inset-ring-zinc-400 transition-shadow outline-none hover:inset-ring-zinc-500 focus-visible:inset-ring-zinc-500 dark:bg-zinc-800/50 dark:inset-ring-zinc-700"
            >
              <div className="size-24 overflow-hidden rounded-md bg-zinc-400 ring-1 ring-zinc-400 group-hover:ring-zinc-500 group-focus-visible:ring-zinc-500 sm:size-28 md:size-32 dark:bg-zinc-700 dark:ring-zinc-700">
                {game.pictureUrl && (
                  <img
                    src={game.pictureUrl}
                    alt={game.name}
                    className="size-full object-cover"
                  />
                )}
              </div>
              <div className="line-clamp-1 text-xs text-balance text-ellipsis contain-inline-size sm:text-sm md:text-base">
                {game.name}
              </div>
              <div className="text-yellow-500"> ★</div>
            </Link>
          ))}
      </div>
    </div>
  );
}
