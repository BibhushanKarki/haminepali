import React from 'react'
import TopFundRaisers from '../../components/TopFundRaisers/TopFundRaisers'
import GetStartedCovid from '../../components/GetStartedSection/GetStartedCovid'
const Covid = () => {
  return (
    <div>
      <GetStartedCovid/>
      <TopFundRaisers title="Trending Covid Fundraisers"/>
    </div>
  )
}

export default Covid