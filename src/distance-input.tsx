export default function Distance({
  setDistance,
}: {
  setDistance: (value: number) => void;
}) {
  return (
    <div>
      <input
        type="number"
        id="distance-input"
        placeholder="Enter distance here"
        onChange={(e) => setDistance(parseFloat(e.target.value))}
      />
    </div>
  );
}
