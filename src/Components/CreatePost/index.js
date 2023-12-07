import React, { useState, useEffect } from 'react';
import {Link, Navigate, useNavigate} from "react-router-dom";
import { createPost } from "./client.js";
import {POSTS_API} from"./client.js";
import {profile} from "../UserProfile/client.js";

const CreatePost = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null); 
    const [user, setUser] = useState(null);

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

      const fetchProfile = async ()=>{
          try{
              const current = await profile();
              current ?  setUser(current) : navigate("/login");
              // console.log(user.username);

          } catch(error){
             setError(error.message);
          }
          
      }
   
      useEffect(()=>{
          fetchProfile();
      }, []);

      useEffect(()=>{
        if(user){
        console.log("fetchProfile:" + user.username);
        console.log("fetchprofile id:" + user._id);
        }
        }, [user]);

      const handleShare = async () => {
        try {
          if (!title || !content || !image) {
            setError('Please fill in all fields and select an image.');
            console.error('Please fill in all fields and select an image.');
            // Provide user feedback if the form is incomplete
            return;
          }
      
          const formData = new FormData();
          formData.append('title', title);
          formData.append('body', content);
          formData.append('images', image);
          formData.append('userId', user._id)

          const response = await fetch(
            POSTS_API,
            // 'http://localhost:5001/api/posts', 
            {
            method: 'POST',
            body: formData,
          });
      
          if (response.ok) {
            const result = await response.json();
            console.log('Post shared:', result);
            // Update the route or handle redirection as needed
            navigate('/PostDetail');
          } else {
            setError('Error sharing post');
            console.error('Error1 sharing post:', response.statusText);
            // Provide user feedback if there's an error
          }
        } catch (error) {
          setError('Error sharing post');
          console.error('Erro2 sharing post:', error);
          // Provide user feedback if there's an error
        }
      };
      

    return (
        <div className="container mt-2">
            <div className="container mt-2">
                <div>
                    <h1 className="m-0 p-0 h3">Create New Post</h1>
                    <hr className="mt-2"/>
                </div>
            <div className="d-flex justify-content-center">
                <div className="col-6">

                    
                    {/* Upload Image */}
                    <div className="d-inline-flex justify-content-between align-items-center et-profile-row">
                        <p className="et-profile-label">Upload Image</p>
                        <input type="file" name="images" accept="image/*" className="custom-file-input et-profile-icon" onChange={handleImageChange}/>
                    </div>

                    {/* Title Input */}
                    <div>
                        <label htmlFor="post-title"><strong>Title</strong></label>
                        <input
                            id="post-title"
                            type="text"
                            className="form-control"
                            value={title}
                            onChange={handleTitleChange}
                            placeholder='Enter Title'
                        />
                    </div>

                    {/* Content Textarea */}
                    <div className="mt-5">
                        <label htmlFor="post-content"><strong>Content</strong></label>
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
      {error && <p style={{ color: 'red' }}>{error}</p>}
                        <button className="btn" style={{backgroundColor:"#76ce79"}} onClick={handleShare}>Share</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    ); 
};

export default CreatePost;

