import React from 'react'
import FooterLogo from './FooterLogo'
import QuickLinks from './QuickLinks'
import ConnectWithUs from './ConnectWithUs'
import ContactInfo from './ContactInfo'

const Footer = () => {
  return (
    <div className="row py-4" style={{backgroundColor:'#821C1D',color:'#FFFFFF'}}>
      <div className="col-md-3 d-flex justify-content-center"><FooterLogo/></div>
      <div className="col-md-3"><QuickLinks/></div>
      <div className="col-md-3"><ConnectWithUs/></div>
      <div className="col-md-3"><ContactInfo/></div>
    </div>
  )
}

export default Footer
