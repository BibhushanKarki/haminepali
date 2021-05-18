import React from 'react'
import {GetStarted  as data} from './GetStartedData'
import GetStartedBtn from './GetStartedBtn'

const GetStartedCovid = () => {
  const imgStyle ={
    width:'500px',
    height:'570px',
    objectFit:'cover'
  }
  return (
    <div className="row d-flex align-items-center m-4">
      <div className="col-md-6">
        <h1>{data.covid.title}</h1>
        <h4 className="my-4" style={{color:'gray'}}>{data.covid.punchline}</h4>
        <GetStartedBtn buttontitle="Get Started"/>
      </div>
      <div className="col-md-6 text-center">
        <img src={data.covid.imgCovid} alt="covidimg" style={imgStyle} />
      </div>
    </div>
  )
}

export default GetStartedCovid
