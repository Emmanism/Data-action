import { Img } from "@components/img/img";
import React from "react";
import welcome from '../../assets/images/welcome.png';
import { Text } from "@components/text/text";
import { Heading } from "@components/heading/heading";
/* import "@styles/tailwind.css";
import '@styles/index.css';
import '@styles/font.css';  */

interface Props{
 className?: string;
  sectionTitle?: React.ReactNode;
  descriptionText?: React.ReactNode;
  comprehensivePracticesText?: React.ReactNode;
  scenarioQAText?: React.ReactNode;
  callToActionText?: React.ReactNode;
  img: string;
}


export default function InterviewPrepSection({
    img = welcome,
    sectionTitle = 'Interview Prep',
    descriptionText = 'We offer mock interviews tailored to your industry, including both technical and behavioral questions.',
    comprehensivePracticesText,
    scenarioQAText,
    callToActionText = "Book Consultation Now",
    ...props
} : Props) {
     return(

        <div
           {...props}
           className={`${props.className} flex flex-col items-center w-full md:w-full w-[32%] gap-[30px] p-[26px]  border-white-a700 border-2 border-solid bg-white-a700_7f `}
         >
        <Img 
            src={img}
            alt="Featured Image"
            className="h-[258px] w-full object-cover"
          />
          <div className="mb-3.5 ml-2.5 flex flex-col items-center gap-9 self-stretch">
          <div className="flex flex-col items-center gap-[18px] self-stretch">
            <Text
              size="text5xl"
              as='p'
              className="text-[32px] font-normal text-blue-700"
              >
                {sectionTitle}
            </Text>
            <div className="flex flex-col gap-2 self-stretch w">
            <Text
              as='p'
              className="text-center font-poppins  text-[18px]  font-normal leading-[35px] text-[#757575] max-h-[175px] text-ellipsis"
              >
                {descriptionText}
            </Text>
            <div className="flex gap-5">
                <Heading
                  size="textxs"
                  as='p'
                  className="w-full font-poppins text-[14px] lg:text-[12px] font-medium leading-[35px] text-[#757575]"
                  >
                    {comprehensivePracticesText}
                </Heading>
                <Heading
                  size="textxs"
                  as='p'
                  className="w-full font-poppins  text-[14px] lg:text-[12px] font-medium leading-[35px] text-[#757575]"
                  >
                    {scenarioQAText}
                </Heading>
            </div>
          </div>
          </div>
          <Heading
             size="text3xl"
             as='p'
             className="text-[24px] font-medium text-blue_gray-900"
            >
                {callToActionText}
          </Heading>

        </div>
        </div>
     )
}