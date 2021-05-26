import React from 'react'
import {GetStarted  as data} from './GetStartedData'
import GetStartedBtn from './GetStartedBtn'
import Fade from 'react-reveal/Fade';
const GetStartedHealth = () => {
  const imgStyle ={
    width:'500px',
    height:'570px',
    objectFit:'cover'
  }
  return (
    <div className="row d-flex align-items-center m-4">
      <Fade left><div className="col-md-6">
        <h1>{data.health.title}</h1>
        <h4 className="my-4" style={{color:'gray'}}>{data.health.punchline}</h4>
        <GetStartedBtn buttontitle="Get Started"/>
      </div></Fade>
      <Fade right><div className="col-md-6 text-center">
        <img src={data.health.imgCovid} alt="covidimg" style={imgStyle} />
      </div></Fade>
    </div>
  )
}

export default GetStartedHealth
