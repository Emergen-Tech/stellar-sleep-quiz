import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  questions: [
    {
      id: 1,
      question: "What is your sleep goal?",
      inputType: "multipleChoice",
      choices: {
        falling_asleep_quicker: "Falling asleep quicker",
        staying_asleep_or_falling_back_asleep_after_waking:
          "Staying asleep (or falling back asleep after waking)",
        both: "Both",
      },
      unit: "",
      typeStatic: "",
      typeDynamic: "",
      output: { questionVar: "goal", answerVar: [] },
    },
    {
      id: 2,
      question: "How frequently do you wake up in the middle of the night?",
      inputType: "multipleChoice",
      choices: {
        every_night: "Every night",
        multiple_times_a_week: "Multiple times a week",
        once_a_week: "Once a week",
        less_than_once_a_week: "Less than once a week",
      },
      unit: "",
      typeStatic: "",
      typeDynamic: "",
      output: { questionVar: "frequency_of_night_wakings", answerVar: [] },
    },
    {
      id: 3,
      inputType: "static",
      unit: "",
      typeStatic: "behavioral therapy static page",
      typeDynamic: "",
      question: "",
      choices: [],
      output: { questionVar: "", answerVar: [] },
    },
    {
      id: 4,
      question: "Rate your difficulty falling asleep in the past week.",
      inputType: "multipleChoice",
      choices: {
        0: "None",
        1: "Mild",
        2: "Moderate",
        3: "Severe",
        4: "Very Severe",
      },
      unit: "",
      typeStatic: "",
      typeDynamic: "",
      output: {
        questionVar: "ISI_1",
        answerVar: [],
      },
    },
    {
      id: 5,
      question: "Rate your difficulty staying asleep in the past week.",
      inputType: "multipleChoice",
      choices: {
        0: "None",
        1: "Mild",
        2: "Moderate",
        3: "Severe",
        4: "Very Severe",
      },
      unit: "",
      typeStatic: "",
      typeDynamic: "",
      output: {
        questionVar: "ISI_2",
        answerVar: [],
      },
    },
    {
      id: 6,
      question: "Rate your problems with waking up too early in the past week.",
      inputType: "multipleChoice",
      choices: {
        0: "None",
        1: "Mild",
        2: "Moderate",
        3: "Severe",
        4: "Very Severe",
      },
      unit: "",
      typeStatic: "",
      typeDynamic: "",
      output: {
        questionVar: "ISI_3",
        answerVar: [],
      },
    },
    {
      id: 7,
      question:
        "How satisfied/ dissatisfied are you with your sleep pattern in the last 2 weeks?",
      inputType: "multipleChoice",
      choices: {
        0: "Very Satisfied",
        1: "Satisfied",
        2: "Moderately Satisfied",
        3: "Dissatisfied",
        4: "Very Dissatisfied",
      },
      unit: "",
      typeStatic: "",
      typeDynamic: "",
      output: {
        questionVar: "ISI_4",
        answerVar: [],
      },
    },
    {
      id: 8,
      question:
        "How noticeable to others do you think your sleep problem is in terms of impairing the quality of your life?",
      inputType: "multipleChoice",
      choices: {
        0: "Not at all Noticeable",
        1: "A Little",
        2: "Somewhat",
        3: "Much",
        4: "Very Much Noticeable",
      },
      unit: "",
      typeStatic: "",
      typeDynamic: "",
      output: {
        questionVar: "ISI_5",
        answerVar: [],
      },
    },
    {
      id: 9,
      question:
        "How worried/ distressed are you about your current sleep problem?",
      inputType: "multipleChoice",
      choices: {
        0: "Not at all Worried",
        1: "A Little",
        2: "Somewhat",
        3: "Much",
        4: "Very Much Worried",
      },
      unit: "",
      typeStatic: "",
      typeDynamic: "",
      output: {
        questionVar: "ISI_6",
        answerVar: [],
      },
    },
    {
      id: 10,
      question:
        "To what extent do you consider your sleep problem to interfere with your daily functioning (e.g. ability to function at work) in the last 2 weeks?",
      inputType: "multipleChoice",
      choices: {
        0: "Not at all Worried",
        1: "A Little",
        2: "Somewhat",
        3: "Much",
        4: "Very Much Worried",
      },
      unit: "",
      typeStatic: "",
      typeDynamic: "",
      output: {
        questionVar: "ISI_7",
        answerVar: [],
      },
    },
    {
      id: 11,
      inputType: "dynamic",
      typeDynamic: "ISI",
      question: "",
      choices: [],
      unit: "",
      typeStatic: "",
      output: { questionVar: "ISI_result", answerVar: [] },
    },
    {
      id: 12,
      question:
        "What impact does your poor sleep have on your day-to-day life?",
      inputType: "CheckBox",
      choices: {
        reduced_productivity: "Reduced productivity",
        poor_mood: "Poor mood",
        less_energy: "Less energy",
        increased_stress: "Increased stress",
        none_of_the_above: "None of the above",
      },
      unit: "",
      typeStatic: "",
      typeDynamic: "",
      output: {
        questionVar: "impact_of_poor_sleep_on_daily_life",
        answerVar: [],
      },
    },
    {
      id: 13,
      question:
        "Which of the following have you done in the past month due to your sleep problems?",
      inputType: "CheckBox",
      choices: {
        avoided_social_activities_or_cancelled_plans:
          "Avoided social activities or cancelled plans",
        called_in_sick_to_work: "Called in sick to work",
        none_of_the_above: "None of the above",
      },
      unit: "",
      typeStatic: "",
      typeDynamic: "",
      output: {
        questionVar: "sleep_related_actions_past_month",
        answerVar: [],
      },
    },
    {
      id: 14,
      inputType: "static",
      unit: "",
      typeStatic: "Quality sleep",
      typeDynamic: "",
      question: "",
      choices: {},
      output: {},
    },
    {
      id: 15,
      inputType: "static",
      unit: "",
      typeStatic: "psychology-based approach",
      typeDynamic: "",
      question: "",
      choices: {},
      output: {},
    },
    {
      id: 16,
      inputType: "multipleChoice",
      unit: "",
      typeStatic: "",
      typeDynamic: "",
      question:
        "Sex and hormones impact how you sleep. What sex best describes you?",
      choices: { male: "Male", female: "Female", other: "Other" },
      output: { questionVar: "sex", answerVar: [] },
    },
    {
      id: 17,
      inputType: "multipleChoice",
      unit: "",
      typeStatic: "",
      typeDynamic: "",
      question: "What is your age?",
      choices: {
        "20s": "20s",
        "30s": "30s",
        "40s": "40s",
        "50s": "50s",
        "60s": "60s",
        "+70": "+70",
      },
      output: { questionVar: "age", answerVar: [] },
    },
    {
      id: 18,
      inputType: "InputField",
      unit: "minutes",
      typeStatic: "",
      typeDynamic: "",
      question: "How long does it take for you to fall asleep?",
      choices: {},
      output: { questionVar: "time_to_fall_asleep", answerVar: [] },
    },
    {
      id: 19,
      inputType: "dynamic",
      typeDynamic: "Average Sleep",
      question: "",
      choices: {},
      unit: "",
      typeStatic: "",
      output: { questionVar: "average_sleep", answerVar: [] },
    },
  ],
  currentQuestion: 0,
  multipleChoiceResponses: [],
  checkboxResponses: [],
  inputFieldResponses: [],
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setAnswer(state, action) {
      const questionIndex = state.questions.findIndex(
        (question) =>
          question.output.questionVar ===
          state.questions[state.currentQuestion].output.questionVar
      );
      if (questionIndex !== -1) {
        state.questions[questionIndex].output.answerVar = action.payload;
      }
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
  setAnswer,
} = quizSlice.actions;

export default quizSlice.reducer;
