"use strict";(self["webpackChunkosboha180"]=self["webpackChunkosboha180"]||[]).push([[4804],{74804:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var r=n(66252),o=n(68124),i={class:"col-sm-12 mt-3"},a={class:"iq-card-body p-0"},s=(0,r._)("div",{class:"image-block text-center mt-3"},[(0,r._)("img",{src:o,class:"img-fluid rounded w-25",alt:"blog-img"})],-1),c=(0,r._)("h2",{class:"text-center mt-3"},"تطبيق مصغر بانتظارك ",-1),u=(0,r._)("h4",{class:"text-center"}," بإمكانك الان تحميل تطبيق (توثيق القراءة مع أصبوحة 180) على هاتفك المحمول لتكون تجربتك في استخدامه دائما سهلة وميسرة ",-1),d={class:"w-100 text-center row"},l={class:"col-6"},m={class:"col-6"};function p(e,t,n,o,p,f){var h=(0,r.up)("iq-card");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r.Wm)(h,{class:"iq-card"},{default:(0,r.w5)((function(){return[(0,r._)("div",a,[s,c,u,(0,r._)("div",d,[(0,r._)("div",l,[(0,r._)("a",{class:"btn d-block btn-primary mt-3 mb-3 w-100 mx-auto",onClick:t[0]||(t[0]=function(e){return f.install()})}," تحميل ")]),(0,r._)("div",m,[(0,r._)("a",{class:"btn d-block btn-light mt-3 mb-3 w-100 mx-auto",onClick:t[1]||(t[1]=function(e){return f.dismiss()})}," لاحقًا ")])])])]})),_:1})])}var f=n(50124),h=n(48534),g=n(22665);const _={name:"InstallAlert",setup:function(){var e=(0,g.fP)(),t=e.cookies;return{cookies:t}},data:function(){return{deferredPrompt:null}},created:function(){var e=this;window.addEventListener("beforeinstallprompt",(function(t){t.preventDefault(),"later"!=e.cookies.get("add-to-home-screen")&&(e.deferredPrompt=t)})),window.addEventListener("appinstalled",(function(){e.deferredPrompt=null,console.log("installed"),e.$router.push({name:"social.book"})}))},methods:{dismiss:function(){var e=this;return(0,h.Z)((0,f.Z)().mark((function t(){return(0,f.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.cookies.set("add-to-home-screen","later",{expires:15}),e.$router.push({name:"social.book"});case 2:case"end":return t.stop()}}),t)})))()},install:function(){var e=this;return(0,h.Z)((0,f.Z)().mark((function t(){return(0,f.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.deferredPrompt.prompt(),console.log("installed");case 2:case"end":return t.stop()}}),t)})))()}}};var k=n(83744);const x=(0,k.Z)(_,[["render",p]]),b=x},22665:(e,t,n)=>{n.d(t,{fP:()=>s});var r=n(2262),o={expireTimes:"1d",path:"; path=/",domain:"",secure:!1,sameSite:"; SameSite=Lax"},i=function(){function e(){this.current_default_config=o}return e.prototype.config=function(e){for(var t in this.current_default_config)this.current_default_config[t]=e[t]?e[t]:o[t]},e.prototype.get=function(e){var t=decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null;if(t&&"{"===t.substring(0,1)&&"}"===t.substring(t.length-1,t.length))try{t=JSON.parse(t)}catch(n){return t}return t},e.prototype.set=function(e,t,n,r,o,i,a){if(!e)throw new Error("Cookie name is not found in the first argument.");if(/^(?:expires|max-age|path|domain|secure|SameSite)$/i.test(e))throw new Error('Cookie name illegality. Cannot be set to ["expires","max-age","path","domain","secure","SameSite"]\t current key name: '+e);t&&t.constructor===Object&&(t=JSON.stringify(t));var s="";if(void 0==n&&(n=this.current_default_config.expireTimes?this.current_default_config.expireTimes:""),n&&0!=n)switch(n.constructor){case Number:s=n===1/0||-1===n?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+n;break;case String:if(/^(?:\d+(y|m|d|h|min|s))$/i.test(n)){var c=n.replace(/^(\d+)(?:y|m|d|h|min|s)$/i,"$1");switch(n.replace(/^(?:\d+)(y|m|d|h|min|s)$/i,"$1").toLowerCase()){case"m":s="; max-age="+2592e3*+c;break;case"d":s="; max-age="+86400*+c;break;case"h":s="; max-age="+3600*+c;break;case"min":s="; max-age="+60*+c;break;case"s":s="; max-age="+c;break;case"y":s="; max-age="+31104e3*+c;break;default:new Error('unknown exception of "set operation"')}}else s="; expires="+n;break;case Date:s="; expires="+n.toUTCString();break}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+s+(o?"; domain="+o:this.current_default_config.domain?this.current_default_config.domain:"")+(r?"; path="+r:this.current_default_config.path?this.current_default_config.path:"; path=/")+(void 0==i?this.current_default_config.secure?"; Secure":"":i?"; Secure":"")+(void 0==a?this.current_default_config.sameSite?"; SameSute="+this.current_default_config.sameSite:"":a?"; SameSite="+a:""),this},e.prototype.remove=function(e,t,n){return!(!e||!this.isKey(e))&&(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(n?"; domain="+n:this.current_default_config.domain?this.current_default_config.domain:"")+(t?"; path="+t:this.current_default_config.path?this.current_default_config.path:"; path=/")+"; SameSite=Lax",!0)},e.prototype.isKey=function(e){return new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie)},e.prototype.keys=function(){if(!document.cookie)return[];for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),t=0;t<e.length;t++)e[t]=decodeURIComponent(e[t]);return e},e}(),a=null;function s(){null==a&&(a=new i);var e=(0,r.qj)(a);return{cookies:e}}},68124:(e,t,n)=>{e.exports=n.p+"img/install-app.d722432e.png"}}]);
//# sourceMappingURL=4804.45e8949c.js.map