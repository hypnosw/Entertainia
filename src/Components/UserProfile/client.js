import axios from "axios";

const USER_URL = `${process.env.REACT_APP_SERVER_URL}/users`;

const request = axios.create({withCredentials:true});

export const currentLoggedInProfile = async ()=>{

    const user = await request.get(`${USER_URL}/profile`);
    // console.log(`profile:`, user.data);
    return user.data;
}

export const getPosts = async(id)=>{
    const response = await request.get(`${process.env.REACT_APP_SERVER_URL}/postsbyid?id=${id}`);
    return response;
}



export const signOut = async ()=> await request.get(`${USER_URL}/signout`);