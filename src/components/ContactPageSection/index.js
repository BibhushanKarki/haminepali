import React from "react";
import "./contact.css";
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
    fontSize: "25px",
  };

  const subHeading = {
    color: "#FFFFFF",
    fontSize: "17px",
  };

  const iconStyle = {
    color: "#ffffff",
    fontSize: 25,
  };

  return (
    <>
      <div className="row mt-5" style={contactBanner}>
        <div className="col-md-5 px-5">
          <form>
            <div className="card form-card px-5 py-5" style={cardStyle}>
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Firstname*"
                    name="firstname"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control lastname"
                    placeholder="LastName*"
                    name="lastname"
                    required
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email*"
                    name="email"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12">
                  <textarea
                    rows="6"
                    className="form-control"
                    placeholder="Message*"
                    name="message"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12">
                  <textarea
                    rows="6"
                    className="form-control"
                    placeholder="Additional Details"
                    name="additionaldetails"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-success mt-5">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="col-md-7 map-section text-center ">
          <iframe
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=pulchowk,lalitpur&t=&z=13&ie=UTF8&iwloc=&output=embed"
            title="myFrame"
            allowFullScreen
          />
          <div className=" col-md-12 contact-details d-flex text-center mt-4">
            <div className="col-md-6 ">
              <h3 style={heading}>Contact Us</h3>
              <p style={subHeading}>Ranibari-27, Samakhusi, Kathmandu</p>
              <p style={subHeading}>info@haminepal.org</p>
              <p style={subHeading}>Phone: +977-9808543667, +977-9845628191</p>
            </div>
            <div className="col-md-6  ">
              <h3 style={heading}>Follow Us</h3>
              <div style={iconStyle}>
                <FaFacebookSquare />
                &nbsp;&nbsp;&nbsp;
                <FaTwitter />
                &nbsp;&nbsp;&nbsp;
                <FaInstagram />
                &nbsp;&nbsp;&nbsp;
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPageContent;
