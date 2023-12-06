import axios from "axios";
const BASE_URL = process.env.REACT_APP_SERVER_URL;
const POSTS_URL = `${BASE_URL}`;

export const getAllPosts = async (keywords) => {
  console.log(POSTS_URL);
  const response = await axios.get(`${POSTS_URL}/posts`);
  return response.data;
};

export const getAllSortedPosts = async (keywords) => {
  console.log(POSTS_URL);
  const response = await axios.get(`${POSTS_URL}/sortedposts`);
  return response.data;
};

