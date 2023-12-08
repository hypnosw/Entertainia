import React, {useEffect, useState} from "react";
import "./index.css";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate, useParams} from 'react-router-dom';
import userReducer, {setUser} from "../../Reducers/userReducer";
import store from "../../store";
import {updateUser} from "../../Clients/userclient";

function ProfileSetting(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();
    const user = useSelector(state=>state.userReducer);
    if(id != user._id) navigate("/home");

    const [newUser, setNewUser] = useState(user);
    const [currentPassword, SetCurrentPassword] = useState('');
    const [newPassword, SetNewPassword] = useState('');
    const [confirmPassword, SetConfirmPassword] = useState('');
    // This function checks if the new passwords match, and if current password matches
    // if true, update newUser.password
    const checkPassword =   ()=>{
        if(newPassword === '')return true;
        else if(newPassword !== '' && (newPassword === confirmPassword) &&
           currentPassword === user.password && newPassword.length >= 6){
            return true;
        } else{
            alert("Passwords do not match or must be at least 6 characters long");
            return false;
        }
    };

    const handleUpdate = ()=>{
        const boo = checkPassword();
        if(boo){
            console.log("In handleupdate password: " + newUser.password);
            const response = updateUser({...newUser, password:newPassword});
            dispatch(setUser({...newUser, password:newPassword}));
            navigate("/home");
        }
    };

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
                                setNewUser({...newUser, nickname:e.target.value})}/>
                        </div>

                        {/* Personal Bio Input */}
                        <div className="mt-3">
                            <label for="et-personal-bio"><strong>Personal Bio</strong></label>
                            <textarea id="et-personal-bio" className="form-control"
                            defaultValue={user.personalBio}
                                      onChange={(e)=>
                                          setNewUser({...newUser, personalBio:e.target.value})}>

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
                                   {SetNewPassword(e.target.value);}}/>
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
                        { (newPassword !== '' && newPassword.length < 6) &&
                          <p className={"alert alert-danger mt-1"}>
                              New Password Must be At Least 6 Characters</p>
                        }

                        <div className="d-block float-end mt-5">
                            <button className="btn btn-outline-dark"
                            onClick={()=>handleUpdate()}
                            >Save</button>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ProfileSetting;