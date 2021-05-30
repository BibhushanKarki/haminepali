import React,{useState, useRef} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';
import { login } from "../../store/Actions/AuthActions";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

// Validation

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const mail = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const SignInSection = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();
  
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(login(email, password))
        .then(() => {
          props.history.push("/profile");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
    };

    if (isLoggedIn) {
      return <Redirect to="/volunteer-profile" />;
    }

  return (
    <>
      <div className="container-sm  mt-5 mb-5">
        <div className="row">
          <Form className="d-flex justify-content-center" onSubmit={handleLogin} ref={form}>
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
                    <Input
                      type="text"
                      className="form-control"
                      placeholder="Email-Address"
                      value={email}
                      onChange={onChangeEmail}
                      validations={[required,mail]}
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
                      validations={[required]}
                    />
                  </div>
                </div>
                <div className="row mt-3 mb-3">
                  <div className="col-md-12">
                    <button className=" btn btn-primary" disabled={loading}>
                    {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
                      Login
                    </button>
                  </div>
                </div>

                {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}
              <CheckButton
                  style={{ display: "none" }}
                  ref={checkBtn}
                />
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
          </Form>
        </div>
      </div>
    </>
  );
};

export default SignInSection;
