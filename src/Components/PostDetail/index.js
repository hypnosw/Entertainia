import Sidebar from "../SideBar";
import HeadBar from "../HeadBar";
import "./index.css";
import { useSelector } from "react-redux";
import {
  FaHeart,
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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_URL = process.env.REACT_APP_SERVER_URL;
const PostDetail = () => {
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [postDetail, setPostDetail] = useState();
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const navigate = useNavigate();
  const { postId } = useParams();

  const user = useSelector((state) => state.userReducer);

  const fetchUser = async () => {
    try {
      console.log("Fetching user...");
      const currentuser = await userClient.account();
      setCurrentUser(currentuser);
      console.log("User fetched successfully:", currentuser);
    } catch (error) {
      setCurrentUser(null);
      //   console.error("Error fetching user:", error);
    }
  };

  const [comment, setComment] = useState({
    content: "",
    postId: postId,
  });

  const fetchPostDetail = async () => {
    try {
      const postDetail = await postClient.findPostByPostID(postId);
      setPostDetail(postDetail);
      //   console.log(postDetail);
    } catch (error) {
      window.alert(error);
    }
  };

  const handleLike = async () => {
    try {
      if (!currentUser || !currentUser._id) {
        // 用户未登录或者用户 ID 未定义
        toast.warn("Please Log In", {
          position: toast.POSITION.TOP_CENTER,
        });
        return;
      }
      const postIdToLike = postId; // postid!!!
      const userId = currentUser._id; //userid!!!
      //   console.log("Liking post with postId:", postIdToLike, "and userId:", userId);

      const response = await fetch(`${API_URL}/posts/like`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postIdToLike, userId }),
      });
      console.log(response);
      if (response.ok) {
        const responseData = await response.json();
        setIsLiked(!isLiked);
        setLikesCount(responseData.numberOfLikes);
        toast.info("Thanks for your like!", {
          position: toast.POSITION.TOP_CENTER,
        });
      } else {
        const responseData = await response.json();
        if (response.status === 409) {
          console.log("look here");
          toast.info(responseData.message, {
            position: toast.POSITION.TOP_CENTER,
          });
        }
        // const errorData = await response.json();
        // console.error("Failed to like the post:", errorData);
      }
    } catch (error) {
      console.error("Error during like:", error);
    }
  };

  const handleComment = async () => {
    try {
      //check login
      if (!currentUser || !currentUser._id) {
        toast.warn("Please Log In", {
          position: toast.POSITION.TOP_CENTER,
        });
        return;
      }

      // fetch id
      const userId = currentUser._id;
      setComment({
        ...comment,
        userId: userId,
      });

      try {
        await postClient.createComment(comment);
        window.alert("Comment successful!");
      } catch (err) {
        setError(err.response.data.message);
        window.alert("Comment fails.");
      }

      //call func to create comment
    } catch (error) {
      console.error("Error during like:", error);
    }
  };

  //   useEffect(() => {
  //     fetchUser();
  //     fetchPostDetail();
  //   }, []);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Fetching user data...");
      await fetchUser();
      await fetchPostDetail();
    };

    fetchData();
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
                      {/* 
                      <button
                        className="btn btn-warning float-end"
                        onClick={handleLike}
                      >
                        {isLiked ? <FaHeart /> : <FaRegHeart />}
                        Like
                      </button> */}
                      <ToastContainer />
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
                      {/* <p className="card-text mb-3">
                      <button
                        className="btn float-end"
                        onClick={handleLike}
                      >
                        {isLiked ? <FaHeart /> : <FaRegHeart />}
                      </button>
                      </p> */}
                      <div
                        className="d-flex justify-content-between et-post-author-likes"
                        onClick={handleLike}
                      >
                        <p className="card-text mb-3">
                          {isLiked ? (
                            <FaHeart style={{ color: "red" }} />
                          ) : (
                            <FaRegHeart style={{ color: "red" }} />
                          )}{" "}
                          {likesCount}
                        </p>
                      </div>

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
                      onChange={(e) =>
                        setComment({
                          ...comment,
                          content: e.target.value,
                        })
                      }
                    />
                    <br />
                    <button
                      type="button"
                      className="btn btn-primary align-self-end bottom-right-button"
                      onClick={handleComment}
                    >
                      Comment
                    </button>
                    {/* <p>{postDetail.title}</p>
                    <p>{postDetail.body}</p>
                    <p>{postDetail.postDate}</p>
                    <p>{postDetail.numberOfLikes}</p>
                    <ul>
                      {postDetail.comment.map((c, index) => (
                        <li key={index}>
                          <strong>{c.author}</strong>: {c.content}
                        </li>
                      ))}
                    </ul> */}
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
