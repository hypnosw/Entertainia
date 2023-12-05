import React, {useState} from "react";
import "./index.css";
import {useSelector} from "react-redux";
import userReducer from "../../Reducers/userReducer";
import store from "../../store";

function ProfileSetting(){
    const user = useSelector(state=>state.userReducer);
    const [newUser, SetNewUser] = useState(user);
    const [currentPassword, SetCurrentPassword] = useState('');
    const [newPassword, SetNewPassword] = useState('');
    const [confirmPassword, SetConfirmPassword] = useState('');
    // console.log("newUser: " + newUser.nickname);
    const handleUpdate = ()=>{
        let replacement;
        // do nothing about password if nothing is put in New Password
        if(newPassword === ''){
            replacement = {...newUser};
        } else{
            checkPassword() && (replacement.password = newPassword);
        }

    };
    const checkPassword = ()=>{
        return (newPassword === confirmPassword) &&
                                             currentPassword === user.password;
    }
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
                            <img src={user.profilePicture} alt=""
                                 className="form-control et-profile-icon"/>
                            <button className="form-control et-upload-btn">Upload</button>
                        </div>

                        {/* Username input */}
                        <div>
                            <label for="et-username-input"><strong>Username</strong></label>
                            <input id="et-username-input" type="text" className="form-control"
                            defaultValue={user.nickname}
                            onChange={(e)=>
                                SetNewUser({...newUser, nickname:e.target.value})}/>
                        </div>

                        {/* Personal Bio Input */}
                        <div className="mt-3">
                            <label for="et-personal-bio"><strong>Personal Bio</strong></label>
                            <textarea id="et-personal-bio" className="form-control"
                            defaultValue={user.personalBio}
                                      onChange={(e)=>
                                          SetNewUser({...newUser, personalBio:e.target.value})}>

                            </textarea>
                        </div>

                        {/* Password Section */}
                        <h3 className="h4 mt-5">Security and Privacy</h3>
                        <div>
                            <label htmlFor="et-cur-password-input">
                                <strong>Current Password</strong>
                            </label>
                            <input id="et-cur-password-input"
                                   type="password"
                                   className="form-control mb-3"
                                   onChange={(e)=>
                                   {SetCurrentPassword(e.target.value)}}
                                    />
                            {currentPassword !== '' &&
                             currentPassword !== user.password &&
                             <p className={"alert alert-danger"}>
                                Current password incorrect
                            </p> }
                        </div>
                        <div>
                            <label htmlFor="et-password-input">
                                <strong>New Password</strong>
                            </label>
                            <input id="et-password-input" type="text" className="form-control mb-2"
                                   onChange={(e)=>
                                   {SetNewPassword(e.target.value)}}/>
                        </div>
                        <div>
                            <label htmlFor="et-password-input">
                                <strong>Confirm New Password</strong>
                            </label>
                            <input id="et-newPassword-input" type="password" className="form-control"
                                   onChange={(e)=>
                                   {SetConfirmPassword(e.target.value)}}/>
                        </div>
                        { newPassword !== '' && (newPassword !== confirmPassword) &&
                            <p className={"alert alert-danger mt-1"}>New Password Does Not Match</p>
                        }

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