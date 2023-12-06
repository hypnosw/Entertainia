import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBContainer,
  MDBFooter,
} from "mdb-react-ui-kit";
import "mdb-ui-kit/css/mdb.min.css";
import man from "../../images/man.jpg";
import tode from "../../images/toad.jpg";
import raccoon from "../../images/raccoons.jpg";
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
    <div className="hp-content">
      <MDBRow>
        <MDBCol col-md-7>
          <MDBCarousel showControls showIndicators dark fade>
            {topThreePosts.map((post, index) => (
              <div key={post.id}>
                <MDBCarouselItem
                  className="w-100 d-block"
                  itemId={index + 1}
                  src={post.images[0]}
                  alt="..."
                >
                  <h5 className="text-white">{post.title}</h5>
                  <p className="text-white">{post.body}</p>
                </MDBCarouselItem>
              </div>
            ))}
          </MDBCarousel>
        </MDBCol>
        <MDBCol col-md-5>
          <div class="container mt-5">
            <div class="row align-items-center">
              <div class="col-md-12 text-md-start text-center py-6">
                <h1 class="mt-5 mb-5 fs-1 fw-bold">
                  Unleash Your Passion for Entertainment
                </h1>
                <p class="mt-2 mb-6 fs-3 lead text-secondary">
                  Share
                  <FcLikePlaceholder /> Discover
                  <FcSearch /> Connect
                  <FcHeadset />
                </p>
              </div>
              <div class="col-md-6 text-end">
                <img
                  class="pt-7 pt-md-0 img-fluid mb-9"
                  src="{% static 'homePage/img/hero/hero-img.png' %}"
                  alt=""
                />
              </div>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBRow className="row-cols-1 row-cols-md-3 g-3">
          {posts.map((post) => {
            return PostCards(post);
          })}
        </MDBRow>
      </MDBRow>
    </div>
  );
}
