import { Alert } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideAlert } from "../../redux/features/alerts/actions";
import { AlertType } from "../../redux/features/alerts/types";

const Alerts = (props: AlertType) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(hideAlert());
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Alert sx={{ marginTop: "2rem" }} severity={props.type}>
      {props.message}
    </Alert>
  );
};
export default Alerts;
