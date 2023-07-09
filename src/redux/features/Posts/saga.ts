import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";
import { getPostDetails, getPosts } from "../../../api/api";
import { showAlert } from "../alerts/actions";
import { logoutRequest } from "../authantication/actions";
import {
  fetchPostDetailsError,
  fetchPostDetailsLoading,
  FETCHPOSTDETAILSSREQUEST,
  fetchPostDetailsSuccess,
  fetchPostsError,
  fetchPostsLoading,
  FETCHPOSTSREQUEST,
  fetchPostsSuccess,
} from "./actions";
import { PostDetailsActionType } from "./types";

function* fetchPostsData(): SagaIterator {
  try {
    yield put(fetchPostsLoading());
    const posts = yield call(getPosts);
    yield put(fetchPostsSuccess(posts.data));
  } catch (error: any) {
    if (error.response.status === 401) {
      yield put(logoutRequest());
    } else {
      yield put(fetchPostsError(error));
      yield put(showAlert({ type: "error", message: error.response.data }));
    }
  }
}

function* fetchPostDetailsData(action: PostDetailsActionType): SagaIterator {
  try {
    yield put(fetchPostDetailsLoading());
    const post = yield call(getPostDetails, action.payload);
    yield put(fetchPostDetailsSuccess(post.data));
  } catch (error: any) {
    if (error.response.status === 401) {
      yield put(logoutRequest());
    } else {
      yield put(fetchPostDetailsError(error));
      yield put(showAlert({ type: "error", message: error.response.data }));
    }
  }
}

export function* watchFetchPostsRequest() {
  yield takeLatest(FETCHPOSTSREQUEST, fetchPostsData);
}

export function* watchFetchPostDetailsRequest() {
  yield takeLatest(FETCHPOSTDETAILSSREQUEST, fetchPostDetailsData);
}
