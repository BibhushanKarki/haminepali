import React from 'react'
import {Link} from 'react-router-dom'
const QuickLinks = () => {
  const navStyle={
    textDecoration: 'none',
    color:'white',
  }
  return (
    <div>
      <h4 className="fw-bold">QUICK LINKS</h4>
      <ul className="nav-links list-unstyled">
        <Link to="/fundraisers" style={navStyle}><li class="my-3">Fundraisers</li></Link>
        <Link to="/volunteers" style={navStyle}><li class="my-3">Volunteers</li></Link>
        <Link to="/haminepali" style={navStyle}><li class="my-3">About HamiNepali</li></Link>
        <Link to="/contactus" style={navStyle}><li class="my-3">Contact Us</li></Link>
        <Link to="/privacypolicy" style={navStyle}><li class="my-3">Privacy Policy</li></Link>
      </ul>
    </div>
  )
}

export default QuickLinks
