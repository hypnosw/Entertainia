import axios from "axios";

const API_BASE = process.env.REACT_APP_BASE_API_URL || "http://localhost:5001";
const POSTS_API = `${API_BASE}/api/posts`;
const request = axios.create({
  withCredentials: true,
});


export const createPost = async (post) => {
  try {
    const response = await request.post(`${POSTS_API}`, post);
    return response.data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error; 
  }
};


