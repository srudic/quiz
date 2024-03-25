import styles from "./CustomButton.module.css";

const CustomButton = ({ name, handleOnClick }) => {
  return (
    <button className={styles.CustomButton} onClick={handleOnClick}>
      {name}
    </button>
  );
};

export default CustomButton;
