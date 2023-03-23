/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,vue}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
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
