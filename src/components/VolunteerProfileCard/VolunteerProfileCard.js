import React from "react";
import { Link } from "react-router-dom";
import AppButton from "../UI/Buttons/AppButton";
import { VolunteerProfileData as data } from "./VolunteerProfileData";
import Zoom from "react-reveal/Zoom";
import "./volunteer-profile.css";

const VolunteerProfileCard = () => {
  const cardStyle = {
    width: "300px",
  };
  const ppStyle = {
    borderRadius: "50%",
    height: "150px",
    width: "150px",
    objectFit: "cover",
    alignSelf: "center",
    alignItems: "center",
    marginTop: "30px",
  };
  return (
    <div className="profileCardContainer my-4 px-5 ">
      <div className="row px-5">
        <div className="volunteer-profile-heading">
          <h2 className="fw-bold my-3 " style={{ color: "#9F1718" }}>
            Our Volunteer's Profile
          </h2>
        </div>
        <div className="col-md-3 mb-3 d-flex justify-content-center">
          <Zoom>
            <div className="card" style={cardStyle}>
              <Link
                to="/volunteer-profile"
                style={{ textAlign: "center", color: "black" }}
              >
                <img
                  src={data.profilePic}
                  className="my-3"
                  style={ppStyle}
                  alt="pp"
                />

                <div className="card-body text-center">
                  <h6 className="card-title fw-bold">{data.profileName}</h6>
                  <p className="card-text">{data.userMsg}</p>
                </div>
              </Link>
              <div
                className="card-footer text-center "
                style={{
                  backgroundColor: "#f5f5f500",
                  borderTop: "1px solid #f9fafb",
                  marginBottom: "20px",
                }}
              >
                <AppButton buttontext="Donate to motivate" />
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
};

export default VolunteerProfileCard;
