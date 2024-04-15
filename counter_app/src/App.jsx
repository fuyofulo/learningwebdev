
import { useState } from "react";


function App() {
  const [todos, setTodos] = useState([{
    title: "Go ot gym",
    description: "7-9 pm",
    completed: false
  }, {
    title: "study DSA",
    description: "9-11 pm",
    completed: true
  }]);

  

  return (
      <div>
        {JSON.stringify(todos)}
      </div>
  )
}

function CustomButton(props) {

  function onClinkHandler() {
    props.setCount(props.count+1);
  }

  return <button onClick={onClinkHandler}>
  Counter {props.count}
  </button>
}

export default App
