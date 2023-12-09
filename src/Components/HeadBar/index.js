import React, { useState } from "react";
import "./index.css";
import "mdb-ui-kit/css/mdb.min.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Headbar = () => {
  const [terms, setTerms] = useState("");
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      <div className="container-fluid d-flex justify-content-between">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Link className="navbar-brand mt-2 mt-lg-0" to="/">
            <img
              // src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              src="../entertainialogo.png"
              width="35" height="35" class="d-inline-block align-top"
              loading="lazy"
            /> Entertainia
          </Link>
        </div>

        <div className="input-group rounded">
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => { setTerms(e.target.value) }} />
          </form>
          <div className="input-group-text border-0" id="search-addon">
            <Link to={`/search?terms=${terms}`}>
              <FaSearch />
            </Link>
          </div>
        </div>

        {/* <div className="shared-parent-container"> */}
        <div className="top-section">
          <Link to={"/createpost"}>
            <button className="post-button">POST</button>
          </Link>
        </div>
        {/* </div> */}


        {/* 还需要做登录后的sign out */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {/* add link to login */}
          <Link to={`/LogIn`}>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sign In
              </a>
            </li>
          </Link>
        </ul>

        <div className="d-flex align-items-center">
          <div>
            <a
              className="text-reset me-3 dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-bell"></i>
            </a>
          </div>

          <div className="dropdown">
            <Link
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              to="/profile"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle"
                height="25"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </Link>

          </div>
        </div>
      </div>



    </nav>
  );
};

export default Headbar;
