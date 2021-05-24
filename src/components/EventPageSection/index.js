import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./event.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { EventSectionData as data } from "./EventSectionData";
import { BsFillCalendarFill } from "react-icons/bs";

const EventSection = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      {data.map((data) => {
        return (
          <div className="row mt-5 px-5" key={data.id}>
            <div className="card card-event-section mb-3">
              <div className="row no-gutters">
                <div className="col-md-2 mt-4 ">
                  <div className="imageContainer">
                    <img
                      src={data.image}
                      alt="Avatar"
                      className="imageSection"
                    />
                  </div>
                </div>
                <div className="col-md-8  mt-5 ">
                  <div className="card-body">
                    <h5 className="card-title heading">{data.title}</h5>
                    <p className="card-text sub-heading">
                      {data.paragraph}
                      <Link
                        to="/event-extended"
                        style={{ color: "#9F1718", textDecoration: "none" }}
                      >
                        See more
                      </Link>
                    </p>
                  </div>
                </div>
                <div className="col-md-2 ">
                  <div className="card-body d-flex flex-column">
                    <Link to="/volunteer" className="btn btn-primary mt-4 ">
                      Volunteer
                    </Link>
                    <Link to="/donate" className="btn  btn-primary mt-4 ">
                      Donate
                    </Link>
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#shareModal"
                      className="btn btn-secondary button-secondary mt-4 "
                    >
                      Share
                    </button>
                    {/* <!-- Modal --> */}
                    <div
                      className="modal fade"
                      id="shareModal"
                      tabIndex="-1"
                      aria-labelledby="shareModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header share-modal-header">
                            <h5 className="modal-title" id="shareModal">
                              Help by Sharing
                            </h5>
                            <button
                              type="button"
                              className="btn-close share-button-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <h5
                              className="modal-title share-modal-title"
                              id="shareModal"
                            >
                              Copy link
                            </h5>
                            <div className="row">
                              <div className="col-md-8">
                                <input
                                  className="form-control"
                                  type="text"
                                  value={inputValue}
                                  onChange={(e) =>
                                    setInputValue(e.target.value)
                                  }
                                />
                              </div>
                              <div className="col-md-4">
                                <CopyToClipboard text={inputValue}>
                                  <button className="btn btn-primary mt-2 text-center">
                                    Copy
                                  </button>
                                </CopyToClipboard>
                              </div>
                            </div>
                          </div>
                          <div className="modal-footer"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="row px-5">
        <div className="col-md-12 upcoming-event-section">
          <Link to="/upcoming-event" className="btn btn-primary mt-4 ">
            Upcoming Events{" "}
            <span>
              <BsFillCalendarFill />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default EventSection;
