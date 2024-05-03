import { useContext } from "react";
import { useState } from "react";
import { CountContext } from "./context";

function App() {
  let [count, setCount] = useState(0);

  // wrap anyone that wants to use a teleported value inside a provider

  return (
    <div>
      <CountContext.Provider value={{count, setCount}}>
        <Count count={count} setCount={setCount} />
      </CountContext.Provider>
    </div>
  );
}

function Count() {
  console.log("count is rerendering");
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
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default App;
