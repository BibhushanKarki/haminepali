import React from "react";
import { GetStarted as data } from "./GetStartedData";
import GetStartedBtn from "./GetStartedBtn";
import Fade from "react-reveal/Fade";
import "./getstarted.css";

const GetStartedHousing = () => {
  return (
    <div className="row d-flex align-items-center m-4  main-content">
      <Fade left>
        <div className="col-md-6 get-started-title">
          <h1>{data.housing.title}</h1>
          <h4 className="my-4" style={{ color: "gray" }}>
            {data.housing.punchline}
          </h4>
          <GetStartedBtn buttontitle="Get Started" />
        </div>
      </Fade>
      <Fade right>
        <div className="col-md-6 text-center image-right">
          <img
            src={data.housing.imgCovid}
            alt="covidimg"
            className="imageStyle"
          />
        </div>
      </Fade>
    </div>
  );
};

export default GetStartedHousing;
