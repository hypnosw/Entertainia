import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER_URL;
const POSTS_URL = `${BASE_URL}/search`;


export const getPostsByKeywords = async (keywords)=>{
    const response = await axios.get(`${POSTS_URL}-organics?terms=${keywords}`);
    return response.data;
}

export const getAPIResults = async(keywords)=>{
    console.log(`${POSTS_URL}-api-posts?terms=${keywords}`);
    const results = await axios.get(
        `${POSTS_URL}-api-posts?terms=${keywords}`);
    return results;
}
