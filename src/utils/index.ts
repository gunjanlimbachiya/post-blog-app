import {
  LocalhostUser,
  LoggedInUser,
} from "../redux/features/authantication/types";

export const setToken = (loginUser: LoggedInUser) => {
  const { accessToken, user } = loginUser;
  localStorage.setItem(
    "user",
    JSON.stringify({
      token: accessToken,
      name: user.firstname + " " + user.lastname,
      userId: user.id,
    })
  );
};

export const getToken = (): LocalhostUser | null => {
  const user = localStorage.getItem("user");
  if (user) {
    return JSON.parse(user);
  }
  return null;
};

export const removeToken = () => {
  localStorage.removeItem("user");
};
