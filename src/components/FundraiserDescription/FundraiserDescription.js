import React from "react";
import FundraiserDescriptionCard from "./FundraiserDescriptionCard";
import { FundraiserDescriptionData as data } from "./FundraiserDescriptionData";
import { Link } from "react-router-dom";
import Comments from "./Comments";
import AppButton from "../UI/Buttons/AppButton";

const FundraiserDescription = () => {
  return (
    <div className="row mx-2 my-4">
      <div className="row my-2">
        <h1>{data.title}</h1>
        <div className="col-md-8">
          <img src={data.image} alt="img" style={{ width: "100%",height:"650px",objectFit: "cover"}} />
        </div>
        <div className="col-md-4">
          <FundraiserDescriptionCard />
        </div>
      </div>
      <hr />
      <p>
        {data.createdDate}&nbsp; | &nbsp;{data.tags}
      </p>
      <hr />
      <div className="row">
        <div
          className="col-md-12"
          style={{ border: "2px solid gray", padding: "1.5rem" }}
        >
          <p>{data.para}</p>
          <p>{data.para}</p>
          <p>{data.para}</p>
        </div>
      </div>
      <div className="row mb-4 my-4">
        <div className="col-md-4 d-flex justify-content-center">
          <AppButton buttontext="Contact Directly" />
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <AppButton buttontext="Donate" />
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <Link to="#" className="btn button-secondary">
            Share
          </Link>
        </div>
      </div>
      <div className="row">
        <Comments />
      </div>
      <div className="row">
        <div className="col-md-4">
          <Link to="#" className="btn btn-plain">
            See all
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FundraiserDescription;
