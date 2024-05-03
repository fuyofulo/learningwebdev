import { todosAtomFamily } from "./atoms";
import { RecoilRoot, useRecoilState } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={2} />
    </RecoilRoot>
  );
}


function Todo({ id }) {
  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

  return (
    <>
      {todo.title}
      <br />
      {todo.description}
      <br />
    </>
  );
}

export default App;