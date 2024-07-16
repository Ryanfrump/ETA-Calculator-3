import { useState } from "react";
import Distance from "./distance-input";
import Speed from "./speed-input";
import "./App.css";

function App() {
  const [distance, setDistance] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(0);
  const [eta, setEta] = useState<number | null>(null);

  const calculateEta = () => {
    if (speed > 0) {
      setEta(distance / speed);
    } else {
      setEta(null);
    }
  };

  return (
    <div className="container">
      <Distance setDistance={setDistance} />
      <Speed setSpeed={setSpeed} />
      <button onClick={calculateEta}>Calculate ETA</button>
      {eta !== null && (
        <div className="result">Estimated Time of Arrival: {eta} hours</div>
      )}
    </div>
  );
}

export default App;
