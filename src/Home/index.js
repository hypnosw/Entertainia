import {Link} from "react-router-dom";
import HeadBar from "../Components/HeadBar";

export default function Home(){
    return(
        <div>
            {/* <HeadBar /> */}
            <h1>Home Page</h1>
            <Link to="/profile-setting"><h2>Profile Setting Page</h2></Link>
            <Link to="/SignUp"><h2>Sign Up Page</h2></Link>
        </div>
    )
};