import React from "react";
import { PrivacyPageData as data } from "./PrivacyPolicyData";
import { QuestionAnswerData as items } from "./QuestionAnswerData";

const PrivacyPolicySection = () => {
  const privacyH1 = {
    borderBottom: "3px solid #9F1718",
    textAlign: "center",
    fontSize: "30px",
    fontWeight: "bold",
    color: "#9F1718",
  };

  const sectionHeading = {
    fontSize: "25px",
    color: "#9F1718",
  };

  const sectionHeadingh1 = {
    borderBottom: "1px solid rgb(208 96 97)",
    fontSize: "25px",
    color: "#9F1718",
    fontWeight: "600",
  };

  return (
    <>
      <section className="privacy-section">
        <div className="container">
          <div className="row">
            <div className="privacy-heading col-md-12 mt-5">
              <div className="col-md-2">
                <h1 className="pb-2" style={privacyH1}>
                  Privacy Policy
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 style={sectionHeading}>
                We are commited to protecting and respecting your privacy.
              </h1>
              {data.map((data, key) => {
                return (
                  <p className="mt-3" key={key}>
                    {data.paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {items.map((items) => {
                return (
                  <div key={items.id}>
                    <div className="col-md-6">
                      <h1 className="mt-3 pb-2" style={sectionHeadingh1}>
                        {items.question}
                      </h1>
                    </div>
                    <p className="mt-3 mb-4">{items.answer}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicySection;
