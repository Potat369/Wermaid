export default function IncrementController({
  value,
  setValue,
  className,
}: {
  value: number;
  setValue: (value: number) => void;
  className?: string;
}) {
  return (
    <>
      <button
        type="button"
        className={className}
        onClick={() => setValue(value + 1)}
      >
        +
      </button>
      <button
        type="button"
        className={className}
        onClick={() => setValue(value - 1)}
      >
        -
      </button>
    </>
  );
}
