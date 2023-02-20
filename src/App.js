import "./App.css";
import ComponentA from "./components/ComponentA";
import UserState from './context/userContext'

function App() {
  return (
    <>
      <UserState>
        <div className="App">
          <ComponentA />
        </div>
      </UserState>
    </>
  );
}

export default App;
