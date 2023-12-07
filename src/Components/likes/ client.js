import axios from "axios";

const API_BASE = process.env.REACT_APP_SERVER_URL;
const USER_URL = `${API_BASE}/users`;
const LIKES_URL = `${API_BASE}/likes`;

export const findAllLikes = async () => {};
export const createUserLikesAlbum = async (userId, albumId) => {
  const response = await axios.post(`${USER_URL}/${userId}/likes/${albumId}`);
  return response.data;
};
export const deleteUserLikesAlbum = async (userId, albumId) => {};
export const findUsersThatLikeAlbum = async (albumId) => {
  const response = await axios.get(`${LIKES_URL}/${albumId}/users`);
  return response.data;
};
export const findAlbumsThatUserLikes = async (userId) => {
  const response = await axios.get(`${USER_URL}/${userId}/likes`);
  return response.data;
};