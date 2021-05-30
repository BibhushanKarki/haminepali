import React from 'react'

const HowItWorks = () => {
  const titleStyle = {
    marginTop: "4rem",
    backgroundColor: "#9F1718",
    height: "35vh",
    color: "#fff",
  }
  const hrline={
    borderBottom:"2px solid white",
  }
  const howImgStyle={
    width:'95vw',
    height:'250px',
    objectFit:'cover',
    objectPosition:'center center',
  }

  return (
    <section className="how">
        <div className="row" style={titleStyle}>
          <div className="col-md-12 d-flex justify-content-center flex-column align-items-center">
            <div className="col-md-6">
              <h1 className="pb-2 text-center" style={hrline} >
                How HamiNepal Works?
              </h1>
            </div>
          </div>
        </div>
        <div className="col-md-12 d-flex justify-content-center mt-n4">
            <div className="card col-md-8">
                <div className="card-body p-4">
                  <p className="card-text" style={{color:'#9F1718'}}>Our main objective is to help anyone in need without any hesitations and expectation of payback. Hami Nepal directly connects donors and recipients to maintain transparency. The organisation doesn’t spend any of the received donations on administration cost as we believe that 100% of the donation should reach the recipient in order to establish effective helping. All of our volunteers, mobilised for the authentication of the problem, logistics and delivery, cover their own expenses in order to save the administrative expense. We are implementing skill-based volunteering to facilitate healthcare services and mitigate the risk of this devastating COVID-19 cases surge, at the time being.</p>
                </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <img src="https://bit.ly/2Rs9Yil" alt="" style={howImgStyle} />
          </div>
      </section>
  )
}

export default HowItWorks
