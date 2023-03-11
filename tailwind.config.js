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
        'secondary': '#95DACD', //綠
        'pink': '#FF8888', //粉
        'dark': '333333', //暗黑
      },
      backgroundImage: {
        'puzzle': "url('/src/assets/image/bg.jpg')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
