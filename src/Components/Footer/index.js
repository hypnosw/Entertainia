import { FcDislike } from "react-icons/fc";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import "./index.css";
import React from "react";

export default function Footer() {
  return (
    <footer className="font-small blue pt-4">
      <hr className="clearfix w-100  pb-0" />
      <div className="text-center">
        <MDBBtn
          tag="a"
          color="none"
          className="m-1"
          style={{ color: "#3b5998" }}
        >
          <MDBIcon fab icon="facebook-f" size="lg" />
        </MDBBtn>

        <MDBBtn
          tag="a"
          color="none"
          className="m-1"
          style={{ color: "#55acee" }}
        >
          <MDBIcon fab icon="twitter" size="lg" />
        </MDBBtn>

        <MDBBtn
          tag="a"
          color="none"
          className="m-1"
          style={{ color: "#dd4b39" }}
        >
          <MDBIcon fab icon="google" size="lg" />
        </MDBBtn>

        <MDBBtn
          tag="a"
          color="none"
          className="m-1"
          style={{ color: "#ac2bac" }}
        >
          <MDBIcon fab icon="instagram" size="lg" />
        </MDBBtn>
      </div>

      <div className="footer-copyright text-center py-3">
        © Entertainia Team: My heart is in the work
        <FcDislike />
      </div>
    </footer>
  );
}
