import React from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import styles from "./components/App.module.css";

function App() {
  

  return (
    <div className={styles.calculator}>
      <Input></Input>
      <Button></Button>
    </div>
  );
}

export default App;
