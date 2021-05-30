import React from 'react'
import TopFundRaisers from '../../components/TopFundRaisers/TopFundRaisers'
import GetStartedHealth from '../../components/GetStartedSection/GetStartedHealth'

const Health = () => {
  return (
    <div>
      <GetStartedHealth/>
      <TopFundRaisers title="Trending Covid Fundraisers"/>
      <TopFundRaisers title="Top Fundraisers"/>
    </div>
  )
}

export default Health
