import React from 'react'
import TopFundRaisers from '../../components/TopFundRaisers/TopFundRaisers'
import GetStartedClothing from '../../components/GetStartedSection/GetStartedClothing'

const Clothing = () => {
  return (
    <div>
      <GetStartedClothing/>
      <TopFundRaisers title="Trending Covid Fundraisers"/>
      <TopFundRaisers title="Top Fundraisers"/>
    </div>
  )
}

export default Clothing