import { Heading } from "@components/heading/heading";
import InterviewPrepSection from "@components/interviewprep/interview_prep_section";
import { Text } from "@components/text/text";
import { Suspense } from "react";
import '@styles/tailwind.css';
import '@styles/index.css';
import '@styles/font.css';
import welcome from '../../assets/images/welcome.png';
import dashboard from '../../assets/images/dashboard.png';
import FadeInText from "@utils/fadeintext";


const interviewPreparationList = [
    {
        img: welcome,
        sectionTitle:"Interview Prep",
        descriptionText: "We offer mock interviews tailored to your industry, including both technical and behavioral questions. ",
        comprehensivePracticesText:(
            <>
             Comprehensive Practices
             <br />
             Feedback & Improvements
            </>
        ),
        scenarioQAText:(
            <>
             Scenario Q & A <br />
             Techniques for Success
            </>
        ),
        callToActionText: "Book Consultation Now",
    },
    {
        img:welcome,
        sectionTitle:"CV Building",
        descriptionText: "We tailor your CV to focus on your unique strengths, career objectives and optimize it with keywords to get noticed by recruiters using Application Tracking Systems (ATS) considering visual design and structure.",

        callToActionText: "Book Consultation Now",
    },
    {  
        img:dashboard,
        sectionTitle:"Career Advice",
        descriptionText: "Work with a coach to set career goals, understand industry trends, and create a path to success. We also help you create actionable plans that align with your strengths, market demand, and career aspirations. ",
        
        callToActionText: "Book Consultation Now",
    },
]


export default function CareerDevelopmentSection(){
    return(
        <>
         <div className="mt-[184px] flex flex-col items-center">
            <div className="container-xs flex flex-col gap-20 lg:gap-20 lg:px-5  md:gap-[60px] md:px-5 sm:gap-10">
                <div className="flex flex-col items-center gap-6 px-14 md:px-5 sm:px-4">
                    <Heading
                       size="text8xl"
                       as='h3'
                       className="font-poppins text-[48px] font-medium text-[#230082] lg:text-[40px] md:text-[32px] sm:text-[26px]"
                      >
                         <FadeInText
                          start={30}
                          className="animate-text justify-center text-[#230082]"
                        >
                        NEED ADVICE ON CAREER DEVELOPMENT?
                        </FadeInText>
                    </Heading>
                    <Text
                      as='p'
                      className="w-[943px] text-center font-poppins text-[18px] font-normal leading-[30px] text-black-900 lg:w-full lg:text-[18px] md:w-full lg:w-[880px]"
                     >
                        <FadeInText start={40} className="animate-text justify-center">
                        Prepare for success with personalized mock interviews, tailored CV enhancements, and strategic career guidance to elevate your professional journey.
                        </FadeInText>
                    </Text>
                </div>
                <div className="flex gap-10 md:flex-col">
                    <Suspense fallback={<div> Loading feed...</div>}
                    >
                    {interviewPreparationList.map((d, index) =>(
                        <InterviewPrepSection
                        {...d}
                        key={"interviewList" + index} 
                        />
                        
                        ))}

                    </Suspense>
                </div>
            </div>
         </div>
        </>
    );
}