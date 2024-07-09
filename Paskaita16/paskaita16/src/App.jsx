import "./App.css";
import { useState, useMemo } from "react";
import TodosContainer from "./Components/TodosContainer/TodosContainer";

function App() {
  const [number, setNumber] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  function hardCalculation() {
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i;
    }
    return result + multiplier;
  }

  const hardCalculationResult = useMemo(hardCalculation, [multiplier]);

  return (
    <div>
      <TodosContainer />
      <h5>{number}</h5>
      <button onClick={() => setNumber(number + 1)}>Increment</button>
      <button onClick={() => setMultiplier(multiplier + 1)}>
        Increase multiplier
      </button>
      <p>{hardCalculationResult}</p>
    </div>
  );
}

export default App;
