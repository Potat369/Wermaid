import { useContext } from "react";
import { UserContext } from "../contexts.ts";

export default function Profile() {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      {user != null && (
        <main className="relative container mx-auto">
          <div className="absolute -z-10 h-36 w-full bg-zinc-200 sm:h-42 md:h-48"></div>
          <div className="pl-8 sm:pt-[8rem] md:pt-36">
            <div className="left-24 flex items-center space-x-2">
              <div className="size-24 rounded-full" />
              <div className="">
                <div className="text-3xl font-semibold">{user.displayName}</div>
                <div className="font-medium text-zinc-800">
                  @{user.username}
                </div>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={(ev) => {
              ev.preventDefault();
              localStorage.removeItem("token");
              setUser(undefined!);
            }}
          >
            Logout
          </button>
        </main>
      )}
    </>
  );
}
