import React from 'react'
import {OurCommunityData as data} from './OurCommunityData'
import AppButton from '../UI/Buttons/AppButton'
const OurCommunityCard = () => {
    const profilePicStyle={
        height:'40px',
        width:'40px',
        ohjectFit:'cover',
        borderRadius: '50%'
    }
    return (
      <div className="row">

      <div className="col-md-12 d-flex flex-row align-items-center justify-content-between my-3" style={{backgroundColor:'white'}}>
        <div className="col-md-3"></div>
        <div className="col-md-4">
              <div className="search"> <i className="fa fa-search"></i> <input type="text" className="form-control" placeholder="Have a question? Ask Now"/> <button className="btn btn-primary">Search</button> 
              </div>
          </div>
          <div className="col-md-3 d-flex justify-content-end mx-3">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#askQuestion">Ask Question</button>
          </div>
           {/* Modal  */}
          <div className="modal fade" id="askQuestion" tabIndex="-1" aria-labelledby="askQuestionLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header d-flex justify-content-center text-center" style={{position: 'relative',borderBottom:'0'}}>
                  <img src="/img/ask.svg" alt="img" style={{width:'150px',height:'150px',objectFit:'contain'}}/>
                  <button className="btn-close m-0" data-bs-dismiss="modal" aria-label="Close" style={{position:'absolute',top:'10px',right:'10px'}}></button>
                </div>
                <div className="modal-body">
                  <div className="form-floating">
                    <textarea name="description" defaultValue="" className="form-control" placeholder="Your Question" id="floatingTextarea2" style={{height: "100px"}}></textarea>
                    <label htmlFor="floatingTextarea2">Ask Your Question</label>
                  </div>
                </div>
                <div className="modal-footer">
                  <AppButton buttontext="Add Question"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div
        className="col-md-12 d-flex flex-column  mb-4 align-items-center"
        style={{ backgroundColor: "#ffeaea73" }}
      >
            <div className="col-md-5">
              <div className="card main-card my-4">
                <div className="card m-3 p-3">
                  <div className="d-flex align-items-center">
                    <img style={profilePicStyle} src={data.userImg} alt="pp" />
                    <div className="d-flex flex-column mx-2">
                      <p className="m-0 fw-bold">{data.user}</p>
                      <small>{data.postDate}</small>
                    </div>
                  </div>
                  <h6 className="fw-bold mt-3">{data.postTitle}</h6>
                  <div className="d-flex align-items-center">
                    <img
                      className=""
                      style={{
                        width: "18px",
                        height: "18px",
                        objectFit: "contain",
                      }}
                      src="https://image.flaticon.com/icons/png/512/134/134783.png"
                      alt="img"
                    />
                    <p className="mb-0 ml-2">{data.totalComments}</p>
                  </div>
                </div>
                <div className="card comment-card m-3 p-3">
                  <div className="f-flex flex-row">
                    <img
                      style={profilePicStyle}
                      src="https://i.stack.imgur.com/l60Hf.png"
                      alt="img"
                    />
                    <input
                      type="text"
                      className="form-control comment-form mx-2"
                      placeholder="Add Comment"
                      style={{ borderRadius: "22px" }}
                    />
                  </div>
                  <div className="d-flex my-4">
                    <img
                      style={profilePicStyle}
                      src={data.commenterPic}
                      alt="img"
                    />
                    <div
                      className="card px-4 mx-2"
                      style={{ borderRadius: "22px", width: "65%" }}
                    >
                      <h6 className="card-title m-0 fw-bold">
                        {data.commenterName}
                      </h6>
                      <p className="m-0">{data.comment}</p>
                    </div>
                  </div>
                  <div className="d-flex mb-4">
                    <img
                      style={profilePicStyle}
                      src={data.commenterPic}
                      alt="img"
                    />
                    <div
                      className="card px-4 mx-2"
                      style={{ borderRadius: "22px", width: "65%" }}
                    >
                      <h6 className="card-title m-0 fw-bold">
                        {data.commenterName}
                      </h6>
                      <p className="m-0">{data.comment}</p>
                    </div>
                  </div>
                  <h6 className="ml-3 text-white fw-bold">
                    View More Comments
                  </h6>
                </div>
              </div>
            </div>
      </div>
      </div>
    );
}

export default OurCommunityCard
