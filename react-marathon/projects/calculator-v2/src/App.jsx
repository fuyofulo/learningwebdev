import React from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import styles from "./components/App.module.css";
import { useState } from "react";

function App() {

  let [currentDisplay, setCurrentDisplay] = useState("");
  const onButtonClick = (buttonText) => {
    if(buttonText === 'C') {
    } else if(buttonText === '=') {
    } else {
      const newDisplay = currentDisplay + buttonText;
      setCurrentDisplay(newDisplay);
    }
  }

  

  return (
    <div className={styles.calculator}>
      <Input displayValue={currentDisplay}></Input>
      <Button onButtonClick={onButtonClick}></Button>
    </div>
  );
}

export default App;
