import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { createPost } from "./client.js";

const CreatePost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e) => {
    // 处理文件选择
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleShare = async () => {
    try {
      if (!title || !content || !image) {
        console.error("Please fill in all fields and select an image.");
        // Provide user feedback if the form is incomplete
        return;
      }

      const formData = new FormData();
      formData.append("title", title);
      formData.append("body", content);
      formData.append("images", image);

      const response = await fetch("http://localhost:4000/api/posts", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Post shared:", result);
        // Update the route or handle redirection as needed
        navigate("/PostDetail");
      } else {
        console.error("Error sharing post:", response.statusText);
        // Provide user feedback if there's an error
      }
    } catch (error) {
      console.error("Error sharing post:", error);
      // Provide user feedback if there's an error
    }
  };

  return (
    <div className="container mt-2">
      <div className="container mt-2">
        <div>
          <h1 className="m-0 p-0 h3">Create New Post</h1>
          <hr className="mt-2" />
        </div>
        <div className="d-flex justify-content-center">
          <div className="col-6">
            {/* Upload Image */}
            <div className="d-inline-flex justify-content-between align-items-center et-profile-row">
              <p className="et-profile-label">Upload Image</p>
              <input
                type="file"
                name="images"
                accept="image/*"
                className="custom-file-input et-profile-icon"
                onChange={handleImageChange}
              />
            </div>

            {/* Title Input */}
            <div>
              <label htmlFor="post-title">
                <strong>Title</strong>
              </label>
              <input
                id="post-title"
                type="text"
                className="form-control"
                value={title}
                onChange={handleTitleChange}
                placeholder="Enter Title"
              />
            </div>

            {/* Content Textarea */}
            <div className="mt-5">
              <label htmlFor="post-content">
                <strong>Content</strong>
              </label>
              <textarea
                id="post-content"
                className="form-control"
                value={content}
                onChange={handleContentChange}
                rows={8}
                placeholder="Add Content"
              />
            </div>

            {/* Buttons */}
            <div className="d-flex justify-content-between mt-3">
              <Link to={"/"} className="btn btn-outline-dark">
                Back
              </Link>
              <button
                className="btn"
                style={{ backgroundColor: "#76ce79" }}
                onClick={handleShare}
              >
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
