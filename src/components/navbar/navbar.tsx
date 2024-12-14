import { Img } from "@components/img/img";
import logo from '../../assets/images/logo_header.png';
import React from "react";
import { Text } from "@components/text/text";
import { Button } from "@components/button/button";
import { Heading } from "@components/heading/heading";
/* import '@styles/tailwind.css';
import '@styles/font.css'; */



interface Props {
    className?:string;
}

export default function Navbar({...props} : Props){
  return(
    <header
       {...props}
       className={`${props.className} flex sm:flex-col justify-between items-center gap-5 px-[140px] py-5 lg:px-8 md:px-5 sm:p-4 bg-[#EDE7F4]`}
    >
     <Img 
        src={logo}
        alt="Logo Image"
        className="h-[78px] w-[328px] object-contain lg:w-[230px]"
     />
     <div className="flex p-3">
     <ul className="flex flex-wrap gap-8">
        <li>
            <a href="/" className="cursor-pointer lg-text-[13px]">
            <Text 
              as='p'
              className="text-[18px] font-normal tracking-[0.72px] text-[#20104BA6] hover:font-semibold hover:text-blue_gray-900"
            >
              Home
            </Text>
            </a>
        </li>
        <li>
            <a href="/" className="cursor-pointer lg-text-[13px]">
            <Text 
              as='p'
              className="text-[18px] font-normal tracking-[0.72px] text-[#20104BA6] hover:font-semibold hover:text-blue_gray-900"
            >
              About Us
            </Text>
            </a>
        </li>
        <li>
            <a href="/" className="cursor-pointer lg-text-[13px]">
            <Text 
              as='p'
              className="text-[18px] font-normal tracking-[0.72px] text-[#20104BA6] hover:font-semibold hover:text-blue_gray-900"
            >
              Training
            </Text>
            </a>
        </li>
        <li>
            <a href="/" className=" lg-text-[13px]">
            <Heading 
             size="headingxs"
              as='h6'
              className="text-[18px] font-semibold tracking-[0.72px] text-[#20104B]  hover:text-blue_gray-900"
            >
              Consultation
            </Heading>
            </a>
        </li>
        <li>
            <a href="/" className="cursor-pointer lg-text-[13px] md:text-[9px]">
            <Text 
              as='p'
              className="text-[18px] font-normal tracking-[0.72px] text-[#20104BA6] hover:font-semibold hover:text-blue_gray-900"
            >
              Dashboard
            </Text>
            </a>
        </li>
        <li>
            <a href="/" className="cursor-pointer lg-text-[13px] ">
            <Text 
              as='p'
              className="text-[18px] font-normal tracking-[0.72px] text-[#20104BA6] hover:font-semibold hover:text-blue_gray-900"
            >
              Student Portofolio
            </Text>
            </a>
        </li>
       <li>
            <a href="/" className="cursor-pointer lg-text-[13px] text-blue_gray_900_e5">
            <Text 
              as='p'
              className="text-[18px] font-normal tracking-[0.72px] text-[#20104BA6] hover:font-semibold hover:text-blue_gray-900"
            >
              Contact Us
            </Text>
            </a>
        </li> 
     </ul>
     </div>

     <Button
        color="blue_700_cc"
        size="lg"
        shape="round"
        className="lg:min-w-[50px] min-w-[200px] rounded-[14px] px-[34px] font-bevietnampro text-[#ffffff] font-medium tracking-[0.40px] sm:px-4"
     >
        Register
     </Button>
    </header>
  )

}