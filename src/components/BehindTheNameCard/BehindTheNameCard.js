import React from "react";
import AppButton from "../UI/Buttons/AppButton";
import { BehindTheNameData as data } from "./BehindTheNameData";
import Zoom from "react-reveal/Zoom";

const BehindTheNameCard = () => {
  const cardStyle = {
    width: "18rem",
  };
  const ppStyle = {
    borderRadius: "50%",
    height: "100px",
    width: "100px",
    objectFit: "cover",
    alignSelf: "center",
  };
  return (
    <div className="behindTheNameCardContainer my-4">
      <div className="row">
        <h2
          className="fw-bold my-5 text-center"
          style={{ color: "#9F1718", marginLeft: "2rem" }}
        >
          Behind The Name
        </h2>
        <div className="col-md-12 d-flex justify-content-center">
          <p className="mb-4" style={{ width: "80rem", fontSize: "1.2em" }}>
            On 25 April, 2015 an earthquake with a magnitude of 7.8 Richter
            scale struck Nepal along with continued aftershocks occurring
            throughout the nation at the intervals of 15–20 minutes. The
            earthquake affected a huge population of the nation with{" "}
            <strong>about 9,000 fatalities</strong> and{" "}
            <strong>nearly 22,000 injured people.</strong>
            <br />
            All of the hospitals in Kathmandu were in chaos and unmanaged with
            injured people flowing in rapidly. The National Trauma Center, a
            government hospital, was no exception. After hearing the
            Information, several youths went to the trauma hospital and offered
            to volunteer in order to control the situation. Our organization
            founder, Mr. Sudan Gurung, was also one of them.
            <br />
            The volunteering youths started calling themselves “I to We” at that
            time because of discrete reasons. However, the name was later
            changed into ‘HamiNepal’, which is roughly translated as ‘We for
            Nepal’. It is how people with helping intention came along and
            formed the HamiNepal Youth Organization.
          </p>
        </div>
        {data.map((data, key) => {
          return (
            <div
              className="col-md-3 mt-5  mb-3 d-flex justify-content-center"
              key={key}
            >
              <Zoom>
                <div className="card" style={cardStyle}>
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
