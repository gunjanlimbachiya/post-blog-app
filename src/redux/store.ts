import createSagaMiddleware from "@redux-saga/core";
import { createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./features/authantication/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import alerReducer from "./features/alerts/reducer";
import rootSaga from "./rootSaga";
import postsReducer from "./features/Posts/reducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  alert: alerReducer,
  posts: postsReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
