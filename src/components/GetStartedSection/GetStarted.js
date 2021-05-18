import React from 'react'
import {GetStartedCovid  as covid} from './GetStartedData'

const GetStarted = () => {
  return (
    <div>
      <div className="col-md-6">
        <h1>{covid.title}</h1>
        <p>{covid.punchline}</p>
      </div>
      <div className="col-md-6">
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default GetStarted
