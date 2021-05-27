import React from "react";
import { Link } from "react-router-dom";
import haminepali from "../../assets/images/haminepalilogo1.png";
import ThankyouForDonationForm from "../../components/ThankyouDonationForm";
import DonateAnonymouslySection from "../../components/DonateAnonymouslySection";

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

              <button
                className="btn btn-primary my-2 my-sm-0"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#donateanonymouslyModal"
              >
                Donate Anonymously
              </button>

              <DonateAnonymouslySection />
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
                      className="card donation-card px-5 py-3 text-center"
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
                        <div className="col-md-6 card-input-section">
                          <input
                            type="text"
                            className="form-control "
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
                        <div className="col-md-6 card-input-section">
                          <input
                            type="number"
                            className="form-control "
                            placeholder="Phone Number"
                            name="phone"
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
                        <div className="col-md-6 card-input-section">
                          <input
                            type="text"
                            className="form-control "
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
                        <div className="col-md-6 card-input-section">
                          <input
                            type="text"
                            className="form-control "
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

                      <div className="row mt-3">
                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                          <div className="pay-with">
                            <img src="/img/esewa_logo.png" alt="esewa" />
                          </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                          <div className="pay-with">
                            <img src="/img/khalti_logo.png" alt="khalti" />
                          </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                          <div className="pay-with">
                            <img src="/img/gofundme_logo.png" alt="gofundme" />
                          </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                          <div className="pay-with">
                            <img src="/img/paypal_logo.jpg" alt="paypal" />
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
                            data-bs-target="#donationModal"
                          >
                            Donate Now
                          </button>
                        </div>
                      </div>
                      <ThankyouForDonationForm />
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
