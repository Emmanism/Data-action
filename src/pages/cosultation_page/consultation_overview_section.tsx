import { Heading } from "@components/heading/heading";
import { Text } from "@components/text/text";
import React from "react";


export default function ConsultationOverviwSection(){
    return (
        <>
          <div className="mt-[222px] flex flex-col items-center gap-20 lg:gap-20 md:gap-[60px] sm:gap-10">
          <div className="container-xs flex flex-col items-center px-14 lg:px-5 md:px-5">
            <div className="flex w-[92%] flex-col items-center gap-6 lg:w-full md:w-full">
                <Heading
                  size="text8xl"
                  as='h4'
                  className="font-poppins text-[48px] font-medium text-deep_purple-900 lg:text-[40px] md:text-[32px] sm:text-[26px]"
                 >
                    STREAMLINE YOUR BUSINESS WITH PROCESS AUTOMATION
                </Heading>
                <Text
                 as='p'
                 className="self-stretch text-center font-poppins text-[18px] font-normal leading-[34px] text-black-900 lg:text-[15px]"
                 >
                    At DataActions, we help businesses identify, design, and implement tailored process automation solutions using tools like Power Automate to drive meaningful results.
                </Text>
            </div>
          </div>
          <div className="flex self-stretch md:flex-col">
            <div className='flex w-full flex-col items-center justify-center gap-7 bg-indigo-900_cc px-14 py-[66px] lg:py-8 md:p-5 sm:py-4 '>
                <Heading
                 size='headings'
                 as='h5'
                 className="mt-1.5 font-poppins text-[24px] font-semibold uppercase leading-[30px] text-white-a700"
                 >
                    Some of the processes we have automated are:
                </Heading>
                <div className="ml-[26px] flex w-[90%] flex-col gap-4 lg:w-full md:ml-0 md:w-full ">
                    <div className="flex items-start gap-3 md:flex-col">
                        <div className="h-[10px] w-[8px] rounded-[50%] bg-white-a700_e5" />
                            <Text 
                              as='p'
                              className="w-full self-center text-[18px] font-normal leading-7 text-white-a700_e5 lg:text-[15px]"
                             >
                                Finance and Accounting: Automate invoice processing to improve accuracy and efficiency
                            </Text>
                        </div>
                    <div className="flex items-start gap-3 md:flex-col">
                        <div className="h-[10px] w-[8px] rounded-[50%] bg-white-a700_e5" />
                            <Text 
                              as='p'
                              className="w-full self-center text-[18px] font-normal leading-7 text-white-a700_e5 lg:text-[15px]"
                             >
                                Human Resources: Streamline onboarding, ensuring a seamless experience for employees.
                            </Text>
                        </div>
                        <div className="flex items-start gap-3 md:flex-col">
                                <div className="h-[10px] w-[8px] rounded-[50%] bg-white-a700_e5" />
                                    <Text
                                       as='p'
                                       className="w-full self-center text-[18px] font-normal leading-7 text-white-a700_e5 lg:text-[15px]"
                                     >
                                        Sales and Marketing: Set up automated email campaigns and customer follow-ups activities to keep prospects engaged
                                    </Text>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full flex-col items-start justify-center gap-[18px] bg-blue-700_cc px-10 py-[68px] lg:py-8 md:p-5 sm:px-4 sm:py-4">
                            <Heading
                              size="textxl"
                              as='h6'
                              className="ml-[52px] font-poppins text-[22px] font-medium uppercase text-white-a700 lg:text-[18px] md:ml-0"
                             >
                                Derived Benefits:
                            </Heading>
                            <div className="flex w-[94%] flex-col gap-4 self-end lg:w-full md:w-full">
                                <div>
                                    <div className="flex items-start gap-[13px]">
                                        <div className="mt-1 h-[10px] w-[8px] rounded-[50%] bg-white-a700_e5" />
                                            <Text 
                                              as='p'
                                              className="self-center text-[18px] font-normal text-white-a700_e5 lg:text-[15px]"
                                             >
                                                Increased Efficiency
                                            </Text>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-[13px]">
                                        <div className="mt-1 h-[10px] w-[8px] rounded-[50%] bg-white-a700_e5" />
                                            <Text
                                              as='p'
                                              className="self-center text-[8px] font-normal text-white-a700_e5 lg:text-[15px]"
                                              >
                                                Cost Savings
                                            </Text>
                                        </div>
                                        <div className="flex items-start gap-[13px]">
                                            <div className="mt-1 h-[10px] w-[8px] rounded-[50%] bg-white-a700_e5" />
                                                <Text 
                                                   as='p'
                                                   className="self-center text-[18px] font-normal text-white-a700_e5 lg:text-[15px]"
                                                  >
                                                    Enhanced Productivity
                                                </Text>
                                            </div>
                                            <div className="flex items-start gap-[13px]">
                                                <div className="mt-1 h-[10px] w-[8px] rounded-[50%] bg-white-a700_e5" />
                                                    <Text
                                                      as='p'
                                                      className="self-center text-[18px] font-normal text-white-a700_e5 lg:text-[15px]"
                                                     >
                                                        Improved Accuracy and Compliance.
                                                    </Text>
                                                </div>
                                                <div className="flex items-start gap-[13px]">
                                                    <div className="mt-1 h-[10px] w-[8px] rounded-[50%] bg-white-a700_e5" />
                                                    <Text 
                                                       as='p'
                                                       className="self-center text-[18px] font-normal text-white-a700_e5 lg:text-[15px]"
                                                     >
                                                        Better Customer Experience
                                                    </Text>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        </>
    )
}

