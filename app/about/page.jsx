import React from 'react'
import Breadcrumbs from '../component/breadcrumbs/Breadcrumbs'
import AboutHeroSection from '../component/about_page/AboutHeroSection'
import OurTeamSection from '../component/landing_page/teamsection/OurTeamSection'
import AboutGridSection from '../component/about_page/AboutGridSection'
import WhatwedoSection from '../component/about_page/WhatwedoSection'
import WhyChooseSection from '../component/about_page/WhyChooseSection'
import StatisticsSection from '../component/landing_page/servicesection/StatisticsSection'
import AwardSection from '../component/about_page/AwardSection'

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
