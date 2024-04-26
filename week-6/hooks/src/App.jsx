import { useEffect, useState } from "react";
import axios from "axios";

let counter = 3;

function App() {
  let [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
    .then(function(response) {
      setTodos(response.data.todos)
    })
  }, [])

  function AddTodo() {
    counter++;
    setTodos([
      ...todos,
      {
        id: counter,
        title: Math.random(),
        description: Math.random(),
      },
    ]);
    console.log("todo added");
    console.log(todos);
  }

  return (
    <div>
      <button onClick={AddTodo}>add a todo</button>
      {todos.map((todo) => (
        <Todo
          id={todo.id}
          title={todo.title}
          description={todo.description}
        ></Todo>
      ))}
    </div>
  );
}

function Todo({ id, title, description }) {
  return (
    <>
      <div>{id}</div>
      <div>{title}</div>
      <div>{description}</div>
      <br></br>
    </>
  );
}
export default App;
