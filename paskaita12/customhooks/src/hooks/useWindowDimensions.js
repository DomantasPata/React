import { useState, useEffect } from "react";

export function useWindowDimensions() {
  const [dimensions, setdimensions] = useState({});

  console.log(window.innerHeight);
  console.log(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setdimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    });
  }, [window.innerHeight, window.innerWidth]);

  return dimensions;
}
