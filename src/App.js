import logo from "./logo.svg";
import "./App.css";
import HomeScreen from "./pages/homeScreen/HomeScreen";

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <header>
          <h3>Trip Planner</h3>
        </header>
        <HomeScreen />
      </div>
    </div>
  );
}

export default App;
