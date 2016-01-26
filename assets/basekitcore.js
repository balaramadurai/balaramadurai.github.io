
(function(E,a){var j=a.document;function A(Q){var Z=j.createElement("div");j.body.insertBefore(Z,null);E.replaceWith(Z,'<script type="text/javascript">'+Q+"<\/script>")}E=E||(function(Q){return{ajax:Q.ajax,$:function(Z){return Q(Z)[0]},replaceWith:function(Z,ad){var ac=Q(Z)[0];var ab=ac.nextSibling,aa=ac.parentNode;Q(ac).remove();if(ab){Q(ab).before(ad)}else{Q(aa).append(ad)}},onLoad:function(Z){Q(Z)},copyAttrs:function(af,ab){var ad=Q(ab),aa=af.attributes;for(var ac=0,Z=aa.length;ac<Z;ac++){if(aa[ac]&&aa[ac].value){try{ad.attr(aa[ac].name,aa[ac].value)}catch(ae){}}}}}})(a.jQuery);E.copyAttrs=E.copyAttrs||function(){};E.onLoad=E.onLoad||function(){throw"error: autoAsync cannot be used without jQuery or defining writeCaptureSupport.onLoad"};function P(ab,aa){for(var Z=0,Q=ab.length;Z<Q;Z++){if(aa(ab[Z])===false){return}}}function v(Q){return Object.prototype.toString.call(Q)==="[object Function]"}function p(Q){return Object.prototype.toString.call(Q)==="[object String]"}function u(aa,Z,Q){return Array.prototype.slice.call(aa,Z||0,Q||aa&&aa.length)}function D(ab,aa){var Q=false;P(ab,Z);function Z(ac){return!(Q=aa(ac))}return Q}function L(Q){this._queue=[];this._children=[];this._parent=Q;if(Q){Q._addChild(this)}}L.prototype={_addChild:function(Q){this._children.push(Q)},push:function(Q){this._queue.push(Q);this._bubble("_doRun")},pause:function(){this._bubble("_doPause")},resume:function(){this._bubble("_doResume")},_bubble:function(Z){var Q=this;while(!Q[Z]){Q=Q._parent}return Q[Z]()},_next:function(){if(D(this._children,Q)){return true}function Q(aa){return aa._next()}var Z=this._queue.shift();if(Z){Z()}return!!Z}};function i(Q){if(Q){return new L(Q)}L.call(this);this.paused=0}i.prototype=(function(){function Q(){}Q.prototype=L.prototype;return new Q()})();i.prototype._doRun=function(){if(!this.running){this.running=true;try{while(this.paused<1&&this._next()){}}finally{this.running=false}}};i.prototype._doPause=function(){this.paused++};i.prototype._doResume=function(){this.paused--;this._doRun()};function M(){}M.prototype={_html:"",open:function(){this._opened=true;if(this._delegate){this._delegate.open()}},write:function(Q){if(this._closed){return}this._written=true;if(this._delegate){this._delegate.write(Q)}else{this._html+=Q}},writeln:function(Q){this.write(Q+"\n")},close:function(){this._closed=true;if(this._delegate){this._delegate.close()}},copyTo:function(Q){this._delegate=Q;Q.foobar=true;if(this._opened){Q.open()}if(this._written){Q.write(this._html)}if(this._closed){Q.close()}}};var e=(function(){var Q={f:j.getElementById};try{Q.f.call(j,"abc");return true}catch(Z){return false}})();function I(Q){P(Q,function(Z){var aa=j.getElementById(Z.id);if(!aa){l("<proxyGetElementById - finish>","no element in writen markup with id "+Z.id);return}P(Z.el.childNodes,function(ab){aa.appendChild(ab)});if(aa.contentWindow){a.setTimeout(function(){Z.el.contentWindow.document.copyTo(aa.contentWindow.document)},1)}E.copyAttrs(Z.el,aa)})}function s(Z,Q){if(Q&&Q[Z]===false){return false}return Q&&Q[Z]||o[Z]}function x(Z,ai){var ae=[],ad=s("proxyGetElementById",ai),ag=s("writeOnGetElementById",ai),Q={write:j.write,writeln:j.writeln,finish:function(){},out:""};Z.state=Q;j.write=ah;j.writeln=aa;if(ad||ag){Q.getEl=j.getElementById;j.getElementById=ab;if(ag){findEl=af}else{findEl=ac;Q.finish=function(){I(ae)}}}function ah(aj){Q.out+=aj}function aa(aj){Q.out+=aj+"\n"}function ac(ak){var aj=j.createElement("div");ae.push({id:ak,el:aj});aj.contentWindow={document:new M()};return aj}function af(al){var aj=E.$(Z.target);var ak=j.createElement("div");aj.parentNode.insertBefore(ak,aj);E.replaceWith(ak,Q.out);Q.out="";return e?Q.getEl.call(j,al):Q.getEl(al)}function ab(ak){var aj=e?Q.getEl.call(j,ak):Q.getEl(ak);return aj||findEl(ak)}return Q}function V(Q){j.write=Q.write;j.writeln=Q.writeln;if(Q.getEl){j.getElementById=Q.getEl}return Q.out}function N(Q){return Q&&Q.replace(/^\s*<!(\[CDATA\[|--)/,"").replace(/(\]\]|--)>\s*$/,"")}function b(){}function d(Z,Q){console.error("Error",Q,"executing code:",Z)}var l=v(a.console&&console.error)?d:b;function S(aa,Z,Q){var ab=x(Z,Q);try{A(N(aa))}catch(ac){l(aa,ac)}finally{V(ab)}return ab}function O(Z){var Q=/^(\w+:)?\/\/([^\/?#]+)/.exec(Z);return Q&&(Q[1]&&Q[1]!=location.protocol||Q[2]!=location.host)}function T(Q){return new RegExp(Q+"=(?:([\"'])([\\s\\S]*?)\\1|([^\\s>]+))","i")}function k(Q){var Z=T(Q);return function(aa){var ab=Z.exec(aa)||[];return ab[2]||ab[3]}}var r=/(<script[\s\S]*?>)([\s\S]*?)<\/script>/ig,n=T("src"),X=k("src"),q=k("type"),Y=k("language"),C="__document_write_ajax_callbacks__",B="__document_write_ajax_div-",g="window['"+C+"']['%d']();",m=a[C]={},w='<script type="text/javascript">'+g+"<\/script>",H=0;function c(){return(++H).toString()}function G(Z,aa){var Q;if(v(Z)){Q=Z;Z=null}Z=Z||{};Q=Q||Z&&Z.done;Z.done=aa?function(){aa(Q)}:Q;return Z}var z=new i();var y=[];var f=window._debugWriteCapture?function(){}:function(Q,aa,Z){y.push({type:Q,src:aa,data:Z})};var K=window._debugWriteCapture?function(){}:function(){y.push(arguments)};function W(Q){var Z=c();m[Z]=function(){Q();delete m[Z]};return Z}function J(Q){return w.replace(/%d/,W(Q))}function R(ac,ag,aa,ae){var ad=aa&&new i(aa)||z;ag=G(ag);var ab=s("done",ag);var Q="";var Z=s("fixUrls",ag);if(!v(Z)){Z=function(ah){return ah}}if(v(ab)){Q=J(function(){ad.push(ab)})}return ac.replace(r,af)+Q;function af(aj,av,ai){var an=X(av),am=q(av)||"",aB=Y(av)||"",aA=(!am&&!aB)||am.toLowerCase().indexOf("javascript")!==-1||aB.toLowerCase().indexOf("javascript")!==-1;f("replace",an,aj);if(!aA){return aj}var aw=W(ap),ao=B+aw,au,al={target:"#"+ao,parent:ae};function ap(){ad.push(au)}if(an){an=Z(an);av=av.replace(n,"");if(O(an)){au=az}else{if(s("asyncAll",ag)){au=ay()}else{au=at}}}else{au=ax}function ax(){ah(ai)}function at(){E.ajax({url:an,type:"GET",dataType:"text",async:false,success:function(aC){ah(aC)}})}function ak(aE,aC,aD){l("<XHR for "+an+">",aD);ad.resume()}function aq(){return J(function(){ad.resume()})}function ay(){var aE,aD;function aC(aG,aF){if(!aE){aD=aG;return}try{ah(aG,aq())}catch(aH){l(aG,aH)}}E.ajax({url:an,type:"GET",dataType:"text",async:true,success:aC,error:ak});return function(){aE=true;if(aD){ah(aD)}else{ad.pause()}}}function az(aC){var aE=x(al,ag);ad.pause();f("pause",an);E.ajax({url:an,type:"GET",dataType:"script",success:aD,error:ak});function aD(aH,aG,aF){f("out",an,aE.out);ar(V(aE),J(aE.finish)+aq());f("resume",an)}}function ah(aD,aC){var aE=S(aD,al,ag);aC=J(aE.finish)+(aC||"");ar(aE.out,aC)}function ar(aD,aC){E.replaceWith(al.target,R(aD,null,ad,al)+(aC||""))}return'<div style="display: none" id="'+ao+'"></div>'+av+g.replace(/%d/,aw)+"<\/script>"}}function F(Z,aa){var Q=z;P(Z,function(ab){Q.push(ac);function ac(){ab.action(R(ab.html,ab.options,Q),ab)}});if(aa){Q.push(aa)}}function U(Q){var Z=Q;while(Z&&Z.nodeType===1){Q=Z;Z=Z.lastChild;while(Z&&Z.nodeType!==1){Z=Z.previousSibling}}return Q}function h(Q){var aa=j.write,ad=j.writeln,Z,ab=[];j.writeln=function(ae){j.write(ae+"\n")};var ac;j.write=function(af){var ae=U(j.body);if(ae!==Z){Z=ae;ab.push(ac={el:ae,out:[]})}ac.out.push(af)};E.onLoad(function(){var ah,ak,af,aj,ai;Q=G(Q);ai=Q.done;Q.done=function(){j.write=aa;j.writeln=ad;if(ai){ai()}};for(var ag=0,ae=ab.length;ag<ae;ag++){ah=ab[ag].el;ak=j.createElement("div");ah.parentNode.insertBefore(ak,ah.nextSibling);af=ab[ag].out.join("");aj=ae-ag===1?R(af,Q):R(af);E.replaceWith(ak,aj)}})}var t="writeCapture";var o=a[t]={_original:a[t],fixUrls:function(Q){return Q.replace(/&amp;/g,"&")},noConflict:function(){a[t]=this._original;return this},debug:y,proxyGetElementById:false,_forTest:{Q:i,GLOBAL_Q:z,$:E,matchAttr:k,slice:u,capture:x,uncapture:V,captureWrite:S},replaceWith:function(Q,aa,Z){E.replaceWith(Q,R(aa,Z))},html:function(Q,ab,Z){var aa=E.$(Q);aa.innerHTML="<span/>";E.replaceWith(aa.firstChild,R(ab,Z))},load:function(Q,aa,Z){E.ajax({url:aa,dataType:"text",type:"GET",success:function(ab){o.html(Q,ab,Z)}})},autoAsync:h,sanitize:R,sanitizeSerial:F}})(this.writeCaptureSupport,this);(function(g,d,n){var c={html:h};g.each(["append","prepend","after","before","wrap","wrapAll","replaceWith","wrapInner"],function(){c[this]=i(this)});function a(q){return Object.prototype.toString.call(q)=="[object String]"}function p(u,t,s,r){if(arguments.length==0){return o.call(this)}var q=c[u];if(u=="load"){return l.call(this,t,s,r)}if(!q){j(u)}return b.call(this,t,s,q)}g.fn.writeCapture=p;var k="__writeCaptureJsProxied-fghebd__";function o(){if(this[k]){return this}var r=this;function q(){var t=this,s=false;this[k]=true;g.each(c,function(v){var u=r[v];if(!u){return}t[v]=function(y,x,w){if(!s&&a(y)){try{s=true;return p.call(t,v,y,x,w)}finally{s=false}}return u.apply(t,arguments)}});this.pushStack=function(){return o.call(r.pushStack.apply(t,arguments))};this.endCapture=function(){return r}}q.prototype=r;return new q()}function b(t,s,u){var q,r=this;if(s&&s.done){q=s.done;delete s.done}else{if(g.isFunction(s)){q=s;s=null}}d.sanitizeSerial(g.map(this,function(v){return{html:t,options:s,action:function(w){u.call(v,w)}}}),q&&function(){q.call(r)}||q);return this}function h(q){g(this).html(q)}function i(q){return function(r){g(this)[q](r)}}function l(t,s,v){var r=this,q,u=t.indexOf(" ");if(u>=0){q=t.slice(u,t.length);t=t.slice(0,u)}if(g.isFunction(v)){s=s||{};s.done=v}return g.ajax({url:t,type:s&&s.type||"GET",dataType:"html",data:s&&s.params,complete:f(r,s,q)})}function f(r,s,q){return function(u,t){if(t=="success"||t=="notmodified"){var v=m(u.responseText,q);b.call(r,v,s,h)}}}var e=/jquery-writeCapture-script-placeholder-(\d+)-wc/g;function m(s,r){if(!r||!s){return s}var t=0,q={};return g("<div/>").append(s.replace(/<script(.|\s)*?\/script>/g,function(u){q[t]=u;return"jquery-writeCapture-script-placeholder-"+(t++)+"-wc"})).find(r).html().replace(e,function(u,v){return q[v]})}function j(q){throw"invalid method parameter "+q}g.writeCapture=d})(jQuery,writeCapture.noConflict());;(function($,document){var methods={init:function(fn,opts){var options=$.extend({},$.fn.scrollbar.defaults,opts);return this.each(function(){var container=$(this),props={arrows:options.arrows};if(options.containerHeight!='auto'){container.height(options.containerHeight);}
props.containerHeight=container.height();props.contentHeight=$.fn.scrollbar.contentHeight(container);if(props.contentHeight<=props.containerHeight){return true;}
this.scrollbar=new $.fn.scrollbar.Scrollbar(container,props,options);this.scrollbar.buildHtml().setHandle().appendEvents();if(typeof fn==="function"){fn(container.find(".scrollbar-pane"),this.scrollbar);}});},repaint:function(){return this.each(function(){if(this.scrollbar){this.scrollbar.repaint();}});},scrollto:function(to){return this.each(function(){if(this.scrollbar){this.scrollbar.scrollto(to);}});},unscrollbar:function(){return this.each(function(){if(this.scrollbar){this.scrollbar.unscrollbar();}});}}
$.fn.scrollbar=function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1));}
else if(typeof method==="function"||method===undefined){return methods.init.apply(this,arguments);}
else if(typeof method==="object"){return methods.init.apply(this,[null,method]);}
else{$.error("method '"+method+"' does not exist for $.fn.scrollbar");}}
$.fn.scrollbar.defaults={containerHeight:'auto',arrows:true,handleHeight:'auto',handleMinHeight:30,scrollTimeout:50,scrollStep:20,scrollTimeoutArrows:40,scrollStepArrows:3};$.fn.scrollbar.Scrollbar=function(container,props,options){this.container=container;this.props=props;this.opts=options;this.mouse={};this.props.arrows=this.container.hasClass('no-arrows')?false:this.props.arrows;};$.fn.scrollbar.Scrollbar.prototype={buildHtml:function(){this.container.wrapInner('<div class="scrollbar-pane"/>');this.container.append('<div class="scrollbar-handle-container"><div class="scrollbar-handle"/></div>');if(this.props.arrows){this.container.append('<div class="scrollbar-handle-up"/>').append('<div class="scrollbar-handle-down"/>');}
var height=this.container.height();this.pane=this.container.find('.scrollbar-pane');this.handle=this.container.find('.scrollbar-handle');this.handleContainer=this.container.find('.scrollbar-handle-container');this.handleArrows=this.container.find('.scrollbar-handle-up, .scrollbar-handle-down');this.handleArrowUp=this.container.find('.scrollbar-handle-up');this.handleArrowDown=this.container.find('.scrollbar-handle-down');this.pane.defaultCss({'top':0,'left':0});this.handleContainer.defaultCss({'right':0});this.handle.defaultCss({'top':0,'right':0});this.handleArrows.defaultCss({'right':0});this.handleArrowUp.defaultCss({'top':0});this.handleArrowDown.defaultCss({'bottom':0});this.container.css({'position':this.container.css('position')==='absolute'?'absolute':'relative','overflow':'hidden','height':height});this.pane.css({'position':'absolute','overflow':'visible','height':'auto'});this.handleContainer.css({'position':'absolute','top':this.handleArrowUp.outerHeight(true),'height':(this.props.containerHeight-this.handleArrowUp.outerHeight(true)-this.handleArrowDown.outerHeight(true))+'px'});this.handle.css({'position':'absolute','cursor':'pointer'});this.handleArrows.css({'position':'absolute','cursor':'pointer'});this.pane.top=0;return this;},setHandle:function(){this.props.handleContainerHeight=this.handleContainer.height();this.props.contentHeight=this.pane.height();if(this.pane.height()<=this.props.containerHeight)
{this.handle.hide();}
else
{this.handle.show();}
this.props.handleHeight=this.opts.handleHeight=='auto'?Math.max(Math.ceil(this.props.containerHeight*this.props.handleContainerHeight/this.props.contentHeight),this.opts.handleMinHeight):this.opts.handleHeight;this.handle.height(this.props.handleHeight);this.handle.height(2*this.handle.height()-this.handle.outerHeight(true));this.props.handlePosition={min:0,max:this.props.handleContainerHeight-this.props.handleHeight};this.props.handleContentRatio=(this.props.contentHeight-this.props.containerHeight)/(this.props.handleContainerHeight-this.props.handleHeight);if(this.handle.top==undefined){this.handle.top=0;}else{this.handle.top=-1*this.pane.top/this.props.handleContentRatio;}
return this;},appendEvents:function(){this.handle.bind('mousedown.handle',$.proxy(this,'startOfHandleMove'));this.handleContainer.bind('mousedown.handle',$.proxy(this,'onHandleContainerMousedown'));this.handleContainer.bind('mouseenter.container mouseleave.container',$.proxy(this,'onHandleContainerHover'));this.handleArrows.bind('mousedown.arrows',$.proxy(this,'onArrowsMousedown'));this.container.bind('mousewheel.container',$.proxy(this,'onMouseWheel'));this.container.bind('mouseenter.container mouseleave.container',$.proxy(this,'onContentHover'));this.handle.bind('click.scrollbar',this.preventClickBubbling);this.handleContainer.bind('click.scrollbar',this.preventClickBubbling);this.handleArrows.bind('click.scrollbar',this.preventClickBubbling);return this;},mousePosition:function(ev){return ev.pageY||(ev.clientY+(document.documentElement.scrollTop||document.body.scrollTop))||0;},repaint:function(){this.setHandle();this.setHandlePosition();},scrollto:function(to){var distance=0;if(typeof to=="number"){distance=(to<0?0:to)/this.props.handleContentRatio;}
else if(typeof to=="string"){if(to=="bottom"){distance=this.props.handlePosition.max;}
if(to=="middle"){distance=Math.ceil(this.props.handlePosition.max/2);}}
else if(typeof to=="object"&&!$.isPlainObject(to)){distance=Math.ceil(to.position().top/this.props.handleContentRatio);}
this.handle.top=distance;this.setHandlePosition();this.setContentPosition();},unscrollbar:function(){var holder=this.container.find('.scrollbar-pane').find('*');this.container.empty();this.container.append(holder);this.container.attr('style','');},startOfHandleMove:function(ev){ev.preventDefault();ev.stopPropagation();this.mouse.start=this.mousePosition(ev);this.handle.start=this.handle.top;$(document).bind('mousemove.handle',$.proxy(this,'onHandleMove')).bind('mouseup.handle',$.proxy(this,'endOfHandleMove'));this.handle.addClass('move');this.handleContainer.addClass('move');},onHandleMove:function(ev){ev.preventDefault();var distance=this.mousePosition(ev)-this.mouse.start;this.handle.top=this.handle.start+distance;this.setHandlePosition();this.setContentPosition();},endOfHandleMove:function(ev){$(document).unbind('.handle');this.handle.removeClass('move');this.handleContainer.removeClass('move');},setHandlePosition:function(){this.handle.top=(this.handle.top>this.props.handlePosition.max)?this.props.handlePosition.max:this.handle.top;this.handle.top=(this.handle.top<this.props.handlePosition.min)?this.props.handlePosition.min:this.handle.top;this.handle[0].style.top=this.handle.top+'px';},setContentPosition:function(){this.pane.top=-1*this.props.handleContentRatio*this.handle.top;this.pane[0].style.top=this.pane.top+'px';},onMouseWheel:function(ev,delta){this.handle.top-=delta;this.setHandlePosition();this.setContentPosition();if(this.handle.top>this.props.handlePosition.min&&this.handle.top<this.props.handlePosition.max){ev.preventDefault();}},onHandleContainerMousedown:function(ev){ev.preventDefault();if(!$(ev.target).hasClass('scrollbar-handle-container')){return false;}
this.handle.direction=(this.handle.offset().top<this.mousePosition(ev))?1:-1;this.handle.step=this.opts.scrollStep;var that=this;$(document).bind('mouseup.handlecontainer',function(){clearInterval(timer);that.handle.unbind('mouseenter.handlecontainer');$(document).unbind('mouseup.handlecontainer');});this.handle.bind('mouseenter.handlecontainer',function(){clearInterval(timer);});var timer=setInterval($.proxy(this.moveHandle,this),this.opts.scrollTimeout);},onArrowsMousedown:function(ev){ev.preventDefault();this.handle.direction=$(ev.target).hasClass('scrollbar-handle-up')?-1:1;this.handle.step=this.opts.scrollStepArrows;$(ev.target).addClass('move');var timer=setInterval($.proxy(this.moveHandle,this),this.opts.scrollTimeoutArrows);$(document).one('mouseup.arrows',function(){clearInterval(timer);$(ev.target).removeClass('move');});},moveHandle:function(){this.handle.top=(this.handle.direction===1)?Math.min(this.handle.top+this.handle.step,this.props.handlePosition.max):Math.max(this.handle.top-this.handle.step,this.props.handlePosition.min);this.handle[0].style.top=this.handle.top+'px';this.setContentPosition();},onContentHover:function(ev){if(ev.type==='mouseenter'){this.container.addClass('hover');this.handleContainer.addClass('hover');}else{this.container.removeClass('hover');this.handleContainer.removeClass('hover');}},onHandleContainerHover:function(ev){if(ev.type==='mouseenter'){this.handleArrows.addClass('hover');}else{this.handleArrows.removeClass('hover');}},preventClickBubbling:function(ev){ev.stopPropagation();}};$.fn.scrollbar.contentHeight=function(container){var wrapper=container.wrapInner('<div/>').find(':first');var height=wrapper.css({overflow:'hidden'}).height();wrapper.replaceWith(wrapper.contents());return height;};$.fn.defaultCss=function(styles){var notdef={'right':'auto','left':'auto','top':'auto','bottom':'auto','position':'static'};return this.each(function(){var elem=$(this);for(var style in styles){if(elem.css(style)===notdef[style]){elem.css(style,styles[style]);}}});};$.event.special.mousewheel={setup:function(){if(this.addEventListener){this.addEventListener('mousewheel',$.fn.scrollbar.mouseWheelHandler,false);this.addEventListener('DOMMouseScroll',$.fn.scrollbar.mouseWheelHandler,false);}else{this.onmousewheel=$.fn.scrollbar.mouseWheelHandler;}},teardown:function(){if(this.removeEventListener){this.removeEventListener('mousewheel',$.fn.scrollbar.mouseWheelHandler,false);this.removeEventListener('DOMMouseScroll',$.fn.scrollbar.mouseWheelHandler,false);}else{this.onmousewheel=null;}}};$.fn.extend({mousewheel:function(fn){return fn?this.bind("mousewheel",fn):this.trigger("mousewheel");},unmousewheel:function(fn){return this.unbind("mousewheel",fn);}});$.fn.scrollbar.mouseWheelHandler=function(event){var orgEvent=event||window.event,args=[].slice.call(arguments,1),delta=0,returnValue=true,deltaX=0,deltaY=0;event=$.event.fix(orgEvent);event.type="mousewheel";if(event.wheelDelta){delta=event.wheelDelta/120;}
if(event.detail){delta=-event.detail/3;}
if(event.originalEvent.wheelDelta){delta=event.originalEvent.wheelDelta/120;}
if(event.originalEvent.detail){delta=-event.originalEvent.detail/3;}
if(orgEvent.axis!==undefined&&orgEvent.axis===orgEvent.HORIZONTAL_AXIS){deltaY=0;deltaX=-1*delta;}
if(orgEvent.wheelDeltaY!==undefined){deltaY=orgEvent.wheelDeltaY/120;}
if(orgEvent.wheelDeltaX!==undefined){deltaX=-1*orgEvent.wheelDeltaX/120;}
args.unshift(event,delta,deltaX,deltaY);return $.event.handle.apply(this,args);};})(jQuery,document);var fakeConsole=false;function errorTrace(e)
{if(BaseKit.Debugger)
{return;}
var mode;try{(0)()}catch(e){mode=e.stack?'Firefox':window.opera?'Opera':'Other';}
switch(mode){case'Firefox':try{(0)()}catch(e){var error=e.stack.replace(/^.*?\n/,'').replace(/(?:\n@:0)?\s+$/m,'').replace(/^\(/gm,'{anonymous}(').split("\n");BaseKit.Debugger.log(error);}
break;}}
function errorTrace(e)
{var mode;try{(0)()}catch(e){mode=e.stack?'Firefox':window.opera?'Opera':'Other';}
switch(mode){case'Firefox':try{(0)()}catch(e){var error=e.stack.replace(/^.*?\n/,'').replace(/(?:\n@:0)?\s+$/m,'').replace(/^\(/gm,'{anonymous}(').split("\n");BaseKit.Debugger.log(error);}
break;case'Opera':try{(0)()}catch(e){var lines=e.message.split("\n"),ANON='{anonymous}',lineRE=/Line\s+(\d+).*?in\s+(http\S+)(?:.*?in\s+function\s+(\S+))?/i,i,j,len;for(i=4,j=0,len=lines.length;i<len;i+=2){if(lineRE.test(lines[i])){lines[j++]=(RegExp.$3?RegExp.$3+'()@'+RegExp.$2+RegExp.$1:ANON+RegExp.$2+':'+RegExp.$1)+' -- '+lines[i+1].replace(/^\s+/,'');}}
lines.splice(j,lines.length-j);BaseKit.Debugger.log(lines);}
break;default:var curr=arguments.callee.caller,FUNC='function',ANON="{anonymous}",fnRE=/function\s*([\w\-$]+)?\s*\(/i,stack=[],j=0,fn,args,i;while(curr){fn=fnRE.test(curr.toString())?RegExp.$1||curr:curr;args=stack.slice.call(curr.arguments);i=args.length;while(i--){switch(typeof args[i]){case'string':args[i]='"'+args[i].replace(/"/g,'\\"')+'"';break;case'function':args[i]=FUNC;break;}}
stack[j++]=fn+'('+args.join()+')';curr=curr.caller;}
BaseKit.Debugger.log(stack);break;}}
if(window!=null&&window['loadFirebugConsole']){window.loadFirebugConsole();}else{if(window!=null&&!window['console'])
{window.console={};fakeConsole=true;window.console.info=function(toLog){if(BaseKit.Browser.ie7){}if(BaseKit.Debugger){BaseKit.Debugger.log(toLog)}};window.console.log=function(toLog){if(BaseKit.Browser.ie7){}if(BaseKit.Debugger){BaseKit.Debugger.log(toLog)}};window.console.warn=function(toLog){if(BaseKit.Browser.ie7){}if(BaseKit.Debugger){BaseKit.Debugger.log(toLog)}};window.console.error=function(toLog){if(BaseKit.Browser.ie7){}if(BaseKit.Debugger){errorTrace(toLog)}};}}
var BaseKit={};(function()
{var __key=null;var readys=[];var logs=[];var listeners=[];var scrollbarSize=null;function escapeHTML(value)
{return typeof value=="string"?value.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'):value;}
BaseKit.Util={extend:function(destination,source)
{destination=destination||{};if(source)
{for(var property in source)
{destination[property]=source[property];}}
return destination;},encode:function(index,value)
{var type=typeof value;switch(type)
{case"boolean":return index+"="+(value?"1&":"0&");case"string":case"number":return index+"="+encodeURIComponent(value)+"&";case"object":var items=[];if(value&&typeof value.length=="number"&&typeof value.splice=="function")
{for(var i=0,j=value.length;i<j;++i)
{items.push(this.encode(index+"["+i+"]",value[i]));}}
else if(value)
{for(var name in value)
{items.push(this.encode(index+"["+name+"]",value[name]));}}
else
{return index+"=&";}
return items.join("");default:return index+"=&";}},removeKey:function(object,key)
{if(!$.browser.msie)
{delete object[key];}
else
{var remaining={};for(var check in object)
{if(check!=key)
{remaining[check]=object[check];}}
object=remaining;}
return object;},preloadImage:function(src,onLoad)
{if(src&&src!==null&src.length>0)
{var img=new Image();if(typeof onLoad=='function')
{img.onload=onLoad;}
img.src=src;}},getScrollbarSize:function()
{if(scrollbarSize===null)
{var div=$('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>');$('body').append(div);var w1=$('div',div).innerWidth();div.css('overflow-y','scroll');var w2=$('div',div).innerWidth();$(div).remove();scrollbarSize=w1-w2;}
return scrollbarSize;},shortenLongURL:function(sInputURL,iMaxLength,bRemoveHostName,sPaddingChars)
{iMaxLength=iMaxLength||52;bRemoveHostName=bRemoveHostName|false;sPaddingChars=sPaddingChars||'...';if(sInputURL!==undefined)
{sOutputURL=sInputURL=sInputURL.trim();if(sInputURL.length<=iMaxLength)
{return sInputURL;}
parseUri.options.strictMode=true;var aPathInfo=parseUri(sInputURL);var sPathInfo=aPathInfo['path'];var aInputPaths=aPathInfo.path.split('/');var iPathElementCount=aInputPaths.length;for(var i=0;i<iPathElementCount;i++)
{if(aInputPaths[i].length>=sPaddingChars.length+6)
{var t=aInputPaths[i];var first=t.substring(0,3);var second=t.substring(aInputPaths[i].length-3,aInputPaths[i].length);aInputPaths[i]=first+sPaddingChars+second;}
sOutputURL=sInputURL.replace(sPathInfo,aInputPaths.join('/'));if(sOutputURL.length<=iMaxLength)break;}
if(sOutputURL.length>iMaxLength&&bRemoveHostName===true)
{sServerInfo=aPathInfo['protocol']+'://'+aPathInfo['host'];sServerInfo+=(aPathInfo['port']==''?'':':'+aPathInfo['port']);sOutputURL=sOutputURL.replace(sServerInfo,'');}}
return sOutputURL;}};BaseKit.Util.extend(String.prototype,{strip_tags:function()
{return this.replace(/<\/?(?!\!)[^>]*>/gi,'');},capitalize:function()
{return this.charAt(0).toUpperCase()+this.substring(1).toLowerCase();},ucwords:function()
{return(this+'').replace(/^(.)|\s(.)/g,function($1){return $1.toUpperCase();});},ucfirst:function()
{return this.charAt(0).toUpperCase()+this.substr(1);},toCamelCase:function()
{var parts=this.split("-"),j=parts.length;if(j==1)
{return parts[0];}
var result=this.charAt(0)=="-"?parts[0].charAt(0).toUpperCase()+parts[0].substring(1):parts[0];for(var i=1;i<j;++i)
{result+=parts[i].charAt(0).toUpperCase()+parts[i].substring(1);}
return result;},find:function(what)
{return(this.indexOf(what)>=0?true:false);},trim:function()
{try
{return this.replace(/^\s+|\s+$/g,"");}
catch(e)
{return this;}},CleanClassName:function()
{try
{this.trim();var name=this.replace(/[^a-zA-Z0-9\s-_]/g,'').replace(/\s+/g,'_').toLowerCase();if(name.charAt(name.length-1)=='_')
{name.substring(0,(name.length-1));}
return name;}
catch(e)
{return this;}},cleanPageStructureName:function()
{try
{this.trim();var name=this.replace(/[^a-zA-Z0-9 -]/g,'').replace(/\s+/g,'-').toLowerCase();if(name.charAt(name.length-1)=='-')
{name.substring(0,(name.length-1));}
return name;}
catch(e)
{return this;}},stripRfc3986ReservedCharacters:function()
{try
{this.trim();var name=this.replace(/(!|\*|\'|\(|\)|;|:|@|&|=|\+|\$|,|\/|\?|#|\[|\])/g,'');return name;}
catch(e)
{return this;}},filterRequest:function()
{return this.trim().stripRfc3986ReservedCharacters().trimMultiple().replaceWhitespaceWithHyphens().toLowerCase();},replaceWhitespaceWithHyphens:function()
{try
{this.trim();var name=this.replace(/\s+/g,'-');if(name.charAt(name.length-1)=='-')
{name.substring(0,(name.length-1));}
return name;}
catch(e)
{return this;}},trimMultiple:function()
{try
{this.trim();return this.replace(/\s+/g,' ');}
catch(e)
{return this;}},supplant:function(object)
{return this.replace(/{([^{}]*)}/g,function(a,b)
{var replace=object[b];return(typeof r==="string"||typeof r==="number"?replace:a);});}});BaseKit.Util.extend(Array.prototype,{isEmpty:function()
{return(this.length==0);},each:function(iterator,scope)
{for(var i=0,length=this.length;i<length;++i)
{if(iterator.call(scope||window,this[i],i)===false)
{break;}}},purge:function()
{this.length=0;},first:function()
{if(this.length>0)
{return this[0];}
else
{return undefined;}},last:function()
{if(this.length>0)
{return this[this.length-1];}
else
{return undefined;}},contains:function(value)
{for(var i=0,length=this.length;i<length;++i)
{if(this[i]==value)
{return true;}}
return false;},containsAtIndex:function(value)
{for(var i=0,length=this.length;i<length;++i)
{if(this[i]==value)
{return i;}}
return false;},remove:function(value)
{var removed=0;for(var i=0;i<this.length;)
{if(this[i]==value)
{this.splice(i,1);++removed;}
else
{++i;}}
return removed;},containsAmount:function(value)
{var count=0;var i=0;for(i=0;i<this.length;i++)
{if(this[i]==value)
count++;}
return count;},findDuplicate:function(value)
{var i=0;for(i=0;i<this.length;i++)
{if(this.containsAmount(this[i])>1)
return this[i];}
return false;},clone:function()
{return[].concat(this);}});BaseKit.BrowserDimensions={get:function()
{var dimensions={};dimensions.width=window.innerWidth!=null?window.innerWidth:document.documentElement&&document.documentElement.clientWidth?document.documentElement.clientWidth:document.body!=null?document.body.clientWidth:null;dimensions.height=window.innerHeight!=null?window.innerHeight:document.documentElement&&document.documentElement.clientHeight?document.documentElement.clientHeight:document.body!=null?document.body.clientHeight:null;dimensions.left=typeof window.pageXOffset!='undefined'?window.pageXOffset:document.documentElement&&document.documentElement.scrollLeft?document.documentElement.scrollLeft:document.body.scrollLeft?document.body.scrollLeft:0;dimensions.top=typeof window.pageYOffset!='undefined'?window.pageYOffset:document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop?document.body.scrollTop:0;dimensions.right=dimensions.left+dimensions.width;dimensions.bottom=dimensions.top+dimensions.height;return dimensions;}};BaseKit.Browser={ie:!!(window.attachEvent&&!window.opera),ie6:navigator.appVersion.indexOf('MSIE 6.')!=-1,ie7:navigator.appVersion.indexOf('MSIE 7.')!=-1,ie8:navigator.appVersion.indexOf('MSIE 8.')!=-1,ie9:navigator.appVersion.indexOf('MSIE 9.')!=-1,opera:!!window.opera,iPhone:navigator.userAgent.indexOf('iPhone')!=-1,chrome:navigator.userAgent.indexOf('Chrome')>-1,safari:navigator.userAgent.indexOf('AppleWebKit/')>-1,firefox:navigator.userAgent.indexOf('Gecko')>-1&&navigator.userAgent.indexOf('KHTML')==-1,is:function()
{arguments.each(function(name)
{if(this[name]===true)
{return true;}});return false;},isLessThanVersion:function(version)
{version=version||6;if(BaseKit.Browser.ie)
{var regEx=new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");if(regEx.exec(navigator.userAgent)!=null)
{var thisVersion=parseFloat(RegExp.$1);return(thisVersion<parseFloat(version))?true:false;}}
return false;}};BaseKit.Browser.webKit=BaseKit.Browser.safari||BaseKit.Browser.chrome;BaseKit.ClientOS={windows:(navigator.appVersion.indexOf("Win")!=-1),macintosh:(navigator.appVersion.indexOf("Mac")!=-1),linux:(navigator.appVersion.indexOf("Linux")!=-1),unix:(navigator.appVersion.indexOf("X11")!=-1),is:function()
{for(var i=0,j=arguments.length;i<j;++i)
{if(!this[arguments[i]])
{return false;}}
return true;}};BaseKit.Class={create:function(config)
{config=config||{};var object=function()
{if(typeof this.construct=="function")
{this.construct.apply(this,arguments);}};if(config.superclass&&config.superclass.prototype)
{BaseKit.Util.extend(object.prototype,config.superclass.prototype);}
var methods=config.methods||{};BaseKit.Util.extend(methods,config.editor||{});for(var property in methods)
{if(typeof methods[property]=='function'&&typeof object.prototype[property]=='function')
{object.prototype[property]=(function(override,parent)
{return function()
{var original=typeof this.callParent=="function"?this.callParent:function(){};this.callParent=parent;var result=override.apply(this,arguments);this.callParent=original;return result;};})(methods[property],object.prototype[property]);}
else
{object.prototype[property]=methods[property];}}
if(typeof object.prototype.callEditor!='function')
{object.prototype.callEditor=function()
{var method=arguments[0],args=Array.prototype.slice.call(arguments,1);if(typeof this[method]=='function')
{this[method].apply(this,args);}};}
if(typeof config.globals=='object')
{BaseKit.Util.extend(object,config.globals);}
if(typeof object.init=='function')
{object.init();}
if(typeof object.startUp=='function')
{$(function()
{object.startUp.call(object);});}
return object;}};BaseKit.Class.Create=BaseKit.Class.create;var domain=null;BaseKit.Core={onStart:function(func,scope)
{if(readys===null)
{func.call(scope||window);}
else
{readys.push([func,scope]);}
this.strictAnchors();},removeGoogleCart:function(widget)
{if(widget instanceof BaseKit.Widget_Googleshoppingcart)
{if($('#googlecart-widget')!==null)
{var cart=$('#googlecart-widget').detach().hide();jQuery("body").append(cart);if(BaseKit.Framework_Page.isMode(["edit","preview",'themeselector','admin'])&&typeof googlecart=='object'&&typeof googlecart!='undefined')
{googlecart.clear();}}}},dynamicTextBoxes:function(textbox,lightColor,darkColor)
{if(!lightColor)
{lightColor='#BBBBBB';}
if(!darkColor)
{darkColor='#414141';}
$(textbox).css('color',lightColor);textbox.focus(function()
{textbox.css('color',darkColor);if(textbox.val()==textbox.attr('placeholder'))
{textbox.val('');}});textbox.blur(function()
{if(textbox.val()=='')
{textbox.val(textbox.attr('placeholder'));}
if(textbox.val()==textbox.attr('placeholder'))
{textbox.css('color',lightColor);}
if(textbox.val()!=textbox.attr('placeholder'))
{textbox.css('color',darkColor);}});},dynamicPasswordBoxes:function(password,i,lightColor,darkColor)
{if($('pseudo_'+password.attr('id')).length)
{return;}
if(!lightColor)
{lightColor='#BBBBBB';}
if(!darkColor)
{darkColor='#414141';}
var attrs=password[0].attributes,clone=$('<input />');if(attrs[i].nodeName!='type'&&attrs[i].nodeName!='value'&&attrs[i].nodeName!='dataFormatAs')
{clone.attr(attrs[i].nodeName,password.attr(attrs[i].nodeName));}
clone.attr({'type':'text','class':password.attr('class')+' pseudopass','title':password.attr('title'),'id':'pseudo_'+password.attr('id'),'color':lightColor,'css':''});if(password.attr('value')=='')
{}
else
{clone.val(password.attr('value'));clone.attr('title',password.attr('value'));}
clone.insertAfter(password);password.hide();clone.focus(function(c,p)
{c=$('#'+c),p=$('#'+p);return function()
{if(p.val()==p.attr('title'))
{p.val('');}
c.hide();p.show();p.focus();p.css('color',darkColor);}}(clone.attr('id'),password.attr('id')));password.blur(function(c,p)
{c=$('#'+c),p=$('#'+p);return function()
{if(p.attr('value')=='')
{p.hide();p.css('color',lightColor);c.show();}
else
{p.css('color',darkColor);}}}(clone.attr('id'),password.attr('id')));},getPseudoInput:function(obj)
{return $('#pseudo_'+obj.attr('id'))},formInputComplete:function(obj)
{var that=this;var obj=obj.$();if((obj.val()!=null)&&(obj.val()!='')&&(obj.val()!=obj.attr('placeholder')))
{return true;}
else
{return false;}},strictAnchors:function()
{if(!document.getElementsByTagName)return;var anchors=document.getElementsByTagName("a");for(var i=anchors.length-1;i>=0;i--)
{var anchor=$(anchors[i]);if($(anchor).attr('href'))
{if(anchor.attr("rel")=="_self"||anchor.attr("rel")=="_parent")
{}
if(anchor.attr("rel")=="_blank")
{anchor.unbind('click').bind('click',function(event)
{window.open($(this).attr('href'),"newWindow");event.stop();return false;});}
if(anchor.attr("rel")=="_top")
{}}}},setKey:function(key)
{__key=key;},getKey:function()
{return __key;},setEnvironmentDomain:function(d)
{domain=d;},getEnvironmentDomain:function()
{return domain;}};function start()
{for(var i=0,j=readys.length;i<j;++i)
{var ready=readys[i];ready[0].call(ready[1]||window);}
readys=null;}
if(BaseKit.Browser.firefox)
{document.addEventListener("DOMContentLoaded",start,false);}
else if(BaseKit.Browser.ie)
{document.write("<scr"+"ipt id=basekit-dom-ready defer src=javascript:void(0)><\/script>");var script=document.getElementById("basekit-dom-ready");script.onreadystatechange=function()
{if(this.readyState=="complete")
{start();}};}
else if(BaseKit.Browser.safari||BaseKit.Browser.chrome)
{if(/WebKit/i.test(navigator.userAgent))
{var timer=setInterval(function()
{if(/loaded|complete/.test(document.readyState))
{clearInterval(timer);start();}},10);}}
else
{window.onload=start;}
var growltimeout=null;BaseKit.Error={killGrowl:function()
{clearTimeout(growltimeout);var errorPanel=$('#page-primary__editorBKerror');if(errorPanel)
{errorPanel.hide();}},handle:function(message)
{if(!arguments[1]||arguments[1]!='growl'||message==''||message==null||message=='undefined')
{return;}
if(!BaseKit.Framework_Page.isMode(['normal']))
{var editor=BaseKit.Editor.get(),page=editor.getRoot();if($('#page-lightbox').length>0&&!$('#page-lightbox').isVisible()&&BaseKit.Framework_Page.isMode(['preview']))
{BaseKit.Framework_Page.alert(message);return;}
else if($('#page-lightbox').length>0&&$('#page-lightbox').isVisible())
{var lb=BaseKit.Framework_Page.getLightbox();if(lb!=false)
{var errorPanel=lb.$("error");var errorMessage=lb.$("error-message");var errorPadding=lb.$("error-padding");var timeInView=2500;}
else
{var errorPanel=$('#page-primary__editorBKerror'),errorMessage=$('#page-adminpanels__sitesettingsBKerror-message'),errorPadding=$('#page-adminpanels__sitesettingsBKerror-padding'),timeInView=2500;errorPanel.css("right",BaseKit.Util.getScrollbarSize()+"px");errorPanel.css("opacity",0.6);}}
else if($("#dashboard-errors").length>0&&$("#dashboard-errors").isVisible())
{var errorPanel=$("#dashboard-error");var errorMessage=$("#dashboard-error-message");var errorPadding=$("#dashboard-error-padding");var timeInView=2500;}
else
{var errorPanel=$('#page-primary__editorBKerror'),errorMessage=$('#page-primary__editorBKerror-message'),errorPadding=$('#page-primary__editorBKerror-padding'),timeInView=2500;errorPanel.css("right",BaseKit.Util.getScrollbarSize()+"px");errorPanel.css("opacity",0.9);}
if(errorPanel!==null&&!errorPanel.isVisible())
{this.showErrorPanel(errorPanel,errorMessage,errorPadding,timeInView,message);}
else
{clearTimeout(growltimeout);var that=this;BaseKit.Animation.addQueue({duration:0.2,onStart:function()
{},onFinish:function()
{that.showErrorPanel(errorPanel,errorMessage,errorPadding,timeInView,message);}},{element:errorMessage,opacity:[1,0]});}}
else
{BaseKit.Framework_Page.alert(message,function()
{});}},showErrorPanel:function(errorPanel,errorMessage,errorPadding,timeInView,message)
{errorPanel.show();BaseKit.Animation.addQueue({duration:0.5,onStart:function()
{errorPadding.html(message);},onFinish:function()
{growltimeout=setTimeout(function()
{clearTimeout(growltimeout);BaseKit.Animation.addQueue({duration:0.5,onFinish:function()
{errorPanel.hide();errorPadding.html('');}},{element:errorMessage,top:[0,-35,"bothQuad"],opacity:[1,0]});},timeInView);}},{element:errorMessage,top:[-35,0,"bothQuad"],opacity:[0,1]});}};BaseKit.Logger={addListener:function(func,scope)
{listeners.push([func,scope]);},removeListener:function(func)
{listeners.remove(func);},log:function(message,type)
{type=type||"dump";logs.push([message,type]);var any=false;listeners.each(function(item)
{var func=item[0],scope=item[1];func.call(scope||window,message,type);});if(!any&&console&&typeof console.log=="function"&&type!='growl'&&fakeConsole==false)
{if(type=='phperror')
{var devalarm=document.getElementById('devalarm');devalarm.innerHTML='<embed src="/assets/devalarm.wav" autostart=true width=0 height=0 name="devalarm" id="devalarm" enablejavascript="true">';console.error(message);}
else
{console.log(message);}}
else if(BaseKit.Framework_Page.isMode(['normal']))
{alert(message);}},dump:function(value,append)
{if(value===null)
{value="null";}
var type=typeof value;if(type=="object")
{if(typeof value.length=="number"&&typeof value.splice=="function")
{type="array";}
else if(typeof value.nodeType!="undefined")
{type="element";}}
switch(type)
{case"undefined":BaseKit.Element.build({tagName:"span",className:"basekit-dump undefined",html:"undefined",append:append});break;case"boolean":value=value?"true":"false";case"number":case"string":BaseKit.Element.build({tagName:"span",className:"basekit-dump "+type,html:escapeHTML(value),append:append});break;case"array":case"object":case"function":case"element":BaseKit.Element.build({tagName:"span",className:"basekit-dump "+type,html:'<table class="basekit-dump-table '+type+'"><thead><tr><td class="basekit-dump-header '+type+'" colspan="2">'+type+'</td></tr></thead><tbody class="basekit-dump-body '+type+'"></tbody></table>',append:append},{construct:function()
{this.callParent.apply(this,arguments);var elements=this.$().find('*'),element=elements[0];element.click(this.toggle,this);if(type=="element")
{value=$(value);}
if(element!=null)
{element.disableSelect();element.disableEvent("dblclick");}},highlightOn:function()
{if(this.timeout)
{clearTimeout(this.timeout);this.timeout=null;}
value.mask({opacity:0.5,backgroundColor:"#08f",zIndex:999999});},highlightOff:function()
{if(this.timeout)
{clearTimeout(this.timeout);this.timeout=null;}
this.timeout=setTimeout(function()
{value.unmask();},250);},addText:function(value)
{var text=BaseKit.Element.build({tagName:"tr",append:this.$("basekit-dump-body"),children:[BaseKit.Element.build({tagName:"td",className:"basekit-dump-text",colSpan:2,children:[BaseKit.Element.build({tagName:"pre",html:escapeHTML(value)})]})]});},addItem:function(label,value)
{var item=BaseKit.Element.build({tagName:"tr",append:this.$("basekit-dump-body"),children:[BaseKit.Element.build({tagName:"td",className:"basekit-dump-label "+type,html:label+":"}),BaseKit.Element.build({tagName:"td",className:"basekit-dump-item "+type})]});BaseKit.Logger.dump(value,item.lastChild);},addEmpty:function()
{var text=BaseKit.Element.build({tagName:"tr",append:this.$("basekit-dump-body"),children:[BaseKit.Element.build({tagName:"td",className:"basekit-dump-empty "+type,colSpan:2,html:"empty"})]});},toggle:function()
{var body=this.$("basekit-dump-body");if(!body.children().length)
{switch(type)
{case"array":for(var i=0,j=value.length;i<j;++i)
{this.addItem(i,value[i]);}
break;case"object":var props=[];for(var property in value)
{props.push(property);}
props.sort();for(var i=0,j=props.length;i<j;++i)
{var property=props[i],item=value[property];if(type!="element"||typeof item!="function")
{this.addItem(property,value[property]);}}
break;case"element":var props=["className","id"];for(var i=0,j=props.length;i<j;++i)
{var property=props[i],item=value[property];if(type!="element"||typeof item!="function")
{this.addItem(property=="className"?"class":property,value[property]);}}
break;case"function":this.addText(value.toString());break;}
if(!body.children().length)
{this.addEmpty();}}
else
{if(!body.isVisible())
{body.show();}
else
{body.hide();}}}});break;}}};BaseKit.Logger.addListener(BaseKit.Error.handle,BaseKit.Error);BaseKit.Exception=BaseKit.Class.create({globals:{handle:function(exception)
{BaseKit.Framework_Page.alert('error:'+exception.message);}},methods:{construct:function(message,type)
{this.message=message||"Unknown exception";this.type=type||"default";},toString:function()
{return this.message;}}});BaseKit.CSS={add:function(url,id,callback,scope,force)
{var el=$('#'+id);if(id&&el.length&&el.attr('href')!=null&&el.attr('href')!='')
{var url1parts=el.attr('href').split('/');var url2parts=url.split('/');var url1Split=(url1parts[4]?url1parts[4]:url1parts[3]).split('?')[0].split('-');var url2Split=(url2parts[4]?url2parts[4]:url2parts[3]).split('?')[0].split('-');if(url1Split[0]!=url2Split[0]||force==true)
{var head=$('head');var link=$('<link></link>').attr({type:'text/css',rel:'stylesheet',href:url});if(id)
{var el=$('#'+id);if(el.length>0)
{link.insertBefore(el);el.remove();}
link.attr('id',id);}
else
{head.append(link);}
if(!callback||typeof callback!="function")
{return;}
var cssNode=link.get(0);if(BaseKit.Browser.ie)
{cssNode.onreadystatechange=function()
{if(cssNode.readyState=='complete'||cssNode.readyState=='loaded')
{if(typeof callback=='function')
{callback.call(scope||window);}}}}
else
{var interval=null,checks=250,checkLoaded=function()
{try
{if(typeof cssNode=="object"&&typeof cssNode.sheet=="object"&&typeof cssNode.sheet.cssRules=="object")
{clearInterval(interval);callback.call(scope||window);}}
catch(e)
{}
if(--checks<=0)
{clearInterval(interval);}};interval=setInterval(checkLoaded,100);}}}},remove:function(id,className)
{if(className==null||className==undefined)
{className='';}
var regex=new RegExp('#'+id+className+'.*?}'),testEl=document.getElementsByTagName('body')[0];$('head style').each(function(i)
{var style=$(this);if(BaseKit.Browser.chrome||BaseKit.Browser.safari)
{var innerHTML=style.html().replace(regex,'');style.html(innerHTML);}
else
{if(testEl.innerText!=undefined)
{var innerText=style.attr('innerText').replace(regex,'');style.attr('innerText',innerText);}
else if(testEl.innerContent!=undefined)
{var innerContent=style.attr('innerContent').replace(regex,'');style.attr('innerContent',innerContent);}
else
{var innerHTML=style.html().replace(regex,'');style.html(innerHTML);}}});},replace:function(oldID,newID)
{if(oldID==null||oldID==''||newID==null||newID=='')
{return;}
var head=document.documentElement.getElementsByTagName("head")[0],children=$(head).find('*');children.each(function()
{var child=$(this);if(child.attr('tagName')=='STYLE')
{if((document.getElementsByTagName("body")[0].innerText!=undefined))
{child.text(child.text().replace(oldID,newID));}
else if(document.getElementsByTagName("body")[0].innerContent!=undefined)
{child.attr('innerContent',child.attr('innerContent').replace(oldID,newID));}
else
{try
{var regex=new RegExp(oldID,'ig');child.html(child.html().replace(regex,newID));}
catch(ex)
{child.html(child.html().replace(oldID,newID));}}}});}};BaseKit.JS={add:function(url,id,end,className,element,callback)
{var script=$('<script></script>').attr({type:'text/javascript',src:url});if(id)
{var existing=$('#'+id);if(existing.length>0)
{existing.remove();}
script.attr('id',id);}
if(className)
{script.attr('class',className);}
if(element&&$(element).length>0)
{$(element).append(script);}
else if(end)
{$('body').append(script);}
else
{$('head').append(script);}
if(typeof callback=='function')
{script.load(callback);}
return script;},remove:function(regex)
{var head=document.documentElement.getElementsByTagName("head")[0],children=$(head).find('*');var regex=new RegExp(regex);for(var name in children)
{if(children[name].tagName=='SCRIPT'&&children[name].id.match(regex))
{children[name].parentNode.removeChild(children[name]);}}}};BaseKit.Translate={string:function()
{var args=arguments;if(args.length<1)
{return false;}
var string=args[0],newString=string;if(typeof string=='string')
{newString=string.replace(/%([0-9]+)/g,function(match,found,positionOfFirstMatch,originalString)
{return args[found]!=undefined?args[found]:'';});}
return newString;}};})();(function()
{BaseKit.Element=BaseKit.Class.create({methods:{construct:function()
{var el=$(this);el.data('groups',[]);el.data('plugins',{});},destroy:function()
{var el=$(this),plugins=el.data('plugins')||{};for(var type in plugins)
{if(plugins)
{plugins[type].destruct();}}},clone:function(prefix)
{var clone=this.cloneNode(true),descs=clone.all||clone.getElementsByTagName("*");clone.id="";for(var i=0,j=descs.length;i<j;++i)
{var desc=descs[i];desc.id=prefix?prefix+desc.id:"";}
return $(clone);}}});})();$.fn.extend({attach:function(name,func,scope,data)
{return this.each(function()
{$(this).bind(name,data||null,function(event)
{func.call(scope||window,event,data);});});},setup:function(config)
{var el=$(this);for(var property in config)
{if(config.hasOwnProperty(property))
{var value=config[property];switch(property)
{case'interact':for(var i=0,j=value.length;i<j;++i)
{el.addToGroup(value[i]);}
break;case'style':el.css(value);break;case'opacity':el.css('opacity',value);break;case'data':el.data('data',value);break;case'plugins':for(var name in value)
{if(value.hasOwnProperty(name))
{el.addPlugin(name,value[name]);}}
break;}}}},addToGroup:function()
{var el=$(this),groups=el.data('groups')||[];for(var i=0,j=arguments.length;i<j;++i)
{var group=arguments[i];if(!groups.contains(group))
{groups.push(group);}}
el.data('groups',groups);},removeFromGroup:function()
{var el=$(this),groups=el.data('groups')||[];for(var i=0,j=arguments.length;i<j;++i)
{var group=arguments[i];if(groups.contains(group))
{groups.remove(group);}}
el.data('groups',groups);},interactsWith:function(compare)
{var el=$(this),groups1=el.data('groups')||[],groups2=$(compare).data('groups')||[];for(var i=0,j=groups1.length;i<j;++i)
{if(groups2.contains(groups1[i]))
{return true;}}
return false;},addPlugin:function(type,config)
{var typeCap=type.capitalize();if(typeof BaseKit.Element.Plugin[typeCap]=='undefined')
{return;}
var el=$(this),plugins=el.data('plugins')||{};plugins[type.toLowerCase()]=new BaseKit.Element.Plugin[typeCap](el,config);el.data('plugins',plugins);},getPlugin:function(type)
{var plugins=$(this).data('plugins')||{};return plugins[type.toLowerCase()]||null;},removePlugin:function(type)
{var el=$(this),plugins=el.data('plugins')||{},remaining={};for(var check in plugins)
{var plugin=plugins[check];if(type==check)
{plugin.destruct();BaseKit.Util.removeKey(plugins,type);}
else
{remaining[type]=plugin;}}
el.data('plugins',remaining);},hasPlugin:function(type)
{var el=$(this),plugins=el.data('plugins')||{};for(var check in plugins)
{if(type==check)
{return true;}}
return false;},isAncestorOf:function(descendent,inclusive)
{if(descendent==null)
{return;}
descendent=typeof descendent.get=='function'?descendent.get(0):descendent;var removeJQObj=typeof this.get=='function'?this.get(0):this;var element=inclusive?removeJQObj:removeJQObj.parentNode;while(descendent&&descendent.nodeType==1)
{if(element==descendent)
{return true;}
descendent=descendent.parentNode;}
return false;},isDescendentOf:function(ancestor,inclusive)
{if(ancestor==null)
{return;}
ancestor=typeof ancestor.get=='function'?ancestor.get(0):ancestor;var removeJQObj=typeof this.get=='function'?this.get(0):this;var element=inclusive?removeJQObj:removeJQObj.parentNode;while(element&&element.nodeType==1)
{if(element==ancestor)
{return true;}
element=element.parentNode;}
return false;},isVisible:function()
{return!($(this).first().is(':hidden'));},getRegion:function(client,prevent)
{var el=$(this).first();if(!el.length||el.is(':hidden'))
{return null;}
var region=el.offset();region.right=region.left+(client?el.innerWidth():el.outerWidth());region.bottom=region.top+(client?el.innerHeight():el.outerHeight());if(!prevent)
{region=BaseKit.Element.Plugin.Scroll.clip(this,region)}
return region;},callback:function(func,args)
{var el=$(this);if(typeof func=='function')
{return func.apply(this,args);}
else if(typeof func=='object'&&typeof func[0]=='function')
{return func[0].apply(func[1]||this,args);}},getData:function()
{return $(this).data('data')||null;},getObject:function()
{return $(this).data('object')||null;},parseStyle:function(property,floating)
{var value=$(this).css(property);return(floating?parseFloat(value):parseInt(value,10))||0;},replaceClass:function(from,to)
{return this.removeClass(from).addClass(to);},absolutize:function(config)
{config=config||{};var source=$(this).first(),element=config.clone?source.clone(false):source,offset=source.offset();element.css($.extend(config.style||{},{position:'absolute',left:offset.left+'px',top:offset.top+'px',width:source.width()+'px',height:source.height()+'px'}));$('body').append(element);return element;},compare:function(selector)
{return $(this).get(0)==$(selector).get(0);},fixFirefoxFlash:function()
{var v=navigator.userAgent.match('Firefox\/([0-9]+)\.([0-9]+)');if(v===null||typeof v.length!='number'||!v.length)
{return false;}
if(v[1]==3&&v[2]>5)
{return this.each(function()
{$(this).parents().css('-moz-transform','none');});$(this).css('-moz-transform','none');}}});$.fn._show=$.fn.show;$.fn.show=function()
{this.each(function()
{$(this).removeClass('hidden');});return $.fn._show.apply(this,arguments);};jQuery.Event.prototype.stop=function()
{this.stopPropagation();this.preventDefault();};jQuery.expr[':'].regex=function(elem,index,match){var matchParams=match[3].split(','),validLabels=/^(data|css):/,attr={method:matchParams[0].match(validLabels)?matchParams[0].split(':')[0]:'attr',property:matchParams.shift().replace(validLabels,'')},regexFlags='ig',regex=new RegExp(matchParams.join('').replace(/^\s+|\s+$/g,''),regexFlags);return regex.test(jQuery(elem)[attr.method](attr.property));};(function()
{BaseKit.Element.Plugin=BaseKit.Class.create({methods:{construct:function(element,config)
{this.element=$(element);this.config=config||{};this.enabled=(config.enabled!==false);},destruct:function()
{},enable:function()
{this.enabled=true;},disable:function()
{this.enabled=false;}}});})();(function()
{var activeRequests=1;var permissions=[];var pendingRequests=[];var requestTimeout=null;$(document).ready(function()
{activeRequests=0;});function asyncRequest(config)
{pendingRequests.push(config);if(!requestTimeout||requestTimeout===null)
{requestTimeout=setTimeout(dispatchRequest,50);}}
function dispatchRequest()
{if(BaseKit.UndoManager&&typeof BaseKit.UndoManager.lock=='function')
{BaseKit.UndoManager.lock();}
if(activeRequests>0||jQuery.timers.length>0||BaseKit.Animation.isAnimating())
{requestTimeout=setTimeout(dispatchRequest,10);return;}
requestTimeout=null;if(pendingRequests.length>0)
{$.ajax({url:location.href,type:'POST',dataType:'json',cache:false,data:{post:JSON.stringify({key:BaseKit.Core.getKey(),data:BaseKit.Framework_Base.getPost(),dispatch:pendingRequests})},beforeSend:function()
{++activeRequests;},complete:function()
{--activeRequests;},success:function(data)
{BaseKit.Request.dispatch(data);}});}
pendingRequests=[];}
BaseKit.Request={isActive:function()
{return activeRequests>0?true:false;},callMethod:function(object,method,args)
{asyncRequest({id:object.id,method:method,args:args});},callMethodSync:function(object,method,args,callback)
{$.ajax({url:location.href,type:'POST',dataType:'json',cache:false,aysnc:false,data:{post:JSON.stringify({key:BaseKit.Core.getKey(),data:BaseKit.Framework_Base.getPost(),dispatch:[{id:object,method:method,args:args}]})},success:function(data)
{BaseKit.Request.dispatch(data);callback();}});},fireEvent:function(object,event,args)
{asyncRequest({id:object.id,event:event,args:args});},dispatch:function(data)
{if(data==undefined||data.length==0)
{return;}
if(data.length==1)
{if(data[0]=='redirect-login')
{document.location.reload(true);return;}}
var key=data[0],logs=data[1],push=data[2],destroys=data[3],repaints=data[4],creates=data[5],updates=data[6],methods=data[7],permissions_local=data[8],css=data[9];var dump={includes:push,destroys:destroys,repaints:repaints,creates:creates,updates:updates,calls:methods};BaseKit.Core.setKey(key);var head=document.documentElement.getElementsByTagName("head")[0];try
{for(i=0,j=push.length;i<j;++i)
{var file=push[i],url=file[0],type=file[1],purge=file[2],id=file[3],end=file[4],force=file[5],timeStamp=file[6];var seconds=new Date().getTime();switch(type)
{case"js":timeStamp?BaseKit.JS.add(url+'?t='+seconds,id,end):BaseKit.JS.add(url,id,end);if(purge&&BaseKit[purge])
{BaseKit[purge]=null;}
break;case"css":timeStamp?BaseKit.CSS.add(url+'?t='+seconds,id,null,null,force):BaseKit.CSS.add(url,id,null,null,force);break;}}}
catch(e)
{BaseKit.Exception.handle(e);}
var timeouts=0,available=true;var wait=function()
{var i,j;available=true;for(i=0,j=creates.length;i<j;++i)
{var data=creates[i],className=data[0];if(!BaseKit[className])
{available=false;if(++timeouts>50)
{throw new BaseKit.Exception("Timeout for class "+data[0]);}
setTimeout(function()
{wait();},10);return false;}}
if(!available)
{return;}
try
{var resetIDs={},resetIDObject=null;for(i=0,j=destroys.length;i<j;++i)
{var object=BaseKit.Framework_Base.getByID(destroys[i])
if(object&&typeof object=="object")
{if(typeof object._skipDestroyObject!=null)
{if(object._skipDestroyObject!==true)
{BaseKit.Framework_Base.destroy(object);}
else
{resetIDs[destroys[i]]=true;}}
else
{BaseKit.Framework_Base.destroy(object);}}}
for(var resetID in resetIDs)
{resetIDObject=BaseKit.Framework_Base.getByID(resetID);resetIDObject._skipDestroyObject=false;}
var attaches=[],selectedWidget=BaseKit.Editor.getSelectedWidget(),reselectWidget=null;for(i=0,j=repaints.length;i<j;++i)
{var update=repaints[i],id=update[0],html=update[1],name=update[2],insert=update[3],overwrite=update[4];var object=$bk(id);if(selectedWidget&&selectedWidget!==null&&selectedWidget.id==id)
{BaseKit.Editor.selectWidget(null,null,true);reselectWidget=object;}
if(object&&typeof object.attach=="function")
{attaches.push([object,true]);}
if(object&&typeof object.detach=="function")
{object.detach();object.dispatch("detach");}
if(insert&&!overwrite)
{var el=$('#'+name).first();if(!el.length)
{throw"Element with ID <em>"+name+"</em> does not exist";}
if(BaseKit.Browser.ie)
{var domEl=document.getElementById(name);var replace=document.createElement('DIV');replace.innerHTML=html;var child=replace.firstChild;while(child&&child.nodeType!=1)
{child=child.nextSibling;}
domEl.appendChild(child);}
else
{el.append(html);}}
else if(name&&!overwrite)
{var el=$('#'+id+' .'+name).first();var domEl=document.getElementById(id+' .'+name);if(el.length==1)
{if(BaseKit.Browser.ie)
{domEl.innerHTML=html;}
else
{el.html(html);}}
else
{throw"Failed to find an element with class <em>"+name+"</em>";}}
else
{var root=object&&typeof object.__externalID=='string'?(document.getElementById(object.__externalID)||document.getElementById(id)):document.getElementById(id),el=$(root);if(el.length==1)
{el.replaceWith(html);}
else
{throw"Failed to find an element with ID <em>"+id+"</em>";}}}
var page=$bk("page");if(page!==null&&typeof page=="object"&&typeof page.updateCSS=="function")
{page.updateCSS(css);}
for(i=0,j=creates.length;i<j;++i)
{var data=creates[i],className=data[0],state=data[1];attaches.push([new BaseKit[className](state),false]);}
for(var i=0,j=logs.length;i<j;++i)
{BaseKit.Logger.log.apply(BaseKit.Logger,logs[i]);}
for(i=0,j=updates.length;i<j;++i)
{var data=updates[i],object=BaseKit.Framework_Base.getByID(data[0]),state=data[1],properties=state[0],events=state[1];if(object&&properties&&typeof object.update=="function")
{object.update(properties);}
if(object&&events&&typeof object.updateEvents=="function")
{object.updateEvents(events);}}
for(var i=0,j=attaches.length;i<j;++i)
{var object=attaches[i][0],repaint=attaches[i][1];object.attach();if(repaint)
{object.dispatch("attachEl");object.dispatch("attach");}}
if(reselectWidget&&reselectWidget!==null)
{BaseKit.Editor.selectWidget(reselectWidget);}
for(var i=0,j=methods.length;i<j;++i)
{var data=methods[i],object=$bk(data[0]);if(object&&object[data[1]])
{object[data[1]].apply(object,data[2]);}
else
{BaseKit.Logger.log("Object <em>"+data[0]+"</em> does not exist.","error");}}
permissions=permissions_local;}
catch(e)
{}};wait();if(BaseKit.UndoManager&&typeof BaseKit.UndoManager.unlock=='function')
{BaseKit.UndoManager.unlock();}}};})();(function()
{var objects={};var eventStack=[];BaseKit.Framework_Base=BaseKit.Class.create({globals:{getEventObject:function()
{var event=eventStack.last();if(event&&event!==null&&typeof event=='object'&&typeof event.object=='object')
{return event.object;}
else
{return null;}},getEventName:function()
{var event=eventStack.last();if(event&&event!==null&&typeof event=='object'&&typeof event.name=='string')
{return event.name;}
else
{return null;}},purge:function(rootID)
{var length=rootID.length;for(var id in objects)
{if(id.substr(0,length)==rootID)
{if(!BaseKit.Browser.ie)
{delete objects[id];}
else
{var loopObjects={};for(var loopID in objects)
{if(loopID!=id)
{loopObjects[loopID]=objects[loopID];}}
objects=loopObjects;}}}},getAll:function()
{return objects;},exists:function(id)
{return(typeof objects[id]!="undefined");},getByID:function(id)
{return objects[id]||null;},destroy:function(object)
{object.destroy(true);if(!BaseKit.Browser.ie)
{delete objects[object.id];}
else
{var loopObjects={};for(var loopID in objects)
{if(loopID!=object.id)
{loopObjects[loopID]=objects[loopID];}}
objects=loopObjects;}},getPost:function()
{var post={};for(var id in objects)
{var object=objects[id],props=object.__properties;for(var name in props)
{var prev=props[name],value=object[name];if(value!==prev)
{if(!post[id])
{post[id]={};}
post[id][name]=(typeof value=="object"&&value!==null&&value.constructor==Array&&value.length==0)?'':value;object.__properties[name]=value;}}}
return post;},dispatch:function()
{var method=arguments[0],args=Array.prototype.slice.call(arguments,1);for(var id in objects)
{var object=objects[id];object[method].apply(object,args);}}},methods:{construct:function(state)
{if(state)
{var properties=state[0],events=state[1],methods=state[2],children=state[3],that=this;this.parent=null;var name=this.__name=properties.__name,parentID=properties.__parentID,collection=properties.__collection;var id=this.id=(parentID?parentID+"-":"")+(collection?collection+"__":"")+name;objects[id]=this;if(typeof objects[parentID]=="object"&&objects[parentID]!==null)
{var parent=this.parent=objects[parentID],afterID=properties.__afterID;parent.insertChild(collection,this,afterID);}
var ignore=["__parentID","__afterID"],notaprop=['__name'],props={};for(var property in properties)
{if(!ignore.contains(property))
{this[property]=properties[property];}
if(!ignore.contains(property)&&!notaprop.contains(property))
{props[property]=properties[property];}}
this.__properties=props;this.__events={};this.__handlers={};for(var event in events)
{this.__handlers[event]=[];}
this.updateEvents(events);methods.each(function(name)
{that[name]=function()
{BaseKit.Request.callMethod(that,name,Array.prototype.slice.call(arguments));};});this.__children=[];this.__collections=[];if(typeof children.length=="undefined")
{for(var collection in children)
{var config=children[collection];if(typeof this[collection]!="object")
{this[collection]={};}
for(var i=0,j=config.length;i<j;++i)
{var name=config[i],object=objects[id+"-"+collection+"__"+name];if(object)
{this[collection][name]=object;object.parent=this;}}
this.__collections.push(collection);}}}
this.__timeouts={};},updateEvents:function(events)
{for(var event in events)
{this.__events[event]=events[event];}},destruct:function()
{},attach:function()
{},detach:function()
{},getName:function()
{return this.__name;},dispatch:function()
{var children=this.__children,collections=this.__collections,method=arguments[0],args=Array.prototype.slice.call(arguments,1),calls=0;for(var i=0;i<children.length;++i)
{var child=this[children[i]];if(typeof child[method]=="function")
{child[method].apply(child,args);++calls;}}
for(var i=0;i<collections.length;++i)
{var collection=this[collections[i]];for(var name in collection)
{var child=collection[name];if(typeof child[method]=="function")
{child[method].apply(child,args);child.dispatch.apply(child,arguments);++calls;}}}
return calls;},handleEvent:function(event,obj,method)
{if(obj==null||obj==undefined)
return;if(typeof this.__events[event]!="undefined"&&(typeof obj=="function"||(typeof obj=="object"&&typeof obj[method]=="function")))
{this.__handlers[event].push([obj,method]);}},detachEvent:function(event,obj,method)
{if(typeof this.__handlers[event]!="undefined"&&typeof obj=="object"&&typeof obj[method]=="function")
{var handlers=[];for(var i=0,j=this.__handlers[event].length;i<j;++i)
{if((this.__handlers[event][i][0].__name!=obj.__name)&&(this.__handlers[event][i][1]!=method))
{handlers.push(this.__handlers[event][i]);}}
this.__handlers[event]=handlers;}},findAncestor:function(ancestor)
{var object=this.parent;while(object&&!object instanceof ancestor)
{object=object.parent;}
return object;},fireEvent:function(name)
{eventStack.push({object:this,name:name});var args=Array.prototype.slice.call(arguments,1);if(typeof this.__events[name]!="undefined"&&this.__events[name]===true)
{BaseKit.Request.fireEvent(this,name,args);}
var handlers=this.__handlers[name];if(handlers)
{handlers.each(function(struct)
{var obj=struct[0],method=struct[1];if(typeof obj=="function")
{obj.apply(obj,args);}
else
{obj[method].apply(obj,args);}});}
eventStack.pop();},setTimeout:function(method,period)
{this.clearTimeout(method);var that=this,args=Array.prototype.slice.call(arguments,2)||[];this.__timeouts[method]=setTimeout(function()
{that[method].apply(that,args);},period);},clearTimeout:function(method)
{if(this.__timeouts[method]>0)
{clearTimeout(this.__timeouts[method]);this.__timeouts[method]=0;}},getRoot:function()
{for(var root=this;root.parent;root=root.parent);return root;},getAscendentInstanceOf:function(type,inclusive,topmost)
{var object=inclusive?this:this.parent,current=null;while(object.parent!=null)
{if(object instanceof type)
{if(!topmost)
{return object;}
current=object;}
object=object.parent;}
return current;},bubble:function(method,args)
{args=(args!=undefined)?args:[];if(this.parent&&typeof this.parent[method]=="function")
{this.parent[method].apply(this.parent,args);}},destroy:function(root)
{if(root&&this.__collection)
{var parent=this.parent,collection=this.__collection,name=this.__name;if(typeof parent[collection]=="object"&&typeof parent[collection][name]=="object")
{if(!BaseKit.Browser.ie)
{delete parent[collection][name];}
else
{var loopCollection={};for(var loopName in parent[collection])
{if(loopName!=name)
{loopCollection[loopName]=parent[collection][loopName];}}
parent[collection]=loopCollection;}}}
this.dispatch("destroy");if(!BaseKit.Browser.ie)
{delete objects[this.id];}
else
{var loopObject={};for(var loopID in objects)
{if(loopID!=this.id)
{loopObject[loopID]=objects[loopID];}}
objects=loopObject;}},insertChild:function(collection,object,before)
{var name=object.__name;if(typeof(this[collection])=="object")
{var beforeObj=before?$bk(before):null,beforeName=(beforeObj!==null&&typeof beforeObj.__name=="string"?beforeObj.__name:"");if(beforeName)
{var input=this[collection],output={};for(var check in input)
{if(check==beforeName)
{output[name]=object;}
output[check]=input[check];}
this[collection]=output;}
else
{this[collection][name]=object;}}
else
{this[collection]={};this[collection][name]=object;}},addObject:function()
{objects[this.id]=this;this.dispatch("addObject");},generateID:function()
{var oldID=null,id=this.parent.id+"-"+this.__collection+"__"+this.__name;oldID=this.id;this.$().attr('id',id);this.id=id;if(!BaseKit.Browser.ie)
{delete objects[oldID];}
else
{var loopObject={};for(var loopID in objects)
{if(loopID!=oldID)
{loopObject[loopID]=objects[loopID];}}
objects=loopObject;}
objects[id]=this;this.dispatch("generateID");},changeParent:function(parent,name,collection,before)
{if(typeof parent=="object")
{name=name||this.__name;collection=collection||this.__collection;var oldID=this.id,oldParent=this.parent,oldName=this.__name,oldCollection=this.__collection;var id=parent.id+"-"+collection+"__"+(name?name:this.__name);this.$().attr('id',id);this.id=id;this.parent=parent;this.__name=name;this.__collection=collection;if(!BaseKit.Browser.ie)
{delete objects[oldID];}
else
{var loopObjects={};for(var loopID in objects)
{if(loopID!=oldID)
{loopObjects[loopID]=objects[loopID];}}
objects=loopObjects;}
objects[id]=this;if(typeof oldParent[oldCollection]=="object"&&typeof oldParent[oldCollection][oldName]=="object")
{if(!BaseKit.Browser.ie)
{delete oldParent[oldCollection][oldName];}
else
{var loopCollection={};for(var loopName in oldParent[oldCollection])
{if(loopName!=oldName)
{loopCollection[loopName]=oldParent[oldCollection][loopName];}}
oldParent[oldCollection]=loopCollection;}}
this.parent.insertChild(collection,this,before);this.dispatch("generateID");}},getObjectAfter:function()
{var check=this.__name,collection=this.__collection,parent=this.parent;if(typeof parent[collection]!=="undefined")
{var objects=parent[collection],next=false;for(var name in objects)
{if(next===true)
{return objects[name];}
if(name==check)
{next=true;}}}
return null;},generateRandomCharacter:function()
{var randomCharacters='';var possible="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";for(var i=0;i<5;i++)
{randomCharacters+=possible.charAt(Math.floor(Math.random()*possible.length));}
return randomCharacters;}}});})();var $bk=BaseKit.Framework_Base.getByID;if($.ui)
{var __ui_slider_init=$.ui.slider.prototype._init;var __ui_slider_change=$.ui.slider.prototype._change;var __ui_slider_mouseDrag=$.ui.slider.prototype._mouseDrag;var __ui_slider_mouseStart=$.ui.slider.prototype._mouseStart;var __ui_slider_mouseStop=$.ui.slider.prototype._mouseStop;$.ui.slider.prototype._init=function()
{var self=this;__ui_slider_init.apply(this,arguments);if(this.options.title)
{this.title=$('<div>').attr('id',this.element.attr('id')+'value').addClass('ui-slider-value').appendTo(this.element).html(this.value()).hide();}};$.ui.slider.prototype._mouseStart=function()
{var self=this;__ui_slider_mouseStart.apply(this,arguments);if(this.title)
{this.title.show();}};$.ui.slider.prototype._mouseStop=function()
{var self=this;__ui_slider_mouseStop.apply(this,arguments);if(this.title)
{this.title.hide();}};$.ui.slider.prototype._mouseDrag=function()
{var self=this;__ui_slider_mouseDrag.apply(this,arguments);if(this.title)
{var pos=this.handle.position();this.title.css('left',pos.left+'px');}};$.ui.slider.prototype._change=function()
{var self=this;__ui_slider_change.apply(this,arguments);if(this.options.title)
{this.title.html(this.value());}};$.extend($.ui.slider.prototype,{doSomeFunkyMethod:function()
{}});}
(function()
{var debug=false;BaseKit.Framework_Control=BaseKit.Class.create({superclass:BaseKit.Framework_Base,methods:{construct:function()
{this.callParent.apply(this,arguments);this.__cacheJQObject={};this.__cacheJQObjects={};this.__rootElement=null;this.__modes={};this.__mode=null;this.__prevMode=null;},clearJQCache:function()
{this.__cacheJQObject={};this.__cacheJQObjects={};},destruct:function()
{},$:function(name)
{var search=name;if(search==null)
{search='rootBlankElement';}
var root=$(document.getElementById(this.__externalID)||document.getElementById(this.id));if(typeof this.__cacheJQObject[search]!='undefined'&&this.__cacheJQObject[search].length)
{return this.__cacheJQObject[search];}
else
{var jqObj=!name?root.first():root.find('.'+this['class']+'-'+name).first();if(jqObj.length)
{this.__cacheJQObject[search]=jqObj;}
return jqObj;}},$$:function(name)
{var root=$(document.getElementById(this.__externalID)||document.getElementById(this.id));return!name?root:root.find('.'+this['class']+'-'+name);},update:function(properties,events)
{for(var name in properties)
{this[name]=this.__properties[name]=properties[name];}},makeClass:function(name)
{return this["class"]+"-"+name;},exists:function(name)
{var el=this.$(name);return el.length>0;},makeID:function(name)
{if(!BaseKit.Framework_Page.isMode(['normal']))
{if(name!==undefined&&name.length>0)
{return this.id+'BK'+name.toLowerCase();}
else
{return this.id;}}
else
{if(name!==undefined&&name.length>0)
{return this.__externalID+'BK'+name.toLowerCase();}
else
{return this.__externalID;}}},onSelect:function()
{},onUnselect:function()
{},save:function()
{},getToolBarPanel:function()
{var toolbar=this.getRoot().primary["editor"].panels["toolbar"];return toolbar;},getCSSEditorPanel:function()
{var panel=this.getRoot().primary.editor.footers['panel1'].controls['css'];return(panel!=undefined)?panel:null;},getHTMLEditorPanel:function()
{var panel=this.getRoot().primary.editor.footers['panel1'].controls['html'];return(panel!=undefined)?panel:null;},getDatabaseEditorPanel:function()
{var panel=this.getRoot().primary.editor.footers['panel1'].controls['database'];return(panel!=undefined)?panel:null;},getSettingsPanel:function()
{if(this._hasSettings&&!BaseKit.Framework_Page.isMode(['normal']))
{var panels=this.getRoot().primary.editor.footers['panel1'].controls['settings'].controls;for(var name in panels)
{var panel=panels[name];if(panels.hasOwnProperty(name)&&panel.controlID==this.id)
{return panel;}}}
return null;},destroySettingsPanels:function()
{this.dispatch("destroySettingsPanels");var settings=this.getSettingsPanel();if(settings&&settings.controlID==this.id)
{if(settings.$()!==null)
{settings.$().remove();}
settings.destroy(true);}},attach:function()
{this.clearJQCache();},detach:function()
{},destroy:function()
{this.callParent.apply(this,arguments);this.detach();},addMode:function(mode,enterFunc,exitFunc,scope)
{this.__modes[mode]={onEnter:enterFunc||null,onExit:exitFunc||null,scope:scope||this};},setMode:function(mode)
{if(mode==this.__mode)
{return;}
if(typeof this.__modes[mode]!="undefined")
{var currentMode=this.__modes[this.__mode];if(currentMode&&typeof currentMode.onExit=="function")
{currentMode.onExit.apply(currentMode.scope||window,[mode]);}
this.__prevMode=this.__mode;this.__mode=mode;var newMode=this.__modes[mode];if(newMode&&typeof newMode.onEnter=="function")
{newMode.onEnter.apply(newMode.scope||window,[this.__prevMode]);}}},getMode:function()
{return this.__mode;},getPreviousMode:function()
{return this.__prevMode;},show:function()
{this.$().show();},hide:function()
{this.$().hide();},toggle:function()
{this.$().toggle();},t:function()
{var key=arguments[0];if(this.exportedStrings==undefined)
{return;}
if(typeof key!='string'||this.exportedStrings[key]==undefined)
{return false;}
var string=this.exportedStrings[key];if(typeof string!='string')
{return false;}
var args=[];for(var i=0;i<arguments.length;i++)
{if(i==0)
{args[i]=string;}
else
{args[i]=arguments[(i)];}}
return BaseKit.Translate.string.apply(this,args);}}});})();(function()
{var calendar=null;var gCart=false;var __page=null;var __mode='normal';var globalStyleHTML=$('#css-global-styles').html();var localStyleHTML=$('#css-local-styles').html();var themeStyleHTML=$('#theme-styles').html();var gMapJSCalledFlag=false;var gMapJSReadyFlag=false;var ui={type:null,className:null};var keyMaps=[];var clicks=[];var tooltip=null,tooltipMessage=null,tooltipPoint=null,tooltipCheckBoxContainer=null,tooltipCheckBox=null,tooltipDismissText=null;var tooltipVisible=false;var tooltipTimeout=null;var shownTooltips=[];BaseKit.Framework_Page=BaseKit.Class.create({superclass:BaseKit.Framework_Control,globals:{showHelp:function(section,helpPage)
{if(BaseKit.Framework_Page.isMode(['edit','preview','themeselector','admin']))
{var help=__page.showHelp('content',helpPage);}
return help;},closeHelp:function()
{__page.closeHelp();},showTooltip:function(args)
{var page=BaseKit.Framework_Page.get();var name=args['name']||null;var message=args['message']||'';var align=args['align']||'tl';var context=args['element']||null;var timeout=args['timeout']||4000;var dismissText=args['dismiss']||page.t("dismiss-message");var dismissCallback=args['callback']||null;var scope=args['scope']||window;var group=args['group']||null;var showTip=args['tip']||true;var onFinishCallback=null;var offsetX=args.offsetX||0,offsetY=args.offsetY||0;if(args['onFinish'])
{onFinishCallback=args['onFinish'];}
if(name!==null)
{if(shownTooltips.contains(name)){return;}
shownTooltips.push(name);}
if(__mode=='preview'||BaseKit.Framework_Page.getLightbox()!==false||context==undefined||typeof context.getRegion!=='function')
{return;}
if(group!==null&&page.toolTips[group]!=null&&page.toolTips[group]==false)
{return;}
if(tooltip===null)
{tooltip=$('<div></div>').addClass('bk-tooltip hidden').css('opacity',0.9);$(document.body).append(tooltip);tooltipMessage=$('<span></span>');tooltipPoint=$('<div></div>').addClass('bk-tooltip-point bk-tl');tooltipCheckBoxContainer=$('<div></div>').addClass('bk-tooltip-dismiss-container').hide();tooltipCheckBox=$('<input></input>').attr('type','checkbox').addClass('bk-tooltip-dismiss');tooltipDismissText=$('<div></div>').addClass('bk-tooltip-dismiss-text').html(dismissText||'');tooltipCheckBoxContainer.append(tooltipCheckBox,tooltipDismissText);tooltip.append(tooltipMessage,tooltipPoint,tooltipCheckBoxContainer);tooltipMessage.mousedown(function(event)
{BaseKit.Framework_Page.hideTooltip();event.stopPropagation();event.preventDefault();});}
tooltipMessage.html(message);tooltip.css('opacity',0);tooltip.show();tooltipCheckBox.unbind();tooltipCheckBoxContainer.hide();if(dismissCallback)
{tooltipCheckBox.attr('checked',false);tooltipDismissText.html(dismissText);tooltipCheckBoxContainer.show();tooltipCheckBox.click(function(event)
{dismissCallback.call(scope||window,group);});}
var contextRegion=context.getRegion(false,true),tooltipRegion=tooltip.getRegion(false,true);if(contextRegion!==null&&tooltipRegion!==null)
{align=align||'tl';tooltipPoint.removeClass('bk-tl');tooltipPoint.removeClass('bk-tr');tooltipPoint.removeClass('bk-bl');tooltipPoint.removeClass('bk-br');tooltipPoint.removeClass('bk-lt');tooltipPoint.removeClass('bk-rt');tooltipPoint.removeClass('bk-lb');tooltipPoint.removeClass('bk-rb');tooltipPoint.addClass('bk-tooltip-point bk-'+align);var left=((contextRegion.left+contextRegion.right)>>1),top=(contextRegion.top+contextRegion.bottom)>>1,dx=0,dy=0,t1=0,t2=0,l1=0,l2=0,movex=0,movey=0;switch(align)
{case'tl':dx=-29;dy=12;movex=0;movey=100;break;case'tr':dx=-(tooltipRegion.right-tooltipRegion.left-28);dy=12;movex=0;movey=100;break;case'bl':dx=-29;dy=-(tooltipRegion.bottom-tooltipRegion.top+12);movex=0;movey=-100;break;case'br':dx=-(tooltipRegion.right-tooltipRegion.left-50);dy=-(tooltipRegion.bottom-tooltipRegion.top+12);movex=0;movey=-100;break;case'lt':dx=-(tooltipRegion.right-tooltipRegion.left+12);dy=-29;movex=-100;movey=0;break;case'rt':dx=12;dy=-29;movex=100;movey=0;break;case'lb':dx=-(tooltipRegion.right-tooltipRegion.left+12);dy=-(tooltipRegion.bottom-tooltipRegion.top-28);movex=-100;movey=0;break;case'rb':dx=12;dy=-(tooltipRegion.bottom-tooltipRegion.top-28);movex=100;movey=0;break;}
tooltip.css({left:(left+dx+movex+offsetX)+'px',top:(top+dy+movey+offsetY)+'px'});BaseKit.Animation.addQueue({duration:0.5,onStart:function()
{tooltip.show();tooltipVisible=true;},onFinish:function()
{tooltipTimeout=setTimeout(function()
{BaseKit.Framework_Page.hideTooltip(false,onFinishCallback||null,scope);},timeout||3000);}},{element:tooltip,left:[left+dx+movex+offsetX,left+dx+offsetX,'outCubic'],top:[top+dy+movey+offsetY,top+dy+offsetY,'outCubic'],opacity:[0,0.9,'bothCubic']});}
if(args['tip']!=undefined&&args['tip']==false)
{tooltipPoint.hide();}},hideTooltip:function(instant,callback,scope)
{if(tooltipTimeout!==null)
{clearTimeout(tooltipTimeout);}
tooltipTimeout=null;if(tooltip!==null&&tooltip.length>0)
{if(instant)
{tooltip.hide();tooltipVisible=false;}
else
{BaseKit.Animation.addQueue({duration:0.5,onFinish:function()
{tooltip.hide();tooltipVisible=false;if(callback&&typeof callback=='function')
{callback.call(scope||window);}}},{element:tooltip,opacity:[0.9,0,'bothCubic']});}}},setToolTipOptions:function(type)
{if(type!==null)
{var options={},page=BaseKit.Framework_Page.get(),isFound=false;for(var tip in page.toolTips)
{if(page.toolTips.hasOwnProperty(tip))
{if(tip==type)
{options[tip]=false;isFound=true;}
else
{options[tip]=(page.toolTips[tip])!==undefined?page.toolTips[tip]:false;}}}
if(!isFound)
{options[type]=false;}
page.toolTips=options;page.syncToolTipOptions();}},gMapJSCalled:function(set)
{if(set)
{gMapJSCalledFlag=true;}
return gMapJSCalledFlag;},gMapJSReady:function(set)
{if(set)
{gMapJSReadyFlag=true;}
return gMapJSReadyFlag;},getHeader:function()
{try
{return __page.primary.editor.basekit.header;}
catch(e){}
try
{return __page.basekit.header;}
catch(e){}
return null;},get:function()
{return __page;},getMode:function()
{return __mode;},GetHasGoogleShoppingCartWidget:function()
{return gCart;},SetHasGoogleShoppingCartWidget:function(hasCart)
{gCart=hasCart;},getCalendar:function()
{return calendar;},getUIVar:function()
{return ui;},setUIType:function(type)
{ui.type=type;},setUIClassName:function(className)
{ui.className=className;},clearUIVar:function()
{ui={type:null,className:null};},isMode:function(modes)
{var flag=false;modes.each(function(mode)
{if(mode==__mode)
{flag=true;}});return flag;},setMode:function(mode)
{__mode=mode;},showLightbox:function(className,parameters)
{var parameters=parameters||{},lightbox=null;if(!BaseKit.Framework_Page.isMode(['normal']))
{lightbox=__page.showLightbox(className,parameters);}
return lightbox;},resizeLightbox:function(parameters)
{},loadUI:function(type,className,parameters)
{return __page.loadUI(type,className,parameters);},hideUI:function(onFinish)
{__page.hideUI(onFinish);},alert:function(msg,okcallback,cancelcallback,title,okButtonText,okButtonTitle,cancelButtonText,cancelButtonTitle)
{if(!BaseKit.Framework_Page.isMode(['normal']))
{BaseKit.Framework_Page.hideTooltip(true);BaseKit.Error.killGrowl();var lightbox=__page.showLightbox('messagebox',{type:'alert',message:msg,okcallback:okcallback,cancelcallback:cancelcallback,title:title,okButtonText:okButtonText,okButtonTitle:okButtonTitle,cancelButtonText:cancelButtonText,cancelButtonTitle:cancelButtonTitle});}
return lightbox;},confirm:function(msg,okcallback,cancelcallback,title,okButtonText,okButtonTitle,cancelButtonText,cancelButtonTitle)
{if(!BaseKit.Framework_Page.isMode(['normal']))
{BaseKit.Framework_Page.hideTooltip(true);BaseKit.Error.killGrowl();var lightbox=__page.showLightbox('messagebox',{type:'confirm',message:msg,okcallback:okcallback,cancelcallback:cancelcallback,title:title,okButtonText:okButtonText,okButtonTitle:okButtonTitle,cancelButtonText:cancelButtonText,cancelButtonTitle:cancelButtonTitle});}
return lightbox;},login:function(msg,okcallback,cancelcallback,title,okButtonText,okButtonTitle,cancelButtonText,cancelButtonTitle)
{if(!BaseKit.Framework_Page.isMode(['normal']))
{BaseKit.Framework_Page.hideTooltip(true);BaseKit.Error.killGrowl();var lightbox=__page.showLightbox('messagebox',{type:'login',message:msg,okcallback:okcallback,cancelcallback:cancelcallback,title:title,okButtonText:okButtonText,okButtonTitle:okButtonTitle,cancelButtonText:cancelButtonText,cancelButtonTitle:cancelButtonTitle});}
return lightbox;},showIndicator:function(message)
{if(!BaseKit.Framework_Page.isMode(['normal']))
{BaseKit.Framework_Page.hideTooltip(true);__page.showIndicator(message||null);}},hideIndicator:function()
{if(!BaseKit.Framework_Page.isMode(['normal'])&&__page!=null&&typeof __page.hideIndicator=='function')
{__page.hideIndicator();}},getLightbox:function()
{return __page.getLightbox();},centerLightbox:function()
{__page.centerLightbox();},addKeyMap:function(keyCombination,fn,scope)
{var keys=keyCombination.split("+");keyMaps.push({keys:keys,fn:fn,scope:scope});},isDoing:function(operation)
{if(BaseKit.Framework_Page.isMode(['edit','preview','themeselector','admin']))
{return $(document.body).hasClass("doing-"+operation);}},startDoing:function(operation)
{if(BaseKit.Framework_Page.isMode(['edit','preview','themeselector','admin']))
{$(document.body).addClass("doing-"+operation);}},finishDoing:function(operation)
{if(BaseKit.Framework_Page.isMode(['edit','preview','themeselector','admin']))
{$(document.body).removeClass("doing-"+operation);}},attachBodyClick:function(fn,scope)
{clicks.push({fn:fn,scope:scope});},detachBodyClick:function(fn)
{var remaining=[];for(var i=0,j=clicks.length;i<j;++i)
{var click=clicks[i];if(click.fn!=fn)
{remaining.push(click);}}
clicks=remaining;BaseKit.Framework_Page.hideTooltip(true);},fireBodyClicks:function(event,forced)
{for(var i=0,j=clicks.length;i<j;++i)
{if(clicks[i]!==undefined)
{var click=clicks[i];click.fn.call(click.scope||window,event||null,!!forced);}}}},methods:{construct:function()
{this.callParent.apply(this,arguments);var that=__page=this;if(BaseKit.Framework_Page.isMode(['themeselector','preview']))
{BaseKit.Core.strictAnchors();}},purge:function(rootID)
{BaseKit.Framework_Base.purge(rootID);},setCalendar:function()
{calendar=this.calendars['calendar'];},showThemeSelector:function()
{BaseKit.Editor_ThemeSelector.show();this.hideEditor(181);BaseKit.Framework_Page.setMode('themeselector');var objects=BaseKit.Framework_Base.getAll();for(var id in objects)
{var temp=objects[id];if(typeof temp.onEnterPreviewMode==='function')
{temp.onEnterPreviewMode();}
if(typeof temp.onEnterThemeSelectorMode==='function')
{temp.onEnterThemeSelectorMode();}}
this.themeSelectorMode();},hideThemeSelector:function()
{var that=this;BaseKit.Editor_ThemeSelector.hide();this.showEditor();var objects=BaseKit.Framework_Base.getAll();for(var id in objects)
{var temp=objects[id];if(typeof temp.onExitPreviewMode==='function')
{temp.onExitPreviewMode();}
if(typeof temp.onExitThemeSelectorMode==='function')
{temp.onExitThemeSelectorMode();}}
this.editMode();},preview:function()
{this.hideEditor();var sidebar=BaseKit.Editor.getSidebar();BaseKit.Editor.hideRuler();BaseKit.Editor.hideFooter(true);if(sidebar.showing);{$('.editor-sidebar-probar').css('left','-'+$('.editor-sidebar-probar').css('width'));}
BaseKit.Framework_Page.setMode('preview');var objects=BaseKit.Framework_Base.getAll();for(var id in objects)
{var temp=objects[id];if(typeof temp.onEnterPreviewMode==='function')
{temp.onEnterPreviewMode();}}
BaseKit.Core.strictAnchors();this.previewMode();},unpreview:function()
{var sidebar=BaseKit.Editor.getSidebar();this.showEditor();BaseKit.Framework_Page.setMode('edit');if($('.editor-toolbar-edit').hasClass('bk-mode-active'))
{sidebar.showSidebarFromPreview();}
var objects=BaseKit.Framework_Base.getAll();for(var id in objects)
{var temp=objects[id];if(typeof temp.onExitPreviewMode==='function')
{temp.onExitPreviewMode();}}
this.editMode();},errorMessage:function(message)
{if(message&&message!=null)
{BaseKit.Logger.log(message,'growl');}},update:function(state)
{this.callParent(state);document.title=this.title;},pushCSS:function(className,styles)
{$('.'+className).each(function()
{$(this).css(styles);});},updateCSS:function(css)
{var head=$('head');var appendEl=true;var style=null;var globalStyle=$('#css-global-styles');var localStyle=$('#css-local-styles');var themeStyle=$('#theme-styles');for(var key in css)
{if(css.hasOwnProperty(key))
{if(key=='0')
{style=$('<style></style>').attr('type','text/css');}
else
{var el=$('#'+key);if(el.length>0)
{if(key!='css-local-styles'&&key!='css-global-styles'&&key!='theme-styles')
{el.remove();}}
style=$('<style></style>').attr({id:key,type:"text/css"});}
if(key=='css-local-styles')
{if($('#css-local-styles').length>0)
{appendEl=false;this.replaceStyles(css[key],localStyleHTML,localStyle,'css-local-styles');}
else
{if(style.get(0).styleSheet)
{style.get(0).styleSheet.cssText=css[key];}
else
{style.html(css[key]);}}}
else if(key=='css-global-styles')
{if($('#css-global-styles').length>0)
{appendEl=false;this.replaceStyles(css[key],globalStyleHTML,globalStyle,'css-global-styles');}
else
{if(style.get(0).styleSheet)
{style.get(0).styleSheet.cssText=css[key];}
else
{style.html(css[key]);}}}
else if(key=='theme-styles')
{if($('#theme-styles').length>0)
{appendEl=false;this.replaceStyles(css[key],themeStyleHTML,themeStyle,'theme-styles');}
else
{if(style.get(0).styleSheet)
{style.get(0).styleSheet.cssText=css[key];}
else
{style.html(css[key]);}}}
else
{if(style.get(0).styleSheet)
{style.get(0).styleSheet.cssText=css[key];}
else
{style.html(css[key]);}}
if(appendEl==true)
{head.append(style);}}};},replaceStyles:function(css,styleHTML,styleTag,saveToVarID)
{if(css!=undefined)
{if(styleHTML==null)
{return;}
var id=css.trim();var id=id.replace(/{.*}/,'').replace('.','\\.');var replaceWith=css,newCSS=styleHTML;if(newCSS==null)
{return;}
var regexFind=new RegExp('/^'+id+'\\s*\\{.*?\\}/','gi');var matchx=newCSS.match(regexFind);if(matchx!=null&&matchx.length!=0)
{newCSS=newCSS.split(matchx[0]).join('');}
var regexFind=new RegExp('\\}\\s*'+id+'\\s*\\{.*?\\}','gi');var matchx=newCSS.match(regexFind);if(matchx!=null&&matchx.length!=0)
{if(matchx[0].substring(0,1)=='}')
{matchx[0]=matchx[0].substring(1);}
newCSS=newCSS.split(matchx[0]).join('');}
newCSS=newCSS+replaceWith;if(BaseKit.Browser.ie==true&&BaseKit.Browser.isLessThanVersion(9))
{if(styleTag.get(0).styleSheet)
{styleTag.get(0).styleSheet.cssText=newCSS;}
else
{styleTag.get(0).appendChild(document.createTextNode(newCSS));}}
else
{styleTag.html(newCSS);}
if(saveToVarID=='css-global-styles')
{globalStyleHTML=newCSS;}
else if(saveToVarID=='css-local-styles')
{localStyleHTML=newCSS;}
else if(saveToVarID=='theme-styles')
{themeStyleHTML=newCSS;}}},updateGlobalThemeStyleVar:function(html)
{if(html!==undefined&html.length>0)
{themeStyleHTML=html;}},getPageID:function()
{return this.pageID;},gotoPage:function(url,gaLink,force)
{var goToURL='',seconds=new Date().getTime();;if(BaseKit.Browser.ie==true)
{var questionMarkTest=new RegExp(/\?/);if(questionMarkTest.test(url))
{goToURL=url+'&t='+seconds;}
else
{goToURL=url+'?t='+seconds;}}
else
{goToURL=url;}
if(gaLink&&typeof _gat=="object"&&typeof _gat._getTrackerByName=="function")
{var pageTracker=_gat._getTrackerByName();goToURL=pageTracker._getLinkerUrl(goToURL);}
if(parent.frames.length>0&&force)
{top.location.replace(goToURL);}
else
{window.location.href=goToURL;}},updatePageDetails:function(title)
{document.title=title;},toggleModeClass:function()
{var body=$(document.body);if(BaseKit.Framework_Page.isMode(['edit']))
{body.removeClass('preview');body.addClass('edit');}},reloadPage:function()
{window.location.href=window.location.href;},loadUI:function(type,className,parameters)
{if(!BaseKit.Framework_Page.isMode(['normal']))
{var collection=type+'s',scope=this;switch(type)
{case'lightbox':collection='lightboxes';case'adminpanel':scope=this;break;case'footer':scope=BaseKit.Editor.get();break;}
if(!scope[collection]||!scope[collection][className])
{this.createUI(type,className,true,parameters||{});return true;}
return false;}},hideUI:function(onFinish)
{var ui=BaseKit.Framework_Page.getUIVar();if(!BaseKit.Framework_Page.isMode(['normal']))
{switch(ui.type)
{case'help':case'lightbox':$('#page-lightbox').fadeOut('fast');$('#page-overlay').fadeOut('fast',function()
{$('#page-indicator').hide();});if(typeof onFinish=='function')
{onFinish();}
break;default:if(typeof onFinish=='function')
{onFinish();}
break;}
BaseKit.Framework_Page.clearUIVar();}},showLightbox:function(className,parameters)
{if(BaseKit.Editor.IsFooterLocked()&&className!==undefined)
{if(jQuery.inArray(className,['messagebox','addstyle','linkeditor'])==-1)
{var tab=BaseKit.Framework_Control_TabPanel.getCurrentTab();if(typeof tab.hasChanges=='function'&&tab.hasChanges())
{if(typeof tab.onCleanUp=='function')
{tab.onCleanUp();}
return;}}}
var popups=$('#popups');if(popups.length>0)
{popups.hide();}
BaseKit.Framework_Page.hideTooltip(true);BaseKit.Error.killGrowl();this.hideIndicator();var parameters=parameters||{},currentLightBox=null;if(!ui||ui.type!="lightbox")
{BaseKit.Framework_Page.showIndicator(this.t("please-wait"));}
if(!BaseKit.Framework_Page.isMode(['normal']))
{if(this.loadUI("lightbox",className,parameters))
{return;}
if(!ui||ui.type!="lightbox")
{BaseKit.Framework_Page.hideIndicator('PLEASE WAIT');var overlay=(!$('#page-overlay').length)?$('#dashboard-overlay'):$('#page-overlay'),lightbox=(!$('#page-lightbox').length)?$('#dashboard-lightbox'):$('#page-lightbox');overlay.css("opacity",0.7);overlay.fadeIn('fast');lightbox.fadeIn('fast');BaseKit.Framework_Page.setUIType('lightbox');}
var lightboxPages=this.lightboxes;var lightboxEl=(!$('#page-lightbox').length)?$('#dashboard-lightbox'):$('#page-lightbox').children(1).children(1);for(var name in lightboxPages)
{if(lightboxPages.hasOwnProperty(name))
{var lightbox=lightboxPages[name];if(name==className)
{if(lightbox.closeable==true)
{if(lightbox.$('close').length)
{lightbox.$('close').show();}}
else
{if(lightbox.$('close').length)
{lightbox.$('close').hide();}}
lightboxEl.css({width:'auto',height:'auto',top:'auto',bottom:'auto',left:'auto',right:'auto'});if(typeof lightbox.boxsize=='object')
{if(lightbox.boxsize['width'])
{lightboxEl.css('width',lightbox.boxsize['width']);}
if(lightbox.boxsize['height'])
{lightboxEl.css('height',lightbox.boxsize['height']);}
if(lightbox.boxsize['top'])
{lightboxEl.css('top',lightbox.boxsize['top']);}
if(lightbox.boxsize['bottom'])
{lightboxEl.css('bottom',lightbox.boxsize['bottom']);}
if(lightbox.boxsize['left'])
{lightboxEl.css('left',lightbox.boxsize['left']);}
if(lightbox.boxsize['right'])
{lightboxEl.css('right',lightbox.boxsize['right']);}
if(lightbox.boxsize['fullsize'])
{var margin=30;var primaryRegion=this.$().getRegion()
lightboxEl.css('left',margin+'px');lightboxEl.css('right',margin+'px');lightboxEl.css('top',margin+'px');lightboxEl.css('bottom',margin+'px');lightboxEl.css('height',(primaryRegion.bottom-primaryRegion.top)+'px');}}
else
{lightboxEl.css('width','640px');lightboxEl.css('height','auto');}
lightbox.updateParameters(parameters);lightbox.$().show();if(typeof lightbox.onLightboxOpen=='function')
{lightbox.onLightboxOpen();}
this.centerLightbox();lightbox.visible=true;currentLightBox=lightbox;if(typeof lightbox.update=="function")
{lightbox.update();}}
else
{if(typeof lightbox.hideAjaxIndicator=="function")
{lightbox.hideAjaxIndicator();}
lightbox.$().hide();lightbox.visible=false;}}}}
return currentLightBox;},centerLightbox:function()
{var lightbox=this.getLightbox();if(lightbox==false)
{return;}
if(typeof lightbox.boxsize=='object'&&lightbox.boxsize['fullsize'])
{return;}
var el=$('#page-lightbox').length?$('#page-lightbox'):$('#dashboard-lightbox');var overlay=$('#page-overlay').length?$('#page-overlay'):$('#dashboard-overlay');var primaryRegion=overlay.getRegion(),primaryHeight=parseInt(overlay.height()),primaryCenter=(primaryRegion.bottom-primaryRegion.top)/2,lightboxRegion=lightbox.$().getRegion(),lightboxCenter=lightboxRegion.bottom-lightboxRegion.top;el.css("left",Math.max((primaryRegion.right-primaryRegion.left-lightboxRegion.right+lightboxRegion.left)/2,20)+'px');el.css("top",Math.max((((primaryHeight-primaryRegion.top)/2)-((lightboxRegion.bottom-lightboxRegion.top)/2)),20)+'px');if(lightbox.boxsize!=undefined&&lightbox.boxsize['top']!=undefined)
{el.css("top",lightbox.boxsize['top']);}},showIndicator:function(message)
{if(!BaseKit.Framework_Page.isMode(['normal']))
{var indicator=$('#page-indicator');if(message&&message!='')
{$('#page-indicator-message').html(message);}
indicator.css({"bottom":'0px',"top":'0px'});indicator.show();}},hideIndicator:function(message)
{if(!BaseKit.Framework_Page.isMode(['normal']))
{var indicator=$('#page-indicator');if(indicator.isVisible())
{indicator.hide();}}},getLightbox:function()
{var lightboxPages=this.lightboxes;for(var name in lightboxPages)
{var lightbox=lightboxPages[name];if(lightbox.$().length&&lightbox.$().isVisible())
{return lightbox;}}
return false;},switchView:function(view)
{BaseKit.Framework_Page.hideTooltip(true);if(BaseKit.Framework_Page.isMode(['edit','preview','admin','themeselector']))
{switch(view)
{case'admin':this.$("adminpanel").show();break;case'design':this.$("adminpanel").hide();break;}}}}});$(document.body).mousedown(function(event)
{var check=$(event.target);if(BaseKit.Framework_Page.isDoing('drag'))
{return;}
while(!check.is('body'))
{if(check.hasClass('prevent-self-click')||check.attr('contentEditable')==true)
{return;}
check=check.parent();}
BaseKit.Framework_Page.fireBodyClicks(event);});$(document).keypress(function(event)
{var el=event.target;if(event.keyCode==8&&el.tagName!='INPUT'&&el.tagName!='TEXTAREA'&&BaseKit.Element.Plugin.Wysiwyg.isActive()==false)
{event.preventDefault();}});$(document).keydown(function(event)
{var el=$(event.target);if((BaseKit.Browser.safari||BaseKit.Browser.chrome)&&event.keyCode==8&&!el.is('input')&&!el.is('textarea')&&!BaseKit.Element.Plugin.Wysiwyg.isActive())
{event.stopPropagation();event.preventDefault();}
var keyCode=event.keyCode,character=String.fromCharCode(keyCode).toLowerCase(),mismatch=false;if(typeof(lastKeyCode)=="undefined")
{lastKeyCode=false;}
if(typeof(lastKeyCodeTime)=="undefined")
{lastKeyCodeTime=0;}
var doubleKey=false;keyMaps.each(function(keyMap)
{var keys=keyMap.keys;doubleKey=keys.findDuplicate();switch(doubleKey)
{case"alt":doubleKey=18;break;case"ctrl":doubleKey=17;break;case"shift":doubleKey=16;break;case"escape":doubleKey=27;break;case"enter":doubleKey=13;break;}
keys.each(function(key)
{if(mismatch)
{return;}
switch(key)
{case"enter":mismatch=(keyCode!=13);break;case"backspace":mismatch=(keyCode!=8&&keyCode!=46);break;case"esc":mismatch=(keyCode!=27);break;case"shift":mismatch=(!event.shiftKey);break;case"alt":mismatch=(!event.altKey);break;case"ctrl":mismatch=(!event.ctrlKey);break;case"cursors":mismatch=(keyCode<37||keyCode>40);break;case"cmd":mismatch=(!event.metaKey);break;default:mismatch=(key.toLowerCase()!=character);break;}});if(!mismatch)
{var direction="none";switch(keyCode-37)
{case 0:direction="left";break;case 1:direction="up";break;case 2:direction="right";break;case 3:direction="down";break;}
keyMap.fn.call(keyMap.scope||window,event,direction);}
mismatch=false;});});$(function()
{BaseKit.Framework_Page.hideIndicator();});})();(function()
{BaseKit.Framework_Page_Site=BaseKit.Class.create({superclass:BaseKit.Framework_Page,methods:{construct:function()
{this.callParent.apply(this,arguments);var that=this;if(BaseKit.Framework_Page.isMode(['normal']))
{BaseKit.Framework_Page.addKeyMap("shift+ctrl+o",function(event)
{that.startLogin();});}},hideEditor:function(overrideTopPixels)
{BaseKit.Framework_Page.hideTooltip(true);var template=$('#page-primary__editorBKprimary');template.css('marginLeft','0px');var editor=BaseKit.Editor.get();BaseKit.Editor.selectWidget(null);editor.$("primary").css("top",(overrideTopPixels>0?overrideTopPixels+"px":"75px"));BaseKit.Editor.hideFooter(true);if(BaseKit.Editor.getSidebar().showing=='probar')
{if(parseInt($('.editor-sidebar-probar').css('left'))>=0)
{$('.editor-sidebar-probar').animate({left:'-'+$('.editor-sidebar-probar').css('width')},200);}}
else
{if(parseInt(editor.$("sidebar").css('left'))>=0)
{editor.$("sidebar").animate({left:'-'+editor.$("sidebar").css('width')},200);}}
editor.$("sidebar-control-holder").css("left","-246px");editor.$("footerX").css("left","75px");var grid=editor.$('grid');if((grid!=null)&&(grid.isVisible()))
{grid.hide();}},showEditor:function()
{var editor=BaseKit.Editor.get();BaseKit.Editor.selectWidget(null);editor.$("sidebar-control-holder").css("left","246px").show();editor.$("footerX").css("left","240px");this.getRoot().fireEvent('updateRowColumnStyles')},finishUpdateTemplate:function(error)
{location.reload();},pageDeletedNotification:function(notify)
{this.fireEvent("pageDeleted",notify||false);},syncRowOrder:function(order,data)
{if(order!==undefined&&data!==undefined)
{var page=this.getRoot();page.rowOrder=order;page.rowDatar=data;}},setAdvancedMode:function(on)
{var value=(on===true?true:false);this.advancedMode=value;BaseKit.Logger.log(this.t("advanced-mode-"+(value?"on":"off")),"growl");this.saveAdvancedMode(value);}}});})();(function()
{BaseKit.Framework_Control_Theme=BaseKit.Class.create({superclass:BaseKit.Framework_Control,globals:{GetFontSwatchByRef:function(swatchRef)
{var swatch=null;var page=BaseKit.Framework_Page.get(),theme=(page!==null)?theme=page.primary['editor'].primary['theme']:null;if(theme instanceof BaseKit.Framework_Control_Theme)
{theme.fontSwatches.each(function(data)
{if(data.ref==swatchRef)
{swatch=data;}});}
return swatch;},GetColorSwatchByRef:function(swatchRef)
{var swatch=null;var page=BaseKit.Framework_Page.get(),theme=(page!==null)?theme=page.primary['editor'].primary['theme']:null;if(theme instanceof BaseKit.Framework_Control_Theme)
{theme.colorSwatches.each(function(data)
{if(data.ref==swatchRef)
{swatch=data;}});}
return swatch;},GetCurrentColorSwatchMapFromTheme:function(swatch)
{var page=BaseKit.Framework_Page.get();var theme=(page!==null)?theme=page.primary['editor'].primary['theme']:null;if(theme instanceof BaseKit.Framework_Control_Theme)
{theme.colorSwatches.each(function(t)
{if(t.ref==swatch.ref&&t.map)
{return t.map;}});}
return null;},GetCurrentFontSwatchMapFromTheme:function(swatch)
{var page=BaseKit.Framework_Page.get();var theme=(page!==null)?theme=page.primary['editor'].primary['theme']:null;if(theme instanceof BaseKit.Framework_Control_Theme)
{theme.fontSwatches.each(function(t)
{if(t.ref==swatch.ref&&t.map)
{return t.map;}});}
return null;},ConvertFontSwatchMap:function(css,map)
{if(!map)
{var page=BaseKit.Framework_Page.get();var theme=(page!==null)?theme=page.primary['editor'].primary['theme']:null;if(theme instanceof BaseKit.Framework_Control_Theme)
{theme.fontSwatches.each(function(t)
{if(t.ref==page.fontSwatchRef)
{map=t.map=(t.map)?t.map:BaseKit.Framework_Control_Theme.GetFontSwatchMap(t);}});}
if(map)
{var find=[],replace=[];for(var i=0,j=map['fonts'].length;i<j;i++)
{for(var key in map['fonts'][i])
{if(key=='line-height'&&map['fonts'][i][key]=='0')
{find.push('<font-swatch'+(i+1)+':'+key+'>px');replace.push('normal');}
else
{find.push('<font-swatch'+(i+1)+':'+key+'>');replace.push(map['fonts'][i][key]);}}}
if(css&&css!=undefined)
{for(var i=0,j=find.length;i<j;i++)
{var regex=new RegExp(find[i],'gi');css=css.replace(regex,replace[i]);}}}}
return(css&&css!=undefined)?css:null;},GetFontSwatchMap:function(swatch)
{if(swatch)
{map=BaseKit.Framework_Control_Theme.GetCurrentFontSwatchMapFromTheme(swatch);if(map==null)
{var map={};map.ref=swatch.ref;map.title=swatch.title;map.fonts=[];var fonts=[swatch['font1'],swatch['font2'],swatch['font3'],swatch['font4'],swatch['font5']];for(var i=0,j=fonts.length;i<j;i++)
{var f={};for(var key in fonts[i])
{f[key]=fonts[i][key];}
map.fonts.push(f);}}}
return(map)?map:null;},GetValueFromFontSwatch:function(value,swatch)
{if(value!==undefined&&/(\<)?font-swatch[1-5]:(line-height|font-size|font-family)?(\>)?/.test(value)==false)
{return value;}
if(swatch==undefined)
{var page=BaseKit.Framework_Page.get();var swatch=BaseKit.Framework_Control_Theme.GetFontSwatchByRef(page.fontSwatchRef);}
var arr=value.replace(/\<|\>/g,'').split(':'),swatchRef=arr[0].replace(/[^0-9]/g,'');if(arr.length==2)
{if(swatch['font'+swatchRef][arr[1]]!==undefined)
{return swatch['font'+swatchRef][arr[1]];}}
return value;},GetColorSwatchMap:function(swatch)
{if(swatch)
{map=BaseKit.Framework_Control_Theme.GetCurrentColorSwatchMapFromTheme(swatch);if(map==null)
{var map={'main':[],'lighter':[],'darker':[]};map.main=[swatch['color1'],swatch['color2'],swatch['color3'],swatch['color4'],swatch['color5']];var lighter=[1.2,1.4,1.6],darker=[0.8,0.6,0.4];for(var i=0,j=map.main.length;i<j;i++)
{var gradients=[];for(var k=0,l=lighter.length;k<l;k++)
{var values=BaseKit.Framework_Control_Theme.GetHexGrad(map.main[i],lighter[k]);gradients.push(values);}
map.lighter[i]=gradients;var gradients=[];for(var k=0,l=darker.length;k<l;k++)
{var values=BaseKit.Framework_Control_Theme.GetHexGrad(map.main[i],darker[k]);gradients.push(values);}
map.darker[i]=gradients;}
var page=BaseKit.Framework_Page.get();var theme=(page!==null)?theme=page.primary['editor'].primary['theme']:null;if(theme instanceof BaseKit.Framework_Control_Theme&&theme.colorSwatches!=null)
{theme.colorSwatches.each(function(t)
{if(t.ref==swatch.ref){t.map=map;}});}}}
return(map)?map:null;},GetGradientOffsetFromColorSwatch:function(data,map,hash)
{if(data==undefined||typeof data!='string')
{return;}
var find=[],replace=[],hash=(hash!==undefined&&hash==true)?'#':'';for(i=0,j=map['main'].length;i<j;i++)
{find.push('<color-swatch'+(i+1)+'>');replace.push(hash+map['main'][i]);for(k=0,l=map['lighter'][i].length;k<l;k++)
{find.push('<color-swatch'+(i+1)+':L:'+(k+1)+'>');replace.push(hash+map['lighter'][i][k]);}
for(k=0,l=map['darker'][i].length;k<l;k++)
{find.push('<color-swatch'+(i+1)+':D:'+(k+1)+'>');replace.push(hash+map['darker'][i][k]);}}
return data;},GetGradientOffsetFromColorSwatchRef:function(swatch,map,hash)
{if(swatch==undefined||typeof swatch!='string')
{return;}
if(swatch!==undefined&&/(\<)?color-swatch[1-9](:[L|D]:[1-9])?(\>)?/.test(swatch)==false)
{if(hash!==undefined)
{swatch=(swatch.match(/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i))?'#'+swatch:swatch;}
return swatch;}
if(!map)
{var page=BaseKit.Framework_Page.get();var theme=(page!==null)?theme=page.primary['editor'].primary['theme']:null;if(theme instanceof BaseKit.Framework_Control_Theme)
{theme.colorSwatches.each(function(t)
{if(t.ref==page.colorSwatchRef)
{map=t.map=(t.map)?t.map:BaseKit.Framework_Control_Theme.GetColorSwatchMap(t);}});}}
if(map&&swatch.length>0&&/(\<)?color-swatch[1-9](:[L|D]:[1-9])?(\>)?/.test(swatch))
{var arr=swatch.replace(/\<|\>/g,'').split(':'),swatchRef=parseInt(arr[0].replace(/[^0-9]/g,''),10)-1;if(arr.length==1&&arr[0].indexOf('color-swatch')>-1)
{var colour=map.main[swatchRef]
if(hash!==undefined)
{colour=(colour.match(/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i))?'#'+colour:colour;}
return colour;}
else if(arr.length==3)
{var index=(parseInt(arr[2],10)-1),offset=(arr[1]=='L')?'lighter':'darker';if(map[offset]&&map[offset][swatchRef][index])
{var colour=map[offset][swatchRef][index];if(hash!==undefined)
{colour=(colour.match(/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i))?'#'+colour:colour;}
return colour;}}}
return null;},GetHexGrad:function(hex,percentage)
{hex=hex.replace('#','');var textr=parseInt(hex.substring(0,2),16);var textg=parseInt(hex.substring(2,4),16);var textb=parseInt(hex.substring(4,6),16);var rgb=[];rgb.push(Math.min((percentage*textr),255));rgb.push(Math.min((percentage*textg),255));rgb.push(Math.min((percentage*textb),255));var tmp=[];tmp[0]=parseInt(rgb[0],10).toString(16);tmp[1]=parseInt(rgb[1],10).toString(16);tmp[2]=parseInt(rgb[2],10).toString(16);var hex=tmp[0].length==1?('0'+tmp[0]):tmp[0];hex+=tmp[1].length==1?('0'+tmp[1]):tmp[1];hex+=tmp[2].length==1?('0'+tmp[2]):tmp[2];return hex;},IsSwatchRef:function(value)
{return(value&&/^(\<)?color-swatch[1-9](:[L|D]:[1-9])?(\>)?$/.test(value))?true:false}},methods:{attach:function()
{this.callParent.apply(this,arguments);},deleteRowStyle:function(ref,styleName)
{if(ref!==undefined&&styleName!==null)
{var saveIds=[];for(var i in this.rows)
{if(this.rows[i].styleName==styleName)
{$('#'+this.rows[i].id).removeClass('row-'+styleName);this.rows[i].styleName='';this.rows[i].styleType='color';this.rows[i].setRowToRepeatType('outer');this.rows[i].setRowToRepeatType('inner');saveIds.push(this.rows[i].id);}}
this.deleteRowStylePHP(styleName,ref,saveIds);}},deleteColumnStyle:function(ref,styleName)
{if(ref!==undefined&&styleName!==null)
{var saveIds=[];$('#page-primary__editor-primary__theme').find('.widget-columns-column').each(function()
{var column=$bk($(this).attr('id'));if(column.styleName==styleName)
{column.$('padding').removeClass('column-'+styleName);column.styleName='';column.type='color';column.setColumnToRepeatType();saveIds.push(column.id);}});this.deleteColumnStylePHP(styleName,ref,saveIds);}},changeType:function(type)
{var validTypes=['color','flex','image','linear','fullscreen'];if(!validTypes.contains(type))
{return;}
this.type=type;this.saveType(type);switch(type)
{case'color':case'image':case'linear':case'fullscreen':this.setThemeToRepeatType();break;case'flex':this.setThemeToFlexType();break;}},setThemeToRepeatType:function()
{this.clearJQCache();this.$('theme-top').remove();this.$('theme-middle').remove();this.$('theme-bottom').remove();},setThemeToFlexType:function()
{this.setThemeToRepeatType();this.$().prepend($('<div></div>').addClass(this.makeClass('theme-top')));this.$().prepend($('<div></div>').addClass(this.makeClass('theme-middle')));this.$().prepend($('<div></div>').addClass(this.makeClass('theme-bottom')));}}});})();(function()
{var proxy=null;var marker=null,__self;function closeRowSettings(event)
{var editor=BaseKit.Editor.get();$('#'+editor.makeID('rowSettings')).hide();$('#page-primary__editor').unbind('mousedown',closeRowSettings);}
function closeRowColumnSplit(event)
{var editor=BaseKit.Editor.get();$('#'+editor.makeID('rowColumnSplit')).hide();$('#page-primary__editor').unbind('mousedown',closeRowColumnSplit);}
BaseKit.Framework_Control_Row=BaseKit.Class.create({superclass:BaseKit.Framework_Control,globals:{hide:function()
{if(__self!==null)
{__self.hideRowSettings();}}},methods:{construct:function()
{this.callParent.apply(this,arguments);var that=__self=this;var timeout=setTimeout(function()
{clearTimeout(timeout);if(!(BaseKit.Framework_Page.isMode(['normal'])))
{that.getRoot().primary['editor'].handleEvent('rowStyleTypeChange',that,'checkTypeChange');that.getRoot().primary['editor'].handleEvent('rowStyleInnerPaddingChange',that,'checkInnerPaddingChange');}},100);},attach:function()
{this.callParent.apply(this,arguments);this.tooltip=null;if(!(BaseKit.Framework_Page.isMode(['normal'])))
{var that=this,direction=null;if(proxy==null&&(BaseKit.Framework_Page.isMode(['edit','preview','themeselector'])))
{proxy=$('<div></div>').addClass('bk-row-drag-proxy hidden').css('opacity',0.7).appendTo(document.body);}
if(marker===null)
{marker=$('<div></div>').addClass('bk-row-marker').css('opacity',0.5);}
var highlight=$('<div></div>').addClass(this.makeClass('highlight')+' hidden').css('opacity',0.3).appendTo(this.$());var page=$bk("page");this.$().mouseover(function()
{if(page.advancedMode)
{that.showSettings();}
if(BaseKit.Framework_Page.isMode(['edit']))
{that.$('drag-vertical').show();}});this.$().mouseout(function()
{that.hideSettings();});this.$().setup({interact:["row"],data:{type:"row",value:that.id},plugins:{drop:{onDragMove:function(drop,drag,x,y)
{BaseKit.Editor.CloseFooter();var data=drag.data('data');var region=that.$().getRegion(false,true),halfHeight=(region.bottom-region.top)>>1,quarterHeight=halfHeight>>1,middle=region.top+halfHeight,topLimit=region.top+quarterHeight,bottomLimit=region.bottom-quarterHeight;direction=(y<middle)?"up":"down";that.showMarker(direction);},onDragExit:function()
{marker.hide();},onDragDrop:function(drop,drag)
{BaseKit.Framework_Widget.hideMarker();var data=drag.data('data');marker.hide();that.moveRow($bk(data.value),data.name,direction);}}}});var settings=$('<div></div>').addClass('control-row-settings-bar left prevent-select bk-row-top hidden').appendTo(this.$('content'));var icons=$('<div></div>').addClass('control-row-icons left').appendTo(settings);var editMessage=this.getRoot().t("edit-settings-title");var moveMessage=this.getRoot().t("move-settings-title");var splitMessage=this.getRoot().t("split-settings-title");this.edit=$('<div></div>').addClass('control-row-icon control-row-edit').attr('title',editMessage);this.split=$('<div></div>').addClass('control-row-icon control-row-split').attr('title',splitMessage);this.move=$('<div></div>').addClass('control-row-icon control-row-move').attr('title',moveMessage);this.move.data('id',this.id);this.edit.mousedown(function(event)
{BaseKit.Editor.hideAllPopups();closeRowColumnSplit();BaseKit.Editor.selectWidget(that);var widget=BaseKit.Editor.getSelectedWidget();if(widget!==null&&that.id==widget.id)
{var editor=BaseKit.Editor.get();var settings=$('#'+editor.makeID('rowSettings'));var el=$(this);var region=el.getRegion();var rowSettings=BaseKit.Editor.get().controls['rowSettings'];settings.removeClass('bk-up');settings.css('top',(region.top-5)+'px');settings.css('left',(region.left+20)+'px');var settingsBar=that.$('settings-bar');$('#page-primary__editorBKcolumnsettings').hide();settings.show();if(settingsBar.hasClass('right')||settingsBar.hasClass('offset'))
{var settingsWidth=parseInt(settings.width());settings.css('left',(region.left-settingsWidth-20)+'px');}
var settingsRegion=settings.getRegion();var editorRegion=BaseKit.Editor.get().$().getRegion();var settingsHeight=settings.height();if(settingsRegion==null||editorRegion==null)
{return;}
if(settingsRegion.bottom>editorRegion.bottom)
{settings.css('top',(region.top+20-settingsHeight)+'px');settings.addClass('bk-up');}
settings.removeClass('editor-popup-lt editor-popup-rt editor-popup-lb editor-popup-rb');if(settingsBar.hasClass('right')&&settingsRegion.bottom>editorRegion.bottom)
{settings.addClass('editor-popup-rb')}
else if(settingsBar.hasClass('right'))
{settings.addClass('editor-popup-rt')}
else if(settingsRegion.bottom>editorRegion.bottom)
{settings.addClass('editor-popup-lb')}
else
{settings.addClass('editor-popup-lt')}
rowSettings.showPopup();event.stopPropagation();event.preventDefault();$('#page-primary__editor').bind('mousedown',[this],closeRowSettings);}
$('.framework-control-rowstyles-selector-list-holder').scrollbar({arrows:false});});this.split.mousedown(function(event)
{BaseKit.Editor.hideAllPopups();closeRowSettings();BaseKit.Editor.selectWidget(that);var widget=BaseKit.Editor.getSelectedWidget();if(widget!==null&&that.id==widget.id)
{var editor=BaseKit.Editor.get();var settings=$('#'+editor.makeID('rowColumnSplit'));var el=$(this);settings.show();var region=el.getRegion();if(region==null)
{return;}
var rowColumnSplit=BaseKit.Editor.get().controls['rowColumnSplit'];settings.css('top',(region.top-7)+'px');settings.css('left',(region.left+20)+'px');var settingsBar=that.$('settings-bar');if(settingsBar.hasClass('right')||settingsBar.hasClass('offset'))
{var settingsWidth=parseInt(settings.width());settings.css('left',(region.left-settingsWidth-20)+'px');}
var settingsRegion=settings.getRegion();var editorRegion=BaseKit.Editor.get().$().getRegion();var settingsHeight=settings.height();if(settingsRegion==null||editorRegion==null)
{return;}
if(settingsRegion.bottom>editorRegion.bottom)
{settings.css('top',(region.top+17-settingsHeight)+'px');settings.addClass('bk-up');}
settings.removeClass('editor-popup-lt editor-popup-rt editor-popup-lb editor-popup-rb');if(settingsBar.hasClass('right')&&settingsRegion.bottom>editorRegion.bottom)
{settings.addClass('editor-popup-rb')}
else if(settingsBar.hasClass('right'))
{settings.addClass('editor-popup-rt')}
else if(settingsRegion.bottom>editorRegion.bottom)
{settings.addClass('editor-popup-lb')}
else
{settings.addClass('editor-popup-lt')}
rowColumnSplit.showPopup();event.stopPropagation();event.preventDefault();$('#page-primary__editor').bind('mousedown',[this],closeRowColumnSplit);}});var movingRow=null,delta=0;this.move.setup({interact:['row'],plugins:{drag:{clone:false,cloneParent:false,custom:true,lockX:true,onDragStart:function(drag,x,y,event)
{that.hideSettings();BaseKit.Element.Plugin.Wysiwyg.stop(true);var data=drag.data();var id=data.id;movingRow=$bk(id);if(!movingRow||movingRow===null)
{BaseKit.DragDrop.cancelDrag(event);}
that.move.data('data',{type:'row',value:movingRow.id,name:movingRow.__name});var region=movingRow.$("content").getRegion(false,true);var width=(region.right-region.left)-2,height=(region.bottom-region.top)-2;proxy.css("width",width+'px');proxy.css("height",height+'px');proxy.css("left",(region.left)+'px');proxy.css("top",(region.top)+'px');proxy.show();delta=y-region.top;},onDragMove:function(drag,x,y)
{proxy.css("top",(y-delta)+'px');},onDragFinish:function(drag)
{movingRow=null;proxy.hide();}}}});icons.append(this.edit);icons.append(this.split);icons.append(this.move);var buffer=$('<div></div>').addClass('control-row-settings-buffer');settings.append(buffer);var dragVertical=$('<div></div>').addClass('control-row-drag-vertical prevent-select hidden').appendTo(this.$());var startY=0;var columnWidget=this.controls.columns;var columns=this.controls.columns.columns;var newMinHeight=10;var lowestsMinHeight=10;var lastYPos=0;var minHeightdirection=null;var didMove=false;dragVertical.addPlugin("drag",{custom:true,onDragStart:function(el,x,y)
{BaseKit.Editor.selectWidget(null);var colMinHeight=0;var colPaddingMinHeight=0;var colHeight=0;lastYPos=y;didMove=false;lowestsMinHeight=10;for(var name in columns)
{colMinHeight=parseInt(columns[name].$().css('minHeight'));colPaddingMinHeight=parseInt(columns[name].$('padding').css('minHeight'));columns[name].$('padding').css('minHeight','0');columns[name].$().css('minHeight','0');colHeight=parseInt(columns[name].$().height());if(lowestsMinHeight<colHeight)
{lowestsMinHeight=colHeight;}
columns[name].$('padding').css('minHeight',colPaddingMinHeight+'px');columns[name].$().css('minHeight',colMinHeight+'px');}
if(that.tooltip!=null)
{that.tooltip.show();}
var width=that.$().width();var tooltipWidth=that.tooltip.width();var position=(width/2)-(tooltipWidth/2);that.tooltip.css('left',position+'px');startY=y;},onDragMove:function(el,x,y)
{var yDiff=y-startY;var moveHandleRegion=that.$().getRegion(true,false);if(lastYPos<y)
{minHeightdirection='down';}
else
{minHeightdirection='up';}
if(minHeightdirection=='down'&&y<moveHandleRegion.bottom)
{startY=y;return;}
newMinHeight=(parseInt(that.minHeight+yDiff)>=10?parseInt(that.minHeight+yDiff):10);newMinHeight=Math.max(lowestsMinHeight,newMinHeight);if(lowestsMinHeight<=newMinHeight)
{that.$().css('minHeight',newMinHeight+'px');that.$('content').css('minHeight',newMinHeight+'px');columnWidget.$('content').css('minHeight',newMinHeight+'px');columnWidget.$().css('minHeight',newMinHeight+'px');for(var name in columns)
{columns[name].$().css('minHeight',Math.max(parseInt(newMinHeight-columns[name].minusBorderMargin),0)+'px');columns[name].$('padding').css('minHeight',Math.max(parseInt(newMinHeight-columns[name].minusBorderMargin),0)+'px');}
that.minHeight=newMinHeight;startY=y;}
that.tooltip.html('Height:'+newMinHeight+'px');lastYPos=y;didMove=true;},onDragFinish:function(el,x,y)
{if(that.tooltip!=null)
{that.tooltip.hide();}
if(didMove!==true)
{return;}
that.saveMinHeight(newMinHeight);columnWidget.saveMinHeight(newMinHeight);}});this.createToolTip();}},forceMinHeight:function()
{var columnWidget=this.controls.columns;var newMinHeight=parseInt(this.$().css('minHeight'));this.$('content').css('minHeight',newMinHeight+'px');this.minHeight=newMinHeight;this.saveMinHeight(newMinHeight);columnWidget.saveMinHeight(newMinHeight);},showSettings:function()
{this.hideSettings();var editor=BaseKit.Editor.get()
if(BaseKit.Framework_Page.isDoing('drag')||$('#'+editor.makeID('rowSettings')).isVisible()||$('#'+editor.makeID('rowColumnSplit')).isVisible()||BaseKit.Framework_Page.isMode(['preview','themeselector']))
{return;}
var content=this.$(),settings=this.$('settings-bar'),icons=this.$('icons'),buffer=this.$('settings-buffer'),that=this;switch(editor.primary['theme'].position)
{case'right':case'center':settings.removeClass('right offset').addClass('left');icons.removeClass('right').addClass('left');buffer.removeClass('right').addClass('left');break;default:settings.removeClass('left offset').addClass('right');icons.removeClass('left').addClass('right');buffer.removeClass('left').addClass('right');break;}
if($('.bk-trial-expired-banner').length>0&&$('.bk-trial-expired-banner').isVisible())
{icons.css('top','42px');}
settings.show();var rowRegion=this.$().getRegion();var settingsRegion=settings.getRegion();var viewPortWidth=$('#page-primary__editor-primary__theme').width();var themeWidth=this.getRoot().primary['editor'].primary['theme'].width;if(rowRegion!==null&&settingsRegion!==null&&(rowRegion.left+30)>settingsRegion.left)
{settings.removeClass('left offset').addClass('right');icons.removeClass('left').addClass('right');buffer.removeClass('left').addClass('right');}
var sidebar=BaseKit.Editor_Sidebar.Get();if(sidebar!==null&&sidebar.showing=='probar')
{var probar=BaseKit.Editor_Sidebar_Probar.Get(),probarRegion=probar.$().getRegion();if(probarRegion.right+30>settingsRegion.left)
{settings.removeClass('left offset').addClass('right');icons.removeClass('left').addClass('right');buffer.removeClass('left').addClass('right');}}
if(parseInt(viewPortWidth-30)<parseInt(themeWidth))
{var offsetY=(viewPortWidth>themeWidth)?0:parseInt((themeWidth-viewPortWidth));settings.css('right',parseInt((themeWidth-viewPortWidth))+'px');settings.css('left','');settings.removeClass('right').addClass('offset');icons.removeClass('right').addClass('left');buffer.removeClass('right').addClass('left');}
this.$('drag-vertical').show();},hideSettings:function()
{var editor=BaseKit.Editor.get();if(BaseKit.Framework_Page.isDoing('drag')||$('#'+editor.makeID('rowSettings')).isVisible()||$('#'+editor.makeID('rowColumnSplit')).isVisible())
{return;}
var settings=this.$('settings-bar'),icons=this.$('icons'),buffer=this.$('settings-buffer');settings.css('right','');settings.css('left','');settings.removeClass('right offset').removeClass('left');icons.removeClass('right offset').removeClass('left');buffer.removeClass('right offset').removeClass('left');this.$('settings-bar').hide();this.$('drag-vertical').hide();},shiftSliceZIndex:function(direction)
{if(!BaseKit.Framework_Page.isMode(['normal']))
{var page=this.getRoot();var theme=page.primary['editor'].primary['theme'];var rows=theme.$$('row'),numberOfRows=(direction=='ascending'?1:rows.length);if(rows==null||rows.length==0)
{return;}
if(numberOfRows>=0)
{rows.each(function()
{var el=$(this);el.css('zIndex',numberOfRows);direction=='ascending'?numberOfRows+=1:numberOfRows-=1;});}}},changeType:function(level,type)
{var validTypes=['color','flex','linear','image'];if(!validTypes.contains(type))
{return;}
if(level=='outer')
{this.outerStyleType=type;}
else if(level=='inner')
{this.innerStyleType=type;}
this.saveStyleType(level,type);switch(type)
{case'color':case'image':case'linear':this.setRowToRepeatType(level);break;case'flex':this.setRowToFlexType(level);break;}},setRowToRepeatType:function(type)
{this.clearJQCache();this.$(type+'-top').remove();this.$(type+'-middle').remove();this.$(type+'-bottom').remove();},setRowToFlexType:function(type)
{this.setRowToRepeatType(type);if(type=='outer')
{$('<div></div>').addClass('row-flex-top '+this.makeClass('outer-top')).insertBefore(this.$('content'));$('<div></div>').addClass('row-flex-middle '+this.makeClass('outer-middle')).insertBefore(this.$('content'));$('<div></div>').addClass('row-flex-bottom '+this.makeClass('outer-bottom')).insertBefore(this.$('content'));}
else
{this.$('content').prepend($('<div></div>').addClass('row-flex-bottom '+this.makeClass('inner-bottom')));this.$('content').prepend($('<div></div>').addClass('row-flex-middle '+this.makeClass('inner-middle')));this.$('content').prepend($('<div></div>').addClass('row-flex-top '+this.makeClass('inner-top')));}},applyRowStyle:function(styleClass,outerType,innerType,save,minusInnerPaddingOffset)
{if(this.styleName!='')
{this.$().removeClass('row-'+this.styleName);}
this.$().addClass('control-row theme-row-'+this.type+' row-'+styleClass+' bk-selected');this.styleName=styleClass;this.minusInnerPaddingOffset=parseInt(minusInnerPaddingOffset);if(outerType!=null)
{this.changeType('outer',outerType);}
if(innerType!=null)
{this.changeType('inner',innerType);}
var paddingOffset=parseInt(minusInnerPaddingOffset);if(paddingOffset>=0)
{this.changeMinusInnerPaddingOffset(paddingOffset);}
if(save==true)
{this.saveStyleName(styleClass);}
closeRowSettings();},changeMinusInnerPaddingOffset:function(paddingOffset)
{if(paddingOffset===null||paddingOffset===undefined)
{return;}
var theme=this.getRoot().primary['editor'].primary['theme'];this.$('content').width((parseInt(theme.width)-paddingOffset)+'px');this.forceMinHeight();var columnWidget=this.controls.columns;columnWidget.onResize();this.saveMinusInnerPaddingOffset(paddingOffset);},showMarker:function(direction)
{switch(direction)
{case'up':marker.insertBefore(this.$('content'));break;case'down':marker.insertAfter(this.$('content'));break;}
marker.show();},saveRowName:function(rowName)
{if(rowName)
{this.type=rowName;this.saveRowNameProperty(rowName);}},moveRow:function(row,movingRowName,direction)
{if(movingRowName==this.__name)
{return;}
switch(direction)
{case'up':row.$().insertBefore(this.$());break;case'down':row.$().insertAfter(this.$());break;}
this.parent.setRowPosition(movingRowName,this.__name,direction);},checkTypeChange:function(styleName,level,type)
{if(this.styleName==styleName&&((level=='outer'&&type!=this.outerStyleType)||(level=='inner'&&type!=this.innerStyleType)))
{this.changeType(level,type);}},checkInnerPaddingChange:function(styleName,offset)
{if(this.styleName==styleName)
{this.changeMinusInnerPaddingOffset(offset);}},removeStyle:function()
{this.hideRowSettings();if(this.styleName!='')
{this.$().removeClass('row-'+this.styleName);this.styleName='';}
this.styleType='color';this.setRowToRepeatType('outer');this.setRowToRepeatType('inner');this.changeMinusInnerPaddingOffset(0);this.removeStylePHP();},hideRowSettings:function()
{closeRowSettings();this.hideSettings();},showFooter:function(ref,name,forceUpdateCSS)
{if(ref<=0&&name==null)
{return;}
var editor=BaseKit.Editor.get(),that=this;BaseKit.Framework_Control_TabPanel.loadTabs(this._tabs);var style={'ref':ref,'styleName':name,'widgetID':that.id,'forceUpdateCSS':(forceUpdateCSS!==null&&forceUpdateCSS!==undefined)?forceUpdateCSS:false};editor.showFooter();BaseKit.Framework_Control_TabPanel.changeTabByName('rowstyleeditor',style);},createToolTip:function()
{this.tooltip=$('<div></div>').addClass('control-row-minheight-tooltip').html('Height:'+this.$('content').height()+'px').css('opacity',0.8).appendTo(this.$());}}});})();(function()
{BaseKit.Framework_Control_Zone=BaseKit.Class.create({superclass:BaseKit.Framework_Control,methods:{attach:function()
{this.callParent.apply(this,arguments);this.__zone=true;var that=this;this.reset();if(BaseKit.Framework_Page.isMode(["edit","preview","themeselector","admin"]))
{this.highlight=$('<div></div>').addClass('control-zone-highlight hidden').appendTo(this.$());}
var marker=$('<div></div>').addClass('control-zone-marker').css('opacity',0.4);var interacts=[],tmp=this.interact.split(',');tmp.each(function(name)
{if(name=='formWidget'&&!(that.parent instanceof BaseKit.Widget_Formarea))
{interacts.push("class."+name);}
else
{interacts.push(name);interacts.push("class."+name);}});this.dontAllowDrop=false;if(this.$().length)
{this.$().setup({interact:interacts,plugins:{drop:{onDragStart:function(drop,drag,x,y)
{var dragData=drag.getData();var carousel=that.getAscendentInstanceOf(BaseKit.Widget_Carousel);if(carousel!=null&&carousel instanceof BaseKit.Widget_Carousel&&dragData.value=='widget.carousel')
{that.dontAllowDrop=true;}
if(that.empty&&that._highlight)
{that.highlight.show();}},onDragFinish:function(drop,drag,x,y)
{that.dontAllowDrop=false;that.highlight.hide();},onDragMove:function(drop,drag,x,y)
{if(that.dontAllowDrop==true)
{return;}
var li=that.getAscendentInstanceOf(BaseKit.Widget_LibraryItem);if(li!==null&&typeof li.locked!="undefined"&&li.locked)
{BaseKit.Framework_Widget.proxyDragMove(that,drop,drag,x,y);return;}
if(that.empty)
{that.$().append(marker);BaseKit.Framework_Widget.hideMarker();}
else
{var widget=that.getLastWidget(),data=drag.getData();if(widget!==null&&widget.id!=data.value&&typeof widget.showMarker=="function")
{var region=widget.$().getRegion(false,true);if(y>region.bottom)
{widget.showMarker("down");}
else
{BaseKit.Framework_Widget.hideMarker();}}}},onDragExit:function()
{if(that.dontAllowDrop==true)
{return;}
var li=that.getAscendentInstanceOf(BaseKit.Widget_LibraryItem);if(li!==null&&typeof li.locked!="undefined"&&li.locked)
{return;}
if(that.empty)
{if(marker&&marker.parent().length&&marker.parent().attr('id')==that.id)
{marker.detach();}}
else
{var widget=that.getLastWidget();if(widget!==null&&typeof widget.showMarker=="function")
{BaseKit.Framework_Widget.hideMarker();}}},onDragDrop:function(drop,drag,x,y,xx,yy)
{if(that.dontAllowDrop==true)
{return;}
var li=that.getAscendentInstanceOf(BaseKit.Widget_LibraryItem);if(li!==null&&typeof li.locked!="undefined"&&li.locked)
{BaseKit.Framework_Widget.proxyDragDrop(that,drop,drag,x,y);return;}
if(BaseKit.Editor.isTemplateLocked()&&that.mode=='template')
{BaseKit.Framework_Page.showTooltip({'message':that.getRoot().t("template-locked"),'element':$bk('page').primary.editor.panels.toolbar.controls.templatelock.$().children().last(),'align':'tl'});return;}
var data=drag.getData();if(that.empty)
{that.dropWidget(data);}
else
{var widget=that.getLastWidget();if(widget!==null&&widget.id!=data.value&&typeof widget.showMarker=="function")
{var region=widget.$().getRegion(false,true);if(yy>region.bottom)
{that.dropWidget(data,null);}}}
if((that.parent instanceof BaseKit.Widget_Columns||that.parent instanceof BaseKit.Widget_Carousel)&&typeof that.parent.onResize=='function'&&data.type!='widget.image'&&data.type!='widget.twitter'&&data.type!='widget.rss'&&data.type!='data.flickr')
{if(that.$().hasClass('bk-empty'))
{that.$().removeClass('bk-empty');}
that.onResize();}}}}});}},reset:function(forceZoneNonEmpty)
{var widgets=this.widgets,names=[],name=null;if(!forceZoneNonEmpty&&!this.neverEmpty)
{for(name in widgets)
{names.push(name);}}
if(forceZoneNonEmpty||(this.neverEmpty&&this.parent.topLevel==false)||names.length)
{this.empty=false;var el=this.$();if(el&&el!==null&&(BaseKit.Editor.isTemplateLocked()==false||(BaseKit.Editor.isTemplateLocked()==true&&this.mode!='template')))
{this.$().removeClass("bk-empty");}}
else
{this.empty=true;var el=this.$();if(el&&el!==null&&(BaseKit.Editor.isTemplateLocked()==false||(BaseKit.Editor.isTemplateLocked()==true&&this.mode!='template')))
{this.$().addClass("bk-empty");this.fireEvent('zoneEmpty');}}},getContentEl:function()
{return this.$();},generateName:function(prefix)
{var widgets=this.widgets;if(typeof widgets[prefix]!="undefined")
{for(var num=1;typeof widgets[prefix+num]!="undefined";++num);prefix+=num;}
return prefix;},createWidget:function(className,before,data,noPHP,dontUndo)
{if(dontUndo!==true)
{dontUndo=false;}
BaseKit.Element.Plugin.Wysiwyg.stop(true);var prefix=className.split(".").last(),name=this.generateName(prefix),id=this.id+"-widgets__"+name;var placeholder=$('<div></div>').addClass('control-zone-placeholder').attr('id',id);if(before)
{placeholder.insertBefore($('#'+before));}
else
{placeholder.appendTo(this.getContentEl());}
if(noPHP)
{data.objectName=name;}
else
{this.injectWidget(className,name,before||null,data,dontUndo);}
this.fireEvent('widgetCreated');this.reset(true);return id;},moveWidget:function(id,before,data,dontUndo,selectWidget,syncPHP,forceName)
{BaseKit.Element.Plugin.Wysiwyg.stop(true);if(selectWidget!==false)
{selectWidget=true;}
if(typeof forceName!='string')
{forceName=null;}
if(syncPHP!==false)
{syncPHP=true;}
var widget=$bk(id);if(typeof widget!='object'&&widget.parent==null)
{return;}
if(syncPHP===false&&typeof widget._skipDestroyObject!=null)
{widget._skipDestroyObject=true;}
var prevZone=widget.parent,prevAfter=widget.getObjectAfter();var prefix=(forceName!=null?forceName:widget.getName()),name=this.generateName(prefix);if(typeof widget.customMove=='function')
{widget.customMove(before,this);}
else
{if(before)
{widget.$().insertBefore($('#'+before));}
else
{widget.$().appendTo(this.getContentEl());}}
if(prevZone.id!=this.id)
{var oldID=widget.id;var oldName=widget.__name;widget.changeParent(this,name,null,before||null);this.reset();prevZone.reset();var settings=this.getRoot().primary.editor.footers['panel1'].controls['settings'].controls;for(var namePart in settings)
{if(settings[namePart].controlID==oldID)
{settings[namePart].controlID=widget.id;}}
if(prevZone.parent instanceof BaseKit.Widget_Columns)
{prevZone.parent.isEmpty();}}
else
{var oldID=widget.id;var oldName=widget.__name;widget.parent.insertChild(widget.__collection,widget,before||null);}
if(this.parent instanceof BaseKit.Widget_Columns)
{this.parent.isEmpty();}
var slice=this.getAscendentInstanceOf(BaseKit.Framework_Control_Slice);if(widget.getAscendentInstanceOf(BaseKit.Widget_Formarea)===null&&selectWidget!==false)
{BaseKit.Editor.selectWidget(null);BaseKit.Editor.selectWidget(widget);}
if(!dontUndo)
{BaseKit.UndoManager.pushUndoState("widgetMove",{widget:widget,from:[prevZone,prevAfter!==null?prevAfter.id:null],to:[this,before],oldName:oldName,newName:widget.__name});}
this.insertWidget(oldID,before?before:null,false,(forceName?forceName:null));var newID=this.id+'-widgets__'+widget.__name;if(!BaseKit.Browser.ie)
{if(oldID!=null&&oldID!=''&&newID!=null&&newID!=''&&oldID!=newID)
{BaseKit.CSS.replace(oldID,newID);}}
return newID;},dropWidget:function(data,before)
{var previousParent=null,movingWidget=null,dontUndo=false;if(data&&data!==null&&typeof data.type!="undefined"&&typeof data.value!="undefined")
{if(data.type.substr(0,5)=="class")
{if(data.type=='class.formWidget'&&!(this.parent instanceof BaseKit.Widget_Formarea))
{var dataFormArea={"widget":"form","name":this.t("form-widget"),"title":this.t("add-form"),"interact":"class.widget","type":"class.widget","value":"widget.formarea","column":null,"editable":true,"enabled":true};this.createWidget(dataFormArea.value,before||null,dataFormArea,false,false);var interval=setInterval(function()
{var selectedWidget=BaseKit.Editor.getSelectedWidget();if(selectedWidget!=null)
{clearInterval(interval);if(selectedWidget instanceof BaseKit.Widget_Formarea)
{BaseKit.Framework_Page.showLightbox("form.create",{'widgetID':selectedWidget.id,'createFormElement':data});}}},100);}
else if(data.type=='class.formWidgetCreated'&&this.parent instanceof BaseKit.Widget_Formarea)
{movingWidget=$bk(data.value)
previousParent=movingWidget.parent;if(previousParent!=null&&previousParent instanceof BaseKit.Widget_Columns_Column&&previousParent.getCount()==1)
{dontUndo=true;}
this.moveWidget(data.value,before||null,data,dontUndo,true,true,null);}
else
{this.createWidget(data.value,before||null,data,false,false);}}
else
{if(data.type!='formWidget'||(data.type=='formWidget'&&this.parent instanceof BaseKit.Widget_Formarea))
{movingWidget=$bk(data.value)
previousParent=movingWidget.parent;if(previousParent!=null&&previousParent instanceof BaseKit.Widget_Columns_Column&&previousParent.getCount()==1)
{dontUndo=true;}
this.moveWidget(data.value,before||null,data,dontUndo,true,true,null);}
else if(data.spreadsheet&&data.spreadsheet==true)
{this.createWidget(data.value,before||null,data,false,false);}}}},getCount:function()
{var widgets=this.widgets,count=0;for(var ignore in widgets)
{++count;}
return count;},getFirstWidget:function()
{var widgets=this.widgets;for(var name in widgets)return widgets[name];return null;},getLastWidget:function()
{var widgets=this.widgets,widget=null;for(var name in widgets)widget=widgets[name];return widget;},showMask:function()
{this.bubble('showMask');},hideMask:function()
{this.bubble('hideMask');},onResize:function()
{this.resizeWidgets();},resizeWidgets:function()
{var widgets=this.widgets;for(var name in widgets)
{if(typeof widgets[name].onResize=='function')
{widgets[name].onResize();}}},finishInsertWidget:function(oldID,newID)
{},removePlaceholder:function(name)
{var placeholder=$("#"+this.id+"-widgets__"+name);if(placeholder.length)
{placeholder.remove();}}}});})();(function()
{BaseKit.Framework_Control_LibraryItem=BaseKit.Class.create({superclass:BaseKit.Framework_Control_Zone,methods:{construct:function()
{this.callParent.apply(this,arguments);this.$().css('min-height','20px');},attach:function()
{this.callParent.apply(this,arguments);}}});})();(function()
{BaseKit.Framework_Control_Languageselector=BaseKit.Class.create({superclass:BaseKit.Framework_Control,methods:{construct:function()
{this.callParent.apply(this,arguments);},attach:function()
{this.callParent.apply(this,arguments);var that=this;if(this.addOnChangeEvent===true)
{this.controls['languageSelect'].handleEvent('onChange',function()
{that.changeLanguagePreference(that.controls['languageSelect'].getValue())});}},refreshCurrentPage:function()
{window.location.href=window.location.href;}}});})();(function()
{var marker=null;var webKitOverlay=null;var overDragHandle=false;var left=null,top=null,right=null,bottom=null,nw=null,ne=null,sw=null,se=null,borders=null;var move=null,moveHelp=null,moveDelete=null,moveEdit=null,moveMove=null,moveEnd=null,moveLock=null,moveReset=null,moveImg=null;var miniEditor=null,miniEditorTip=null;var proxy=null;var setRegion={};var deltaX=0,deltaY=0;var inner=null;var outer=null;var startCoords=null;var currentCoords=null;var resizeTimeout=null;var saveTimeout=null;var parentColumn=null;var widgetObjectCache=[]
var miniEditorAnimating=false
var settingsStateOverride=false;var contentWidgetWasActive=false;function onScroll(event,param)
{var scope=param[0],settings=param[1],settingsEnd=param[2],widget=param[3];if(!BaseKit.Element.Plugin.Wysiwyg.isActive())
{scope.settingsAlign(settings,settingsEnd,widget);}
if(scope instanceof BaseKit.Widget_Image)
{BaseKit.Framework_Control_ImagePopup.hide();}}
function createSideDropElement(side,scope)
{var el=null;el=$('<div></div>').addClass('bk-widget-side-drop-'+side+' '+scope.makeClass('side-drop-'+side)).css('opacity',0.4).appendTo(scope.$());return el;}
function createBorder(side)
{var handle=$('<div></div>').addClass('bk-widget-border-'+side+' prevent-select');return handle;}
function createDragHandle(direction)
{var handle=$('<div></div>').addClass('bk-widget-drag-handle prevent-select');var sides=[],cursor='default';switch(direction)
{case'left':case'right':sides.push(direction);cursor='col-resize';break;case'top':case'bottom':sides.push(direction);cursor='row-resize';break;case'nw':sides.push('left');sides.push('top');cursor='nw-resize';break;case'ne':sides.push('right');sides.push('top');cursor='ne-resize';break;case'se':sides.push('bottom');sides.push('right');cursor='se-resize';break;case'sw':sides.push('bottom');sides.push('left');cursor='sw-resize';break;}
handle.addPlugin('drag',{clone:false,custom:true,onDragStart:function(handle,x,y,event)
{var widget=BaseKit.Editor.getSelectedWidget();if(handle&&handle.hasClass('bk-no-bottom-handle-drag'))
{return false;}
if(!overDragHandle||!widget||widget===null)
{BaseKit.DragDrop.cancelDrag(event);return;}
widget.onResizeDragStart(handle,sides,x,y,event);if(event.originalEvent.stopPropagation)
{event.originalEvent.stopPropagation();event.originalEvent.preventDefault();}
else
{return false;}},onDragMove:function(handle,x,y,event)
{if(handle&&handle.hasClass('bk-no-bottom-handle-drag'))
{return false;}
var widget=BaseKit.Editor.getSelectedWidget();if(widget&&widget!==null)
{widget.onResizeDragMove(handle,sides,x,y,event);}
if(event.originalEvent.stopPropagation)
{event.originalEvent.stopPropagation();event.originalEvent.preventDefault();}
else
{return false;}},onDragFinish:function(handle,x,y)
{var widget=BaseKit.Editor.getSelectedWidget();if(widget&&widget!==null)
{widget.onResizeDragFinish(handle,sides,x,y);}}});handle.mousedown(function(event)
{if(sides.length==1&&sides[0]=='bottom')
{var widget=BaseKit.Editor.getSelectedWidget(),message=widget.t("widget-height-tooltip");if(message==undefined)
{var check=widget.parent;while(check!=null&&check.exportedStrings!==undefined)
{if(check.exportedStrings['widget-height-tooltip'])
{message=check.exportedStrings['widget-height-tooltip'];break;}
check=check.parent;}}
if(widget['_autoHeight']==true||widget['__name']=='image')
{BaseKit.Framework_Page.showTooltip({'message':message,'element':bottom,'align':'bl','timeout':3000,'group':'first_run','callback':BaseKit.Framework_Page.setToolTipOptions});}}});handle.mousemove(function(event)
{if(!BaseKit.Framework_Page.isDoing('widget-resize'))
{if(sides.length>1)
{overDragHandle=true;handle.css("cursor",cursor);}
else
{var region=handle.getRegion(false,true),horizontal=(sides[0]=='left'||sides[0]=='right');var pos=horizontal?(event.pageY-region.top):(event.pageX-region.left),middle=horizontal?(region.bottom-region.top)>>1:(region.right-region.left)>>1;if(pos>=(middle-8)&&pos<=(middle+8))
{overDragHandle=true;handle.css("cursor",cursor);}
else
{overDragHandle=false;handle.css("cursor","default");}}}});return handle;}
function createDragHandles()
{borders=[createBorder("left"),createBorder("top"),createBorder("right"),createBorder("bottom")];left=createDragHandle("left");top=createDragHandle("top");right=createDragHandle("right");bottom=createDragHandle("bottom");ne=createDragHandle("ne");nw=createDragHandle("nw");se=createDragHandle("se");sw=createDragHandle("sw");}
function createPopup()
{move=$('<div></div>').addClass('bk-widget-move prevent-select');moveImg=$("<div></div>").addClass("bk-widget-move-icon bk-widget-move-img prevent-select prevent-self-click").appendTo(move);moveImg.click(function(event)
{var widget=BaseKit.Editor.getSelectedWidget();if(widget&&widget!==null&&typeof widget.showPopup=="function")
{widget.showPopup();}});moveEdit=$('<div></div>').addClass('bk-widget-move-icon bk-widget-move-edit prevent-select').appendTo(move);moveEdit.click(function(event)
{event.stopPropagation();event.preventDefault();var widget=BaseKit.Editor.getSelectedWidget();if(widget&&widget!==null&&widget instanceof BaseKit.Widget_Content)
{widget.showMiniEditor();}
else if(widget&&widget!==null&&widget instanceof BaseKit.Widget_Slideshow)
{widget.showPopup();}
else if(widget&&widget!==null&&typeof widget.showSettingsPanel=='function')
{widget.showSettingsPanel();}
else
{BaseKit.Editor.toggleFooter('settings');}});moveLock=$('<div></div>').addClass('bk-widget-move-icon bk-widget-move-lock prevent-select').appendTo(move);moveLock.click(function(event)
{var widget=BaseKit.Editor.getSelectedWidget();if(widget&&widget!==null)
{var libraryItem=widget.getAscendentInstanceOf(BaseKit.Widget_LibraryItem),locked=true;if(libraryItem===null&&widget._lockable)
{locked=widget.toggleLock();}
else
{locked=libraryItem.toggleLock();BaseKit.Editor.selectWidget(libraryItem);}
if(locked)
{moveLock.addClass("locked");}
else
{moveLock.removeClass("locked");}}});moveReset=$("<div></div>").addClass("bk-widget-move-icon bk-widget-move-reset prevent-select").appendTo(move);moveReset.click(function(event)
{var widget=BaseKit.Editor.getSelectedWidget();if(widget&&widget!==null&&typeof widget.resetDimensions=="function")
{widget.callEditor("resetDimensions");widget.getRoot().autoSave();positionDragHandles(widget);}});moveMove=$('<div></div>').addClass('bk-widget-move-icon bk-widget-move-move prevent-select').appendTo(move);moveDelete=$('<div></div>').addClass('bk-widget-move-icon bk-widget-move-delete prevent-select').appendTo(move);moveDelete.click(function(event)
{var editor=BaseKit.Editor.get(),footer=editor.footers['panel1'].controls['settings'];footer.deleteWidget(false,null,false);event.stopPropagation();event.preventDefault();});moveEnd=$('<div></div>').addClass('bk-widget-move-end prevent-select').appendTo(move);var widget=null,opacity=1,previousParent=null,widgetBeforeName=null;moveMove.setup({interact:['widget'],plugins:{drag:{clone:false,custom:true,onDragStart:function(drag,x,y,event)
{BaseKit.Element.Plugin.Wysiwyg.stop(true);widget=BaseKit.Editor.getSelectedWidget();if(!widget||widget===null)
{BaseKit.DragDrop.cancelDrag(event);}
if(widget||widget!==null)
{widget.onEnterMoveMode();previousParent=widget.parent;widgetBeforeName=widget.__name;if(widget instanceof BaseKit.Widget_Content)
{if(BaseKit.Element.Plugin.Wysiwyg.getCanMove()==false)
{if(typeof widget.onMoveStart=='function')
{widget.onMoveStart();}
BaseKit.DragDrop.cancelDrag(event);return;}}
else
{if(typeof widget.onMoveStart=='function')
{widget.onMoveStart();}}
moveMove.data('data',{type:'widget',value:widget.id});var el=widget.$();opacity=el.css("opacity");el.css("opacity",0.7);var region=widget.$("content").getRegion(false,true);var width=(region.right-region.left),height=(region.bottom-region.top);proxy.css("width",width+'px');proxy.css("height",height+'px');proxy.css("left",(x-10)+'px');proxy.css("top",(y-5)+'px');proxy.show();BaseKit.Framework_Page.startDoing("widget-resize");}},onDragMove:function(drag,x,y)
{proxy.css("left",(x-10)+'px');proxy.css("top",(y-5)+'px');},onDragFinish:function(drag)
{if(widget!==null)
{var el=widget.$();el.css("opacity",opacity||1);proxy.hide();BaseKit.Framework_Page.finishDoing("widget-resize");if(previousParent!=null&&previousParent!=undefined&&previousParent instanceof BaseKit.Widget_Columns_Column)
{var columnCountReturnValues=previousParent.parent.countColumns(previousParent.parent.columns);var numberOfColumns=columnCountReturnValues.numberOfColumn;if(previousParent.neverEmpty==true&&previousParent.isEmpty())
{if((previousParent.parent.topLevel===false&&numberOfColumns>=1&&previousParent.neverEmpty==true))
{previousParent.parent.onColumnEmpty(previousParent,true,null,widget,previousParent,widgetBeforeName);}
else
{previousParent.onResize();}}
else
{previousParent.onResize();}}
else if(typeof previousParent.onResize=='function')
{previousParent.onResize();if(previousParent instanceof BaseKit.Framework_Control_Row)
{previousParent.forceMinHeight();}}
if(widget.parent!=null&&widget.parent!=undefined&&typeof widget.parent.onResize=='function')
{widget.parent.onResize();}
widget.onResize();if(typeof widget.onMoveFinish=='function')
{widget.onMoveFinish();}
widget.settingsAlign(move,moveEnd,widget.$('content'));}}}}});}
function dragStart()
{BaseKit.Editor.populateCoords();move.hide();if(miniEditor!==null)
{miniEditor.hide();}
BaseKit.Element.Plugin.Wysiwyg.stop(true);BaseKit.DragDrop.disableProcessing();BaseKit.Framework_Page.startDoing("widget-resize");BaseKit.Framework_Page.hideTooltip(true);}
function dragFinish()
{BaseKit.Editor.hideHorizontalGuide();BaseKit.Editor.hideVerticalGuide();BaseKit.Framework_Page.finishDoing("widget-resize");BaseKit.DragDrop.enableProcessing();if(BaseKit.Browser.webKit)
{BaseKit.Framework_Widget.removeWebKitOverlay();}
move.show();}
function positionDragHandles(widget)
{if(!BaseKit.Framework_Page.isMode(['dashboard'])&&widget!==undefined)
{var editor=$("#page-primary__editorBKprimary"),region=widget.$("content").getRegion(false,true);if(region===null)
{return;}
var editorOffset=editor.offset(),editorMargin=parseInt(editor.css("margin-left"));region.left-=editorMargin;region.right-=editorMargin;region.top+=editor.scrollTop()-editorOffset.top;region.bottom+=editor.scrollTop()-editorOffset.top;left.css({left:(region.left-8)+"px",top:(((region.top+region.bottom)>>1)-5)+"px"});top.css({left:((region.left+region.right-5)>>1)+"px",top:(region.top-8)+"px"});right.css({left:(region.right-2)+"px",top:(((region.top+region.bottom)>>1)-5)+"px"});bottom.css({left:(((region.left+region.right)>>1)-5)+"px",top:(region.bottom-2)+"px"});nw.css({left:(region.left-8)+"px",top:(region.top-8)+"px"});ne.css({left:(region.right-2)+"px",top:(region.top-8)+"px"});sw.css({left:(region.left-8)+"px",top:(region.bottom-2)+"px"});se.css({left:(region.right-2)+"px",top:(region.bottom-2)+"px"});if(widget['_autoHeight'])
{bottom.addClass('bk-no-bottom-handle-drag');}
else
{bottom.removeClass('bk-no-bottom-handle-drag');}}}
var direction=null;BaseKit.Framework_Widget=BaseKit.Class.create({superclass:BaseKit.Framework_Control,globals:{minimumWidth:10,minimumHeight:10,getWebKitOverlay:function()
{return webKitOverlay;},hideMarker:function(dontRecurse)
{if(marker!=null&&typeof marker.length=='number')
{marker.detach();}
if(!dontRecurse)
{BaseKit.Framework_Form.removeMarker(true);}},startUp:function()
{if(!webKitOverlay||webKitOverlay===null)
{webKitOverlay=$('<div></div>').attr('id','webkit-widget-overlay').css({position:'absolute',top:10,bottom:10,left:10,right:10,zIndex:99999});}
if(proxy==null&&(BaseKit.Framework_Page.isMode(['edit','preview','themeselector','admin'])))
{proxy=$('<div></div>').addClass('bk-widget-drag-proxy hidden').css('opacity',0.7).appendTo(document.body);}
$(window).resize(function()
{var widget=BaseKit.Editor.getSelectedWidget();if(widget!==null)
{positionDragHandles(widget);}});},setupWidgetHandles:function()
{if(left===null||top===null||right===null||bottom===null||nw===null||ne===null)
{createDragHandles();createPopup();}},removeWebKitOverlay:function()
{if(webKitOverlay!==null&&webKitOverlay.length&&webKitOverlay.parent().length)
{webKitOverlay.detach();}},forceSettingsAlign:function(scope,contentEl,show)
{if(settingsStateOverride)
{return;}
if(show)
{move.show();}
if(scope!==null&&typeof scope.settingsAlign=="function")
{scope.settingsAlign(move,moveEnd,contentEl);}},resetSettingsStateOverride:function()
{settingsStateOverride=false;},proxyDragMove:function(that,drop,drag,x,y)
{var li=that.getAscendentInstanceOf(BaseKit.Widget_LibraryItem),liSwitch=null;if(li!==null&&typeof li.locked!="undefined"&&li.locked)
{liSwitch=that;that=li;}
var data=drag.data('data');if(data.value=='widget.image'&&that&&that instanceof BaseKit.Widget_Content&&that.editing==true)
{return;}
if(data.type.substr(0,6)!="class."&&data.value==that.id)
{BaseKit.Framework_Widget.hideMarker();return;}
var firstInColumn=false,lastInColumn=false;if(that.parent instanceof BaseKit.Widget_Columns_Column&&that.parent.parent instanceof BaseKit.Widget_Columns&&that.parent.parent.topLevel!==true)
{var widgets=that.parent.widgets,first=null,last=null;for(var name in widgets)
{var widget=widgets[name];if(first===null)
{first=widget;}
last=widget;}
if(first.__name==that.__name)
{firstInColumn=true;}
if(last.__name==that.__name)
{lastInColumn=true;}}
var region=that.$().getRegion(false,true),halfHeight=(region.bottom-region.top)>>1,quarterHeight=halfHeight>>1,middle=region.top+halfHeight,topLimit=region.top+quarterHeight,bottomLimit=region.bottom-quarterHeight;if(firstInColumn&&y<topLimit)
{direction="upup";}
else if(lastInColumn&&y>bottomLimit)
{direction="downdown";}
else
{direction=(y<middle)?"up":"down";}
that.showMarker(direction);BaseKit.Framework_Form.removeMarker(true);if(liSwitch!==null)
{that=liSwitch;}},proxyDragDrop:function(that,drop,drag,x,y)
{BaseKit.Framework_Widget.hideMarker();var before=null;var data=drag.data('data');if(data.value=='widget.image'&&that&&that instanceof BaseKit.Widget_Content&&that.editing==true)
{var src=data.src.replace(window.location.protocol+'//'+window.location.hostname+'/','/');that.insertImage(data.name,src,data.width,data.height);return;}
var li=that.getAscendentInstanceOf(BaseKit.Widget_LibraryItem),liSwitch=null;if(li!==null&&typeof li.locked!="undefined"&&li.locked)
{liSwitch=that;that=li;}
switch(direction)
{case"upup":var column=null
if(!(that.parent.parent.parent instanceof BaseKit.Framework_Control_Row))
{column=that.parent.parent.parent;}
else
{column=that.parent;}
column.dropWidget(drag.getData(),that.parent.parent.id);break;case"downdown":var next=that.parent.parent.$().next();var column=null
if(!(that.parent.parent.parent instanceof BaseKit.Framework_Control_Row))
{column=that.parent.parent.parent;}
else
{column=that.parent;}
column.dropWidget(drag.getData(),(next&&typeof next.get(0)!='undefined'&&typeof next.get(0).id!="undefined")?next.get(0).id:null);break;case"up":that.parent.dropWidget(drag.getData(),that.id);break;case"down":var next=that.$().next();that.parent.dropWidget(drag.getData(),(next&&typeof next.get(0)!='undefined'&&next.get(0)!=null&&typeof next.get(0).id!="undefined")?next.get(0).id:null);break;}
if(liSwitch!==null)
{that=liSwitch;}},positionDragHandles:function(scope)
{positionDragHandles(scope);},hidePopup:function()
{if(move!==null&&move.length)
{move.hide();}}},methods:{construct:function()
{this.callParent.apply(this,arguments);this.inner=null;this.outer=null;this.leftSideDrop=null;this.rightSideDrop=null;},getDragHandleCorners:function(corner)
{switch(corner)
{case'left':return left;break;case'right':return right;break;case'top':return top;break;case'bottom':return bottom;break;case'ne':return ne;break;case'nw':return nw;break;case'sw':return sw;break;case'se':return se;break;}
return null;},getMovePanel:function(type)
{switch(type)
{case'help':return moveHelp;case'delete':return moveDelete;case'edit':return(this._hasSettings)?moveEdit:null;case'move':return moveMove;case'lock':return moveLock;case"reset":return moveReset;case"img":case"image":return moveImg;}
return move;},attach:function()
{this.callParent.apply(this,arguments);if(this['class']==='widget-columns')
{moveMove.attr('title',this.t("widget-move"));moveEdit.attr('title',this.t("widget-edit"));moveDelete.attr('title',this.t("widget-delete"));moveLock.attr('title',this.t("widget-lock"));moveReset.attr('title',this.t("widget-reset"));moveImg.attr('title',this.t("widget-img"));}
var region=this.$().getRegion(false,true);if(region!=null)
{this.__height=region.bottom-region.top;}
if(BaseKit.Framework_Page.isMode(['edit','preview','themeselector','admin']))
{var that=this;if(this.__unselectable!==true)
{if(this._sizeToolTip&&this.tooltip)
{this.createToolTip();}
if(marker===null)
{marker=$('<div></div>').addClass('bk-widget-marker').css('opacity',0.5);}
this._marker=marker;var direction=null;if(this.$('mask').length>0)
{this.$('mask').remove();this.clicker=null;}
var clicker=$('<div></div>').addClass(this.makeClass('mask')+' bk-widget-mask'+(BaseKit.Framework_Page.isMode(['preview','themeselector'])?' hidden':'')).appendTo(this.$('content'));this.clicker=clicker;this.clicker.dblclick(function()
{if(that._hasSettings)
{if(that instanceof BaseKit.Widget_Content)
{that.showMiniEditor();}
else if(that instanceof BaseKit.Widget_Image||that instanceof BaseKit.Widget_Slideshow)
{that.showPopup();}
else if(typeof that.showSettingsPanel=='function')
{that.showSettingsPanel();}
else
{BaseKit.Editor.toggleFooter('settings');}}});this.addClickerDragPlugin(this.clicker);createSideDropElement('left',this);createSideDropElement('right',this);this.applySideDropPlugin(this.$('side-drop-left'),'left');this.applySideDropPlugin(this.$('side-drop-right'),'right');this.$().setup({interact:["widget","class.widget","class.formWidget"],data:{type:"widget",value:this.id},plugins:{drop:{onDragExit:function()
{BaseKit.Framework_Widget.hideMarker();},onDragMove:function(drop,drag,x,y)
{BaseKit.Framework_Widget.proxyDragMove(that,drop,drag,x,y);},onDragDrop:function(drop,drag,x,y)
{BaseKit.Framework_Widget.proxyDragDrop(that,drop,drag,x,y);}}}});}}
if(BaseKit.Framework_Page.isMode(['edit']))
{var selectedWidget=BaseKit.Editor.getSelectedWidget();if(selectedWidget&&selectedWidget.id==this.id)
{BaseKit.Editor.get().reselectWidget(this.id);}}
if(this.__customButtons)
{$(this.__customButtons).each(function(index,elem){if(move.children('.'+elem.className).length==0)
{var domEl=$('<div>').addClass(elem.className).addClass('bk-widget-move-icon').attr('title',elem.title).click(elem.click);move.prepend(domEl);}});}},createToolTip:function()
{this.tooltip=$('<div></div>').addClass('bk-widget-tooltip').html(this.$('content').width()+'&nbsp;x&nbsp;'+this.$('content').height()+' px').css('opacity',0.8).appendTo(this.$('content'));},addClickerDragPlugin:function(clicker)
{var that=this;clicker.addPlugin('drag',{clone:false,custom:true,enabled:false,onDragStart:function(handle,x,y,event)
{that.onPositionDragStart(x,y);},onDragMove:function(handle,x,y,event)
{that.onPositionDragMove(x,y);},onDragFinish:function(handle,x,y)
{that.onPositionDragFinish(x,y);}});},applySideDropPlugin:function(sideElement,side)
{var that=this;var interactWith='widget,formWidget';var interacts=[],tmp=interactWith.split(',');tmp.each(function(name)
{interacts.push(name);interacts.push("class."+name);});sideElement.data('side',side);sideElement.setup({interact:interacts,plugins:{drop:{onDragMove:function(drop,drag,x,y,xx,yy)
{var li=that.getAscendentInstanceOf(BaseKit.Widget_LibraryItem),liSwitch=null;if(li!==null&&typeof li.locked!="undefined"&&li.locked)
{this.removeClass("show-background");BaseKit.Framework_Widget.proxyDragMove(that,drop,drag,x,y);return;}
var dragData=drag.data();if(typeof dragData.data=='object'&&dragData.data.value!=null)
{if(dragData.data.value==that.id)
{return;}
var movingWidget=$bk(dragData.data.value);if(dragData.data.type.substr(0,6)!="class."&&movingWidget.parent.parent instanceof BaseKit.Widget_Columns&&movingWidget.parent.parent.topLevel==false)
{return;}}
if(parseInt(this.width())>=50)
{this.addClass('show-background');}},onDragExit:function()
{this.removeClass('show-background');},onDragDrop:function(drop,drag,x,y,xx,yy)
{var li=that.getAscendentInstanceOf(BaseKit.Widget_LibraryItem);if(li!==null&&typeof li.locked!="undefined"&&li.locked)
{BaseKit.Framework_Widget.proxyDragDrop(that,drop,drag,x,y);return;}
var sideWidth=drop.width();var dragData=drag.data();var data=drop.data(),side=data.side;var editor=BaseKit.Editor.get();if(typeof dragData.data=='object'&&dragData.data.value!=null)
{if(dragData.data.value==that.id)
{return;}
var movingWidget=$bk(dragData.data.value);if(dragData.data.type.substr(0,6)!="class."&&movingWidget.parent.parent instanceof BaseKit.Widget_Columns&&movingWidget.parent.parent.topLevel==false)
{return;}}
if(sideWidth<50)
{BaseKit.Framework_Page.confirm(editor.t("space-to-small"),function(){});return;}
var region=that.$().getRegion();var widgetWidthWithoutPadding=region.right-region.left-sideWidth;var check=that;while(check!=null&&!(check instanceof BaseKit.Framework_Page))
{if(check instanceof BaseKit.Widget_Columns)
{var columnInfo=check.countColumns(check.columns,null)
if(columnInfo.numberOfColumn>=6)
{BaseKit.Framework_Page.confirm(editor.t("column-limit-reached"),function(){});return;}}
check=check.parent;}
drag._offset=(side=="left")?(xx-region.left):(region.right-xx);if(that instanceof BaseKit.Widget_Columns)
{that.createColumnOnSide(side,drag,sideWidth,widgetWidthWithoutPadding);}
else
{that.dropWidgetOnSide(side,drag,sideWidth,widgetWidthWithoutPadding);}}}}});return sideElement;},showMarker:function(direction)
{$('#bk-form-marker').hide();switch(direction)
{case'upup':this.parent.parent.showMarker('up');break;case'downdown':this.parent.parent.showMarker('down');break;case'up':this._marker.insertBefore(this.$());break;case'down':this._marker.insertAfter(this.$());break;}},onEnterPreviewMode:function()
{if(BaseKit.Framework_Page.isMode(['preview','themeselector']))
{this.__unselectable=true;if(this.$('overlay').length)
{this.$('overlay').hide();}
this.hideMask();}},onExitPreviewMode:function()
{if(BaseKit.Framework_Page.isMode(['edit']))
{this.__unselectable=false;if(this.$('overlay').length)
{this.$('overlay').show();}
this.showMask();}},showMask:function(dontBubble)
{if(typeof this.clicker!="undefined"&&this.clicker.length)
{this.clicker.show();if(!dontBubble)
{this.bubble('showMask');}}},hideMask:function(dontBubble)
{if(typeof this.clicker!="undefined"&&this.clicker.length)
{this.clicker.hide();if(!dontBubble)
{this.bubble('hideMask');}}},destroy:function(dontDestroyChildren)
{if(typeof this.clicker!="undefined"&&this.clicker.length)
{this.clicker.remove();}
var parent=null;if(this.parent!=null&&this.parent!='undefined')
{parent=this.parent;this.callParent.apply(this,arguments);}
if(parent&&typeof parent.reset=="function")
{parent.reset();}},onSelect:function()
{var widget=BaseKit.Editor.getSelectedWidget();var check=this.parent;while(check!=null&&!(check instanceof BaseKit.Framework_Page))
{if(check instanceof BaseKit.Widget_Columns_Column||check instanceof BaseKit.Widget_Carousel_Page)
{if(check.$().length)
{this.parentZindex=check.$().css('zIndex');check.$().css('zIndex','100');}}
check=check.parent;}
this.$().css("zIndex",4);if(this._sizeToolTip&&this.tooltip!=undefined&&this.tooltip.length>0)
{this.tooltip.css("display","none");}
if(this.getRoot().primary!=undefined)
{if(widget._tabs!==null)
{var data={};if(widget instanceof BaseKit.Widget_Content)
{var tab=BaseKit.Framework_Control_TabPanel.getCurrentTab();if(tab!==null)
{if(!widget._tabs.contains(tab.__name)||tab.__name=='styleeditor')
{BaseKit.Editor.CloseFooter();}}}
else
{var toolbar=this.getRoot().primary.editor.footers['panel1'].controls['settings'];toolbar.buildSettingsBar(widget);BaseKit.Framework_Control_TabPanel.loadTabs(widget._tabs);}}}
this.insertDragHandles();this.bubble('hideMask');move.css("zIndex","999999999");},onUnselect:function()
{var widget=BaseKit.Editor.getSelectedWidget();var check=this.parent;while(check!=null&&!(check instanceof BaseKit.Framework_Page))
{if(check instanceof BaseKit.Widget_Columns_Column||check instanceof BaseKit.Widget_Carousel_Page)
{if(this.parentZindex>0)
{check.$().css('zIndex',this.parentZindex);}
else
{check.$().css('zIndex','6');}}
check=check.parent;}
this.$().css("zIndex",3);var toolbar=this.getRoot().primary.editor.footers['panel1'].controls['settings'];toolbar.hideSettingsBar();this.hideMiniEditor(true);this.bubble('showMask');},showSizeToolTip:function()
{if(BaseKit.Framework_Page.isMode(['edit']))
{if(this._sizeToolTip)
{if(this.tooltip==null)
{this.tooltip=$('<div></div>').addClass('bk-widget-tooltip').html(parseInt(this.$('content').width())+'&nbsp;x&nbsp;'+parseInt(this.$('content').height())+' px').css('opacity',0.8).appendTo(this.$('content'));}
this.tooltip.css("display","block");}}},hideSizeToolTip:function()
{if(BaseKit.Framework_Page.isMode(['edit']))
{if(this._sizeToolTip&&this.tooltip!=undefined)
{this.tooltip.css("display","none");}}},updatePositionToolTip:function(left,top)
{this.tooltip.html('top: '+Math.ceil(top)+'px<br>left: '+Math.ceil(left)+' px');},updateSizeToolTip:function(width,height)
{if(BaseKit.Framework_Page.isMode(['edit'])&&this._sizeToolTip&&this.tooltip!=null)
{if(width===null||!width||height===null||!height)
{var region=this.$("content").getRegion(false,true);if(!region||region===null)
{this.hideSizeToolTip();return;}
width=region.right-region.left;height=region.bottom-region.top;}
this.tooltip.html(width+'&nbsp;&nbsp;x&nbsp;&nbsp;'+height+' pixels');}},onResize:function()
{var that=this;this.cacheRegions();var unit=(typeof this._usePixels!="undefined"&&this._usePixels===true)?"px":"%";this.updateSideDrop('left',this._paddingLeft+unit);this.updateSideDrop('right',this._paddingRight+unit);clearTimeout(resizeTimeout);resizeTimeout=setTimeout(function()
{clearTimeout(resizeTimeout);var check=that.parent;while(check!=null&&!(check instanceof BaseKit.Framework_Page))
{if(check instanceof BaseKit.Widget_Carousel)
{check.onFinishMove();}
check=check.parent;}},500);if(BaseKit.Framework_Page.isMode(['edit']))
{var selectedWidget=BaseKit.Editor.getSelectedWidget();if(selectedWidget!==null&&selectedWidget.id==this.id)
{positionDragHandles(this);}}},setRegion:function(left,top,right,bottom,height,cache,sides,dontResize)
{var el=this.$(),region=cache||el.getRegion(false,true);if(region===null)
{el=$('#'+this.id);region=el.getRegion(false,true);}
if(region===null)
{return;}
var width=region.right-region.left;var contentEl=(this.$('content')!==null)?this.$('content'):this.$();sides=sides||['left','top','right','bottom'];var innerWidth=width-left-right;if(innerWidth<BaseKit.Framework_Widget.minimumWidth)
{if(sides.contains('right'))
{right-=(BaseKit.Framework_Widget.minimumWidth-innerWidth+1);}
else
{left-=(BaseKit.Framework_Widget.minimumWidth-innerWidth);}
innerWidth=BaseKit.Framework_Widget.minimumWidth;}
bottom=0;var totalHeight=(this._paddingTop||0)+(this._innerHeight||0);var paddingLeft=0,paddingRight=0,paddingTop=sides.contains('top')?(top||0):(this._paddingTop||0);if(typeof this._usePixels!="undefined"&&this._usePixels===true)
{paddingLeft=sides.contains('left')?left:(this._paddingLeft||0);paddingRight=sides.contains('right')?right:(this._paddingRight||0);}
else
{paddingLeft=sides.contains('left')?parseFloat((100*left/width).toFixed(10)):(this._paddingLeft||0);paddingRight=sides.contains('right')?parseFloat((100*right/width).toFixed(10)):(this._paddingRight||0)}
if(!this._autoHeight&&height!==null&&height>0)
{if(sides.contains('top')&&!sides.contains('bottom'))
{height=totalHeight-paddingTop;}
height=Math.max(height,BaseKit.Framework_Widget.minimumHeight);if(contentEl!=null)
{contentEl.css("height",height+"px");}
this._innerHeight=height;}
else
{this._innerHeight=contentEl.offsetHeight;}
if(typeof this._usePixels!="undefined"&&this._usePixels===true)
{el.css('padding',paddingTop+'px '+paddingRight+'px '+bottom+'px '+paddingLeft+'px');}
else
{el.css('padding',paddingTop+'px '+paddingRight+'% '+bottom+'px '+paddingLeft+'%');}
this._paddingLeft=paddingLeft;this._paddingTop=paddingTop;this._paddingRight=paddingRight;this._paddingBottom=bottom;if(!dontResize&&typeof this.onResize=='function')
{this.onResize(sides);}
if(BaseKit.Browser.webKit&&webKitOverlay&&webKitOverlay!==null)
{BaseKit.Framework_Widget.removeWebKitOverlay();contentEl.append(webKitOverlay);}
this.updateSizeToolTip(innerWidth,this._innerHeight);if(!BaseKit.Framework_Page.isMode(['normal']))
{this.delayedSave();}},setPosition:function(left,top,cache,key)
{var el=this.$(),region=cache||el.getRegion(false,true),totalWidth=region.right-region.left;var usePixels=(typeof this._usePixels!="undefined"&&this._usePixels===true);var prevLeft=usePixels?parseFloat(this._paddingLeft):Math.round(this._paddingLeft*totalWidth/100),prevRight=usePixels?parseFloat(this._paddingRight):Math.round(this._paddingRight*totalWidth/100),maxHorizPadding=prevLeft+prevRight,prevWidth=totalWidth-maxHorizPadding;left=Math.min(Math.max(left,0),maxHorizPadding);var right=totalWidth-left-prevWidth;if(BaseKit.Browser.chrome||BaseKit.Browser.safari||BaseKit.Browser.ie)
{switch(key)
{case"up":var dir=['top'];break;case"down":var dir=['top'];break;case"left":var dir=['left','right'];break;case"right":var dir=['right','left'];break;}}
this.setRegion(left,top,right,0,this._innerHeight,cache,dir);},setHeight:function(height,cache,dontCallOnResize,allSides)
{if(this._autoHeight)
{return;}
var el=this.$(),region=cache||el.getRegion(false,true);this.$("content").css("height",height+"px");this._innerHeight=height;if(!dontCallOnResize)
{this.onResize(allSides);}
this.updateSizeToolTip();},clearHeight:function(height)
{this.$("content").css("height","auto");this._innerHeight=height;this.onResize();},onMoveStart:function()
{try
{this.parent.$().css("zIndex",100);}
catch(e){}},onMoveFinish:function()
{try
{this.parent.$().css("zIndex",101);}
catch(e){}},onDelete:function()
{try
{this.parent.$().css("zIndex",100);}
catch(e){}},onEnterEditMode:function()
{if(!this.__unselectable)
{this.hideMask(true);}},onExitEditMode:function()
{if(!this.__unselectable)
{this.showMask(true);}},onEnterMoveMode:function(dontHideFooter)
{if(!dontHideFooter)
{var editor=BaseKit.Editor.get();if(editor.$("footerX").isVisible())
{editor.slideOutFooter();}}},onExitMoveMode:function()
{},queryCommandEnabled:function(command)
{return false;},execCommand:function(command,value)
{return false;},queryCommandState:function(command)
{return false;},queryCommandValue:function(command)
{return false;},insertDragHandles:function()
{var root=this.$(),content=this.$("content"),editorElement=$('#page-primary__editorBKprimary');positionDragHandles(this);content.append(borders[0],borders[1],borders[2],borders[3]);editorElement.append(move,left,right,top,bottom,ne,nw,se,sw);var moveElWidth=72;move.children().hide();move.children('.bk-widget-move-move').show();var isWithinLibraryItem=(this.getAscendentInstanceOf(BaseKit.Widget_LibraryItem)!==null);if(this._lockable||isWithinLibraryItem)
{moveLock.show();moveElWidth+=36;if(!isWithinLibraryItem&&this.locked)
{moveLock.addClass("locked");}
else
{moveLock.removeClass("locked");}}
else
{moveLock.hide();}
if(this instanceof BaseKit.Widget_Image)
{moveImg.show();moveReset.show();moveElWidth+=72;}
else
{moveImg.hide();moveReset.hide();}
if(this._protected)
{moveDelete.hide();}
else
{moveDelete.show();moveElWidth+=36;}
if(this._hasSettings)
{moveEdit.show();}
else
{moveEdit.hide();moveElWidth-=36;}
if(this.__customButtons)
{$(this.__customButtons).each(function(index,elem){move.children('.'+elem.className).show();moveElWidth+=36;});}
move.css('width',moveElWidth+'px');this.settingsAlign(move,moveEnd,content);var that=this;$('#page-primary__editorBKprimary').scroll(function(e)
{onScroll(e,[that,move,moveEnd,content]);});if(this.clicker.getPlugin('drag')==null)
{this.addClickerDragPlugin(this.clicker);}
this.clicker.getPlugin('drag').enable();},showMiniEditor:function()
{if(miniEditorAnimating==true||settingsStateOverride==true)
{return;}
BaseKit.Framework_Page.hideTooltip(true);var editor=BaseKit.Editor.get();if(editor.controls['miniEditor']&&miniEditor==null)
{miniEditor=editor.controls['miniEditor'].$().detach();miniEditor.prependTo($('#page-primary__editorBKprimary'));miniEditorTip=miniEditor.find('.framework-control-mini-editor-end');}
var widget=BaseKit.Editor.getSelectedWidget();if(widget&&widget!==null&&widget instanceof BaseKit.Widget_Content&&miniEditor!==null)
{var region=widget.$('content').getRegion(false,true),viewportRegion=$('#page-primary__editorBKprimary').getRegion(false,true);if(region==null)
{region=$('#'+widget.id).getRegion(false,true);}
if(region==null)
{return;}
var deltaTop=region.top-viewportRegion.top,deltaBottom=viewportRegion.bottom-region.bottom,dontOverlap=(this instanceof BaseKit.Widget_Content&&this.isEditing()),scrollTop=$('#page-primary__editorBKprimary').scrollTop(),marginLeft=parseInt($('#page-primary__editorBKprimary').css('marginLeft'));var widgetHeight=region.bottom-region.top;var widgetWidth=region.right-region.left;var leftCSS=(region.left-marginLeft-30);var alignRight=false;var miniSettingsWidth=521;if((leftCSS+miniSettingsWidth)>$('#page-primary__editorBKprimary').width())
{leftCSS-=parseInt(miniSettingsWidth-widgetWidth+30);alignRight=true;}
if((dontOverlap&&deltaBottom<deltaTop)||deltaTop>64)
{miniEditor.replaceClass('bk-move-bottom','bk-move-top');miniEditorTip.replaceClass('bk-widget-move-end-bottom','bk-widget-move-end-top');miniEditor.css({top:(deltaTop+scrollTop-67)+'px',left:leftCSS+'px',bottom:'auto'});(alignRight==true)?miniEditorTip.addClass('bk-end-right'):miniEditorTip.removeClass('bk-end-right');}
else if(dontOverlap||deltaBottom>75)
{miniEditor.replaceClass('bk-move-top','bk-move-bottom');miniEditorTip.replaceClass('bk-widget-move-end-top','bk-widget-move-end-bottom');miniEditor.css({top:(deltaTop+widgetHeight+scrollTop)+'px',left:leftCSS+'px',bottom:'auto'});(alignRight==true)?miniEditorTip.addClass('bk-end-right'):miniEditorTip.removeClass('bk-end-right');}
else
{miniEditor.replaceClass('bk-move-bottom','bk-move-top');miniEditorTip.replaceClass('bk-widget-move-end-bottom','bk-widget-move-end-top');miniEditor.css({top:scrollTop+'px',left:leftCSS+'px',bottom:'auto'});(alignRight==true)?miniEditorTip.addClass('bk-end-right'):miniEditorTip.removeClass('bk-end-right');}
move.hide();miniEditorAnimating=true;widget.onExitMoveMode();widget.onEnterEditMode();miniEditor.fadeIn(250,function()
{miniEditorAnimating=false;var editor=BaseKit.Editor.get();editor.widgetMode='edit';if(typeof editor.controls['miniEditor'].onSelect=='function')
{editor.controls['miniEditor'].onSelect();}});}},toggleMiniEditorWhenFooterShowing:function(toggle)
{if(miniEditor==null)
{return;}
if(toggle=='hide')
{settingsStateOverride=true;miniEditor.fadeOut(250);move.hide();}
else if(toggle=='show')
{miniEditor.fadeIn('slow',function()
{settingsStateOverride=false;});}},hideMiniEditor:function(showSettingsBar,forceStop)
{if(settingsStateOverride==true)
{return;}
var that=this;if(miniEditor!==null)
{var editor=BaseKit.Editor.get();if(editor.widgetMode=='edit')
{that.onExitEditMode();that.onEnterMoveMode();}
if(forceStop===true)
{miniEditor.stop(true,true);miniEditorAnimating=false;}
if(miniEditorAnimating==true)
{return;}
miniEditorAnimating=true;miniEditor.fadeOut(250,function()
{miniEditorAnimating=false;var ed=that.getRoot().primary.editor.controls['miniEditor'];if(typeof ed.onUnselect=='function')
{ed.onUnselect();}});}
if(showSettingsBar)
{move.show();}},settingsAlign:function(settings,settingsEnd,widget,show)
{if(settings!=null&&typeof settings=='object'&&settingsStateOverride==false)
{var region=widget.getRegion(false,true),viewportRegion=$('#page-primary__editorBKprimary').getRegion(false,true);if(region===null)
{region=$('#'+widget.id).getRegion(false,true);}
if(region===null)
{return;}
var deltaTop=region.top-viewportRegion.top,deltaBottom=viewportRegion.bottom-region.bottom,dontOverlap=(this instanceof BaseKit.Widget_Content&&this.isEditing()),scrollTop=$('#page-primary__editorBKprimary').scrollTop(),marginLeft=parseInt($('#page-primary__editorBKprimary').css('marginLeft'));var widgetHeight=region.bottom-region.top;if((dontOverlap&&deltaBottom<deltaTop)||deltaTop>64)
{settings.replaceClass('bk-move-bottom','bk-move-top');settingsEnd.replaceClass('bk-widget-move-end-bottom','bk-widget-move-end-top');settings.css({top:(deltaTop+scrollTop-67)+'px',left:(region.left-marginLeft-30)+'px',bottom:'auto'});}
else if(dontOverlap||deltaBottom>75)
{settings.replaceClass('bk-move-top','bk-move-bottom');settingsEnd.replaceClass('bk-widget-move-end-top','bk-widget-move-end-bottom');settings.css({top:(deltaTop+widgetHeight+scrollTop)+'px',left:(region.left-marginLeft-30)+'px',bottom:'auto'});}
else
{settings.replaceClass('bk-move-bottom','bk-move-top');settingsEnd.replaceClass('bk-widget-move-end-bottom','bk-widget-move-end-top');settings.css({top:scrollTop+'px',left:(region.left-marginLeft-30)+'px',bottom:'auto'});}
if(show||move.isVisible())
{move.show();}}},removeDragHandles:function()
{try
{var root=this.$(),content=this.$('content'),contentEl=content.get(0),editorElement=$('#page-primary__editorBKprimary');$(".bk-widget-drag-handle").detach();contentEl.removeChild(borders[0].get(0));contentEl.removeChild(borders[1].get(0));contentEl.removeChild(borders[2].get(0));contentEl.removeChild(borders[3].get(0));editorElement.get(0).removeChild(move.get(0));$('#page-primary__editorBKprimary').unbind('scroll');}
catch(e){}
if(this.clicker.getPlugin('drag')==null)
{this.addClickerDragPlugin(this.clicker);}
this.clicker.getPlugin('drag').disable();},getRegion:function(outerRegion,innerRegion)
{var outerWidth=(!this.outer||this.outer===null)?this.$().offsetWidth:(this.outer.right-this.outer.left);var innerHeight=(!this.inner||this.inner===null)?this.$('content').offsetHeight:(this.inner.bottom-this.inner.top);var usePixels=(typeof this._usePixels!="undefined"&&this._usePixels===true);var region={left:usePixels?this._paddingLeft:Math.floor(this._paddingLeft*outerWidth/100),top:this._paddingTop,right:usePixels?this._paddingRight:Math.floor(this._paddingRight*outerWidth/100),bottom:this._paddingBottom,height:innerHeight};return region;},cacheRegions:function()
{this.outer=this.$().getRegion(false,true);this.inner=this.$("content").getRegion(false,true);},resizeColumns:function()
{var check=this.parent;while(check!=null&&!(check instanceof BaseKit.Framework_Page))
{if(check instanceof BaseKit.Widget_Columns)
{check.onResize();}
check=check.parent;}},onResizeDragStart:function(handle,sides,x,y,event)
{var check=null,that=this;if(BaseKit.Browser.ie7)
{check=this.parent;while(check!=null&&!(check instanceof BaseKit.Framework_Page))
{if(check instanceof BaseKit.Framework_Control_Slice_Column)
{parentColumn=check;}
check=check.parent;}
check=null;}
if(this instanceof BaseKit.Widget_Content&&BaseKit.Element.Plugin.Wysiwyg.isActive()==true)
{settingsStateOverride=true;contentWidgetWasActive=true;this.updateContent(this.getContents(),false);BaseKit.Element.Plugin.Wysiwyg.stop();BaseKit.Element.Plugin.Wysiwyg.lock();}
dragStart();this.cacheRegions();if(typeof this.onResizeStart=='function')
{this.onResizeStart();}
setRegion=this.getRegion(this.outer,this.inner);startCoords={left:setRegion.left,top:setRegion.top,right:setRegion.right,bottom:setRegion.bottom,height:setRegion.height};var that=this;sides.each(function(side)
{switch(side)
{case"left":deltaX=x-that.inner.left;break;case"top":deltaY=y-that.inner.top;break;case"right":deltaX=that.inner.right-x;break;case"bottom":deltaY=that.inner.bottom-y;break;}});this.showSizeToolTip();},onResizeDragFinish:function(handle,sides,x,y)
{dragFinish();handle.css("cursor","default");this.hideSizeToolTip();if(this._autoHeight&&this.inner&&this.inner!==null)
{this.clearHeight(this.inner.bottom-this.inner.top);}
if(currentCoords!==null)
{BaseKit.UndoManager.pushUndoState("widgetRegion",{widget:this,sides:sides,before:startCoords,after:currentCoords});}
if(typeof this.onResizeFinish=='function')
{this.onResizeFinish();}
this.settingsAlign(move,moveEnd,this.$('content'));if(this instanceof BaseKit.Widget_Content&&contentWidgetWasActive==true)
{BaseKit.Element.Plugin.Wysiwyg.unlock();contentWidgetWasActive=false;settingsStateOverride=false;if(typeof this.toggleMiniEditorWhenFooterShowing=='function')
{this.toggleMiniEditorWhenFooterShowing('show');}
this.forceStart();}
this.getRoot().autoSave();},updateSideDrop:function(side,value)
{switch(side)
{case'left':if(this.$('side-drop-left').length>0)
{this.$('side-drop-left').css('width',value);}
break;case'right':if(this.$('side-drop-right').length>0)
{this.$('side-drop-right').css('width',value);}
break;}},onResizeDragMove:function(handle,sides,x,y,event)
{var calculation=0,that=this;sides.each(function(side)
{switch(side)
{case"left":setRegion.left=Math.max(BaseKit.Editor.snapCoordinate(Math.max(x-deltaX,that.outer.left),true,'left',that.inner)-that.outer.left,0);break;case"right":setRegion.right=Math.max(that.outer.right-BaseKit.Editor.snapCoordinate(Math.min(x+deltaX,that.outer.right),true,'right',that.inner),0);break;case"top":if((this._autoHeight||this instanceof BaseKit.Widget_Image||this instanceof BaseKit.Widget_Profile_Image)&&sides.length>1)
{setRegion.top=Math.max(y-deltaY-that.outer.top,0);}
else
{setRegion.top=Math.max(BaseKit.Editor.snapCoordinate(Math.max(y-deltaY,that.outer.top),false,'top',that.inner)-that.outer.top,0);}
break;case"bottom":if((this._autoHeight||this instanceof BaseKit.Widget_Image||this instanceof BaseKit.Widget_Profile_Image)&&sides.length>1)
{setRegion.height=Math.max(y-deltaY-that.inner.top,0);}
else
{setRegion.height=Math.max(BaseKit.Editor.snapCoordinate(Math.max(y-deltaY,that.inner.top),false,'bottom',that.inner)-that.inner.top,0);}
break;}});this.setRegion(setRegion.left,setRegion.top,setRegion.right,setRegion.bottom,setRegion.height,this.outer,sides);currentCoords={left:setRegion.left,top:setRegion.top,right:setRegion.right,bottom:setRegion.bottom,height:setRegion.height};this.resizeColumns();positionDragHandles(this);},onPositionDragStart:function(x,y)
{BaseKit.Editor.clearTimeoutForSizeToolTip();var check=null;if(BaseKit.Browser.ie7)
{check=this.parent;while(check!=null&&!(check instanceof BaseKit.Framework_Page))
{if(check instanceof BaseKit.Framework_Control_Slice_Column)
{parentColumn=check;}
check=check.parent;}
check=null;}
dragStart();this.cacheRegions();deltaX=x-this.inner.left;deltaY=y-this.inner.top;check=this.parent;while(check!=null&&!(check instanceof BaseKit.Framework_Page))
{if(check instanceof BaseKit.Widget_Carousel)
{check.onStartMove();}
check=check.parent;}
setRegion=this.getRegion(this.outer,this.inner);startCoords={left:setRegion.left,top:setRegion.top,right:setRegion.right,bottom:setRegion.bottom,height:setRegion.height};this.showSizeToolTip();},onPositionDragFinish:function(x,y)
{dragFinish();var check=this.parent;while(check!=null&&!(check instanceof BaseKit.Framework_Page))
{if(check instanceof BaseKit.Widget_Carousel)
{check.onFinishMove();}
if(check instanceof BaseKit.Framework_Control_Row)
{check.forceMinHeight();}
check=check.parent;}
this.settingsAlign(move,moveEnd,this.$('content'));this.getRoot().autoSave();if(currentCoords!==null)
{BaseKit.UndoManager.pushUndoState("widgetRegion",{widget:this,before:startCoords,after:currentCoords});}
this.getRoot().autoSave();this.hideSizeToolTip();parentColumn=null;},onPositionDragMove:function(x,y)
{var innerWidth=this.$('content').innerWidth();x=Math.max(BaseKit.Editor.snapCoordinate(Math.min(Math.max(x-deltaX,this.outer.left),this.outer.right-innerWidth),true,null,this.inner)-this.outer.left,0);y=Math.max(BaseKit.Editor.snapCoordinate(Math.max(y-deltaY,this.outer.top),false,null,this.inner)-this.outer.top,0);this.setPosition(x,y,this.outer);setRegion=this.getRegion(this.outer,this.inner);currentCoords={left:setRegion.left,top:setRegion.top,right:setRegion.right,bottom:setRegion.bottom,height:setRegion.height};this.resizeColumns();var moveTop=this.outer.top+y;var moveLeft=this.outer.left+x;if(BaseKit.Browser.ie&&parentColumn instanceof BaseKit.Framework_Control_Slice_Column)
{parentColumn.onResize();}
positionDragHandles(this);this.updatePositionToolTip(moveLeft,moveTop);},delayedSave:function(period)
{if(saveTimeout!==null)
{clearTimeout(saveTimeout);saveTimeout=null;}
var that=this;saveTimeout=setTimeout(function()
{that.save();},period||1000);},showLoadingIndicator:function()
{$('#bk-widget-loader').remove();this._loader=$('<div/>').addClass('bk-widget-loader').attr('id','bk-widget-loader').appendTo(this.$('content'));},hideLoadingIndicator:function()
{if(this._loader&&this._loader.length)
{try
{this.$('content').get(0).remove(this._loader);}
catch(e){}}},getPadding:function()
{var padding={top:this.$().css('paddingTop'),bottom:this.$().css('paddingBottom')};if(typeof this._usePixels!="undefined"&&this._usePixels===true)
{padding.left=parseFloat(this.$().css('paddingLeft')).toFixed(2);padding.right=parseFloat(this.$().css('paddingRight')).toFixed(2);}
else
{var parentWidth=parseInt(this.parent.$().width());padding.left=parseFloat(parseFloat(100/parentWidth)*parseFloat(this.$().css('paddingLeft'))).toFixed(2);padding.right=parseFloat(parseFloat(100/parentWidth)*parseFloat(this.$().css('paddingRight'))).toFixed(2);}
return padding;},dropWidgetOnSide:function(side,drag,sideWidth,widgetWidthWithoutPadding,dontUndo,skipWidgetCreation)
{var checkingFlag=false;if(checkingFlag===true)
{console.log('In dropWidgetOnSide for Widget:'+this.id);console.log(arguments);}
if(dontUndo!==true)
{dontUndo=false;}
if(skipWidgetCreation!==true)
{skipWidgetCreation=false;}
var that=this,newColumn=null,newColumnEl=null,otherColumn=null,otherColumnEl=null,className=null,previousParent=null,parentsParent=null,newIDForMovedWidget=null,newWidgetID=null,returnWidgetID=null,columnsWidget=null,widgetRegionBefore=null,widgetHeightBefore=null,widgetRegionAfter=null,widgetHeightAfter=null;if(drag!=null)
{var data=drag.data();className=data.data.value;}
if(checkingFlag===true)
{console.log('data.data.value:'+className);}
previousParent=this.parent;parentsParent=this.parent.parent;if(checkingFlag===true)
{console.log('widget parent ID:'+previousParent.id);console.log('widget columns ID:'+parentsParent.id);}
widgetRegionBefore=this.getRegion();widgetHeightBefore=this.__height;var subColumns=false;var widgetsInParent=previousParent.widgets,minPadding=9999,padProperty=(side=="left")?"_paddingLeft":"_paddingRight";$.each(widgetsInParent,function(i,widget)
{var sideEl=widget.$('side-drop-'+side);minPadding=Math.min(minPadding,sideEl.width());});if(minPadding<50)
{subColumns=true;}
if(drag._offset>minPadding)
{subColumns=true;}
if(previousParent instanceof BaseKit.Widget_Columns_Column&&parentsParent instanceof BaseKit.Widget_Columns&&!subColumns&&parentsParent.topLevel==false)
{if(checkingFlag===true)
{console.log('Creating Another Column...');}
var newColumnName="column",widgetColumnPosition=0,numberOfColumn=0,prevColumn=null,applyToColumnEl=null,applyToColumn=null,leftMarginInPixels=0,rightMarginInPixels=0;columnsWidget=parentsParent;if(checkingFlag===true)
{console.log('for columns widget ID:'+columnsWidget.id);}
var columns=columnsWidget.columns
var countColumnsArgs=columnsWidget.countColumns(columns,this.parent);widgetColumnPosition=countColumnsArgs.widgetColumnPosition;numberOfColumn=countColumnsArgs.numberOfColumn;var lastColumn=columns['column'+numberOfColumn];if(checkingFlag===true)
{console.log('Which has '+numberOfColumn+' columns.');console.log('Widget found in column '+widgetColumnPosition);}
var clearEl=$('#'+columnsWidget.id+'BKclear');var columnID=columnsWidget.id+"-columns__column"+(numberOfColumn+1);var columnName=newColumnName+(numberOfColumn+1);if(checkingFlag===true)
{console.log('New Column Name:'+columnName);console.log('New Column ID:'+columnID);console.log([columnID,columnName,columnsWidget.id,clearEl,false,true,false,lastColumn.styleName,columnsWidget.minHeight,lastColumn.minusBorderMargin,lastColumn.type]);}
var column=this.createColumn(columnID,columnName,columnsWidget.id,clearEl,false,true,false,lastColumn.styleName,columnsWidget.minHeight,lastColumn.minusBorderMargin,lastColumn.type);BaseKit.Editor.selectWidget(null);this.registerColumn(columnName,lastColumn.styleName);if(lastColumn.resizer!=null)
{lastColumn.resizer.show();}
applyToColumnEl=column.$(),applyToColumn=column;if(data.data.type.substr(0,5)!="class")
{var movingWidget=$bk(className);}
for(var countdown=numberOfColumn+1;countdown>widgetColumnPosition;countdown--)
{if(countdown>widgetColumnPosition+1)
{prevColumn=columns['column'+(countdown-1)];columnsWidget.shiftColumnWidthToColumnRight(applyToColumn,prevColumn);applyToColumn=columnsWidget.shiftWidgetsToColumn(applyToColumn,prevColumn);applyToColumnEl=applyToColumn.$();}
else if(countdown==widgetColumnPosition+1)
{column.attach();prevColumn=columns['column'+(countdown-1)];prevColumn.$().removeClass('bk-last');prevColumn.$('padding').removeClass('bk-last');prevColumn.last=false;prevColumn.attach();columnsWidget.setGutterWidth(columnsWidget.gutterWidth);contentEl=columnsWidget.$('content');if(side=='right')
{newColumn=applyToColumn;newColumnEl=applyToColumnEl;otherColumn=this.parent;otherColumnEl=this.parent.$();}
else
{newColumn=this.parent;newColumnEl=this.parent.$();otherColumn=applyToColumn;otherColumnEl=applyToColumnEl;}
leftMarginInPixels=Math.ceil((this.parent.$().width()/100)*this._paddingLeft);rightMarginInPixels=Math.ceil((this.parent.$().width()/100)*this._paddingRight);columnsWidget.splitColumn(newColumn,newColumnEl,otherColumn,otherColumnEl,contentEl,sideWidth,columnsWidget.gutterWidth,widgetWidthWithoutPadding,columnsWidget.columns);this.ie7ParentResizeHack();this.addSpaceForOtherColumn(this,otherColumnEl.width(),this.parent.$().width(),(side=='right')?leftMarginInPixels:0,(side=='left')?rightMarginInPixels:0);columnsWidget.shiftWidgetsToColumn(otherColumn,newColumn);if(side=='right')
{newColumn.changeType('outer',otherColumn.type);newColumn.applyColumnStyle(otherColumn.styleName,false,otherColumn.type);}
else
{otherColumn.changeType('outer',newColumn.type);otherColumn.applyColumnStyle(newColumn.styleName,false,newColumn.type);}
this.reloadStateCache();if(!skipWidgetCreation)
{if(data.data.type.substr(0,5)=="class")
{newWidgetID=this.createWidgetFromDragData(newColumn,className,data);}
else
{var movingWidgetBeforeName=movingWidget.__name;var previousParentOfMovingWidget=movingWidget.parent;var next=movingWidget.$().next();var movingWidgetAfter=(next&&typeof next.get(0)!='undefined'&&next.get(0)!=null&&typeof next.get(0).id!="undefined")?next.get(0):null;newIDForMovedWidget=this.moveWidgetFromDataData(newColumn,className,data);var widgetAfterMove=$bk(newIDForMovedWidget);var movingWidgetAfterName=(widgetAfterMove!=null?widgetAfterMove.__name:null);}}
if(typeof this.onResize=='function')
{this.onResize(['left','top','right','bottom']);}
if(BaseKit.Browser.webKit&&webKitOverlay&&webKitOverlay!==null)
{BaseKit.Framework_Widget.removeWebKitOverlay();this.$('content').append(webKitOverlay);}
columnsWidget.onResize();this.savePadding(this._paddingLeft,this._paddingRight);this.saveColumnWidth(columnName,column.width);}}
widgetRegionAfter=this.getRegion();widgetHeightAfter=parseInt(this.$().height);var secondaryWidgetID=newWidgetID!=null?newWidgetID:newIDForMovedWidget;columnsWidget.syncColumn(otherColumn.__name);if(!dontUndo)
{var undoParams={scope:that,widget:that,side:side,drag:drag,dragData:data,dragDataValue:data.data.value,dragDataType:data.data.type,sideWidth:sideWidth,secondaryWidgetID:secondaryWidgetID,secondaryWidget:null,secondaryWidgetEl:null,movingWidgetAfter:movingWidgetAfter,movingWidgetBeforeName:movingWidgetBeforeName,movingWidgetAfterName:movingWidgetAfterName,previousParentOfMovingWidget:previousParentOfMovingWidget,columnsWidget:columnsWidget,column:column,columnEl:column.$(),newColumn:newColumn,otherColumn:otherColumn,widgetRegionBefore:widgetRegionBefore,widgetHeightBefore:widgetHeightBefore,widgetRegionAfter:widgetRegionAfter,widgetHeightAfter:widgetHeightAfter,contentEl:contentEl,sideWidth:sideWidth,widgetWidthWithoutPadding:widgetWidthWithoutPadding}
BaseKit.UndoManager.pushUndoState("custom",{widget:that,scope:that,describe:'widget.dropWidgetOnSide (in columns)',callback:function(isUndo,undoData)
{that.undoColumnsWidgetCreate(undoParams,isUndo);}});}}
else
{var createColumnReturn=this.createColumnsWidget(sideWidth);var columnslocalClass=createColumnReturn.columnslocalClass,columnName=createColumnReturn.columnName,columnsWidget=createColumnReturn.columnsWidget,column1=createColumnReturn.column1,column1El=column1.$(),column1Name=column1.__name,column2=createColumnReturn.column2,column2El=column2.$(),column2Name=column2.__name,contentEl=createColumnReturn.contentEl;if(side=='right')
{newColumn=column2;newColumnEl=column2El;otherColumn=column1;otherColumnEl=column1El;}
else
{newColumn=column1;newColumnEl=column1El;otherColumn=column2;otherColumnEl=column2El;}
columnsWidget.splitColumn(newColumn,newColumnEl,otherColumn,otherColumnEl,contentEl,sideWidth,columnsWidget.gutterWidth,widgetWidthWithoutPadding,{});this.ie7ParentResizeHack();BaseKit.Editor.selectWidget(null);this.registerColumns(columnName,columnslocalClass,column1Name,column1.width,column2Name,column2.width,this.id);if(!skipWidgetCreation)
{if(data.data.type.substr(0,5)=="class")
{if(data.data.type=='class.formWidget'&&!(this.parent instanceof BaseKit.Widget_Formarea))
{newColumn.dropWidget(data.data);}
else
{newWidgetID=this.createWidgetFromDragData(newColumn,className,data);}}
else
{var movingWidget=$bk(className);var movingWidgetBeforeName=movingWidget.__name;var previousParentOfMovingWidget=movingWidget.parent;var next=movingWidget.$().next();var movingWidgetAfter=(next&&typeof next.get(0)!='undefined'&&next.get(0)!=null&&typeof next.get(0).id!="undefined")?next.get(0):null;newIDForMovedWidget=this.moveWidgetFromDataData(newColumn,className,data);var widgetAfterMove=$bk(newIDForMovedWidget);var movingWidgetAfterName=(widgetAfterMove!=null?widgetAfterMove.__name:null);}}
var usePixels=(typeof this._usePixels!="undefined"&&this._usePixels);leftMarginInPixels=usePixels?this._paddingLeft:Math.ceil((this.parent.$().width()/100)*this._paddingLeft);rightMarginInPixels=usePixels?this._paddingRight:Math.ceil((this.parent.$().width()/100)*this._paddingRight);this.addSpaceForOtherColumn(this,otherColumnEl.width(),this.parent.$().width(),(side=='right')?leftMarginInPixels:0,(side=='left')?rightMarginInPixels:0);var nextWidgetElement=this.$().next();var nextWidgetID=(nextWidgetElement&&typeof nextWidgetElement.get(0)!='undefined'&&nextWidgetElement.get(0)!=null&&typeof nextWidgetElement.get(0).id!="undefined")?nextWidgetElement.get(0).id:null;var widgetBeforeName=this.__name;var widgetAfterID=otherColumn.moveWidget(this.id,null,{type:'widget',value:that.id},true,false);var widgetAfterName=this.__name;if(typeof this.onResize=='function')
{this.onResize(['left','top','right','bottom']);}
if(BaseKit.Browser.webKit&&webKitOverlay&&webKitOverlay!==null)
{BaseKit.Framework_Widget.removeWebKitOverlay();this.$('content').append(webKitOverlay);}
columnsWidget.onResize();this.savePadding(this._paddingLeft,this._paddingRight);widgetRegionAfter=this.getRegion();widgetHeightAfter=parseInt(this.$().height);if(!dontUndo)
{var undoParams={scope:that,widget:that,widgetAfterID:widgetAfterID,widgetBeforeName:widgetBeforeName,widgetAfterName:widgetAfterName,side:side,drag:drag,dragData:data,dragDataType:data.data.type,dragDataValue:data.data.value,sideWidth:sideWidth,newWidgetID:newWidgetID,newWidget:$bk(newWidgetID),previousParent:previousParent,nextWidgetID:nextWidgetID,newIDForMovedWidget:newIDForMovedWidget,movingWidgetAfter:movingWidgetAfter,movingWidgetBeforeName:movingWidgetBeforeName,movingWidgetAfterName:movingWidgetAfterName,previousParentOfMovingWidget:previousParentOfMovingWidget,columnsWidget:columnsWidget,columnsWidgetEl:columnsWidget.$(),newColumn:newColumn,otherColumn:otherColumn,widgetRegionBefore:widgetRegionBefore,widgetHeightBefore:widgetHeightBefore,widgetRegionAfter:widgetRegionAfter,widgetHeightAfter:widgetHeightAfter}
BaseKit.UndoManager.pushUndoState("custom",{widget:that,scope:that,describe:'widget.dropWidgetOnSide (no columns)',callback:function(isUndo,undoData)
{that.undoColumnCreate(undoParams,isUndo);}});}}
returnWidgetID=(newWidgetID!=null?newWidgetID:newIDForMovedWidget);return returnWidgetID;},createColumnsWidget:function()
{var that=this,widgets=this.parent.widgets,columnName="columns",columnWidgetCount=0;for(var widgetInStack in widgets)
{if(widgets[widgetInStack]instanceof BaseKit.Widget_Columns)
{columnWidgetCount++;}}
for(var num=columnWidgetCount;typeof widgets[columnName+num]=="object";++num);if(columnWidgetCount>0)
{columnName=columnName+num;}
var id=this.parent.id+'-widgets__'+columnName;var columnslocalClass='widget-content-'+this.generateRandomCharacter();var columnEl=$('<div></div>').attr('id',id).addClass('bk-widget widget-columns '+columnslocalClass).insertBefore(this.$());var contentEl=$('<div></div>').attr('id',id+'BKcontent').addClass('bk-widget-content widget-columns-content').appendTo(columnEl);var clearEl=$('<div></div>').attr('id',id+'BKclear').addClass('clear widget-columns-clear').appendTo(contentEl);var column1ID=id+"-columns__column1";var column1Name="column1";var column1=this.createColumn(column1ID,column1Name,id,clearEl,true,false,false,null,null,0,'');var column2ID=id+"-columns__column2";var column2Name="column2";var column2=this.createColumn(column2ID,column2Name,id,clearEl,false,true,false,null,null,0,'');var columnsWidget=new BaseKit.Widget_Columns([{"__name":columnName,"__parentID":that.parent.id,"_isWidget":false,"_protected":false,"_type":"widget","_fixed":false,"__collection":"widgets","_paddingLeft":null,"_paddingRight":null,"_paddingTop":0,"_paddingBottom":0,"_innerHeight":0,"_outerHeight":0,"_editableCSS":true,"_sizeToolTip":true,"_hasSettings":true,"_tabs":["settings","css"],"helpPage":"widget-columns","_hasData":true,"firstRun":false,"class":"widget-columns","localClass":columnslocalClass,"localStyles":null,"gutterWidth":20,"gridColumns":16,"topLevel":false},[],["save","buildSettings","registerColumn","saveColumnWidth","registerColumns","savePadding","reloadStateCache","createColumn","hideSettings","showSettings","syncColumns","syncColumn"],{"columns":["column1","column2"]}]);column1.attach();column2.attach();columnsWidget.attach();columnsWidget.restore(true);that.parent.save();columnsWidget.setGutterWidth(columnsWidget.gutterWidth);var createColumnReturn={};createColumnReturn={columnName:columnName,columnsWidget:columnsWidget,columnslocalClass:columnslocalClass,column1:column1,column1El:column1.$(),column2:column2,column2El:column2.$(),contentEl:contentEl};return createColumnReturn;},createColumn:function(columnID,columnName,parentID,beforeEl,first,last,topLevel,styleName,minHeight,minusBorderMargin,type)
{var columnEl=$('<div></div>').addClass('control-zone widget-columns-column'+(first?' bk-first':'')+(last?' bk-last':'')).attr('id',columnID).css('minHeight',parseInt(minHeight)+'px').insertBefore(beforeEl);var columnElPadding=$('<div></div>').addClass('widget-columns-column-padding'+(styleName!=null?' column-'+styleName:'')+(first?' bk-first':'')+(last?' bk-last':'')).css('minHeight',(parseInt(minHeight)-parseInt(minusBorderMargin))+'px').appendTo(columnEl);if(type=='flex')
{columnElPadding.prepend($('<div></div>').addClass('column-bottom widget-columns-column-column-bottom'));columnElPadding.prepend($('<div></div>').addClass('column-middle widget-columns-column-column-middle'));columnElPadding.prepend($('<div></div>').addClass('column-top widget-columns-column-column-top'));}
var column=new BaseKit.Widget_Columns_Column([{"__name":columnName,"__parentID":parentID,"__collection":"columns","_hasSettings":false,"_hasData":true,"__afterID":null,"class":"widget-columns-column",tabIndex:-1,interact:"widget,formWidget",mode:"edit",neverEmpty:true,styleName:styleName,minusBorderMargin:minusBorderMargin,type:type,first:first,last:last,width:0,udad:true},{zoneEmpty:false,widgetCreated:false},["save","buildSettings","injectWidget","insertWidget","setWidth","saveColumnWidth","saveStyleName","reloadStateCache","saveType","saveMinusBorderMargin"],{"widgets":[]}]);return column;},createWidgetFromDragData:function(column,className,data)
{return column.createWidget(className,null,data.data,false,true);},moveWidgetFromDataData:function(column,id,data)
{var movingWidget=$bk(id);return column.moveWidget(id,null,data.data,true);},addSpaceForOtherColumn:function(scope,otherColumnElWidth,parentWidth,leftMarginInPixels,rightMarginInPixels,leftBuffer,rightBuffer)
{var relativeLeftPaddingWidth=0,relativeRightPaddingWidth=0;var usePixels=(typeof scope._usePixels!="undefined"&&scope._usePixels);if(leftMarginInPixels==undefined||leftMarginInPixels==null)
{leftMarginInPixels=usePixels?(scope._paddingLeft?scope._paddingLeft:0):Math.floor((parentWidth/100)*parseFloat(scope._paddingLeft?scope._paddingLeft:0));}
if(rightMarginInPixels==undefined||rightMarginInPixels==null)
{rightMarginInPixels=usePixels?(scope._paddingRight?scope._paddingRight:0):Math.floor((parentWidth/100)*parseFloat(scope._paddingRight?scope._paddingRight:0));}
relativeLeftPaddingWidth=parseInt(leftBuffer?leftBuffer:0)+parseInt(leftMarginInPixels);relativeRightPaddingWidth=parseInt(rightBuffer?rightBuffer:0)+parseInt(rightMarginInPixels);this.setRegion(relativeLeftPaddingWidth,null,relativeRightPaddingWidth,null,null,null,["left","right"]);},ie7ParentResizeHack:function()
{var check=null;if(BaseKit.Browser.ie7&&this.parent!=null)
{check=this.parent;while(check!=null&&!(check instanceof BaseKit.Framework_Page))
{if(check instanceof BaseKit.Framework_Control_Slice_Column)
{parentColumn=check;}
check=check.parent;}
check=null;}
if(BaseKit.Browser.ie7&&typeof parentColumn=='object'&&parentColumn instanceof BaseKit.Framework_Control_Slice_Column)
{parentColumn.onResize();}},undoColumnsWidgetCreate:function(params,isUndo)
{var side=params.side,dragData=params.dragData,dragDataValue=params.dragDataValue,dragDataType=params.dragDataType,secondaryWidgetID=params.secondaryWidgetID,secondaryWidget=params.secondaryWidget,secondaryWidgetEl=params.secondaryWidgetEl,widget=params.widget,movingWidgetAfter=params.movingWidgetAfter,movingWidgetBeforeName=params.movingWidgetBeforeName,movingWidgetAfterName=params.movingWidgetAfterName,previousParentOfMovingWidget=params.previousParentOfMovingWidget,columnsWidget=params.columnsWidget,column=params.column,columnEl=params.columnEl,newColumn=params.newColumn,otherColumn=params.otherColumn,widgetRegionBefore=params.widgetRegionBefore,widgetHeightBefore=params.widgetHeightBefore,widgetRegionAfter=params.widgetRegionAfter,widgetHeightAfter=params.widgetHeightAfter,contentEl=params.contentEl,sideWidth=params.sideWidth,widgetWidthWithoutPadding=params.widgetWidthWithoutPadding;var columns=null,mergeWithColumnNumber=0,columnToApplyWidthTo=null,beforeLast=null,last=null,step=null,fromColumn=null,toColumn=null,countdown=null,name=null,countColumnsArgs=null,widgetColumnPosition=null,numberOfColumn=null;if(secondaryWidget===null)
{params.secondaryWidget=secondaryWidget=$bk(params.secondaryWidgetID);params.secondaryWidgetEl=secondaryWidgetEl=$bk(params.secondaryWidgetID).$();}
if(isUndo)
{columns=columnsWidget.columns,countColumnsArgs=columnsWidget.countColumns(columns,widget.parent),widgetColumnPosition=countColumnsArgs.widgetColumnPosition,numberOfColumn=countColumnsArgs.numberOfColumn;if(side=='left')
{mergeWithColumnNumber=(parseInt(widgetColumnPosition)-1);columnToApplyWidthTo=columns['column'+mergeWithColumnNumber];}
else
{mergeWithColumnNumber=(parseInt(widgetColumnPosition)+1);columnToApplyWidthTo=columns['column'+widgetColumnPosition];}
if(dragDataType.substr(0,6)!="class.")
{previousParentOfMovingWidget.moveWidget(secondaryWidget.id,(movingWidgetAfter!=null?movingWidgetAfter.id:null),null,true,true,true,movingWidgetBeforeName);}
else
{BaseKit.Editor.destroyWidget(secondaryWidget,true,parseInt(BaseKit.UndoManager.getUndoPointer()));}
var widthMinusColumnsReturnValues=columnsWidget.widthOfAllOtherColumns(columns['column'+widgetColumnPosition],columns,mergeWithColumnNumber);var widthOfAllColumnsBarIgnoredMergingColumns=widthMinusColumnsReturnValues.allColumnsBarIgnoredMergingColumns;fromColumn=null;toColumn=columns['column'+mergeWithColumnNumber];for(countdown=mergeWithColumnNumber;countdown<numberOfColumn;countdown++)
{fromColumn=columns['column'+(countdown+1)];columnsWidget.shiftColumnWidthToColumnLeft(toColumn,fromColumn);toColumn=columnsWidget.shiftWidgetsToColumn(toColumn,fromColumn);}
var newWidth=parseFloat((100-parseFloat(widthOfAllColumnsBarIgnoredMergingColumns)).toFixed(10));last=columns['column'+numberOfColumn];for(name in columns)
{beforeLast=last;last=columns[name];}
BaseKit.Editor.destroyColumn(last,true,true,parseInt(BaseKit.UndoManager.getUndoPointer()));if(beforeLast!=null)
{beforeLast.$().addClass('bk-last');beforeLast.$('padding').addClass('bk-last');beforeLast.last=true;}
columnToApplyWidthTo.width=newWidth;columnToApplyWidthTo.$().css('width',newWidth+'%');widget.setRegion(widgetRegionBefore.left,widgetRegionBefore.top,widgetRegionBefore.right,widgetRegionBefore.bottom,widgetHeightBefore,null,null,true);for(name in columnsWidget.columns)
{columnsWidget.columns[name].saveColumnWidth(columnsWidget.columns[name].width);columnsWidget.columns[name].reset();}
widget.savePadding(widget._paddingLeft,widget._paddingRight);}
else
{columns=columnsWidget.columns,countColumnsArgs=columnsWidget.countColumns(columns,widget.parent),widgetColumnPosition=countColumnsArgs.widgetColumnPosition,numberOfColumn=countColumnsArgs.numberOfColumn;BaseKit.Editor.restoreColumn(columnsWidget,column,columnsWidget.id+'BKclear',columnEl,parseInt(BaseKit.UndoManager.getUndoPointer()+1),true);fromColumn=null,toColumn=last=columnsWidget.columns['column'+(numberOfColumn+1)];for(countdown=(numberOfColumn+1);countdown>(side=='left'?widgetColumnPosition:widgetColumnPosition+1);countdown--)
{fromColumn=columns['column'+(countdown-1)];columnsWidget.shiftColumnWidthToColumnRight(toColumn,fromColumn);toColumn=columnsWidget.shiftWidgetsToColumn(toColumn,fromColumn);}
beforeLast=null,step=null;for(name in columnsWidget.columns)
{beforeLast=step;step=columnsWidget.columns[name];}
if(last!=null&&beforeLast!=null)
{last.$().addClass('bk-last');last.$('padding').addClass('bk-last');last.last=true;beforeLast.$().removeClass('bk-last');beforeLast.$('padding').removeClass('bk-last');beforeLast.last=false;}
columnsWidget.splitColumn(newColumn,newColumn.$(),otherColumn,otherColumn.$(),contentEl,sideWidth,columnsWidget.gutterWidth,widgetWidthWithoutPadding,columnsWidget.columns);widget.setRegion(widgetRegionAfter.left,widgetRegionAfter.top,widgetRegionAfter.right,widgetRegionAfter.bottom,widgetHeightAfter,null,null,true);if(dragDataType.substr(0,6)!="class.")
{newColumn.moveWidget(dragDataValue,null,null,true,true,true,movingWidgetAfterName);}
else
{BaseKit.Editor.restoreWidget(newColumn,secondaryWidget,null,secondaryWidgetEl,parseInt(BaseKit.UndoManager.getUndoPointer()+1));secondaryWidget.onResize();}
for(name in columnsWidget.columns)
{columnsWidget.columns[name].saveColumnWidth(columnsWidget.columns[name].width);columnsWidget.columns[name].reset();}
widget.savePadding(widget._paddingLeft,widget._paddingRight);}
columnsWidget.onResize();},undoColumnCreate:function(params,isUndo)
{var dragDataType=params.dragDataType,dragDataValue=params.dragDataValue,newIDForMovedWidget=params.newIDForMovedWidget,widget=params.widget,widgetAfterID=params.widgetAfterID,widgetBeforeName=params.widgetBeforeName,widgetAfterName=params.widgetAfterName,previousParent=params.previousParent,nextWidgetID=params.nextWidgetID,movingWidgetAfter=params.movingWidgetAfter,movingWidgetBeforeName=params.movingWidgetBeforeName,movingWidgetAfterName=params.movingWidgetAfterName,previousParentOfMovingWidget=params.previousParentOfMovingWidget,columnsWidget=params.columnsWidget,columnsWidgetEl=params.columnsWidgetEl,newColumn=params.newColumn,otherColumn=params.otherColumn,widgetRegionBefore=params.widgetRegionBefore,widgetHeightBefore=params.widgetHeightBefore,widgetRegionAfter=params.widgetRegionAfter,widgetHeightAfter=params.widgetHeightAfter;if(isUndo==true)
{previousParent.moveWidget(widgetAfterID,nextWidgetID,null,true,false,false,widgetBeforeName);widget.setRegion(widgetRegionBefore.left,widgetRegionBefore.top,widgetRegionBefore.right,widgetRegionBefore.bottom,widgetHeightBefore,null,null,true);if(dragDataType.substr(0,6)!="class.")
{previousParentOfMovingWidget.moveWidget(newIDForMovedWidget,(movingWidgetAfter!=null?movingWidgetAfter.id:null),null,true,true,true,movingWidgetBeforeName);}
BaseKit.Editor.destroyWidget(columnsWidget,true,parseInt(BaseKit.UndoManager.getUndoPointer()));if(typeof widget.onResize=='function')
{widget.onResize();}
widget.savePadding(widget._paddingLeft,widget._paddingRight);}
else
{BaseKit.Editor.restoreWidget(previousParent,columnsWidget,widget.id,columnsWidgetEl,parseInt(BaseKit.UndoManager.getUndoPointer()+1),true);otherColumn.moveWidget(widget.id,null,null,true,false,false,widgetAfterName);widget.setRegion(widgetRegionAfter.left,widgetRegionAfter.top,widgetRegionAfter.right,widgetRegionAfter.bottom,widgetHeightAfter,null,null,true);if(dragDataType.substr(0,6)!="class.")
{newColumn.moveWidget(dragDataValue,null,null,true,true,true,movingWidgetAfterName);}
columnsWidget.onResize();columnsWidget.hideMask();widget.savePadding(widget._paddingLeft,widget._paddingRight);}},lockDimensions:function(side)
{var outerRegion=this.$().getRegion(false,true),innerRegion=this.$("content").getRegion(false,true);this._locked=[outerRegion,innerRegion,side||"left"];},unlockDimensions:function()
{this._locked=[];}}});})();(function()
{BaseKit.Framework_Widget_Feed=BaseKit.Class.create({superclass:BaseKit.Framework_Widget,methods:{construct:function()
{this.callParent.apply(this,arguments);var that=this;this.errorBox=$('<p></p>').addClass('widget-feed-error');},updateFeedLimit:function(limit)
{this.limit=parseInt(limit,10);this.updateFeed();},updateFeed:function()
{},error:function(error)
{if(error!=null&&error!='')
{this.__error=error;}
return(this.__error!='')?this.__error:false;},clear:function()
{if(this.$('widget-twitter-error').length)
{this.$('content').remove();}}}});})();(function()
{BaseKit.Framework_Widget_GoogleCart=BaseKit.Class.create({superclass:BaseKit.Framework_Widget,methods:{construct:function()
{this.callParent.apply(this,arguments);this.hasNotified=false;},attach:function()
{this.callParent.apply(this,arguments);var that=this;},initShoppingCart:function()
{var that=this;this.loadShoppingCartScript();var timeout=setTimeout(function()
{clearTimeout(timeout);that.setupShoppingCart();},100);},loadShoppingCartScript:function()
{if(this.mid.length>0||this.mid!==null)
{if(!document.getElementById('googlecart-script'))
{var script=document.createElement("script");script.type="text/javascript";script.id='googlecart-script';script.setAttribute('currency',this.currency);script.src="http://checkout.google.com/seller/gsc/v2_2/cart.js?mid="+this.mid;document.body.appendChild(script);}}},setupShoppingCart:function()
{var that=this;if(typeof googlecart!=='object'&&typeof googlecartWidget!=='object')
{var timeout=setTimeout(function()
{clearTimeout(timeout);that.setupShoppingCart();},10);return;}
googlecart.init();googlecart.configuration.hideCartWhenEmpty=false;googlecart.configuration.closeCartWhenClickAway=false;this.fireEvent('GoogleCheckoutAPILoaded');},notifyMidChanged:function()
{if(this.hasNotified==false)
{this.hasNotified=true;window.location.href=window.location.href;}}}});})();(function()
{BaseKit.Framework_Widget_Profile=BaseKit.Class.create({superclass:BaseKit.Framework_Widget,methods:{construct:function()
{this.callParent.apply(this,arguments);this._hasSettings=true;}}});})();var marker=null;(function()
{function createFormMarker()
{if(marker===null)
{marker=$('<div></div>').addClass('bk-form-marker').css('opacity',0.5);marker.id='bk-form-marker';}}
BaseKit.Framework_Form=BaseKit.Class.create({superclass:BaseKit.Framework_Control,globals:{removeMarker:function(dontRecurse)
{if(marker!==null&&marker.length)
{try
{marker.detach();}
catch(e){}}
if(!dontRecurse)
{BaseKit.Framework_Widget.hideMarker();}}},methods:{attach:function()
{this.callParent.apply(this,arguments);if(BaseKit.Framework_Page.isMode(['edit','preview','themeselector','admin']))
{var that=this;createFormMarker();var region=null,width=0,height=0,direction=null;this.$().setup({interact:["formWidget","class.formWidget","class.formWidgetCreated","class.formWidgetSpreadsheet"],data:{type:"formWidget",value:this.id},plugins:{drop:{onDragStart:function(drop,drag,x,y)
{},onDragFinish:function()
{BaseKit.Framework_Form.removeMarker();},onDragExit:function(drop,drag,x,y)
{try
{var formRegion=that.parent.$().getRegion(false,true);if(x<formRegion.left||x>formRegion.right||y<formRegion.top||y>formRegion.bottom)
{BaseKit.Framework_Form.removeMarker();}}
catch(e){}},onDragMove:function(drop,drag,x,y)
{try
{var column=that.parent,data=drag.getData();var newWidget=(data.type!='class.formWidgetCreated');if(that.parent&&data.parent&&data.parent!=that.parent)
{return;}
region=that.$().getRegion(false,true);if(region==null)
{return;}
width=region.right-region.left;height=region.bottom-region.top;if(drop.get(0).id==drag.get(0).id)
{return;}
var middle=region.top+(height>>1);direction=(y<middle?"up":"down");var before=drop.prev(),after=drop.next(),widget=newWidget?null:drag.parent();var toBeInserted=newWidget?marker:widget;if(widget!=null&&widget.length>0&&drop.get(0).id==widget.get(0).id)
{return;}
if(toBeInserted!=null&&toBeInserted.length>0&&before.length>0&&before.get(0).id==toBeInserted.get(0).id)
{before=before.prev();}
if(toBeInserted!=null&&toBeInserted.length>0&&after.length>0&&after.get(0).id==toBeInserted.get(0).id)
{after=after.next();}
if(y<middle)
{if(toBeInserted!=null&&toBeInserted.length>0&&before.length!=0)
{if(before.get(0).id!=toBeInserted.get(0).id)
{toBeInserted.insertBefore(drop);}}
else
{drop.parent().prepend(toBeInserted);}}
else
{if(after.length==0)
{drop.parent().append(toBeInserted);}
else
{toBeInserted.insertBefore(after);}}
BaseKit.Framework_Widget.hideMarker(true);}
catch(e)
{}},onDragDrop:function(drop,drag,x,y)
{var data=drag.getData(),nextZoneUp=null;if(that.parent&&that.parent instanceof BaseKit.Framework_Control_Zone)
{nextZoneUp=that.parent;}
if(data.type=='widget'&&that.parent&&that.parent instanceof BaseKit.Framework_Control_Zone)
{return;}
if(that.parent&&data.parent&&data.parent!=that.parent)
{return;}
if(drop.id==data.value)
{return;}
var before=null;if(data&&data.type&&that.$())
{switch(direction)
{case"up":before=that.id;break;case"down":var next=that.$().next();before=(next&&typeof next.id!="undefined")?next.id:null;break;}
that.parent.dropWidget(drag.getData(),before);}}}}});}},destroy:function()
{var parent=this.parent;this.callParent.apply(this,arguments);if(parent&&typeof parent.reset=="function")
{parent.reset();}}}});})();(function()
{var Ease={linear:function(t,b,c,d)
{return c*t/d+b;},inQuad:function(t,b,c,d)
{return c*(t/=d)*t+b;},outQuad:function(t,b,c,d)
{return-c*(t/=d)*(t-2)+b;},bothQuad:function(t,b,c,d)
{if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b;},inCirc:function(t,b,c,d)
{return-c*(Math.sqrt(1-(t/=d)*t)-1)+b;},outCirc:function(t,b,c,d)
{return c*Math.sqrt(1-(t=t/d-1)*t)+b;},bothCirc:function(t,b,c,d)
{if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b;},outBounce:function(t,b,c,d)
{if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b;}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b;}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b;}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b;}},inBounce:function(t,b,c,d)
{return c-this.outBounce(d-t,0,c,d)+b;},bothBounce:function(t,b,c,d)
{if(t<d/2)return com.robertpenner.easing.Bounce.easeIn(t*2,0,c,d)*.5+b;else return com.robertpenner.easing.Bounce.easeOut(t*2-d,0,c,d)*.5+c*.5+b;},inCubic:function(t,b,c,d)
{return c*(t/=d)*t*t+b;},outCubic:function(t,b,c,d)
{return c*((t=t/d-1)*t*t+1)+b;},bothCubic:function(t,b,c,d)
{if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b;},inSine:function(t,b,c,d)
{return-c*Math.cos(t/d*(Math.PI/2))+c+b;},outSine:function(t,b,c,d)
{return c*Math.sin(t/d*(Math.PI/2))+b;},bothSine:function(t,b,c,d)
{return-c/2*(Math.cos(Math.PI*t/d)-1)+b;},inElastic:function(t,b,c,d,a,p)
{if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(!a||a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;},outElastic:function(t,b,c,d,a,p)
{if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(!a||a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);return(a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b);},bothElastic:function(t,b,c,d,a,p)
{if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(!a||a<Math.abs(c)){a=c;var s=p/4;}
else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b;}};var fps=1000;var interval=null;var start=null;var starting=false;var queue=[];var regExp={hex6:/^#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})$/i,hex3:/^#([0-9A-F]{1})([0-9A-F]{1})([0-9A-F]{1})$/i,rgb3:/^rgb\(([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\)$/i,transparent:/^transparent|rgba\(0\s*,\s*0\s*,\s*0\s*,\s*0\)$/};function parseColor(value)
{if(regExp.transparent.test(value))
{return[255,255,255];}
if((match=regExp.hex6.exec(value))&&match.length==4)
{return[parseInt(match[1],16),parseInt(match[2],16),parseInt(match[3],16)];}
else if((match=regExp.hex3.exec(value))&&match.length==4)
{return[parseInt(match[1]+match[1],16),parseInt(match[2]+match[2],16),parseInt(match[3]+match[3],16)];}
else if((match=regExp.rgb3.exec(value))&&match.length==4)
{return[parseInt(match[1],10),parseInt(match[2],10),parseInt(match[3],10)];}}
function callback(func,scope,args)
{if(typeof func=="string")
{var method=scope[func];if(typeof method=="function")
{return method.apply(scope,args);}}
else if(typeof func=="function")
{return func.apply(scope||window,args);}}
function apply(props,ratio)
{for(var i=0,j=props.length;i<j;++i)
{var prop=props[i],element=prop.element,ratio=ratio>1.0?1.0:ratio;for(var name in prop)
{if(name!='element')
{var config=prop[name],from=config[0],to=config[1],method=Ease[config[2]]||Ease.linear;switch(name)
{case'color':case'backgroundColor':var r=parseInt(method(ratio,from[0],to[0]-from[0],1.0),10),g=parseInt(method(ratio,from[1],to[1]-from[1],1.0),10),b=parseInt(method(ratio,from[2],to[2]-from[2],1.0),10);element.css(name,'rgb('+r+','+g+','+b+')');break;case"scroll":var l=parseInt(method(ratio,from[0],to[0]-from[0],1.0)),t=parseInt(method(ratio,from[1],to[1]-from[1],1.0));element.scrollLeft(l>0?l:0);element.scrollTop(t>0?t:0);break;case"width":element.css('width',method(ratio,from,to-from,1.0)+'px');break;case"height":element.css('height',method(ratio,from,to-from,1.0)+'px');break;case"opacity":element.css('opacity',method(ratio,from,to-from,1.0));break;default:element.css(name,Math.round(method(ratio,from,to-from,1.0))+'px');break;}}}}}
function process()
{var frame=(new Date()-start)*fps,remaining=[],finished=[];for(var x=0,y=queue.length;x<y;++x)
{var item=queue[x],config=item[0],props=item[1];if(frame>=config.first)
{var ratio=(frame-config.first)/config.frames;apply(props,ratio);callback(config.onTween,config.scope,[ratio]);if(ratio>=1.0)
{for(var i=0,j=props.length;i<j;++i)
{props[i].element.data('anim.active',false);}
finished.push([config.onFinish,config.scope]);}
else
{remaining.push(item);}}}
queue=remaining;finished.each(function(item)
{callback(item[0],item[1],[]);});if(queue.length==0)
{clearInterval(interval);interval=null;}}
BaseKit.Animation=BaseKit.Class.create({globals:{stop:function(element)
{var element=$(element);if(!element.length)
{return;}
var remaining=[];for(var x=0,y=queue.length;x<y;++x)
{var item=queue[x],config=item[0],props=item[1],found=false;for(var i=0,j=props.length;i<j;++i)
{if(props[i].element.compare(element))
{found=true;break;}}
if(!found)
{remaining.push(item);}
else
{for(i=0,j=props.length;i<j;++i)
{props[i].element.data('anim.active',false);}}}
queue=remaining;},addQueue:function(config)
{if(starting)
{return false;}
starting=true;if(!interval)
{start=new Date();}
var frame=(new Date()-start)*fps;config=config||{};config.first=frame;config.frames=(config.duration||1.0)*1000*fps;var props=Array.prototype.slice.call(arguments,1);for(var i=0,j=props.length;i<j;++i)
{var prop=props[i];if(prop.element.data('anim.active')===true)
{starting=false;return false;}
prop.element.data('anim.active',true);for(var name in prop)
{if(name=='color'||name=='backgroundColor')
{prop[name][0]=parseColor(prop[name][0]);prop[name][1]=parseColor(prop[name][1]);}}}
queue.push([config,props]);callback(config.onStart,config.scope,[]);if(!interval)
{interval=setInterval(function()
{process();},1);}
starting=false;return true;},isAnimating:function()
{return queue.length>0?true:false;}}});})();(function()
{BaseKit.Element.Plugin.Edit=BaseKit.Class.create({superclass:BaseKit.Element.Plugin,globals:{current:null,onResize:function()
{if(BaseKit.Framework_Page.isMode(['edit','preview','themeselector'])&&BaseKit.Element.Plugin.Edit.current!=null)
{BaseKit.Element.Plugin.Edit.current.finish();}}},methods:{construct:function(element,config)
{this.callParent(element,config);this.className=(config.className)?config.className:null;this.manual=(config.manual)?config.manual:false;if(this.manual==false)
{var that=this;element.click(function()
{that.start();});element.css("cursor","text");}
element.isEditing=function()
{return this.editing;};this.resize=(config.resize!=undefined)?config.resize:true;},start:function(e)
{if(!this.enabled||BaseKit.Browser.ie7)
{return;}
if(BaseKit.Element.Plugin.Edit.current)
{BaseKit.Element.Plugin.Edit.current.finish(e,false,false);}
var el=this.element,region=el.getRegion(false,true),width=region.right-region.left,height=region.bottom-region.top,value=(el.html()=='&nbsp;')?'&nbsp;':el.html(),offset=el.offset(),x=offset.left,y=offset.top;this.initial=value;var paddingVertical=parseInt(el.css('paddingTop'))+parseInt(el.css('paddingBottom'))+parseInt(el.css('marginTop'))+parseInt(el.css('marginBottom'));var paddingHorizontal=parseInt(el.css('paddingLeft'))+parseInt(el.css('paddingRight'))+parseInt(el.css('marginLeft'))+parseInt(el.css('marginRight'))-2;if(el.parent()==null)
{return;}
var offset=el.offset(),offset2=el.parent().offset(),elX=offset.left-offset2.left-1,elY=offset.top-offset2.top;if(this.config.multiLine!==false)
{this.input=$('<input></input>').addClass(this.className!=null?this.className:el.className).val(value).css({position:'absolute',width:(width-paddingHorizontal)+'px',height:(height-paddingVertical)+'px',padding:'0',margin:'0',border:'0',top:elY+'px',left:elX+'px',overflow:'hidden'});}
else
{this.input=$('<input></input>').addClass(el.className).attr('type','text').val(value).css({position:'absolute',width:(width-paddingHorizontal)+'px',height:(height-paddingVertical)+'px',padding:'0',margin:'0',border:'0',top:elY+'px',left:elX+'px'});}
var sizer=this.sizer=$('<div></div>').addClass(this.element.className).html(this.input.val()).css({position:'absolute',left:'-10000px',top:'-10000px',width:'auto',height:'auto'}).appendTo(document.body);var that=this;function resizeInput(event)
{el.html(that.input.val());var elSize=el.css('height');if(that.config.multiLine!==false)
{that.input.scrollTop(0);if(that.resize!==false)
{var newHeight=parseInt(elSize);that.input.css("height",newHeight+"px");}}
else
{if(that.resize)
{that.input.css("width",parseInt(el.width())+"px");}}
if(that.config.onKeyUp)
{that.element.callback(that.config.onKeyUp,[that.input.val()]);}}
this.input.keyup(resizeInput);this.input.keypress(resizeInput);this.input.keydown(resizeInput);this.input.blur(function(event)
{that.finish(event,false,false);});this.input.keydown(function(event)
{if(event.keyCode==13||event.keyCode==27)
{that.finish(event,event.keyCode==27,event.keyCode==13);event.stopPropagation();event.preventDefault();return;}});var parent=el.parent();var whiteSpace=null,display=null,family=null,size=null,weight=null,lineHeight=null,color=null,dec=null,align=null,letterSpacing=null,textIndent=null,textTransform=null,verticalAlign=null,fontVariant=null;var check=el;while(check.parent().length>0)
{family=(family==null)?check.css('fontFamily'):family;size=(size==null)?check.css('fontSize'):size;weight=(weight==null)?check.css('fontWeight'):weight;lineHeight=(lineHeight==null)?check.css('lineHeight'):lineHeight;color=(color==null)?check.css('color'):color;dec=(color==null)?check.css('textDecoration'):dec;align=(align==null)?check.css('textAlign'):align;letterSpacing=(letterSpacing==null)?check.css('letterSpacing'):letterSpacing;textIndent=(textIndent==null)?check.css('textIndent'):textIndent;textTransform=(textTransform==null)?check.css('textTransform'):textTransform;verticalAlign=(verticalAlign==null)?check.css('verticalAlign'):verticalAlign;fontVariant=(fontVariant==null)?check.css('fontVariant'):fontVariant;whiteSpace=(whiteSpace==null)?check.css('whiteSpace'):whiteSpace;check=check.parent();}
this.input.css({background:'transparent',display:'absolute',fontFamily:family,fontSize:size,paddingTop:el.css('paddingTop'),paddingBottom:parseInt(el.css('paddingBottom'))+'px',paddingLeft:parseInt(el.css('paddingLeft'))+'px',paddingRight:parseInt(el.css('paddingRight'))+'px',marginTop:el.css('marginTop'),marginBottom:parseInt(el.css('marginBottom'))+'px',marginLeft:parseInt(el.css('marginLeft'))+'px',marginRight:parseInt(el.css('marginRight'))+'px',fontWeight:weight,lineHeight:lineHeight,color:color,textDecoration:dec,textAlign:align,letterSpacing:letterSpacing,textIndent:textIndent,textTransform:textTransform,verticalAlign:verticalAlign,fontVariant:fontVariant,whiteSpace:whiteSpace});this.input.addClass('prevent-self-click');parent.css('position','relative');this.input.insertBefore(el);el.css('visibility','hidden');try
{this.input.select();}
catch(ignore){}
BaseKit.Element.Plugin.Edit.current=this;this.editing=true;this.input.val((this.input.val()=='&nbsp;')?'':this.input.val());el.callback(this.config.onStart,[this.config]);BaseKit.Framework_Page.attachBodyClick(this.finish,this);},finish:function(event,cancelled,next)
{BaseKit.Element.Plugin.Edit.current=null;if(this.element&&this.input)
{var el=this.element,input=this.input,parent=input.parentNode,value=cancelled?this.initial:(input.val()||" "),changed=false;el.html(value);if(this.config.object&&this.config.property)
{this.config.object[this.config.property]=value;}
if(!cancelled&&value!=this.initial)
{changed=true;}
el.css('visibility','visible');input.remove();this.input=null;this.editing=false;this.sizer.remove();this.sizer=null;if(!cancelled&&next&&this.config.next&&(plugin=this.config.next.getPlugin("edit")))
{plugin.start();}
if(changed&&this.config.onChange)
{el.callback(this.config.onChange,[value,this.initial,this.element.parentNode,this.config]);}
el.callback(this.config.onFinish,[this.config,value]);BaseKit.Framework_Page.detachBodyClick(this.finish);}}}});})();(function()
{var prevX=null,prevY=null;var lastX=null,lastY=null;var curX=null,curY=null;var bareBones=false;var timeout=null;var disableWithinEls=[];function withinDisabledEl(el)
{if(disableWithinEls.length==0)
{return false;}
for(var i=0,j=disableWithinEls.length;i<j;++i)
{if(el.isDescendentOf(disableWithinEls[i],true))
{return true;}}
return false;}
BaseKit.DragDrop={disableScrolls:function()
{disableScrolls=true;},enableScrolls:function()
{disableScrolls=false;},disableDropsWithinEl:function(el)
{disableWithinEls.push(el);},enableDropsWithinEl:function(el)
{var remaining=[],checkID=el.id;for(var i=0,j=disableWithinEls.length;i<j;++i)
{if(disableWithinEls[i].id!=checkID)
{remaining.push(disableWithinEls[i]);}}
disableWithinEls=remaining;},enableAllDrops:function(dontRefresh)
{disableWithinEls=[];if(!dontRefresh)
{refreshCaches();}},disableProcessing:function()
{bareBones=true;},enableProcessing:function()
{bareBones=false;},refresh:function()
{refreshCaches();},cancelDrag:function(event)
{onMouseUp(event);},killBrowserDefault:function(element,killMouseDown)
{element=$(element);element.bind('drag',function(event)
{if(event.stopPropagation)
{event.stopPropagation();event.preventDefault();}
else
{return false;}});element.bind('dragenter',function(event)
{if(event.stopPropagation)
{event.stopPropagation();event.preventDefault();}
else
{return false;}});element.bind('dragover',function(event)
{if(event.stopPropagation)
{event.stopPropagation();event.preventDefault();}
else
{return false;}});element.bind('drop',function(event)
{if(event.stopPropagation)
{event.stopPropagation();event.preventDefault();}
else
{return false;}});element.select(function(event)
{if(event.stopPropagation)
{event.stopPropagation();event.preventDefault();}
else
{return false;}});if(killMouseDown==true)
{element.mousedown(function(event)
{if(event.stopPropagation)
{event.stopPropagation();event.preventDefault();}
else
{return false;}});}}};var draggables=[];var droppables=[];var scrollables=[];var currentDrag=null;var currentDrop=null;var currentScroll=null;var scrollInterval=null;var dropCache=null;var interactCache=[];var scrollCache=null;var disableScrolls=false;startUI();function startUI()
{$(document).mouseup(onMouseUp);$(document).mousemove(onMouseMove);}
function stopUI()
{$(document).unbind('mouseup',onMouseUp);$(document).unbind('mousemove',onMouseMove);}
function addDraggable(drag)
{if(drag&&drag.element)
{var element=$(drag.element),handle=drag.handle||element,that=this;draggables.push(drag);handle.mousedown(function(event)
{if(!drag.enabled)
{return;}
if(drag.enableKey)
{switch(drag.enableKey)
{case'shift':if(!event.shiftKey)
{return;}
break;case'ctrl':if(!event.ctrlKey)
{return;}
break;}}
timeout=setTimeout(function()
{timeout=null;onDragStart(event,drag);},50);event.preventDefault();});handle.select(function(event)
{if(drag.enableKey)
{switch(drag.enableKey)
{case'shift':if(event.shiftKey)
{event.stopPropagation();event.preventDefault();}
break;case'ctrl':if(event.ctrlKey)
{event.stopPropagation();event.preventDefault();}
break;}}});}}
function removeDraggable(el)
{var left=[];for(var i=0,j=draggables.length;i<j;++i)
{var drag=draggables[i];if(drag.element.get(0)!=el.get(0))
{left.push(drag);}
else
{}}
draggables=left;refreshCaches();}
function addDroppable(drop)
{if(drop&&drop.element)
{var element=$(drop.element);for(var i=0,j=droppables.length;i<j;++i)
{if(element.isDescendentOf(droppables[i].element))
{droppables.splice(i,0,drop);return;}}
droppables.push(drop);}
return drop;}
function removeDroppable(el)
{var left=[];for(var i=0,j=droppables.length;i<j;++i)
{var drop=droppables[i];if(drop.element.get(0)!=el.get(0))
{left.push(drop);}}
droppables=left;}
function addScrollable(scroll)
{if(scroll&&scroll.element)
{var element=$(scroll.element);for(var i=0,j=scrollables.length;i<j;++i)
{if(scrollables[i].element.isDescendentOf(element))
{scrollables.splice(i,0,scroll);return;}}
scrollables.push(scroll);}}
function onDragStart(event,drag)
{if(!BaseKit.Framework_Page.isMode(['edit']))
{return;}
$(document.body).addClass("doing-drag");currentDrag=drag;drag.startX=event.pageX;drag.startY=event.pageY;if(typeof drag.onBeforeDragStart=="function")
{drag.onBeforeDragStart.call(drag.scope||window,drag,event.pageX,event.pageY,event);}
refreshCaches();if(typeof drag.onDragStart=="function")
{drag.onDragStart.call(drag.scope||window,drag,event.pageX,event.pageY,event);}
if(!bareBones)
{for(var i=0,j=interactCache.length;i<j;++i)
{var drop=interactCache[i];if(typeof drop.onDragStart=="function")
{drop.onDragStart.call(drop.scope||window,drag,event.pageX,event.pageY);}}}}
function onMouseMove(event)
{try
{if(currentDrag)
{var drag=currentDrag,x=drag.lockX?drag.startX:event.pageX,y=drag.lockY?drag.startY:event.pageY;if(drag&&typeof drag.onDragMove=="function")
{drag.onDragMove.call(drag.scope||window,x,y,event);}
curX=x;curY=y;if(!bareBones)
{processScroll(x,y);processDrop(x,y,event);}
prevX=lastX=x;prevY=lastY=y;}}
catch(e){}}
function onMouseUp(event)
{if(timeout)
{clearTimeout(timeout);timeout=null;return;}
if(currentDrag)
{var drag=currentDrag,dragEl=drag.element,drop=currentDrop,x=event.pageX,y=event.pageY;if(drop)
{var dropEl=drop.element;if(typeof drop.onDragExit=="function")
{drop.onDragExit.call(drop.scope||window,drag,drop,x,y);}
if(typeof drop.onDragDrop=="function")
{drop.onDragDrop.call(drop.scope||window,drag,drop,x,y);}}
if(typeof drag.onDragFinish=="function")
{drag.onDragFinish.call(drag.scope||window,x,y,event,drop);}
if(!bareBones)
{for(var i=0,j=interactCache.length;i<j;++i)
{_drop=interactCache[i];if(typeof _drop.onDragFinish=="function")
{_drop.onDragFinish.call(_drop.scope||window,_drop,drag,x,y);}}}
currentDrag=null;currentDrop=null;currentScroll=null;endScroll(x,y);setTimeout(function()
{$(document.body).removeClass("doing-drag");},1);}
prevX=prevY=null;curX=curY=null;}
function refreshCaches()
{if(currentDrag&&!bareBones)
{cacheScrolls();cacheDrops();}}
function cacheDrops()
{var drag=currentDrag,dragEl=drag.element;dropCache=[];interactCache=[];for(var i=0,j=droppables.length;i<j;++i)
{var drop=droppables[i],dropEl=drop.element;if(drop.enabled&&dropEl.interactsWith(dragEl)&&!dropEl.isDescendentOf(dragEl)&&!withinDisabledEl(dropEl))
{interactCache.push(drop);var region=dropEl.getRegion();if(region)
{dropEl.data('drop.region',region);dropCache.push(drop);}}}}
function getDrop(x,y)
{var draggingOverSettings=false;var settingsEl=null;$('.bk-over-hanging-drops').each(function()
{var el=$(this);if(el.isVisible())
{var elRegion=el.getRegion();if(elRegion!=null)
{if(x>=elRegion.left&&y>=elRegion.top&&x<elRegion.right&&y<elRegion.bottom)
{draggingOverSettings=true;settingsEl=el;}}}});var drops=(dropCache||[]),match=null,matchEl=null;for(var i=0,j=drops.length;i<j;++i)
{var drop=drops[i],dropEl=drop.element,region=dropEl.data('drop.region');if(x>=region.left&&y>=region.top&&x<region.right&&y<region.bottom)
{if(draggingOverSettings==true&&settingsEl!=null)
{if(dropEl.isDescendentOf(settingsEl))
{match=drop;matchEl=dropEl;}}
else
{if((!match&&draggingOverSettings==false)||dropEl.isDescendentOf(matchEl))
{match=drop;matchEl=dropEl;}}}}
return match;}
function processDrop(x,y)
{var drop=getDrop(x,y),drag=currentDrag,dragEl=drag.element;if(currentDrop)
{if(!drop||drop!=currentDrop||currentScroll)
{if(currentDrop&&typeof currentDrop.onDragExit=="function")
{currentDrop.onDragExit.call(currentDrop.scope||window,drag,x,y);}}}
if(!currentScroll&&drop)
{if(drop!=currentDrop&&typeof drop.onDragEnter=="function")
{drop.onDragEnter.call(drop.scope||window,drag,x,y);}
if(typeof drop.onDragMove=="function")
{drop.onDragMove.call(drop.scope||window,drag,x,y);}
currentDrop=drop;}
else
{currentDrop=null;}}
function cacheScrolls()
{var drag=currentDrag,dragEl=drag.element;scrollCache=[];if(!disableScrolls)
{for(var i=0,j=scrollables.length;i<j;++i)
{var scroll=scrollables[i],scrollEl=scroll.element;if(scrollEl.interactsWith(dragEl)&&!scrollEl.isDescendentOf(dragEl,true))
{var region=scrollEl.getRegion(true);if(region)
{var l=region.left,t=region.top,r=region.right,b=region.bottom,width=r-l,height=b-t,ht=Math.max(width>>3,20),hd=Math.max(width>>4,4),vt=Math.max(height>>3,20),vd=Math.max(height>>4,4);scrollEl.data('scroll.cache',[l,t,r,b,l+ht,r-ht,t+vt,b-vt,(ht+hd)>>4,(vt+vd)>>4]);scrollCache.push(scroll);}}}}}
function getScroll(x,y)
{var scrolls=scrollCache||[],diffX=prevX!==null?(x-prevX):0,diffY=prevY!==null?(y-prevY):0;for(var i=0,j=scrolls.length;i<j;++i)
{var scroll=scrolls[i],scrollEl=scroll.element,cache=scrollEl.data('scroll.cache');var l=cache[0],t=cache[1],r=cache[2],b=cache[3],hl=cache[4],hr=cache[5],vt=cache[6],vb=cache[7],h=cache[8],v=cache[9];if(x>=l&&x<r&&y>=t&&y<b)
{var directions=[],speed=0;if(scrollEl.scrollLeft()>0&&x<hl&&diffX<=0)
{directions.push("l");speed=Math.max(Math.ceil((hl-x)/h),speed);}
else if((scrollEl.scrollLeft()+scrollEl.width())<scrollEl.attr('scrollWidth')&&x>hr&&diffX>=0)
{directions.push("r");speed=Math.max(Math.ceil((x-hr)/h),speed);}
if(scrollEl.scrollTop()>0&&y<vt&&diffY<=0)
{directions.push("u");speed=Math.max(Math.ceil((vt-y)/v),speed);}
else if((scrollEl.scrollTop()+scrollEl.height())<scrollEl.attr('scrollHeight')&&y>vb&&diffY>=0)
{directions.push("d");speed=Math.max(Math.ceil((y-vb)/v),speed);}
if(directions.length>0&&speed>0)
{scrollEl.data('scroll.directions',directions);scrollEl.data('scroll.speed',speed);return scroll;}}}
return null;}
function endScroll()
{if(currentScroll&&currentDrag)
{refreshCaches();currentScroll=null;processDrop(lastX,lastY);}
if(scrollInterval)
{clearInterval(scrollInterval);scrollInterval=null;}}
function processScroll(x,y)
{var scroll=null;if(currentScroll)
{scroll=getScroll(x,y);if(!scroll)
{refreshCaches();endScroll();}}
else
{scroll=getScroll(x,y);if(scroll!==null&&!scrollInterval)
{scrollInterval=setInterval(function()
{var scroll=currentScroll,scrollEl=scroll.element,directions=scrollEl.data('scroll.directions'),speed=scrollEl.data('scroll.speed');if(directions&&directions.length)
{var prev=0,h=0,v=0;for(var i=0,j=directions.length;i<j;++i)
{switch(directions[i])
{case"l":if(scrollEl.scrollLeft()>0)
{scrollEl.scrollLeft(scrollEl.scrollLeft()-speed);}
else
{endScroll();}
break;case"u":if(scrollEl.scrollTop()>0)
{scrollEl.scrollTop(scrollEl.scrollTop()-speed);}
else
{endScroll();}
break;case"r":if((scrollEl.scrollLeft()+scrollEl.width())<scrollEl.attr('scrollWidth'))
{scrollEl.scrollLeft(scrollEl.scrollLeft()+speed);}
else
{endScroll();}
break;case"d":if((scrollEl.scrollTop()+scrollEl.height())<scrollEl.attr('scrollHeight'))
{scrollEl.scrollTop(scrollEl.scrollTop()+speed);}
else
{endScroll();}
break;}}}},10);}}
currentScroll=scroll;}
BaseKit.Element.Plugin.Drag=BaseKit.Class.create({superclass:BaseKit.Element.Plugin,methods:{construct:function(element,config)
{this.callParent(element,config);element.unselectable='on';this.clone=(config.clone==true);this.keepClone=(config.keepClone===true);this.cloneParent=(config.cloneParent==true);this.styles=config.styles||{};var config2={element:element,handle:config.handle||null,enableKey:config.enableKey||null,onDragStart:this.onDragStart,onBeforeDragStart:this.onBeforeDragStart,onDragMove:this.onDragMove,onDragFinish:this.onDragFinish,scope:this,custom:(config.custom==true),enabled:(config.enabled!==false),lockX:(config.lockX==true),lockY:(config.lockY==true)};addDraggable(config2);this.enable=function()
{config2.enabled=true;};this.disable=function()
{config2.enabled=false;};},destruct:function()
{removeDraggable(this.element);},onDragStart:function(drag,x,y,event)
{var element=(this.cloneParent==true)?this.element.parent():this.element,elOffset=element.offset(),config=this.config;this.startX=x;this.startY=y;this.deltaX=x-elOffset.left;this.deltaY=y-elOffset.top;if(this.clone)
{this.proxy=element.absolutize({clone:true});this.proxy.css('zIndex',config.zIndex||2000);this.proxy.className=this.proxy.className+' bk-proxy-dragging';if(typeof config.opacity!="undefined"&&config.opacity>=0&&config.opacity<1.0)
{this.proxy.css("opacity",config.opacity);}
if(this.styles)
{this.proxy.css(this.styles);}
if(config.style)
{this.proxy.css(config.style);}}
else
{this.proxy=element;}
this.constrain=this.config.constrain?this.config.constrain.getRegion():null;drag.proxy=this.proxy;return element.callback(this.config.onDragStart,[element,x,y,event]);},onDragMove:function(x,y,event)
{var element=(this.cloneParent==true)?this.element.parent():this.element;if(this.config.custom)
{element.callback(this.config.onDragMove,[this.proxy,x,y,event]);}
else
{var elX=x-this.deltaX,elY=y-this.deltaY;if(this.config.constrain)
{var constrain=this.config.constrain.getRegion();elX=Math.min(Math.max(elX,constrain.left),(constrain.right)-this.proxy.width());elY=Math.min(Math.max(elY,constrain.top),constrain.bottom-this.proxy.height());this.proxy.css('width',parseInt(element.width())+'px');this.proxy.css('height',parseInt(element.height())+'px');}
if(this.proxy!=null)
{this.proxy.css({left:elX+'px',top:elY+'px'});}
element.callback(this.config.onDragMove,[this.proxy,x,y,event]);}},onDragFinish:function(cursorX,cursorY)
{var offset={left:0,top:0},element=(this.cloneParent==true)?this.element.parent():this.element;if(this.clone&&this.keepClone!==true)
{offset=this.proxy.offset();this.proxy.remove();this.proxy=null;}
else
{offset=element.offset();}
element.callback(this.config.onDragFinish,[element,offset.left,offset.top,cursorX,cursorY]);},onBeforeDragStart:function(drag,x,y,event)
{var element=(this.cloneParent==true)?this.element.parent():this.element;element.callback(this.config.onBeforeDragStart,[element,x,y,event]);}}});BaseKit.Element.Plugin.Drop=BaseKit.Class.create({superclass:BaseKit.Element.Plugin,methods:{construct:function(element,config)
{this.callParent(element,config);var drop=addDroppable({element:element,onDragStart:this.onDragStart,onDragFinish:this.onDragFinish,onDragEnter:this.onDragEnter,onDragMove:this.onDragMove,onDragExit:this.onDragExit,onDragDrop:this.onDragDrop,scope:this,enabled:true});element.disableDrop=function()
{drop.enabled=false;};element.enableDrop=function()
{drop.enabled=true;}},destruct:function()
{removeDroppable(this.element);if(!BaseKit.Browser.ie)
{delete this.element.disableDrop;}
else
{this.element.disableDrop=function(){return;};}},onDragStart:function(drag,x,y)
{var dropEl=(this.cloneParent==true)?this.element.parent():this.element,dragEl=drag.element;dropEl.callback(this.config.onDragStart,[dropEl,dragEl,x,y]);},onDragFinish:function(drag,drop)
{var dropEl=(this.cloneParent==true)?this.element.parent():this.element,dragEl=drag.element;dropEl.callback(this.config.onDragFinish,[dropEl,dragEl,drop,drag]);},onDragEnter:function(drag,x,y)
{var hoverClass=this.config.hoverClass,dropEl=(this.cloneParent==true)?this.element.parent():this.element,dragEl=drag.element;if(hoverClass)
{dropEl.addClass(hoverClass);}
dropEl.callback(this.config.onDragEnter,[dropEl,dragEl,x,y]);},onDragMove:function(drag,x,y)
{var dropEl=(this.cloneParent==true)?this.element.parent():this.element,dragEl=drag.element;dropEl.callback(this.config.onDragMove,[dropEl,dragEl,x,y]);},onDragExit:function(drag,x,y)
{var hoverClass=this.config.hoverClass,dropEl=(this.cloneParent==true)?this.element.parent():this.element,dragEl=drag.element;if(hoverClass)
{dropEl.removeClass(hoverClass);}
dropEl.callback(this.config.onDragExit,[dropEl,dragEl,x,y]);},onDragDrop:function(drag,drop,x,y)
{var dropEl=(this.cloneParent==true)?this.element.parent():this.element,dragEl=drag.element,offset=dropEl.offset();if(drag.custom)
{dropEl.callback(this.config.onDragDrop,[dropEl,dragEl,x-offset.left,y-offset.top,x,y]);}
else
{dropEl.callback(this.config.onDragDrop,[dropEl,dragEl,x-offset.left,y-offset.top,x,y]);}}}});BaseKit.Element.Plugin.Scroll=BaseKit.Class.create({superclass:BaseKit.Element.Plugin,globals:{clip:function(element,region)
{var left=region.left,top=region.top,right=region.right,bottom=region.bottom;for(var i=0,j=scrollables.length;i<j;++i)
{var scroll=scrollables[i],scrollEl=scroll.element;if(element.isDescendentOf(scrollEl))
{var offset=scrollEl.offset(),l=offset.left,t=offset.top,r=l+scrollEl.innerWidth(),b=t+scrollEl.innerHeight();if(left>r||top>b||right<l||bottom<t)
{return null;}
left=Math.max(left,l);top=Math.max(top,t);right=Math.min(right,r);bottom=Math.min(bottom,b);}}
region.left=left;region.top=top;region.right=right;region.bottom=bottom;return region;}},methods:{construct:function(element,config)
{this.callParent(element,config);addScrollable({element:element});}}});})();if(!this.JSON){this.JSON={};}
(function(){function f(n){return n<10?'0'+n:n;}
if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z':null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}
function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
if(typeof rep==='function'){value=rep.call(holder,key,value);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+
partial.join(',\n'+gap)+'\n'+
mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){k=rep[i];if(typeof k==='string'){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+
mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value});};}
if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
return reviver.call(holder,key,value);}
text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+
('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}
if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}
throw new SyntaxError('JSON.parse');};}}());(function()
{var timeout=null;var player=null;var playerID=null;BaseKit.Framework_Control_Video=BaseKit.Class.create({superclass:BaseKit.Framework_Control,methods:{construct:function()
{this.callParent.apply(this,arguments);this.player=null;},attach:function()
{this.callParent.apply(this,arguments);var that=this;this.playerID=this.makeID().replace(".","_");if(!this.deferLoading)
{this.setupPlayer();}},setupPlayer:function()
{var that=this;if(typeof flowplayer!='function')
{setTimeout(function()
{that.setupPlayer();},100);return;}
var playerConfig={clip:{accelerated:true,autoPlay:that.autoplay,autoBuffering:that.autobuffering,bufferLength:that.bufferlength,onBegin:function(){this.getPlugin("play").css({opacity:1});},onFinish:function(){this.getPlugin("play").css({opacity:0});}},controls:{autoHide:that.visiblecontrolbar?'never':'always'}};if(this.useStreaming)
{playerConfig.plugins={rtmp:{url:this.assetHost+"/assets/flowplayer/flowplayer.rtmp-3.2.2.swf",netConnectionUrl:this.netConnectionURL}};playerConfig.clip={provider:"rtmp",url:this.streamFileName}}
this.player=flowplayer(this.playerID,{wmode:"transparent",cachebusting:false,src:this.assetHost+"/assets/flowplayer/flowplayer-3.2.3.swf",expressInstall:this.assetHost+"/assets/flowplayer/expressInstall.swf",version:[that.majorversion,that.minorversion],onFail:function(){document.getElementById(that.id+"__info").html('<p>'+that.versionmessage+' '+this.getVersion()+'</p>');}},playerConfig);},getPlayer:function()
{return this.player;},setClip:function(src,autoplay,buffer)
{if(this.player!=null)
{if(buffer!==true)
{buffer=false;}
if(this.player.getState()>1)
{this.player.stop();}
if(buffer!==true)
{buffer=false;}
this.player.getClip(0).update({url:src,buffer:buffer});if(autoplay===true)
{this.player.play();}}},play:function()
{if(this.player!=null)
{this.player.play();}}}});})();(function()
{BaseKit.Framework_Control_Selectoptions=BaseKit.Class.create({superclass:BaseKit.Framework_Control,methods:{construct:function()
{this.callParent.apply(this,arguments);},attach:function()
{this.callParent.apply(this,arguments);var that=this,options=this.$$("select-option"),values=this.$$("select-value"),texts=this.$$("select-text"),dels=this.$$("select-delete");options.each(function(index)
{var option=$(this);values.eq(index).keyup(function()
{that.notifyChange();});texts.eq(index).keyup(function()
{that.notifyChange();});dels.eq(index).click(function()
{that.removeControl(option);that.notifyChange();});});if(this.$("select-append").length)
{this.$("select-append").click(function()
{options=that.$$("select-option");var end=options.last();if(!end.length)
{end=that.$("select-options-padding");}
that.addControl(end);that.notifyChange();});}},notifyChange:function()
{var values=this.$$("select-value"),texts=this.$$("select-text"),value=[];if(values.length>0)
{values.each(function(index)
{value.push({value:values.eq(index).val(),text:texts.eq(index).val()});});}
this.data=value;this.valuesChanged();},valuesChanged:function()
{if(this.dataChanged==false)
{this.dataChanged=true;this.fireEvent('dataChanged');}},addControl:function(after,_value,_text)
{var value=$('<input></input>').addClass('framework-control-input-text '+this.makeClass('select-value')).attr('type','text').val(value||'Value');var text=$('<input></input>').addClass('framework-control-input-text '+this.makeClass('select-text')).attr('type','text').val(text||'Text');var del=$('<div></div>').addClass(this.makeClass('select-delete'));var option=$('<div></div>').addClass(this.makeClass('select-option'));option.append(value,text,del);option.insertAfter(after);var that=this;value.keyup(function()
{that.notifyChange();});text.keyup(function()
{that.notifyChange();});del.click(function()
{that.removeControl(option);that.notifyChange();});},removeControl:function(el)
{el.remove();}}});})();(function()
{BaseKit.Framework_Control_Calendar=BaseKit.Class.create({superclass:BaseKit.Framework_Control,methods:{construct:function()
{this.callParent.apply(this,arguments);this.jsDateObj=new Date();this.jsNextMonth=new Date();var that=this;this.$('buttonRight').click(function()
{that.nextMonth();});this.$('buttonLeft').click(function()
{that.lastMonth();});this.selectedNode=null;this.nodes=this.$$("calendarCell");for(var i=0;i<this.nodes.length;i++)
{$(this.nodes[i]).data('node',i+1);}
this.generateCalendar();},highlight:function(noHighlight)
{for(var i=0;i<this.nodes.length;i++)
{if(!(i<this.jsDateObj.getDay())&&!(i>((this.jsDateObj.getDay()-1)+this.lastDate)))
{if((this.getViewDay()==(i-(this.jsDateObj.getDay()-1)))&&!noHighlight)
{$(this.nodes[(i)]).addClass('bk-highlighted');}
else
{$(this.nodes[(i)]).removeClass('bk-highlighted');}}}},setJSDates:function()
{this.jsDateObj.setMonth((~~(this.getViewMonth())-1),1);this.jsDateObj.setYear(this.getViewYear());this.jsNextMonth.setMonth((~~(this.getViewMonth())-1),32);this.lastDate=32-this.jsNextMonth.getDate();this.jsNextMonth.setDate(1);this.lastMonthDateEnd=new Date((new Date(this.getViewYear(),(this.getViewMonth()-1),1))-1).getDate();},generateCalendar:function()
{var that=this;this.setJSDates();if(this.selectedNode!=null)
{this.selectedNode.removeClass('bk-selected');this.selectedNode=null;}
for(var i=0,j=this.nodes.length;i<j;i++)
{var el=$(this.nodes[i]);el.unbind();if(i<this.jsDateObj.getDay())
{el.removeClass('bk-selectable');el.addClass('bk-osm');el.html(this.lastMonthDateEnd-this.jsDateObj.getDay()+i-1);}
else if(i>((this.jsDateObj.getDay()-1)+this.lastDate))
{el.removeClass('bk-selectable');el.addClass('bk-osm');el.html(i-((this.jsDateObj.getDay()-1)+this.lastDate));}
else
{el.click(function(event)
{that.selectDate(event,i);});el.mouseover(function(event)
{that.onMouseOver(event);});el.mouseout(function(event)
{that.onMouseOut(event);});$(this.nodes[i]).data('date',i-this.jsDateObj.getDay()+1);el.removeClass('bk-osm');el.addClass('bk-selectable');if((this.jsDateObj.getFullYear()==this.selectedyear)&&((this.jsDateObj.getMonth()+1)==this.selectedmonth)&&((i-(this.jsDateObj.getDay()-1))==this.selectedday))
{el.html('<a class="bk-selector bk-selected">'+(i-(this.jsDateObj.getDay()-1))+'</a>');this.selectedNode=el.children().first();}
else
{el.html('<a class="bk-selector">'+(i-(this.jsDateObj.getDay()-1))+'</a>');}}}
this.$("dateHeader").html(this.months[(parseInt(this.getViewMonth())-1)]+' '+this.getViewYear());},nextMonth:function()
{if(this.getViewMonth()==12)
{this.setViewMonth(1);this.setViewYear(parseInt(this.getViewYear())+1);}
else
{this.setViewMonth(parseInt(this.getViewMonth())+1);}
this.generateCalendar();},lastMonth:function()
{if(this.getViewMonth()==1)
{this.setViewMonth(12);this.setViewYear(parseInt(this.getViewYear())-1);}
else
{this.setViewMonth(parseInt(this.getViewMonth())-1);}
this.generateCalendar();},updateDate:function()
{this.value=this.getSelectedYear()+'-'+this.getSelectedMonth()+'-'+this.getSelectedDay();},selectDate:function(event,i)
{if(event.target.tagName=="A")
{var element=$(event.target);if(this.selectedNode!=null)
{this.selectedNode.removeClass('bk-selected');}
this.setJSDates();this.jsDateObj.setDate(~~(element.parent().data('date')),1);this.setSelectedDay(~~(element.parent().data('date')),1);this.setSelectedMonth(this.getViewMonth());this.setSelectedYear(this.getViewYear());this.selectedNode=element;this.selectedNode.addClass('bk-selected');this.updateDate();if(this.focusID!=null)
{var widget=BaseKit.Framework_Base.getByID(this.focusID);widget.onChange(this.value);}
this.fireEvent('onChange');}},leapYear:function(year)
{if(year%4==0)
{if(year%100!=0)
{return true;}
else
{if(year%400==0)
{return true;}
else
{return false;}}}
return false;},pad:function(n,c)
{if((n=n+"").length<c)
{return new Array(++c-n.length).join("0")+n;}
else
{return n;}},onMouseOver:function(event)
{if(event.target.tagName=="A"&&event.target.parentNode)
{var el=event.target.parentNode;$(el).addClass('bk-highlighted');}},onMouseOut:function(event)
{if(event.target.tagName=="A")
{this.highlight(true);this.setViewDay(~~(this.getSelectedDay()));}},getSelectedDay:function()
{if(this.selectedday>0)
{return this.pad(this.selectedday,2);}
else
{return this.selectedday;}},getSelectedMonth:function()
{return this.pad(this.selectedmonth,2);},getSelectedYear:function()
{return this.pad(this.selectedyear,2);},setSelectedDay:function(day)
{this.selectedday=day;},setSelectedMonth:function(month)
{this.selectedmonth=month;},setSelectedYear:function(year)
{this.selectedyear=year;},getViewDayNode:function()
{return $(this.nodes[(~~(this.jsDateObj.getDay())+~~(this.getViewDay()))-1]).children()[0];},getViewDay:function()
{return this.viewDay;},getViewMonth:function()
{return~~(this.viewMonth);},getViewYear:function()
{return this.pad(this.viewYear,2);},setViewDay:function(day)
{this.viewDay=day;},setViewMonth:function(month)
{this.viewMonth=month;},setViewYear:function(year)
{this.viewYear=year;}}});})();(function()
{var results=null,selectedEl=null,scope=null,coords=null;function onScroll(event,param)
{var scope=param[0],coords=param[1],el=param[2];scope.align(coords.getRegion(),el);}
BaseKit.Framework_Control_Results=BaseKit.Class.create({superclass:BaseKit.Framework_Control,globals:{},methods:{construct:function()
{this.callParent.apply(this,arguments);},attach:function()
{this.callParent.apply(this,arguments);this.buttons['closeme'].handleEvent("onClick",this,"clearResults");},displayResults:function(html,coords,width,el,box)
{this.align(coords,el);this.$().css('width',(width-14)+'px');this.$('content').html(html);this.showResults();var that=this,mode=BaseKit.Framework_Page.getMode(),page=this.getRoot(),editor=page.primary['editor'];if(BaseKit.Browser.ie)
{var buttonID=this.makeID().replace(".","_");var btn=document.getElementById(buttonID).getElementsByTagName('button');if(btn!=null&&btn.length>0)
{btn[0].attachEvent('onclick',function(){that.clearResults();});}}
if(mode=='edit'||mode=='preview'||mode=='themeselector'||mode=='admin')
{editor.$('primary').scroll(function()
{onScroll(event,[that,box.$(),el]);});}},align:function(coords,el)
{if(coords==null)
{this.hideResults();return;}
var scrollTop=0;selectedEl=el;if(BaseKit.Browser.ie)
{var left=coords.left+2;var top=coords.top+25;}
else
{var left=coords.left;var top=coords.top+23;}
if(BaseKit.Browser.firefox)
{scrollTop=parseInt(window.pageYOffset);}
else if(BaseKit.Browser.ie&&document.documentElement&&document.documentElement.scrollTop)
{scrollTop=parseInt(document.documentElement.scrollTop);}
else
{scrollTop=parseInt(document.body.scrollTop);}
$('#popups').css({'left':left+'px','top':top+'px'});},clearResults:function()
{if(selectedEl!==null)
{if(typeof selectedEl.resetSearch=='function')
{selectedEl.resetSearch();}}
this.$('content').html('');this.hideResults();},showResults:function()
{var page=this.getRoot();BaseKit.Framework_Control_Datepicker.detachScroll(this);if($bk('page-calendars__calendar'))
{$bk('page-calendars__calendar').$().hide();}
$('#popups').show();this.$().show();},hideResults:function()
{$('#popups').show();this.$().hide();var mode=BaseKit.Framework_Page.getMode(),page=this.getRoot(),editor=page.primary['editor'];if(mode=='edit'||mode=='preview'||mode=='themeselector'||mode=='admin')
{editor.$('primary').unbind('scroll',onScroll);}}}});})();(function()
{function onScroll(event,params)
{var scrollElement=event.target;var scope=params[0];var container=params[1];scope.align(container,scope.$('inputcontainer'),scrollElement);}
var calendar=null;BaseKit.Framework_Control_Datepicker=BaseKit.Class.create({superclass:BaseKit.Framework_Control,globals:{detachScroll:function(scope)
{var page=scope.getRoot(),editor=page.primary['editor'],mode=BaseKit.Framework_Page.getMode();if(mode=='edit'||mode=='preview'||mode=='themeselector'||mode=='admin')
{editor.$('primary').unbind('scroll',onScroll);}
else
{$(document).unbind('scroll',onScroll);}}},methods:{construct:function()
{this.callParent.apply(this,arguments);if(!$('#popups').length)
{$('<div></div>').attr('id','popups').appendTo(document.body);}},attach:function()
{this.callParent.apply(this,arguments);var that=this;this.$("button").click(function()
{that.checkIfCalExists();});if(!this.splitDate)
{this.$("input").blur(function(){that.updateValue();});this.$("input").keydown(function(event)
{that.validNumbers(event);});}
else
{this.$("inputday").blur(function(){that.updateValue();});this.$("inputmonth").blur(function(){that.updateValue();});this.$("inputyear").blur(function(){that.updateValue();});this.$("inputday").keydown(function(event)
{that.validNumbers(event);});this.$("inputmonth").keydown(function(event)
{that.validNumbers(event);});this.$("inputyear").keydown(function(event)
{that.validNumbers(event);});}},checkIfCalExists:function()
{if(this.calendarCreated==true)
{this.toggleCalendar();}
else
{this.createCalendar();}},updateTextbox:function()
{if(!this.splitDate)
{this.$("input").val(calendar.value);}
else
{this.$("inputday").val(calendar.getSelectedDay());this.$("inputmonth").val(calendar.getSelectedMonth());this.$("inputyear").val(calendar.getSelectedYear());}},onChange:function(date)
{this.value=date;this.updateTextbox();this.toggleCalendar();},toggleCalendar:function()
{var page=this.getRoot(),editor=page.primary['editor'],that=this;if(calendar==null)
{if(this.editorFlag==false)
{calendar=this.calendars["calendar"];}
else
{calendar=BaseKit.Framework_Page.getCalendar();}}
calendar.setViewYear(calendar.getSelectedYear());calendar.setViewMonth(calendar.getSelectedMonth());calendar.setViewDay(calendar.getSelectedDay());calendar.generateCalendar();if($bk('page-results__results'))
{$bk('page-results__results').$().hide();}
if(this.editorFlag==true)
{var mode=BaseKit.Framework_Page.getMode();if($('#popups').isVisible())
{calendar.focusID=null;calendar.$().hide();$('#popups').hide();if(mode=='edit'||mode=='preview'||mode=='themeselector'||mode=='admin')
{editor.$('primary').unbind('scroll',onScroll);}
else
{$(document).unbind('scroll',onScroll);}
BaseKit.Framework_Page.detachBodyClick(that.toggleCalendar,that);}
else
{BaseKit.Framework_Control_Datepicker.detachScroll(this);if($('#page-calendars__results').length)
{$('#page-calendars__results').hide();}
calendar.focusID=this.id;this.align($('#popups'),this.$('inputcontainer'));$('#popups').show();calendar.$().show();BaseKit.Framework_Page.attachBodyClick(that.toggleCalendar,that);if(mode=='preview'||mode=='themeselector')
{editor.$('primary').scroll(function(event)
{onScroll(event,[that,$('#popups')]);});}
else if(mode=='normal')
{$(document).scroll(function(event)
{onScroll(event,[that,$('#popups')]);});}}}
else
{if(this.$("container").isVisible())
{this.$("container").hide();$(document.body).unbind('scroll',onScroll);BaseKit.Framework_Page.detachBodyClick(that.toggleCalendar,that);}
else
{this.$("container").show();$(document.body).unbind('scroll',onScroll);BaseKit.Framework_Page.attachBodyClick(that.toggleCalendar,that);}}},align:function(calendarEl,to,scrollElement)
{var toRegion=to.getRegion(),calendarElRegion=calendarEl.getRegion(),height=parseInt(to.height()),scrollTop=0;var mode=BaseKit.Framework_Page.getMode();if(BaseKit.Browser.firefox)
{scrollTop=window.pageYOffset;}
else
{scrollTop=document.body.scrollTop;}
if(toRegion!=null)
{calendarEl.css({left:toRegion.left+'px',top:toRegion.top+height+'px'});}
else if(mode!='edit')
{this.toggleCalendar();}},validNumbers:function(event)
{var go=false,keychar=String.fromCharCode(event.keyCode);var an=/([0-9-]+)$/;if(event.shiftKey==true||event.altKey==true||event.ctrlKey==true)
{event.stopPropagation();event.preventDefault();return false;}
else if((event.keyCode==null)||(event.keyCode==0)||(event.keyCode==8)||(event.keyCode==9)||(event.keyCode==13)||(event.keyCode==27)||(event.keyCode==37)||(event.keyCode==39))
{go=true;}
else if(an.test(keychar)==true)
{go=true;}
else
{event.stopPropagation();event.preventDefault();return false;}},updateValue:function()
{if(!this.splitDate)
{this.value=this.$("input").val();}
else
{this.value=(this.$("inputyear").val()!=''?this.$("inputyear").val():'0000')+'-'+(this.$("inputmonth").val()!=''?this.$("inputmonth").val():'00')+'-'+(this.$("inputday").val()!=''?this.$("inputday").val():'00');}},resetValue:function()
{if(!this.splitDate)
{this.value='0000-00-00';this.$("input").val('');}
else
{this.value='0000-00-00';this.$("inputyear").val('');this.$("inputmonth").val('');this.$("inputday").val('');}},update:function(state)
{this.callParent.apply(this,arguments);if(typeof state.value!="undefined"&&state.value!==null&&state.value.length>0)
{var date=this.value;if(date=="0000-00-00")
{this.$("inputday").val('');this.$("inputmonth").val('');this.$("inputyear").val('');}
else
{var bits=date.split("-");this.$("inputday").val(bits[2]);this.$("inputmonth").val(bits[1]);this.$("inputyear").val(bits[0]);}}}}});})();(function()
{BaseKit.Framework_Control_Input=BaseKit.Class.create({superclass:BaseKit.Framework_Control,methods:{construct:function()
{this.callParent.apply(this,arguments);var validationMessage=null;},attach:function()
{this.callParent.apply(this,arguments);},update:function()
{this.callParent.apply(this,arguments);},validate:function()
{if(this.validationMessage&&this.validationMessage!="")
{if(this.getValue()=="")
{BaseKit.Logger.log(this.validationMessage,"growl");this.$().focus();return false;}}
return true;}}});})();(function()
{BaseKit.Framework_Control_Input_Text=BaseKit.Class.create({superclass:BaseKit.Framework_Control_Input,methods:{construct:function()
{this.callParent.apply(this,arguments);this.timeout=null;},attach:function()
{this.callParent.apply(this,arguments);var that=this;this.$().keydown(function(e)
{that.onKeyDown(e);});this.$().keyup(function(e)
{that.onKeyUp(e);});this.$().change(function()
{that.onChange();});this.$().bind('paste mousedown',function(event)
{if(event.type=='paste'||(event.type=='mousedown'&&event.which==3))
{this.timeout=setTimeout(function()
{that.previousValue=that.value;that.value=that.$().val();that.onChange();},1000);}});this.$().focus(function()
{that.onFocus();});this.$().blur(function()
{that.onBlur();});if(this.setButton==true)
{var button=$('#'+this.makeID('button'));button.mousedown(function()
{button.addClass('clicked');});button.mouseup(function(event)
{button.removeClass('clicked');that.onClick(event);});}},update:function()
{this.callParent.apply(this,arguments);if(this.$().val()!=this.value&&this.noUpdate==false)
{this.$().val(this.value);}},onKeyUp:function(e)
{if(e.keyCode==27&&this.previousValue!=null)
{var current=this.$().val();this.value=this.previousValue;this.$().val(this.previousValue);this.previousValue=current;}
else
{this.value=this.$().val();this.fireEvent('keyUp',e.keyCode);}
if(this.timeout)
{clearTimeout(this.timeout);}
if(e.keyCode==13)
{this.previousValue=this.value;this.fireEvent('onEnter',this.value);}
var that=this;this.timeout=setTimeout(function()
{that.fireEvent('onChange');},1000);},onKeyDown:function(e)
{if(e.keyCode==27&&this.previousValue!=null)
{var current=this.$().val();this.value=this.previousValue;this.$().val(this.previousValue);this.previousValue=current;}
else
{this.value=this.$().val();this.fireEvent('keyDown',e.keyCode);}
if(this.timeout)
{clearTimeout(this.timeout);}
if(e.keyCode==13)
{this.previousValue=this.value;this.fireEvent('onEnterDown',this.value);}},setValue:function(value)
{this.$().val(value);this.value=value;},getValue:function()
{return(this.value!=null)?this.value:'';},onChange:function()
{this.fireEvent('onChange',this.value);},onClick:function(event)
{this.fireEvent('onEnter',this.value,event);},onFocus:function(event)
{this.fireEvent('onFocus');},onBlur:function()
{this.value=this.$().val();this.fireEvent('onBlur');},clearValue:function()
{this.value='';this.$().val('');},handleEvent:function()
{this.callParent.apply(this,arguments);},focus:function()
{try
{this.$().focus();}
catch(e){}},setDisabled:function()
{this.disable();},setEnabled:function()
{this.enable();},disable:function()
{this.disabled=true;this.$().readOnly=true;this.$().prop('disabled',this.disabled);this.$().prop('readonly',true);this.$().css('opacity',0.7);},enable:function()
{this.disabled=false;this.$().readOnly=false;this.$().prop('readonly',false);this.$().prop('disabled',this.disabled);this.$().css('opacity',1);}}});})();(function()
{BaseKit.Framework_Control_Input_Integer=BaseKit.Class.create({superclass:BaseKit.Framework_Control,methods:{construct:function()
{this.callParent.apply(this,arguments);this.timeout=null;},attach:function()
{this.callParent.apply(this,arguments);var that=this;this.$().keyup(function()
{that.onKeyUp();});this.$().change(function()
{that.onChange();});this.$().focus(function()
{that.onFocus();});this.$().blur(function()
{that.onBlur();});},update:function()
{this.callParent.apply(this,arguments);if(this.$().val()!=this.value)
{this.$().val(this.value);}},onKeyUp:function(e)
{this.fireEvent("keyUp",e.keyCode);this.value=this.$().val();if(this.timeout)
{clearTimeout(this.timeout);}
if(e.keyCode==13)
{this.fireEvent("onEnter");}
var that=this;this.timeout=setTimeout(function()
{that.fireEvent("onChange");},1000);},setValue:function(value)
{this.$().val(value);this.value=value;},onChange:function()
{this.fireEvent("change");},onFocus:function(e)
{this.fireEvent("focus");},onBlur:function()
{this.value=this.$().val();this.fireEvent("blur");},clearValue:function()
{this.value='';this.$().val('');},handleEvent:function()
{this.callParent.apply(this,arguments);},focus:function()
{try
{this.$().focus();}
catch(e){}}}});})();(function()
{BaseKit.Framework_Control_Input_Select=BaseKit.Class.create({superclass:BaseKit.Framework_Control,methods:{attach:function()
{this.callParent.apply(this,arguments);this.value=this.$().val();var that=this;this.$().change(function(event)
{that.onChange(event);});this.$().focus(function()
{that.onFocus();});},update:function(state)
{this.callParent.apply(this,arguments);state=state||this;if(state.data&&typeof state.data.length=="number")
{var select=this.$(),data=state.data;select.find('option').remove();for(var i=0,j=data.length;i<j;++i)
{var row=data[i],option=$('<option></option>');option.attr('text',row[this.textColumn]||"");option.attr('value',row[this.valueColumn]||"");option.html(row[this.textColumn]||"");select.append(option);}}
var el=this.$();if(el.val()!=this.value)
{el.val(this.value);}
if(el.prop('disabled')!=this.disabled)
{el.prop('disabled',this.disabled);}},setEnabled:function()
{this.disabled=false;var el=this.$();el.prop('disabled',this.disabled);el.removeClass('disabled');},setDisabled:function()
{this.disabled=true;var el=this.$();el.prop('disabled',this.disabled);el.addClass('disabled');},onChange:function(event)
{var el=this.$(),previousValue=this.value,that=this;this.text=el.prop('options')[el.prop('selectedIndex')].text;this.value=el.val();this.disabled=el.prop('disabled');this.fireEvent('onChange',this.value,event);if(BaseKit.UndoManager&&typeof BaseKit.UndoManager.unlock=='function')
{BaseKit.UndoManager.pushUndoState('custom',{widget:that,callback:function()
{that.setValue(previousValue);that.fireEvent('onChange',previousValue);}});}},onFocus:function()
{this.fireEvent("onFocus",this.value);},getSelectedIndex:function()
{return this.$().prop('selectedIndex');},getSelectedText:function()
{var el=this.$();return el.prop('options')[el.prop('selectedIndex')].text;},getValue:function()
{var el=this.$();return el.length>0?el.val():this.value;},setValue:function(value)
{for(var i in this.data)
{if(this.data.hasOwnProperty(i)&&this.data[i][this.valueColumn])
{if(this.data[i][this.valueColumn]==value)
{value=typeof(value)=='string'?value.replace(/\&quot\;/g,'"'):value;this.value=value;this.$().val(value===null?'':value);return;}}}},count:function()
{return this.data.length;}}});})();(function()
{BaseKit.Framework_Control_Input_Checkbox=BaseKit.Class.create({superclass:BaseKit.Framework_Control,methods:{attach:function()
{this.callParent.apply(this,arguments);var that=this;this.$('checkbox').click(function()
{that.onClick();});},update:function()
{this.callParent.apply(this,arguments);this.setValue(this.checked);},setValue:function(state)
{this.checked=state;this.$("checkbox").prop('checked',state);},setDisabled:function()
{this.disable();},setEnabled:function()
{this.enable();},disable:function()
{this.$('checkbox').prop({enabled:false,disabled:true});this.disabled=true;},enable:function()
{this.$('checkbox').prop({enabled:true,disabled:false});this.disabled=false;},onClick:function()
{var that=this,prev=this.checked;this.setValue(!prev);this.fireEvent("onClick",this.checked);if(this.enableUndo)
{if(BaseKit.UndoManager&&typeof BaseKit.UndoManager.unlock=='function')
{BaseKit.UndoManager.pushUndoState("custom",{widget:BaseKit.Editor.getSelectedWidget(),callback:function(undo,data)
{that.setValue(undo?prev:!prev);that.fireEvent("onClick",prev);}});}}},hide:function()
{this.$().hide();},show:function()
{this.$().show();}}});})();(function()
{BaseKit.Framework_Control_Input_Radio=BaseKit.Class.create({superclass:BaseKit.Framework_Control,methods:{construct:function()
{this.callParent.apply(this,arguments);},attach:function()
{this.callParent.apply(this,arguments);var that=this;this.$().click(function()
{that.onClick();});},onClick:function()
{this.checked=(this.$().is(':checked'))?true:false;this.$().checked=this.checked;this.fireEvent("onClick");},update:function()
{this.callParent.apply(this,arguments);}}});})();(function()
{BaseKit.Framework_Control_Input_Hidden=BaseKit.Class.create({superclass:BaseKit.Framework_Control,methods:{attach:function()
{this.callParent.apply(this,arguments);},clearValue:function()
{this.value='';this.$().val('');}}});})();(function()
{BaseKit.Framework_Control_Input_Textarea=BaseKit.Class.create({superclass:BaseKit.Framework_Control_Input,methods:{construct:function()
{this.callParent.apply(this,arguments);this.timeout=null;},attach:function()
{this.callParent.apply(this,arguments);var that=this;this.$().keyup(function(e)
{that.onKeyUp(e);});this.$().change(function()
{that.onChange();});this.$().bind('paste mousedown',function(event)
{if(event.type=='paste'||(event.type=='mousedown'&&event.which==3))
{this.timeout=setTimeout(function()
{that.previousValue=that.value;that.value=that.$().val();that.onChange();},1000);}});this.$().focus(function()
{that.onFocus();});this.$().blur(function()
{that.onBlur();});if(this.tabSize>0)
{this.$().keydown(function()
{that.onKeyDown();});}},update:function()
{this.callParent.apply(this,arguments);if(this.$().val()!=this.value)
{this.$().val(this.value);}},setValue:function(value)
{this.$().val(value);this.value=value;},getValue:function()
{return(this.value!=null)?this.value:'';},onKeyUp:function(event)
{this.fireEvent("keyUp");if(event.keyCode==27&&this.previousValue!=null)
{var current=this.$().val();this.value=this.previousValue;this.$().val(this.previousValue);this.previousValue=current;}
this.value=this.$().val();if(this.timeout)
{clearTimeout(this.timeout);}
var that=this;this.timeout=setTimeout(function()
{that.fireEvent("change");that.fireEvent("onChange");},1000);},onChange:function()
{this.fireEvent("change");this.fireEvent('onChange',this.value);},onFocus:function()
{this.fireEvent("focus");},onBlur:function()
{this.value=this.$().val();this.fireEvent("blur");},onKeyDown:function(event)
{if(event.keyCode==9)
{var txtarea=this.$(),scrollPos=txtarea.scrollTop(),strPos=0,br=((txtarea.selectionStart||txtarea.selectionStart=='0')?"ff":(document.selection?"ie":false));if(br=="ie")
{txtarea.focus();var range=document.selection.createRange();range.moveStart('character',-txtarea.value.length);strPos=range.text.length;}
else if(br=="ff")
{strPos=txtarea.selectionStart;}
var front=(txtarea.val()).substring(0,strPos),back=(txtarea.val()).substring(strPos,txtarea.val().length);for(var insert="",j=this.tabSize;j>0;--j,insert+=" ");txtarea.val(front+"    "+back);if(br=="ie")
{txtarea.focus();var range=document.selection.createRange();range.moveStart('character',-txtarea.val().length);range.moveStart('character',strPos+this.tabSize);range.moveEnd('character',0);range.select();}else if(br=="ff")
{txtarea.selectionStart=strPos+this.tabSize;txtarea.selectionEnd=strPos+this.tabSize;txtarea.focus();}
txtarea.scrollTop(scrollPos);event.stopPropagation();event.preventDefault();}}}});})();(function()
{BaseKit.Framework_Control_Input_Password=BaseKit.Class.create({superclass:BaseKit.Framework_Control,methods:{attach:function()
{this.callParent.apply(this,arguments);var that=this;this.$().keyup(function(e)
{that.onKeyUp(e);});},update:function()
{this.callParent.apply(this,arguments);if(this.$().val()!=this.value)
{this.$().val(this.value);}},setValue:function(value)
{this.$().val(value);this.value=value;},getValue:function()
{return this.value;},onKeyUp:function(event)
{this.fireEvent("keyUp");if(event.keyCode==27&&this.previousValue!=null)
{var current=this.$().val();this.value=this.previousValue;this.$().val(this.value);this.previousValue=current;}
if(event.keyCode==13)
{this.previousValue=this.value;this.fireEvent("onEnter");}
this.value=this.$().val();},focus:function()
{try
{this.$().focus();}
catch(e){}}}});})();(function()
{BaseKit.Framework_Control_PaymentMethod=BaseKit.Class.create({superclass:BaseKit.Framework_Control,methods:{attach:function()
{this.callParent.apply(this,arguments);var that=this;this.$().find('input').click(function()
{that.value=$(this).val();that.fireEvent("onClick");});},update:function()
{this.callParent.apply(this,arguments);},getValue:function()
{return(this.value!=null)?this.value:'';}}});})();(function()
{var standardbuttons={};var docCount=0;function onDocMouseUp()
{for(var id in standardbuttons)
{var standardbutton=standardbuttons[id];if(standardbutton._isMouseOver)
{standardbutton.fireEvent("onClick");}
standardbutton.$().removeClass("onclick");standardbutton._isMouseDown=false;}}
BaseKit.Framework_Control_Standardbutton=BaseKit.Class.create({superclass:BaseKit.Framework_Control,methods:{attach:function()
{this.callParent.apply(this,arguments);standardbuttons[this.id]=this;var that=this;this.$().keydown(function(event)
{if(event.keyCode==13||event.keyCode==32)
{that.$("standardbutton").addClass("onclick");that._isMouseDown=true;}});this.$().keyup(function(event)
{if(event.keyCode==13||event.keyCode==32)
{that.fireEvent("onClick");that.$("standardbutton").removeClass("onclick");return;}
if(event.keyCode==27)
{return;}});this._isMouseDown=this._isMouseOver=false;this.$().mousedown(function()
{that.$().addClass("onclick");that._isMouseDown=true;});this.$().mouseout(function()
{that.$().removeClass("onclick");that._isMouseOver=false;});this.$().mouseover(function()
{if(that._isMouseDown)
{that.$().addClass("onclick");}
that._isMouseOver=true;});if(docCount<=0)
{$(document.body).mouseup(onDocMouseUp);docCount=1;}
else
{++docCount;}},detach:function()
{this.callParent.apply(this,arguments);if(!BaseKit.Browser.ie)
{delete standardbuttons[this.id];}
else
{var loopObjects={};for(var loopID in standardbuttons)
{if(loopID!=this.id)
{loopObjects[loopID]=standardbuttons[loopID];}}
standardbuttons=loopObjects;}
if(--docCount<=0)
{$(document.body).unbind('mouseup',onDocMouseUp);docCount=0;}}}});})();(function()
{BaseKit.Framework_Control_Rating=BaseKit.Class.create({superclass:BaseKit.Framework_Control,methods:{construct:function()
{this.callParent.apply(this,arguments);},attach:function()
{this.callParent.apply(this,arguments);var that=this;this.$$('star').each(function(i)
{var el=$(this);el.mouseover(function()
{that.onMouseOver(i);});el.click(function()
{that.setValue(i+1);that.renderStars();});});this.$().mouseout(function()
{that.renderStars();});this.renderStars();},onMouseOver:function(index)
{this.$$('star').each(function(i)
{var el=$(this);el.removeClass('bk-hover bk-blank');if(i<=index)
{el.addClass('bk-hover');}});},update:function(properties)
{this.value=properties.value;this.renderStars();},renderStars:function()
{var that=this;if(this.value>this.marks)
{this.value=this.marks;}
this.$$('star').each(function(i)
{var el=$(this);el.removeClass('bk-hover bk-on bk-blank');el.addClass((i<=(that.value-1))?'bk-on':'bk-blank');});},setValue:function(value)
{this.value=value;}}});})();(function()
{BaseKit.Framework_Control_Paypalcurrencyselect=BaseKit.Class.create({superclass:BaseKit.Framework_Control_Input_Select,methods:{construct:function()
{this.callParent.apply(this,arguments);},attach:function()
{this.callParent.apply(this,arguments);}}});})();(function()
{BaseKit.Framework_Control_Window=BaseKit.Class.create({superclass:BaseKit.Framework_Control,methods:{attach:function()
{this.callParent.apply(this,arguments);var el=this.$(),that=this;if(this.draggable)
{el.addPlugin('drag',{handle:this.$('title')});}
if(this.closeable)
{this.$('close').click(function()
{that.hide();});}
if(this.helpLink)
{this.$('help').click(function()
{window.open(that.helpLink);});}},detach:function()
{this.callParent.apply(this,arguments);this.$().removePlugin('drag');},moveTo:function(x,y)
{var el=this.$();el.css("left",(this.x=x)+"px");el.css("top",(this.y=y)+"px");},show:function()
{var el=this.$();el.fadeIn('fast');if(!this.x||this.x===null)
{el.css("left",(($(window).width()-el.width())>>1)+"px");}
if(!this.y||this.y===null)
{el.css("top",(($(window).height()-el.height())>>1)+"px");}
this.visible=true;},hide:function()
{this.$().fadeOut('fast');this.visible=false;},toggle:function()
{if(this.visible)
{this.hide();}
else
{this.show();}}}});})();(function()
{BaseKit.Framework_Control_Button=BaseKit.Class.create({superclass:BaseKit.Framework_Control,methods:{attach:function()
{this.callParent.apply(this,arguments);var that=this;this.$().keydown(function(event)
{if(that.enabled)
{if(event.keyCode==13||event.keyCode==32)
{that._isMouseDown=true;}}});this.$().keyup(function(event)
{if(that.enabled)
{if(event.keyCode==13||event.keyCode==32)
{that.fireEvent("onClick");return;}
if(event.keyCode==27)
{return;}}});BaseKit.DragDrop.killBrowserDefault(this.$(),true);this._isMouseDown=this._isMouseOver=false;this.$().mousedown(function(event)
{if(BaseKit.Browser.ie)
{if(that.disabled==false)
{BaseKit.WYSIWYG.StoreSelectedTextObject();}}
if(this.fireBodyClickEvents)
{BaseKit.Framework_Page.fireBodyClicks(event,true);}
if(that.enabled)
{that.fireEvent("onClick");}});this.$().mouseout(function()
{that.$().removeClass("onclick");that._isMouseOver=false;});this.$().mouseover(function()
{if(that._isMouseDown)
{that.$().addClass("onclick");}
that._isMouseOver=true;});},setText:function(text)
{this.$("bk-button-text").html(text);this.text=text;},setTitle:function(title)
{this.title=title;this.$().attr('title',title);},enable:function()
{this.enabled=true;this.$().removeClass('disabled');this.$().addClass(this.color);},disable:function()
{this.enabled=false;if(this.$().hasClass('big'))
{return;}
this.$().removeClass(this.color);this.$().addClass('disabled');},enabled:function()
{if(this.enabled)
{return true;}
else
{return false;}},disabled:function()
{if(!this.enabled)
{return true;}
else
{return false;}}}});})();(function()
{BaseKit.Widget_Form=BaseKit.Class.create({superclass:BaseKit.Framework_Form,editor:{editorAttach:function()
{if(BaseKit.Framework_Page.isMode(['edit','preview','themeselector','admin']))
{var that=this;this.$().setup({plugins:{animation:{type:"highlight"}}});this.$().click(function()
{that.onClick();});this.setupPlugins();if(this.$('move').length)
{this.$('options-layer').setup({interact:["class.formWidgetCreated"],data:{type:"class.formWidgetCreated",value:that.id,parent:that.parent},plugins:{drag:{lockX:true,clone:true,cloneParent:true,styles:{backgroundColor:'#fff',border:'1px dashed #666',opacity:0.7},onDragStart:function()
{that.$().css('visibility','hidden');},onDragFinish:function()
{that.$().css('visibility','visible');}}}});}
if(this.$('delete').length)
{this.$('delete').mousedown(function(event)
{that.deleteWidget();event.stopPropagation();event.preventDefault();});}
if(this.$('settings').length)
{this.$('settings').mousedown(function(event)
{that.showSettings();event.stopPropagation();event.preventDefault();});}}},setupPlugins:function()
{if(BaseKit.Framework_Page.isMode(['edit','preview','themeselector','admin']))
{var that=this;if(this.$("title").length&&this.$("subtitle").length)
{if(this.$("title").hasPlugin('edit'))
{this.$("title").removePlugin('edit');}
this.$("title").setup({plugins:{animation:{type:"highlight"},edit:{enabled:BaseKit.Framework_Page.isMode(['edit']),multiLine:true,onChange:function(text)
{that.$('title').html(text.strip_tags());that.title=text.strip_tags();},onFinish:function()
{that.syncToField(that.title,that.subtitle);},next:this.$("subtitle")}}});if(this.$("subtitle").hasPlugin('edit'))
{this.$("subtitle").removePlugin('edit');}
this.$("subtitle").setup({plugins:{animation:{type:"highlight"},edit:{enabled:BaseKit.Framework_Page.isMode(['edit']),multiLine:true,onChange:function(text)
{that.$('subtitle').html(text.strip_tags());that.subtitle=text.strip_tags();},onFinish:function()
{that.syncToField(that.title,that.subtitle);}}}});}}},deleteWidget:function()
{if(BaseKit.Framework_Page.isMode(['edit']))
{var editor=BaseKit.Editor.get(),toolbar=editor.footers.panel1.controls.settings;toolbar.deleteWidget(false,this.id);}},updateMeta:function()
{if(BaseKit.Framework_Page.isMode(['edit']))
{if(this.$("title").length&&this.title!=this.$("title").html())
{this.$("title").html(this.title);}
if(this.$("subtitle").length&&this.subtitle!=this.$("subtitle").html())
{this.$("subtitle").html(this.subtitle);}
if(this.$("required").length&&this.validationType!='none')
{this.$("required").show();}
else
{this.$("required").hide();}}}},methods:{attach:function()
{this.__autoHeight=true;this.__unselectable=true;this.callParent.apply(this,arguments);this.callEditor('editorAttach');},onClick:function()
{this.fireEvent("onClick");},highlight:function()
{},validateEvent:function(show,message)
{if(!this.$('validation-message').length)
{$('<div></div>').addClass('widget-form-validation '+this.makeClass('validation-message')).appendTo(this.$());}
if(show==false)
{this.$('validation-message').html(message);this.$().addClass('bk-validaton-error');}
else
{this.$('validation-message').html('');this.$().removeClass('bk-validaton-error');}},onEnterPreviewMode:function()
{this.callParent.apply(this,arguments);try
{this.$("title").getPlugin('edit').disable();this.$("subtitle").getPlugin('edit').disable();}
catch(e){}},onExitPreviewMode:function()
{this.callParent.apply(this,arguments);try
{this.$("title").getPlugin('edit').enable();this.$("subtitle").getPlugin('edit').enable();}
catch(e){}}}});})();(function()
{var interval=null;var popup=null;BaseKit.Widget_Image=BaseKit.Class.create({superclass:BaseKit.Framework_Widget,globals:{getResizedImagePreviewDimensions:function(img)
{var browser=BaseKit.BrowserDimensions.get(),maxh=browser.height-100,maxw=browser.width-100;var dimensions={'width':maxw,'height':maxh},ratio=maxh/maxw;var imgWidth=img.prop('width'),imgHeight=img.prop('height');if(imgWidth<=maxw&&imgHeight<=maxh)
{dimensions.width=imgWidth;dimensions.height=imgHeight;}
else
{if(imgHeight/imgWidth>ratio)
{if(imgHeight>maxh)
{dimensions.width=Math.round(imgWidth*(maxh/imgHeight));dimensions.height=maxh;}}
else
{if(imgWidth>maxh)
{dimensions.height=Math.round(imgHeight*(maxw/imgWidth));dimensions.width=maxw;}}}
return dimensions;}},editor:{addImage:function(type,image)
{switch(type)
{case'lightbox':this.previewImage=image;break;case'rollover':this.rolloverImage=image;this.addRollOverEvents();break;}
this.save();},deleteImage:function(type)
{switch(type)
{case'lightbox':this.$('image').removeClass('preview');this.previewImage='';break;case'rollover':this.removeRollOverEvents();this.rolloverImage='';break;}
this.save();},getScroll:function()
{var scrollY=0;if(document.documentElement&&document.documentElement.scrollTop)
{scrollY=document.documentElement.scrollTop;}
else if(document.body&&document.body.scrollTop)
{scrollY=document.body.scrollTop;}
else if(window.pageYOffset)
{scrollY=window.pageYOffset;}
else if(window.scrollY)
{scrollY=window.scrollY;}
return scrollY;},getALT:function()
{if(this.alt!=='')
{return this.alt;}
return'';},setALT:function(alt)
{this.alt=alt;this.$('image').attr('alt',alt);},getTitle:function()
{return this.title;},setTitle:function(title)
{this.title=title;this.$('image').attr('title',title);},getRelNoFollow:function()
{return this.relNoFollow;},setRelNoFollow:function(relNoFollow)
{this.relNoFollow=relNoFollow;this.$('image').attr('rel',relNoFollow);},getLink:function()
{return(this.href!==null&&this.href.length>0)?this.href:'';},getTarget:function()
{return(this.rel!==null&&this.rel.length>0)?this.rel:'';},setLink:function(href,target)
{var that=this;if(href&&href!==undefined&&href.length>0)
{var alt=this.$("image").attr("alt").trim();var title=this.$("image").attr("title").trim();var target=(target&&target.length>0&&target!==undefined)?target:"_parent";if(title==="")
{if(alt!==""&&alt!==this.t("image-title-default"))
{title=alt;}}
else
{title=this.$("image").attr("title");}
if(this.$("link").length&&this.href!==null&&this.href!=="")
{this.href=(href!==undefined)?href:"";this.rel=target;this.$("link").attr("title",title).attr("rel",this.rel).attr("target",this.rel).attr("href",this.href).click(function(){window.open(that.href,that.rel);return false;});}
else
{this.href=href;this.rel=target;var a=$("<a />").addClass(this.makeClass("link")).attr("href",href).attr("rel",this.rel).attr("target",this.rel).attr("title",title).click(function(){window.open(that.href,rel);return false;});this.$('image').wrap(a);}}
else
{this.href="";this.rel="_parent";this.$("content").append(this.$("image"));if(this.$("link").length)
{this.$("link").remove();}}
this.save();},resetDimensions:function(center)
{var region=this.$().getRegion(false,true);if(region===null)
{return;}
var totalWidth=region.right-region.left,left=Math.round(this._paddingLeft*totalWidth/100),availableWidth=totalWidth-left,top=this._paddingTop,right,bottom=0,height=this.originalHeight;if(availableWidth>this.originalWidth)
{right=availableWidth-this.originalWidth;}
else if(totalWidth>this.originalWidth)
{left=totalWidth-this.originalWidth;right=0;}
else
{left=0;right=0;height=Math.floor(totalWidth*this.aspectRatio);}
if(center)
{var excess=left+right;left=excess>>1;right=excess-left;}
this.setRegion(left,top,right,bottom,height,null,null,true);},setSrc:function(data,drop,save,dontReset,ignoreLoading)
{if(ignoreLoading===undefined||ignoreLoading==null||ignoreLoading==false)
{this.$("image").attr("src",this.defaultSRC);var loader=$('<div />').addClass('widget-image-loader').appendTo(this.$('content'));}
var timestamp=(data.isnew===true)?'?'+new Date().getTime():'';var that=this,image=new Image();image.src=(drop===undefined||drop==null)?data.src+timestamp:data.widgetSrc+timestamp;this.originalWidth=this.width=data.width;this.originalHeight=this.height=data.height;this.aspectRatio=data.height/data.width;if(!dontReset)
{this.resetDimensions(false);}
if(save!==false)
{this.src=(drop===undefined)?data.src:data.widgetSrc;this.save();}
var interval=null,checkLoaded=function()
{try
{if(image.complete===true)
{clearInterval(interval);that.$("image").attr("src",image.src);if(!ignoreLoading)
{loader.remove();}
if((that.parent instanceof BaseKit.Widget_Columns_Column||that.parent instanceof BaseKit.Widget_Carousel_Page)&&typeof that.parent.onResize==='function')
{that.parent.onResize();}
var selectedWidget=BaseKit.Editor.getSelectedWidget();if(selectedWidget!==null)
{BaseKit.Framework_Widget.positionDragHandles(selectedWidget);BaseKit.Framework_Widget.forceSettingsAlign(selectedWidget,selectedWidget.$("content"));}}}
catch(e){}};interval=setInterval(checkLoaded,10);var selectedWidget=BaseKit.Editor.getSelectedWidget();if(selectedWidget!==null&&selectedWidget.id===this.id)
{BaseKit.Framework_Widget.positionDragHandles(selectedWidget);}},onSelect:function()
{this.callParent.apply(this,arguments);},onResize:function()
{this.callParent.apply(this,arguments);var el=this.$();if(el.length)
{var region=this.$().getRegion(false,true);if(region!==null)
{var totalWidth=region.right-region.left,left=Math.round(this._paddingLeft*totalWidth/100),right=Math.round(this._paddingRight*totalWidth/100);this.setRegion(left,this._paddingTop,right,this._paddingBottom,this._innerHeight,region,null,true,false);}}},onResizeDragFinish:function(handle,sides,x,y)
{this.callParent.apply(this,arguments);},updatePlaceholder:function()
{var that=this;if(typeof this.src==="string"&&this.src.substr(0,2)==="{$")
{if(this.tagTimeout!==null)
{clearTimeout(this.tagTimeout);this.tagTimeout=null;}
this.tagTimeout=setTimeout(function()
{var imgsrc="http://placehold.it/"+parseInt(that.width,10)+"x"+parseInt(that.height,10);that.$("image").attr("src",imgsrc);},1000);}},setRegion:function(left,top,right,bottom,height,cache,sides,dontResize,widthFromSettingsPanel)
{var rootEl=this.$(),region=cache||rootEl.getRegion(false,true),totalWidth=region.right-region.left,width=totalWidth-left-right;if(widthFromSettingsPanel)
{width=parseInt(widthFromSettingsPanel,10);}
if(this.resizeProportionally)
{if(sides&&sides!==null&&sides.contains('top'))
{var availableHeight=this._paddingTop+this._innerHeight,height=Math.floor(width*this.aspectRatio);if(height>availableHeight)
{width=Math.floor(availableHeight/this.aspectRatio);height=availableHeight;if(sides.contains('right'))
{right=totalWidth-width-left;}
else
{left=totalWidth-width-right;}}
if(height<BaseKit.Framework_Widget.minimumHeight)
{height=BaseKit.Framework_Widget.minimumHeight;}}
else
{height=parseInt(width*this.aspectRatio,10);}}
this.width=width;this.height=height;if(!widthFromSettingsPanel)
{this.updateSettings();}
else
{right=((totalWidth-left)-width);}
this.callParent.apply(this,[left,top,right,bottom,height,cache,sides,dontResize]);if(this.isPlaceholder())
{this.originalWidth=width;this.originalHeight=height;this.updatePlaceholder();}},updateSettings:function()
{var settings=this.getSettingsPanel();if(settings!==null&&typeof settings.updateSizeBoxes==='function')
{settings.updateSizeBoxes([this.width,this.height]);}},updateLink:function(url)
{this.setLink(url.link,url.target);this.save();},queryCommandEnabled:function(command)
{return(command==='link'||command==='unlink')?true:false;},queryCommandValue:function(command)
{var returnBoolean=false;switch(command)
{case'link':returnBoolean={'link':this.getLink(),'rel':this.getTarget()};break;}
return returnBoolean;},execCommand:function(command,value)
{var returnBoolean=false;switch(command)
{case'link':this.setLink(value.link,value.target);returnBoolean=true;break;case'unlink':this.setLink();returnBoolean=true;break;}
return returnBoolean;}},methods:{construct:function()
{this._usePixels=false;this.callParent.apply(this,arguments);var that=this;this.$("image").mousedown(function(event)
{event.preventDefault();});this.dropoverlay=null;this.tagTimeout=null;if(BaseKit.Framework_Page.isMode(['normal'])&&this.lazyLoad===true)
{$.getScript('/libraries/jquery/plugins/jquery.lazyload.min.js').done(function()
{that.$('image').lazyload({threshold:parseInt(that.lazyLoadThreshold,10)});}).fail(function()
{that.$("image").attr("src",that.src);that.$('image').attr('data-original','');});}},attach:function()
{this.callParent.apply(this,arguments);var that=this;this.$('image').click(function(event)
{if(!BaseKit.Framework_Page.isMode(['edit']))
{that.showPreviewImage(event);}});if(BaseKit.Framework_Page.isMode(['edit']))
{this.$('image').setup({interact:["image"],plugins:{drop:{onDragEnter:function(drop,drag,x,y)
{var data=drag.getData();if(data.value!=='widget.image')
{return;}
that.addDropOverlay();},onDragExit:function(drop,drag,x,y)
{that.removeDropOverlay();},onDragDrop:function(drop,drag,x,y)
{var data=drag.getData();if(data.value==='widget.image')
{var media=BaseKit.Editor.getSidebar('media');if(media!==null&&media.controls.list.data)
{var i;images:for(i in media.controls.list.data)
{if(media.controls.list.data.hasOwnProperty(i)&&media.controls.list.data[i].type==='image'&&media.controls.list.data[i].name===data.name)
{var widgetData=media.controls.list.data[i];widgetData.src=widgetData.widgetSrc;that.setSrc(media.controls.list.data[i],true,true,false);break images;}}}}},onDragFinish:function()
{that.removeDropOverlay();}}}});}
this.addRollOverEvents();BaseKit.Core.strictAnchors();if(BaseKit.Framework_Page.isMode(['edit','admin']))
{popup=BaseKit.Editor.get().controls.imagePopup;}
if(this.isPlaceholder())
{this.resetDimensions(false);}},addDropOverlay:function()
{if(this.dropoverlay===null)
{this.dropoverlay=$('<div></div>').addClass('drop-overlay');this.dropoverlay.insertBefore(this.$('image'));}
this.dropoverlay.show();},removeDropOverlay:function()
{if(this.dropoverlay!==null)
{this.dropoverlay.hide();}},isPlaceholder:function()
{return(typeof this.src==="string"&&this.src.substr(-29)==="/widget/image/placeholder.png");},addRollOverEvents:function()
{if(this.rolloverImage!==null)
{BaseKit.Util.preloadImage(this.rolloverImage);var that=this;this.$('image').mouseover(function(event)
{that.showRollOverImage(event);});this.$('image').mouseout(function(event)
{that.removeRollOverImage(event);});}},removeRollOverEvents:function()
{this.$('image').unbind('mouseover mouseout');},showRollOverImage:function()
{this.$('image').attr('src',this.rolloverImage);},removeRollOverImage:function()
{this.$('image').attr('src',this.src);},onEnterPreviewMode:function()
{this.__unselectable=false;this.hideMask(true);},showPreviewImage:function(event)
{var that=this,img=$('<img />'),offsetScroll=that.getScroll();if(document.getElementById('bk-preview-image-overlay-image'))
{return;}
if(this.previewImage!==null&&this.previewImage.length>0)
{if(this.href!==null&&this.href.length>0)
{event.stopPropagation();event.preventDefault();}
var overlay=$('<div />').addClass('prevent-select').attr('id','bk-preview-image-overlay').css({position:"fixed",left:0,top:0,width:"100%",height:"100%",zIndex:"999997",opacity:0.9,background:"rgba(38,38,38,.85) url('http://www.hostgator.co.in/framework/images/ui/loading-spinner.gif') no-repeat 50% 50%"}).appendTo(document.body);img.load(function()
{var dimensions=BaseKit.Widget_Image.getResizedImagePreviewDimensions(img);var preview=$('<div />').addClass('prevent-select').attr('id','bk-preview-image-overlay-image').css({position:"fixed",opacity:'0',width:dimensions.width+"px",height:dimensions.height+"px",border:"10px solid #959595",cursor:'pointer',zIndex:"999998"}).appendTo(document.body);var close=$('<div />').addClass('prevent-select').attr('title',that.t("image-close-preview")).css({position:"absolute",width:"28px",height:"28px",top:'-20px',right:'-20px',cursor:'pointer',background:'transparent url(http://www.hostgator.co.in/framework/images/ui/close.png) no-repeat',zIndex:"999999"}).appendTo(preview);overlay.css('background','transparent url(http://www.hostgator.co.in/framework/images/ui/bk-overlay.png) repeat');var imageObj=$('<img />').attr("src",img.attr('src')).attr("width",dimensions.width).attr("height",dimensions.height).attr("class","widget-image-preview").attr("alt",that.t("image-title")).attr("title",that.t("image-title"));preview.html(imageObj);preview.append(close);BaseKit.Animation.addQueue({duration:0.9,onFinish:function()
{preview.show();}},{element:preview,opacity:[0,1.0,"bothCubic"]});var elements=[preview,close];for(var i=0;i<elements.length;i++)
{elements[i].attach('click',function(event)
{event.stopPropagation();event.preventDefault();BaseKit.Animation.addQueue({duration:0.8,onFinish:function()
{overlay.remove();preview.remove();}},{element:preview,opacity:[1.0,0,"bothCubic"]});});}
var de=document.documentElement;var w=window.innerWidth||self.innerWidth||(de&&de.clientWidth)||document.body.clientWidth;var h=window.innerHeight||self.innerHeight||(de&&de.clientHeight)||document.body.clientHeight;var pagesize=[w,h];preview.css('top',Math.round(pagesize[1]/2)-Math.round(dimensions.height/2)+'px');preview.css('left',Math.round(pagesize[0]/2)-Math.round(dimensions.width/2)+'px');});img.attr('src',this.previewImage);}},overrideSrc:function(src)
{var imgsrc=src;if(!src.length||src.substr(0,2)==="{$")
{imgsrc="http://placehold.it/"+parseInt(this.width,10)+"x"+parseInt(this.height,10);}
this.$("image").attr("src",imgsrc);this.src=src;this.resizeProportionally=true;this.save();},showPopup:function()
{if(popup!==null)
{popup.show();}},hidePopup:function()
{if(popup!==null)
{popup.hide();}}}});})();(function()
{var overlay=null,notify=null;BaseKit.Widget_Registrationnew=BaseKit.Class.create({superclass:BaseKit.Framework_Widget,methods:{attach:function()
{this.callParent.apply(this,arguments);this._autoHeight=true;var that=this,timeout=null,oldNotifyClass=null,formReady=false;this.buttons.submitbtn.handleEvent("onClick",this,"validate");$(".widget-registrationnew-container").delegate(":input","keyup",function(event)
{if(event.keyCode===13)
{that.validate();return;}});this.formBoxClasses();this.disableButton();},validate:function()
{var that=this;if(this.buttons.submitbtn.$().hasClass('disabled'))
{this.notify("critical",that.t("missing-fields-error"));return;}
else
{if(this.controls.email.value===null||this.controls.email.value.length<3)
{this.notify("error-email",that.t("email-address-invalid"));return;}
if(this.controls.password.value===null||this.controls.password.value.length<8)
{this.notify("error-password",that.t("password-invalid"));return;}
if(this.showNameMandatory===true)
{if((this.controls.name.value===null||this.controls.name.value.length<3||this.controls.name.value===this.t("firstname-placeholder")))
{this.notify("error-firstname",that.t("first-name-invalid"));return;}
if((this.controls.lastName.value===null||this.controls.lastName.value.length<3||this.controls.lastName.value===this.t("lastname-placeholder")))
{this.notify("error-lastname",that.t("last-name-invalid"));return;}}
if(this.showTelMandatory===true)
{if(this.controls.phoneNumber.value===null||this.controls.phoneNumber.value.length<10||this.controls.phoneNumber.value===this.t("phone-number-placeholder"))
{this.notify("error-phone-number",that.t("phone-number-invalid"));return;}}
this.createAccountCheck();}},hideLoadingIndicator:function()
{$('#page-overlay').hide();},showLoadingIndicator:function()
{var overlay=$('#page-overlay');if(overlay.length===0)
{overlay=$('<div></div>').attr('id','page-overlay');$(document.body).append(overlay);}
$(overlay).fadeIn(200);$(overlay).addClass('widget-registrationnew-processing');},formBoxClasses:function()
{var that=this;this.$().find('input').each(function(i,el)
{if(($(el).attr('type')==='text'))
{BaseKit.Core.dynamicTextBoxes($(el));}
if(($(el).attr('type')==='password'))
{BaseKit.Core.dynamicPasswordBoxes($(el),i);}
that.bindFormEvent($(el));});},bindFormEvent:function(obj)
{var that=this;obj.bind('blur',function()
{that.enableSubmit($(this));}).bind('keyup',function()
{that.enableSubmit($(this));});},disableButton:function()
{this.buttons.submitbtn.$().removeClass('orange').addClass('disabled');},enableButton:function()
{this.buttons.submitbtn.$().removeClass('disabled').addClass('orange');},enableSubmit:function(obj)
{var that=this;if(BaseKit.Core.formInputComplete(that.controls.email)&&BaseKit.Core.formInputComplete(that.controls.password))
{that.enableButton();}
else
{that.disableButton();}},buyItNowText:function(show)
{var button=this.$('submitButton-button'),className='widget-registrationnew-buyitnow';if(show)
{button.addClass(className);}
else
{button.removeClass(className);}},updateSubmitBtn:function(value)
{this.buttons.submitbtn.setText(value);},notify:function(type,message)
{this.$().find('.error-box').hide();this.$("notify").empty();$('.widget-registrationnew-loading').remove();if(type==="error-email")
{$(".widget-registrationnew-email-error").html(message).show();this.hideLoadingIndicator();}
if(type==="error-password")
{$(".widget-registrationnew-password-error").html(message).show();this.hideLoadingIndicator();}
if(type==='error-firstname')
{$(".widget-registrationnew-firstname-error").html(message).show();this.hideLoadingIndicator();}
if(type==='error-lastname')
{$(".widget-registrationnew-lastname-error").html(message).show();this.hideLoadingIndicator();}
if(type==='error-phone-number')
{$(".widget-registrationnew-phone-number-error").html(message).show();this.hideLoadingIndicator();}
if(type==="critical")
{$(".widget-registrationnew-email-error").html(message).show();$(".widget-registrationnew-password-error").html(message).show();this.hideLoadingIndicator();}
if(type==="error")
{this.$("notify").html(message).show();this.hideLoadingIndicator();}},createAccountCheck:function()
{this.$().find('error-box').hide();this.showLoadingIndicator();this.$("notify").removeClass('hidden');this.notify("notice",this.t("creating-account"));this.login();},centerLoadingLightbox:function()
{var windowHeight=$(window).height();var modalHeight=$('.widget-registrationnew-loading').outerHeight();var scrollTop=$(document).scrollTop();var topDistance=Math.max((windowHeight-modalHeight),0)/2;$('.widget-registrationnew-loading').css('top',topDistance+scrollTop);},setFocusToFields:function()
{var focusClass='widget-registrationnew-input-blank',email=this.controls.email.getValue(),password=this.controls.password.getValue(),password2=this.controls.password2.getValue();if(email)
{this.$('email').addClass(focusClass);}
if(password)
{this.$('password').addClass(focusClass);}
if(password2)
{this.$('password2').addClass(focusClass);}},updateOptMsg:function(msg)
{this.$("newsletter-text").html(msg);},trackRegistration:function()
{if(typeof _gaq==="object"&&typeof _gaq.push==="function")
{_gaq.push(["_trackPageview","/pseudo/site/registration"]);}},loginAction:function(isLogin)
{this.showLoadingLightbox(isLogin);this.centerLoadingLightbox();this.createAccount();},showLoadingLightbox:function(isLogin)
{if(this.hideOverlay==false)
{if(isLogin<0)
{$('body').append('<div class="widget-registrationnew-loading"><div class="main-title">'+this.t('creating-your-site-title')+'</div><div class="main-content">'+this.t('creating-your-site-text-with-help-url',this.brandHelpURL)+'</div><div class="create-site-spinner"></div></div>');}}}}});}());var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return!a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();(function()
{var requestTimeout=null;BaseKit.API={call:function(cls,method,params,callback)
{if(jQuery.timers.length>0||BaseKit.Animation.isAnimating())
{clearTimeout(requestTimeout);requestTimeout=setTimeout(function(){BaseKit.API.call(cls,method,params,callback)},250);return;}
params=(params!==undefined&&params!==null)?params:{};var page=$bk("page");if(typeof page=="object"&&typeof page.siteRef!="undefined")
{params.siteRef=page.siteRef;}
$.ajax({url:"/api/"+cls.toLowerCase()+"/"+method.toLowerCase(),type:"POST",dataType:"json",data:params,success:function(output)
{if(typeof callback=="function")
{callback(output);}}});}};})();(function()
{BaseKit.Framework_Control_Domaincheck=BaseKit.Class.create({superclass:BaseKit.Framework_Control,methods:{construct:function()
{this.callParent.apply(this,arguments);},attach:function()
{this.callParent.apply(this,arguments);var that=this;var timeout=null;var DOMAIN_NAME=/^([-a-z0-9]{3,})((\.[-a-z0-9]{2,}){1,2})$/gi;var VALID_CHARS=/[\u0030-\u0039\u0041-\u005a\u0061-\u007a\u002d\u005f\u00c0-\u00ff\u0131-\u0132\u0152\u0178\s]{3,}/g;var DOMAIN_EXTENSION=new RegExp("("+that.sAllowedTLDs+")$","i");this.buttons.checkDomain.$().click(function()
{that.hideCheckMessages();that.$("domcheck").show();if(that.validateDomain())
{that.checkDomainAvailability();}});this.buttons.retryDomain.$().click(function()
{that.hideCheckMessages();that.$("domcheck").show();if(that.validateDomain())
{that.checkDomainAvailability();}});this.controls.domain.$().focus(function()
{that.clearDomainDefault();});this.controls.domain.$().blur(function()
{that.setDomainDefault();});this.controls.tld.$().change(function()
{that.hideCheckMessages();$("#domain-suggest-results").hide();if(that.controls.domain.$().val()!=""&&that.controls.domain.$().val()!=that.controls.domain.previousValue)
{that.$("domcheck").show();that.controls.tld.$().attr('disabled','disabled').addClass('disabled');that.controls.domain.$().attr('disabled','disabled').addClass('disabled');that.fireEvent("changedDomain");that.checkDomainAvailability();}});this.controls.domain.$().keydown(function(event)
{clearTimeout(timeout);DOMAIN_NAME.lastIndex=0;VALID_CHARS.lastIndex=0;timeout=setTimeout(function()
{clearTimeout(timeout);if(that.controls.domain.$().val()!=""&&that.controls.domain.$().val()!=that.controls.domain.previousValue)
{that.controls.tld.$().attr('disabled','disabled').addClass('disabled');that.controls.domain.$().attr('disabled','disabled').addClass('disabled');if(that.validateDomain())
{this.aDomainSuggestions=[];that.fireEvent("changedDomain");var domainSearch=that.controls.domain.getValue().trim();if(DOMAIN_NAME.test(domainSearch))
{that.hideCheckMessages();that.$("domcheck").show();that.$("suggest").hide();var aExtensionMatch=domainSearch.match(DOMAIN_EXTENSION);if(aExtensionMatch!=null)
{currentDomainName=that.controls.domain.$().val();domainNameOnly=currentDomainName.replace(aExtensionMatch[1],"");that.controls.domain.setValue(domainNameOnly);that.controls.tld.setValue(aExtensionMatch[1]);that.checkDomainAvailability();}
else
{that.checkDomainSuggestions();}}
else if(VALID_CHARS.test(domainSearch))
{that.hideCheckMessages();that.$("domcheck").show();that.$("suggest").hide();that.checkDomainAvailability();}
else
{that.hideCheckMessages();that.$("domcheck").hide();that.$("suggest").show();that.checkDomainSuggestions();}}}},1000);});this.controls.domain.$().keyup(function(event)
{if(that.controls.domain.$().val()==""&&that.controls.domain.$().val()!=that.controls.domain.previousValue)
{that.hideCheckMessages();}
if($("#domain-suggest-results").is(":visible"))
{$("#domain-suggest-results").hide();}});},formBoxClasses:function()
{var that=this;this.$().find("input").each(function(i,el)
{if($(el).attr("type")=="text")
{BaseKit.Core.dynamicTextBoxes($(el));that.bindFormEvent($(el));}
if($(el).attr("type")=="password")
{BaseKit.Core.dynamicPasswordBoxes($(el),i);that.bindFormEvent($(el));}});},refreshCurrentPage:function()
{window.location.href=window.location.href;},validateDomain:function()
{var sDomainName=this.controls.domain.getValue().trim();var websiteRegex=new RegExp("^((http|ftp|ftps|https):\/\/)");var okChar=new RegExp("^([-a-zA-Z0-9]{3,}$)");if(sDomainName.match(websiteRegex)||sDomainName.match(/\./)||!sDomainName.match(okChar))
{this.controls.tld.$().removeClass('disabled').removeAttr('disabled');this.controls.domain.$().removeClass('disabled').removeAttr('disabled');this.hideCheckMessages();this.$("invalid").show();return false;}
return true;},updateDomainAvailability:function(result,canRetry,tld,realtime,msg)
{this.controls.tld.$().removeClass('disabled').removeAttr('disabled');this.controls.domain.$().removeClass('disabled').removeAttr('disabled');if(result==true)
{if(!realtime)
{this.hideCheckMessages();this.$('contact-support p').html(msg);this.$('contact-support').show();this.fireEvent("changedDomain");}
else
{var domainPrice=this.domainPeriodTranslation;var domainName=this.domainName;this.$("domain-name").html(domainName);if(this.availableDescription)
{this.$("domain-price").html(this.availableDescription);}
else
{this.$("domain-price").html(domainPrice);}
this.hideCheckMessages();this.$("success").show();this.fireEvent("domainAvailable");}}
else
{this.hideCheckMessages();if(canRetry)
{this.$("domerror").show();}
else
{this.$("domnotavailable").show();this.showDomainSuggestions(false);}}},hideCheckMessages:function()
{this.$("success").hide();this.$("contact-support").hide();this.$("domcheck").hide();this.$("register").hide();this.$("invalid").hide();this.$("domerror").hide();this.$("suggest").hide();this.$("domnotavailable").hide();this.$("nosuggestions").hide();},clearDomainDefault:function()
{var sDomainName=this.controls.domain.getValue().trim();if(sDomainName==this.controls.domain.previousValue)
{this.controls.domain.setValue("");}},setDomainDefault:function()
{var sDomainName=this.controls.domain.getValue().trim();if(sDomainName=="")
{this.controls.domain.setValue(this.controls.domain.previousValue);}},doDomainCheck:function()
{this.hideCheckMessages();this.$("domcheck").show();this.checkDomainAvailability();},updateDomainVars:function(domainPeriodTranslation,domainName)
{this.domainPeriodTranslation=domainPeriodTranslation;this.domainName=domainName;},showDomainSuggestions:function(bHideErrorMessages)
{if(bHideErrorMessages)
{this.hideCheckMessages();}
if(this.aDomainSuggestions.length>0)
{var that=this;$("#domain-suggest-results").empty();$("#domain-suggest-results").append("<h3>"+this.t("domain-suggestions-heading")+"</h3>");$("#domain-suggest-results").append("<p>"+this.t("domain-suggestions-info")+"</p>");var suggestionsList=$("<ul />");for(i=0;i<5;i++)
{sDomainName=this.aDomainSuggestions[i];$("<li />").click({sDomainName:sDomainName},function(event)
{that.setDomainAndExtension(event.data.sDomainName);that.controls.tld.$().attr('disabled','disabled').addClass('disabled');that.controls.domain.$().attr('disabled','disabled').addClass('disabled');}).append("<span>"+sDomainName+"</span>").appendTo(suggestionsList)}
suggestionsList.appendTo($("#domain-suggest-results"))
$("#domain-suggest-results").show(500);}
else
{this.$("nosuggestions").show();}},setDomainAndExtension:function(sDomainName)
{sDomainPrefix=sDomainName.substr(0,sDomainName.lastIndexOf("."));sDomainExt=sDomainName.substr(sDomainName.lastIndexOf("."));this.controls.domain.setValue(sDomainPrefix);this.controls.tld.setValue(sDomainExt);this.controls.domain.focus();this.hideCheckMessages();this.$("domcheck").show();this.fireEvent("changedDomain");this.checkDomainAvailability();}}});})();(function()
{BaseKit.Framework_Control_Styles_Styles=BaseKit.Class.create({superclass:BaseKit.Framework_Control,methods:{construct:function()
{this.callParent.apply(this,arguments);},attach:function()
{this.callParent.apply(this,arguments);var that=this;this.controls["styles"].handleEvent("onEdit",this,"loadStyle");this.controls["styles"].handleEvent("onClick",this,"applyStyle");this.controls["styles"].handleEvent("deleteStyle",this,"delStyle");},applyStyle:function(style)
{if(style)
{this.fireEvent('onStyleApply',style);}},loadStyle:function(data)
{var that=this;if(this.getRoot().globalTheme==true)
{var theme=this.getRoot().primary['editor'].primary['theme'];theme.cloneTheme(this.id,'loadStyle',data);}
else
{if(data&&!isNaN(data.ref)&&data.scope)
{this.fireEvent('onEdit',data);var widget=BaseKit.Editor.getSelectedWidget();if(widget&&widget!==null&&(widget instanceof BaseKit.Widget_Content||widget.navigationWidget))
{var editor=BaseKit.Editor.get(),styleeditor=editor.footers['panel1'].controls['styleeditor'];var tabPanel=editor.footers['panel1'];tabPanel.showTab('styleeditor');if(styleeditor!==undefined&&typeof styleeditor.onTabShow=='function')
{that.processStyle(data);}
else
{BaseKit.Framework_Control_TabPanel.loadTabs(widget._tabs);function waitForTab()
{if(BaseKit.Request.isActive())
{timeout=setTimeout(waitForTab,1);}
else
{clearTimeout(timeout);that.processStyle(data);}}
var timeout=setTimeout(waitForTab,300);}}
else
{this.processStyle(data);}}}},processStyle:function(data)
{var style={'ref':data.ref,'tag':data.tag,'widget':this.widget,'tab':'styleeditor','scope':data.scope,'local-class':this.widgetLocalClassName};var widget=BaseKit.Editor.getSelectedWidget();if(widget&&widget!==null&&(widget instanceof BaseKit.Widget_Content||widget.navigationWidget))
{var editor=BaseKit.Editor.get();if(!editor.$("footerX").isVisible())
{var toolbar=widget.getRoot().primary.editor.footers['panel1'].controls['settings'];toolbar.buildSettingsBar(widget);BaseKit.Framework_Control_TabPanel.loadTabs(widget._tabs);BaseKit.Editor.showFooter("styleeditor");}
var editor=BaseKit.Editor.get(),styleeditor=editor.footers['panel1'].controls['styleeditor'];if(styleeditor!==undefined&&typeof styleeditor.onTabShow=='function')
{styleeditor.onTabShow(null,style);}
else
{var tick=0;function waitForTab()
{var styleeditor=editor.footers['panel1'].controls['styleeditor'];if(styleeditor===undefined&&tick++<60000)
{timeout=setTimeout(waitForTab,1);}
else
{clearTimeout(timeout);if(styleeditor!==undefined)styleeditor.onTabShow(null,style);}}
var timeout=setTimeout(waitForTab,200);}}
else
{BaseKit.Framework_Control_TabPanel.changeTabByName('styleeditor',style);}},setValueByTagAndClassName:function(style)
{this.controls['styles'].setValueByTagAndClassName(style);},selectStyleItem:function(style)
{this.controls['styles'].selectStyleItem(style);},delStyle:function(style)
{var that=this;BaseKit.Framework_Page.confirm(this.t("remove-selected-style"),function()
{var element=$('.framework-control-styles-selector-item-list-style[data-ref='+style.ref+']');if(element){element.parent().remove();}
var selector='.nav-level1.';if(-1!=style.selector.indexOf('.nav-level2'))
{selector='.nav-level2.';}
$.each($(selector+style.class_name),function(index,el){$(el).removeClass(style.class_name);});that.deleteStyle(style);});}}});})();(function()
{BaseKit.Framework_Control_Styles_Selector=BaseKit.Class.create({superclass:BaseKit.Framework_Control,methods:{construct:function()
{this.callParent.apply(this,arguments);var that=this;this.offset=null;this.selectedStyle=null;},attach:function()
{this.callParent.apply(this,arguments);var that=this,widget=BaseKit.Editor.getSelectedWidget();this.$('close-popup').click(function()
{$('.framework-control-mini-editor-styles-container').hide();if(widget&&widget.navigationWidget&&widget.hideAllLists&&typeof widget.hideAllLists=='function')
{widget.hideAllLists();}});var bCanAddStyle=false;if(widget)
{if(typeof BaseKit.Widget_Content!=undefined&&widget instanceof BaseKit.Widget_Content)
{bCanAddStyle=true;}
if(typeof BaseKit.Widget_Navigation!=undefined&&widget instanceof BaseKit.Widget_Navigation)
{bCanAddStyle=true;}
if(typeof BaseKit.Widget_Navigation_Flyout!=undefined&&widget instanceof BaseKit.Widget_Navigation_Flyout)
{bCanAddStyle=true;}
if(typeof BaseKit.Widget_Navigation_Dropdown!=undefined&&widget instanceof BaseKit.Widget_Navigation_Dropdown)
{bCanAddStyle=true;}
if(typeof BaseKit.Widget_Navigation_Horizontal!=undefined&&widget instanceof BaseKit.Widget_Navigation_Horizontal)
{bCanAddStyle=true;}}
this.setCanAddStyle(bCanAddStyle);if(widget&&widget.navigationWidget)
{this.$('item-list-buttons').show();}
else
{this.$('item-list-buttons').hide();}
this.$$('item-list-style').each(function(index)
{var element=$(this);element.mousedown(function(event)
{element.addClass('selected');that.applyStyle(element,index);that.selectedStyle=that.data[index];});element.mouseup(function(event)
{if(!widget.navigationWidget)
{element.removeClass('selected');}});element.mouseover(function(event)
{that.showStylePreview(element,index);});element.mouseout(function(event)
{that.hideStylePreview(element,index);});});this.$$('item-list-edit').each(function(index)
{var element=$(this);element.mousedown(function(event)
{var style=(that.data[index])?that.data[index]:null;that.confirmEditStyle(event,style,'global');});});this.$('edit-background-container').hide();},syncGlobalData:function(data)
{if(data&&data.length>0)
{this.data=data;}},syncLocalData:function(data)
{if(data&&data.length>0)
{this.background=data;}},setCanAddStyle:function(state)
{var widget=BaseKit.Editor.getSelectedWidget();var that=this,styles=this.$$('item-list');if(state)
{styles.each(function()
{var element=$(this);element.removeClass('disabled');});var widget=BaseKit.Editor.getSelectedWidget();if(widget.navigationWidget)
{this.$('item-list-style-add').html('&nbsp;').css('cursor','default');}
else
{this.$('item-list-style-add').click(function()
{var editor=BaseKit.Editor.get();if(editor!=null)
{editor.hideMiniPanelStyleDropDown();}
that.hideStylePreview();that.fireEvent('addNewStyle');if(widget&&widget.navigationWidget)
{BaseKit.Framework_Page.showLightbox('addstyle');}});}
this.$('item-list-style-clone').click(function()
{that.hideStylePreview();var widget=BaseKit.Editor.getSelectedWidget();if(widget.navigationWidget)
{that.fireEvent('addNewStyle',that.selectedStyle,widget.getCurrentStyleList());}
else
{that.fireEvent('addNewStyle',that.selectedStyle);}});this.$('item-list-style-delete').click(function()
{if(that.selectedStyle.read_only=='0')
{that.hideStylePreview();that.fireEvent('deleteStyle',that.selectedStyle);}
else
{BaseKit.Logger.log(that.t("cannot-delete-global-style"),"growl");}});this.$('close-popup').show();this.$('item-list-style-add').show();}
else
{styles.each(function()
{var element=$(this);element.addClass('disabled');});this.$('close-popup').hide();this.$('item-list-style-add').hide();}},applyStyle:function(element,index)
{var that=this,widget=BaseKit.Editor.getSelectedWidget();if(this.data[index]&&widget instanceof BaseKit.Widget_Content||(widget&&widget.navigationWidget))
{this.hideStylePreview();this.$$('item-list-style').removeClass('selected');if(widget.navigationWidget)
{element.addClass('selected');}
this.fireEvent('onClick',this.data[index]);}},confirmEditStyle:function(event,style,scope)
{if(style!==null)
{var page=this.getRoot(),that=this;if(scope=='global'&&page['toolTips']['first_styles']==true)
{var msg=this.t("confirm-edit-style","Editing this site-wide style will update text across the whole site, not just on this page");BaseKit.Framework_Page.confirm(msg,function()
{BaseKit.Framework_Page.setToolTipOptions('first_styles');that.editStyle(event,style,scope);});}
else
{this.editStyle(event,style,scope);}}
event.stop();},editStyle:function(event,style,scope)
{var widget=BaseKit.Editor.getSelectedWidget();if(!widget&&widget instanceof BaseKit.Widget_Content==false&&!widget.navigationWidget)
{return;}
if(typeof widget.toggleMiniEditorWhenFooterShowing=='function')
{widget.toggleMiniEditorWhenFooterShowing('hide');}
BaseKit.Element.Plugin.Wysiwyg.lock();if(style!==null)
{this.hideStylePreview();this.fireEvent('onEdit',{'ref':style['ref'],'scope':scope});}
event.stop();},showStylePreview:function(element,index)
{if(this.data[index])
{var edit=element.children();if(edit&&edit.hasClass('framework-control-styles-selector-item-list-edit'))
{edit.addClass('widgetcontent');edit.show();}
if(element.hasClass('selected'))
{edit.addClass('selected');}
else
{element.addClass('hover');}
var widget=BaseKit.Editor.getSelectedWidget();if(widget instanceof BaseKit.Widget_Content==false)
{this.$('preview-text').html(this.data[index]['title']);this.$('preview-text').addClass(this.makeClass('preview-text')+' '+this.data[index]['preview_class']);this.$('preview').show();}}},hideStylePreview:function(element,index)
{if(this.data[index])
{var edit=element.children();if(edit&&edit.hasClass('framework-control-styles-selector-item-list-edit'))
{edit.removeClass('selected');edit.hide();}
element.removeClass('hover');this.$('preview-text').removeClass();}
this.$('preview').hide();},reloadStyles:function()
{try
{var editors=tinyMCE.editors,styles=this.data;for(var i in editors)
{BaseKit.WYSIWYG.registerTinyMCEFormats(editors[i],styles);}}
catch(e)
{}},setValueByTagAndClassName:function(style)
{var styleString=null;styleString=(style.tag!=undefined?'bk-selector-'+style.tag:'')+(style.className!=undefined&&style.className!=''?'-'+style.className:'');this.$$('item-list-style').each(function(index)
{var element=$(this);if(element.hasClass(styleString))
{element.addClass('selected');}
else
{element.removeClass('selected');}});},selectStyleItem:function(styleRef)
{for(var ii=0;ii<this.data.length;ii++)
{if(this.data[ii].ref==styleRef)
{this.selectedStyle=this.data[ii];break;}}
this.$$('item-list-style').each(function(index)
{var element=$(this);element.removeClass('selected');if(element.attr('data-ref')==styleRef)
{element.addClass('selected');}});}}});})();(function()
{BaseKit.Widget_Navigation=BaseKit.Class.create({superclass:BaseKit.Framework_Widget,methods:{construct:function()
{var that=this;this.callParent.apply(this,arguments);this.orderingOn=true;var baloon=$('#page-primary__editorBKprimary').children('#'+this.id+'_baloon');if(baloon.length>0)
{baloon.remove();}
this.baloon=this.$('baloon').detach().appendTo($('#page-primary__editorBKprimary'));this.submenu=[];this.baloon.find('.stylesButton').click(function(event){that.showStylesList();});this.baloon.find('.styles2Button').click(function(event){if(that.level2enabled)
{that.showStyles2List();}});this.baloon.find('.styles3Button').click(function(event){if(that.level2enabled&&that.grouppingEnabled)
{that.showStyles3List();}});this.baloon.find('.pagesButton').click(function(event){that.showPagesList();});this.baloon.find('.separatorButton').click(function(event){that.showSeparatorList();});this.baloon.find('.columnCountButton').click(function(event){that.showColumnsList();});this.baloon.find('.grouppingButton').click(function(event){that.toggleGroupping();});var leftBorderSuppressButton=this.baloon.find('.leftBorderSuppressButton');leftBorderSuppressButton.click(function(event){that.toggleLeftBorder();that.updateButtons();});var rightBorderSuppressButton=this.baloon.find('.rightBorderSuppressButton');rightBorderSuppressButton.click(function(event){that.toggleRightBorder();that.updateButtons();});var pagesList=this.baloon.children('.pages-list').children('.pageList');var folders=pagesList.find('.folder');$.each(folders,function(index,item){$(item).click(function(){that.saveMenuOrder($(this).siblings('.submenu'));that.menuListId=$(item).attr('ref');that.openDropdown=0;that.popupOpen=false;that.styles=[];that.baloon.remove();that.baloon=null;if(that.submenu.length>0)
{that.submenu.each(function(key,el){$(el).remove()});that.submenu=[];}
that.constructed=false;that.save(['width']);function waitForFinishRequest()
{if(BaseKit.Request.isActive())
{timeout=setTimeout(waitForFinishRequest,1);}
else
{clearTimeout(timeout);that.rebuildMenu();}}
var timeout=setTimeout(waitForFinishRequest,100);});if($(item).attr('ref')==that.menuListId)
{var curr=$(item);while(curr.is('.folder'))
{$(curr).siblings('.sectionOpener').addClass('open');$(curr).siblings('.submenu').show();curr=$(curr).parent().parent().siblings('.folder');}}});var openers=pagesList.find('.sectionOpener');$.each(openers,function(index,item)
{$(item).click(function(){if($(item).is('.open'))
{$(item).removeClass('open');$(item).parent().children('.submenu').hide();}
else
{$(item).addClass('open');$(item).parent().children('.submenu').show();}});});var columnsList=this.baloon.children('.columns-list').children('ul.columnList').children('li');$.each(columnsList,function(index,item){$(item).click(function(){if(that.columns==$(item).attr('ref'))return;that.columns=$(item).attr('ref');that.save(['columns']);that.updateColumns();that.updateColumns2ndLevel();});});var separatorList=this.baloon.children('.separator-list').children('ul.separatorList').children('li');$.each(separatorList,function(index,item){$(item).click(function(){if(that.separator==$(item).attr('ref'))return;that.separator=$(item).attr('ref');that.save(['separator']);var text=$(item).text();that.baloon.find('.widget-navigation-baloon-breadcrumb-separator').text(text);that.elemDOM.list.children('.separator').text(text);});});this.controls["styles"].handleEvent("onEdit",this,'onUnselect');this.controls["styles"].handleEvent("onStyleApply",this,'applyStyle');this.controls["styles2"].handleEvent("onEdit",this,'onUnselect');this.controls["styles2"].handleEvent("onStyleApply",this,'applyStyle');this.controls["styles3"].handleEvent("onEdit",this,'onUnselect');this.controls["styles3"].handleEvent("onStyleApply",this,'applyStyle');this.levelsAreShown=false;this.openDropdown=0;this.popupOpen=false;this.currentStyleList=1;this.elemDOM={'list':this.$('list'),'pages':this.baloon.children('.pages-list'),'columns':this.baloon.children('.columns-list'),'separators':this.baloon.children('.separator-list'),'styles':{'container':$('#'+this.id+'_baloon .navigation-widget-styles'),'selector':$('#'+this.id+'_baloon .navigation-widget-styles .framework-control-styles-selector-container')},'styles2':{'container':$('#'+this.id+'_baloon .navigation-widget-styles2'),'selector':$('#'+this.id+'_baloon .navigation-widget-styles2 .framework-control-styles-selector-container')},'styles3':{'container':$('#'+this.id+'_baloon .navigation-widget-styles3'),'selector':$('#'+this.id+'_baloon .navigation-widget-styles3 .framework-control-styles-selector-container')},'borderButtons':{'left':leftBorderSuppressButton,'right':rightBorderSuppressButton}}
this.styles=[];this.constructed=true;},attach:function()
{if(!this.constructed)this.construct();var that=this;this.navigationWidget=true;this.__autoHeight=true;this.__autoWidth=true;this.callParent.apply(this,arguments);this.updateSpacing();this.updateLeftBorder();this.updateRightBorder();if(BaseKit.Framework_Page.isMode(['edit']))
{this.updateButtons();}
this.baloon.find('.widget-navigation-baloon-align-buttons').delegate('div','click',function(event){var button=$(this),option=null,widget=BaseKit.Editor.getSelectedWidget();if(that==widget&&button.hasClass(that.makeClass('control')))
{var option=button.attr('class').split(' ').last().replace('widget-navigation-baloon-','').split('-');widget.doExecCommand(option[0],option[1]);}});},showSettingsPanel:function(){this.showPopup();},getOpenedStyles:function()
{var styles=null;if(this instanceof BaseKit.Widget_Navigation_Breadcrumb)
{styles={'control':this.controls["styles"],'elemDOM':this.elemDOM.styles,'styleData':'styleData','type':'widget.navigation.breadcrumb'};}
else switch(this.currentStyleList)
{case 1:styles={'control':this.controls["styles"],'elemDOM':this.elemDOM.styles,'styleData':'styleData','type':'widget.navigation'};break;case 2:styles={'control':this.controls["styles2"],'elemDOM':this.elemDOM.styles2,'styleData':'styleData2','type':'widget.navigation.level2'};break;case 3:styles={'control':this.controls["styles3"],'elemDOM':this.elemDOM.styles3,'styleData':'styleData3','type':'widget.navigation.level3'};break;}
return styles;},onUnselect:function()
{var that=this;this.openDropdown=0;setTimeout(function(){var widget=BaseKit.Editor.getSelectedWidget();if(!widget||widget.id!==that.id)
{that.hideMenuLevels();that.hidePopup();}},10);this.callParent.apply(this,arguments);},onSelect:function()
{this.hidePopup();this.openDropdown=0;if(this.levelsAreShown)
{this.showMenuLevels();}
this.callParent.apply(this,arguments);},onScroll:function(event,param)
{this.hidePopup();this.openDropdown=0;this.callParent.apply(this,arguments);},onEnterPreviewMode:function()
{this.hidePopup();this.openDropdown=0;this.callParent.apply(this,arguments);},onExitPreviewMode:function()
{this.callParent.apply(this,arguments);this.hideMenuLevels();},settingsAlign:function()
{if(this.popupOpen)
{this.setBaloonPosition();}
else
{this.callParent.apply(this,arguments);}},onResize:function()
{this.callParent.apply(this,arguments);this.hidePopup();},onEditStyleChange:function()
{this.updateSpacing();this.correctColumns();},applyStyle:function(style)
{var that=this;if(3==this.currentStyleList)
{this.level3StyleClassName=style.class_name;this.level3StyleRef=style.ref;$(this.submenu).each(function(key,el)
{el.element.children('div').children('ul').find('ul.'+that.makeClass('section-column')).attr
('class',([that.makeClass('section-column'),'nav-level3',style.class_name]).join(' '));that.correctColumnWidth(el.element);that.correctColumnHeight(el.element);});}
else if(2==this.currentStyleList)
{this.level2StyleClassName=style.class_name;this.level2StyleRef=style.ref;$(this.submenu).each(function(){this.element.find('.nav-level2').attr
('class',(['nav-level2',style.class_name]).join(' '));that.correctColumnWidth(this.element);that.correctColumnHeight(this.element);});}
else if(this instanceof BaseKit.Widget_Navigation_Breadcrumb)
{this.styleClassName=style.class_name;this.styleRef=style.ref;this.elemDOM.list.attr('class',([this.makeClass('list'),'widget-navigation-breadcrumb',style.class_name]).join(' '));}
else
{this.styleClassName=style.class_name;this.styleRef=style.ref;this.elemDOM.list.attr('class',([this.makeClass('list'),'nav-level1',style.class_name]).join(' '));}
this.save();},showPopup:function()
{this.getMovePanel().hide();this.hideAllLists();if(this.level2enabled)
{this.enableLevel2Controls();}
else
{this.disableLevel2Controls();}
this.updateLevel3Buttons();this.setBaloonPosition();this.popupOpen=true;if(this.levelsAreShown)
{this.showMenuLevels();}
BaseKit.Editor.hideFooter();},enableLevel2Controls:function()
{this.baloon.children('.level2').removeClass('disabled');},disableLevel2Controls:function()
{this.baloon.children('.level2').addClass('disabled');},updateButtons:function()
{var leftBorderSuppressButton=this.elemDOM.borderButtons.left;var rightBorderSuppressButton=this.elemDOM.borderButtons.right;if(this.leftBorderOn)
{leftBorderSuppressButton.addClass('active');}
else{leftBorderSuppressButton.removeClass('active');}
if(this.rightBorderOn)
{rightBorderSuppressButton.addClass('active');}
else{rightBorderSuppressButton.removeClass('active');}
switch(this.align)
{case'left':this.baloon.find('.widget-navigation-baloon-align-left').addClass('active');this.baloon.find('.widget-navigation-baloon-align-center').removeClass('active');this.baloon.find('.widget-navigation-baloon-align-right').removeClass('active');break;case'center':this.baloon.find('.widget-navigation-baloon-align-left').removeClass('active');this.baloon.find('.widget-navigation-baloon-align-center').addClass('active');this.baloon.find('.widget-navigation-baloon-align-right').removeClass('active');break;case'right':this.baloon.find('.widget-navigation-baloon-align-left').removeClass('active');this.baloon.find('.widget-navigation-baloon-align-center').removeClass('active');this.baloon.find('.widget-navigation-baloon-align-right').addClass('active');break;}},setBaloonPosition:function()
{this.getMovePanel().hide();if($('#page-primary__editorBKfooters').css('display')!='none')return
var baloonTip=this.baloon.children('.bk-widget-move-end');this.baloon.show();var region=this.$('content').getRegion(false,true),viewportRegion=$('#page-primary__editorBKprimary').getRegion(false,true),baloonRegion=this.baloon.getRegion(false,true);var deltaTop=region.top-viewportRegion.top,deltaBottom=viewportRegion.bottom-region.bottom,scrollTop=$('#page-primary__editorBKprimary').scrollTop(),marginLeft=parseInt($('#page-primary__editorBKprimary').css('marginLeft'));var widgetHeight=region.bottom-region.top;var widgetWidth=region.right-region.left;var leftCSS=(region.left-marginLeft-10);var viewportWidth=viewportRegion.right-viewportRegion.left-marginLeft;var alignRight=false;var baloonWidth=baloonRegion.right-baloonRegion.left,baloonHeight=baloonRegion.bottom-baloonRegion.top;if(leftCSS>viewportWidth-baloonWidth+marginLeft)
{leftCSS=viewportWidth-baloonWidth+marginLeft-20;alignRight=true;baloonTip.addClass('bk-end-right');}
else
{baloonTip.removeClass('bk-end-right');}
$up=false;switch(this.openDropdown)
{case 1:var popupRegion=this.controls['styles'].$().find('.framework-control-styles-selector-container').getRegion(false,true);if(popupRegion==null)break;var popupHeight=popupRegion.bottom-popupRegion.top;if(deltaTop+baloonHeight+popupHeight>viewportRegion.bottom)
{this.elemDOM.styles.container.addClass('up');$up=true;}
else
{this.elemDOM.styles.container.removeClass('up');}
this.controls['styles'].$().find('.framework-control-styles-selector-item-list-style-add').text('Level 1 styles');break;case 2:var popupRegion=this.controls['styles2'].$().find('.framework-control-styles-selector-container').getRegion(false,true);if(popupRegion==null)break;var popupHeight=popupRegion.bottom-popupRegion.top;if(deltaTop+baloonHeight+popupHeight>viewportRegion.bottom)
{this.elemDOM.styles2.container.addClass('up');$up=true;}
else
{this.elemDOM.styles2.container.removeClass('up');}
this.controls['styles2'].$().find('.framework-control-styles-selector-item-list-style-add').text('Level 2 styles');break;case 3:var popupRegion=this.elemDOM.pages.getRegion(false,true);var popupHeight=popupRegion.bottom-popupRegion.top;if(deltaTop+baloonHeight+popupHeight>viewportRegion.bottom)
{this.elemDOM.pages.addClass('up');$up=true;}
else
{this.elemDOM.pages.removeClass('up');}
break;case 4:var popupRegion=this.elemDOM.columns.getRegion(false,true);var popupHeight=popupRegion.bottom-popupRegion.top;if(deltaTop+baloonHeight+popupHeight>viewportRegion.bottom)
{this.elemDOM.columns.addClass('up');$up=true;}
else
{this.elemDOM.columns.removeClass('up');}
break;case 5:var popupRegion=this.controls['styles3'].$().find('.framework-control-styles-selector-container').getRegion(false,true);if(popupRegion==null)break;var popupHeight=popupRegion.bottom-popupRegion.top;if(deltaTop+baloonHeight+popupHeight>viewportRegion.bottom)
{this.elemDOM.styles3.container.addClass('up');$up=true;}
else
{this.elemDOM.styles3.container.removeClass('up');}
this.controls['styles3'].$().find('.framework-control-styles-selector-item-list-style-add').text('Level 3 styles');break;case 6:var popupRegion=this.elemDOM.separators.getRegion(false,true);var popupHeight=popupRegion.bottom-popupRegion.top;if(deltaTop+baloonHeight+popupHeight>viewportRegion.bottom)
{this.elemDOM.separators.addClass('up');$up=true;}
else
{this.elemDOM.separators.removeClass('up');}
break;default:if(deltaTop>this.baloon.outerHeight(true))
{$up=true;}}
if($up)
{baloonTip.replaceClass('bk-widget-move-end-bottom','bk-widget-move-end-top');this.baloon.replaceClass('bk-move-bottom','bk-move-top');this.baloon.css({top:(deltaTop+scrollTop-this.baloon.outerHeight(true))+'px',left:leftCSS+'px'});}
else
{baloonTip.replaceClass('bk-widget-move-end-top','bk-widget-move-end-bottom');this.baloon.replaceClass('bk-move-top','bk-move-bottom');this.baloon.css({top:(deltaTop+widgetHeight+scrollTop)+'px',left:leftCSS+'px'});}},hidePopup:function()
{this.openDropdown=0;if(this.baloon)this.baloon.hide();this.popupOpen=false;},showStylesList:function()
{if(this.openDropdown==1)
{this.openDropdown=0;this.hideAllLists();return;}
this.openDropdown=1;this.currentStyleList=1;this.elemDOM.pages.hide();this.elemDOM.columns.hide();this.elemDOM.separators.hide();this.toggleStyles();this.hideMenuLevels();},switchStyleListDropdown:function(turnOn)
{if(turnOn)
{}
else
{this.baloon.hide();}},onFooterClose:function(){this.callParent.apply(this,arguments);var widget=BaseKit.Editor.getSelectedWidget();if(widget.navigationWidget)
{setTimeout(function(){widget.switchStyleListDropdown(true)},100);}},toggleStyles:function()
{var that=this,styles=this.getOpenedStyles();if(!styles.elemDOM.container.isVisible())
{if(this.styles[styles.styleData]==null)
{var data={'id':this.id,'widget':styles.type,'localClassName':(this.localClass.length>0)?this.localClass:null};this.styles[styles.styleData]=data;this.setWidgetData(data,'styles'+(this.currentStyleList==1?'':this.currentStyleList));function waitForFinishRequest()
{if(BaseKit.Request.isActive())
{timeout=setTimeout(waitForFinishRequest,1);}
else
{clearTimeout(timeout);that.showStyleDropDown(styles);that.setBaloonPosition();}}
var timeout=setTimeout(waitForFinishRequest,2000);}
else
{that.showStyleDropDown(styles);that.setBaloonPosition();}}
else
{styles.elemDOM.container.hide();}},hideStyleDropDown:function()
{this.elemDOM.styles.container.hide();this.elemDOM.styles2.container.hide();this.elemDOM.styles3.container.hide();},hideNotCurrentStyleDropDowns:function(currentStyle)
{var stylesArray={1:'',2:'2',3:'3'};for(var ii in stylesArray)
{if(ii!=currentStyle)
{this.elemDOM['styles'+stylesArray[ii]].container.hide();}}},showStyleDropDown:function(currentStyle)
{currentStyles=currentStyle||this.controls['styles'];currentStyles.control.selectStyleItem(this.currentStyleList==3?this.level3StyleRef:(this.openDropdown==2?this.level2StyleRef:this.styleRef));currentStyles.elemDOM.container.show();this.hideNotCurrentStyleDropDowns(this.currentStyleList);this.updateStyleSelectorCaption();currentStyles.control.controls['styles'].$('holder').scrollbar(function(){arrows:false});},showStyles2List:function()
{if(this.openDropdown==2)
{this.openDropdown=0;this.hideAllLists();return;}
this.openDropdown=2;this.currentStyleList=2;this.elemDOM.pages.hide();this.elemDOM.columns.hide();this.elemDOM.separators.hide();this.toggleStyles();this.showMenuLevels();},showStyles3List:function()
{if(this.openDropdown==5)
{this.openDropdown=0;this.hideAllLists();return;}
this.openDropdown=5;this.currentStyleList=3;this.elemDOM.pages.hide();this.elemDOM.columns.hide();this.elemDOM.separators.hide();this.toggleStyles();this.showMenuLevels();},showPagesList:function()
{if(this.openDropdown==3)
{this.openDropdown=0;this.hideAllLists();return;}
this.updatePagesList();this.openDropdown=3;this.save();this.hideStyleDropDown();this.elemDOM.columns.hide();this.elemDOM.separators.hide();var region=this.baloon.getRegion(false,true);var buttonRegion=this.baloon.find('.pagesButton').getRegion(false,true);var left=buttonRegion.left-region.left;this.elemDOM.pages.css({left:left+'px'}).show();this.setBaloonPosition();this.hideMenuLevels();},showSeparatorList:function()
{if(this.openDropdown==6)
{this.openDropdown=0;this.hideAllLists();return;}
this.updatePagesList();this.openDropdown=6;this.save();this.hideStyleDropDown();this.elemDOM.pages.hide();this.elemDOM.columns.hide();var region=this.baloon.getRegion(false,true);var buttonRegion=this.baloon.find('.separatorButton').getRegion(false,true);var left=buttonRegion.left-region.left;this.elemDOM.separators.css({left:left+'px'}).show();this.setBaloonPosition();this.hideMenuLevels();},showColumnsList:function()
{if(this.openDropdown==4)
{this.openDropdown=0;this.hideAllLists();return;}
this.openDropdown=4;this.save();this.hideStyleDropDown();this.elemDOM.pages.hide();this.elemDOM.separators.hide();var region=this.baloon.getRegion(false,true);var buttonRegion=this.baloon.find('.columnCountButton').getRegion(false,true);var left=buttonRegion.left-region.left-10;this.elemDOM.columns.css({left:left+'px'}).show();this.elemDOM.columns.show();this.setBaloonPosition();this.showMenuLevels();},updateLevel3Buttons:function()
{if(this.grouppingEnabled)
{this.baloon.find('.level3').removeClass('disabled');}
else
{this.baloon.find('.level3').addClass('disabled');this.openDropdown=0;}},toggleGroupping:function()
{this.grouppingEnabled=!this.grouppingEnabled;if(!this.grouppingEnabled)
{this.elemDOM.styles3.container.hide();}
this.save(['grouppingEnabled']);this.updageSubmenuGroupping();this.updateColumns();this.updateColumns2ndLevel();this.correctColumns();this.updateLevel3Buttons();this.showMenuLevels();},updageSubmenuGroupping:function()
{if(this.grouppingEnabled)
{this.submenu.each(function(submenu){submenu.element.find('.collapse').removeClass('hidden');});}
else
{this.submenu.each(function(submenu){submenu.element.find('.collapse').addClass('hidden');});}},hideAllLists:function()
{this.openDropdown=0;this.hideStyleDropDown();this.elemDOM.pages.hide();this.elemDOM.columns.hide();this.elemDOM.separators.hide();this.hideMenuLevels();},toggleShowLevels:function()
{this.levelsAreShown=!this.levelsAreShown;if(this.levelsAreShown)
{this.showMenuLevels();}
else
{this.hideMenuLevels();}},showMenuLevels:function()
{},hideMenuLevels:function()
{},updatePagesList:function(){var that=this;var container=this.elemDOM.pages.children('.pageList');container.find('.tools').remove();var pagesList=container.find('.folder');pagesList.removeClass('selected');$.each(pagesList,function(index,item){if($(item).attr('ref')==that.menuListId)
{$(item).addClass('selected');if(that.orderingOn)
{$(item).siblings('.submenu').show().children().children('.item').each(function(key,elm){var tools=$('<div>').attr('class','tools up');tools.click(function(){var li=$(this).parent();var num=$(li).parent().children().index(li);var prevLi=$(li).prev();prevLi.insertAfter(li);var menuItem=that.$('list').children('li').eq(num);if(menuItem)
{var prevMenu=$(menuItem).prev();prevMenu.insertAfter(menuItem);}
that.saveMenuOrder(li.parent());});$(elm).parent().prepend(tools);tools2=$('<div>').attr('class','tools down');tools2.click(function(){var li=$(this).parent();var num=$(li).parent().children().index(li);var nextLi=$(li).next();nextLi.insertBefore(li);var menuItem=that.$('list').children('li').eq(num);if(menuItem)
{var nextMenu=$(menuItem).next();nextMenu.insertBefore(menuItem);}
that.saveMenuOrder(li.parent());});$(elm).parent().prepend(tools2);});}}});},saveMenuOrder:function(rootElement)
{var list=[],parentRef=$(rootElement).siblings('.folder').attr('ref');$(rootElement).children().each(function(ind,elm){list[list.length]=$(elm).children('.item').attr('ref');});this.saveOrder(parentRef,list);},updateStyles:function(styleRef){if(this.navigationWidget)
{if(1==this.currentStyleList){this.controls['styles'].selectStyleItem(this.styleRef);var stylesHolder=this.controls["styles"].controls['styles'].$('holder');}
else if(2==this.currentStyleList)
{this.controls['styles2'].selectStyleItem(this.styleRef);var stylesHolder=this.controls["styles2"].controls['styles'].$('holder');}
else if(3==this.currentStyleList)
{this.controls['styles3'].selectStyleItem(this.styleRef);var stylesHolder=this.controls["styles3"].controls['styles'].$('holder');}
stylesHolder.scrollbar(function(){arrows:false});stylesHolder.scrollbar('scrollto','bottom');this.updateStyleSelectorCaption();}},updateSpacing:function()
{if(BaseKit.Browser.ie6||BaseKit.Browser.ie7||BaseKit.Browser.ie8)
{var spacing={marginTop:this.style1Spacing['margin-top']+'px',marginRight:this.style1Spacing['margin-right']+'px',marginBottom:this.style1Spacing['margin-bottom']+'px',marginLeft:this.style1Spacing['margin-left']+'px'},padding={paddingTop:this.style1Spacing['padding-top']+'px',paddingRight:this.style1Spacing['padding-right']+'px',paddingBottom:this.style1Spacing['padding-left']+'px',paddingLeft:this.style1Spacing['padding-bottom']+'px'};this.$('list').children('li').children('a').css(padding).css(spacing);}},getCurrentStyleList:function()
{return this.currentStyleList;},prepareDeletion:function()
{this.baloon.remove();},toggleLeftBorder:function(event){this.leftBorderOn=!this.leftBorderOn;this.updateLeftBorder();this.save(['leftBorderOn']);},updateLeftBorder:function(event){if(this.leftBorderOn)
{this.elemDOM.list.removeClass('no-left-border');}
else{this.elemDOM.list.addClass('no-left-border');}},toggleRightBorder:function(event){this.rightBorderOn=!this.rightBorderOn;this.updateRightBorder();this.save(['rightBorderOn']);},updateRightBorder:function(event){if(this.rightBorderOn)
{this.elemDOM.list.removeClass('no-right-border');}
else{this.elemDOM.list.addClass('no-right-border');}},updateColumns:function()
{var that=this;if(!this.grouppingEnabled)return;this.submenu.each(function(submenu)
{submenu.element.find('.'+that.makeClass('section-column')).css('height','auto');submenu.element.find('.collapse').each(function(key,collapse)
{that._refillColumns(collapse,that.columns,'nav-level3 '+that.level3StyleClassName);});that.correctColumnWidth(submenu.element);that.correctColumnHeight(submenu.element);});},updateColumns2ndLevel:function()
{var that=this;var columns=this.columns;this.submenu.each(function(submenu)
{submenu.element.children('div.menu-column').children('.'+that.makeClass('section-column')).css('height','auto');that._refillColumns(submenu.element,columns,'nav-level2 '+that.level2StyleClassName);that.correctColumnWidth(submenu.element);that.correctColumnHeight(submenu.element);});},_refillColumns:function(container,columns,styles)
{var that=this,items=[];$(container).children('div.menu-column').each(function(key,div)
{$(div).children('ul').children('li').each(function(key,li)
{items.push($(li).detach());});}).remove();var colCount=(columns<=items.length?columns:items.length);var percentage=100/colCount;var clearer=$(container).children('div.clear').remove();if(items.length>0)
{var currColumn=0,done=0,columnLength=Math.ceil(items.length/colCount);for(var i=0;i<colCount;i++)
{var div=$('<div>').css({'width':''+percentage+'%','float':'left'}).attr('class','menu-column');var ul=$('<ul>').attr('class',that.makeClass('section-column')+' '+styles);for(var j=0;j<columnLength&&done<items.length;j++)
{ul.append(items[done++]);if(colCount-i>1&&items.length-done<colCount-i)break;}
$(container).append(div.append(ul));}}
$(container).append(clearer);},doExecCommand:function(option,value)
{lastAlign='';switch(option)
{case'align':var classes=this.elemDOM.list.attr('class').split(' ');classes.each(function(styleName){if(jQuery.inArray(styleName,['left','center','right'])<-1)
{lastAlign=styleName;}});if(lastAlign!=value)
{this.elemDOM.list.removeClass("left center right");this.elemDOM.list.addClass(value);}
this.align=value;this.save(['align']);this.updateButtons();break;}},correctColumnHeight:function(elem)
{var that=this,maxHeight=0,count=0,colHeight='auto';elem.find('ul').css('height','auto');elem.children('.menu-column').children('ul').each(function(index,element)
{var height=$(element).innerHeight();if(height>maxHeight)maxHeight=height;count++;$(element).find('.collapse').each(function(ind3,el3){that.correctColumnHeight($(el3));});});if(count>1&&maxHeight>0)
{colHeight=maxHeight+'px';}
elem.children('.menu-column').children('ul').css('height',colHeight);},correctColumnWidth:function(elem)
{var prevWidth=elem.width();elem.css('width','auto');var that=this,maxWidth=0,colCount=0,dif1=0;elem.children('.menu-column').children('ul').each(function(index,element)
{var width=$(element).innerWidth();dif1=$(element).outerWidth(true)-parseInt($(element).width());if(width>maxWidth)maxWidth=width;colCount++;$(element).children('li').find('a').children('span').each(function(ind5,span)
{var dif2=$(span).parent().outerWidth(true)-parseInt($(span).parent().width());var width=$(span).innerWidth()+dif2;if(width>maxWidth)maxWidth=width;});if(that.grouppingEnabled)
{$(element).children('li').children('.collapse').each(function(ind2,collapse)
{var localCount3=0,localWidth=0;$(collapse).children('.menu-column').each(function(ind3,menuColumn)
{$(menuColumn).children('ul').each(function(ind4,ul)
{var dif3=$(ul).outerWidth(true)-parseInt($(ul).width());$(ul).children('li').children('a').children('span').each(function(ind5,span)
{var dif4=$(span).parent().outerWidth(true)-parseInt($(span).parent().width());var width=$(span).innerWidth()+dif3+dif4;if(width>localWidth)localWidth=width;});localCount3++;});});var width=localCount3*localWidth;if(width>maxWidth)maxWidth=width;});}});maxWidth=colCount*(maxWidth+dif1);if(maxWidth>0)
{elem.css('width',maxWidth+'px');var left=parseInt(elem.css('left'));var region=this.$('content').getRegion(false,true);var marginLeft=parseInt($('#page-primary__editorBKprimary').css('marginLeft'));var leftCSS=(region.left-marginLeft-10);if(left<leftCSS)
{elem.css('left',left-(maxWidth-prevWidth));}}},correctColumns:function()
{var that=this;$(this.submenu).each(function(key,el)
{that.correctColumnWidth(el.element);that.correctColumnHeight(el.element);});},updateStyleSelectorCaption:function()
{this.controls['styles'].$().find('.framework-control-styles-selector-item-list-style-add').text('Level 1 styles');this.controls['styles2'].$().find('.framework-control-styles-selector-item-list-style-add').text('Level 2 styles');this.controls['styles3'].$().find('.framework-control-styles-selector-item-list-style-add').text('Level 3 styles');},reloadPage:function()
{window.location.href=window.location.href;}}});})();(function()
{var editor=null;var tip=null;var sessionTimeout=null;var snapRange=6;var alignX=null,alignY=null;var deleting=false;var range=null;var selectedWidget=null;var previousWidget=null;var doing={};var selectHandlers=[];var unselectHandlers=[];var timeout=null;var contentHeight=0;var currentFooter=null;var alignCoords={};var widgetMode='move';var footerFullScreen=false;var templateLock=false;var lockFooter=false;var clearTimeoutSizeToolTip=null;function loadPreviousPage(event)
{if(event.target.tagName!='INPUT'&&event.target.tagName!='TEXTAREA')
{BaseKit.Framework_Page.confirm(editor.t("return-previous-page"),function()
{history.go(-1);});event.stopPropagation();event.preventDefault();return;}}
function amIalive(isCreated)
{url=window.location.href;urlNoParam=url.substring(0,url.indexOf('?'));if(urlNoParam)
{url=urlNoParam;}
$.get(url+"?__heartbeat",function()
{editor.heartbeat(isCreated);isCreated=true;setTimeout(function()
{amIalive(isCreated);},60000);}).fail(function(e)
{BaseKit.Framework_Page.showLightbox('connectionerror');});}
function startSession()
{if(typeof editor.sessionTime!=="undefined"&&editor.sessionTime){sessionTime=editor.sessionTime*1000;}else{sessionTime=3600000;}
clearTimeout(sessionTimeout);sessionTimeout=setTimeout(function()
{editor.logOut(false);var mins=Math.floor(sessionTime/60000);BaseKit.Framework_Page.login(editor.t("logged-out-message",mins),function(){window.location=editor.brandLoginUrl;});},sessionTime);}
function checkKeyPress(event)
{var keyCodes=[46,8];if(((event.keyCode&&(keyCodes.contains(event.keyCode)))||(event.which&&(keyCodes.contains(event.which))))&&deleting==false)
{if(event.target.tagName!='INPUT'&&event.target.tagName!='TEXTAREA')
{if(BaseKit.Element.Plugin.Wysiwyg.isActive()=='true')
{return;}
if(BaseKit.Browser.ie)
{var widget=BaseKit.Editor.getSelectedWidget();if(widget!=null&&widget instanceof BaseKit.Widget_Content&&widget.editing==true)
{return;}}
event.returnValue=false;deleting=true;var editor=BaseKit.Editor.get(),toolbar=editor.footers.panel1.controls.settings;toolbar.deleteWidget(false,null,false);deleting=false;}}}
function buildAlignmentGuides()
{if(alignX===null||alignY===null)
{alignX=$('<div></div>').addClass('hidden').css({position:'absolute',width:'1px',top:'0',height:'100%',background:'transparent url(http://www.hostgator.co.in/framework/images/ui/align-guide.png) repeat-y 0 0',zIndex:900000});alignY=$('<div></div>').addClass('hidden').css({position:'absolute',height:'1px',left:'0',width:'100%',background:'transparent url(http://www.hostgator.co.in/framework/images/ui/align-guide.png) repeat-x 0 0',zIndex:900000});}}
var ruler=null,rulerBG=null,guides=[];function saveGuides()
{var page=$bk("page"),data=[];if(page!==null&&typeof page=="object"&&typeof page.saveGuides=="function")
{$.each(guides,function(i,guide)
{data.push(guide.data("position"));});page.saveGuides(data);}}
function addGuide(percent,dontRefresh,show)
{percent=Math.max(0,Math.min(1.0,percent));var editor=$(".editor"),guide=$("<div></div>").addClass("editor-guide"),dragger=$("<div></div>").addClass("editor-guide-drag prevent-select");var delta=0,row=$(".control-row-content").filter(":visible").first(),offset=row.offset(),width=row.width(),pixels=percent*width;guide.mousedown(function(event)
{event.preventDefault();});guide.css({left:(pixels+offset.left)+"px"});dragger.css({left:(pixels+offset.left-5)+"px"});dragger.dblclick(function(event)
{var remaining=[];$.each(guides,function(i,check)
{if(!check.compare(guide))
{remaining.push(check);}});guides=remaining;saveGuides();guide.remove();dragger.remove();event.stop();});var dragPlugin={custom:true,onDragStart:function(drag,x,y,event)
{row=$(".control-row-content").filter(":visible").first();offset=row.offset();width=row.width();delta=x-dragger.offset().left;if(event.originalEvent&&event.originalEvent.stopPropagation)
{event.originalEvent.stopPropagation();event.originalEvent.preventDefault();}
else
{return false;}},onDragMove:function(drag,x,y)
{var pixels=x-delta+5-offset.left;pixels=Math.max(0,Math.min(pixels,width));dragger.css("left",(pixels+offset.left-5)+"px");guide.css("left",(pixels+offset.left)+"px");guide.data("position",parseFloat((pixels/width).toFixed(5)));},onDragFinish:function()
{saveGuides();}};dragger.addPlugin("drag",dragPlugin);guide.addPlugin("drag",dragPlugin);guide.data("position",percent);guide.data("dragger",dragger);editor.append(guide);editor.append(dragger);guides.push(guide);if(!dontRefresh)
{BaseKit.Editor.refreshGuides();}
if(show!==true)
{guide.hide();dragger.hide();}}
function createRuler()
{if(ruler===null)
{var editor=$(".editor");rulerBG=$("<div></div>").addClass("editor-ruler-bg");ruler=$("<div></div>").addClass("editor-ruler prevent-select");ruler.dblclick(function(event)
{var offset=ruler.offset(),width=ruler.width(),pixels=event.pageX-offset.left,percent=parseFloat((pixels/width).toFixed(5));addGuide(percent,false,true);saveGuides();event.stop();});editor.append(ruler);editor.append(rulerBG);ruler.hide();rulerBG.hide();BaseKit.Editor.refreshGuides();}}
function loadGuides()
{var page=$bk("page");if(page!==null&&typeof page=="object"&&typeof page.guides!="undefined")
{guides=[];var show=page.showingGuides&&BaseKit.Framework_Page.isMode(["edit"]);$.each(page.guides,function(i,percent)
{addGuide(percent,true,show);});BaseKit.Editor.refreshGuides();}}
BaseKit.Editor=BaseKit.Class.create({superclass:BaseKit.Framework_Control,globals:{isWidgetMode:function()
{for(var i=0;i<arguments.length;++i)
{if(widgetMode==arguments[i])
{return true;}}
return false;},validateCollection:function(collection)
{for(var i in collection)
{var control=collection[i];if(typeof control.validate=="function")
{var result=control.validate();if(result==false)
{return false;}}}
return true;},destroyWidget:function(widget,dontUndo,pointer)
{var prevSelectedWidget=selectedWidget;if(selectedWidget&&selectedWidget!==null&&widget.id==selectedWidget.id)
{this.selectWidget(null);}
widget._deleted=true;var element=widget.$().detach();widget.detach();var parent=widget.parent;var before=widget.getObjectAfter();if(typeof widget.onDelete=='function')
{widget.onDelete();}
widget.destroySettingsPanels();widget.destroy(true);BaseKit.Editor.hideFooter();if(selectedWidget&&selectedWidget!==null&&widget.id!=selectedWidget.id&&typeof prevSelectedWidget.checkChildDelete=="function")
{prevSelectedWidget.checkChildDelete();}
if(pointer===false||pointer===undefined||pointer===null)
{pointer=BaseKit.UndoManager.getUndoPointer();pointer++;}
if(!dontUndo)
{pointer=BaseKit.UndoManager.pushUndoState("widgetDestroy",{object:widget,element:element,parent:parent,before:before?before.id:null});}
editor.destroyObject(widget.id,pointer);return;},restoreWidget:function(parent,object,before,element,pointer,dispatch)
{if(dispatch!==true)
{dispatch=false;}
if(typeof parent.getContentEl=="function")
{var contentEl=parent.getContentEl();if(before===null)
{element.appendTo(contentEl);}
else
{element.insertBefore($('#'+before));}
parent.insertChild("widgets",object,before);object.addObject();object.attach();if(dispatch==true)
{object.dispatch('attach');}
parent.reset();object._deleted=false;editor.restoreObject(object.id,pointer);}},destroyColumn:function(control,dontUndo,dontRestore,pointer)
{if(dontRestore!==true)
{dontRestore=false;}
if(selectedWidget&&selectedWidget!==null)
{var el=selectedWidget.$();if(el&&el!==null&&el.isDescendentOf(control.$()))
{BaseKit.Editor.selectWidget(null);}}
var element=control.$();element.removePlugin('drop');control.detach();element.remove();var parent=control.parent;var before=control.getObjectAfter();control.destroySettingsPanels();control.destroy(true);if(!dontRestore&&typeof parent.restore=="function")
{parent.restore();}
if(pointer===false||pointer===undefined||pointer===null)
{pointer=BaseKit.UndoManager.getUndoPointer();pointer++;}
if(!dontUndo)
{pointer=BaseKit.UndoManager.pushUndoState("columnDestroy",{column:control,element:element,parent:parent,before:before!==null?before.id:null,dontRestore:false});}
editor.destroyObject(control.id,pointer);},restoreColumn:function(parent,object,before,element,pointer,dontRestore)
{if(dontRestore!==true)
{dontRestore=false;}
var parentEl=parent instanceof BaseKit.Widget_Columns?parent.$("content"):parent.$();if(before!==null)
{element.insertBefore($('#'+before));}
else
{element.appendTo(parentEl);}
parent.insertChild("columns",object,before);object.addObject();object.attach();object.dispatch('attach');if(dontRestore!==true&&typeof parent.restore=="function")
{parent.restore();}
editor.restoreObject(object.id,pointer);},populateCoords:function()
{var allObjs=BaseKit.Framework_Base.getAll(),widgetID=selectedWidget.id,widgetEl=selectedWidget.$();alignCoords={};for(var id in allObjs)
{var object=allObjs[id];if(typeof object._isWidget!='undefined'&&id!=widgetID&&!object.$().isDescendentOf(widgetEl)&&!object.$().isAncestorOf(widgetEl))
{var content=object.$('content').getRegion(false,false);if(content!==null)
{alignCoords[id]={top:content.top,middle:(content.top+content.bottom)>>1,bottom:content.bottom,left:content.left,center:(content.left+content.right)>>1,right:content.right};}}}
if(rulerBG&&rulerBG.isVisible())
{var row=$(".control-row-content").filter(":visible").first(),offset=row.offset(),width=row.width();ruler.css({left:offset.left+"px",width:(width-1)+"px"});$.each(guides,function(i,guide)
{var pixels=guide.data("position")*width;alignCoords["guide"+i]={top:0,middle:0,bottom:0,left:pixels+offset.left,center:pixels+offset.left,right:pixels+offset.left};});}},snapCoordinate:function(coord,horizontal,limit,inner)
{var found=false,offsetX=0,container=editor.$('primary'),id=null,check=null;if(horizontal)
{var sidebar=BaseKit.Editor.getSidebar();if(sidebar.showing=='sidebar'||sidebar.showing==undefined)
{offsetX=parseInt(sidebar.$().width(),10)+1;}
for(id in alignCoords)
{check=alignCoords[id];if(!limit||limit=='center')
{var center=check.center-((inner.right-inner.left)>>1);if(center>(coord-snapRange)&&center<(coord+snapRange))
{coord=center;BaseKit.Editor.showVerticalGuide('left',(check.center-offsetX)+'px');found=true;}}
if(!limit||limit=='left')
{var left=check.left;if(!found&&left>(coord-snapRange)&&left<(coord+snapRange))
{coord=left;BaseKit.Editor.showVerticalGuide('left',(check.left-offsetX)+'px');found=true;}}
if(!limit||limit=='right')
{var right=check.right-(limit?0:(inner.right-inner.left));if(!found&&right>(coord-snapRange)&&right<(coord+snapRange))
{coord=right;BaseKit.Editor.showVerticalGuide('left',(check.right-offsetX)+'px');found=true;}}}
if(found)
{BaseKit.Editor.showVerticalGuide('top',container.scrollTop()+'px');}
else
{BaseKit.Editor.hideVerticalGuide();}}
else
{var rulerHeight=rulerBG.isVisible()?rulerBG.height():0;var header=BaseKit.Framework_Page.getHeader().$();var toolbarHeight=24;var offsetY=header.outerHeight()-container.scrollTop()+rulerHeight+toolbarHeight;for(id in alignCoords)
{check=alignCoords[id];if(!limit||limit=='middle')
{var middle=check.middle-((inner.bottom-inner.top)>>1);if(middle>(coord-snapRange)&&middle<(coord+snapRange))
{coord=middle;nabvar=parseInt($('.navbar-inner').css('height'),10);subnav=parseInt($('.subnav-fixed').css('height'),10);BaseKit.Editor.showHorizontalGuide('top',(check.middle-offsetY)-subnav-nabvar+'px');found=true;}}
if(!limit||limit=='top')
{var top=check.top;if(!found&&top>(coord-snapRange)&&top<(coord+snapRange))
{coord=top;nabvar=parseInt($('.navbar-inner').css('height'),10);subnav=parseInt($('.subnav-fixed').css('height'),10);BaseKit.Editor.showHorizontalGuide('top',(check.top-offsetY)-subnav-nabvar+'px');found=true;}}
if(!limit||limit=='bottom')
{var bottom=check.bottom-(limit?0:(inner.bottom-inner.top));if(!found&&bottom>(coord-snapRange)&&bottom<(coord+snapRange))
{coord=bottom;nabvar=parseInt($('.navbar-inner').css('height'),10);subnav=parseInt($('.subnav-fixed').css('height'),10);BaseKit.Editor.showHorizontalGuide('top',(check.bottom-offsetY)-subnav-nabvar+'px');found=true;}}}
if(found)
{BaseKit.Editor.showHorizontalGuide('left',container.scrollLeft()+'px');}
else
{BaseKit.Editor.hideHorizontalGuide();}}
return coord;},showDataFooter:function(widget)
{BaseKit.Element.Plugin.Wysiwyg.stop();var footers=editor.dataFooters;for(var name in footers)
{if(footers[name].controlID==widget.id)
{editor.showFooter(name,true);return;}}
editor.createDataFooter(widget.id);},isTemplateLocked:function()
{return templateLock;},lockTemplate:function()
{templateLock=true;BaseKit.Editor.selectWidget(null);var editor=BaseKit.Editor.get();editor.primary.template.lockTemplatedRegions();},unlockTemplate:function()
{templateLock=false;var editor=BaseKit.Editor.get();editor.primary.template.unlockTemplatedRegions();},toggleTemplateLock:function()
{templateLock?BaseKit.Editor.unlockTemplate():BaseKit.Editor.lockTemplate();},IsFooterLocked:function()
{return(lockFooter==true)?true:false;},EnableFooterFullScreen:function()
{if(editor.$("editor-footer-fullscreen")!==null)
{editor.$("editor-footer-fullscreen").show();}},DisableFooterFullScreen:function(doClose)
{if(editor.$("editor-footer-fullscreen")!==null)
{if(doClose&&doClose==true)
{editor.footerExitFullScreen();}
editor.fireEvent('onFooterEnterFullScreen');editor.$("editor-footer-fullscreen").hide();}},showFooter:function(tab)
{var panel=(tab!==undefined)?tab:'settings';if(BaseKit.Framework_Page.isMode(['edit','preview','themeselector','admin']))
{editor.showFooter(panel);}},hideFooter:function(instant)
{if(BaseKit.Framework_Page.isMode(['edit','preview','themeselector','admin']))
{if(instant)
{var footer=editor.$("footerX"),primary=editor.$("primary"),footerHeight=footer.innerHeight();footer.css('bottom',-footerHeight+'px');primary.css('marginBottom','0px');footer.hide();editor.fireEvent('onFooterClose');}
else
{editor.slideOutFooter();}}},CloseFooter:function()
{var editor=BaseKit.Editor.get();editor.slideOutFooter();editor.fireEvent('onFooterClose');},toggleFooter:function(tab)
{var tabPanel=(tab!==undefined)?tab:'settings';if(!editor.$("footerX").isVisible())
{BaseKit.Framework_Page.hideTooltip(true);editor.showFooter(tabPanel);}
else
{editor.slideOutFooter();}},isFooterVisible:function()
{return(editor.$("footerX").isVisible())?true:false;},getSelectedWidget:function()
{if(BaseKit.Framework_Page.isMode(['edit','preview','themeselector','admin']))
{return selectedWidget||null;}},get:function()
{if(BaseKit.Framework_Page.isMode(['edit','preview','admin','themeselector']))
{return editor;}},isApplyingTheme:function()
{if(BaseKit.Framework_Page.isMode(['edit','preview','admin','themeselector']))
{var editor=BaseKit.Editor.get();return editor.applying;}},getSidebar:function(name)
{if(BaseKit.Framework_Page.isMode(['edit','preview','admin','themeselector']))
{if(name!=undefined&&name!=null)
{return editor.controls.sidebar.getTabByName(name);}
return editor.controls.sidebar||null;}
return null;},setupSelect:function(event,forced)
{if(forced)
{return false;}
var check=$(event.target);if(editor&&BaseKit.Framework_Page.getLightbox())
{return;}
if(check.hasClass('bk-widget-side-drop-left')||check.hasClass('bk-widget-side-drop-right'))
{if(editor.$("footerX").isVisible())
{editor.slideOutFooter();}}
while(!check.is('body'))
{if(check.hasClass("prevent-select")||check.is('input')||check.is('textarea')||check.is('select'))
{return;}
check=check.parent();}
if(BaseKit.Framework_Page.isMode(['edit'])&&!BaseKit.Framework_Page.isDoing('widget.drag'))
{var tab=BaseKit.Framework_Control_TabPanel.getCurrentTab();if(tab!==null&&typeof tab.onCleanUp=='function')
{if(!tab.onCleanUp())
{return;}}
var x=event.pageX,y=event.pageY,objects=BaseKit.Framework_Base.getAll(),widget=null,widgetElement=null;var clientRegion=editor.$("primary").getRegion(true);if(y>clientRegion.top&&y<clientRegion.bottom&&x>clientRegion.right)
{return;}
for(var id in objects)
{var object=objects[id];if((object.parent&&(object.parent instanceof BaseKit.Framework_Control_Zone||object.parent instanceof BaseKit.Widget_Columns_Column||object.parent instanceof BaseKit.Widget_Carousel_Page||object instanceof BaseKit.Framework_Control_Theme||object.parent instanceof BaseKit.Framework_Control_LibraryItem||object instanceof BaseKit.Widget_Columns_Column)&&!object.__unselectable))
{var element=(object instanceof BaseKit.Widget_Columns_Column&&object.parent.topLevel===true)?object.$():object.$("content"),region=element.getRegion();if(region&&x>=region.left&&x<=region.right&&y>=region.top&&y<=region.bottom)
{if(widgetElement===null||(element.isDescendentOf(widgetElement)&&(typeof widget.locked=="undefined"||!widget.locked))||(element.isAncestorOf(widgetElement)&&typeof object.locked!="undefined"&&object.locked))
{widget=object;widgetElement=element;}}}}
BaseKit.Editor.selectWidget(widget,event,widget!==null);event.stopPropagation();event.preventDefault();}},init:function()
{buildAlignmentGuides();BaseKit.Framework_Widget.setupWidgetHandles();},startUp:function()
{var that=this;BaseKit.Framework_Page.attachBodyClick(this.setupSelect);window.onunload=function()
{if(editor!==null)
{BaseKit.Framework_Page.hideTooltip();if(typeof BaseKit.Framework_Page.hideUI=='function')
{BaseKit.Framework_Page.hideUI();}
if(typeof BaseKit.Framework_Page.showIndicator=='function')
{BaseKit.Framework_Page.showIndicator(editor.t('please-wait'));}}};},widgetDraggingMouseClass:function(draggingWidget,cls)
{if(draggingWidget!==null&&!draggingWidget.hasClass(cls))
{draggingWidget.addClass(cls);}},isWithinSelectedWidget:function(x,y)
{if(BaseKit.Framework_Page.isMode(['edit','preview','themeselector']))
{if(selectedWidget&&selectedWidget.$())
{var region=selectedWidget.$().getRegion();return(x>region.left&&x<region.right&&y>region.top&&y<region.bottom);}
return false;}},selectWidget:function(widget,event,dontHideFooter)
{if(lockFooter)
{return;}
if(widget!==null&&widget._hasSettings==false)
{BaseKit.Editor.hideFooter();}
if(BaseKit.Framework_Page.isMode(["edit","preview",'themeselector']))
{if(selectedWidget&&widget&&selectedWidget.id==widget.id)
{return;}
var previousWidget=selectedWidget;if(selectedWidget!=null&&selectedWidget.__unselectable!=true)
{try
{if(!selectedWidget.$().length)
{return;}
if(selectedWidget instanceof BaseKit.Widget_Content&&BaseKit.Element.Plugin.Wysiwyg.isGeneratingTinyMCE())
{return;}
if(!(selectedWidget instanceof BaseKit.Widget_Columns_Column)&&!(selectedWidget instanceof BaseKit.Framework_Control_Row)&&!(selectedWidget instanceof BaseKit.Framework_Control_Theme))
{selectedWidget.removeDragHandles();selectedWidget.onUnselect(widget);BaseKit.Element.Plugin.Wysiwyg.stop();if(widgetMode=='edit')
{selectedWidget.onExitEditMode();selectedWidget.onEnterMoveMode(dontHideFooter);}}
BaseKit.Framework_Page.finishDoing("widget-selected");if(selectedWidget instanceof BaseKit.Framework_Control_Row||selectedWidget instanceof BaseKit.Widget_Columns_Column)
{selectedWidget.hideSettings();selectedWidget.$().removeClass("bk-selected");}
else if(!(selectedWidget instanceof BaseKit.Framework_Control_Theme))
{selectedWidget.$().removeClass("editing");}
clearTimeout(clearTimeoutSizeToolTip);if(typeof selectedWidget.hideSizeToolTip=='function')
{selectedWidget.hideSizeToolTip();}
selectedWidget.parent.$().css('zIndex','100');selectedWidget=null;editor.selectedWidgetID=null;$(document).unbind('keydown',checkKeyPress);}
catch(error)
{}}
if(widget&&(!previousWidget||previousWidget.id!=widget.id))
{var flag=false;var isEditableColumn=(widget instanceof BaseKit.Framework_Control_Slice_Column&&widget.mode=='edit')?true:false;if(BaseKit.Editor.isTemplateLocked()==true&&isEditableColumn==false)
{var check=widget.parent;while(check!=null&&!(check instanceof BaseKit.Framework_Page))
{if(check.__zone!=undefined&&check.__zone==true&&check.mode!=undefined&&check.mode=='edit')
{flag=true;}
check=check.parent;}
if(flag==false)
{BaseKit.Editor.hideFooter();return;}}
BaseKit.Framework_Page.hideTooltip(true);selectedWidget=widget;selectedWidget.parent.$().css('zIndex','101');editor.selectedWidgetID=widget.id;if(widget instanceof BaseKit.Widget_Columns_Column||widget instanceof BaseKit.Framework_Control_Row||widget instanceof BaseKit.Framework_Control_Theme)
{if(typeof widget.showSettings=='function')
{widget.showSettings();}
if(widget.$()!==undefined)
{widget.$().addClass("bk-selected");}
if(widget instanceof BaseKit.Framework_Control_Theme)
{var toolbar=editor.footers.panel1.controls.settings;toolbar.buildSettingsBar(widget);BaseKit.Framework_Control_TabPanel.loadTabs(widget._tabs);}
return;}
if(selectedWidget.__unselectable!=true)
{selectedWidget.$().addClass("editing");selectedWidget.onSelect(previousWidget,event);BaseKit.Framework_Page.startDoing("widget-selected");if(widgetMode=='edit')
{selectedWidget.onExitMoveMode();selectedWidget.onEnterEditMode();}}
$(document).keydown(checkKeyPress);}
if(widget==null)
{if(!dontHideFooter)
{BaseKit.Editor.hideFooter();}
var settings=editor.footers.panel1.controls.settings;settings.hideSettingsBar();}}},showHorizontalGuide:function(side,pixels)
{var primary=editor.$("primary");primary.append(alignY);alignY.css(side,pixels);alignY.css('width',primary.attr('scrollWidth')+'px');alignY.show();},hideHorizontalGuide:function()
{alignY.hide();},showVerticalGuide:function(side,pixels)
{var primary=editor.$("primary");primary.append(alignX);alignX.css(side,pixels);alignX.show();},hideVerticalGuide:function()
{alignX.hide();},setRange:function(rangeObj)
{if(rangeObj!=null&&rangeObj.htmlText!='')
{range=rangeObj;}},getRange:function()
{return range;},clearRange:function()
{range=null;},getToolbar:function()
{if(typeof editor.panels!='undefined'&&typeof editor.panels.toolbar!='undefined')
{return editor.panels.toolbar;}
return null;},lockFooter:function()
{lockFooter=true;},unlockFooter:function()
{lockFooter=false;},stopHideShowHoverSettings:function(state)
{disallowSettings=state;},areHoverSettingsLocked:function()
{return disallowSettings;},refreshGuides:function()
{var row=$(".control-row-content").filter(":visible").first(),offset=row.offset(),width=row.width();var paddingLeft=$(".control-row-content").filter(":visible").first().css("padding-left");var paddingright=$(".control-row-content").filter(":visible").first().css("padding-right");ruler.css({left:(parseInt(offset.left)+20)+"px",width:(width+parseInt(paddingLeft)+parseInt(paddingright)-1)+"px"});$.each(guides,function(i,guide)
{var pixels=guide.data("position")*width,dragger=guide.data("dragger");guide.css({left:(pixels+offset.left+parseInt(paddingLeft))+"px"});dragger.css({left:(pixels+offset.left-5)+"px"});});},getGuides:function()
{return guides;},autoGuides:function(columns)
{$.each(guides,function(i,guide)
{var dragger=guide.data("dragger");if(dragger&&dragger!==null&&typeof dragger.remove=="function")
{dragger.remove();}
if(guide&&guide!==null&&typeof guide.remove=="function")
{guide.remove();}});guides=[];var width=1.0/columns,percent=0;for(var column=0;column<columns;++column)
{addGuide(percent,true,true);percent+=width;}
if(columns!=-1)
{addGuide(1.0,true,true);this.refreshGuides();this.showGuides();}
saveGuides();},showGuides:function(dontSave)
{ruler.show();rulerBG.show();$.each(guides,function(i,guide)
{guide.show();var dragger=guide.data("dragger");if(dragger.length)
{dragger.show();}});$(".editor-primary").css("top","108px");$(".bk-trial-expired-banner").css("top","108px");BaseKit.Editor.refreshGuides();if(!dontSave)
{BaseKit.Editor_Toolbar.updateGuidesCheckbox(true);var page=$bk("page");if(page!==null&&typeof page.showGuides=="function")
{page.showGuides();}}},hideGuides:function(dontSave)
{ruler.hide();rulerBG.hide();$.each(guides,function(i,guide)
{guide.hide();var dragger=guide.data("dragger");if(dragger.length)
{dragger.hide();}});$(".editor-primary").css("top","");$(".bk-trial-expired-banner").css("top","");if(!dontSave)
{BaseKit.Editor_Toolbar.updateGuidesCheckbox(false);var page=$bk("page");if(page!==null&&typeof page.hideGuides=="function")
{page.hideGuides();}}},showRuler:function()
{var page=$bk("page");if(page!==null&&page.showingGuides&&BaseKit.Framework_Page.isMode(["edit"]))
{this.showGuides(true);}},hideRuler:function()
{this.hideGuides(true);},clearTimeoutForSizeToolTip:function()
{clearTimeout(clearTimeoutSizeToolTip);},hideAllPopups:function()
{BaseKit.Framework_Control_ImagePopup.hide();BaseKit.Widget_Columns_Column.hide();BaseKit.Framework_Control_Row.hide();BaseKit.Editor_Toolbar.hidePopUps();},trackPaymentStart:function(method)
{if(typeof _gaq=="object"&&typeof _gaq.push=="function")
{var url=null;var editor=BaseKit.Editor.get();var brandName=(!BaseKit.Framework_Page.isMode(['normal']))?editor.brandName:'';if(method&&method!=''){url='/'+brandName+'/pseudo/payment/start/'+method;}
else
{url='/'+brandName+'/pseudo/payment/start';}
_gaq.push(["_trackPageview",url]);}},trackManageView:function(page)
{if(typeof _gaq=="object"&&typeof _gaq.push=="function")
{var editor=BaseKit.Editor.get();var brandName=(!BaseKit.Framework_Page.isMode(['normal']))?editor.brandName:'';if(page&&page!=''){var url='/'+brandName+'/manage/'+page;}
_gaq.push(["_trackPageview",url]);}}},methods:{attach:function()
{this.callParent.apply(this,arguments);var that=this;if(BaseKit.Framework_Page.isMode(['edit','preview','themeselector','admin']))
{if(this.trialDays>0&&this.displayTrialBanner&&!this.NRTPaymentStatus&&this.isAccountHolder)
{$('.bk-trial-expired-banner-close').mousedown(function()
{$('.bk-trial-expired-banner').fadeOut('slow');});this.buttons.trialupgrade.handleEvent('onClick',function()
{that.goUpgrade();});}
createRuler();loadGuides();var page=$bk("page"),mode=BaseKit.Framework_Page.getMode();if(page!==null&&page.showingGuides&&mode=="edit")
{BaseKit.Editor.showGuides();}
$(window).resize(function()
{BaseKit.Editor.refreshGuides();BaseKit.Editor.hideAllPopups();});$(".editor-primary").scroll(function()
{BaseKit.Editor.hideAllPopups();});this.controls.themeselector.handleEvent("themeClicked",this,"loadThemePreview");this.controls.themeselector.handleEvent("themeConfirmed",this,"applyThemeToSite");this.controls.themeselector.handleEvent("themeCancelled",this,"revertThemePreview");}},construct:function()
{this.callParent.apply(this,arguments);var that=this;if(BaseKit.Framework_Page.isMode(['edit','preview','themeselector','admin']))
{editor=this;templateLock=this.templateLock;tip=this.controls.tip;if(this.$("editor-footer-close").length)
{this.$("editor-footer-close").click(function(event)
{var tab=BaseKit.Framework_Control_TabPanel.getCurrentTab();if(tab!==null&&typeof tab.onCleanUp=='function')
{if(!tab.onCleanUp(true))
{return;}}
BaseKit.Editor.CloseFooter();event.stopPropagation();event.preventDefault();});BaseKit.DragDrop.killBrowserDefault(this.$("editor-footer-close"),false);}
if(this.$("editor-footer-fullscreen").length)
{this.$("editor-footer-fullscreen").click(function(event)
{var editor=BaseKit.Editor.get();if(!editor.footerFullScreen)
{editor.footerEnterFullScreen();that.fireEvent('onFooterExitFullScreen');}
else
{editor.footerExitFullScreen();that.fireEvent('onFooterEnterFullScreen');}
event.stopPropagation();event.preventDefault();$('.CodeMirror-scroll').css('height',$('.CodeMirror').height()+'px');});BaseKit.DragDrop.killBrowserDefault(this.$("editor-footer-fullscreen"),false);}
this.$("primary").setup({interact:["widget","class.widget","list","class.list","class.formWidget","formWidget","class.formWidgetCreated","row"],plugins:{scroll:{autoScroll:true}}});this.previewingThemeRef=null;this.applying=false;}
BaseKit.Framework_Page.addKeyMap("shift+ctrl+alt+b",function(event)
{var ui=BaseKit.Framework_Page.getUIVar();if(ui&&ui.type=="lightbox")
{BaseKit.Framework_Page.hideUI();return;}
if(that.primary.basebug)
{that.primary.basebug.$().toggle();}
else
{if(BaseKit.Framework_Page.isMode(['edit']))
{if(that.showBasebug)
{that.showBasebug();}}}
event.stopPropagation();event.preventDefault();});BaseKit.Framework_Page.addKeyMap("esc",function(event)
{var lastmode=null;var lightbox=BaseKit.Framework_Page.getLightbox();if(lightbox!==false)
{if(lightbox.closeable==true)
{lastmode=BaseKit.Framework_Page.getMode();if(typeof BaseKit.Editor.getToolbar().modeButtonClassChange=='function')
{BaseKit.Editor.getToolbar().modeButtonClassChange(lastmode);BaseKit.Framework_Page.hideUI();}}
if(lightbox.escapeable==true)
{lastmode=BaseKit.Framework_Page.getMode();if(typeof BaseKit.Editor.getToolbar().modeButtonClassChange=='function')
{BaseKit.Editor.getToolbar().modeButtonClassChange(lastmode);BaseKit.Framework_Page.hideUI();}}}});BaseKit.Framework_Page.addKeyMap("enter",function(event)
{var lightbox=BaseKit.Framework_Page.getLightbox();if(lightbox!==false)
{if(typeof lightbox.onEnter=="function")
{lightbox.onEnter();}}});BaseKit.Framework_Page.attachBodyClick(startSession);BaseKit.Framework_Page.addKeyMap("backspace",function(event)
{if(BaseKit.Framework_Page.isMode(['edit','preview','admin','themeselector'])&&event.target.tagName!='INPUT'&&event.target.tagName!='TEXTAREA')
{event.stopPropagation();event.preventDefault();return false;}
return true;});function redo(event)
{if(!BaseKit.Request.isActive())
{if(BaseKit.UndoManager.redo())
{var sidebar=BaseKit.Editor.getSidebar();sidebar.redoNotify();}}
event.stopPropagation();event.preventDefault();}
if(BaseKit.ClientOS.is("macintosh"))
{BaseKit.Framework_Page.addKeyMap("cmd+y",function(event){redo(event);});}
else
{BaseKit.Framework_Page.addKeyMap("ctrl+y",function(event){redo(event);});}
BaseKit.Framework_Page.addKeyMap(BaseKit.ClientOS.is("macintosh")?"cmd+z":"ctrl+z",function(event)
{if(!BaseKit.Request.isActive())
{if(BaseKit.UndoManager.undo())
{var sidebar=BaseKit.Editor.getSidebar();sidebar.undoNotify();}}
event.stopPropagation();event.preventDefault();});BaseKit.Framework_Page.addKeyMap("cursors",function(event,key)
{var el=event.target;if(selectedWidget!==null&&el.tagName!="INPUT"&&el.tagName!="TEXTAREA"&&!(BaseKit.Element.Plugin.Wysiwyg.isActive()||(selectedWidget instanceof BaseKit.Widget_Content&&selectedWidget.editing==true)))
{var outer=selectedWidget.$().getRegion(false,true),inner=selectedWidget.$("content").getRegion(false,true),left=parseInt(parseFloat(selectedWidget._paddingLeft*(outer.right-outer.left+0.5),10)/100.0),top=selectedWidget._paddingTop;var n=event.shiftKey?10:1,dx=0,dy=0;switch(key)
{case"up":dy-=n;break;case"down":dy+=n;break;case"left":dx-=n;break;case"right":dx+=n;break;}
var afterTop=Math.min(Math.max(top+dy,0),outer.bottom-outer.top);var afterLeft=Math.min(Math.max(left+dx,0),outer.right-outer.left);if(typeof selectedWidget.setPosition=='function')
{selectedWidget.setPosition(afterLeft,afterTop,outer,key);clearTimeout(clearTimeoutSizeToolTip);selectedWidget.settingsAlign($('.bk-widget-move').first(),$('bk-widget-move-move').first(),selectedWidget.$('content'));if(selectedWidget._sizeToolTip&&selectedWidget.tooltip==null)
{selectedWidget.createToolTip();}
selectedWidget.updatePositionToolTip(afterLeft,afterTop);if(typeof selectedWidget.showSizeToolTip=='function')
{selectedWidget.showSizeToolTip();}
clearTimeoutSizeToolTip=setTimeout(function()
{if(typeof selectedWidget.hideSizeToolTip=='function')
{selectedWidget.hideSizeToolTip();}},3000);}
BaseKit.UndoManager.pushUndoState("widgetRegion",{widget:selectedWidget,before:[left,top],after:[left+dx,top+dy]});event.stopPropagation();event.preventDefault();}});amIalive(false);startSession();},hideScrollbars:function(primary)
{return;if(BaseKit.Framework_Page.isMode(['edit','preview','themeselector']))
{if(!primary)
{this.$("primary").css("overflow","hidden");this.$("primary").css("marginRight",BaseKit.Util.getScrollbarSize()+'px');}
var footer=this.getFooterContent();if(footer&&footer.$("scroll"))
{footer.$("scroll").css("overflow","hidden");}}},showScrollbars:function(primary)
{if(BaseKit.Framework_Page.isMode(['edit','preview','themeselector']))
{if(!primary)
{this.$("primary").css("overflowX","hidden");this.$("primary").css("overflowY","scroll");this.$("primary").css("marginRight",0);}}},footerEnterFullScreen:function()
{var height=$('#page-primary__editor').height(),offset=BaseKit.Framework_Page.getHeader().$().height();this.$("footerX").css("bottom",'0px');if((height/2)<300){return false;}
this.$("footerX").css("height",(height/2)+'px');this.$("editor-footer-fullscreen").attr('title',this.t("editor-footer-collapse"));this.footerFullScreen=true;},footerExitFullScreen:function()
{this.$("footerX").css("height","300px");this.$("footerX").css("bottom","0");this.$("editor-footer-fullscreen").attr('title',this.t("editor-footer-expand"));this.footerFullScreen=false;},getFooterContent:function()
{return currentFooter?this.footers[currentFooter]:null;},getCurrentFooterName:function()
{if(BaseKit.Framework_Page.isMode(['edit','preview','themeselector']))
{return currentFooter?currentFooter:null;}},slideInFooter:function(theFooter,isData)
{if(lockFooter)
{return;}
var that=this,footer=this.$("footerX"),primary=this.$("primary"),footerHeight=300;BaseKit.Animation.stop(footer);BaseKit.Element.Plugin.Wysiwyg.stop();footer.css("bottom",-(footerHeight)+'px');footer.css("height",footerHeight+'px');editor.footers['panel1'].showProgressIndicator(true);BaseKit.Animation.addQueue({duration:0.5,onStart:function()
{if(BaseKit.Browser.firefox)
{that.hideScrollbars();}},onFinish:function()
{if(selectedWidget==null)
{return;}
if(BaseKit.Browser.firefox)
{that.showScrollbars();}
editor.footers['panel1'].hideProgressIndicator();primary.css("marginBottom",(footerHeight)+'px');var region1=primary.getRegion(false,true),region2=selectedWidget.$().getRegion(false,true);if(region2.bottom>region1.bottom)
{var distance=Math.min(Math.min(region2.bottom-region1.bottom+75,footerHeight),region2.top-region1.top-60,footerHeight);BaseKit.Animation.addQueue({duration:0.5,onFinish:function()
{if(selectedWidget&&selectedWidget!==null&&selectedWidget.settingsAlign=='function')
{selectedWidget.settingsAlign();}}},{element:primary,scroll:[[primary.scrollLeft(),primary.scrollTop()],[primary.scrollLeft(),primary.scrollTop()+distance],'bothCubic']});}
widgetMode='edit';if(selectedWidget&&selectedWidget!==null&&!(selectedWidget instanceof BaseKit.Widget_Columns_Column)&&!(selectedWidget instanceof BaseKit.Framework_Control_Row)&&!(selectedWidget instanceof BaseKit.Widget_Content)&&!(selectedWidget instanceof BaseKit.Framework_Control_Theme))
{selectedWidget.onExitMoveMode();selectedWidget.onEnterEditMode();}
var timeout=setTimeout(function(){clearInterval(timeout);var tab=editor.footers['panel1'].$('settings-tab');if(tab!==null)
{BaseKit.Framework_Page.showTooltip({'message':that.t("editor-footer-tooltip"),'name':'settings.first_run','element':tab,'align':'bl','timeout':2000,'group':'first_run','callback':BaseKit.Framework_Page.setToolTipOptions});}},500);}},{element:footer,bottom:[-footerHeight,0,"bothCubic"]});},slideOutFooter:function(onFinish)
{if(lockFooter)
{return;}
var that=this,footer=this.$("footerX"),primary=this.$("primary"),footerHeight=footer.innerHeight();if(editor.$('detect').length)
{editor.$('detect').hide();}
if(footer.getRegion(false,true)===null)
{return;}
$('#page-primary__editorBKfooters').focus();BaseKit.Animation.stop(footer);editor.footers['panel1'].showProgressIndicator(true);BaseKit.Animation.addQueue({duration:0.5,onStart:function()
{if(BaseKit.Browser.firefox)
{that.hideScrollbars();}
BaseKit.Element.Plugin.Wysiwyg.stop();BaseKit.Framework_Widget.resetSettingsStateOverride();BaseKit.Element.Plugin.Wysiwyg.unlock();primary.css("marginBottom",0);},onFinish:function()
{footer.hide();if(BaseKit.Browser.firefox)
{that.showScrollbars();}
if(typeof onFinish=="function")
{onFinish();}
widgetMode='move';if(selectedWidget&&selectedWidget!==null&&!(selectedWidget instanceof BaseKit.Widget_Columns_Column)&&!(selectedWidget instanceof BaseKit.Framework_Control_Row)&&!(selectedWidget instanceof BaseKit.Framework_Control_Theme))
{selectedWidget.onExitEditMode();selectedWidget.onEnterMoveMode(true);if(selectedWidget instanceof BaseKit.Widget_Content)
{selectedWidget.forceStart();if(typeof selectedWidget.toggleMiniEditorWhenFooterShowing=='function')
{selectedWidget.toggleMiniEditorWhenFooterShowing('show');}}}
if(selectedWidget&&selectedWidget.navigationWidget)
{setTimeout(function(){selectedWidget.switchStyleListDropdown(true)},100);}
editor.fireEvent('onFooterClose');}},{element:footer,bottom:[0,-(footerHeight),"bothCubic"]});},showFooter:function(name,isData,show)
{if($(window).width()<=1024)
{var sidebar=BaseKit.Editor_Sidebar.Get();if(sidebar!==null)
{sidebar.showHideProBar('hide');}}
if(!editor.$("footerX").isVisible())
{editor.$("footerX").show();this.slideInFooter();}
if(show==undefined)
{show=true;}
isData=(isData===true);var tabPanel=editor.footers.panel1;var tab=(name!==undefined)?name:'settings';tabPanel.changeTabByName(tab);this.footerFullScreen=false;},toggleSideBar:function()
{var editor=BaseKit.Editor.get();if(editor.controls.sidebar)
{var sidebar=editor.controls.sidebar.$();var footer=editor.$("footerX");var template=$('#page-primary__editorBKprimary');if(sidebar.isVisible())
{BaseKit.Animation.addQueue({duration:0.3,onStart:function()
{template.css('marginLeft','0px');},onFinish:function()
{sidebar.hide();}},{element:sidebar,left:[0,-296,"bothCubic"]},{element:footer,left:[296,0,"bothCubic"]});}
else
{BaseKit.Animation.addQueue({duration:0.3,onStart:function()
{sidebar.show();},onFinish:function()
{template.css('marginLeft','250px');}},{element:sidebar,left:[-296,0,"bothCubic"]},{element:footer,left:[0,296,"bothCubic"]});}}},reselectWidget:function(id)
{BaseKit.Editor.selectWidget(null);var objects=BaseKit.Framework_Base.getAll();selectedWidget=objects[id];editor.selectedWidgetID=id;if(selectedWidget.type!='form')
{selectedWidget.$().addClass("editing");selectedWidget.onSelect();BaseKit.Framework_Page.startDoing("widget-selected");}
$(document).keydown(checkKeyPress);},checkKeyPress:function()
{$(document).keydown(checkKeyPress);},finishCreateWidget:function(id,dontUndo)
{if(dontUndo!==true)
{dontUndo=false;}
var widget=$bk(id);var that=this;if(widget!==null)
{var nextWidget=widget.getObjectAfter();if(dontUndo!==true)
{BaseKit.UndoManager.pushUndoState("widgetCreate",{object:widget,element:widget.$(),parent:widget.parent,before:nextWidget!==null?nextWidget.id:null});}
if(nextWidget!==null&&typeof nextWidget.setPadding=='function')
{var region=nextWidget.$().getRegion(false,true);if(region!==null)
{var height=region.bottom-region.top,storeAutoHeight=nextWidget._autoHeight;nextWidget._autoHeight=true;nextWidget._autoHeight=storeAutoHeight;}}
var check=widget.parent;while(check!=null&&!(check instanceof BaseKit.Framework_Page))
{if(check instanceof BaseKit.Widget_Carousel&&typeof check.onFinishMove=='function')
{check.onFinishMove();}
if(check instanceof BaseKit.Widget_Columns&&typeof check.isEmpty=='function')
{check.isEmpty();}
check=check.parent;}}},pollThumbnails:function(ticket,wait)
{var that=this;setTimeout(function()
{that.checkThumbnails(ticket);},wait||3000);},openExternalSubscriptionLink:function(href)
{if(href==null||href=='')
{return;}
var newWindow=window.open(href,'_blank');newWindow.focus();},loadThemePreview:function()
{var that=this,page=BaseKit.Framework_Page.get(),theme=BaseKit.Editor_ThemeSelector.get();if(theme instanceof BaseKit.Editor_ThemeSelector&&theme.selectedTheme)
{var overlay=$('#page-indicator'),themeSelectorRegion=$('#page-primary__editor-controls__themeselector').getRegion();overlay.css('top',themeSelectorRegion.bottom+'px');overlay.css('bottom','0px');overlay.css('height','auto');overlay.fadeIn();this.applying=true;BaseKit.API.call('theme','load_theme',{themeRef:parseInt(theme.selectedTheme.ref),swatchRef:parseInt(theme.selectedTheme.default_color_swatch),pageRef:parseInt(page.pageID),currentThemeRef:that.previewingThemeRef==null?parseInt(page.themeRef):parseInt(that.previewingThemeRef),siteRef:parseInt(page.siteRef)},function(data)
{that.previewingThemeRef=parseInt(theme.selectedTheme.ref);if(data.cssString&&data.themeProperties&&!$('#theme-styles').length)
{return;}
if(BaseKit.Browser.ie==true&&BaseKit.Browser.isLessThanVersion(9))
{if($('#theme-styles').get(0).styleSheet)
{$('#theme-styles').get(0).styleSheet.cssText=data.cssString;$('#css-global-styles').get(0).styleSheet.cssText=data.globalStyles;$('#css-local-styles').get(0).styleSheet.cssText=data.localStyles;}
else
{$('#theme-styles').get(0).appendChild(document.createTextNode(data.cssString));$('#css-global-styles').get(0).appendChild(document.createTextNode(data.globalStyles));$('#css-local-styles').get(0).appendChild(document.createTextNode(data.localStyles));}}
else
{$('#theme-styles').html(data.cssString);$('#css-global-styles').html(data.globalStyles);$('#css-local-styles').html(data.localStyles);}
var widgetStyleCSS=$("style:regex(id, css-widget-*)");widgetStyleCSS.remove();if(data.userWidgetCSS!=null&&data.userWidgetCSS.length>0)
{var appendAfterStyleEl=$('#css-local-styles');if(appendAfterStyleEl.get(0)==null)
{appendAfterStyleEl=$('#css-global-styles');}
if(appendAfterStyleEl.get(0)!=null)
{data.userWidgetCSS.each(function(style,index)
{var widgetStyleID='css-'+style.type.replace('.','-');$('<style></style>').attr('id',widgetStyleID).html(style.css).insertBefore(appendAfterStyleEl);});}}
editor.primary.theme.changeType(data.themeProperties.type?data.themeProperties.type:'color');if(data.themeProperties.columnClasses!=null)
{data.themeProperties.columnClasses.each(function(columnStyle)
{editor.fireEvent('columnStyleTypeChange',columnStyle.className,'outer',columnStyle.outerStyle);editor.fireEvent('columnStyleUpdated',columnStyle.className,columnStyle.minusBorderMargin);});}
if(data.themeProperties.rowClasses!=null)
{data.themeProperties.rowClasses.each(function(rowStyle)
{editor.fireEvent('rowStyleTypeChange',rowStyle.className,'outer',rowStyle.outerStyle);editor.fireEvent('rowStyleTypeChange',rowStyle.className,'inner',rowStyle.innerStyle);editor.fireEvent('rowStyleInnerPaddingChange',rowStyle.className,rowStyle.minusInnerPaddingOffset);});}
overlay.fadeOut('slow',function(){overlay.css('height','100%');overlay.css('top','0px');overlay.css('bottom','0px');that.applying=false;});});}},needThemeChangeConfirmation:function()
{var theme=this.controls.themeselector.selectedTheme;var that=this,page=BaseKit.Framework_Page.get();if(theme.ref!=page.themeRef)
{BaseKit.Framework_Page.confirm(editor.t("confirm-theme-change"),function()
{that.applyThemeToSite();},function(){that.revertThemePreview(true);});}},revertThemePreview:function(dropLoadingPanel)
{if(dropLoadingPanel!==false)
{dropLoadingPanel=true;}
var that=this,page=BaseKit.Framework_Page.get();var overlay=$('#page-indicator'),themeSelectorRegion=$('#page-primary__editor-controls__themeselector').getRegion();if(dropLoadingPanel==true)
{overlay.css('top',themeSelectorRegion.bottom+'px');overlay.css('bottom','0px');overlay.css('height','auto');}
overlay.fadeIn();this.applying=true;BaseKit.API.call('theme','load_theme',{themeRef:parseInt(page.themeRef),swatchRef:parseInt(page.colorSwatchRef),pageRef:parseInt(page.pageID),currentThemeRef:(that.previewingThemeRef==null?parseInt(page.themeRef):parseInt(that.previewingThemeRef)),siteRef:parseInt(page.siteRef)},function(data)
{that.previewingThemeRef=null;if(data.cssString&&data.themeProperties&&!$('#theme-styles').length)
{return;}
if(BaseKit.Browser.ie==true&&BaseKit.Browser.isLessThanVersion(9))
{if($('#theme-styles').get(0).styleSheet)
{$('#theme-styles').get(0).styleSheet.cssText=data.cssString;$('#css-global-styles').get(0).styleSheet.cssText=data.globalStyles;$('#css-local-styles').get(0).styleSheet.cssText=data.localStyles;}
else
{$('#theme-styles').get(0).appendChild(document.createTextNode(data.cssString));$('#css-global-styles').get(0).appendChild(document.createTextNode(data.globalStyles));$('#css-local-styles').get(0).appendChild(document.createTextNode(data.localStyles));}}
else
{$('#theme-styles').html(data.cssString);$('#css-global-styles').html(data.globalStyles);$('#css-local-styles').html(data.localStyles);}
var widgetStyleCSS=$("style:regex(id, css-widget-*)");widgetStyleCSS.remove();if(data.userWidgetCSS!=null&&data.userWidgetCSS.length>0)
{var appendAfterStyleEl=$('#css-local-styles');if(appendAfterStyleEl.get(0)==null)
{appendAfterStyleEl=$('#css-global-styles');}
if(appendAfterStyleEl.get(0)!=null)
{data.userWidgetCSS.each(function(style,index)
{var widgetStyleID='css-'+style.type.replace('.','-');$('<style></style>').attr('id',widgetStyleID).html(style.css).insertBefore(appendAfterStyleEl);});}}
if(data.themeProperties.columnClasses!=null)
{data.themeProperties.columnClasses.each(function(columnStyle)
{editor.fireEvent('columnStyleTypeChange',columnStyle.className,'outer',columnStyle.outerStyle);editor.fireEvent('columnStyleUpdated',columnStyle.className,columnStyle.minusBorderMargin);});}
if(data.themeProperties.rowClasses!=null)
{data.themeProperties.rowClasses.each(function(rowStyle)
{editor.fireEvent('rowStyleTypeChange',rowStyle.className,'outer',rowStyle.outerStyle);editor.fireEvent('rowStyleTypeChange',rowStyle.className,'inner',rowStyle.innerStyle);editor.fireEvent('rowStyleInnerPaddingChange',rowStyle.className,rowStyle.minusInnerPaddingOffset);});}
overlay.fadeOut('slow',function()
{if(dropLoadingPanel==false)
{overlay.css('top','0px');overlay.css('bottom','0px');overlay.css('height','100%');}
that.applying=false;});var theme=BaseKit.Editor_ThemeSelector.get();if(theme instanceof BaseKit.Editor_ThemeSelector)
{theme.revert();}});},checkHasThemeBeenApplied:function()
{var that=this,page=BaseKit.Framework_Page.get(),theme=BaseKit.Editor_ThemeSelector.get();if(theme instanceof BaseKit.Editor_ThemeSelector&&BaseKit.Framework_Page.isMode(['themeselector']))
{if(theme.selectedTheme!==null&&parseInt(theme.selectedTheme.ref)!=parseInt(page.themeRef))
{this.revertThemePreview(false);}}},applyThemeToSite:function()
{var theme=BaseKit.Editor_ThemeSelector.get(),page=BaseKit.Framework_Page.get(),that=this;if(theme instanceof BaseKit.Editor_ThemeSelector)
{that.previewingThemeRef=null;if(this.applying||theme.selectedTheme.ref==page.themeRef)
{return;}
this.applying=true;BaseKit.API.call('theme','load_theme',{themeRef:parseInt(theme.selectedTheme.ref),swatchRef:parseInt(theme.selectedTheme.default_color_swatch),pageRef:parseInt(page.pageID),currentThemeRef:parseInt(theme.selectedTheme.ref),siteRef:parseInt(page.siteRef)},function(data)
{if(data.cssString&&data.themeProperties&&!$('#theme-styles').length)
{return;}
if(BaseKit.Browser.ie==true&&BaseKit.Browser.isLessThanVersion(9))
{if($('#theme-styles').get(0).styleSheet)
{$('#theme-styles').get(0).styleSheet.cssText=data.cssString;$('#css-global-styles').get(0).styleSheet.cssText=data.globalStyles;$('#css-local-styles').get(0).styleSheet.cssText=data.localStyles;}
else
{$('#theme-styles').get(0).appendChild(document.createTextNode(data.cssString));$('#css-global-styles').get(0).appendChild(document.createTextNode(data.globalStyles));$('#css-local-styles').get(0).appendChild(document.createTextNode(data.localStyles));}}
else
{$('#theme-styles').html(data.cssString);$('#css-global-styles').html(data.globalStyles);$('#css-local-styles').html(data.localStyles);}
page.updateGlobalThemeStyleVar(data.cssString);BaseKit.API.call('theme','apply',{theme_ref:theme.selectedTheme.ref,page:(page.isSiteMigrated==true)?page.pageID:null},function(data)
{if(data.status&&data.status=='OK')
{editor.primary.theme.changeType(data.type?data.type:'color');page.colorSwatchRef=(theme.selectedTheme.default_color_swatch!==null)?theme.selectedTheme.default_color_swatch:page.colorSwatchRef;page.fontSwatchRef=(theme.selectedTheme.default_font_swatch!==null)?theme.selectedTheme.default_font_swatch:page.fontSwatchRef;page.themeRef=theme.selectedTheme.ref;page.globalTheme=(data.global==1)?true:false;page.save();}
else
{BaseKit.Framework_Page.alert(that.t('apply-theme-failed'));}
that.applying=false;});});}},showMiniSettings:function()
{BaseKit.Framework_Page.hideTooltip(true);if(this.controls['miniEditor']&&typeof this.controls['miniEditor'].showToolBar=='function')
{this.controls['miniEditor'].showToolBar();return;}
this.loadMiniSettings();},hideMiniPanelStyleDropDown:function()
{if(this.controls['miniEditor']&&typeof this.controls['miniEditor'].hideStyleDropDown=='function')
{this.controls['miniEditor'].hideStyleDropDown();return;}}}});})();(function()
{BaseKit.Editor_Dummy=BaseKit.Class.create({superclass:BaseKit.Framework_Control,methods:{construct:function()
{this.callParent.apply(this,arguments);}}});})();(function()
{var overlay=null;BaseKit.Editor_Login=BaseKit.Class.create({superclass:BaseKit.Framework_Control_Window,methods:{construct:function()
{this.callParent.apply(this,arguments);var that=this;this.controls["login"].handleEvent("onClick",this,"loginCheck");this.controls["cancel"].handleEvent("onClick",this,"close");},attach:function()
{this.callParent.apply(this,arguments);var that=this;this.$().keyup(function(event)
{if(event.keyCode==13)
{that.login();return;}
if(event.keyCode==27)
{that.close();return;}});this.controls.username.focus();},close:function()
{this.hide();},update:function()
{this.callParent.apply(this,arguments);if(this.invalid)
{this.showError(this.invalid);if(this[this.focus]&&this.$("logincontent").isVisible())
{this[this.focus].$().focus();}}},show:function()
{this.callParent.apply(this,arguments);if(overlay===null)
{overlay=$('<div></div>').attr('id','page-overlay').css('opacity',0.7);$(document.body).append(overlay);}
var element=this.$();this.controls['password'].$().val('');if(this.$('logincontent').isVisible())
{if(this.controls['username'].$().val()=='')
{this.controls['username'].$().focus();}
else
{this.controls['password'].$().focus();}}
element.fadeIn(200);overlay.fadeIn(200)},hide:function()
{this.callParent.apply(this,arguments);this.$('error-message').hide();this.$().fadeOut(200);if(overlay!==null&&typeof overlay.hide=='function')
{overlay.fadeOut(200);}
this.update();},reloadPage:function()
{window.location.href=window.location.href;},showError:function(message)
{var that=this,msg=this.$('error-message');this.$('error-message-text').html(message);msg.slideDown(function()
{setTimeout(function()
{msg.slideUp(function()
{that.invalid=false;});},3000);});},loginCheck:function()
{var username=this.controls.username.value,password=this.controls.password.value;if(typeof username!='string'||!username.length)
{this.showError(this.t("missing-username-error"));this.controls.username.focus();return false;}
if(typeof password!='string'||!password.length)
{this.showError(this.t("missing-password-error"));this.controls.password.focus();return false;}
this.login();},loginSuccess:function()
{this.$('logincontent').hide();this.$('loginsuccess').css('display','block');this.reloadPage();},showLogout:function()
{this.reloadPage();}}});})();(function()
{var range=null;BaseKit.Editor_Lightbox=BaseKit.Class.create({superclass:BaseKit.Framework_Control,methods:{construct:function()
{this.callParent.apply(this,arguments);var that=this;this.range=null;this.handleEvent('onLightBoxClose',this,'cleanUp');if(this.closeable)
{this.$('close').click(function()
{var close=true;if(that.onClose!=undefined&&typeof that.onClose==='function')
{close=that.onClose();}
if(close)
{BaseKit.Framework_Page.hideUI();that.resetControlValues();that.fireEvent('onLightBoxClose');}});this.$('close').show();}},attach:function()
{this.callParent.apply(this,arguments);var that=this;if(this['class']&&this.hashelp)
{this.$('lightbox-help').click(function()
{BaseKit.Framework_Page.showHelp('editor',that['class']);});}},resize:function()
{this.callParent.apply(this,arguments);},changeLightBoxTitle:function(title)
{if(title&&title!==null&&title!==undefined)
{this.$('maintitle').html(title);}},onLightboxOpen:function()
{$("#page").contents().find(".widget-custom-content iframe, .widget-custom-content object, .widget-custom-content embed").css('visibility','hidden');BaseKit.Framework_Page.hideTooltip(true);},closeLightBox:function()
{$("#page").contents().find(".widget-custom-content iframe, .widget-custom-content object, .widget-custom-content embed").css('visibility','visible');var widget=BaseKit.Editor.getSelectedWidget();if(BaseKit.Browser.ie&&widget!=null&&widget['class']=='widget-content')
{if(this.range!=null)
{this.range.select();}}
BaseKit.Framework_Page.hideUI();if(this.resetValues)
{this.resetControlValues();}
this.fireEvent('onLightBoxClose');},cleanUp:function()
{this.resetButtonStates();},resetButtonStates:function()
{for(var button in this.buttons)
{if(this.buttons.hasOwnProperty(button))
{var butt=this.buttons[button];butt.$().removeClass(butt.color+"-down").addClass(butt.color+"-normal");}}},updateParameters:function(parameters)
{var widget=BaseKit.Editor.getSelectedWidget();if(BaseKit.Browser.ie&&widget!=null&&widget['class']=='widget-content')
{this.range=document.selection.createRange().duplicate();this.range.select();}
this.parameters=parameters;this.fireEvent('updateLightBoxParameters');},resetControlValues:function()
{for(var field in this.controls)
{if(this.controls.hasOwnProperty(field)&&this.controls[field].value!=null)
{var control=this.controls[field],el=control.$();switch(control['class'])
{case'framework-control-input-select':if(el.attr('options').length>0)
{el.attr('options')[0].selected=true;}
break;case'framework-control-input-text':control.value='';el.val('');break;}}}},showAjaxIndicator:function(message)
{var ajax=this.$('ajax');if(ajax.length>0)
{if(message!==undefined&&message.length>0)
{this.$('ajax-message').html(message);}
ajax.fadeIn('fast');ajax.css('opacity',0.9);}},hideAjaxIndicator:function()
{var ajax=this.$('ajax');if(ajax.length>0)
{this.$('ajax-message').html('');ajax.fadeOut('fast');}}}});})();(function()
{BaseKit.Editor_Lightbox_Messagebox=BaseKit.Class.create({superclass:BaseKit.Editor_Lightbox,methods:{construct:function()
{this.callParent.apply(this,arguments);var that=this;this.buttons.cancel.handleEvent('onClick',function()
{that.cancelClicked();});this.buttons.ok.handleEvent('onClick',function()
{that.okClicked();});this.buttons.confirm.handleEvent('onClick',function()
{that.confirmClicked();});this.buttons.login.handleEvent('onClick',function()
{that.loginClicked();});},onEnter:function()
{if($('#page-lightboxes__messagebox-buttons__ok').isVisible())
{this.okClicked();}
else if($('#page-lightboxes__messagebox-buttons__confirm').isVisible())
{this.confirmClicked();}
else if($('#page-lightboxes__messagebox-buttons__login').isVisible())
{this.loginClicked();}
else
{this.confirmClicked();}},updateParameters:function(parameters)
{this.callParent.apply(this,arguments);this.setMode(parameters.type,parameters.message,parameters.okcallback||null,parameters.cancelcallback||null,parameters.title||null,parameters.okButtonText||null,parameters.okButtonTitle||null,parameters.cancelButtonText||null,parameters.cancelButtonTitle||null,parameters.loginButtonTitle||null,parameters.loginButtonText|null);},setMode:function(type,msg,okcallback,cancelcallback,title,okButtonText,okButtonTitle,cancelButtonText,cancelButtonTitle,loginButtonText,loginButtonTitle)
{this.cancelcallback=cancelcallback||null;this.buttons.cancel.setText(cancelButtonText||this.t('cancel-text'));this.buttons.cancel.setTitle(cancelButtonTitle||this.t('cancel-title'));if(type=='alert')
{this.buttons.ok.setText(okButtonText||this.t('okbtn-text'));this.buttons.ok.setTitle(okButtonTitle||this.t('okbtn-title'));this.$('maintitle').html(title||this.t('attention'));this.okcallback=okcallback||null;$('#page-lightboxes__messagebox-buttons__ok').show();$('#page-lightboxes__messagebox-buttons__cancel').hide();$('#page-lightboxes__messagebox-buttons__confirm').hide();$('#page-lightboxes__messagebox-buttons__login').hide();}
if(type=='confirm')
{this.buttons.confirm.setText(okButtonText||this.t('confirmbtn-text'));this.buttons.confirm.setTitle(okButtonTitle||this.t('confirmbtn-title'));this.$('maintitle').html(title||this.t('confirmation-required'));this.confirmcallback=okcallback||null;$('#page-lightboxes__messagebox-buttons__ok').hide();$('#page-lightboxes__messagebox-buttons__cancel').show();$('#page-lightboxes__messagebox-buttons__confirm').show();$('#page-lightboxes__messagebox-buttons__login').hide();}
if(type=='login')
{this.buttons.login.setText(loginButtonText||this.t('loginbtn-text'));this.buttons.login.setTitle(loginButtonTitle||this.t('loginbtn-title'));this.$('maintitle').html(title||this.t('attention'));this.logincallback=okcallback||null;$('#page-lightboxes__messagebox-buttons__ok').hide();$('#page-lightboxes__messagebox-buttons__cancel').hide();$('#page-lightboxes__messagebox-buttons__confirm').hide();$('#page-lightboxes__messagebox-buttons__login').show();}
this.parameters.okcallback=null;this.parameters.cancelcallback=null;this.$("message").html(msg);},okClicked:function()
{if(typeof this.okcallback=='function')
{this.okcallback();}
else if(typeof this.okcallback=='object'&&this.okcallback!==null&&typeof this.okcallback.length!='undefined'&&typeof this.okcallback[0]!='undefined'&&typeof this.okcallback[1]!='undefined')
{$bk(this.okcallback[0])[this.okcallback[1]]();}
var current=BaseKit.Framework_Page.getLightbox();if(current.__name=='messagebox')
{this.closeLightBox();}},loginClicked:function()
{if(this.loginURL!=null){window.location.href=this.loginURL;}
else{window.location.href=window.location.protocol+'//'+window.location.hostname;}},confirmClicked:function(close)
{if(typeof this.confirmcallback=='function')
{this.confirmcallback();}
else if(typeof this.confirmcallback=='object'&&this.confirmcallback!==null&&typeof this.confirmcallback.length!='undefined'&&typeof this.confirmcallback[0]!='undefined'&&typeof this.confirmcallback[1]!='undefined')
{$bk(this.confirmcallback[0])[this.confirmcallback[1]]();}
var current=BaseKit.Framework_Page.getLightbox();if(current.__name=='messagebox')
{this.closeLightBox();}},cancelClicked:function()
{if(typeof this.cancelcallback=='function')
{this.cancelcallback();}
else if(typeof this.cancelcallback=='object'&&this.cancelcallback!==null&&typeof this.cancelcallback.length!='undefined')
{$bk(this.cancelcallback[0])[this.cancelcallback[1]]();}
var current=BaseKit.Framework_Page.getLightbox();if(current.__name=='messagebox')
{this.closeLightBox();}}}});})();

