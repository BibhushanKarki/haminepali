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
<<<<<<< HEAD
      <div
        className="row d-flex justify-content-center  mt-5"
        style={contactBanner}
      >
        <div className="col-md-8 d-flex align-items-center contactForm">
          <div className="col-md-6 ">
            <div className="card form-card px-5 py-5" style={cardStyle}>
=======
      {/* <section className="contact-banner">
        <div className="row" style={contactBanner}>
          <div className="form-section">
            <div className="col-md-12 ms-5" style={messageBox}>
              <form className="mt-5 row g-3"> */}
      {/* <div className="mb-5 "> */}
      {/* <div className="col-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="FirstName"
                    required
                  />
                </div>
                <div className="col-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="LastName"
                    required
                  />
                </div>
                {/* </div> */}

      {/* <div className="mb-5">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Email Address"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-5">
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>

                <div className="mb-5">
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Additional Details"
                  ></textarea>
                </div>
                <div className="mb-5 form-check">
                  <input
                    type="checkbox"
                    className="form-control"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label">Check me out</label>
                </div>
                <div className=" text-center">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section> */}

      <section style={contactBanner}>
        <div className="container d-flex flex-row text-center">
          <div className="col-md-6">
            <div className="card contactcard px-5 py-5">
              {/* <h1 style={heading}>Contact us form</h1>{" "} */}
>>>>>>> bccd982647a52f368ed1ed8872f81debdfdf1347
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
