"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[103],{886:function(e,n,r){r.d(n,{Mc:function(){return p},Pv:function(){return v},wr:function(){return s},xo:function(){return _},y:function(){return f}});var t=r(5861),a=r(7757),c=r.n(a),i=r(2388),o=r(8022);function s(){return u.apply(this,arguments)}function u(){return u=(0,t.Z)(c().mark((function e(){var n,r,t,a,s=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>0&&void 0!==s[0]?s[0]:1,r=o.jk.BASE_URL+o.jk.TRENDINGS_PATH_URL,t={params:{api_key:o.$h,page:n}},e.prev=2,e.next=5,i.Z.get(r,t);case 5:return a=e.sent,e.abrupt("return",a.data);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])}))),u.apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return(l=(0,t.Z)(c().mark((function e(n){var r,t,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.jk.BASE_URL+o.jk.GET_MOVIE_DETAILS_PATH_URL+n,t={params:{api_key:o.$h}},e.prev=1,e.next=4,i.Z.get(r,t);case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,t.Z)(c().mark((function e(n){var r,t,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(o.jk.BASE_URL,"movie/").concat(n,"/credits"),t={params:{api_key:o.$h}},e.prev=1,e.next=4,i.Z.get(r,t);case 4:return a=e.sent,e.abrupt("return",a.data);case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function _(e){return d.apply(this,arguments)}function d(){return d=(0,t.Z)(c().mark((function e(n){var r,t,a,s,u=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:1,t=o.jk.BASE_URL+o.jk.GET_MOVIE_DETAILS_PATH_URL+n+o.jk.REVIEW_URL_PATH,a={params:{api_key:o.$h,page:r}},e.prev=2,e.next=5,i.Z.get(t,a);case 5:return s=e.sent,e.abrupt("return",s.data);case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])}))),d.apply(this,arguments)}function v(e){return g.apply(this,arguments)}function g(){return g=(0,t.Z)(c().mark((function e(n){var r,t,a,s,u=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:1,t=o.jk.BASE_URL+o.jk.SEARCH_PATH_URL,a={params:{api_key:o.$h,page:r,query:n,include_adult:!1}},e.next=4,i.Z.get(t,a);case 4:return s=e.sent,e.abrupt("return",s.data);case 6:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}},8022:function(e,n,r){r.d(n,{$h:function(){return a},jk:function(){return t}});var t={BASE_URL:"https://api.themoviedb.org/3/",CAST_PATH_URL:"/credits",GENRES_PATH_URL:"genre/movie/list",TRENDINGS_PATH_URL:"trending/movie/day",SEARCH_PATH_URL:"search/movie",BASE_IMAGE_URL:"https://image.tmdb.org/t/p/w500",GET_MOVIE_DETAILS_PATH_URL:"movie/",REVIEW_URL_PATH:"/reviews"},a="4e55e991eb56041fecba3fbc73e3250b"},103:function(e,n,r){r.r(n),r.d(n,{default:function(){return y}});var t,a,c,i,o=r(5861),s=r(9439),u=r(7757),p=r.n(u),l=r(2791),f=r(9014),h=r(886),_=r(8022),d=r(7689),v=r(5243),g=r(168),m=r(6444),x=r(1087),k=m.ZP.ul(t||(t=(0,g.Z)(["\n  display: flex;\n  width: 1200px;\n  margin: 0 auto;\n  padding: 15px;\n  flex-wrap: wrap;\n  gap: 15px;\n  list-style: none;\n"]))),w=m.ZP.li(a||(a=(0,g.Z)(["\nwidth: calc((100% - 60px)/3);\n"]))),E=m.ZP.img(c||(c=(0,g.Z)(["\nmax-width: 100%;\n &:hover{\n    scale: 1.05;\n }\n"]))),A=(0,m.ZP)(x.rU)(i||(i=(0,g.Z)(["\ntext-decoration: none;\ncolor: #ffffff;\n"]))),R=r(184),L=function(e){var n=e.isLoading,r=e.trendingMovies,t=(e.incrementPage,(0,d.TH)());return(0,R.jsx)(R.Fragment,{children:(0,R.jsxs)(k,{children:[(0,R.jsx)(v.p2,{height:"100",width:"100",color:"#641cf4",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:Boolean(n)}),r.map((function(e){var n=e.original_title,r=e.id,a=e.poster_path;return(0,R.jsx)(w,{children:(0,R.jsxs)(A,{to:"movies/".concat(r),state:{from:t},children:[a&&(0,R.jsx)(E,{src:_.jk.BASE_IMAGE_URL+a,alt:n}),(0,R.jsx)("h2",{color:"#fff",children:n})]})},r)}))]})})},y=function(){var e=(0,l.useState)([]),n=(0,s.Z)(e,2),r=n[0],t=n[1],a=(0,l.useState)(!1),c=(0,s.Z)(a,2),i=c[0],u=c[1],_=(0,l.useState)(1),d=(0,s.Z)(_,2),v=d[0],g=d[1],m=(0,l.useRef)(!1);return(0,l.useEffect)((function(){function e(){return(e=(0,o.Z)(p().mark((function e(){var n,r,a;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,(0,h.wr)();case 4:n=e.sent,r=n.results,a=n.total_results,t(r),u(!1),0!==a&&a||f.ZP.error("Nothing found results trending movies :("),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.error(e.t0),f.ZP.error("Something went wrong :( Try reloading the page.");case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}m.current?function(){e.apply(this,arguments)}():m.current=!0}),[v]),(0,R.jsxs)("main",{children:[(0,R.jsx)(f.x7,{position:"top-right"}),(0,R.jsx)(L,{isLoading:i,trendingMovies:r,incrementPage:function(){g((function(e){return e+1}))}})]})}}}]);
//# sourceMappingURL=103.d14fc3dc.chunk.js.map