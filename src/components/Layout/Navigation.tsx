import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { showAlert } from "../../redux/features/alerts/actions";
import { logoutRequest } from "../../redux/features/authantication/actions";
// import { LoggedInUser } from "../../redux/features/authantication/types";
import { getToken } from "../../utils";

// interface AuthState {
//   isLoading: boolean;
//   user: LoggedInUser; // Specify the type of error if applicable
//   error: string;
// }

const Navigation = () => {
  //   let { user } = useSelector(
  //     (state: ReturnType<typeof rootReducer>) => state.auth as AuthState
  //   );

  let user = getToken();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    dispatch(logoutRequest());
    dispatch(
      showAlert({ type: "success", message: "User logged out successfully " })
    );
    navigate("/login");
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "80px",
      }}
      maxWidth="lg"
    >
      <Box>
        <Link to="/">
          <Typography variant="h4">My App</Typography>
        </Link>
      </Box>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/register">Register</Link>
            {user ? (
              <Link to="#" onClick={handleClick}>
                Logout
              </Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Navigation;
