export default function Speed({
  setSpeed,
}: {
  setSpeed: (value: number) => void;
}) {
  return (
    <div>
      <input
        type="number"
        id="speed-input"
        placeholder="Enter speed here"
        onChange={(e) => setSpeed(parseFloat(e.target.value))}
      />
    </div>
  );
}
