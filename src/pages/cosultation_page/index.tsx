import { Img } from "@components/img/img";
import React, { Suspense } from "react";
import{ Helmet } from "react-helmet";
import bgBlackground from '../../assets/images/blue_gradient.png';
import WelcomeSection from "./welcome_section";
import AliceCarousel, { EventObject } from 'react-alice-carousel';
import ServiceOverviewSection from "./service_overview_section";
import "@styles/tailwind.css";
import '@styles/index.css';
import '@styles/font.css';
import CareerDevelopmentSection from "./career_development";
import ConsultationOverviwSection from "./consultation_overview_section";
import rectangles from '../../assets/images/Rectangle_5660.png';
import black from '../../assets/images/black_see.png';
import DataRequestSection from "./data_request_section";
import FinanceDashboard from "@components/finance_dashboard/finance_dashboard";
import HowItWorksSection from "./howitworks_section";
import TestimonialSection from "./testimonial_section";

const industryFocusList = [
  {financeTitle:"Finance", amountButton:"2304"},
  {financeTitle:"Energy & Utilities", amountButton:"2304"},
  {financeTitle:"Real Estate", amountButton:"2304"},
  {financeTitle:"Real Estate", amountButton:"2304"},
  {financeTitle:"Real Estate", amountButton:"2304"},
  {financeTitle:"Real Estate", amountButton:"2304"},
  
];

export default function ConsultationPage(){
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef<AliceCarousel>(null);
    return(
        <>
         <Helmet>
            <title>Business Consultation Services DataActions</title>
            <meta 
              name='description'
              content="DataActions offers expert business consultation to navigate today's complex business world. Tailored support for strategic insight, process automation, and career development.Elevate your business and professional journey with our comprehensive services "
            />
         </Helmet>
          <div
            style={{
              background: "linear-gradient(to right, #39D4D680, #39D4D600, #39D4D652)", 
            }}
          className="w-full">


          <div className="relative h-[90vh] mb-60 content-center lg:h-[90vh] md:h-auto">
          <WelcomeSection
            sliderRef={sliderRef}
            sliderState={sliderState}
            setSliderState={setSliderState}
          />
        </div>

         <div className="w-full ">
         <ServiceOverviewSection />
        </div>
        <CareerDevelopmentSection />
        <ConsultationOverviwSection />

        <div className="mt-[206px] flex flex-col gap-[86px] md:gap-16 sm:gap-[43px]">
          <div className="relative h-[1008px] lg:h-auto md:h-auto bg-[url(src/assets/images/Rectangle_5660.png)]">
            <Img 
              src={black}
              alt="Image"
              className="h-[834px] w-full flex-1 object-cover"
              /> 
              <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-center">
                <div className="h-[843px] self-stretch bg-[url(src/assets/images/rectangle.png)] bg-cover bg-no-repeat py-[116px] lg:h-auto lg:py-8 md:h-auto md:h-auto md:h-auto md:py-5 sm:py-4 ">
                   <DataRequestSection />
                </div>
                <div className="container-xs relative mt-[-76px] lg:px-5 md:px-5">
                  <div className="flex gap-[86px] rounded-[12px] bg-gray-100 py-[60px] pl-[106px] pr-14 lg:pl-8 md:flex-col md:p-5 sm:p-4">
                    <Suspense 
                      fallback={<div>Loading feed...</div>}>
                      {industryFocusList.map((d, index) => (
                        <FinanceDashboard 
                         {...d}
                         key={"financeList" + index}
                         className="w-[10%] md:w-full"
                          />
                      ))}
                    </Suspense>
                  </div>
                </div>
              </div>
          </div>
           <HowItWorksSection />
        </div>
        <TestimonialSection />

        </div>
        </>
    )
}


{/*               <div className="absolute left-0 right-0 top-[2%] m-auto w-[1920px] flex-1">
                <div className="flex items-start md:flex-col">
                    <div className="flex w-[46%] flex-col items-start self-center md:w-full md:px-5 ">
                        <Img
                          src={bgBlackground}
                          alt="Primary Image"
                          className="h-[1528px] w-[92%] object-contain"
                        
                         />
                        <Img
                          src={bgBlackground}
                          alt="Primary Image"
                          className="mt-[-52px] h-[1528px] w-full object-cover lg:h-auto md:h-auto"
                         />
                    </div>
                      <Img
                          src={bgBlackground}
                          alt="Primary Image"
                          className="relative ml-[-174px] mt-[186px] h-[1528px] w-[52%] object-contain md:ml-0 md:w-full"
                         />
                </div>

                <div className="relative mt-[-612px] flex flex-col items-end lg:gap-[349px] md:gap-[349px] sm:gap-[233px]"> 
                    <Img 
                      src={bgBlackground}
                      alt="Primary Image"
                      className="h-[1528px] w-[48%] object-contain"
                    />
                    <Img 
                      src={bgBlackground}
                      alt="Primary Image"
                      className="h-[1528px] w-[46%] object-contain"
                    />
                </div>
              </div>  

              <div className="mx-auto flex w-[1920px] flex-1 flex-col items-start gap-[666px] lg:gap-[449px] sm:gap-[333px] ">
              <Img 
                      src={bgBlackground}
                      alt="Primary Image"
                      className="h-[1528px] w-[48%] object-contain"
                    />
                    <Img 
                      src={bgBlackground}
                      alt="Primary Image"
                      className="h-[1528px] w-[46%] object-contain"
                    />
              </div> */}