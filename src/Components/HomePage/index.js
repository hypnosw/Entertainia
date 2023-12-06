import React from "react";
import "mdb-ui-kit/css/mdb.min.css";
import man from "../../images/man.jpg";

import "./index.css";
import { useSelector } from "react-redux";
import { PostCards } from "../Post-cards";

import { useState, useEffect } from "react";
import { FcHeadset, FcLikePlaceholder, FcSearch } from "react-icons/fc";
import * as client from "../../Clients/postclient.js";

export default function HomePage() {
  const user = useSelector((state) => state.userReducer);
  const [posts, setPosts] = useState([]);
  const [popularPosts, setPopularPosts] = useState([]);
  const handlePosts = async () => {
    const posts = await client.getAllPosts();
    setPosts(posts);
  };

  const handlePopularPosts = async () => {
    const popularPosts = await client.getAllSortedPosts();
    setPopularPosts(popularPosts);
  };

  useEffect(() => {
    handlePosts();
    handlePopularPosts();
  }, []);

  const topThreePosts = popularPosts.slice(0, 3);
  return (
    <div class="container text-center mt-2">
      <div className="row text-center ">
        <div class="col col-md-1"></div>
        <div class="col col-md-5 d-none d-md-block">
          <img className="w-100 d-block" src={man} alt="..." />
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
      <div className="col-lg-9 mt-3 d-flex justify-content-center w-100">
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {posts.map((post) => {
            return PostCards(post);
          })}
        </div>
      </div>

      <footer className="bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
        <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
          © 2023 Copyright:
          <a
            className="text-neutral-800 dark:text-neutral-400"
            href="https://tailwind-elements.com/"
          >
            Entertaina team
          </a>
        </div>
      </footer>
    </div>
  );
}
