import AboutSection from "./landing page/aboutsection/AboutSection";
import Partners from "./landing page/aboutsection/Partners";
import HerocarouselSection from "./landing page/herosection/HerocarouselSection";
import HeroSection from "./landing page/herosection/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HerocarouselSection />
      <Partners />
      <AboutSection />

    </>
  );
}
