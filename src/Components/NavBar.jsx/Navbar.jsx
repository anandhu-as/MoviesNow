import React from "react";
import "../../Styles/Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <p className="navabr-title">MoviesNow</p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt=""
        className="avatar"
      />
    </div>
  );
};

export default Navbar;
