(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5bf95afb"],{"3fe1":function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e.d(n,"b",function(){return c}),e.d(n,"c",function(){return a}),e.d(n,"d",function(){return f}),e.d(n,"e",function(){return d}),e.d(n,"f",function(){return i}),e.d(n,"g",function(){return o}),e.d(n,"h",function(){return l}),e.d(n,"i",function(){return s}),e.d(n,"j",function(){return h}),e.d(n,"k",function(){return u});var r=function(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)},o=function(t){return!!t.shadowRoot&&!!t.attachShadow},i=function(t){var n=t.closest("ion-item");return n?n.querySelector("ion-label"):null},u=function(t,n,e,r,i){if(t||o(n)){var u=n.querySelector("input.aux-input");u||(u=n.ownerDocument.createElement("input"),u.type="hidden",u.classList.add("aux-input"),n.appendChild(u)),u.disabled=i,u.name=e,u.value=r||""}},a=function(t,n,e){return Math.max(t,Math.min(n,e))},c=function(t,n){if(!t){var e="ASSERT: "+n;throw console.error(e),new Error(e)}},s=function(t){return t.timeStamp||Date.now()},h=function(t){if(t){var n=t.changedTouches;if(n&&n.length>0){var e=n[0];return{x:e.clientX,y:e.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}},l=function(t){var n="rtl"===document.dir;switch(t){case"start":return n;case"end":return!n;default:throw new Error('"'+t+'" is not a valid value for [side]. Use "start" or "end" instead.')}},f=function(t,n){var e=t._original||t;return{_original:t,emit:d(e.emit.bind(e),n)}},d=function(t,n){var e;return void 0===n&&(n=0),function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];clearTimeout(e),e=setTimeout.apply(void 0,[t,n].concat(r))}}},d0de:function(t,n,e){"use strict";e.d(n,"a",function(){return u}),e.d(n,"b",function(){return c}),e.d(n,"c",function(){return i}),e.d(n,"d",function(){return h});var r=e("9ab4"),o=void 0,i=function(t,n){return null!==n.closest(t)},u=function(t){var n;return"string"===typeof t&&t.length>0?(n={"ion-color":!0},n["ion-color-"+t]=!0,n):void 0},a=function(t){if(void 0!==t){var n=Array.isArray(t)?t:t.split(" ");return n.filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t})}return[]},c=function(t){var n={};return a(t).forEach(function(t){return n[t]=!0}),n},s=/^[a-z][a-z0-9+\-.]*:/,h=function(t,n,e){return r["a"](o,void 0,void 0,function(){var o;return r["c"](this,function(r){switch(r.label){case 0:return null==t||"#"===t[0]||s.test(t)?[3,2]:(o=document.querySelector("ion-router"),o?(null!=n&&n.preventDefault(),[4,o.componentOnReady()]):[3,2]);case 1:return r.sent(),[2,o.push(t,e)];case 2:return[2,!1]}})})}},d8ad:function(t,n,e){"use strict";e.r(n),e.d(n,"ion_route",function(){return c}),e.d(n,"ion_route_redirect",function(){return s}),e.d(n,"ion_router",function(){return H}),e.d(n,"ion_router_link",function(){return z});var r=e("9ab4"),o=e("5c2d"),i=(e("f724"),e("d0de")),u=e("3fe1"),a=void 0,c=function(){function t(t){Object(o["m"])(this,t),this.url="",this.ionRouteDataChanged=Object(o["e"])(this,"ionRouteDataChanged",7)}return t.prototype.onUpdate=function(t){this.ionRouteDataChanged.emit(t)},t.prototype.onComponentProps=function(t,n){if(t!==n){var e=t?Object.keys(t):[],r=n?Object.keys(n):[];if(e.length===r.length)for(var o=0,i=e;o<i.length;o++){var u=i[o];if(t[u]!==n[u])return void this.onUpdate(t)}else this.onUpdate(t)}},t.prototype.componentDidLoad=function(){this.ionRouteDataChanged.emit()},t.prototype.componentDidUnload=function(){this.ionRouteDataChanged.emit()},Object.defineProperty(t,"watchers",{get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}},enumerable:!0,configurable:!0}),t}(),s=function(){function t(t){Object(o["m"])(this,t),this.ionRouteRedirectChanged=Object(o["e"])(this,"ionRouteRedirectChanged",7)}return t.prototype.propDidChange=function(){this.ionRouteRedirectChanged.emit()},t.prototype.componentDidLoad=function(){this.ionRouteRedirectChanged.emit()},t.prototype.componentDidUnload=function(){this.ionRouteRedirectChanged.emit()},Object.defineProperty(t,"watchers",{get:function(){return{from:["propDidChange"],to:["propDidChange"]}},enumerable:!0,configurable:!0}),t}(),h="root",l="forward",f="back",d=function(t){var n=t.filter(function(t){return t.length>0}).join("/");return"/"+n},p=function(t){for(var n=[],e=0,r=t;e<r.length;e++)for(var o=r[e],i=0,u=o.path;i<u.length;i++){var a=u[i];if(":"===a[0]){var c=o.params&&o.params[a.slice(1)];if(!c)return null;n.push(c)}else""!==a&&n.push(a)}return n},v=function(t,n,e,r,o,i){var u=d(b(n).concat(r));e&&(u="#"+u),o===l?t.pushState(i,"",u):t.replaceState(i,"",u)},g=function(t,n){if(t.length>n.length)return null;if(t.length<=1&&""===t[0])return n;for(var e=0;e<t.length;e++)if(t[e].length>0&&t[e]!==n[e])return null;return n.length===t.length?[""]:n.slice(t.length)},m=function(t,n,e){var r=t.pathname;if(e){var o=t.hash;r="#"===o[0]?o.slice(1):""}var i=b(n),u=b(r);return g(i,u)},b=function(t){if(null==t)return[""];var n=t.split("/").map(function(t){return t.trim()}).filter(function(t){return t.length>0});return 0===n.length?[""]:n},w=function(t){console.group("[ion-core] ROUTES["+t.length+"]");for(var n=function(t){var n=[];t.forEach(function(t){return n.push.apply(n,t.path)});var e=t.map(function(t){return t.id});console.debug("%c "+d(n),"font-weight: bold; padding-left: 20px","=>\t","("+e.join(", ")+")")},e=0,r=t;e<r.length;e++){var o=r[e];n(o)}console.groupEnd()},y=function(t){console.group("[ion-core] REDIRECTS["+t.length+"]");for(var n=0,e=t;n<e.length;n++){var r=e[n];r.to&&console.debug("FROM: ","$c "+d(r.from),"font-weight: bold"," TO: ","$c "+d(r.to),"font-weight: bold")}console.groupEnd()},R=function(t,n,e,o,i){return void 0===i&&(i=!1),r["a"](a,void 0,void 0,function(){var u,a,c,s;return r["c"](this,function(r){switch(r.label){case 0:return r.trys.push([0,6,,7]),u=j(t),o>=n.length||!u?[2,i]:[4,u.componentOnReady()];case 1:return r.sent(),a=n[o],[4,u.setRouteId(a.id,a.params,e)];case 2:return c=r.sent(),c.changed&&(e=h,i=!0),[4,R(c.element,n,e,o+1,i)];case 3:return i=r.sent(),c.markVisible?[4,c.markVisible()]:[3,5];case 4:r.sent(),r.label=5;case 5:return[2,i];case 6:return s=r.sent(),console.error(s),[2,!1];case 7:return[2]}})})},C=function(t){return r["a"](a,void 0,void 0,function(){var n,e,o,i;return r["c"](this,function(r){switch(r.label){case 0:n=[],o=t,r.label=1;case 1:return e=j(o),e?[4,e.getRouteId()]:[3,3];case 2:return i=r.sent(),i?(o=i.element,i.element=void 0,n.push(i),[3,4]):[3,5];case 3:return[3,5];case 4:return[3,1];case 5:return[2,{ids:n,outlet:e}]}})})},O=function(){return j(document.body)?Promise.resolve():new Promise(function(t){window.addEventListener("ionNavWillLoad",t,{once:!0})})},P=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",j=function(t){if(t){if(t.matches(P))return t;var n=t.querySelector(P);return n||void 0}},S=function(t,n){var e=n.from,r=n.to;if(void 0===r)return!1;if(e.length>t.length)return!1;for(var o=0;o<e.length;o++){var i=e[o];if("*"===i)return!0;if(i!==t[o])return!1}return e.length===t.length},D=function(t,n){return n.find(function(n){return S(t,n)})},k=function(t,n){for(var e=Math.min(t.length,n.length),r=0;r<e;r++)if(t[r].toLowerCase()!==n[r].id)break;return r},E=function(t,n){for(var e,r=new T(t),o=!1,i=0;i<n.length;i++){var u=n[i].path;if(""===u[0])o=!0;else{for(var a=0,c=u;a<c.length;a++){var s=c[a],h=r.next();if(":"===s[0]){if(""===h)return null;e=e||[];var l=e[i]||(e[i]={});l[s.slice(1)]=h}else if(h!==s)return null}o=!1}}var f=!o||o===(""===r.next());return f?e?n.map(function(t,n){return{id:t.id,path:t.path,params:U(t.params,e[n])}}):n:null},U=function(t,n){return!t&&n?n:t&&!n?t:t&&n?Object.assign({},t,n):void 0},L=function(t,n){for(var e=null,r=0,o=t.map(function(t){return t.id}),i=0,u=n;i<u.length;i++){var a=u[i],c=k(o,a);c>r&&(e=a,r=c)}return e?e.map(function(n,e){return{id:n.id,path:n.path,params:U(n.params,t[e]&&t[e].params)}}):null},N=function(t,n){for(var e=null,r=0,o=0,i=n;o<i.length;o++){var u=i[o],a=E(t,u);if(null!==a){var c=x(a);c>r&&(r=c,e=a)}}return e},x=function(t){for(var n=1,e=1,r=0,o=t;r<o.length;r++)for(var i=o[r],u=0,a=i.path;u<a.length;u++){var c=a[u];":"===c[0]?n+=Math.pow(1,e):""!==c&&(n+=Math.pow(2,e)),e++}return n},T=function(){function t(t){this.path=t.slice()}return t.prototype.next=function(){return this.path.length>0?this.path.shift():""},t}(),A=function(t){return Array.from(t.children).filter(function(t){return"ION-ROUTE-REDIRECT"===t.tagName}).map(function(t){var n=_(t,"to");return{from:b(_(t,"from")),to:null==n?void 0:b(n)}})},I=function(t){return q(W(t))},W=function(t,n){return void 0===n&&(n=t),Array.from(n.children).filter(function(t){return"ION-ROUTE"===t.tagName&&t.component}).map(function(n){var e=_(n,"component");if(null==e)throw new Error("component missing in ion-route");return{path:b(_(n,"url")),id:e.toLowerCase(),params:n.componentProps,children:W(t,n)}})},_=function(t,n){return n in t?t[n]:t.hasAttribute(n)?t.getAttribute(n):null},q=function(t){for(var n=[],e=0,r=t;e<r.length;e++){var o=r[e];M([],n,o)}return n},M=function(t,n,e){var r=t.slice();if(r.push({id:e.id,path:e.path,params:e.params}),0!==e.children.length)for(var o=0,i=e.children;o<i.length;o++){var u=i[o];M(r,n,u)}else n.push(r)},H=function(){function t(t){Object(o["m"])(this,t),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0,this.ionRouteWillChange=Object(o["e"])(this,"ionRouteWillChange",7),this.ionRouteDidChange=Object(o["e"])(this,"ionRouteDidChange",7)}return t.prototype.componentWillLoad=function(){return r["a"](this,void 0,void 0,function(){return r["c"](this,function(t){switch(t.label){case 0:return console.debug("[ion-router] router will load"),[4,O()];case 1:return t.sent(),console.debug("[ion-router] found nav"),[4,this.onRoutesChanged()];case 2:return t.sent(),[2]}})})},t.prototype.componentDidLoad=function(){window.addEventListener("ionRouteRedirectChanged",Object(u["e"])(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",Object(u["e"])(this.onRoutesChanged.bind(this),100))},t.prototype.onPopState=function(){var t=this.historyDirection(),n=this.getPath();return console.debug("[ion-router] URL changed -> update nav",n,t),this.writeNavStateRoot(n,t)},t.prototype.onBackButton=function(t){var n=this;t.detail.register(0,function(){return n.back()})},t.prototype.push=function(t,n){void 0===n&&(n="forward"),t.startsWith(".")&&(t=new URL(t,window.location.href).pathname),console.debug("[ion-router] URL pushed -> updating nav",t,n);var e=b(t);return this.setPath(e,n),this.writeNavStateRoot(e,n)},t.prototype.back=function(){return window.history.back(),Promise.resolve(this.waitPromise)},t.prototype.printDebug=function(){return r["a"](this,void 0,void 0,function(){return r["c"](this,function(t){return console.debug("CURRENT PATH",this.getPath()),console.debug("PREVIOUS PATH",this.previousPath),w(I(this.el)),y(A(this.el)),[2]})})},t.prototype.navChanged=function(t){return r["a"](this,void 0,void 0,function(){var n,e,o,i,u,a;return r["c"](this,function(r){switch(r.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, navChanged was cancelled"),[2,!1]):[4,C(window.document.body)];case 1:return n=r.sent(),e=n.ids,o=n.outlet,i=I(this.el),u=L(e,i),u?(a=p(u),a?(console.debug("[ion-router] nav changed -> update URL",e,a),this.setPath(a,t),[4,this.safeWriteNavState(o,u,h,a,null,e.length)]):(console.warn("[ion-router] router could not match path because some required param is missing"),[2,!1])):(console.warn("[ion-router] no matching URL for ",e.map(function(t){return t.id})),[2,!1]);case 2:return r.sent(),[2,!0]}})})},t.prototype.onRedirectChanged=function(){var t=this.getPath();t&&D(t,A(this.el))&&this.writeNavStateRoot(t,h)},t.prototype.onRoutesChanged=function(){return this.writeNavStateRoot(this.getPath(),h)},t.prototype.historyDirection=function(){var t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href));var n=t.history.state,e=this.lastState;return this.lastState=n,n>e?l:n<e?f:h},t.prototype.writeNavStateRoot=function(t,n){return r["a"](this,void 0,void 0,function(){var e,o,i,u,a;return r["c"](this,function(r){return t?(e=A(this.el),o=D(t,e),i=null,o&&(this.setPath(o.to,n),i=o.from,t=o.to),u=I(this.el),a=N(t,u),a?[2,this.safeWriteNavState(document.body,a,n,t,i)]:(console.error("[ion-router] the path does not match any route"),[2,!1])):(console.error("[ion-router] URL is not part of the routing set"),[2,!1])})})},t.prototype.safeWriteNavState=function(t,n,e,o,i,u){return void 0===u&&(u=0),r["a"](this,void 0,void 0,function(){var a,c,s;return r["c"](this,function(r){switch(r.label){case 0:return[4,this.lock()];case 1:a=r.sent(),c=!1,r.label=2;case 2:return r.trys.push([2,4,,5]),[4,this.writeNavState(t,n,e,o,i,u)];case 3:return c=r.sent(),[3,5];case 4:return s=r.sent(),console.error(s),[3,5];case 5:return a(),[2,c]}})})},t.prototype.lock=function(){return r["a"](this,void 0,void 0,function(){var t,n;return r["c"](this,function(e){switch(e.label){case 0:return t=this.waitPromise,this.waitPromise=new Promise(function(t){return n=t}),void 0===t?[3,2]:[4,t];case 1:e.sent(),e.label=2;case 2:return[2,n]}})})},t.prototype.writeNavState=function(t,n,e,o,i,u){return void 0===u&&(u=0),r["a"](this,void 0,void 0,function(){var a,c;return r["c"](this,function(r){switch(r.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, transition was cancelled"),[2,!1]):(this.busy=!0,a=this.routeChangeEvent(o,i),a&&this.ionRouteWillChange.emit(a),[4,R(t,n,e,u)]);case 1:return c=r.sent(),this.busy=!1,c&&console.debug("[ion-router] route changed",o),a&&this.ionRouteDidChange.emit(a),[2,c]}})})},t.prototype.setPath=function(t,n){this.state++,v(window.history,this.root,this.useHash,t,n,this.state)},t.prototype.getPath=function(){return m(window.location,this.root,this.useHash)},t.prototype.routeChangeEvent=function(t,n){var e=this.previousPath,r=d(t);if(this.previousPath=r,r===e)return null;var o=n?d(n):null;return{from:e,redirectedFrom:o,to:r}},Object.defineProperty(t.prototype,"el",{get:function(){return Object(o["f"])(this)},enumerable:!0,configurable:!0}),t}(),z=function(){function t(t){var n=this;Object(o["m"])(this,t),this.routerDirection="forward",this.onClick=function(t){Object(i["d"])(n.href,t,n.routerDirection)}}return t.prototype.render=function(){var t,n=Object(o["d"])(this),e={href:this.href,rel:this.rel,target:this.target};return Object(o["i"])(o["a"],{onClick:this.onClick,class:Object.assign({},Object(i["a"])(this.color),(t={},t[n]=!0,t["ion-activatable"]=!0,t))},Object(o["i"])("a",Object.assign({},e),Object(o["i"])("slot",null)))},Object.defineProperty(t,"style",{get:function(){return":host{--background:transparent;--color:var(--ion-color-primary,#3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"},enumerable:!0,configurable:!0}),t}()}}]);
//# sourceMappingURL=chunk-5bf95afb.5bb4d27a.js.map