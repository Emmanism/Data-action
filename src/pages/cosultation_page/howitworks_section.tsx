import { Heading } from "@components/heading/heading";
import { Img } from "@components/img/img";
import { Slider } from "@components/slider/slider";
import React from "react";
import AliceCarousel, { EventObject } from "react-alice-carousel";
import welcome from '../../assets/images/welcome.png';
import dashboard from '../../assets/images/dashboard.png';
import arrowRight from '../../assets/images/arrow_right.svg';
import { Button } from "@components/button/button";
import "@styles/tailwind.css";
import '@styles/index.css';
import '@styles/font.css';


/* export default function HowItWorksSection(){
 const [sliderState , setSliderState] = React.useState(0);
 const sliderRef = React.useRef<AliceCarousel>(null);

 return(
    <>
     <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col items-start gap-[38px] lg:px-5 md:px-5">
            <Heading
              size="text4xl"
              as='p'
              className="text-[30px] font-normal text-gray-700_01 lg:text-[25px] md:text-[24px] sm:text-[22px]"
             >
                How It Works
            </Heading>
            <div className="relative h-[268px] content-center self-stretch lg:h-auto md:h-auto">
                <div className="mx-auto flex w-full">
                    <Slider 
                       autoplay
                       autoplayInterval={2000}
                       responsive={{
                         '0': { items: 1 },
                         '551': { items: 1 },
                         '1051': { items: 1 },
                         '1441': { items: 1 }
                       }}
                       disableDotsControls
                       activeIndex={sliderState}
                       onSlideChanged={(e: EventObject) => {
                         setSliderState(e?.item);
                       }}
                       ref={sliderRef}
                       items={[...Array(3).map(() => (
                        <React.Fragment key={Math.random()}>
                            <div className="flex items-center md:flex-col">
                                <div className="flex w-full items-start gap-6 md:flex-col">
                                    <div className="flex w-full items-start justify-between gap-5 self-center">
                                        <div className="flex w-[80%] flex-col gap-[18px] self-center">
                                            <Img 
                                              src={welcome}
                                              alt="Step 1 Image"
                                              className="h-[200px] object-cover"
                                            />
                                            <Heading
                                             size="text3xl"
                                             as='p'
                                             className="text-center text-[24px] font-normal leading-[34px] text-blue_gray-900 lg:text-[20px]"
                                              >
                                                Search for a project & submit a request
                                            </Heading>
                                        </div>
                                        <Img 
                                           src={arrowRight}
                                           alt="Step 1 Arrow"
                                           className="mt-[90px] h-[22px]"
                                         />
                                    </div>
                                    <div className="flex w-full flex-col items-start gap-[18px] px-6 sm:px-4">
                                        <Img 
                                           src={dashboard}
                                           alt="Step 2 Image"
                                           className="h-[200px] w-[88%] object-contain"
                                          />
                                          <Heading
                                           size="text3xl"
                                           as='p'
                                           className="ml-[66px] text-[24px] font-normal text-blue_gray-900 lg:text-[20px] md:ml-0"
                                           >
                                            Make Payment
                                          </Heading>

                                    </div>
                                </div>
                                <div className="flex w-full gap-6 md:flex-col">
                                    <div className="flex-1 px-14 md:self-stretch md:px-5 sm:px-4">
                                        <div className="flex flex-col gap-[18px]">
                                            <Img 
                                              src={welcome}
                                              alt="Step 3 Image"
                                              className="mr-3 h-[200px] object-cover md:mr-0"
                                             />
                                             <Heading
                                               size="text3xl"
                                               as='p'
                                               className="text-center text-[24px] font-normal leading-[34px] text-blue_gray-900 lg:text-[20px]"
                                              >
                                                Recieve Project info/Dataset via email
                                             </Heading>
                                        </div>
                                    </div>
                                    <div className="flex w-[42%] flex-col gap-[18px] md:w-full">
                                        <Img 
                                           src={dashboard}
                                           alt="Step 4 Image"
                                           className="ml-6 h-[200px] object-cover md:ml-0" 
                                         />
                                         <Heading
                                            size="text3xl"
                                            as="p"
                                            className="text-center text-[24px] font-normal leading-[34px] text-blue_gray-900 lg:text-[20px]"
                                          >
                                            Request a show & Tell after completion
                                         </Heading>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                       ))]}
                     />
                </div>

                <div className="absolute left-0 right-0 top-[31%] m-auto flex w-[56%] justify-between gap-5">
                    <Button
                     size="xs"
                     shape="square"
                     onClick={() => {
                        sliderRef?.current?.slidePrev();
                     }}
                     className="ml-[424px] w-[24px] rotate-[-90deg]" 
                     >
                    <Img 
                      src={arrowRight}
                     />
                    </Button>
                    <Button
                       size="xs"
                       shape="square"
                       onClick={() => {
                          sliderRef?.current?.slideNext();
                       }}
                       className=" w-[24px] rotate-[-90deg]" 
                     >
                     <Img 
                      src={arrowRight}
                     />
                    </Button>
                </div>
            </div>
        </div>
     </div>
    </>
 )
} */


 export default function HowItWorksSection() {
    const [sliderState, setSliderState] = React.useState(0);
    const sliderRef = React.useRef(null);
  
    return (
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col items-start gap-[38px] lg:px-5 md:px-5">
          <Heading
            size="text4xl"
            as="p"
            className="text-[30px] font-normal text-gray-700_01 lg:text-[25px] md:text-[24px] sm:text-[22px]"
          >
            How It Works
          </Heading>
          <div className="relative h-[268px] content-center self-stretch lg:h-auto md:h-auto">
            <div className="mx-auto flex w-full">
              <Slider
                autoplay
                autoplayInterval={2000}
                responsive={{
                  '0': { items: 1 },
                  '551': { items: 1 },
                  '1051': { items: 1 },
                  '1441': { items: 1 },
                }}
                disableDotsControls
                activeIndex={sliderState}
                onSlideChanged={(e: EventObject) => {
                  setSliderState(e?.item);
                }}
                ref={sliderRef}
                items={Array.from({ length: 3 }).map((_, index) => (
                  <React.Fragment key={`carousel-item-${index}`}>
                    <div className="flex items-center md:flex-col">
                      <div className="flex w-full items-start gap-6 md:flex-col">
                        <div className="flex w-full items-start justify-between gap-5 self-center">
                          <div className="flex w-[80%] flex-col gap-[18px] self-center">
                            <Img
                              src={welcome}
                              alt="Step 1 Image"
                              className="h-[200px] object-cover"
                            />
                            <Heading
                              size="text3xl"
                              as="p"
                              className="text-center text-[24px] font-normal leading-[34px] text-blue_gray-900 lg:text-[20px]"
                            >
                              Search for a project & submit a request
                            </Heading>
                          </div>
                          <Img
                            src={arrowRight}
                            alt="Step 1 Arrow"
                            className="mt-[90px] h-[22px]"
                          />
                        </div>
                        <div className="flex w-full flex-col items-start gap-[18px] px-6 sm:px-4">
                          <Img
                            src={dashboard}
                            alt="Step 2 Image"
                            className="h-[200px] object-cover"
                          />
                          <Heading
                            size="text3xl"
                            as="p"
                            className="ml-[66px] text-[24px] font-normal text-blue_gray-900 lg:text-[20px] md:ml-0"
                          >
                            Make Payment
                          </Heading>
                        </div>
                      </div>
                      <div className="flex w-full gap-6 md:flex-col">
                                    <div className="flex-1 px-14 md:self-stretch md:px-5 sm:px-4">
                                        <div className="flex flex-col gap-[18px]">
                                            <Img 
                                              src={welcome}
                                              alt="Step 3 Image"
                                              className="mr-3 h-[200px] object-cover md:mr-0"
                                             />
                                             <Heading
                                               size="text3xl"
                                               as='p'
                                               className="text-center text-[24px] font-normal leading-[34px] text-blue_gray-900 lg:text-[20px]"
                                              >
                                                Recieve Project info/Dataset via email
                                             </Heading>
                                        </div>
                                    </div>
                                    <div className="flex w-[42%] flex-col gap-[18px] md:w-full">
                                        <Img 
                                           src={dashboard}
                                           alt="Step 4 Image"
                                           className="ml-6 h-[200px] object-cover md:ml-0" 
                                         />
                                         <Heading
                                            size="text3xl"
                                            as="p"
                                            className="text-center text-[24px] font-thin leading-[34px] text-blue_gray-900 lg:text-[20px]"
                                          >
                                            Request a show & Tell after completion
                                         </Heading>
                                    </div>
                                </div>
                            </div>

                  </React.Fragment>
                ))}
              />
            </div>
  
            <div className="absolute left-0 right-0 top-[31%] m-auto flex w-[56%] justify-between gap-5">
              <Button
                size="xs"
                shape="square"
                onClick={() => {
                //  sliderRef?.current?.slidePrev();
                }}
                className="lg:ml-[370px] ml-[424px] w-[24px]"
              >
                <Img src={arrowRight} />
              </Button>
              <Button
                size="xs"
                shape="square"
                onClick={() => {
                //  sliderRef?.current?.slideNext();
                }}
                className=" w-[24px]"
              >
                <Img src={arrowRight} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }