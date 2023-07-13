import{_ as T,m as l,r as g,o as s,c as i,a as c,F as x,f,j as y,t as d}from"./index-af3e2db4.js";import{T as P}from"./ToastItem-8a8496d2.js";import{_ as k}from"./load-2b50a5d8.js";const{VITE_APP_API:u,VITE_APP_APIPATH:_}={VITE_APP_API:"https://vue3-course-api.hexschool.io/v2",VITE_APP_APIPATH:"susu3131",BASE_URL:"/SideProject-puzzle/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},v={data(){return{collection:[],collectionType:{},puzzleProducts:[],tempPuzzleProduct:{},page:{},toast:{viewIsHidden:!1,toastText:"",toastType:!1}}},methods:{addCart(t,e,p=1){this.$http.post(`${u}/api/${_}/cart`,{data:{product_id:t,qty:p}}).then(n=>{this.toast.toastText=`加入${e}成功`,this.toast.toastType=!0,setTimeout(()=>{this.toast.toastType=!1},1200)}).catch(n=>console.log(n.response.data.message))},getPuzzleProduct(t=1){this.$http.get(`${u}/api/${_}/products?page=${t}&category=精選拼圖`).then(e=>{console.log(e.data.products),this.puzzleProducts=e.data.products,this.page=e.data.pagination}).catch(e=>console.log(e.response.data.message))},addCollection(t){this.collectionType[t]==!0?(this.collection=this.collection.filter(function(e){return e!==t}),this.collectionType[t]=!1,l.set("collection",this.collection,{expires:365}),this.toast.toastText="刪除收藏",this.toast.toastType=!0,setTimeout(()=>{this.toast.toastType=!1},1200)):(this.collectionType[t]=!0,this.collection.push(t),l.set("collection",this.collection,{expires:365}),l.set("collectionType",JSON.stringify(this.collectionType),{expires:365}),this.toast.toastText="加入收藏",this.toast.toastType=!0,setTimeout(()=>{this.toast.toastType=!1},1200))}},components:{ToastItem:P},mounted(){this.getPuzzleProduct(),l.get("collection")!=null&&(this.collectionType=JSON.parse(l.get("collectionType")),this.collection=l.get("collection").split(","))}},C={class:"py-10"},I={key:0},A=c("img",{src:k,class:"mx-auto mt-20",alt:"",width:"170"},null,-1),b=[A],$={key:1},E={class:"grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6 mt-5 mb-10"},S={class:"relative"},V=["src"],w=["onClick"],N=["onClick"],B={class:"mt-2 md:text-lg xl:text-xl"},D={class:"md:text-xl text-pink font-medium"},O=["onClick"];function j(t,e,p,n,a,r){const m=g("ToastItem");return s(),i("div",C,[a.puzzleProducts==""?(s(),i("div",I,b)):(s(),i("div",$,[c("ul",E,[(s(!0),i(x,null,f(a.puzzleProducts,o=>(s(),i("li",{key:o.id,class:"text-center mb-5"},[c("div",S,[c("img",{src:o.imageUrl,alt:"",class:"rounded-md object-cover mx-auto w-full h-[200px]"},null,8,V),a.collectionType[o.id]!==!0?(s(),i("i",{key:0,class:"fa-regular text-[28px] fa-bookmark absolute right-4 top-4 text-white",onClick:h=>r.addCollection(o.id)},null,8,w)):(s(),i("i",{key:1,class:"fa-solid fa-bookmark text-[28px] absolute right-4 top-4 text-primary",onClick:h=>r.addCollection(o.id)},null,8,N))]),c("h3",B,d(o.title),1),c("p",D,"售價 : NT $ "+d(o.price)+" / "+d(o.unit),1),c("button",{class:"px-9 py-1 mt-2 text-white rounded-md bg-primary duration-300 hover:scale-110",onClick:h=>r.addCart(o.id,o.title)},"加入購物車",8,O)]))),128))])])),y(m,{toast:a.toast},null,8,["toast"])])}const J=T(v,[["render",j]]);export{J as default};
