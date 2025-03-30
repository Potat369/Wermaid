import { useEffect, useState } from "react";
import type { GamePage } from "../types.ts";
import GameCard from "./GameCard.tsx";

export default function Section({ genre }: { genre: string }) {
  const [games, setGames] = useState<Array<GamePage>>();

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
        {games?.map((value) => <GameCard key={value.id} game={value} />)}
      </div>
    </div>
  );
}
