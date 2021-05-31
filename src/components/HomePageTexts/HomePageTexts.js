import React from 'react';
import { HomePageTextData as text } from './HomePageTextData';

const HomePageTexts = () => {
	return (
    <div className="row my-5">
      <div className="col-md-12 intro">
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
