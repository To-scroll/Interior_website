import BottomFooter from "./component/footer/BottomFooter";
import Footer from "./component/footer/Footer";
import AboutSection from "./component/landing_page/aboutsection/AboutSection";
import Partners from "./component/landing_page/aboutsection/Partners";
import FeatureCarouselSection from "./component/landing_page/featuresection/FeatureCarouselSection";
import PicturegridSection from "./component/landing_page/featuresection/PicturegridSection";
import HerocarouselSection from "./component/landing_page/herosection/HerocarouselSection";
import HeroSection from "./component/landing_page/herosection/HeroSection";
import BlogSection from "./component/landing_page/insightsection/BlogSection";
import ServiceSection from "./component/landing_page/servicesection/ServiceSection";
import StatisticsSection from "./component/landing_page/servicesection/StatisticsSection";
import BannerSection from "./component/landing_page/teamsection/BannerSection";
import OurTeamSection from "./component/landing_page/teamsection/OurTeamSection";
import HowWorksSection from "./component/landing_page/worksandtestimonials/HowWorksSection";
import Testimonials from "./component/landing_page/worksandtestimonials/Testimonials";

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
      <OurTeamSection flag = 'false'/>
      <BannerSection />
      <BlogSection />
    </>
  );
}
