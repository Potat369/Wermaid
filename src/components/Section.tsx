import { useEffect, useState } from "react";
import type { Game } from "../types.ts";
import { Link } from "react-router";
import { getColorFromRating } from "../utils.ts";

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
    <div className="p-2">
      <h2 className="py-2 sm:text-xl">Best in {genre}</h2>
      <div className="scrollbar flex space-x-2 overflow-x-auto sm:space-x-4">
        {games?.map((value) => (
          <Link
            key={value.id}
            to={"/game/" + value.slug}
            className="bg-zinc-100 dark:bg-zinc-900"
          >
            <div
              className="rounded-t-md text-center font-bold text-zinc-950"
              style={{
                backgroundColor: getColorFromRating(value.rating),
              }}
            >
              {value.rating == 0 ? "-" : value.rating.toFixed(1)}
            </div>
            <div className="relative size-28 overflow-hidden rounded-b-md sm:size-32">
              <img
                src={value.pictureUrl}
                alt={value.name + " Picture"}
                className="size-full object-cover"
              />
              <div className="absolute z-10 w-full -translate-y-6 rounded-b-md bg-zinc-900/75 p-1 text-xs text-nowrap text-zinc-50 backdrop-blur-xs sm:text-sm">
                {value.name}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
