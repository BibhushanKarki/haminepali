import React from 'react'
import {GetStarted  as data} from './GetStartedData'
import GetStartedBtn from './GetStartedBtn'

const GetStartedClothing = () => {
  const imgStyle ={
    width:'500px',
    height:'570px',
    objectFit:'cover'
  }
  return (
    <div className="row d-flex align-items-center m-4">
      <div className="col-md-6">
        <h1>{data.clothing.title}</h1>
        <h4 className="my-4" style={{color:'gray'}}>{data.clothing.punchline}</h4>
        <GetStartedBtn buttontitle="Get Started"/>
      </div>
      <div className="col-md-6 text-center">
        <img src={data.clothing.imgCovid} alt="covidimg" style={imgStyle} />
      </div>
    </div>
  )
}

export default GetStartedClothing
