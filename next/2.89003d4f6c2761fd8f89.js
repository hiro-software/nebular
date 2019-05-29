(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"3D6m":function(t,e){!function(t,e){"use strict";if("IntersectionObserver"in t&&"IntersectionObserverEntry"in t&&"intersectionRatio"in t.IntersectionObserverEntry.prototype)"isIntersecting"in t.IntersectionObserverEntry.prototype||Object.defineProperty(t.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});else{var n=[];o.prototype.THROTTLE_TIMEOUT=100,o.prototype.POLL_INTERVAL=null,o.prototype.USE_MUTATION_OBSERVER=!0,o.prototype.observe=function(t){if(!this._observationTargets.some(function(e){return e.element==t})){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},o.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(e){return e.element!=t}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},o.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},o.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},o.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]})},o.prototype._parseRootMargin=function(t){var e=(t||"0px").split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}});return e[1]=e[1]||e[0],e[2]=e[2]||e[0],e[3]=e[3]||e[1],e},o.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(r(t,"resize",this._checkForIntersections,!0),r(e,"scroll",this._checkForIntersections,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in t&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},o.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,s(t,"resize",this._checkForIntersections,!0),s(e,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},o.prototype._checkForIntersections=function(){var e=this._rootIsInDom(),n=e?this._getRootRect():{top:0,bottom:0,left:0,right:0,width:0,height:0};this._observationTargets.forEach(function(o){var r=o.element,s=c(r),h=this._rootContainsTarget(r),u=o.entry,l=e&&h&&this._computeTargetAndRootIntersection(r,n),a=o.entry=new i({time:t.performance&&performance.now&&performance.now(),target:r,boundingClientRect:s,rootBounds:n,intersectionRect:l});u?e&&h?this._hasCrossedThreshold(u,a)&&this._queuedEntries.push(a):u&&u.isIntersecting&&this._queuedEntries.push(a):this._queuedEntries.push(a)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},o.prototype._computeTargetAndRootIntersection=function(n,i){if("none"!=t.getComputedStyle(n).display){for(var o,r,s,h,l,a,f,p,d=c(n),g=u(n),b=!1;!b;){var v=null,m=1==g.nodeType?t.getComputedStyle(g):{};if("none"==m.display)return;if(g==this.root||g==e?(b=!0,v=i):g!=e.body&&g!=e.documentElement&&"visible"!=m.overflow&&(v=c(g)),v&&(o=v,r=d,s=Math.max(o.top,r.top),h=Math.min(o.bottom,r.bottom),l=Math.max(o.left,r.left),p=h-s,!(d=(f=(a=Math.min(o.right,r.right))-l)>=0&&p>=0&&{top:s,bottom:h,left:l,right:a,width:f,height:p})))break;g=u(g)}return d}},o.prototype._getRootRect=function(){var t;if(this.root)t=c(this.root);else{var n=e.documentElement,i=e.body;t={top:0,left:0,right:n.clientWidth||i.clientWidth,width:n.clientWidth||i.clientWidth,bottom:n.clientHeight||i.clientHeight,height:n.clientHeight||i.clientHeight}}return this._expandRectByRootMargin(t)},o.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map(function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100}),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},o.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,i=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==i)for(var o=0;o<this.thresholds.length;o++){var r=this.thresholds[o];if(r==n||r==i||r<n!=r<i)return!0}},o.prototype._rootIsInDom=function(){return!this.root||h(e,this.root)},o.prototype._rootContainsTarget=function(t){return h(this.root||e,t)},o.prototype._registerInstance=function(){n.indexOf(this)<0&&n.push(this)},o.prototype._unregisterInstance=function(){var t=n.indexOf(this);-1!=t&&n.splice(t,1)},t.IntersectionObserver=o,t.IntersectionObserverEntry=i}function i(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||{top:0,bottom:0,left:0,right:0,width:0,height:0},this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,i=this.intersectionRect;this.intersectionRatio=n?i.width*i.height/n:this.isIntersecting?1:0}function o(t,e){var n,i,o,r=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(r.root&&1!=r.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=(n=this._checkForIntersections.bind(this),i=this.THROTTLE_TIMEOUT,o=null,function(){o||(o=setTimeout(function(){n(),o=null},i))}),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(r.rootMargin),this.thresholds=this._initThresholds(r.threshold),this.root=r.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function r(t,e,n,i){"function"==typeof t.addEventListener?t.addEventListener(e,n,i||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function s(t,e,n,i){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,i||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function c(t){var e;try{e=t.getBoundingClientRect()}catch(n){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):{top:0,bottom:0,left:0,right:0,width:0,height:0}}function h(t,e){for(var n=e;n;){if(n==t)return!0;n=u(n)}return!1}function u(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e}}(window,document)},"66B6":function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n("CcnG"),o=n("jvbL"),r=(n("3D6m"),function(){function t(){var t=this;this.alive=!0,this.startPage=1,this.pageChange=new i.n,this.observer=new IntersectionObserver(function(e){return t.checkForPageChange(e)},{threshold:.5})}return t.prototype.ngAfterViewInit=function(){var t=this;this.listItems&&this.listItems.length&&this.observeItems(),this.listItems.changes.pipe(Object(o.a)(function(){return t.alive})).subscribe(function(){return t.observeItems()})},t.prototype.ngOnDestroy=function(){this.observer.disconnect&&this.observer.disconnect()},t.prototype.observeItems=function(){var t=this;this.listItems.forEach(function(e){return t.observer.observe(e.nativeElement)})},t.prototype.checkForPageChange=function(t){var e=this.findMostVisiblePage(t);e&&this.currentPage!==e&&(this.currentPage=e,this.pageChange.emit(this.currentPage))},t.prototype.findMostVisiblePage=function(t){for(var e=new Map,n=0,i=t;n<i.length;n++){var o=i[n];if(!(o.intersectionRatio<.5)){var r=this.elementIndex(o.target);if(-1!==r){var s=this.startPage+Math.floor(r/this.pageSize),c=o.intersectionRatio;e.has(s)&&(c+=e.get(s)),e.set(s,c)}}}var h,u=0;return e.forEach(function(t,e){t>u&&(u=t,h=e)}),h},t.prototype.elementIndex=function(t){return t.parentElement&&t.parentElement.children?Array.from(t.parentElement.children).indexOf(t):-1},t}())},aJCS:function(t,e,n){"use strict";var i=n("CcnG");n("jXul"),n.d(e,"a",function(){return o}),n.d(e,"c",function(){return r}),n.d(e,"b",function(){return s}),n.d(e,"d",function(){return c});var o=i.vb({encapsulation:0,styles:[["[_nghost-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto;overflow:auto}"]],data:{}});function r(t){return i.Rb(0,[i.Gb(null,0)],null,null)}var s=i.vb({encapsulation:0,styles:[["[_nghost-%COMP%]{-ms-flex-negative:0;flex-shrink:0}"]],data:{}});function c(t){return i.Rb(0,[i.Gb(null,0)],null,null)}},eBxF:function(t,e,n){"use strict";var i=n("CcnG"),o=n("6blF"),r=n("T1DM"),s=n("/21U");function c(t){var e=t.subscriber,n=t.counter,i=t.period;e.next(n),this.schedule({subscriber:e,counter:n+1,period:i},i)}var h=n("gI3B"),u=n("F/XL"),l=n("VNr4"),a=n("jvbL"),f=n("VnD/"),p=n("15JJ"),d=n("ny24"),g=n("t9fZ"),b=n("67Y/"),v=n("FA0J");n.d(e,"a",function(){return m});var m=function(){function t(t,e,n){this.elementRef=t,this.scrollService=e,this.dimensionsService=n,this.alive=!0,this.windowScroll=!1,this.bottomThreshold=new i.n(!0),this.topThreshold=new i.n(!0)}return Object.defineProperty(t.prototype,"elementScroll",{get:function(){return!this.windowScroll},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"listenWindowScroll",{set:function(t){this.windowScroll=Object(v.a)(t)},enumerable:!0,configurable:!0}),t.prototype.onElementScroll=function(){this.elementScroll&&this.checkPosition(this.elementRef.nativeElement)},t.prototype.ngAfterViewInit=function(){var t=this;this.scrollService.onScroll().pipe(Object(a.a)(function(){return t.alive}),Object(f.a)(function(){return t.windowScroll}),Object(p.a)(function(){return t.getContainerDimensions()})).subscribe(function(e){return t.checkPosition(e)}),this.listItems.changes.pipe(Object(a.a)(function(){return t.alive}),Object(p.a)(function(){return(e=50,void 0===e&&(e=0),void 0===n&&(n=r.a),(!Object(s.a)(e)||e<0)&&(e=0),n&&"function"==typeof n.schedule||(n=r.a),new o.a(function(t){return t.add(n.schedule(c,e,{subscriber:t,counter:0,period:e})),t})).pipe(Object(d.a)(Object(h.a)(1e3)),Object(f.a)(function(){return t.inSyncWithDom()}),Object(g.a)(1));var e,n}),Object(p.a)(function(){return t.getContainerDimensions()})).subscribe(function(e){return t.checkPosition(e)}),this.getContainerDimensions().subscribe(function(e){return t.checkPosition(e)})},t.prototype.ngOnDestroy=function(){this.alive=!1},t.prototype.checkPosition=function(t){var e=t.scrollTop,n=null==this.lastScrollPosition,i=e<this.lastScrollPosition;(n||this.lastScrollPosition===e||e>this.lastScrollPosition)&&t.scrollHeight-e-t.clientHeight<=this.threshold&&this.bottomThreshold.emit(),(n||i)&&e<=this.threshold&&this.topThreshold.emit(),this.lastScrollPosition=e},t.prototype.getContainerDimensions=function(){if(this.elementScroll){var t=this.elementRef.nativeElement,e=t.scrollTop,n=t.scrollHeight,i=t.clientHeight;return Object(u.a)({scrollTop:e,scrollHeight:n,clientHeight:i})}return Object(l.a)(this.scrollService.getPosition(),this.dimensionsService.getDimensions()).pipe(Object(b.a)(function(t){var e=t[1];return{scrollTop:t[0].y,scrollHeight:e.scrollHeight,clientHeight:e.clientHeight}}))},t.prototype.inSyncWithDom=function(){return this.elementRef.nativeElement.children.length===this.listItems.length},t}()},jXul:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var i=function(){return function(){this.role="list"}}(),o=function(){return function(){this.role="listitem"}}()},n81q:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n("jXul"),n("66B6"),n("eBxF");var i=function(){return function(){}}()}}]);