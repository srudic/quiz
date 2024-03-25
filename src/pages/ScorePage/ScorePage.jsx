import { useContext } from "react";
import UserContext from "../../context/UserContext";
import CustomButton from "../../UI/CustomButton/CustomButton";
import styles from "./ScorePage.module.css";
import { useNavigate } from "react-router-dom";

const ScorePage = () => {
  const { score, handleResetGame, quizQuestions, isDarkMode } =
    useContext(UserContext);
  const navigate = useNavigate();

  const handlePlayAgain = () => {
    handleResetGame();
    navigate("/");
  };
  return (
    <div className={styles.Container}>
      <div className={styles.TitlePart}>
        <h3 className={styles.Subtitle}>Quiz completed</h3>
        <h2 className={styles.Title}>You scored...</h2>
      </div>
      <div className={styles.ScoreWrapper}>
        <div
          className={styles.ScoreContainer}
          style={{ backgroundColor: isDarkMode ? "#3c4d67" : "#bdbdbd" }}
        >
          <h1 className={styles.Score}>{score}</h1>
          <p className={styles.Subtitle}>out of {quizQuestions.length}</p>
        </div>
        <CustomButton name="Play again" handleOnClick={handlePlayAgain} />
      </div>
    </div>
  );
};

export default ScorePage;
