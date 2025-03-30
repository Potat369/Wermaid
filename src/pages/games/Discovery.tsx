import Section from "../../components/Section.tsx";

const genres = ["Shooter", "MOBA", "Strategy", "Horror"];

export default function Discovery() {
  return (
    <>
      <main className="relative container mx-auto">
        <div className="absolute -left-[50%] -z-50 size-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -top-[50%] -z-50 h-300 w-full rounded-full bg-purple-500/5 blur-3xl" />
        <div className="absolute -z-50 size-full">
          <div className="flex justify-center">
            <div className="-top-[50%] flex h-150 w-[50%] rounded-full bg-pink-500/5 blur-3xl" />
          </div>
        </div>
        {genres.map((genre) => (
          <Section key={genre} genre={genre} />
        ))}
      </main>
    </>
  );
}
