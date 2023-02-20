import "./App.css";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import { UserProvider } from "./context/userContext";

function App() {
  return (
    <>
      <div className="App">
        <UserProvider value="React">
          <ComponentA />
        </UserProvider>
      </div>
    </>
  );
}

export default App;
