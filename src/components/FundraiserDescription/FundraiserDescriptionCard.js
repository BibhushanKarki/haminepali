import React from 'react'
import {Link} from 'react-router-dom'
import {FundraiserDescriptionCardData as data} from './FundraiserDescriptionData'
import Fade from 'react-reveal/Fade';

const FundraiserDescriptionCard = () => {
  return (
    <Fade right>
      <div className="card text-center" style={{width: '90%'}}>
      <div className="card-body">
        <h6 className="card-title hr mb-4"><b>Rs {data.fundRaised} raised</b> of Rs{data.fundRequired}</h6>
        <div className="d-flex flex-row justify-content-around">
          <div className="d-flex flex-column"><h6 className="fw-bold">{data.totalDoners}</h6><p className="mt-0">Doners</p></div>
          <div className="d-flex flex-column"><h6 className="fw-bold">{data.totalShares}</h6><p className="mt-0">Shares</p></div>
          <div className="d-flex flex-column"><h6 className="fw-bold">{data.totalFollowers}</h6><p className="mt-0">Followers</p></div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <button className="btn btn-secondary button-secondary my-2 w-50 fw-bold" style={{fontSize:'22px'}}>Share</button>
          <button className="btn btn-primary my-2 w-50 fw-bold" style={{fontSize:'22px'}}>Donate</button>
        </div>
        <p className="mt-4 hrblack">{data.recentDonation} people just donated</p>
        <div className="d-flex mx-4 mb-3">
          <img style={{height:'28px',width:'28px'}} src="https://image.flaticon.com/icons/png/512/860/860784.png" alt="img" />
          <div className="d-flex flex-column w-100 hrblack mx-3">
            <p className="fw-bold text-start mx-2">{data.recentDoner}</p>
            <div className="d-flex justify-content-between mx-2">
              <p>Rs {data.recentDonerAmount}</p>
              <p>{data.donationStatus}</p>
            </div>
          </div>
        </div>
        <div className="d-flex mx-4 mb-3">
          <img style={{height:'28px',width:'28px'}} src="https://image.flaticon.com/icons/png/512/860/860784.png" alt="img" />
          <div className="d-flex flex-column w-100 hrblack mx-3">
            <p className="fw-bold text-start mx-2">{data.recentDoner}</p>
            <div className="d-flex justify-content-between mx-2">
              <p>Rs {data.recentDonerAmount}</p>
              <p>{data.donationStatus}</p>
            </div>
          </div>
        </div>
        <Link to="#" className="btn btn-plain">See all</Link>
      </div>
      </div>
    </Fade>
  )
}

export default FundraiserDescriptionCard
