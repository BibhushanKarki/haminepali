import React from 'react'
import {OurCommunityData as data} from './OurCommunityData'

const OurCommunityCard = () => {
    const profilePicStyle={
        height:'40px',
        width:'40px',
        ohjectFit:'cover',
        borderRadius: '50%'
    }
    return (
      <div
        className="row d-flex flex-column  my-4 align-items-center"
        style={{ backgroundColor: "#ffeaea73" }}
      >
        {data.map((data, key) => {
          return (
            <div className="col-md-5" key={key}>
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
          );
        })}
      </div>
    );
}

export default OurCommunityCard
