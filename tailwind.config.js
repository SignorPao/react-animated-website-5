module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Orbitron, sans-serif",
      secondary: "Inter, sans-serif",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "3rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1540px",
    },

    extend: {
      colors: {
        body: "#010208",
        white: "#fff",
        pink: "pink",
        transparent: "transparent",
      },
      boxShadow: {
        primary: "0px 4px 40px rgba(0, 0, 0, 0.03)",
      },
      backgroundImage: {
        videoBg: "url('/src/assets/video-bg.png')",
        circle: "url('/src/assets/circle.png')",
        explore: "url('/src/assets/explore.png')",
      },
    },
  },
  plugins: [],
};
