import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

import { MDBCheckbox } from "mdb-react-ui-kit";

function LogIn() {
  return (
    <div className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      LOG IN
                    </p>

                    <form class="mx-1 mx-md-4">
                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            class="form-control"
                          />
                          <label class="form-label" for="form3Example1c">
                            Email Adress
                          </label>
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                        <div class="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example3c"
                            class="form-control"
                          />
                          <label class="form-label" for="form3Example3c">
                            Password
                          </label>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between  mb-4">
                        <MDBCheckbox
                          name="flexCheck"
                          value=""
                          id="flexCheckDefault"
                          label="Remember me"
                        />
                      </div>
                      <p className="ms-5">
                        Don't have an account?
                        <Link
                          to={`/SignUp`}
                          activeClassName="active"
                          style={{ color: "#393f81" }}
                        >
                          Register here
                        </Link>
                      </p>
                      <br />

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" className="btn btn-dark btn-lg">
                          LOGIN
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
