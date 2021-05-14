import React from 'react'
import Logo from '../../assets/images/haminepalilogo.png'
const Navbar = () => {
return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <img src={Logo} alt="" width="100" height="85"/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown fw-bold">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Discover
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">FundRaisers</a></li>
                        <li><a className="dropdown-item" href="#">Volunteer</a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown fw-bold">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Fundraiser For 
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Food</a></li>
                        <li><a className="dropdown-item" href="#">Health</a></li>
                        <li><a className="dropdown-item" href="#">Education</a></li>
                        <li><a className="dropdown-item" href="#">See More...</a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown fw-bold">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        How it works 
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">How it works?</a></li>
                        <li><a className="dropdown-item" href="#">Why HamiNepali</a></li>
                        <li><a className="dropdown-item" href="#">Behind the name</a></li>
                        <li><a className="dropdown-item" href="#">Success Stories</a></li>
                    </ul>
                </li>
            </ul>
            <form className="d-flex align-items-center">
                <button type="button" class="btn">Search</button>
                <span className="mx-2">|</span>
                <button type="button" class="btn ">Sign In</button>
                <span className="mx-2"></span>
                <button className="btn btn-primary px-3" type="submit">Join Now</button>
            </form>
        </div>
    </div>
</nav>
)
}

export default Navbar