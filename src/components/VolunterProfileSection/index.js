import React from "react";
import { BiStar } from "react-icons/bi";
import AppButton from '../UI/Buttons/AppButton'

const VolunterProfileSection = () => {
  const profileSection = {
    borderRadius: "50%",
    height: "120px",
    width: "120px",
    objectFit: "cover",
  };

  return (
    <>
      <div className="container">
        <div className="row  mt-5">
          <div className="col-md-4 " style={{ marginTop: 220 }}>
            <AppButton buttontext="Donate To Motivate"/>
          </div>
          <div className="col-md-4 mt-2 text-center ">
            <img src="/img/pic2.jpg" alt="profile" style={profileSection} />
            <h5 className="mt-3">Levi Ackerman</h5>
            <p>“Lets help the needy one”</p>
            <BiStar size={30} style={{ fill: '#9F1718' }} />
            <BiStar size={30} style={{ fill: '#9F1718' }} />
            <BiStar size={30} style={{ fill: '#9F1718' }} />
            <BiStar size={30} style={{ fill: '#9F1718' }} />
            <BiStar size={30} style={{ fill: '#9F1718' }} />
            <p className="text-center">1250</p>
          </div>
          <div className="col-md-4 text-center" style={{ marginTop: 160 }}>
            <h5>Rate this person</h5>
            <p>Tell others what you think</p>
            <BiStar size={30} />
            <BiStar size={30} />
            <BiStar size={30} />
            <BiStar size={30} />
            <BiStar size={30} />
          </div>
        </div>
        <hr />
      </div>

      <div className="Volunter-heading text-center mt-5">
        <h3 style={{ color: "#9F1718", fontWeight: "bold" }}>Volunteered</h3>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-3">
            <div class="card">
              <img
                class="card-img-top"
                src="/img/volunteer.jpg"
                alt="volunteer's profile"
              />
              <div class="card-body">
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  semper neque, est vitae ornare nec elementum, consectetur.
                  Fringilla elementum at diam in. Cras eget tristique nisl
                  gravida sed odio neque dui ac. Semper id mauris tristique
                  bibendum lacus enim varius. At sed massa dui pellentesque nibh
                  venenatis. Urna in ut orci neque sed. Elementum eget pulvinar
                  imperdiet dui, ipsum cursus sed imperdiet facilisis.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card">
              <img
                class="card-img-top"
                src="../img/volunteer.jpg"
                alt="volunteer's profile"
              />
              <div class="card-body">
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  semper neque, est vitae ornare nec elementum, consectetur.
                  Fringilla elementum at diam in. Cras eget tristique nisl
                  gravida sed odio neque dui ac. Semper id mauris tristique
                  bibendum lacus enim varius. At sed massa dui pellentesque nibh
                  venenatis. Urna in ut orci neque sed. Elementum eget pulvinar
                  imperdiet dui, ipsum cursus sed imperdiet facilisis.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card">
              <img
                class="card-img-top"
                src="../img/volunteer.jpg"
                alt="volunteer's profile"
              />
              <div class="card-body">
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  semper neque, est vitae ornare nec elementum, consectetur.
                  Fringilla elementum at diam in. Cras eget tristique nisl
                  gravida sed odio neque dui ac. Semper id mauris tristique
                  bibendum lacus enim varius. At sed massa dui pellentesque nibh
                  venenatis. Urna in ut orci neque sed. Elementum eget pulvinar
                  imperdiet dui, ipsum cursus sed imperdiet facilisis.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div class="card">
              <img
                class="card-img-top"
                src="/img/volunteer.jpg"
                alt="volunteer's profile"
              />
              <div class="card-body">
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                  semper neque, est vitae ornare nec elementum, consectetur.
                  Fringilla elementum at diam in. Cras eget tristique nisl
                  gravida sed odio neque dui ac. Semper id mauris tristique
                  bibendum lacus enim varius. At sed massa dui pellentesque nibh
                  venenatis. Urna in ut orci neque sed. Elementum eget pulvinar
                  imperdiet dui, ipsum cursus sed imperdiet facilisis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VolunterProfileSection;
