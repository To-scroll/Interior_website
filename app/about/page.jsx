import React from 'react'
import Breadcrumbs from '../component/breadcrumbs/Breadcrumbs'
import AboutHeroSection from './AboutHeroSection'
import OurTeamSection from '../landing page/teamsection/OurTeamSection'
import AboutGridSection from './AboutGridSection'
import WhatwedoSection from './WhatwedoSection'
import WhyChooseSection from './WhyChooseSection'
import StatisticsSection from '../landing page/servicesection/StatisticsSection'
import AwardSection from './AwardSection'

const page = () => {
  return (
    <div className='pt-20'>
      <Breadcrumbs />
      <AboutHeroSection />
      <AboutGridSection />
      <WhatwedoSection />
      <WhyChooseSection />
      <StatisticsSection />
      <OurTeamSection flag = 'true'/>
      <AwardSection />
    </div>      
    )
}

export default page
