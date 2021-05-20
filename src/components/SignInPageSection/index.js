import React from "react";
import { Link } from "react-router-dom";

const SignInSection = () => {
  return (
    <>
      <div className="container-sm  mt-5 mb-5">
        <div className="row ">
          <div className="col-md-12 ">
            <div className="card form-card px-5 py-3 text-center">
              <div className="card-title">Sign In</div>
              <hr />
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

export default SignInSection;
