import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER_URL;
const POSTS_URL = `${BASE_URL}/search`;

export const getPostsByKeywords = async (keywords)=>{
    console.log(POSTS_URL);
    const response = await axios.get(`${POSTS_URL}?terms=${keywords}`);
    return response.data;
}
