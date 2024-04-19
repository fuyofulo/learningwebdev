import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let foodItems = ["Fruits", "Vegetables", "Pulses", "Grians", "Ice cream"];
  //let foodItems = [];

  return (
    <React.Fragment>
      <h1>Healthy food items</h1>
      <ErrorMessage></ErrorMessage>
      <FoodItems></FoodItems>
      <h3>hello</h3>
    </React.Fragment>
  );
}

export default App;
