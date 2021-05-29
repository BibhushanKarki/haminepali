import React,{useState} from "react";
import { Link } from "react-router-dom";

const SignInSection = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  return (
    <>
      <div className="container-sm  mt-5 mb-5">
        <div className="row">
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
                  Sign In
                </div>
                <hr />
                <div className="row mt-3">
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email-Address"
                      value={email}
                      onChange={(e)=> setEmail(e.target.value)}
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
                      value={password}
                      onChange={(e)=> setPassword(e.target.value)}
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
                <div className="row mt-3 mb-3">
                  <div className="col-md-6">
                    <Link to="/sign-up" style={{ textDecoration: "none" }}>
                      Don't have an account?
                      <span style={{ color: "#9F1718" }}>Sign Up</span>
                    </Link>
                  </div>
                  <div className="col-md-6">
                    <Link
                      to="#"
                      style={{ textDecoration: "none", color: "#9F1718" }}
                    >
                      Forget Password
                    </Link>
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

export default SignInSection;
