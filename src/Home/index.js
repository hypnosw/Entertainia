import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {/* <HeadBar /> */}
      <h1>Home Page</h1>
      <Link to="/profile-setting">
        <h2>Profile Setting Page</h2>
      </Link>
      <Link to="/SignUp">
        <h2>Sign Up Page</h2>
      </Link>
      <Link to="/LogIN">
        <h2>LogIN Form</h2>
      </Link>
      <Link to="/HeadBar">
        <h2>HeadBar Page</h2>
      </Link>
      <Link to="/Sidebar">
        <h2>Sidebar Page</h2>
      </Link>
    </div>
  );
}
