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
import Sidebar from "../SideBar";
import HeadBar from "../HeadBar";
import city from "../../images/city.jpeg";
import spider from "../../images/spiderman.jpg";
import game from "../../images/game.jpg";
import "./index.css";

export default function HomePage() {
  return (
    <div>
      <MDBRow>
        <MDBCol md="2">
          <Sidebar />
        </MDBCol>
        <MDBCol md="10">
          <HeadBar />
          <div style={{ maxWidth: "1220px" }}>
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
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </MDBCarouselItem>
            </MDBCarousel>
          </div>

          <MDBRow>
            <MDBRow className="row-cols-1 row-cols-md-3 g-4">
              <MDBCol>
                <MDBCard>
                  <MDBCardImage
                    src="https://mdbootstrap.com/img/new/standard/city/041.webp"
                    alt="..."
                    position="top"
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard>
                  <MDBCardImage
                    src="https://mdbootstrap.com/img/new/standard/city/042.webp"
                    alt="..."
                    position="top"
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard>
                  <MDBCardImage
                    src="https://mdbootstrap.com/img/new/standard/city/043.webp"
                    alt="..."
                    position="top"
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol>
                <MDBCard>
                  <MDBCardImage
                    src="https://mdbootstrap.com/img/new/standard/city/044.webp"
                    alt="..."
                    position="top"
                  />
                  <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
