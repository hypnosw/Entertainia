import React, {useEffect, useState} from "react";
import "./index.css";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate, useParams} from 'react-router-dom';
import userReducer, {setUser} from "../../Reducers/userReducer";
import {updateUser} from "../../Clients/userclient";

function ProfileSetting(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();
    const user = useSelector(state=>state.userReducer);
    console.log(user);
    if(id !== user._id) navigate("/home");

    const [newUser, setNewUser] = useState(user);
    const [currentPassword, SetCurrentPassword] = useState('');
    const [newPassword, SetNewPassword] = useState('');
    const [confirmPassword, SetConfirmPassword] = useState('');
    const [choosingProfile, setChoosingProfile] = useState(false);
    const profileOptions = [
        "data:image/jpeg;base64,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",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsR2l0M3eai3dggb9aNJHALqUq8ayjlANxwA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7BgGZMJrjoQ2xSRJbEYbowcXyWf7h29nsuw&usqp=CAU",
        "data:image/jpeg;base64,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",
        "data:image/jpeg;base64,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",
    ]
    // This function checks if the new passwords match, and if current password matches
    // if true, update newUser.password
    const checkPassword =   ()=>{
        if(newPassword === '')return 0;
        else if(newPassword !== '' && (newPassword === confirmPassword) &&
           currentPassword === user.password && newPassword.length >= 6){
            return 1;
        } else{
            alert("Passwords do not match or must be at least 6 characters long");
            return -1;
        }
    };

    const handleUpdate = ()=>{
        const passwordState = checkPassword();
        switch (passwordState){
            case 0:{
                const response = updateUser({...newUser});
                dispatch(setUser({...newUser}));
                navigate("/home");
                break;
            }
            case 1:{
                const response = updateUser({...newUser, password:newPassword});
                dispatch(setUser({...newUser, password:newPassword}));
                navigate("/home");
                break;
            }
            case -1:{
                return;
            } default:return;
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
                        {/* Profile Picture Options */}
                        {choosingProfile &&
                         <div className={""}>
                             <div>
                                 <p className={"h5"}>Choose from an image below</p>
                             </div>
                             <div className={"d-flex justify-content-between"}>
                                 {profileOptions.map((url)=>{
                                     return(
                                         <button className={"m-1 border border-0 bg-white"}
                                         onClick={()=>{setNewUser({...newUser, profilePicture:url})}}>
                                             <img src={url} alt=""
                                                  className="form-control et-profile-icon-options"/>
                                         </button>
                                     )
                                 })}
                             </div>


                        </div>}
                        {/* Profile Picture Row */}
                        <div className="d-inline-flex justify-content-between
                        align-items-center et-profile-row">
                            <p className="et-profile-label">Profile Picture</p>
                            <img src={user.profilePicture} alt=""
                                 className="form-control et-profile-icon"/>
                            <button className="form-control et-upload-btn"
                            onClick={()=>setChoosingProfile(!choosingProfile)}
                            >Change</button>
                        </div>

                        {/* Username input */}
                        <div>
                            <label for="et-username-input"><strong>Nickname</strong></label>
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
                            <input id="et-password-input" type="password" className="form-control mb-2"
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