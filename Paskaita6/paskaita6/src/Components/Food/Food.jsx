import { useState } from "react";

export default function Food() {
  const [getFood, setFood] = useState(["❓"]);

  const food = ["🧅", "🍚", "🍧", "🍖", "🍟"];

  function randomFood() {
    const rnd = Math.floor(Math.random() * food.length);
    setFood(food[rnd]);
  }
  return (
    <div style={{ paddingRight: "10px" }}>
      <div style={{ fontSize: "120px" }}>{getFood}</div>
      <button style={{ cursor: "pointer" }} onClick={randomFood}>
        Generate random food
      </button>
    </div>
  );
}
