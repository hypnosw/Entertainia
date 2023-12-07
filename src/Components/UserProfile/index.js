import "./index.css";
import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {PostCards} from "../Post-cards";
import {getPosts, currentLoggedInProfile, signOut} from "./client";
import {useDispatch, useSelector} from "react-redux";
import userReducer, {emptyUser} from "../../Reducers/userReducer";
import {FaHamburger, FaUser} from "react-icons/fa";
import {findUserById} from "../../Clients/userclient";


export default function UserProfile() {
  const {id} = useParams();
  const [user, setUser] = useState(null);

  // currentUser is the logged in user
  const [currentUser, setCurrentUser] = useState(null);
  const dispatch = useDispatch();
  const [error, SetError] = useState("");
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const fetchProfile = async()=>{

    const response = await findUserById(id);
    setUser(response);
  }
  const fetchCurrentProfile = async () => {
    try {
      const current = await currentLoggedInProfile();
      current ? setCurrentUser(current) : navigate("/login");
    } catch (error) {
      // console.log("navigate");
      console.log("Not Logged In || Failed to fetch logged in user info");
    }
  };

  const logOut = async () => {
    await signOut();
    dispatch(emptyUser());
    navigate("/home");
  };
  const fetchPosts = async () => {
    try {
      if (user) {
        const response = await getPosts(user._id);
        setPosts(response.data);
      }
    } catch (error) {
      SetError(error.message);
    }};

  useEffect(() => {
    fetchProfile();
    fetchCurrentProfile();
  }, [id]);

  useEffect(() => {
    fetchPosts();
  }, [user]);

  return (
            <div>
                {user?(
                    <div className="et-main-wrapper row ">
                    <div className="col-sm-auto  d-flex justify-content-center w-100">
                        <div className="d-block">
                            {/* All Users Button */}
                          {currentUser.username === user.username && currentUser.role === "ADMIN" &&
                           <div className={"et-dropdown-btn"}>
                            <Link to="/profile/all-users"type={"button"} className={"btn"}>
                              <FaUser/>
                            </Link>
                          </div>}

                            {/* Profile Picture */}
                            <img src={"#"} alt="" className="form-control et-profile-picture mb-4"/>

                            {/* Username */}
                            <div className="justify-content-center d-flex mb-2">
                                <div>
                                    <strong className=" h4">{user.nickname}</strong>
                                        <p>@{user.username}</p>
                                </div>
                            </div>

                            <div className="d-flex justify-content-around">
                                {/* Direct to show the list of the followers */}
                                <p>Posts <strong>{user.posts.length}</strong></p>
                                <Link to="" className="et-user-follow">
                                    Followers <strong> {user.followersCount}</strong>
                                </Link>
                                {/* Direct to show the list of the following users */}
                                <Link to="" className="et-user-follow">
                                    Following <strong> {user.followingCount}</strong>
                                </Link>
                            </div>
                            <p className="mt-3">
                                {user.personalBio}
                            </p>
                          {user.username === currentUser.username && <div className="d-block float-end mt-5 w-100">
                            {
                              <div className={"d-flex justify-content-between"}>
                                <button className={"btn btn-danger"}
                                        onClick={logOut}>
                                  Log Out
                                </button>
                                <Link to="/profile/profile-setting"
                                      className="btn btn-outline-dark et-edit-profile-btn">
                                  Edit Profile
                                </Link>
                              </div>
                            }
                          </div>}
                        </div>
                    </div>
                    <div className="col-lg-9 mt-3 d-flex justify-content-center w-100">
                        <div className="d-flex flex-row flex-wrap justify-content-center">
                            {/* Should be a map function here to map out every post
                        that belongs to the user*/}

                            {posts.map(
                                (post)=>(PostCards({...post, author_name:`${user.nickname}`}))
                            )}
                        </div>

                    </div>
                </div>)
                     :
                 (<div>
                     {error !== '' && <div className={"alert alert-danger mt-2"} role={"alert"}>
                         {error}
                     </div>}
                     <p className={"mt-2 h2"}>You are not logged in</p>
                 </div>)}
            </div>
    )
};

