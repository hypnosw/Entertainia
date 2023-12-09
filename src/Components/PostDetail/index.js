import HeadBar from "../HeadBar";
import "./index.css";
import { useSelector } from "react-redux";
import {
  FaHeart,
  FaRegHeart,
} from "react-icons/fa6";
import { FiMessageCircle } from "react-icons/fi";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as userClient from "../../Clients/userclient.js";
import * as postClient from "../../Clients/postclient.js";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const API_URL = process.env.REACT_APP_SERVER_URL;
const PostDetail = () => {
  const [error, setError] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [postDetail, setPostDetail] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const navigate = useNavigate();
  const { postId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const user = useSelector((state) => state.userReducer);

  const fetchUser = async () => {
    try {
      const currentuser = await userClient.account();
      setCurrentUser(currentuser);
    } catch (error) {
      setCurrentUser(null);
      //   console.error("Error fetching user:", error);
    }
  };

  const [comment, setComment] = useState({
    content: "",
    postId: postId,
    userId: "",
    userNickname: "",
  });

  const fetchPostDetail = async () => {
    try {
      console.log("postID:", postId);
      let postDetail = await postClient.findPostByPostID(postId);
      console.log("postID:", postDetail);
      setPostDetail(postDetail);
      setLikesCount(postDetail.numberOfLikes);
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
        setIsLiked(true);
        setLikesCount(responseData.numberOfLikes);
        toast.info("Thank for your like!", {
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
      try {
        const newComment = setCommentUser();
        postClient.createComment(newComment);
        setComment(newComment);
        const newComments = [...postDetail.comment, newComment];
        setPostDetail({ ...postDetail, comment: newComments });
      } catch (err) {
        setError(err.response.data.message);
        window.alert("Comment fails.");
        return;
      }
      //call func to create comment
    } catch (error) {
      console.error("Error during like:", error);
    }
  };

  const setCommentUser = () => {
    const userId = currentUser._id;
    const userNickname = currentUser.nickname;
    console.log(userId);
    const newComment = {
      ...comment,
      userId: userId,
      userNickname: userNickname,
    };
    console.log(newComment);
    return newComment;
  };

  const fetchData = async () => {
    console.log("Fetching user data...");
    await fetchUser();
    await fetchPostDetail();
  };

  return (

    postDetail && (
      <div className="my-5">

        <div className="container-fluid  pt-5">
          {" "}
          {/* Add padding-top to account for the fixed header */}
          {/* Main Content */}
          <div className="row">
            {/* Sidebar */}
            {/* <div className="col-md-2">
              <Sidebar />
            </div> */}
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
                      className="bg-image hover-overlay et-details-pic shadow-1-strong ripple rounded-5"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src={`data:${postDetail.images[0].contentType};base64,${postDetail.images[0].data}`}
                        className="img-fluid"
                        alt="Post"
                      />
                      {/* <a href="#!">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
                        ></div>
                      </a> */}
                    </div>
                  </div>
                  {/* Text Content */}
                  <div className="col-lg-6">
                    <div className="text-column-container d-flex flex-column justify-content-between">
                      {" "}
                      {/* Flex container */}
                      <div className="text-column-header d-flex justify-content-between">
                        {/* <img
                          src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                          className="rounded-circle"
                          height="37"
                          alt="Black and White Portrait of a Man"
                          loading="lazy"
                        /> */}
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
                        {/* <button
                          type="button"
                          className="btn btn-danger top-right-button ml-auto"
                        >
                          Follow
                        </button> */}
                      </div>
                      <h4>
                        <strong>{postDetail.title}</strong>
                      </h4>
                      <p className="text-muted">
                      {postDetail.body}
                      </p>
                      <p> {postDetail.date}</p>
                      <div className="d-flex justify-content-between et-post-author-likes float-end">
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
                          <p className="card-text mb-3 float-end">
                            {isLiked ? (
                              <FaHeart
                                style={{ color: "red", cursor: "pointer" }}
                              />
                            ) : (
                              <FaRegHeart
                                style={{ color: "black", cursor: "pointer" }}
                              />
                            )}{" "}
                            {likesCount}
                          </p>
                        </div>

                        {/* <p className="card-text mb-3">
                          <FaRegStar />6
                        </p> */}
                        {/* <p className="card-text mb-3">
                          <FiMessageCircle />
                        </p> */}
                        {/* <p className="mb-3">
                          <FaArrowUpRightFromSquare />8
                        </p> */}
                      </div>
                      <input
                        id="comment-text"
                        type="text"
                        className="form-control"
                        placeholder="Say Something"
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

                      <ul className="list-unstyled">
                        {postDetail.comment.map((c, index) => (
                          <li key={index} className="">
                            {console.log("mapping " + JSON.stringify(c))}

                            <p>
                              <strong>{c.userNickname}</strong>: {c.content}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default PostDetail;
