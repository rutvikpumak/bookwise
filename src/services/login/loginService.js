import axios from "axios";

export const loginService = (email, password) => {
  return axios.post("api/auth/login", {
    email: email,
    password: password,
  });
};
