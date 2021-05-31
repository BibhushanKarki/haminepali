import React from "react";
import Verify from "../../assets/images/Verify1.png";

const ThankyouForDonationForm = () => {
  return (
    <>
      <div
        className="modal fade"
        id="donationModal"
        tabIndex="-1"
        aria-labelledby="donationModalLabel"
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
                  id="donationModalLabel"
                  style={{ color: "#9F1718" }}
                >
                  Donation Completed!
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
              <p style={{ color: "rgba(0, 0, 0, 0.67)" }}>
                Your donation of Rs.1000 has been successfully processed. An
                e-mail receipt has been sent to name@gmail.com .Please save this
                for your records.
              </p>
            </div>
            {/* <div className="modal-footer d-flex flex-column justify-content-center">
              <h5 style={{ color: "#9F1718", cursor: "pointer" }}>
                <b>
                  <u>Share with Friends</u>
                </b>
              </h5>
              <div className="social d-flex justify-content-evenly w-100 mt-4">
                <div className="d-flex flex-column align-items-center">
                  <img src="/img/facebook.png" alt="fb" />
                  <p className="fw-bold mt-2" style={{ color: "black" }}>
                    Facebook
                  </p>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <img src="/img/twitter.png" alt="tw" />
                  <p className="fw-bold mt-2" style={{ color: "black" }}>
                    Twitter
                  </p>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <img src="/img/instagram.jpg" alt="insta" />
                  <p className="fw-bold mt-2" style={{ color: "black" }}>
                    Instagram
                  </p>
                </div>
                <div className="d-flex flex-column align-items-center">
                  <img src="/img/whatsapp.png" alt="whatsapp" />
                  <p className="fw-bold mt-2" style={{ color: "black" }}>
                    Whatsapp
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankyouForDonationForm;
