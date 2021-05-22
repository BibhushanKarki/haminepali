import React from 'react'
import FundraiserDescriptionCard from './FundraiserDescriptionCard'
import Comments from './Comments'
import {FundraiserDescriptionData as data} from './FundraiserDescriptionData'
import AppButton from '../UI/Buttons/AppButton'
import {Link} from 'react-router-dom'

const FundraiserDescription = () => {
  return (
    <div className="row">
      <div className="row">
        <h1>{data.title}</h1>
        <div className="col-md-7">
          <img src={data.img} alt="img" />
        </div>
        <div className="col-md-5">
          <FundraiserDescriptionCard/>
        </div>
      </div>
      <hr />
      <p>{data.createdDate}&nbsp; | &nbsp;{data.tags}</p>
      <hr />
      <div className="row">
        <div className="col-md-12" style={{border:'2px solid gray',padding:'1.5rem'}}>
          <p>{data.para}</p>
          <p>{data.para}</p>
          <p>{data.para}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 d-flex justify-content-center">
          <AppButton title="Contact Directly"/>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <AppButton title="Donate"/>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <Link to="#" className="btn button-secondary">Share</Link>
        </div>
      </div>
      <div className="row">
        <Comments/>
      </div>
    </div>
  )
}

export default FundraiserDescription
