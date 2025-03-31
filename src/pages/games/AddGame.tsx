import { FormEvent, useState } from "react";
import { fetchWithToken } from "../../utils.ts";

export default function AddGame() {
  const [genresCount, setGenresCount] = useState(1);
  const [linksCount, setLinksCount] = useState(1);

  function submit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    const formData = new FormData(ev.currentTarget);
    const data: { [k: string]: any } = Object.fromEntries(formData);

    data["genres"] = (
      Array.from(document.getElementsByClassName("genre")) as HTMLInputElement[]
    ).map((value) => value.value);

    data["links"] = (
      Array.from(document.getElementsByClassName("link")) as HTMLInputElement[]
    ).map((value) => value.value);

    fetchWithToken(import.meta.env.VITE_SERVER_URL + "api/v1/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  return (
    <>
      <main className="container mx-auto">
        <form onSubmit={submit} className="space-y-1.5">
          <fieldset className="inline-block rounded bg-zinc-100 ring ring-zinc-400 dark:bg-zinc-900 dark:ring-zinc-600">
            <legend className="ml-1.5 bg-zinc-50 text-zinc-700 dark:bg-zinc-950 dark:text-zinc-300">
              Name
            </legend>
            <input
              className="md field-sizing-content max-w-full min-w-96 p-1.5 pt-0 focus:outline-0"
              id="name"
              name="name"
              type="text"
            />
          </fieldset>
          <br />
          <fieldset className="inline-block rounded bg-zinc-100 ring ring-zinc-400 dark:bg-zinc-900 dark:ring-zinc-600">
            <legend className="ml-1.5 bg-zinc-50 text-zinc-700 dark:bg-zinc-950 dark:text-zinc-300">
              Description
            </legend>
            <textarea
              className="field-sizing-content max-w-full min-w-96 p-1.5 pt-0 focus:outline-0"
              id="description"
              name="description"
            />
          </fieldset>
          <br />
          <fieldset className="inline-block rounded bg-zinc-100 ring ring-zinc-400 dark:bg-zinc-900 dark:ring-zinc-600">
            <legend className="ml-1.5 bg-zinc-50 text-zinc-700 dark:bg-zinc-950 dark:text-zinc-300">
              Release Date
            </legend>
            <input
              className="field-sizing-content max-w-full min-w-96 p-1.5 pt-0 focus:outline-0 dark:[color-scheme:dark]"
              id="release_date"
              name="releaseDate"
              type="date"
            />
          </fieldset>
          <br />
          <fieldset className="inline-block rounded bg-zinc-100 ring ring-zinc-400 dark:bg-zinc-900 dark:ring-zinc-600">
            <legend className="ml-1.5 bg-zinc-50 text-zinc-700 dark:bg-zinc-950 dark:text-zinc-300">
              Picture Url
            </legend>
            <input
              className="field-sizing-content max-w-full min-w-96 p-1.5 pt-0 focus:outline-0 dark:[color-scheme:dark]"
              id="picture_rrl"
              name="pictureUrl"
              type="text"
            />
          </fieldset>
          <br />
          <fieldset className="inline-block rounded bg-zinc-100 ring ring-zinc-400 dark:bg-zinc-900 dark:ring-zinc-600">
            <legend className="ml-1.5 space-x-1.5 bg-zinc-50 text-zinc-700 dark:bg-zinc-950 dark:text-zinc-300">
              <span>Links</span>
              <button
                type="button"
                className="rounded-md p-1.5"
                onClick={() => setLinksCount(linksCount + 1)}
              >
                +
              </button>
              <button
                type="button"
                className="rounded-md p-1.5"
                onClick={() => setLinksCount(linksCount - 1)}
              >
                -
              </button>
            </legend>
            {[...Array(linksCount)].map((_, index) => (
              <input
                key={index}
                className="link block field-sizing-content max-w-full min-w-96 p-1.5 pt-0 focus:outline-0"
                type="text"
                placeholder="Link"
              />
            ))}
          </fieldset>
          <br />
          <fieldset className="inline-block rounded bg-zinc-100 ring ring-zinc-400 dark:bg-zinc-900 dark:ring-zinc-600">
            <legend className="ml-1.5 space-x-1.5 bg-zinc-50 text-zinc-700 dark:bg-zinc-950 dark:text-zinc-300">
              <span>Genres</span>
              <button
                type="button"
                className="rounded-md p-1.5"
                onClick={() => setGenresCount(genresCount + 1)}
              >
                +
              </button>
              <button
                type="button"
                className="rounded-md p-1.5"
                onClick={() => setGenresCount(genresCount - 1)}
              >
                -
              </button>
            </legend>
            {[...Array(genresCount)].map((_, index) => (
              <input
                key={index}
                className="genre block field-sizing-content max-w-full min-w-96 p-1.5 pt-0 focus:outline-0"
                type="text"
                placeholder="Genre"
              />
            ))}
          </fieldset>
          <br />
          <input
            type="submit"
            value="Submit"
            className="inline-block cursor-pointer rounded-md bg-zinc-100 p-1.5 ring-1 ring-zinc-400 transition-shadow hover:ring-zinc-600 dark:bg-zinc-900 dark:ring-zinc-600 dark:hover:ring-zinc-400"
          />
        </form>
      </main>
    </>
  );
}
