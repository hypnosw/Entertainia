import Sidebar from "../SideBar";
import HeadBar from "../HeadBar";
import "./index.css";
import { useSelector } from "react-redux";
import {
  FaRegHeart,
  FaRegStar,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { FiMessageCircle } from "react-icons/fi";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as userClient from "../../Clients/userclient.js";
import * as postClient from "../../Clients/postclient.js";
import { profile } from "../UserProfile/client.js";

const PostDetail = () => {
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [postDetail, setPostDetail] = useState();
  const navigate = useNavigate();
  const { postId } = useParams();

  const user = useSelector((state) => state.userReducer);
  console.log(user);

  const fetchUser = async () => {
    try {
      const currentuser = await userClient.account();
      setCurrentUser(currentuser);
    } catch (error) {
      setCurrentUser(null);
    }
  };

  const fetchPostDetail = async () => {
    try {
      const postDetail = await postClient.findPostByPostID(postId);
      setPostDetail(postDetail);
      console.log(postDetail);
    } catch (error) {
      window.alert(error);
    }
  };

  const handleLike = async () => {
    try {
      if (!currentUser) {
        console.log("User not logged in");
        return;
      }
      const postId = postId; // postid!!!
      const userId = currentUser.id; //userid!!!
      console.log("Liking post with postId:", postId, "and userId:", userId);

      //   const response = await postClient.likePost(postId, userId);

      const response = await fetch(`http://localhost:5001/api/posts/like`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postId, userId }),
      });

      if (response.ok) {
        // 显示“已点赞”等逻辑，一会再写
        // setLiked(true);
      } else {
        console.error("Failed to like the post");
      }
    } catch (error) {
      console.error("Error during like:", error);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchPostDetail();
  }, []);

  return (
    <main className="my-5">
      {/* Fixed HeadBar */}
      <div className="fixed-top">
        <HeadBar />
      </div>
      <div className="container-fluid  pt-5">
        {" "}
        {/* Add padding-top to account for the fixed header */}
        {/* Main Content */}
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-2">
            <Sidebar />
          </div>
          {/* Post Content */}
          <div className="col-md-8 mx-auto">
            {" "}
            {/* Centered and occupying more space */}
            {/* Section: Post Detail */}
            <section className="border-bottom pb-4 mb-5">
              <div className="row gx-lg-5 d-flex align-items-center">
                {/* Image */}
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <div
                    className="bg-image hover-overlay shadow-1-strong ripple rounded-5"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="https://mdbootstrap.com/img/new/slides/080.jpg"
                      className="img-fluid"
                      alt="Post"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </div>
                </div>
                {/* Text Content */}
                <div className="col-lg-6">
                  <div className="text-column-container d-flex flex-column justify-content-between">
                    {" "}
                    {/* Flex container */}
                    <div className="text-column-header d-flex justify-content-between">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                        className="rounded-circle"
                        height="37"
                        alt="Black and White Portrait of a Man"
                        loading="lazy"
                      />
                      {/* Username */}
                      <div className="justify-content-center d-flex mb-2">
                        <strong className="h5 mx-2">{user.name}</strong>
                      </div>
                      {/* <span className="badge bg-danger px-2 py-1 shadow-1-strong">News of the day</span> */}
                      {/* like button */}

                      <button
                        className="btn btn-warning float-end"
                        onClick={handleLike}
                      >
                        Like
                      </button>

                      <button
                        type="button"
                        className="btn btn-danger top-right-button ml-auto"
                      >
                        Follow
                      </button>
                    </div>
                    <h4>
                      <strong>Facilis consequatur eligendi</strong>
                    </h4>
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis consequatur eligendi quisquam doloremque vero ex
                      debitis veritatis placeat unde animi laborum sapiente illo
                      possimus, commodi dignissimos obcaecati illum maiores
                      corporis. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Facilis consequatur eligendi quisquam
                      doloremque vero ex debitis veritatis placeat unde animi
                      laborum sapiente illo possimus, commodi dignissimos
                      obcaecati illum maiores corporis.
                    </p>
                    <div className="d-flex justify-content-between et-post-author-likes">
                      <p className="card-text mb-3">
                        <FaRegHeart />6
                      </p>
                      <p className="card-text mb-3">
                        <FaRegStar />6
                      </p>
                      <p className="card-text mb-3">
                        <FiMessageCircle />6
                      </p>
                      <p className="mb-3">
                        <FaArrowUpRightFromSquare />8
                      </p>
                    </div>
                    <input
                      id="comment-text"
                      type="text"
                      className="form-control"
                      defaultValue="Say Something"
                    />
                    <br />
                    <button
                      type="button"
                      className="btn btn-primary align-self-end bottom-right-button"
                    >
                      Comment
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};
export default PostDetail;
