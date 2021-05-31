import React from "react";
import { Link } from "react-router-dom";
import "./gallery.css";
import FirstImg from "../../assets/images/group6.jpg";
import SecondImg from "../../assets/images/group2.jpg";
import ThirdImg from "../../assets/images/group7.jpg";
import FourthImg from "../../assets/images/group1.jpg";
const GallerySection = () => {
  return (
    <div className="gallery-container mb-2">
      <div className="container">
        <div className="row text-center">
          <h1 className="fw-bold" style={{ color: "#9f1718" }}>
            Gallery
          </h1>
        </div>
        <div className="row row-bottom-padded-md mt-5">
          <div className="col-md-12">
            <ul id="gallery-list">
              <li
                className="two-third animate-box"
                data-animate-effect="fadeIn"
                style={{
                  background: `url(${FirstImg})`,
                  backgroundSize: "cover",
                }}
              >
                <Link to="#" className="color-3">
                  <div className="case-studies-summary">
                    <span>Give Love</span>
                    <h2 style={{ fontSize: 20 }}>Helping is caring</h2>
                  </div>
                </Link>
              </li>

              <li
                className="one-third animate-box"
                data-animate-effect="fadeIn"
                style={{
                  background: `url(${SecondImg})`,
                  backgroundSize: "cover",
                }}
              >
                <Link to="#" className="color-4">
                  <div className="case-studies-summary">
                    <span>Give Love</span>
                    <h2 style={{ fontSize: 20 }}>Donation is caring</h2>
                  </div>
                </Link>
              </li>

              <li
                className="one-third animate-box"
                data-animate-effect="fadeIn"
                style={{
                  background: `url(${ThirdImg})`,
                  backgroundSize: "cover",
                }}
              >
                <Link to="#" className="color-5">
                  <div className="case-studies-summary">
                    <span>Give Love</span>
                    <h2 style={{ fontSize: 20 }}>Donation is caring</h2>
                  </div>
                </Link>
              </li>
              <li
                className="two-third animate-box"
                data-animate-effect="fadeIn"
                style={{
                  background: `url(${FourthImg})`,
                  backgroundSize: "cover",
                }}
              >
                <Link to="#" className="color-6">
                  <div className="case-studies-summary">
                    <span>Give Love</span>
                    <h2 style={{ fontSize: 20 }}>Donation is caring</h2>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="row d-flex justify-content-center mt-2">
					<div className="col-md-4 col-md-offset-4 text-center animate-box">
						<a href="#" className="btn btn-primary btn-lg">See Gallery</a>
					</div>
				</div> */}
      </div>
    </div>
  );
};

export default GallerySection;
