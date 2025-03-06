import { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Game } from "../../types.ts";
import Ratings from "../../components/Ratings.tsx";

export default function Game() {
  const [game, setGame] = useState<Game>();
  const [error, setError] = useState();
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await fetch(import.meta.env.VITE_SERVER_URL + "api/v1/games/slug/" + slug)
        .then((response) => response.json())
        .then((value) => setGame(value))
        .catch((err) => setError(err));
    };

    fetchData();
  }, [slug]);

  function submit(ev: FormEvent<HTMLFormElement>) {
    if (game != null) {
      const formData = new FormData(ev.currentTarget);
      const data = Object.fromEntries(formData);

      fetch(
        import.meta.env.VITE_SERVER_URL +
          "api/v1/games/id/" +
          game.id +
          "/rate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );
    }
  }

  return (
    <>
      {game && <div>{game.name}</div>}
      {error && <div>{error}</div>}
      {error == null && game == null && <div>Loading...</div>}
      <br />
      <div>
        Rate
        <form onSubmit={submit}>
          <label htmlFor="comment">Comment</label>
          <br />
          <input name="comment" id="comment" type="text" />
          <br />
          <label htmlFor="rating">Rating</label>
          <br />
          <input name="rating" id="rating" type="number" max={5} min={1} />
          <br />
          <input type="submit" />
        </form>
      </div>
      <br />
      {game && <Ratings gameId={game.id} />}
    </>
  );
}
