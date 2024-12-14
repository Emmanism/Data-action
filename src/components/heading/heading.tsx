import React from "react";



const sizes = {
    headingxs : "text-[18px] font-semibold  lg:text-[15px]",
    textxs : "text-[14px] ",
    texts : "text-[17px] lg:text-[14px]",
    textlg : "text-[21px]  lg:text-[17px]",
    textxl : "text-[22px] not-italic lg:text-[18px]",
    text2xl : "text-[23px]  not-italic lg:text-[19px] md:text-[21px]",
    text3xl : "text-[24px] not-italic lg:text-[20px] md:text-[22px]",
    text4xl : "text-[30px]  not-italic lg:text-[25px] md:text-[28px] sm:text-[26px]",
    text6xl : "text-[34px]  not-italic lg:text-[28px] md:text-[32px] sm:text-[30px]",
    text8xl : "text-[48px]  not-italic lg:text-[40px] md:text-[44px] sm:text-[38px]",
    headings : "text-[24px]  lg:text-[20px] md:text-[22px]",
    headingmd : "text-[48px]   lg:text-[40px] md:text-[44px] sm:text-[38px]",
};

export type HeadingProps = Partial<{
    className: string;
    as: any;
    size:keyof typeof sizes;
}> & 
React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
    children,
    className = '',
    as,
    size = 'texts',
    ...restProps 
}) => {
    const Component = as || "h6";
    return(
        <Component className={` font-lexend ${className} ${sizes[size]}`}{...restProps}>
            {children}
        </Component>
    )
}

export { Heading };