import { Img } from '@components/img/img';
import webDevelopment from '../../assets/images/website.svg';
import React from "react";
import { Heading } from '@components/heading/heading';
import { Text } from '@components/text/text';
 import "@styles/tailwind.css";
import '@styles/index.css';
import '@styles/font.css'; 


interface Props {
  className?: string;
  globalImage?: string;
  websiteTitle?: React.ReactNode;
  descriptionText?: React.ReactNode;
  bgColor?: string; 
}

export default function WebDevelopmentProfile({
    globalImage = webDevelopment,
    websiteTitle = "Website Development",
    descriptionText =
      "Build powerful user-friendly mobile and web apps tailored to your business needs with our expert development services",
    bgColor = "#FFFFFF",
    ...props
  }: Props & { bgColor?: string }) {
    return (
      <div
        {...props}
        style={{ backgroundColor: bgColor }}
        className={`${props.className} flex flex-col items-center w-full md:w-full lg:w-[25%] w-[25%] gap-5 px-6 py-10 md:p-5 sm:px-4 sm:py-4 rounded`}
      >
        <div className="flex flex-col items-center justify-center gap-6 px-10 md:px-4">
          <div className="flex flex-col items-center rounded bg-blue-700_a2 p-6 opacity-80">
            <Img
              src={globalImage}
              alt="Globe Image"
              className="h-[38px] w-[38px]"
            />
          </div>
          <Heading
            size="text2xl"
            as="p"
            className="text-[23.8px] font-medium text-[#202020] "
          >
            {websiteTitle}
          </Heading>
        </div>
        <Text
          as="p"
          className="self-stretch text-center text-[18.51px] font-normal leading-[37px] text-[#7E8492]"
        >
          {descriptionText}
        </Text>
      </div>
    );
  }