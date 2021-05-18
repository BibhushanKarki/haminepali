import React from 'react'
import TopFundRaisers from '../../components/TopFundRaisers/TopFundRaisers'
import GetStartedFood from '../../components/GetStartedSection/GetStartedFood'

const Food = () => {
  return (
    <div>
      <GetStartedFood/>
      <TopFundRaisers title="Trending Covid Fundraisers"/>
      <TopFundRaisers title="Top Fundraisers"/>
      <TopFundRaisers />
    </div>
  )
}

export default Food
