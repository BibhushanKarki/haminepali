import React from 'react'
import {TransparencyCardData as data} from './TransparencyCardData'

const TransparencyCard = () => {
  const cardStyle={
    width: '18rem'
  }
  const ppStyle={
    width:'100%',
    objectFit:'cover',
  }
  const inputStyle={
      height: '55px',
     padding: '1rem',
     fontSize:'20px',
     border:'2px solid gray'
  }
  return (
    <div className="TransparencyCardContainer my-4">
      <div className="row d-flex justify-content-center my-4">
        <div className="col-md-6">
            <div class="input-group">
              <div class="form-outline" style={{width:'100%'}}>
                <input type="search" id="form1" class="form-control fw-bold" placeholder="Search Token" style={inputStyle}/>
              </div>
            </div>
        </div>
      </div>
        
      <div className="row">
      <h2 className="fw-bold my-3 text-left" style={{color:'#9F1718',marginLeft:'2rem'}}>Ongoing Events</h2>
      {data.map((data,key)=>{
        return(
          <div className="col-md-3 mb-3 d-flex justify-content-center" key={key}>
              <div className="card" style={cardStyle}>
                <a href="/transparencydetail" style={{color:'black'}}><img src={data.img} className="mb-3" style={ppStyle} alt="img"/>
                <div className="card-body text-left">
                <h5 className="card-title fw-bold">{data.eventTitle}</h5>
                  <p className="card-text">
                    {data.eventDetail}
                  </p>
                </div>
                </a>
              </div>
          </div>
        )
      })}
      </div>
      <div className="row">
      <h2 className="fw-bold my-3 text-left" style={{color:'#9F1718',marginLeft:'2rem'}}>Ongoing Cause</h2>
      {data.map((data,key)=>{
        return(
          <div className="col-md-3 mb-3 d-flex justify-content-center" key={key}>
              <div className="card" style={cardStyle}>
              <a href="/transparencydetail" style={{color:'black'}}><img src={data.img} className="mb-3" style={ppStyle} alt="img"/>
                <div className="card-body text-left">
                <h5 className="card-title fw-bold">{data.eventTitle}</h5>
                  <p className="card-text">
                    {data.eventDetail}
                  </p>
                </div>
                </a>
              </div>
          </div>
        )
      })}
      </div>
      <div className="row">
      <h2 className="fw-bold my-3 text-left" style={{color:'#9F1718',marginLeft:'2rem'}}>Accomplished Events</h2>
      {data.map((data,key)=>{
        return(
          <div className="col-md-3 mb-3 d-flex justify-content-center" key={key}>
              <div className="card" style={cardStyle}>
              <a href="/transparencydetail" style={{color:'black'}}><img src={data.img} className="mb-3" style={ppStyle} alt="img"/>
                <div className="card-body text-left">
                <h5 className="card-title fw-bold">{data.eventTitle}</h5>
                  <p className="card-text">
                    {data.eventDetail}
                  </p>
                </div>
                </a>
              </div>
          </div>
        )
      })}
      </div>
      <div className="row">
      <h2 className="fw-bold my-3 text-left" style={{color:'#9F1718',marginLeft:'2rem'}}>Accomplished Cause</h2>
      {data.map((data,key)=>{
        return(
          <div className="col-md-3 mb-3 d-flex justify-content-center" key={key}>
              <div className="card" style={cardStyle}>
              <a href="/transparencydetail" style={{color:'black'}}><img src={data.img} className="mb-3" style={ppStyle} alt="img"/>
                <div className="card-body text-left">
                <h5 className="card-title fw-bold">{data.eventTitle}</h5>
                  <p className="card-text">
                    {data.eventDetail}
                  </p>
                </div>
                </a>
              </div>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default TransparencyCard
