import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { showAlert } from "../../redux/features/alerts/actions";
import { getToken } from "../../utils";

type AuthPropsTypes = React.ComponentType<any>;

const WithAuth = (Component: AuthPropsTypes) => {
  return function HOC(props: any) {
    const navigate = useNavigate();
    const loggedInUser = getToken();
    const dispatch = useDispatch();

    useEffect(() => {
      if (!loggedInUser) {
        dispatch(
          showAlert({ type: "error", message: "Please login to view posts." })
        );
        navigate("/login");
      }
    }, []);

    return loggedInUser ? <Component user={loggedInUser} {...props} /> : null;
  };
};

export default WithAuth;
