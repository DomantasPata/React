import { useState } from "react";
import style from "./LoadingBar.module.css";

export default function LoadingBar() {
  const [getPercent, setPercent] = useState(20);

  function PlusPercent() {
    setPercent((getPercent) => Math.min(getPercent + 5, 100));
  }

  function MinusPercent() {
    setPercent((getPercent) => Math.max(getPercent - 5, 0));
  }

  return (
    <div>
      <div className={style.box}>
        <div style={{ width: `${getPercent}%` }} className={style.box2}></div>
      </div>
      <button onClick={PlusPercent}>Plus</button>
      <button onClick={MinusPercent}>Minus</button>
    </div>
  );
}
