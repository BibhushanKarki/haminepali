import React from 'react'
import {FundraiserCardData as data} from './FundraiserCardData'

const TopFundraiserCard = () => {
  const cardStyle={
    width: '18rem'
  }
  const cardLineStyle={
    height:'5px',
    borderRadius:'8px',
    color:'#9F1718'
  }
  return (
    <div className="cardContainer">
      <div className="row">
        {data.map((data,key)=>{
          return(
            <div className="col-md-3 d-flex justify-content-center" key={key}>
            <div class="card" style={cardStyle}>
              <img src={data.cardimg} class="card-img-top" alt="cardimg"/>
              <div class="card-body">
                <h5 class="card-title" style={{color:'#9F1718'}}>{data.location}</h5>
                <h5>{data.title}</h5>
                <p class="card-text">{data.desc}</p>
                <p>{data.lastDonated}</p>
                <hr style={cardLineStyle}/>
                <p className="text-center">{data.totalDonation}</p>
              </div>
          </div>
        </div>
          )
        })}
      </div>
    </div>
    
  )
}

export default TopFundraiserCard
