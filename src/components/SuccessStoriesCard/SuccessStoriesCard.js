import React from 'react'
import AppButton from '../UI/Buttons/AppButton'
import {SuccessStoriesData as data} from './SuccessStoriesData'
import Zoom from "react-reveal/Zoom";

const SuccessStories = () => {
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
    <div className="behindTheNameCardContainer my-4">
      <div className="row">
      <h2 className="fw-bold my-3 text-center" style={{color:'#9F1718',marginLeft:'2rem'}}>Success Stories</h2>
      {data.map((data,key)=>{
        return (
          <div
            className="col-md-3 mb-3 d-flex justify-content-center"
            key={key}
          >
            <Zoom>
              <div className="card" style={cardStyle}>
                <img src={data.img} className="my-3" style={ppStyle} alt="pp" />
                <div className="card-body text-center">
                  <h6
                    className="card-title fw-bold text-left"
                    style={{ color: "#9F1718" }}
                  >
                    {data.storyTitle}
                  </h6>
                  <p className="card-text text-left">{data.storyDetail}</p>
                  <AppButton buttontext="Read More" />
                </div>
              </div>
            </Zoom>
          </div>
        );
      })}
      </div>
    </div>
  )
}

export default SuccessStories
