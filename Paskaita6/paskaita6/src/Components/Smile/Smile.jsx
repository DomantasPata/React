import { useState } from "react";

export default function Smile() {
  const [getSmile, setSmile] = useState(["❓"]);

  const emoji = ["😀", "😉", "😋", "🤪", "🤗"];

  function setEmoji() {
    const rnd = Math.floor(Math.random() * emoji.length);
    setSmile(emoji[rnd]);
  }

  return (
    <div style={{ paddingRight: "10px", paddingLeft: "10px" }}>
      <div style={{ fontSize: "120px" }}>{getSmile}</div>
      <button style={{ cursor: "pointer" }} onClick={setEmoji}>
        Generate random smile
      </button>
    </div>
  );
}
