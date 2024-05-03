import { RecoilRoot, useRecoilState } from "recoil";
import { todosAtomFamily } from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={5} />
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
      <br />
    </div>
  );
}

export default App;
