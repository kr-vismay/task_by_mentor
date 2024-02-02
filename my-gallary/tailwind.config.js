/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      screens: {
        'sm': {'min':'300px','max':'600px'},     
        'md': {'min':'601px','max':'1000px'},     
        'lg': '1000px',    
        'xl': '1280px',    
        '2xl': '1536px',   
        
      },
    },
  },
  plugins: [],
}

