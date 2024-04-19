const FoodItems = () => {

    let foodItems = ["Fruits", "Vegetables", "Pulses", "Grians", "Ice cream"];
    //let foodItems = [];

  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <li class="list-group-item">{item}</li>
      ))}
    </ul>
  );
};

export default [FoodItems, foodItems];
