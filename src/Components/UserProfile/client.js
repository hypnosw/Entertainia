import axios from "axios";

const USER_URL = `${process.env.REACT_APP_SERVER_URL}/user`;

const request = axios.create({withCredentials:true});

