if (self.CavalryLogger) { CavalryLogger.start_js(["Ft+yA"]); }

__d("ContextualLayerAutoFlip",["ContextualLayerAlignmentEnum","ContextualLayerDimensions","DOMDimensions","Rect","Vector","getDocumentScrollElement"],(function(a,b,c,d,e,f){"use strict";function g(a,c){c=new(b("Rect"))(c).convertTo(a.domain);var d=Math.max(a.l,c.l);a=Math.min(a.r,c.r);return Math.max(a-d,0)}a=function(){function a(a){this._layer=a}var c=a.prototype;c.enable=function(){this._subscription=this._layer.subscribe("adjust",this._adjustOrientation.bind(this)),this._layer.isShown()&&this._layer.updatePosition()};c.disable=function(){this._subscription&&(this._subscription.unsubscribe(),this._subscription=null),this._layer.isShown()&&this._layer.updatePosition()};c._adjustOrientation=function(a,c){a=this.getValidPositions(c);if(!a.length){c.invalidate();return}var d=b("ContextualLayerDimensions").getViewportRect(this._layer),e=this._getValidAlignments(c),f,h,i;for(f=0;f<e.length;f++){c.setAlignment(e[f]);for(h=0;h<a.length;h++){c.setPosition(a[h]);i=b("ContextualLayerDimensions").getLayerRect(this._layer,c);if(d.contains(i))return}}var j=-1;if(c.getPreferMoreContentShownRect()){var k=b("DOMDimensions").getDocumentDimensions(),l=new(b("Rect"))(d).convertTo("document"),m=99999;for(h=0;h<a.length;h++){c.setPosition(a[h]);i=b("ContextualLayerDimensions").getLayerRect(this._layer,c);var n=new(b("Rect"))(i).convertTo("document");if(n.l>=0&&n.r<=k.width&&n.t>=43&&n.b<=k.height){var o=l.l-n.l,p=n.r-l.r,q=l.t-n.t;n=n.b-l.b;o=(o>0?o:0)+(p>0?p:0)+(q>0?q:0)+(n>0?n:0);o<m&&(j=h,m=o)}}}this.__setBestPosition(j,c,a);p=0;q=0;for(f=0;f<e.length;f++)c.setAlignment(e[f]),i=b("ContextualLayerDimensions").getLayerRect(this._layer,c),n=g(d,i),n>q&&(q=n,p=f);c.setAlignment(e[p])};c.__setBestPosition=function(a,b,c){a>=0?b.setPosition(c[a]):b.setPosition(c.includes("below")?"below":c[0])};c.getValidPositions=function(a){var c=[a.getPosition(),a.getOppositePosition()],d=this._layer.getContextScrollParent();if(d===window||d===b("getDocumentScrollElement")())return c;var e=this._layer.getContext(),f=b("Vector").getElementPosition(d,"viewport").y,g=b("Vector").getElementPosition(e,"viewport").y;if(a.isVertical())return c.filter(function(a){if(a==="above")return g>=f;else{a=f+d.offsetHeight;var b=g+e.offsetHeight;return b<=a}});else{a=f+d.offsetHeight;if(g>=f&&g+e.offsetHeight<=a)return c;else return[]}};c._getValidAlignments=function(a){var c=Array.from(b("ContextualLayerAlignmentEnum").values);a=a.getAlignment();var d=c.indexOf(a);d>0&&(c.splice(d,1),c.unshift(a));return c};return a}();e.exports=a;Object.assign(a.prototype,{_subscription:null})}),null);
__d("getInlineBoundingRect",["Rect"],(function(a,b,c,d,e,f){function a(a,c){var d=a.getClientRects();if(!c||d.length===0)return b("Rect").getElementBounds(a);var e,f=!1;for(var g=0;g<d.length;g++){var h=new(b("Rect"))(Math.round(d[g].top),Math.round(d[g].right),Math.round(d[g].bottom),Math.round(d[g].left),"viewport").convertTo("document"),i=h.getPositionVector(),j=i.add(h.getDimensionVector());if(!e||i.x<=e.l&&i.y>e.t){if(f)break;e=new(b("Rect"))(i.y,j.x,j.y,i.x,"document")}else e.t=Math.min(e.t,i.y),e.b=Math.max(e.b,j.y),e.r=j.x;h.contains(c)&&(f=!0)}e||(e=b("Rect").getElementBounds(a));return e}e.exports=a}),null);
__d("nl2br",["DOM"],(function(a,b,c,d,e,f){e.exports=a;var g=/(\r\n|[\r\n])/;function a(a){return a.split(g).map(function(a){return g.test(a)?b("DOM").create("br"):a})}}),null);
__d("Tooltip",["fbt","invariant","Arbiter","AsyncRequest","ContextualLayer","ContextualLayerAutoFlip","CSS","DOM","Event","Style","TooltipData","Vector","emptyFunction","getElementText","getInlineBoundingRect","getOrCreateDOMID","gkx","killswitch","nl2br","setImmediate"],(function(a,b,c,d,e,f,g,h){var i=null,j=null,k=null,l=null,m=null,n=null,o=null,p=!1,q=[],r=[];function s(){if(!m){n=b("DOM").create("div",{className:"tooltipContent","data-testid":"tooltip_testid"});o=b("getOrCreateDOMID")(n);var a=b("DOM").create("i",{className:"arrow"});a=b("DOM").create("div",{className:"uiTooltipX"},[n,a]);m=new(b("ContextualLayer"))({},a);m.shouldSetARIAProperties(!1);m.enableBehavior(b("ContextualLayerAutoFlip"));b("gkx")("764802")&&(m.getRoot().style.pointerEvents="none")}}function t(a,c){v._show(a,g._("Loading...")),new(b("AsyncRequest"))(c).setHandler(function(b){v._show(a,b.getPayload()),m&&m.updatePosition()}).setErrorHandler(b("emptyFunction")).send()}var u;b("Event").listen(document.documentElement,"mouseover",function(a){u=a,b("setImmediate")(function(){u=null})});var v=babelHelpers["extends"]({},b("TooltipData"),{isActive:function(a){return a===i},process:function(a,c){if(!b("DOM").contains(a,c))return;if(a!==i){v.fetchIfNecessary(a);c=v._get(a);if(c.suppress)return;c.delay?v._showWithDelay(a,c.delay):v.show(a)}},fetchIfNecessary:function(a){var b=a.getAttribute("data-tooltip-uri");b&&(a.removeAttribute("data-tooltip-uri"),t(a,b))},suspend:function(){p=!0},hide:function(){var a=i,c,d=p;p=!1;try{b("Arbiter").inform("tooltip/requesthide",{context:a}),c=p}finally{p=d}c||v.commitHide(a)},commitHide:function(a){if(!j||a!==j){if(a&&m){m.hide();i=null;while(q.length)q.pop().remove()}b("Arbiter").inform("tooltip/hide",{context:a})}},_show:function(a,b){v._store({context:a,content:b}),v.isActive(a)&&v.show(a)},show:function(a){var c,d=p;p=!1;try{b("Arbiter").inform("tooltip/requestshow",{context:a}),c=p}finally{p=d}c||v.commitShow(a)},commitShow:function(a){var c=function(){a.removeAttribute("aria-describedby");var c=v._get(a);c.className&&m&&b("CSS").removeClass(m.getRoot(),c.className);v.hide()},d=function(a){b("DOM").contains(i,a.getTarget())||c()};j=a;s();a!==i&&(b("killswitch")("TOOLTIP_FIX_HIDE_ACTIVE_TOOLTIP_BEFORE_NEW_ONE")?v.commitHide(a):v.commitHide(i));j=null;a!==i&&b("Arbiter").inform("tooltip/beforeshow",{context:a});var e=v._get(a);if(e.suppress||v.allSuppressed)return;var f=e.content;if(e.overflowDisplay){if(a.offsetWidth>=a.scrollWidth)return;f||(f=b("getElementText")(a))}var g=f?function(){a.setAttribute("aria-describedby",o),m&&m.show()}:function(){},k=0,l=e.offsetY?parseInt(e.offsetY,10):0;if(e.position==="left"||e.position==="right")l=(a.offsetHeight-28)/2;else if(e.alignH!=="center"){var p=a.offsetWidth;p<32&&(k=(p-32)/2*(e.alignH==="right"?-1:1))}p=u?b("Vector").getEventPosition(u):b("Vector").getElementPosition(a);m||h(0,4328);m.setContextWithBounds(a,b("getInlineBoundingRect")(a,p)).setOffsetX(k).setOffsetY(l).setPosition(e.position).setAlignment(e.alignH);if(typeof f==="string"){b("CSS").addClass(m.getRoot(),"invisible_elem");p=b("DOM").create("span",{},b("nl2br")(f));k=b("DOM").create("div",{className:"tooltipText"},p);b("DOM").setContent(n,k);g();b("CSS").removeClass(m.getRoot(),"invisible_elem")}else b("DOM").setContent(n,f),g();q.push(b("Event").listen(document.documentElement,"mouseover",d),b("Event").listen(document.documentElement,"focusin",d));l=b("Style").getScrollParent(a);l!==window&&q.push(b("Event").listen(l,"scroll",c));e.persistOnClick||q.push(b("Event").listen(a,"click",c));e.className&&b("CSS").addClass(m.getRoot(),e.className);i=a},_showWithDelay:function(a,c){a!==k&&v._clearDelay();if(!l){var d=function(a){b("DOM").contains(k,a.getTarget())||v._clearDelay()};r.push(b("Event").listen(document.documentElement,"mouseover",d),b("Event").listen(document.documentElement,"focusin",d));k=a;l=setTimeout(function(){v._clearDelay(),v.show(a)},c)}},_clearDelay:function(){clearTimeout(l);k=null;l=null;while(r.length)r.pop().remove()}});b("Event").listen(window,"scroll",v.hide);e.exports=v}),null);