import webDevelopment from '../../assets/images/website.svg';
import appDevelopment from '../../assets/images/app.svg';
import cvBuilding from '../../assets/images/cv_building.svg';
import automatic from '../../assets/images/automatic.svg';
import { Suspense } from 'react';
import WebDevelopmentProfile from '@components/web_development_profile/web_development';
import "@styles/tailwind.css";
import '@styles/index.css';
import '@styles/font.css';
import Animate from '@utils/animate';

const serviceOverviewList = [
    {
      globalImage: webDevelopment,
      websiteTitle: "Website Development",
      descriptionText:
        "Build powerful user-friendly mobile and web apps tailored to your business needs with our expert development services",
      bgColor: "#FFFFFF4D",
    },
    {
      globalImage: automatic,
      websiteTitle: "Process Automation",
      descriptionText:
        "Optimize workflows and boost efficiency with tailored automation solutions that save time and reduce costs.",
      bgColor: "#D6EDFF80", 
    },
    {
      globalImage: cvBuilding,
      websiteTitle: "CV Building & Career Advice",
      descriptionText:
        "Enhance your career with tailored CV building and expert career advice to stand out to employers and achieve your goals.",
      bgColor: "#FFFFFF4D", 
    },
    {
      globalImage: appDevelopment,
      websiteTitle: "App Development",
      descriptionText:
        "Boost your confidence with tailored mock interviews, real-time feedback, and expert strategies for interview success.",
      bgColor: "#D6EDFF80",
    },
  ]


export default function ServiceOverviewSection(){
    return(
        <>
        <div className="container py-20 md:py-12 w-full  lg:w-full">
        <div className='flex md:flex-col w-full lg:w-full'>
            <Suspense fallback={<div>Loading feed</div>}>
            {serviceOverviewList.map((d,index) => (
                <Animate
                key={index}
                >
                <WebDevelopmentProfile 
                  {...d} 
                  key={'listglobeone' + index}
                  className=' w-full lg:w-full'
                />
                 </Animate>
            ))}
            </Suspense>
        </div>
         </div>
        </>
    )
}