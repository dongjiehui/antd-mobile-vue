(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6851297e"],{1098:function(t,e,n){"use strict";e.__esModule=!0;var a=n("17ed"),d=u(a),o=n("f893"),r=u(o),i="function"===typeof r.default&&"symbol"===typeof d.default?function(t){return typeof t}:function(t){return t&&"function"===typeof r.default&&t.constructor===r.default&&t!==r.default.prototype?"symbol":typeof t};function u(t){return t&&t.__esModule?t:{default:t}}e.default="function"===typeof r.default&&"symbol"===i(d.default)?function(t){return"undefined"===typeof t?"undefined":i(t)}:function(t){return t&&"function"===typeof r.default&&t.constructor===r.default&&t!==r.default.prototype?"symbol":"undefined"===typeof t?"undefined":i(t)}},"17ed":function(t,e,n){t.exports={default:n("d8d6"),__esModule:!0}},2638:function(t,e,n){"use strict";function a(){return a=Object.assign||function(t){for(var e,n=1;n<arguments.length;n++)for(var a in e=arguments[n],e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},a.apply(this,arguments)}var d=["attrs","props","domProps"],o=["class","style","directives"],r=["on","nativeOn"],i=function(t){return t.reduce(function(t,e){for(var n in e)if(t[n])if(-1!==d.indexOf(n))t[n]=a({},t[n],e[n]);else if(-1!==o.indexOf(n)){var i=t[n]instanceof Array?t[n]:[t[n]],s=e[n]instanceof Array?e[n]:[e[n]];t[n]=i.concat(s)}else if(-1!==r.indexOf(n))for(var c in e[n])if(t[n][c]){var l=t[n][c]instanceof Array?t[n][c]:[t[n][c]],f=e[n][c]instanceof Array?e[n][c]:[e[n][c]];t[n][c]=l.concat(f)}else t[n][c]=e[n][c];else if("hook"==n)for(var b in e[n])t[n][b]=t[n][b]?u(t[n][b],e[n][b]):e[n][b];else t[n]=e[n];else t[n]=e[n];return t},{})},u=function(t,e){return function(){t&&t.apply(this,arguments),e&&e.apply(this,arguments)}};t.exports=i},"3f6b":function(t,e,n){t.exports={default:n("51b6"),__esModule:!0}},"41b2":function(t,e,n){"use strict";e.__esModule=!0;var a=n("3f6b"),d=o(a);function o(t){return t&&t.__esModule?t:{default:t}}e.default=d.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}},"53d5":function(t,e){t.exports='<h1 id="文本框--m-textarea">文本框  m-textarea</h1>\n'},"60cd":function(t,e,n){"use strict";n("c5f6"),n("7f7f");var a=n("2638"),d=n.n(a),o=(n("28a5"),n("bd86")),r=n("d225"),i=n("b0b4"),u=n("308d"),s=n("6bb5"),c=n("4e2b"),l=(n("a481"),n("9ab4")),f=n("4d26"),b=n.n(f),h=n("65d9"),p=n.n(h),v=n("60a3"),y=n("1a67"),m=n("6cf1"),g=n("d408"),O=n("d5e7");function x(t){return"undefined"===typeof t||null===t?"":t}var j=/[\uD800-\uDBFF][\uDC00-\uDFFF]|\n/g;function _(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.replace(j,"_").length}var w=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(u["a"])(this,Object(s["a"])(e).apply(this,arguments)),t.state={focus:!1,value:t.value||""},t}return Object(c["a"])(e,t),Object(i["a"])(e,[{key:"focus",value:function(){this.textareaRef.focus()}},{key:"valueChanged",value:function(t){this.state.value=x(t)}},{key:"mounted",value:function(){this.autoHeight&&this.reAlignHeight()}},{key:"updated",value:function(){this.autoHeight&&this.state.focus&&this.reAlignHeight()}},{key:"reAlignHeight",value:function(){var t=this.textareaRef;t.style.height="",t.style.height="".concat(t.scrollHeight,"px")}},{key:"beforeDestroy",value:function(){this.debounceTimeout&&(clearTimeout(this.debounceTimeout),this.debounceTimeout=null)}},{key:"stateValueChanged",value:function(t){this.$emit("input",t)}},{key:"onChange",value:function(t){var e=t.target.value;this.state.value=e,this.$emit("change",e)}},{key:"onBlur",value:function(t){var e=this;this.debounceTimeout=setTimeout(function(){document.activeElement!==e.textareaRef&&(e.state.focus=!1)},150);var n=t.currentTarget.value;setTimeout(function(){document.body&&(document.body.scrollTop=document.body.scrollTop)},100),this.$emit("blur",n)}},{key:"onFocus",value:function(t){this.debounceTimeout&&(clearTimeout(this.debounceTimeout),this.debounceTimeout=null),this.state.focus=!0;var e=t.currentTarget.value;this.$emit("focus",e)}},{key:"clearInput",value:function(){this.state.value="",this.$emit("change","")}},{key:"onInput",value:function(t){this.state.value=t.target.value,this.autoHeight&&this.state.focus&&this.reAlignHeight()}},{key:"render",value:function(){var t,e=arguments[0],n=this.prefixCls,a=this.prefixListCls,r=this.editable,i=this.clearable,u=this.count,s=(this.labelNumber,this.title),c=this.autoHeight,l=this.disabled,f=this.state,h=f.value,p=f.focus,v=u>0&&this.rows>1,y=b()("".concat(a,"-item"),"".concat(n,"-item"),(t={},Object(o["a"])(t,"".concat(n,"-disabled"),l),Object(o["a"])(t,"".concat(n,"-item-single-line"),1===this.rows&&!c),Object(o["a"])(t,"".concat(n,"-focus"),p),Object(o["a"])(t,"".concat(n,"-has-count"),v),t)),x=_(h),w={};if(u>0)if(g["a"]){var k=h?h.replace(j,"_"):"",C=k?k.split("_").length-1:0;w.maxLength=u+C-x+(h?h.length:0)}else w.maxLength=u-x+(h?h.length:0);return e(m["a"].Item,{class:y,attrs:{required:this.required,disabled:this.isDisabled,title:s}},[e("div",{class:"".concat(n,"-control"),slot:"extra"},[e("textarea",d()([{ref:"textarea"},w,{attrs:{rows:this.rows,disabled:this.isDisabled,name:this.name,placeholder:this.placeholder,readOnly:!r},domProps:{value:h},on:{input:this.onInput,change:this.onChange,blur:this.onBlur,focus:this.onFocus}}])),i&&r&&h&&x>0&&e(O["a"],{attrs:{activeClassName:"".concat(n,"-clear-active")}},[e("div",{class:"".concat(n,"-clear"),on:{click:this.clearInput}})]),v&&e("span",{class:"".concat(n,"-count")},[e("span",[h?x:0]),"/",u])])])}},{key:"textareaRef",get:function(){return this.$refs["textarea"]}}]),e}(y["a"]);l["b"]([Object(v["d"])({type:String,default:"am-textarea"})],w.prototype,"prefixCls",void 0),l["b"]([Object(v["d"])({type:String,default:"am-list"})],w.prototype,"prefixListCls",void 0),l["b"]([Object(v["d"])({type:String})],w.prototype,"title",void 0),l["b"]([Object(v["d"])({type:Number})],w.prototype,"maxLength",void 0),l["b"]([Object(v["d"])({type:String})],w.prototype,"name",void 0),l["b"]([Object(v["d"])({default:""})],w.prototype,"placeholder",void 0),l["b"]([Object(v["d"])({type:Boolean,default:!1})],w.prototype,"clearable",void 0),l["b"]([Object(v["d"])({type:Number,default:1})],w.prototype,"rows",void 0),l["b"]([Object(v["d"])()],w.prototype,"count",void 0),l["b"]([Object(v["d"])({type:Boolean,default:!1})],w.prototype,"autoHeight",void 0),l["b"]([Object(v["d"])({type:Number,default:5})],w.prototype,"labelNumber",void 0),l["b"]([Object(v["g"])("value")],w.prototype,"valueChanged",null),l["b"]([Object(v["g"])("state.value")],w.prototype,"stateValueChanged",null),w=l["b"]([p()({name:"MTextarea"})],w);var k=w,C=(n("658b"),n("906e"),n("e6ea"),k);C.install=function(t){t.component("MTextarea",k)};e["a"]=C},"84ce":function(t,e,n){},"96b6":function(t,e,n){"use strict";var a=n("84ce"),d=n.n(a);d.a},c6d0:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"basic"}},[n("markdown",{attrs:{source:t.title}})],1),t._m(0),t._m(1),n("markdown",{attrs:{source:t.props}})],1)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown-body m-b",attrs:{id:"demo"}},[n("span"),n("h2",[t._v("示例代码")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown-body",attrs:{id:"props"}},[n("span"),n("h2",[t._v("属性说明")])])}],o=n("d225"),r=n("b0b4"),i=n("308d"),u=n("6bb5"),s=n("4e2b"),c=n("9ab4"),l=n("8bbf"),f=n.n(l),b=n("65d9"),h=n.n(b),p=n("60cd"),v=n("53d5"),y=n.n(v),m=n("df31"),g=n.n(m);f.a.use(p["a"]);var O=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(i["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.title=y.a,t.props=g.a,t}return Object(s["a"])(e,t),Object(r["a"])(e,[{key:"getContainer",value:function(){return document.getElementById("app-content")}}]),e}(f.a);O=c["b"]([h()({name:"ComponentDemo"})],O);var x=O,j=x,_=(n("96b6"),n("2877")),w=Object(_["a"])(j,a,d,!1,null,"6cea74c6",null);e["default"]=w.exports},d408:function(t,e,n){"use strict";n.d(e,"a",function(){return d});var a=!("undefined"===typeof window||!window.document||!window.document.createElement),d=a&&/iphone|ipad|ipod/i.test(window.navigator.userAgent)},df31:function(t,e){t.exports="<table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>autoHeight</td>\n<td></td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>clear</td>\n<td></td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>clearable</td>\n<td></td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>count</td>\n<td></td>\n<td>number</td>\n<td></td>\n</tr>\n<tr>\n<td>defaultValue</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>disabled</td>\n<td></td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>editable</td>\n<td></td>\n<td>boolean</td>\n<td>true</td>\n</tr>\n<tr>\n<td>error</td>\n<td></td>\n<td>boolean</td>\n<td>false</td>\n</tr>\n<tr>\n<td>labelNumber</td>\n<td></td>\n<td>number</td>\n<td>5</td>\n</tr>\n<tr>\n<td>maxLength</td>\n<td></td>\n<td>number</td>\n<td></td>\n</tr>\n<tr>\n<td>name</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>prefixCls</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>prefixListCls</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>rows</td>\n<td></td>\n<td>number</td>\n<td>1</td>\n</tr>\n<tr>\n<td>title</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>value</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n</tbody></table>\n"},e6ea:function(t,e,n){},f893:function(t,e,n){t.exports={default:n("f921"),__esModule:!0}}}]);
//# sourceMappingURL=chunk-6851297e.c83f53c6.js.map