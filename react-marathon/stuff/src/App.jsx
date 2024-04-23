import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  let foodItems = ["hahaha", "Vegetables", "Pulses", "Grains", "Ice cream"];
  //let foodItems = [];

  const handleOnChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <Container>
        <h2 className="food-heading">Healthy food items</h2>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <FoodItems items={foodItems}></FoodItems>
        <h3>hello</h3>
      </Container>
      {/* <Container><p>Above is the list of healthy foods</p></Container> */}
    </>
  );
}

export default App;
