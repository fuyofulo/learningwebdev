import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ backgroundColor: "red" }}>hi</div>
        <div style={{ backgroundColor: "green" }}>hi</div>
        <div style={{ backgroundColor: "yellow" }}>hi</div>
        <div style={{ backgroundColor: "blue" }}>hi</div>
      </div>

      <div className="flex justify-center">
        <div className="bg-red-500">hi</div>
        <div className="bg-green-500">hi</div>
        <div className="bg-yellow-500">hi</div>
        <div className="bg-blue-500">hi</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="bg-red-500">hi there 1</div>
        <div className="bg-blue-500">hi there 2</div>
        <div className="bg-green-500">hi there 3</div>
      </div>
    </>
  );
}

export default App;
