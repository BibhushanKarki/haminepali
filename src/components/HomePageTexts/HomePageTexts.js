import React from "react";
import { HomePageTextData as text } from "./HomePageTextData";

const HomePageTexts = () => {
<<<<<<< HEAD
  return (
    <div className="row my-5 px-5">
      <div className="col-md-12">
=======
	return (
    <div className="row my-5">
      <div className="col-md-12 intro">
>>>>>>> 6ca1983fc43f0487c6b7026027e6201530e3532a
        {text.map((text, key) => {
          return (
            <p className="my-4 mx-5" key={key}>
              {text.para}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default HomePageTexts;
