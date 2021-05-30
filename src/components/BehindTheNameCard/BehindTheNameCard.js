import React from "react";
import AppButton from "../UI/Buttons/AppButton";
import { BehindTheNameData as data } from "./BehindTheNameData";
import Zoom from "react-reveal/Zoom";

const BehindTheNameCard = () => {
  const ppStyle = {
    borderRadius: "50%",
    height: "100px",
    width: "100px",
    objectFit: "cover",
    alignSelf: "center",
  };
  return (
    <div className="behindTheNameCardContainer my-4">
      <div className="row d-flex justify-content-center">
        <h2
          className="fw-bold my-5 text-center"
          style={{ color: "#9F1718", marginLeft: "2rem" }}
        >
          Behind The Name
        </h2>
        {data.map((data, key) => {
          return (
            <div
              className="col-md-10 mt-5  mb-3 d-flex justify-content-center"
              key={key}
            >
              <Zoom>
                <div className="card">
                  <img
                    src={data.img}
                    className="my-3"
                    style={ppStyle}
                    alt="pp"
                  />
                  <div className="card-body text-center">
                    <h6
                      className="card-title fw-bold"
                      style={{ color: "#9F1718" }}
                    >
                      {data.designation}
                    </h6>
                    <h6 className="card-title fw-bold">{data.fullname}</h6>
                    <p className="card-text">{data.desc}</p>
                    <AppButton buttontext="Read More" />
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

export default BehindTheNameCard;
