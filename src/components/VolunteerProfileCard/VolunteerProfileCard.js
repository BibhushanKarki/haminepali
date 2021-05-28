import React from "react";
import { Link } from "react-router-dom";
import AppButton from "../UI/Buttons/AppButton";
import { VolunteerProfileData as data } from "./VolunteerProfileData";
import Zoom from "react-reveal/Zoom";

const VolunteerProfileCard = () => {
  const cardStyle = {
    width: "18rem",
  };
  const ppStyle = {
    borderRadius: "50%",
    height: "100px",
    width: "100px",
    objectFit: "cover",
    alignSelf: "center",
    alignItems: "center",
  };
  return (
    <div className="profileCardContainer my-4">
      <div className="row">
        <h2
          className="fw-bold my-3"
          style={{ color: "#9F1718", marginLeft: "2rem" }}
        >
          Our Volunteer's Profile
        </h2>
        {data.map((data, key) => {
          return (
            <div
              className="col-md-3 mb-3 d-flex justify-content-center"
              key={key}
            >
              <Zoom>
                <div className="card" style={cardStyle}>
                  <Link to="/volunteer-profile" style={{ textAlign: "center",color:'black' }}>
                    <img
                      src={data.profilePic}
                      className="my-3"
                      style={ppStyle}
                      alt="pp"
                    />

                    <div className="card-body text-center">
                      <h6 className="card-title fw-bold">{data.profileName}</h6>
                      <p className="card-text">{data.userMsg}</p>
                      <p className="text-center">{data.num}</p>
                    </div>
                  </Link>
                  <div
                    class="card-footer text-center "
                    style={{
                      backgroundColor: "#f5f5f500",
                      borderTop: "1px solid #f9fafb",
                    }}
                  >
                    <AppButton buttontext="Donate to motivate" />
                  </div>
                </div>
              </Zoom>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VolunteerProfileCard;
