import "./Quiz.css";
import useQuizStore from "../../stores/use-quiz-store.js";
import Button from "../../components/button/Button.jsx";
import QuizBallGame from "./QuizBallGame.jsx";

const Quiz = () => {
  const { quiz, clearQuiz } = useQuizStore();

  return (
    <>
      <div className="quiz-ui">
        <div className="quiz-stats">
          <span>✅ Aciertos: {quiz.correctAnswers}</span>
          <span>❌ Errores: {quiz.incorrectAnswers}</span>
          <span>📊 Progreso: {quiz.percentageQuizCompleted}%</span>
        </div>
      </div>

      <QuizBallGame />
    </>
  );
};

export default Quiz;
