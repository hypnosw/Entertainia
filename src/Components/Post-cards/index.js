import {Link} from "react-router-dom";
import {FaBaby, FaThumbsUp} from "react-icons/fa";
import React from "react";
import "./index.css";

export const PostCards = (post)=>{
    // post should be  an object of the post, fields depend on the schemas
    return(
        <Link to="" className="card et-post-cards">
            <div className="bg-image hover-overlay" data-mdb-ripple-init
                 data-mdb-ripple-color="light">
                <img src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp"
                     className="img-fluid"/>
            </div>
            <div className="card-body">
                <h5 className="card-title mb-3">{post.title} <FaBaby/></h5>
                <div className="d-flex justify-content-between et-post-author-likes">
                    <p className="card-text mb-0">{post.author}</p>
                    {/* Assuming that the likes field is an array of the ID of
                     the users who liked the post, or if we have a field that keeps count of likes,
                     then we can use that instead of array.length */}
                    <p className="mb-0"><FaThumbsUp/>{post.likes.length}</p>
                </div>
            </div>
        </Link>
    );
}