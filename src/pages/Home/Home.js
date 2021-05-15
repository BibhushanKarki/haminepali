<<<<<<< HEAD
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
=======
import React from 'react'
import HomePageCover from '../../components/HomePageCover/HomePageCover'
import HomePageTexts from '../../components/HomePageTexts/HomePageTexts'
import TopFundraiserCard from '../../components/TopFundraiserCard/TopFundraiserCard'
import VolunteerProfileCard from '../../components/VolunteerProfileCard/VolunteerProfileCard'
import DownloadApp from '../../components/DownloadApp/DownloadApp'
const Home = () => {
  return (
    <div>
      <HomePageCover/>
      <HomePageTexts/>
      <TopFundraiserCard/>
      <VolunteerProfileCard/>
      <DownloadApp/>
    </div>
  )
}
>>>>>>> 15a3201e8d872d3171708c59bd9588b638c3f959

export default Home;
