import React from 'react'
import {TransparencyDetailData as data }from './TransparencyDetailData'

const TransparencyDetailSection = () => {
  const fundcardStyle ={
    borderRight:'3px solid #ececec',
    borderBottom:'3px solid #ececec',
  }
  return (
    <div className="row mx-2">
      <div className="col-md-12">
        <h2>{data.title}</h2>
        <img src={data.img} alt="img" />
      </div>
      <div className="col-md-10">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active fw-bold" id="pills-fundreceived-tab" data-bs-toggle="pill" data-bs-target="#pills-fundreceived" type="button" role="tab" aria-controls="pills-fundreceived" aria-selected="true">Fund Received</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link fw-bold" id="pills-fundspent-tab" data-bs-toggle="pill" data-bs-target="#pills-fundspent" type="button" role="tab" aria-controls="pills-fundspent" aria-selected="false">Fund Spent</button>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="pills-fundreceived" role="tabpanel" aria-labelledby="pills-fundreceived-tab">
              <h6 className="fw-bold" style={{color:'grey'}}>Latest History</h6>
              <br/>
              {data.map((data,key)=>{
                return(
                  <div style={fundcardStyle} key={key} className="d-flex justify-content-between px-2 mb-3">
                    <div className="d-flex flex-column">
                      <h6><b>{data.fundReceived.fundTitle}</b></h6>
                      <p>{data.fundReceived.date} {data.fundReceived.time}</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <h6 className="m-0"><b>{data.fundReceived.fundAmount}</b></h6>
                      <button className="btn btn-primary mx-3">Bill</button>
                      <img src="" alt="download" />
                    </div>
                  </div>
                )
              })}
              <h6 className="fw-bold text-end my-2" style={{color:'grey'}}>Show All</h6>
            </div>
            <div className="tab-pane fade" id="pills-fundspent" role="tabpanel" aria-labelledby="pills-fundspent-tab">
            <h6 className="fw-bold" style={{color:'grey'}}>Latest History</h6>
              <br/>
              {data.map((data,key)=>{
                return(
                  <div style={fundcardStyle} key={key} className="d-flex justify-content-between px-2 mb-3">
                    <div className="d-flex flex-column">
                      <h6><b>{data.fundSpent.fundSpender}</b></h6>
                      <p>{data.fundSpent.date} {data.fundSpent.time}</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <h6 className="m-0"><b>{data.fundSpent.fundAmount}</b></h6>
                    </div>
                  </div>
                )
              })}
              <h6 className="fw-bold text-end my-2" style={{color:'grey'}}>Show All</h6>
            </div>
          </div>

      </div>
    </div>
  )
}

export default TransparencyDetailSection
