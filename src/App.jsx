import { Route, Routes } from "react-router-dom";

import styles from "./App.module.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import ThemeMode from "./components/ThemeMode/ThemeMode";
import QuizPage from "./pages/QuizPage/QuizPage";
import ScorePage from "./pages/ScorePage/ScorePage";
import { useContext } from "react";
import UserContext from "./context/UserContext";

function App() {
  const { isDarkMode } = useContext(UserContext);
  return (
    <>
      <div
        className={styles.Wrapper}
        style={{
          backgroundColor: isDarkMode ? "#313e51" : "#f0f0f0",
          color: isDarkMode ? "white" : "#333",
        }}
      >
        <div className={styles.Heading} style={{ justifyContent: "right" }}>
          <ThemeMode />
        </div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/quiz/score" element={<ScorePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
