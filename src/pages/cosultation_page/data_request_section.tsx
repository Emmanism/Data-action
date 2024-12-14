import { Heading } from "@components/heading/heading";
import { Img } from "@components/img/img";
import { SelectBox } from "@components/selectBox/selectBox";
import React from "react";
import arrowDown from '../../assets/images/arrow_down.svg';
import { Input } from "@components/input/input";
import { Button } from "@components/button/button";


const dropDownOptions = [
    {label:"Option1", value:'option1'},
    {label:"Option2", value:'option2'},
    {label:"Option3", value:'option3'},
]

export default function DataRequestSection(){
    return(
        <>
        <div className="mb-56 flex flex-col items-center gap-[122px] lg:gap-[91px] md:gap-[91px] sm:gap-[61px]">
            <div className="container-xs flex flex-col items-center px-14 lg:px-5 md:px-5">
                <div className="ml-3.5 flex flex-col items-center gap-3 md:ml-0">
                    <Heading
                      size="text8xl"
                      as='p'
                      className="font-poppins text-[48px] font-medium text-white-a700_cc lg:text-[40px] md:text-[32px] sm:text-[26px]"
                     >
                        Request for data a project
                    </Heading>
                    <Heading
                     size="textxl"
                     as='p'
                     className="font-poppins text-[22px] font-normal text-white-a700_e5 lg:text-[18px]"
                      >
                         Navigating the complexities of today’s business world requires not just expertise but also strategic insight. Our
                    </Heading>
                </div>
            </div>
            <div className="flex w-[82%] justify-center rounded bg-white-a700_66 p-7 lg:w-full md:flex-col sm:p-4">
            <div className="flex flex-1 md:flex-col md:self-stretch">
                <SelectBox 
                 shape="round"
                 indicator={
                    <Img 
                    src={arrowDown}
                    alt="Arrow Down"
                    className="h-[8px] w-[12px] "
                     />
                  }
                  name="Project Area Dropdown"
                  placeholder={'Select Project Area'}
                  options={dropDownOptions}
                  className="w-[22%] gap-4 rounded px-[22px] md:w-full sm:p-4"
                 />
                 <div className="flex w-[100%] ml-10 rounded">
                 <Input 
                    shape="round"
                    name="Project Purpose Input"
                    placeholder={'Project Purpose'}
                     className="w-full ml-10 rounded px-3.5 md:ml-0 md:w-full bg-white-a700"
                 />
                 </div>
                  <SelectBox 
                   shape="round"
                  indicator={
                    <Img 
                    src={arrowDown}
                    alt="Arrow Down"
                    className="h-[8px] w-[12px]"
                     />
                  }
                  name="Difficulty Dropdown"
                  placeholder={'Difficulty level'}
                  options={dropDownOptions}
                  className="w-[18%]  ml-10 gap-4 rounded px-[22px] md:ml-0 sm:p-4"
                 />
            </div>
            <Button
              color="blue_700"
              size="2xl"
              className="min-w-[152px] rounded px-[34px] font-bevietnampro font-medium tracking-[0.48px] md:px-5"
             >
                Search

            </Button>
        </div>
        </div>
        </>
    )
}