import{T as h}from"./ToastItem-8a8496d2.js";import{_ as p,r,o as i,c as n,w as f,e as b,a as o,j as e,d as y,k as s,h as l}from"./index-af3e2db4.js";const _="/SideProject-puzzle/assets/coupon-cd0f8ec1.png",w={data(){return{modal:!1,coupon:{},toast:{toastText:"",toastType:!1}}},methods:{},components:{ToastItem:h},mounted(){}},z=y('<div class="modal"><div class="relative max-w-xs md:max-w-sm p-0 modal-box"><div class="text-center rounded-lg shadow dark:bg-gray-700 bg-[#DADADA] px-2"><div class="py-2 lg:px-8"><div class="modal-action"><label for="coupon-modal" class="absolute inline-flex items-center px-2 ml-auto bg-transparent rounded-lg top-4 right-3"><i class="fa-solid fa-xmark"></i></label></div></div><div class="h-[170px] md:h-[200px] bg-no-repeat"><div class="relative"><img src="'+_+'" alt="" class="absolute top-1 left-0"><div class="text-white ml-8 mt-4 z-50 absolute left-0 md:left-1 md:top-2"><div class="flex items-center"><i class="fa-solid fa-gift mr-2"></i><h4>Coupon</h4></div><p class="text-5xl md:text-6xl font-semibold ml-14 mt-3 md:mt-4 md:ml-16">80 <span class="text-4xl">%</span></p></div><p class="z-50 mr-6 text-xl md:text-2xl font-semibold w-[10px] px-9 py-3 absolute md:right-2 md:top-2 right-0">領取優惠</p></div></div></div></div></div>',1);function k(m,c,x,u,a,g){const t=r("ToastItem");return i(),n("div",null,[f(o("input",{type:"checkbox",id:"coupon-modal",class:"modal-toggle","onUpdate:modelValue":c[0]||(c[0]=d=>a.modal=d)},null,512),[[b,a.modal]]),z,e(t,{toast:a.toast},null,8,["toast"])])}const V=p(w,[["render",k]]),j="/SideProject-puzzle/assets/product-banner-b7423f4d.jpg",T={data(){return{puzzleProducts:[],tempPuzzleProduct:{},toast:{viewIsHidden:!1,toastText:"",toastType:!1}}},components:{CouponModalVue:V}},$={class:"about md:py-10 container"},C=o("img",{src:j,alt:"",class:"h-24 w-full object-cover object-center sm:h-auto"},null,-1),P={class:"bg-pink text-white lg:flex justify-between items-center"},D=o("label",{for:"coupon-modal",class:"border bg-white py-2 lg:w-[230px] lg:justify-center px-4 w-full text-black flex items-center lg:rounded-lg hover:bg-secondary lg:hover:outline-white lg:hover:outline lg:ml-4"},[o("i",{class:"fa-solid fa-gift mr-2"}),o("p",{class:""},"領取本日優惠卷")],-1),I={class:"flex justify-around md:w-full md:mr-5 text-center lg:pl-5"};function M(m,c,x,u,a,g){const t=r("RouterLink"),d=r("RouterView"),v=r("CouponModalVue");return i(),n("div",$,[C,o("div",P,[D,o("div",I,[e(t,{to:"/allpuzzle","exact-active-class":"text-primary scale-125 bg-white ",class:"border-r sm:border-0 lg:text-xl hover:bg-gray-100 lg:hover:scale-105 xl:hover:scale-125 duration-300 px-5 py-4 md:py-4 md:px-6 lg:px-10 lg:py-6 hover:text-primary"},{default:s(()=>[l("全部拼圖")]),_:1}),e(t,{to:"/newpuzzle","exact-active-class":"text-primary scale-125 bg-white ",class:"border-r sm:border-0 lg:text-xl hover:bg-gray-100 lg:hover:scale-105 xl:hover:scale-125 duration-300 px-5 py-4 md:py-4 md:px-6 lg:px-10 lg:py-6 hover:text-primary"},{default:s(()=>[l("新品上市")]),_:1}),e(t,{to:"/salepuzzle","exact-active-class":"text-primary scale-125 bg-white ",class:"border-r sm:border-0 lg:text-xl hover:bg-gray-100 lg:hover:scale-105 xl:hover:scale-125 duration-300 px-5 py-4 md:py-4 md:px-6 lg:px-10 lg:py-6 hover:text-primary"},{default:s(()=>[l("精選拼圖")]),_:1}),e(t,{to:"/puzzlepiece","exact-active-class":"text-primary scale-125 bg-white ",class:"border-r sm:border-0 lg:text-xl hover:bg-gray-100 lg:hover:scale-105 xl:hover:scale-125 duration-300 px-5 py-4 md:py-4 md:px-6 lg:px-10 lg:py-6 hover:text-primary"},{default:s(()=>[l("拼圖片數")]),_:1}),e(t,{to:"/onlypuzzle","exact-active-class":"text-primary scale-125 bg-white ",class:"lg:text-xl hover:bg-gray-100 xl:hover:scale-125 lg:hover:scale-105 duration-300 md:py-4 px-5 py-4 md:px-6 lg:px-10 lg:py-6 hover:text-primary"},{default:s(()=>[l("限量拼圖")]),_:1})])]),e(d),e(v)])}const A=p(T,[["render",M]]);export{A as default};