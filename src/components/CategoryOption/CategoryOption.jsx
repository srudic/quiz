import styles from "./CateogoryOption.module.css";
import { FaCheck } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const CategoryOption = ({
  optionName,
  optionIcon,
  handleOnClick,
  optionSelected,
  correct,
  disable,
  avoidChecking,
}) => {
  let classNames = [styles.Option];
  const { isDarkMode } = useContext(UserContext);

  if (optionSelected) {
    classNames = [styles.Option, styles.Selected].join(" ");
  }

  return (
    <button
      className={classNames}
      onClick={handleOnClick}
      disabled={disable}
      style={{
        backgroundColor: optionSelected
          ? "#f04d89"
          : isDarkMode
          ? "#3c4d67"
          : "#bdbdbd",
        color: isDarkMode ? "white" : "#333",
        position: "relative",
      }}
    >
      {optionIcon && <div className={styles.Icon}>{optionIcon}</div>}
      <div className={styles.OptionName}>{optionName}</div>
      {!avoidChecking && optionSelected && correct && (
        <div style={{ position: "absolute", right: "-2rem" }}>
          <FaCheck size={30} color="#95f542" />
        </div>
      )}
      {!avoidChecking && optionSelected && !correct && (
        <div style={{ position: "absolute", right: "-2rem" }}>
          <AiOutlineClose size={30} color="red" />
        </div>
      )}
    </button>
  );
};

export default CategoryOption;
