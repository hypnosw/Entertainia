import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as client from "./client.js";
import { PostCards } from "../Post-cards";
import { getAPIResults } from "./client.js";
import "./index.css";
import { useSelector } from "react-redux";
import userReducer from "../../Reducers/userReducer";

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  // Get the value of the 'terms' parameter
  const searchTerms = queryParams.get("terms");
  if (searchTerms === "") navigate("/home");

  const [results, setResults] = useState([]);
  const [APIResults, setAPIResults] = useState([]);
  const [error, setError] = useState("");
  console.log("before redux");
  const user = useSelector((state) => state.userReducer);
  console.log(user);

  const handleSearch = async () => {
    try {
      const results = await client.getPostsByKeywords(searchTerms);
      setResults(results);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleAPISearch = async () => {
    if (searchTerms === "") return;
    try {
      const response = await client.getAPIResults(searchTerms);
      setAPIResults(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    handleSearch().then(handleAPISearch);
  }, [location]);
  return (
    <div className={" ms-1 mt-2"}>
      {error !== "" && (
        <p className={"alert alert-danger mt-2 w-25"}>{error}</p>
      )}
      {results.length === 0 ? (
        <p>No one shared anything on this topic, be the first!</p>
      ) : (
        <p>We found {results.length} results</p>
      )}
      <div className={"d-flex flex-wrap"}>
        {results.map((post) => {
          return PostCards(post);
        })}
      </div>
      {user.role !== "USER" && (
        <div>
          <hr />
          <h3>Other Resources You May Like</h3>

          {APIResults.length === 0 ? (
            <div className="spinner-border" role="status">
              <span className="sr-only"></span>
            </div>
          ) : (
            <div className={""}>
              {APIResults.map((post) => {
                return (
                  <div className="search-result d-flex">
                    <div>
                      <img src={`${post.favicon}`} />
                    </div>
                    <div className={"ms-2"}>
                      <h3>
                        <a href={`${post.link}`} target={`_blank`}>
                          {post.title}
                        </a>
                      </h3>
                      <a href={`${post.domain}`} className="search-link">
                        {post.source}
                      </a>
                      <p>{post.snippet}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default SearchResults;
