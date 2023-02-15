// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import quiz from "@/reducers/QuizSlice";
// import { createWrapper } from "next-redux-wrapper";

// const combineReducer = combineReducers({
//   quiz,
// });

// export const makeStore = () =>
//   configureStore({
//     reducer: combineReducer,
//   });

// export const wrapper = createWrapper(makeStore);

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import quizReducer from "@/reducers/QuizSlice";
import storage from "redux-persist/lib/storage";

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import merchandiseReducer from "../features/counter/merchandiseSlice";

const persistConfig = {
  key: "root",
  storage,
};

const reducers = combineReducers({
  quiz: quizReducer,
  // individualproduct: individualReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
