(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ff21b73"],{"45d7":function(n,t,e){"use strict";e.r(t);var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("div",{attrs:{id:"basic"}},[e("markdown",{attrs:{source:n.title}})],1),n._m(0)])},a=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"markdown-body m-b",attrs:{id:"demo"}},[e("span"),e("h2",[n._v("示例代码")])])}],r=e("d225"),o=e("b0b4"),p=e("308d"),s=e("6bb5"),c=e("4e2b"),u=e("9ab4"),d=e("8bbf"),l=e.n(d),f=e("65d9"),b=e.n(f),m=e("e108"),h=e.n(m),g=function(n){function t(){var n;return Object(r["a"])(this,t),n=Object(p["a"])(this,Object(s["a"])(t).apply(this,arguments)),n.title=h.a,n}return Object(c["a"])(t,n),Object(o["a"])(t,[{key:"getContainer",value:function(){return document.getElementById("app-content")}}]),t}(l.a);g=u["b"]([b()({name:"ComponentDemo"})],g);var x=g,v=x,j=(e("841e"),e("2877")),y=Object(j["a"])(v,i,a,!1,null,"4a33138e",null);t["default"]=y.exports},"841e":function(n,t,e){"use strict";var i=e("921e"),a=e.n(i);a.a},"921e":function(n,t,e){},e108:function(n,t){n.exports='<h1 id="接口代理工具">接口代理工具</h1>\n<h2 id="何时使用">何时使用</h2>\n<p>当项目中存在接口调用时</p>\n<h2 id="使用说明">使用说明</h2>\n<p>全局定义一个api对象，使用该工具对api对象进行代理，然后挂载为Vue的属性，\n然后在Vue的组件中以this.$api.xxx.r(params)的形式进行接口调用</p>\n<h2 id="使用方法">使用方法</h2>\n<h3 id="定义为插件">定义为插件</h3>\n<pre><code class="language-typescript">import apiObj from &#39;@/api/index&#39;;\nimport {API, ApiObject, ApiProxy} from &#39;aegis-ui&#39;;\nimport axios from &#39;axios&#39;;\nimport {PluginObject, VueConstructor} from &#39;vue&#39;;\nimport config from &#39;../config&#39;;\nimport state from &#39;../store/state&#39;;\n\naxios.defaults.baseURL = config.basePath;\nconst apiProxy: ApiObject&lt;API&gt; = ApiProxy(apiObj, config, {\n  headers: {common: {}}\n});\nconst plugin: PluginObject&lt;any&gt; = {\n  installed: false,\n  install: (vue: VueConstructor) =&gt; {\n    if (plugin.installed) {\n      return;\n    }\n    Object.defineProperties(vue.prototype, {\n      $api: {\n        get() {\n          return apiProxy;\n        }\n      }\n    });\n  }\n};\n\nexport const api = apiProxy;\n\nexport default plugin;</code></pre>\n<h3 id="使用插件">使用插件</h3>\n<pre><code class="language-typescript">import Api from &#39;./api&#39;;\nVue.use(Api);</code></pre>\n'}}]);
//# sourceMappingURL=chunk-1ff21b73.fd6575a2.js.map