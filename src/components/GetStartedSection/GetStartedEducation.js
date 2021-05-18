import React from 'react'
import {GetStarted  as data} from './GetStartedData'
import GetStartedBtn from './GetStartedBtn'

const GetStartedEducation = () => {
  const imgStyle ={
    width:'500px',
    height:'570px',
    objectFit:'cover'
  }
  return (
    <div className="row d-flex align-items-center m-4">
      <div className="col-md-6">
        <h1>{data.education.title}</h1>
        <h4 className="my-4" style={{color:'gray'}}>{data.education.punchline}</h4>
        <GetStartedBtn buttontitle="Get Started"/>
      </div>
      <div className="col-md-6 text-center">
        <img src={data.education.imgCovid} alt="covidimg" style={imgStyle} />
      </div>
    </div>
  )
}

export default GetStartedEducation
