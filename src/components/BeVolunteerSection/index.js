import React from "react";
import VolunteerModal from "../VolunteerModal";

const BeVolunteerSection = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row ">
          <div className="col-md-12">
            <div className="volunteer-title">
              <h2 style={{ fontWeight: "bold", color: "#9F1718" }}>
                How to be Volunteer?
              </h2>
              <p>
                To get register as a volunteer user needs to fill a form first
                which includes name, number, expertise in the field, and
                location. Once the form will be filled by the user for
                volunteer, their geo-location will be tracked so that
                notification will be sent to their specific mobile number in
                case if there is an emergency call out.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row ">
          <div className="col-md-12">
            <div className="volunteer-title">
              <h2 style={{ fontWeight: "bold", color: "#9F1718" }}>
                Seeking a Volunteer:
              </h2>
              <p>
                If a volunteer is required for Traffic Chowk, Biratnagar area
                then all the volunteers who have registered will be tracked near
                traffic chowk and notifications must be sent to nearby
                volunteers for emergency call out. The nearby volunteers who are
                seeking to help must accept the notifications, if they click on
                accept button the accept notifications will be then sent to the
                Executive Team of HamiNepal.org where the team will receive
                volunteers' mobile number.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4 mb-4">
        <div className="row ">
          <div className="col-md-12 text-center">
            <button
              type="submit"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#volunteerModal"
            >
              Be A Volunteer
            </button>
          </div>
        </div>
      </div>
      <VolunteerModal />
    </>
  );
};

export default BeVolunteerSection;
