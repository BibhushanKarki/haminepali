import React from 'react';
import Logo from '../../assets/images/haminepalilogo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='row mx-2'>
			<nav className='navbar navbar-expand-lg navbar-light'>
				<Link className='navbar-brand' to='/'>
					<img src={Logo} alt='' width='100' height='85' />
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
						<li className='nav-item dropdown fw-bold'>
							<Link
								className='nav-link dropdown-toggle'
								to='/discover'
								id='navbarDropdown'
								role='button'
								data-bs-toggle='dropdown'
								aria-expanded='false'>
								Find
							</Link>
							<ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
								<li>
									<Link className='dropdown-item' to='/fundraisers'>
										FundRaisers
									</Link>
								</li>
								<li>
									<Link className='dropdown-item' to='/volunteer'>
										Volunteer
									</Link>
								</li>
							</ul>
						</li>
						<li className='nav-item dropdown fw-bold'>
							<Link
								className='nav-link dropdown-toggle'
								to='/fundraiserfor'
								id='navbarDropdown'
								role='button'
								data-bs-toggle='dropdown'
								aria-expanded='false'>
								Fund Raise
							</Link>
							<ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
								<li>
									<Link className='dropdown-item' to='/covid'>
										Covid
									</Link>
								</li>
								<li>
									<Link className='dropdown-item' to='/food'>
										Food
									</Link>
								</li>
								<li>
									<Link className='dropdown-item' to='/health'>
										Health
									</Link>
								</li>
								<li>
									<Link className='dropdown-item' to='/education'>
										Education
									</Link>
								</li>
								<li>
									<Link className='dropdown-item' to='/housing'>
										Housing
									</Link>
								</li>
								<li>
									<Link className='dropdown-item' to='/clothing'>
										Clothing
									</Link>
								</li>
							</ul>
						</li>
						<li className='nav-item dropdown fw-bold'>
							<Link
								className='nav-link dropdown-toggle'
								to='/howitwork'
								id='navbarDropdown'
								role='button'
								data-bs-toggle='dropdown'
								aria-expanded='false'>
								Organization Profile
							</Link>
							<ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
								<li>
									<Link className='dropdown-item' to='/howitworks'>
										How it works?
									</Link>
								</li>
								<li>
									<Link className='dropdown-item' to='/whyhaminepal'>
										Why HamiNepali
									</Link>
								</li>
								<li>
									<Link className='dropdown-item' to='/behindthename'>
										Behind the name
									</Link>
								</li>
								<li>
									<Link className='dropdown-item' to='/successstories'>
										Success Stories
									</Link>
								</li>
							</ul>
						</li>
					</ul>
					<form className='d-flex align-items-center'>
						<div className='search-nav'>
							{' '}
							<i className='fa fa-search'></i>{' '}
							<input
								type='text'
								className='form-control'
								placeholder='Search'
							/>
						</div>
						<span className='mx-2'>|</span>
						<Link to='/sign-in'>
							<button type='button' className='btn '>
								Sign In
							</button>
						</Link>
						<span className='mx-2'></span>
						<Link to='/sign-up'>
							<button className='btn btn-primary px-3' type='button'>
								Join Now
							</button>
						</Link>
					</form>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
