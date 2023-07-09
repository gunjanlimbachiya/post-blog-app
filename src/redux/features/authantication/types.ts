export type LoginUserInfo = {
  email: string;
  password: string;
};

export type LoggedInUser = {
  accessToken: string;
  user: {
    email: string;
    firstname: string;
    lastname: string;
    age: number;
    id: number;
  };
};

export type RegisteredUser = {
  accessToken: string;
  user: {
    email: string;
    firstName: string;
    lastName: string;
    age: number;
    id: number;
  };
};

export type RegisterUserInfo = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  age: number;
};

export type RegisterRequestType = {
  type: string;
  payload: RegisterUserInfo;
};

export type LoginRequestType = {
  type: string;
  payload: LoginUserInfo;
};

export type LocalhostUser = {
  token: string;
  name: string;
  userId: number;
};
