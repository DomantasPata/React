import { useState } from "react";
import "./App.css";

function App() {
  // const [choice, setChoice] = useState("");

  // const [compChoice, setCompChoice] = useState("");

  // const [compPoints, setCompPoints] = useState(0);

  // const [playerPoints, setPlayerPoints] = useState(0);

  // // const Choices = ["✌️", "🤚", "✊"];

  // function Computer() {
  //   const Choices = ["✌️", "🤚", "✊"];
  //   const randomIcon = Choices[Math.floor(Math.random() * Choices.length)];
  //   setCompChoice(randomIcon);
  // }

  // function Player(value) {
  //   setChoice(value);
  // }

  // return (
  //   <div>
  //     <h3>Computer points: {compPoints}</h3>
  //     <h3>Player points: {playerPoints}</h3>
  //     <h2 onClick={() => Computer()}>Computer symbol:</h2>
  //     <h2>Player symbol:</h2>
  //     <button>Play</button>

  //     <div style={{ paddingTop: "100px" }}>
  //       <button onClick={() => Player("✌️")}>✌️</button>
  //       <button onClick={() => Player("🤚")}>🤚</button>
  //       <button onClick={() => Player("✊")}>✊</button>
  //     </div>
  //   </div>
  const [playerSymbol, setPlayerSymbol] = useState("");
  const [computerSymbol, setComputerSymbol] = useState("");

  const [playerPoints, setPlayerPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);

  function playGame() {
    const symbols = ["🤚", "👊", "✌️"];
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];

    ///Player wins
    if (playerSymbol === "🤚" && randomSymbol === "👊") {
      setPlayerPoints(playerPoints + 1);
    }
    if (playerSymbol === "✌️" && randomSymbol === "🤚") {
      setPlayerPoints(playerPoints + 1);
    }
    if (playerSymbol === "👊" && randomSymbol === "🤚") {
      setPlayerPoints(playerPoints + 1);
    }

    //Computer wins

    if (playerSymbol === "🤚" && randomSymbol === "👊") {
      setComputerPoints(computerPoints + 1);
    }
    if (playerSymbol === "✌️" && randomSymbol === "🤚") {
      setComputerPoints(computerPoints + 1);
    }
    if (playerSymbol === "👊" && randomSymbol === "🤚") {
      setComputerPoints(computerPoints + 1);
    }
  }

  return (
    <div>
      <div>
        <h1>Player Selected</h1>
        <div>{playerSymbol}</div>
      </div>
      <div onClick={() => setPlayerSymbol("🤚")}>🤚</div>
      <div onClick={() => setPlayerSymbol("👊")}>👊</div>
      <div onClick={() => setPlayerSymbol("✌️")}>✌️</div>
    </div>
  );
}

export default App;
