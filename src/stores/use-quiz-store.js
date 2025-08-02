// src/stores/use-quiz-store.js
import { create } from "zustand";

const useQuizStore = create((set) => ({
  quiz: {
    correctAnswers: 0,
    incorrectAnswers: 0,
    isFinished: false,
  },

  incrementQuizProgress: (isCorrect) =>
    set((state) => ({
      quiz: {
        correctAnswers: isCorrect ? state.quiz.correctAnswers + 1 : state.quiz.correctAnswers,
        incorrectAnswers: !isCorrect ? state.quiz.incorrectAnswers + 1 : state.quiz.incorrectAnswers,
        isFinished: false,
      },
    })),

  setFinished: () =>
    set((state) => ({
      quiz: {
        ...state.quiz,
        isFinished: true,
      },
    })),

  clearQuiz: () =>
    set({
      quiz: {
        correctAnswers: 0,
        incorrectAnswers: 0,
        isFinished: false,
      },
    }),
}));

export default useQuizStore;
