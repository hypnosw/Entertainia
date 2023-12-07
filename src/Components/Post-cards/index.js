import { Link } from "react-router-dom";
import { FaBaby, FaThumbsUp } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import "./index.css";
import * as client from "../../Clients/userclient.js";

export const PostCards = (post) => {
  return (
    <Link to="" className="card et-post-cards">
      <div
        className="bg-image hover-overlay"
        data-mdb-ripple-init
        data-mdb-ripple-color="light"
      >
        {post.images[0] !== undefined ? (
          <img
            src={`data:${post.images[0].contentType};base64,${post.images[0].data}`}
            className="img-fluid"
            alt={`Image for the post ${post.title}`}
          />
        ) : (
          <img
            src={`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8AAADQ0NCurq5wcHCVlZXu7u7y8vIvLy9lZWX8/PxpaWn29vaSkpJtbW35+fnk5OS+vr5+fn7FxcXb29t3d3eGhoY9PT2np6e6urrOzs6goKBERETIyMg2Njba2tonJyccHBxPT09aWlopKSkUFBQLCwtWVlYQEBAaGhqDg4NBQUGWFZl0AAAFOElEQVR4nO3bCXOqOhgG4C8sYV9kE0RApK1t/f//74ZFq7149PY4RbzvM+OACXbyFkwgIBEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGRObyX9SdFuonpTN/ZHDHY7berG/ogcGJvvSfQTJ5XLqdv6c9w5iWes+FmlHwZDzX6i5t3FV0RlpFbrD+X415t1R9oxYTVaH88+Ie2HgPWF+uXsE66HhJsL9dnsE6pDwu2Fevtt/Cs6H4eEF/eTxVj2mw26u0PCi/spf/qE4dMn9J8+offy7AnFePIco8XlhMr/IKH1i+25v+sJeTZ+yjoX1xPO3XjCSvYnas/9jSe0Zt67nBpNaG6YM1WD7m58H9ZsMVF77m804ezP1E4dJmrOxjzpmRIu4qAVp6eFRRw/T18KAL9K45zbYjm8TM5FiSmucUW51tVr/WbaYa37mG32r+GtZ07R9tvo5b502qHAJ85M8vUl03Uxsm/rfSlO0iK2LBOxWbN/r5eBWClY16FaYqh0xOc4s7u37pQZ/qzuz1MKthVDervmsVW70POuXGMa1d2q+9kVKP2pm8sKcoJDQs4Y//6HH0Ytd4uiXKa8S2j34/qQ0H6zh1W3201anb22R6S1e/fUY0LVMfLfb/qN9NfNu9hp4b5iq9OEy7fNu2i1/dHsmu5L5nancGlALBRLI1Pc/JhwEy02E7X/uk1EbYCwJPXttS342odtecRWy/7Mpk+41su3dmcaslfXyZBQEl9WJk3T/uvqsFuIhLQ9O0r7XBGzq6FvaYNFr7ZZtfe3jZRW7JDQzU0KHnY+YF8vddF3+GV78dB2/V6feVsvy0Z87zYaxd2Fb9D2pGrbzbQ7VRH/hsBpeyJOZi3+BVXfqT4gU9O09qmKw5goIp6Vm4cS82vN64uPW3tfHwMAuNVCiVvK2TU+5a48UXvu7zBPc34+rTJ9ovbc3/hsYjrnJ72+GU/o8dOH9Tz7ga8Jr7rlzowx6/nhGxJ6r0+f8OPZE/qsnwuYqRsSLub6kHDvhoQpe9xr3hvckNBlbM53MW5IWD/y9Np11xNG7Nn3YbvFnO8mHhJefiqofU56zuPhdki4ubRByGae8Npz3vxj5gltdhCN1+/YzBPKx4TJWHUx/DbocW9VXGF+BRQR/bOrQNOW0sMhzIKpWvg3qjxpanbmxTKOLP39NP3Urf2J//LrPGZM3dqfyA2r48p/lLSbGbM8SgEAAADmp5AdJ1eHN+boibRtHH/9Yx/m1rqLRvlfV4dcW6Xfy6ZmNNpGCySNfEkkdCWPooi4ZEs2+W0wHlKaaESST7ygLNDEdrwq1pFZmBrnK9uOKntFZsg9f0WK6q6nTvSdz6kk19n5TSATLdVYsizpLflQrciIM/Ka9DOPOcmfO4mpn5ki7RLZUbK1ZOVxKr+olrQPtkqYpE2kB6mS8EecQS0pJkPOVzGZFpVpFMlLcmmdyaFDlUtLKSNKJFVuKI5kSa0Sh4v6KN/n8pbcMAxVLd/664VsB/ljzmqUFFCTKWkhjlIq5WPCIJe6hCuR0MnzakdxJUtuKiU+WbSVtkPChcPzdZquZPtTfcyEG1Jot2hUlcyG9IXihhtqqCwsRxZHqfopicM3T5TF1nR5I47OVCTcZlau5/KejHCxSLjq5EYha3FhPOSTbRX55JtV+7CeWCFJ6koqqgrqehq7vYVWVGbUlnI/JN8jrbLDinNRZGsaNzmFmsdN8eE5324DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID7+QfWcERdsOFrAgAAAABJRU5ErkJggg==`}
            className="img-fluid"
            alt={`Image for the post ${post.title}`}
          />
        )}
      </div>
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title mb-3 overflow-hidden">{post.title}</h5>
        <div className="d-flex justify-content-between et-post-author-likes">
          <p className="card-text mb-0">{post.author_name}</p>
          <p className="mb-0 d-flex align-items-center">
            <FaThumbsUp />
            {post.numberOfLikes}
          </p>
        </div>
      </div>
    </Link>
  );
};
