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
  email: null,
  isVisible: true,
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
      quizSlice.caseReducers.updateLocalStorage(state);
    },
    redirectQuestion: (state, action) => {
      while (true) {
        const current = state.questions[state.currentQuestion];
        if (current.typeStatic === 'sleep hygiene') {
          const sisa = state.questions.find(
            (i) => i.output.questionVar === 'sleep_tactics_tried_buttons'
          ).output.answerVar;
          if (!sisa.some((strategy) => sleep_hygiene.includes(strategy))) {
            quizSlice.caseReducers.changeCurrentPage(state, action);
            continue;
          }
        } else if (current.typeStatic === 'sleeping pills') {
          const sisa = state.questions.find(
            (i) => i.output.questionVar === 'sleep_tactics_tried_buttons'
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
      state.currentQuestion = Math.min(Math.max(0, i), n - 1);
      state.isVisible = false;
    },
    moveToNextQuestion: (state) => {
      quizSlice.caseReducers.changeCurrentPage(state, { payload: 1 });
      quizSlice.caseReducers.redirectQuestion(state, { payload: 1 });
      quizSlice.caseReducers.updateLocalStorage(state);
    },
    moveTopreviousQuestion: (state) => {
      quizSlice.caseReducers.changeCurrentPage(state, { payload: -1 });
      quizSlice.caseReducers.redirectQuestion(state, { payload: -1 });
      quizSlice.caseReducers.updateLocalStorage(state);
    },
    setUrlParams: (state, action) => {
      state.utm_term = action.payload.utm_term || state.utm_term;
      state.gclid = action.payload.gclid || state.gclid;
      state.promo = action.payload.promo || state.promo || 'SUMMERSALE';
      state.email = action.payload.prefilled_email || state.email;
      quizSlice.caseReducers.updateLocalStorage(state);
    },
    updateLocalStorage: (state) => {
      localStorage.setItem('quiz', JSON.stringify(state));
    },
    resetQuiz: (state) => {
      state = initialState;
      quizSlice.caseReducers.updateLocalStorage(state);
    },
    setIsVisible: (state, action) => {
      state.isVisible = action.payload;
    },
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
  setIsVisible,
} = quizSlice.actions;

export default quizSlice.reducer;
