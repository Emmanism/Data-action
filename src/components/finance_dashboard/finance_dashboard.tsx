import React from "react";
import home from '../../assets/images/teenyicons_house-outline.svg';
import { Img } from "@components/img/img";
import { Heading } from "@components/heading/heading";
import { Button } from "@components/button/button";

interface Props {
    className?: string;
    financeTitle?: React.ReactNode;
    amountButoon?: string; 
  }


  export default function FinanceDashboard({financeTitle = "Finance", amountButoon = '2304',...props} : Props){
    return(
        <div 
          {...props}
          className={`${props.className} flex flex-col items-center gap-3 lg:max-h-[132px]`}
          >
            <Img 
              src={home}
            alt="Finance Image"
            className="h-[44px] w-[44px]"
             />
             <Heading 
                size="text3xl"
                as='p'
                className="text-[24.79px] font-medium text-gray-800 text-ellipsis"
              >
            {financeTitle}
            </Heading>
            <Button
               shape="round"
               className="ml-3 mr-3.5 slef-stretch rounded-[12px] px-[18px] font-medium tracking-[0.69]"
              >
                {amountButoon}
            </Button>
        </div>
    );
  }