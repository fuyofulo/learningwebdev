import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  let foodItems = ["Fruits", "Vegetables", "Pulses", "Grians", "Ice cream"];
  //let foodItems = [];

  return (
    <>
      <h1>Healthy food items</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
      <h3>hello</h3>
    </>
  );
}

export default App;
