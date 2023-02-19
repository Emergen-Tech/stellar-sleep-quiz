import { createSlice } from '@reduxjs/toolkit';
const questions = require('../questions.json');

const sleep_hygiene = [
  'meditation',
  'melatonin',
  'cutting_coffee_in_the_afternoon',
  'reducing_screen_time_at_night',
];
const sleep_pills = 'prescription_sleeping_pills';

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
    restoreFromLocalStorage(state, action) {
      return { ...action.payload };
    },
    setAnswer(state, action) {
      state.questions[state.currentQuestion].output.answerVar = action.payload;
    },
    redirectQuestion: (state, action) => {
      while (true) {
        const current = state.questions[state.currentQuestion];
        if (current.typeStatic === 'sleep hygiene') {
          const sisa = state.questions.find(
            (i) =>
              i.output.questionVar === 'sleep_improvement_strategies_attempted'
          ).output.answerVar;
          if (!sisa.some((strategy) => sleep_hygiene.includes(strategy))) {
            quizSlice.caseReducers.changeCurrentPage(state, action);
            continue;
          }
        } else if (current.typeStatic === 'sleeping pills') {
          const sisa = state.questions.find(
            (i) =>
              i.output.questionVar === 'sleep_improvement_strategies_attempted'
          ).output.answerVar;
          if (!sisa.includes(sleep_pills)) {
            quizSlice.caseReducers.changeCurrentPage(state, action);
            continue;
          }
        }
        break;
      }
    },
    changeCurrentPage: (state, action) => {
      const n = state.questions.length;
      const i = state.currentQuestion + action.payload;
      state.currentQuestion = ((i % n) + n) % n;
    },
    moveToNextQuestion: (state) => {
      quizSlice.caseReducers.changeCurrentPage(state, { payload: 1 });
      quizSlice.caseReducers.redirectQuestion(state, { payload: 1 });
    },
    moveTopreviousQuestion: (state) => {
      quizSlice.caseReducers.changeCurrentPage(state, { payload: -1 });
      quizSlice.caseReducers.redirectQuestion(state, { payload: -1 });
    },
    setUrlParams: (state, action) => {
      state.utm_term = action.payload.utm_term;
      state.gclid = action.payload.gclid;
      state.promo = action.payload.promo || 'SUMMERSALE';
    },
    resetQuiz: () => initialState,
  },
});

export const {
  restoreFromLocalStorage,
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
