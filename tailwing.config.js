// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary-color)"
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"]
      }
    },
    screens: {
      xs: "0px",

      sm: "576px",
      // => @media (min-width: 320px) { ... }

      md: "768px",
      // => @media (min-width: 425px) { ... }

      lg: "992px",
      // => @media (min-width: 768px) { ... }

      xl: "1200px",
      // => @media (min-width: 1024px) { ... }

      xxl: "1440px"
    }
  }
};
