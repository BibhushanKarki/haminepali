import React from 'react'
import FundraiserDescriptionCard from './FundraiserDescriptionCard'
import Comments from './Comments'
import {FundraiserDescriptionData as data} from './FundraiserDescriptionData'
import AppButton from '../UI/Buttons/AppButton'
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade';

const FundraiserDescription = () => {
  return (
    <div className="row mx-2 my-4">
      <div className="row my-4">
        <h1>{data.title}</h1>
        <div className="col-md-8">
        <Fade left><img style={{width:'950px'}} src={data.img} alt="img" /></Fade>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <FundraiserDescriptionCard/>
        </div>
      </div>
      <hr />
      <p className="">{data.createdDate}&nbsp; | &nbsp;{data.tags}</p>
      <hr />
      <div className="row">
        <div className="col-md-12" style={{border:'2px solid lightgray',padding:'1.5rem'}}>
          <p>{data.para} {data.para}</p>
          <p>{data.para}</p>
          <p>{data.para}</p>
        </div>
      </div>
      <div className="row mb-4 my-4">
        <div className="col-md-4 d-flex justify-content-center">
          <AppButton buttontext="Contact Directly"/>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <AppButton buttontext="Donate"/>
        </div>
        <div className="col-md-4 d-flex justify-content-center">
          <Link to="#" className="btn button-secondary">Share</Link>
        </div>
      </div>
      <div className="row">
        <Comments/>
      </div>
      <div className="row">
        <div className="col-md-4">
          <Link to="#" className="btn btn-plain">See all</Link>
        </div>
      </div>
    </div>
  )
}

export default FundraiserDescription;
