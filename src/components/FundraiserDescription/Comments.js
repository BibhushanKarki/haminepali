import React from 'react'
import {FundraiserDescriptionComments as data} from './FundraiserDescriptionData'
const Comments = () => {
  return (
    <div>
      <h2>Comments</h2>
      <hr />
      {data.map((data,key)=>{
        return(
          <div className="d-flex flex-column" key={key}>
            <div className="d-flex">
             <img style={{height:'28px',width:'28px'}} src="https://image.flaticon.com/icons/png/512/860/860784.png" alt="img" />
            <span className="d-flex"><h5 className="fw-bold mx-2">{data.commenter}</h5>donated Rs{data.donatedAmount}</span> 
            </div>
            <div style={{marginLeft:'2.5rem'}}>
              <p className="my-2">{data.msg}</p>
              <p className="mt-4 mb-0" style={{color:'gray'}}>{data.commentTime}</p>
            </div>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default Comments
