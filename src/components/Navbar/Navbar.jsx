import React from "react";
import Link from "./Link/Link";
import Logo from "./Logo/Logo";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-wrapper">
      <div className="logo">
        <Logo />
      </div>
      <div className="link">
        <Link />
      </div>
      <div className="login">Login</div>
    </div>
  );
}
export default Navbar;
