webpackJsonp([1],{"2n8y":function(n,t){},"34Gd":function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c;return n._m(0)},a=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("p",[n._v("General Smith Ready!")])])}],i={render:o,staticRenderFns:a};t.a=i},"6M5Y":function(n,t,e){"use strict";t.a={name:"agent",mounted:function(){this.activateComponent(this.$options.name)},beforeDestroy:function(){this.deactivateComponent(this.$options.name)}}},CiXa:function(n,t){},Fs8J:function(n,t,e){"use strict";var o=e("kSxZ"),a=e("msvZ"),i=e("t54M"),c=e("dn6M"),s=e("sPwj");t.a={name:"home",data:function(){return{currentView:"agent",components:["agent","colonel","general","lieutenant","sergeant"],componentsIndex:0}},components:{Agent:o.a,Colonel:a.a,General:i.a,Lieutenant:c.a,Sergeant:s.a},mounted:function(){var n=this;setInterval(function(){n.componentsIndex>=n.components.length?(n.currentView=n.components[0],n.componentsIndex=1):(n.currentView=n.components[n.componentsIndex],n.componentsIndex+=1)},1500)}}},G0Ma:function(n,t,e){"use strict";var o=e("IcnI");t.a={store:o.a,install:function(n,t){n.prototype.$store=o.a}}},IFm3:function(n,t,e){"use strict";t.a={name:"sergeant",mounted:function(){this.activateComponent(this.$options.name)},beforeDestroy:function(){this.deactivateComponent(this.$options.name)}}},IGiV:function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c;return n._m(0)},a=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("p",[n._v("Colonel Sanders Reporting For Duty!")])])}],i={render:o,staticRenderFns:a};t.a=i},IcnI:function(n,t,e){"use strict";var o=e("7+uW"),a=e("NYxO"),i=e("qQWK"),c=e.n(i);o.a.use(a.a);t.a=new a.a.Store({state:{components:{active:[],dead:[]}},getters:{activeComponents:function(n){return n.components.active},deadComponents:function(n){return n.components.dead}},actions:{activateComponent:function(n,t){var e=n.commit,o=n.state;-1===o.components.active.indexOf(t)&&e("addActiveComponent",t);var a=o.components.dead.indexOf(t);a>-1&&e("removeDeadComponent",a)},deactivateComponent:function(n,t){var e=n.commit,o=n.state,a=o.components.active.indexOf(t);a>-1&&e("removeActiveComponent",a),-1===o.components.dead.indexOf(t)&&e("addDeadComponent",t)}},mutations:{addActiveComponent:function(n,t){n.components.active.push(t)},addDeadComponent:function(n,t){n.components.dead.push(t)},removeActiveComponent:function(n,t){n.components.active.splice(t,1)},removeDeadComponent:function(n,t){n.components.dead.splice(t,1)}},strict:!1,plugins:[c.a]})},M93x:function(n,t,e){"use strict";function o(n){e("2n8y")}var a=e("xJD8"),i=e("RlXV"),c=e("VU/8"),s=o,r=c(a.a,i.a,!1,s,null,null);t.a=r.exports},MNXf:function(n,t){},MToR:function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c;return n._m(0)},a=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("p",[n._v("Lieutenant X Sir!")])])}],i={render:o,staticRenderFns:a};t.a=i},Mayd:function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c;return n._m(0)},a=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("p",[n._v("Sergeant Doing The Most!")])])}],i={render:o,staticRenderFns:a};t.a=i},NHnr:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=e("Dd8w"),a=e.n(o),i=e("7+uW"),c=e("NYxO"),s=e("G0Ma"),r=e("M93x"),u=e("YaEn");i.a.config.productionTip=!1,i.a.use(s.a);var m={computed:a()({},Object(c.c)(["activeComponents","deadComponents"])),methods:a()({},Object(c.b)(["activateComponent","deactivateComponent"]))};i.a.mixin(m),new i.a({el:"#app",router:u.a,template:"<App/>",components:{App:r.a}})},PM9l:function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("h4",[n._v("Report Status:")]),n._v(" "),e("transition",{attrs:{name:"component-fade",mode:"out-in"}},[e(n.currentView,{tag:"component"})],1),n._v(" "),e("div",[e("h5",[n._v("Active Team Members:")]),n._v(n._s(n.activeComponents)+"\n  ")]),n._v(" "),e("div",[e("h5",[n._v("Dormant Team Members:")]),n._v(n._s(n.deadComponents)+"\n  ")])],1)},a=[],i={render:o,staticRenderFns:a};t.a=i},"QQ8+":function(n,t,e){"use strict";t.a={name:"colonel",mounted:function(){this.activateComponent(this.$options.name)},beforeDestroy:function(){this.deactivateComponent(this.$options.name)}}},RlXV:function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},a=[],i={render:o,staticRenderFns:a};t.a=i},SypP:function(n,t){},YaEn:function(n,t,e){"use strict";var o=e("7+uW"),a=e("/ocq"),i=e("lO7g");o.a.use(a.a),t.a=new a.a({routes:[{path:"/",name:"Home",component:i.a}]})},dTUm:function(n,t){},dn6M:function(n,t,e){"use strict";function o(n){e("MNXf")}var a=e("xKFx"),i=e("MToR"),c=e("VU/8"),s=o,r=c(a.a,i.a,!1,s,"data-v-8be0fcf2",null);t.a=r.exports},i7dW:function(n,t,e){"use strict";t.a={name:"general",mounted:function(){this.activateComponent(this.$options.name)},beforeDestroy:function(){this.deactivateComponent(this.$options.name)}}},kSxZ:function(n,t,e){"use strict";function o(n){e("dTUm")}var a=e("6M5Y"),i=e("nq3j"),c=e("VU/8"),s=o,r=c(a.a,i.a,!1,s,"data-v-2fcd4b85",null);t.a=r.exports},lO7g:function(n,t,e){"use strict";function o(n){e("stZM")}var a=e("Fs8J"),i=e("PM9l"),c=e("VU/8"),s=o,r=c(a.a,i.a,!1,s,"data-v-d59fdae2",null);t.a=r.exports},msvZ:function(n,t,e){"use strict";function o(n){e("SypP")}var a=e("QQ8+"),i=e("IGiV"),c=e("VU/8"),s=o,r=c(a.a,i.a,!1,s,"data-v-59743374",null);t.a=r.exports},nOcb:function(n,t){},nq3j:function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c;return n._m(0)},a=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("p",[n._v("Agent Ready Ready For Mission!")])])}],i={render:o,staticRenderFns:a};t.a=i},sPwj:function(n,t,e){"use strict";function o(n){e("CiXa")}var a=e("IFm3"),i=e("Mayd"),c=e("VU/8"),s=o,r=c(a.a,i.a,!1,s,"data-v-385156ce",null);t.a=r.exports},stZM:function(n,t){},t54M:function(n,t,e){"use strict";function o(n){e("nOcb")}var a=e("i7dW"),i=e("34Gd"),c=e("VU/8"),s=o,r=c(a.a,i.a,!1,s,"data-v-fb062430",null);t.a=r.exports},xJD8:function(n,t,e){"use strict";t.a={name:"app"}},xKFx:function(n,t,e){"use strict";t.a={name:"lieutenant",mounted:function(){this.activateComponent(this.$options.name)},beforeDestroy:function(){this.deactivateComponent(this.$options.name)}}}},["NHnr"]);
//# sourceMappingURL=app.fc8bd397378edbbd0e6e.js.map