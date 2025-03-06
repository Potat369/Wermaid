import { useEffect, useState } from "react";
import type { Rating } from "../types.ts";

export default function Ratings({ gameId }: { gameId: string }) {
  const [ratings, setRatings] = useState<Array<Rating>>();

  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        import.meta.env.VITE_SERVER_URL + "api/v1/ratings/game/" + gameId,
      )
        .then((response) => response.json())
        .then((value) => setRatings(value));
    };

    fetchData();
  }, [gameId]);

  console.log(ratings);

  return (
    <>
      {ratings &&
        ratings.map((rating) => (
          <div key={rating.gameId}>
            {rating.comment} {rating.rating}
          </div>
        ))}
    </>
  );
}
