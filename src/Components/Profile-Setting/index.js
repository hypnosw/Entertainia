import React from "react";
import "./index.css";
import {useSelector} from "react-redux";
import userReducer from "../../Reducers/userReducer";
import store from "../../store";

function ProfileSetting(){
    const user = useSelector(state=>state.userReducer);
    // Also parse userID here as query param
    console.log(user.name);
    return (
        <div>
            <div className="container mt-2">
                <div>
                    <h1 className="m-0 p-0 h3">Profile Setting</h1>
                    <hr className="mt-2"/>
                </div>
                {/* Positioning in the middle */}
                <div className="d-flex justify-content-center">
                    {/* Wrapper Div for main content */}
                    <div className="col-6">

                        <h3 className="h4">Basic Information</h3>
                        {/* Profile Picture Row */}
                        <div className="d-inline-flex justify-content-between
                        align-items-center et-profile-row">
                            <p className="et-profile-label">Profile Picture</p>
                            <img src="#" alt="" className="form-control et-profile-icon"/>
                            <button className="form-control et-upload-btn">Upload</button>
                        </div>

                        {/* Username input */}
                        <div>
                            <label for="et-username-input"><strong>Username</strong></label>
                            <input id="et-username-input" type="text" className="form-control"
                            defaultValue={user.name}/>
                        </div>

                        {/* Personal Bio Input */}
                        <div className="mt-3">
                            <label for="et-personal-bio"><strong>Personal Bio</strong></label>
                            <textarea id="et-personal-bio" className="form-control"
                            placeholder={user.personalBio}></textarea>
                        </div>

                        {/* Password Section */}
                        <h3 className="h4 mt-5">Security and Privacy</h3>
                        <div>
                            <label htmlFor="et-cur-password-input">
                                <strong>Current Password</strong>
                            </label>
                            <input id="et-cur-password-input" type="text" className="form-control mb-3"/>
                        </div>
                        <div>
                            <label htmlFor="et-password-input"><strong>New Password</strong></label>
                            <input id="et-password-input" type="text" className="form-control mb-2"/>
                        </div>
                        <div>
                            <label htmlFor="et-password-input"><strong>Confirm New Password</strong></label>
                            <input id="et-newPassword-input" type="text" className="form-control"/>
                        </div>

                        <div className="d-block float-end mt-5">
                            <button className="btn btn-outline-dark">Save</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ProfileSetting;