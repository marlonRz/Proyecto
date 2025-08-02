// src/stores/use-quiz-store.js
import { create } from "zustand";

const useQuizStore = create((set) => ({
  quiz: {
    correctAnswers: 0,
    incorrectAnswers: 0,
    percentageQuizCompleted: 0,
    answers: [], // ⬅️ Agrega este campo
  },
  incrementQuizProgress: (isCorrect, questionObj, selectedOption) =>
    set((state) => {
      const newCorrect = isCorrect ? state.quiz.correctAnswers + 1 : state.quiz.correctAnswers;
      const newIncorrect = !isCorrect ? state.quiz.incorrectAnswers + 1 : state.quiz.incorrectAnswers;
      const progressStep = 100 / 4; // o quizData.length
      const newPercentage = Math.min(
        state.quiz.percentageQuizCompleted + (isCorrect ? progressStep : 0),
        100
      );

      return {
        quiz: {
          ...state.quiz,
          correctAnswers: newCorrect,
          incorrectAnswers: newIncorrect,
          percentageQuizCompleted: newPercentage,
          answers: [
            ...state.quiz.answers,
            {
              question: questionObj.question,
              correctAnswer: questionObj.options[questionObj.correctIndex],
              selectedAnswer: selectedOption,
              isCorrect,
            },
          ],
        },
      };
    }),
  clearQuiz: () =>
    set({
      quiz: {
        correctAnswers: 0,
        incorrectAnswers: 0,
        percentageQuizCompleted: 0,
        answers: [],
      },
    }),
}));

export default useQuizStore;
