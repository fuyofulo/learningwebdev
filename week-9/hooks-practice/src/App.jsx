import React from "react";
import { useEffect, useState } from "react";
import './App.css'

function App () {

  const [render, setRender] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRender(render => !render);
    }, 5000)
  }, [])

  return <div>
    {render ? <MyComponent /> : <div></div>}
  </div>
}

function MyComponent() {
  useEffect(() => {
    console.log("component mounted")

    return () => {
      console.log("component unmounted")
    };
  }, []);

  return <div>
    inside my component
  </div>

  // Render UI
}

export default App;
