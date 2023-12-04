import {useContext, useEffect, useState} from "react";
import {useLocation} from "react-router";
import {useSearchParams} from "react-router-dom";
import * as client from "./client.js";
import {PostCards} from "../Post-cards";

const SearchResults = ()=>{
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    // Get the value of the 'terms' parameter
    const searchTerms = queryParams.get('terms');

    const [results, setResults] = useState([]);
    const handleSearch = async ()=>{
        const results = await client.getPostsByKeywords(searchTerms);
        setResults(results);
    }

    useEffect(()=>{handleSearch();}, [location]);
    return(
        <div className={"mt-2"}>
            {results.length === 0 ?
             (<p>No one shared anything on this topic, be the first!</p>) :
             (<p>We found {results.length} results</p>)}
            <div className={"d-flex flex-wrap"}>
                {results.map(
                    (post)=>{
                        return PostCards(post);
                    }
                )}
            </div>

            <div>
                <hr/>
                <h3>Other Resources You May Like</h3>
            </div>



        </div>

    );
};
export default SearchResults;