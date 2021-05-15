import React from 'react'
import FacebookIcon from '../../assets/images/facebook.png'
import TwitterIcon from '../../assets/images/twitter.png'
import LinkedinIcon from '../../assets/images/linkedin.png'
import InstagramIcon from '../../assets/images/instagram.png'

const ConnectWithUs = () => {
  const navStyle={
    textDecoration: 'none',
    color:'white',
  }
  return (
    <div>
      <h4 className="fw-bold">CONNECT WITH US</h4>
      <ul className="nav-links list-unstyled">
        <li className="my-3"><img width="30px" height="30px" alt="socialicons" src={FacebookIcon}/>&nbsp; <a href="http://" style={navStyle}> Facebook</a></li>
        <li className="my-3"><img width="30px" height="30px" alt="socialicons" src={TwitterIcon}/>&nbsp; <a href="http://" style={navStyle}>Twitter</a></li>
        <li className="my-3"><img width="30px" height="30px" alt="socialicons" src={LinkedinIcon}/>&nbsp; <a href="http://" style={navStyle}> LinkedIn</a></li>
        <li className="my-3"><img width="30px" height="30px" alt="socialicons" src={InstagramIcon}/>&nbsp; <a href="http://" style={navStyle}> Instagram</a></li>
      </ul>
    </div>
  )
}

export default ConnectWithUs
