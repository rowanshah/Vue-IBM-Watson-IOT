(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d894016"],{4648:function(t,e,r){"use strict";r.d(e,"a",function(){return o}),r.d(e,"b",function(){return i}),r.d(e,"c",function(){return s}),r.d(e,"d",function(){return n});var n=function(){var t=window.TapticEngine;t&&t.selection()},o=function(){var t=window.TapticEngine;t&&t.gestureSelectionStart()},i=function(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()},s=function(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}},e315:function(t,e,r){"use strict";r.r(e),r.d(e,"ion_reorder",function(){return s}),r.d(e,"ion_reorder_group",function(){return l});var n=r("9ab4"),o=r("5c2d"),i=(r("f724"),r("4648")),s=function(){function t(t){Object(o["m"])(this,t)}return t.prototype.onClick=function(t){t.preventDefault(),t.stopImmediatePropagation()},t.prototype.hostData=function(){var t,e=Object(o["d"])(this);return{class:(t={},t[e]=!0,t)}},t.prototype.__stencil_render=function(){return Object(o["i"])("slot",null,Object(o["i"])("ion-icon",{name:"reorder",lazy:!1,class:"reorder-icon"}))},t.prototype.render=function(){return Object(o["i"])(o["a"],this.hostData(),this.__stencil_render())},Object.defineProperty(t,"style",{get:function(){return":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px;font-size:34px;opacity:.4}"},enumerable:!0,configurable:!0}),t}(),l=function(){function t(t){Object(o["m"])(this,t),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0,this.ionItemReorder=Object(o["e"])(this,"ionItemReorder",7)}return t.prototype.disabledChanged=function(){this.gesture&&this.gesture.setDisabled(this.disabled)},t.prototype.componentDidLoad=function(){return n["a"](this,void 0,void 0,function(){var t,e,o,i=this;return n["c"](this,function(n){switch(n.label){case 0:return t=this.el.closest("ion-content"),t?[4,t.componentOnReady()]:[3,3];case 1:return n.sent(),e=this,[4,t.getScrollElement()];case 2:e.scrollEl=n.sent(),n.label=3;case 3:return o=this,[4,r.e("chunk-2d0cf674").then(r.bind(null,"6422"))];case 4:return o.gesture=n.sent().createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:function(t){return i.canStart(t)},onStart:function(t){return i.onStart(t)},onMove:function(t){return i.onMove(t)},onEnd:function(){return i.onEnd()}}),this.disabledChanged(),[2]}})})},t.prototype.componentDidUnload=function(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},t.prototype.complete=function(t){return Promise.resolve(this.completeSync(t))},t.prototype.canStart=function(t){if(this.selectedItemEl||0!==this.state)return!1;var e=t.event.target,r=e.closest("ion-reorder");if(!r)return!1;var n=c(r,this.el);return!!n&&(t.data=n,!0)},t.prototype.onStart=function(t){t.event.preventDefault();var e=this.selectedItemEl=t.data,r=this.cachedHeights;r.length=0;var n=this.el,o=n.children;if(o&&0!==o.length){for(var s=0,l=0;l<o.length;l++){var c=o[l];s+=c.offsetHeight,r.push(s),c.$ionIndex=l}var u=n.getBoundingClientRect();if(this.containerTop=u.top,this.containerBottom=u.bottom,this.scrollEl){var p=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=p.top+h,this.scrollElBottom=p.bottom-h}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=a(e),this.selectedItemHeight=e.offsetHeight,this.state=1,e.classList.add(d),Object(i["a"])()}},t.prototype.onMove=function(t){var e=this.selectedItemEl;if(e){var r=this.autoscroll(t.currentY),n=this.containerTop-r,o=this.containerBottom-r,s=Math.max(n,Math.min(t.currentY,o)),l=r+s-t.startY,c=s-n,h=this.itemIndexForTop(c);if(h!==this.lastToIndex){var u=a(e);this.lastToIndex=h,Object(i["b"])(),this.reorderMove(u,h)}e.style.transform="translateY("+l+"px)"}},t.prototype.onEnd=function(){var t=this,e=this.selectedItemEl;if(this.state=2,e){var r=this.lastToIndex,n=a(e);r===n?(e.style.transition="transform 200ms ease-in-out",setTimeout(function(){return t.completeSync()},200)):this.ionItemReorder.emit({from:n,to:r,complete:this.completeSync.bind(this)}),Object(i["c"])()}else this.state=0},t.prototype.completeSync=function(t){var e=this.selectedItemEl;if(e&&2===this.state){var r=this.el.children,n=r.length,o=this.lastToIndex,i=a(e);if(!t||!0===t){var s=i<o?r[o+1]:r[o];this.el.insertBefore(e,s)}Array.isArray(t)&&(t=p(t,i,o));for(var l=0;l<n;l++)r[l].style["transform"]="";e.style.transition="",e.classList.remove(d),this.selectedItemEl=void 0,this.state=0}return t},t.prototype.itemIndexForTop=function(t){var e=this.cachedHeights,r=0;for(r=0;r<e.length;r++)if(e[r]>t)break;return r},t.prototype.reorderMove=function(t,e){for(var r=this.selectedItemHeight,n=this.el.children,o=0;o<n.length;o++){var i=n[o].style,s="";o>t&&o<=e?s="translateY("+-r+"px)":o<t&&o>=e&&(s="translateY("+r+"px)"),i["transform"]=s}},t.prototype.autoscroll=function(t){if(!this.scrollEl)return 0;var e=0;return t<this.scrollElTop?e=-u:t>this.scrollElBottom&&(e=u),0!==e&&this.scrollEl.scrollBy(0,e),this.scrollEl.scrollTop-this.scrollElInitial},t.prototype.hostData=function(){var t,e=Object(o["d"])(this);return{class:(t={},t[e]=!0,t["reorder-enabled"]=!this.disabled,t["reorder-list-active"]=0!==this.state,t)}},Object.defineProperty(t.prototype,"el",{get:function(){return Object(o["f"])(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{disabled:["disabledChanged"]}},enumerable:!0,configurable:!0}),t.prototype.render=function(){return Object(o["i"])(o["a"],this.hostData())},Object.defineProperty(t,"style",{get:function(){return".reorder-list-active>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none!important;transition:none!important;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translateZ(0);transform:translateZ(0)}"},enumerable:!0,configurable:!0}),t}(),a=function(t){return t["$ionIndex"]},c=function(t,e){var r;while(t){if(r=t.parentElement,r===e)return t;t=r}},h=60,u=10,d="reorder-selected",p=function(t,e,r){var n=t[e];return t.splice(e,1),t.splice(r,0,n),t.slice()}}}]);
//# sourceMappingURL=chunk-6d894016.e7e98b3c.js.map