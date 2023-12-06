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
  return (
    <div className="hp-content">
      <MDBRow>
        <MDBCol>
          <MDBCarousel showControls showIndicators dark fade>
            <MDBCarouselItem
              className="w-100 d-block"
              itemId={1}
              src={raccoon}
              alt="..."
            >
              <h5 className="text-white">First slide label</h5>
              <p className="text-white">
                Nulla vitae elit libero, a pharetra augue mollis interdum.
              </p>
            </MDBCarouselItem>
            <MDBCarouselItem
              className="w-100 d-block"
              itemId={2}
              src={man}
              alt="..."
              style={{ maxHeight: "600px", borderRadius: "10px" }}
            >
              <h5 className="text-white">Second slide label</h5>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </MDBCarouselItem>

            <MDBCarouselItem
              className="w-100 d-block"
              itemId={3}
              src={tode}
              alt="..."
              style={{ maxHeight: "450px" }}
            >
              <h5 className="text-white">Third slide label</h5>
              <p className="text-white">
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </MDBCarouselItem>
          </MDBCarousel>
        </MDBCol>
        <MDBCol>
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
      <br />
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        {posts.map((post) => {
          return PostCards(post);
        })}
      </MDBRow>
    </div>
  );
}
