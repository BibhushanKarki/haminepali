import React from 'react'
import {Link} from 'react-router-dom'
const SecondaryNavbar = () => {
  const navStyle={
    textDecoration: 'none',
    color:'white',
    fontWeight:'bold'
  }
  const secNavContainer={
    backgroundColor:'#9F1718'
  }
  return (
    <div className="row justify-content-center" style={secNavContainer}>
      <div className="col-md-8 ">
        <ul className="nav-links my-2 d-flex justify-content-around align-items-center list-unstyled">
          <Link style={navStyle} to="/"><li>Home</li></Link>
          <Link style={navStyle} to="/donate"><li>Donate</li></Link>
          <Link style={navStyle} to="/volunteer"><li>Be Volunteer</li></Link>
          <Link style={navStyle} to="/cause"><li>Cause</li></Link>
          <Link style={navStyle} to="/events"><li>Events</li></Link>
          <Link style={navStyle} to="/transparency"><li>Transparency</li></Link>
          <Link style={navStyle} to="/aboutus"><li>About Us</li></Link>
          <Link style={navStyle} to="/contactus"><li>Contact Us</li></Link>
          </ul>
      </div>
    </div>
  )
}

export default SecondaryNavbar
