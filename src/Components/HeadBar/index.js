import React from "react";
import "./index.css";
import "mdb-ui-kit/css/mdb.min.css"

const HeadBar = () => {
    return (
        <div className="headbar">
            <div className="d-inline-flex justify-content-between
                        align-items-center">
                <img src="#" alt="" className="form-control headbar-icon" />
                <input type="text" placeholder="Anything New for today?" />
                <button className="form-control search-btn">Search</button>
                <div class="d-grid gap-1 d-md-flex" >
                    <button type="button" class="btn btn-outline-primary btn-sm">Log In</button>
                    <button type="button" class="btn btn-outline-primary btn-sm">Settings</button>
                </div>
            </div>
        </div>
    );
};
export default HeadBar;
