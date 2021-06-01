import React from "react";

const CopyRight = () => {
  const footerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "400",
  };
  const developedBy = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const footerLine = {
    height: "3px",
    color: "#fff",
  };
  return (
    <div className="pb-2">
      <hr style={footerLine} />
      <footer style={footerStyle}>
        <small>Copyright © 2021 HamiNepal ! All Rights Reserved</small>
        <div style={developedBy}>
          <small>
            Developed By{" "}
            <a href="https://hashtechnologies.net/" style={{ color: "white" }}>
              <b>Hash Technologies</b>
            </a>
          </small>
        </div>
      </footer>
    </div>
  );
};

export default CopyRight;
