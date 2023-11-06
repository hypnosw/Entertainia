import "./index.css";
import {useSelector} from "react-redux";
import React from "react";

export default function UserProfile(){
    const user = useSelector(state => state.useSelector);
    console.log(user);
    return (
        <div className="d-flex justify-content-center bg-info et-main-wrapper">
            <div className=" bg-danger">
                <img src="#" alt="" className="form-control et-profile-icon"/>
            </div>

        </div>
    )
};