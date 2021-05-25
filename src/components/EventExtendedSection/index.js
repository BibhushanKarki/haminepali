import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./event-extended.css";
import { EventExtendedSectionData as items } from "./EventExtendedSectionData";

const EventExtendedSection = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <div className="container mt-5">
        <div className="row ">
          <div className="col-md-12">
            <div
              className="card"
              style={{
                border: "none",
                boxShadow: "#f8f8f8 1px 1px 10px 0px",
              }}
            >
              <div className="card-body">
                <h5
                  className="card-title text-center"
                  style={{ fontWeight: "bold", fontSize: 25 }}
                >
                  Raising Fund For Orphans Around Biratnagar
                </h5>
              </div>
              <img
                className="card-img-top image-container"
                src="./img/orphans.png"
                alt="orphans"
                style={{ height: 300 }}
              />
              <div className="mt-md-3 ">
                <p className="card-text">
                  Government provides support but that isn’t enough. They need
                  more care and a guide who can hold their hand and show them
                  the right path. hIn this world, there are three most important
                  things which society needs to make the world a better place.
                  First is food, which is important to stay alive. Second is
                  education which would uplift the minds of each individual and
                  thus the world as whole. Third and last would be health. Each
                  person needs proper health and medical assistance from time to
                  time. We are seriously excited about our organization involved
                  in the society. Helping orphans selflessly and seeing that our
                  organization can be value to someone is truly satisfying. The
                  thing which our organization is seeking is the happiness, the
                  sparkle of achievement in the eyes of those children when they
                  would gain knowlwdge and would be able to make their life
                  worthwhile. This task is selflessly choosen and our
                  organization never expected anything in return other than
                  peace which we would get through it. Helping orphans is all it
                  takes to be at peace and to develop the feeling of pride.
                  Thinking about volunteering and helping the needy people is
                  one thing and helping in reality is a different world
                  altogether.
                </p>
              </div>
              <hr />
              <div className="text-center mb-5">
                <Link to="/volunteer" className="btn btn-primary mt-4 ">
                  Volunteer
                </Link>
                &nbsp; &nbsp; &nbsp;
                <Link to="/donate" className="btn  btn-primary mt-4 ">
                  Donate
                </Link>
                &nbsp; &nbsp; &nbsp;
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
                  tabindex="-1"
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
                        <div className="row mb-2  ">
                          <div className="col-md-12 d-flex flex-row px-2 ms-1 ">
                            <div className="col">
                              <Link to="#">
                                <img src="img/facebook.png" alt="facebook" />
                              </Link>
                              <h5
                                style={{
                                  fontSize: 15,
                                  fontWeight: 600,
                                  marginTop: 20,
                                }}
                              >
                                Facebook
                              </h5>
                            </div>

                            <div className="col">
                              <Link to="#">
                                <img src="img/viber.png" alt="facebook" />
                              </Link>
                              <h5
                                style={{
                                  fontSize: 15,
                                  fontWeight: 600,
                                  marginTop: 20,
                                }}
                              >
                                Viber
                              </h5>
                            </div>

                            <div className="col">
                              <Link to="#">
                                <img src="img/twitter.png" alt="facebook" />
                              </Link>
                              <h5
                                style={{
                                  fontSize: 14,
                                  fontWeight: 600,
                                  marginTop: 20,
                                }}
                              >
                                Twitter
                              </h5>
                            </div>

                            <div className="col">
                              <Link to="#">
                                <img src="img/instagram.jpg" alt="facebook" />
                              </Link>
                              <h5
                                style={{
                                  fontSize: 14,
                                  fontWeight: 600,
                                  marginTop: 20,
                                }}
                              >
                                Instagram
                              </h5>
                            </div>
                            <div className="col">
                              <Link to="#">
                                <img src="img/whatsapp.png" alt="facebook" />
                              </Link>
                              <h5
                                style={{
                                  fontSize: 14,
                                  fontWeight: 600,
                                  marginTop: 20,
                                }}
                              >
                                Whataspp
                              </h5>
                            </div>
                          </div>
                        </div>

                        <hr className="hrLine" />

                        <h5
                          className="modal-title share-modal-title"
                          id="shareModal"
                        >
                          Copy link
                        </h5>
                        <div className="row">
                          <div className="col-md-8">
                            <input
                              className="form-control mt-2"
                              type="text"
                              value={inputValue}
                              onChange={(e) => setInputValue(e.target.value)}
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

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12 volunteer-heading">
            <h3 style={{ color: "#9F1718", fontWeight: "bold", fontSize: 30 }}>
              Volunteers involved
            </h3>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          {items.map((items) => {
            return (
              <div className="col-md-3" key={items.id}>
                <div className="card card-01">
                  <div className="profile-box">
                    <img
                      className="card-img-top rounded-circle"
                      src={items.image}
                      alt="profile"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="card-body text-center">
                    <h4 className="card-title">{items.name}</h4>
                    <p className="card-text mb-4 " style={{ color: "#9F1718" }}>
                      {items.position}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default EventExtendedSection;
