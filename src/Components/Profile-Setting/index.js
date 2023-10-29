import React from "react";
import "./index.css";
function ProfileSetting(){
    return (
        <div>
            <div className="container mt-2">
                <div>
                    <h1 className="m-0 p-0 h3">Profile Setting</h1>
                    <hr className="mt-2"/>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="col-6">
                        <h3 className="h4">Basic Information</h3>
                        <div className="d-flex">
                            <p className="et-profile-label">Profile Picture</p>
                            <img src="#" alt="" className="form-control et-profile-icon"/>
                            <button className="form-control">Upload</button>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default ProfileSetting;