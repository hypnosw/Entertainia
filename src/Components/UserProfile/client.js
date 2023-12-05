import axios from "axios";

const USER_URL = `${process.env.REACT_APP_SERVER_URL}/users`;

const request = axios.create({withCredentials:true});

export const profile = async ()=>{
    // console.log(request['currentUser'].data);
    // try{
    //     const user = await request.get(`${USER_URL}/profile`);
    //     console.log(`profile:`, user.data);
    //     return user.data;
    // } catch(error){
    //     return null;
    // }
    const user = await request.get(`${USER_URL}/profile`);
    console.log(`profile:`, user.data);
    return user.data;

}

export const signOut = async ()=> await request.get(`${USER_URL}/signout`);