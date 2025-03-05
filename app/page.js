import AboutSection from "./landing page/aboutsection/AboutSection";
import Partners from "./landing page/aboutsection/Partners";
import FeatureCarouselSection from "./landing page/featuresection/FeatureCarouselSection";
import PicturegridSection from "./landing page/featuresection/PicturegridSection";
import HerocarouselSection from "./landing page/herosection/HerocarouselSection";
import HeroSection from "./landing page/herosection/HeroSection";
import ServiceSection from "./landing page/servicesection/ServiceSection";
import StatisticsSection from "./landing page/servicesection/StatisticsSection";
import OurTeamSection from "./landing page/teamsection/OurTeamSection";
import HowWorksSection from "./landing page/worksandtestimonials/HowWorksSection";
import Testimonials from "./landing page/worksandtestimonials/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HerocarouselSection />
      <Partners />
      <AboutSection />
      <StatisticsSection />
      <ServiceSection />
      <FeatureCarouselSection />
      <PicturegridSection />
      <HowWorksSection />
      <Testimonials />
      <OurTeamSection />
    </>
  );
}
