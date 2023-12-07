import { FcDislike } from "react-icons/fc";
import "./index.css";
import React from "react";

export default function Footer() {
  return (
    <footer className="page-footer font-small blue pt-4">
      <hr className="clearfix w-100  pb-0" />
      <div className="footer-copyright text-center py-3">
        © Entertainia Team: My heart is in the work
        <FcDislike />
      </div>
    </footer>
  );
}
