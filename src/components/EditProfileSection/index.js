import React from "react";
import "./editprofile.css";

const EditProfileSection = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center text-center">
          <div className="col-md-12 ">
            <div
              className="card "
              style={{ boxShadow: "none", border: "none" }}
            >
              <div
                className="card-header"
                style={{ backgroundColor: "#9f1718", height: 200 }}
              ></div>
              <div className="card-body text-center">
                <img
                  className="avatar rounded-circle"
                  src="/img/pic2.jpg"
                  alt="userProfile"
                />
                <h4 className="card-title">Levi Ackerman</h4>

                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Firstname"
                        name="firstname"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control lastname"
                        placeholder="LastName"
                        name="lastname"
                        required
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email-Address"
                        name="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-12">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        required
                      />
                    </div>
                  </div>
                  <div className="row mt-4 mb-3">
                    <div className="col-md-12">
                      <button type="submit" className=" btn btn-primary">
                        Update
                      </button>
                      &nbsp;&nbsp;
                      <button type="submit" className=" btn button-secondary">
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfileSection;
