import { all } from "redux-saga/effects";
import {
  loginRequestWatch,
  registerRequestWatch,
} from "./features/authantication/saga";
import {
  watchFetchPostDetailsRequest,
  watchFetchPostsRequest,
} from "./features/Posts/saga";

export default function* rootSaga() {
  yield all([
    registerRequestWatch(),
    loginRequestWatch(),
    watchFetchPostsRequest(),
    watchFetchPostDetailsRequest(),
  ]);
}
