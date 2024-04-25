import { useState } from "react";

function App() {
  return (
    <>
      <ButtonWithHeader />
      <Header title="zaid2"></Header>
      <Header title="zaid2"></Header>
      <Header title="zaid2"></Header>
      <Header title="zaid2"></Header>
    </>
  );
}

function ButtonWithHeader() {
  let [title, setTitle] = useState("My name is Zaid");
  const changeTitle = () => {
    setTitle(`My name is ${Math.random()}`);
  };

  return (
    <>
      <button onClick={changeTitle}>Update title</button>
      <Header title={title}></Header>
    </>
  );
}

function Header({title}) {
  return <div>{title}</div>
}

export default App;
