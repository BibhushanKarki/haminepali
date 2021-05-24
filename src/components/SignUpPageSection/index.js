import React from "react";
import Verify from '../../assets/images/verify.png';

const SignUpPageSection = () => {
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
                <div className="row mt-4 mb-3">
                  <div className="col-md-12">
                    <button type="submit" className=" btn btn-primary" data-bs-toggle="modal" data-bs-target="#registerModal">
                      Register
                    </button>
                  </div>
                </div>
                <div className="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content text-center">
                      <div className="modal-header justify-content-center" style={{position:'relative'}}>
                        <div className="d-flex flex-column align-items-center">
                          <img src={Verify} alt="verifyicon" style={{width:'50px',height:'50px'}}/>
                          <h4 className="modal-title fw-bold" id="registerModalLabel" style={{color:'#9F1718'}}>Details Registered!</h4>
                        </div>
                        <button type="button" className="btn-close m-0 align-top" data-bs-dismiss="modal" style={{position:'absolute',top:'5px',right:'5px'}} aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <p>Your data has been successfully registered. Our verification team will verify your details and further information will be given to <span style={{color:'#9F1718'}}>**********</span>. Please save this for your records.</p>
                      </div>
                      <div className="modal-footer d-flex flex-column justify-content-center">
                        <h5 style={{color:'#9F1718',cursor:'pointer'}}><b><u>Share with Friends</u></b></h5>
                        <div className="social d-flex justify-content-evenly w-100 mt-4">
                          <div className="d-flex flex-column align-items-center"><img style={{height:'40px',width:'40px'}} src="https://image.flaticon.com/icons/png/512/1384/1384053.png" alt="fb" /><p className="fw-bold mt-2">Facebook</p></div>
                          <div className="d-flex flex-column align-items-center"><img style={{height:'40px',width:'40px'}} src="https://image.flaticon.com/icons/png/512/733/733579.png" alt="tw" /><p className="fw-bold mt-2">Twitter</p></div>
                          <div className="d-flex flex-column align-items-center"><img style={{height:'40px',width:'40px'}} src="https://image.flaticon.com/icons/png/512/1384/1384063.png" alt="insta" /><p className="fw-bold mt-2">Instagram</p></div>
                          <div className="d-flex flex-column align-items-center"><img style={{height:'40px',width:'40px'}} src="https://image.flaticon.com/icons/png/512/220/220236.png" alt="whatsapp" /><p className="fw-bold mt-2">Whatsapp</p></div>
                        </div>
                      </div>
                    </div>
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

export default SignUpPageSection;
