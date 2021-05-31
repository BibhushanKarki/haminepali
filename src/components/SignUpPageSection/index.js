import React,{useState, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import Verify from "../../assets/images/verify.png";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { register } from "../../store/Actions/AuthActions";

// Validation

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const vemail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vfirstname = (value) => {
  if (value.length < 3 || value.length > 25) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 25 characters.
      </div>
    );
  }
};
const vlastname = (value) => {
  if (value.length < 2 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 2 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be more than 6 characters.
      </div>
    );
  }
};


const SignUpPageSection = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [firstname,setFirstname]=useState("");
  const [lastname,setLastname]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();

  const onChangeFirstname = (e) => {
    const firstname = e.target.value;
    setFirstname(firstname);
  };
  const onChangeLastname = (e) => {
    const lastname = e.target.value;
    setLastname(lastname);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(register(firstname,lastname, email, password))
        .then(() => {
          setSuccessful(true);
        })
        .catch(() => {
          setSuccessful(false);
        });
    }
  };

  return (
    <>
      <div className="container-sm  mt-5 mb-5">
        <div className="row ">
        <div className="d-flex justify-content-center">
        <div className="col-md-6">
              <Form
                className="card px-5 py-3 text-center"
                style={{
                  boxShadow: "0px 0px 5px 0px rgba(212, 182, 212, 1)",
                }}
                onSubmit={handleRegister} ref={form}
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
                {!successful && (
                <div>
                <div className="row">
                  <div className="col-md-6">
                    <Input
                      type="text"
                      className="form-control"
                      placeholder="Firstname"
                      value={firstname}
                      onChange={onChangeFirstname}
                      validations={[required, vfirstname]}
                    />
                  </div>
                  <div className="col-md-6">
                    <Input
                      type="text"
                      className="form-control lastname"
                      placeholder="LastName"
                      value={lastname}
                      onChange={onChangeLastname}
                      validations={[required, vlastname]}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <Input
                      type="text"
                      className="form-control"
                      placeholder="Email-Address"
                      value={email}
                      onChange={onChangeEmail}
                      validations={[required, vemail]}
                    />
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <Input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={onChangePassword}
                      validations={[required, vpassword]}
                    />
                  </div>
                </div>
                <div className="row mt-4 mb-3">
                  <div className="col-md-12">
                    <button
                      className=" btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#registerModal"
                    >
                      Register
                    </button>
                  </div>
                </div>
                </div>
                )}

                {message && (
                <div className="form-group">
                  <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                    {message}
                  </div>
                </div>
              )}
              <CheckButton style={{ display: "none" }} ref={checkBtn} />
              
              </Form>
            </div>
          </div>
        </div>
         {/* Modal */}
        <div className="modal fade"
            id="registerModal"
            tabIndex="-1"
            aria-labelledby="registerModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content text-center">
                <div
                  className="modal-header justify-content-center"
                  style={{ position: "relative" }}
                >
                  <div className="d-flex flex-column align-items-center">
                    <img
                      src={Verify}
                      alt="verifyicon"
                      style={{ width: "50px", height: "50px" }}
                    />
                    <h4
                      className="modal-title fw-bold"
                      id="registerModalLabel"
                      style={{ color: "#9F1718" }}
                    >
                      Details Registered!
                    </h4>
                  </div>
                  <button
                    type="button"
                    className="btn-close m-0 align-top"
                    data-bs-dismiss="modal"
                    style={{
                      position: "absolute",
                      top: "5px",
                      right: "5px",
                    }}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p>
                    Your data has been successfully registered. Our
                    verification team will verify your details and further
                    information will be given to{" "}
                    <span style={{ color: "#9F1718" }}>**********</span>.
                    Please save this for your records.
                  </p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default SignUpPageSection;
