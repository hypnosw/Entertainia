import {useContext, useEffect, useState} from "react";
import {useLocation} from "react-router";
import {useSearchParams} from "react-router-dom";
import * as client from "./client.js";
import {PostCards} from "../Post-cards";
import {getAPIResults} from "./client.js";

const SearchResults = ()=>{
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    // Get the value of the 'terms' parameter
    const searchTerms = queryParams.get('terms');

    const [results, setResults] = useState([]);
    const [APIResults, setAPIResults] = useState([]);
    const [error, setError] = useState('');

    const handleSearch = async ()=>{
        try{
            const results = await client.getPostsByKeywords(searchTerms);
            setResults(results);
        } catch(error){
            setError(error.message);
        }

    }

    const handleAPISearch = async()=>{
        if(searchTerms === '') return;
        try{
            const response = await client.getAPIResults(searchTerms);
            setAPIResults(response.data);
        }catch(error){
            setError(error.message);
        }

    }

    useEffect(()=>{
        handleSearch().then(handleAPISearch);
        }, [location]);
    return(
        <div className={"mt-2"}>
            {error !== '' && <p className={"alert alert-danger mt-2 w-25"}>{error}</p> }
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
                {APIResults.length !== 0 &&
                 <div className={"d-flex flex-wrap"}>
                     {APIResults.map(
                         (post)=>{
                             const index = { ...post,
                                 title:post.title,
                                 author:post.domain,
                                 images:[post.favicon],
                                 numberOfLikes:0,
                             }
                             return PostCards(index);
                         }
                     )}
                 </div>
                }
            </div>



        </div>

    );
};
export default SearchResults;