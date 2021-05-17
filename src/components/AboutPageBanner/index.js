import React from "react";
import { AboutPageData as text } from "./AboutPageTextData/AboutPageData";

const AboutPageBanner = () => {
  const aboutBanner = {
    marginTop: "3.5rem",
    backgroundColor: "#9F1718",
    height: "25vh",
    color: "#fff",
  };
  const hrline={
    borderBottom:"2px solid white"
  }
  const aboutSubheading = {
    marginTop: "20px",
    textAlign: "center",
    fontSize: "23px",
  };

  // const horizontalLine = {
  //   height: "1px",
  //   width: "auto",
  //   backgroundColor: "white !important",
  //   textAlign: "center",
  //   alignSelf:'center'
  // };

  const sectionContent = {
    marginTop: "50px",
    marginBottom: "50px",
  };

  const contentParaghaph = {
    marginTop: "20px",
  };

  return (
    <>
      <section className="about-banner">
        <div className="row" style={aboutBanner}>
          <div className="about-heading col-md-12 d-flex justify-content-center flex-column align-items-center">
            <div className="col-md-6">
              <h1 className="pb-2 text-center" style={hrline}>
                ABOUT US
              </h1>
            </div>
            

            <p style={aboutSubheading}>
              Humanitarian Action and long-term development programs.
            </p>
          </div>
        </div>
      </section>

      <section className="section-content">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="section-content-paragraph" style={sectionContent}>
                {text.map((text, key) => {
                  return (
                    <p style={contentParaghaph} key={key}>
                      {text.paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPageBanner;
