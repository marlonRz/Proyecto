import "./Quiz.css";
import useQuizStore from "../../stores/use-quiz-store.js";
import Button from "../../components/button/Button.jsx";
import QuizBallGame from "./QuizBallGame.jsx";

const Quiz = () => {
  const { quiz } = useQuizStore();

  return (
    <>
      <div className="quiz-ui">
        <h1>Quiz</h1>
        <p>Progreso: {quiz.percentageQuizCompleted}%</p>
        <Button
          className="btn-handle-progress"
          text="Siguiente"
          onClick={() => console.log("Siguiente")}
        />
      </div>

      <QuizBallGame />
    </>
  );
};

export default Quiz;
