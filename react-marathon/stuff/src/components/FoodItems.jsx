import Item from "./Itemlol";
import { useState } from "react";

const FoodItems = ({ items }) => {

  let [activeItems, setActiveItems] = useState([]);

  const onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
    console.log(newItems);
    
  }

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => {onBuyButton(item, event)}}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
