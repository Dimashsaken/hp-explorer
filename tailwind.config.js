/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gryffindor: {
          primary: '#740001',
          secondary: '#D3A625',
        },
        slytherin: {
          primary: '#1A472A',
          secondary: '#5D5D5D',
        },
        ravenclaw: {
          primary: '#0E1A40',
          secondary: '#946B2D',
        },
        hufflepuff: {
          primary: '#ECB939',
          secondary: '#000000',
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        fantasy: {
          primary: "#f59e0b",
          secondary: "#4b5563",
          accent: "#1fb2a6",
          neutral: "#111827",
          "base-100": "#1f2937",
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
        },
      },
    ],
  },
}; 