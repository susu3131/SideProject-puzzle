# 筆記

## 套件安裝

vee-validate
- npm install vee-validate --save  
- npm install @vee-validate/rules 
- npm install @vee-validate/i18n

tailwind 
- npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
- npx tailwindcss init -p
- 在tailwind.config 加上 content:"./src/**/*.{html,js,vue}"


Vscode 套件衝突 
當使用vetur 與 tailwind 提示套件時會無法顯示class
解決: 在class 輸入無法顯示時加個空白即可正常顯示