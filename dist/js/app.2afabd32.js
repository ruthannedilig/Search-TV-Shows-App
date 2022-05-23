(function(){"use strict";var t={2518:function(t,e,s){var n=s(8935),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("img",{staticClass:"logo mb-4",attrs:{src:s(6949),alt:"TV Maze Logo"}}),n("keep-alive",[n(t.selectedComponent,{tag:"component",attrs:{selectedTVShow:t.selectedTVShow},on:{displayTVShowDetails:t.displayTVShowDetails,renderMovieList:t.renderMovieList}})],1)],1)},r=[],a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-container",{attrs:{fluid:"sm"}},[s("b-row",[s("b-col",{staticClass:"search-field"},[s("b-form-input",{attrs:{placeholder:"Search TV shows"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchTVShows.apply(null,arguments)}},model:{value:t.searchParameter,callback:function(e){t.searchParameter=e},expression:"searchParameter"}})],1)],1)],1),s("b-container",{staticClass:"mt-4",attrs:{fluid:"sm"}},[s("b-row",[s("b-col",{attrs:{md:"12"}},[t.hasTVShowResults?t.isSearchSuccessful?s("b-alert",{attrs:{show:"",variant:"info"}},[t._v(" No TV shows found ")]):t._e():s("div",{staticClass:"tv-show-list"},t._l(t.tvShows,(function(e){return s("div",{key:e.show.id,staticClass:"tv-show-item"},[s("b-card",{staticClass:"mb-3",attrs:{"img-src":t.getImageSource(e),"img-alt":e.show.name,"img-left":""},on:{click:function(s){return t.getTVShowDetails(e)}}},[s("b-card-text",{staticClass:"text-start"},[s("h5",{staticClass:"font-weight-bold"},[t._v(t._s(e.show.name))]),s("h6",[t._v("Rating: "+t._s(t.getTVShowRating(e)))]),s("p",{staticClass:"tv-show-desc"},[t._v(t._s(t._f("strippedContent")(e.show.summary)))])])],1)],1)})),0)],1)],1)],1)],1)},i=[];const c={async searchTVShows(t){try{const e=await fetch(`https://api.tvmaze.com/search/shows?q=${t}`),s=await e.json();return s}catch(e){console.error("Error in searchTVShows",e)}}};var l=c;const u={filters:{strippedContent:function(t){return t.replace(/<\/?[^>]+>/gi," ")}},methods:{getImageSource(t){const e="no-image-available.webp";return t.show.image?.medium||e},getTVShowRating(t){const e="No rating yet";return t.show.rating?.average||e}}};var h=u,f={name:"SearchTVShows",mixins:[h],data(){return{searchParameter:"",tvShows:[],isSearchSuccessful:!1}},computed:{hasTVShowResults(){return 0===this.tvShows.length&&this.isSearchSuccessful}},methods:{async searchTVShows(){const t=await l.searchTVShows(this.searchParameter);t&&(this.isSearchSuccessful=!0,this.tvShows=t)},getTVShowDetails(t){this.$emit("displayTVShowDetails",t)}}},d=f,m=s(1001),p=(0,m.Z)(d,a,i,!1,null,"8a27a2f0",null),w=p.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-container",{attrs:{fluid:"sm"}},[s("b-row",[s("b-col",{staticClass:"text-start"},[s("b-button",{staticClass:"btn btn-light",on:{click:t.goBack}},[t._v(" Go Back to Movie List ")])],1)],1),s("b-row",[s("b-col",[s("b-card",{staticClass:"mb-3 mt-3",attrs:{"img-src":t.selectedTVShow.show.image.original,"img-alt":t.selectedTVShow.show.name,"img-left":""}},[s("b-card-text",{staticClass:"text-start"},[s("h4",[t._v(t._s(t.selectedTVShow.show.name))]),s("h5",[t._v("Rating: "+t._s(t.getTVShowRating(t.selectedTVShow)))]),s("p",{staticClass:"tv-show-desc"},[t._v(t._s(t._f("strippedContent")(t.selectedTVShow.show.summary)))])])],1)],1)],1)],1)],1)},g=[],S={name:"TVShowDetails",mixins:[h],props:{selectedTVShow:{type:Object,required:!0,default(){return{}}}},methods:{goBack(){this.$emit("renderMovieList")}}},b=S,T=(0,m.Z)(b,v,g,!1,null,"b467aa70",null),V=T.exports,y={name:"App",components:{SearchTVShows:w,TVShowDetails:V},data(){return{defaultComponent:"SearchTVShows",selectedComponent:"",selectedTVShow:{}}},created(){this.selectedComponent=this.defaultComponent},methods:{displayTVShowDetails(t){const e="TVShowDetails";this.selectedComponent=e,this.selectedTVShow=t},renderMovieList(){this.selectedComponent=this.defaultComponent}}},_=y,C=(0,m.Z)(_,o,r,!1,null,null,null),k=C.exports,x=s(150);s(44);n["default"].use(x.XG7),n["default"].config.productionTip=!1,new n["default"]({render:t=>t(k)}).$mount("#app")},6949:function(t,e,s){t.exports=s.p+"img/logo.9ef227a4.png"}},e={};function s(n){var o=e[n];if(void 0!==o)return o.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,s),r.exports}s.m=t,function(){var t=[];s.O=function(e,n,o,r){if(!n){var a=1/0;for(u=0;u<t.length;u++){n=t[u][0],o=t[u][1],r=t[u][2];for(var i=!0,c=0;c<n.length;c++)(!1&r||a>=r)&&Object.keys(s.O).every((function(t){return s.O[t](n[c])}))?n.splice(c--,1):(i=!1,r<a&&(a=r));if(i){t.splice(u--,1);var l=o();void 0!==l&&(e=l)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[n,o,r]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,r,a=n[0],i=n[1],c=n[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(o in i)s.o(i,o)&&(s.m[o]=i[o]);if(c)var u=c(s)}for(e&&e(n);l<a.length;l++)r=a[l],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(u)},n=self["webpackChunking_test"]=self["webpackChunking_test"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(2518)}));n=s.O(n)})();
//# sourceMappingURL=app.2afabd32.js.map