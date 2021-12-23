/*! For license information please see script.js.LICENSE.txt */
(()=>{"use strict";var e={733:(e,t,r)=>{r.r(t),r.d(t,{Properties:()=>n,VariableDescriptor:()=>o,bootstrapExtra:()=>J,findLayerBoundaries:()=>p,findLayersBoundaries:()=>u,getAllVariables:()=>s,getLayersMap:()=>l,initDoors:()=>$,initPropertiesTemplates:()=>L,initVariableActionLayer:()=>F});class n{constructor(e){this.properties=null!=e?e:[]}get(e){const t=this.properties.filter((t=>t.name===e)).map((e=>e.value));if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(0!==t.length)return t[0]}getString(e){return this.getByType(e,"string")}getNumber(e){return this.getByType(e,"number")}getBoolean(e){return this.getByType(e,"boolean")}getByType(e,t){const r=this.get(e);if(void 0!==r){if(typeof r!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return r}}mustGetString(e){return this.mustGetByType(e,"string")}mustGetNumber(e){return this.mustGetByType(e,"number")}mustGetBoolean(e){return this.mustGetByType(e,"boolean")}mustGetByType(e,t){const r=this.get(e);if(void 0===r)throw new Error('Property "'+e+'" is missing');if(typeof r!==t)throw new Error('Expected property "'+e+'" to have type "'+t+'"');return r}getType(e){const t=this.properties.filter((t=>t.name===e)).map((e=>e.type));if(t.length>1)throw new Error('Expected only one property to be named "'+e+'"');if(0!==t.length)return t[0]}}class o{constructor(e){this.name=e.name,this.x=e.x,this.y=e.y,this.properties=new n(e.properties)}get isReadable(){const e=this.properties.getString("readableBy");return!e||WA.player.tags.includes(e)}get isWritable(){const e=this.properties.getString("writableBy");return!e||WA.player.tags.includes(e)}}async function s(){const e=await WA.room.getTiledMap(),t=new Map;return i(e.layers,t),t}function i(e,t){for(const r of e)if("objectgroup"===r.type)for(const e of r.objects)"variable"===e.type&&t.set(e.name,new o(e));else"group"===r.type&&i(r.layers,t)}let a;async function l(){return void 0===a&&(a=async function(){return function(e){const t=new Map;return c(e.layers,"",t),t}(await WA.room.getTiledMap())}()),a}function c(e,t,r){for(const n of e)"group"===n.type?c(n.layers,t+n.name+"/",r):(n.name=t+n.name,r.set(n.name,n))}function p(e){let t=1/0,r=1/0,n=0,o=0;const s=e.data;if("string"==typeof s)throw new Error("Unsupported tile layer data stored as string instead of CSV");for(let i=0;i<e.height;i++)for(let a=0;a<e.width;a++)0!==s[a+i*e.width]&&(t=Math.min(t,a),o=Math.max(o,a),r=Math.min(r,i),n=Math.max(n,i));return{top:r,left:t,right:o+1,bottom:n+1}}function u(e){let t=1/0,r=1/0,n=0,o=0;for(const s of e){const e=p(s);e.left<t&&(t=e.left),e.top<r&&(r=e.top),e.right>o&&(o=e.right),e.bottom>n&&(n=e.bottom)}return{top:r,left:t,right:o,bottom:n}}var g=Object.prototype.toString,f=Array.isArray||function(e){return"[object Array]"===g.call(e)};function h(e){return"function"==typeof e}function d(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function y(e,t){return null!=e&&"object"==typeof e&&t in e}var m=RegExp.prototype.test,v=/\S/;var b={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},w=/\s*/,A=/\s+/,W=/\s*=/,S=/\s*\}/,k=/#|\^|\/|>|\{|&|=|!/;function x(e){this.string=e,this.tail=e,this.pos=0}function C(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function E(){this.templateCache={_cache:{},set:function(e,t){this._cache[e]=t},get:function(e){return this._cache[e]},clear:function(){this._cache={}}}}x.prototype.eos=function(){return""===this.tail},x.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var r=t[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r},x.prototype.scanUntil=function(e){var t,r=this.tail.search(e);switch(r){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,r),this.tail=this.tail.substring(r)}return this.pos+=t.length,t},C.prototype.push=function(e){return new C(e,this)},C.prototype.lookup=function(e){var t,r,n,o=this.cache;if(o.hasOwnProperty(e))t=o[e];else{for(var s,i,a,l=this,c=!1;l;){if(e.indexOf(".")>0)for(s=l.view,i=e.split("."),a=0;null!=s&&a<i.length;)a===i.length-1&&(c=y(s,i[a])||(r=s,n=i[a],null!=r&&"object"!=typeof r&&r.hasOwnProperty&&r.hasOwnProperty(n))),s=s[i[a++]];else s=l.view[e],c=y(l.view,e);if(c){t=s;break}l=l.parent}o[e]=t}return h(t)&&(t=t.call(this.view)),t},E.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},E.prototype.parse=function(e,t){var r=this.templateCache,n=e+":"+(t||T.tags).join(":"),o=void 0!==r,s=o?r.get(n):void 0;return null==s&&(s=function(e,t){if(!e)return[];var r,n,o,s,i=!1,a=[],l=[],c=[],p=!1,u=!1,g="",h=0;function y(){if(p&&!u)for(;c.length;)delete l[c.pop()];else c=[];p=!1,u=!1}function b(e){if("string"==typeof e&&(e=e.split(A,2)),!f(e)||2!==e.length)throw new Error("Invalid tags: "+e);r=new RegExp(d(e[0])+"\\s*"),n=new RegExp("\\s*"+d(e[1])),o=new RegExp("\\s*"+d("}"+e[1]))}b(t||T.tags);for(var C,E,M,P,V,L,O=new x(e);!O.eos();){if(C=O.pos,M=O.scanUntil(r))for(var B=0,G=M.length;B<G;++B)s=P=M.charAt(B),function(e,t){return m.call(e,t)}(v,s)?(u=!0,i=!0,g+=" "):(c.push(l.length),g+=P),l.push(["text",P,C,C+1]),C+=1,"\n"===P&&(y(),g="",h=0,i=!1);if(!O.scan(r))break;if(p=!0,E=O.scan(k)||"name",O.scan(w),"="===E?(M=O.scanUntil(W),O.scan(W),O.scanUntil(n)):"{"===E?(M=O.scanUntil(o),O.scan(S),O.scanUntil(n),E="&"):M=O.scanUntil(n),!O.scan(n))throw new Error("Unclosed tag at "+O.pos);if(V=">"==E?[E,M,C,O.pos,g,h,i]:[E,M,C,O.pos],h++,l.push(V),"#"===E||"^"===E)a.push(V);else if("/"===E){if(!(L=a.pop()))throw new Error('Unopened section "'+M+'" at '+C);if(L[1]!==M)throw new Error('Unclosed section "'+L[1]+'" at '+C)}else"name"===E||"{"===E||"&"===E?u=!0:"="===E&&b(M)}if(y(),L=a.pop())throw new Error('Unclosed section "'+L[1]+'" at '+O.pos);return function(e){for(var t,r=[],n=r,o=[],s=0,i=e.length;s<i;++s)switch((t=e[s])[0]){case"#":case"^":n.push(t),o.push(t),n=t[4]=[];break;case"/":o.pop()[5]=t[2],n=o.length>0?o[o.length-1][4]:r;break;default:n.push(t)}return r}(function(e){for(var t,r,n=[],o=0,s=e.length;o<s;++o)(t=e[o])&&("text"===t[0]&&r&&"text"===r[0]?(r[1]+=t[1],r[3]=t[3]):(n.push(t),r=t));return n}(l))}(e,t),o&&r.set(n,s)),s},E.prototype.render=function(e,t,r,n){var o=this.getConfigTags(n),s=this.parse(e,o),i=t instanceof C?t:new C(t,void 0);return this.renderTokens(s,i,r,e,n)},E.prototype.renderTokens=function(e,t,r,n,o){for(var s,i,a,l="",c=0,p=e.length;c<p;++c)a=void 0,"#"===(i=(s=e[c])[0])?a=this.renderSection(s,t,r,n,o):"^"===i?a=this.renderInverted(s,t,r,n,o):">"===i?a=this.renderPartial(s,t,r,o):"&"===i?a=this.unescapedValue(s,t):"name"===i?a=this.escapedValue(s,t,o):"text"===i&&(a=this.rawValue(s)),void 0!==a&&(l+=a);return l},E.prototype.renderSection=function(e,t,r,n,o){var s=this,i="",a=t.lookup(e[1]);if(a){if(f(a))for(var l=0,c=a.length;l<c;++l)i+=this.renderTokens(e[4],t.push(a[l]),r,n,o);else if("object"==typeof a||"string"==typeof a||"number"==typeof a)i+=this.renderTokens(e[4],t.push(a),r,n,o);else if(h(a)){if("string"!=typeof n)throw new Error("Cannot use higher-order sections without the original template");null!=(a=a.call(t.view,n.slice(e[3],e[5]),(function(e){return s.render(e,t,r,o)})))&&(i+=a)}else i+=this.renderTokens(e[4],t,r,n,o);return i}},E.prototype.renderInverted=function(e,t,r,n,o){var s=t.lookup(e[1]);if(!s||f(s)&&0===s.length)return this.renderTokens(e[4],t,r,n,o)},E.prototype.indentPartial=function(e,t,r){for(var n=t.replace(/[^ \t]/g,""),o=e.split("\n"),s=0;s<o.length;s++)o[s].length&&(s>0||!r)&&(o[s]=n+o[s]);return o.join("\n")},E.prototype.renderPartial=function(e,t,r,n){if(r){var o=this.getConfigTags(n),s=h(r)?r(e[1]):r[e[1]];if(null!=s){var i=e[6],a=e[5],l=e[4],c=s;0==a&&l&&(c=this.indentPartial(s,l,i));var p=this.parse(c,o);return this.renderTokens(p,t,r,c,n)}}},E.prototype.unescapedValue=function(e,t){var r=t.lookup(e[1]);if(null!=r)return r},E.prototype.escapedValue=function(e,t,r){var n=this.getConfigEscape(r)||T.escape,o=t.lookup(e[1]);if(null!=o)return"number"==typeof o&&n===T.escape?String(o):n(o)},E.prototype.rawValue=function(e){return e[1]},E.prototype.getConfigTags=function(e){return f(e)?e:e&&"object"==typeof e?e.tags:void 0},E.prototype.getConfigEscape=function(e){return e&&"object"==typeof e&&!f(e)?e.escape:void 0};var T={name:"mustache.js",version:"4.2.0",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(e){M.templateCache=e},get templateCache(){return M.templateCache}},M=new E;T.clearCache=function(){return M.clearCache()},T.parse=function(e,t){return M.parse(e,t)},T.render=function(e,t,r,n){if("string"!=typeof e)throw new TypeError('Invalid template! Template should be a "string" but "'+(f(o=e)?"array":typeof o)+'" was given as the first argument for mustache#render(template, view, partials)');var o;return M.render(e,t,r,n)},T.escape=function(e){return String(e).replace(/[&<>"'`=\/]/g,(function(e){return b[e]}))},T.Scanner=x,T.Context=C,T.Writer=E;const P=T;class V{constructor(e,t){this.template=e,this.state=t,this.ast=P.parse(e)}getValue(){return void 0===this.value&&(this.value=P.render(this.template,this.state)),this.value}onChange(e){const t=[];for(const r of this.getUsedVariables().values())t.push(this.state.onVariableChange(r).subscribe((()=>{const t=P.render(this.template,this.state);t!==this.value&&(this.value=t,e(this.value))})));return{unsubscribe:()=>{for(const e of t)e.unsubscribe()}}}isPureString(){return 0===this.ast.length||1===this.ast.length&&"text"===this.ast[0][0]}getUsedVariables(){const e=new Set;return this.recursiveGetUsedVariables(this.ast,e),e}recursiveGetUsedVariables(e,t){for(const r of e){const e=r[0],n=r[1],o=r[4];["name","&","#","^"].includes(e)&&t.add(n),void 0!==o&&"string"!=typeof o&&this.recursiveGetUsedVariables(o,t)}}}async function L(){var e;const t=await l();for(const[r,n]of t.entries()){const t=null!==(e=n.properties)&&void 0!==e?e:[];for(const e of t){if("int"===e.type||"bool"===e.type||"object"===e.type||"string"!=typeof e.value)continue;const t=new V(e.value,WA.state);if(t.isPureString())continue;const n=t.getValue();O(r,e.name,n),t.onChange((t=>{O(r,e.name,t)}))}}}function O(e,t,r){WA.room.setProperty(e,t,r),"visible"===t&&(r?WA.room.showLayer(e):WA.room.hideLayer(e))}const B="https://unpkg.com/@workadventure/scripting-api-extra@1.1.1/dist";let G,U,j=0,Z=0;function R(e){if(WA.state[e.name]){let t=e.properties.mustGetString("openLayer");for(const e of t.split("\n"))WA.room.showLayer(e);t=e.properties.mustGetString("closeLayer");for(const e of t.split("\n"))WA.room.hideLayer(e)}else{let t=e.properties.mustGetString("openLayer");for(const e of t.split("\n"))WA.room.hideLayer(e);t=e.properties.mustGetString("closeLayer");for(const e of t.split("\n"))WA.room.showLayer(e)}}function z(e){return e.map((e=>G.get(e))).filter((e=>"tilelayer"===(null==e?void 0:e.type)))}function I(e){const t=u(z(e)),r=32*((t.right-t.left)/2+t.left),n=32*((t.bottom-t.top)/2+t.top);return Math.sqrt(Math.pow(j-r,2)+Math.pow(Z-n,2))}function _(e){WA.state.onVariableChange(e.name).subscribe((()=>{WA.state[e.name]?function(e){const t=e.properties.getString("openSound"),r=e.properties.getNumber("soundRadius");let n=1;if(r){const t=I(e.properties.mustGetString("openLayer").split("\n"));if(t>r)return;n=1-t/r}t&&WA.sound.loadSound(t).play({volume:n})}(e):function(e){const t=e.properties.getString("closeSound"),r=e.properties.getNumber("soundRadius");let n=1;if(r){const t=I(e.properties.mustGetString("closeLayer").split("\n"));if(t>r)return;n=1-t/r}t&&WA.sound.loadSound(t).play({volume:n})}(e),R(e)})),R(e)}function N(e,t,r,n){const o=e.name;let s,i,a=!1;const l=r.getString("zone");if(!l)throw new Error('Missing "zone" property on doorstep layer "'+o+'"');const c=r.getString("tag");let p=!0;c&&!WA.player.tags.includes(c)&&(p=!1);const g=!!c;function f(){var e;s&&s.remove(),s=WA.ui.displayActionMessage({message:null!==(e=r.getString("closeTriggerMessage"))&&void 0!==e?e:"Press SPACE to close the door",callback:()=>{WA.state[t.name]=!1,h()}})}function h(){var e;s&&s.remove(),s=WA.ui.displayActionMessage({message:null!==(e=r.getString("openTriggerMessage"))&&void 0!==e?e:"Press SPACE to open the door",callback:()=>{WA.state[t.name]=!0,f()}})}function d(){i&&(WA.room.website.delete(i.name),i=void 0)}WA.room.onEnterZone(l,(()=>{a=!0,r.getBoolean("autoOpen")&&p?WA.state[t.name]=!0:WA.state[t.name]||(!g||p)&&g||!r.getString("code")&&!r.getString("codeVariable")?p&&(WA.state[t.name]?f():h()):function(e){const r=u(z(t.properties.mustGetString("closeLayer").split("\n")));i=WA.room.website.create({name:"doorKeypad"+e,url:n+"/keypad.html#"+encodeURIComponent(e),position:{x:32*r.right,y:32*r.top,width:96,height:128},allowApi:!0})}(o)})),WA.room.onLeaveZone(l,(()=>{a=!1,r.getBoolean("autoClose")&&(WA.state[t.name]=!1),s&&s.remove(),d()})),WA.state.onVariableChange(t.name).subscribe((()=>{a&&(r.getBoolean("autoClose")||!0!==WA.state[t.name]||f(),i&&!0===WA.state[t.name]&&d(),r.getBoolean("autoOpen")||!1!==WA.state[t.name]||h())}))}function D(e){void 0===WA.state[e.name]&&(WA.state[e.name]=0),WA.state.onVariableChange(e.name).subscribe((()=>{WA.state[e.name]&&function(e){const t=e.properties.mustGetString("bellSound"),r=e.properties.getNumber("soundRadius");let n=1;if(r){const t=Math.sqrt(Math.pow(e.x-j,2)+Math.pow(e.y-Z,2));if(t>r)return;n=1-t/r}WA.sound.loadSound(t).play({volume:n})}(e)}))}function q(e,t){let r;const n=t.mustGetString("zone"),o=t.getString("bellPopup");WA.room.onEnterZone(n,(()=>{var n;o?r=WA.ui.openPopup(o,"",[{label:null!==(n=t.getString("bellButtonText"))&&void 0!==n?n:"Ring",callback:()=>{WA.state[e]=WA.state[e]+1}}]):WA.state[e]=WA.state[e]+1})),WA.room.onLeaveZone(n,(()=>{r&&(r.close(),r=void 0)}))}async function $(e){e=null!=e?e:B;const t=await s();G=await l();for(const e of t.values())e.properties.get("door")&&_(e),e.properties.get("bell")&&D(e);for(const r of G.values()){const o=new n(r.properties),s=o.getString("doorVariable");if(s&&"tilelayer"===r.type){const n=t.get(s);if(void 0===n)throw new Error('Cannot find variable "'+s+'" referred in the "doorVariable" property of layer "'+r.name+'"');N(r,n,o,e)}const i=o.getString("bellVariable");i&&q(i,o)}WA.player.onPlayerMove((e=>{j=e.x,Z=e.y}))}function F(e){const t=e.getString("bindVariable");if(t){const r=e.getString("zone");if(!r)throw new Error('A layer with a "bindVariable" property must ALSO have a "zone" property.');!function(e,t,r,n,o,s){s&&!WA.player.tags.includes(s)||(void 0!==r&&WA.room.onEnterZone(t,(()=>{o||(WA.state[e]=r)})),void 0!==n&&WA.room.onLeaveZone(t,(()=>{WA.state[e]=n})))}(t,r,e.get("enterValue"),e.get("leaveValue"),e.getString("triggerMessage"),e.getString("tag"))}}function H(e,t){let r;const n=t.getString("zone");if(!n)throw new Error('Missing "zone" property');const o=t.getString("openConfigAdminTag");let s=!0;function i(){WA.nav.closeCoWebSite()}o&&!WA.player.tags.includes(o)&&(s=!1),WA.room.onEnterZone(n,(()=>{const n=t.getString("openConfigTrigger");var o;s&&(n&&"onaction"===n?(r&&r.remove(),r=WA.ui.displayActionMessage({message:null!==(o=t.getString("openConfigTriggerMessage"))&&void 0!==o?o:"Press SPACE or touch here to configure",callback:()=>K(e)})):K(e))})),WA.room.onLeaveZone(n,(()=>{r?(r.remove(),i()):i()}))}function K(e){const t=e?"#"+e:"";WA.nav.openCoWebSite(B+"/configuration.html"+t,!0)}function J(){return WA.onInit().then((()=>{$().catch((e=>console.error(e))),async function(){const e=await l();for(const t of e.values())F(new n(t.properties))}().catch((e=>console.error(e))),async function(e){const t=await WA.room.getTiledMap();e=null!=e?e:B,U=await l();const r=t.layers.find((e=>"configuration"===e.name));if(r){const t=new n(r.properties).getString("tag");t&&!WA.player.tags.includes(t)||WA.ui.registerMenuCommand("Configure the room",(()=>{WA.nav.openCoWebSite(e+"/configuration.html",!0)}));for(const e of U.values()){const t=new n(e.properties),r=t.getString("openConfig");r&&"tilelayer"===e.type&&H(r,t)}}}().catch((e=>console.error(e))),L().catch((e=>console.error(e)))}))}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{let e;(0,r(733).bootstrapExtra)().catch((e=>console.error(e))),WA.room.onEnterZone("darkness",(()=>{let e=0,t=0;WA.player.onPlayerMove((r=>{let n=Math.round(r.x/32),o=Math.round(r.y/32);WA.room.setTiles([{x:e-1,y:t-1,tile:"darkOverlay",layer:"darkness"},{x:e-1,y:t,tile:"darkOverlay",layer:"darkness"},{x:e-1,y:t+1,tile:"darkOverlay",layer:"darkness"},{x:e,y:t-1,tile:"darkOverlay",layer:"darkness"},{x:e,y:t,tile:"darkOverlay",layer:"darkness"},{x:e,y:t+1,tile:"darkOverlay",layer:"darkness"},{x:e+1,y:t-1,tile:"darkOverlay",layer:"darkness"},{x:e+1,y:t,tile:"darkOverlay",layer:"darkness"},{x:e+1,y:t+1,tile:"darkOverlay",layer:"darkness"},{x:n-1,y:o-1,tile:"darkCircle0",layer:"darkness"},{x:n,y:o-1,tile:"darkCircle1",layer:"darkness"},{x:n+1,y:o-1,tile:"darkCircle2",layer:"darkness"},{x:n-1,y:o,tile:"darkCircle3",layer:"darkness"},{x:n,y:o,tile:"darkCircle4",layer:"darkness"},{x:n+1,y:o,tile:"darkCircle5",layer:"darkness"},{x:n-1,y:o+1,tile:"darkCircle6",layer:"darkness"},{x:n,y:o+1,tile:"darkCircle7",layer:"darkness"},{x:n+1,y:o+1,tile:"darkCircle8",layer:"darkness"}]),e=n,t=o}))})),WA.room.onEnterZone("customSound",(()=>{console.log("play custom Sound"),WA.sound.loadSound("sounds/depressed.mp3").play({volume:1})}));const t=new Date,n=t.getHours()+":"+t.getMinutes();WA.room.onEnterZone("clock",(()=>{e=WA.ui.openPopup("clockPopup","It's "+n,[])})),WA.room.onLeaveZone("clock",(function(){void 0!==e&&(e.close(),e=void 0)}))})()})();
//# sourceMappingURL=script.js.map