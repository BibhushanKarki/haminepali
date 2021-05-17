import React from 'react'
import AppButton from '../UI/Buttons/AppButton'
import {VolunteerProfileData as data} from './VolunteerProfileData'

const VolunteerProfileCard = () => {
  const cardStyle={
    width: '18rem'
  }
  const ppStyle={
    borderRadius: '50%',
    height:'100px',
    width:'100px',
    objectFit:'cover',
    alignSelf:'center'
  }
  return (
    <div className="profileCardContainer my-4">
      <div className="row">
      <h2 className="fw-bold my-3" style={{color:'#9F1718',marginLeft:'2rem'}}>Our Volunteer's Profile</h2>
      {data.map((data,key)=>{
        return(
          <div className="col-md-3 mb-3 d-flex justify-content-center" key={key}>
              <div className="card" style={cardStyle}>
                <img src={data.profilePic} className="my-3" style={ppStyle} alt="pp"/>
                <div className="card-body text-center">
                  <h6 className="card-title fw-bold">{data.profileName}</h6>
                  <p className="card-text">
                    {data.userMsg}
                  </p>
                  <p className="text-center">{data.num}</p>
                  <AppButton buttontext="Donate to motivate"/>
                </div>
              </div>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default VolunteerProfileCard
