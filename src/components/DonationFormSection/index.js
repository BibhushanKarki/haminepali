import React from "react";
import { Link } from "react-router-dom";
import haminepali from "../../assets/images/haminepalilogo1.png";
import "./donationform.css";

const DonationFormSection = () => {
  return (
    <>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="donateModal"
        tabIndex="-1"
        aria-labelledby="donateModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg ">
          <div className="modal-content ">
            <nav
              className="navbar navbar-light  justify-content-between  px-5"
              style={{
                boxShadow: "9px 10px 5px -8px rgba(191, 183, 183, 0.75)",
              }}
            >
              <Link to="#" className="navbar-brand">
                <img src={haminepali} alt="logo" />
              </Link>

              <Link to="#">
                <button className="btn btn-primary my-2 my-sm-0" type="button">
                  Donate Anonymously
                </button>
              </Link>
            </nav>

            <div className="row mt-5">
              <div className="donate-form col-md-12 d-flex justify-content-center flex-column align-items-center">
                <div className="col-md-4 donation-form-heading">
                  <h1 className=" text-center">Donation Form</h1>
                </div>
              </div>
            </div>

            <div className="modal-body ">
              <div className="row ">
                <form className="d-flex justify-content-center">
                  <div className="col-md-12">
                    <div
                      className="card  px-5 py-3 text-center"
                      style={{
                        border: "none",
                        boxShadow: "0px 0px 5px 0px rgba(212, 182, 212, 1)",
                      }}
                    >
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Firstname"
                            name="firstname"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control card-input-section"
                            placeholder="LastName"
                            name="lastname"
                            required
                          />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email-Address"
                            name="email"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="number"
                            className="form-control card-input-section"
                            placeholder="Mobile Number"
                            name="mobile"
                            required
                          />
                        </div>
                      </div>

                      <div className="row mt-3">
                        <div className="col-md-12">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Street Address"
                            name="streetaddress"
                            required
                          />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="City"
                            name="city"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control card-input-section"
                            placeholder="State/Province/Region"
                            name="state"
                            required
                          />
                        </div>
                      </div>

                      <div className="row mt-3">
                        <div className="col-md-6">
                          <input
                            type="number"
                            className="form-control "
                            placeholder="Zip/Postal code"
                            name="zipcode"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control card-input-section"
                            placeholder="Country"
                            name="country"
                            required
                          />
                        </div>
                      </div>

                      <div
                        className="row mt-5"
                        style={{ backgroundColor: "#9f1718" }}
                      >
                        <div className="col-md-12">
                          <h5>Donation Details</h5>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-12">
                          <input
                            type="number"
                            className="form-control "
                            placeholder="Donation Amount"
                            name="donation amt"
                            required
                          />
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-md-12">
                          <textarea
                            className="form-control "
                            placeholder="Message"
                            name="message"
                            required
                          ></textarea>
                        </div>
                      </div>

                      <div className="row mt-5">
                        <div className="pay-with col-md-12 d-flex justify-content-center flex-column align-items-center">
                          <div className="col-md-3 pay-with">
                            <h5 className="pb-2 ">Pay With</h5>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-4 ">
                        <div className="col-md-12 d-flex flex-row px-2  ">
                          <div className="col">
                            <Link to="#">
                              <img src="img/esewa_logo.png" alt="esewa" />
                            </Link>
                          </div>

                          <div className="col">
                            <Link to="#">
                              <img src="img/khalti_logo.png" alt="khalti" />
                            </Link>
                          </div>

                          <div className="col">
                            <Link to="#">
                              <img src="img/gofundme_logo.png" alt="gofundme" />
                            </Link>
                          </div>

                          <div className="col">
                            <Link to="#">
                              <img src="img/paypal_logo.jpg" alt="paypal" />
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="row mt-3">
                        <div className="col-md-12 d-flex flex-row">
                          <input
                            className="form-check-input "
                            type="checkbox"
                            value=""
                            id="defaultCheck1"
                          />
                          &nbsp;&nbsp;
                          <h5 className="terms-section">
                            I agree terms of service & privacy policy.
                          </h5>
                        </div>
                      </div>

                      <div className="row mt-4 mb-3">
                        <div className="col-md-12">
                          <button
                            type="submit"
                            className=" btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#registerModal"
                          >
                            Donate Now
                          </button>
                        </div>
                      </div>
                      {/* <div
                        className="modal fade"
                        id="registerModal"
                        tabIndex="-1"
                        aria-labelledby="registerModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content text-center">
                            <div
                              className="modal-header justify-content-center"
                              style={{ position: "relative" }}
                            >
                              <div className="d-flex flex-column align-items-center">
                                <img
                                  src={Verify}
                                  alt="verifyicon"
                                  style={{ width: "50px", height: "50px" }}
                                />
                                <h4
                                  className="modal-title fw-bold"
                                  id="registerModalLabel"
                                  style={{ color: "#9F1718" }}
                                >
                                  Details Registered!
                                </h4>
                              </div>
                              <button
                                type="button"
                                className="btn-close m-0 align-top"
                                data-bs-dismiss="modal"
                                style={{
                                  position: "absolute",
                                  top: "5px",
                                  right: "5px",
                                }}
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <p>
                                Your data has been successfully registered. Our
                                verification team will verify your details and
                                further information will be given to{" "}
                                <span style={{ color: "#9F1718" }}>
                                  **********
                                </span>
                                . Please save this for your records.
                              </p>
                            </div>
                            <div className="modal-footer d-flex flex-column justify-content-center">
                              <h5
                                style={{ color: "#9F1718", cursor: "pointer" }}
                              >
                                <b>
                                  <u>Share with Friends</u>
                                </b>
                              </h5>
                              <div className="social d-flex justify-content-evenly w-100 mt-4">
                                <div className="d-flex flex-column align-items-center">
                                  <img
                                    style={{ height: "40px", width: "40px" }}
                                    src="https://image.flaticon.com/icons/png/512/1384/1384053.png"
                                    alt="fb"
                                  />
                                  <p className="fw-bold mt-2">Facebook</p>
                                </div>
                                <div className="d-flex flex-column align-items-center">
                                  <img
                                    style={{ height: "40px", width: "40px" }}
                                    src="https://image.flaticon.com/icons/png/512/733/733579.png"
                                    alt="tw"
                                  />
                                  <p className="fw-bold mt-2">Twitter</p>
                                </div>
                                <div className="d-flex flex-column align-items-center">
                                  <img
                                    style={{ height: "40px", width: "40px" }}
                                    src="https://image.flaticon.com/icons/png/512/1384/1384063.png"
                                    alt="insta"
                                  />
                                  <p className="fw-bold mt-2">Instagram</p>
                                </div>
                                <div className="d-flex flex-column align-items-center">
                                  <img
                                    style={{ height: "40px", width: "40px" }}
                                    src="https://image.flaticon.com/icons/png/512/220/220236.png"
                                    alt="whatsapp"
                                  />
                                  <p className="fw-bold mt-2">Whatsapp</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonationFormSection;
