"use strict";(self["webpackChunkosboha180"]=self["webpackChunkosboha180"]||[]).push([[6296],{91039:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(50124),a=n(48534),i=n(62760),o=n(57333);const s={getByStatus:function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.h.get("general-informations/status/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data.data);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),getByUserBook:function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.h.get("general-informations/user_book_id/".concat(e));case 2:return n=t.sent,n.data,t.abrupt("return",n.data.data);case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),getByBook:function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.h.get("general-informations/book/".concat(e));case 2:return n=t.sent,n.data,t.abrupt("return",n.data.data);case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),addDegree:function(t,e,n){var r=i.h.patch("/general-informations/add-degree/".concat(t),{auditor_id:o.Z.getUser().id,reviews:e,degree:n});return r},getGeneralInformations:function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.h.get("general-informations/user_book_id/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data.data);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),addGeneralInformations:function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.h.post("general-informations/",e);case 2:return n=t.sent,t.abrupt("return",n.data.data);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),updateGeneralInformations:function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e,n){var a;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.h.patch("general-informations/".concat(n),e);case 2:return a=t.sent,t.abrupt("return",a.data.data);case 4:case"end":return t.stop()}}),t)})));function e(e,n){return t.apply(this,arguments)}return e}(),acceptGeneralInformations:function(t){var e=i.h.post("/general-informations/review",{id:t,status:"audit",reviewer_id:o.Z.getUser().id});return e},rejectRetardGeneralInformations:function(t,e,n){var r=i.h.post("/general-informations/review",{id:t,status:n,reviewer_id:o.Z.getUser().id,reviews:e});return r},deleteGeneralInformation:function(t){var e=i.h["delete"]("/general-informations/".concat(t));return e},reviewGeneralInformation:function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.h.patch("/general-informations/review-general-informations/".concat(e))["catch"]((function(t){})).then((function(t){return t}));case 2:t.sent;case 3:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),getById:function(){var t=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.h.get("general-informations/".concat(e));case 2:return n=t.sent,n.data,t.abrupt("return",n.data.data);case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}},16296:(t,e,n)=>{n.r(e),n.d(e,{default:()=>K});n(68309);var r=n(66252),a=n(3577),i=n(97573),o={class:"row"},s={class:"col-sm-12"},u={class:"card position-relative inner-page-bg bg-primary",style:{height:"150px"}},c={class:"inner-page-title"},l=(0,r._)("h3",{class:"text-white"},"مراجعة التخليص والسؤال العام",-1),d={class:"text-white"},f={key:0,class:"col-sm-12"},p=(0,r._)("div",{class:"iq-card-body p-0"},[(0,r._)("div",{class:"image-block text-center"},[(0,r._)("img",{src:i,class:"img-fluid rounded w-50",alt:"blog-img"})]),(0,r._)("h4",{class:"text-center mt-3 mb-3"},"لا يوجد تلخيصات")],-1),h={key:1,class:"col-12"},m=(0,r._)("h4",{class:"card-title"},"تلخيصات عامة بحاجة للمراجعة",-1),w={class:"table-responsive"},v={id:"datatable",class:"table table-striped table-bordered"},g=(0,r._)("thead",{class:"col-12"},[(0,r._)("tr",null,[(0,r._)("th",null,"رقم التوثيق"),(0,r._)("th",null,"اسم السفير"),(0,r._)("th",null,"اسم الكتاب"),(0,r._)("th",null,"عدد التلخيصات")])],-1),_={class:"btn-primary text-white bg-primary"},b=["onClick"],k=(0,r._)("td",null," 1 ",-1),Z={key:2,class:"col-sm-12"},x=(0,r._)("h4",{class:"card-title"},"تلخيصات عامة بحاجة للتدقيق",-1),y={class:"table-responsive"},I={id:"datatable",class:"table table-striped table-bordered"},T=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",null,"رقم التوثيق"),(0,r._)("th",null,"اسم السفير"),(0,r._)("th",null,"اسم الكتاب"),(0,r._)("th",null,"عدد التلخيصات")])],-1),R={class:"btn-primary text-white bg-primary"},G=["onClick"],D=(0,r._)("td",null," 1 ",-1);function q(t,e,n,i,q,B){var C=(0,r.up)("iq-card");return(0,r.wg)(),(0,r.iD)("div",o,[(0,r._)("div",s,[(0,r._)("div",u,[(0,r._)("div",c,[l,(0,r._)("p",d,"تبقى "+(0,a.zw)(B.totalInfo),1)])])]),0==q.informationsToAudit.length&&0==q.informationsToReview.length?((0,r.wg)(),(0,r.iD)("div",f,[(0,r.Wm)(C,{class:"iq-card"},{default:(0,r.w5)((function(){return[p]})),_:1})])):(0,r.kq)("",!0),q.informationsToReview.length>0?((0,r.wg)(),(0,r.iD)("div",h,[(0,r.Wm)(C,null,{headerTitle:(0,r.w5)((function(){return[m]})),body:(0,r.w5)((function(){return[(0,r._)("div",w,[(0,r._)("table",v,[g,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(q.informationsToReview,(function(t){return(0,r.wg)(),(0,r.iD)("tr",{key:t.id},[(0,r._)("td",_,(0,a.zw)(t.user_book.id),1),(0,r._)("td",null,[(0,r._)("a",{href:"javascript:void(0);",onClick:function(e){return B.listGeneralInformations(t.user_book.id)}},(0,a.zw)(t.user_book.user.name),9,b)]),(0,r._)("td",null,(0,a.zw)(t.user_book.book.book_name),1),k])})),128))])])])]})),_:1})])):(0,r.kq)("",!0),q.informationsToAudit.length>0?((0,r.wg)(),(0,r.iD)("div",Z,[(0,r.Wm)(C,null,{headerTitle:(0,r.w5)((function(){return[x]})),body:(0,r.w5)((function(){return[(0,r._)("div",y,[(0,r._)("table",I,[T,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(q.informationsToAudit,(function(t){return(0,r.wg)(),(0,r.iD)("tr",{key:t.id},[(0,r._)("td",R,(0,a.zw)(t.user_book.id),1),(0,r._)("td",null,[(0,r._)("a",{href:"javascript:void(0);",onClick:function(e){return B.listGeneralInformations(t.user_book.id)}}," *************** ",8,G)]),(0,r._)("td",null,(0,a.zw)(t.user_book.book.book_name),1),D])})),128))])])])]})),_:1})])):(0,r.kq)("",!0)])}var B=n(50124),C=n(48534),z=n(7701),A=n(91039),U=n(57333);const j={components:{iqCard:z.Z},name:"informations",created:function(){var t=this;return(0,C.Z)((0,B.Z)().mark((function e(){return(0,B.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("reviewer"!==U.Z.getRole()[0]&&"admin"!==U.Z.getRole()[0]){e.next=5;break}return t.status="review",e.next=4,t.generalInformations(t.status);case 4:t.informationsToReview=e.sent;case 5:if("auditor"!==U.Z.getRole()[0]&&"admin"!==U.Z.getRole()[0]){e.next=10;break}return t.status="audit",e.next=9,t.generalInformations(t.status);case 9:t.informationsToAudit=e.sent;case 10:case"end":return e.stop()}}),e)})))()},data:function(){return{status:"",informationsToReview:[],informationsToAudit:[]}},methods:{generalInformations:function(t){return(0,C.Z)((0,B.Z)().mark((function e(){return(0,B.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A.Z.getByStatus(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},listGeneralInformations:function(t){this.$router.push({name:"general.general_informations",params:{user_book_id:t}})}},computed:{totalInfo:function(){return this.informationsToAudit.length+this.informationsToReview.length}}};var W=n(83744);const H=(0,W.Z)(j,[["render",q]]),K=H},97573:(t,e,n)=>{t.exports=n.p+"img/export-congrats.05e72d52.png"}}]);
//# sourceMappingURL=6296.48a61815.js.map