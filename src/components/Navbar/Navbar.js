import React from "react";
import Logo from "../../assets/images/haminepalilogo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="row mx-2">
      <nav className="navbar navbar-expand-lg navbar-light">
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
              <Link
                className="nav-link dropdown-toggle"
                href="/discover"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Discover
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" href="/fundraisers">
                    FundRaisers
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/volunteer">
                    Volunteer
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown fw-bold">
              <Link
                className="nav-link dropdown-toggle"
                href="/fundraiserfor"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Fundraiser For
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" href="/covid">
                    Covid
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/food">
                    Food
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/health">
                    Health
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/education">
                    Education
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/housing">
                    Housing
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/clothing">
                    Clothing
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown fw-bold">
              <Link
                className="nav-link dropdown-toggle"
                href="/howitwork"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                How it works
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" href="/howitworks">
                    How it works?
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/whyhaminepal">
                    Why HamiNepali
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/behindthename">
                    Behind the name
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/successstories">
                    Success Stories
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex align-items-center">
            <button type="button" className="btn">
              Search
            </button>
            <span className="mx-2">|</span>
            <Link href="/sign-in">
              <button type="button" className="btn ">
                Sign In
              </button>
            </Link>
            <span className="mx-2"></span>
            <Link href="/sign-up">
              <button className="btn btn-primary px-3" type="button">
                Join Now
              </button>
            </Link>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
