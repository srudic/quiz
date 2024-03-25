import { useState, useEffect, useContext, useMemo } from "react";
import styles from "./QuizPage.module.css";
import UserContext from "../../context/UserContext";
import CategoryOption from "../../components/CategoryOption/CategoryOption";
import CustomButton from "../../UI/CustomButton/CustomButton";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { useNavigate } from "react-router-dom";
import he from "he";

const QuizPage = () => {
  const { quizQuestions, setScore } = useContext(UserContext);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (quizQuestions.length > 0) {
      const fetchedAnswers = [
        ...quizQuestions[currentQuestionIndex].incorrect_answers,
        quizQuestions[currentQuestionIndex].correct_answer,
      ];

      // Function to shuffle array (Fisher-Yates shuffle algorithm)
      const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      };

      // Shuffle the answers array
      shuffleArray(fetchedAnswers);

      // Map fetched answers to array of objects
      const answerObjects = fetchedAnswers.map((answer, index) => ({
        name: answer,
        selected: false,
      }));

      setAnswers(answerObjects);
    }
  }, [currentQuestionIndex]);

  const getNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleQuestion = (answerName) => {
    // Check if the selected answer is correct
    const isCorrect =
      answerName === quizQuestions[currentQuestionIndex].correct_answer;

    // If correct, update the score
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    setAnswers((prevState) => {
      // return a new array of answers with the selected answer updated
      return prevState.map((answer) => ({
        ...answer,
        selected: answer.name === answerName,
        correct: isCorrect,
      }));
    });
  };

  const disableButtons = useMemo(
    () => answers.some((answ) => answ.selected),
    [answers]
  );

  const handleSubmit = () => {
    navigate("/quiz/score");
  };

  return (
    <div className={styles.Container}>
      <div className={styles.TitlePart}>
        <h4 className={styles.Subtitle}>
          Question {currentQuestionIndex + 1} of {quizQuestions.length}
        </h4>
        <h2 className={styles.MainTitle}>
          {he.decode(quizQuestions[currentQuestionIndex].question)}
        </h2>
        <ProgressBar
          progress={((currentQuestionIndex + 1) / quizQuestions.length) * 100}
        />
      </div>
      <div className={styles.Options}>
        {answers.map((answer, index) => (
          <CategoryOption
            key={index}
            optionName={he.decode(answer.name)}
            handleOnClick={() => handleQuestion(answer.name)}
            optionSelected={answer.selected}
            avoidChecking={answer.avoidChecking}
            disable={disableButtons}
            correct={answer.correct}
          />
        ))}
        {currentQuestionIndex === quizQuestions.length - 1 ? (
          <CustomButton name="Submit" handleOnClick={handleSubmit} />
        ) : (
          <CustomButton name="Next" handleOnClick={getNextQuestion} />
        )}
      </div>
    </div>
  );
};

export default QuizPage;
