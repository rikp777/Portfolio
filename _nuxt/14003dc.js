(window.webpackJsonp=window.webpackJsonp||[]).push([[23,12],{338:function(t,e,n){var content=n(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("0e987878",content,!0,{sourceMap:!1})},365:function(t,e,n){"use strict";n(338)},366:function(t,e,n){var o=n(27)((function(i){return i[1]}));o.push([t.i,".buttons[data-v-99aa8488]{margin-left:0!important;margin-right:0!important}.content[data-v-99aa8488]{padding:12px}",""]),t.exports=o},382:function(t,e,n){"use strict";n.r(e);n(370),n(150);var o=n(371),r=n.n(o),d=(n(372),{props:{src:{type:String,required:!0}},components:{pdf:r.a},data:function(){return{page:1,numPages:0,pdfdata:void 0,errors:[],scale:"page-width"}},computed:{formattedZoom:function(){return Number.parseInt(100*this.scale)}},mounted:function(){this.getPdf()},watch:{show:function(s){s&&this.getPdf()},page:function(p){(window.pageYOffset<=this.findPos(document.getElementById(p))||document.getElementById(p+1)&&window.pageYOffset>=this.findPos(document.getElementById(p+1)))&&document.getElementById(p).scrollIntoView()}},methods:{handle_pdf_link:function(t){document.getElementById(String(t.pageNumber)).scrollIntoView()},getPdf:function(){var t=this,e=this;e.pdfdata=r.a.createLoadingTask(this.src),e.pdfdata.then((function(n){e.numPages=n.numPages,window.onscroll=function(){d(),r()};var o=t.$refs.buttons.offsetTop,r=function(){window.pageYOffset>=o?t.$refs.buttons.classList.remove("hidden"):t.$refs.buttons.classList.add("hidden")},d=function(){var i=1,t=Number(n.numPages);do{window.pageYOffset>=e.findPos(document.getElementById(i))&&window.pageYOffset<=e.findPos(document.getElementById(i+1))&&(e.page=i),i++}while(i<t);window.pageYOffset>=e.findPos(document.getElementById(i))&&(e.page=i)}}))},findPos:function(t){return t&&t.offsetTop?t.offsetTop:0}}}),c=(n(373),n(365),n(5)),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"pdfvuer"}},[n("div",{ref:"buttons",staticClass:"ui grey three item inverted bottom fixed menu transition hidden"},[n("a",{staticClass:"item",on:{click:function(e){!(t.page>1)||t.page--}}},[n("i",{staticClass:"left chevron icon"}),t._v("\n      Back\n    ")]),t._v(" "),n("a",{staticClass:"ui active item"},[t._v("\n      "+t._s(t.page)+" / "+t._s(t.numPages?t.numPages:"∞")+"\n    ")]),t._v(" "),n("a",{staticClass:"item",on:{click:function(e){!(t.page<t.numPages)||t.page++}}},[t._v("\n      Forward\n      "),n("i",{staticClass:"right chevron icon"})])]),t._v(" "),n("div",{ref:"buttons",staticClass:"ui grey three item inverted bottom fixed menu transition hidden"},[n("a",{staticClass:"item",on:{click:function(e){t.scale-=t.scale>.2?.1:0}}},[n("i",{staticClass:"left chevron icon"}),t._v("\n        Zoom -\n    ")]),t._v(" "),n("a",{staticClass:"ui active item"},[t._v("\n      "+t._s(t.formattedZoom)+" %\n    ")]),t._v(" "),n("a",{staticClass:"item",on:{click:function(e){t.scale+=t.scale<2?.1:0}}},[t._v("\n      Zoom +\n      "),n("i",{staticClass:"right chevron icon"})])]),t._v(" "),t._l(t.numPages,(function(i){return n("pdf",{key:i,staticStyle:{width:"100%",margin:"8px auto"},attrs:{src:t.pdfdata,id:i,page:i,scale:t.scale,annotation:!0,resize:!0},on:{"update:scale":function(e){t.scale=e},"link-clicked":t.handle_pdf_link}},[n("template",{slot:"loading"},[t._v("\n      loading content here...\n    ")])],2)}))],2)}),[],!1,null,"99aa8488",null);e.default=component.exports},436:function(t,e,n){"use strict";n.r(e);n(56),n(16);var o={head:function(){return{title:"📎 ".concat(this.$t("nav.resume")," -- ").concat(this.$config.name)}},data:function(){return{passwordIsCorrect:!1,password:""}},methods:{checkPassword:function(){this.password==this.$config.resume.password&&(this.passwordIsCorrect=!0)}}},r=n(5),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"max-w-7xl px-4 mx-auto py-12 border-l border-r border-dashed border-gray-700"},[n("div",{staticClass:"shadow-md max-w-5xl mx-auto bg-gray-700 overflow-hidden rounded-lg divide-gray-800"},[n("div",{staticClass:"bg-gray-900 py-3 px-6 flex justify-between items-center",attrs:{"data-aos":"fade-up"}},[n("h1",{staticClass:"text-lg flex flex-row font-semibold text-gray-200"},[n("span",{staticClass:"pr-1"},[t._v(t._s(t.$t("nav.resume")))]),t._v("\n        - "),n("span",{staticClass:"pl-1 hidden md:block"},[t._v(t._s(t.$config.name))])]),t._v(" "),t.passwordIsCorrect?n("a",{staticClass:"inline-flex text-indigo-500 hover:text-indigo-600 items-center px-2 py-1 border\n         border-transparent shadow-sm text-sm font-medium\n         rounded-md btn-color-style",attrs:{target:"_blank",rel:"noreferrer",href:t.$config.pdfUrl,download:t.$config.name+".pdf"}},[n("svg",{staticClass:"-ml-1 mr-3 h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z","clip-rule":"evenodd"}})]),t._v("\n        "+t._s(t.$t("download"))+"\n      ")]):t._e(),t._v(" "),t.passwordIsCorrect?t._e():n("div",[n("small",{staticClass:"text-gray-200"},[t._v(t._s(t.$t("resume.provide"))+t._s(t.$config.resume.pdfUrl))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"shadow appearance-none border rounded py-2 px-3 text-gray-200 bg-gray-900 leading-tight focus:outline-none focus:shadow-outline",attrs:{id:"password",type:"text",placeholder:t.$t("resume.password")},domProps:{value:t.password},on:{change:function(e){return t.checkPassword()},input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),t._v(" "),t.passwordIsCorrect?n("div",{staticClass:"px-4 py-5 sm:p-6 flex items-center justify-center"},[n("div",{staticClass:"w-full dark:text-gray-500 text-gray-800 font-bold"},[n("PdfViewer",{staticClass:"shadow-md",attrs:{src:t.$config.resume.pdfUrl}})],1)]):t._e()])])}),[],!1,null,"ccd77d7c",null);e.default=component.exports;installComponents(component,{PdfViewer:n(382).default})}}]);