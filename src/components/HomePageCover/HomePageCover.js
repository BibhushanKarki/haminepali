import React from 'react';
import HeroImg from '../../assets/images/coverimg.jpg';
import Play from '../../assets/images/play.png';
import { BsChevronRight } from 'react-icons/bs';
import DonationFormSection from '../../components/DonationFormSection';

const HomePageCover = () => {
  const heroStyle = {
    backgroundImage: `url(${HeroImg})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'100%',
    backgroundPosition: 'top 5px',
    height: "600px",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    objectFit: "cover",
  };
  const donateBtn = {
    marginLeft: "4rem",
    marginBottom: "5rem",
  };

	return (
		<div className='row herorow' style={heroStyle}>
			<div style={donateBtn} className='col-md-12 donate-video'>
				<button
					type='button'
					data-bs-toggle='modal'
					data-bs-target='#donateModal'
					className='btn btn-primary mt-4 fw-bold'>
					Donate
					<BsChevronRight />
				</button>
				<DonationFormSection />

				<h5 className='my-3'>
					<img
						className='playbtn'
						src={Play}
						alt='play'
						height='30px'
						width='30px'
					/>
					&nbsp; See how HamiNepal Works
				</h5>
			</div>
			<div className='donationDetail col-md-12 my-4 d-flex justify-content-evenly'>
				<div className='col-md-4 col-sm-4 d-flex justify-content-center'>
					<button type='button' className='btn btn-lg btn-donation fw-bold'>
						Collected Amount <br /> $0.00
					</button>
				</div>
				<div className='col-md-4 col-sm-4 d-flex justify-content-center'>
					<button type='button' className='btn btn-lg btn-donation-red fw-bold'>
						Donated Amount <br /> $0.00
					</button>
				</div>
				<div className='col-md-4 col-sm-4 d-flex justify-content-center'>
					<button type='button' className='btn btn-lg btn-donation fw-bold'>
						Remaining Amount <br /> $0.00
					</button>
				</div>
			</div>
		</div>
	);
};

export default HomePageCover;
