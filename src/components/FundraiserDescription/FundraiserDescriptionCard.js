import React from 'react'
import {Link} from 'react-router-dom'
import {FundraiserDescriptionCardData as data} from './FundraiserDescriptionData'

const FundraiserDescriptionCard = () => {
  return (
    <div className="card text-center" style={{width: '18rem'}}>
      <div className="card-body">
        <h6 className="card-title">Rs{data.fundRaised} raised of Rs{data.fundRequired}</h6>
        <hr />
        <div className="d-flex flex-row justify-content-around">
          <div className="d-flex flex-column"><h6>{data.totalDoners}</h6><p>Doners</p></div>
          <div className="d-flex flex-column"><h6>{data.totalShares}</h6><p>Shares</p></div>
          <div className="d-flex flex-column"><h6>{data.totalFollowers}</h6><p>Followers</p></div>
        </div>
        <div className="d-flex flex-column align-items-center">
          <button className="btn btn-secondary button-secondary my-2 w-50 fw-bold">Share</button>
          <button className="btn btn-primary my-2 w-50 fw-bold">Donate</button>
        </div>
        <p>{data.recentDonation} people just donated</p>
        <hr />
        <div className="d-flex align-items-center">
          <img style={{height:'28px',width:'28px'}} src="https://image.flaticon.com/icons/png/512/860/860784.png" alt="img" />
          <div className="d-flex flex-column">
            <p>{data.recentDoner}</p>
            <div className="d-flex">
              <p>{data.recentDonerAmount}</p>
              <p>{data.donationStatus}</p>
            </div>
          </div>
        </div>
        <hr />
        <Link to="#" className="btn btn-plain">See all</Link>
      </div>
    </div>
  )
}

export default FundraiserDescriptionCard
