import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <main className="">
        <section className="relative overflow-x-clip text-center">
          <div className="absolute top-48 left-[40%] -z-50 size-96 -translate-x-48 -translate-y-48 animate-pulse bg-red-500/10 blur-3xl"></div>
          <div className="absolute top-48 left-[60%] -z-50 size-96 -translate-x-48 -translate-y-48 animate-pulse bg-green-500/10 blur-3xl"></div>
          <div className="absolute top-32 left-[50%] -z-50 size-96 -translate-x-48 -translate-y-48 animate-pulse bg-blue-500/10 blur-3xl"></div>
          <div className="absolute top-64 left-[50%] -z-50 size-96 -translate-x-48 -translate-y-48 animate-pulse bg-yellow-500/10 blur-3xl"></div>
          <div className="mx-auto space-y-4 py-28 font-medium">
            <h1 className="text-6xl text-current/95 sm:text-7xl xl:text-8xl">
              Wermaid
            </h1>
            <h2 className="text-xl text-current/80 sm:text-2xl">
              Community-Driven
              <br />
              Game Review Website
            </h2>
            <Link
              to="discovery"
              className="mt-8 inline-block rounded-md border bg-zinc-950 p-2 text-zinc-50 transition hover:bg-current/0 hover:text-current has-hover:blur-xs dark:border-zinc-50 dark:bg-zinc-50 dark:text-zinc-950"
            >
              Get Started!
            </Link>
          </div>
        </section>
        <section className="relative my-28">
          <div className="absolute -z-50 h-full w-full bg-gray-800/5 blur-2xl"></div>
          <div className="container mx-auto p-2"></div>
        </section>
      </main>
    </>
  );
}
