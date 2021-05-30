import React from 'react'
import HomePageCover from '../../components/HomePageCover/HomePageCover'
import HomePageTexts from '../../components/HomePageTexts/HomePageTexts'
import TopFundraiserCard from '../../components/TopFundraiserCard/TopFundraiserCard'
import VolunteerProfileCard from '../../components/VolunteerProfileCard/VolunteerProfileCard'
import GallerySection from '../../components/GallerySection/GallerySection'
import DownloadApp from '../../components/DownloadApp/DownloadApp'
const Home = () => {
  return (
    <div className="container">
      <HomePageCover/>
      <HomePageTexts/>
      <GallerySection/>
      <TopFundraiserCard title="Top Fundraisers"/>
      <VolunteerProfileCard/>
      <DownloadApp/>
    </div>
  )
}

export default Home;
