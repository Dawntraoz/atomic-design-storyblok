(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{264:function(t,e,o){"use strict";o.r(e);var n=o(3),r=(o(24),o(51),{asyncData:t=>Object(n.a)((function*(){var e,o,n=t.query._storyblok||t.isDev?"draft":"published",r=t.app.i18n.locale,c=t.params.slug;try{var l=yield t.app.$storyapi.get("cdn/stories/".concat(c),{language:r,version:n});return yield t.store.dispatch("i18n/setRouteParams",(e=l.data.story,o={en:{slug:e.slug}},e.translated_slugs.forEach((t=>{var e=t.path.split("/");o[t.lang]={slug:e[e.length-1]}})),o)),{story:l.data.story}}catch(e){e.response?t.error({statusCode:e.response.status,message:e.response.data}):t.error({statusCode:404,message:"Failed to receive content form api"})}}))(),data:()=>({story:{content:{}}}),mounted(){this.$storybridge((()=>{var t=new window.StoryblokBridge;t.on("input",(t=>{t.story.id===this.story.id&&(this.story.content=t.story.content)})),t.on(["published","change"],(t=>{this.$nuxt.$router.go({path:this.$nuxt.$router.currentRoute,force:!0})}))}))}}),c=o(2),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[t.story.content.component?o(t.story.content.component,{key:t.story.content._uid,tag:"component",attrs:{blok:t.story.content}}):t._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);