(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{337:function(t,e,o){var content=o(365);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(28).default)("53aaab38",content,!0,{sourceMap:!1})},364:function(t,e,o){"use strict";o(337)},365:function(t,e,o){var r=o(27)((function(i){return i[1]}));r.push([t.i,"[data-v-1fd5441a] .vue-typer .custom.char{--tw-text-opacity:1;color:rgba(79, 70, 229, var(--tw-text-opacity))}[data-v-1fd5441a] .vue-typer .custom.char.selected{--tw-bg-opacity:1;background-color:rgba(79, 70, 229, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}[data-v-1fd5441a] .vue-typer .custom.caret{width:5px;--tw-bg-opacity:1;background-color:rgba(79, 70, 229, var(--tw-bg-opacity))}.hover-arrow[data-v-1fd5441a]{position:relative;stroke-width:1px}",""]),t.exports=r},380:function(t,e,o){"use strict";o.r(e);o(20);var r=o(429),l={data:function(){return{tooltipShow:[]}},methods:{toggleTooltip:function(t){console.log(this.tooltipShow[t]),this.tooltipShow[t]?this.$set(this.tooltipShow,t,!1):(this.$set(this.tooltipShow,t,!0),Object(r.a)(this.$refs["btnRef-".concat(t)][0],this.$refs["tooltipRef-".concat(t)][0],{placement:"right",modifiers:[{name:"preventOverflow",options:{mainAxis:!0,altAxis:!0,altBoundary:!0,tether:!1}},{name:"offset",options:{offset:[0,12]}}]}))}},created:function(){var t=this;0==this.tooltipShow.length&&this.$config.internships.meta.forEach((function(e,o){t.tooltipShow[o]=!1}))}},n=(o(364),o(5)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"relative bg-gray-800 overflow-hidden"},[o("div",{staticClass:"relative"},[o("main",{},[o("div",{staticClass:"mx-auto py-8 max-w-7xl border-l border-r border-dashed border-gray-700"},[o("div",{staticClass:"lg:grid lg:grid-cols-12",attrs:{"data-aos":"zoom-in"}},[o("div",{staticClass:"px-4 sm:px-6 lg:border-r lg:border-dashed lg:border-gray-700 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center"},[o("div",[t.$config.projects.enabled?o("nuxt-link",{staticClass:"group inline-flex hover:bg-black items-center text-white bg-gray-900 rounded-full p-0.5 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200",attrs:{to:t.localePath("/projects")}},[o("span",{staticClass:"px-3 py-0.5 text-white text-xs font-semibold leading-5 tracking-wide bg-indigo-600 rounded-full"},[t._v(t._s(t.$t("hero.iBlogTech")))]),t._v(" "),o("span",{staticClass:"ml-4 text-xs"},[t._v(t._s(t.$t("hero.haveALook")))]),t._v(" "),o("svg",{staticClass:"transition duration-500 transform block group-hover:rotate-180 hover-arrow ml-2 w-5 h-5 text-gray-500",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"}},[o("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])]):t._e(),t._v(" "),o("h1",{staticClass:"mt-4 text-3xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl"},[o("span",{staticClass:"md:block"},[t._v(t._s(t.$t("hero.friendlyNeighborhood")))]),t._v(" "),o("div",[o("vue-typer",{attrs:{text:t.$t("hero.words")}})],1)]),t._v(" "),o("p",{staticClass:"mt-3 text-base text-gray-300 sm:mt-5"},[t._v("\n                "+t._s(t.$t("hero.description"))+"\n              ")]),t._v(" "),t.$config.internships.enabled?o("p",{staticClass:"mt-8 text-sm text-white lowercase tracking-wide font-semibold sm:mt-10 uppercase "},[t._v("Internships at")]):t._e(),t._v(" "),t.$config.internships.enabled?o("div",{staticClass:"mt-5 w-full sm:mx-auto lg:ml-0"},[o("div",{staticClass:"flex flex-wrap space-x-1 items-start items-center space-x-4"},t._l(t.$config.internships.meta,(function(e,r){return o("div",{key:r},[o("a",{ref:"btnRef-"+r,refInFor:!0,staticClass:"flex items-center justify-center",attrs:{href:e.url,target:"_blank"},on:{mouseenter:function(e){return t.toggleTooltip(r)},mouseleave:function(e){return t.toggleTooltip(r)}}},[o("img",{staticClass:"h-8 rounded-sm sm:h-9 mr-5 ",attrs:{src:e.src,alt:e.name}})]),t._v(" "),o("small",{staticClass:"text-gray-300 hidden md:inline-block",domProps:{textContent:t._s(e.year)}}),t._v(" "),o("div",{ref:"tooltipRef-"+r,refInFor:!0,staticClass:" bg-indigo-600 bg-opacity-90 border-0 ml-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg",class:{hidden:!t.tooltipShow[r],"md:block":t.tooltipShow[r]}},[o("div",[o("div",{staticClass:"bg-indigo-600 bg-opacity-90 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-blueGray-100 uppercase rounded-t-lg"},[t._v("\n                          "+t._s(e.name)+"\n                        ")]),t._v(" "),o("div",{staticClass:"text-white p-3"},[t._v("\n                          "+t._s(e.period)+"\n                        ")]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.description,expression:"firm.description"}],staticClass:"text-white p-3"},[t._v("\n                          "+t._s(e.description)+"\n                        ")]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:e.grade,expression:"firm.grade"}],staticClass:"text-white p-3"},[t._v("\n                          Final grade: "+t._s(e.grade)+"\n                        ")])])])])})),0)]):t._e()],1)]),t._v(" "),o("div",{staticClass:"mt-8 px-5 sm:mt-16 lg:mt-0 lg:col-span-6"},[o("div",{staticClass:"flex-shrink-0 w-full sm:mx-auto flex flex-1 items-center justify-center rounded-lg sm:overflow-hidden"},[o("img",{staticClass:"rounded-md h-80",attrs:{src:t.$config.image,alt:t.$config.name}})])])])])])])])}),[],!1,null,"1fd5441a",null);e.default=component.exports}}]);