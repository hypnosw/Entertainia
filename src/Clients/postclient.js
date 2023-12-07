import axios from "axios";
const BASE_URL = process.env.REACT_APP_SERVER_URL;
const POSTS_URL = `${BASE_URL}`;

export const getAllPosts = async (keywords) => {
  // console.log(POSTS_URL);
  const response = await axios.get(`${POSTS_URL}/posts`);
  return response.data;
};

export const getAllSortedPosts = async (keywords) => {
  // console.log(POSTS_URL);
  const response = await axios.get(`${POSTS_URL}/sortedposts`);
  return response.data;
};

export const findPosts = async (searchTerm) => {
  const response = await axios.get(
    `${BASE_URL}/search?query=${searchTerm}&type=posts&apikey=${POSTS_URL}`
  );
  return response.data.search.data.posts;
};

export const findPostById = async (postId) => {
  const response = await axios.get(
    `${BASE_URL}/posts/${postId}?apikey=${POSTS_URL}`
  );
  return response.data.posts[0];
};

export const likePost = async (postId, userId) => {
  const response = await axios.post(`${BASE_URL}/posts/like`, { postId, userId });
  return response.data;
};