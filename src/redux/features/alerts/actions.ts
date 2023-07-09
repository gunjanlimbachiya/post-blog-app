import { AlertType } from "./types";

export const SHOWALERT = "SHOWALERT";
export const HIDEALERT = "HIDEALERT";

export const showAlert = (alert: AlertType) => {
  return {
    type: SHOWALERT,
    payload: alert,
  };
};

export const hideAlert = () => {
  return {
    type: HIDEALERT,
  };
};
