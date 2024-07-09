import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/body/Body";

function App() {
  const name = "dasdsad";

  function handleClick() {
    console.log("Labas is react");
  }

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={handleClick}>Click me</button>
      <Header />
      <Body />
    </div>
  );
}

export default App;
