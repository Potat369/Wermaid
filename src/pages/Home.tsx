import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <main className="mx-auto text-center">
        <h1 className="animate-fade-in mt-36 text-4xl sm:text-5xl md:text-6xl">
          Wermaid
        </h1>
        <h3 className="animate-fade-in animate-delay-600 mt-2 text-zinc-500 opacity-0 sm:text-xl md:text-2xl">
          <span className="hover:font-black">Community</span>
          <span className="hover:font-thin">-</span>
          <span className="hover:font-extralight">driven </span>
          <span className="hover:font-medium">games </span>
          <span className="hover:font-mono">review </span>
          <span className="hover:font-light">website</span>
        </h3>
        <Link
          to="/discovery"
          className="animate-fade-in animate-delay-1200 my-48 inline-block rounded-md bg-zinc-100/50 p-2 opacity-0 ring-1 ring-zinc-400 backdrop-blur-sm transition-shadow hover:ring-zinc-500 dark:bg-zinc-900/50 dark:ring-zinc-700"
        >
          Get Started
        </Link>
      </main>
    </>
  );
}
