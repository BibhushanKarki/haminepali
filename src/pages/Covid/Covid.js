import React from 'react'
import TopFundRaisers from '../../components/TopFundRaisers/TopFundRaisers'
import GetStarted from '../../components/GetStartedSection/GetStarted'
const Covid = () => {
  return (
    <div>
      <GetStarted/>
      <TopFundRaisers title="Trending Covid Fundraisers"/>
      <TopFundRaisers title="Top Fundraisers"/>
      <TopFundRaisers />
    </div>
  )
}

export default Covid