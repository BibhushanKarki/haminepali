import React from "react";
import { Link } from "react-router-dom";

const SignUpPageSection = () => {
  return (
    <>
      <div className="container-sm  mt-5 mb-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <div
              className="card form-card px-5 py-3 text-center"
              style={{
                boxShadow: "0px 0px 5px 0px rgba(212, 182, 212, 1)",
              }}
            >
              <div
                className="card-title "
                style={{
                  fontWeight: "bold",
                  fontSize: 30,
                  color: "#9F1718",
                }}
              >
                Sign Up
              </div>
              <hr />
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
                    className="form-control"
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
              <div className="row mt-3 mb-3">
                <div className="col-md-12">
                  <button type="submit" className=" btn btn-primary">
                    Login
                  </button>
                </div>
              </div>
              <hr />
              <div className="row mt-3 ">
                <div className="col-md-12">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "#9F1718" }}
                  >
                    Forget Password
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPageSection;