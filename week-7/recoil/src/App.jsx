import { useState } from "react";
import { CountContext } from "../src/context";
import { useContext } from "react";
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";

function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count() {
  console.log("count is rerendering");
  return (
    <div>
      <CountRendered />
      <Buttons />
      <EvenRerenderer />
    </div>
  );
}

function EvenRerenderer() {
  const isEven = useRecoilValue(evenSelector);
  return <div>
    {isEven ? "it is odd" : "it is even"}
  </div>;
}

function CountRendered() {
  const count = useRecoilValue(countAtom);
  return <div>{count}</div>;
}

function Buttons() {
  const setCount = useSetRecoilState(countAtom);
  console.log("buttons rerender");
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button onClick={() => setCount((count) => count - 1)}>Decrement</button>
    </div>
  );
}

export default App;
