import React from 'react'
import {FundraiserCardData as data} from './FundraiserCardData'
import {Link} from 'react-router-dom'
import Zoom from "react-reveal/Zoom";

const TopFundraiserCard = ({title}) => {
  
  const cardLineStyle={
    height:'5px',
    borderRadius:'8px',
    color:'#9F1718'
  }

  return (
    <div className="cardContainer my-4">
      <div className="row">
      <h2 className="fw-bold my-3" style={{color:'#9F1718',marginLeft:'2rem'}}>{title}</h2>
        {data.map((data,key)=>{
          return (
            <div
              className="col-lg-3 col-md-6 col-sm-6 mb-3 d-flex justify-content-center"
              key={key}
            >
              <Link to="/fundraiserdescription" style={{ color: "black" }}>
                <Zoom>
                  <div className="card">
                    <img
                      src={data.cardimg}
                      className="card-img-top"
                      alt="cardimg"
                    />
                    <div className="card-body">
                      <h6
                        className="card-title fw-bold"
                        style={{ color: "#9F1718" }}
                      >
                        {data.location}
                      </h6>
                      <h6 className="fw-bold">{data.title}</h6>
                      <p className="card-text">{data.desc}</p>
                      <p>{data.lastDonated}</p>
                      <hr style={cardLineStyle} />
                      <p className="d-flex justify-content-between mb-0">
                        <span className="fw-bold">{data.gainedDonation}</span>
                        <span>{data.donationLevel}</span>
                      </p>
                    </div>
                  </div>
                </Zoom>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
    
  )
}

export default TopFundraiserCard
