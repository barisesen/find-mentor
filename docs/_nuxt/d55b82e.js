(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{379:function(t,e,r){var content=r(726);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("04818b40",content,!0,{sourceMap:!1})},380:function(t,e,r){var content=r(728);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("5972ef16",content,!0,{sourceMap:!1})},725:function(t,e,r){"use strict";r(379)},726:function(t,e,r){(e=r(49)(!1)).push([t.i,".profile-card{list-style:none;display:flex;justify-content:space-between;align-items:center;min-height:36vh;background-color:var(--color-ui-02);margin:18px auto;padding:28px 16px;box-shadow:0 0 24px 0 rgba(0,0,0,.12)}.avatar,.links,.name{margin-top:14px}.name{font-size:26px;color:var(--color-text-01)}.description,.seeks{color:var(--color-text-02)}.social-media{display:flex;justify-content:flex-start;align-items:center}.social-media .button{position:relative;padding:8px 18px;margin-right:16px;border:2px solid transparent;border-radius:0;font-size:14px;color:#fff}.social-media .button svg{margin-right:4px}.twitter{background-color:#00acee}.github{background-color:#24292e}.linkedin{background-color:#0e76a8}.avatar{width:200px;height:200px;border-radius:100%;margin-right:30px;box-shadow:0 0 24px 0 rgba(0,0,0,.12)}.left-main{display:flex;justify-content:space-between}.main{margin-right:20px}.text{font-size:17px;margin-top:10px}.markdown{display:flex;justify-content:center;align-items:center}.qrcode{margin-right:24px}@media (max-width:1098px){.button{padding:10px;margin:0 5px}.social-media-button{justify-content:center}.profile{display:flex}.left-main,.profile{align-items:center;justify-content:center;flex-wrap:wrap}.qrcode{margin-right:32px}}#disqus_thread{background:var(--color-disqus-thread);border:8px;border-radius:15px;padding:5px}.accordion-color{background-color:var(--color-ui-02);border:none}",""]),t.exports=e},727:function(t,e,r){"use strict";r(380)},728:function(t,e,r){(e=r(49)(!1)).push([t.i,".app-badge[data-v-e8dcad46]{position:relative;display:inline-block;background-color:transparent;border:1px solid transparent;padding:4px 12px;font-size:16px}",""]),t.exports=e},738:function(t,e,r){"use strict";r.r(e);r(8),r(12),r(9),r(14),r(15),r(6),r(45),r(16),r(21),r(70),r(54);var n=r(20),o=r(391),c=r(395),l=new(r.n(c).a)({toc:!0,sanitize:!0}),d={components:{Timeline:o.Timeline},mixins:[{methods:{getPersonTypeLabel:function(t){var e=t.model;return"mentor"===e?"Mentor":"mentee"===e?"Mentee":"Mentor ve Mentee"}}},{methods:{getPersonTypeColor:function(t){var e=t.model;return"mentor"===e?"var(--color-ui-03)":"mentee"===e?"var(--color-ui-04)":"var(--color-ui-05)"}}}],props:{type:{type:String,required:!0},slug:{type:String,default:""},name:{type:String,default:""},avatar:{type:String,default:""},interests:{type:String,default:""},twitter:{type:String,default:""},github:{type:String,default:""},linkedin:{type:String,default:""},goals:{type:String,default:""},mentorships:{type:Array,default:[]}},data:function(){return{markdown:"",projects:[]}},computed:{twitterHandle:function(){return this.twitter.split("twitter.com/")[1]},profileCardStyleAsPersonType:function(){return"\n        border-top: 4px solid ".concat(this.getPersonTypeColor({model:this.type}),"\n      ")}},created:function(){this.github.length&&this.renderMarkdown(),this.mentorships.length&&this.renderMentorshipProjects()},methods:{renderMarkdown:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o,html;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.github.replace(/\/$/gi,"").split("/").pop(),e.next=3,fetch("https://raw.githubusercontent.com/".concat(r,"/").concat(r,"/master/README.md")).then((function(t){return 200===t.status?t.text():""}));case 3:return n=e.sent,e.next=6,l.toMarkup(n);case 6:o=e.sent,html=o.html,t.markdown=html;case 9:case"end":return e.stop()}}),e)})))()},renderMentorshipProjects:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],t.mentorships.map((function(t){var e=t.project_adress.split("/").slice(3).join("/");r.push(fetch("https://raw.githubusercontent.com/".concat(e,"/master/README.md")).then((function(t){return 200===t.status?t.text():""})).then(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,html;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.toMarkup(e);case 2:return r=t.sent,html=r.html,t.abrupt("return",html);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))})),e.next=4,Promise.all(r);case 4:t.projects=e.sent;case 5:case"end":return e.stop()}}),e)})))()}}},m=(r(725),r(44)),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"container"},[r("ul",{staticClass:"profile-card",style:t.profileCardStyleAsPersonType,attrs:{itemscope:"",itemtype:"https://schema.org/Person"}},[r("div",{staticClass:"left-main"},[t.avatar.length?r("li",{attrs:{loading:"lazy"}},[r("img",{staticClass:"avatar",attrs:{src:t.avatar,itemprop:"image",alt:t.name}})]):t._e(),t._v(" "),r("div",{staticClass:"main"},[r("app-badge",{attrs:{"bg-color":t.getPersonTypeColor({model:t.type}),"text-color":t.getPersonTypeColor({model:t.type})}},[t._v("\n            "+t._s(t.getPersonTypeLabel({model:t.type}))+"\n          ")]),t._v(" "),t.name?r("li",{staticClass:"name",attrs:{itemprop:"name"}},[t._v("\n            "+t._s(t.name)+"\n          ")]):t._e(),t._v(" "),r("hr"),t._v(" "),t.interests&&t.interests.length?r("li",{staticClass:"text",attrs:{itemprop:"seeks"}},[r("b",[t._v("Interests:")]),t._v(" "+t._s(t.interests)+"\n          ")]):t._e(),t._v(" "),t.goals&&t.goals.length?r("li",{staticClass:"text",attrs:{itemprop:"description"}},[r("b",[t._v("Goals:")]),t._v(" "+t._s(t.goals)+"\n          ")]):t._e(),t._v(" "),r("div",{staticClass:"social-media"},[t.twitter.length>0?r("li",{staticClass:"links"},[r("a",{attrs:{href:t.twitter,target:"_blank",itemprop:"sameAs"}},[r("button",{staticClass:"button twitter"},[r("font-awesome-icon",{attrs:{icon:["fab","twitter"],color:"white"}}),t._v("\n                  Twitter\n                ")],1)])]):t._e(),t._v(" "),t.github.length>0?r("li",{staticClass:"links"},[r("a",{attrs:{href:t.github,target:"_blank",itemprop:"sameAs"}},[r("button",{staticClass:"button github"},[r("font-awesome-icon",{attrs:{icon:["fab","github"],color:"white"}}),t._v("\n                  GitHub\n                ")],1)])]):t._e(),t._v(" "),t.linkedin.length>0?r("li",{staticClass:"links"},[r("a",{attrs:{href:t.linkedin,target:"_blank",itemprop:"sameAs"}},[r("button",{staticClass:"button linkedin"},[r("font-awesome-icon",{attrs:{icon:["fab","linkedin"],color:"white"}}),t._v("\n                  LinkedIn\n                ")],1)])]):t._e()])],1)]),t._v(" "),r("li",{staticClass:"text"},[r("a",{attrs:{href:"https://findmentor.network/peer/"+t.slug,target:"_blank",rel:"noopener noreferrer",itemprop:"url"}},[r("qrcode",{staticClass:"qrcode",attrs:{value:"https://findmentor.network/peer/"+t.slug,options:{width:200}}})],1)])]),t._v(" "),t.markdown.length?r("h2",[t._v("\n      GitHub\n      "),r("hr")]):t._e(),t._v(" "),r("div",{domProps:{innerHTML:t._s(t.markdown)}}),t._v(" "),r("hr"),t._v(" "),r("h2",[t._v("\n      Gave Feedback\n    ")]),t._v(" "),r("hr"),t._v(" "),r("div",{attrs:{id:"disqus_thread"}}),t._v(" "),r("hr"),t._v(" "),r("h2",[t._v("\n      Active Mentorships\n    ")]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"accordion",attrs:{role:"tablist"}},t._l(t.mentorships,(function(e,n){return r("b-card",{key:e.slug,staticClass:"mb-1 accordion-color",attrs:{"no-body":""}},[r("b-card-header",{staticClass:"p-1",attrs:{"header-tag":"header",role:"tab"}},[r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:e.slug,expression:"mentorship.slug"}],attrs:{block:"",variant:"dark"}},[t._v("\n            "+t._s(e.slug)+"\n          ")])],1),t._v(" "),r("b-collapse",{attrs:{id:e.slug,accordion:"my-accordion",role:"tabpanel"}},[r("b-card-body",[t.projects[n]?r("b-card-text",[r("div",{domProps:{innerHTML:t._s(t.projects[n])}})]):r("b-card-text",[t._v("This project does not have readme file, "),r("a",{attrs:{href:e.project_adress,target:"_blank"}},[t._v("please visit project to see content.")])])],1)],1)],1)})),1),t._v(" "),r("hr"),t._v(" "),t.twitter.length?r("Timeline",{attrs:{id:t.twitterHandle,"source-type":"profile",options:{tweetLimit:"5"}}}):t._e(),t._v(" "),r("h2",[t._v("Gave Feedback")]),t._v(" "),r("div",{attrs:{id:"disqus_thread"}}),t._v(" "),r("hr"),t._v(" "),t.twitter.length?[r("Timeline",{directives:[{name:"show",rawName:"v-show",value:"dark"===t.$colorMode.value,expression:"$colorMode.value === 'dark'"}],attrs:{id:t.twitterHandle,"source-type":"profile",options:{tweetLimit:"5",theme:"dark"}}}),t._v(" "),r("Timeline",{directives:[{name:"show",rawName:"v-show",value:"light"===t.$colorMode.value,expression:"$colorMode.value === 'light'"}],attrs:{id:t.twitterHandle,"source-type":"profile",options:{tweetLimit:"5",theme:"light"}}})]:t._e()],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppBadge:r(739).default})},739:function(t,e,r){"use strict";r.r(e);r(8);var n={name:"AppBadge",props:{tag:{type:String,required:!1,default:"span"},bgColor:{type:String,required:!1,default:"var(--color-ui-06)"},textColor:{type:String,required:!1,default:"var(--color-text-04)"}},computed:{colorStyle:function(){return"border-color: ".concat(this.bgColor,"; color: ").concat(this.textColor)}}},o=(r(727),r(44)),component=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component",staticClass:"app-badge",style:this.colorStyle},[this._t("default")],2)}),[],!1,null,"e8dcad46",null);e.default=component.exports},745:function(t,e,r){"use strict";r.r(e);r(8),r(17);var n=r(39),o=(r(54),r(20)),c={asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,c,l,d,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,o=t.params,c=t.error,e.next=3,r("persons").where({slug:{$eq:o.slug}}).fetch();case 3:if(l=e.sent,d=Object(n.a)(l,1),m=d[0]){e.next=8;break}return e.abrupt("return",c({statusCode:404,message:"Not found"}));case 8:return e.abrupt("return",{doc:m});case 9:case"end":return e.stop()}}),e)})))()},computed:{personType:function(){return this.$lowerCase(this.doc.mentor)}},head:function(){return{title:this.doc.name,meta:[{hid:"description",name:"description",content:"".concat(this.doc.name," - ").concat(this.doc.interests)},{hid:"twitter:title",name:"twitter:title",content:this.doc.name},{hid:"twitter:description",name:"twitter:description",content:"".concat(this.doc.name," - ").concat(this.doc.interests)},{hid:"twitter:image",name:"twitter:image",content:this.doc.avatar},{hid:"twitter:image:alt",name:"twitter:image:alt",content:this.doc.name},{hid:"og:title",property:"og:title",content:this.doc.name},{hid:"og:description",property:"og:description",content:"".concat(this.doc.name," - ").concat(this.doc.interests)},{hid:"og:image",property:"og:image",content:this.doc.avatar},{hid:"og:image:secure_url",property:"og:image:secure_url",content:this.doc.avatar},{hid:"og:image:alt",property:"og:image:alt",content:this.doc.name}],script:[{src:"/disqus.js"},{src:"//findmentor.disqus.com/count.js",id:"dsq-count-scr"}]}}},l=r(44),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Person",{attrs:{type:t.personType,slug:t.doc.slug,name:t.doc.name,twitter:t.doc.twitter_handle,linkedin:t.doc.linkedin,github:t.doc.github,avatar:t.doc.avatar,interests:t.doc.interests,goals:t.doc.goals,mentorships:t.doc.mentorships}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Person:r(738).default})}}]);