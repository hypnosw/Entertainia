import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";
import "mdb-ui-kit/css/mdb.min.css";
import man from "../../images/man.jpg";
import tode from "../../images/toad.jpg";
import raccoon from "../../images/raccoons.jpg";
import "./index.css";
import { useSelector } from "react-redux";
import { PostCards } from "../Post-cards";
import { FaBaby, FaThumbsUp } from "react-icons/fa";
import { useState, useEffect } from "react";

import * as client from "../../Clients/postclient.js";

export default function HomePage() {
  const user = useSelector((state) => state.userReducer);
  const [posts, setPosts] = useState([]);
  const handlePosts = async () => {
    const posts = await client.getAllPosts();
    setPosts(posts);
  };

  useEffect(() => {
    handlePosts();
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
        <MDBCol></MDBCol>
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
