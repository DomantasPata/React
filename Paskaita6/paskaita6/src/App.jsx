import "./App.css";
import Smile from "./Components/Smile/Smile.jsx";
import Food from "./Components/Food/Food.jsx";
import Animal from "./Components/Animal/Animal.jsx";
import LoadingBar from "./Components/LoadingBar/LoadingBar.jsx";

function App() {
  return (
    <div>
      <div className="box">
        <div>
          <Smile />
        </div>
        <div>
          <Food />
        </div>
        <div>
          <Animal />
        </div>
      </div>

      <LoadingBar />
    </div>
  );
}

export default App;
