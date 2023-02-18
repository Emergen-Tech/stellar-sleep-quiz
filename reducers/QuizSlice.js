import { createSlice } from '@reduxjs/toolkit';
const questions = require('../questions.json');

const initialState = {
  questions: questions,
  currentQuestion: 0,
  utm_term: null,
  gclid: null,
  promo: null,
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setAnswer(state, action) {
      // const questionIndex = state.questions.findIndex(
      //   (question) =>
      //     question.output.questionVar ===
      //     state.questions[state.currentQuestion].output.questionVar
      // );
      // if (questionIndex !== -1) {
      state.questions[state.currentQuestion].output.answerVar = action.payload;
      // }
    },
    moveToNextQuestion: (state) => {
      state.currentQuestion =
        (state.currentQuestion + 1) % state.questions.length;
    },
    moveTopreviousQuestion: (state) => {
      state.currentQuestion =
        (state.currentQuestion - 1 + state.questions.length) %
        state.questions.length;
    },
    setUrlParams: (state, action) => {
      state.utm_term = action.payload.utm_term;
      state.gclid = action.payload.gclid;
      state.promo = action.payload.promo || 'SUMMERSALE';
      console.log(state.utm_term);
      console.log(state.gclid);
      console.log(state.promo);
    },
    resetQuiz: () => initialState,
  },
});

export const {
  moveToNextQuestion,
  moveTopreviousQuestion,
  resetQuiz,
  submitMultipleChoiceAnswer,
  submitCheckboxAnswer,
  submitInputFieldAnswer,
  setAnswer,
  setUrlParams,
} = quizSlice.actions;

export default quizSlice.reducer;
