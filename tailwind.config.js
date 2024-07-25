/** @type {import('tailwindcss').Config} */



export default {
  content: [
    './*.{html,js}',
    './src/pages/**/*.{html,js}',
    './src/pages/medioambiente/**/*.{html,js}',
    './components/**/*.{html,js}'
  ],
  theme: {
    extend: {

      gridTemplateColumns: {
        '1fr-2fr': '1fr 2fr',
      },

      fontFamily: {
        'poppins' : ["Poppins", 'sans-serif']
      },

      colors: {
        'primary-red': '#d04e54',
        'secn-white' : '#f6f6f6',
        'secn-white-200' : '#E7E6E9',
        'black-rb-100' : '#2E434D',
        'black-rb-200' : '#546C76'
      },

    },

  },
  plugins: [
    require('daisyui'),
   
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#d04e54",                 
          "secondary": "#b73e48",                
          "accent": "#f87171",                 
          "neutral": "#212b35",                
          "base-100": "#f9f9f9",              
          "info": "#38bdf8",                
          "success": "#4ade80",             
          "warning": "#c40000",            
          "error": "#ff3779",


          "--rounded-box": "0.2rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.2rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs

        },
      },
      "corporate",
    ],
  },
}


