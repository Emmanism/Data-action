import React from "react";


const variants = {
    fill:{
        white_A700: 'bg-white-a700, text-gray-500',
        white_A700_b2: 'bg-white-a700, text-gray-600',
    },
} as const;
const sizes = {
    sm: 'h-[68px] px-3.5 text-[18px]',
    xs: 'h-[58px] px-5 text-[20px]',
   
} as const;

const shapes = {
    round: "rounded",
} as const;

type InputProps =
 Omit<React.ComponentPropsWithoutRef<"input"> ,"prefix" | "size"> &
 
 Partial<{
    label: string;
    prefix:React.ReactNode;
    suffix:React.ReactNode;
    shape:keyof typeof shapes;
    variant:keyof typeof variants | null;
    size:keyof typeof sizes;
    color:string;
 }>;

 const Input = React.forwardRef< HTMLInputElement, InputProps>(({
    className = "",
    name = "",
    label = "",
    placeholder = "",
    shape,
    type = "text",
    prefix,
    suffix,
    onChange,
    variant = "fill",
    size = "sm",
    color = 'white_A700',
    ...restProps
 },
ref,
) => {
    return (
        <label className={`${className} flex  items-center justify-center cursor-text whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color as keyof (typeof variants) [typeof variant]] || variants["fill"]}`}
        >
            {!!label && label}
            {!!prefix && prefix}
            <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
            {!!suffix && suffix}
    </label>
    );
 }
);

 export{ Input };