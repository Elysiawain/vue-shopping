"use strict";(self["webpackChunkvue_shopping"]=self["webpackChunkvue_shopping"]||[]).push([[264],{4027:function(t,s,a){a.d(s,{Z:function(){return l}});a(560);var i=function(){var t=this,s=t._self._c;return t.item.goods_id?s("div",{staticClass:"goods-item",on:{click:function(s){return t.$router.push(`/prodetail/${t.item.goods_id}`)}}},[s("div",{staticClass:"left"},[s("img",{attrs:{src:t.item.goods_image,alt:""}})]),s("div",{staticClass:"right"},[s("p",{staticClass:"tit text-ellipsis-2"},[t._v(" "+t._s(t.item.goods_name)+" ")]),s("p",{staticClass:"count"},[t._v("已售 "+t._s(t.item.goods_sales)+" 件")]),s("p",{staticClass:"price"},[s("span",{staticClass:"new"},[t._v("¥"+t._s(t.item.goods_price_min))]),s("span",{staticClass:"old"},[t._v("¥"+t._s(t.item.goods_price_max))])])])]):t._e()},e=[],n={name:"GoodsItem",props:{item:{type:Object,default:()=>({})}}},o=n,r=a(1001),c=(0,r.Z)(o,i,e,!1,null,"3a980804",null),l=c.exports},264:function(t,s,a){a.r(s),a.d(s,{default:function(){return g}});a(560);var i=function(){var t=this,s=t._self._c;return s("div",[s("van-search",{attrs:{"show-action":"",shape:"round",placeholder:"请输入搜索关键词",readonly:"",background:"rgba(255,165,0,0.7)"},on:{click:function(s){return t.$router.push("/search")}},scopedSlots:t._u([{key:"action",fn:function(){return[s("div",{staticClass:"search-button",on:{click:function(s){return t.$router.push("/search")}}},[t._v("搜索")])]},proxy:!0}]),model:{value:t.value,callback:function(s){t.value=s},expression:"value"}}),s("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},t._l(t.bannerList,(function(t){return s("van-swipe-item",{key:t.imgUrl},[s("img",{attrs:{src:t.imgUrl,alt:""}})])})),1),s("van-grid",{attrs:{"column-num":"5","icon-size":"40"}},t._l(t.navList,(function(a){return s("van-grid-item",{key:a.imgUrl,attrs:{icon:a.imgUrl,text:"新品首发"},on:{click:function(s){return t.$router.push("/category")}}})})),1),t._m(0),s("div",{staticClass:"guess"},[s("p",{staticClass:"guess-title"},[t._v("—— 猜你喜欢 ——")]),s("div",{staticClass:"goods-list"},t._l(t.proList,(function(t){return s("GoodsItem",{key:t.goods_id,attrs:{item:t}})})),1)])],1)},e=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"main"},[s("img",{attrs:{src:a(763),alt:""}})])}],n=a(4471),o=a(1076),r=a(6369);r.ZP.prototype.axios=o.Z;const c=()=>n.Z.get("/page/detail",{params:{pageId:0}});var l=a(4027),u={name:"HomePage",data(){return{value:"",bannerList:[],navList:[],proList:[]}},async created(){const{data:{pageData:t}}=await c();this.bannerList=t.items[1].data,this.navList=t.items[3].data,this.proList=t.items[6].data},components:{GoodsItem:l.Z},methods:{}},d=u,p=a(1001),m=(0,p.Z)(d,i,e,!1,null,"4dfc9e42",null),g=m.exports},763:function(t,s,a){t.exports=a.p+"img/main.95d4fe07.png"}}]);
//# sourceMappingURL=264.24343c65.js.map