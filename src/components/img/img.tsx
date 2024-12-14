import React from "react";

 type ImgProps = 
 Partial<{
    className: string;
    src: string;
    alt:string;
}> & 
React.DetailedHTMLProps<React.HTMLAttributes<HTMLImageElement>, HTMLImageElement>;

const Img: React.FC<React.PropsWithChildren<ImgProps>> = ({
    className,
    src = "defaultNoData.png",
    alt = 'testImg',
    ...restProps 
}) => {
    return <img className={className} src={src}  alt={alt} {...restProps} loading={'lazy'} />;
}

export { Img };