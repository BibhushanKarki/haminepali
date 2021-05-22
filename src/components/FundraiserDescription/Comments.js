import React from 'react'
import {FundraiserDescriptionComments as data} from './FundraiserDescriptionData'
const Comments = () => {
  return (
    <div>
      <h2>Comments</h2>
      <hr />
      {data.map((data,key)=>{
        return(
          <div className="d-flex flex-column align-items-center" key={key}>
            <img src="" alt="img" />
            <span><h4>{data.commenter}</h4>donated Rs{data.donatedAmount}</span>
            <p className="my-2">{data.msg}</p>
            <p className="my-2">{data.commentTime}</p>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default Comments
