import { Img } from '@components/img/img';
import { Slider } from '@components/slider/slider';
import React, { RefObject } from 'react';
import AliceCarousel, { EventObject } from 'react-alice-carousel';
import welcome from '../../assets/images/welcome.png';
import black from '../../assets/images/black_see.png';
import { Heading } from '@components/heading/heading';
import { Text } from '@components/text/text';
import { Button } from '@components/button/button';
import FadeInText from '@utils/fadeintext';
import '@styles/tailwind.css';
import '@styles/font.css';

interface WelcomeSectionProps {
  sliderRef: RefObject<AliceCarousel>;
  sliderState: number;
  setSliderState: React.Dispatch<React.SetStateAction<number>>;
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({
  sliderRef,
  sliderState,
  setSliderState
}) => {
  return (
    <div className="mx-auto w-full">
      <div className="flex w-full">
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
          items={[...Array(3)].map(() => (
            <React.Fragment key={Math.random()}>
              <div className="relative h-[900px]  w-full flex-1 bg-[url(src/assets/images/welcome.png)] bg-cover bg-center bg-no-repeat object-cover md:h-auto absolute top-0 left-0">
                <Img
                  src={black}
                  alt="Image"
                  className="mx-auto h-900px w-full flex-1 object-cover"
                />
                <div className="absolute bottom-[5%] left-0 right-0 m-auto flex flex-1 justify-center px-14 md:px-5 sm:px-4">
                  <div className="mb-[234px] flex w-[88px] flex-col items-center gap-[82px] lg:w-full lg:gap-[82px] md:w-full md:gap-[61px] sm:gap-[41px]">
                    <div className="ml-[26px] flex flex-col items-center gap-[30px] self-stretch px-14 md:ml-0 md:px-5 sm:px-4">
                      <Heading
                        size="text4xl"
                        as="h1"
                        className="font-poppins text-[30px] font-medium tracking-[1.00px] text-[#B7B7B7] lg:text-25px md:text-[24px] sm:text-[22px]"
                      >
                        <FadeInText
                          start={30}
                          className="animate-text justify-center text-[#B7B7B7]"
                        >
                          WELCOME TO DATAACTIONS
                        </FadeInText>
                      </Heading>
                      <Heading
                        size="headingmd"
                        as="h2"
                        className="font-poppins text-[48px] font-semibold text-white-a700_cc lg:text-[32px] md:text-[32px] sm:text-[26px]"
                      >
                        <FadeInText start={40} className="animate-text justify-center">
                          GROW YOUR BUSINESS WITH US!
                        </FadeInText>
                      </Heading>
                      <Text
                        as="p"
                        className="self-stretch text-center font-normal font-poppins text-18px leading-8 text-[#e6e6e6] lg:text-[15px]"
                      >
                        <FadeInText start={30} className="animate-text justify-center">
                          Navigating the complexities of today’s business world requires not just
                          expertise but also strategic insight. Our consultancy is designed to
                          provide you with tailored support that addresses your unique challenges
                          and aspirations.
                        </FadeInText>
                      </Text>
                    </div>
                    <Button
                      color="blue_700"
                      size="3xl"
                      className="min-w-[300px] rounded-[20px] px-[34px] text-white-a700_e5 font-medium sm:px-4"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>

                <div className="absolute bottom-[5%] left-0 right-0 flex justify-center gap-3">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      onClick={() => sliderRef?.current?.slideTo(i)}
                      className={`inline-block h-[16px] w-[16px] cursor-pointer rounded-[50%] mr-[18px] ${
                        sliderState === i ? 'bg-blue-700_cc' : 'bg-white-a700_66'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </React.Fragment>
          ))}
        />
      </div>
    </div>
  );
};

export default WelcomeSection;
