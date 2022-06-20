module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        increaseOpacity: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        increaseOpacityScale: {
          "0%": {
            transform: 'scale(0.7)',
            opacity: '0',
          },
          "100%": {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
      },
      animation: {
        slowShow: "increaseOpacity 1s ease-in-out",
        scaleShow : "increaseOpacityScale 1s ease-in-out"
      },
      width: {
        45: "45%",
        22.5: "22.5%",
      },
      screens: {
        nokia: { max: "639px" },
        iphone: { max: "767px" },
        fablet: { min: "768px", max: "991px" },
        tablet: { max: "991px" },
        makbook: { min: "992px" },
        tablap: { min: "992px", max: "1198px" },
        laptop: { max: "1199px" },
        LED: { min: "767px", max: "1199px" },
        LCD: { min: "1200px", max: "1400px" },
      },
      colors: {
        "c-1": "#0000223b",
        "c-2-green": "#607027",
        "#eee": "#eee",
      },
      backgroundImage: {
        signup: "url('/images/backgroundsignup.jpg')",
      },
      spacing: {
        "200px": "200px",
        "85px": "85px",
        "180px": "180px",
        "68px": "68px",
        "40px": "40px",
        "400px": "400px",
        "325px": "325px",
        "10px": "10px",
        "70px": "70px",
        "5px": "5px",
        // '60px': '60px',

        1.33: "1.33",
      },
    },
  },
  plugins: [],
};
