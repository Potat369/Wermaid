import { useEffect, useState } from "react";
import type { Game } from "../types.ts";

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
    <div>
      {games && games.map((game) => <div key={game.id}>{game.slug}</div>)}
    </div>
  );
}
