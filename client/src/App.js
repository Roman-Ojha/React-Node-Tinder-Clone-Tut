import "./App.css";
import Headers from "./react-components/Headers";
import TinderCards from "./react-components/TinderCards";
import SwipeButtons from "./react-components/SwipeButtons";

function App() {
  // BEM Class naming convention
  return (
    <div className="app">
      {/* Header */}
      <Headers />
      {/* TinderCards */}
      <TinderCards />
      {/* SwipButtons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
