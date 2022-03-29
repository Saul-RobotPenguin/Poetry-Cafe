module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        LightTheme: {
          primary: "#F9CF93",
          secondary: "#FAEEE0",
          accent: "#F9E4C8",
          neutral: "#F9CF93",
          "base-100": "#e6ccb2",
        },
        DarkTheme: {
          primary: "#774936",
          secondary: "#6E4230",
          accent: "#653A2A",
          neutral: "#5C3324",
          "base-100": "#653A2A",
        },
      },
    ],
  },
};
