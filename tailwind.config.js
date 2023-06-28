/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      normalWhite:'#FFFFFF',
      footer:{
        100:"#2A1332",
        200:'#220F28'
      },
      black:'black',
      circle:{
        1:'#4A3F81',
        2:'#56D274'
      },
      contact:{
        bg:'#F9F9F9'
      },
      dark:'#000000',
      btnColor:'#F97C5F',
      lightSky:' #F7F8FC',
      lightBlue:'#5360E2',
      purpul:"#952AFF"
    },
    extend: {
      backgroundImage: {
        'contact':'linear-gradient(90deg, #EAA60E 0%, #EF4444 50.85%, #EF4444 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
