import { HIDEALERT, SHOWALERT } from "./actions";
import { AlertType } from "./types";

type InitialStateType = {
  message: string | null;
  type: string | null;
  show: boolean;
};

const initialState: InitialStateType = {
  message: null,
  type: "",
  show: false,
};

export type ActionType = {
  type: string;
  payload: AlertType;
};

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case SHOWALERT: {
      return {
        message: action.payload.message,
        show: true,
        type: action.payload.type,
      };
    }
    case HIDEALERT: {
      return {
        message: null,
        show: false,
        type: null,
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
