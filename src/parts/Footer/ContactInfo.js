import React from "react";

const ContactInfo = () => {
  return (
    <div className="contactinfo mt-5">
      <h4 className="fw-bold" style={{ fontSize: 18 }}>
        CONTACT INFO
      </h4>
      <ul className="nav-links list-unstyled" style={{ color: "white" }}>
        <li className="my-3">
          <strong>Email:</strong>info@haminepal.org
        </li>
        <li className="my-3">
          <strong>Phone No:</strong>+977-9808543667, +977-9845628191
        </li>
        <li className="my-3">
          <strong>Location:</strong>Ranibari-27, Samakhusi Kathmandu
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
