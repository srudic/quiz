import styles from "./ProgressBar.module.css";
import { useContext } from "react";
import UserContext from "../../context/UserContext";

const ProgressBar = ({ progress }) => {
  const { isDarkMode } = useContext(UserContext);
  return (
    <div
      className={styles.ProgressBar}
      style={{ backgroundColor: isDarkMode ? "#3c4d67" : "#bdbdbd" }}
    >
      <div className={styles.Progress} style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;
