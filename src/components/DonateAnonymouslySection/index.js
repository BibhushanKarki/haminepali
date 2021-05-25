import React from "react";
import "./donateanonymously.css";

const DonateAnonymouslySection = () => {
  return (
    <>
      <div className="row mt-5">
        <form className="d-flex justify-content-center">
          <div className="col-md-6">
            <div
              className="card donate-anonymously-card px-5 py-3 text-center"
              style={{
                border: "none",
                boxShadow: "0px 0px 5px 0px rgba(212, 182, 212, 1)",
              }}
            >
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
                    <img src="img/esewa_logo.png" alt="esewa" />
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                  <div className="pay-with">
                    <img src="img/khalti_logo.png" alt="khalti" />
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                  <div className="pay-with">
                    <img src="img/gofundme_logo.png" alt="gofundme" />
                  </div>
                </div>

                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                  <div className="pay-with">
                    <img src="img/paypal_logo.jpg" alt="paypal" />
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
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default DonateAnonymouslySection;
