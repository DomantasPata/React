import { useState } from "react";

export default function Animal() {
  const [getAnimal, setAnimal] = useState(["❓"]);

  const emoji = ["🐶", "🐱", "🐭", "🐭", "🐭"];

  function random() {
    const rnd = Math.floor(Math.random() * emoji.length);
    setAnimal(emoji[rnd]);
  }

  return (
    <div style={{ paddingRight: "10px" }}>
      <div style={{ fontSize: "120px" }}>{getAnimal}</div>
      <button style={{ cursor: "pointer" }} onClick={random}>
        Generate random animal
      </button>
    </div>
  );
}
