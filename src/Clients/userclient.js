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

export const updateUser = async (user) => {
  const response = await request.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};

export const findAllUsers = async () => {
  const response = await request.get(`${USERS_API}`);
  return response.data;
};

export const findUserById = async (id) => {
  const response = await request.get(`${USERS_API}/${id}`);
  return response.data;
};

export const findUserByName = async (name) => {
  const response = await request.get(`${USERS_API}/username/${name}`);
  return response.data;
};
