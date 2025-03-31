import { useParams } from "react-router";
import { FormEvent, useContext, useEffect, useState } from "react";
import { GamePage, GameRatingType } from "../../types.ts";
import GameRating from "../../components/GameRating.tsx";
import { UserContext } from "../../contexts.ts";
import { fetchWithToken, getColorFromRating } from "../../utils.ts";
import SiteLink from "../../components/SiteLink.tsx";

export default function Game() {
  const { slug } = useParams();
  const [game, setGame] = useState<GamePage>();
  const [ratings, setRatings] = useState<Array<GameRatingType>>();
  const { user } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(import.meta.env.VITE_SERVER_URL + "api/v1/games/slug/" + slug)
        .then((response) => response.json())
        .then((value: GamePage) => {
          setGame(value);
          fetch(
            import.meta.env.VITE_SERVER_URL + "api/v1/ratings/game/" + value.id,
          )
            .then((response) => response.json())
            .then((value1) => setRatings(value1));
        });
    };

    fetchData();
  }, [slug]);

  function rate(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const formData = new FormData(ev.currentTarget);
    const object = Object.fromEntries(formData);

    fetchWithToken(
      import.meta.env.VITE_SERVER_URL + "api/v1/games/id/" + game!.id + "/rate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(object),
      },
    ).then((response) => response.ok && window.location.reload());
  }

  function edit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const formData = new FormData(ev.currentTarget);
    const object: { [key: string]: any } = Object.fromEntries(formData);

    fetchWithToken(
      import.meta.env.VITE_SERVER_URL + "api/v1/games/id/" + game!.id,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(object),
      },
    ).then((response) => response.ok && window.location.reload());
  }

  return (
    <>
      <main className="mx-auto mt-4 max-w-250 space-y-8 p-2">
        <form onSubmit={edit} className="@md space-y-2">
          <div className="justify-center">
            <div
              className="rounded-t-md p-2 text-center font-bold text-zinc-950"
              style={
                game && {
                  backgroundColor: getColorFromRating(game.rating),
                }
              }
            >
              {game && (game.rating == 0 ? "-" : game.rating.toFixed(1))}
            </div>
            <div className="relative flex min-h-42 items-center justify-center overflow-hidden rounded-b-md bg-zinc-100 dark:bg-zinc-900">
              {isEditing && (
                <input
                  type="text"
                  name="pictureUrl"
                  defaultValue={game && game.pictureUrl}
                  className="absolute z-50 w-full bg-zinc-200 p-2 text-current outline-0 dark:bg-zinc-800"
                />
              )}
              <img src={game && game.pictureUrl} alt="Game Picture" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <div>
                <div className="space-x-2">
                  <input
                    type="text"
                    name="name"
                    defaultValue={game && game.name}
                    readOnly={!isEditing}
                    className="field-sizing-content text-xl font-semibold outline-0"
                  />
                  <input
                    type="text"
                    name="slug"
                    defaultValue={game && game.slug}
                    readOnly={!isEditing}
                    className="field-sizing-content text-sm text-zinc-500 outline-0"
                  />
                </div>
                <input
                  type="date"
                  name="releaseDate"
                  className="outline-0"
                  readOnly={!isEditing}
                  defaultValue={game && game.releaseDate.substring(0, 10)}
                />
              </div>
              {user && (
                <div>
                  {user.role.includes("ADMIN") && (
                    <>
                      {isEditing && (
                        <button
                          type="submit"
                          className="cursor-pointer p-2 text-zinc-500 transition-colors hover:text-current"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            fill="currentColor"
                            className="size-4"
                          >
                            <path d="M288 109.3L288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-242.7-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352l128 0c0 35.3 28.7 64 64 64s64-28.7 64-64l128 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
                          </svg>
                        </button>
                      )}
                      <button
                        type="button"
                        className="cursor-pointer p-2 text-zinc-500 transition-colors hover:text-current"
                        onClick={() => setIsEditing(!isEditing)}
                      >
                        {isEditing ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            fill="currentColor"
                            className="size-4"
                          >
                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            fill="currentColor"
                            className="size-4"
                          >
                            <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                          </svg>
                        )}
                      </button>
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
                    </>
                  )}
                  <button
                    className="cursor-pointer p-2 text-yellow-500 transition-colors hover:text-yellow-700 dark:hover:text-yellow-300"
                    type="button"
                    onClick={() =>
                      document
                        .getElementById("rating")!
                        .classList.remove("hidden")
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      className="size-4"
                      fill="currentColor"
                    >
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
            <textarea
              readOnly={!isEditing}
              name="description"
              defaultValue={game && game.description}
              className="field-sizing-content resize-none text-zinc-800 outline-0 dark:text-zinc-200"
            />
            <div className="space-y-5 *:space-x-2">
              <div>
                <span>Genre(s):</span>
                {game &&
                  game.genres.map((value, index) => (
                    <input
                      type="text"
                      key={index}
                      defaultValue={value}
                      readOnly={!isEditing}
                      className="field-sizing-content rounded-md bg-zinc-200 p-2 text-nowrap outline-0 dark:bg-zinc-800"
                    />
                  ))}
              </div>
              <div>
                <span>Link(s):</span>
                {game &&
                  game.links.map((value, index) => (
                    <SiteLink
                      key={index}
                      url={value}
                      isEditing={isEditing}
                    ></SiteLink>
                  ))}
              </div>
            </div>
          </div>
        </form>
        <section className="mb-16 gap-4 space-y-4 *:break-inside-avoid sm:columns-2">
          {ratings &&
            ratings.map((value) => (
              <GameRating rating={value} key={value.id} />
            ))}
        </section>
      </main>
      <form
        className="fixed inset-0 z-40 flex hidden items-center justify-center"
        onSubmit={rate}
        id="rating"
      >
        <div className="z-50 space-y-4 rounded-md bg-zinc-100 p-2 dark:bg-zinc-900">
          <div>
            <div className="text-xl">Rate this game</div>
            <div className="text-sm text-current/75">
              Tell others what you think.
            </div>
          </div>
          <div className="flex-row items-center justify-center text-center">
            <div id="rate">1</div>
            <div className="block">
              <input
                onInput={(ev) =>
                  (document.getElementById("rate")!.innerHTML =
                    ev.currentTarget.value)
                }
                type="range"
                name="rating"
                min={1}
                max={5}
                className="text-center"
              />
            </div>
            <textarea
              placeholder="Describe your experience (Optional)"
              name="comment"
              className="field-sizing-content w-72 resize-none rounded-md bg-zinc-200 p-2 outline-0 sm:w-96 dark:bg-zinc-800"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="cursor-pointer rounded-md border bg-zinc-950 p-2 text-zinc-50 transition hover:bg-current/0 hover:text-current has-hover:blur-xs dark:border-zinc-50 dark:bg-zinc-50 dark:text-zinc-950"
            >
              Rate
            </button>
          </div>
        </div>
        <div
          onClick={() =>
            document.getElementById("rating")!.classList.add("hidden")
          }
          className="absolute size-full bg-zinc-950/50 backdrop-blur-xs"
        />
      </form>
    </>
  );
}
