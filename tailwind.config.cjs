/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      // screens: {
      // //   xs: "480px",
      // //   sm: "640px",
      // //   md: "768px",
      // //   lg: "1024px",
      // //   xl: "1280px",
      // //   "2xl": "1536px",
      // // },
      // 	// sm: { min: '0px', max: '768px' },
      // 	// md: { min: '768px' },
      // 	// lg: { min: '1024px', max: '1919px' },
      // 	// xl: { min: '1920px' },
      // },
      colors:{
        cyaned: {
          50: '#e6fffa',
          100: '#9ae6b4',
          500: '#81e6d9',
          700: '#319795',
          900: '#2c3c3e',
        },
        grayed: {
          50: '#7289da',
          100: '#292d34',
          400: '#424549',
          500: '#36393e',
          700: '#282b30',
          900: '#1e2124',
        }
      }
    },
  },
  plugins: [],
};
