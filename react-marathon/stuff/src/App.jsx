import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  //let foodItems = ["hahaha", , "Ice cream"];
  //let foodItems = [];

  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log(`New food item ${newFoodItem}`);
      event.target.value = "";
    }
  };

  return (
    <>
      <Container>
        <h2 className="food-heading">Healthy food items</h2>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
      {/* <Container><p>Above is the list of healthy foods</p></Container> */}
    </>
  );
}

export default App;
