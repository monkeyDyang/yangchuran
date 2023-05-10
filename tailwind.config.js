/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "emerald",
      "cupcake",
      "bumblebee",
      "corporate",
      "valentine",
      "forest",
      "aqua",
      "cmyk",
      "lemonade",
      "night",
      "winter",
    ],
  },
};
