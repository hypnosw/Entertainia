import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import "./index.css";

function SignUp() {
  return (
    <MDBContainer className="my-5">
      <MDBCard className="w-50 mx-auto ">
        <MDBRow className="g-0">
          <MDBCol md="12">
            <MDBCardBody className="d-flex flex-column">
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                style={{ alignSelf: "flex-end" }}
              ></button>
              <div className="d-flex flex-row mt-2">
                <span className="h1 fw-bold mb-0">Sign Up</span>
              </div>
              <br />

              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
              />
              <div className="row">
                <div className="col-12">
                  <select className="select form-control">
                    <option value="1" disabled>
                      Role
                    </option>
                    <option value="2">Admin</option>
                    <option value="3">User</option>
                  </select>
                  <div className="small text-muted mt-2">
                    Choose the role, admin or normal user.
                  </div>
                </div>
              </div>
              <br />
              <p>
                By continuing, you agree to our User Agreement and acknowledge
                that you understand the Privacy Policy.
              </p>

              <MDBBtn className="mb-4 px-5" color="dark" size="lg">
                Create account
              </MDBBtn>
              <p
                className="mb-5 pb-lg-2 text-center"
                style={{ color: "#393f81" }}
              >
                Already have an account?{" "}
                <a href="#!" style={{ color: "#393f81" }}>
                  Login here
                </a>
              </p>

              {/* <div className="d-flex flex-row justify-content-start mx-auto">
                <a href="#!" className="small text-muted me-1">
                  Terms of use.
                </a>
                <a href="#!" className="small text-muted mx-auto">
                  Privacy policy
                </a>
              </div> */}
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default SignUp;
