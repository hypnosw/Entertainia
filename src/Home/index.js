import {Link} from "react-router-dom";

export default function Home(){
    return(
        <div>
            <h1>Hone Page</h1>
            <Link to="/profile-setting"><h2>Profile Setting Page</h2></Link>
            <Link to="/SignUp"><h2>Sign Up Page</h2></Link>
        </div>
    )
};