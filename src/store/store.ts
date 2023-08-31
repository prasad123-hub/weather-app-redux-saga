import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import weatherReducer from "../slices/weatherSlice";
import { watchGetWeather } from "../slices/weatherSaga";
import { all, fork } from "redux-saga/effects";

const rootSaga = function* () {
  yield all([fork(watchGetWeather)]);
};

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
