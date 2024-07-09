import Card from "./Components/Card/Card";
import Form from "./Components/Form/Form";
import { useWindowDimensions } from "./hooks/useWindowDimensions";

function App() {
  const dimensions = useWindowDimensions();
  return (
    <div>
      <Card title={"Pirma"}>
        <Card.Header text={"Header dalis"} />
        <h4>dsadasdsa</h4>
        <p>dasdasdasdas</p>
        <a href="">dasdasdas</a>
      </Card>
      <Card title={"Antra"} />
      <Form />
      <p>
        width: {dimensions.width} <br />
        height: {dimensions.height}
      </p>
    </div>
  );
}

export default App;
