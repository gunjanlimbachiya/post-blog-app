import axios, { AxiosResponse } from "axios";
import {
  LoginUserInfo,
  RegisterUserInfo,
} from "../redux/features/authantication/types";
import { getToken } from "../utils";
import { baseURL, endpoints } from "./constant";
export function registerApi(
  userInfo: RegisterUserInfo
): Promise<AxiosResponse<any>> {
  console.log(userInfo);
  return axios.post(`${baseURL}/${endpoints.register}`, userInfo);
}

export function loginApi(userInfo: LoginUserInfo): Promise<AxiosResponse<any>> {
  return axios.post(`${baseURL}/${endpoints.login}`, userInfo);
}

export function getPosts() {
  const user = getToken();
  if (user) {
    const { token } = user;
    return axios(`${baseURL}/${endpoints.posts}`, {
      headers: {
        Authorization: `Bearer ${token} `,
      },
    });
  }
}

export function getPostDetails(postId: number) {
  const user = getToken();
  if (user) {
    const { token } = user;
    return axios(`${baseURL}/${endpoints.posts}/${postId}`, {
      headers: {
        Authorization: `Bearer ${token} `,
      },
    });
  }
}
