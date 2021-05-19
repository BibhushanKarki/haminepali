import React from "react";
import Logo from "../../assets/images/haminepalilogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="row">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="" width="100" height="85" />
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
              <a
                className="nav-link dropdown-toggle"
                href="/discover"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Discover
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/fundraisers">
                    FundRaisers
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/volunteer">
                    Volunteer
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown fw-bold">
              <a
                className="nav-link dropdown-toggle"
                href="/fundraiserfor"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Fundraiser For
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/covid">
                    Covid
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/food">
                    Food
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/health">
                    Health
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/education">
                    Education
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/housing">
                    Housing
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/clothing">
                    Clothing
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown fw-bold">
              <a
                className="nav-link dropdown-toggle"
                href="/howitwork"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                How it works
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/howitworks">
                    How it works?
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/whyhaminepal">
                    Why HamiNepali
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/behindthename">
                    Behind the name
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/successstories">
                    Success Stories
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex align-items-center">
            <button type="button" className="btn">
              Search
            </button>
            <span className="mx-2">|</span>
            <button type="button" className="btn ">
              Sign In
            </button>
            <span className="mx-2"></span>
            <button className="btn btn-primary px-3" type="submit">
              Join Now
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
