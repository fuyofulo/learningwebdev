import { useState } from "react";
import { CountContext } from "../src/context";
import { useContext } from "react";

function App() {
  let [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Count />
      </CountContext.Provider>
    </div>
  );
}

function Count() {
  return (
    <div>
      <CountRendered />
      <Buttons />
    </div>
  );
}

function CountRendered() {
  const {count} = useContext(CountContext);
  return <div>{count}</div>;
}

function Buttons() {
  const {count, setCount} = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default App;
