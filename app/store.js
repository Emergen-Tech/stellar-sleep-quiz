import { combineReducers, configureStore } from "@reduxjs/toolkit";
import quiz from "@/reducers/QuizSlice";
import { createWrapper } from "next-redux-wrapper";

const combineReducer = combineReducers({
  quiz,
});

export const makeStore = () =>
  configureStore({
    reducer: combineReducer,
  });

export const wrapper = createWrapper(makeStore);
