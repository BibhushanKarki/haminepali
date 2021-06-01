import React from "react";

const AppButton = ({ buttontext }) => {
  return (
    <button type="button" className="btn btn-custom fw-bold btn-sm">
      {buttontext}
    </button>
  );
};

export default AppButton;
