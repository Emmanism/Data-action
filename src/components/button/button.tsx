import React from "react";


const shapes = {
    square: "rounded-[0px]",
    round: "rounded-[14px]",
} as const;
const variants = {
    fill:{
        blue_700_cc: 'bg-blue-700_cc text-white-a700',
        white_A700: 'bg-white-a700',
        gray_900_01: 'bg-gray-900_01',
        blue_700: 'bg-blue-700 text-white-a700',
        gray_300_99: 'bg-gray-300_99 text-gray-700'
    },
} as const;
const sizes = {
    lg: 'h-[60px] px-[34px] text-[20px]',
    "3xl": 'h-[70px] px-[34px] text-[24px]',
    "2xl": 'h-[68px] px-[34px] text-[20px]',
    md: 'h-[52px] px-8 text-[18px]',
    xs: 'h-[22px]',
    xl: 'h-[66px] px-5',
    sm: 'h-[26px] px-[18px] text-[12px]',
} as const;

type ButtonProps =
 Omit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
 "onClick"
 > &
 Partial<{
    className: string;
    leftIcon:React.ReactNode;
    rightIcon:React.ReactNode;
    onClick:() => void;
    shape:keyof typeof shapes;
    variant:keyof typeof variants | null;
    size:keyof typeof sizes;
    color:string;
 }>;

 const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variant = "fill",
    size = "sm",
    color = '',
    ...restProps
 }) => {
    return (
        <button className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color as keyof (typeof variants) [typeof variant]]}`}
        {...restProps}
        >
            {!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
    </button>
    );
 };

 export{ Button };