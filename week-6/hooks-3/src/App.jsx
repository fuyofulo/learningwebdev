import { useMemo } from "react";
import { useState } from "react";

function App() {

  let [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter+1);
  }

  let [inputValue, setInputValue] = useState(1);

  let count = useMemo(() => {
    let finalCount = 0;
    for (let i =0; i<= inputValue; i++) {
      finalCount = finalCount + i;
    }
    return finalCount
  }, [inputValue]) 
  


  return <div>
    <input onChange={(e) => setInputValue(e.target.value)} placeholder="find sum from 1 to n"></input><br />
    Sum from 1 to {inputValue} is {count} <br />
    <button onClick={incrementCounter}>counter {counter}</button>
  </div>
}

export default App;