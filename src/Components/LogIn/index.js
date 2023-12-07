import { React, useState } from "react";
import { Link } from "react-router-dom";
import { MDBInput } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../Reducers/userReducer";
import { useNavigate } from "react-router-dom";
import * as client from "../../Clients/userclient.js";
import "./index.css";
import "mdb-ui-kit/css/mdb.min.css";

function LogIn() {
  const navigate = useNavigate();
  const [_, setError] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    role: "ADMIN",
  });

  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const signin = async () => {
    try {
      const response = await client.signin(credentials);
      // console.log(response);
      dispatch(
        setUser({
          ...user,
          username: response.username,
          _id:response._id,
          nickname: response.nickname,
          profilePicture: response.profilePicture,
          personalBio: response.personalBio,
          password: response.password,
          // posts should contain an array of the IDs of the posts that belong to this user
          posts: response.posts,
          // user ID in the following array
          following: response.following,
          followingCount: response.followingCount,
          // user ID in the followers array
          followers: response.followers,
          followersCount: response.followersCount,
          role: response.role,
        })
      );
      navigate("/home");
    } catch (err) {
      setError("Incorrect username or password");
      window.alert("Please recheck your information and try again");
    }
  };

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
                            label="Username"
                            id="username"
                            type="text"
                            size="lg"
                            onChange={(e) =>
                              setCredentials({
                                ...credentials,
                                username: e.target.value,
                              })
                            }
                          />
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
                              setCredentials((prevCredentials) => ({
                                ...prevCredentials,
                                password: e.target.value,
                              }));

                              setIsValidPassword(e.target.value.length >= 6);
                            }}
                          />
                          {!isValidPassword && (
                            <p style={{ color: "red" }}>
                              The password must be at least 6 characters long
                            </p>
                          )}
                        </div>
                      </div>
                      {/* Another checkbox to pick whether admin login */}
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
                      <br />

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
                          onClick={signin}
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
