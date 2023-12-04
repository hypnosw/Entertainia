import axios from "axios";

const request = axios.create({
  withCredentials: true,
});

const BASE_URL = process.env.REACT_APP_SERVER_URL;
const USERS_API = `${BASE_URL}/users`;

// credentials should be username, password and role
export const signup = async (credentials) => {
  const response = await request.post(`${USERS_API}/signup`, credentials);
  return response.data;
};

export const signin = async (credentials) => {
  const response = await request.post(`${USERS_API}/signin`, credentials);
  return response.data;
};

export const signout = async () => {
  const response = await request.post(`${USERS_API}/signout`);
  return response.data;
};
