import { configureStore } from "@reduxjs/toolkit";
import QuizReducer from "@/reducers/QuizSlice";

export const store = configureStore({
  reducer: { quiz: QuizReducer },
});
