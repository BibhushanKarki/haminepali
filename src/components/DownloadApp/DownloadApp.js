import React from 'react'
import appstore from '../../assets/images/appstore.png'
import playstore from '../../assets/images/playstore.png'
const imglink='https://images.unsplash.com/photo-1601972602237-8c79241e468b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlJTIwYXBwfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60'


const DownloadApp = () => {
  const imgContainer={
    width:'550px',
    height:'250px',
  }
  const storeStyle={
    width:'160px',
    heigh:'50px',
    marginRight:'1rem'
  }
  return (
    <div className="row d-flex justify-content-center py-4">
      <div className="col-md-8 d-flex align-items-center">
        <div style={imgContainer}>
          <img src={imglink} alt="appdownload" height="100%" width="100%"/>
        </div>
        <div className="downloadDesc mx-4">
          <h4 className="fw-bold text-uppercase">Available Now</h4>
          <h5 className="fw-bold" style={{color:'#9F1718'}}>HamiNepali App</h5>
          <p className="fw-bold">Start and manage fundraisers, engage with
            supporters, and discover important causes — all 
            on the go</p>
          <img src={appstore} alt="appstore" style={storeStyle}/>
          <img src={playstore} alt="playstore" style={storeStyle}/>
        </div>
      </div>
    </div>
  )
}

export default DownloadApp
