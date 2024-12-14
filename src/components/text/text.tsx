import React from "react";


const sizes = {
    textmd : "text-[18px] font-normal not-italic lg:text-[15px]",
    text5xl : "text-[32px] font-normal not-italic lg:text-[27px] md:text-[30px] sm:text-[28px]",
    text7xl : "text-[40px] font-normal not-italic lg:text-[34px] md:text-[38px] sm:text-[36px]",
    text9xl : "text-[66px] font-normal not-italic lg:text-[66px] md:text-[48px]",
};

export type TextProps = Partial<{
    className: string;
    as: any;
    size:keyof typeof sizes;
}> & 
React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
    children,
    className = '',
    as,
    size = 'textmd',
    ...restProps 
}) => {
    const Component = as || "p";
    return(
        <Component className={` font-lexend ${className} ${sizes[size]}`}{...restProps}>
            {children}
        </Component>
    )
}

export { Text };