import React from "react";
import { GoNorthStar } from "react-icons/go";

const FeatureCarouselSection = () => {
  return (
    <div className="relative overflow-hidden max-w-full md:mt-20 mx-auto border-[#c8c8c8] border-t-2 py-8">
      <div className="flex w-[600%] md:w-[700%]   xl:w-[350%] py-5 animate-scrolling">
        {/* First Duplicate */}
        <div className="flex gap-5 px-5">
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
        {/* Second Duplicate to ensure seamless transition */}
        <div aria-hidden="true" className="flex gap-5 px-5">
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </div>
    </div>
  );
};
const FeatureCard = () => (
  <div className="font-medium text-[25px] md:text-[70px] flex w-[100%]  lg:w-[200%] items-center ">
    <GoNorthStar size={30} className="mr-2 md:size-20 stroke-[#171717] stroke-[0.5px] text-white" />
    <h3>Our Feature Work</h3>
  </div>
);
export default FeatureCarouselSection;
