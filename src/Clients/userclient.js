import axios from "axios";

const request = axios.create({
  withCredentials: true,
});

const BASE_URL = process.env.REACT_APP_SERVER_URL;
const USERS_API = `${BASE_URL}/users`;

export const signup = async (credentials) => {
  const response = await request.post(`${USERS_API}/signup`, credentials);
  return response.data;
};
