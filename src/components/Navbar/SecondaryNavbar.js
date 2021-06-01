import React from "react";
import { Link } from "react-router-dom";
import { EventSectionData } from "../EventPageSection/EventSectionData";

const SecondaryNavbar = () => {
  const navStyle = {
    textDecoration: "none",
    color: "white",
    fontWeight: "bold",
    fontSize: "15px",
  };
  const secNavContainer = {
    backgroundColor: "#9F1718",
    marginTop: "7rem",
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
                  <Link
                    to="/covid"
                    className="dropdown-item"
                    style={{ color: "#9F1718" }}
                  >
                    Covid
                  </Link>
                  <Link
                    to="/cause"
                    className="dropdown-item"
                    style={{ color: "#9F1718" }}
                  >
                    Cause
                  </Link>
                  <Link
                    to="/volunteer"
                    className="dropdown-item"
                    style={{ color: "#9F1718" }}
                  >
                    Volunteer
                  </Link>
                  <Link
                    to="/donate-administration"
                    className="dropdown-item"
                    style={{ color: "#9F1718" }}
                  >
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
                  <Link
                    to="/covid"
                    className="dropdown-item"
                    style={{ color: "#9F1718" }}
                  >
                    Covid
                  </Link>
                  <Link
                    to="/health"
                    className="dropdown-item"
                    style={{ color: "#9F1718" }}
                  >
                    Health
                  </Link>
                  <Link
                    to="/housing"
                    className="dropdown-item"
                    style={{ color: "#9F1718" }}
                  >
                    Housing
                  </Link>
                  <Link
                    to="/clothing"
                    className="dropdown-item"
                    style={{ color: "#9F1718" }}
                  >
                    Clothing
                  </Link>
                  <Link
                    to="/food"
                    className="dropdown-item"
                    style={{ color: "#9F1718" }}
                  >
                    Food
                  </Link>
                  <Link
                    to="/education"
                    className="dropdown-item"
                    style={{ color: "#9F1718" }}
                  >
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
                  {EventSectionData.map((keyBundle) => (
                    <Link
                      to={`/events/${keyBundle.key}`}
                      className="dropdown-item"
                      style={{
                        color: "#9F1718",
                      }}
                      key={keyBundle.key}
                    >
                      {keyBundle.displayName}
                    </Link>
                  ))}
                </div>
              </div>
              <Link style={navStyle} to="/transparency">
                Transparency
              </Link>
              <Link style={navStyle} to="/community">
                Our Community
              </Link>

              <div className="nav-item dropdown">
                <Link
                  style={navStyle}
                  to="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                >
                  About Us
                </Link>
                <div className="dropdown-menu">
                  <Link
                    to="/howitworks"
                    className="dropdown-item"
                    style={{ fontSize: 15, fontWeight: 500, color: "#9F1718" }}
                  >
                    How it works?
                  </Link>
                  <Link
                    to="/whyhaminepal"
                    className="dropdown-item"
                    style={{ fontSize: 15, fontWeight: 500, color: "#9F1718" }}
                  >
                    Why HamiNepali
                  </Link>
                  <Link
                    to="/behindthename"
                    className="dropdown-item"
                    style={{ fontSize: 15, fontWeight: 500, color: "#9F1718" }}
                  >
                    Behind the name
                  </Link>
                  <Link
                    to="/successstories"
                    className="dropdown-item"
                    style={{ fontSize: 15, fontWeight: 500, color: "#9F1718" }}
                  >
                    Success Stories
                  </Link>
                  <Link
                    to="/aboutus"
                    className="dropdown-item"
                    style={{ fontSize: 15, fontWeight: 500, color: "#9F1718" }}
                  >
                    About
                  </Link>
                </div>
              </div>
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
