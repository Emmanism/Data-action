import React from "react";
import Select, { Props } from "react-select";

const shapes = {
    round: "rounded",
} as const;

const variants = {
    fill: {
        white_A700: "bg-white-a700 text-gray-500",
    },
} as const;

const sizes = {
    xs: "h-[68px] px-[22px] text-[18px]",
} as const;

type SelectOptionType = { value: string; label: string };

type SelectProps = Omit<Props, "getOptionLabel"> & {
    className?: string;
    options?: SelectOptionType[];
    isSearchable?: boolean;
    isMulti?: boolean;
    onChange?: (option: any) => void;
    value?: string;
    indicator?: React.ReactElement;
    shape?: keyof typeof shapes;
    variant?: keyof typeof variants;
    size?: keyof typeof sizes;
    color?: keyof (typeof variants)[keyof typeof variants];
};

const SelectBox = React.forwardRef<any, SelectProps>(
    (
        {
            className = "",
            options = [],
            isSearchable = false,
            isMulti = false,
            indicator,
            shape = "round",
            variant = "fill",
            size = "xs",
            color = "white_A700",
            ...restProps
        },
        ref
    ) => {
        // Extract styles safely
        const shapeClass = shapes[shape] || "";
        const sizeClass = sizes[size] || "";
        const variantClass =
            variants[variant]?.[color as keyof (typeof variants)[typeof variant]] || "";

        return (
            <Select
                ref={ref}
                options={options}
                isSearchable={isSearchable}
                isMulti={isMulti}
                className={`${className} flex ${shapeClass} ${sizeClass} ${variantClass}`}
                components={{
                    IndicatorSeparator: () => null,
                    ...(indicator && { DropdownIndicator: () => indicator }),
                }}
                styles={{
                    indicatorsContainer: (provided) => ({
                        ...provided,
                        width: "max-content",
                        "& > div": { padding: 0 },
                    }),
                    container: (provided) => ({
                        ...provided,
                        backgroundColor: "transparent",
                        border: "none",
                        minHeight: "auto",
                        width: "100%",
                        "&:hover": {
                            border: "none",
                        },
                    }),
                    input: (provided) => ({
                        ...provided,
                        color: "inherit",
                    }),
                    option: (provided, state) => ({
                        ...provided,
                        backgroundColor: state.isSelected ? "#1e7bc4" : "transparent",
                        color: state.isSelected ? "#ffffff" : "inherit",
                        "&:hover": {
                            backgroundColor: "#1e7bc4",
                            color: "#ffffff",
                        },
                    }),
                    menuPortal: (base) => ({ ...base, zIndex: 999999 }),
                }}
                menuPortalTarget={document.body}
                {...restProps}
            />
        );
    }
);

export { SelectBox };