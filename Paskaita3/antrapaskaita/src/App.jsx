import { useState } from "react";
import "./App.css";

function App() {
  let [getCount, setCount] = useState(0);
  let [getImg, setImg] = useState(
    "https://cdn-icons-png.flaticon.com/512/1047/1047711.png"
  );
  let [getColor, setColor] = useState("light dark");
  let [getUpgradeLevel, setUpgradeLevel] = useState(1);

  function addCount() {
    setCount(getCount + getUpgradeLevel);
  }

  function changeImage(cost) {
    if (getCount >= cost) {
      setCount(getCount - cost);
      setImg(
        "https://cdn-icons-png.freepik.com/256/164/164659.png?semt=ais_hybrid"
      );
    } else {
      alert("You don't have enough points");
    }
  }

  function changeBgColor(cost) {
    if (getCount >= cost) {
      setCount(getCount - cost);
      setColor("#696969");
    } else {
      alert("You don't have enough points");
    }
  }

  function Upgrade(level, cost) {
    if (getCount >= cost) {
      setCount(getCount - cost);
      setUpgradeLevel(level);
    } else {
      alert("You don't have enough points");
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div style={{ backgroundColor: getColor }} className="cookiebox">
        <div>
          <img
            className={"cookiepng"}
            onClick={addCount}
            src={getImg}
            alt="cookie"
          />
          <h1>Points: {getCount}</h1>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="box" onClick={() => Upgrade(2, 50)}>
          <h2>2 points per click</h2>
          <h3>Price: 50$</h3>
        </div>
        <div className="box" onClick={() => Upgrade(3, 100)}>
          <h2>3 points per click</h2>
          <h3>Price: 100$</h3>
        </div>
        <div className="box" onClick={() => changeImage(50)}>
          <h2>Change cookie image</h2>
          <h3>Price: 50$</h3>
        </div>
        <div className="box" onClick={() => changeBgColor(50)}>
          <h2>Change bg color</h2>
          <h3>Price: 50$</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
