(function(i){function e(e){for(var n,o,A=e[0],s=e[1],I=e[2],u=0,l=[];u<A.length;u++)o=A[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&l.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(i[n]=s[n]);c&&c(e);while(l.length)l.shift()();return a.push.apply(a,I||[]),t()}function t(){for(var i,e=0;e<a.length;e++){for(var t=a[e],n=!0,A=1;A<t.length;A++){var s=t[A];0!==r[s]&&(n=!1)}n&&(a.splice(e--,1),i=o(o.s=t[0]))}return i}var n={},r={app:0},a=[];function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return i[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=i,o.c=n,o.d=function(i,e,t){o.o(i,e)||Object.defineProperty(i,e,{enumerable:!0,get:t})},o.r=function(i){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},o.t=function(i,e){if(1&e&&(i=o(i)),8&e)return i;if(4&e&&"object"===typeof i&&i&&i.__esModule)return i;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:i}),2&e&&"string"!=typeof i)for(var n in i)o.d(t,n,function(e){return i[e]}.bind(null,n));return t},o.n=function(i){var e=i&&i.__esModule?function(){return i["default"]}:function(){return i};return o.d(e,"a",e),e},o.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)},o.p="/";var A=window["webpackJsonp"]=window["webpackJsonp"]||[],s=A.push.bind(A);A.push=e,A=A.slice();for(var I=0;I<A.length;I++)e(A[I]);var c=s;a.push([0,"chunk-vendors"]),t()})({0:function(i,e,t){i.exports=t("56d7")},"0f0b":function(i,e){i.exports="data:image/png;base64,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"},"17b5":function(i,e){i.exports="data:image/png;base64,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"},"56d7":function(i,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),r=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",[t("Header",{on:{"set-search":i.setSearch}}),t("Main",{attrs:{search:i.inputText}})],1)},a=[],o=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",{staticClass:"container"},[t("div",[t("input",{directives:[{name:"model",rawName:"v-model.trim",value:i.inputText,expression:"inputText",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:""},domProps:{value:i.inputText},on:{keyup:function(e){return!e.type.indexOf("key")&&i._k(e.keyCode,"enter",13,e.key,"Enter")?null:i.passInputText.apply(null,arguments)},input:function(e){e.target.composing||(i.inputText=e.target.value.trim())},blur:function(e){return i.$forceUpdate()}}}),t("button",{staticClass:"btn btn-primary",on:{click:i.passInputText}},[i._v("Invia")])])])},A=[],s={name:"Header",data:function(){return{inputText:""}},methods:{passInputText:function(){this.$emit("set-search",this.inputText)}}},I=s,c=t("2877"),u=Object(c["a"])(I,o,A,!1,null,"a065e73a",null),l=u.exports,p=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",{staticClass:"container"},[t("Cards",{attrs:{type:i.movies,typeTitle:"Film"}}),t("Cards",{attrs:{type:i.series,typeTitle:"Serie Tv"}})],1)},f=[],g=(t("ac1f"),t("841c"),t("bc3a")),d=t.n(g),v=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("section",[t("h2",[i._v(i._s(i.typeTitle))]),i._l(i.type,(function(e){return t("Card",{key:e.id||i.index,attrs:{product:e}})}))],2)},h=[],m=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("ul",[t("h3",[i._v(i._s(i.product.title||i.product.name))]),t("li",[i._v(i._s(i.product.original_title||i.product.original_name))]),t("li",[t("Poster",{attrs:{finalUrl:i.product.poster_path}})],1),t("li",[t("Flag",{attrs:{language:i.product.original_language}})],1),t("li",[i._v(i._s(i.product.vote_average))])])},C=[],w=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",[t("img",{attrs:{src:i.changeFlag(i.language),alt:i.language}})])},E=[],x=(t("d3b7"),t("159b"),t("5377"),t("caad"),t("2532"),{name:"Flag",props:["language"],data:function(){return{flags:[{langString:"it",langUrl:"../assets/img/it.png"},{langString:"en",langUrl:"../assets/img/en.png"},{langString:"not-found",langUrl:"../assets/img/not.png"}]}},methods:{changeFlag:function(i){var e=t("0f0b");return this.flags.forEach((function(n){n.langString.includes(i)&&(e=t("b967")("./".concat(i,".png")))})),e}}}),y=x,b=Object(c["a"])(y,w,E,!1,null,"79fdbe52",null),j=b.exports,U=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("div",[t("img",{attrs:{src:i.posterSrc,alt:""}})])},F=[],M={name:"Poster",props:["finalUrl"],computed:{posterSrc:function(){return console.log("ciao"),"https://image.tmdb.org/t/p/w342".concat(this.finalUrl)}}},O=M,Q=Object(c["a"])(O,U,F,!1,null,"5a9b2c0a",null),P=Q.exports,S={name:"Card",props:["product","title","original_title"],components:{Flag:j,Poster:P}},T=S,D=Object(c["a"])(T,m,C,!1,null,"6518c214",null),X=D.exports,B={name:"Cards",props:["type","typeTitle"],components:{Card:X}},Y=B,N=Object(c["a"])(Y,v,h,!1,null,"06a8c767",null),J=N.exports,K={name:"Main",props:["search"],components:{Cards:J},data:function(){return{movies:[],series:[],api:{baseUri:"https://api.themoviedb.org/3/",apiKey:"0716b96a2396251891c3d483c41f9ebc",language:"it-IT"}}},methods:{fetchProduct:function(i,e,t,n){var r=this;d.a.get(i+e,t).then((function(i){console.log(i.data.results),r[n]=i.data.results}))},fetchFilms:function(){var i=this.api,e=i.baseUri,t=i.apiKey,n=i.language,r={params:{api_key:t,query:this.search,language:n}};this.fetchProduct(e,"search/movie",r,"movies"),this.fetchProduct(e,"search/tv",r,"series")}},watch:{search:function(){this.search?this.fetchFilms():(this.movies=[],this.series=[])}}},L=K,R=Object(c["a"])(L,p,f,!1,null,"b4b97914",null),H=R.exports,V={name:"App",components:{Header:l,Main:H},data:function(){return{inputText:""}},methods:{setSearch:function(i){this.inputText=i}}},G=V,k=(t("5c0b"),Object(c["a"])(G,r,a,!1,null,null,null)),z=k.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(i){return i(z)}}).$mount("#app")},"5c0b":function(i,e,t){"use strict";t("9c0c")},"9c0c":function(i,e,t){},b967:function(i,e,t){var n={"./en.png":"17b5","./it.png":"e33f","./not.png":"0f0b"};function r(i){var e=a(i);return t(e)}function a(i){if(!t.o(n,i)){var e=new Error("Cannot find module '"+i+"'");throw e.code="MODULE_NOT_FOUND",e}return n[i]}r.keys=function(){return Object.keys(n)},r.resolve=a,i.exports=r,r.id="b967"},e33f:function(i,e){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAELBAMAAAAFMM1/AAAAFVBMVEX///8AkkbOKzf10tWY07QAjT7NJTJXwIMQAAAA8UlEQVR42u3PwQAAAAgEsBRSCCKS/FmCuO9msOrYVWwnJiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIikniFNUdjvhgMbwAAAABJRU5ErkJggg=="}});
//# sourceMappingURL=app.6c5f9c3e.js.map