import styles from "./LandingPage.module.css";
import { useContext } from "react";
import UserContext from "../../context/UserContext";
import CategoryOption from "../../components/CategoryOption/CategoryOption";
import CustomButton from "../../UI/CustomButton/CustomButton";

const LandingPage = () => {
  const {
    selectedDifficulty,
    selectedCategory,
    isCategorySelected,
    setIsCategorySelected,
    handleCategorySelection,
    handleDifficultySelection,
    handleGetStartedQuiz,
  } = useContext(UserContext);

  const handleCategoryClick = (categoryName) => {
    handleCategorySelection(categoryName);
  };

  const handleDifficultyClick = (difficultyName) => {
    handleDifficultySelection(difficultyName);
  };

  return (
    <>
      <div className={styles.Main}>
        <div className={styles.TitlePart}>
          <h2 className={styles.MainTitle}>Welcome to the Quiz!</h2>
          <h4 className={styles.Subtitle}>
            Pick a {isCategorySelected ? "difficulty" : "category"} to get
            started.
          </h4>
        </div>
        {!isCategorySelected && (
          <div className={styles.Options}>
            {selectedCategory.map((category) => (
              <CategoryOption
                avoidChecking={true}
                optionName={category.name}
                optionIcon={category.icon}
                optionSelected={category.selected}
                handleOnClick={() => handleCategoryClick(category.name)}
                key={category.id}
                id={category.id}
              />
            ))}
            <CustomButton
              name="Next"
              handleOnClick={() => setIsCategorySelected(true)}
            />
          </div>
        )}
        {isCategorySelected && (
          <div className={styles.Options}>
            {selectedDifficulty.map((difficulty) => (
              <CategoryOption
                avoidChecking={true}
                optionName={difficulty.name}
                optionIcon={difficulty.icon}
                optionSelected={difficulty.selected}
                handleOnClick={() => handleDifficultyClick(difficulty.name)}
                key={difficulty.id}
                id={difficulty.id}
              />
            ))}
            <CustomButton
              name="Get started"
              handleOnClick={() => handleGetStartedQuiz()}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default LandingPage;
