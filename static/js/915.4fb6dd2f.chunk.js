"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[915],{886:function(e,r,t){t.d(r,{Mc:function(){return p},Pv:function(){return d},wr:function(){return i},xo:function(){return _},y:function(){return h}});var n=t(5861),a=t(7757),c=t.n(a),u=t(2388),s=t(8022);function i(){return o.apply(this,arguments)}function o(){return o=(0,n.Z)(c().mark((function e(){var r,t,n,a,i=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>0&&void 0!==i[0]?i[0]:1,t=s.jk.BASE_URL+s.jk.TRENDINGS_PATH_URL,n={params:{api_key:s.$h,page:r}},e.prev=2,e.next=5,u.Z.get(t,n);case 5:return a=e.sent,e.abrupt("return",a.data);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])}))),o.apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(c().mark((function e(r){var t,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.jk.BASE_URL+s.jk.GET_MOVIE_DETAILS_PATH_URL+r,n={params:{api_key:s.$h}},e.prev=1,e.next=4,u.Z.get(t,n);case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function h(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(c().mark((function e(r){var t,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(s.jk.BASE_URL,"movie/").concat(r,"/credits"),n={params:{api_key:s.$h}},e.prev=1,e.next=4,u.Z.get(t,n);case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function _(e){return v.apply(this,arguments)}function v(){return v=(0,n.Z)(c().mark((function e(r){var t,n,a,i,o=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:1,n=s.jk.BASE_URL+s.jk.GET_MOVIE_DETAILS_PATH_URL+r+s.jk.REVIEW_URL_PATH,a={params:{api_key:s.$h,page:t}},e.prev=2,e.next=5,u.Z.get(n,a);case 5:return i=e.sent,e.abrupt("return",i.data);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])}))),v.apply(this,arguments)}function d(e){return k.apply(this,arguments)}function k(){return k=(0,n.Z)(c().mark((function e(r){var t,n,a,i,o=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:1,n=s.jk.BASE_URL+s.jk.SEARCH_PATH_URL,a={params:{api_key:s.$h,page:t,query:r,include_adult:!1}},e.next=4,u.Z.get(n,a);case 4:return i=e.sent,e.abrupt("return",i.data);case 6:case"end":return e.stop()}}),e)}))),k.apply(this,arguments)}},8022:function(e,r,t){t.d(r,{$h:function(){return a},jk:function(){return n}});var n={BASE_URL:"https://api.themoviedb.org/3/",CAST_PATH_URL:"/credits",GENRES_PATH_URL:"genre/movie/list",TRENDINGS_PATH_URL:"trending/movie/day",SEARCH_PATH_URL:"search/movie",BASE_IMAGE_URL:"https://image.tmdb.org/t/p/w500",GET_MOVIE_DETAILS_PATH_URL:"movie/",REVIEW_URL_PATH:"/reviews"},a="4e55e991eb56041fecba3fbc73e3250b"},4915:function(e,r,t){t.r(r),t.d(r,{default:function(){return d}});var n,a=t(5861),c=t(9439),u=t(7757),s=t.n(u),i=t(7689),o=t(5243),p=t(2791),l=t(9014),h=t(886),f=t(168),_=t(6444).ZP.ul(n||(n=(0,f.Z)(["\n  width: 1200px;\n  margin: 0 auto;\n  padding: 15px;\n  list-style: none;\n"]))),v=t(184),d=function(){var e=(0,i.UO)().movieId,r=(0,p.useState)(null),t=(0,c.Z)(r,2),n=t[0],u=t[1],f=(0,p.useState)(!1),d=(0,c.Z)(f,2),k=d[0],E=d[1];return(0,p.useEffect)((function(){function r(){return(r=(0,a.Z)(s().mark((function r(){var t,n;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,E(!0),r.next=4,(0,h.xo)(e);case 4:t=r.sent,n=t.results,u(n),E(!1),r.next=14;break;case 10:r.prev=10,r.t0=r.catch(0),console.error(r.t0),l.ZP.error("Something went wrong :( Try reloading the page.");case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))).apply(this,arguments)}!function(){r.apply(this,arguments)}()}),[e]),n?(0,v.jsxs)("div",{children:[(0,v.jsx)(o.p2,{height:"100",width:"100",color:"#641cf4",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:Boolean(k)}),(0,v.jsx)(l.x7,{}),(0,v.jsx)(_,{children:n.map((function(e){var r=e.author,t=e.content,n=e.id;return(0,v.jsxs)("li",{children:[(0,v.jsxs)("p",{children:["AUTHOR: ",r]}),(0,v.jsx)("p",{children:t})]},n)}))})]}):null}}}]);
//# sourceMappingURL=915.4fb6dd2f.chunk.js.map