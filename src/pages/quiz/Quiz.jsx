import "./Quiz.css"
import { useCallback } from "react";
import useQuizStore from "../../stores/use-quiz-store.js";

const Quiz = () => {
    const {quiz, incrementQuizProgress} = useQuizStore();

    const handleQuizNext = useCallback(() => {
        incrementQuizProgress();
    }, [incrementQuizProgress]);

    return (
        <div>
            <h1>Quiz</h1>
            <span>Progreso del quiz: {quiz.percentageQuizCompleted} %</span>
            <button className="btn-handle-progress" onClick={handleQuizNext}>Siguiente</button>
        </div>
    );
};
export default Quiz;