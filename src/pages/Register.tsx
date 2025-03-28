import { Link, useNavigate } from "react-router";
import { FormEvent } from "react";

export default function Register() {
  const navigate = useNavigate();

  function submit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const formData = new FormData(ev.currentTarget);
    const data = Object.fromEntries(formData);

    fetch(import.meta.env.VITE_SERVER_URL + "auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.ok && navigate("/login"));
  }

  return (
    <>
      <main className="bg text-center">
        <h1 className="mt-24 text-3xl">Register</h1>
        <h2 className="text-zinc-500">
          Or{" "}
          <Link to="/login" className="text-blue-500">
            login
          </Link>
        </h2>
        <div>
          <form onSubmit={submit} className="mx-auto inline-block text-left">
            <div className="my-4">
              <label htmlFor="username">Username:</label>
              <div className="rounded-md outline outline-zinc-500/50 focus-within:outline-current/50">
                <input
                  className="peer w-46 bg-zinc-100 p-2 focus:outline-0 dark:bg-zinc-900"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="cooluser137"
                  autoFocus
                />
                <div className="float-left inline-block border-r border-zinc-500/50 bg-zinc-200 p-2 peer-focus:border-current/50 dark:bg-zinc-800">
                  @
                </div>
              </div>
            </div>
            <div className="my-4">
              <label htmlFor="display_name">Display Name:</label>
              <input
                className="block rounded-md bg-zinc-100 p-2 outline outline-zinc-500/50 focus:outline-current/50 dark:bg-zinc-900"
                type="text"
                name="displayName"
                id="display_name"
                placeholder="Very Cool User"
              />
            </div>
            <div className="my-4">
              <label htmlFor="password">Password:</label>
              <input
                className="block rounded-md bg-zinc-100 p-2 outline outline-zinc-500/50 focus:outline-current/50 dark:bg-zinc-900"
                type="password"
                name="password"
                id="password"
              />
            </div>
            <input
              className="mx-auto block cursor-pointer rounded-md border bg-zinc-950 p-2 text-zinc-50 transition hover:bg-current/0 hover:text-current has-hover:blur-xs dark:border-zinc-50 dark:bg-zinc-50 dark:text-zinc-950"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </main>
    </>
  );
}
