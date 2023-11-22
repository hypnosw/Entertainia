import React, { useState } from 'react';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleSaveDraft = () => {
        // 还没写完-处理保存草稿的逻辑
        console.log('Draft saved:', { title, content });
    };

    const handleShare = () => {
        // 还没写完-处理分享的逻辑
        console.log('Post shared:', { title, content });
    };

    return (
        <div className="container mt-2">

            <div className="d-flex justify-content-center">
                <div className="col-6">

                    
                    {/* Upload Image */}
                    <div className="d-inline-flex justify-content-between align-items-center et-profile-row">
                        <p className="et-profile-label">Upload Image</p>
                        <input type="file" accept="image/*" className="custom-file-input et-profile-icon" />
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
                        />
                    </div>

                    {/* Buttons */}
                    <div className="d-flex justify-content-between mt-3">
                        <button className="btn btn-outline-dark" onClick={handleSaveDraft}>Save Draft</button>
                        <button className="btn btn-dark" onClick={handleShare}>Share</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;
