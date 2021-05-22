import React from 'react'
import {Link} from 'react-router-dom'
import {FundraiserDescriptionCardData as data} from './FundraiserDescriptionData'

const FundraiserDescriptionCard = () => {
  return (
    <div class="card text-center" style={{width: '18rem'}}>
      <div class="card-body">
        <h6 class="card-title">Special title treatment</h6>
        <hr />
        <div>
          <div className="d-flex flex-column"><h6>{data.totalDoners}</h6><p>Doners</p></div>
          <div className="d-flex flex-column"><h6>{data.totalShares}</h6><p>Shares</p></div>
          <div className="d-flex flex-column"><h6>{data.totalFollowers}</h6><p>Followers</p></div>
        </div>
        <Link to="#" className="btn btn-secondary button-secondary my-2 ">Share</Link>
        <Link to="#" className="btn btn-primary button-secondary my-2 ">Donate</Link>
        <p>{data.recentDonation} people just donated</p>
        <hr />
        <div className="d-flex align-items-center">
          <img src="" alt="img" />
          <div className="d-flex flex-column">
            <p>{data.recentDoner}</p>
            <div className="d-flex">
              <p>{data.recentDonerAmount}</p>
              <p>{data.donationStatus}</p>
            </div>
          </div>
        </div>
        <hr />
        <Link to="#" className="btn">See all</Link>
      </div>
    </div>
  )
}

export default FundraiserDescriptionCard
