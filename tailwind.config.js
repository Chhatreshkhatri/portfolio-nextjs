/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      transitionDuration: {
        '4000': '4000ms',
      },
      boxShadow: {
        'top': '0px -4px 6px rgba(0, 0, 0, 0.1)', 
        'bottom': '0px 4px 6px rgba(0, 0, 0, 0.1)',
      },
      fontSize: {

        '4xl': '35px',    
        '5xl': '45px',      
        '6xl': '55px',    
      },
      screens: {xxs:'425px', xs:'480px', md: "768px", lg: "1024px", xl: "1200px", xxl: "1400px" },
      colors: {
        dark: "#1c1c1c",
        light: "#E6E6FF",
        primary: "#B63E96",
        primaryDark: "#58E6D9",
        darkCk: "#5740FF",
        lightCk: "#FF4057",
        darker: "#111111",
        darked: "#151515",
        contentBg: "#B3B3FF",
        navbarBg: "#9999FF",
        footerBg: "#FF6B7A",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      dropShadow: {
        "3xl": "0 0 20px #000000",
      },
    },
  },
  variants: {
    extend: {
      // Enable transition utilities
      transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
      transitionDuration: ['responsive', 'motion-safe', 'motion-reduce'],
      transitionTimingFunction: ['responsive', 'motion-safe', 'motion-reduce'],
      transitionDelay: ['responsive', 'motion-safe', 'motion-reduce'],
    },
  },
  plugins: [],
};
