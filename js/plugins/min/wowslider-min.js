function ws_caption_parallax(t,e,n,i,a,o){var s=jQuery;e.parent().css({position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden"}),e.html(i).css("width","100%").stop(1,1),n.html(a).css("width","100%").stop(1,1),function r(e,n,i,a,o,u){function c(e,n){return e.css(t.support.transform?{transform:"translate3d("+n+"px,0px,0px)"}:{marginLeft:n}).css("display","inline-block")}var l=15,f=t.$this.width();if(l*=f/100,t.prevIdx==t.curIdx)c(e,0).fadeIn(o/3),c(s(">div,>span",e),0);else{var d=s(">div",e),p=s(">div",n),h=s(">span",e),v=s(">span",n),m=l+f*(u?-1:1),w=l+f*(u?1:-1),g=(u?-1:1)*l;c(e,m).show(),c(n,0).show(),c(d,g),c(p,0),c(h,2*g),c(v,0),wowAnimate(function(t){t=s.easing.swing(t),c(e,(1-t)*m),c(n,t*w)},0,1,t.duration);var y=.8;wowAnimate(function(t){t*=y,c(h,2*(1-t)*g),c(d,(1-t)*g),c(v,-2*t*g),c(p,t*-g)},0,1,t.duration,function(){v.css("opacity",0),p.css("opacity",0),wowAnimate(function(t){t=s.easing.easeOutCubic(1,t,0,1,1,1);var e=2*(1-y)*g,n=(1-y)*g,i=-2*y*g,a=y*-g;c(h,(1-t)*e),c(d,(1-t)*n),c(v,(1-t)*i+-2*t*g),c(p,(1-t)*a+t*-g)},0,1,/Firefox/g.test(navigator.userAgent)?1500:t.delay)})}}(e,n,i,a,t.captionDuration,o)}jQuery.fn.wowSlider=function(t){function e(t){return O.css({left:-t+"00%"})}function n(t){return((t||0)+N)%N}function i(e){if(window["ws_"+e]){var n=new window["ws_"+e](t,H,q);n.name="ws_"+e,U.push(n)}}function a(t,e){te?te.pause(t.curIndex,e):e()}function o(t,e){te?te.play(t,0,e):e()}function s(t,e,i){ne||(isNaN(t)&&(t=X(K,N)),t=n(t),K!=t&&(D?D.load(t,function(){u(t,e,i)}):u(t,e,i)))}function r(t){for(var e="",n=0;n<t.length;n++)e+=String.fromCharCode(t.charCodeAt(n)^1+(t.length-n)%7);return e}function u(n,i,a){if(!ne){if(i)void 0!=a&&(ee=a^t.revers),e(n);else{if(ne)return;ie=!1,function(e,n,i){ae=Math.floor(Math.random()*U.length),E(U[ae]).trigger("effectStart",{curIndex:e,nextIndex:n,cont:E("."+U[ae].name,A),start:function(){ee=void 0!=i?i^t.revers:!!(n>e)^t.revers?1:0,U[ae].go(n,e,ee)}})}(K,n,a),A.trigger(E.Event("go",{index:n}))}K=n,K!=t.stopOn||--t.loop||(t.autoPlay=0),t.onStep&&t.onStep(n)}}function c(){A.find(".ws_effect").fadeOut(200),e(K).fadeIn(200).find("img").css({visibility:"visible"})}function l(t,e,n,i,a,o){new f(t,e,n,i,a,o)}function f(e,n,i,a,o,s){var r,u,c,l,f=0,d=0,p=0;e[0]||(e=E(e)),e.on((n?"mousedown ":"")+"touchstart",function(e){var n=e.originalEvent.touches?e.originalEvent.touches[0]:e;2==t.gestures&&A.addClass("ws_grabbing"),f=0,n?(r=n.pageX,u=n.pageY,d=p=1,a&&(d=p=a(e))):d=p=0,e.originalEvent.touches||(e.preventDefault(),e.stopPropagation())}),E(document).on((n?"mousemove ":"")+"touchmove",e,function(t){if(d){var e=t.originalEvent.touches?t.originalEvent.touches[0]:t;f=1,c=e.pageX-r,l=e.pageY-u,i&&i(t,c,l)}}),E(document).on((n?"mouseup ":"")+"touchend",e,function(e){2==t.gestures&&A.removeClass("ws_grabbing"),d&&(f&&o&&o(e,c,l),!f&&s&&s(e),f&&(e.preventDefault(),e.stopPropagation()),f=0,d=0)}),e.on("click",function(t){p&&(t.preventDefault(),t.stopPropagation()),p=0})}function d(t){var e=t.css("transform"),n={top:0,left:0};return e&&(e=e.match(/(-?[0-9\.]+)/g),e?"3d"==e[1]?(n.left=parseFloat(e[2])||0,n.top=parseFloat(e[3])||0):(n.left=parseFloat(e[4])||0,n.top=parseFloat(e[5])||0):(n.left=0,n.top=0)),n}function p(e,n,i){if(pe.length&&_(e),he.length&&x(e),t.caption&&M(e,n,i),B){var a=E("A",z.get(e)).get(0);a?(B.setAttribute("href",a.href),B.setAttribute("target",a.target),B.style.display="block"):B.style.display="none"}t.responsive&&C()}function h(){ve&&(ve=0,setTimeout(function(){A.trigger(E.Event("stop",{}))},t.duration))}function v(){!ve&&t.autoPlay&&(ve=1,A.trigger(E.Event("start",{})))}function m(){g(),h()}function w(){g(),t.autoPlay?(me=setTimeout(function(){we||s(void 0,void 0,1)},t.delay),v()):h()}function g(){me&&clearTimeout(me),me=null}function y(t,e,n){g(),t&&t.preventDefault(),s(e,void 0,n),w(),Pe&&Ae&&Ae.play()}function b(){function e(t){if(!r){clearTimeout(s);for(var e=.2,n=0;2>n;n++){if(n)var u=a.find("> a"),c=i?a.width():E(u.get(0)).outerWidth(!0)*u.length;else var c=a.height();var l=he[n?"width":"height"](),f=l-c;if(0>f){var d,p,h=(t[n?"pageX":"pageY"]-he.offset()[n?"left":"top"])/l;if(o==h)return;o=h;var v=a.position()[n?"left":"top"];if(a.css({transition:"0ms linear",transform:"translate3d("+v.left+"px,"+v.top+"px,0)"}),a.stop(!0),Me>0){if(h>e&&1-e>h)return;d=.5>h?0:f-1,p=Me*Math.abs(v-d)/(Math.abs(h-.5)-e)}else d=f*Math.min(Math.max((h-e)/(1-2*e),0),1),p=-Me*c/2;a.animate(n?{left:d}:{top:d},p,Me>0?"linear":"easeOutCubic")}else a.css(n?"left":"top",f/2)}}}function n(t){0>t&&(t=0),D&&D.loadTtip(t),E(m.get(x)).removeClass("ws_overbull"),E(m.get(t)).addClass("ws_overbull"),g.show();var e={left:m.get(t).offsetLeft-g.width()/2,"margin-top":m.get(t).offsetTop-m.get(0).offsetTop+"px","margin-bottom":-m.get(t).offsetTop+m.get(m.length-1).offsetTop+"px"},n=w.get(t),i={left:-n.offsetLeft+(E(n).outerWidth(!0)-E(n).outerWidth())/2};0>x?(g.css(e),b.css(i)):(document.all||(e.opacity=1),g.stop().animate(e,"fast"),b.stop().animate(i,"fast")),x=t}A.find(".ws_bullets a,.ws_thumbs a").click(function(t){y(t,E(this).index())});var i;if(he.length){he.hover(function(){Fe=1},function(){Fe=0});var a=he.find(">div");he.css({overflow:"hidden"});var o,s,r;if(i=he.width()<A.width(),he.bind("mousemove mouseover",e),he.mouseout(function(t){s=setTimeout(function(){a.stop()},100)}),he.trigger("mousemove"),t.gestures){var u,c,f,d,p,h;l(he,2==t.gestures,function(t,e,n){if(f>p||d>h)return!1;var i=Math.min(Math.max(u+e,f-p),0),o=Math.min(Math.max(c+n,d-h),0);a.css("left",i),a.css("top",o)},function(t){r=1;var e=a.find("> a");return f=he.width(),d=he.height(),p=E(e.get(0)).outerWidth(!0)*e.length,h=a.height(),u=parseFloat(a.css("left"))||0,c=parseFloat(a.css("top"))||0,!0},function(){r=0},function(){r=0})}A.find(".ws_thumbs a").each(function(t,e){l(e,0,0,function(t){return!!E(t.target).parents(".ws_thumbs").get(0)},function(t){r=1},function(t){y(t,E(e).index())})})}if(pe.length){var v=pe.find(">div"),m=E("a",pe),w=m.find("IMG");if(w.length){var g=E('<div class="ws_bulframe"/>').appendTo(v),b=E("<div/>").css({width:w.length+1+"00%"}).appendTo(E("<div/>").appendTo(g));w.appendTo(b),E("<span/>").appendTo(g);var x=-1;m.hover(function(){n(E(this).index())});var _;v.hover(function(){_&&(clearTimeout(_),_=0),n(x)},function(){m.removeClass("ws_overbull"),document.all?_||(_=setTimeout(function(){g.hide(),_=0},400)):g.stop().animate({opacity:0},{duration:"fast",complete:function(){g.hide()}})}),v.click(function(t){y(t,E(t.target).index())})}}}function x(t){E("A",he).each(function(e){if(e==t){var n=E(this);if(n.addClass("ws_selthumb"),!Fe){var i=he.find(">div"),a=n.position()||{},o;o=i.position()||{};for(var s=0;1>=s;s++){var r=he[s?"width":"height"](),u=i[s?"width":"height"](),c=r-u;0>c?i.stop(!0).animate(s?{left:-Math.max(Math.min(a.left,-o.left),a.left+n.outerWidth(!0)-he.width())}:{top:-Math.max(Math.min(a.top,0),a.top+n.outerHeight(!0)-he.height())}):i.css(s?"left":"top",c/2)}}}else E(this).removeClass("ws_selthumb")})}function _(t){E("A",pe).each(function(e){e==t?E(this).addClass("ws_selbull"):E(this).removeClass("ws_selbull")})}function T(t){var e=z[t],n=E("img",e).attr("title"),i=E(e).data("descr");return n.replace(/\s+/g,"")||(n=""),(n?"<span>"+n+"</span>":"")+(i?"<br><div>"+i+"</div>":"")}function M(e,n,i){var a=T(e),o=T(n),s=t.captionEffect;(Ee[E.type(s)]||Ee[s]||Ee.none)(E.extend({$this:A,curIdx:K,prevIdx:Z,noDelay:i},t),Se,ke,a,o,ee)}function F(){t.autoPlay=!t.autoPlay,t.autoPlay?(w(),Oe.removeClass("ws_play"),Oe.addClass("ws_pause"),te&&te.start(K)):(P.wsStop(),Oe.removeClass("ws_pause"),Oe.addClass("ws_play"))}function S(){return!!document[Ne.fullscreenElement]}function k(){/WOW Slider/g.test(j)||(S()?document[Ne.exitFullscreen]():(We=1,A.wrap("<div class='ws_fs_wrapper'></div>").parent()[0][Ne.requestFullscreen]()))}function C(){var e=ze?4:t.responsive,n=q.width()||t.width,i=E([H,R.find("img"),Q.find("img")]);if(e>0&&document.addEventListener&&A.css("fontSize",Math.max(10*Math.min(n/t.width||1,1),4)),2==e){var a=Math.max(n/t.width,1)-1;i.each(function(){E(this).css("marginTop",-t.height*a/2)})}if(3==e){var o=window.innerHeight-(A.offset().top||0),s=t.width/t.height,r=s>n/o;A.css("height",o),i.each(function(){E(this).css({width:r?"auto":"100%",height:r?"100%":"auto",marginLeft:r?(n-o*s)/2:0,marginTop:r?0:(o-n/s)/2})})}if(4==e){var u=window.innerWidth,c=window.innerHeight,s=(A.width()||t.width)/(A.height()||t.height);A.css({maxWidth:s>u/c?"100%":s*c,height:""}),i.each(function(){E(this).css({width:"100%",marginLeft:0,marginTop:0})})}else A.css({maxWidth:"",top:""})}var E=jQuery,A=this,P=A.get(0);window.ws_basic=function(t,e,n){var i=E(this);this.go=function(e){n.find(".ws_list").css("transform","translate3d(0,0,0)").stop(!0).animate({left:e?-e+"00%":/Safari/.test(navigator.userAgent)?"0%":0},t.duration,"easeInOutExpo",function(){i.trigger("effectEnd")})}},t=E.extend({effect:"fade",prev:"",next:"",duration:1e3,delay:2e3,captionDuration:1e3,captionEffect:"none",width:960,height:360,thumbRate:1,gestures:2,caption:!0,controls:!0,keyboardControl:!1,scrollControl:!1,autoPlay:!0,autoPlayVideo:!1,responsive:1,support:jQuery.fn.wowSlider.support,stopOnHover:0,preventCopy:1},t);var j=navigator.userAgent,q=E(".ws_images",A).css("overflow","visible"),I=E("<div>").appendTo(q).css({position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"hidden"}),O=q.find("ul").css("width","100%").wrap("<div class='ws_list'></div>").parent().appendTo(I);E("<div>").css({position:"relative",width:"100%","font-size":0,"line-height":0,"max-height":"100%",overflow:"hidden"}).append(q.find("li:first img:first").clone().css({width:"100%",visibility:"hidden"})).prependTo(q),O.css({position:"absolute",top:0,height:"100%",transform:/Firefox/.test(j)?"":"translate3d(0,0,0)"});var D=t.images&&new wowsliderPreloader(this,t),z=q.find("li"),N=z.length,W=O.width()/O.find("li").width(),L={position:"absolute",top:0,height:"100%",overflow:"hidden"},R=E("<div>").addClass("ws_swipe_left").css(L).prependTo(O),Q=E("<div>").addClass("ws_swipe_right").css(L).appendTo(O);if(/MSIE/.test(j)||/Trident/.test(j)||/Safari/.test(j)||/Firefox/.test(j)){var V=Math.pow(10,Math.ceil(Math.LOG10E*Math.log(N)));O.css({width:V+"00%"}),z.css({width:100/V+"%"}),R.css({width:100/V+"%",left:-100/V+"%"}),Q.css({width:100/V+"%",left:100*N/V+"%"})}else O.css({width:N+"00%",display:"table"}),z.css({display:"table-cell","float":"none",width:"auto"}),R.css({width:100/N+"%",left:-100/N+"%"}),Q.css({width:100/N+"%",left:"100%"});var X=t.onBeforeStep||function(t){return t+1};t.startSlide=n(isNaN(t.startSlide)?X(-1,N):t.startSlide),D&&D.load(t.startSlide,function(){}),e(t.startSlide);var Y,B;t.preventCopy&&(Y=E('<div class="ws_cover"><a href="#" style="display:none;position:absolute;left:0;top:0;width:100%;height:100%"></a></div>').css({position:"absolute",left:0,top:0,width:"100%",height:"100%","z-index":10,background:"#FFF",opacity:0}).appendTo(q),B=Y.find("A").get(0));var H=[],G=E(".ws_frame",A);z.each(function(t){for(var e=E(">img:first,>iframe:first,>iframe:first+img,>a:first,>div:first",this),n=E("<div></div>"),i=0;i<this.childNodes.length;)this.childNodes[i]!=e.get(0)&&this.childNodes[i]!=e.get(1)?n.append(this.childNodes[i]):i++;E(this).data("descr")||(n.text().replace(/\s+/g,"")?E(this).data("descr",n.html().replace(/^\s+|\s+$/g,"")):E(this).data("descr","")),E(this).data("type",e[0].tagName);var a=E(">iframe",this).css("opacity",0);H[H.length]=E(">a>img",this).get(0)||E(">iframe+img",this).get(0)||E(">*",this).get(0)}),H=E(H),H.css("visibility","visible"),R.append(E(H[N-1]).clone()),Q.append(E(H[0]).clone());var U=[];t.effect=t.effect.replace(/\s+/g,"").split(",");for(var J in t.effect)i(t.effect[J]);U.length||i("basic");var K=t.startSlide,Z=K,te=!1,ee=1,ne=0,ie=!1;E(U).bind("effectStart",function(t,e){ne++,a(e,function(){c(),e.cont&&E(e.cont).stop().show().css("opacity",1),e.start&&e.start(),Z=K,K=e.nextIndex,p(K,Z,e.captionNoDelay)})}),E(U).bind("effectEnd",function(t,n){e(K).stop(!0,!0).show(),setTimeout(function(){o(K,function(){ne--,w(),te&&te.start(K)})},n?n.delay||0:0)}),t.loop=t.loop||Number.MAX_VALUE,t.stopOn=n(t.stopOn);var ae=Math.floor(Math.random()*U.length);2==t.gestures&&A.addClass("ws_gestures");var oe=q,se="!hgws9'idvt8$oeuu?%lctv>\"m`rw=#jaqq< kfpr:!hgws9'idvt8$oeuu?%lctv>\"m`rw=#jaqq< kfpr:!hgws9'idvt8$oeuu?%lctv>\"m`rw=#jaqq< kfpr:!hgws9";if(se&&(se=r(se))){if(t.gestures){var re=0,ue=10,ce,le,fe,de;l(q,2==t.gestures,function(e,n,i){de=!!U[0].step,m(),O.stop(!0,!0),fe&&(ie=!0,ne++,fe=0,de||c()),re=n,n>ce&&(n=ce),-ce>n&&(n=-ce),de?U[0].step(K,n/ce):t.support.transform&&t.support.transition?O.css("transform","translate3d("+n+"px,0,0)"):O.css("left",le+n)},function(t){var e=/ws_playpause|ws_prev|ws_next|ws_bullets/g.test(t.target.className)||E(t.target).parents(".ws_bullets").get(0),n=ge?t.target==ge[0]:0;return e||n||te&&te.playing()?!1:(fe=1,ce=q.width(),le=parseFloat(-K*ce)||0,!0)},function(e,i,a){fe=0;var o=q.width(),s=n(K+(0>i?1:-1)),r=o*i/Math.abs(i);Math.abs(re)<ue&&(s=K,r=0);var u=200+200*(o-Math.abs(i))/o;ne--,E(U[0]).trigger("effectStart",{curIndex:K,nextIndex:s,cont:de?E(".ws_effect"):0,captionNoDelay:!0,start:function(){function e(){t.support.transform&&t.support.transition&&O.css({transition:"0ms",transform:/Firefox/.test(j)?"":"translate3d(0,0,0)"}),E(U[0]).trigger("effectEnd",{swipe:!0})}function n(){de?i>o||-o>i?E(U[0]).trigger("effectEnd"):wowAnimate(function(t){var e=i+(o*(i>0?1:-1)-i)*t;U[0].step(Z,e/o)},0,1,u,function(){E(U[0]).trigger("effectEnd")}):t.support.transform&&t.support.transition?(O.css({transition:u+"ms ease-out",transform:"translate3d("+r+"px,0,0)"}),setTimeout(e,u)):O.animate({left:le+r},u,e)}ie=!0,D?D.load(s,n):n()}})},function(){var t=E("A",z.get(K));t&&t.click()})}var pe=A.find(".ws_bullets"),he=A.find(".ws_thumbs"),ve=t.autoPlay,me,we=!1,ge=r('8B"iucc9!jusv?+,unpuimggs)eji!"');ge+=r("uq}og<%vjwjvhhh?vfn`sosa8fhtviez8ckifo8dnir(wjxd=70t{9");var ye=oe||document.body;if(se.length<4&&(se=se.replace(/^\s+|\s+$/g,"")),oe=se?E("<div>"):0,E(oe).css({position:"absolute",padding:"0 0 0 0"}).appendTo(ye),oe&&document.all){var be=E("<iframe>");be.css({position:"absolute",left:0,top:0,width:"100%",height:"100%",filter:"alpha(opacity=0)",opacity:.01}),be.attr({src:"javascript:false",scrolling:"no",framespacing:0,border:0,frameBorder:"no"}),oe.append(be)}E(oe).css({zIndex:56,right:"15px",bottom:"15px"}).appendTo(ye),ge+=r("uhcrm>bwuh=majeis<dqwm:aikp.d`joi}9Csngi?!<"),ge=oe?E(ge):oe,ge&&ge.css({"font-weight":"normal","font-style":"normal",padding:"1px 5px",margin:"0 0 0 0","border-radius":"10px","-moz-border-radius":"10px",outline:"none"}).html(se).bind("contextmenu",function(t){return!1}).show().appendTo(oe||document.body).attr("target","_blank");var xe=E('<div class="ws_controls">').appendTo(q);if(pe[0]&&pe.appendTo(xe),t.controls){var _e=E('<a href="#" class="ws_next"><span>'+t.next+"<i></i><b></b></span></a>"),Te=E('<a href="#" class="ws_prev"><span>'+t.prev+"<i></i><b></b></span></a>");xe.append(_e,Te),_e.bind("click",function(t){y(t,K+1,1)}),Te.bind("click",function(t){y(t,K-1,0)}),/iPhone/.test(navigator.platform)&&(Te.get(0).addEventListener("touchend",function(t){y(t,K-1,1)},!1),_e.get(0).addEventListener("touchend",function(t){y(t,K+1,0)},!1))}var Me=t.thumbRate,Fe;if(t.caption){var Se=E("<div class='ws-title' style='display:none'></div>"),ke=E("<div class='ws-title' style='display:none'></div>");E("<div class='ws-title-wrapper'>").append(Se,ke).appendTo(q),Se.bind("mouseover",function(t){te&&te.playing()||g()}),Se.bind("mouseout",function(t){te&&te.playing()||w()})}var Ce,Ee={none:function(t,e,n,i){Ce&&clearTimeout(Ce),Ce=setTimeout(function(){e.html(i).show()},t.noDelay?0:t.duration/2)}};Ee[t.captionEffect]||(Ee[t.captionEffect]=window["ws_caption_"+t.captionEffect]),(pe.length||he.length)&&b(),p(K,Z,!0),t.stopOnHover&&(this.bind("mouseover",function(t){te&&te.playing()||g(),we=!0}),this.bind("mouseout",function(t){te&&te.playing()||w(),we=!1})),te&&te.playing()||w();var Ae=A.find("audio").get(0),Pe=t.autoPlay;if(Ae){if(E(Ae).insertAfter(A),window.Audio&&Ae.canPlayType&&Ae.canPlayType("audio/mp3"))Ae.loop="loop",t.autoPlay&&(Ae.autoplay="autoplay",setTimeout(function(){Ae.play()},100));else{Ae=Ae.src;var je=Ae.substring(0,Ae.length-/[^\\\/]+$/.exec(Ae)[0].length),qe="wsSound"+Math.round(9999*Math.random());E("<div>").appendTo(A).get(0).id=qe;var Ie="wsSL"+Math.round(9999*Math.random());window[Ie]={onInit:function(){}},swfobject.createSWF({data:je+"player_mp3_js.swf",width:"1",height:"1"},{allowScriptAccess:"always",loop:!0,FlashVars:"listener="+Ie+"&loop=1&autoplay="+(t.autoPlay?1:0)+"&mp3="+Ae},qe),Ae=0}A.bind("stop",function(){Pe=!1,Ae?Ae.pause():E(qe).SetVariable("method:pause","")}),A.bind("start",function(){Ae?Ae.play():E(qe).SetVariable("method:play","")})}P.wsStart=s,P.wsRestart=w,P.wsStop=m;var Oe=E('<a href="#" class="ws_playpause"><span><i></i><b></b></span></a>');if(t.playPause&&(Oe.addClass(t.autoPlay?"ws_pause":"ws_play"),Oe.click(function(){return F(),!1}),xe.append(Oe)),t.keyboardControl&&E(document).on("keyup",function(t){switch(t.which){case 32:F();break;case 37:y(t,K-1,0);break;case 39:y(t,K+1,1)}}),t.scrollControl&&A.on("DOMMouseScroll mousewheel",function(t){t.originalEvent.wheelDelta<0||t.originalEvent.detail>0?y(null,K+1,1):y(null,K-1,0)}),"function"==typeof wowsliderVideo){var De=E('<div class="ws_video_btn"><div></div></div>').appendTo(q);te=new wowsliderVideo(A,t,c),"undefined"!=typeof $f&&(te.vimeo(!0),te.start(K)),window.onYouTubeIframeAPIReady=function(){te.youtube(!0),te.start(K)},De.on("click touchend",function(){ne||te.play(K,1)})}var ze=0;if(t.fullScreen){var Ne=function(){for(var t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenchange"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitfullscreenchange"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitfullscreenchange"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozfullscreenchange"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","MSFullscreenChange"]],e={},n,i,a=0,o=t.length;o>a;a++)if(n=t[a],n&&n[1]in document){for(a=0,i=n.length;i>a;a++)e[t[0][a]]=n[a];return e}return!1}();if(Ne){var We=0;document.addEventListener(Ne.fullscreenchange,function(t){S()?(ze=1,C()):(We&&(We=0,A.unwrap()),ze=0,C()),U[0].step||c()}),E("<a href='#' class='ws_fullscreen'></a>").on("click",k).appendTo(q)}}return t.responsive&&(E(C),E(window).on("load resize",C)),this}},jQuery.extend(jQuery.easing,{easeInOutExpo:function(t,e,n,i,a){return 0==e?n:e==a?n+i:(e/=a/2)<1?i/2*Math.pow(2,10*(e-1))+n:i/2*(-Math.pow(2,-10*--e)+2)+n},easeOutCirc:function(t,e,n,i,a){return i*Math.sqrt(1-(e=e/a-1)*e)+n},easeOutCubic:function(t,e,n,i,a){return i*((e=e/a-1)*e*e+1)+n},easeOutElastic1:function(t,e,n,i,a){var o=Math.PI/2,s=1.70158,r=0,u=i;if(0==e)return n;if(1==(e/=a))return n+i;if(r||(r=.3*a),u<Math.abs(i)){u=i;var s=r/4}else var s=r/o*Math.asin(i/u);return u*Math.pow(2,-10*e)*Math.sin((e*a-s)*o/r)+i+n},easeOutBack:function(t,e,n,i,a,o){return void 0==o&&(o=1.70158),i*((e=e/a-1)*e*((o+1)*e+o)+1)+n}}),jQuery.fn.wowSlider.support={transform:function(){if(!window.getComputedStyle)return!1;var t=document.createElement("div");document.body.insertBefore(t,document.body.lastChild),t.style.transform="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";var e=window.getComputedStyle(t).getPropertyValue("transform");return t.parentNode.removeChild(t),void 0!==e?"none"!==e:!1}(),perspective:function(){for(var t="perspectiveProperty perspective WebkitPerspective MozPerspective OPerspective MsPerspective".split(" "),e=0;e<t.length;e++)if(void 0!==document.body.style[t[e]])return!!t[e];return!1}(),transition:function(){var t=document.body||document.documentElement,e=t.style;return void 0!==e.transition||void 0!==e.WebkitTransition||void 0!==e.MozTransition||void 0!==e.MsTransition||void 0!==e.OTransition}()},function(t){function e(e,n,i,a,o,s,r){function u(t){function e(e){cancelAnimationFrame(e),t(1),r&&r()}var n=(new Date).getTime()+o,i=function(){var o=(new Date).getTime()-n;0>o&&(o=0);var s=a?o/a:1;1>s?(t(s),requestAnimationFrame(i)):e(1)};return i(),{stop:e}}function c(t,e,n){return t+(e-t)*n}function l(e,n){return"linear"==n?e:"swing"==n?t.easing[n]?t.easing[n](e):e:t.easing[n]?t.easing[n](1,e,0,1,1,1):e}function f(t,e,n,i){if("object"==typeof e){var a={};for(var o in e)a[o]=f(t,e[o],n[o],i);return a}var s=["px","%","in","cm","mm","pt","pc","em","ex","ch","rem","vh","vw","vmin","vmax","deg","rad","grad","turn"],r="";return"string"==typeof e?r=e:"string"==typeof n&&(r=n),r=function(t,e,n){for(var i in e)if(t.indexOf(e[i])>-1)return e[i];return p[n]?p[n]:""}(r,s,t),e=parseFloat(e),n=parseFloat(n),c(e,n,i)+r}if("undefined"!=typeof e){e.jquery||"function"==typeof e||(n=e.from,i=e.to,a=e.duration,o=e.delay,s=e.easing,r=e.callback,e=e.each||e.obj);var d="num";if(e.jquery&&(d="obj"),"undefined"!=typeof e&&"undefined"!=typeof n&&"undefined"!=typeof i){"function"==typeof o&&(r=o,o=0),"function"==typeof s&&(r=s,s=0),"string"==typeof o&&(s=o,o=0),a=a||0,o=o||0,s=s||0,r=r||0;var p={opacity:0,top:"px",left:"px",right:"px",bottom:"px",width:"px",height:"px",translate:"px",rotate:"deg",rotateX:"deg",rotateY:"deg",scale:0},h=u(function(t){if(t=l(t,s),"num"===d){var a=c(n,i,t);e(a)}else{var a={transform:""};for(var o in n)if("undefined"!=typeof p[o]){var r=f(o,n[o],i[o],t);switch(o){case"translate":a.transform+=" translate3d("+r[0]+","+r[1]+","+r[2]+")";break;case"rotate":a.transform+=" rotate("+r+")";break;case"rotateX":a.transform+=" rotateX("+r+")";break;case"rotateY":a.transform+=" rotateY("+r+")";break;case"scale":a.transform+="object"==typeof r?" scale("+r[0]+", "+r[1]+")":" scale("+r+")";break;default:a[o]=r}}""===a.transform&&delete a.transform,e.css(a)}});return h}}}window.wowAnimate=e}(jQuery),Date.now||(Date.now=function(){return(new Date).getTime()}),function(){for(var t=["webkit","moz"],e=0;e<t.length&&!window.requestAnimationFrame;++e){var n=t[e];window.requestAnimationFrame=window[n+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n+"CancelAnimationFrame"]||window[n+"CancelRequestAnimationFrame"]}if(/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent)||!window.requestAnimationFrame||!window.cancelAnimationFrame){var i=0;window.requestAnimationFrame=function(t){var e=Date.now(),n=Math.max(i+16,e);return setTimeout(function(){t(i=n)},n-e)},window.cancelAnimationFrame=clearTimeout}}();