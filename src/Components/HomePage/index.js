import React from "react";
import "mdb-ui-kit/css/mdb.min.css";
import man from "../../images/man.jpg";

import "./index.css";
import { useSelector } from "react-redux";
import { PostCards } from "../Post-cards";

import { useState, useEffect } from "react";
import {
  FcHeadset,
  FcLikePlaceholder,
  FcSearch,
  FcDislike,
} from "react-icons/fc";
import * as client from "../../Clients/postclient.js";
import * as userClient from "../../Clients/userclient.js";

export default function HomePage() {
  const user = useSelector((state) => state.userReducer);
  const [posts, setPosts] = useState([]);
  const [popularPosts, setPopularPosts] = useState([]);

  const populateNickname = async (posts) => {
    for (let i = 0; i < posts.length; i++) {
      let author_name = "Stranger";
      try {
        if (posts[i].author) {
          const author = await userClient.findUserById(posts[i].author);
          if (author.nickname) {
            author_name = author.nickname;
          } else if (author.username) {
            author_name = author.username;
          }
        }
      } catch (error) {
        console.log(error);
      }
      posts[i] = { ...posts[i], author_name: author_name };
    }
  };

  const handlePosts = async () => {
    const posts = await client.getSortedPostsWithLimit(0, 8);
    await populateNickname(posts);
    setPosts(posts);
  };

  const getMorePosts = async () => {
    const nextPosts = await client.getSortedPostsWithLimit(posts.length, 4);
    await populateNickname(nextPosts);
    setPosts([...posts, ...nextPosts]);
  };

  // const handlePopularPosts = async () => {
  //   const popularPosts = await client.getAllSortedPosts();
  //   setPopularPosts(popularPosts);
  // };

  useEffect(() => {
    handlePosts();
    // handlePopularPosts();
  }, []);

  const topThreePosts = popularPosts.slice(0, 3);
  return (
    <div class="container text-center mt-2">
      <div className="row text-center ">
        <div class="col col-md-1"></div>
        <div class="col col-md-5 d-none d-md-block">
          <img
            className="img-fluid w-100 d-block img-rounded img-thumbnail "
            src={man}
            alt="..."
          />
        </div>
        <div class="col col-md-6 col-sm-12">
          <div class="container mt-5">
            <div class="row align-items-center">
              <div class="col-md-12 text-md-start text-center py-6">
                <h1 class="mt-5 mb-5 fs-1 text-md-start fw-bold">
                  Unleash Your Passion for Entertainment
                </h1>
                <p class="mt-2 mb-6 fs-3 lead text-secondary">
                  Share
                  <FcLikePlaceholder /> Discover
                  <FcSearch /> Connect
                  <FcHeadset />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="col-lg-9 mt-3 d-flex  w-100">
        <div class="col col-md-1"></div>
        <div className="d-flex flex-row flex-wrap">{posts.map(PostCards)}</div>
      </div>
      <br />
      <button
        className="btn btn-outline-secondary btn-rounde"
        onClick={getMorePosts}
      >
        Load More &gt;&gt;&gt;
      </button>
    </div>
  );
}
