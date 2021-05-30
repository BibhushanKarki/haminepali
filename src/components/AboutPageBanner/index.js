import React from "react";
import { AboutPageData as data } from "./AboutPageTextData/AboutPageData";
import './timeline.css'
const AboutPageBanner = () => {
  const aboutBanner = {
    marginTop: "3.5rem",
    backgroundColor: "#9F1718",
    height: "40vh",
    color: "#fff",
    borderBottom: "2px solid white",
  };

  const hrline = {
    borderBottom: "2px solid white",
  };

  const aboutSubheading = {
    marginTop: "20px",
    textAlign: "center",
    fontSize: "23px",
  };

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
            <div className="col-md-2" style={hrline}>
              <h1 className="pb-2 text-center">ABOUT US</h1>
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
                {data.map((data) => {
                  return (
                    <p style={contentParaghaph} key={data.id}>
                      {data.paragraph}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    <div className="container">  
    <div className="page-header mb-4">
        <h1 className="text-center" id="timeline"><u>Milestones</u></h1>
    </div>
    <ul className="timeline">
        <li>
          <div className="timeline-badge info"><i className="fa fa-check-square-o"></i></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">After Earthquake</h4>
            </div>
            <div className="timeline-body">
              <p>Shortly after, while the nation hadn’t even completely recovered from earthquake situation, Nepal faced another catastrophe. India blocked its borders with Nepal causing shortage of petroleum, LPG and rations. HamiNepal again worked together at such time to serve people.</p>
              <hr/>
            </div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-badge success"><i className="fa fa-thumbs-o-up"></i></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Mental Health Campaigns</h4>
            </div>
            <div className="timeline-body">
              <p>Provided mental health campaigns in a bid to aware people about mental health.</p>
            </div>
          </div>
        </li>
        <li>
          <div className="timeline-badge"><i className="fa fa-check-square-o"></i></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Earthquake</h4>
              <p><small className="text-muted"><i className="fa fa-clock-o"></i> 1 year ago</small></p>
            </div>
            <div className="timeline-body">
              <p>Made houses for those who lost their properties due to the earthquake in several parts of  Nepal.</p>
            </div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-badge warning"><i className="fa fa-check-square-o"></i></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Donations Received</h4>
            </div>
            <div className="timeline-body">
              <p>Received donations from helpful donors.</p>
            </div>
          </div>
        </li>
        <li>
          <div className="timeline-badge danger"><i className="fa fa-check-square-o"></i></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Food Distribution</h4>
            </div>
            <div className="timeline-body">
              <p>Provided food and clothes to needy people.</p>
            </div>
          </div>
        </li>
      </ul>    
      </div>  
    </>
  );
};

export default AboutPageBanner;
