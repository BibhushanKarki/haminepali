import React from "react";
import { GetStarted as data } from "./GetStartedData";
import GetStartedBtn from "./GetStartedBtn";
import Fade from "react-reveal/Fade";
import "./getstarted.css";

const GetStartedCovid = () => {
  return (
    <div className="row d-flex align-items-center m-4">
      <Fade left>
        <div className="col-md-6 get-started-covid">
          <h1>{data.covid.title}</h1>
          <h4 className="my-4" style={{ color: "gray" }}>
            {data.covid.punchline}
          </h4>
          <GetStartedBtn buttontitle="Get Started" />
        </div>
      </Fade>
      <Fade right>
        <div className="col-md-6 text-center covid-image">
          <img
            src={data.covid.imgCovid}
            alt="covidimg"
            className="imageStyle"
          />
        </div>
      </Fade>
    </div>
  );
};

export default GetStartedCovid;
