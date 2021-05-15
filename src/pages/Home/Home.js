import React from 'react';
import TopFundraiserCard from '../../components/TopFundraiserCard/TopFundraiserCard';
import VolunteerProfileCard from '../../components/VolunteerProfileCard/VolunteerProfileCard';
import DownloadApp from '../../components/DownloadApp/DownloadApp';

const Home = () => {
	return (
		<div>
			<TopFundraiserCard />
			<VolunteerProfileCard />
			<DownloadApp />
		</div>
	);
};

export default Home;
