import { useEffect } from "react";
import { useRef } from "react"; 

function App() {

  const incomeTax = 2000;
  const divRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      console.log(divRef.current);
      divRef.current.innerHTML = 10;
    }, 6000)
  }, [])

  return <div>
    hi there, your income tax returns are <div ref={divRef}>{incomeTax}</div>
  </div>
}

export default App;