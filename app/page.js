import BottomFooter from "./component/footer/BottomFooter";
import Footer from "./component/footer/Footer";
import AboutSection from "./landing page/aboutsection/AboutSection";
import Partners from "./landing page/aboutsection/Partners";
import FeatureCarouselSection from "./landing page/featuresection/FeatureCarouselSection";
import PicturegridSection from "./landing page/featuresection/PicturegridSection";
import HerocarouselSection from "./landing page/herosection/HerocarouselSection";
import HeroSection from "./landing page/herosection/HeroSection";
import BlogSection from "./landing page/insightsection/BlogSection";
import ServiceSection from "./landing page/servicesection/ServiceSection";
import StatisticsSection from "./landing page/servicesection/StatisticsSection";
import BannerSection from "./landing page/teamsection/BannerSection";
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
      <BannerSection />
      <BlogSection />
    </>
  );
}
