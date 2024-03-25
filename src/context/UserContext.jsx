import { createContext, useState } from "react";
import { CATEGORIES, DIFFICULTIES } from "../UI/Constants";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserContext = createContext({
  selectedCategory: null,
  setSelectedCategory: () => {},
  selectedDifficulty: null,
  setSelectedDifficulty: () => {},
  isCategorySelected: Boolean,
  setIsCategorySelected: () => {},
  handleCategorySelection: () => {},
  handleDifficultySelection: () => {},
  handleGetStartedQuiz: () => {},
  quizQuestions: [],
  score: Number,
  setScore: () => {},
  handleResetGame: () => {},
  isDarkMode: Boolean,
  setIsDarkMode: () => {},
});

export function UserContextProvider({ children }) {
  const [isCategorySelected, setIsCategorySelected] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(CATEGORIES);
  const [selectedDifficulty, setSelectedDifficulty] = useState(DIFFICULTIES);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(true);

  // function to handle category selection
  const handleCategorySelection = (categoryName) => {
    setSelectedCategory((prevState) => {
      // return a new array of categories with only the selected category selected
      return prevState.map((category) => ({
        ...category,
        selected: category.name === categoryName,
      }));
    });
  };

  // function to handle difficulty selection
  const handleDifficultySelection = (difficultyName) => {
    setSelectedDifficulty((prevState) => {
      // return a new array of difficulties with only the selected difficulty selected
      return prevState.map((difficulty) => ({
        ...difficulty,
        selected: difficulty.name === difficultyName,
      }));
    });
  };

  // function to handle getting started with the quiz
  const handleGetStartedQuiz = async () => {
    const selectedCategoryId = selectedCategory.find(
      (category) => category.selected
    )?.id;
    const selectedDifficultyName = selectedDifficulty
      .find((difficulty) => difficulty.selected)
      ?.name.toLowerCase();

    if (selectedCategoryId && selectedDifficultyName) {
      try {
        const apiUrl = `https://opentdb.com/api.php?amount=10&category=${selectedCategoryId}&difficulty=${selectedDifficultyName}&type=multiple`;
        const response = await axios.get(apiUrl);

        if (response.data.response_code === 0) {
          const questions = response.data.results;

          setQuizQuestions(questions);
          navigate("/quiz");
        } else {
          console.error(
            "Failed to fetch quiz questions:",
            response.data.message
          );
        }
      } catch (error) {
        console.error("Error fetching quiz questions:", error);
      }
    } else {
      console.log("Please select a category and a difficulty.");
    }
  };

  const handleResetGame = () => {
    setIsCategorySelected(false);
    setSelectedCategory(CATEGORIES);
    setSelectedDifficulty(DIFFICULTIES);
    setQuizQuestions([]);
    setScore(0);
  };

  const value = {
    isCategorySelected,
    setIsCategorySelected,
    selectedCategory,
    selectedDifficulty,
    handleCategorySelection,
    handleDifficultySelection,
    handleGetStartedQuiz,
    quizQuestions,
    score,
    setScore,
    handleResetGame,
    isDarkMode,
    setIsDarkMode,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export default UserContext;
