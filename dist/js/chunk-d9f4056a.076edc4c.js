(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d9f4056a"],{"06cd":function(t,e,n){"use strict";var a=n("8fb7"),o=n.n(a);o.a},"48bb":function(t,e){t.exports="<table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>cancelText</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>closeOnClickingMask</td>\n<td></td>\n<td>boolean</td>\n<td>true</td>\n</tr>\n<tr>\n<td>closeOnClickingMenu</td>\n<td></td>\n<td>boolean</td>\n<td>true</td>\n</tr>\n<tr>\n<td>menus</td>\n<td></td>\n<td>any[]</td>\n<td></td>\n</tr>\n<tr>\n<td>prefixCls</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>showCancel</td>\n<td></td>\n<td>boolean</td>\n<td>true</td>\n</tr>\n<tr>\n<td>theme</td>\n<td></td>\n<td>string</td>\n<td></td>\n</tr>\n<tr>\n<td>type</td>\n<td></td>\n<td>&#39;normal&#39; | &#39;share&#39;</td>\n<td></td>\n</tr>\n<tr>\n<td>value</td>\n<td></td>\n<td>boolean</td>\n<td></td>\n</tr>\n</tbody></table>\n"},"4f8a":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"code-box"},[n("section",{staticClass:"code-box-demo"},[t._t("demo")],2),n("markdown",{staticClass:"code-box-meta",attrs:{source:t.markdown}}),n("pre",{directives:[{name:"hljs",rawName:"v-hljs"},{name:"show",rawName:"v-show",value:t.showCode,expression:"showCode"}],staticClass:"code-box-code markdown-body clearfix"},[t._v("    "),n("ae-layout",[t._v("\n      "),n("ae-icon",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.code,expression:"code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.copied,expression:"copied",arg:"success"}],staticClass:"copy-btn",attrs:{type:"copy"}}),t._v("\n      "),n("code",{domProps:{textContent:t._s(t.code)}}),t._v("\n    ")],1),t._v("\n  ")],1),n("div",{staticClass:"show-code-btn"},[n("d-button",{staticStyle:{border:"none"},attrs:{block:"",icon:"plus"},on:{click:function(e){t.showCode=!t.showCode}}},[n("span",{domProps:{textContent:t._s(t.showCode?"隐藏代码":"显示代码")}})])],1)],1)},o=[],s=n("d225"),r=n("b0b4"),d=n("308d"),c=n("6bb5"),i=n("4e2b"),l=n("9ab4"),u=n("5365"),m=n("2f23"),b=n("e722"),h=n("8bbf"),p=n.n(h),v=n("65d9"),f=n.n(v),w=n("60a3");p.a.use(b["a"]),p.a.use(m["a"]),p.a.use(u["a"]);var C=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(d["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.showCode=!1,t}return Object(i["a"])(e,t),Object(r["a"])(e,[{key:"copied",value:function(){this.$message.success("已复制")}}]),e}(p.a);l["a"]([Object(w["d"])(String)],C.prototype,"code",void 0),l["a"]([Object(w["d"])(String)],C.prototype,"markdown",void 0),C=l["a"]([f()({name:"CodeBox"})],C);var k=C,x=k,j=(n("06cd"),n("2877")),O=Object(j["a"])(x,a,o,!1,null,null,null);e["a"]=O.exports},"577c":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"toc-affix"},[n("d-anchor",{attrs:{"get-container":t.getContainer,"offset-top":20}},[n("d-anchor-link",{attrs:{href:"#basic",title:"基本"}}),n("d-anchor-link",{attrs:{href:"#demo",title:"示例"}}),n("d-anchor-link",{attrs:{href:"#demo1",title:"基本用法"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],attrs:{href:"#props",title:"属性"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#events",title:"事件"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#functions",title:"方法"}}),n("d-anchor-link",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{href:"#slots",title:"插槽"}})],1)],1),n("div",{attrs:{id:"basic"}},[n("markdown",{attrs:{source:t.title}})],1),t._m(0),n("demo1",{attrs:{id:"demo1"}}),t._m(1),n("markdown",{attrs:{source:t.props}})],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown-body m-b",attrs:{id:"demo"}},[n("span"),n("h2",[t._v("示例代码")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"markdown-body",attrs:{id:"props"}},[n("span"),n("h2",[t._v("属性说明")])])}],s=n("d225"),r=n("b0b4"),d=n("308d"),c=n("6bb5"),i=n("4e2b"),l=n("9ab4"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo"},[n("code-box",{attrs:{code:t.code,markdown:t.md}},[n("demo-comp",{attrs:{slot:"demo"},slot:"demo"})],1)],1)},m=[],b="<template>\n  <div>\n    <m-button @click=\"show = !show\">显示</m-button>\n    <m-action-sheet v-model=\"show\"\n                    :menus=\"menus\"/>\n  </div>\n</template>\n<script lang=\"ts\">\n  import Button from '@/packages/m-button';\n  import Vue from 'vue';\n  import Component from 'vue-class-component';\n  import MActionSheet from '../../index';\n\n  Vue.use(Button);\n  Vue.use(MActionSheet);\n  @Component({\n    name: 'Demo1'\n  })\n  export default class Demo1 extends Vue {\n    public menus = [{\n      value: 1, label: '操作1', badge: true\n    }, {\n      value: 2, label: '操作2', badge: 22\n    }];\n    public show = true;\n    public showDrawer = true;\n\n    public onClose() {\n      this.showDrawer = false;\n    }\n  }\n<\/script>\n<style scoped lang=\"less\">\n</style>\n",h=n("735f"),p=n.n(h),v=n("8bbf"),f=n.n(v),w=n("65d9"),C=n.n(w),k=n("4f8a"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("m-button",{on:{click:function(e){t.show=!t.show}}},[t._v("显示")]),n("m-action-sheet",{attrs:{menus:t.menus},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)},j=[],O=n("1eed"),y=n("d31c");f.a.use(O["a"]),f.a.use(y["a"]);var _=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(d["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.menus=[{value:1,label:"操作1",badge:!0},{value:2,label:"操作2",badge:22}],t.show=!0,t.showDrawer=!0,t}return Object(i["a"])(e,t),Object(r["a"])(e,[{key:"onClose",value:function(){this.showDrawer=!1}}]),e}(f.a);_=l["a"]([C()({name:"Demo1"})],_);var g=_,D=g,N=n("2877"),E=Object(N["a"])(D,x,j,!1,null,"48de699a",null),$=E.exports,B=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(d["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.code=b,t.md=p.a,t}return Object(i["a"])(e,t),e}(f.a);B=l["a"]([C()({name:"Demo1",components:{CodeBox:k["a"],DemoComp:$}})],B);var S=B,M=S,V=Object(N["a"])(M,u,m,!1,null,null,null),A=V.exports,J=n("847c"),P=n("b7b0"),I=n.n(P),T=n("48bb"),q=n.n(T);f.a.use(J["a"]),f.a.use(y["a"]);var z=function(t){function e(){var t;return Object(s["a"])(this,e),t=Object(d["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.title=I.a,t.props=q.a,t}return Object(i["a"])(e,t),Object(r["a"])(e,[{key:"getContainer",value:function(){return document.getElementById("app-content")}}]),e}(f.a);z=l["a"]([C()({name:"ComponentDemo",components:{demo1:A}})],z);var F=z,G=F,H=(n("8626"),Object(N["a"])(G,a,o,!1,null,"0b913ddb",null));e["default"]=H.exports},"735f":function(t,e){t.exports="<p>基本用法</p>\n"},8626:function(t,e,n){"use strict";var a=n("cca7"),o=n.n(a);o.a},"8fb7":function(t,e,n){},b7b0:function(t,e){t.exports='<h1 id="动作面板--m-action-sheet">动作面板  m-action-sheet</h1>\n<p>目前还存在问题，不建议使用</p>\n'},cca7:function(t,e,n){}}]);
//# sourceMappingURL=chunk-d9f4056a.076edc4c.js.map