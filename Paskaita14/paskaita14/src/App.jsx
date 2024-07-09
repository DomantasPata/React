import SettingsContextProvider from "./Components/Context/SettingsContextProvider";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

function App() {
  return (
    <>
      <SettingsContextProvider>
        <Header />
        <Main />
      </SettingsContextProvider>
    </>
  );
}

export default App;
