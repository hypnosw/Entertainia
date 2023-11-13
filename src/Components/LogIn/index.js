import { React, useState } from "react";
import validator from "validator";
import { Link } from "react-router-dom";
import { MDBCheckbox, MDBInput } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../Reducers/userReducer";
import "./index.css";
import "mdb-ui-kit/css/mdb.min.css";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValidEmail(validator.isEmail(newEmail));
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setIsValidPassword(newPassword.length >= 8);
  };

  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (isValidEmail && isValidPassword && email && password) {
      dispatch(
        setUser({
          ...user,
          email: email,
          password: password,
          loggedIn: true,
          isAdmin: isAdmin,
        })
      );
      console.log(email);
      console.log(password);
      console.log(user);
    }
  };

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

                    {/* Two inputs for email address and password, check if in database */}

                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-2">
                        <div className="form-outline flex-fill mb-0">
                          <MDBInput
                            wrapperClass="mb-4"
                            label="Email Adress"
                            id="email"
                            type="email"
                            size="lg"
                            onChange={(e) => {
                              {
                                handleEmailChange(e);
                              }
                            }}
                          />
                          {!isValidEmail && (
                            <p style={{ color: "red" }}>
                              Invalid email address. Please enter a valid email.
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-2">
                        <div className="form-outline flex-fill mb-0">
                          <MDBInput
                            wrapperClass="mb-4"
                            label="Password"
                            id="password"
                            type="password"
                            size="lg"
                            onChange={(e) => {
                              {
                                handlePasswordChange(e);
                              }
                            }}
                          />
                          {!isValidPassword && (
                            <p style={{ color: "red" }}>
                              Password incorrect or does not match the email
                              address.
                            </p>
                          )}
                        </div>
                      </div>
                      {/* Another checkbox to pick whether admin login */}
                      <div className="d-flex justify-content-between  mb-4">
                        <MDBCheckbox
                          name="flexCheck"
                          value="false"
                          id="flexCheckDefault"
                          label="Is it an admin account?"
                          onClick={() => setIsAdmin(!isAdmin)}
                        />
                      </div>
                      {/* If not a exiting account, the user can choose to create one */}
                      <p className="ms-5">
                        Don't have an account?&nbsp;
                        <Link
                          to={`/SignUp`}
                          activeClassName="active"
                          style={{ color: "#393f81" }}
                        >
                          Register here
                        </Link>
                      </p>
                      <br />

                      {/* If the account information is already stored in db, after clicking this button, 
                      change the state of isLogin to True and redirect to the homepage */}
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          className="btn btn-dark btn-lg"
                          onClick={() => handleSubmit()}
                        >
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
