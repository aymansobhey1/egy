/*! jQuery UI - v1.12.1 - 2025-06-29
* http://jqueryui.com
* Includes: data.js, effect.js, effects/effect-blind.js, effects/effect-fade.js, effects/effect-slide.js, focusable.js, keycode.js, position.js, tabbable.js, unique-id.js, widget.js, widgets/accordion.js, widgets/mouse.js, widgets/tabs.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
!function(t){"function"==typeof define&&define.amd?
// AMD. Register as an anonymous module.
define(["jquery"],t):
// Browser globals
t(jQuery)}((function(t){t.ui=t.ui||{};t.ui.version="1.12.1",t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo((function(e){return function(i){return!!t.data(i,e)}})):
// Support: jQuery <1.8
function(e,i,s){return!!t.data(e,s[3])}});
/*!
 * jQuery UI :data 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: :data Selector
//>>group: Core
//>>description: Selects elements which have data stored under the specified key.
//>>docs: http://api.jqueryui.com/data-selector/
var e,i="ui-effects-",s="ui-effects-style",n="ui-effects-animated",
// Create a local jQuery because jQuery Color relies on it and the
// global may not exist with AMD and a custom build (#10199)
a=t;t.effects={effect:{}},
/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
function(t,e){var
// Colors = jQuery.Color.names
i,
// Plusequals test for += 100 -= 100
s=/^([\-+])=\s*(\d+\.?\d*)/,
// A set of RE's that can match strings and generate color tuples.
n=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{
// This regex ignores A-F because it's compared against an already lowercased string
re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{
// This regex ignores A-F because it's compared against an already lowercased string
re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],
// JQuery.Color( )
a=t.Color=function(e,i,s,n){return new t.Color.fn.parse(e,i,s,n)},o={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},r={byte:{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},h=a.support={},
// Element for support tests
l=t("<p>")[0],
// Local aliases of functions called often
c=t.each;
// Determine rgba support immediately
function u(t,e,i){var s=r[e.type]||{};return null==t?i||!e.def?null:e.def:(
// ~~ is an short way of doing floor for positive numbers
t=s.floor?~~t:parseFloat(t),
// IE will pass in empty strings as value for alpha,
// which will hit this case
isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:0>t?0:s.max<t?s.max:t)}function d(e){var s=a(),r=s._rgba=[];
// Found a stringParser that handled it
return e=e.toLowerCase(),c(n,(function(t,i){var n,a=i.re.exec(e),h=a&&i.parse(a),l=i.space||"rgba";if(h)
// Exit each( stringParsers ) here because we matched
return n=s[l](h),
// If this was an rgba parse the assignment might happen twice
// oh well....
s[o[l].cache]=n[o[l].cache],r=s._rgba=n._rgba,!1})),r.length?(
// If this came from a parsed string, force "transparent" when alpha is 0
// chrome, (and maybe others) return "transparent" as rgba(0,0,0,0)
"0,0,0,0"===r.join()&&t.extend(r,i.transparent),s):i[e];
// Named colors
}
// Hsla conversions adapted from:
// https://code.google.com/p/maashaack/source/browse/packages/graphics/trunk/src/graphics/colors/HUE2RGB.as?r=5021
function f(t,e,i){return 6*(i=(i+1)%1)<1?t+(e-t)*i*6:2*i<1?e:3*i<2?t+(e-t)*(2/3-i)*6:t}l.style.cssText="background-color:rgba(1,1,1,.5)",h.rgba=l.style.backgroundColor.indexOf("rgba")>-1,
// Define cache name and alpha properties
// for rgba and hsla spaces
c(o,(function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}})),a.fn=t.extend(a.prototype,{parse:function(s,n,r,h){if(s===e)return this._rgba=[null,null,null,null],this;(s.jquery||s.nodeType)&&(s=t(s).css(n),n=e);var l=this,f=t.type(s),p=this._rgba=[];
// More than 1 argument specified - assume ( red, green, blue, alpha )
return n!==e&&(s=[s,n,r,h],f="array"),"string"===f?this.parse(d(s)||i._default):"array"===f?(c(o.rgba.props,(function(t,e){p[e.idx]=u(s[e.idx],e)})),this):"object"===f?(c(o,s instanceof a?function(t,e){s[e.cache]&&(l[e.cache]=s[e.cache].slice())}:function(e,i){var n=i.cache;c(i.props,(function(t,e){
// If the cache doesn't exist, and we know how to convert
if(!l[n]&&i.to){
// If the value was null, we don't need to copy it
// if the key was alpha, we don't need to copy it either
if("alpha"===t||null==s[t])return;l[n]=i.to(l._rgba)}
// This is the only case where we allow nulls for ALL properties.
// call clamp with alwaysAllowEmpty
l[n][e.idx]=u(s[t],e,!0)})),
// Everything defined but alpha?
l[n]&&t.inArray(null,l[n].slice(0,3))<0&&(
// Use the default of 1
l[n][3]=1,i.from&&(l._rgba=i.from(l[n])))}),this):void 0},is:function(t){var e=a(t),i=!0,s=this;return c(o,(function(t,n){var a,o=e[n.cache];return o&&(a=s[n.cache]||n.to&&n.to(s._rgba)||[],c(n.props,(function(t,e){if(null!=o[e.idx])return i=o[e.idx]===a[e.idx]}))),i})),i},_space:function(){var t=[],e=this;return c(o,(function(i,s){e[s.cache]&&t.push(i)})),t.pop()},transition:function(t,e){var i=a(t),s=i._space(),n=o[s],h=0===this.alpha()?a("transparent"):this,l=h[n.cache]||n.to(h._rgba),d=l.slice();return i=i[n.cache],c(n.props,(function(t,s){var n=s.idx,a=l[n],o=i[n],h=r[s.type]||{};
// If null, don't override start value
null!==o&&(
// If null - use end
null===a?d[n]=o:(h.mod&&(o-a>h.mod/2?a+=h.mod:a-o>h.mod/2&&(a-=h.mod)),d[n]=u((o-a)*e+a,s)))})),this[s](d)},blend:function(e){
// If we are already opaque - return ourself
if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=a(e)._rgba;return a(t.map(i,(function(t,e){return(1-s)*n[e]+s*t})))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,(function(t,e){return null==t?e>2?1:0:t}));return 1===i[3]&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),(function(t,e){return null==t&&(t=e>2?1:0),
// Catch 1 and 2
e&&e<3&&(t=Math.round(100*t)+"%"),t}));return 1===i[3]&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),s=i.pop();return e&&i.push(~~(255*s)),"#"+t.map(i,(function(t){return 1===(
// Default to 0 when nulls exist
t=(t||0).toString(16)).length?"0"+t:t})).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),a.fn.parse.prototype=a.fn,o.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e,i,s=t[0]/255,n=t[1]/255,a=t[2]/255,o=t[3],r=Math.max(s,n,a),h=Math.min(s,n,a),l=r-h,c=r+h,u=.5*c;return e=h===r?0:s===r?60*(n-a)/l+360:n===r?60*(a-s)/l+120:60*(s-n)/l+240,
// Chroma (diff) == 0 means greyscale which, by definition, saturation = 0%
// otherwise, saturation is based on the ratio of chroma (diff) to lightness (add)
i=0===l?0:u<=.5?l/c:l/(2-c),[Math.round(e)%360,i,u,null==o?1:o]},o.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],n=t[3],a=s<=.5?s*(1+i):s+i-s*i,o=2*s-a;return[Math.round(255*f(o,a,e+1/3)),Math.round(255*f(o,a,e)),Math.round(255*f(o,a,e-1/3)),n]},c(o,(function(i,n){var o=n.props,r=n.cache,h=n.to,l=n.from;
// Makes rgba() and hsla()
a.fn[i]=function(i){if(
// Generate a cache for this space if it doesn't exist
h&&!this[r]&&(this[r]=h(this._rgba)),i===e)return this[r].slice();var s,n=t.type(i),d="array"===n||"object"===n?i:arguments,f=this[r].slice();return c(o,(function(t,e){var i=d["object"===n?t:e.idx];null==i&&(i=f[e.idx]),f[e.idx]=u(i,e)})),l?((s=a(l(f)))[r]=f,s):a(f)},
// Makes red() green() blue() alpha() hue() saturation() lightness()
c(o,(function(e,n){
// Alpha is included in more than one space
a.fn[e]||(a.fn[e]=function(a){var o,r=t.type(a),h="alpha"===e?this._hsla?"hsla":"rgba":i,l=this[h](),c=l[n.idx];return"undefined"===r?c:("function"===r&&(a=a.call(this,c),r=t.type(a)),null==a&&n.empty?this:("string"===r&&(o=s.exec(a))&&(a=c+parseFloat(o[2])*("+"===o[1]?1:-1)),l[n.idx]=a,this[h](l)))})}))})),
// Add cssHook and .fx.step function for each named hook.
// accept a space separated string of properties
a.hook=function(e){var i=e.split(" ");c(i,(function(e,i){t.cssHooks[i]={set:function(e,s){var n,o,r="";if("transparent"!==s&&("string"!==t.type(s)||(n=d(s)))){if(s=a(n||s),!h.rgba&&1!==s._rgba[3]){for(o="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&o&&o.style;)try{r=t.css(o,"backgroundColor"),o=o.parentNode}catch(t){}s=s.blend(r&&"transparent"!==r?r:"_default")}s=s.toRgbaString()}try{e.style[i]=s}catch(t){
// Wrapped to prevent IE from throwing errors on "invalid" values like
// 'auto' or 'inherit'
}}},t.fx.step[i]=function(e){e.colorInit||(e.start=a(e.elem,i),e.end=a(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}}))},a.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"),t.cssHooks.borderColor={expand:function(t){var e={};return c(["Top","Right","Bottom","Left"],(function(i,s){e["border"+s+"Color"]=t})),e}},
// Basic color names only.
// Usage of any of the other color names requires adding yourself or including
// jquery.color.svg-names.js.
i=t.Color.names={
// 4.1. Basic color keywords
aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",
// 4.2.3. "transparent" color keyword
transparent:[null,null,null,0],_default:"#ffffff"}}(a),
/******************************************************************************/
/****************************** CLASS ANIMATIONS ******************************/
/******************************************************************************/
function(){var e,i=["add","remove","toggle"],s={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};function n(e){var i,s,n=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,a={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)"string"==typeof n[i=n[s]]&&(a[t.camelCase(i)]=n[i]);
// Support: Opera, IE <9
else for(i in n)"string"==typeof n[i]&&(a[i]=n[i]);return a}t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],(function(e,i){t.fx.step[i]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(a.style(t.elem,i,t.end),t.setAttr=!0)}})),
// Support: jQuery <1.8
t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(e,a,o,r){var h=t.speed(a,o,r);return this.queue((function(){var a,o=t(this),r=o.attr("class")||"",l=h.children?o.find("*").addBack():o;
// Map the animated objects to store the original styles.
l=l.map((function(){return{el:t(this),start:n(this)}})),(
// Apply class change
a=function(){t.each(i,(function(t,i){e[i]&&o[i+"Class"](e[i])}))})(),
// Map all animated objects again - calculate new styles and diff
l=l.map((function(){return this.end=n(this.el[0]),this.diff=function(e,i){var n,a,o={};for(n in i)a=i[n],e[n]!==a&&(s[n]||!t.fx.step[n]&&isNaN(parseFloat(a))||(o[n]=a));return o}(this.start,this.end),this})),
// Apply original class
o.attr("class",r),
// Map all animated objects again - this time collecting a promise
l=l.map((function(){var e=this,i=t.Deferred(),s=t.extend({},h,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,s),i.promise()})),
// Once all animations have completed:
t.when.apply(t,l.get()).done((function(){
// Set the final class
a(),
// For each animated element,
// clear all css properties that were animated
t.each(arguments,(function(){var e=this.el;t.each(this.diff,(function(t){e.css(t,"")}))})),
// This is guarnteed to be there if you use jQuery.speed()
// it also handles dequeuing the next anim...
h.complete.call(o[0])}))}))},t.fn.extend({addClass:(e=t.fn.addClass,function(i,s,n,a){return s?t.effects.animateClass.call(this,{add:i},s,n,a):e.apply(this,arguments)}),removeClass:function(e){return function(i,s,n,a){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},s,n,a):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(e){return function(i,s,n,a,o){return"boolean"==typeof s||void 0===s?n?t.effects.animateClass.call(this,s?{add:i}:{remove:i},n,a,o):e.apply(this,arguments):t.effects.animateClass.call(this,{toggle:i},s,n,a)}}(t.fn.toggleClass),switchClass:function(e,i,s,n,a){return t.effects.animateClass.call(this,{add:i,remove:e},s,n,a)}})}(),
/******************************************************************************/
/*********************************** EFFECTS **********************************/
/******************************************************************************/
function(){var e;
// Return an effect options object for the given parameters:
function a(e,i,s,n){
// Allow passing all options as the first parameter
return t.isPlainObject(e)&&(i=e,e=e.effect),
// Convert to an object
e={effect:e},
// Catch (effect, null, ...)
null==i&&(i={}),
// Catch (effect, callback)
t.isFunction(i)&&(n=i,s=null,i={}),
// Catch (effect, speed, ?)
("number"==typeof i||t.fx.speeds[i])&&(n=s,s=i,i={}),
// Catch (effect, options, callback)
t.isFunction(s)&&(n=s,s=null),
// Add options to effect
i&&t.extend(e,i),s=s||i.duration,e.duration=t.fx.off?0:"number"==typeof s?s:s in t.fx.speeds?t.fx.speeds[s]:t.fx.speeds._default,e.complete=n||i.complete,e}function o(e){
// Valid standard speeds (nothing, number, named speed)
return!(e&&"number"!=typeof e&&!t.fx.speeds[e])||(
// Invalid strings - treat as "normal" speed
"string"==typeof e&&!t.effects.effect[e]||(
// Complete callback
!!t.isFunction(e)||"object"==typeof e&&!e.effect))}function r(t,e){var i=e.outerWidth(),s=e.outerHeight(),n=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t)||["",0,i,s,0];return{top:parseFloat(n[1])||0,right:"auto"===n[2]?i:parseFloat(n[2]),bottom:"auto"===n[3]?s:parseFloat(n[3]),left:parseFloat(n[4])||0}}t.expr&&t.expr.filters&&t.expr.filters.animated&&(t.expr.filters.animated=(e=t.expr.filters.animated,function(i){return!!t(i).data(n)||e(i)})),!1!==t.uiBackCompat&&t.extend(t.effects,{
// Saves a set of properties in a data storage
save:function(t,e){for(var s=0,n=e.length;s<n;s++)null!==e[s]&&t.data(i+e[s],t[0].style[e[s]])},
// Restores a set of previously saved properties from a data storage
restore:function(t,e){for(var s,n=0,a=e.length;n<a;n++)null!==e[n]&&(s=t.data(i+e[n]),t.css(e[n],s))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},
// Wraps the element around a wrapper that copies position properties
createWrapper:function(e){
// If the element is already wrapped, return it
if(e.parent().is(".ui-effects-wrapper"))return e.parent();
// Wrap the element
var i={width:e.outerWidth(!0),height:e.outerHeight(!0),float:e.css("float")},s=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),
// Store the size in case width/height are defined in % - Fixes #5245
n={width:e.width(),height:e.height()},a=document.activeElement;
// Support: Firefox
// Firefox incorrectly exposes anonymous content
// https://bugzilla.mozilla.org/show_bug.cgi?id=561664
try{a.id}catch(t){a=document.body}return e.wrap(s),
// Fixes #7595 - Elements lose focus when wrapped.
(e[0]===a||t.contains(e[0],a))&&t(a).trigger("focus"),
// Hotfix for jQuery 1.4 since some change in wrap() seems to actually
// lose the reference to the wrapped element
s=e.parent(),
// Transfer positioning properties to the wrapper
"static"===e.css("position")?(s.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],(function(t,s){i[s]=e.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")})),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(n),s.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),
// Fixes #7595 - Elements lose focus when wrapped.
(e[0]===i||t.contains(e[0],i))&&t(i).trigger("focus")),e}}),t.extend(t.effects,{version:"1.12.1",define:function(e,i,s){return s||(s=i,i="effect"),t.effects.effect[e]=s,t.effects.effect[e].mode=i,s},scaledDimensions:function(t,e,i){if(0===e)return{height:0,width:0,outerHeight:0,outerWidth:0};var s="horizontal"!==i?(e||100)/100:1,n="vertical"!==i?(e||100)/100:1;return{height:t.height()*n,width:t.width()*s,outerHeight:t.outerHeight()*n,outerWidth:t.outerWidth()*s}},clipToBox:function(t){return{width:t.clip.right-t.clip.left,height:t.clip.bottom-t.clip.top,left:t.clip.left,top:t.clip.top}},
// Injects recently queued functions to be first in line (after "inprogress")
unshift:function(t,e,i){var s=t.queue();e>1&&s.splice.apply(s,[1,0].concat(s.splice(e,i))),t.dequeue()},saveStyle:function(t){t.data(s,t[0].style.cssText)},restoreStyle:function(t){t[0].style.cssText=t.data(s)||"",t.removeData(s)},mode:function(t,e){var i=t.is(":hidden");return"toggle"===e&&(e=i?"show":"hide"),(i?"hide"===e:"show"===e)&&(e="none"),e},
// Translates a [top,left] array into a baseline value
getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},
// Creates a placeholder element so that the original element can be made absolute
createPlaceholder:function(e){var s,n=e.css("position"),a=e.position();
// Lock in margins first to account for form elements, which
// will change margin if you explicitly set height
// see: http://jsfiddle.net/JZSMt/3/ https://bugs.webkit.org/show_bug.cgi?id=107380
// Support: Safari
return e.css({marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()),/^(static|relative)/.test(n)&&(n="absolute",s=t("<"+e[0].nodeName+">").insertAfter(e).css({
// Convert inline to inline block to account for inline elements
// that turn to inline block based on content (like img)
display:/^(inline|ruby)/.test(e.css("display"))?"inline-block":"block",visibility:"hidden",
// Margins need to be set to account for margin collapse
marginTop:e.css("marginTop"),marginBottom:e.css("marginBottom"),marginLeft:e.css("marginLeft"),marginRight:e.css("marginRight"),float:e.css("float")}).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"),e.data(i+"placeholder",s)),e.css({position:n,left:a.left,top:a.top}),s},removePlaceholder:function(t){var e=i+"placeholder",s=t.data(e);s&&(s.remove(),t.removeData(e))},
// Removes a placeholder if it exists and restores
// properties that were modified during placeholder creation
cleanUp:function(e){t.effects.restoreStyle(e),t.effects.removePlaceholder(e)},setTransition:function(e,i,s,n){return n=n||{},t.each(i,(function(t,i){var a=e.cssUnit(i);a[0]>0&&(n[i]=a[0]*s+a[1])})),n}}),t.fn.extend({effect:function(){var e=a.apply(this,arguments),i=t.effects.effect[e.effect],s=i.mode,o=e.queue,r=o||"fx",h=e.complete,l=e.mode,c=[],u=function(e){var i=t(this),a=t.effects.mode(i,l)||s;
// Sentinel for duck-punching the :animated psuedo-selector
i.data(n,!0),
// Save effect mode for later use,
// we can't just call $.effects.mode again later,
// as the .show() below destroys the initial state
c.push(a),
// See $.uiBackCompat inside of run() for removal of defaultMode in 1.13
s&&("show"===a||a===s&&"hide"===a)&&i.show(),s&&"none"===a||t.effects.saveStyle(i),t.isFunction(e)&&e()};if(t.fx.off||!i)
// Delegate to the original method (e.g., .show()) if possible
return l?this[l](e.duration,h):this.each((function(){h&&h.call(this)}));function d(a){var o=t(this);function r(){t.isFunction(h)&&h.call(o[0]),t.isFunction(a)&&a()}
// Override mode option on a per element basis,
// as toggle can be either show or hide depending on element state
e.mode=c.shift(),!1===t.uiBackCompat||s?"none"===e.mode?(
// Call the core method to track "olddisplay" properly
o[l](),r()):i.call(o[0],e,(function(){o.removeData(n),t.effects.cleanUp(o),"hide"===e.mode&&o.hide(),r()})):(o.is(":hidden")?"hide"===l:"show"===l)?(
// Call the core method to track "olddisplay" properly
o[l](),r()):i.call(o[0],e,r)}
// Run prefilter on all elements first to ensure that
// any showing or hiding happens before placeholder creation,
// which ensures that any layout changes are correctly captured.
return!1===o?this.each(u).each(d):this.queue(r,u).queue(r,d)},show:function(t){return function(e){if(o(e))return t.apply(this,arguments);var i=a.apply(this,arguments);return i.mode="show",this.effect.call(this,i)}}(t.fn.show),hide:function(t){return function(e){if(o(e))return t.apply(this,arguments);var i=a.apply(this,arguments);return i.mode="hide",this.effect.call(this,i)}}(t.fn.hide),toggle:function(t){return function(e){if(o(e)||"boolean"==typeof e)return t.apply(this,arguments);var i=a.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),s=[];return t.each(["em","px","%","pt"],(function(t,e){i.indexOf(e)>0&&(s=[parseFloat(i),e])})),s},cssClip:function(t){return t?this.css("clip","rect("+t.top+"px "+t.right+"px "+t.bottom+"px "+t.left+"px)"):r(this.css("clip"),this)},transfer:function(e,i){var s=t(this),n=t(e.to),a="fixed"===n.css("position"),o=t("body"),r=a?o.scrollTop():0,h=a?o.scrollLeft():0,l=n.offset(),c={top:l.top-r,left:l.left-h,height:n.innerHeight(),width:n.innerWidth()},u=s.offset(),d=t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({top:u.top-r,left:u.left-h,height:s.innerHeight(),width:s.innerWidth(),position:a?"fixed":"absolute"}).animate(c,e.duration,e.easing,(function(){d.remove(),t.isFunction(i)&&i()}))}}),t.fx.step.clip=function(e){e.clipInit||(e.start=t(e.elem).cssClip(),"string"==typeof e.end&&(e.end=r(e.end,e.elem)),e.clipInit=!0),t(e.elem).cssClip({top:e.pos*(e.end.top-e.start.top)+e.start.top,right:e.pos*(e.end.right-e.start.right)+e.start.right,bottom:e.pos*(e.end.bottom-e.start.bottom)+e.start.bottom,left:e.pos*(e.end.left-e.start.left)+e.start.left})}}(),
/******************************************************************************/
/*********************************** EASING ***********************************/
/******************************************************************************/
e={},t.each(["Quad","Cubic","Quart","Quint","Expo"],(function(t,i){e[i]=function(e){return Math.pow(e,t+2)}})),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;t<((e=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,(function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return t<.5?i(2*t)/2:1-i(-2*t+2)/2}}));t.effects,t.effects.define("blind","hide",(function(e,i){var s={up:["bottom","top"],vertical:["bottom","top"],down:["top","bottom"],left:["right","left"],horizontal:["right","left"],right:["left","right"]},n=t(this),a=e.direction||"up",o=n.cssClip(),r={clip:t.extend({},o)},h=t.effects.createPlaceholder(n);r.clip[s[a][0]]=r.clip[s[a][1]],"show"===e.mode&&(n.cssClip(r.clip),h&&h.css(t.effects.clipToBox(r)),r.clip=o),h&&h.animate(t.effects.clipToBox(r),e.duration,e.easing),n.animate(r,{queue:!1,duration:e.duration,easing:e.easing,complete:i})})),t.effects.define("fade","toggle",(function(e,i){var s="show"===e.mode;t(this).css("opacity",s?0:1).animate({opacity:s?1:0},{queue:!1,duration:e.duration,easing:e.easing,complete:i})})),t.effects.define("slide","show",(function(e,i){var s,n,a=t(this),o={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},r=e.mode,h=e.direction||"left",l="up"===h||"down"===h?"top":"left",c="up"===h||"left"===h,u=e.distance||a["top"===l?"outerHeight":"outerWidth"](!0),d={};t.effects.createPlaceholder(a),s=a.cssClip(),n=a.position()[l],
// Define hide animation
d[l]=(c?-1:1)*u+n,d.clip=a.cssClip(),d.clip[o[h][1]]=d.clip[o[h][0]],
// Reverse the animation if we're showing
"show"===r&&(a.cssClip(d.clip),a.css(l,d[l]),d.clip=s,d[l]=n),
// Actually animate
a.animate(d,{queue:!1,duration:e.duration,easing:e.easing,complete:i})}));
/*!
 * jQuery UI Effects Blind 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Blind Effect
//>>group: Effects
//>>description: Blinds the element.
//>>docs: http://api.jqueryui.com/blind-effect/
//>>demos: http://jqueryui.com/effect/
/*!
 * jQuery UI Focusable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: :focusable Selector
//>>group: Core
//>>description: Selects elements which can be focused.
//>>docs: http://api.jqueryui.com/focusable-selector/
// Selectors
t.ui.focusable=function(e,i){var s,n,a,o,r,h=e.nodeName.toLowerCase();return"area"===h?(n=(s=e.parentNode).name,!(!e.href||!n||"map"!==s.nodeName.toLowerCase())&&((a=t("img[usemap='#"+n+"']")).length>0&&a.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(h)?(o=!e.disabled)&&(
// Form controls within a disabled fieldset are disabled.
// However, controls within the fieldset's legend do not get disabled.
// Since controls generally aren't placed inside legends, we skip
// this portion of the check.
r=t(e).closest("fieldset")[0])&&(o=!r.disabled):o="a"===h&&e.href||i,o&&t(e).is(":visible")&&
// Support: IE 8 only
// IE 8 doesn't resolve inherit to visible/hidden for computed values
function(t){var e=t.css("visibility");for(;"inherit"===e;)e=(t=t.parent()).css("visibility");return"hidden"!==e}(t(e)))},t.extend(t.expr[":"],{focusable:function(e){return t.ui.focusable(e,null!=t.attr(e,"tabindex"))}});t.ui.focusable,t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38};
/*!
 * jQuery UI Keycode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Keycode
//>>group: Core
//>>description: Provide keycodes as keynames
//>>docs: http://api.jqueryui.com/jQuery.ui.keyCode/
/*!
 * jQuery UI Position 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
//>>label: Position
//>>group: Core
//>>description: Positions elements relative to other elements.
//>>docs: http://api.jqueryui.com/position/
//>>demos: http://jqueryui.com/position/
!function(){var e,i=Math.max,s=Math.abs,n=/left|center|right/,a=/top|center|bottom/,o=/[\+\-]\d+(\.[\d]+)?%?/,r=/^\w+/,h=/%$/,l=t.fn.position;function c(t,e,i){return[parseFloat(t[0])*(h.test(t[0])?e/100:1),parseFloat(t[1])*(h.test(t[1])?i/100:1)]}function u(e,i){return parseInt(t.css(e,i),10)||0}t.position={scrollbarWidth:function(){if(void 0!==e)return e;var i,s,n=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),a=n.children()[0];return t("body").append(n),i=a.offsetWidth,n.css("overflow","scroll"),i===(s=a.offsetWidth)&&(s=n[0].clientWidth),n.remove(),e=i-s},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),n="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth;return{width:"scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:!s&&!n?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(e){if(!e||!e.of)return l.apply(this,arguments);
// Make a copy, we don't want to modify arguments
e=t.extend({},e);var h,d,f,p,g,v,m,b,_=t(e.of),y=t.position.getWithinInfo(e.within),x=t.position.getScrollInfo(y),w=(e.collision||"flip").split(" "),C={};return v=9===(b=(m=_)[0]).nodeType?{width:m.width(),height:m.height(),offset:{top:0,left:0}}:t.isWindow(b)?{width:m.width(),height:m.height(),offset:{top:m.scrollTop(),left:m.scrollLeft()}}:b.preventDefault?{width:0,height:0,offset:{top:b.pageY,left:b.pageX}}:{width:m.outerWidth(),height:m.outerHeight(),offset:m.offset()},_[0].preventDefault&&(
// Force left top to allow flipping
e.at="left top"),d=v.width,f=v.height,p=v.offset,
// Clone to reuse original targetOffset later
g=t.extend({},p),
// Force my and at to have valid horizontal and vertical positions
// if a value is missing or invalid, it will be converted to center
t.each(["my","at"],(function(){var t,i,s=(e[this]||"").split(" ");1===s.length&&(s=n.test(s[0])?s.concat(["center"]):a.test(s[0])?["center"].concat(s):["center","center"]),s[0]=n.test(s[0])?s[0]:"center",s[1]=a.test(s[1])?s[1]:"center",
// Calculate offsets
t=o.exec(s[0]),i=o.exec(s[1]),C[this]=[t?t[0]:0,i?i[0]:0],
// Reduce to just the positions without the offsets
e[this]=[r.exec(s[0])[0],r.exec(s[1])[0]]})),
// Normalize collision option
1===w.length&&(w[1]=w[0]),"right"===e.at[0]?g.left+=d:"center"===e.at[0]&&(g.left+=d/2),"bottom"===e.at[1]?g.top+=f:"center"===e.at[1]&&(g.top+=f/2),h=c(C.at,d,f),g.left+=h[0],g.top+=h[1],this.each((function(){var n,a,o=t(this),r=o.outerWidth(),l=o.outerHeight(),v=u(this,"marginLeft"),m=u(this,"marginTop"),b=r+v+u(this,"marginRight")+x.width,T=l+m+u(this,"marginBottom")+x.height,D=t.extend({},g),k=c(C.my,o.outerWidth(),o.outerHeight());"right"===e.my[0]?D.left-=r:"center"===e.my[0]&&(D.left-=r/2),"bottom"===e.my[1]?D.top-=l:"center"===e.my[1]&&(D.top-=l/2),D.left+=k[0],D.top+=k[1],n={marginLeft:v,marginTop:m},t.each(["left","top"],(function(i,s){t.ui.position[w[i]]&&t.ui.position[w[i]][s](D,{targetWidth:d,targetHeight:f,elemWidth:r,elemHeight:l,collisionPosition:n,collisionWidth:b,collisionHeight:T,offset:[h[0]+k[0],h[1]+k[1]],my:e.my,at:e.at,within:y,elem:o})})),e.using&&(
// Adds feedback as second argument to using callback, if present
a=function(t){var n=p.left-D.left,a=n+d-r,h=p.top-D.top,c=h+f-l,u={target:{element:_,left:p.left,top:p.top,width:d,height:f},element:{element:o,left:D.left,top:D.top,width:r,height:l},horizontal:a<0?"left":n>0?"right":"center",vertical:c<0?"top":h>0?"bottom":"middle"};d<r&&s(n+a)<d&&(u.horizontal="center"),f<l&&s(h+c)<f&&(u.vertical="middle"),i(s(n),s(a))>i(s(h),s(c))?u.important="horizontal":u.important="vertical",e.using.call(this,t,u)}),o.offset(t.extend(D,{using:a}))}))},t.ui.position={fit:{left:function(t,e){var s,n=e.within,a=n.isWindow?n.scrollLeft:n.offset.left,o=n.width,r=t.left-e.collisionPosition.marginLeft,h=a-r,l=r+e.collisionWidth-o-a;
// Element is wider than within
e.collisionWidth>o?
// Element is initially over the left side of within
h>0&&l<=0?(s=t.left+h+e.collisionWidth-o-a,t.left+=h-s):t.left=l>0&&h<=0?a:h>l?a+o-e.collisionWidth:a:h>0?t.left+=h:l>0?t.left-=l:t.left=i(t.left-r,t.left)},top:function(t,e){var s,n=e.within,a=n.isWindow?n.scrollTop:n.offset.top,o=e.within.height,r=t.top-e.collisionPosition.marginTop,h=a-r,l=r+e.collisionHeight-o-a;
// Element is taller than within
e.collisionHeight>o?
// Element is initially over the top of within
h>0&&l<=0?(s=t.top+h+e.collisionHeight-o-a,t.top+=h-s):t.top=l>0&&h<=0?a:h>l?a+o-e.collisionHeight:a:h>0?t.top+=h:l>0?t.top-=l:t.top=i(t.top-r,t.top)}},flip:{left:function(t,e){var i,n,a=e.within,o=a.offset.left+a.scrollLeft,r=a.width,h=a.isWindow?a.scrollLeft:a.offset.left,l=t.left-e.collisionPosition.marginLeft,c=l-h,u=l+e.collisionWidth-r-h,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,f="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,p=-2*e.offset[0];c<0?((i=t.left+d+f+p+e.collisionWidth-r-o)<0||i<s(c))&&(t.left+=d+f+p):u>0&&((n=t.left-e.collisionPosition.marginLeft+d+f+p-h)>0||s(n)<u)&&(t.left+=d+f+p)},top:function(t,e){var i,n,a=e.within,o=a.offset.top+a.scrollTop,r=a.height,h=a.isWindow?a.scrollTop:a.offset.top,l=t.top-e.collisionPosition.marginTop,c=l-h,u=l+e.collisionHeight-r-h,d="top"===e.my[1]?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,p=-2*e.offset[1];c<0?((n=t.top+d+f+p+e.collisionHeight-r-o)<0||n<s(c))&&(t.top+=d+f+p):u>0&&((i=t.top-e.collisionPosition.marginTop+d+f+p-h)>0||s(i)<u)&&(t.top+=d+f+p)}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}();t.ui.position,t.extend(t.expr[":"],{tabbable:function(e){var i=t.attr(e,"tabindex"),s=null!=i;return(!s||i>=0)&&t.ui.focusable(e,s)}}),t.fn.extend({uniqueId:(o=0,function(){return this.each((function(){this.id||(this.id="ui-id-"+ ++o)}))}),removeUniqueId:function(){return this.each((function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")}))}});
/*!
 * jQuery UI Tabbable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: :tabbable Selector
//>>group: Core
//>>description: Selects elements which can be tabbed to.
//>>docs: http://api.jqueryui.com/tabbable-selector/
var o,r,h=0,l=Array.prototype.slice;t.cleanData=(r=t.cleanData,function(e){var i,s,n;for(n=0;null!=(s=e[n]);n++)try{
// Only trigger remove when necessary to save time
(i=t._data(s,"events"))&&i.remove&&t(s).triggerHandler("remove")}catch(t){}r(e)}),t.widget=function(e,i,s){var n,a,o,r={},h=e.split(".")[0],l=h+"-"+(e=e.split(".")[1]);
// ProxiedPrototype allows the provided prototype to remain unmodified
// so that it can be used as a mixin for multiple widgets (#8876)
return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),
// Create selector for plugin
t.expr[":"][l.toLowerCase()]=function(e){return!!t.data(e,l)},t[h]=t[h]||{},n=t[h][e],a=t[h][e]=function(t,e){
// Allow instantiation without "new" keyword
if(!this._createWidget)return new a(t,e);
// Allow instantiation without initializing for simple inheritance
// must use "new" keyword (the code above always passes args)
arguments.length&&this._createWidget(t,e)},
// Extend with the existing constructor to carry over any static properties
t.extend(a,n,{version:s.version,
// Copy the object used to create the prototype in case we need to
// redefine the widget later
_proto:t.extend({},s),
// Track widgets that inherit from this widget in case this widget is
// redefined after a widget inherits from it
_childConstructors:[]}),
// We need to make the options hash a property directly on the new instance
// otherwise we'll modify the options hash on the prototype that we're
// inheriting from
(o=new i).options=t.widget.extend({},o.options),t.each(s,(function(e,s){t.isFunction(s)?r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,a=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=a,e}}():r[e]=s})),a.prototype=t.widget.extend(o,{
// TODO: remove support for widgetEventPrefix
// always use the name + a colon as the prefix, e.g., draggable:start
// don't prefix for widgets that aren't DOM-based
widgetEventPrefix:n&&o.widgetEventPrefix||e},r,{constructor:a,namespace:h,widgetName:e,widgetFullName:l}),
// If this widget is being redefined then we need to find all widgets that
// are inheriting from it and redefine all of them so that they inherit from
// the new version of this widget. We're essentially trying to replace one
// level in the prototype chain.
n?(t.each(n._childConstructors,(function(e,i){var s=i.prototype;
// Redefine the child widget using the same prototype that was
// originally used, but inherit from the new version of the base
t.widget(s.namespace+"."+s.widgetName,a,i._proto)})),
// Remove the list of existing child constructors from the old constructor
// so the old child constructors can be garbage collected
delete n._childConstructors):i._childConstructors.push(a),t.widget.bridge(e,a),a},t.widget.extend=function(e){for(var i,s,n=l.call(arguments,1),a=0,o=n.length;a<o;a++)for(i in n[a])s=n[a][i],n[a].hasOwnProperty(i)&&void 0!==s&&(
// Clone objects
t.isPlainObject(s)?e[i]=t.isPlainObject(e[i])?t.widget.extend({},e[i],s):
// Don't extend strings, arrays, etc. with objects
t.widget.extend({},s):e[i]=s);return e},t.widget.bridge=function(e,i){var s=i.prototype.widgetFullName||e;t.fn[e]=function(n){var a="string"==typeof n,o=l.call(arguments,1),r=this;return a?
// If this is an empty collection, we need to have the instance method
// return undefined instead of the jQuery instance
this.length||"instance"!==n?this.each((function(){var i,a=t.data(this,s);return"instance"===n?(r=a,!1):a?t.isFunction(a[n])&&"_"!==n.charAt(0)?(i=a[n].apply(a,o))!==a&&void 0!==i?(r=i&&i.jquery?r.pushStack(i.get()):i,!1):void 0:t.error("no such method '"+n+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; attempted to call method '"+n+"'")})):r=void 0:(
// Allow multiple hashes to be passed on init
o.length&&(n=t.widget.extend.apply(null,[n].concat(o))),this.each((function(){var e=t.data(this,s);e?(e.option(n||{}),e._init&&e._init()):t.data(this,s,new i(n,this))}))),r}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,
// Callbacks
create:null},_createWidget:function(e,i){i=t(i||this.defaultElement||this)[0],this.element=t(i),this.uuid=h++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},i!==this&&(t.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===i&&this.destroy()}}),this.document=t(i.style?
// Element within the document
i.ownerDocument:
// Element is window or document
i.document||i),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,(function(t,i){e._removeClass(i,t)})),
// We can probably remove the unbind calls in 2.0
// all event bindings should go through this._on()
this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
// Clean up events and states
this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,a,o=e;if(0===arguments.length)
// Don't return a reference to the internal hash
return t.widget.extend({},this.options);if("string"==typeof e)if(
// Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
o={},s=e.split("."),e=s.shift(),s.length){for(n=o[e]=t.widget.extend({},this.options[e]),a=0;a<s.length-1;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];o[e]=i}return this._setOptions(o),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(
// We are doing this to create a new jQuery object because the _removeClass() call
// on the next line is going to destroy the reference to the current elements being
// tracked. We need to save a copy of this collection so that we can add the new classes
// below.
s=t(n.get()),this._removeClass(n,i),
// We don't use _addClass() here, because that uses this.options.classes
// for generating the string of classes. We want to use the value passed in from
// _setOption(), this is the new value of the classes option which was passed to
// _setOption(). We pass this value directly to _classes().
s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),
// If the widget is becoming disabled, then nothing is interactive
t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){var i=[],s=this;function n(n,a){var o,r;for(r=0;r<n.length;r++)o=s.classesElementLookup[n[r]]||t(),o=e.add?t(t.unique(o.get().concat(e.element.get()))):t(o.not(e.element).get()),s.classesElementLookup[n[r]]=o,i.push(n[r]),a&&e.classes[n[r]]&&i.push(e.classes[n[r]])}return e=t.extend({element:this.element,classes:this.options.classes||{}},e),this._on(e.element,{remove:"_untrackClassesElement"}),e.keys&&n(e.keys.match(/\S+/g)||[],!0),e.extra&&n(e.extra.match(/\S+/g)||[]),i.join(" ")},_untrackClassesElement:function(e){var i=this;t.each(i.classesElementLookup,(function(s,n){-1!==t.inArray(e.target,n)&&(i.classesElementLookup[s]=t(n.not(e.target).get()))}))},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,a={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return a.element.toggleClass(this._classes(a),s),this},_on:function(e,i,s){var n,a=this;
// No suppressDisabledCheck flag, shuffle arguments
"boolean"!=typeof e&&(s=i,i=e,e=!1),
// No element argument, shuffle and use this.element
s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,(function(s,o){function r(){
// Allow widgets to customize the disabled handling
// - disabled as an array instead of boolean
// - disabled class as method for disabling individual parts
if(e||!0!==a.options.disabled&&!t(this).hasClass("ui-state-disabled"))return("string"==typeof o?a[o]:o).apply(a,arguments)}
// Copy the guid so direct unbinding works
"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||t.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+a.eventNamespace,c=h[2];c?n.on(l,c,r):i.on(l,r)}))},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),
// Clear the stack to avoid memory leaks (#10056)
this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){var i=this;return setTimeout((function(){return("string"==typeof t?i[t]:t).apply(i,arguments)}),e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,a,o=this.options[e];if(s=s||{},(i=t.Event(i)).type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),
// The original event may come from any element
// so we need to reset the target on the new event
i.target=this.element[0],
// Copy original event properties over to the new event
a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(t.isFunction(o)&&!1===o.apply(this.element[0],[i].concat(s))||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},(function(e,i){t.Widget.prototype["_"+e]=function(s,n,a){var o;"string"==typeof n&&(n={effect:n});var r=n?!0===n||"number"==typeof n?i:n.effect||i:e;"number"==typeof(n=n||{})&&(n={duration:n}),o=!t.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,a):s.queue((function(i){t(this)[e](),a&&a.call(s[0]),i()}))}}));t.widget,t.widget("ui.accordion",{version:"1.12.1",options:{active:0,animate:{},classes:{"ui-accordion-header":"ui-corner-top","ui-accordion-header-collapsed":"ui-corner-all","ui-accordion-content":"ui-corner-bottom"},collapsible:!1,event:"click",header:"> li > :first-child, > :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},
// Callbacks
activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var e=this.options;this.prevShow=this.prevHide=t(),this._addClass("ui-accordion","ui-widget ui-helper-reset"),this.element.attr("role","tablist"),
// Don't allow collapsible: false and active: false / null
e.collapsible||!1!==e.active&&null!=e.active||(e.active=0),this._processPanels(),
// handle negative values
e.active<0&&(e.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():t()}},_createIcons:function(){var e,i,s=this.options.icons;s&&(e=t("<span>"),this._addClass(e,"ui-accordion-header-icon","ui-icon "+s.header),e.prependTo(this.headers),i=this.active.children(".ui-accordion-header-icon"),this._removeClass(i,s.header)._addClass(i,null,s.activeHeader)._addClass(this.headers,"ui-accordion-icons"))},_destroyIcons:function(){this._removeClass(this.headers,"ui-accordion-icons"),this.headers.children(".ui-accordion-header-icon").remove()},_destroy:function(){var t;
// Clean up main element
this.element.removeAttr("role"),
// Clean up headers
this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(),this._destroyIcons(),
// Clean up content panels
t=this.headers.next().css("display","").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&t.css("height","")},_setOption:function(t,e){"active"!==t?("event"===t&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(e)),this._super(t,e),
// Setting collapsible: false while collapsed; open first panel
"collapsible"!==t||e||!1!==this.options.active||this._activate(0),"icons"===t&&(this._destroyIcons(),e&&this._createIcons())):
// _activate() will handle invalid values and update this.options
this._activate(e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),
// Support: IE8 Only
// #5332 / #6059 - opacity doesn't cascade to positioned elements in IE
// so we need to add the disabled class to the headers and panels
this._toggleClass(null,"ui-state-disabled",!!t),this._toggleClass(this.headers.add(this.headers.next()),null,"ui-state-disabled",!!t)},_keydown:function(e){if(!e.altKey&&!e.ctrlKey){var i=t.ui.keyCode,s=this.headers.length,n=this.headers.index(e.target),a=!1;switch(e.keyCode){case i.RIGHT:case i.DOWN:a=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:a=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(e);break;case i.HOME:a=this.headers[0];break;case i.END:a=this.headers[s-1]}a&&(t(e.target).attr("tabIndex",-1),t(a).attr("tabIndex",0),t(a).trigger("focus"),e.preventDefault())}},_panelKeyDown:function(e){e.keyCode===t.ui.keyCode.UP&&e.ctrlKey&&t(e.currentTarget).prev().trigger("focus")},refresh:function(){var e=this.options;this._processPanels(),
// Was collapsed or no panel
!1===e.active&&!0===e.collapsible||!this.headers.length?(e.active=!1,this.active=t()):!1===e.active?this._activate(0):this.active.length&&!t.contains(this.element[0],this.active[0])?
// all remaining panel are disabled
this.headers.length===this.headers.find(".ui-state-disabled").length?(e.active=!1,this.active=t()):this._activate(Math.max(0,e.active-1)):
// make sure active index is correct
e.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var t=this.headers,e=this.panels;this.headers=this.element.find(this.options.header),this._addClass(this.headers,"ui-accordion-header ui-accordion-header-collapsed","ui-state-default"),this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide(),this._addClass(this.panels,"ui-accordion-content","ui-helper-reset ui-widget-content"),
// Avoid memory leaks (#10056)
e&&(this._off(t.not(this.headers)),this._off(e.not(this.panels)))},_refresh:function(){var e,i=this.options,s=i.heightStyle,n=this.element.parent();this.active=this._findActive(i.active),this._addClass(this.active,"ui-accordion-header-active","ui-state-active")._removeClass(this.active,"ui-accordion-header-collapsed"),this._addClass(this.active.next(),"ui-accordion-content-active"),this.active.next().show(),this.headers.attr("role","tab").each((function(){var e=t(this),i=e.uniqueId().attr("id"),s=e.next(),n=s.uniqueId().attr("id");e.attr("aria-controls",n),s.attr("aria-labelledby",i)})).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),
// Make sure at least one header is in the tab order
this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===s?(e=n.height(),this.element.siblings(":visible").each((function(){var i=t(this),s=i.css("position");"absolute"!==s&&"fixed"!==s&&(e-=i.outerHeight(!0))})),this.headers.each((function(){e-=t(this).outerHeight(!0)})),this.headers.next().each((function(){t(this).height(Math.max(0,e-t(this).innerHeight()+t(this).height()))})).css("overflow","auto")):"auto"===s&&(e=0,this.headers.next().each((function(){var i=t(this).is(":visible");i||t(this).show(),e=Math.max(e,t(this).css("height","").height()),i||t(this).hide()})).height(e))},_activate:function(e){var i=this._findActive(e)[0];
// Trying to activate the already active panel
i!==this.active[0]&&(
// Trying to collapse, simulate a click on the currently active header
i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return"number"==typeof e?this.headers.eq(e):t()},_setupEvents:function(e){var i={keydown:"_keydown"};e&&t.each(e.split(" "),(function(t,e){i[e]="_eventHandler"})),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(e){var i,s,n=this.options,a=this.active,o=t(e.currentTarget),r=o[0]===a[0],h=r&&n.collapsible,l=h?t():o.next(),c=a.next(),u={oldHeader:a,oldPanel:c,newHeader:h?t():o,newPanel:l};e.preventDefault(),
// click on active header, but not collapsible
r&&!n.collapsible||
// allow canceling activation
!1===this._trigger("beforeActivate",e,u)||(n.active=!h&&this.headers.index(o),
// When the call to ._toggle() comes after the class changes
// it causes a very odd bug in IE 8 (see #6720)
this.active=r?t():o,this._toggle(u),
// Switch classes
// corner classes on the previously active header stay after the animation
this._removeClass(a,"ui-accordion-header-active","ui-state-active"),n.icons&&(i=a.children(".ui-accordion-header-icon"),this._removeClass(i,null,n.icons.activeHeader)._addClass(i,null,n.icons.header)),r||(this._removeClass(o,"ui-accordion-header-collapsed")._addClass(o,"ui-accordion-header-active","ui-state-active"),n.icons&&(s=o.children(".ui-accordion-header-icon"),this._removeClass(s,null,n.icons.header)._addClass(s,null,n.icons.activeHeader)),this._addClass(o.next(),"ui-accordion-content-active")))},_toggle:function(e){var i=e.newPanel,s=this.prevShow.length?this.prevShow:e.oldPanel;
// Handle activating a panel during the animation for another activation
this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,e):(s.hide(),i.show(),this._toggleComplete(e)),s.attr({"aria-hidden":"true"}),s.prev().attr({"aria-selected":"false","aria-expanded":"false"}),
// if we're switching panels, remove the old header from the tab order
// if we're opening from collapsed state, remove the previous header from the tab order
// if we're collapsing, then keep the collapsing header in the tab order
i.length&&s.length?s.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter((function(){return 0===parseInt(t(this).attr("tabIndex"),10)})).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(t,e,i){var s,n,a,o=this,r=0,h=t.css("box-sizing"),l=t.length&&(!e.length||t.index()<e.index()),c=this.options.animate||{},u=l&&c.down||c,d=function(){o._toggleComplete(i)};return"number"==typeof u&&(a=u),"string"==typeof u&&(n=u),
// fall back from options to animation in case of partial down settings
n=n||u.easing||c.easing,a=a||u.duration||c.duration,e.length?t.length?(s=t.show().outerHeight(),e.animate(this.hideProps,{duration:a,easing:n,step:function(t,e){e.now=Math.round(t)}}),void t.hide().animate(this.showProps,{duration:a,easing:n,complete:d,step:function(t,i){i.now=Math.round(t),"height"!==i.prop?"content-box"===h&&(r+=i.now):"content"!==o.options.heightStyle&&(i.now=Math.round(s-e.outerHeight()-r),r=0)}})):e.animate(this.hideProps,a,n,d):t.animate(this.showProps,a,n,d)},_toggleComplete:function(t){var e=t.oldPanel,i=e.prev();this._removeClass(e,"ui-accordion-content-active"),this._removeClass(i,"ui-accordion-header-active")._addClass(i,"ui-accordion-header-collapsed"),
// Work around for rendering bug in IE (#5421)
e.length&&(e.parent()[0].className=e.parent()[0].className),this._trigger("activate",null,t)}}),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
/*!
 * jQuery UI Accordion 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Accordion
//>>group: Widgets
// jscs:disable maximumLineLength
//>>description: Displays collapsible content panels for presenting information in a limited amount of space.
// jscs:enable maximumLineLength
//>>docs: http://api.jqueryui.com/accordion/
//>>demos: http://jqueryui.com/accordion/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/accordion.css
//>>css.theme: ../../themes/base/theme.css
var c=!1;t(document).on("mouseup",(function(){c=!1}));var u,d;
// Internal use only
t.widget("ui.mouse",{version:"1.12.1",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.on("mousedown."+this.widgetName,(function(t){return e._mouseDown(t)})).on("click."+this.widgetName,(function(i){if(!0===t.data(i.target,e.widgetName+".preventClickEvent"))return t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1})),this.started=!1},
// TODO: make sure destroying one instance of mouse doesn't mess with
// other instances of mouse
_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){
// don't let more than one widget handle mouseStart
if(!c){this._mouseMoved=!1,
// We may have missed mouseup (out of window)
this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var i=this,s=1===e.which,
// event.target.nodeName works around a bug in IE 8 with
// disabled inputs (#7620)
n=!("string"!=typeof this.options.cancel||!e.target.nodeName)&&t(e.target).closest(this.options.cancel).length;return!(s&&!n&&this._mouseCapture(e))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout((function(){i.mouseDelayMet=!0}),this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=!1!==this._mouseStart(e),!this._mouseStarted)?(e.preventDefault(),!0):(
// Click event may never have fired (Gecko & Opera)
!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),
// These delegates are required to keep context
this._mouseMoveDelegate=function(t){return i._mouseMove(t)},this._mouseUpDelegate=function(t){return i._mouseUp(t)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),c=!0,!0))}},_mouseMove:function(e){
// Only check for mouseups outside the document if you've moved inside the document
// at least once. This prevents the firing of mouseup in the case of IE<9, which will
// fire a mousemove event if content is placed under the cursor. See #7778
// Support: IE <9
if(this._mouseMoved){
// IE mouseup check - mouseup happened when mouse was out of window
if(t.ui.ie&&(!document.documentMode||document.documentMode<9)&&!e.button)return this._mouseUp(e);
// Iframe mouseup check - mouseup occurred in another document
if(!e.which)
// Support: Safari <=8 - 9
// Safari sets which to 0 if you press any of the following keys
// during a drag (#14461)
if(e.originalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,e),this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,c=!1,e.preventDefault()},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},
// These are placeholder methods, to be overriden by extending plugin
_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),t.ui.escapeSelector=(u=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g,function(t){return t.replace(u,"\\$1")}),t.ui.safeActiveElement=function(t){var e;
// Support: IE 9 only
// IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
try{e=t.activeElement}catch(i){e=t.body}
// Support: IE 9 - 11 only
// IE may return null instead of an element
// Interestingly, this only seems to occur when NOT in an iframe
return e||(e=t.body),
// Support: IE 11 only
// IE11 returns a seemingly empty object in some cases when accessing
// document.activeElement from an <iframe>
e.nodeName||(e=t.body),e};
/*!
 * jQuery UI Tabs 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
//>>label: Tabs
//>>group: Widgets
//>>description: Transforms a set of container elements into a tab structure.
//>>docs: http://api.jqueryui.com/tabs/
//>>demos: http://jqueryui.com/tabs/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/tabs.css
//>>css.theme: ../../themes/base/theme.css
t.widget("ui.tabs",{version:"1.12.1",delay:300,options:{active:null,classes:{"ui-tabs":"ui-corner-all","ui-tabs-nav":"ui-corner-all","ui-tabs-panel":"ui-corner-bottom","ui-tabs-tab":"ui-corner-top"},collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,
// Callbacks
activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:(d=/#.*$/,function(t){var e,i;e=t.href.replace(d,""),i=location.href.replace(d,"");
// Decoding may throw an error if the URL isn't UTF-8 (#9518)
try{e=decodeURIComponent(e)}catch(t){}try{i=decodeURIComponent(i)}catch(t){}return t.hash.length>1&&e===i}),_create:function(){var e=this,i=this.options;this.running=!1,this._addClass("ui-tabs","ui-widget ui-widget-content"),this._toggleClass("ui-tabs-collapsible",null,i.collapsible),this._processTabs(),i.active=this._initialActive(),
// Take disabling tabs via class attribute from HTML
// into account and update option properly.
t.isArray(i.disabled)&&(i.disabled=t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"),(function(t){return e.tabs.index(t)})))).sort()),
// Check for length avoids error when initializing empty list
!1!==this.options.active&&this.anchors.length?this.active=this._findActive(i.active):this.active=t(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var e=this.options.active,i=this.options.collapsible,s=location.hash.substring(1);return null===e&&(
// check the fragment identifier in the URL
s&&this.tabs.each((function(i,n){if(t(n).attr("aria-controls")===s)return e=i,!1})),
// Check for a tab marked active via a class
null===e&&(e=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),
// No active tab, set to false
null!==e&&-1!==e||(e=!!this.tabs.length&&0)),
// Handle numbers: negative, out of range
!1!==e&&-1===(e=this.tabs.index(this.tabs.eq(e)))&&(e=!i&&0),
// Don't allow collapsible: false and active: false
!i&&!1===e&&this.anchors.length&&(e=0),e},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):t()}},_tabKeydown:function(e){var i=t(t.ui.safeActiveElement(this.document[0])).closest("li"),s=this.tabs.index(i),n=!0;if(!this._handlePageNav(e)){switch(e.keyCode){case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:s++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:n=!1,s--;break;case t.ui.keyCode.END:s=this.anchors.length-1;break;case t.ui.keyCode.HOME:s=0;break;case t.ui.keyCode.SPACE:
// Activate only, no collapsing
return e.preventDefault(),clearTimeout(this.activating),void this._activate(s);case t.ui.keyCode.ENTER:
// Toggle (cancel delayed activation, allow collapsing)
return e.preventDefault(),clearTimeout(this.activating),void
// Determine if we should collapse or activate
this._activate(s!==this.options.active&&s);default:return}
// Focus the appropriate tab, based on which key was pressed
e.preventDefault(),clearTimeout(this.activating),s=this._focusNextTab(s,n),
// Navigating with control/command key will prevent automatic activation
e.ctrlKey||e.metaKey||(
// Update aria-selected immediately so that AT think the tab is already selected.
// Otherwise AT may confuse the user by stating that they need to activate the tab,
// but the tab will already be activated by the time the announcement finishes.
i.attr("aria-selected","false"),this.tabs.eq(s).attr("aria-selected","true"),this.activating=this._delay((function(){this.option("active",s)}),this.delay))}},_panelKeydown:function(e){this._handlePageNav(e)||
// Ctrl+up moves focus to the current tab
e.ctrlKey&&e.keyCode===t.ui.keyCode.UP&&(e.preventDefault(),this.active.trigger("focus"))},
// Alt+page up/down moves focus to the previous/next tab (and activates)
_handlePageNav:function(e){return e.altKey&&e.keyCode===t.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):e.altKey&&e.keyCode===t.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(e,i){var s=this.tabs.length-1;for(;-1!==t.inArray((e>s&&(e=0),e<0&&(e=s),e),this.options.disabled);)e=i?e+1:e-1;return e},_focusNextTab:function(t,e){return t=this._findNextTab(t,e),this.tabs.eq(t).trigger("focus"),t},_setOption:function(t,e){"active"!==t?(this._super(t,e),"collapsible"===t&&(this._toggleClass("ui-tabs-collapsible",null,e),
// Setting collapsible: false while collapsed; open first panel
e||!1!==this.options.active||this._activate(0)),"event"===t&&this._setupEvents(e),"heightStyle"===t&&this._setupHeightStyle(e)):
// _activate() will handle invalid values and update this.options
this._activate(e)},_sanitizeSelector:function(t){return t?t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var e=this.options,i=this.tablist.children(":has(a[href])");
// Get disabled tabs from class attribute from HTML
// this will get converted to a boolean if needed in _refresh()
e.disabled=t.map(i.filter(".ui-state-disabled"),(function(t){return i.index(t)})),this._processTabs(),
// Was collapsed or no tabs
!1!==e.active&&this.anchors.length?this.active.length&&!t.contains(this.tablist[0],this.active[0])?
// all remaining tabs are disabled
this.tabs.length===e.disabled.length?(e.active=!1,this.active=t()):this._activate(this._findNextTab(Math.max(0,e.active-1),!1)):
// make sure active index is correct
e.active=this.tabs.index(this.active):(e.active=!1,this.active=t()),this._refresh()},_refresh:function(){this._setOptionDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),
// Make sure one tab is in the tab order
this.active.length?(this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._addClass(this.active,"ui-tabs-active","ui-state-active"),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var e=this,i=this.tabs,s=this.anchors,n=this.panels;this.tablist=this._getList().attr("role","tablist"),this._addClass(this.tablist,"ui-tabs-nav","ui-helper-reset ui-helper-clearfix ui-widget-header"),
// Prevent users from focusing disabled tabs via click
this.tablist.on("mousedown"+this.eventNamespace,"> li",(function(e){t(this).is(".ui-state-disabled")&&e.preventDefault()})).on("focus"+this.eventNamespace,".ui-tabs-anchor",(function(){t(this).closest("li").is(".ui-state-disabled")&&this.blur()})),this.tabs=this.tablist.find("> li:has(a[href])").attr({role:"tab",tabIndex:-1}),this._addClass(this.tabs,"ui-tabs-tab","ui-state-default"),this.anchors=this.tabs.map((function(){return t("a",this)[0]})).attr({role:"presentation",tabIndex:-1}),this._addClass(this.anchors,"ui-tabs-anchor"),this.panels=t(),this.anchors.each((function(i,s){var n,a,o,r=t(s).uniqueId().attr("id"),h=t(s).closest("li"),l=h.attr("aria-controls");
// Inline tab
e._isLocal(s)?(o=(n=s.hash).substring(1),a=e.element.find(e._sanitizeSelector(n))):(
// If the tab doesn't already have aria-controls,
// generate an id by using a throw-away element
n="#"+(o=h.attr("aria-controls")||t({}).uniqueId()[0].id),(a=e.element.find(n)).length||(a=e._createPanel(o)).insertAfter(e.panels[i-1]||e.tablist),a.attr("aria-live","polite")),a.length&&(e.panels=e.panels.add(a)),l&&h.data("ui-tabs-aria-controls",l),h.attr({"aria-controls":o,"aria-labelledby":r}),a.attr("aria-labelledby",r)})),this.panels.attr("role","tabpanel"),this._addClass(this.panels,"ui-tabs-panel","ui-widget-content"),
// Avoid memory leaks (#10056)
i&&(this._off(i.not(this.tabs)),this._off(s.not(this.anchors)),this._off(n.not(this.panels)))},
// Allow overriding how to find the list for rare usage scenarios (#7715)
_getList:function(){return this.tablist||this.element.find("ol, ul").eq(0)},_createPanel:function(e){return t("<div>").attr("id",e).data("ui-tabs-destroy",!0)},_setOptionDisabled:function(e){var i,s,n;
// Disable tabs
for(t.isArray(e)&&(e.length?e.length===this.anchors.length&&(e=!0):e=!1),n=0;s=this.tabs[n];n++)i=t(s),!0===e||-1!==t.inArray(n,e)?(i.attr("aria-disabled","true"),this._addClass(i,null,"ui-state-disabled")):(i.removeAttr("aria-disabled"),this._removeClass(i,null,"ui-state-disabled"));this.options.disabled=e,this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!0===e)},_setupEvents:function(e){var i={};e&&t.each(e.split(" "),(function(t,e){i[e]="_eventHandler"})),this._off(this.anchors.add(this.tabs).add(this.panels)),
// Always prevent the default action, even when disabled
this._on(!0,this.anchors,{click:function(t){t.preventDefault()}}),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(e){var i,s=this.element.parent();"fill"===e?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each((function(){var e=t(this),s=e.css("position");"absolute"!==s&&"fixed"!==s&&(i-=e.outerHeight(!0))})),this.element.children().not(this.panels).each((function(){i-=t(this).outerHeight(!0)})),this.panels.each((function(){t(this).height(Math.max(0,i-t(this).innerHeight()+t(this).height()))})).css("overflow","auto")):"auto"===e&&(i=0,this.panels.each((function(){i=Math.max(i,t(this).height("").height())})).height(i))},_eventHandler:function(e){var i=this.options,s=this.active,n=t(e.currentTarget).closest("li"),a=n[0]===s[0],o=a&&i.collapsible,r=o?t():this._getPanelForTab(n),h=s.length?this._getPanelForTab(s):t(),l={oldTab:s,oldPanel:h,newTab:o?t():n,newPanel:r};e.preventDefault(),n.hasClass("ui-state-disabled")||
// tab is already loading
n.hasClass("ui-tabs-loading")||
// can't switch durning an animation
this.running||
// click on active header, but not collapsible
a&&!i.collapsible||
// allow canceling activation
!1===this._trigger("beforeActivate",e,l)||(i.active=!o&&this.tabs.index(n),this.active=a?t():n,this.xhr&&this.xhr.abort(),h.length||r.length||t.error("jQuery UI Tabs: Mismatching fragment identifier."),r.length&&this.load(this.tabs.index(n),e),this._toggle(e,l))},
// Handles show/hide for selecting tabs
_toggle:function(e,i){var s=this,n=i.newPanel,a=i.oldPanel;function o(){s.running=!1,s._trigger("activate",e,i)}function r(){s._addClass(i.newTab.closest("li"),"ui-tabs-active","ui-state-active"),n.length&&s.options.show?s._show(n,s.options.show,o):(n.show(),o())}
// Start out by hiding, then showing, then completing
this.running=!0,a.length&&this.options.hide?this._hide(a,this.options.hide,(function(){s._removeClass(i.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),r()})):(this._removeClass(i.oldTab.closest("li"),"ui-tabs-active","ui-state-active"),a.hide(),r()),a.attr("aria-hidden","true"),i.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),
// If we're switching tabs, remove the old tab from the tab order.
// If we're opening from collapsed state, remove the previous tab from the tab order.
// If we're collapsing, then keep the collapsing tab in the tab order.
n.length&&a.length?i.oldTab.attr("tabIndex",-1):n.length&&this.tabs.filter((function(){return 0===t(this).attr("tabIndex")})).attr("tabIndex",-1),n.attr("aria-hidden","false"),i.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(e){var i,s=this._findActive(e);
// Trying to activate the already active panel
s[0]!==this.active[0]&&(
// Trying to collapse, simulate a click on the current active header
s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:t.noop}))},_findActive:function(e){return!1===e?t():this.tabs.eq(e)},_getIndex:function(e){
// meta-function to give users option to provide a href string instead of a numerical index.
return"string"==typeof e&&(e=this.anchors.index(this.anchors.filter("[href$='"+t.ui.escapeSelector(e)+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.tablist.removeAttr("role").off(this.eventNamespace),this.anchors.removeAttr("role tabIndex").removeUniqueId(),this.tabs.add(this.panels).each((function(){t.data(this,"ui-tabs-destroy")?t(this).remove():t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")})),this.tabs.each((function(){var e=t(this),i=e.data("ui-tabs-aria-controls");i?e.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):e.removeAttr("aria-controls")})),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(e){var i=this.options.disabled;!1!==i&&(void 0===e?i=!1:(e=this._getIndex(e),i=t.isArray(i)?t.map(i,(function(t){return t!==e?t:null})):t.map(this.tabs,(function(t,i){return i!==e?i:null}))),this._setOptionDisabled(i))},disable:function(e){var i=this.options.disabled;if(!0!==i){if(void 0===e)i=!0;else{if(e=this._getIndex(e),-1!==t.inArray(e,i))return;i=t.isArray(i)?t.merge([e],i).sort():[e]}this._setOptionDisabled(i)}},load:function(e,i){e=this._getIndex(e);var s=this,n=this.tabs.eq(e),a=n.find(".ui-tabs-anchor"),o=this._getPanelForTab(n),r={tab:n,panel:o},h=function(t,e){"abort"===e&&s.panels.stop(!1,!0),s._removeClass(n,"ui-tabs-loading"),o.removeAttr("aria-busy"),t===s.xhr&&delete s.xhr};
// Not remote
this._isLocal(a[0])||(this.xhr=t.ajax(this._ajaxSettings(a,i,r)),
// Support: jQuery <1.8
// jQuery <1.8 returns false if the request is canceled in beforeSend,
// but as of 1.8, $.ajax() always returns a jqXHR object.
this.xhr&&"canceled"!==this.xhr.statusText&&(this._addClass(n,"ui-tabs-loading"),o.attr("aria-busy","true"),this.xhr.done((function(t,e,n){
// support: jQuery <1.8
// http://bugs.jquery.com/ticket/11778
setTimeout((function(){o.html(t),s._trigger("load",i,r),h(n,e)}),1)})).fail((function(t,e){
// support: jQuery <1.8
// http://bugs.jquery.com/ticket/11778
setTimeout((function(){h(t,e)}),1)}))))},_ajaxSettings:function(e,i,s){var n=this;return{
// Support: IE <11 only
// Strip any hash that exists to prevent errors with the Ajax request
url:e.attr("href").replace(/#.*$/,""),beforeSend:function(e,a){return n._trigger("beforeLoad",i,t.extend({jqXHR:e,ajaxSettings:a},s))}}},_getPanelForTab:function(e){var i=t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}}),
// DEPRECATED
// TODO: Switch return back to widget declaration at top of file when this is removed
!1!==t.uiBackCompat&&
// Backcompat for ui-tab class (now ui-tabs-tab)
t.widget("ui.tabs",t.ui.tabs,{_processTabs:function(){this._superApply(arguments),this._addClass(this.tabs,"ui-tab")}});t.ui.tabs}));