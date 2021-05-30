import React from 'react'
import TopFundRaisers from '../../components/TopFundRaisers/TopFundRaisers'
import GetStartedCovid from '../../components/GetStartedSection/GetStartedCovid'
const Covid = () => {
  return (
    <div>
      <GetStartedCovid/>
      <TopFundRaisers title="Trending Covid Fundraisers"/>
      <TopFundRaisers title="Top Fundraisers"/>
    </div>
  )
}

export default Covid