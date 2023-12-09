import React, { useState } from "react";
import "./index.css";
import "mdb-ui-kit/css/mdb.min.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Headbar = () => {
  const [terms, setTerms] = useState("");
  const user = useSelector((state) => state.userReducer);


  return (
    <div className="new-nav d-flex justify-content-between">
      <div>
        <Link className="navbar-brand mt-2 mt-lg-0" to="/">
          <img
            src="../entertainialogo.png"
            width="35" height="35" class="d-inline-block align-top me-2"
            loading="lazy"
          /> Entertainia
        </Link>
      </div>
      <div class="d-flex w-50">
        <input class="w-100"
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => { setTerms(e.target.value) }} />
        <div className="input-group-text border-0" id="search-addon">
          <Link to={`/search?terms=${terms}`}>
            <FaSearch />
          </Link>
        </div>
      </div>
      <div>
        <div class="d-flex">
          <div>
            <Link to={"/createpost"}>
              <button className="post-button">POST</button>
            </Link>
          </div>
          {user._id === "" ? (
            <Link className="signin-photo text-decoration-none" to={`/LogIn`}>Sign In</Link>
          ) : (
            <Link className="new-photo" to={`/profile/${user._id}`}>
            <img
              src={user.profilePicture}
              alt={`Profile picture for ${user.nickname}`}
              className="rounded-circle"
              height="45"
              loading="lazy"
            />
          </Link>
          )
        }
        </div>
      </div>
    </div>
  );
};
export default Headbar;
