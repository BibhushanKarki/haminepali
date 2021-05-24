import React from "react";
import "./volunteersignup.css";

const SignUpSection = () => {
  return (
    <>
      <div className="container-sm  mt-5 mb-5">
        <div className="row ">
          <form className="d-flex justify-content-center">
            <div className="col-md-6">
              <div
                className="card px-5 py-3 text-center"
                style={{
                  boxShadow: "0px 0px 5px 0px rgba(212, 182, 212, 1)",
                }}
              >
                <div className="card-title mt-3 separator">Sign Up</div>
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
                      type="number"
                      className="form-control"
                      placeholder="Mobile Number"
                      name="mobile"
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
                      type="number"
                      className="form-control"
                      placeholder="Mobile Number"
                      name="mobile"
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
                <div className="row  mt-5">
                  <div className="col-md-12 separator ">
                    Additional Information
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Age"
                      name="age"
                      required
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Academic Qualification"
                      name="academicqualification"
                      required
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Field Of Expertise"
                      name="expertisefield"
                      required
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Country"
                      name="country"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="State/Province/Religion"
                      name="state"
                      required
                    />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                      name="city"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Street Address"
                      name="streetaddress"
                      required
                    />
                  </div>
                </div>

                <div className="row mt-5 mb-3">
                  <div className="col-md-12">
                    <button type="submit" className=" btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUpSection;
