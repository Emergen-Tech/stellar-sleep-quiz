import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getQuestions = createAsyncThunk("quiz/getQuestions", async () => {
  const questions = [
    {
      id: 1,
      question: "What is your sleep goal?",
      inputType: "multipleChoice",
      choices: [
        "Falling asleep quicker",
        "Staying asleep (or falling back asleep after waking)",
        "Both",
      ],
      typeStatic: "",
      typeDynamic: "",
      output: [{ goal: "" }],
    },
    {
      id: 2,
      question: "How frequently do you wake up in the middle of the night?",
      inputType: "multipleChoice",
      choices: [
        "Every night",
        "Multiple times a week",
        "Once a week",
        "Less than once a week",
      ],
      typeStatic: "",
      typeDynamic: "",
    },
    {
      id: 3,
      inputType: "static",
      typeStatic: "behavioral therapy static page",
      typeDynamic: "",
      question: "",
      choices: [],
    },
    {
      id: 4,
      question: "Rate your difficulty falling asleep in the past week.",
      inputType: "multipleChoice",
      choices: ["None", "Mild", "Moderate", "Severe", "Very Severe"],
      typeStatic: "",
      typeDynamic: "",
    },
    {
      id: 5,
      question: "Rate your difficulty staying asleep in the past week.",
      inputType: "multipleChoice",
      choices: ["None", "Mild", "Moderate", "Severe", "Very Severe"],
      typeStatic: "",
      typeDynamic: "",
    },
    {
      id: 6,
      question: "Rate your problems with waking up too early in the past week.",
      inputType: "multipleChoice",
      choices: ["None", "Mild", "Moderate", "Severe", "Very Severe"],
      typeStatic: "",
      typeDynamic: "",
    },
    {
      id: 7,
      question:
        "How satisfied/ dissatisfied are you with your sleep pattern in the last 2 weeks?",
      inputType: "multipleChoice",
      choices: [
        "Very Satisfied",
        "Satisfied",
        "Moderately Satisfied",
        "Dissatisfied",
        "Very Dissatisfied",
      ],
      typeStatic: "",
      typeDynamic: "",
    },
    {
      id: 8,
      question:
        "How noticeable to others do you think your sleep problem is in terms of impairing the quality of your life?",
      inputType: "multipleChoice",
      choices: [
        "Not at all Noticeable",
        "A Little",
        "Somewhat",
        "Much",
        "Very Much Noticeable",
      ],
      typeStatic: "",
      typeDynamic: "",
    },
    {
      id: 9,
      question:
        "How worried/ distressed are you about your current sleep problem?",
      inputType: "multipleChoice",
      choices: [
        "Not at all Worried",
        "A Little",
        "Somewhat",
        "Much",
        "Very Much Worried",
      ],
      typeStatic: "",
      typeDynamic: "",
    },
    {
      id: 10,
      question:
        "To what extent do you consider your sleep problem to interfere with your daily functioning (e.g. ability to function at work) in the last 2 weeks?",
      inputType: "multipleChoice",
      choices: [
        "Not at all Worried",
        "A Little",
        "Somewhat",
        "Much",
        "Very Much Worried",
      ],
      typeStatic: "",
      typeDynamic: "",
    },
    {
      id: 11,
      inputType: "dynamic",
      typeDynamic: "ISI",
      question: "",
      choices: [],
      typeStatic: "",
    },
    {
      id: 12,
      question:
        "What impact does your poor sleep have on your day-to-day life?",
      inputType: "CheckBox",
      choices: [
        "Reduced productivity",
        "Poor mood",
        "Less energy",
        "Increased stress",
        "None of the above",
      ],
      typeStatic: "",
      typeDynamic: "",
    },
    {
      id: 13,
      question:
        "Which of the following have you done in the past month due to your sleep problems?",
      inputType: "CheckBox",
      choices: [
        "Avoided social activities or cancelled plans",
        "Called in sick to work",
        "None of the above",
      ],
      typeStatic: "",
      typeDynamic: "",
    },
    {
      id: 14,
      inputType: "static",
      typeStatic: "Quality sleep",
      typeDynamic: "",
      question: "",
      choices: [],
    },
    {
      id: 15,
      inputType: "static",
      typeStatic: "psychology-based approach",
      typeDynamic: "",
      question: "",
      choices: [],
    },
  ];
  return questions;
});

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
  extraReducers: {
    [getQuestions.pending]: (state, action) => {
      state.loading = true;
    },
    [getQuestions.fulfilled]: (state, action) => {
      state.loading = false;
      state.questions = action.payload;
    },
    [getQuestions.rejected]: (state, action) => {
      state.loading = false;
    },
  },
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
        (state.currentQuestion - 1 + state.questions.length) %
        state.questions.length;
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

export default quizSlice.reducer;
