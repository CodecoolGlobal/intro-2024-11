import './App.css';

import Counter from "./Counter";
import Greeting from "./Greeting";

function App() {
  return (
    <div className="App">
      <Greeting name="Gábor" age="20" />
      <Greeting name="Anna" age="30" />
      <Counter />
    </div>
  );
}

export default App;
