// src/components/QuizResults.jsx
import useQuizStore from "../stores/use-quiz-store";

const QuizResults = ({ onRestart }) => {
  const { quiz } = useQuizStore();

  return (
    <div style={{ padding: "2rem", background: "#1e272e", color: "#fff", borderRadius: "10px" }}>
      <h2>✅ Resultados del Quiz</h2>
      <p>Correctas: {quiz.correctAnswers}</p>
      <p>Incorrectas: {quiz.incorrectAnswers}</p>

      <ul>
        {quiz.answers.map((a, i) => (
          <li key={i} style={{ marginBottom: "1rem" }}>
            <strong>{a.question}</strong><br />
            Tu respuesta: <span style={{ color: a.isCorrect ? "lightgreen" : "tomato" }}>{a.selectedAnswer}</span><br />
            Correcta: {a.correctAnswer}
          </li>
        ))}
      </ul>

      <button
        onClick={onRestart}
        style={{
          marginTop: "1rem",
          padding: "10px 20px",
          background: "#0be881",
          color: "#000",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Reiniciar Quiz
      </button>
    </div>
  );
};

export default QuizResults;
