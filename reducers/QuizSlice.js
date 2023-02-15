const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  questions: [],
  currentQuestion: 0,
  multipleChoiceResponses: [],
  checkboxResponses: [],
  inputFieldResponses: [],
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    selectAnswer: (state, action) => {
      state.responses[state.currentQuestion] = action.payload;
    },
    moveToNextQuestion: (state) => {
      state.currentQuestion =
        (state.currentQuestion + 1) % state.questions.length;
    },
    moveTopreviousQuestion: (state) => {
      state.currentQuestion =
        (state.currentQuestion - 1) % state.questions.length;
    },
    submitMultipleChoiceAnswer: (state, action) => {
      state.multipleChoiceResponses.push(action.payload);
    },
    submitCheckboxAnswer: (state, action) => {
      state.checkboxResponses.push(action.payload);
    },
    submitInputFieldAnswer: (state, action) => {
      state.inputFieldResponses.push(action.payload);
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
} = quizSlice.actions;

// export const selectQuestion = (state) =>
//   state.quiz.questions[state.quiz.currentQuestion];

export default quizSlice.reducer;
