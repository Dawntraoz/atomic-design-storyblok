(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(t,e,n){"use strict";n.r(e);var l={props:{iconSrc:{type:String,required:!0},iconAlt:{type:String,required:!0}}},r=n(2),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rounded-medium flex flex-col items-center justify-center w-16 h-16 mb-6"},[n("img",{attrs:{src:t.iconSrc,alt:t.iconAlt,width:"50",height:"50"}})])}),[],!1,null,null,null);e.default=component.exports},101:function(t,e,n){"use strict";n.r(e);var l={props:{imageSrc:{type:String,required:!0},imageAlt:{type:String,required:!0},color:{type:String,required:!0}},data:()=>({colors:{orange:"bg-yellow-500",purple:"bg-purple-500",blue:"bg-blue-500",green:"bg-green-500"}})},r=n(2),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("figure",{staticClass:"mb-6 rounded-full bg-red-500 pt-4",class:t.colors[t.color]},[n("img",{staticClass:"rounded-full object-cover",attrs:{src:t.imageSrc.replace("//a.storyblok.com","//img2.storyblok.com/250x250/filters:format(jpg)"),alt:t.imageAlt,width:"250",height:"250"}})])}),[],!1,null,null,null);e.default=component.exports},107:function(t,e,n){"use strict";var l=n(0),r=n(70),o=n(68),c=n(69),d=n(65),f=n(67),m=n(66);l.a.component("page-template",r.default),l.a.component("services",o.default),l.a.component("team",c.default),l.a.component("heading-section",d.default),l.a.component("service-card",f.default),l.a.component("member-card",m.default)},108:function(t,e,n){"use strict";e.a=function(t){var{query:e,enablePreview:n}=t;e.preview&&n()}},139:function(t,e,n){var content=n(200);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(64).default)("05b404dc",content,!0,{sourceMap:!1})},160:function(t,e,n){"use strict";var l={name:"Default"},r=n(2),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"min-h-screen flex flex-col bg-gray-50 font-text font-medium"},[n("Header"),t._v(" "),n("Nuxt",{staticClass:"flex-auto"}),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Header:n(36).default,Footer:n(63).default})},162:function(t,e,n){n(163),t.exports=n(164)},199:function(t,e,n){"use strict";n(139)},200:function(t,e,n){var l=n(60)((function(i){return i[1]}));l.push([t.i,".link-gray[data-v-eb03cf64]{--tw-text-opacity:1;color:rgba(107, 114, 128, var(--tw-text-opacity))}.link-gray[data-v-eb03cf64]:hover{--tw-text-opacity:1;color:rgba(37, 99, 235, var(--tw-text-opacity))}.link-gray[data-v-eb03cf64]:focus{--tw-text-opacity:1;color:rgba(37, 99, 235, var(--tw-text-opacity))}.link-gray.nuxt-link-exact-active[data-v-eb03cf64]{--tw-border-opacity:1;border-color:rgba(37, 99, 235, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(37, 99, 235, var(--tw-text-opacity))}.link-white[data-v-eb03cf64]{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}.link-white[data-v-eb03cf64]:hover{--tw-text-opacity:1;color:rgba(243, 244, 246, var(--tw-text-opacity))}.link-white[data-v-eb03cf64]:focus{--tw-text-opacity:1;color:rgba(243, 244, 246, var(--tw-text-opacity))}.link-white.nuxt-link-exact-active[data-v-eb03cf64]{--tw-border-opacity:1;border-color:rgba(243, 244, 246, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(243, 244, 246, var(--tw-text-opacity))}.nuxt-link-exact-active[data-v-eb03cf64]{border-bottom-width:2px}",""]),t.exports=l},205:function(t,e,n){var content=n(206);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(64).default)("9d54a558",content,!0,{sourceMap:!1})},206:function(t,e,n){var l=n(60),r=n(207),o=n(208),c=n(209),d=l((function(i){return i[1]}));d.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap);"]);var f=r(o),m=r(c);d.push([t.i,'@font-face{font-family:"Quicksand";font-style:normal;font-weight:500;font-display:swap;src:local("Quicksand"),url('+f+') format("truetype")}@font-face{font-family:"Gilroy Bold";font-style:normal;font-weight:700;font-display:swap;src:local("Gilroy Bold"),url('+m+') format("woff")}',""]),t.exports=d},208:function(t,e,n){t.exports=n.p+"fonts/Quicksand-Medium.74eb5c1.ttf"},209:function(t,e,n){t.exports=n.p+"fonts/Gilroy-Bold.29e8a00.woff"},210:function(t,e){},219:function(t,e){},23:function(t,e,n){"use strict";n.r(e);var l={props:{tag:{type:String,required:!0},content:{type:String,required:!0}},data:()=>({classes:{h1:"text-5xl md:text-7xl capitalize",h2:"text-3xl md:text-5xl capitalize",h3:"text-xl md:text-3xl capitalize",h4:"text-lg md:text-xl capitalize",h5:"text-base md:text-lg",h6:"text-md md:text-base"}})},r=n(2),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,{tag:"component",staticClass:"font-title font-bold text-gray-900 pb-4",class:t.classes[t.tag]},[t._v("\n  "+t._s(t.content)+"\n")])}),[],!1,null,null,null);e.default=component.exports},33:function(t,e,n){"use strict";var l={props:{error:{type:Object,required:!0}}},r=n(2),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("header",{staticClass:"text-center pt-12 pb-4"},[404===t.error.statusCode?n("Heading",{attrs:{tag:"h1",content:"Page not found"}}):n("Heading",{attrs:{tag:"h1",content:"An error occurred"}})],1),t._v(" "),n("Link",{attrs:{link:"/",content:"Home page"}})],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Heading:n(23).default,Header:n(36).default,Link:n(62).default})},36:function(t,e,n){"use strict";n.r(e);var l={computed:{availableLocaleLink(){return this.$i18n.locales.filter((i=>i.code===this.$i18n.locale)).map((t=>"en"===t.code?"/":"/".concat(t.code)))[0]},links(){return[{link:this.localePath({name:"slug",params:{slug:this.$t("servicesUrl")}}),content:this.$t("services")},{link:this.localePath({name:"slug",params:{slug:this.$t("teamUrl")}}),content:this.$t("team")}]}}},r=n(2),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"py-6"},[n("nav",{staticClass:"container flex justify-between"},[n("nuxt-link",{attrs:{to:t.availableLocaleLink}},[n("Heading",{attrs:{tag:"h2",content:"Blokim"}})],1),t._v(" "),n("LinkList",{staticClass:"flex flex-col md:flex-row items-end md:items-center py-2 space-y-2 md:space-y-0 md:space-x-12",attrs:{links:t.links}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Heading:n(23).default,LinkList:n(48).default,Header:n(36).default})},37:function(t,e,n){"use strict";n.r(e);var l={props:{content:{type:String,required:!0}}},r=n(2),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",[t._v("\n  "+t._s(t.content)+"\n")])}),[],!1,null,null,null);e.default=component.exports},48:function(t,e,n){"use strict";n.r(e);var l={props:{links:{type:Array,required:!0}}},r=n(2),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.links,(function(link){return n("li",{key:link.content},[link.external?n("ExternalLink",{attrs:{link:link.link,content:link.content,alt:link.alt}}):n("Link",{attrs:{link:link.link,content:link.content,white:link.white}})],1)})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Link:n(62).default,ExternalLink:n(98).default})},62:function(t,e,n){"use strict";n.r(e);var l={props:{link:{type:String,required:!0},content:{type:String,required:!0},white:{type:Boolean,default:!1}}},r=(n(199),n(2)),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("nuxt-link",{class:{"link-gray":!t.white,"link-white":t.white},attrs:{to:t.link}},[t._v("\n  "+t._s(t.content)+"\n")])}),[],!1,null,"eb03cf64",null);e.default=component.exports},63:function(t,e,n){"use strict";n.r(e);n(9),n(11);var l={data:()=>({links:{links:[{link:"https://twitter.com/dawntraoz/",content:"Twitter",external:!0,alt:"Dawntraoz Twitter"},{link:"https://www.linkedin.com/in/dawntraoz/",content:"LinkedIn",external:!0,alt:"Dawntraoz LinkedIn"},{link:"https://github.com/Dawntraoz/",content:"Github",external:!0,alt:"Dawntraoz Github"},{link:"https://www.dawntraoz.com/",content:"Website",external:!0,alt:"Dawntraoz Website"}],contact:[{link:"tel: 123 456 789 555",content:"123 456 789 555",external:!0,alt:"Call me at 123 456 789 555"},{link:"mailto: info@xxxx.xxx",content:"info@dawntraoz.com",external:!0,alt:"Send me an email to info@dawntraoz.com"},{link:"https://www.google.com/maps?q=amsterdam&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjnoNmnipTtAhVEqaQKHTIqCbAQ_AUoAnoECC4QBA",content:"Amsterdam, The Netherlands",external:!0,alt:"Find me at Amsterdam, The Netherlands"}]}}),computed:{availableLocalesLinks(){var t=[];return this.$i18n.locales.filter((i=>i.code!==this.$i18n.locale)).map((e=>t=[{link:this.switchLocalePath(e.code),content:e.name,white:!0},...t])),t},internalLinks(){return[{link:this.localePath({name:"slug",params:{slug:this.$t("servicesUrl")}}),content:this.$t("services")},{link:this.localePath({name:"slug",params:{slug:this.$t("teamUrl")}}),content:this.$t("team")}]}}},r=n(2),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"bg-white"},[n("div",{staticClass:"container pt-20 md:pt-32 pb-6 md:pb-12 flex flex-wrap text-gray-500"},[n("div",{staticClass:"w-full md:w-1/2 lg:w-1/3 xl:w-1/4 pr-4 pb-6"},[n("Heading",{attrs:{tag:"h2",content:"Blokim"}}),t._v(" "),n("Paragraph",{attrs:{content:t.$t("footer.desc")}})],1),t._v(" "),n("LinkSection",{attrs:{title:t.$t("footer.internal"),links:t.internalLinks}}),t._v(" "),n("LinkSection",{attrs:{title:t.$t("footer.social"),links:t.links.links}}),t._v(" "),n("LinkSection",{attrs:{title:t.$t("footer.contact"),links:t.links.contact}})],1),t._v(" "),n("div",{staticClass:"py-6 bg-gradient-to-tr from-blue-700 to-blue-800 text-white"},[n("div",{staticClass:"container flex flex-wrap justify-between"},[n("Paragraph",{staticClass:"pr-4",attrs:{content:"© Blokim - "+(new Date).getFullYear()+" All Rights Reserved"}}),t._v(" "),n("LinkList",{staticClass:"order-first md:order-none flex space-x-3",attrs:{links:t.availableLocalesLinks}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Heading:n(23).default,Paragraph:n(37).default,LinkSection:n(99).default,LinkList:n(48).default,Footer:n(63).default})},65:function(t,e,n){"use strict";n.r(e);var l={props:{blok:{type:Object,required:!0}}},r=n(2),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{directives:[{name:"editable",rawName:"v-editable",value:t.blok,expression:"blok"}],staticClass:"flex flex-col items-center text-center"},[t.blok.subtitle?n("Paragraph",{staticClass:"font-title font-bold text-gray-900 pb-4 text-base md:text-lg tracking-widest text-blue-600 uppercase",attrs:{content:t.blok.subtitle}}):t._e(),t._v(" "),t.blok.title?n("Heading",{attrs:{tag:"h2",content:t.blok.title}}):t._e(),t._v(" "),n("Paragraph",{staticClass:"text-gray-600 md:text-lg max-w-2xl md:pt-2",attrs:{content:t.blok.intro}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Paragraph:n(37).default,Heading:n(23).default,Header:n(36).default})},66:function(t,e,n){"use strict";n.r(e);var l={props:{blok:{type:Object,required:!0}}},r=n(2),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{directives:[{name:"editable",rawName:"v-editable",value:t.blok,expression:"blok"}],staticClass:"flex flex-col items-center justify-center",attrs:{role:"article"}},[n("Picture",{attrs:{color:t.blok.color,"image-src":t.blok.picture.filename,"image-alt":t.blok.picture.alt}}),t._v(" "),n("Heading",{attrs:{tag:"h4",content:t.blok.name}}),t._v(" "),n("Paragraph",{staticClass:"text-md text-gray-500",attrs:{content:t.blok.job_title}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Picture:n(101).default,Heading:n(23).default,Paragraph:n(37).default})},67:function(t,e,n){"use strict";n.r(e);var l={props:{blok:{type:Object,required:!0}},data:()=>({colors:{orange:"bg-yellow-500",purple:"bg-purple-500",blue:"bg-blue-500",green:"bg-green-500"}})},r=n(2),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{directives:[{name:"editable",rawName:"v-editable",value:t.blok,expression:"blok"}],staticClass:"group h-full p-8 rounded-large shadow-inner bg-blue-50 transition duration-500 ease-in-out hover:shadow-2xl hover:bg-white",attrs:{role:"article"}},[n("Icon",{staticClass:"group-hover:shadow-lg",class:t.colors[t.blok.color],attrs:{"icon-src":t.blok.icon.filename,"icon-alt":t.blok.icon.alt}}),t._v(" "),n("Heading",{attrs:{tag:"h4",content:t.blok.name}}),t._v(" "),n("Paragraph",{staticClass:"text-md text-gray-600 pb-4",attrs:{content:t.blok.description}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Icon:n(100).default,Heading:n(23).default,Paragraph:n(37).default})},68:function(t,e,n){"use strict";n.r(e);var l={props:{blok:{type:Object,required:!0}}},r=n(2),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{directives:[{name:"editable",rawName:"v-editable",value:t.blok,expression:"blok"}],staticClass:"py-6 container"},[t._l(t.blok.heading,(function(t){return n(t.component,{key:t._uid,tag:"component",attrs:{blok:t}})})),t._v(" "),n("div",{staticClass:"flex flex-wrap items-stretch md:-mr-6 py-8 md:py-16"},t._l(t.blok.services,(function(t){return n("div",{key:t._uid,staticClass:"w-full md:w-1/2 lg:w-1/3 xl:w-1/4 md:pr-6 pb-6"},[n(t.component,{tag:"component",attrs:{blok:t}})],1)})),0)],2)}),[],!1,null,null,null);e.default=component.exports},69:function(t,e,n){"use strict";n.r(e);var l={props:{blok:{type:Object,required:!0}}},r=n(2),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{directives:[{name:"editable",rawName:"v-editable",value:t.blok,expression:"blok"}],staticClass:"py-6 container"},[t._l(t.blok.heading,(function(t){return n(t.component,{key:t._uid,tag:"component",attrs:{blok:t}})})),t._v(" "),n("div",{staticClass:"flex flex-wrap justify-center md:-mr-6 py-8 md:py-16"},t._l(t.blok.members,(function(t){return n("div",{key:t._uid,staticClass:"w-full md:w-1/2 lg:w-1/3 md:pr-6 pb-6"},[n(t.component,{tag:"component",attrs:{blok:t}})],1)})),0)],2)}),[],!1,null,null,null);e.default=component.exports},70:function(t,e,n){"use strict";n.r(e);var l={props:{blok:{type:Object,required:!0}}},r=n(2),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"editable",rawName:"v-editable",value:t.blok,expression:"blok"}]},[n("header",{staticClass:"container text-center"},[t.blok.title?n("Heading",{attrs:{tag:"h1",content:t.blok.title}}):t._e()],1),t._v(" "),t._l(t.blok.body,(function(t){return n(t.component,{key:t._uid,tag:"component",attrs:{blok:t}})}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Heading:n(23).default,Header:n(36).default})},98:function(t,e,n){"use strict";n.r(e);var l={props:{content:{type:String,required:!0},link:{type:String,required:!0},alt:{type:String,required:!0}}},r=n(2),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{staticClass:"hover:text-blue-600 text-gray-500",attrs:{target:"_blank",rel:"noopener noreferrer",href:t.link,alt:t.alt}},[t._v("\n  "+t._s(t.content)+"\n")])}),[],!1,null,null,null);e.default=component.exports},99:function(t,e,n){"use strict";n.r(e);var l={props:{title:{type:String,required:!0},links:{type:Array,required:!0}}},r=n(2),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full md:w-1/2 lg:w-1/3 xl:w-1/4 pr-4 pb-6"},[n("Heading",{attrs:{tag:"h3",content:t.title}}),t._v(" "),n("LinkList",{staticClass:"flex flex-col space-y-2",attrs:{links:t.links}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Heading:n(23).default,LinkList:n(48).default})}},[[162,4,1,5]]]);