import styles from "./Input.module.css";

function Input({ displayValue }) {
  return (
    <div>
      <input
        className={styles.Input}
        type="text"
        value={displayValue}
        readOnly
      ></input>
    </div>
  );
}

export default Input;
