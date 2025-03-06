import Section from "../../components/Section.tsx";

const genres = ["Tactical+Shoter"];
export default function Discovery() {
  return (
    <>
      {genres.map((genre) => (
        <Section key={genre} genre={genre} />
      ))}
    </>
  );
}
