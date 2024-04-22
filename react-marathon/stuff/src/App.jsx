import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css"

function App() {
  let foodItems = ["hahaha", "Vegetables", "Pulses", "Grains", "Ice cream"];
  //let foodItems = [];
  
  return (
    <>
      <h2 className="food-heading">Healthy food items</h2>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
      <h3>hello</h3>
    </>
  );
}

export default App;
