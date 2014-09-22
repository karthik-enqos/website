(function(c,g,p){var q=c.event,h,m;h=q.special.debouncedresize={setup:function(){c(this).on("resize",h.handler)},teardown:function(){c(this).off("resize",h.handler)},handler:function(b,a){var c=this,e=arguments,d=function(){b.type="debouncedresize";q.dispatch.apply(c,e)};m&&clearTimeout(m);a?d():m=setTimeout(d,h.threshold)},threshold:150};c.fn.imagesLoaded=function(b){function a(){var a=c(h),r=c(l);d&&(l.length?d.reject(f,a,r):d.resolve(f));c.isFunction(b)&&b.call(e,f,a,r)}function k(b,e){"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="!== b.src&&-1===c.inArray(b,g)&&(g.push(b),e?l.push(b):h.push(b),c.data(b,"imagesLoaded",{isBroken:e,src:b.src}),t&&d.notifyWith(c(b),[e,f,c(h),c(l)]),f.length===g.length&&(setTimeout(a),f.unbind(".imagesLoaded")))}var e=this,d=c.isFunction(c.Deferred)?c.Deferred():0,t=c.isFunction(d.notify),f=e.find("img").add(e.filter("img")),g=[],h=[],l=[];c.isPlainObject(b)&&c.each(b,function(a,c){if("callback"===a)b=c;else if(d)d[a](c)});f.length?f.bind("load.imagesLoaded error.imagesLoaded",function(b){k(b.target, "error"===b.type)}).each(function(b,a){var d=a.src,e=c.data(a,"imagesLoaded");if(e&&e.src===d)k(a,e.isBroken);else if(a.complete&&a.naturalWidth!==p)k(a,0===a.naturalWidth||0===a.naturalHeight);else if(a.readyState||a.complete)a.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",a.src=d}):a();return d?d.promise(e):e};var s=c(g),n=g.Modernizr;c.Elastislide=function(b,a){this.$el=c(a);this._init(b)};c.Elastislide.defaults={orientation:"horizontal",speed:500,easing:"ease-in-out", minItems:3,start:0,onClick:function(b,a,c){return!1},onReady:function(){return!1},onBeforeSlide:function(){return!1},onAfterSlide:function(){return!1}};c.Elastislide.prototype={_init:function(b){this.options=c.extend(!0,{},c.Elastislide.defaults,b);var a=this;this.transEndEventName={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"}[n.prefixed("transition")];this.support=n.csstransitions&&n.csstransforms; this.current=this.options.start;this.isSliding=!1;this.$items=this.$el.children("li");this.itemsCount=this.$items.length;if(0===this.itemsCount)return!1;this._validate();this.$items.detach();this.$el.empty();this.$el.append(this.$items);this.$el.wrap('<div class="elastislide-wrapper elastislide-loading elastislide-'+this.options.orientation+'"></div>');this.hasTransition=!1;this.hasTransitionTimeout=setTimeout(function(){a._addTransition()},100);this.$el.imagesLoaded(function(){a.$el.show();a._layout(); a._configure();a.hasTransition?(a._removeTransition(),a._slideToItem(a.current),a.$el.on(a.transEndEventName,function(){a.$el.off(a.transEndEventName);a._setWrapperSize();a._addTransition();a._initEvents()})):(clearTimeout(a.hasTransitionTimeout),a._setWrapperSize(),a._initEvents(),a._slideToItem(a.current),setTimeout(function(){a._addTransition()},25));a.options.onReady()})},_validate:function(){0>this.options.speed&&(this.options.speed=500);if(1>this.options.minItems||this.options.minItems>this.itemsCount)this.options.minItems= 1;if(0>this.options.start||this.options.start>this.itemsCount-1)this.options.start=0;"horizontal"!=this.options.orientation&&"vertical"!=this.options.orientation&&(this.options.orientation="horizontal")},_layout:function(){this.$el.wrap('<div class="elastislide-carousel"></div>');this.$carousel=this.$el.parent();this.$wrapper=this.$carousel.parent().removeClass("elastislide-loading");var b=this.$items.find("img:first");this.imgSize={width:b.outerWidth(!0),height:b.outerHeight(!0)};this._setItemsSize(); "horizontal"===this.options.orientation?this.$el.css("max-height",this.imgSize.height):this.$el.css("height",this.options.minItems*this.imgSize.height);this._addControls()},_addTransition:function(){this.support&&this.$el.css("transition","all "+this.options.speed+"ms "+this.options.easing);this.hasTransition=!0},_removeTransition:function(){this.support&&this.$el.css("transition","all 0s");this.hasTransition=!1},_addControls:function(){var b=this;this.$navigation=c('<nav><span class="elastislide-prev"></span><span class="elastislide-next"></span></nav>').appendTo(this.$wrapper); this.$navPrev=this.$navigation.find("span.elastislide-prev").on("mousedown.elastislide",function(a){b._slide("prev");return!1});this.$navNext=this.$navigation.find("span.elastislide-next").on("mousedown.elastislide",function(a){b._slide("next");return!1})},_setItemsSize:function(){var b="horizontal"===this.options.orientation?100*Math.floor(this.$carousel.width()/this.options.minItems)/this.$carousel.width():100;this.$items.css({width:b+"%","max-width":this.imgSize.width,"max-height":this.imgSize.height}); "vertical"===this.options.orientation&&this.$wrapper.css("max-width",this.imgSize.width+parseInt(this.$wrapper.css("padding-left"))+parseInt(this.$wrapper.css("padding-right")))},_setWrapperSize:function(){"vertical"===this.options.orientation&&this.$wrapper.css({height:this.options.minItems*this.imgSize.height+parseInt(this.$wrapper.css("padding-top"))+parseInt(this.$wrapper.css("padding-bottom"))})},_configure:function(){this.fitCount="horizontal"===this.options.orientation?this.$carousel.width()< this.options.minItems*this.imgSize.width?this.options.minItems:Math.floor(this.$carousel.width()/this.imgSize.width):this.$carousel.height()<this.options.minItems*this.imgSize.height?this.options.minItems:Math.floor(this.$carousel.height()/this.imgSize.height)},_initEvents:function(){var b=this;s.on("debouncedresize.elastislide",function(){b._setItemsSize();b._configure();b._slideToItem(b.current)});this.$el.on(this.transEndEventName,function(){b._onEndTransition()});if("horizontal"===this.options.orientation)this.$el.on({swipeleft:function(){b._slide("next")}, swiperight:function(){b._slide("prev")}});else this.$el.on({swipeup:function(){b._slide("next")},swipedown:function(){b._slide("prev")}});this.$el.on("click.elastislide","li",function(a){var k=c(this);b.options.onClick(k,k.index(),a)})},_destroy:function(b){this.$el.off(this.transEndEventName).off("swipeleft swiperight swipeup swipedown .elastislide");s.off(".elastislide");this.$el.css({"max-height":"none",transition:"none"}).unwrap(this.$carousel).unwrap(this.$wrapper);this.$items.css({width:"auto", "max-width":"none","max-height":"none"});this.$navigation.remove();this.$wrapper.remove();b&&b.call()},_toggleControls:function(b,a){a?"next"===b?this.$navNext.show():this.$navPrev.show():"next"===b?this.$navNext.hide():this.$navPrev.hide()},_slide:function(b,a){if(this.isSliding)return!1;this.options.onBeforeSlide();this.isSliding=!0;var k=this,e=this.translation||0,d="horizontal"===this.options.orientation?this.$items.outerWidth(!0):this.$items.outerHeight(!0),g=this.itemsCount*d,f="horizontal"=== this.options.orientation?this.$carousel.width():this.$carousel.height();if(a===p){d*=this.fitCount;if(0>d)return!1;if("next"===b&&g-(Math.abs(e)+d)<f)d=g-(Math.abs(e)+f),this._toggleControls("next",!1),this._toggleControls("prev",!0);else if("prev"===b&&0>Math.abs(e)-d)d=Math.abs(e),this._toggleControls("next",!0),this._toggleControls("prev",!1);else{var h="next"===b?Math.abs(e)+Math.abs(d):Math.abs(e)-Math.abs(d);0<h?this._toggleControls("prev",!0):this._toggleControls("prev",!1);h<g-f?this._toggleControls("next", !0):this._toggleControls("next",!1)}a="next"===b?e-d:e+d}else d=Math.abs(a),Math.max(g,f)-d<f&&(a=-(Math.max(g,f)-f)),0<d?this._toggleControls("prev",!0):this._toggleControls("prev",!1),Math.max(g,f)-f>d?this._toggleControls("next",!0):this._toggleControls("next",!1);this.translation=a;if(e===a)return this._onEndTransition(),!1;this.support?"horizontal"===this.options.orientation?this.$el.css("transform","translateX("+a+"px)"):this.$el.css("transform","translateY("+a+"px)"):(c.fn.applyStyle=this.hasTransition? c.fn.animate:c.fn.css,e="horizontal"===this.options.orientation?{left:a}:{top:a},this.$el.stop().applyStyle(e,c.extend(!0,[],{duration:this.options.speed,complete:function(){k._onEndTransition()}})));this.hasTransition||this._onEndTransition()},_onEndTransition:function(){this.isSliding=!1;this.options.onAfterSlide()},_slideTo:function(b){b=b||this.current;var a=Math.abs(this.translation)||0,c="horizontal"===this.options.orientation?this.$items.outerWidth(!0):this.$items.outerHeight(!0),e=a+this.$carousel.width(), d=Math.abs(b*c);(d+c>e||d<a)&&this._slideToItem(b)},_slideToItem:function(b){b="horizontal"===this.options.orientation?b*this.$items.outerWidth(!0):b*this.$items.outerHeight(!0);this._slide("",-b)},add:function(b){var a=this,c=this.current,e=this.$items.eq(this.current);this.$items=this.$el.children("li");this.itemsCount=this.$items.length;this.current=e.index();this._setItemsSize();this._configure();this._removeTransition();c<this.current?this._slideToItem(this.current):this._slide("next",this.translation); setTimeout(function(){a._addTransition()},25);b&&b.call()},setCurrent:function(b,a){this.current=b;this._slideTo();a&&a.call()},next:function(){self._slide("next")},previous:function(){self._slide("prev")},slideStart:function(){this._slideTo(0)},slideEnd:function(){this._slideTo(this.itemsCount-1)},destroy:function(b){this._destroy(b)}};c.fn.elastislide=function(b){var a=c.data(this,"elastislide");if("string"===typeof b){var h=Array.prototype.slice.call(arguments,1);this.each(function(){a?c.isFunction(a[b])&& "_"!==b.charAt(0)?a[b].apply(a,h):g.console&&g.console.error("no such method '"+b+"' for elastislide self"):g.console&&g.console.error("cannot call methods on elastislide prior to initialization; attempted to call method '"+b+"'")})}else this.each(function(){a?a._init():a=c.data(this,"elastislide",new c.Elastislide(b,this))});return a}})(jQuery,window);