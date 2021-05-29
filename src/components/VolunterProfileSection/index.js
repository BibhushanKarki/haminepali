import React from "react";
import AppButton from "../UI/Buttons/AppButton";
import { VolunteerProfileData } from "./VolunteerProfileData";
import "./volunteerprofile.css";
import StarRating from "../../pages/StarRating";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

const VolunterProfileSection = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/sign-in" />;
  }

  const profileSection = {
    borderRadius: "50%",
    height: "120px",
    width: "120px",
    objectFit: "cover",
  };

  return (
    <>
      <div className="container">
        <div className="row  mt-5">
          <div className="col-md-4 volunteer-button">
            <AppButton
              buttontext="Donate To Motivate"
              className="button-heading"
            />
          </div>
          <div className="col-md-4 mt-2 text-center ">
            <img src="/img/pic2.jpg" alt="profile" style={profileSection} />
            <h5 className="mt-3">Levi Ackerman</h5>
            <p>“Lets help the needy one”</p>
            <StarRating />
            <p className="text-center mt-3">1250</p>
          </div>

          <div className="col-md-4 rating-section text-center ">
            <h5>Rate this person</h5>
            <p>Tell others what you think</p>
            <StarRating />
          </div>
        </div>
        <hr />
      </div>

      <div className="container">
        <div className="row">
          <div className=" col-md-12 Volunter-heading text-center mt-5">
            <h3 style={{ color: "#9F1718", fontWeight: "bold" }}>
              Volunteered
            </h3>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          {VolunteerProfileData.map((data) => {
            return (
              <div className="col-md-3" key={data.id}>
                <div className="card">
                  <img
                    className="card-img-top"
                    src={data.image}
                    alt="volunteer's profile"
                  />
                  <div className="card-body">
                    <p className="card-text">{data.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container ">
        <div className="row">
          <div className=" col-md-12 Share-button text-center mt-5">
            <button type="button" className="btn btn-primary">
              Share
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VolunterProfileSection;
