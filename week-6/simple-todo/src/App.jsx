import { useState } from "react";

let counter = 3;

function App() {
  let [todos, setTodos] = useState([{
    id: 1,
    title: "go to gym",
    description: "6-7 AM"
  },{
    id: 2,
    title: "go to class",
    description: "9-3 PM",
  }, {
    id: 3,
    title: "go to mosque",
    description: "8-9 PM",
  }])

  function AddTodo() {

    counter++;
    setTodos ([...todos, {
      id: counter,
      title: Math.random(),
      description: Math.random()
    }])
  }

  return (
    <div>
      <button onClick={AddTodo}>Add a todo</button>
      {todos.map(todo => <Todo id={todo.id} title={todo.title} description={todo.description}></Todo>)}</div>
  );
}

function Todo({ id, title, description }) {
  return (
  <>
    <h2>{id}</h2>
    <h3>{title}</h3>
    <h4>{description}</h4>
  </>
  );
}

export default App;
