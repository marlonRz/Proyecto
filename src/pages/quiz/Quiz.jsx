import "./Quiz.css"
import { useCallback } from "react";
import useQuizStore from "../../stores/use-quiz-store.js";
import Button from "../../components/button/Button.jsx";
const Quiz = () => {
    const {quiz, incrementQuizProgress} = useQuizStore();

    const handleQuizNext = useCallback(() => {
        incrementQuizProgress();
    }, [incrementQuizProgress]);

    return (
        <div>
            <h1>Quiz</h1>
            <span>Progreso del quiz: {quiz.percentageQuizCompleted} %</span>
            <Button className="btn-handle-progress" text="Siguiente" width="180px" heigth="50px" onClick={handleQuizNext}/>
        </div>
    );
};
export default Quiz;