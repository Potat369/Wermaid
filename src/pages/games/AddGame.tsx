import { FormEvent } from "react";

export default function AddGame() {
  function submit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    const formData = new FormData(ev.currentTarget);
    const data = Object.fromEntries(formData);

    fetch(import.meta.env.VITE_SERVER_URL + "api/v1/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  return (
    <>
      <form onSubmit={submit}>
        <label htmlFor="name">Name</label>
        <br />
        <input id="name" name="name" type="text" placeholder="Valorant" />
        <br />
        <label htmlFor="description">Description</label>
        <br />
        <input
          id="description"
          name="description"
          type="text"
          placeholder="Very cool game"
        />
        <br />
        <label htmlFor="genre">Genre</label>
        <br />
        <input id="genre" name="genre" type="text" placeholder="Valorant" />
        <br />
        <label htmlFor="release_date">Release Date</label>
        <br />
        <input id="release_date" name="releaseDate" type="date" />
        <br />
        <label htmlFor="picture_url">Picture Url</label>
        <br />
        <input
          id="picture_url"
          name="pictureUrl"
          type="url"
          placeholder="somelink"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
