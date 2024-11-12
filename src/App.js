import './App.css';

import Counter from "./Counter";
import Greeting from "./Greeting";
import CatList from "./CatList";

function App() {
  return (
    <div className="App">
      {/* <Greeting name="Gábor" age="20" />
      <Greeting name="Anna" age="30" />
      <Counter /> */}

      <CatList />
    </div>
  );
}

export default App;
