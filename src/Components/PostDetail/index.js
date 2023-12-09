import HeadBar from "../HeadBar";
import "./index.css";
import { useSelector } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
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
      const loginedUser = await userClient.account();
      console.log(loginedUser);
      setCurrentUser(loginedUser);
      if (loginedUser && loginedUser.likedPosts.includes(postId)) {
        setIsLiked(true);
      }
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
      let postDetail = await postClient.findPostByPostID(postId);
      let authorName = "Unkown User";
      if (postDetail.author) {
        let creator = await userClient.findUserById(postDetail.author);
        if (creator.userNickname) {
          authorName = creator.userNickname;
        } else {
          authorName = creator.username;
        }
      }
      postDetail = { ...postDetail, authorName: authorName };
      setPostDetail(postDetail);
      setLikesCount(postDetail.numberOfLikes);
    } catch (error) {
      window.alert(error);
    }
  };

  const handleLike = async () => {
    try {
      if (!currentUser || !currentUser._id) {
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
        toast.info("Thanks for commenting!", {
          position: toast.POSITION.TOP_CENTER,
        });
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
    const currentDate = new Date();
    const newComment = {
      ...comment,
      userId: userId,
      userNickname: userNickname,
      commentDate: currentDate.toDateString(),
    };
    return newComment;
  };

  const fetchData = async () => {
    await fetchUser();
    await fetchPostDetail();
  };

  return (
    postDetail && (
      <div className="my-5">
        <div className="container-fluid  pt-5">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <section className="border-bottom pb-4 mb-5">
                <div className="row gx-lg-5 d-flex align-items-center">
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
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="text-column-container d-flex flex-column justify-content-between">
                      <div className="text-column-header d-flex justify-content-between">
                        <div className="justify-content-center d-flex mb-2">
                          <strong className="h5 mx-2">{user.name}</strong>
                        </div>
                        <ToastContainer />
                      </div>
                      <h3>
                        <strong>{postDetail.title}</strong>
                      </h3>
                      <small className="text-muted">
                        by{" "}
                        <Link
                          to={`/profile/${postDetail.author}`}
                          className="text-decoration-none text-success"
                        >
                          {postDetail.authorName}
                        </Link>
                        , &nbsp;
                        {postDetail.postDate.substring(0, 10)}
                      </small>
                      <p>{postDetail.body}</p>
                      <div className="d-flex justify-content-between et-post-author-likes float-end">
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
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
              <div className="row">
                <div className="col-9">
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
                </div>
                <div className="col-3">
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={handleComment}
                  >
                    + Comment
                  </button>
                </div>
              </div>
              <br />
              {postDetail.comment.map((c, index) => (
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">
                      <Link
                        to={`/profile/${c.userId}`}
                        className="text-decoration-none text-secondary"
                      >
                        <p>{c.userNickname}:</p>
                      </Link>
                      <small className="float-end text-muted">
                        {c.commentDate.substring(0, 10)}
                      </small>
                    </h5>
                    <p class="card-text ">{c.content}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
    )
  );
};
export default PostDetail;
