import axios from "axios";

const USER_URL = `${process.env.REACT_APP_SERVER_URL}/users`;

const request = axios.create({withCredentials:true});

export const profile = async ()=>{
    console.log(request['currentUser']);
    const profile = await request.get(`${USER_URL}/profile`);
    console.log(profile);
}