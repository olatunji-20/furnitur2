import{_ as m,o as d,c as i,b as l,w,v as p,a as t,t as a,y as f,T as y,q as v,A as g,x as S,p as P,e as N}from"./entry.25559c4a.js";import{u as C}from"./ProductsStore.b5606713.js";import{S as k}from"./star-rating.92b647f6.js";const I={props:{showPop:Boolean,productName:String,number:Number}},T={class:"w-[90%] h-[4.375rem] absolute mx-[auto] z-20"},j={class:"border-2 border-gray-300 rounded-sm bg-gray-100 text-center py-8 w-[60%] h-[auto] mx-[auto]"},B={class:"font-bold"};function A(r,o,e,u,s,n){return d(),i("div",null,[l(y,{name:"popup"},{default:w(()=>[p(t("div",T,[t("div",j,[t("h1",B,a(e.number)+" "+a(e.productName)+" has been added to your cart ",1)])],512),[[f,e.showPop]])]),_:1})])}const O=m(I,[["render",A]]),V={setup(){return{productsStore:C()}},props:{number:Number,product:Object},methods:{display(){this.$emit("show-pop")}}};function D(r,o,e,u,s,n){return d(),i("div",null,[t("button",{class:"bg-green-600 w-[100%] py-3 text-white my-0",onClick:o[0]||(o[0]=_=>(u.productsStore.addToCart({product:e.product,number:e.number}),n.display()))}," Add To Cart ")])}const E=m(V,[["render",D]]);const q={data(){return{number:1,starStyle:{fullStarColor:"#ed8a19",emptyStarColor:"#737373",starWidth:15,starHeight:15},showPop:!1}},props:{product:Object},components:{StarRating:k},methods:{increment(){this.number++},decrement(){this.number--},showIt(){this.showPop=!0,setTimeout(()=>{this.showPop=!1},4e3)}},watch:{number(r){r<=0&&(this.number=1)}}},h=r=>(P("data-v-c8fa5a87"),r=r(),N(),r),z={class:"w-[100%] h-[auto] flex flex-wrap justify-around"},H={class:"w-[50%] h-[34.375rem] text-center"},L={class:"border-4 w-[25rem] h-[28.125rem] mx-[auto] my-12 duration-150 hover:shadow-lg hover:scale-105"},M=["src","alt"],R={class:"w-[50%] h-[34.375rem] py-28 px-12"},U={class:"font-bold text-2xl mb-6"},W={class:"w-[8.125rem] h-[1.5625rem] inline-block"},F=h(()=>t("div",{class:"bg-red-600 text-center w-[5.625rem] py-[0.25rem] inline-block ml-8 rounded-sm"},[t("p",{class:"text-white"},"ON SALE")],-1)),G=h(()=>t("p",{class:"my-4"},"261 products sold . 3.1k products watched",-1)),J={class:"my-12 w-[12.5rem] h-[3.125rem] bg-gray-100 flex justify-around rounded-md"},K=["placeholder"],Q={class:"font-bold text-4xl text-red-600"},X={class:"w-[70%] h-[3.125rem] mt-8 mx-[auto]"};function Y(r,o,e,u,s,n){const _=O,b=v("star-rating"),x=E;return d(),i("div",z,[l(_,{showPop:s.showPop,productName:e.product.productName,number:s.number},null,8,["showPop","productName","number"]),t("div",H,[t("div",L,[t("img",{class:"w-[100%] h-[100%] object-cover",src:e.product.productImage,alt:e.product.productName},null,8,M)])]),t("div",R,[t("h1",U,a(e.product.productName),1),t("div",W,[(d(),g(b,{rating:e.product.review,key:e.product.id,"star-style":s.starStyle},null,8,["rating","star-style"]))]),F,G,t("div",J,[t("span",{class:"text-2xl font-bold my-1 mx-4 cursor-pointer",onClick:o[0]||(o[0]=(...c)=>n.decrement&&n.decrement(...c))},"-"),p(t("input",{"onUpdate:modelValue":o[1]||(o[1]=c=>s.number=c),class:"inputer w-[3.125rem] font-bold bg-gray-100 text-xl text-center",type:"number",placeholder:s.number},null,8,K),[[S,s.number]]),t("span",{class:"text-2xl font-bold my-1 mx-4 cursor-pointer",onClick:o[2]||(o[2]=(...c)=>n.increment&&n.increment(...c))},"+")]),t("h1",Q," $"+a(e.product.productPrice),1),t("div",X,[l(x,{number:s.number,product:e.product,onShowPop:n.showIt},null,8,["number","product","onShowPop"])])])])}const et=m(q,[["render",Y],["__scopeId","data-v-c8fa5a87"]]);export{et as _};