import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";
import { loginApi, registerApi } from "../../../api/api";
import { showAlert } from "../alerts/actions";
import {
  loginFailure,
  LOGINREQUEST,
  loginSuccess,
  registerFailure,
  REGISTERREQUEST,
  registerSuccess,
} from "./actions";
import { LoginRequestType, RegisterRequestType } from "./types";

function* registerRequestCall(action: RegisterRequestType): SagaIterator {
  try {
    const user = yield call(registerApi, action.payload);
    yield put(registerSuccess(user.data));
    yield put(
      showAlert({ type: "success", message: "registration successful" })
    );
  } catch (error: any) {
    yield put(registerFailure(error.response.data));
    yield put(showAlert({ type: "error", message: error.response.data }));
  }
}

export function* registerRequestWatch() {
  yield takeLatest(REGISTERREQUEST, registerRequestCall);
}

function* loginRequestCall(action: LoginRequestType): SagaIterator {
  try {
    const user = yield call(loginApi, action.payload);
    yield put(loginSuccess(user.data));
    yield put(showAlert({ type: "success", message: "Login successful" }));
  } catch (error: any) {
    yield put(loginFailure(error.response.data));
    yield put(showAlert({ type: "error", message: error.response.data }));
  }
}

export function* loginRequestWatch() {
  yield takeLatest(LOGINREQUEST, loginRequestCall);
}
