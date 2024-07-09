import { useEffect, useState } from "react";
// import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SingleComment from "./Components/SingleComment";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      });
  }, []);

  return (
    <div>
      {data.map((x) => (
        <SingleComment key={x.id} product={x} />
      ))}
    </div>
  );
}

export default App;
