module.exports = {
  content: [
    "./src/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screen: {
      xs: "300px",
      sm: "428px",
      md: "640px",
      lg: "768px",
      xl: "976px",
    },
    fontFamily: {
      sans: ["Roboto"],
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("flowbite/plugin"),
  ],
};
