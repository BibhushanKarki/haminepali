import React from 'react'
import TopFundRaisers from '../../components/TopFundRaisers/TopFundRaisers'
import GetStartedEducation from '../../components/GetStartedSection/GetStartedEducation'

const Education = () => {
  return (
    <div>
      <GetStartedEducation/>
      <TopFundRaisers title="Trending Covid Fundraisers"/>
      <TopFundRaisers title="Top Fundraisers"/>
      <TopFundRaisers/>
    </div>
  )
}

export default Education
