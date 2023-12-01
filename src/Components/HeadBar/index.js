import React from "react";
import "./index.css";
import "mdb-ui-kit/css/mdb.min.css"
import { FaSearch } from "react-icons/fa";
import {Link} from "react-router-dom";


const Headbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
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
                    <Link className="navbar-brand mt-2 mt-lg-0" to="/home">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                            height="15"
                            alt="MDB Logo"
                            loading="lazy"
                        />
                    </Link>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">Sign In</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="#">Settings</a>
                        </li>
                    </ul>
                </div>

                <div className="input-group rounded">
                    <input
                        type="search"
                        className="form-control rounded"
                        placeholder="Come and catch up with friends!"
                        aria-label="Search"
                        aria-describedby="search-addon"
                    />
                    <div className="input-group-text border-0" id="search-addon">
                        <FaSearch />
                    </div>
                    {/* <span className="input-group-text border-0" id="search-addon">
                        <i className="fas fa-search"></i>
                    </span> */}
                    {/* <li className="sidebar-item"><FaSearch /> </li> */}
                </div>
                
               {/* // 还需要做登录后的sign out */}
               {/* // 还是说点进profile 在最下方signout比较好 */}
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Sign In</a>
                    </li>
                </ul>
                



                <div className="d-flex align-items-center">
                    <a className="text-reset me-3" href="#">
                        <i className="fas fa-shopping-cart"></i>
                    </a>

                    <div className="dropdown">
                        <a
                            className="text-reset me-3 dropdown-toggle hidden-arrow"
                            href="#"
                            id="navbarDropdownMenuLink"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="fas fa-bell"></i>
                            <span className="badge rounded-pill badge-notification bg-danger">1</span>
                        </a>
                        {/* <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuLink"
                        >
                            <li><a className="dropdown-item" href="#">Some news</a></li>
                            <li><a className="dropdown-item" href="#">Another news</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul> */}
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
                        {/* <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuAvatar"
                        >
                            <li><a className="dropdown-item" href="#">My profile</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Logout</a></li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Headbar;
