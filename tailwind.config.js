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
        'hover-icon': "url('/src/assets/image/puzzle.png')",
        'banner-1': "url('/src/assets/image/index/banner6.jpg')",
        'banner-2': "url('/src/assets/image/index/banner7.jpg')",
        'banner-3': "url('/src/assets/image/index/banner8.jpg')",
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#ffffff',
          info:'#F56257',
          'primary-content': '#F56257',
          'base-100': '#F5F5F5',
        },
      },
    ],
  },
}
