import { Img } from "@components/img/img";
import logo from '../../assets/images/Data_action_main.png';
import arrowRight from '../../assets/images/arrow.svg';
import facebook from '../../assets/images/facebook.svg';
import twitter from '../../assets/images/twitter.svg';
import instagram from '../../assets/images/instagram.svg';
import tiktok from '../../assets/images/tiktok.svg';
import linkedin from '../../assets/images/bi_linkedin.svg';
import { Heading } from "@components/heading/heading";
import { Text } from "@components/text/text";
import { Input } from "@components/input/input";
import { Button } from "@components/button/button";
 /* import '@styles/tailwind.css';
import '@styles/index.css';
import '@styles/font.css'; 
 */

import '@styles/tailwind.css';


interface Props {
    className?: string;
}



export default function Footer({...props}: Props){
    return(
    <footer
        {...props}
        className={`${props.className} flex justify-center items-center  py-[88px] lg:py-8 md:py-5 sm:py-4 bg-[#20104BE5]`}
    >
    <div className="container-xs flex justify-center lg:px-5 md:px-5">
    <div className="flex w-full items-center justify-between gap-5 md:flex-col">
    <div className="flex w-[18%] flex-col gap-[30px] md:w-full">
        <div className="flex flex-col gap-4">
            <div className="mr-3.5 flex items-center gap-[18px] md:mr-0">
                <div className="w-[22%] rounded bg-white-a700_cc">
                    <Img 
                    src={logo}
                    alt="Main Action Image"
                    className="h-[50px] w-full object-cover lg:h-auto md:h-auto "
                    />
                </div>
                <Heading
                   size="text6xl"
                   as='p'
                   className=" text-[34px] font-medium text-[#FFFFFF] lg:text-[20px] md:text-[28px]" 
                >
                    Data Action
                </Heading>
            </div>
            <div className="mr-5 flex flex-col items-start gap-3.5 md:mr-0">
                <Heading
                   size="text3xl"
                   as='p'
                   className="text-[24px] font-normal text-white-a700_e5 lg:text-[20px]"
                >
                    dataaction@gmail.com
                </Heading>
                <Heading
                   size="text3xl"
                   as='p'
                   className="text-[24px] font-normal text-white-a700_e5 lg:text-[20px]"
                >
                    +1 234 567 890
                </Heading>
            </div>
        </div>

        <div className="flex w-[76%] items-center gap-2 lg:w-full md:w-full">
            <Img 
              src={facebook}
              alt="Facebook Image"
              className="h-[34px] w-[34px]"
            />
            <div className="flex  flex-col items-center justify-center py-1">
            <Img 
            src={twitter}
            alt="twitter icon"
            className="h-[24px]"   
            />
            </div>
            <Img 
            src={instagram}
            alt="instagram icon"
            className="h-[34px] w-[34px]"   
            />
            <Img 
            src={tiktok}
            alt="tiktok icon"
            className="h-[26px]"   
            />
            <Img 
            src={linkedin}
            alt="linkedin icon"
            className="h-[26px] w-[26px]"   
            />
        </div>
        </div>

        <div className="flex w-[38%] items-center justify-between gap-5 self-start md:w-full md:self-auto sm:flex-col">
            <div className="flex w-[30%] flex-col items-start justify-between gap-[26px] self-start  sm:w-full">
                <Heading
                   size="headingxs"
                   as='h6'
                   className="text-[16px] font-bold text-white-a700 lg:text-[13px]"
                >
                    Company
                </Heading>
                <ul  className="flex flex-col items-start gap-[22px]">
                   <li>
                        <a href="/" target="_blank" rel="noreferrer" className="lg:text-[14px]" >
                        <Heading
                         as='p'
                         className="text-[17px] font-medium text-white-a700"
                        >
                        Home
                        </Heading>
                        </a>
                    </li>
                   <li>
                        <a href="/"  className="lg:text-[14px]" >
                        <Heading
                         as='p'
                         className="text-[17px] font-medium text-white-a700"
                        >
                        About us
                        </Heading>
                        </a>
                    </li>
                   <li>
                        <a href="/" target="_blank" className="lg:text-[14px]" >
                        <Heading
                         as='p'
                         className="text-[17px] font-medium text-white-a700"
                        >
                          Services
                        </Heading>
                        </a>
                    </li>
                   <li>
                        <a href="/"  className="lg:text-[14px]" >
                        <Heading
                         as='p'
                         className="text-[17px] font-medium text-white-a700"
                        >
                         Blog
                        </Heading>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex w-[40%] flex-col items-start gap-[26px] sm:w-full">
             <Heading
              size="headingxs"
              as='h6'
              className="text-[16px] font-bold text-white-a700 lg:text-[13px]"
             >
              Services
             </Heading>
             <ul className="flex flex-col items-start gap-[22px]">
                <li>
                <a href="/" target="_blank" className="lg:text-[14px]" >
                        <Heading
                         as='p'
                         className="text-[17px] font-medium text-white-a700"
                        >
                          Training
                        </Heading>
                        </a>
                </li>
                <li>
                <a href="/" target="_blank" className="lg:text-[14px]" >
                        <Heading
                         as='p'
                         className="text-[17px] font-medium text-white-a700"
                        >
                          Consultation
                        </Heading>
                        </a>
                </li>
                <li>
                <a href="/" target="_blank" className="lg:text-[14px]" >
                        <Heading
                         as='p'
                         className="text-[17px] font-medium text-white-a700"
                        >
                          Dashboard
                        </Heading>
                        </a>
                </li>
                <li>
                <a href="/" target="_blank" className="lg:text-[14px]" >
                        <Heading
                         as='p'
                         className="text-[17px] font-medium text-white-a700"
                        >
                          Student Portfolio
                        </Heading>
                        </a>
                </li>
             </ul>
            </div>

            <div className="flex  flex-col items-start gap-[26px]">
            <Heading
              size="headingxs"
              as='h6'
              className="text-[16px] font-bold text-white-a700 lg:text-[13px]"
             >
              Discover
             </Heading>
             <ul className="flex flex-col items-start gap-[22px]">
             <li>
                <a href="/" target="_blank" className="lg:text-[14px]" >
                        <Heading
                         as='p'
                         className="text-[17px] font-medium text-white-a700"
                        >
                          Book a consultation
                        </Heading>
                        </a>
                </li>
             <li>
                <a href="/" target="_blank" className="lg:text-[14px]" >
                        <Heading
                         as='p'
                         className="text-[17px] font-medium text-white-a700"
                        >
                          Apply for scholarship
                        </Heading>
                        </a>
                </li>
             <li>
                <a href="/" target="_blank" className="lg:text-[14px]" >
                        <Heading
                         as='p'
                         className="text-[17px] lg:text-[14px] font-medium text-white-a700"
                        >
                          Request a project
                        </Heading>
                        </a>
                </li>
             <li>
                <a href="/" target="_blank" className="lg:text-[14px]" >
                        <Heading
                         as='p'
                         className="text-[17px] lg:text-[14px] font-medium text-white-a700"
                        >
                          Payment
                        </Heading>
                        </a>
                </li>
             </ul>
            </div>
        </div>

        <div className="flex w-[26%] flex-col gap-7 md:w-full">
          <Text 
            as='p'
            className="text-[18px] font-normal leading-[140%] text-[#FFFFFF] lg:text-[15px]"
          >
             By clicking on submit, you have given us the right to send insight and promotional news.
          </Text>
          <div className="flex flex-col items-start gap-10">
            <Input 
              color="[#FFFFFFB2]"
              size="xs"
              name="Email Input"
              placeholder={'Email address'}
              className="self-stretch rounded-lg px-5 text-[#757575] bg-[#FFFFFF]"
            />
            <Button 
               color="blue_700"
               size="md"
               rightIcon={
                <Img 
                   src={arrowRight}
                   alt="arrowRight"
                   className="h-[32px] w-[32px]"
                />
               }
               className="min-w-[276px] gap-[34px] rounded-md px-8 font-satoshi font-black uppercase tracking-[2.67px] sm:px-4 text-[#FFFFFF]"
             >
                Submit
            </Button>
          </div>
        </div>
    </div>

    </div>
    </footer>
    )

} 