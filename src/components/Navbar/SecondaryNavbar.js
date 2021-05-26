import React from "react";
import { Link } from "react-router-dom";

const SecondaryNavbar = () => {
  const navStyle = {
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
  };
  const secNavContainer = {
    backgroundColor: "#9F1718",
  };
  return (
    <div className="row justify-content-center" style={secNavContainer}>
      <div className="col-lg-8 col-md-12 col-sm-12">
        <nav className="navbar">
          <div className="navbar-collapse">
            <div className="navbar-nav flex-row align-items-center justify-content-evenly secNav">
              <Link style={navStyle} to="/">
                Home
              </Link>
              <div className="nav-item dropdown">
                <Link
                  style={navStyle}
                  to="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Donate
                </Link>
                <div className="dropdown-menu">
                  <Link to="/covid" className="dropdown-item">
                    Covid
                  </Link>
                  <Link to="/cause" className="dropdown-item">
                    Cause
                  </Link>
                  <Link to="/volunteer" className="dropdown-item">
                    Volunteer
                  </Link>
                  <Link to="/donate-administration" className="dropdown-item">
                    Administration
                  </Link>
                </div>
              </div>
              <Link style={navStyle} to="/volunteer-signup">
                Be Volunteer
              </Link>
              <div className="nav-item dropdown">
                <Link
                  style={navStyle}
                  to="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Cause
                </Link>
                <div className="dropdown-menu">
                  <Link to="/covid" className="dropdown-item">
                    Covid
                  </Link>
                  <Link to="/health" className="dropdown-item">
                    Health
                  </Link>
                  <Link to="/housing" className="dropdown-item">
                    Housing
                  </Link>
                  <Link to="/clothing" className="dropdown-item">
                    Clothing
                  </Link>
                  <Link to="/food" className="dropdown-item">
                    Food
                  </Link>
                  <Link to="/education" className="dropdown-item">
                    Education
                  </Link>
                </div>
              </div>
              <div className="nav-item dropdown">
                <Link
                  style={navStyle}
                  to="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  Events
                </Link>
                <div className="dropdown-menu">
                  <Link to="/events" className="dropdown-item">
                    Ongoing Events
                  </Link>
                  <Link to="/upcoming-event" className="dropdown-item">
                    Upcoming Events
                  </Link>
                </div>
              </div>
              <Link style={navStyle} to="/transparency">
                Transparency
              </Link>
              <Link style={navStyle} to="/">
                Our Community
              </Link>
              <Link style={navStyle} to="/aboutus">
                About Us
              </Link>
              <Link style={navStyle} to="/contactus">
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SecondaryNavbar;
