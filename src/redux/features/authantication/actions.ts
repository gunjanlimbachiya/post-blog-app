import {
  LoggedInUser,
  LoginUserInfo,
  RegisteredUser,
  RegisterUserInfo,
} from "./types";

export const REGISTERREQUEST = "REGISTERREQUEST";
export const REGISTERSUCCESS = "REGISTERSUCCESS";
export const REGISTERFAILED = "REGISTERFAILED";
export const LOGINREQUEST = "LOGINREQUEST";
export const LOGINSUCCESS = "LOGINSUCCESS";
export const LOGINFAILED = "LOGINFAILED";
export const LOGOUT = "LOGOUT";

export const registerRequest = (userInfo: RegisterUserInfo) => {
  return {
    type: REGISTERREQUEST,
    payload: userInfo,
  };
};

export const registerSuccess = (user: RegisteredUser) => {
  return {
    type: REGISTERSUCCESS,
    payload: user,
  };
};

export const registerFailure = (error: string) => {
  return {
    type: REGISTERFAILED,
    payload: error,
  };
};

export const loginRequest = (userInfo: LoginUserInfo) => {
  return {
    type: LOGINREQUEST,
    payload: userInfo,
  };
};

export const loginSuccess = (user: LoggedInUser) => {
  return {
    type: LOGINSUCCESS,
    payload: user,
  };
};

export const loginFailure = (error: string) => {
  return {
    type: LOGINFAILED,
    payload: error,
  };
};

export const logoutRequest = () => {
  return {
    type: LOGOUT,
  };
};
