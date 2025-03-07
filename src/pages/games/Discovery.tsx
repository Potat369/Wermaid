import Section from "../../components/Section.tsx";

const genres = ["Tactical+Shoter"];

export default function Discovery() {
  return (
    <>
      <main className="container mx-auto space-y-6 border-zinc-400 bg-zinc-100/50 py-3 sm:border-x dark:border-zinc-700 dark:bg-zinc-900/50">
        {genres.map((genre) => (
          <Section key={genre} genre={genre} />
        ))}
      </main>
    </>
  );
}
