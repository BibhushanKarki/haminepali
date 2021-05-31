import React from "react";
import FooterLogo from "./FooterLogo";
import QuickLinks from "./QuickLinks";
import ConnectWithUs from "./ConnectWithUs";
import ContactInfo from "./ContactInfo";
import CopyRight from "./CopyRight";

const Footer = () => {
  return (
    <div
      className="row mt-4  pt-4 px-5 d-flex justify-content-center footer-wrapper"
      style={{ backgroundColor: "#821C1D", color: "#FFFFFF" }}
    >
      <div className="col-md-2 d-flex justify-content-center align-items-center">
        <FooterLogo />
      </div>
      <div className="col-md-3">
        <QuickLinks />
      </div>
      <div className="col-md-3">
        <ConnectWithUs />
      </div>
      <div className="col-md-3">
        <ContactInfo />
      </div>
      <CopyRight />
    </div>
  );
};

export default Footer;
