import "./index.css";
import {useSelector} from "react-redux";
import React from "react";
import LogIn from "../LogIn";
import {Link} from "react-router-dom";
import {FaBaby, FaThumbsUp} from "react-icons/fa";
import {PostCards} from "../Post-cards";

export default function UserProfile(){
    const user = useSelector(state => state.userReducer);
    console.log(user);

    // placeholder
    const post = {
                        title:"Title so so very long",
                        author:"No Author",
                        images:["https://i.kym-cdn.com/entries/icons/original/000/046/895/huh_cat.jpg"],
                        numberOfLikes:32,
                        };
    return (
            <div className="et-main-wrapper row ">
                <div className="col-sm-auto  d-flex justify-content-center w-100">
                    <div className="d-block">
                        {/* Profile Picture */}
                        <img src={process.env.PUBLIC_URL + "/cat-pic.jpg"} alt="" className="form-control et-profile-picture mb-4"/>

                        {/* Username */}
                        <div className="justify-content-center d-flex mb-2">
                            <strong className="h5">{user.name}</strong>
                        </div>

                        <div className="d-flex justify-content-around">
                            {/* Direct to show the list of the followers */}
                            <p>Posts <strong>{user.posts.length}</strong></p>
                            <Link to="" className="et-user-follow">
                                Followers <strong> {user.followers.length}</strong>
                            </Link>
                            {/* Direct to show the list of the following users */}
                            <Link to="" className="et-user-follow">
                                Following <strong> {user.following.length}</strong>
                            </Link>
                        </div>


                        <p className="mt-3">
                            {user.personalBio}
                        </p>


                        <div className="d-block float-end">
                            {/* Show Edit Profile button if logged in*/}
                            {/* Currently shows if false for testing */}
                            {
                                !user.loggedIn &&
                                <Link to="/profile-setting"
                                      className="btn btn-outline-dark et-edit-profile-btn mt-5">
                                    Edit Profile
                                </Link>
                            }
                        </div>


                    </div>
                </div>
                <div className="col-lg-9 mt-3 d-flex justify-content-center w-100">
                    <div className="d-flex flex-row flex-wrap justify-content-center">
                        {/* Should be a map function here to map out every post
                        that belongs to the user*/}

                        {PostCards(post)}
                        {PostCards(post)}
                        {PostCards(post)}
                        {PostCards(post)}
                        {PostCards(post)}
                        {PostCards(post)}
                        {PostCards(post)}
                        {PostCards(post)}
                        {PostCards(post)}
                        {PostCards(post)}
                        {PostCards(post)}
                        {PostCards(post)}
                        {PostCards(post)}



                    </div>

                </div>


            </div>


    )
};