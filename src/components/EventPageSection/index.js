import React from "react";
import { Link } from "react-router-dom";
import "./event.css";
import { EventSectionData as data } from "./EventSectionData";

const EventSection = () => {
  return (
    <>
      {data.map((data) => {
        return (
          <div className="row mt-5 px-5" key={data.id}>
            <div className="card card-event-section mb-3">
              <div className="row no-gutters">
                <div className="col-md-2 mt-4 ">
                  <img src={data.image} alt="Avatar" className="imageSection" />
                </div>
                <div className="col-md-8  mt-5 ">
                  <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">
                      {data.paragraph}
                      <Link
                        to="#"
                        style={{ color: "#9F1718", textDecoration: "none" }}
                      >
                        See more
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="col-md-2 ">
                  <div className="card-body d-flex flex-column">
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
        );
      })}
    </>
  );
};

export default EventSection;
