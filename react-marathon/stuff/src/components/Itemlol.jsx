import styles from "./Itemlol.module.css";

const Item = ({ foodItem, bought, handleBuyButton }) => {
  return (
    <li className={`${styles["kg-item"]} list-group-item ${bought && "active"}`}>
      <span className={`${styles["kg-span"]}`}>{foodItem}</span>
      <button
        type="button"
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton} 
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
