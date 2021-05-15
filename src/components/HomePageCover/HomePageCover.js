import React from 'react'
import HeroImg from '../../assets/images/coverimg.png'
import Play from '../../assets/images/play.png'
import AppButton from '../../components/UI/Buttons/AppButton'

const HomePageCover = () => {
  const heroStyle={
    backgroundImage:`url(${HeroImg})`,
    height:'600px',
    color:'#fff',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'flex-end'
  }
  const donateBtn={
    marginLeft:'4rem',
    marginBottom:'5rem'
  }

  return (
    <div className="row herorow" style={heroStyle}>
      <div style={donateBtn} className="col-md-12">
        <AppButton buttontext="Donate >" />
        <h5 className="my-3"><img className="playbtn" src={Play} alt="play" height="30px" width="30px"/>&nbsp; See how HamiNepal Works</h5>
      </div>
      <div className="donationDetail col-md-12 my-4 d-flex justify-content-evenly">
      <div className="col-md-4 col-sm-4 d-flex justify-content-center">
        <button type="button" className="btn btn-lg btn-donation fw-bold">Collected Amount <br /> $1000</button>
      </div>
      <div className="col-md-4 col-sm-4 d-flex justify-content-center">
        <button type="button" className="btn btn-lg btn-donation-red fw-bold">Donated Amount <br /> $1000</button>
      </div>
      <div className="col-md-4 col-sm-4 d-flex justify-content-center">
          <button type="button" className="btn btn-lg btn-donation fw-bold">Remaining Amount <br /> $1000</button>
      </div>
      </div>
    </div>
  )
}

export default HomePageCover
