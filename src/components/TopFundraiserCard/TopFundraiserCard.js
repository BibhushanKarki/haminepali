import React from "react";
import { FundraiserCardData as data } from "./FundraiserCardData";
import { Link } from "react-router-dom";
import Zoom from "react-reveal/Zoom";
import "./top-fundraiser.css";

const TopFundraiserCard = ({ title }) => {
  return (
    <>
      <div className="container mt-5">
        <div className="row ">
          <div className="top-fundraiser-heading">
            <h2>{title}</h2>
          </div>
        </div>
      </div>

      {/* <!-- Topic Cards --> */}
      <div id="cards_landscape_wrap-2">
        <div className="container">
          <div className="row">
            {data.map((data, key) => {
              return (
                <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                  <div className="card-flyer">
                    <div className="text-box">
                      <div className="image-box">
                        <img src={data.cardimg} alt="" />
                      </div>
                      <div className="text-container">
                        <h5>{data.location}</h5>
                        <h6> {data.title}</h6>
                        <p>{data.desc}</p>
                      </div>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">4 days ago</li>
                    </ul>
                    <div className="card-body">
                      <a
                        href="#"
                        className="card-link"
                        style={{ color: "#212529", fontWeight: "bold" }}
                      >
                        {data.gainedDonation}
                      </a>
                      &nbsp; &nbsp; &nbsp;
                      <a
                        href="#"
                        className="card-link"
                        style={{ color: "#212529" }}
                      >
                        {data.donationLevel}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopFundraiserCard;
