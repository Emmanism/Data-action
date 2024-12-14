import { Heading } from '@components/heading/heading';
import { Slider } from '@components/slider/slider';
import { Text } from '@components/text/text';
import React from 'react';
import AliceCarousel, { EventObject } from 'react-alice-carousel';
import test from '../../assets/images/testi.svg';
import arrowLeft from '../../assets/images/arrow_left.svg';
import arrowRight from '../../assets/images/white_arrow_right.svg';
import elipse from '../../assets/images/Ellipse15.png';
import { Img } from '@components/img/img';
import { RatingBar } from '@components/ratingBar/rating_bar';
import { Button } from '@components/button/button';

export default function TestimonialSection() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef<AliceCarousel>(null);

  return (
    <>
      <div className="mt-[350px] flex flex-col items-center gap-[106px] px-14 lg:gap-[106px] md:gap-[79px] md:px-5 sm:gap-[53px] sm:px-4">
        <div className="ml-[42px] flex w-[88%] items-start gap-[73px] lg:w-full md:ml-0 md:w-full md:flex-col">
          <Text
            size="text9xl"
            as="p"
            className="w-[52%] self-center text-[66px] font-normal leading-[90px] text-deep_purple-900 lg:w-[52%] lg:text-[48px] md:w-full md:text-[48px]"
          >
            What our customers are saying
          </Text>
          <Heading
            size="text3xl"
            as="p"
            className="mt-1.5 text-[24px] font-medium text-gray-900 lg:text-[20px] md:mt-0"
          >
            We are trusted to deliver our promises
          </Heading>
        </div>
        <div className="ml-7 flex w-[88%] items-center justify-between gap-5 lg:w-full md:ml-0 md:w-full md:flex-col">
          <div className="mx-auto flex w-full md:self-stretch">
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
                  <div className="flex flex-col gap-[52px] sm:gap-[26px]">
                    <div className="flex items-start gap-12 md:flex-col">
                      <Img
                        src={test}
                        alt="Testimonial Image"
                        className="h-[102px] w-[10%] object-contain md:w-full"
                      />
                      <div className="mt-8 flex flex-1 flex-col gap-5 self-end md:self-stretch sm:self-auto">
                        <div className="flex items-center gap-2.5">
                          <RatingBar
                            value={5}
                            isEditable={true}
                            color="#ffd33c"
                            activeColor="#ffd33c"
                            size={26}
                            className="flex gap-2.5"
                          />
                          <Heading
                            size="textlg"
                            as="p"
                            className="font-inter text-[21.33px] font-medium text-gray-900_01 lg:text-[17px]"
                          >
                            5.0
                          </Heading>
                        </div>
                        <Text
                          size="text7xl"
                          as="p"
                          className="text-[40px] font-normal leading-[75px] text-black-900 lg:text-[34px] md:text-[34px] sm:text-[32px]"
                        >
                          “With Agency the results are very satisfying. wrapped with Hight quality
                          and innovative design that makes a surge of visitors on my website”
                        </Text>
                      </div>
                    </div>
                    <div className="mx-[200px] flex gap-[30px] md:mx-0 md:flex-col">
                      <Img
                        src={elipse}
                        alt="Reviewer Image"
                        className="h-[74px] w-[74px] rounded-[36px] object-cover md:w-full"
                      />
                      <div className="flex flex-1 flex-col items-start gap-2 md:self-stretch">
                        <Heading
                          size="headings"
                          as="h4"
                          className="text-[24px] font-semibold text-gray-900_01 lg:text-[20px]"
                        >
                          Renee Wells
                        </Heading>
                        <Heading
                          size="textlg"
                          as="p"
                          className="text-[21.33px] font-medium text-blue_gray-400_01 lg:text-[17px]"
                        >
                          Product Designer, Quotient
                        </Heading>
                      </div>
                    </div>
                    <div className="flex gap-5 self-end md:self-auto mb-10">
                      <Button
                        color="white-A700"
                        size="xl"
                        onClick={() => sliderRef.current?.slidePrev()}
                        className="w-[66px] rounded-[32px] border-[1.33px] border-solid border-blue_gray-100 px-5"
                      >
                        <Img src={arrowLeft} />
                      </Button>
                      <Button
                        color="gray_900_01"
                        size="xl"
                        onClick={() => sliderRef.current?.slideNext()}
                        className="w-[66px] rounded-[32px] px-5"
                      >
                        <Img src={arrowRight} />
                      </Button>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            />
          </div>
        </div>
      </div>
    </>
  );
}
