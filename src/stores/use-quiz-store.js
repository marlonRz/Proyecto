import { create } from "zustand";

const useQuizStore = create((set) =>({
  quiz: {
    correctAnswers: 0,
    incorrectAnswers: 0,
    percentageQuizCompleted: 0,
  },
  incrementQuizProgress: (isCorrect) =>
    set((state) => {
      const newCorrect = isCorrect
        ? state.quiz.correctAnswers + 1
        : state.quiz.correctAnswers;

      const newIncorrect = !isCorrect
        ? state.quiz.incorrectAnswers + 1
        : state.quiz.incorrectAnswers;

      const progressStep = 100 / 4; // o usa quizData.length

      const newPercentage = Math.min(
        state.quiz.percentageQuizCompleted + (isCorrect ? progressStep : 0),
        100
      );

      return {
        quiz: {
          correctAnswers: newCorrect,
          incorrectAnswers: newIncorrect,
          percentageQuizCompleted: newPercentage,
        },
      };
    }),
    clearQuiz: ()=>
      set({
        quiz: {
          correctAnswers: 0,
          incorrectAnswers: 0,
          percentageQuizCompleted: 0,
        },
      }),
  
}));

export default useQuizStore;