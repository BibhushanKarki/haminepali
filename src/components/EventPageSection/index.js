import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/images/fund.png";
// import "./event.css";

const EventSection = () => {
  const cardSection = {
    border: "none",
    boxShadow: "9px 10px 5px -8px rgba(191,183,183,0.75)",
  };
  const imageSection = {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    overflow: "hidden",
  };

  return (
    <>
      <div className="row mt-5 px-5">
        <div class="card mb-3" style={cardSection}>
          <div class="row no-gutters">
            <div class="col-md-2 mt-4 ">
              <img src={avatar} alt="Avatar" style={imageSection} />
            </div>
            <div class="col-md-8  mt-5 ">
              <div class="card-body">
                <h5 class="card-title">
                  Raising Fund For Orphans Around Biratnagar
                </h5>
                <p class="card-text">
                  Raising fund for Orphans around biratnagar who have been
                  sleeping on the road and have nothing to eat. They have been
                  suffering from various type of diseases but cant get a
                  medicineThe main moto of this event is to help them to live a
                  normal life .
                </p>
              </div>
            </div>
            <div class="col-md-2 ">
              <div class="card-body d-flex flex-column">
                <Link to="#" className="btn btn-primary mt-4 ">
                  Volunteer
                </Link>
                <Link to="#" className="btn  btn-primary mt-4 ">
                  Donate
                </Link>
                <Link to="#" className="btn btn-secondary mt-4 ">
                  Share
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5 px-5">
        <div class="card mb-3" style={cardSection}>
          <div class="row no-gutters">
            <div class="col-md-2  mt-4  ">
              <img src={avatar} alt="Avatar" style={imageSection} />
            </div>
            <div class="col-md-8  mt-5 ">
              <div class="card-body">
                <h5 class="card-title">
                  Raising Fund For Orphans Around Biratnagar
                </h5>
                <p class="card-text">
                  Raising fund for Orphans around biratnagar who have been
                  sleeping on the road and have nothing to eat. They have been
                  suffering from various type of diseases but cant get a
                  medicineThe main moto of this event is to help them to live a
                  normal life .
                </p>
              </div>
            </div>
            <div class="col-md-2 ">
              <div class="card-body d-flex flex-column">
                <Link to="#" className="btn btn-primary mt-4 ">
                  Volunteer
                </Link>
                <Link to="#" className="btn  btn-primary mt-4 ">
                  Donate
                </Link>
                <Link to="#" className="btn btn-secondary mt-4 ">
                  Share
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5 px-5">
        <div class="card mb-3" style={cardSection}>
          <div class="row no-gutters">
            <div class="col-md-2  mt-4  ">
              <img src={avatar} alt="Avatar" style={imageSection} />
            </div>
            <div class="col-md-8  mt-5 ">
              <div class="card-body">
                <h5 class="card-title">
                  Raising Fund For Orphans Around Biratnagar
                </h5>
                <p class="card-text">
                  Raising fund for Orphans around biratnagar who have been
                  sleeping on the road and have nothing to eat. They have been
                  suffering from various type of diseases but cant get a
                  medicineThe main moto of this event is to help them to live a
                  normal life .
                </p>
              </div>
            </div>
            <div class="col-md-2 ">
              <div class="card-body d-flex flex-column">
                <Link to="#" className="btn btn-primary mt-4 ">
                  Volunteer
                </Link>
                <Link to="#" className="btn  btn-primary mt-4 ">
                  Donate
                </Link>
                <Link to="#" className="btn btn-secondary mt-4 ">
                  Share
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5 px-5">
        <div class="card mb-3" style={cardSection}>
          <div class="row no-gutters">
            <div class="col-md-2  mt-4  ">
              <img src={avatar} alt="Avatar" style={imageSection} />
            </div>
            <div class="col-md-8  mt-5 ">
              <div class="card-body">
                <h5 class="card-title">
                  Raising Fund For Orphans Around Biratnagar
                </h5>
                <p class="card-text">
                  Raising fund for Orphans around biratnagar who have been
                  sleeping on the road and have nothing to eat. They have been
                  suffering from various type of diseases but cant get a
                  medicineThe main moto of this event is to help them to live a
                  normal life .
                </p>
              </div>
            </div>
            <div class="col-md-2 ">
              <div class="card-body d-flex flex-column">
                <Link to="#" className="btn btn-primary mt-4 ">
                  Volunteer
                </Link>
                <Link to="#" className="btn  btn-primary mt-4 ">
                  Donate
                </Link>
                <Link to="#" className="btn btn-secondary mt-4 ">
                  Share
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventSection;
