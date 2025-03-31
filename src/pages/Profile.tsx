import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts.ts";
import Avatar from "../components/Avatar.tsx";
import TimeAgo from "javascript-time-ago";
import { UserRatingType } from "../types.ts";
import { fetchWithToken } from "../utils.ts";
import UserRating from "../components/UserRating.tsx";

export default function Profile() {
  const { user, setUser } = useContext(UserContext);
  const [ratings, setRatings] = useState<Array<UserRatingType>>();

  useEffect(() => {
    user &&
      fetchWithToken(
        import.meta.env.VITE_SERVER_URL + "api/v1/ratings/user/" + user!.id,
      )
        .then((response) => response.json())
        .then((value) => setRatings(value));
  }, [user]);

  return (
    <>
      {user != null && (
        <main className="container mx-auto mb-160 *:p-2">
          <section className="my-8 flex flex-col items-center">
            <Avatar className="size-28" />
            <div className="mt-2 text-2xl">{user.displayName}</div>
            <div>@{user.username}</div>
            {user.registrationDate && (
              <div>
                Joined{" "}
                {new TimeAgo("en_US").format(new Date(user.registrationDate))}
              </div>
            )}
            <button
              type="button"
              className="mt-8 inline-block cursor-pointer rounded-md border bg-zinc-950 p-2 text-zinc-50 transition hover:bg-current/0 hover:text-current has-hover:blur-xs dark:border-zinc-50 dark:bg-zinc-50 dark:text-zinc-950"
              onClick={(ev) => {
                ev.preventDefault();
                localStorage.removeItem("token");
                setUser(undefined!);
              }}
            >
              Logout
            </button>
          </section>
          <section className="mb-16 gap-4 space-y-4 *:break-inside-avoid sm:columns-2 2xl:columns-3">
            {ratings &&
              ratings.map((value) => (
                <UserRating rating={value} key={value.id} />
              ))}
          </section>
        </main>
      )}
    </>
  );
}
