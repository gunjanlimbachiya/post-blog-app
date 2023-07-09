import { removeToken, setToken } from "../../../utils";
import {
  LOGINFAILED,
  LOGINREQUEST,
  LOGINSUCCESS,
  LOGOUT,
  REGISTERFAILED,
  REGISTERREQUEST,
  REGISTERSUCCESS,
} from "./actions";
import { LoggedInUser, RegisteredUser, RegisterUserInfo } from "./types";

type InitialStateType = {
  user: LoggedInUser | null;
  error: string | null;
  isLoading: boolean;
};

const initialState: InitialStateType = {
  user: null,
  error: "",
  isLoading: false,
};

export type ActionType = {
  type: string;
  payload: LoggedInUser | RegisteredUser | RegisterUserInfo | string;
};

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case REGISTERREQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case REGISTERSUCCESS: {
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    }

    case REGISTERFAILED: {
      return {
        isLoading: false,
        user: null,
        error: action.payload,
      };
    }

    case LOGINREQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case LOGINSUCCESS: {
      setToken(action.payload as LoggedInUser);
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    }

    case LOGINFAILED: {
      return {
        isLoading: false,
        user: null,
        error: action.payload,
      };
    }
    case LOGOUT: {
      removeToken();
      return {
        isLoading: false,
        user: null,
        error: null,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
