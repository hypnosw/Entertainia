import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import React, { useState } from "react";
import validator from "validator";
import { Link } from "react-router-dom";
import "mdb-ui-kit/css/mdb.min.css";
import "./index.css";
import * as client from "../../Clients/userclient.js";

function SignUp() {
  const [error, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    role: "ADMIN",
  });

  const handleRoleChange = (event) => {
    const selectedRole = event.target.value;
    switch (selectedRole) {
      case "2":
        setCredentials({
          ...credentials,
          role: "ADMIN",
        });
        break;
      case "3":
        setCredentials({
          ...credentials,
          role: "USER",
        });
        break;
      case "4":
        setCredentials({
          ...credentials,
          role: "ENTERPRISE",
        });
        break;
      default:
    }
  };
  const [isValidPassword, setIsValidPassword] = useState(true);

  const signup = async () => {
    try {
      await client.signup(credentials);
      window.alert("Signup successful!");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <MDBContainer className="my-5">
      <MDBCard className="mx-auto ">
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

              {/* create a new user */}
              <MDBInput
                wrapperClass="mb-4"
                label="Username"
                id="Username"
                type="text"
                size="md"
                placeholder="User123456"
                onChange={(e) =>
                  setCredentials({
                    ...credentials,
                    username: e.target.value,
                  })
                }
              />

              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="password"
                type="password"
                size="md"
                placeholder="Must have 6 characters"
                onChange={(e) => {
                  setCredentials((prevCredentials) => ({
                    ...prevCredentials,
                    password: e.target.value,
                  }));

                  setIsValidPassword(e.target.value.length >= 6);
                }}
              />
              {!isValidPassword && (
                <p style={{ color: "red" }}>Less than 6 characters.</p>
              )}
              <div className="row">
                <div className="col-12">
                  <select
                    className="select form-select"
                    onChange={handleRoleChange}
                  >
                    <option value="1" disabled>
                      Role
                    </option>
                    <option value="2">Admin</option>
                    <option value="3">User</option>
                    <option value="4">Enterprise</option>
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

              {/* By clicking it, add the new user to the db. */}
              <button
                type="button"
                className="btn btn-dark btn-lg mb-4 px-5"
                color="dark"
                size="lg"
                onClick={signup}
              >
                Create account
              </button>
              <p
                className="mb-5 pb-lg-2 text-center"
                style={{ color: "#393f81" }}
              >
                Already have an account?&nbsp;
                <Link
                  to={`/LogIn`}
                  activeClassName="active"
                  style={{ color: "#393f81" }}
                >
                  Log in here
                </Link>
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
