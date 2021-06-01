import React from "react";
import FacebookIcon from "../../assets/images/facebook.png";
import TwitterIcon from "../../assets/images/twitter.png";
import LinkedinIcon from "../../assets/images/linkedin.png";
import InstagramIcon from "../../assets/images/instagram.png";

const ConnectWithUs = () => {
  const navStyle = {
    textDecoration: "none",
    color: "white",
    fontSize: "15px",
  };
  return (
    <div className="connectwithus mt-5">
      <h5 className="fw-bold" style={{ fontSize: 16 }}>
        CONNECT WITH US
      </h5>
      <ul className="nav-links list-unstyled">
        <li className="my-4">
          <img
            width="30px"
            height="30px"
            alt="socialicons"
            src={FacebookIcon}
          />
          &nbsp;{" "}
          <a
            href="https://www.facebook.com/groups/769317927136629 "
            target="_blank"
            rel="noopener noreferrer"
            style={navStyle}
          >
            {" "}
            Facebook
          </a>
        </li>
        <li className="my-4">
          <img width="30px" height="30px" alt="socialicons" src={TwitterIcon} />
          &nbsp;{" "}
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={navStyle}
          >
            Twitter
          </a>
        </li>
        <li className="my-4">
          <img
            width="30px"
            height="30px"
            alt="socialicons"
            src={LinkedinIcon}
          />
          &nbsp;{" "}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={navStyle}
          >
            {" "}
            LinkedIn
          </a>
        </li>
        <li className="my-4">
          <img
            width="30px"
            height="30px"
            alt="socialicons"
            src={InstagramIcon}
          />
          &nbsp;{" "}
          <a
            href="https://www.instagram.com/haminepal_/?hl=en&fbclid=IwAR2-zSw6I-Wk9QNAdUl1W_z5_YQ2EfPY6v8nBzETWxyJTnpPadQlpHq5Oxg"
            target="_blank"
            rel="noopener noreferrer"
            style={navStyle}
          >
            {" "}
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ConnectWithUs;
