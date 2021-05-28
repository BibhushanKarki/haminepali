import React from "react";
import { BiStar } from "react-icons/bi";
import AppButton from "../UI/Buttons/AppButton";
import { VolunteerProfileData } from "./VolunteerProfileData";

const VolunterProfileSection = () => {
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
          <div className="col-md-4 " style={{ marginTop: 220 }}>
            <AppButton buttontext="Donate To Motivate" />
          </div>
          <div className="col-md-4 mt-2 text-center ">
            <img src="/img/pic2.jpg" alt="profile" style={profileSection} />
            <h5 className="mt-3">Levi Ackerman</h5>
            <p>“Lets help the needy one”</p>
            <BiStar size={30} style={{ fill: "#9F1718" }} />
            <BiStar size={30} style={{ fill: "#9F1718" }} />
            <BiStar size={30} style={{ fill: "#9F1718" }} />
            <BiStar size={30} style={{ fill: "#9F1718" }} />
            <BiStar size={30} style={{ fill: "#9F1718" }} />
            <p className="text-center mt-3">1250</p>
          </div>
          <div className="col-md-4 text-center" style={{ marginTop: 160 }}>
            <h5>Rate this person</h5>
            <p>Tell others what you think</p>
            <BiStar size={30} />
            <BiStar size={30} />
            <BiStar size={30} />
            <BiStar size={30} />
            <BiStar size={30} />
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
