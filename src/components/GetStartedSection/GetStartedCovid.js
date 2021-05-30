import React from "react";
import { GetStarted as data } from "./GetStartedData";
import GetStartedBtn from "./GetStartedBtn";
import Fade from "react-reveal/Fade";
import "./getstarted.css";

const GetStartedCovid = () => {
  return (
    <div className="row d-flex align-items-center m-4">
<<<<<<< HEAD
      <Fade left><div className="col-md-6 col-sm-12">
        <h1>{data.covid.title}</h1>
        <h4 className="my-4" style={{color:'gray'}}>{data.covid.punchline}</h4>
        <GetStartedBtn buttontitle="Get Started"/>
      </div></Fade>
      <Fade right>
      <div className="col-md-6 text-center col-sm-12">
        <img src={data.covid.imgCovid} alt="covidimg" style={imgStyle} />
      </div></Fade>
=======
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
>>>>>>> 207a3833a48b2b703cb5025a0b58533a3d496275
    </div>
  );
};

export default GetStartedCovid;
