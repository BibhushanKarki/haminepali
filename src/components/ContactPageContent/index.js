import React from "react";
// import "./contact.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const ContactPageContent = () => {
  const contactBanner = {
    backgroundColor: "#9F1718",
  };

  const cardStyle = {
    border: "1px solid #9F1718",
  };
  const heading = {
    color: "#FFFFFF",
    // textAlign: "center",
  };

  const subHeading = {
    color: "#FFFFFF",
    textAlign: "center",
  };
  const iconStyle = {
    color: "#ffffff",
    fontSize: 25,
  };

  return (
    <>
      <div
        className="row d-flex justify-content-center  mt-5"
        style={contactBanner}
      >
        <div className="col-md-8 d-flex align-items-center contactForm">
          <div className="col-md-6 ">
            <div className="card form-card px-5 py-5" style={cardStyle}>
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Firstname"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="LastName"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12">
                  <textarea
                    rows="6"
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12">
                  <textarea
                    rows="6"
                    className="form-control"
                    placeholder="Additional Details"
                  ></textarea>
                </div>
              </div>
              <div className="text-center">
                <button className="btn btn-success mt-5">Send Message</button>
              </div>
            </div>
          </div>
          <div className="mapSection mx-4 mx-sm-3 col-md-6 text-center">
            <iframe
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=sahid%20marg,biratnagar&t=&z=13&ie=UTF8&iwloc=&output=embed"
              title="myFrame"
              style={{
                border: 0,
                width: 400,
                height: 250,
                frameborder: 0,
                objectFit: "cover",
              }}
              allowfullScreen
            />
            <div className="contact-details d-flex ">
              <div className="col-auto">
                <h3 style={heading}>Contact Us</h3>
                <p style={subHeading}>Pulchock,Lalitpur</p>
                <p style={subHeading}>haminepal@gmail.com</p>
                <p style={subHeading}>Tel: 01-5010510/512</p>
              </div>
              <div className="col-auto">
                <h3 style={heading}>Follow Us</h3>
                <div style={iconStyle}>
                  <FaFacebookSquare />
                  <FaTwitter />
                  <FaInstagram />
                  <FaLinkedinIn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPageContent;
