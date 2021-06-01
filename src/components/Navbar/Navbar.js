import React from "react";
import Logo from "../../assets/images/haminepallogo11.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="conatiner">
      <div className="row fixed-navbar">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="" height="85" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown fw-bold">
                <Link
                  className="nav-link dropdown-toggle btn-navbar"
                  to="/discover"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Discover
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/fundraisers"
                      style={{ fontSize: 15, fontWeight: 500 }}
                    >
                      FundRaisers
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/volunteer"
                      style={{ fontSize: 15, fontWeight: 500 }}
                    >
                      Volunteer
                    </Link>
                  </li>
                </ul>
              </li>
              &nbsp; &nbsp;
              <li className="nav-item dropdown fw-bold">
                <Link
                  className="nav-link dropdown-toggle btn-navbar"
                  to="/fundraiserfor"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Fundraiser For
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/covid"
                      style={{ fontSize: 15, fontWeight: 500 }}
                    >
                      Covid
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/food"
                      style={{ fontSize: 15, fontWeight: 500 }}
                    >
                      Food
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/health"
                      style={{ fontSize: 15, fontWeight: 500 }}
                    >
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/education"
                      style={{ fontSize: 15, fontWeight: 500 }}
                    >
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/housing"
                      style={{ fontSize: 15, fontWeight: 500 }}
                    >
                      Housing
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/clothing"
                      style={{ fontSize: 15, fontWeight: 500 }}
                    >
                      Clothing
                    </Link>
                  </li>
                </ul>
              </li>
              &nbsp; &nbsp;
              <li className="nav-item dropdown fw-bold">
                <Link
                  className="nav-link dropdown-toggle btn-navbar"
                  to="/howitwork"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  How it works
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/howitworks"
                      style={{ fontSize: 15, fontWeight: 500 }}
                    >
                      How it works?
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/whyhaminepal"
                      style={{ fontSize: 15, fontWeight: 500 }}
                    >
                      Why HamiNepali
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/behindthename"
                      style={{ fontSize: 15, fontWeight: 500 }}
                    >
                      Behind the name
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/successstories"
                      style={{ fontSize: 15, fontWeight: 500 }}
                    >
                      Success Stories
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex align-items-center">
              <div className="search-nav" style={{ fontSize: 15 }}>
                {" "}
                <i className="fa fa-search"></i>{" "}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
              <span className="mx-2 hide">|</span>
              <Link to="/sign-in">
                <button
                  type="button"
                  className="btn "
                  style={{ fontSize: 18, fontWeight: 500 }}
                >
                  Sign In
                </button>
              </Link>
              <span className="mx-2"></span>
              <Link to="/sign-up">
                <button
                  className="btn btn-primary px-3"
                  type="button"
                  style={{ fontWeight: 500 }}
                >
                  Join Now
                </button>
              </Link>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
