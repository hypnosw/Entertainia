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
import city from "../../images/city.jpeg";
import spider from "../../images/spiderman.jpg";
import game from "../../images/game.jpg";
import "./index.css";
import { useSelector } from "react-redux";
import { PostCards } from "../Post-cards";
import { FaBaby, FaThumbsUp } from "react-icons/fa";

export default function HomePage() {
  const user = useSelector((state) => state.userReducer);
  const post = {
    title: "Title so so very long",
    author: "No Author",
    likes: ["12131", "dwadadasd", "dadsads"],
  };
  return (
    <div className="hp-content">
      <div style={{ maxWidth: "1255px" }}>
        <MDBCarousel showControls showIndicators dark fade>
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={1}
            src={city}
            alt="..."
            style={{ maxHeight: "450px" }}
          >
            <h5 className="text-white">First slide label</h5>
            <p className="text-white">
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>
          </MDBCarouselItem>
          <MDBCarouselItem
            className="w-100 d-block"
            itemId={2}
            src={spider}
            alt="..."
            style={{ maxHeight: "450px" }}
          >
            <h5 className="text-white">Second slide label</h5>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </MDBCarouselItem>

          <MDBCarouselItem
            className="w-100 d-block"
            itemId={3}
            src={game}
            alt="..."
            style={{ maxHeight: "450px" }}
          >
            <h5 className="text-white">Third slide label</h5>
            <p className="text-white">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </MDBCarouselItem>
        </MDBCarousel>
      </div>
      <MDBRow>
        <MDBRow className="row-cols-1 row-cols-md-4 g-4">
          <MDBCol>{PostCards(post)}</MDBCol>
          <MDBCol>{PostCards(post)}</MDBCol>
          <MDBCol>{PostCards(post)}</MDBCol>
          <MDBCol>{PostCards(post)}</MDBCol>
          <MDBCol>{PostCards(post)}</MDBCol>
        </MDBRow>
      </MDBRow>
    </div>
  );
}
