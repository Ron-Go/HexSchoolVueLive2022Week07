"use strict";(self["webpackChunkproject2022"]=self["webpackChunkproject2022"]||[]).push([[27],{27:function(a,n,s){s.r(n),s.d(n,{default:function(){return x}});var e=s(252);const t={class:"navbar navbar-expand-lg navbar-light bg-light"},l={class:"container-fluid"},o=(0,e._)("a",{class:"navbar-brand",href:"#"},"ManageSystem",-1),i=(0,e._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,e._)("span",{class:"navbar-toggler-icon"})],-1),c={class:"collapse navbar-collapse",id:"navbarNav"},r={class:"navbar-nav"},v={class:"nav-item"},u=(0,e.Uk)("商品"),d={class:"nav-item"},m=(0,e.Uk)("訂單"),b={class:"nav-item"},h=(0,e.Uk)("優惠券"),p={class:"nav-item"},g=(0,e.Uk)("登出");function k(a,n,s,k,_,f){const w=(0,e.up)("router-link"),x=(0,e.up)("router-view");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e._)("div",null,[(0,e._)("nav",t,[(0,e._)("div",l,[o,i,(0,e._)("div",c,[(0,e._)("ul",r,[(0,e._)("li",v,[(0,e.Wm)(w,{class:"nav-link",to:"/admin/manage"},{default:(0,e.w5)((()=>[u])),_:1})]),(0,e._)("li",d,[(0,e.Wm)(w,{class:"nav-link",to:"/admin/order"},{default:(0,e.w5)((()=>[m])),_:1})]),(0,e._)("li",b,[(0,e.Wm)(w,{class:"nav-link",to:"/admin/coupon"},{default:(0,e.w5)((()=>[h])),_:1})]),(0,e._)("li",p,[(0,e.Wm)(w,{class:"nav-link",to:"/admin/logout"},{default:(0,e.w5)((()=>[g])),_:1})])])])])])]),(0,e.Wm)(x)],64)}var _={created(){this.adminCheck()},methods:{adminCheck(){const a=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.axios.defaults.headers.common.Authorization=a,this.axios.post("https://vue3-course-api.hexschool.io/v2/api/user/check",a).then((()=>{})).catch((a=>{console.dir(a)}))}}},f=s(744);const w=(0,f.Z)(_,[["render",k]]);var x=w}}]);