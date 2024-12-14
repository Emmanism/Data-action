/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:"class",
  theme: {
    screens:{lg:{max : "1440px" }, md:{max : "1050px"},  sm: {max : "550px"}},
    extend: {
      colors: {
        amber:{a200: "var(--amber_a200)"},
        black:{900: "var(--black_900)"},
        blue: {700 : "var(--blue_700)", "700_a2": "var(--blue_700_a2)" ,"700_cc": "var(--blue_700_cc)"},
        blue_gray:{
          100: "var(--blue_gray_100)",
          400: "var(--blue_gray_400)",
          900: "var(--blue_gray_900)",
          "400_01":  "var(--blue_gray_400_01)",
          "900_a5":  "var(--blue_gray_900_a5)",
          "900_e5":  "var(--blue_gray_900_e5)",
      },
      deep_purple:{
        50: 'var(--deep_purple_50)', 
        900: 'var(--deep_purple_900)', 
        
      },
      gray:{
        100: "var(--gray_100)",
        200: "var(--gray_200)",
        400: "var(--gray_400)",
        500: "var(--gray_500)",
        600: "var(--gray_600)",
        700: "var(--gray_700)",
        800: "var(--gray_800)",
        900: "var(--gray_900)",
        "300_99":  "var(--gray_300_99)",
        "700_01":  "var(--gray_700_01)",
        "900_01":  "var(--gray_900_01)",
    },
     indigo:{"900_cc": "var(--indigo_900_cc)"},
     light_blue:{"50_7f": "var(--light_blue_50_7f)"},
     white:{
      a700: "var(--white_a700)",
      a700_4c: "var(--white_a700_4c)",
      a700_66: "var(--white_a700_66)",
      a700_7f: "var(--white_a700_7f)",
      a700_b2: "var(--white_a700_b2)",
      a700_cc: "var(--white_a700_cc)",
      a700_e5: "var(--white_a700_e5)",
    
  },
  boxShadow:{},
  fontFamily:{
    lexend: "Lexend",
    poppins: "Poppins",
    bevietnampro: "Be Vietnam Pro",
    satoshi: "Satoshi",
    inter: "Inter",
  },
      backgroundImage: {
        'gradient-radial': 'linear-gradient(to right, #B6E1EB 20%, #EDE7F4 50%, #B6E1EB 20%)',
      },
      screens: {
        xxs: "448px",
        xs: "540px",
        sm: "640px",
        md: "768px",
        xmd: "820px",
        mlg: "912px",
        lg: "1024px",
        sxl: "73.25rem",
        xl: "1280px", //1280px
        xxl: "96rem", //1536px,
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}}
