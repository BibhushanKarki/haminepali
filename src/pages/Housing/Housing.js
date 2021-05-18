import React from 'react'
import TopFundRaisers from '../../components/TopFundRaisers/TopFundRaisers'
import GetStartedHousing from '../../components/GetStartedSection/GetStartedHousing'

const Housing = () => {
  return (
    <div>
      <GetStartedHousing/>
      <TopFundRaisers title="Trending Covid Fundraisers"/>
      <TopFundRaisers title="Top Fundraisers"/>
      <TopFundRaisers />
    </div>
  )
}

export default Housing