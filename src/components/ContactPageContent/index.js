import React from "react";
import "./contact.css";

const ContactPageContent = () => {
  const contactBanner = {
    marginTop: "50px",
    backgroundColor: "#9F1718",
    height: "681px",
    color: "#fff",
  };

  const heading = {
    color: "#9F1718",
  };

  return (
    <>
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
              <div>
                <button className="btn btn-success mt-5">
                  Send Message
                  <i className="fa fa-long-arrow-right ml-2 mt-1"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
            <div className="map-section">
          <div className="row">
            <div className="col-md-6">
              <iframe
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=sahid%20marg,biratnagar&t=&z=13&ie=UTF8&iwloc=&output=embed"
                title="myFrame"
                style={{ border: 0, width: 400, height: 250, frameborder: 0 }}
                allowfullScreen
              />
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default ContactPageContent;
