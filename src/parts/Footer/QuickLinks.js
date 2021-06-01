import React from "react";
import { Link } from "react-router-dom";
const QuickLinks = () => {
  const navStyle = {
    textDecoration: "none",
    color: "white",
    fontSize: "15px",
  };
  return (
    <div className="quicklinks mt-5">
      <h5 className="fw-bold" style={{ fontSize: 16 }}>
        QUICK LINKS
      </h5>
      <ul className="nav-links list-unstyled">
        <Link to="/fundraisers" style={navStyle}>
          <li className="my-4">Fundraisers</li>
        </Link>
        <Link to="/volunteer" style={navStyle}>
          <li className="my-4">Volunteers</li>
        </Link>
        <Link to="/aboutus" style={navStyle}>
          <li className="my-4">About HamiNepali</li>
        </Link>
        <Link to="/contactus" style={navStyle}>
          <li className="my-4">Contact Us</li>
        </Link>
        <Link to="/privacy-policy" style={navStyle}>
          <li className="my-4">Privacy Policy</li>
        </Link>
      </ul>
    </div>
  );
};

export default QuickLinks;
