import React from 'react'

const HowItWorks = () => {
  const titleStyle = {
    marginTop: "4rem",
    backgroundColor: "#9F1718",
    height: "25vh",
    color: "#fff",
  };
  const hrline={
    borderBottom:"2px solid white"
  }

  return (
    <section className="about-banner">
        <div className="row" style={titleStyle}>
          <div className="about-heading col-md-12 d-flex justify-content-center flex-column align-items-center">
            <div className="col-md-6">
              <h1 className="pb-2 text-center" style={hrline} >
                How It Works?
              </h1>
            </div>
          </div>
          <div className="col-md-8">
            <div class="card">
                <div class="card-body">
                  <p class="card-text">Hami Nepal has been connecting hundreds of volunteers to local communities all overthe world since its first initiation in 2015. The emergency response program and the post-earthquake rehabilitation programs were the initial programs successfully carried out by Hami Nepal.This is a Group Volunteer Organization initiated by the youth with a vision to create sustainable in the local communities through community development. The “I to We” movement initiated by Hami Nepal is based on uniting to aid the people in need.</p>
                </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default HowItWorks
