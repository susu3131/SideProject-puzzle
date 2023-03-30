/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,vue}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    //覆蓋原樣式
    container: {
      center: true,
      // screens: {
        
      // },
      //修改padding 
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '2rem',
        xl: '3rem',
        '2xl': '3rem',
      }
    },
    extend: {
      //客製寫在這
      colors: {
        'primary': '#F56257', //橘
        'secondary': '#82D0C1', //綠
        'pink': '#FF8888', //粉
        'dark': '#333333', //暗黑
        'light': '#FFAA4D', //黃
        'light-green': '#37CDBE' //亮綠
      },
      backgroundImage: {
        'puzzle': "url('/src/assets/image/bg.jpg')",
        'banner': "url('/src/assets/image/index/banner.png')",
      }
    },
  },
  plugins: [
    require("daisyui")
  ],

}
