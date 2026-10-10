function T0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const o=Object.getOwnPropertyDescriptor(r,a);o&&Object.defineProperty(e,a,o.get?o:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();function I0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _d={exports:{}},Yi={},Wd={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _r=Symbol.for("react.element"),L0=Symbol.for("react.portal"),P0=Symbol.for("react.fragment"),R0=Symbol.for("react.strict_mode"),M0=Symbol.for("react.profiler"),z0=Symbol.for("react.provider"),O0=Symbol.for("react.context"),B0=Symbol.for("react.forward_ref"),F0=Symbol.for("react.suspense"),U0=Symbol.for("react.memo"),D0=Symbol.for("react.lazy"),cl=Symbol.iterator;function _0(e){return e===null||typeof e!="object"?null:(e=cl&&e[cl]||e["@@iterator"],typeof e=="function"?e:null)}var Qd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gd=Object.assign,Hd={};function Kn(e,t,n){this.props=e,this.context=t,this.refs=Hd,this.updater=n||Qd}Kn.prototype.isReactComponent={};Kn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Kn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vd(){}Vd.prototype=Kn.prototype;function es(e,t,n){this.props=e,this.context=t,this.refs=Hd,this.updater=n||Qd}var ts=es.prototype=new Vd;ts.constructor=es;Gd(ts,Kn.prototype);ts.isPureReactComponent=!0;var ul=Array.isArray,Kd=Object.prototype.hasOwnProperty,ns={current:null},Yd={key:!0,ref:!0,__self:!0,__source:!0};function qd(e,t,n){var r,a={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Kd.call(t,r)&&!Yd.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(l===1)a.children=n;else if(1<l){for(var d=Array(l),c=0;c<l;c++)d[c]=arguments[c+2];a.children=d}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)a[r]===void 0&&(a[r]=l[r]);return{$$typeof:_r,type:e,key:o,ref:s,props:a,_owner:ns.current}}function W0(e,t){return{$$typeof:_r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function rs(e){return typeof e=="object"&&e!==null&&e.$$typeof===_r}function Q0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var pl=/\/+/g;function ba(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Q0(""+e.key):t.toString(36)}function ui(e,t,n,r,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case _r:case L0:s=!0}}if(s)return s=e,a=a(s),e=r===""?"."+ba(s,0):r,ul(a)?(n="",e!=null&&(n=e.replace(pl,"$&/")+"/"),ui(a,t,n,"",function(c){return c})):a!=null&&(rs(a)&&(a=W0(a,n+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(pl,"$&/")+"/")+e)),t.push(a)),1;if(s=0,r=r===""?".":r+":",ul(e))for(var l=0;l<e.length;l++){o=e[l];var d=r+ba(o,l);s+=ui(o,t,n,d,a)}else if(d=_0(e),typeof d=="function")for(e=d.call(e),l=0;!(o=e.next()).done;)o=o.value,d=r+ba(o,l++),s+=ui(o,t,n,d,a);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Kr(e,t,n){if(e==null)return e;var r=[],a=0;return ui(e,r,"","",function(o){return t.call(n,o,a++)}),r}function G0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ee={current:null},pi={transition:null},H0={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:pi,ReactCurrentOwner:ns};function Jd(){throw Error("act(...) is not supported in production builds of React.")}D.Children={map:Kr,forEach:function(e,t,n){Kr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Kr(e,function(){t++}),t},toArray:function(e){return Kr(e,function(t){return t})||[]},only:function(e){if(!rs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};D.Component=Kn;D.Fragment=P0;D.Profiler=M0;D.PureComponent=es;D.StrictMode=R0;D.Suspense=F0;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H0;D.act=Jd;D.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Gd({},e.props),a=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=ns.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in t)Kd.call(t,d)&&!Yd.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&l!==void 0?l[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){l=Array(d);for(var c=0;c<d;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:_r,type:e.type,key:a,ref:o,props:r,_owner:s}};D.createContext=function(e){return e={$$typeof:O0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:z0,_context:e},e.Consumer=e};D.createElement=qd;D.createFactory=function(e){var t=qd.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:B0,render:e}};D.isValidElement=rs;D.lazy=function(e){return{$$typeof:D0,_payload:{_status:-1,_result:e},_init:G0}};D.memo=function(e,t){return{$$typeof:U0,type:e,compare:t===void 0?null:t}};D.startTransition=function(e){var t=pi.transition;pi.transition={};try{e()}finally{pi.transition=t}};D.unstable_act=Jd;D.useCallback=function(e,t){return Ee.current.useCallback(e,t)};D.useContext=function(e){return Ee.current.useContext(e)};D.useDebugValue=function(){};D.useDeferredValue=function(e){return Ee.current.useDeferredValue(e)};D.useEffect=function(e,t){return Ee.current.useEffect(e,t)};D.useId=function(){return Ee.current.useId()};D.useImperativeHandle=function(e,t,n){return Ee.current.useImperativeHandle(e,t,n)};D.useInsertionEffect=function(e,t){return Ee.current.useInsertionEffect(e,t)};D.useLayoutEffect=function(e,t){return Ee.current.useLayoutEffect(e,t)};D.useMemo=function(e,t){return Ee.current.useMemo(e,t)};D.useReducer=function(e,t,n){return Ee.current.useReducer(e,t,n)};D.useRef=function(e){return Ee.current.useRef(e)};D.useState=function(e){return Ee.current.useState(e)};D.useSyncExternalStore=function(e,t,n){return Ee.current.useSyncExternalStore(e,t,n)};D.useTransition=function(){return Ee.current.useTransition()};D.version="18.3.1";Wd.exports=D;var g=Wd.exports;const Fn=I0(g),V0=T0({__proto__:null,default:Fn},[g]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K0=g,Y0=Symbol.for("react.element"),q0=Symbol.for("react.fragment"),J0=Object.prototype.hasOwnProperty,X0=K0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Z0={key:!0,ref:!0,__self:!0,__source:!0};function Xd(e,t,n){var r,a={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)J0.call(t,r)&&!Z0.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Y0,type:e,key:o,ref:s,props:a,_owner:X0.current}}Yi.Fragment=q0;Yi.jsx=Xd;Yi.jsxs=Xd;_d.exports=Yi;var i=_d.exports,no={},Zd={exports:{}},_e={},ec={exports:{}},tc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,O){var B=S.length;S.push(O);e:for(;0<B;){var G=B-1>>>1,H=S[G];if(0<a(H,O))S[G]=O,S[B]=H,B=G;else break e}}function n(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var O=S[0],B=S.pop();if(B!==O){S[0]=B;e:for(var G=0,H=S.length,V=H>>>1;G<V;){var ke=2*(G+1)-1,Oe=S[ke],it=ke+1,bt=S[it];if(0>a(Oe,B))it<H&&0>a(bt,Oe)?(S[G]=bt,S[it]=B,G=it):(S[G]=Oe,S[ke]=B,G=ke);else if(it<H&&0>a(bt,B))S[G]=bt,S[it]=B,G=it;else break e}}return O}function a(S,O){var B=S.sortIndex-O.sortIndex;return B!==0?B:S.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var d=[],c=[],h=1,u=null,m=3,w=!1,y=!1,b=!1,j=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(S){for(var O=n(c);O!==null;){if(O.callback===null)r(c);else if(O.startTime<=S)r(c),O.sortIndex=O.expirationTime,t(d,O);else break;O=n(c)}}function $(S){if(b=!1,x(S),!y)if(n(d)!==null)y=!0,k(A);else{var O=n(c);O!==null&&z($,O.startTime-S)}}function A(S,O){y=!1,b&&(b=!1,f(v),v=-1),w=!0;var B=m;try{for(x(O),u=n(d);u!==null&&(!(u.expirationTime>O)||S&&!_());){var G=u.callback;if(typeof G=="function"){u.callback=null,m=u.priorityLevel;var H=G(u.expirationTime<=O);O=e.unstable_now(),typeof H=="function"?u.callback=H:u===n(d)&&r(d),x(O)}else r(d);u=n(d)}if(u!==null)var V=!0;else{var ke=n(c);ke!==null&&z($,ke.startTime-O),V=!1}return V}finally{u=null,m=B,w=!1}}var E=!1,N=null,v=-1,I=5,L=-1;function _(){return!(e.unstable_now()-L<I)}function se(){if(N!==null){var S=e.unstable_now();L=S;var O=!0;try{O=N(!0,S)}finally{O?ge():(E=!1,N=null)}}else E=!1}var ge;if(typeof p=="function")ge=function(){p(se)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,yt=le.port2;le.port1.onmessage=se,ge=function(){yt.postMessage(null)}}else ge=function(){j(se,0)};function k(S){N=S,E||(E=!0,ge())}function z(S,O){v=j(function(){S(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,k(A))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(S){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var B=m;m=O;try{return S()}finally{m=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,O){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var B=m;m=S;try{return O()}finally{m=B}},e.unstable_scheduleCallback=function(S,O,B){var G=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?G+B:G):B=G,S){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=B+H,S={id:h++,callback:O,priorityLevel:S,startTime:B,expirationTime:H,sortIndex:-1},B>G?(S.sortIndex=B,t(c,S),n(d)===null&&S===n(c)&&(b?(f(v),v=-1):b=!0,z($,B-G))):(S.sortIndex=H,t(d,S),y||w||(y=!0,k(A))),S},e.unstable_shouldYield=_,e.unstable_wrapCallback=function(S){var O=m;return function(){var B=m;m=O;try{return S.apply(this,arguments)}finally{m=B}}}})(tc);ec.exports=tc;var ep=ec.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp=g,De=ep;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nc=new Set,jr={};function pn(e,t){Un(e,t),Un(e+"Capture",t)}function Un(e,t){for(jr[e]=t,e=0;e<t.length;e++)nc.add(t[e])}var mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ro=Object.prototype.hasOwnProperty,np=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fl={},hl={};function rp(e){return ro.call(hl,e)?!0:ro.call(fl,e)?!1:np.test(e)?hl[e]=!0:(fl[e]=!0,!1)}function ip(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ap(e,t,n,r){if(t===null||typeof t>"u"||ip(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Te(e,t,n,r,a,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var ve={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ve[e]=new Te(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ve[t]=new Te(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ve[e]=new Te(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ve[e]=new Te(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ve[e]=new Te(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ve[e]=new Te(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ve[e]=new Te(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ve[e]=new Te(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ve[e]=new Te(e,5,!1,e.toLowerCase(),null,!1,!1)});var is=/[\-:]([a-z])/g;function as(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(is,as);ve[t]=new Te(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(is,as);ve[t]=new Te(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(is,as);ve[t]=new Te(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ve[e]=new Te(e,1,!1,e.toLowerCase(),null,!1,!1)});ve.xlinkHref=new Te("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ve[e]=new Te(e,1,!1,e.toLowerCase(),null,!0,!0)});function os(e,t,n,r){var a=ve.hasOwnProperty(t)?ve[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ap(t,n,a,r)&&(n=null),r||a===null?rp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var vt=tp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yr=Symbol.for("react.element"),yn=Symbol.for("react.portal"),bn=Symbol.for("react.fragment"),ss=Symbol.for("react.strict_mode"),io=Symbol.for("react.profiler"),rc=Symbol.for("react.provider"),ic=Symbol.for("react.context"),ls=Symbol.for("react.forward_ref"),ao=Symbol.for("react.suspense"),oo=Symbol.for("react.suspense_list"),ds=Symbol.for("react.memo"),kt=Symbol.for("react.lazy"),ac=Symbol.for("react.offscreen"),ml=Symbol.iterator;function er(e){return e===null||typeof e!="object"?null:(e=ml&&e[ml]||e["@@iterator"],typeof e=="function"?e:null)}var ne=Object.assign,$a;function lr(e){if($a===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);$a=t&&t[1]||""}return`
`+$a+e}var ja=!1;function ka(e,t){if(!e||ja)return"";ja=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var a=c.stack.split(`
`),o=r.stack.split(`
`),s=a.length-1,l=o.length-1;1<=s&&0<=l&&a[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(a[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||a[s]!==o[l]){var d=`
`+a[s].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=s&&0<=l);break}}}finally{ja=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?lr(e):""}function op(e){switch(e.tag){case 5:return lr(e.type);case 16:return lr("Lazy");case 13:return lr("Suspense");case 19:return lr("SuspenseList");case 0:case 2:case 15:return e=ka(e.type,!1),e;case 11:return e=ka(e.type.render,!1),e;case 1:return e=ka(e.type,!0),e;default:return""}}function so(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case bn:return"Fragment";case yn:return"Portal";case io:return"Profiler";case ss:return"StrictMode";case ao:return"Suspense";case oo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ic:return(e.displayName||"Context")+".Consumer";case rc:return(e._context.displayName||"Context")+".Provider";case ls:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ds:return t=e.displayName||null,t!==null?t:so(e.type)||"Memo";case kt:t=e._payload,e=e._init;try{return so(e(t))}catch{}}return null}function sp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return so(t);case 8:return t===ss?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ut(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function oc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function lp(e){var t=oc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qr(e){e._valueTracker||(e._valueTracker=lp(e))}function sc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=oc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ji(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function lo(e,t){var n=t.checked;return ne({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function gl(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ut(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function lc(e,t){t=t.checked,t!=null&&os(e,"checked",t,!1)}function co(e,t){lc(e,t);var n=Ut(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?uo(e,t.type,n):t.hasOwnProperty("defaultValue")&&uo(e,t.type,Ut(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xl(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function uo(e,t,n){(t!=="number"||ji(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var dr=Array.isArray;function Pn(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ut(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function po(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return ne({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function wl(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(dr(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ut(n)}}function dc(e,t){var n=Ut(t.value),r=Ut(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function vl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function cc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?cc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Jr,uc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Jr=Jr||document.createElement("div"),Jr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Jr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function kr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var fr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dp=["Webkit","ms","Moz","O"];Object.keys(fr).forEach(function(e){dp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fr[t]=fr[e]})});function pc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||fr.hasOwnProperty(e)&&fr[e]?(""+t).trim():t+"px"}function fc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=pc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var cp=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ho(e,t){if(t){if(cp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function mo(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var go=null;function cs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xo=null,Rn=null,Mn=null;function yl(e){if(e=Gr(e)){if(typeof xo!="function")throw Error(C(280));var t=e.stateNode;t&&(t=ea(t),xo(e.stateNode,e.type,t))}}function hc(e){Rn?Mn?Mn.push(e):Mn=[e]:Rn=e}function mc(){if(Rn){var e=Rn,t=Mn;if(Mn=Rn=null,yl(e),t)for(e=0;e<t.length;e++)yl(t[e])}}function gc(e,t){return e(t)}function xc(){}var Aa=!1;function wc(e,t,n){if(Aa)return e(t,n);Aa=!0;try{return gc(e,t,n)}finally{Aa=!1,(Rn!==null||Mn!==null)&&(xc(),mc())}}function Ar(e,t){var n=e.stateNode;if(n===null)return null;var r=ea(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var wo=!1;if(mt)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){wo=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{wo=!1}function up(e,t,n,r,a,o,s,l,d){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(h){this.onError(h)}}var hr=!1,ki=null,Ai=!1,vo=null,pp={onError:function(e){hr=!0,ki=e}};function fp(e,t,n,r,a,o,s,l,d){hr=!1,ki=null,up.apply(pp,arguments)}function hp(e,t,n,r,a,o,s,l,d){if(fp.apply(this,arguments),hr){if(hr){var c=ki;hr=!1,ki=null}else throw Error(C(198));Ai||(Ai=!0,vo=c)}}function fn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function vc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function bl(e){if(fn(e)!==e)throw Error(C(188))}function mp(e){var t=e.alternate;if(!t){if(t=fn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return bl(a),e;if(o===r)return bl(a),t;o=o.sibling}throw Error(C(188))}if(n.return!==r.return)n=a,r=o;else{for(var s=!1,l=a.child;l;){if(l===n){s=!0,n=a,r=o;break}if(l===r){s=!0,r=a,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=a;break}if(l===r){s=!0,r=o,n=a;break}l=l.sibling}if(!s)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function yc(e){return e=mp(e),e!==null?bc(e):null}function bc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=bc(e);if(t!==null)return t;e=e.sibling}return null}var $c=De.unstable_scheduleCallback,$l=De.unstable_cancelCallback,gp=De.unstable_shouldYield,xp=De.unstable_requestPaint,ae=De.unstable_now,wp=De.unstable_getCurrentPriorityLevel,us=De.unstable_ImmediatePriority,jc=De.unstable_UserBlockingPriority,Si=De.unstable_NormalPriority,vp=De.unstable_LowPriority,kc=De.unstable_IdlePriority,qi=null,lt=null;function yp(e){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(qi,e,void 0,(e.current.flags&128)===128)}catch{}}var tt=Math.clz32?Math.clz32:jp,bp=Math.log,$p=Math.LN2;function jp(e){return e>>>=0,e===0?32:31-(bp(e)/$p|0)|0}var Xr=64,Zr=4194304;function cr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ni(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~a;l!==0?r=cr(l):(o&=s,o!==0&&(r=cr(o)))}else s=n&~a,s!==0?r=cr(s):o!==0&&(r=cr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,o=t&-t,a>=o||a===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tt(t),a=1<<n,r|=e[n],t&=~a;return r}function kp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ap(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-tt(o),l=1<<s,d=a[s];d===-1?(!(l&n)||l&r)&&(a[s]=kp(l,t)):d<=t&&(e.expiredLanes|=l),o&=~l}}function yo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ac(){var e=Xr;return Xr<<=1,!(Xr&4194240)&&(Xr=64),e}function Sa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Wr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tt(t),e[t]=n}function Sp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-tt(n),o=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~o}}function ps(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tt(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var K=0;function Sc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Nc,fs,Cc,Ec,Tc,bo=!1,ei=[],It=null,Lt=null,Pt=null,Sr=new Map,Nr=new Map,St=[],Np="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jl(e,t){switch(e){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":Lt=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":Sr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nr.delete(t.pointerId)}}function nr(e,t,n,r,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},t!==null&&(t=Gr(t),t!==null&&fs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Cp(e,t,n,r,a){switch(t){case"focusin":return It=nr(It,e,t,n,r,a),!0;case"dragenter":return Lt=nr(Lt,e,t,n,r,a),!0;case"mouseover":return Pt=nr(Pt,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return Sr.set(o,nr(Sr.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,Nr.set(o,nr(Nr.get(o)||null,e,t,n,r,a)),!0}return!1}function Ic(e){var t=tn(e.target);if(t!==null){var n=fn(t);if(n!==null){if(t=n.tag,t===13){if(t=vc(n),t!==null){e.blockedOn=t,Tc(e.priority,function(){Cc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=$o(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);go=r,n.target.dispatchEvent(r),go=null}else return t=Gr(n),t!==null&&fs(t),e.blockedOn=n,!1;t.shift()}return!0}function kl(e,t,n){fi(e)&&n.delete(t)}function Ep(){bo=!1,It!==null&&fi(It)&&(It=null),Lt!==null&&fi(Lt)&&(Lt=null),Pt!==null&&fi(Pt)&&(Pt=null),Sr.forEach(kl),Nr.forEach(kl)}function rr(e,t){e.blockedOn===t&&(e.blockedOn=null,bo||(bo=!0,De.unstable_scheduleCallback(De.unstable_NormalPriority,Ep)))}function Cr(e){function t(a){return rr(a,e)}if(0<ei.length){rr(ei[0],e);for(var n=1;n<ei.length;n++){var r=ei[n];r.blockedOn===e&&(r.blockedOn=null)}}for(It!==null&&rr(It,e),Lt!==null&&rr(Lt,e),Pt!==null&&rr(Pt,e),Sr.forEach(t),Nr.forEach(t),n=0;n<St.length;n++)r=St[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<St.length&&(n=St[0],n.blockedOn===null);)Ic(n),n.blockedOn===null&&St.shift()}var zn=vt.ReactCurrentBatchConfig,Ci=!0;function Tp(e,t,n,r){var a=K,o=zn.transition;zn.transition=null;try{K=1,hs(e,t,n,r)}finally{K=a,zn.transition=o}}function Ip(e,t,n,r){var a=K,o=zn.transition;zn.transition=null;try{K=4,hs(e,t,n,r)}finally{K=a,zn.transition=o}}function hs(e,t,n,r){if(Ci){var a=$o(e,t,n,r);if(a===null)za(e,t,r,Ei,n),jl(e,r);else if(Cp(a,e,t,n,r))r.stopPropagation();else if(jl(e,r),t&4&&-1<Np.indexOf(e)){for(;a!==null;){var o=Gr(a);if(o!==null&&Nc(o),o=$o(e,t,n,r),o===null&&za(e,t,r,Ei,n),o===a)break;a=o}a!==null&&r.stopPropagation()}else za(e,t,r,null,n)}}var Ei=null;function $o(e,t,n,r){if(Ei=null,e=cs(r),e=tn(e),e!==null)if(t=fn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=vc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ei=e,null}function Lc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wp()){case us:return 1;case jc:return 4;case Si:case vp:return 16;case kc:return 536870912;default:return 16}default:return 16}}var Ct=null,ms=null,hi=null;function Pc(){if(hi)return hi;var e,t=ms,n=t.length,r,a="value"in Ct?Ct.value:Ct.textContent,o=a.length;for(e=0;e<n&&t[e]===a[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===a[o-r];r++);return hi=a.slice(e,1<r?1-r:void 0)}function mi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ti(){return!0}function Al(){return!1}function We(e){function t(n,r,a,o,s){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?ti:Al,this.isPropagationStopped=Al,this}return ne(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ti)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ti)},persist:function(){},isPersistent:ti}),t}var Yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gs=We(Yn),Qr=ne({},Yn,{view:0,detail:0}),Lp=We(Qr),Na,Ca,ir,Ji=ne({},Qr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ir&&(ir&&e.type==="mousemove"?(Na=e.screenX-ir.screenX,Ca=e.screenY-ir.screenY):Ca=Na=0,ir=e),Na)},movementY:function(e){return"movementY"in e?e.movementY:Ca}}),Sl=We(Ji),Pp=ne({},Ji,{dataTransfer:0}),Rp=We(Pp),Mp=ne({},Qr,{relatedTarget:0}),Ea=We(Mp),zp=ne({},Yn,{animationName:0,elapsedTime:0,pseudoElement:0}),Op=We(zp),Bp=ne({},Yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fp=We(Bp),Up=ne({},Yn,{data:0}),Nl=We(Up),Dp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_p={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wp[e])?!!t[e]:!1}function xs(){return Qp}var Gp=ne({},Qr,{key:function(e){if(e.key){var t=Dp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=mi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_p[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xs,charCode:function(e){return e.type==="keypress"?mi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?mi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hp=We(Gp),Vp=ne({},Ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cl=We(Vp),Kp=ne({},Qr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xs}),Yp=We(Kp),qp=ne({},Yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jp=We(qp),Xp=ne({},Ji,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zp=We(Xp),e1=[9,13,27,32],ws=mt&&"CompositionEvent"in window,mr=null;mt&&"documentMode"in document&&(mr=document.documentMode);var t1=mt&&"TextEvent"in window&&!mr,Rc=mt&&(!ws||mr&&8<mr&&11>=mr),El=" ",Tl=!1;function Mc(e,t){switch(e){case"keyup":return e1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function n1(e,t){switch(e){case"compositionend":return zc(t);case"keypress":return t.which!==32?null:(Tl=!0,El);case"textInput":return e=t.data,e===El&&Tl?null:e;default:return null}}function r1(e,t){if($n)return e==="compositionend"||!ws&&Mc(e,t)?(e=Pc(),hi=ms=Ct=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rc&&t.locale!=="ko"?null:t.data;default:return null}}var i1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Il(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!i1[e.type]:t==="textarea"}function Oc(e,t,n,r){hc(r),t=Ti(t,"onChange"),0<t.length&&(n=new gs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var gr=null,Er=null;function a1(e){Kc(e,0)}function Xi(e){var t=An(e);if(sc(t))return e}function o1(e,t){if(e==="change")return t}var Bc=!1;if(mt){var Ta;if(mt){var Ia="oninput"in document;if(!Ia){var Ll=document.createElement("div");Ll.setAttribute("oninput","return;"),Ia=typeof Ll.oninput=="function"}Ta=Ia}else Ta=!1;Bc=Ta&&(!document.documentMode||9<document.documentMode)}function Pl(){gr&&(gr.detachEvent("onpropertychange",Fc),Er=gr=null)}function Fc(e){if(e.propertyName==="value"&&Xi(Er)){var t=[];Oc(t,Er,e,cs(e)),wc(a1,t)}}function s1(e,t,n){e==="focusin"?(Pl(),gr=t,Er=n,gr.attachEvent("onpropertychange",Fc)):e==="focusout"&&Pl()}function l1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Xi(Er)}function d1(e,t){if(e==="click")return Xi(t)}function c1(e,t){if(e==="input"||e==="change")return Xi(t)}function u1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rt=typeof Object.is=="function"?Object.is:u1;function Tr(e,t){if(rt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!ro.call(t,a)||!rt(e[a],t[a]))return!1}return!0}function Rl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ml(e,t){var n=Rl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rl(n)}}function Uc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Uc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Dc(){for(var e=window,t=ji();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ji(e.document)}return t}function vs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function p1(e){var t=Dc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Uc(n.ownerDocument.documentElement,n)){if(r!==null&&vs(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(r.start,a);r=r.end===void 0?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=Ml(n,o);var s=Ml(n,r);a&&s&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var f1=mt&&"documentMode"in document&&11>=document.documentMode,jn=null,jo=null,xr=null,ko=!1;function zl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ko||jn==null||jn!==ji(r)||(r=jn,"selectionStart"in r&&vs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xr&&Tr(xr,r)||(xr=r,r=Ti(jo,"onSelect"),0<r.length&&(t=new gs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=jn)))}function ni(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kn={animationend:ni("Animation","AnimationEnd"),animationiteration:ni("Animation","AnimationIteration"),animationstart:ni("Animation","AnimationStart"),transitionend:ni("Transition","TransitionEnd")},La={},_c={};mt&&(_c=document.createElement("div").style,"AnimationEvent"in window||(delete kn.animationend.animation,delete kn.animationiteration.animation,delete kn.animationstart.animation),"TransitionEvent"in window||delete kn.transitionend.transition);function Zi(e){if(La[e])return La[e];if(!kn[e])return e;var t=kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in _c)return La[e]=t[n];return e}var Wc=Zi("animationend"),Qc=Zi("animationiteration"),Gc=Zi("animationstart"),Hc=Zi("transitionend"),Vc=new Map,Ol="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _t(e,t){Vc.set(e,t),pn(t,[e])}for(var Pa=0;Pa<Ol.length;Pa++){var Ra=Ol[Pa],h1=Ra.toLowerCase(),m1=Ra[0].toUpperCase()+Ra.slice(1);_t(h1,"on"+m1)}_t(Wc,"onAnimationEnd");_t(Qc,"onAnimationIteration");_t(Gc,"onAnimationStart");_t("dblclick","onDoubleClick");_t("focusin","onFocus");_t("focusout","onBlur");_t(Hc,"onTransitionEnd");Un("onMouseEnter",["mouseout","mouseover"]);Un("onMouseLeave",["mouseout","mouseover"]);Un("onPointerEnter",["pointerout","pointerover"]);Un("onPointerLeave",["pointerout","pointerover"]);pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),g1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));function Bl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,hp(r,t,void 0,e),e.currentTarget=null}function Kc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],d=l.instance,c=l.currentTarget;if(l=l.listener,d!==o&&a.isPropagationStopped())break e;Bl(a,l,c),o=d}else for(s=0;s<r.length;s++){if(l=r[s],d=l.instance,c=l.currentTarget,l=l.listener,d!==o&&a.isPropagationStopped())break e;Bl(a,l,c),o=d}}}if(Ai)throw e=vo,Ai=!1,vo=null,e}function q(e,t){var n=t[Eo];n===void 0&&(n=t[Eo]=new Set);var r=e+"__bubble";n.has(r)||(Yc(t,e,2,!1),n.add(r))}function Ma(e,t,n){var r=0;t&&(r|=4),Yc(n,e,r,t)}var ri="_reactListening"+Math.random().toString(36).slice(2);function Ir(e){if(!e[ri]){e[ri]=!0,nc.forEach(function(n){n!=="selectionchange"&&(g1.has(n)||Ma(n,!1,e),Ma(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ri]||(t[ri]=!0,Ma("selectionchange",!1,t))}}function Yc(e,t,n,r){switch(Lc(t)){case 1:var a=Tp;break;case 4:a=Ip;break;default:a=hs}n=a.bind(null,t,n,e),a=void 0,!wo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function za(e,t,n,r,a){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===a||l.nodeType===8&&l.parentNode===a)break;if(s===4)for(s=r.return;s!==null;){var d=s.tag;if((d===3||d===4)&&(d=s.stateNode.containerInfo,d===a||d.nodeType===8&&d.parentNode===a))return;s=s.return}for(;l!==null;){if(s=tn(l),s===null)return;if(d=s.tag,d===5||d===6){r=o=s;continue e}l=l.parentNode}}r=r.return}wc(function(){var c=o,h=cs(n),u=[];e:{var m=Vc.get(e);if(m!==void 0){var w=gs,y=e;switch(e){case"keypress":if(mi(n)===0)break e;case"keydown":case"keyup":w=Hp;break;case"focusin":y="focus",w=Ea;break;case"focusout":y="blur",w=Ea;break;case"beforeblur":case"afterblur":w=Ea;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Sl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Rp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Yp;break;case Wc:case Qc:case Gc:w=Op;break;case Hc:w=Jp;break;case"scroll":w=Lp;break;case"wheel":w=Zp;break;case"copy":case"cut":case"paste":w=Fp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Cl}var b=(t&4)!==0,j=!b&&e==="scroll",f=b?m!==null?m+"Capture":null:m;b=[];for(var p=c,x;p!==null;){x=p;var $=x.stateNode;if(x.tag===5&&$!==null&&(x=$,f!==null&&($=Ar(p,f),$!=null&&b.push(Lr(p,$,x)))),j)break;p=p.return}0<b.length&&(m=new w(m,y,null,n,h),u.push({event:m,listeners:b}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==go&&(y=n.relatedTarget||n.fromElement)&&(tn(y)||y[gt]))break e;if((w||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=c,y=y?tn(y):null,y!==null&&(j=fn(y),y!==j||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=c),w!==y)){if(b=Sl,$="onMouseLeave",f="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(b=Cl,$="onPointerLeave",f="onPointerEnter",p="pointer"),j=w==null?m:An(w),x=y==null?m:An(y),m=new b($,p+"leave",w,n,h),m.target=j,m.relatedTarget=x,$=null,tn(h)===c&&(b=new b(f,p+"enter",y,n,h),b.target=x,b.relatedTarget=j,$=b),j=$,w&&y)t:{for(b=w,f=y,p=0,x=b;x;x=wn(x))p++;for(x=0,$=f;$;$=wn($))x++;for(;0<p-x;)b=wn(b),p--;for(;0<x-p;)f=wn(f),x--;for(;p--;){if(b===f||f!==null&&b===f.alternate)break t;b=wn(b),f=wn(f)}b=null}else b=null;w!==null&&Fl(u,m,w,b,!1),y!==null&&j!==null&&Fl(u,j,y,b,!0)}}e:{if(m=c?An(c):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var A=o1;else if(Il(m))if(Bc)A=c1;else{A=l1;var E=s1}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(A=d1);if(A&&(A=A(e,c))){Oc(u,A,n,h);break e}E&&E(e,m,c),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&uo(m,"number",m.value)}switch(E=c?An(c):window,e){case"focusin":(Il(E)||E.contentEditable==="true")&&(jn=E,jo=c,xr=null);break;case"focusout":xr=jo=jn=null;break;case"mousedown":ko=!0;break;case"contextmenu":case"mouseup":case"dragend":ko=!1,zl(u,n,h);break;case"selectionchange":if(f1)break;case"keydown":case"keyup":zl(u,n,h)}var N;if(ws)e:{switch(e){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else $n?Mc(e,n)&&(v="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(Rc&&n.locale!=="ko"&&($n||v!=="onCompositionStart"?v==="onCompositionEnd"&&$n&&(N=Pc()):(Ct=h,ms="value"in Ct?Ct.value:Ct.textContent,$n=!0)),E=Ti(c,v),0<E.length&&(v=new Nl(v,e,null,n,h),u.push({event:v,listeners:E}),N?v.data=N:(N=zc(n),N!==null&&(v.data=N)))),(N=t1?n1(e,n):r1(e,n))&&(c=Ti(c,"onBeforeInput"),0<c.length&&(h=new Nl("onBeforeInput","beforeinput",null,n,h),u.push({event:h,listeners:c}),h.data=N))}Kc(u,t)})}function Lr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ti(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=Ar(e,n),o!=null&&r.unshift(Lr(e,o,a)),o=Ar(e,t),o!=null&&r.push(Lr(e,o,a))),e=e.return}return r}function wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Fl(e,t,n,r,a){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,d=l.alternate,c=l.stateNode;if(d!==null&&d===r)break;l.tag===5&&c!==null&&(l=c,a?(d=Ar(n,o),d!=null&&s.unshift(Lr(n,d,l))):a||(d=Ar(n,o),d!=null&&s.push(Lr(n,d,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var x1=/\r\n?/g,w1=/\u0000|\uFFFD/g;function Ul(e){return(typeof e=="string"?e:""+e).replace(x1,`
`).replace(w1,"")}function ii(e,t,n){if(t=Ul(t),Ul(e)!==t&&n)throw Error(C(425))}function Ii(){}var Ao=null,So=null;function No(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Co=typeof setTimeout=="function"?setTimeout:void 0,v1=typeof clearTimeout=="function"?clearTimeout:void 0,Dl=typeof Promise=="function"?Promise:void 0,y1=typeof queueMicrotask=="function"?queueMicrotask:typeof Dl<"u"?function(e){return Dl.resolve(null).then(e).catch(b1)}:Co;function b1(e){setTimeout(function(){throw e})}function Oa(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),Cr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);Cr(t)}function Rt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function _l(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var qn=Math.random().toString(36).slice(2),st="__reactFiber$"+qn,Pr="__reactProps$"+qn,gt="__reactContainer$"+qn,Eo="__reactEvents$"+qn,$1="__reactListeners$"+qn,j1="__reactHandles$"+qn;function tn(e){var t=e[st];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[st]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=_l(e);e!==null;){if(n=e[st])return n;e=_l(e)}return t}e=n,n=e.parentNode}return null}function Gr(e){return e=e[st]||e[gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function An(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function ea(e){return e[Pr]||null}var To=[],Sn=-1;function Wt(e){return{current:e}}function J(e){0>Sn||(e.current=To[Sn],To[Sn]=null,Sn--)}function Y(e,t){Sn++,To[Sn]=e.current,e.current=t}var Dt={},je=Wt(Dt),Re=Wt(!1),sn=Dt;function Dn(e,t){var n=e.type.contextTypes;if(!n)return Dt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in n)a[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Me(e){return e=e.childContextTypes,e!=null}function Li(){J(Re),J(je)}function Wl(e,t,n){if(je.current!==Dt)throw Error(C(168));Y(je,t),Y(Re,n)}function qc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(C(108,sp(e)||"Unknown",a));return ne({},n,r)}function Pi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Dt,sn=je.current,Y(je,e),Y(Re,Re.current),!0}function Ql(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=qc(e,t,sn),r.__reactInternalMemoizedMergedChildContext=e,J(Re),J(je),Y(je,e)):J(Re),Y(Re,n)}var ut=null,ta=!1,Ba=!1;function Jc(e){ut===null?ut=[e]:ut.push(e)}function k1(e){ta=!0,Jc(e)}function Qt(){if(!Ba&&ut!==null){Ba=!0;var e=0,t=K;try{var n=ut;for(K=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ut=null,ta=!1}catch(a){throw ut!==null&&(ut=ut.slice(e+1)),$c(us,Qt),a}finally{K=t,Ba=!1}}return null}var Nn=[],Cn=0,Ri=null,Mi=0,Qe=[],Ge=0,ln=null,pt=1,ft="";function Zt(e,t){Nn[Cn++]=Mi,Nn[Cn++]=Ri,Ri=e,Mi=t}function Xc(e,t,n){Qe[Ge++]=pt,Qe[Ge++]=ft,Qe[Ge++]=ln,ln=e;var r=pt;e=ft;var a=32-tt(r)-1;r&=~(1<<a),n+=1;var o=32-tt(t)+a;if(30<o){var s=a-a%5;o=(r&(1<<s)-1).toString(32),r>>=s,a-=s,pt=1<<32-tt(t)+a|n<<a|r,ft=o+e}else pt=1<<o|n<<a|r,ft=e}function ys(e){e.return!==null&&(Zt(e,1),Xc(e,1,0))}function bs(e){for(;e===Ri;)Ri=Nn[--Cn],Nn[Cn]=null,Mi=Nn[--Cn],Nn[Cn]=null;for(;e===ln;)ln=Qe[--Ge],Qe[Ge]=null,ft=Qe[--Ge],Qe[Ge]=null,pt=Qe[--Ge],Qe[Ge]=null}var Ue=null,Fe=null,X=!1,et=null;function Zc(e,t){var n=He(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Gl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ue=e,Fe=Rt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ue=e,Fe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ln!==null?{id:pt,overflow:ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=He(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ue=e,Fe=null,!0):!1;default:return!1}}function Io(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Lo(e){if(X){var t=Fe;if(t){var n=t;if(!Gl(e,t)){if(Io(e))throw Error(C(418));t=Rt(n.nextSibling);var r=Ue;t&&Gl(e,t)?Zc(r,n):(e.flags=e.flags&-4097|2,X=!1,Ue=e)}}else{if(Io(e))throw Error(C(418));e.flags=e.flags&-4097|2,X=!1,Ue=e}}}function Hl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ue=e}function ai(e){if(e!==Ue)return!1;if(!X)return Hl(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!No(e.type,e.memoizedProps)),t&&(t=Fe)){if(Io(e))throw eu(),Error(C(418));for(;t;)Zc(e,t),t=Rt(t.nextSibling)}if(Hl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Fe=Rt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Fe=null}}else Fe=Ue?Rt(e.stateNode.nextSibling):null;return!0}function eu(){for(var e=Fe;e;)e=Rt(e.nextSibling)}function _n(){Fe=Ue=null,X=!1}function $s(e){et===null?et=[e]:et.push(e)}var A1=vt.ReactCurrentBatchConfig;function ar(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var a=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=a.refs;s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function oi(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Vl(e){var t=e._init;return t(e._payload)}function tu(e){function t(f,p){if(e){var x=f.deletions;x===null?(f.deletions=[p],f.flags|=16):x.push(p)}}function n(f,p){if(!e)return null;for(;p!==null;)t(f,p),p=p.sibling;return null}function r(f,p){for(f=new Map;p!==null;)p.key!==null?f.set(p.key,p):f.set(p.index,p),p=p.sibling;return f}function a(f,p){return f=Bt(f,p),f.index=0,f.sibling=null,f}function o(f,p,x){return f.index=x,e?(x=f.alternate,x!==null?(x=x.index,x<p?(f.flags|=2,p):x):(f.flags|=2,p)):(f.flags|=1048576,p)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,p,x,$){return p===null||p.tag!==6?(p=Ga(x,f.mode,$),p.return=f,p):(p=a(p,x),p.return=f,p)}function d(f,p,x,$){var A=x.type;return A===bn?h(f,p,x.props.children,$,x.key):p!==null&&(p.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===kt&&Vl(A)===p.type)?($=a(p,x.props),$.ref=ar(f,p,x),$.return=f,$):($=$i(x.type,x.key,x.props,null,f.mode,$),$.ref=ar(f,p,x),$.return=f,$)}function c(f,p,x,$){return p===null||p.tag!==4||p.stateNode.containerInfo!==x.containerInfo||p.stateNode.implementation!==x.implementation?(p=Ha(x,f.mode,$),p.return=f,p):(p=a(p,x.children||[]),p.return=f,p)}function h(f,p,x,$,A){return p===null||p.tag!==7?(p=on(x,f.mode,$,A),p.return=f,p):(p=a(p,x),p.return=f,p)}function u(f,p,x){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ga(""+p,f.mode,x),p.return=f,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Yr:return x=$i(p.type,p.key,p.props,null,f.mode,x),x.ref=ar(f,null,p),x.return=f,x;case yn:return p=Ha(p,f.mode,x),p.return=f,p;case kt:var $=p._init;return u(f,$(p._payload),x)}if(dr(p)||er(p))return p=on(p,f.mode,x,null),p.return=f,p;oi(f,p)}return null}function m(f,p,x,$){var A=p!==null?p.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return A!==null?null:l(f,p,""+x,$);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Yr:return x.key===A?d(f,p,x,$):null;case yn:return x.key===A?c(f,p,x,$):null;case kt:return A=x._init,m(f,p,A(x._payload),$)}if(dr(x)||er(x))return A!==null?null:h(f,p,x,$,null);oi(f,x)}return null}function w(f,p,x,$,A){if(typeof $=="string"&&$!==""||typeof $=="number")return f=f.get(x)||null,l(p,f,""+$,A);if(typeof $=="object"&&$!==null){switch($.$$typeof){case Yr:return f=f.get($.key===null?x:$.key)||null,d(p,f,$,A);case yn:return f=f.get($.key===null?x:$.key)||null,c(p,f,$,A);case kt:var E=$._init;return w(f,p,x,E($._payload),A)}if(dr($)||er($))return f=f.get(x)||null,h(p,f,$,A,null);oi(p,$)}return null}function y(f,p,x,$){for(var A=null,E=null,N=p,v=p=0,I=null;N!==null&&v<x.length;v++){N.index>v?(I=N,N=null):I=N.sibling;var L=m(f,N,x[v],$);if(L===null){N===null&&(N=I);break}e&&N&&L.alternate===null&&t(f,N),p=o(L,p,v),E===null?A=L:E.sibling=L,E=L,N=I}if(v===x.length)return n(f,N),X&&Zt(f,v),A;if(N===null){for(;v<x.length;v++)N=u(f,x[v],$),N!==null&&(p=o(N,p,v),E===null?A=N:E.sibling=N,E=N);return X&&Zt(f,v),A}for(N=r(f,N);v<x.length;v++)I=w(N,f,v,x[v],$),I!==null&&(e&&I.alternate!==null&&N.delete(I.key===null?v:I.key),p=o(I,p,v),E===null?A=I:E.sibling=I,E=I);return e&&N.forEach(function(_){return t(f,_)}),X&&Zt(f,v),A}function b(f,p,x,$){var A=er(x);if(typeof A!="function")throw Error(C(150));if(x=A.call(x),x==null)throw Error(C(151));for(var E=A=null,N=p,v=p=0,I=null,L=x.next();N!==null&&!L.done;v++,L=x.next()){N.index>v?(I=N,N=null):I=N.sibling;var _=m(f,N,L.value,$);if(_===null){N===null&&(N=I);break}e&&N&&_.alternate===null&&t(f,N),p=o(_,p,v),E===null?A=_:E.sibling=_,E=_,N=I}if(L.done)return n(f,N),X&&Zt(f,v),A;if(N===null){for(;!L.done;v++,L=x.next())L=u(f,L.value,$),L!==null&&(p=o(L,p,v),E===null?A=L:E.sibling=L,E=L);return X&&Zt(f,v),A}for(N=r(f,N);!L.done;v++,L=x.next())L=w(N,f,v,L.value,$),L!==null&&(e&&L.alternate!==null&&N.delete(L.key===null?v:L.key),p=o(L,p,v),E===null?A=L:E.sibling=L,E=L);return e&&N.forEach(function(se){return t(f,se)}),X&&Zt(f,v),A}function j(f,p,x,$){if(typeof x=="object"&&x!==null&&x.type===bn&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Yr:e:{for(var A=x.key,E=p;E!==null;){if(E.key===A){if(A=x.type,A===bn){if(E.tag===7){n(f,E.sibling),p=a(E,x.props.children),p.return=f,f=p;break e}}else if(E.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===kt&&Vl(A)===E.type){n(f,E.sibling),p=a(E,x.props),p.ref=ar(f,E,x),p.return=f,f=p;break e}n(f,E);break}else t(f,E);E=E.sibling}x.type===bn?(p=on(x.props.children,f.mode,$,x.key),p.return=f,f=p):($=$i(x.type,x.key,x.props,null,f.mode,$),$.ref=ar(f,p,x),$.return=f,f=$)}return s(f);case yn:e:{for(E=x.key;p!==null;){if(p.key===E)if(p.tag===4&&p.stateNode.containerInfo===x.containerInfo&&p.stateNode.implementation===x.implementation){n(f,p.sibling),p=a(p,x.children||[]),p.return=f,f=p;break e}else{n(f,p);break}else t(f,p);p=p.sibling}p=Ha(x,f.mode,$),p.return=f,f=p}return s(f);case kt:return E=x._init,j(f,p,E(x._payload),$)}if(dr(x))return y(f,p,x,$);if(er(x))return b(f,p,x,$);oi(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,p!==null&&p.tag===6?(n(f,p.sibling),p=a(p,x),p.return=f,f=p):(n(f,p),p=Ga(x,f.mode,$),p.return=f,f=p),s(f)):n(f,p)}return j}var Wn=tu(!0),nu=tu(!1),zi=Wt(null),Oi=null,En=null,js=null;function ks(){js=En=Oi=null}function As(e){var t=zi.current;J(zi),e._currentValue=t}function Po(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function On(e,t){Oi=e,js=En=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Pe=!0),e.firstContext=null)}function Ke(e){var t=e._currentValue;if(js!==e)if(e={context:e,memoizedValue:t,next:null},En===null){if(Oi===null)throw Error(C(308));En=e,Oi.dependencies={lanes:0,firstContext:e}}else En=En.next=e;return t}var nn=null;function Ss(e){nn===null?nn=[e]:nn.push(e)}function ru(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,Ss(t)):(n.next=a.next,a.next=n),t.interleaved=n,xt(e,r)}function xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var At=!1;function Ns(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ht(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Mt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,xt(e,n)}return a=r.interleaved,a===null?(t.next=t,Ss(r)):(t.next=a.next,a.next=t),r.interleaved=t,xt(e,n)}function gi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ps(e,n)}}function Kl(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?a=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?a=o=t:o=o.next=t}else a=o=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Bi(e,t,n,r){var a=e.updateQueue;At=!1;var o=a.firstBaseUpdate,s=a.lastBaseUpdate,l=a.shared.pending;if(l!==null){a.shared.pending=null;var d=l,c=d.next;d.next=null,s===null?o=c:s.next=c,s=d;var h=e.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==s&&(l===null?h.firstBaseUpdate=c:l.next=c,h.lastBaseUpdate=d))}if(o!==null){var u=a.baseState;s=0,h=c=d=null,l=o;do{var m=l.lane,w=l.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,b=l;switch(m=t,w=n,b.tag){case 1:if(y=b.payload,typeof y=="function"){u=y.call(w,u,m);break e}u=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=b.payload,m=typeof y=="function"?y.call(w,u,m):y,m==null)break e;u=ne({},u,m);break e;case 2:At=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=a.effects,m===null?a.effects=[l]:m.push(l))}else w={eventTime:w,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(c=h=w,d=u):h=h.next=w,s|=m;if(l=l.next,l===null){if(l=a.shared.pending,l===null)break;m=l,l=m.next,m.next=null,a.lastBaseUpdate=m,a.shared.pending=null}}while(!0);if(h===null&&(d=u),a.baseState=d,a.firstBaseUpdate=c,a.lastBaseUpdate=h,t=a.shared.interleaved,t!==null){a=t;do s|=a.lane,a=a.next;while(a!==t)}else o===null&&(a.shared.lanes=0);cn|=s,e.lanes=s,e.memoizedState=u}}function Yl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(C(191,a));a.call(r)}}}var Hr={},dt=Wt(Hr),Rr=Wt(Hr),Mr=Wt(Hr);function rn(e){if(e===Hr)throw Error(C(174));return e}function Cs(e,t){switch(Y(Mr,t),Y(Rr,e),Y(dt,Hr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:fo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=fo(t,e)}J(dt),Y(dt,t)}function Qn(){J(dt),J(Rr),J(Mr)}function au(e){rn(Mr.current);var t=rn(dt.current),n=fo(t,e.type);t!==n&&(Y(Rr,e),Y(dt,n))}function Es(e){Rr.current===e&&(J(dt),J(Rr))}var ee=Wt(0);function Fi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Fa=[];function Ts(){for(var e=0;e<Fa.length;e++)Fa[e]._workInProgressVersionPrimary=null;Fa.length=0}var xi=vt.ReactCurrentDispatcher,Ua=vt.ReactCurrentBatchConfig,dn=0,te=null,ce=null,fe=null,Ui=!1,wr=!1,zr=0,S1=0;function ye(){throw Error(C(321))}function Is(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!rt(e[n],t[n]))return!1;return!0}function Ls(e,t,n,r,a,o){if(dn=o,te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xi.current=e===null||e.memoizedState===null?T1:I1,e=n(r,a),wr){o=0;do{if(wr=!1,zr=0,25<=o)throw Error(C(301));o+=1,fe=ce=null,t.updateQueue=null,xi.current=L1,e=n(r,a)}while(wr)}if(xi.current=Di,t=ce!==null&&ce.next!==null,dn=0,fe=ce=te=null,Ui=!1,t)throw Error(C(300));return e}function Ps(){var e=zr!==0;return zr=0,e}function ot(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fe===null?te.memoizedState=fe=e:fe=fe.next=e,fe}function Ye(){if(ce===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=ce.next;var t=fe===null?te.memoizedState:fe.next;if(t!==null)fe=t,ce=e;else{if(e===null)throw Error(C(310));ce=e,e={memoizedState:ce.memoizedState,baseState:ce.baseState,baseQueue:ce.baseQueue,queue:ce.queue,next:null},fe===null?te.memoizedState=fe=e:fe=fe.next=e}return fe}function Or(e,t){return typeof t=="function"?t(e):t}function Da(e){var t=Ye(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=ce,a=r.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}r.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,r=r.baseState;var l=s=null,d=null,c=o;do{var h=c.lane;if((dn&h)===h)d!==null&&(d=d.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var u={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};d===null?(l=d=u,s=r):d=d.next=u,te.lanes|=h,cn|=h}c=c.next}while(c!==null&&c!==o);d===null?s=r:d.next=l,rt(r,t.memoizedState)||(Pe=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do o=a.lane,te.lanes|=o,cn|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function _a(e){var t=Ye(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);rt(o,t.memoizedState)||(Pe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ou(){}function su(e,t){var n=te,r=Ye(),a=t(),o=!rt(r.memoizedState,a);if(o&&(r.memoizedState=a,Pe=!0),r=r.queue,Rs(cu.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||fe!==null&&fe.memoizedState.tag&1){if(n.flags|=2048,Br(9,du.bind(null,n,r,a,t),void 0,null),he===null)throw Error(C(349));dn&30||lu(n,t,a)}return a}function lu(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function du(e,t,n,r){t.value=n,t.getSnapshot=r,uu(t)&&pu(e)}function cu(e,t,n){return n(function(){uu(t)&&pu(e)})}function uu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!rt(e,n)}catch{return!0}}function pu(e){var t=xt(e,1);t!==null&&nt(t,e,1,-1)}function ql(e){var t=ot();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Or,lastRenderedState:e},t.queue=e,e=e.dispatch=E1.bind(null,te,e),[t.memoizedState,e]}function Br(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=te.updateQueue,t===null?(t={lastEffect:null,stores:null},te.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function fu(){return Ye().memoizedState}function wi(e,t,n,r){var a=ot();te.flags|=e,a.memoizedState=Br(1|t,n,void 0,r===void 0?null:r)}function na(e,t,n,r){var a=Ye();r=r===void 0?null:r;var o=void 0;if(ce!==null){var s=ce.memoizedState;if(o=s.destroy,r!==null&&Is(r,s.deps)){a.memoizedState=Br(t,n,o,r);return}}te.flags|=e,a.memoizedState=Br(1|t,n,o,r)}function Jl(e,t){return wi(8390656,8,e,t)}function Rs(e,t){return na(2048,8,e,t)}function hu(e,t){return na(4,2,e,t)}function mu(e,t){return na(4,4,e,t)}function gu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xu(e,t,n){return n=n!=null?n.concat([e]):null,na(4,4,gu.bind(null,t,e),n)}function Ms(){}function wu(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Is(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function vu(e,t){var n=Ye();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Is(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function yu(e,t,n){return dn&21?(rt(n,t)||(n=Ac(),te.lanes|=n,cn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Pe=!0),e.memoizedState=n)}function N1(e,t){var n=K;K=n!==0&&4>n?n:4,e(!0);var r=Ua.transition;Ua.transition={};try{e(!1),t()}finally{K=n,Ua.transition=r}}function bu(){return Ye().memoizedState}function C1(e,t,n){var r=Ot(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},$u(e))ju(t,n);else if(n=ru(e,t,n,r),n!==null){var a=Ce();nt(n,e,r,a),ku(n,t,r)}}function E1(e,t,n){var r=Ot(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if($u(e))ju(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(a.hasEagerState=!0,a.eagerState=l,rt(l,s)){var d=t.interleaved;d===null?(a.next=a,Ss(t)):(a.next=d.next,d.next=a),t.interleaved=a;return}}catch{}finally{}n=ru(e,t,a,r),n!==null&&(a=Ce(),nt(n,e,r,a),ku(n,t,r))}}function $u(e){var t=e.alternate;return e===te||t!==null&&t===te}function ju(e,t){wr=Ui=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ku(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ps(e,n)}}var Di={readContext:Ke,useCallback:ye,useContext:ye,useEffect:ye,useImperativeHandle:ye,useInsertionEffect:ye,useLayoutEffect:ye,useMemo:ye,useReducer:ye,useRef:ye,useState:ye,useDebugValue:ye,useDeferredValue:ye,useTransition:ye,useMutableSource:ye,useSyncExternalStore:ye,useId:ye,unstable_isNewReconciler:!1},T1={readContext:Ke,useCallback:function(e,t){return ot().memoizedState=[e,t===void 0?null:t],e},useContext:Ke,useEffect:Jl,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,wi(4194308,4,gu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wi(4194308,4,e,t)},useInsertionEffect:function(e,t){return wi(4,2,e,t)},useMemo:function(e,t){var n=ot();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ot();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=C1.bind(null,te,e),[r.memoizedState,e]},useRef:function(e){var t=ot();return e={current:e},t.memoizedState=e},useState:ql,useDebugValue:Ms,useDeferredValue:function(e){return ot().memoizedState=e},useTransition:function(){var e=ql(!1),t=e[0];return e=N1.bind(null,e[1]),ot().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=te,a=ot();if(X){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),he===null)throw Error(C(349));dn&30||lu(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Jl(cu.bind(null,r,o,e),[e]),r.flags|=2048,Br(9,du.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ot(),t=he.identifierPrefix;if(X){var n=ft,r=pt;n=(r&~(1<<32-tt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=zr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=S1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},I1={readContext:Ke,useCallback:wu,useContext:Ke,useEffect:Rs,useImperativeHandle:xu,useInsertionEffect:hu,useLayoutEffect:mu,useMemo:vu,useReducer:Da,useRef:fu,useState:function(){return Da(Or)},useDebugValue:Ms,useDeferredValue:function(e){var t=Ye();return yu(t,ce.memoizedState,e)},useTransition:function(){var e=Da(Or)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:ou,useSyncExternalStore:su,useId:bu,unstable_isNewReconciler:!1},L1={readContext:Ke,useCallback:wu,useContext:Ke,useEffect:Rs,useImperativeHandle:xu,useInsertionEffect:hu,useLayoutEffect:mu,useMemo:vu,useReducer:_a,useRef:fu,useState:function(){return _a(Or)},useDebugValue:Ms,useDeferredValue:function(e){var t=Ye();return ce===null?t.memoizedState=e:yu(t,ce.memoizedState,e)},useTransition:function(){var e=_a(Or)[0],t=Ye().memoizedState;return[e,t]},useMutableSource:ou,useSyncExternalStore:su,useId:bu,unstable_isNewReconciler:!1};function Xe(e,t){if(e&&e.defaultProps){t=ne({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ro(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ne({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ra={isMounted:function(e){return(e=e._reactInternals)?fn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ce(),a=Ot(e),o=ht(r,a);o.payload=t,n!=null&&(o.callback=n),t=Mt(e,o,a),t!==null&&(nt(t,e,a,r),gi(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ce(),a=Ot(e),o=ht(r,a);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Mt(e,o,a),t!==null&&(nt(t,e,a,r),gi(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ce(),r=Ot(e),a=ht(n,r);a.tag=2,t!=null&&(a.callback=t),t=Mt(e,a,r),t!==null&&(nt(t,e,r,n),gi(t,e,r))}};function Xl(e,t,n,r,a,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Tr(n,r)||!Tr(a,o):!0}function Au(e,t,n){var r=!1,a=Dt,o=t.contextType;return typeof o=="object"&&o!==null?o=Ke(o):(a=Me(t)?sn:je.current,r=t.contextTypes,o=(r=r!=null)?Dn(e,a):Dt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ra,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function Zl(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ra.enqueueReplaceState(t,t.state,null)}function Mo(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Ns(e);var o=t.contextType;typeof o=="object"&&o!==null?a.context=Ke(o):(o=Me(t)?sn:je.current,a.context=Dn(e,o)),a.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ro(e,t,o,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&ra.enqueueReplaceState(a,a.state,null),Bi(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Gn(e,t){try{var n="",r=t;do n+=op(r),r=r.return;while(r);var a=n}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:a,digest:null}}function Wa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function zo(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var P1=typeof WeakMap=="function"?WeakMap:Map;function Su(e,t,n){n=ht(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Wi||(Wi=!0,Ho=r),zo(e,t)},n}function Nu(e,t,n){n=ht(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){zo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){zo(e,t),typeof r!="function"&&(zt===null?zt=new Set([this]):zt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function ed(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new P1;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=V1.bind(null,e,t,n),t.then(e,e))}function td(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function nd(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ht(-1,1),t.tag=2,Mt(n,t,1))),n.lanes|=1),e)}var R1=vt.ReactCurrentOwner,Pe=!1;function Ne(e,t,n,r){t.child=e===null?nu(t,null,n,r):Wn(t,e.child,n,r)}function rd(e,t,n,r,a){n=n.render;var o=t.ref;return On(t,a),r=Ls(e,t,n,r,o,a),n=Ps(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,wt(e,t,a)):(X&&n&&ys(t),t.flags|=1,Ne(e,t,r,a),t.child)}function id(e,t,n,r,a){if(e===null){var o=n.type;return typeof o=="function"&&!Ws(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Cu(e,t,o,r,a)):(e=$i(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&a)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Tr,n(s,r)&&e.ref===t.ref)return wt(e,t,a)}return t.flags|=1,e=Bt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Cu(e,t,n,r,a){if(e!==null){var o=e.memoizedProps;if(Tr(o,r)&&e.ref===t.ref)if(Pe=!1,t.pendingProps=r=o,(e.lanes&a)!==0)e.flags&131072&&(Pe=!0);else return t.lanes=e.lanes,wt(e,t,a)}return Oo(e,t,n,r,a)}function Eu(e,t,n){var r=t.pendingProps,a=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(In,Be),Be|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Y(In,Be),Be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Y(In,Be),Be|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Y(In,Be),Be|=r;return Ne(e,t,a,n),t.child}function Tu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Oo(e,t,n,r,a){var o=Me(n)?sn:je.current;return o=Dn(t,o),On(t,a),n=Ls(e,t,n,r,o,a),r=Ps(),e!==null&&!Pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,wt(e,t,a)):(X&&r&&ys(t),t.flags|=1,Ne(e,t,n,a),t.child)}function ad(e,t,n,r,a){if(Me(n)){var o=!0;Pi(t)}else o=!1;if(On(t,a),t.stateNode===null)vi(e,t),Au(t,n,r),Mo(t,n,r,a),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var d=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=Ke(c):(c=Me(n)?sn:je.current,c=Dn(t,c));var h=n.getDerivedStateFromProps,u=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";u||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||d!==c)&&Zl(t,s,r,c),At=!1;var m=t.memoizedState;s.state=m,Bi(t,r,s,a),d=t.memoizedState,l!==r||m!==d||Re.current||At?(typeof h=="function"&&(Ro(t,n,h,r),d=t.memoizedState),(l=At||Xl(t,n,l,r,m,d,c))?(u||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),s.props=r,s.state=d,s.context=c,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,iu(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:Xe(t.type,l),s.props=c,u=t.pendingProps,m=s.context,d=n.contextType,typeof d=="object"&&d!==null?d=Ke(d):(d=Me(n)?sn:je.current,d=Dn(t,d));var w=n.getDerivedStateFromProps;(h=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==u||m!==d)&&Zl(t,s,r,d),At=!1,m=t.memoizedState,s.state=m,Bi(t,r,s,a);var y=t.memoizedState;l!==u||m!==y||Re.current||At?(typeof w=="function"&&(Ro(t,n,w,r),y=t.memoizedState),(c=At||Xl(t,n,c,r,m,y,d)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,d),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,d)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=d,r=c):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Bo(e,t,n,r,o,a)}function Bo(e,t,n,r,a,o){Tu(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return a&&Ql(t,n,!1),wt(e,t,o);r=t.stateNode,R1.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Wn(t,e.child,null,o),t.child=Wn(t,null,l,o)):Ne(e,t,l,o),t.memoizedState=r.state,a&&Ql(t,n,!0),t.child}function Iu(e){var t=e.stateNode;t.pendingContext?Wl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Wl(e,t.context,!1),Cs(e,t.containerInfo)}function od(e,t,n,r,a){return _n(),$s(a),t.flags|=256,Ne(e,t,n,r),t.child}var Fo={dehydrated:null,treeContext:null,retryLane:0};function Uo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Lu(e,t,n){var r=t.pendingProps,a=ee.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(a&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),Y(ee,a&1),e===null)return Lo(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=oa(s,r,0,null),e=on(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Uo(n),t.memoizedState=Fo,e):zs(t,s));if(a=e.memoizedState,a!==null&&(l=a.dehydrated,l!==null))return M1(e,t,s,r,l,a,n);if(o){o=r.fallback,s=t.mode,a=e.child,l=a.sibling;var d={mode:"hidden",children:r.children};return!(s&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=Bt(a,d),r.subtreeFlags=a.subtreeFlags&14680064),l!==null?o=Bt(l,o):(o=on(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?Uo(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=Fo,r}return o=e.child,e=o.sibling,r=Bt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function zs(e,t){return t=oa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function si(e,t,n,r){return r!==null&&$s(r),Wn(t,e.child,null,n),e=zs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function M1(e,t,n,r,a,o,s){if(n)return t.flags&256?(t.flags&=-257,r=Wa(Error(C(422))),si(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,a=t.mode,r=oa({mode:"visible",children:r.children},a,0,null),o=on(o,a,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Wn(t,e.child,null,s),t.child.memoizedState=Uo(s),t.memoizedState=Fo,o);if(!(t.mode&1))return si(e,t,s,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(C(419)),r=Wa(o,r,void 0),si(e,t,s,r)}if(l=(s&e.childLanes)!==0,Pe||l){if(r=he,r!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|s)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,xt(e,a),nt(r,e,a,-1))}return _s(),r=Wa(Error(C(421))),si(e,t,s,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=K1.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,Fe=Rt(a.nextSibling),Ue=t,X=!0,et=null,e!==null&&(Qe[Ge++]=pt,Qe[Ge++]=ft,Qe[Ge++]=ln,pt=e.id,ft=e.overflow,ln=t),t=zs(t,r.children),t.flags|=4096,t)}function sd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Po(e.return,t,n)}function Qa(e,t,n,r,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a)}function Pu(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;if(Ne(e,t,r.children,n),r=ee.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sd(e,n,t);else if(e.tag===19)sd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Y(ee,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Fi(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Qa(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Fi(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Qa(t,!0,n,null,o);break;case"together":Qa(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function vi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function wt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Bt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Bt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function z1(e,t,n){switch(t.tag){case 3:Iu(t),_n();break;case 5:au(t);break;case 1:Me(t.type)&&Pi(t);break;case 4:Cs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Y(zi,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Y(ee,ee.current&1),t.flags|=128,null):n&t.child.childLanes?Lu(e,t,n):(Y(ee,ee.current&1),e=wt(e,t,n),e!==null?e.sibling:null);Y(ee,ee.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Pu(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),Y(ee,ee.current),r)break;return null;case 22:case 23:return t.lanes=0,Eu(e,t,n)}return wt(e,t,n)}var Ru,Do,Mu,zu;Ru=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Do=function(){};Mu=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,rn(dt.current);var o=null;switch(n){case"input":a=lo(e,a),r=lo(e,r),o=[];break;case"select":a=ne({},a,{value:void 0}),r=ne({},r,{value:void 0}),o=[];break;case"textarea":a=po(e,a),r=po(e,r),o=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ii)}ho(n,r);var s;n=null;for(c in a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&a[c]!=null)if(c==="style"){var l=a[c];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(jr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var d=r[c];if(l=a!=null?a[c]:void 0,r.hasOwnProperty(c)&&d!==l&&(d!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||d&&d.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in d)d.hasOwnProperty(s)&&l[s]!==d[s]&&(n||(n={}),n[s]=d[s])}else n||(o||(o=[]),o.push(c,n)),n=d;else c==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,l=l?l.__html:void 0,d!=null&&l!==d&&(o=o||[]).push(c,d)):c==="children"?typeof d!="string"&&typeof d!="number"||(o=o||[]).push(c,""+d):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(jr.hasOwnProperty(c)?(d!=null&&c==="onScroll"&&q("scroll",e),o||l===d||(o=[])):(o=o||[]).push(c,d))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};zu=function(e,t,n,r){n!==r&&(t.flags|=4)};function or(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function O1(e,t,n){var r=t.pendingProps;switch(bs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return be(t),null;case 1:return Me(t.type)&&Li(),be(t),null;case 3:return r=t.stateNode,Qn(),J(Re),J(je),Ts(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ai(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,et!==null&&(Yo(et),et=null))),Do(e,t),be(t),null;case 5:Es(t);var a=rn(Mr.current);if(n=t.type,e!==null&&t.stateNode!=null)Mu(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return be(t),null}if(e=rn(dt.current),ai(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[st]=t,r[Pr]=o,e=(t.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(a=0;a<ur.length;a++)q(ur[a],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":gl(r,o),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},q("invalid",r);break;case"textarea":wl(r,o),q("invalid",r)}ho(n,o),a=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&ii(r.textContent,l,e),a=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&ii(r.textContent,l,e),a=["children",""+l]):jr.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&q("scroll",r)}switch(n){case"input":qr(r),xl(r,o,!0);break;case"textarea":qr(r),vl(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ii)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=cc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[st]=t,e[Pr]=r,Ru(e,t,!1,!1),t.stateNode=e;e:{switch(s=mo(n,r),n){case"dialog":q("cancel",e),q("close",e),a=r;break;case"iframe":case"object":case"embed":q("load",e),a=r;break;case"video":case"audio":for(a=0;a<ur.length;a++)q(ur[a],e);a=r;break;case"source":q("error",e),a=r;break;case"img":case"image":case"link":q("error",e),q("load",e),a=r;break;case"details":q("toggle",e),a=r;break;case"input":gl(e,r),a=lo(e,r),q("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=ne({},r,{value:void 0}),q("invalid",e);break;case"textarea":wl(e,r),a=po(e,r),q("invalid",e);break;default:a=r}ho(n,a),l=a;for(o in l)if(l.hasOwnProperty(o)){var d=l[o];o==="style"?fc(e,d):o==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&uc(e,d)):o==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&kr(e,d):typeof d=="number"&&kr(e,""+d):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(jr.hasOwnProperty(o)?d!=null&&o==="onScroll"&&q("scroll",e):d!=null&&os(e,o,d,s))}switch(n){case"input":qr(e),xl(e,r,!1);break;case"textarea":qr(e),vl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ut(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Pn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Pn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ii)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return be(t),null;case 6:if(e&&t.stateNode!=null)zu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=rn(Mr.current),rn(dt.current),ai(t)){if(r=t.stateNode,n=t.memoizedProps,r[st]=t,(o=r.nodeValue!==n)&&(e=Ue,e!==null))switch(e.tag){case 3:ii(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ii(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[st]=t,t.stateNode=r}return be(t),null;case 13:if(J(ee),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&Fe!==null&&t.mode&1&&!(t.flags&128))eu(),_n(),t.flags|=98560,o=!1;else if(o=ai(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(C(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(C(317));o[st]=t}else _n(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;be(t),o=!1}else et!==null&&(Yo(et),et=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ee.current&1?ue===0&&(ue=3):_s())),t.updateQueue!==null&&(t.flags|=4),be(t),null);case 4:return Qn(),Do(e,t),e===null&&Ir(t.stateNode.containerInfo),be(t),null;case 10:return As(t.type._context),be(t),null;case 17:return Me(t.type)&&Li(),be(t),null;case 19:if(J(ee),o=t.memoizedState,o===null)return be(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)or(o,!1);else{if(ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Fi(e),s!==null){for(t.flags|=128,or(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Y(ee,ee.current&1|2),t.child}e=e.sibling}o.tail!==null&&ae()>Hn&&(t.flags|=128,r=!0,or(o,!1),t.lanes=4194304)}else{if(!r)if(e=Fi(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),or(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!X)return be(t),null}else 2*ae()-o.renderingStartTime>Hn&&n!==1073741824&&(t.flags|=128,r=!0,or(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ae(),t.sibling=null,n=ee.current,Y(ee,r?n&1|2:n&1),t):(be(t),null);case 22:case 23:return Ds(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Be&1073741824&&(be(t),t.subtreeFlags&6&&(t.flags|=8192)):be(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function B1(e,t){switch(bs(t),t.tag){case 1:return Me(t.type)&&Li(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qn(),J(Re),J(je),Ts(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Es(t),null;case 13:if(J(ee),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));_n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return J(ee),null;case 4:return Qn(),null;case 10:return As(t.type._context),null;case 22:case 23:return Ds(),null;case 24:return null;default:return null}}var li=!1,$e=!1,F1=typeof WeakSet=="function"?WeakSet:Set,P=null;function Tn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(e,t,r)}else n.current=null}function _o(e,t,n){try{n()}catch(r){re(e,t,r)}}var ld=!1;function U1(e,t){if(Ao=Ci,e=Dc(),vs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,d=-1,c=0,h=0,u=e,m=null;t:for(;;){for(var w;u!==n||a!==0&&u.nodeType!==3||(l=s+a),u!==o||r!==0&&u.nodeType!==3||(d=s+r),u.nodeType===3&&(s+=u.nodeValue.length),(w=u.firstChild)!==null;)m=u,u=w;for(;;){if(u===e)break t;if(m===n&&++c===a&&(l=s),m===o&&++h===r&&(d=s),(w=u.nextSibling)!==null)break;u=m,m=u.parentNode}u=w}n=l===-1||d===-1?null:{start:l,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(So={focusedElem:e,selectionRange:n},Ci=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var b=y.memoizedProps,j=y.memoizedState,f=t.stateNode,p=f.getSnapshotBeforeUpdate(t.elementType===t.type?b:Xe(t.type,b),j);f.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch($){re(t,t.return,$)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return y=ld,ld=!1,y}function vr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&_o(t,n,o)}a=a.next}while(a!==r)}}function ia(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wo(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ou(e){var t=e.alternate;t!==null&&(e.alternate=null,Ou(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[st],delete t[Pr],delete t[Eo],delete t[$1],delete t[j1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bu(e){return e.tag===5||e.tag===3||e.tag===4}function dd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ii));else if(r!==4&&(e=e.child,e!==null))for(Qo(e,t,n),e=e.sibling;e!==null;)Qo(e,t,n),e=e.sibling}function Go(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Go(e,t,n),e=e.sibling;e!==null;)Go(e,t,n),e=e.sibling}var xe=null,Ze=!1;function $t(e,t,n){for(n=n.child;n!==null;)Fu(e,t,n),n=n.sibling}function Fu(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(qi,n)}catch{}switch(n.tag){case 5:$e||Tn(n,t);case 6:var r=xe,a=Ze;xe=null,$t(e,t,n),xe=r,Ze=a,xe!==null&&(Ze?(e=xe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(Ze?(e=xe,n=n.stateNode,e.nodeType===8?Oa(e.parentNode,n):e.nodeType===1&&Oa(e,n),Cr(e)):Oa(xe,n.stateNode));break;case 4:r=xe,a=Ze,xe=n.stateNode.containerInfo,Ze=!0,$t(e,t,n),xe=r,Ze=a;break;case 0:case 11:case 14:case 15:if(!$e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var o=a,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&_o(n,t,s),a=a.next}while(a!==r)}$t(e,t,n);break;case 1:if(!$e&&(Tn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){re(n,t,l)}$t(e,t,n);break;case 21:$t(e,t,n);break;case 22:n.mode&1?($e=(r=$e)||n.memoizedState!==null,$t(e,t,n),$e=r):$t(e,t,n);break;default:$t(e,t,n)}}function cd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new F1),t.forEach(function(r){var a=Y1.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:xe=l.stateNode,Ze=!1;break e;case 3:xe=l.stateNode.containerInfo,Ze=!0;break e;case 4:xe=l.stateNode.containerInfo,Ze=!0;break e}l=l.return}if(xe===null)throw Error(C(160));Fu(o,s,a),xe=null,Ze=!1;var d=a.alternate;d!==null&&(d.return=null),a.return=null}catch(c){re(a,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Uu(t,e),t=t.sibling}function Uu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qe(t,e),at(e),r&4){try{vr(3,e,e.return),ia(3,e)}catch(b){re(e,e.return,b)}try{vr(5,e,e.return)}catch(b){re(e,e.return,b)}}break;case 1:qe(t,e),at(e),r&512&&n!==null&&Tn(n,n.return);break;case 5:if(qe(t,e),at(e),r&512&&n!==null&&Tn(n,n.return),e.flags&32){var a=e.stateNode;try{kr(a,"")}catch(b){re(e,e.return,b)}}if(r&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&lc(a,o),mo(l,s);var c=mo(l,o);for(s=0;s<d.length;s+=2){var h=d[s],u=d[s+1];h==="style"?fc(a,u):h==="dangerouslySetInnerHTML"?uc(a,u):h==="children"?kr(a,u):os(a,h,u,c)}switch(l){case"input":co(a,o);break;case"textarea":dc(a,o);break;case"select":var m=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?Pn(a,!!o.multiple,w,!1):m!==!!o.multiple&&(o.defaultValue!=null?Pn(a,!!o.multiple,o.defaultValue,!0):Pn(a,!!o.multiple,o.multiple?[]:"",!1))}a[Pr]=o}catch(b){re(e,e.return,b)}}break;case 6:if(qe(t,e),at(e),r&4){if(e.stateNode===null)throw Error(C(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(b){re(e,e.return,b)}}break;case 3:if(qe(t,e),at(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Cr(t.containerInfo)}catch(b){re(e,e.return,b)}break;case 4:qe(t,e),at(e);break;case 13:qe(t,e),at(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(Fs=ae())),r&4&&cd(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?($e=(c=$e)||h,qe(t,e),$e=c):qe(t,e),at(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!h&&e.mode&1)for(P=e,h=e.child;h!==null;){for(u=P=h;P!==null;){switch(m=P,w=m.child,m.tag){case 0:case 11:case 14:case 15:vr(4,m,m.return);break;case 1:Tn(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(b){re(r,n,b)}}break;case 5:Tn(m,m.return);break;case 22:if(m.memoizedState!==null){pd(u);continue}}w!==null?(w.return=m,P=w):pd(u)}h=h.sibling}e:for(h=null,u=e;;){if(u.tag===5){if(h===null){h=u;try{a=u.stateNode,c?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=u.stateNode,d=u.memoizedProps.style,s=d!=null&&d.hasOwnProperty("display")?d.display:null,l.style.display=pc("display",s))}catch(b){re(e,e.return,b)}}}else if(u.tag===6){if(h===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(b){re(e,e.return,b)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===e)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===e)break e;for(;u.sibling===null;){if(u.return===null||u.return===e)break e;h===u&&(h=null),u=u.return}h===u&&(h=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:qe(t,e),at(e),r&4&&cd(e);break;case 21:break;default:qe(t,e),at(e)}}function at(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bu(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(kr(a,""),r.flags&=-33);var o=dd(e);Go(e,o,a);break;case 3:case 4:var s=r.stateNode.containerInfo,l=dd(e);Qo(e,l,s);break;default:throw Error(C(161))}}catch(d){re(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function D1(e,t,n){P=e,Du(e)}function Du(e,t,n){for(var r=(e.mode&1)!==0;P!==null;){var a=P,o=a.child;if(a.tag===22&&r){var s=a.memoizedState!==null||li;if(!s){var l=a.alternate,d=l!==null&&l.memoizedState!==null||$e;l=li;var c=$e;if(li=s,($e=d)&&!c)for(P=a;P!==null;)s=P,d=s.child,s.tag===22&&s.memoizedState!==null?fd(a):d!==null?(d.return=s,P=d):fd(a);for(;o!==null;)P=o,Du(o),o=o.sibling;P=a,li=l,$e=c}ud(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,P=o):ud(e)}}function ud(e){for(;P!==null;){var t=P;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:$e||ia(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!$e)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:Xe(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Yl(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Yl(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var u=h.dehydrated;u!==null&&Cr(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}$e||t.flags&512&&Wo(t)}catch(m){re(t,t.return,m)}}if(t===e){P=null;break}if(n=t.sibling,n!==null){n.return=t.return,P=n;break}P=t.return}}function pd(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var n=t.sibling;if(n!==null){n.return=t.return,P=n;break}P=t.return}}function fd(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ia(4,t)}catch(d){re(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(d){re(t,a,d)}}var o=t.return;try{Wo(t)}catch(d){re(t,o,d)}break;case 5:var s=t.return;try{Wo(t)}catch(d){re(t,s,d)}}}catch(d){re(t,t.return,d)}if(t===e){P=null;break}var l=t.sibling;if(l!==null){l.return=t.return,P=l;break}P=t.return}}var _1=Math.ceil,_i=vt.ReactCurrentDispatcher,Os=vt.ReactCurrentOwner,Ve=vt.ReactCurrentBatchConfig,W=0,he=null,de=null,we=0,Be=0,In=Wt(0),ue=0,Fr=null,cn=0,aa=0,Bs=0,yr=null,Le=null,Fs=0,Hn=1/0,ct=null,Wi=!1,Ho=null,zt=null,di=!1,Et=null,Qi=0,br=0,Vo=null,yi=-1,bi=0;function Ce(){return W&6?ae():yi!==-1?yi:yi=ae()}function Ot(e){return e.mode&1?W&2&&we!==0?we&-we:A1.transition!==null?(bi===0&&(bi=Ac()),bi):(e=K,e!==0||(e=window.event,e=e===void 0?16:Lc(e.type)),e):1}function nt(e,t,n,r){if(50<br)throw br=0,Vo=null,Error(C(185));Wr(e,n,r),(!(W&2)||e!==he)&&(e===he&&(!(W&2)&&(aa|=n),ue===4&&Nt(e,we)),ze(e,r),n===1&&W===0&&!(t.mode&1)&&(Hn=ae()+500,ta&&Qt()))}function ze(e,t){var n=e.callbackNode;Ap(e,t);var r=Ni(e,e===he?we:0);if(r===0)n!==null&&$l(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&$l(n),t===1)e.tag===0?k1(hd.bind(null,e)):Jc(hd.bind(null,e)),y1(function(){!(W&6)&&Qt()}),n=null;else{switch(Sc(r)){case 1:n=us;break;case 4:n=jc;break;case 16:n=Si;break;case 536870912:n=kc;break;default:n=Si}n=Yu(n,_u.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _u(e,t){if(yi=-1,bi=0,W&6)throw Error(C(327));var n=e.callbackNode;if(Bn()&&e.callbackNode!==n)return null;var r=Ni(e,e===he?we:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Gi(e,r);else{t=r;var a=W;W|=2;var o=Qu();(he!==e||we!==t)&&(ct=null,Hn=ae()+500,an(e,t));do try{G1();break}catch(l){Wu(e,l)}while(!0);ks(),_i.current=o,W=a,de!==null?t=0:(he=null,we=0,t=ue)}if(t!==0){if(t===2&&(a=yo(e),a!==0&&(r=a,t=Ko(e,a))),t===1)throw n=Fr,an(e,0),Nt(e,r),ze(e,ae()),n;if(t===6)Nt(e,r);else{if(a=e.current.alternate,!(r&30)&&!W1(a)&&(t=Gi(e,r),t===2&&(o=yo(e),o!==0&&(r=o,t=Ko(e,o))),t===1))throw n=Fr,an(e,0),Nt(e,r),ze(e,ae()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:en(e,Le,ct);break;case 3:if(Nt(e,r),(r&130023424)===r&&(t=Fs+500-ae(),10<t)){if(Ni(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Ce(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Co(en.bind(null,e,Le,ct),t);break}en(e,Le,ct);break;case 4:if(Nt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var s=31-tt(r);o=1<<s,s=t[s],s>a&&(a=s),r&=~o}if(r=a,r=ae()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*_1(r/1960))-r,10<r){e.timeoutHandle=Co(en.bind(null,e,Le,ct),r);break}en(e,Le,ct);break;case 5:en(e,Le,ct);break;default:throw Error(C(329))}}}return ze(e,ae()),e.callbackNode===n?_u.bind(null,e):null}function Ko(e,t){var n=yr;return e.current.memoizedState.isDehydrated&&(an(e,t).flags|=256),e=Gi(e,t),e!==2&&(t=Le,Le=n,t!==null&&Yo(t)),e}function Yo(e){Le===null?Le=e:Le.push.apply(Le,e)}function W1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!rt(o(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nt(e,t){for(t&=~Bs,t&=~aa,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tt(t),r=1<<n;e[n]=-1,t&=~r}}function hd(e){if(W&6)throw Error(C(327));Bn();var t=Ni(e,0);if(!(t&1))return ze(e,ae()),null;var n=Gi(e,t);if(e.tag!==0&&n===2){var r=yo(e);r!==0&&(t=r,n=Ko(e,r))}if(n===1)throw n=Fr,an(e,0),Nt(e,t),ze(e,ae()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,en(e,Le,ct),ze(e,ae()),null}function Us(e,t){var n=W;W|=1;try{return e(t)}finally{W=n,W===0&&(Hn=ae()+500,ta&&Qt())}}function un(e){Et!==null&&Et.tag===0&&!(W&6)&&Bn();var t=W;W|=1;var n=Ve.transition,r=K;try{if(Ve.transition=null,K=1,e)return e()}finally{K=r,Ve.transition=n,W=t,!(W&6)&&Qt()}}function Ds(){Be=In.current,J(In)}function an(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,v1(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(bs(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Li();break;case 3:Qn(),J(Re),J(je),Ts();break;case 5:Es(r);break;case 4:Qn();break;case 13:J(ee);break;case 19:J(ee);break;case 10:As(r.type._context);break;case 22:case 23:Ds()}n=n.return}if(he=e,de=e=Bt(e.current,null),we=Be=t,ue=0,Fr=null,Bs=aa=cn=0,Le=yr=null,nn!==null){for(t=0;t<nn.length;t++)if(n=nn[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=a,r.next=s}n.pending=r}nn=null}return e}function Wu(e,t){do{var n=de;try{if(ks(),xi.current=Di,Ui){for(var r=te.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Ui=!1}if(dn=0,fe=ce=te=null,wr=!1,zr=0,Os.current=null,n===null||n.return===null){ue=1,Fr=t,de=null;break}e:{var o=e,s=n.return,l=n,d=t;if(t=we,l.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var c=d,h=l,u=h.tag;if(!(h.mode&1)&&(u===0||u===11||u===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var w=td(s);if(w!==null){w.flags&=-257,nd(w,s,l,o,t),w.mode&1&&ed(o,c,t),t=w,d=c;var y=t.updateQueue;if(y===null){var b=new Set;b.add(d),t.updateQueue=b}else y.add(d);break e}else{if(!(t&1)){ed(o,c,t),_s();break e}d=Error(C(426))}}else if(X&&l.mode&1){var j=td(s);if(j!==null){!(j.flags&65536)&&(j.flags|=256),nd(j,s,l,o,t),$s(Gn(d,l));break e}}o=d=Gn(d,l),ue!==4&&(ue=2),yr===null?yr=[o]:yr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Su(o,d,t);Kl(o,f);break e;case 1:l=d;var p=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(zt===null||!zt.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var $=Nu(o,l,t);Kl(o,$);break e}}o=o.return}while(o!==null)}Hu(n)}catch(A){t=A,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function Qu(){var e=_i.current;return _i.current=Di,e===null?Di:e}function _s(){(ue===0||ue===3||ue===2)&&(ue=4),he===null||!(cn&268435455)&&!(aa&268435455)||Nt(he,we)}function Gi(e,t){var n=W;W|=2;var r=Qu();(he!==e||we!==t)&&(ct=null,an(e,t));do try{Q1();break}catch(a){Wu(e,a)}while(!0);if(ks(),W=n,_i.current=r,de!==null)throw Error(C(261));return he=null,we=0,ue}function Q1(){for(;de!==null;)Gu(de)}function G1(){for(;de!==null&&!gp();)Gu(de)}function Gu(e){var t=Ku(e.alternate,e,Be);e.memoizedProps=e.pendingProps,t===null?Hu(e):de=t,Os.current=null}function Hu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=B1(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ue=6,de=null;return}}else if(n=O1(n,t,Be),n!==null){de=n;return}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);ue===0&&(ue=5)}function en(e,t,n){var r=K,a=Ve.transition;try{Ve.transition=null,K=1,H1(e,t,n,r)}finally{Ve.transition=a,K=r}return null}function H1(e,t,n,r){do Bn();while(Et!==null);if(W&6)throw Error(C(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Sp(e,o),e===he&&(de=he=null,we=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||di||(di=!0,Yu(Si,function(){return Bn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ve.transition,Ve.transition=null;var s=K;K=1;var l=W;W|=4,Os.current=null,U1(e,n),Uu(n,e),p1(So),Ci=!!Ao,So=Ao=null,e.current=n,D1(n),xp(),W=l,K=s,Ve.transition=o}else e.current=n;if(di&&(di=!1,Et=e,Qi=a),o=e.pendingLanes,o===0&&(zt=null),yp(n.stateNode),ze(e,ae()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Wi)throw Wi=!1,e=Ho,Ho=null,e;return Qi&1&&e.tag!==0&&Bn(),o=e.pendingLanes,o&1?e===Vo?br++:(br=0,Vo=e):br=0,Qt(),null}function Bn(){if(Et!==null){var e=Sc(Qi),t=Ve.transition,n=K;try{if(Ve.transition=null,K=16>e?16:e,Et===null)var r=!1;else{if(e=Et,Et=null,Qi=0,W&6)throw Error(C(331));var a=W;for(W|=4,P=e.current;P!==null;){var o=P,s=o.child;if(P.flags&16){var l=o.deletions;if(l!==null){for(var d=0;d<l.length;d++){var c=l[d];for(P=c;P!==null;){var h=P;switch(h.tag){case 0:case 11:case 15:vr(8,h,o)}var u=h.child;if(u!==null)u.return=h,P=u;else for(;P!==null;){h=P;var m=h.sibling,w=h.return;if(Ou(h),h===c){P=null;break}if(m!==null){m.return=w,P=m;break}P=w}}}var y=o.alternate;if(y!==null){var b=y.child;if(b!==null){y.child=null;do{var j=b.sibling;b.sibling=null,b=j}while(b!==null)}}P=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,P=s;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:vr(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,P=f;break e}P=o.return}}var p=e.current;for(P=p;P!==null;){s=P;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,P=x;else e:for(s=p;P!==null;){if(l=P,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ia(9,l)}}catch(A){re(l,l.return,A)}if(l===s){P=null;break e}var $=l.sibling;if($!==null){$.return=l.return,P=$;break e}P=l.return}}if(W=a,Qt(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(qi,e)}catch{}r=!0}return r}finally{K=n,Ve.transition=t}}return!1}function md(e,t,n){t=Gn(n,t),t=Su(e,t,1),e=Mt(e,t,1),t=Ce(),e!==null&&(Wr(e,1,t),ze(e,t))}function re(e,t,n){if(e.tag===3)md(e,e,n);else for(;t!==null;){if(t.tag===3){md(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zt===null||!zt.has(r))){e=Gn(n,e),e=Nu(t,e,1),t=Mt(t,e,1),e=Ce(),t!==null&&(Wr(t,1,e),ze(t,e));break}}t=t.return}}function V1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ce(),e.pingedLanes|=e.suspendedLanes&n,he===e&&(we&n)===n&&(ue===4||ue===3&&(we&130023424)===we&&500>ae()-Fs?an(e,0):Bs|=n),ze(e,t)}function Vu(e,t){t===0&&(e.mode&1?(t=Zr,Zr<<=1,!(Zr&130023424)&&(Zr=4194304)):t=1);var n=Ce();e=xt(e,t),e!==null&&(Wr(e,t,n),ze(e,n))}function K1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vu(e,n)}function Y1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Vu(e,n)}var Ku;Ku=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Re.current)Pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Pe=!1,z1(e,t,n);Pe=!!(e.flags&131072)}else Pe=!1,X&&t.flags&1048576&&Xc(t,Mi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;vi(e,t),e=t.pendingProps;var a=Dn(t,je.current);On(t,n),a=Ls(null,t,r,e,a,n);var o=Ps();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Me(r)?(o=!0,Pi(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Ns(t),a.updater=ra,t.stateNode=a,a._reactInternals=t,Mo(t,r,e,n),t=Bo(null,t,r,!0,o,n)):(t.tag=0,X&&o&&ys(t),Ne(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(vi(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=J1(r),e=Xe(r,e),a){case 0:t=Oo(null,t,r,e,n);break e;case 1:t=ad(null,t,r,e,n);break e;case 11:t=rd(null,t,r,e,n);break e;case 14:t=id(null,t,r,Xe(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Xe(r,a),Oo(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Xe(r,a),ad(e,t,r,a,n);case 3:e:{if(Iu(t),e===null)throw Error(C(387));r=t.pendingProps,o=t.memoizedState,a=o.element,iu(e,t),Bi(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=Gn(Error(C(423)),t),t=od(e,t,r,n,a);break e}else if(r!==a){a=Gn(Error(C(424)),t),t=od(e,t,r,n,a);break e}else for(Fe=Rt(t.stateNode.containerInfo.firstChild),Ue=t,X=!0,et=null,n=nu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_n(),r===a){t=wt(e,t,n);break e}Ne(e,t,r,n)}t=t.child}return t;case 5:return au(t),e===null&&Lo(t),r=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,s=a.children,No(r,a)?s=null:o!==null&&No(r,o)&&(t.flags|=32),Tu(e,t),Ne(e,t,s,n),t.child;case 6:return e===null&&Lo(t),null;case 13:return Lu(e,t,n);case 4:return Cs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Wn(t,null,r,n):Ne(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Xe(r,a),rd(e,t,r,a,n);case 7:return Ne(e,t,t.pendingProps,n),t.child;case 8:return Ne(e,t,t.pendingProps.children,n),t.child;case 12:return Ne(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,Y(zi,r._currentValue),r._currentValue=s,o!==null)if(rt(o.value,s)){if(o.children===a.children&&!Re.current){t=wt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var d=l.firstContext;d!==null;){if(d.context===r){if(o.tag===1){d=ht(-1,n&-n),d.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?d.next=d:(d.next=h.next,h.next=d),c.pending=d}}o.lanes|=n,d=o.alternate,d!==null&&(d.lanes|=n),Po(o.return,n,t),l.lanes|=n;break}d=d.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(C(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Po(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Ne(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,On(t,n),a=Ke(a),r=r(a),t.flags|=1,Ne(e,t,r,n),t.child;case 14:return r=t.type,a=Xe(r,t.pendingProps),a=Xe(r.type,a),id(e,t,r,a,n);case 15:return Cu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:Xe(r,a),vi(e,t),t.tag=1,Me(r)?(e=!0,Pi(t)):e=!1,On(t,n),Au(t,r,a),Mo(t,r,a,n),Bo(null,t,r,!0,e,n);case 19:return Pu(e,t,n);case 22:return Eu(e,t,n)}throw Error(C(156,t.tag))};function Yu(e,t){return $c(e,t)}function q1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(e,t,n,r){return new q1(e,t,n,r)}function Ws(e){return e=e.prototype,!(!e||!e.isReactComponent)}function J1(e){if(typeof e=="function")return Ws(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ls)return 11;if(e===ds)return 14}return 2}function Bt(e,t){var n=e.alternate;return n===null?(n=He(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $i(e,t,n,r,a,o){var s=2;if(r=e,typeof e=="function")Ws(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case bn:return on(n.children,a,o,t);case ss:s=8,a|=8;break;case io:return e=He(12,n,t,a|2),e.elementType=io,e.lanes=o,e;case ao:return e=He(13,n,t,a),e.elementType=ao,e.lanes=o,e;case oo:return e=He(19,n,t,a),e.elementType=oo,e.lanes=o,e;case ac:return oa(n,a,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case rc:s=10;break e;case ic:s=9;break e;case ls:s=11;break e;case ds:s=14;break e;case kt:s=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=He(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function on(e,t,n,r){return e=He(7,e,r,t),e.lanes=n,e}function oa(e,t,n,r){return e=He(22,e,r,t),e.elementType=ac,e.lanes=n,e.stateNode={isHidden:!1},e}function Ga(e,t,n){return e=He(6,e,null,t),e.lanes=n,e}function Ha(e,t,n){return t=He(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function X1(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sa(0),this.expirationTimes=Sa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sa(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Qs(e,t,n,r,a,o,s,l,d){return e=new X1(e,t,n,l,d),t===1?(t=1,o===!0&&(t|=8)):t=0,o=He(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ns(o),e}function Z1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function qu(e){if(!e)return Dt;e=e._reactInternals;e:{if(fn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Me(n))return qc(e,n,t)}return t}function Ju(e,t,n,r,a,o,s,l,d){return e=Qs(n,r,!0,e,a,o,s,l,d),e.context=qu(null),n=e.current,r=Ce(),a=Ot(n),o=ht(r,a),o.callback=t??null,Mt(n,o,a),e.current.lanes=a,Wr(e,a,r),ze(e,r),e}function sa(e,t,n,r){var a=t.current,o=Ce(),s=Ot(a);return n=qu(n),t.context===null?t.context=n:t.pendingContext=n,t=ht(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Mt(a,t,s),e!==null&&(nt(e,a,s,o),gi(e,a,s)),s}function Hi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function gd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Gs(e,t){gd(e,t),(e=e.alternate)&&gd(e,t)}function ef(){return null}var Xu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hs(e){this._internalRoot=e}la.prototype.render=Hs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));sa(e,t,null,null)};la.prototype.unmount=Hs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;un(function(){sa(null,e,null,null)}),t[gt]=null}};function la(e){this._internalRoot=e}la.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ec();e={blockedOn:null,target:e,priority:t};for(var n=0;n<St.length&&t!==0&&t<St[n].priority;n++);St.splice(n,0,e),n===0&&Ic(e)}};function Vs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function da(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function xd(){}function tf(e,t,n,r,a){if(a){if(typeof r=="function"){var o=r;r=function(){var c=Hi(s);o.call(c)}}var s=Ju(t,r,e,0,null,!1,!1,"",xd);return e._reactRootContainer=s,e[gt]=s.current,Ir(e.nodeType===8?e.parentNode:e),un(),s}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var l=r;r=function(){var c=Hi(d);l.call(c)}}var d=Qs(e,0,!1,null,null,!1,!1,"",xd);return e._reactRootContainer=d,e[gt]=d.current,Ir(e.nodeType===8?e.parentNode:e),un(function(){sa(t,d,n,r)}),d}function ca(e,t,n,r,a){var o=n._reactRootContainer;if(o){var s=o;if(typeof a=="function"){var l=a;a=function(){var d=Hi(s);l.call(d)}}sa(t,s,e,a)}else s=tf(n,t,e,a,r);return Hi(s)}Nc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=cr(t.pendingLanes);n!==0&&(ps(t,n|1),ze(t,ae()),!(W&6)&&(Hn=ae()+500,Qt()))}break;case 13:un(function(){var r=xt(e,1);if(r!==null){var a=Ce();nt(r,e,1,a)}}),Gs(e,1)}};fs=function(e){if(e.tag===13){var t=xt(e,134217728);if(t!==null){var n=Ce();nt(t,e,134217728,n)}Gs(e,134217728)}};Cc=function(e){if(e.tag===13){var t=Ot(e),n=xt(e,t);if(n!==null){var r=Ce();nt(n,e,t,r)}Gs(e,t)}};Ec=function(){return K};Tc=function(e,t){var n=K;try{return K=e,t()}finally{K=n}};xo=function(e,t,n){switch(t){case"input":if(co(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=ea(r);if(!a)throw Error(C(90));sc(r),co(r,a)}}}break;case"textarea":dc(e,n);break;case"select":t=n.value,t!=null&&Pn(e,!!n.multiple,t,!1)}};gc=Us;xc=un;var nf={usingClientEntryPoint:!1,Events:[Gr,An,ea,hc,mc,Us]},sr={findFiberByHostInstance:tn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rf={bundleType:sr.bundleType,version:sr.version,rendererPackageName:sr.rendererPackageName,rendererConfig:sr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yc(e),e===null?null:e.stateNode},findFiberByHostInstance:sr.findFiberByHostInstance||ef,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ci=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ci.isDisabled&&ci.supportsFiber)try{qi=ci.inject(rf),lt=ci}catch{}}_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nf;_e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vs(t))throw Error(C(200));return Z1(e,t,null,n)};_e.createRoot=function(e,t){if(!Vs(e))throw Error(C(299));var n=!1,r="",a=Xu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=Qs(e,1,!1,null,null,n,!1,r,a),e[gt]=t.current,Ir(e.nodeType===8?e.parentNode:e),new Hs(t)};_e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=yc(t),e=e===null?null:e.stateNode,e};_e.flushSync=function(e){return un(e)};_e.hydrate=function(e,t,n){if(!da(t))throw Error(C(200));return ca(null,e,t,!0,n)};_e.hydrateRoot=function(e,t,n){if(!Vs(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,a=!1,o="",s=Xu;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Ju(t,null,e,1,n??null,a,!1,o,s),e[gt]=t.current,Ir(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new la(t)};_e.render=function(e,t,n){if(!da(t))throw Error(C(200));return ca(null,e,t,!1,n)};_e.unmountComponentAtNode=function(e){if(!da(e))throw Error(C(40));return e._reactRootContainer?(un(function(){ca(null,null,e,!1,function(){e._reactRootContainer=null,e[gt]=null})}),!0):!1};_e.unstable_batchedUpdates=Us;_e.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!da(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return ca(e,t,n,!1,r)};_e.version="18.3.1-next-f1338f8080-20240426";function Zu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zu)}catch(e){console.error(e)}}Zu(),Zd.exports=_e;var af=Zd.exports,wd=af;no.createRoot=wd.createRoot,no.hydrateRoot=wd.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ur(){return Ur=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ur.apply(this,arguments)}var Tt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Tt||(Tt={}));const vd="popstate";function of(e){e===void 0&&(e={});function t(a,o){let{pathname:s="/",search:l="",hash:d=""}=hn(a.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),qo("",{pathname:s,search:l,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(a,o){let s=a.document.querySelector("base"),l="";if(s&&s.getAttribute("href")){let d=a.location.href,c=d.indexOf("#");l=c===-1?d:d.slice(0,c)}return l+"#"+(typeof o=="string"?o:Vi(o))}function r(a,o){Ks(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return lf(t,n,r,e)}function oe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ks(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function sf(){return Math.random().toString(36).substr(2,8)}function yd(e,t){return{usr:e.state,key:e.key,idx:t}}function qo(e,t,n,r){return n===void 0&&(n=null),Ur({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?hn(t):t,{state:n,key:t&&t.key||r||sf()})}function Vi(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function hn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function lf(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:o=!1}=r,s=a.history,l=Tt.Pop,d=null,c=h();c==null&&(c=0,s.replaceState(Ur({},s.state,{idx:c}),""));function h(){return(s.state||{idx:null}).idx}function u(){l=Tt.Pop;let j=h(),f=j==null?null:j-c;c=j,d&&d({action:l,location:b.location,delta:f})}function m(j,f){l=Tt.Push;let p=qo(b.location,j,f);n&&n(p,j),c=h()+1;let x=yd(p,c),$=b.createHref(p);try{s.pushState(x,"",$)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;a.location.assign($)}o&&d&&d({action:l,location:b.location,delta:1})}function w(j,f){l=Tt.Replace;let p=qo(b.location,j,f);n&&n(p,j),c=h();let x=yd(p,c),$=b.createHref(p);s.replaceState(x,"",$),o&&d&&d({action:l,location:b.location,delta:0})}function y(j){let f=a.location.origin!=="null"?a.location.origin:a.location.href,p=typeof j=="string"?j:Vi(j);return p=p.replace(/ $/,"%20"),oe(f,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,f)}let b={get action(){return l},get location(){return e(a,s)},listen(j){if(d)throw new Error("A history only accepts one active listener");return a.addEventListener(vd,u),d=j,()=>{a.removeEventListener(vd,u),d=null}},createHref(j){return t(a,j)},createURL:y,encodeLocation(j){let f=y(j);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:m,replace:w,go(j){return s.go(j)}};return b}var bd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(bd||(bd={}));function df(e,t,n){return n===void 0&&(n="/"),cf(e,t,n)}function cf(e,t,n,r){let a=typeof t=="string"?hn(t):t,o=Ys(a.pathname||"/",n);if(o==null)return null;let s=e0(e);uf(s);let l=null;for(let d=0;l==null&&d<s.length;++d){let c=jf(o);l=yf(s[d],c)}return l}function e0(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(o,s,l)=>{let d={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};d.relativePath.startsWith("/")&&(oe(d.relativePath.startsWith(r),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(r.length));let c=Ft([r,d.relativePath]),h=n.concat(d);o.children&&o.children.length>0&&(oe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),e0(o.children,t,h,c)),!(o.path==null&&!o.index)&&t.push({path:c,score:wf(c,o.index),routesMeta:h})};return e.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))a(o,s);else for(let d of t0(o.path))a(o,s,d)}),t}function t0(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return a?[o,""]:[o];let s=t0(r.join("/")),l=[];return l.push(...s.map(d=>d===""?o:[o,d].join("/"))),a&&l.push(...s),l.map(d=>e.startsWith("/")&&d===""?"/":d)}function uf(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:vf(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const pf=/^:[\w-]+$/,ff=3,hf=2,mf=1,gf=10,xf=-2,$d=e=>e==="*";function wf(e,t){let n=e.split("/"),r=n.length;return n.some($d)&&(r+=xf),t&&(r+=hf),n.filter(a=>!$d(a)).reduce((a,o)=>a+(pf.test(o)?ff:o===""?mf:gf),r)}function vf(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function yf(e,t,n){let{routesMeta:r}=e,a={},o="/",s=[];for(let l=0;l<r.length;++l){let d=r[l],c=l===r.length-1,h=o==="/"?t:t.slice(o.length)||"/",u=bf({path:d.relativePath,caseSensitive:d.caseSensitive,end:c},h),m=d.route;if(!u)return null;Object.assign(a,u.params),s.push({params:a,pathname:Ft([o,u.pathname]),pathnameBase:Nf(Ft([o,u.pathnameBase])),route:m}),u.pathnameBase!=="/"&&(o=Ft([o,u.pathnameBase]))}return s}function bf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=$f(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],s=o.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce((c,h,u)=>{let{paramName:m,isOptional:w}=h;if(m==="*"){let b=l[u]||"";s=o.slice(0,o.length-b.length).replace(/(.)\/+$/,"$1")}const y=l[u];return w&&!y?c[m]=void 0:c[m]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:o,pathnameBase:s,pattern:e}}function $f(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ks(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,d)=>(r.push({paramName:l,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function jf(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ks(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ys(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function kf(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?hn(e):e;return{pathname:n?n.startsWith("/")?n:Af(n,t):t,search:Cf(r),hash:Ef(a)}}function Af(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function Va(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Sf(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function qs(e,t){let n=Sf(e);return t?n.map((r,a)=>a===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Js(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=hn(e):(a=Ur({},e),oe(!a.pathname||!a.pathname.includes("?"),Va("?","pathname","search",a)),oe(!a.pathname||!a.pathname.includes("#"),Va("#","pathname","hash",a)),oe(!a.search||!a.search.includes("#"),Va("#","search","hash",a)));let o=e===""||a.pathname==="",s=o?"/":a.pathname,l;if(s==null)l=n;else{let u=t.length-1;if(!r&&s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),u-=1;a.pathname=m.join("/")}l=u>=0?t[u]:"/"}let d=kf(a,l),c=s&&s!=="/"&&s.endsWith("/"),h=(o||s===".")&&n.endsWith("/");return!d.pathname.endsWith("/")&&(c||h)&&(d.pathname+="/"),d}const Ft=e=>e.join("/").replace(/\/\/+/g,"/"),Nf=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Cf=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ef=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Tf(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const n0=["post","put","patch","delete"];new Set(n0);const If=["get",...n0];new Set(If);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dr(){return Dr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Dr.apply(this,arguments)}const Xs=g.createContext(null),Lf=g.createContext(null),Gt=g.createContext(null),ua=g.createContext(null),Ht=g.createContext({outlet:null,matches:[],isDataRoute:!1}),r0=g.createContext(null);function Pf(e,t){let{relative:n}=t===void 0?{}:t;Jn()||oe(!1);let{basename:r,navigator:a}=g.useContext(Gt),{hash:o,pathname:s,search:l}=a0(e,{relative:n}),d=s;return r!=="/"&&(d=s==="/"?r:Ft([r,s])),a.createHref({pathname:d,search:l,hash:o})}function Jn(){return g.useContext(ua)!=null}function mn(){return Jn()||oe(!1),g.useContext(ua).location}function i0(e){g.useContext(Gt).static||g.useLayoutEffect(e)}function ie(){let{isDataRoute:e}=g.useContext(Ht);return e?Hf():Rf()}function Rf(){Jn()||oe(!1);let e=g.useContext(Xs),{basename:t,future:n,navigator:r}=g.useContext(Gt),{matches:a}=g.useContext(Ht),{pathname:o}=mn(),s=JSON.stringify(qs(a,n.v7_relativeSplatPath)),l=g.useRef(!1);return i0(()=>{l.current=!0}),g.useCallback(function(c,h){if(h===void 0&&(h={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let u=Js(c,JSON.parse(s),o,h.relative==="path");e==null&&t!=="/"&&(u.pathname=u.pathname==="/"?t:Ft([t,u.pathname])),(h.replace?r.replace:r.push)(u,h.state,h)},[t,r,s,o,e])}function a0(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=g.useContext(Gt),{matches:a}=g.useContext(Ht),{pathname:o}=mn(),s=JSON.stringify(qs(a,r.v7_relativeSplatPath));return g.useMemo(()=>Js(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function Mf(e,t){return zf(e,t)}function zf(e,t,n,r){Jn()||oe(!1);let{navigator:a}=g.useContext(Gt),{matches:o}=g.useContext(Ht),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let d=s?s.pathnameBase:"/";s&&s.route;let c=mn(),h;if(t){var u;let j=typeof t=="string"?hn(t):t;d==="/"||(u=j.pathname)!=null&&u.startsWith(d)||oe(!1),h=j}else h=c;let m=h.pathname||"/",w=m;if(d!=="/"){let j=d.replace(/^\//,"").split("/");w="/"+m.replace(/^\//,"").split("/").slice(j.length).join("/")}let y=df(e,{pathname:w}),b=Df(y&&y.map(j=>Object.assign({},j,{params:Object.assign({},l,j.params),pathname:Ft([d,a.encodeLocation?a.encodeLocation(j.pathname).pathname:j.pathname]),pathnameBase:j.pathnameBase==="/"?d:Ft([d,a.encodeLocation?a.encodeLocation(j.pathnameBase).pathname:j.pathnameBase])})),o,n,r);return t&&b?g.createElement(ua.Provider,{value:{location:Dr({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Tt.Pop}},b):b}function Of(){let e=Gf(),t=Tf(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return g.createElement(g.Fragment,null,g.createElement("h2",null,"Unexpected Application Error!"),g.createElement("h3",{style:{fontStyle:"italic"}},t),n?g.createElement("pre",{style:a},n):null,null)}const Bf=g.createElement(Of,null);class Ff extends g.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?g.createElement(Ht.Provider,{value:this.props.routeContext},g.createElement(r0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Uf(e){let{routeContext:t,match:n,children:r}=e,a=g.useContext(Xs);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),g.createElement(Ht.Provider,{value:t},r)}function Df(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=(a=n)==null?void 0:a.errors;if(l!=null){let h=s.findIndex(u=>u.route.id&&(l==null?void 0:l[u.route.id])!==void 0);h>=0||oe(!1),s=s.slice(0,Math.min(s.length,h+1))}let d=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<s.length;h++){let u=s[h];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(c=h),u.route.id){let{loaderData:m,errors:w}=n,y=u.route.loader&&m[u.route.id]===void 0&&(!w||w[u.route.id]===void 0);if(u.route.lazy||y){d=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((h,u,m)=>{let w,y=!1,b=null,j=null;n&&(w=l&&u.route.id?l[u.route.id]:void 0,b=u.route.errorElement||Bf,d&&(c<0&&m===0?(Vf("route-fallback"),y=!0,j=null):c===m&&(y=!0,j=u.route.hydrateFallbackElement||null)));let f=t.concat(s.slice(0,m+1)),p=()=>{let x;return w?x=b:y?x=j:u.route.Component?x=g.createElement(u.route.Component,null):u.route.element?x=u.route.element:x=h,g.createElement(Uf,{match:u,routeContext:{outlet:h,matches:f,isDataRoute:n!=null},children:x})};return n&&(u.route.ErrorBoundary||u.route.errorElement||m===0)?g.createElement(Ff,{location:n.location,revalidation:n.revalidation,component:b,error:w,children:p(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):p()},null)}var o0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(o0||{}),s0=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(s0||{});function _f(e){let t=g.useContext(Xs);return t||oe(!1),t}function Wf(e){let t=g.useContext(Lf);return t||oe(!1),t}function Qf(e){let t=g.useContext(Ht);return t||oe(!1),t}function l0(e){let t=Qf(),n=t.matches[t.matches.length-1];return n.route.id||oe(!1),n.route.id}function Gf(){var e;let t=g.useContext(r0),n=Wf(),r=l0();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Hf(){let{router:e}=_f(o0.UseNavigateStable),t=l0(s0.UseNavigateStable),n=g.useRef(!1);return i0(()=>{n.current=!0}),g.useCallback(function(a,o){o===void 0&&(o={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Dr({fromRouteId:t},o)))},[e,t])}const jd={};function Vf(e,t,n){jd[e]||(jd[e]=!0)}function Kf(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Jo(e){let{to:t,replace:n,state:r,relative:a}=e;Jn()||oe(!1);let{future:o,static:s}=g.useContext(Gt),{matches:l}=g.useContext(Ht),{pathname:d}=mn(),c=ie(),h=Js(t,qs(l,o.v7_relativeSplatPath),d,a==="path"),u=JSON.stringify(h);return g.useEffect(()=>c(JSON.parse(u),{replace:n,state:r,relative:a}),[c,u,a,n,r]),null}function Z(e){oe(!1)}function Yf(e){let{basename:t="/",children:n=null,location:r,navigationType:a=Tt.Pop,navigator:o,static:s=!1,future:l}=e;Jn()&&oe(!1);let d=t.replace(/^\/*/,"/"),c=g.useMemo(()=>({basename:d,navigator:o,static:s,future:Dr({v7_relativeSplatPath:!1},l)}),[d,l,o,s]);typeof r=="string"&&(r=hn(r));let{pathname:h="/",search:u="",hash:m="",state:w=null,key:y="default"}=r,b=g.useMemo(()=>{let j=Ys(h,d);return j==null?null:{location:{pathname:j,search:u,hash:m,state:w,key:y},navigationType:a}},[d,h,u,m,w,y,a]);return b==null?null:g.createElement(Gt.Provider,{value:c},g.createElement(ua.Provider,{children:n,value:b}))}function qf(e){let{children:t,location:n}=e;return Mf(Xo(t),n)}new Promise(()=>{});function Xo(e,t){t===void 0&&(t=[]);let n=[];return g.Children.forEach(e,(r,a)=>{if(!g.isValidElement(r))return;let o=[...t,a];if(r.type===g.Fragment){n.push.apply(n,Xo(r.props.children,o));return}r.type!==Z&&oe(!1),!r.props.index||!r.props.children||oe(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Xo(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Zo(){return Zo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zo.apply(this,arguments)}function Jf(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Xf(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Zf(e,t){return e.button===0&&(!t||t==="_self")&&!Xf(e)}const e2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],t2="6";try{window.__reactRouterVersion=t2}catch{}const n2="startTransition",kd=V0[n2];function r2(e){let{basename:t,children:n,future:r,window:a}=e,o=g.useRef();o.current==null&&(o.current=of({window:a,v5Compat:!0}));let s=o.current,[l,d]=g.useState({action:s.action,location:s.location}),{v7_startTransition:c}=r||{},h=g.useCallback(u=>{c&&kd?kd(()=>d(u)):d(u)},[d,c]);return g.useLayoutEffect(()=>s.listen(h),[s,h]),g.useEffect(()=>Kf(r),[r]),g.createElement(Yf,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}const i2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",a2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$r=g.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:o,replace:s,state:l,target:d,to:c,preventScrollReset:h,viewTransition:u}=t,m=Jf(t,e2),{basename:w}=g.useContext(Gt),y,b=!1;if(typeof c=="string"&&a2.test(c)&&(y=c,i2))try{let x=new URL(window.location.href),$=c.startsWith("//")?new URL(x.protocol+c):new URL(c),A=Ys($.pathname,w);$.origin===x.origin&&A!=null?c=A+$.search+$.hash:b=!0}catch{}let j=Pf(c,{relative:a}),f=o2(c,{replace:s,state:l,target:d,preventScrollReset:h,relative:a,viewTransition:u});function p(x){r&&r(x),x.defaultPrevented||f(x)}return g.createElement("a",Zo({},m,{href:y||j,onClick:b||o?r:p,ref:n,target:d}))});var Ad;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ad||(Ad={}));var Sd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Sd||(Sd={}));function o2(e,t){let{target:n,replace:r,state:a,preventScrollReset:o,relative:s,viewTransition:l}=t===void 0?{}:t,d=ie(),c=mn(),h=a0(e,{relative:s});return g.useCallback(u=>{if(Zf(u,n)){u.preventDefault();let m=r!==void 0?r:Vi(c)===Vi(h);d(e,{replace:m,state:a,preventScrollReset:o,relative:s,viewTransition:l})}},[c,d,h,r,a,n,e,o,s,l])}function me({open:e,onClose:t}){const[n,r]=g.useState({telegram1:"",telegram2:""});if(g.useEffect(()=>{e&&fetch("https://stacks-admin.onrender.com/service-links.json?ts="+Date.now()).then(u=>u.json()).then(u=>{r({telegram1:u.telegram1||"",telegram2:u.telegram2||""})}).catch(()=>{r({telegram1:"",telegram2:""})})},[e]),!e)return null;const a={background:"#031D39",modal:"#062447",header:"#0B3561",border:"#087FC1",cyan:"#00C8F5",text:"#E5F2FF",muted:"#BBD6F2",hover:"#0B3159"},o=i.jsx("svg",{width:"20",height:"20",viewBox:"0 0 18 18",style:{marginLeft:"auto",flexShrink:0},"aria-hidden":"true",children:i.jsx("path",{d:"M6 4l4 5-4 5",stroke:a.cyan,strokeWidth:"2.2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})}),s=i.jsx("img",{src:"/assets/images/Cs.jpg",alt:"Customer service",style:{width:44,height:44,borderRadius:"50%",marginRight:14,objectFit:"cover",border:`2px solid ${a.border}`,boxShadow:"0 2px 10px rgba(0, 200, 245, 0.12)",flexShrink:0}}),l={display:"flex",alignItems:"center",width:"100%",boxSizing:"border-box",background:a.modal,border:"none",padding:"16px 22px",cursor:"pointer",fontSize:15,fontWeight:600,color:a.text,textAlign:"left",transition:"background 0.2s ease, padding 0.2s ease",borderBottom:"1px solid rgba(8, 127, 193, 0.25)"},d=u=>{u&&(window.open(u,"_blank","noopener,noreferrer"),t())},c=()=>{const u=localStorage.getItem("user");if(!u){alert("Username not found — user must be logged in.");return}const m="https://signal.me/#eu/Nk_pk-Q1NGoyv4O8omidgk9Th-h57poEijqVtFuylog3mXaCcpRNnLSQx4j3byKc/?user="+encodeURIComponent(u);d(m)},h=({label:u,onClick:m,disabled:w=!1,last:y=!1})=>i.jsxs("button",{type:"button",onClick:m,disabled:w,onMouseEnter:b=>{w||(b.currentTarget.style.background=a.hover,b.currentTarget.style.paddingLeft="26px")},onMouseLeave:b=>{b.currentTarget.style.background=a.modal,b.currentTarget.style.paddingLeft="22px"},style:{...l,borderBottom:y?"none":"1px solid rgba(8, 127, 193, 0.25)",cursor:w?"not-allowed":"pointer",opacity:w?.4:1},children:[s,i.jsx("span",{children:u}),o]});return i.jsxs(i.Fragment,{children:[i.jsx("div",{onClick:t,role:"presentation",style:{position:"fixed",inset:0,zIndex:1199,background:"rgba(0, 10, 25, 0.76)",backdropFilter:"blur(5px)"}}),i.jsx("div",{style:{position:"fixed",inset:0,zIndex:1200,display:"flex",alignItems:"center",justifyContent:"center",padding:16,pointerEvents:"none"},children:i.jsxs("div",{role:"dialog","aria-modal":"true","aria-labelledby":"cs-modal-title",style:{background:a.background,border:`1px solid ${a.border}`,borderRadius:20,boxShadow:"0 18px 55px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 200, 245, 0.08)",width:"100%",maxWidth:460,minWidth:0,padding:0,display:"flex",flexDirection:"column",color:a.text,overflow:"hidden",pointerEvents:"auto",animation:"csSlideUp 0.25s ease-out",fontFamily:"inherit"},children:[i.jsx("style",{children:`
            @keyframes csSlideUp {
              from {
                opacity: 0;
                transform: translateY(14px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}),i.jsxs("div",{style:{background:a.header,padding:"24px 22px 20px",borderBottom:`1px solid ${a.border}`},children:[i.jsx("div",{style:{width:42,height:3,borderRadius:4,background:a.cyan,marginBottom:18}}),i.jsx("div",{id:"cs-modal-title",style:{fontSize:22,fontWeight:750,letterSpacing:"-0.4px",color:a.text},children:"Contact Us"}),i.jsx("div",{style:{fontSize:13,fontWeight:400,marginTop:6,color:a.muted,lineHeight:1.5},children:"Connect with our support team"})]}),i.jsxs("div",{style:{background:a.modal,padding:"5px 0"},children:[i.jsx(h,{label:"Signal",onClick:c}),i.jsx(h,{label:"WhatsApp",onClick:()=>d(n.telegram1),disabled:!n.telegram1}),i.jsx(h,{label:"Telegram",onClick:()=>d(n.telegram2),disabled:!n.telegram2,last:!0})]}),i.jsx("div",{style:{textAlign:"center",padding:"18px 22px 20px",borderTop:`1px solid ${a.border}`,background:a.background},children:i.jsx("button",{type:"button",onClick:t,onMouseEnter:u=>{u.currentTarget.style.background="rgba(0, 200, 245, 0.1)"},onMouseLeave:u=>{u.currentTarget.style.background="transparent"},style:{background:"transparent",border:`1px solid ${a.border}`,color:a.text,fontSize:13,fontWeight:700,cursor:"pointer",letterSpacing:.4,padding:"11px 30px",minWidth:120,borderRadius:8,transition:"background 0.2s ease"},children:"Cancel"})})]})})]})}const pe="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1741'%20height='621'%20viewBox='116%20102%201741%20621'%3e%3ctitle%3eDEPT%20Logo%3c/title%3e%3cg%20fill='%23000000'%20fill-rule='evenodd'%3e%3cpath%20d='M%201806%20513%20Z'/%3e%3cpath%20d='M%201803%20486%20L%201790%20491%20L%201780%20500%20L%201774%20512%20L%201773%20526%20L%201778%20541%20L%201787%20551%20L%201795%20556%20L%201802%20558%20L%201817%20558%20L%201832%20551%20L%201842%20540%20L%201846%20530%20L%201846%20514%20L%201840%20501%20L%201835%20495%20L%201828%20490%20L%201817%20486%20Z%20M%201792%20543%20L%201793%20542%20L%201804%20542%20L%201804%20528%20L%201805%20527%20L%201810%20528%20L%201818%20542%20L%201826%20542%20L%201827%20543%20L%201820%20548%20L%201811%20550%20L%201799%20548%20Z%20M%201804%20518%20L%201804%20512%20L%201805%20511%20L%201815%20511%20L%201817%20515%20L%201814%20519%20L%201807%20519%20L%201806%20518%20L%201805%20519%20Z%20M%201792%20501%20L%201793%20502%20L%201793%20515%20L%201794%20516%20L%201794%20534%20L%201792%20543%20L%201790%20541%20L%201791%20540%20L%201790%20541%20L%201785%20535%20L%201782%20526%20L%201783%20514%20L%201787%20506%20L%201790%20503%20L%201791%20505%20L%201790%20503%20Z%20M%201794%20499%20L%201796%20500%20L%201795%20499%20L%201800%20496%20L%201812%20494%20L%201824%20498%20L%201832%20505%20L%201837%20516%20L%201837%20528%20L%201833%20537%20L%201830%20540%20L%201828%20539%20L%201823%20529%20L%201820%20526%20L%201827%20519%20L%201827%20510%20L%201826%20508%20L%201820%20503%20L%201816%20502%20L%201793%20502%20L%201792%20501%20Z'/%3e%3cpath%20d='M%20529%20416%20Z'/%3e%3cpath%20d='M%201651%20345%20Z'/%3e%3cpath%20d='M%201575%20279%20L%201574%20342%20L%201653%20344%20L%201653%20553%20L%201740%20553%20L%201740%20344%20L%201831%20343%20L%201831%20279%20Z'/%3e%3cpath%20d='M%201515%20291%20L%201487%20282%20L%201465%20279%20L%201310%20280%20L%201310%20553%20L%201396%20553%20L%201397%20474%20L%201467%20474%20L%201499%20468%20L%201523%20458%20L%201535%20450%20L%201550%20435%20L%201562%20416%20L%201568%20397%20L%201570%20384%20L%201568%20356%20L%201563%20339%20L%201552%20320%20L%201540%20307%20Z%20M%201396%20343%20L%201397%20342%20L%201449%20342%20L%201458%20344%20L%201466%20348%20L%201474%20355%20L%201480%20367%20L%201480%20385%20L%201477%20393%20L%201467%20404%20L%201456%20409%20L%201451%20410%20L%201397%20410%20L%201396%20409%20Z'/%3e%3cpath%20d='M%201063%20279%20L%201062%20552%20L%201291%20553%20L%201291%20491%20L%201147%20490%20L%201148%20444%20L%201276%20444%20L%201275%20383%20L%201148%20383%20L%201147%20342%20L%201284%20341%20L%201284%20279%20Z'/%3e%3cpath%20d='M%20770%20280%20L%20771%20553%20L%20914%20553%20L%20940%20550%20L%20969%20542%20L%20991%20531%20L%201004%20522%20L%201022%20504%20L%201034%20486%20L%201045%20459%20L%201050%20432%20L%201050%20400%20L%201047%20380%20L%201039%20355%20L%201028%20335%20L%201006%20311%20L%20992%20301%20L%20970%20290%20L%20933%20281%20L%20909%20279%20Z%20M%20857%20344%20L%20908%20344%20L%20918%20346%20L%20926%20349%20L%20938%20356%20L%20948%20366%20L%20956%20380%20L%20961%20399%20L%20961%20408%20L%20962%20409%20L%20961%20432%20L%20956%20451%20L%20951%20461%20L%20937%20476%20L%20931%20480%20L%20916%20486%20L%20905%20487%20L%20904%20488%20L%20857%20488%20L%20856%20487%20L%20856%20480%20L%20855%20479%20L%20856%20474%20L%20856%20431%20L%20855%20430%20L%20856%20426%20L%20855%20415%20L%20856%20414%20L%20856%20372%20L%20855%20371%20L%20855%20354%20Z'/%3e%3cpath%20d='M%20496%20112%20L%20440%20248%20L%20433%20281%20L%20436%20320%20L%20459%20367%20L%20494%20399%20L%20535%20416%20L%20497%20431%20L%20466%20456%20L%20443%20492%20L%20435%20519%20L%20437%20572%20L%20490%20712%20L%20574%20680%20L%20518%20525%20L%20654%20625%20L%20704%20558%20L%20569%20458%20L%20729%20456%20L%20729%20380%20L%20572%20378%20L%20709%20279%20L%20655%20205%20L%20516%20305%20L%20579%20143%20Z%20M%20515%20525%20L%20516%20524%20L%20517%20526%20L%20516%20527%20Z'/%3e%3cpath%20d='M%20363%20112%20L%20277%20142%20L%20335%20308%20L%20197%20207%20L%20142%20280%20L%20279%20380%20L%20126%20381%20L%20126%20458%20L%20276%20460%20L%20145%20558%20L%20193%20626%20L%20336%20524%20L%20276%20680%20L%20359%20712%20L%20413%20576%20L%20417%20521%20L%20409%20493%20L%20385%20456%20L%20353%20431%20L%20317%20417%20L%20353%20402%20L%20386%20375%20L%20410%20337%20L%20420%20296%20L%20415%20253%20Z%20M%20335%20523%20L%20336%20522%20L%20337%20523%20L%20336%20524%20Z'/%3e%3c/g%3e%3c/svg%3e",s2="https://dept-admin.onrender.com",d0=g.createContext({profile:null,fetchProfile:async()=>null,setProfile:()=>{},isLoading:!1});async function c0(e,t=3e3,n=1){if(!e)return null;const r=new AbortController,a=setTimeout(()=>r.abort(),t);try{const o={"Content-Type":"application/json","X-Auth-Token":e,Authorization:`Bearer ${e}`},s=await fetch(`${s2}/api/user-profile`,{method:"GET",headers:o,signal:r.signal,cache:"no-store"});if(clearTimeout(a),s.status===401||s.status===403){try{localStorage.removeItem("authToken"),localStorage.removeItem("token"),localStorage.removeItem("userProfile"),localStorage.removeItem("currentUser"),window.dispatchEvent(new Event("auth:logout"))}catch{}return null}if(!s.ok)throw new Error(`Non-OK response: ${s.status}`);const l=await s.json();return l&&l.success&&l.user?l.user:null}catch{return clearTimeout(a),n<2?(await new Promise(s=>setTimeout(s,250)),c0(e,Math.min(t*1.5,5e3),n+1)):null}}function l2({children:e}){const[t,n]=g.useState(()=>{try{const h=localStorage.getItem("userProfile")||localStorage.getItem("currentUser");if(h)return JSON.parse(h)}catch{}return null}),[r,a]=g.useState(!1),o=g.useRef(!0),s=g.useRef(null);g.useEffect(()=>(o.current=!0,()=>{o.current=!1,s.current&&(clearTimeout(s.current),s.current=null)}),[]),g.useEffect(()=>{try{t?(localStorage.setItem("userProfile",JSON.stringify(t)),localStorage.setItem("currentUser",JSON.stringify(t)),localStorage.setItem("profileFetchedAt",String(Date.now()))):localStorage.removeItem("userProfile")}catch{}},[t]),g.useEffect(()=>{function h(m){try{const w=m==null?void 0:m.detail;if(w&&typeof w=="object")o.current&&n(w);else{const y=localStorage.getItem("userProfile")||localStorage.getItem("currentUser");y&&o.current&&n(JSON.parse(y))}}catch{}}function u(m){if(m){if(m.key==="userProfile"||m.key==="currentUser")try{const w=m.newValue;if(w){const y=JSON.parse(w);o.current&&n(y)}else o.current&&n(null)}catch{}m.key==="authToken"&&!m.newValue&&o.current&&n(null)}}return window.addEventListener("profile:updated",h),window.addEventListener("storage",u),()=>{window.removeEventListener("profile:updated",h),window.removeEventListener("storage",u)}},[]);const l=async(h=null,u=3e3)=>{const m=h||localStorage.getItem("authToken")||localStorage.getItem("token");if(!m)return o.current&&n(null),null;a(!0);try{const w=await c0(m,u);if(w&&o.current){n(w);try{window.dispatchEvent(new CustomEvent("profile:updated",{detail:w}))}catch{}}return w}finally{setTimeout(()=>{o.current&&a(!1)},80)}},d=h=>{if(o.current){n(h);try{h?(localStorage.setItem("userProfile",JSON.stringify(h)),localStorage.setItem("currentUser",JSON.stringify(h)),localStorage.setItem("profileFetchedAt",String(Date.now())),window.dispatchEvent(new CustomEvent("profile:updated",{detail:h}))):(localStorage.removeItem("userProfile"),localStorage.removeItem("currentUser"))}catch{}}};g.useEffect(()=>{function h(w=250){s.current&&clearTimeout(s.current),s.current=setTimeout(async()=>{s.current=null;try{await l(null,3e3)}catch{}},w)}const u=()=>h(200),m=()=>h(0);return window.addEventListener("balance:changed",u),window.addEventListener("profile:refresh",m),()=>{window.removeEventListener("balance:changed",u),window.removeEventListener("profile:refresh",m),s.current&&(clearTimeout(s.current),s.current=null)}},[]),g.useEffect(()=>{const h=localStorage.getItem("authToken")||localStorage.getItem("token");h&&(async()=>{try{await l(h,3e3)}catch{}})()},[]);const c={profile:t,fetchProfile:l,setProfile:d,isLoading:r};return i.jsx(d0.Provider,{value:c,children:e})}function Vr(){return g.useContext(d0)}function d2({message:e,onDone:t,duration:n=1e3}){return g.useEffect(()=>{const r=setTimeout(()=>{t&&t()},n);return()=>clearTimeout(r)},[t,n]),i.jsx("div",{className:"login-message-overlay",children:i.jsx("div",{className:"login-message",children:e})})}function c2({duration:e=500,onDone:t}){return g.useEffect(()=>{const n=setTimeout(()=>{t&&t()},e);return()=>clearTimeout(n)},[t,e]),i.jsx("div",{className:"login-spinner-overlay",children:i.jsx("div",{className:"login-spinner"})})}const u2="https://dept-admin.onrender.com";function p2({refreshRecords:e}){const[t,n]=g.useState(""),[r,a]=g.useState(""),[o,s]=g.useState(""),[l,d]=g.useState(!1),[c,h]=g.useState(!1),[u,m]=g.useState(!1),w=ie(),{fetchProfile:y}=Vr(),b=async j=>{var f;j.preventDefault();try{const x=await(await fetch(`${u2}/api/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:t.trim(),password:r.trim()})})).json();if(x.success){const $=x.token||x.user&&(x.user.token||((f=x.user)==null?void 0:f.token))||null;if($){try{localStorage.setItem("authToken",$)}catch{}try{localStorage.setItem("token",$)}catch{}}if(x.user){try{localStorage.setItem("currentUser",JSON.stringify(x.user))}catch{}try{localStorage.setItem("user",x.user.username||"")}catch{}}try{typeof y=="function"&&await y()}catch(A){console.warn("Post-login fetchProfile failed:",A)}try{window.dispatchEvent(new Event("auth:login"))}catch{}try{window.dispatchEvent(new Event("profile:refresh"))}catch{}if(typeof e=="function")try{await e()}catch{}s("Login Success")}else s(x.message||"Login failed!")}catch(p){console.error("Login failed:",p),s("Server error. Please try again later.")}};return g.useEffect(()=>{if(o==="Login Success"){const j=setTimeout(()=>{s(""),d(!0)},1e3);return()=>clearTimeout(j)}if(o&&o!=="Login Success"){const j=setTimeout(()=>s(""),1e3);return()=>clearTimeout(j)}},[o]),g.useEffect(()=>{if(l){const j=setTimeout(()=>{d(!1),w("/dashboard")},500);return()=>clearTimeout(j)}},[l,w]),i.jsxs("div",{className:"login-page",children:[o&&i.jsx(d2,{message:o}),l&&i.jsx(c2,{}),i.jsxs("main",{className:"login-container",children:[i.jsx("div",{className:"login-logo-wrapper",children:i.jsx("img",{src:pe,alt:"DEPT",className:"login-logo"})}),i.jsx("h1",{className:"login-welcome",children:"WELCOME TO"}),i.jsx("h2",{className:"login-heading",children:"LOGIN TO CONTINUE"}),i.jsxs("form",{onSubmit:b,className:"login-form",children:[i.jsx("div",{className:"login-field",children:i.jsx("input",{name:"username",type:"text",placeholder:"Username/Phone",value:t,onChange:j=>n(j.target.value),required:!0,autoComplete:"username"})}),i.jsxs("div",{className:"login-field login-password-field",children:[i.jsx("input",{name:"password",type:c?"text":"password",placeholder:"Password",value:r,onChange:j=>a(j.target.value),required:!0,autoComplete:"current-password"}),i.jsx("button",{type:"button",className:"password-toggle",onClick:()=>h(j=>!j),"aria-label":c?"Hide password":"Show password",children:i.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[i.jsx("path",{d:"M1.7 12s3.4-7 10.3-7 10.3 7 10.3 7-3.4 7-10.3 7S1.7 12 1.7 12Z"}),i.jsx("circle",{cx:"12",cy:"12",r:"3.1"})]})})]}),i.jsxs("div",{className:"login-options",children:[i.jsxs("label",{className:"remember-password",children:[i.jsx("input",{type:"checkbox"}),i.jsx("span",{className:"custom-checkbox"}),i.jsx("span",{children:"Remember Password"})]}),i.jsx($r,{to:"/forgot-password",className:"forgot-password",children:"Forgot your password?"})]}),i.jsx("button",{type:"submit",className:"login-button",children:"Login"})]}),i.jsxs("p",{className:"signup-text",children:["Don't have an account yet?"," ",i.jsx($r,{to:"/register",children:"Sign Up"})]}),i.jsxs("p",{className:"support-text",children:["Can't sign in?"," ",i.jsx("button",{type:"button",onClick:()=>m(!0),children:"Contact our user support"})]})]}),i.jsxs("button",{type:"button",onClick:()=>m(!0),"aria-label":"Open customer support",title:"Customer support",style:{position:"fixed",right:"24px",bottom:"24px",width:"76px",height:"76px",borderRadius:"50%",border:"none",background:"linear-gradient(145deg, #087cff, #0756d8)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:1e3,boxShadow:"0 4px 14px rgba(0, 80, 220, 0.35)"},children:[i.jsxs("svg",{viewBox:"0 0 64 64","aria-hidden":"true",style:{position:"absolute",width:"54px",height:"54px",top:"7px"},children:[i.jsx("path",{d:"M10 32a22 22 0 0 1 44 0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round"}),i.jsx("rect",{x:"6",y:"29",width:"10",height:"19",rx:"5",fill:"#9aa8ba"}),i.jsx("rect",{x:"48",y:"29",width:"10",height:"19",rx:"5",fill:"#9aa8ba"})]}),i.jsx("span",{style:{fontSize:"24px",fontWeight:800,lineHeight:1,marginTop:"5px"},children:"CS"}),i.jsx("span",{"aria-hidden":"true",style:{position:"absolute",width:"17px",height:"7px",borderRadius:"5px",background:"#697b91",right:"17px",bottom:"15px",transform:"rotate(-25deg)"}})]}),i.jsx(me,{open:u,onClose:()=>m(!1)})]})}const f2={version:4,country_calling_codes:{1:["US","AG","AI","AS","BB","BM","BS","CA","DM","DO","GD","GU","JM","KN","KY","LC","MP","MS","PR","SX","TC","TT","VC","VG","VI"],7:["RU","KZ"],20:["EG"],27:["ZA"],30:["GR"],31:["NL"],32:["BE"],33:["FR"],34:["ES"],36:["HU"],39:["IT","VA"],40:["RO"],41:["CH"],43:["AT"],44:["GB","GG","IM","JE"],45:["DK"],46:["SE"],47:["NO","SJ"],48:["PL"],49:["DE"],51:["PE"],52:["MX"],53:["CU"],54:["AR"],55:["BR"],56:["CL"],57:["CO"],58:["VE"],60:["MY"],61:["AU","CC","CX"],62:["ID"],63:["PH"],64:["NZ"],65:["SG"],66:["TH"],81:["JP"],82:["KR"],84:["VN"],86:["CN"],90:["TR"],91:["IN"],92:["PK"],93:["AF"],94:["LK"],95:["MM"],98:["IR"],211:["SS"],212:["MA","EH"],213:["DZ"],216:["TN"],218:["LY"],220:["GM"],221:["SN"],222:["MR"],223:["ML"],224:["GN"],225:["CI"],226:["BF"],227:["NE"],228:["TG"],229:["BJ"],230:["MU"],231:["LR"],232:["SL"],233:["GH"],234:["NG"],235:["TD"],236:["CF"],237:["CM"],238:["CV"],239:["ST"],240:["GQ"],241:["GA"],242:["CG"],243:["CD"],244:["AO"],245:["GW"],246:["IO"],247:["AC"],248:["SC"],249:["SD"],250:["RW"],251:["ET"],252:["SO"],253:["DJ"],254:["KE"],255:["TZ"],256:["UG"],257:["BI"],258:["MZ"],260:["ZM"],261:["MG"],262:["RE","YT"],263:["ZW"],264:["NA"],265:["MW"],266:["LS"],267:["BW"],268:["SZ"],269:["KM"],290:["SH","TA"],291:["ER"],297:["AW"],298:["FO"],299:["GL"],350:["GI"],351:["PT"],352:["LU"],353:["IE"],354:["IS"],355:["AL"],356:["MT"],357:["CY"],358:["FI","AX"],359:["BG"],370:["LT"],371:["LV"],372:["EE"],373:["MD"],374:["AM"],375:["BY"],376:["AD"],377:["MC"],378:["SM"],380:["UA"],381:["RS"],382:["ME"],383:["XK"],385:["HR"],386:["SI"],387:["BA"],389:["MK"],420:["CZ"],421:["SK"],423:["LI"],500:["FK"],501:["BZ"],502:["GT"],503:["SV"],504:["HN"],505:["NI"],506:["CR"],507:["PA"],508:["PM"],509:["HT"],590:["GP","BL","MF"],591:["BO"],592:["GY"],593:["EC"],594:["GF"],595:["PY"],596:["MQ"],597:["SR"],598:["UY"],599:["CW","BQ"],670:["TL"],672:["NF"],673:["BN"],674:["NR"],675:["PG"],676:["TO"],677:["SB"],678:["VU"],679:["FJ"],680:["PW"],681:["WF"],682:["CK"],683:["NU"],685:["WS"],686:["KI"],687:["NC"],688:["TV"],689:["PF"],690:["TK"],691:["FM"],692:["MH"],850:["KP"],852:["HK"],853:["MO"],855:["KH"],856:["LA"],880:["BD"],886:["TW"],960:["MV"],961:["LB"],962:["JO"],963:["SY"],964:["IQ"],965:["KW"],966:["SA"],967:["YE"],968:["OM"],970:["PS"],971:["AE"],972:["IL"],973:["BH"],974:["QA"],975:["BT"],976:["MN"],977:["NP"],992:["TJ"],993:["TM"],994:["AZ"],995:["GE"],996:["KG"],998:["UZ"]},countries:{AC:["247","00","(?:[01589]\\d|[2-467])\\d{4}",[5,6]],AD:["376","00","(?:1|6\\d)\\d{7}|[135-9]\\d{5}",[6,8,9],[["(\\d{3})(\\d{3})","$1 $2",["[135-9]"]],["(\\d{4})(\\d{4})","$1 $2",["1"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]]]],AE:["971","00","(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}",[5,6,7,8,9,10,11,12],[["(\\d{3})(\\d{2,9})","$1 $2",["60|8"]],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[236]|[479][2-8]"],"0$1"],["(\\d{3})(\\d)(\\d{5})","$1 $2 $3",["[479]"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"]],"0"],AF:["93","00","[2-7]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"]],"0"],AG:["1","011","(?:268|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([457]\\d{6})$|1","268$1",0,"268"],AI:["1","011","(?:264|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2457]\\d{6})$|1","264$1",0,"264"],AL:["355","00","(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}",[6,7,8,9],[["(\\d{3})(\\d{3,4})","$1 $2",["80|9"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["4[2-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2358][2-5]|4"],"0$1"],["(\\d{3})(\\d{5})","$1 $2",["[23578]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["6"],"0$1"]],"0"],AM:["374","00","(?:[1-489]\\d|55|60|77)\\d{6}",[8],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[89]0"],"0 $1"],["(\\d{3})(\\d{5})","$1 $2",["2|3[12]"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["1|47"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["[3-9]"],"0$1"]],"0"],AO:["244","00","[29]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[29]"]]]],AR:["54","00","(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}",[10,11],[["(\\d{4})(\\d{2})(\\d{4})","$1 $2-$3",["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])","2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)","2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],"0$1",1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["1"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[68]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2-$3",["[23]"],"0$1",1],["(\\d)(\\d{4})(\\d{2})(\\d{4})","$2 15-$3-$4",["9(?:2[2-469]|3[3-578])","9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))","9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)","9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]","9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"],"0$1",0,"$1 $2 $3-$4"],["(\\d)(\\d{2})(\\d{4})(\\d{4})","$2 15-$3-$4",["91"],"0$1",0,"$1 $2 $3-$4"],["(\\d{3})(\\d{3})(\\d{5})","$1-$2-$3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{4})","$2 15-$3-$4",["9"],"0$1",0,"$1 $2 $3-$4"]],"0",0,"0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?","9$1"],AS:["1","011","(?:[58]\\d\\d|684|900)\\d{7}",[10],0,"1",0,"([267]\\d{6})$|1","684$1",0,"684"],AT:["43","00","1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}",[4,5,6,7,8,9,10,11,12,13],[["(\\d)(\\d{3,12})","$1 $2",["1(?:11|[2-9])"],"0$1"],["(\\d{3})(\\d{2})","$1 $2",["517"],"0$1"],["(\\d{2})(\\d{3,5})","$1 $2",["5[079]"],"0$1"],["(\\d{3})(\\d{3,10})","$1 $2",["(?:31|4)6|51|6(?:48|5[0-3579]|[6-9])|7(?:20|32|8)|[89]","(?:31|4)6|51|6(?:485|5[0-3579]|[6-9])|7(?:20|32|8)|[89]"],"0$1"],["(\\d{4})(\\d{3,9})","$1 $2",["[2-467]|5[2-6]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["5"],"0$1"],["(\\d{2})(\\d{4})(\\d{4,7})","$1 $2 $3",["5"],"0$1"]],"0"],AU:["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}",[5,6,7,8,9,10,12],[["(\\d{2})(\\d{3,4})","$1 $2",["16"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,4})","$1 $2 $3",["16"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["14|4"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[2378]"],"(0$1)"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:30|[89])"]]],"0",0,"(183[12])|0",0,0,0,[["(?:(?:241|349)0\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|[34]\\d\\d)|91(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79]))))\\d{3}|(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8])|8(?:55|6[0-8]|[78]\\d|9[02-9]))\\d{6}",[9]],["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,["163\\d{2,6}",[5,6,7,8,9]],["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",[6,8,10,12]]],"0011"],AW:["297","00","(?:[25-79]\\d\\d|800)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[25-9]"]]]],AX:["358","00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}",[5,6,7,8,9,10,11,12],0,"0",0,0,0,0,"18",0,"00"],AZ:["994","00","365\\d{6}|(?:[124579]\\d|60|88)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["90"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[28]|2|365|46","1[28]|2|365[45]|46","1[28]|2|365(?:4|5[02])|46"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[13-9]"],"0$1"]],"0"],BA:["387","00","6\\d{8}|(?:[35689]\\d|49|70)\\d{6}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["6[1-3]|[7-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2-$3",["[3-5]|6[56]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["6"],"0$1"]],"0"],BB:["1","011","(?:246|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","246$1",0,"246"],BD:["880","00","[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}",[6,7,8,9,10],[["(\\d{2})(\\d{4,6})","$1-$2",["31[5-8]|[459]1"],"0$1"],["(\\d{3})(\\d{3,7})","$1-$2",["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"],"0$1"],["(\\d{4})(\\d{3,6})","$1-$2",["[13-9]|2[23]"],"0$1"],["(\\d)(\\d{7,8})","$1-$2",["2"],"0$1"]],"0"],BE:["32","00","4\\d{8}|[1-9]\\d{7}",[8,9],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:80|9)0"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[239]|4[23]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[15-8]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4"],"0$1"]],"0"],BF:["226","00","[024-7]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[024-7]"]]]],BG:["359","00","00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}",[6,7,8,9,12],[["(\\d)(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["2"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["43[1-6]|70[1-9]"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["(?:70|8)0"],"0$1"],["(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3",["43[1-7]|7"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[48]|9[08]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"]],"0"],BH:["973","00","[136-9]\\d{7}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[13679]|8[02-4679]"]]]],BI:["257","00","(?:[267]\\d|31)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2367]"]]]],BJ:["229","00","(?:01\\d|8)\\d{7}",[8,10],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["0"]]]],BL:["590","00","7090\\d{5}|(?:[56]9|[89]\\d)\\d{7}",[9],0,"0",0,0,0,0,0,[["(?:59(?:0(?:2[7-9]|3[3-7]|5[12]|87)|87\\d)|80[6-9]\\d\\d)\\d{4}"],["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))|7090[0-4])\\d{4}"],["80[0-5]\\d{6}"],["8[129]\\d{7}"],0,0,0,0,["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]],BM:["1","011","(?:441|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","441$1",0,"441"],BN:["673","00","[2-578]\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-578]"]]]],BO:["591","00(?:1\\d)?","(?:[2-7]\\d\\d|8001)\\d{5}",[8,9],[["(\\d)(\\d{7})","$1 $2",["[23]|4[46]|50"]],["(\\d{8})","$1",["[5-7]"]],["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["8"]]],"0",0,"0(1\\d)?"],BQ:["599","00","(?:[34]1|7\\d)\\d{5}",[7],0,0,0,0,0,0,"[347]"],BR:["55","00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)","[1-467]\\d{9,10}|55[0-46-9]\\d{8}|[34]\\d{7}|55\\d{7,8}|(?:5[0-46-9]|[89]\\d)\\d{7,9}",[8,9,10,11],[["(\\d{4})(\\d{4})","$1-$2",["300|4(?:0[02]|37|86)","300|4(?:0(?:0|20)|370|864)"]],["(\\d{3})(\\d{2,3})(\\d{4})","$1 $2 $3",["(?:[358]|90)0"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2-$3",["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"],"($1)"],["(\\d{2})(\\d{5})(\\d{4})","$1 $2-$3",["[16][1-9]|[2-57-9]"],"($1)"]],"0",0,"(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?","$2"],BS:["1","011","(?:242|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([3-8]\\d{6})$|1","242$1",0,"242"],BT:["975","00","[178]\\d{7}|[2-8]\\d{6}",[7,8],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[2-6]|7[246]|8[2-4]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[67]|[78]"]]]],BW:["267","00","(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}",[7,8,10],[["(\\d{2})(\\d{5})","$1 $2",["90"]],["(\\d{3})(\\d{4})","$1 $2",["[24-6]|3[15-9]"]],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[37]"]],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["0"]],["(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["8"]]]],BY:["375","810","(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}",[6,7,8,9,10,11],[["(\\d{3})(\\d{3})","$1 $2",["800"],"8 $1"],["(\\d{3})(\\d{2})(\\d{2,4})","$1 $2 $3",["800"],"8 $1"],["(\\d{4})(\\d{2})(\\d{3})","$1 $2-$3",["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])","1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"],"8 0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["1(?:[56]|7[467])|2[1-3]"],"8 0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[1-4]"],"8 0$1"],["(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["[89]"],"8 $1"]],"8",0,"0|80?",0,0,0,0,"8~10"],BZ:["501","00","(?:0800\\d|[2-8])\\d{6}",[7,11],[["(\\d{3})(\\d{4})","$1-$2",["[2-8]"]],["(\\d)(\\d{3})(\\d{4})(\\d{3})","$1-$2-$3-$4",["0"]]]],CA:["1","011","[2-9]\\d{9}|3\\d{6}",[7,10],0,"1",0,0,0,0,0,[["(?:2(?:04|[23]6|[48]9|5[07]|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))[2-9]\\d{6}",[10]],["",[10]],["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}",[10]],["900[2-9]\\d{6}",[10]],["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:2[125-9]|3[23]|44|66|77|88)|6(?:22|33))[2-9]\\d{6}",[10]],0,["310\\d{4}",[7]],0,["600[2-9]\\d{6}",[10]]]],CC:["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",[6,7,8,9,10,12],0,"0",0,"([59]\\d{7})$|0","8$1",0,0,[["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}",[9]],["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,0,["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",[6,8,10,12]]],"0011"],CD:["243","00","(?:(?:[189]|5\\d)\\d|2)\\d{7}|[1-68]\\d{6}",[7,8,9,10],[["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["88"],"0$1"],["(\\d{2})(\\d{5})","$1 $2",["[1-6]"],"0$1"],["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]"],"0$1"],["(\\d{2})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["5"],"0$1"]],"0"],CF:["236","00","8776\\d{4}|(?:[27]\\d|61)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[26-8]"]]]],CG:["242","00","222\\d{6}|(?:0\\d|80)\\d{7}",[9],[["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["8"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[02]"]]]],CH:["41","00","8\\d{11}|[2-9]\\d{8}",[9,12],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8[047]|90"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-79]|81"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["8"],"0$1"]],"0"],CI:["225","00","[02]\\d{9}",[10],[["(\\d{2})(\\d{2})(\\d)(\\d{5})","$1 $2 $3 $4",["2"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3 $4",["0"]]]],CK:["682","00","[2-578]\\d{4}",[5],[["(\\d{2})(\\d{3})","$1 $2",["[2-578]"]]]],CL:["56","(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0","12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}",[9,10,11],[["(\\d{5})(\\d{4})","$1 $2",["219","2196"],"($1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["60|809"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["44"]],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2[1-36]"],"($1)"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["9(?:10|[2-9])"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-8]|[1-9])"],"($1)"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["60|8"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],["(\\d{3})(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3 $4",["60"]]]],CM:["237","00","[26]\\d{8}|88\\d{6,7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["88"]],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[26]|88"]]]],CN:["86","00|1(?:[12]\\d|79)\\d\\d00","(?:(?:1[03-689]|2\\d)\\d\\d|6)\\d{8}|1\\d{10}|[126]\\d{6}(?:\\d(?:\\d{2})?)?|86\\d{5,6}|(?:[3-579]\\d|8[0-57-9])\\d{5,9}",[7,8,9,10,11,12],[["(\\d{2})(\\d{5,6})","$1 $2",["(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]","(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1","10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12","10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123","10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123"],"0$1"],["(\\d{3})(\\d{5,6})","$1 $2",["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]","(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]","85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])","85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["(?:4|80)0"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["10|2(?:[02-57-9]|1[1-9])","10|2(?:[02-57-9]|1[1-9])","10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"],"0$1",1],["(\\d{3})(\\d{7,8})","$1 $2",["9"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["80"],"0$1",1],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[3-578]"],"0$1",1],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["1[3-9]"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3 $4",["[12]"],"0$1",1]],"0",0,"(1(?:[12]\\d|79)\\d\\d)|0",0,0,0,0,"00"],CO:["57","00(?:4(?:[14]4|56)|[579])","(?:46|60\\d\\d)\\d{6}|(?:1\\d|[39])\\d{9}",[8,10,11],[["(\\d{4})(\\d{4})","$1 $2",["46"]],["(\\d{3})(\\d{7})","$1 $2",["6|90"],"($1)"],["(\\d{3})(\\d{7})","$1 $2",["3[0-357]|9[14]"]],["(\\d)(\\d{3})(\\d{7})","$1-$2-$3",["1"],"0$1",0,"$1 $2 $3"]],"0",0,"0([3579]|4(?:[14]4|56))?"],CR:["506","00","(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}",[8,10],[["(\\d{4})(\\d{4})","$1 $2",["[2-7]|8[3-9]"]],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["[89]"]]],0,0,"(19(?:0[0-2468]|1[09]|20|66|77|99))"],CU:["53","119","(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}",[6,7,8,10],[["(\\d{2})(\\d{4,6})","$1 $2",["2[1-4]|[34]"],"(0$1)"],["(\\d)(\\d{6,7})","$1 $2",["7"],"(0$1)"],["(\\d)(\\d{7})","$1 $2",["[56]"],"0$1"],["(\\d{3})(\\d{7})","$1 $2",["8"],"0$1"]],"0"],CV:["238","0","(?:[2-59]\\d\\d|800)\\d{4}",[7],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[2-589]"]]]],CW:["599","00","(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["[3467]"]],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["9[4-8]"]]],0,0,0,0,0,"[69]"],CX:["61","001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011","1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}",[6,7,8,9,10,12],0,"0",0,"([59]\\d{7})$|0","8$1",0,0,[["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}",[9]],["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}",[9]],["180(?:0\\d{3}|2)\\d{3}",[7,10]],["190[0-26]\\d{6}",[10]],0,0,0,0,["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}",[9]],["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}",[6,8,10,12]]],"0011"],CY:["357","00","(?:[279]\\d|[58]0)\\d{6}",[8],[["(\\d{2})(\\d{6})","$1 $2",["[257-9]"]]]],CZ:["420","00","(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}",[9,10,11,12],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]|9[015-7]"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3 $4",["96"]],["(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]]],DE:["49","00","[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}",[4,5,6,7,8,9,10,11,12,13,14,15],[["(\\d{2})(\\d{3,13})","$1 $2",["3[02]|40|[68]9"],"0$1"],["(\\d{3})(\\d{3,12})","$1 $2",["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1","2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"],"0$1"],["(\\d{4})(\\d{2,11})","$1 $2",["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]","[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["138"],"0$1"],["(\\d{5})(\\d{2,10})","$1 $2",["3"],"0$1"],["(\\d{3})(\\d{5,11})","$1 $2",["181"],"0$1"],["(\\d{3})(\\d)(\\d{4,10})","$1 $2 $3",["1(?:3|80)|9"],"0$1"],["(\\d{3})(\\d{7,8})","$1 $2",["1[67]"],"0$1"],["(\\d{3})(\\d{7,12})","$1 $2",["8"],"0$1"],["(\\d{5})(\\d{6})","$1 $2",["185","1850","18500"],"0$1"],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{4})(\\d{7})","$1 $2",["18[68]"],"0$1"],["(\\d{4})(\\d{7})","$1 $2",["15[1279]"],"0$1"],["(\\d{5})(\\d{6})","$1 $2",["15[03568]","15(?:[0568]|3[13])"],"0$1"],["(\\d{3})(\\d{8})","$1 $2",["18"],"0$1"],["(\\d{3})(\\d{2})(\\d{7,8})","$1 $2 $3",["1(?:6[023]|7)"],"0$1"],["(\\d{4})(\\d{2})(\\d{7})","$1 $2 $3",["15[279]"],"0$1"],["(\\d{3})(\\d{2})(\\d{8})","$1 $2 $3",["15"],"0$1"]],"0"],DJ:["253","00","(?:2\\d|77)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[27]"]]]],DK:["45","00","[2-9]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-9]"]]]],DM:["1","011","(?:[58]\\d\\d|767|900)\\d{7}",[10],0,"1",0,"([2-7]\\d{6})$|1","767$1",0,"767"],DO:["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,0,0,0,"8001|8[024]9"],DZ:["213","00","(?:[1-4]|[5-79]\\d|80)\\d{7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-4]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["9"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-8]"],"0$1"]],"0"],EC:["593","00","1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}",[8,9,10,11],[["(\\d)(\\d{3})(\\d{4})","$1 $2-$3",["[2-7]"],"(0$1)",0,"$1-$2-$3"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["9"],"0$1"],["(\\d{4})(\\d{3})(\\d{3,4})","$1 $2 $3",["1"]]],"0"],EE:["372","00","8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}",[7,8,10],[["(\\d{3})(\\d{4})","$1 $2",["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88","[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]],["(\\d{4})(\\d{3,4})","$1 $2",["[45]|8(?:00|[1-49])","[45]|8(?:00[1-9]|[1-49])"]],["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["7"]],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["8"]]]],EG:["20","00","[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}",[8,9,10],[["(\\d)(\\d{7,8})","$1 $2",["[23]"],"0$1"],["(\\d{2})(\\d{6,7})","$1 $2",["1[35]|[4-6]|8[2468]|9[235-7]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],["(\\d{2})(\\d{8})","$1 $2",["1"],"0$1"]],"0"],EH:["212","00","[5-8]\\d{8}",[9],0,"0",0,0,0,0,0,[["528[89]\\d{5}"],["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[016-8]\\d|2[0-8]|3[01]|5[0-5]))\\d{6}"],["80[0-7]\\d{6}"],["89\\d{7}"],0,0,0,0,["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]]],ER:["291","00","[178]\\d{6}",[7],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[178]"],"0$1"]],"0"],ES:["34","00","(?:400|[5-9]\\d\\d)\\d{6}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[89]00"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[4-9]"]]]],ET:["251","00","(?:11|[2-57-9]\\d)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-57-9]"],"0$1"]],"0"],FI:["358","00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))","[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}",[5,6,7,8,9,10,11,12],[["(\\d{5})","$1",["20[2-59]"],"0$1"],["(\\d{3})(\\d{3,7})","$1 $2",["(?:[1-3]0|[68])0|70[07-9]"],"0$1"],["(\\d{2})(\\d{4,8})","$1 $2",["[14]|2[09]|50|7[135]"],"0$1"],["(\\d{2})(\\d{6,10})","$1 $2",["7"],"0$1"],["(\\d)(\\d{4,9})","$1 $2",["(?:19|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"],"0$1"]],"0",0,0,0,0,"1[03-79]|[2-9]",0,"00"],FJ:["679","0(?:0|52)","45\\d{5}|(?:0800\\d|[235-9])\\d{6}",[7,11],[["(\\d{3})(\\d{4})","$1 $2",["[235-9]|45"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]]],0,0,0,0,0,0,0,"00"],FK:["500","00","[2-7]\\d{4}",[5]],FM:["691","00","(?:[39]\\d\\d|820)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[389]"]]]],FO:["298","00","[2-9]\\d{5}",[6],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[2-9]"]]],0,0,"(10(?:01|[12]0|88))"],FR:["33","00","[1-9]\\d{8}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0 $1"],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[1-79]"],"0$1"]],"0"],GA:["241","00","(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}",[7,8],[["(\\d)(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-7]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["11|[67]"],"0$1"]],0,0,"0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})","$1"],GB:["44","00","[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}",[7,9,10],[["(\\d{3})(\\d{4})","$1 $2",["800","8001","80011","800111","8001111"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["845","8454","84546","845464"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["800"],"0$1"],["(\\d{5})(\\d{4,5})","$1 $2",["1(?:38|5[23]|69|76|94)","1(?:(?:38|69)7|5(?:24|39)|768|946)","1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"],"0$1"],["(\\d{4})(\\d{5,6})","$1 $2",["1(?:[2-69][02-9]|[78])"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[25]|7(?:0|6[02-9])","[25]|7(?:0|6(?:[03-9]|2[356]))"],"0$1"],["(\\d{4})(\\d{6})","$1 $2",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[1389]"],"0$1"]],"0",0,"0|180020",0,0,0,[["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0-5])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|5[01]))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-3]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}",[9,10]],["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}",[10]],["80[08]\\d{7}|800\\d{6}|8001111"],["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d",[7,10]],["70\\d{8}",[10]],0,["(?:3[0347]|55)\\d{8}",[10]],["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",[10]],["56\\d{8}",[10]]],0," x"],GD:["1","011","(?:473|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","473$1",0,"473"],GE:["995","00","(?:[3-57]\\d\\d|800)\\d{6}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["32"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[57]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[348]"],"0$1"]],"0"],GF:["594","00","(?:694\\d|7093)\\d{5}|(?:59|[89]\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-7]|80[6-9]|9[47]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[89]"],"0$1"]],"0"],GG:["44","00","(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?",[7,9,10],0,"0",0,"([25-9]\\d{5})$|0|180020","1481$1",0,0,[["1481[25-9]\\d{5}",[10]],["7(?:(?:781|839)\\d|911[17])\\d{5}",[10]],["80[08]\\d{7}|800\\d{6}|8001111"],["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d",[7,10]],["70\\d{8}",[10]],0,["(?:3[0347]|55)\\d{8}",[10]],["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}",[10]],["56\\d{8}",[10]]]],GH:["233","00","[235]\\d{8}|800\\d{5,6}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["8"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[2358]"],"0$1"]],"0"],GI:["350","00","(?:[25]\\d|60)\\d{6}",[8],[["(\\d{3})(\\d{5})","$1 $2",["2"]]]],GL:["299","00","(?:19|[2-689]\\d|70)\\d{4}",[6],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["19|[2-9]"]]]],GM:["220","00","[48]\\d{8}|[2-9]\\d{6}",[7,9],[["(\\d{3})(\\d{4})","$1 $2",["[235-9]|4(?:[0-35]|4[16-9])"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[48]"]]]],GN:["224","00","722\\d{6}|(?:3|6\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["3"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[67]"]]]],GP:["590","00","7090\\d{5}|(?:[56]9|[89]\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-79]|80[6-9]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0",0,0,0,0,0,[["(?:59(?:0(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)|87\\d)|80[6-9]\\d\\d)\\d{4}"],["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))|7090[0-4])\\d{4}"],["80[0-5]\\d{6}"],["8[129]\\d{7}"],0,0,0,0,["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]],GQ:["240","00","222\\d{6}|(?:3\\d|55|[89]0)\\d{7}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235]"]],["(\\d{3})(\\d{6})","$1 $2",["[89]"]]]],GR:["30","00","5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}",[10,11,12],[["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["21|7"]],["(\\d{4})(\\d{6})","$1 $2",["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2689]"]],["(\\d{3})(\\d{3,4})(\\d{5})","$1 $2 $3",["8"]]]],GT:["502","00","80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}",[8,11],[["(\\d{4})(\\d{4})","$1 $2",["[2-8]"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]]],GU:["1","011","(?:[58]\\d\\d|671|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","671$1",0,"671"],GW:["245","00","[49]\\d{8}|4\\d{6}",[7,9],[["(\\d{3})(\\d{4})","$1 $2",["40"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[49]"]]]],GY:["592","001","(?:[2-8]\\d{3}|9008)\\d{3}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]]],HK:["852","00(?:30|5[09]|[126-9]?)","8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}",[5,6,7,8,9,11],[["(\\d{3})(\\d{2,5})","$1 $2",["900","9003"]],["(\\d{4})(\\d{4})","$1 $2",["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]],["(\\d{3})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["9"]]],0,0,0,0,0,0,0,"00"],HN:["504","00","8\\d{10}|[237-9]\\d{7}",[8,11],[["(\\d{4})(\\d{4})","$1-$2",["[237-9]"]]]],HR:["385","00","[2-69]\\d{8}|80\\d{5,7}|[1-79]\\d{7}|6\\d{6}",[7,8,9],[["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["6[01]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{4})(\\d{3})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["6|7[245]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-57]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"]],"0"],HT:["509","00","[2-589]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["[2-589]"]]]],HU:["36","00","[235-7]\\d{8}|[1-9]\\d{7}",[8,9],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"(06 $1)"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"],"(06 $1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"06 $1"]],"06"],ID:["62","00[89]","00[1-9]\\d{9,14}|(?:[1-36]|8\\d{5})\\d{6}|00\\d{9}|[1-9]\\d{8,10}|[2-9]\\d{7}",[7,8,9,10,11,12,13,14,15,16,17],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["15"]],["(\\d{2})(\\d{5,9})","$1 $2",["2[124]|[36]1"],"(0$1)"],["(\\d{3})(\\d{5,7})","$1 $2",["800"],"0$1"],["(\\d{3})(\\d{5,8})","$1 $2",["[2-79]"],"(0$1)"],["(\\d{3})(\\d{3,4})(\\d{3})","$1-$2-$3",["8[1-35-9]"],"0$1"],["(\\d{3})(\\d{6,8})","$1 $2",["1"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["804"],"0$1"],["(\\d{3})(\\d)(\\d{3})(\\d{3})","$1 $2 $3 $4",["80"],"0$1"],["(\\d{3})(\\d{4})(\\d{4,5})","$1-$2-$3",["8"],"0$1"]],"0"],IE:["353","00","(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}",[7,8,9,10],[["(\\d{2})(\\d{5})","$1 $2",["2[24-9]|47|58|6[237-9]|9[35-9]"],"(0$1)"],["(\\d{3})(\\d{5})","$1 $2",["[45]0"],"(0$1)"],["(\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["1"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2569]|4[1-69]|7[14]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["70"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["81"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[78]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["4"],"(0$1)"],["(\\d{2})(\\d)(\\d{3})(\\d{4})","$1 $2 $3 $4",["8"],"0$1"]],"0"],IL:["972","0(?:0|1(?:05|[2-9]))","1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}",[7,8,9,10,11,12],[["(\\d{4})(\\d{3})","$1-$2",["125"]],["(\\d{4})(\\d{2})(\\d{2})","$1-$2-$3",["121"]],["(\\d)(\\d{3})(\\d{4})","$1-$2-$3",["[2-489]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1-$2-$3",["12"]],["(\\d{4})(\\d{6})","$1-$2",["159"]],["(\\d)(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3-$4",["1[7-9]"]],["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})","$1-$2 $3-$4",["15"]]],"0"],IM:["44","00","1624\\d{6}|(?:[3578]\\d|90)\\d{8}",[10],0,"0",0,"([25-8]\\d{5})$|0|180020","1624$1",0,"74576|(?:16|7[56])24"],IN:["91","00","(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}",[8,9,10,11,12,13],[["(\\d{8})","$1",["5(?:0|2[23]|3[03]|[67]1|88)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)","5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"],0,1],["(\\d{4})(\\d{4,5})","$1 $2",["180","1800"],0,1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["140"],0,1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["11|2[02]|33|4[04]|79[1-6]|80[2-46]","11|2[02]|33|4[04]|79[1-6]|80(?:[2-4]|6[0-589])","11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9]))|80(?:[2-4]|6[0-589])"],"0$1",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67)[14]","1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31)|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]","1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:3171|5[15][2-6]|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|8(?:16|2[014]|3[126]|6[136]|7[78]|83)(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"],"0$1",1],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|3[129]|5[29]|6[02-5]|70)|807","1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7(?:[23569]|8[0-57-9])|8[1-6])|7(?:1(?:[013-8]|9[6-9])|3(?:17|2[0-49]|9[2-57])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]","1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|8(?:28[235-7]|3))|73179|807(?:1|9[1-3])|(?:1552|6(?:(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578])\\d|7(?:[23569]\\d|8[0-57-9])|8(?:[14-6]\\d|2[0-79]))|7(?:1(?:[013-8]\\d|9[6-9])|3(?:2[0-49]|9[2-57])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"],"0$1",1],["(\\d{5})(\\d{5})","$1 $2",["16|[6-9]"],"0$1",1],["(\\d{4})(\\d{2,4})(\\d{4})","$1 $2 $3",["18[06]","18[06]0"],0,1],["(\\d{4})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["18"],0,1]],"0"],IO:["246","00","3\\d{6}",[7],[["(\\d{3})(\\d{4})","$1 $2",["3"]]]],IQ:["964","00","(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-6]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"]],"0"],IR:["98","00","[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}",[4,5,6,7,10],[["(\\d{4,5})","$1",["96"],"0$1"],["(\\d{2})(\\d{4,5})","$1 $2",["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["9"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["[1-8]"],"0$1"]],"0"],IS:["354","00|1(?:0(?:01|[12]0)|100)","(?:38\\d|[4-9])\\d{6}",[7,9],[["(\\d{3})(\\d{4})","$1 $2",["[4-9]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["3"]]],0,0,0,0,0,0,0,"00"],IT:["39","00","0\\d{5,11}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?",[6,7,8,9,10,11,12],[["(\\d{2})(\\d{4,6})","$1 $2",["0[26]"]],["(\\d{3})(\\d{3,6})","$1 $2",["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])","0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]],["(\\d{4})(\\d{2,6})","$1 $2",["0(?:[13-579][2-46-8]|8[236-8])"]],["(\\d{4})(\\d{4})","$1 $2",["894"]],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[26]|5"]],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["1(?:44|[679])|[378]|43"]],["(\\d{3})(\\d{3,4})(\\d{4})","$1 $2 $3",["0[13-57-9][0159]|14"]],["(\\d{2})(\\d{4})(\\d{5})","$1 $2 $3",["0[26]"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["0"]],["(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["[03]"]]],0,0,0,0,0,0,[["0(?:669[0-79]\\d{1,6}|831\\d{2,8})|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[2356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"],["3[2-9]\\d{7,8}|(?:31|43)\\d{8}",[9,10]],["80(?:0\\d{3}|3)\\d{3}",[6,9]],["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}",[6,8,9,10]],["1(?:78\\d|99)\\d{6}",[9,10]],["3[2-8]\\d{9,10}",[11,12]],0,0,["55\\d{8}",[10]],["84(?:[08]\\d{3}|[17])\\d{3}",[6,9]]]],JE:["44","00","1534\\d{6}|(?:[3578]\\d|90)\\d{8}",[10],0,"0",0,"([0-24-8]\\d{5})$|0|180020","1534$1",0,0,[["1534[0-24-8]\\d{5}"],["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}"],["80(?:07(?:35|81)|8901)\\d{4}"],["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"],["701511\\d{4}"],0,["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"],["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"],["56\\d{8}"]]],JM:["1","011","(?:[58]\\d\\d|658|900)\\d{7}",[10],0,"1",0,0,0,0,"658|876"],JO:["962","00","(?:(?:[2689]|7\\d)\\d|32|427|53)\\d{6}",[8,9],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2356]|87"],"(0$1)"],["(\\d{3})(\\d{5,6})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["70"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[47]"],"0$1"]],"0"],JP:["81","010","00[1-9]\\d{6,14}|[25-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}",[8,9,10,11,12,13,14,15,16,17],[["(\\d{3})(\\d{3})(\\d{3})","$1-$2-$3",["(?:12|57|99)0"],"0$1"],["(\\d{4})(\\d)(\\d{4})","$1-$2-$3",["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]","1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["60"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1-$2-$3",["3|4(?:2[09]|7[01])|6[1-9]","3|4(?:2(?:0|9[02-69])|7(?:0[019]|1))|6[1-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]","1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"],"0$1"],["(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3",["[14]|[289][2-9]|5[3-9]|7[2-4679]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1-$2-$3",["800"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[25-9]"],"0$1"]],"0",0,"(000[2569]\\d{4,6})$|(?:(?:003768)0?)|0","$1"],KE:["254","000","(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}",[7,8,9,10],[["(\\d{2})(\\d{5,7})","$1 $2",["[24-6]"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["[17]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],"0"],KG:["996","00","8\\d{9}|[235-9]\\d{8}",[9,10],[["(\\d{4})(\\d{5})","$1 $2",["3(?:1[346]|[24-79])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235-79]|88"],"0$1"],["(\\d{3})(\\d{3})(\\d)(\\d{2,3})","$1 $2 $3 $4",["8"],"0$1"]],"0"],KH:["855","00[14-9]","1\\d{9}|[1-9]\\d{7,8}",[8,9,10],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-9]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],KI:["686","00","(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}",[5,8],0,"0"],KM:["269","00","[3478]\\d{6}",[7],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[3478]"]]]],KN:["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-7]\\d{6})$|1","869$1",0,"869"],KP:["850","00|99","85\\d{6}|(?:19\\d|[2-7])\\d{7}",[8,10],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2-7]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"]],"0"],KR:["82","00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))","00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}",[5,6,8,9,10,11,12,13,14],[["(\\d{2})(\\d{3,4})","$1-$2",["(?:3[1-3]|[46][1-4]|5[1-5])1"],"0$1"],["(\\d{4})(\\d{4})","$1-$2",["1"]],["(\\d)(\\d{3,4})(\\d{4})","$1-$2-$3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1-$2-$3",["[36]0|8"],"0$1"],["(\\d{2})(\\d{3,4})(\\d{4})","$1-$2-$3",["[1346]|5[1-5]"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2-$3",["[57]"],"0$1"],["(\\d{2})(\\d{5})(\\d{4})","$1-$2-$3",["5"],"0$1"]],"0",0,"0(8(?:[1-46-8]|5\\d\\d))?"],KW:["965","00","18\\d{5}|(?:[2569]\\d|41)\\d{6}",[7,8],[["(\\d{4})(\\d{3,4})","$1 $2",["[169]|2(?:[235]|4[1-35-9])|52"]],["(\\d{3})(\\d{5})","$1 $2",["[245]"]]]],KY:["1","011","(?:345|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","345$1",0,"345"],KZ:["7","810","8\\d{13}|[78]\\d{9}",[10,14],0,"8",0,0,0,0,"7",0,"8~10"],LA:["856","00","[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}",[8,9,10],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2[13]|3[14]|[4-8]"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["3"],"0$1"],["(\\d{2})(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[23]"],"0$1"]],"0"],LB:["961","00","[27-9]\\d{7}|[13-9]\\d{6}",[7,8],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[13-69]|7(?:[2-57]|62|8[0-6]|9[04-9])|8[02-9]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[27-9]"]]],"0"],LC:["1","011","(?:[58]\\d\\d|758|900)\\d{7}",[10],0,"1",0,"([2-8]\\d{6})$|1","758$1",0,"758"],LI:["423","00","[68]\\d{8}|(?:[2378]\\d|90)\\d{5}",[7,9],[["(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3",["[2379]|8(?:0[09]|7)","[2379]|8(?:0(?:02|9)|7)"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["69"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]]],"0",0,"(1001)|0"],LK:["94","00","[1-9]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[1-689]"],"0$1"]],"0"],LR:["231","00","(?:[2457]\\d|33|88)\\d{7}|(?:2\\d|[4-6])\\d{6}",[7,8,9],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["4[67]|[56]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[2-578]"],"0$1"]],"0"],LS:["266","00","(?:[256]\\d\\d|800)\\d{5}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[2568]"]]]],LT:["370","00","(?:[3469]\\d|52|[78]0)\\d{6}",[8],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["52[0-7]"],"(0-$1)",1],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[7-9]"],"0 $1",1],["(\\d{2})(\\d{6})","$1 $2",["37|4(?:[15]|6[1-8])"],"(0-$1)",1],["(\\d{3})(\\d{5})","$1 $2",["[3-6]"],"(0-$1)",1]],"0",0,"[08]"],LU:["352","00","35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}",[4,5,6,7,8,9,10,11],[["(\\d{2})(\\d{3})","$1 $2",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["20[2-689]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4",["20"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})","$1 $2 $3 $4",["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["80[01]|90[015]"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3 $4",["20"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})","$1 $2 $3 $4 $5",["20"]]],0,0,"(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"],LV:["371","00","(?:[268]\\d|78|90)\\d{6}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2679]|8[01]"]]]],LY:["218","00","[2-9]\\d{8}",[9],[["(\\d{2})(\\d{7})","$1-$2",["[2-9]"],"0$1"]],"0"],MA:["212","00","[5-8]\\d{8}",[9],[["(\\d{4})(\\d{5})","$1-$2",["892"],"0$1"],["(\\d{2})(\\d{7})","$1-$2",["8(?:0[0-7]|9)"],"0$1"],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[5-8]"],"0$1"]],"0",0,0,0,0,"[5-8]"],MC:["377","00","(?:[3489]|[67]\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["4"],"0$1"],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[389]"]],["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4 $5",["[67]"],"0$1"]],"0"],MD:["373","00","(?:[235-7]\\d|[89]0)\\d{6}",[8],[["(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["22|3"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["[25-7]"],"0$1"]],"0"],ME:["382","00","(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[2-9]"],"0$1"]],"0"],MF:["590","00","7090\\d{5}|(?:[56]9|[89]\\d)\\d{7}",[9],0,"0",0,0,0,0,0,[["(?:59(?:0(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)|87\\d)|80[6-9]\\d\\d)\\d{4}"],["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))|7090[0-4])\\d{4}"],["80[0-5]\\d{6}"],["8[129]\\d{7}"],0,0,0,0,["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]],MG:["261","00","[23]\\d{8}",[9],[["(\\d{2})(\\d{2})(\\d{3})(\\d{2})","$1 $2 $3 $4",["[23]"],"0$1"]],"0",0,"([24-9]\\d{6})$|0","20$1"],MH:["692","011","329\\d{4}|(?:[256]\\d|45)\\d{5}",[7],[["(\\d{3})(\\d{4})","$1-$2",["[2-6]"]]],"1"],MK:["389","00","[2-578]\\d{7}",[8],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2|34[47]|4(?:[37]7|5[47]|64)"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[347]"],"0$1"],["(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["[58]"],"0$1"]],"0"],ML:["223","00","[24-9]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24-9]"]]]],MM:["95","00","1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}",[6,7,8,9,10],[["(\\d)(\\d{2})(\\d{3})","$1 $2 $3",["16|2"],"0$1"],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["4(?:[2-46]|5[3-5])|5|6(?:[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-5]|(?:60|86)[23]"],"0$1"],["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[12]|452|678|86","[12]|452|6788|86"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[4-7]|8[1-35]"],"0$1"],["(\\d)(\\d{3})(\\d{4,6})","$1 $2 $3",["9(?:2[0-4]|[35-9]|4[137-9])"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["92"],"0$1"],["(\\d)(\\d{5})(\\d{4})","$1 $2 $3",["9"],"0$1"]],"0"],MN:["976","001","[12]\\d{7,9}|[5-9]\\d{7}",[8,9,10],[["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["11|2[16]"],"0$1"],["(\\d{4})(\\d{4})","$1 $2",["[5-9]"]],["(\\d{3})(\\d{5,6})","$1 $2",["[12]2[1-3]"],"0$1"],["(\\d{4})(\\d{5,6})","$1 $2",["[12](?:27|3[2-8]|4[2-68]|5[1-4689])","[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"],"0$1"],["(\\d{5})(\\d{4,5})","$1 $2",["[12]"],"0$1"]],"0"],MO:["853","00","0800\\d{3}|(?:28|[68]\\d)\\d{6}",[7,8],[["(\\d{4})(\\d{3})","$1 $2",["0"]],["(\\d{4})(\\d{4})","$1 $2",["[268]"]]]],MP:["1","011","[58]\\d{9}|(?:67|90)0\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","670$1",0,"670"],MQ:["596","00","7091\\d{5}|(?:[56]9|[89]\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-79]|8(?:0[6-9]|[36])"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0"],MR:["222","00","(?:[2-4]\\d\\d|800)\\d{5}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-48]"]]]],MS:["1","011","(?:[58]\\d\\d|664|900)\\d{7}",[10],0,"1",0,"([34]\\d{6})$|1","664$1",0,"664"],MT:["356","00","3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[2357-9]"]]]],MU:["230","0(?:0|[24-7]0|3[03])","(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}",[7,8,10],[["(\\d{3})(\\d{4})","$1 $2",["[2-46]|8[013]"]],["(\\d{4})(\\d{4})","$1 $2",["[57]"]],["(\\d{5})(\\d{5})","$1 $2",["8"]]],0,0,0,0,0,0,0,"020"],MV:["960","0(?:0|19)","(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}",[7,10],[["(\\d{3})(\\d{4})","$1-$2",["[34679]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"]]],0,0,0,0,0,0,0,"00"],MW:["265","00","(?:[1289]\\d|31|77)\\d{7}|1\\d{6}",[7,9],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["1[2-9]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-37-9]"],"0$1"]],"0"],MX:["52","0[09]","[2-9]\\d{9}",[10],[["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["33|5[56]|81"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[2-9]"]]],0,0,0,0,0,0,0,"00"],MY:["60","00","1\\d{8,9}|(?:3\\d|[4-9])\\d{7}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1-$2 $3",["[4-79]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1-$2 $3",["1(?:[02469]|[378][1-9]|53)|8","1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"],"0$1"],["(\\d)(\\d{4})(\\d{4})","$1-$2 $3",["3"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{4})","$1-$2-$3-$4",["1(?:[367]|80)"]],["(\\d{3})(\\d{3})(\\d{4})","$1-$2 $3",["15"],"0$1"],["(\\d{2})(\\d{4})(\\d{4})","$1-$2 $3",["1"],"0$1"]],"0"],MZ:["258","00","(?:2|8\\d)\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["2|8[2-9]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["8"]]]],NA:["264","00","[68]\\d{7,8}",[8,9],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["88"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["6"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["87"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"]],"0"],NC:["687","00","(?:050|[2-57-9]\\d\\d)\\d{3}",[6],[["(\\d{2})(\\d{2})(\\d{2})","$1.$2.$3",["[02-57-9]"]]]],NE:["227","00","[027-9]\\d{7}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["08"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[089]|2[013]|7[0467]"]]]],NF:["672","00","[13]\\d{5}",[6],[["(\\d{2})(\\d{4})","$1 $2",["1[0-3]"]],["(\\d)(\\d{5})","$1 $2",["[13]"]]],0,0,"([0-258]\\d{4})$","3$1"],NG:["234","009","(?:20|9\\d)\\d{8}|[78]\\d{9,13}",[10,11,12,13,14],[["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[7-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["20[129]"],"0$1"],["(\\d{4})(\\d{2})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{3})(\\d{4})(\\d{4,5})","$1 $2 $3",["[78]"],"0$1"],["(\\d{3})(\\d{5})(\\d{5,6})","$1 $2 $3",["[78]"],"0$1"]],"0"],NI:["505","00","(?:1800|[25-8]\\d{3})\\d{4}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[125-8]"]]]],NL:["31","00","(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}",[5,6,7,8,9,10,11],[["(\\d{3})(\\d{4,7})","$1 $2",["[89]0"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["66"],"0$1"],["(\\d)(\\d{8})","$1 $2",["6"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-578]|91"],"0$1"],["(\\d{3})(\\d{3})(\\d{5})","$1 $2 $3",["9"],"0$1"]],"0"],NO:["47","00","(?:0|[2-9]\\d{3})\\d{4}",[5,8],[["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["8"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[2-79]"]]],0,0,0,0,0,"[02-689]|7[0-8]"],NP:["977","00","(?:1\\d|9)\\d{9}|[1-9]\\d{7}",[8,10,11],[["(\\d)(\\d{7})","$1-$2",["1[2-6]"],"0$1"],["(\\d{2})(\\d{6})","$1-$2",["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"],"0$1"],["(\\d{3})(\\d{7})","$1-$2",["9"]]],"0"],NR:["674","00","(?:222|444|(?:55|8\\d)\\d|666|777|999)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[24-9]"]]]],NU:["683","00","(?:[4-7]|888\\d)\\d{3}",[4,7],[["(\\d{3})(\\d{4})","$1 $2",["8"]]]],NZ:["64","0(?:0|161)","[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}",[5,6,7,8,9,10],[["(\\d{2})(\\d{3,8})","$1 $2",["8[1-79]"],"0$1"],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["50[036-8]|8|90","50(?:[0367]|88)|8|90"],"0$1"],["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["24|[346]|7[2-57-9]|9[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["2(?:10|74)|[589]"],"0$1"],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["1|2[028]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,5})","$1 $2 $3",["2(?:[169]|7[0-35-9])|7"],"0$1"]],"0",0,0,0,0,0,0,"00"],OM:["968","00","(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}",[7,8,9],[["(\\d{3})(\\d{4,6})","$1 $2",["[58]"]],["(\\d{2})(\\d{6})","$1 $2",["2"]],["(\\d{4})(\\d{4})","$1 $2",["[179]"]]]],PA:["507","00","(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}",[7,8,10,11],[["(\\d{3})(\\d{4})","$1-$2",["[1-57-9]"]],["(\\d{4})(\\d{4})","$1-$2",["[68]"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]]]],PE:["51","00|19(?:1[124]|77|90)00","(?:[14-8]|9\\d)\\d{7}",[8,9],[["(\\d{3})(\\d{5})","$1 $2",["80"],"(0$1)"],["(\\d)(\\d{7})","$1 $2",["1"],"(0$1)"],["(\\d{2})(\\d{6})","$1 $2",["[4-8]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["9"]]],"0",0,0,0,0,0,0,"00"," Anexo "],PF:["689","00","4\\d{5}(?:\\d{2})?|8\\d{7,8}",[6,8,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["44"]],["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["4|8[7-9]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]]]],PG:["675","00|140[1-3]","(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["18|[2-69]|85[02-46-9]"]],["(\\d{4})(\\d{4})","$1 $2",["[78]"]]],0,0,0,0,0,0,0,"00"],PH:["63","00","(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}",[6,8,9,10,11,12,13],[["(\\d)(\\d{5})","$1 $2",["2"],"(0$1)"],["(\\d{4})(\\d{4,6})","$1 $2",["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2","3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"],"(0$1)"],["(\\d{5})(\\d{4})","$1 $2",["346|4(?:27|9[35])|883","3469|4(?:279|9(?:30|56))|8834"],"(0$1)"],["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["2"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[3-7]|8[2-8]"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]],["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})","$1 $2 $3 $4",["1"]]],"0"],PK:["92","00","122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}",[8,9,10,11,12],[["(\\d{3})(\\d{3})(\\d{2,7})","$1 $2 $3",["[89]0"],"0$1"],["(\\d{4})(\\d{5})","$1 $2",["1"]],["(\\d{3})(\\d{6,7})","$1 $2",["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])","9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"],"(0$1)"],["(\\d{2})(\\d{7,8})","$1 $2",["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"],"(0$1)"],["(\\d{5})(\\d{5})","$1 $2",["58"],"(0$1)"],["(\\d{3})(\\d{7})","$1 $2",["3"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"],"(0$1)"],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[24-9]"],"(0$1)"]],"0"],PL:["48","00","(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}",[6,7,8,9,10],[["(\\d{5})","$1",["19"]],["(\\d{3})(\\d{3})","$1 $2",["11|20|64"]],["(\\d{2})(\\d{2})(\\d{3})","$1 $2 $3",["30|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1","30|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]],["(\\d{3})(\\d{2})(\\d{2,3})","$1 $2 $3",["64"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[2-8]|[2-7]|8[1-79]|9[145]"]],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["8"]]]],PM:["508","00","[78]\\d{8}|[2-9]\\d{5}",[6,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[2-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"],"0$1"]],"0"],PR:["1","011","(?:[589]\\d\\d|787)\\d{7}",[10],0,"1",0,0,0,0,"787|939"],PS:["970","00","[2489]2\\d{6}|(?:1\\d|5)\\d{8}",[8,9,10],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["[2489]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["5"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],PT:["351","00","1693\\d{5}|(?:[26-9]\\d|30)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["2[12]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["16|[236-9]"]]]],PW:["680","01[12]","(?:[24-8]\\d\\d|345|900)\\d{4}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[2-9]"]]]],PY:["595","00","[36-8]\\d{5,8}|4\\d{6,8}|59\\d{6}|9\\d{5,10}|(?:2\\d|5[0-8])\\d{6,7}",[6,7,8,9,10,11],[["(\\d{3})(\\d{3,6})","$1 $2",["[2-9]0"],"0$1"],["(\\d{2})(\\d{5})","$1 $2",["3[289]|4[246-8]|61|7[1-3]|8[1-36]"],"(0$1)"],["(\\d{3})(\\d{4,5})","$1 $2",["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["87"]],["(\\d{3})(\\d{6})","$1 $2",["9(?:[5-79]|8[1-7])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[2-8]"],"0$1"],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["9"]]],"0"],QA:["974","00","800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}",[7,8,9,11],[["(\\d{3})(\\d{4})","$1 $2",["2[136]|8"]],["(\\d{4})(\\d{4})","$1 $2",["[3-7]"]]]],RE:["262","00","709\\d{6}|(?:26|[689]\\d)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[26-9]"],"0$1"]],"0",0,0,0,0,0,[["2631[0-6]\\d{4}|26(?:2\\d|30|88)\\d{5}"],["(?:69(?:2\\d\\d|3(?:[06][0-6]|1[0-3]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))|7092[0-3])\\d{4}"],["80\\d{7}"],["89[1-37-9]\\d{6}"],0,0,0,0,["9(?:399[0-3]|479[0-6]|76(?:2[278]|3[0-37]))\\d{4}"],["8(?:1[019]|2[0156]|84|90)\\d{6}"]]],RO:["40","00","(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}",[6,9],[["(\\d{3})(\\d{3})","$1 $2",["2[3-6]","2[3-6]\\d9"],"0$1"],["(\\d{2})(\\d{4})","$1 $2",["219|31"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[23]1"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[236-9]"],"0$1"]],"0",0,0,0,0,0,0,0," int "],RS:["381","00","38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}",[6,7,8,9,10,11,12],[["(\\d{3})(\\d{3,9})","$1 $2",["(?:2[389]|39)0|[7-9]"],"0$1"],["(\\d{2})(\\d{5,10})","$1 $2",["[1-36]"],"0$1"]],"0"],RU:["7","810","8\\d{13}|[347-9]\\d{9}",[10,14],[["(\\d{4})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-8]|2[1-9])","7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))","7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"],"8 ($1)",1],["(\\d{5})(\\d)(\\d{2})(\\d{2})","$1 $2 $3 $4",["7(?:1[0-68]|2[1-9])","7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))","7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"],"8 ($1)",1],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"8 ($1)",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2-$3-$4",["[349]|8(?:[02-7]|1[1-8])"],"8 ($1)",1],["(\\d{4})(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3 $4",["8"],"8 ($1)"]],"8",0,0,0,0,"[3489]",0,"8~10"],RW:["250","00","(?:06|[27]\\d\\d|[89]00)\\d{6}",[8,9],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["0"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[7-9]"],"0$1"]],"0"],SA:["966","00","(?:[15]\\d|800|92)\\d{7}",[9,10],[["(\\d{4})(\\d{5})","$1 $2",["9"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["1"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["5"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]]],"0"],SB:["677","0[01]","[6-9]\\d{6}|[1-6]\\d{4}",[5,7],[["(\\d{2})(\\d{5})","$1 $2",["6[89]|7|8[4-9]|9(?:[1-8]|9[0-8])"]]]],SC:["248","010|0[0-2]","(?:[2489]\\d|64)\\d{5}",[7],[["(\\d)(\\d{3})(\\d{3})","$1 $2 $3",["[246]|9[57]"]]],0,0,0,0,0,0,0,"00"],SD:["249","00","[19]\\d{8}",[9],[["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[19]"],"0$1"]],"0"],SE:["46","00","(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}",[6,7,8,9,10,12],[["(\\d{2})(\\d{2,3})(\\d{2})","$1-$2 $3",["20"],"0$1",0,"$1 $2 $3"],["(\\d{3})(\\d{4})","$1-$2",["9(?:00|39|44|9)"],"0$1",0,"$1 $2"],["(\\d{2})(\\d{3})(\\d{2})","$1-$2 $3",["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"],"0$1",0,"$1 $2 $3"],["(\\d)(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["8"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2,3})(\\d{2})","$1-$2 $3",["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1",0,"$1 $2 $3"],["(\\d{3})(\\d{2,3})(\\d{3})","$1-$2 $3",["9(?:00|39|44)"],"0$1",0,"$1 $2 $3"],["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"],"0$1",0,"$1 $2 $3 $4"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4",["10|7"],"0$1",0,"$1 $2 $3 $4"],["(\\d)(\\d{3})(\\d{3})(\\d{2})","$1-$2 $3 $4",["8"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1-$2 $3 $4",["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{2})(\\d{3})","$1-$2 $3 $4",["9"],"0$1",0,"$1 $2 $3 $4"],["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1-$2 $3 $4 $5",["[26]"],"0$1",0,"$1 $2 $3 $4 $5"]],"0"],SG:["65","0[0-3]\\d","(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}",[8,10,11],[["(\\d{4})(\\d{4})","$1 $2",["[369]|8(?:0[1-9]|[1-9])"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"]],["(\\d{4})(\\d{4})(\\d{3})","$1 $2 $3",["7"]],["(\\d{4})(\\d{3})(\\d{4})","$1 $2 $3",["1"]]]],SH:["290","00","(?:[256]\\d|8)\\d{3}",[4,5],0,0,0,0,0,0,"[256]"],SI:["386","00|10(?:22|66|88|99)","[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}",[5,6,7,8],[["(\\d{2})(\\d{3,6})","$1 $2",["8[09]|9"],"0$1"],["(\\d{3})(\\d{5})","$1 $2",["59|8"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[37][01]|4[013]|51|6"],"0$1"],["(\\d)(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[1-57]"],"(0$1)"]],"0",0,0,0,0,0,0,"00"],SJ:["47","00","0\\d{4}|(?:[489]\\d|79)\\d{6}",[5,8],0,0,0,0,0,0,"79"],SK:["421","00","[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}",[6,7,9],[["(\\d)(\\d{2})(\\d{3,4})","$1 $2 $3",["21"],"0$1"],["(\\d{2})(\\d{2})(\\d{2,3})","$1 $2 $3",["[3-5][1-8]1","[3-5][1-8]1[67]"],"0$1"],["(\\d)(\\d{3})(\\d{3})(\\d{2})","$1 $2 $3 $4",["2"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[689]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[3-5]"],"0$1"]],"0"],SL:["232","00","(?:[237-9]\\d|66)\\d{6}",[8],[["(\\d{2})(\\d{6})","$1 $2",["[236-9]"],"(0$1)"]],"0"],SM:["378","00","(?:0549|[5-7]\\d)\\d{6}",[8,10],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[5-7]"]],["(\\d{4})(\\d{6})","$1 $2",["0"]]],0,0,"([89]\\d{5})$","0549$1"],SN:["221","00","(?:[378]\\d|93)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[379]"]]]],SO:["252","00","[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}",[6,7,8,9],[["(\\d{2})(\\d{4})","$1 $2",["8[125]"]],["(\\d{6})","$1",["[134]"]],["(\\d)(\\d{6})","$1 $2",["[15]|2[0-79]|3[0-46-8]|4[0-7]"]],["(\\d{2})(\\d{5,7})","$1 $2",["1|28|9[2-9]"]],["(\\d)(\\d{7})","$1 $2",["[267]|904"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[346-9]"]]],"0"],SR:["597","00","(?:[2-5]|[6-9]\\d)\\d{5}",[6,7],[["(\\d{2})(\\d{2})(\\d{2})","$1-$2-$3",["56"]],["(\\d{3})(\\d{3})","$1-$2",["[2-5]"]],["(\\d{3})(\\d{4})","$1-$2",["[6-9]"]]]],SS:["211","00","[19]\\d{8}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[19]"],"0$1"]],"0"],ST:["239","00","(?:22|9\\d)\\d{5}",[7],[["(\\d{3})(\\d{4})","$1 $2",["[29]"]]]],SV:["503","00","[25-7]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?",[7,8,11],[["(\\d{3})(\\d{4})","$1 $2",["[89]"]],["(\\d{4})(\\d{4})","$1 $2",["[25-7]"]],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["[89]"]]]],SX:["1","011","7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"(5\\d{6})$|1","721$1",0,"721"],SY:["963","00","[1-359]\\d{8}|[1-5]\\d{7}",[8,9],[["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-4]|5[1-3]"],"0$1",1],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[59]"],"0$1",1]],"0"],SZ:["268","00","0800\\d{4}|(?:[237]\\d|900)\\d{6}",[8,9],[["(\\d{4})(\\d{4})","$1 $2",["[0237]"]],["(\\d{5})(\\d{4})","$1 $2",["9"]]]],TA:["290","00","8\\d{3}",[4],0,0,0,0,0,0,"8"],TC:["1","011","(?:[58]\\d\\d|649|900)\\d{7}",[10],0,"1",0,"([2-479]\\d{6})$|1","649$1",0,"649"],TD:["235","00|16","(?:22|[3689]\\d|77)\\d{6}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[236-9]"]]],0,0,0,0,0,0,0,"00"],TG:["228","00","[279]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[279]"]]]],TH:["66","00[1-9]","(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}",[8,9,10,13],[["(\\d)(\\d{3})(\\d{4})","$1 $2 $3",["2"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[13-9]"],"0$1"],["(\\d{4})(\\d{3})(\\d{3})","$1 $2 $3",["1"]]],"0"],TJ:["992","810","(?:[0-57-9]\\d|66)\\d{7}",[9],[["(\\d{6})(\\d)(\\d{2})","$1 $2 $3",["331","3317"]],["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["44[02-479]|[34]7"]],["(\\d{4})(\\d)(\\d{4})","$1 $2 $3",["3(?:[1245]|3[12])"]],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["\\d"]]],0,0,0,0,0,0,0,"8~10"],TK:["690","00","[2-47]\\d{3,6}",[4,5,6,7]],TL:["670","00","7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}",[7,8],[["(\\d{3})(\\d{4})","$1 $2",["[2-489]|70"]],["(\\d{4})(\\d{4})","$1 $2",["7"]]]],TM:["993","810","[1-7]\\d{7}",[8],[["(\\d{2})(\\d{2})(\\d{2})(\\d{2})","$1 $2-$3-$4",["12"],"(8 $1)"],["(\\d{3})(\\d)(\\d{2})(\\d{2})","$1 $2-$3-$4",["[1-5]"],"(8 $1)"],["(\\d{2})(\\d{6})","$1 $2",["[67]"],"8 $1"]],"8",0,0,0,0,0,0,"8~10"],TN:["216","00","[2-57-9]\\d{7}",[8],[["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-57-9]"]]]],TO:["676","00","(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}",[5,7],[["(\\d{2})(\\d{3})","$1-$2",["[2-4]|50|6[09]|7[0-24-69]|8[05]"]],["(\\d{4})(\\d{3})","$1 $2",["0"]],["(\\d{3})(\\d{4})","$1 $2",["[5-9]"]]]],TR:["90","00","4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}",[7,10,12,13],[["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["512|8[01589]|90"],"0$1",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["5"],"0$1",1],["(\\d{3})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[24][1-8]|3[1-9]"],"(0$1)",1],["(\\d{3})(\\d{3})(\\d{6,7})","$1 $2 $3",["80"],"0$1",1]],"0"],TT:["1","011","(?:[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-46-8]\\d{6})$|1","868$1",0,"868"],TV:["688","00","(?:2|7\\d\\d|90)\\d{4}",[5,6,7],[["(\\d{2})(\\d{3})","$1 $2",["2"]],["(\\d{2})(\\d{4})","$1 $2",["90"]],["(\\d{2})(\\d{5})","$1 $2",["7"]]]],TW:["886","0(?:0[25-79]|19)","[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}",[7,8,9,10,11],[["(\\d{2})(\\d)(\\d{4})","$1 $2 $3",["202"],"0$1"],["(\\d{3})(\\d{5})","$1 $2",["826"],"0$1"],["(\\d{3})(\\d{2})(\\d{3})","$1 $2 $3",["83"],"0$1"],["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["82"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["[25]0|37|49|8[09]"],"0$1"],["(\\d)(\\d{3,4})(\\d{4})","$1 $2 $3",["[23568]|4(?:0[02-48]|[1-478])|7[1-9]","[23568]|4(?:0[2-48]|[1-478])|(?:400|7)[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[49]"],"0$1"],["(\\d{2})(\\d{4})(\\d{4,5})","$1 $2 $3",["7"],"0$1"]],"0",0,0,0,0,0,0,0,"#"],TZ:["255","00[056]","(?:[25-8]\\d|41|90)\\d{7}",[9],[["(\\d{3})(\\d{2})(\\d{4})","$1 $2 $3",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[24]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["5"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[67]"],"0$1"]],"0"],UA:["380","00","[89]\\d{9}|[3-9]\\d{8}",[9,10],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]","6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"],"0$1"],["(\\d{4})(\\d{5})","$1 $2",["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])","3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[3-7]|89|9[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["[89]"],"0$1"]],"0",0,0,0,0,0,0,"0~0"],UG:["256","00[057]","800\\d{6}|(?:[29]0|[347]\\d)\\d{7}",[9],[["(\\d{4})(\\d{5})","$1 $2",["202","2024","20240"],"0$1"],["(\\d{3})(\\d{6})","$1 $2",["20[0-35-7]|4(?:6[45]|[7-9])|[7-9]","20(?:[0135-7]|2[5-9])|4(?:6[45]|[7-9])|[7-9]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["[2-4]"],"0$1"]],"0"],US:["1","011","[2-9]\\d{9}|3\\d{6}",[10],[["(\\d{3})(\\d{4})","$1-$2",["310"],0,1],["(\\d{3})(\\d{3})(\\d{4})","($1) $2-$3",["[2-9]"],0,1,"$1-$2-$3"]],"1",0,0,0,0,0,[["(?:472[2-47-9]|983[2-57-9])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[02469]|8[13])|3(?:0[1-57-9]|1[02-9]|2[013-79]|3[0-24679]|4[167]|5[0-3]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-269])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[0-2478]|4[0378]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[0168]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-3589]|8[04-69]))[2-9]\\d{6}"],[""],["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"],["900[2-9]\\d{6}"],["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|3[23]|44|66|77|88)[2-9]\\d{6}"]]],UY:["598","0(?:0|1[3-9]\\d)","0004\\d{2,9}|[1249]\\d{7}|2\\d{3,4}|(?:[49]\\d|80)\\d{5}",[4,5,6,7,8,9,10,11,12,13],[["(\\d{4,5})","$1",["21"]],["(\\d{3})(\\d{3,4})","$1 $2",["0"]],["(\\d{3})(\\d{4})","$1 $2",["[49]0|8"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["9"],"0$1"],["(\\d{4})(\\d{4})","$1 $2",["[124]"]],["(\\d{3})(\\d{3})(\\d{2,4})","$1 $2 $3",["0"]],["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})","$1 $2 $3 $4",["0"]]],"0",0,0,0,0,0,0,"00"," int. "],UZ:["998","00","(?:20|33|[5-9]\\d)\\d{7}",[9],[["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["[235-9]"]]]],VA:["39","00","0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}",[6,7,8,9,10,11,12],0,0,0,0,0,0,"06698"],VC:["1","011","(?:[58]\\d\\d|784|900)\\d{7}",[10],0,"1",0,"([2-7]\\d{6})$|1","784$1",0,"784"],VE:["58","00","[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}",[10],[["(\\d{3})(\\d{7})","$1-$2",["[24-689]"],"0$1"]],"0"],VG:["1","011","(?:284|[58]\\d\\d|900)\\d{7}",[10],0,"1",0,"([2-578]\\d{6})$|1","284$1",0,"284"],VI:["1","011","[58]\\d{9}|(?:34|90)0\\d{7}",[10],0,"1",0,"([2-9]\\d{6})$|1","340$1",0,"340"],VN:["84","00","[12]\\d{9}|[135-9]\\d{8}|[16]\\d{6,7}|7\\d{6}",[7,8,9,10],[["(\\d{4})(\\d{4,6})","$1 $2",["1(?:2[02]|[89])"],0,1],["(\\d{2})(\\d{3})(\\d{2})(\\d{2})","$1 $2 $3 $4",["1[26]|6"],"0$1",1],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[357-9]"],"0$1",1],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["2[48]"],"0$1",1],["(\\d{3})(\\d{4})(\\d{3})","$1 $2 $3",["2"],"0$1",1]],"0"],VU:["678","00","[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}",[5,7],[["(\\d{3})(\\d{4})","$1 $2",["[57-9]"]]]],WF:["681","00","(?:40|72|8\\d{4})\\d{4}|[89]\\d{5}",[6,9],[["(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3",["[47-9]"]],["(\\d{3})(\\d{2})(\\d{2})(\\d{2})","$1 $2 $3 $4",["8"]]]],WS:["685","0","(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}",[5,6,7,10],[["(\\d{5})","$1",["[2-5]|6[1-9]"]],["(\\d{3})(\\d{3,7})","$1 $2",["[68]"]],["(\\d{2})(\\d{5})","$1 $2",["7"]]]],XK:["383","00","2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}",[8,9,10,11,12],[["(\\d{3})(\\d{5})","$1 $2",["[89]"],"0$1"],["(\\d{2})(\\d{3})(\\d{3})","$1 $2 $3",["[2-4]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["2|39"],"0$1"],["(\\d{2})(\\d{7,10})","$1 $2",["3"],"0$1"]],"0"],YE:["967","00","(?:1|7\\d)\\d{7}|[1-7]\\d{6}",[7,8,9],[["(\\d)(\\d{3})(\\d{3,4})","$1 $2 $3",["[1-6]|7(?:[24-6]|8[0-7])"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["7"],"0$1"]],"0"],YT:["262","00","(?:639\\d|7093)\\d{5}|(?:26|80|9\\d)\\d{7}",[9],0,"0",0,0,0,0,0,[["26(?:89\\d|9(?:0[0-467]|15|5[0-4]|6\\d|[78]0))\\d{4}"],["(?:639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])|7093[5-7])\\d{4}"],["80\\d{7}"],0,0,0,0,0,["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]]],ZA:["27","00","[1-79]\\d{8}|8\\d{4,9}",[5,6,7,8,9,10],[["(\\d{2})(\\d{3,4})","$1 $2",["8[1-4]"],"0$1"],["(\\d{2})(\\d{3})(\\d{2,3})","$1 $2 $3",["8[1-4]"],"0$1"],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["860"],"0$1"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["[1-9]"],"0$1"],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["8"],"0$1"]],"0"],ZM:["260","00","800\\d{6}|(?:21|[579]\\d|63)\\d{7}",[9],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[28]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["[579]"],"0$1"]],"0"],ZW:["263","00","(?:13|8\\d{4})\\d{5}|[235-8]\\d{8}|[2-689]\\d{6}",[7,9,10],[["(\\d{2})(\\d{3,5})","$1 $2",["1|2(?:0[0-36-9]|29|58)|67[0-46-9]|(?:55|68)[0-69]"],"0$1"],["(\\d{3})(\\d{3,5})","$1 $2",["2(?:0[45]|[27]|48)|37|675|(?:55|68)[78]"],"0$1"],["(\\d)(\\d{3})(\\d{2,4})","$1 $2 $3",["[49]"],"0$1"],["(\\d{3})(\\d{4})","$1 $2",["80"],"0$1"],["(\\d{4})(\\d{3,5})","$1 $2",["548"],"0$1"],["(\\d{2})(\\d{3})(\\d{3,4})","$1 $2 $3",["29[013-9]"],"0$1"],["(\\d{2})(\\d{7})","$1 $2",["[256]|39|8[13-59]"],"(0$1)"],["(\\d{2})(\\d{3})(\\d{4})","$1 $2 $3",["7"],"0$1"],["(\\d{3})(\\d{3})(\\d{3,4})","$1 $2 $3",["3"],"0$1"],["(\\d{4})(\\d{6})","$1 $2",["8"],"0$1"]],"0"]},nonGeographic:{800:["800",0,"(?:00|[1-9]\\d)\\d{6}",[8],[["(\\d{4})(\\d{4})","$1 $2",["\\d"]]],0,0,0,0,0,0,[0,0,["(?:00|[1-9]\\d)\\d{6}"]]],808:["808",0,"[1-9]\\d{7}",[8],[["(\\d{4})(\\d{4})","$1 $2",["[1-9]"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,0,["[1-9]\\d{7}"]]],870:["870",0,"7\\d{11}|[235-7]\\d{8}",[9,12],[["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["[235-7]"]]],0,0,0,0,0,0,[0,["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"],0,0,0,0,0,0,["2\\d{8}",[9]]]],878:["878",0,"10\\d{10}",[12],[["(\\d{2})(\\d{5})(\\d{5})","$1 $2 $3",["1"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,["10\\d{10}"]]],881:["881",0,"6\\d{9}|[0-36-9]\\d{8}",[9,10],[["(\\d)(\\d{3})(\\d{5})","$1 $2 $3",["[0-37-9]"]],["(\\d)(\\d{3})(\\d{5,6})","$1 $2 $3",["6"]]],0,0,0,0,0,0,[0,["6\\d{9}|[0-36-9]\\d{8}"]]],882:["882",0,"[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?",[7,8,9,10,11,12],[["(\\d{2})(\\d{5})","$1 $2",["16|342"]],["(\\d{2})(\\d{6})","$1 $2",["49"]],["(\\d{2})(\\d{2})(\\d{4})","$1 $2 $3",["1[36]|9"]],["(\\d{2})(\\d{4})(\\d{3})","$1 $2 $3",["3[23]"]],["(\\d{2})(\\d{3,4})(\\d{4})","$1 $2 $3",["16"]],["(\\d{2})(\\d{4})(\\d{4})","$1 $2 $3",["10|23|3(?:[15]|4[57])|4|5[12]"]],["(\\d{3})(\\d{4})(\\d{4})","$1 $2 $3",["34"]],["(\\d{2})(\\d{4,5})(\\d{5})","$1 $2 $3",["[1-35]"]]],0,0,0,0,0,0,[0,["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|5(?:0\\d{3}|2[0-2]))\\d{7}",[7,8,9,10,12]],0,0,0,["348[57]\\d{7}",[11]],0,0,["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]],883:["883",0,"(?:[1-4]\\d|51)\\d{6,10}",[8,9,10,11,12],[["(\\d{3})(\\d{3})(\\d{2,8})","$1 $2 $3",["[14]|2[24-689]|3[02-689]|51[24-9]"]],["(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3",["510"]],["(\\d{3})(\\d{3})(\\d{4})","$1 $2 $3",["21"]],["(\\d{4})(\\d{4})(\\d{4})","$1 $2 $3",["51[13]"]],["(\\d{3})(\\d{3})(\\d{3})(\\d{3})","$1 $2 $3 $4",["[235]"]]],0,0,0,0,0,0,[0,0,0,0,0,0,0,0,["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]],888:["888",0,"\\d{11}",[11],[["(\\d{3})(\\d{3})(\\d{5})","$1 $2 $3"]],0,0,0,0,0,0,[0,0,0,0,0,0,["\\d{11}"]]],979:["979",0,"[1359]\\d{8}",[9],[["(\\d)(\\d{4})(\\d{4})","$1 $2 $3",["[1359]"]]],0,0,0,0,0,0,[0,0,0,["[1359]\\d{8}"]]]}};function u0(e,t){var n=Array.prototype.slice.call(t);return n.push(f2),e.apply(this,n)}function Nd(e,t){e=e.split("-"),t=t.split("-");for(var n=e[0].split("."),r=t[0].split("."),a=0;a<3;a++){var o=Number(n[a]),s=Number(r[a]);if(o>s)return 1;if(s>o)return-1;if(!isNaN(o)&&isNaN(s))return 1;if(isNaN(o)&&!isNaN(s))return-1}return e[1]&&t[1]?e[1]>t[1]?1:e[1]<t[1]?-1:0:!e[1]&&t[1]?1:e[1]&&!t[1]?-1:0}var h2={}.constructor;function Ka(e){return e!=null&&e.constructor===h2}var m2=/^\d+$/;function g2(e){return m2.test(e)}function Vn(e){"@babel/helpers - typeof";return Vn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Vn(e)}function pa(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x2(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,w2(r.key),r)}}function fa(e,t,n){return t&&x2(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function w2(e){var t=v2(e,"string");return Vn(t)=="symbol"?t:t+""}function v2(e,t){if(Vn(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Vn(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}var y2="1.2.0",b2="1.7.35",Cd=" ext. ",p0=function(){function e(t){pa(this,e),A2(t),this.metadata=t,f0.call(this,t)}return fa(e,[{key:"getCountries",value:function(){return Object.keys(this.metadata.countries).filter(function(n){return n!=="001"})}},{key:"getCountryMetadata",value:function(n){return this.metadata.countries[n]}},{key:"nonGeographic",value:function(){if(!(this.v1||this.v2||this.v3))return this.metadata.nonGeographic||this.metadata.nonGeographical}},{key:"hasCountry",value:function(n){return this.getCountryMetadata(n)!==void 0}},{key:"hasCallingCode",value:function(n){if(this.getCountryCodesForCallingCode(n))return!0;if(this.nonGeographic()){if(this.nonGeographic()[n])return!0}else{var r=this.countryCallingCodes()[n];if(r&&r.length===1&&r[0]==="001")return!0}}},{key:"isNonGeographicCallingCode",value:function(n){return this.nonGeographic()?!!this.nonGeographic()[n]:!this.getCountryCodesForCallingCode(n)}},{key:"country",value:function(n){return this.selectNumberingPlan(n)}},{key:"selectNumberingPlan",value:function(n,r){var a,o;if(n&&(g2(n)?o=n:a=n),r&&(o=r),a&&a!=="001"){var s=this.getCountryMetadata(a);if(!s)throw new Error("Unknown country: ".concat(a));this.numberingPlan=new Ed(s,this)}else if(o){if(!this.hasCallingCode(o))throw new Error("Unknown calling code: ".concat(o));this.numberingPlan=new Ed(this.getNumberingPlanMetadata(o),this)}else this.numberingPlan=void 0;return this}},{key:"getCountryCodesForCallingCode",value:function(n){var r=this.countryCallingCodes()[n];if(r)return r.length===1&&r[0].length===3?void 0:r}},{key:"getCountryCodeForCallingCode",value:function(n){var r=this.getCountryCodesForCallingCode(n);if(r)return r[0]}},{key:"getNumberingPlanMetadata",value:function(n){var r=this.getCountryCodeForCallingCode(n);if(r)return this.getCountryMetadata(r);if(this.nonGeographic()){var a=this.nonGeographic()[n];if(a)return a}else{var o=this.countryCallingCodes()[n];if(o&&o.length===1&&o[0]==="001")return this.metadata.countries["001"]}}},{key:"countryCallingCode",value:function(){return this.numberingPlan.callingCode()}},{key:"IDDPrefix",value:function(){return this.numberingPlan.IDDPrefix()}},{key:"defaultIDDPrefix",value:function(){return this.numberingPlan.defaultIDDPrefix()}},{key:"nationalNumberPattern",value:function(){return this.numberingPlan.nationalNumberPattern()}},{key:"possibleLengths",value:function(){return this.numberingPlan.possibleLengths()}},{key:"formats",value:function(){return this.numberingPlan.formats()}},{key:"nationalPrefixForParsing",value:function(){return this.numberingPlan.nationalPrefixForParsing()}},{key:"nationalPrefixTransformRule",value:function(){return this.numberingPlan.nationalPrefixTransformRule()}},{key:"leadingDigits",value:function(){return this.numberingPlan.leadingDigits()}},{key:"hasTypes",value:function(){return this.numberingPlan.hasTypes()}},{key:"type",value:function(n){return this.numberingPlan.type(n)}},{key:"ext",value:function(){return this.numberingPlan.ext()}},{key:"countryCallingCodes",value:function(){return this.v1?this.metadata.country_phone_code_to_countries:this.metadata.country_calling_codes}},{key:"chooseCountryByCountryCallingCode",value:function(n){return this.selectNumberingPlan(n)}},{key:"hasSelectedNumberingPlan",value:function(){return this.numberingPlan!==void 0}}])}(),Ed=function(){function e(t,n){pa(this,e),this.globalMetadataObject=n,this.metadata=t,f0.call(this,n.metadata)}return fa(e,[{key:"callingCode",value:function(){return this.metadata[0]}},{key:"_getDefaultCountryMetadataForThisCallingCode",value:function(){return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode())}},{key:"getDefaultCountryMetadataForRegion",value:function(){return this._getDefaultCountryMetadataForThisCallingCode()}},{key:"IDDPrefix",value:function(){if(!(this.v1||this.v2))return this.metadata[1]}},{key:"defaultIDDPrefix",value:function(){if(!(this.v1||this.v2))return this.metadata[12]}},{key:"nationalNumberPattern",value:function(){return this.v1||this.v2?this.metadata[1]:this.metadata[2]}},{key:"possibleLengths",value:function(){if(!this.v1)return this.metadata[this.v2?2:3]}},{key:"_getFormats",value:function(n){return n[this.v1?2:this.v2?3:4]}},{key:"formats",value:function(){var n=this,r=this._getFormats(this.metadata)||this._getFormats(this._getDefaultCountryMetadataForThisCallingCode())||[];return r.map(function(a){return new $2(a,n)})}},{key:"nationalPrefix",value:function(){return this.metadata[this.v1?3:this.v2?4:5]}},{key:"_getNationalPrefixFormattingRule",value:function(n){return n[this.v1?4:this.v2?5:6]}},{key:"nationalPrefixFormattingRule",value:function(){return this._getNationalPrefixFormattingRule(this.metadata)||this._getNationalPrefixFormattingRule(this._getDefaultCountryMetadataForThisCallingCode())}},{key:"_nationalPrefixForParsing",value:function(){return this.metadata[this.v1?5:this.v2?6:7]}},{key:"nationalPrefixForParsing",value:function(){return this._nationalPrefixForParsing()||this.nationalPrefix()}},{key:"nationalPrefixTransformRule",value:function(){return this.metadata[this.v1?6:this.v2?7:8]}},{key:"_getNationalPrefixIsOptionalWhenFormatting",value:function(){return!!this.metadata[this.v1?7:this.v2?8:9]}},{key:"nationalPrefixIsOptionalWhenFormattingInNationalFormat",value:function(){return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata)||this._getNationalPrefixIsOptionalWhenFormatting(this._getDefaultCountryMetadataForThisCallingCode())}},{key:"leadingDigits",value:function(){return this.metadata[this.v1?8:this.v2?9:10]}},{key:"types",value:function(){return this.metadata[this.v1?9:this.v2?10:11]}},{key:"hasTypes",value:function(){return this.types()&&this.types().length===0?!1:!!this.types()}},{key:"type",value:function(n){if(this.hasTypes()&&Td(this.types(),n))return new k2(Td(this.types(),n),this)}},{key:"ext",value:function(){return this.v1||this.v2?Cd:this.metadata[13]||Cd}}])}(),$2=function(){function e(t,n){pa(this,e),this._format=t,this.metadata=n}return fa(e,[{key:"pattern",value:function(){return this._format[0]}},{key:"format",value:function(){return this._format[1]}},{key:"leadingDigitsPatterns",value:function(){return this._format[2]||[]}},{key:"nationalPrefixFormattingRule",value:function(){return this._format[3]||this.metadata.nationalPrefixFormattingRule()}},{key:"nationalPrefixIsOptionalWhenFormattingInNationalFormat",value:function(){return!!this._format[4]||this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat()}},{key:"nationalPrefixIsMandatoryWhenFormattingInNationalFormat",value:function(){return this.usesNationalPrefix()&&!this.nationalPrefixIsOptionalWhenFormattingInNationalFormat()}},{key:"usesNationalPrefix",value:function(){return!!(this.nationalPrefixFormattingRule()&&!j2.test(this.nationalPrefixFormattingRule()))}},{key:"internationalFormat",value:function(){return this._format[5]||this.format()}}])}(),j2=/^\(?\$1\)?$/,k2=function(){function e(t,n){pa(this,e),this.type=t,this.metadata=n}return fa(e,[{key:"pattern",value:function(){return this.metadata.v1?this.type:this.type[0]}},{key:"possibleLengths",value:function(){if(!this.metadata.v1)return this.type[1]||this.metadata.possibleLengths()}}])}();function Td(e,t){switch(t){case"FIXED_LINE":return e[0];case"MOBILE":return e[1];case"TOLL_FREE":return e[2];case"PREMIUM_RATE":return e[3];case"PERSONAL_NUMBER":return e[4];case"VOICEMAIL":return e[5];case"UAN":return e[6];case"PAGER":return e[7];case"VOIP":return e[8];case"SHARED_COST":return e[9]}}function A2(e){if(!e)throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");if(!Ka(e)||!Ka(e.countries))throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(Ka(e)?"an object of shape: { "+Object.keys(e).join(", ")+" }":"a "+S2(e)+": "+e,"."))}var S2=function(t){return Vn(t)};function N2(e,t){var n=new p0(t);if(n.hasCountry(e))return n.selectNumberingPlan(e).countryCallingCode();throw new Error("Unknown country: ".concat(e))}function f0(e){var t=e.version;typeof t=="number"?(this.v1=t===1,this.v2=t===2,this.v3=t===3,this.v4=t===4):t?Nd(t,y2)===-1?this.v2=!0:Nd(t,b2)===-1?this.v3=!0:this.v4=!0:this.v1=!0}function C2(e){return new p0(e).getCountries()}function E2(){return u0(C2,arguments)}function T2(){return u0(N2,arguments)}const I2="https://dept-admin.onrender.com",L2=new Intl.DisplayNames(["en"],{type:"region"}),P2=e=>e.toUpperCase().replace(/./g,t=>String.fromCodePoint(127397+t.charCodeAt(0)));function R2(e){try{return L2.of(e)||e}catch{return e}}function Ya(){return i.jsxs("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:[i.jsx("path",{d:"M1.7 12s3.4-7 10.3-7 10.3 7 10.3 7-3.4 7-10.3 7S1.7 12 1.7 12Z"}),i.jsx("circle",{cx:"12",cy:"12",r:"3.1"})]})}function M2({message:e}){return i.jsx("div",{className:"register-message-overlay",children:i.jsx("div",{className:"register-message",children:e})})}function z2(){return i.jsx("div",{className:"register-spinner-overlay",children:i.jsx("div",{className:"register-spinner"})})}function O2(){const e=ie(),[t,n]=g.useState({username:"",email:"",phone:"",withdrawalPassword:"",password:"",confirmPassword:"",gender:"Male",inviteCode:"",agreed:!0}),[r,a]=g.useState("UG"),[o,s]=g.useState(""),[l,d]=g.useState(!1),[c,h]=g.useState(""),[u,m]=g.useState(!1),[w,y]=g.useState(!1),[b,j]=g.useState({withdrawalPassword:!1,password:!1,confirmPassword:!1}),f=g.useMemo(()=>E2().map(v=>({code:v,name:R2(v),flag:P2(v),dialCode:`+${T2(v)}`})).sort((v,I)=>v.name.localeCompare(I.name)),[]),p=g.useMemo(()=>{const v=o.trim().toLowerCase();return v?f.filter(I=>I.name.toLowerCase().includes(v)||I.code.toLowerCase().includes(v)||I.dialCode.includes(v)):f},[f,o]),x=f.find(v=>v.code===r)||f.find(v=>v.code==="UG")||f[0],$=v=>{const{name:I,value:L,type:_,checked:se}=v.target;n(ge=>({...ge,[I]:_==="checkbox"?se:L}))},A=v=>{j(I=>({...I,[v]:!I[v]}))},E=v=>{a(v.code),d(!1),s("")},N=async v=>{if(v.preventDefault(),!t.agreed){h("Please agree to the Terms and Conditions.");return}if(t.password!==t.confirmPassword){h("Passwords do not match.");return}try{const I=await fetch(`${I2}/api/users/register`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t.username,email:t.email,phone:t.phone,country:x.code,dialCode:x.dialCode,loginPassword:t.password,withdrawalPassword:t.withdrawalPassword,gender:t.gender,inviteCode:t.inviteCode})}),L=await I.json();I.ok&&L.success?(L.user&&(localStorage.setItem("currentUser",JSON.stringify(L.user)),localStorage.setItem("user",L.user.username||""),L.user.token&&localStorage.setItem("authToken",L.user.token)),h("Register Success")):h(L.message||"Registration failed.")}catch(I){console.error("Registration failed:",I),h("Server error. Please try again later.")}};return g.useEffect(()=>{if(!c)return;const v=setTimeout(()=>{c==="Register Success"?(h(""),m(!0)):h("")},1e3);return()=>clearTimeout(v)},[c]),g.useEffect(()=>{if(!u)return;const v=setTimeout(()=>{m(!1),e("/dashboard")},500);return()=>clearTimeout(v)},[u,e]),g.useEffect(()=>{if(!l)return;const v=I=>{I.target.closest(".country-picker")||d(!1)};return document.addEventListener("mousedown",v),()=>{document.removeEventListener("mousedown",v)}},[l]),i.jsxs("div",{className:"register-page",children:[c&&i.jsx(M2,{message:c}),u&&i.jsx(z2,{}),i.jsxs("main",{className:"register-container",children:[i.jsx("img",{src:pe,alt:"Instrument",className:"register-logo"}),i.jsx("h1",{className:"register-welcome",children:"WELCOME TO"}),i.jsx("h2",{className:"register-heading",children:"REGISTER TO JOIN US"}),i.jsxs("form",{className:"register-form",onSubmit:N,children:[i.jsx("div",{className:"register-field",children:i.jsx("input",{name:"username",type:"text",placeholder:"Username",value:t.username,onChange:$,required:!0,autoComplete:"username"})}),i.jsx("div",{className:"register-field",children:i.jsx("input",{name:"email",type:"email",placeholder:"Email",value:t.email,onChange:$,required:!0,autoComplete:"email"})}),i.jsxs("div",{className:"register-field phone-field",children:[i.jsxs("div",{className:"country-picker",children:[i.jsxs("button",{type:"button",className:"country-picker-button",onClick:()=>d(v=>!v),"aria-expanded":l,"aria-label":"Select country",children:[i.jsx("span",{className:"country-flag",children:x==null?void 0:x.flag}),i.jsx("span",{className:"country-chevron"})]}),l&&i.jsxs("div",{className:"country-menu",children:[i.jsx("div",{className:"country-search-wrapper",children:i.jsx("input",{type:"search",value:o,onChange:v=>s(v.target.value),placeholder:"Search country",className:"country-search",autoFocus:!0})}),i.jsxs("div",{className:"country-options",children:[p.map(v=>i.jsxs("button",{type:"button",className:`country-option ${v.code===r?"selected":""}`,onClick:()=>E(v),children:[i.jsx("span",{className:"country-option-flag",children:v.flag}),i.jsx("span",{className:"country-option-name",children:v.name}),i.jsx("span",{className:"country-option-code",children:v.dialCode})]},`${v.code}-${v.dialCode}`)),p.length===0&&i.jsx("div",{className:"country-empty",children:"No countries found"})]})]})]}),i.jsx("input",{name:"phone",type:"tel",placeholder:"Enter a phone number",value:t.phone,onChange:$,required:!0,autoComplete:"tel"})]}),i.jsxs("div",{className:"register-field password-field",children:[i.jsx("input",{name:"withdrawalPassword",type:b.withdrawalPassword?"text":"password",placeholder:"Transaction Password",value:t.withdrawalPassword,onChange:$,required:!0,autoComplete:"new-password"}),i.jsx("button",{type:"button",className:"toggle-password",onClick:()=>A("withdrawalPassword"),"aria-label":"Toggle transaction password visibility",children:i.jsx(Ya,{})})]}),i.jsxs("div",{className:"register-field password-field",children:[i.jsx("input",{name:"password",type:b.password?"text":"password",placeholder:"Login Password",value:t.password,onChange:$,required:!0,autoComplete:"new-password"}),i.jsx("button",{type:"button",className:"toggle-password",onClick:()=>A("password"),"aria-label":"Toggle login password visibility",children:i.jsx(Ya,{})})]}),i.jsxs("div",{className:"register-field password-field",children:[i.jsx("input",{name:"confirmPassword",type:b.confirmPassword?"text":"password",placeholder:"Confirm Login Password",value:t.confirmPassword,onChange:$,required:!0,autoComplete:"new-password"}),i.jsx("button",{type:"button",className:"toggle-password",onClick:()=>A("confirmPassword"),"aria-label":"Toggle confirmation password visibility",children:i.jsx(Ya,{})})]}),i.jsxs("div",{className:"register-field gender-field",children:[i.jsx("span",{className:"gender-title",children:"Gender"}),i.jsxs("div",{className:"gender-options",children:[i.jsxs("label",{className:"gender-option",children:[i.jsx("input",{type:"radio",name:"gender",value:"Male",checked:t.gender==="Male",onChange:$}),i.jsx("span",{className:"gender-radio"}),i.jsx("span",{children:"Male"})]}),i.jsxs("label",{className:"gender-option",children:[i.jsx("input",{type:"radio",name:"gender",value:"Female",checked:t.gender==="Female",onChange:$}),i.jsx("span",{className:"gender-radio"}),i.jsx("span",{children:"Female"})]})]})]}),i.jsx("div",{className:"register-field",children:i.jsx("input",{name:"inviteCode",type:"text",placeholder:"Invite Code",value:t.inviteCode,onChange:$,autoComplete:"off"})}),i.jsxs("label",{className:"terms-row",children:[i.jsx("input",{type:"checkbox",name:"agreed",checked:t.agreed,onChange:$}),i.jsx("span",{className:"terms-checkbox"}),i.jsx("span",{children:"Accept ours"}),i.jsx($r,{to:"/terms",className:"terms-link",children:"Terms and Conditions"})]}),i.jsx("button",{type:"submit",className:"register-submit",children:"Submit"})]}),i.jsxs("p",{className:"register-agreement",children:["By signing up, you agree to our ",i.jsx($r,{to:"/terms",children:"Terms and Conditions"})]}),i.jsxs("p",{className:"register-login-link",children:["Already have an account? ",i.jsx($r,{to:"/login",children:"Login"})]})]}),i.jsxs("button",{type:"button",onClick:()=>y(!0),"aria-label":"Open customer support",title:"Customer support",style:{position:"fixed",right:"24px",bottom:"24px",width:"76px",height:"76px",borderRadius:"50%",border:"none",background:"linear-gradient(145deg, #087cff, #0756d8)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:1e3,boxShadow:"0 4px 14px rgba(0, 80, 220, 0.35)"},children:[i.jsxs("svg",{viewBox:"0 0 64 64","aria-hidden":"true",style:{position:"absolute",width:"54px",height:"54px",top:"7px"},children:[i.jsx("path",{d:"M10 32a22 22 0 0 1 44 0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round"}),i.jsx("rect",{x:"6",y:"29",width:"10",height:"19",rx:"5",fill:"#9aa8ba"}),i.jsx("rect",{x:"48",y:"29",width:"10",height:"19",rx:"5",fill:"#9aa8ba"})]}),i.jsx("span",{style:{fontSize:"24px",fontWeight:800,lineHeight:1,marginTop:"5px"},children:"CS"}),i.jsx("span",{"aria-hidden":"true",style:{position:"absolute",width:"17px",height:"7px",borderRadius:"5px",background:"#697b91",right:"17px",bottom:"15px",transform:"rotate(-25deg)"}})]}),i.jsx(me,{open:w,onClose:()=>y(!1)})]})}const Ie="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAA3XAAAN1wFCKJt4AAABC0lEQVRoge3bPUrFQABF4ZNYaWOjYOFS3ImF9YCVjVNaSVYh7kOwt/UVNm7iLUBGhBcQCWPnM/feA9OlmI9AAvMztNZwasSscd8TUO4SeAKOMKgAH8DXB+NZHV120O9DFl0WsPN4wAj7DpwjVAmWYFdfccJed7BvatjawW6AU4SqwRLs6qvBEuzqq07Yuw72BThBqOkX7DFCTcES7Oqb1LHDD+xt59lHYIvBm21iAydsG932lw52+z2HwAUGDa4fLZvf0lJBEzRBK3XfQb+qrXZYLvHMBU3QBK1UDZqgN8AZgt04ne+wPNQyFzRBE7RSxen4sOUB8SW0PHbu6j9c8hhyUUu8cd8T+Os+AQmryQRMsYvWAAAAAElFTkSuQmCC",B2=`
  html, body, #root {
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  .tc-page {
    min-height: 100vh;
    overflow-x: hidden;
    background:
      radial-gradient(circle at 50% 35%, rgba(0, 102, 190, 0.13), transparent 38%),
      linear-gradient(180deg, #03152d 0%, #021b38 48%, #031a34 100%);
    color: #f4f8ff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  .tc-page *,
  .tc-page *::before,
  .tc-page *::after {
    box-sizing: border-box;
  }

  .tc-page button {
    font-family: inherit;
  }

  .tc-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid rgba(0, 191, 243, 0.32);
    background:
      linear-gradient(
        110deg,
        rgba(4, 25, 52, 0.99) 0%,
        rgba(3, 19, 42, 0.99) 55%,
        rgba(12, 20, 58, 0.99) 100%
      );
  }

  .tc-logo {
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
    filter: brightness(0) invert(1);
  }

  .tc-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .tc-contact {
    min-width: clamp(112px, 14vw, 178px);
    height: clamp(40px, 5vw, 62px);
    padding: 0 clamp(16px, 2vw, 26px);
    border: 1px solid #00bff3;
    border-radius: 40px;
    color: #ffffff;
    background: transparent;
    font-size: clamp(0.85rem, 1.65vw, 1.65rem);
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
  }

  .tc-contact:hover {
    background:
      linear-gradient(
        110deg,
        rgba(8, 54, 98, 0.98),
        rgba(31, 35, 91, 0.98)
      );
  }

  .tc-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: clamp(34px, 5vw, 64px);
    height: clamp(26px, 3.5vw, 44px);
    padding: 4px 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .tc-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    background: linear-gradient(
      90deg,
      #00bff3 0%,
      #168fe4 58%,
      #7048df 100%
    );
  }

  .tc-body {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
    padding-top: 0;
    padding-bottom: 80px;
  }

  .tc-title-row {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60px;
    margin: 22px 0 18px;
  }

  .tc-back {
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .tc-back img {
    width: 22px;
    height: 22px;
    object-fit: contain;
    display: block;
    filter: brightness(0) invert(1);
  }

  .tc-title-row h1 {
    margin: 0;
    font-size: clamp(2.3rem, 4vw, 3.4rem);
    font-weight: 500;
    letter-spacing: -0.06em;
    text-align: center;
    color: #f4f8ff;
  }

  .tc-intro {
    margin: 0 0 28px;
    font-size: clamp(1.05rem, 1.7vw, 1.6rem);
    line-height: 1.42;
    letter-spacing: -0.04em;
    color: #f4f8ff;
    font-weight: 400;
  }

  .tc-section {
    margin-top: 16px;
  }

  .tc-section h2 {
    margin: 0 0 14px;
    font-size: clamp(1.2rem, 1.9vw, 2.1rem);
    font-weight: 600;
    letter-spacing: -0.05em;
    color: #00bff3;
  }

  .tc-section p {
    margin: 0 0 14px;
    font-size: clamp(1.05rem, 1.7vw, 1.6rem);
    line-height: 1.42;
    letter-spacing: -0.04em;
    color: #f4f8ff;
    font-weight: 400;
  }

  .tc-section p strong {
    color: #ffffff;
    font-weight: 600;
  }

  .tc-section ul {
    margin: 0 0 14px 28px;
    padding: 0;
    font-size: clamp(1.05rem, 1.7vw, 1.6rem);
    line-height: 1.42;
    color: #f4f8ff;
  }

  .tc-section ul li {
    margin-bottom: 8px;
  }

  .tc-final {
    margin-top: 24px;
    font-size: clamp(1.05rem, 1.7vw, 1.6rem);
    line-height: 1.42;
    letter-spacing: -0.04em;
    color: #00bff3;
    font-weight: 600;
    text-align: right;
  }

  @media (max-width: 700px) {
    .tc-header {
      display: flex;
      min-height: 72px;
      padding: 12px 14px;
    }

    .tc-logo {
      width: 180px;
      height: 34px;
      max-width: 58%;
    }

    .tc-header-actions {
      gap: 9px;
    }

    .tc-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .tc-menu {
      width: 28px;
      height: 24px;
    }

    .tc-menu span {
      height: 2px;
    }

    .tc-body {
      width: calc(100% - 36px);
      margin: 0 auto;
    }

    .tc-title-row {
      min-height: 46px;
      margin: 10px 0 16px;
    }

    .tc-back {
      width: 34px;
      height: 34px;
    }

    .tc-back img {
      width: 20px;
      height: 20px;
    }

    .tc-title-row h1 {
      font-size: 2rem;
    }

    .tc-intro {
      font-size: 1.05rem;
      line-height: 1.45;
      margin-bottom: 22px;
    }

    .tc-section h2 {
      font-size: 1.4rem;
      margin-bottom: 12px;
    }

    .tc-section p {
      font-size: 1.05rem;
      line-height: 1.45;
      margin-bottom: 12px;
    }

    .tc-final {
      font-size: 1.05rem;
      margin-top: 18px;
    }
  }
`;function F2(){const e=ie(),[t,n]=g.useState(!1);return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:B2}),i.jsxs("div",{className:"tc-page",children:[i.jsxs("header",{className:"tc-header",children:[i.jsx("img",{src:pe,alt:"Instrument",className:"tc-logo"}),i.jsxs("div",{className:"tc-header-actions",children:[i.jsx("button",{type:"button",className:"tc-contact",onClick:()=>n(!0),children:"Contact"}),i.jsxs("button",{type:"button",className:"tc-menu",onClick:()=>e("/profile"),"aria-label":"Open profile menu",children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]})]})]}),i.jsxs("main",{className:"tc-body",children:[i.jsxs("div",{className:"tc-title-row",children:[i.jsx("button",{type:"button",className:"tc-back",onClick:()=>e(-1),"aria-label":"Go back",children:i.jsx("img",{src:Ie,alt:"Back"})}),i.jsx("h1",{children:"T&Cs"})]}),i.jsx("h2",{style:{fontSize:"clamp(1.5rem, 2.2vw, 2.4rem)",fontWeight:"600",letterSpacing:"-0.06em",marginBottom:"18px",color:"#f4f8ff"},children:"Terms & Conditions"}),i.jsx("p",{className:"tc-intro",children:"These Terms and Conditions are governed by the following terminology and principles of interpretation. All users are required to adhere to the terms outlined by the platform. Any violations will result in corrective actions and penalties imposed by the platform. The User Agreement, which is part of these Terms and Conditions, is subject to the platform's final interpretation."}),i.jsxs("section",{className:"tc-section",children:[i.jsx("h2",{children:"1. Start to Submit Product Data"}),i.jsxs("p",{children:[i.jsx("strong",{children:"1.1"})," A minimum account balance of 50 USD is required to initiate the first set of 40 product submissions."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"1.2"})," A minimum deposit of 100 USD is required to reset and begin the new daily product submission process."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"1.3"})," Users must complete the current dataset before requesting a reset for the next set of submissions."]})]}),i.jsxs("section",{className:"tc-section",children:[i.jsx("h2",{children:"2. Withdrawal"}),i.jsxs("p",{children:[i.jsx("strong",{children:"2.1"})," Withdrawal amount is based on the VIP level of the account, if withdrawals exceeding the amount require an upgrade to the appropriate membership level, as each level is subject to different withdrawal limits."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"2.2"})," Users are required to complete two sets of product submissions per day in order to submit a withdrawal request. Additionally, users must request the withdrawal of their full account balance."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"2.3"})," Users who abandon or quit during the product submission process are ineligible to apply for a withdrawal or refund."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"2.4"})," If a withdrawal request has not been formally submitted by the user, the platform cannot process any withdrawal on the user's behalf."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"2.5"})," All members apply for withdrawal of more than 20,000 USD for the first time need to contact online customer service to process it to ensure the safety of all members' transfer funds."]})]}),i.jsxs("section",{className:"tc-section",children:[i.jsx("h2",{children:"3. Funds"}),i.jsxs("p",{children:[i.jsx("strong",{children:"3.1"})," All user funds will be securely stored in their account and may be withdrawn in full once all product submissions are completed."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"3.2"})," To avoid any loss of funds, all data processing will be handled by the system, not manually."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"3.3"})," In case of accidental loss of funds, the platform will assume full responsibility."]})]}),i.jsxs("section",{className:"tc-section",children:[i.jsx("h2",{children:"4. Account Security"}),i.jsxs("p",{children:[i.jsx("strong",{children:"4.1"})," Users must not share their login passwords or security PIN with others. If this results in a loss, the platform will not be responsible."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"4.2"})," It is not recommended to set easily identifiable information, such as birthdates, ID card numbers, or phone numbers, as security codes or login passwords."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"4.3"})," If users forget their login or withdrawal passwords, they should contact customer service to reset them."]})]}),i.jsxs("section",{className:"tc-section",children:[i.jsx("h2",{children:"5. Normal Product"}),i.jsxs("p",{children:[i.jsx("strong",{children:"5.1"})," VIP 1 users can complete 2 sets of product submissions per day with a 0.5% commission for each normal product data."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"5.2"})," VIP 2 users can complete 2 sets of product submissions per day with a 1.0% commission for each normal product data."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"5.3"})," VIP 3 users can complete 2 sets of product submissions per day with a 1.5% commission for each normal product data."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"5.4"})," VIP 4 users can complete 2 sets of product submissions per day with a 2.0% commission for each normal product data."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"5.5"})," VIP 5 users can complete 2 sets of product submissions per day with a 2.5% commission for each normal product data."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"5.6"})," Upon successful submission of product data, the commission will be automatically credited to the user's account balance."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"5.7"})," The system will randomly assign product data to the user's account based on their account balance."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"5.8"})," Once the data is assigned to the user's account, it cannot be canceled, skipped, or exchanged."]})]}),i.jsxs("section",{className:"tc-section",children:[i.jsx("h2",{children:"6. Merged Product"}),i.jsxs("p",{children:[i.jsx("strong",{children:"6.1"})," Merged product consists of 2 to 3 product data sets. Users may not necessarily receive 3 product data sets; the system will randomly assign product data within the merged product, with a higher likelihood of receiving 1 product data set."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"6.2"})," Users will earn ten times the commission for each product in the merged product compared to normal product data."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"6.3"})," Upon receiving merged product, all funds will be placed on hold until the submission of each pending merged product is completed. These funds will be returned to the user's account after the submissions are finalized."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"6.4"})," The system will randomly assign merged product to the user's account based on the total balance in the user's account."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"6.5"})," Once merged product is assigned to the user's account, it cannot be canceled, skipped, or exchanged."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"6.6"})," A user can receive a maximum of 3 merged product sets per set of product submission."]})]}),i.jsxs("section",{className:"tc-section",children:[i.jsx("h2",{children:"7. Advance Payments"}),i.jsxs("p",{children:[i.jsx("strong",{children:"7.1"})," The amount for advance payment is determined by the user. The platform does not set specific amounts for the user, but recommends users make advance payments based on their financial capacity or after becoming familiar with the platform."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"7.2"})," If a user needs to make an advance payment upon receiving merged product, it is advised that the user pays according to the negative balance indicated in their account."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"7.3"})," Before making an advance payment, users must contact customer service to request advance payment details and confirm the merchant's wallet address."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"7.4"})," The platform will not assume responsibility for any loss resulting from payments made to incorrect wallet addresses."]})]}),i.jsxs("section",{className:"tc-section",children:[i.jsx("h2",{children:"8. Merchant Cooperation"}),i.jsxs("p",{children:[i.jsx("strong",{children:"8.1"})," Data availability on the platform fluctuates. If product is not processed in a timely manner, merchants may be unable to offload it, affecting their progress. Users are encouraged to complete their submissions and apply for withdrawals promptly to avoid hindering merchant progress. Users must complete all submissions within 24 hours to avoid complaints from merchants and order freezes."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"8.2"})," Merchants will provide users with wallet addresses to facilitate advance payments."]})]}),i.jsxs("section",{className:"tc-section",children:[i.jsx("h2",{children:"9. Invitation"}),i.jsxs("p",{children:[i.jsx("strong",{children:"9.1"})," Users may invite other users to the platform using the invitation code linked to their account."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"9.2"})," Referral invitations are limited to once per user per month."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"9.3"})," To be eligible to use an invitation code to invite referrals, a user must first complete 15 days of work after registration."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"9.4"})," Referrers will receive 20% of the referee's daily earnings as a commission."]})]}),i.jsxs("section",{className:"tc-section",children:[i.jsx("h2",{children:"10. Credit Score"}),i.jsxs("p",{children:[i.jsx("strong",{children:"10.1"})," Users must complete all sets of product data submissions to maintain a 100% credit score."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"10.2"})," Failure to complete the submissions will result in a decrease in the user's credit score."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"10.3"})," The credit score is determined by the number of incomplete orders and the timeliness of their completion."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"10.4"})," A decrease in credit score may affect a user's ability to request withdrawals."]})]}),i.jsxs("section",{className:"tc-section",children:[i.jsx("h2",{children:"11. Operating Hours"}),i.jsxs("p",{children:[i.jsx("strong",{children:"11.1"})," The platform operates from 10:00 - 23:00 (EST)."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"11.2"})," Customer service is available from 10:00 - 23:00 (EST)."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"11.3"})," Platform withdrawal hours are from 10:00 - 23:00 (EST)."]})]}),i.jsx("p",{className:"tc-final",children:"The final right of interpretation belongs to Dept."})]}),i.jsx(me,{open:t,onClose:()=>n(!1)})]})]})}const U2="/assets/INSTRUMENT%20clicp-Ci3Pcqlp.mp4",D2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANPSURBVHgB7ZlNUhNBGIbfSSKlK4eyLLfNj1WWJVTcuQwnEE8AnkDcuQueADxBwgnwBsgJiIAWloC9VRd0uQRnxreHMcxMJtjzl4lFnoJKpTOdfG9Pf389wIQJNxsLBdIUwnZrWLEstPRbDxDwIPkr6/sncgslUIgA3/AG1mjsK761Ey5RFDCNEmggJ8150XI9dGi8uOYyGyVRQw4W58Uajd8BrjW+VDILoPHrXPWNhI8URa1jRGQSEBjfjo97HjZ/OZg5PJVvMSJS+8AQ45XnYPlAyl2MmFQCmg9F03VjxjNMnrtYOpJSogKMt1DzkRA0fjs2rKo0XhO5A9pI7wIdJqAmYqHPvRiczOteZjV+YVasMuFt8EtUnkTXvwP+Cl9gj0a1YBC3daQ5OJHvkREa3/Z/x/JDcHdxTqwgA30BXPnLLzSB+76ASBP/rc3H9DGk5EoAsGo0I3Ba5IQh93VsyG44Az72T4ZGIe7JQgu9OAensks/0Fup0x/kdlqcFe39FHc3VymRFy1CJ7/IoMWiMAWVCtDUXejVVqEh+wkLRNP5lQvoSanoV93wWM3Fc9P5lQvQeBbiJUgLhoyFgLqDXmTAMi/Px0JAbzCbGzdAYyEgD2MhgD21iA0pGDIWApw6IiUEq4Ke6dyxEEAjImHT8v4jAX4JH6vDPBfGVW7lAoIqODQAmaY1HVrMJTjWX5SfPQtAH8uwFlqNDFrpTjTCArRR/fjr1vFtyBzFWuXF4bH8gBzojmzgWIarz0o0VWdWC03uGs6xWat09HEichB0ZBGy9Bl9AedTeMcXaTSLqZ6HuG3kI7IADh05S3/dF3DE2ee3sMSI0MVlGJOx/+i+Z93O5iNV7R4m6Mik/l5t/KeMTb1x1+WfQNexh9g56O8ann7+KgfiNpt0L/y+rA7POIzqyKPvEGJ3ouFiJ0szXhSp8oDeZonNOEUszIllVEDqRKb72ITTZ5v7Y5s+sXFN/iiFOjLw40zt3p+2ETxKusLCM3ZXyw/u2fppTOSz72eqlBPrXI6lM+mQZwQDVO7ESewfy0069gxM80cJ5C7mtGNzdWcCv5CJF3nlCczkA0lov7hz196asvBFb0z+3cZltlWOhTc/z9RHTJgwoXD+ABjUOH0ChJedAAAAAElFTkSuQmCC",_2="/assets/Event-06ac9e70-Dw13vn6H.png",W2="/assets/TC-43047a64-VMCNvHO4.png",Q2="/assets/Certificate-764a13af-aRnTEOL5.png",G2="/assets/FAQs-93891c56-DLWT7Os7.png",H2="/assets/About-453ef9ca-ClhkjSfd.png",V2="/assets/Vip-5ce36f29-BpZIpg_S.png",K2="/assets/special-reward-B5wsRA5R.png",Y2="/assets/alphasense-DKtkmwax.jpg",q2="/assets/feeled-DrxB-ThX.jpg",J2="/assets/oura-Bxd4RaOa.jpg",X2="/assets/perfected-B8PjFVlV.jpg",Z2="/assets/service-1-XRqmdQCa.jpg",eh="/assets/service-2-DABm0f-g.jpg",th="/assets/service-3-DLDcsEg9.jpg",nh="/assets/service-4-D_b-mk7I.jpg",rh="/assets/service-5-CLWqiK_H.jpg",ih="/assets/service-6-CFOMzERc.jpg",Zs="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAETklEQVR4nO3dP4gUZxjH8d8kmsIiVmeR2BlLSbAxYBotEhtPCHZiIKWpUlpZWFlFUlkkxMoiYkAOwfMMBkHyp1IuXTAaiKkCAS0UjPEbXvY9mZt9d3b3dmb3eWeeLxzL7c7OzT6f29m5ufUsAHl2em3RG+BtzkGM5SDGchBjOYi1wlFW+SO3gAL4EngRLwtl1qb55wzCAOMCm7uQG0onQIDXga9I93W4XZmUPQgDjEslgPvA+/Fyo0u5oGQNwjDGr8CueNtS/DwrlGxBSGMsVZbJDiVLEOAN4Ns6jBqUy+H+Mlp2IAwwVibBqKCsl+6zYhUlKxCGMX4Bdk54351xedMo2YAwA0ZOKFmAADuA67Ng1KCshvXLSOZBGGDcKg3wp61iVFB+LK3zlhUU0yAMYzQ2uDbX3UkQ5jAwiygmQeIu5c48BpVAuTPrLrFTIIkX3Zttf9dGlLUmDho6BbLIw1IaOKzuFIiFnxEwgGICJJ7auLtIjBqUe+NOzXQKJHHy77tF//TMAOXKNOfLOgFi+fQ4E5ze7xSIZYxFoiwEBNgN/GYZowYlbPdudQUkYpR/3/2NVYwKStjOje63hTJXkARGNm/TYfhtRq2gzA0kZ4x5oswFBHgHeJQzRg3Kn+HxKReQBMb5XDEqKF+UHtOjplBaBUlgnFOHAs41jdIaCLC3yxg1KHtlDQTYB/zddYwRKOFx75MVkATGGfUg4EwTKI2CJDBOq0cBp2dFaQwEeA/4p68YI1DCPN7VvEGAA8Dj0oY8UI8DHpRmEeZyYG4gCYzQPfU4Br/UYiso5flP/Y8+4xdZk/RmvGp96q3vduvxMsxnbZpnSmgqEOCDCsZnkh5Os44e9DDOpYxycOJ7T7rLAg4DT0tPyVPx+qu+y1J5l3U1fn6qNKswt8ONvYZUMP4DPind5iAaBonXnYzzqkWZCiSBcaJyu4MoDRKvPzEOZWIQ4EgdRlzGQTQaZATKR1ODAMvA8zqMuJyDqB4kgRLmujwxSAUjXB6r2RAH0XiQuMyxylyXx4IA+1N3qvkiDqLJQEZ8s+8f94Phx5K2S/pX0vGiKFbaexj9qxjM83ic7/Y471elQK5JuinpqGO0U5zr0TjnMO9XbUss/LOkD1vaFi9WFMUNSeFj08GU/wEzYzmIsRzEWA5iLAcx1tBRlpWAtyUdamkbX0j6oSiKv2QssyCSbkva0+L6f5fU2Ptz+7DL2pP5+jv3DNnooqSzaq7wJr5PZbQcQJ4URfFHUysDnshwlndZvcxBjOUgxnIQYzmIsRzEWA5iLAcxloMYy0GM5SDGchBjOYixHMRYDmIsBzGWgxjLQYzlIMZyEGM5iLEcxFgOYiwHMZaDGMtBjOUgHX5vb/i/QT5XRtHs9i5ZA3lL0nk138sW19fG9i58l/V9C0Pb6JmkVTXbalxvG72M89hy4Q/MN7c53sz5i7qxHMRYDmIsBzGWg8hW/wOJix/8MS8ESwAAAABJRU5ErkJggg==",el="/assets/icon30-ZsvW46rz.png",tl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFV0lEQVR4nO2dS4gcVRSG/9OTaCQSTUDQLMQQREHCIBpQiKAgio/RqFEEcePKhQvBtSIo6kLUjQTFnYJBE7VbF1EwGOMD8cGgWaj4AMEsoiiSxEce88vF03jTM93T3XWr6tSt80FRNQzcuvf+df66z2ohCccOnboz4JyMC2IMF8QYLogxXBBjuCDGcEGM4YI0SRARKXQAmAHwKIBfATCD4zcAj4VyFayX4YSe+rCjKCQfZp48VLBehh4yquKXVXP0TU8FcBDAGgAfANiF5nMHgMsB/ALgHBE5MU0iIx/2siKE5Fz0RN2GDCB5V1SmKwqkM7zOSxTkRc34YZKnIQNIriV5TMv1VGMECXZF8g/N+A5kBMk9Wq4fCqQx9Cir2XuNvjsCO5EXXT1vIDmbOvFOiS+/wN8AdiMvetH11uSpp7asAbvKoWW1CJJfavnm0QDLiu3qVeRJT8+zJM9LmXCnZLt6C3nSja5vMWtZoXmrzdzAm8gUkqFD/bOWc69ly7oewGq9fgWZIiKMbGsLybNSpZ1akNv1fHSgNZIjvagO58xZVlvsaqA1eWia8lZlWbFdvY7MEZF/oj7W1SRPT5FupwS7Og7gDbSDrp5XAbjWjGUN2FVuPfOhkFxH8riW+yVLlhXbVa6dwUWISJhB3Kd/3kByJQrSSWxXCwOdpjbQ1fOZAK6s3bLCy4zknxq276JlkAyjvn2erX0+hOSdUYbuRQvh/4ONofcudb9DYrt6De2kp+f1ADYXSqlIhKhd/aVPx3toKSQ3Ry7xeJ0RcqO2wQNZzn2MyWcADiSZtCoYIbv0qVggGcK1tZDcHkXJhZVHiA4VhP5H4EMR6T8hbaUXXU8dJSsS2VVpnUGS2/ReqQiL214QkY+Rlj0AjmgHOQjyRKWWFdlV4NwpCzFO/o4wPftKyuvO6B7rp6nzqSKE5BnRU/uJiPyE8ngmDEskjpDnUZ5t9Vdp3gxgeyURQvLu6El4oEABchxsPKH18k5lPfUwIVOFXTWR0B/TejmmTlJuK0tvEpb6BL4o2a6aPNi4YprGyDTN3psAnNK2ofYJ6BZq/k5qWQN2tXHiG7YAkvu1fsKk3arSLGsJu/o+WSnyjJLVYb69TMuK7Sr7hQy1rGycxLIG7GrkeE2b4X8rGw9oPR0kOZO82att7KN6k6+qLmTTIPncsO1vqd4hIfRW5r5MtHbbmiBCdkeKX5Qw4zmvbDy81Pa3wpaldtXf7Ph1HQVsIgODjbMpLSuEXH8g0juDZc6RjBkhsV1tmiBDrYYnDzbOJ7GsAbv6ts4CNnywkf3tb0UtK7arti7zqa61NUaExHZ1SaGstRCSG6P621v44zPBrjRCfgdwa4VlOQRgftoPvAxDe82h2b4O1fEygLPDYkIRmRlZ56P+Gf6vKxLr4hsA14nIjykSIxkG+8KCvktRH+E1waZ+Ue4CAFN/5GUJttUsxrJMssjhQf3uVVXcpwsGLk6Y5obo+ipUxxYAj6QWZL+IVLZ+l2T674hEVFyWsHdkLKxbVutwQYzhghjDBTGGC2IMF8QYLogxXBBjuCDGcEGMUWRLW9ks6HkNyfsTpXmZnsOUgkksC/KpntcCeDpx2u/DKJYtaweAJ/XrpikJI9b3wCqjphN1jWqfUkdfc4bk1qgeJdl2BKd8XBBjuCDGcEGM4YIYwwUxhgtiDBfEGC6IMVwQY7ggxnBBjOGCGMMFadIEVfitpWj/yFzqn4hrEZuG1OkixtlB9ZH+ZLVTnO9E5PxRdd4Z89vub4/a9eOMxefjbPpcbkubUzH+UjeGC2IMF8QYLogxXBBjuCDGcEFgi38Begy36j9CxDUAAAAASUVORK5CYII=",Id="https://dept-admin.onrender.com",Ld=`
  html,
  body,
  #root {
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  .dashboard-page {
    min-height: 100vh;
    padding-bottom: 120px;
    overflow-x: hidden;
    background:
      radial-gradient(circle at 50% 35%, rgba(0, 102, 190, 0.13), transparent 38%),
      linear-gradient(180deg, #03152d 0%, #021b38 48%, #031a34 100%);
    color: #f4f8ff;
    font-family: "Century Gothic", "Trebuchet MS", Arial, sans-serif;
  }

  .dashboard-page *,
  .dashboard-page *::before,
  .dashboard-page *::after {
    box-sizing: border-box;
  }

  .dashboard-page button {
    font-family: inherit;
  }

  /* Updated dashboard header */
  .dashboard-header {
    position: sticky;
    top: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid rgba(0, 191, 243, 0.32);
    background:
      linear-gradient(
        110deg,
        rgba(4, 25, 52, 0.99) 0%,
        rgba(3, 19, 42, 0.99) 55%,
        rgba(12, 20, 58, 0.99) 100%
      );
    box-shadow:
      0 8px 24px rgba(0, 0, 0, 0.22),
      inset 0 -1px 0 rgba(112, 70, 223, 0.12);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
  }

  .dashboard-logo {
    display: block;
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
    filter: brightness(0) invert(1);
    transition: opacity 180ms ease;
  }

  .dashboard-logo:hover {
    opacity: 0.88;
  }

  .dashboard-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .dashboard-contact {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: clamp(112px, 14vw, 178px);
    height: clamp(40px, 5vw, 62px);
    padding: 0 clamp(16px, 2vw, 26px);
    border: 1px solid rgba(0, 191, 243, 0.8);
    border-radius: 40px;
    color: #f4f8ff;
    background:
      linear-gradient(
        110deg,
        rgba(7, 39, 76, 0.96),
        rgba(14, 34, 72, 0.96)
      );
    font-size: clamp(0.85rem, 1.65vw, 1.65rem);
    font-weight: 700;
    letter-spacing: 0.015em;
    cursor: pointer;
    box-shadow:
      inset 0 0 0 1px rgba(119, 72, 230, 0.24),
      0 4px 16px rgba(0, 0, 0, 0.16);
    transition:
      background 180ms ease,
      border-color 180ms ease,
      box-shadow 180ms ease,
      transform 180ms ease;
  }

  .dashboard-contact:hover {
    border-color: #7048df;
    background:
      linear-gradient(
        110deg,
        rgba(8, 54, 98, 0.98),
        rgba(31, 35, 91, 0.98)
      );
    box-shadow:
      inset 0 0 0 1px rgba(0, 191, 243, 0.22),
      0 0 18px rgba(0, 191, 243, 0.16);
    transform: translateY(-1px);
  }

  .dashboard-contact:active {
    transform: translateY(0);
  }

  .dashboard-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: clamp(34px, 5vw, 64px);
    height: clamp(26px, 3.5vw, 44px);
    padding: 4px 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .dashboard-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    border-radius: 20px;
    background: linear-gradient(
      90deg,
      #00bff3 0%,
      #168fe4 58%,
      #7048df 100%
    );
    box-shadow: 0 0 8px rgba(0, 191, 243, 0.16);
    transition:
      opacity 180ms ease,
      transform 180ms ease;
  }

  .dashboard-menu:hover span {
    box-shadow: 0 0 12px rgba(0, 191, 243, 0.34);
  }

  .dashboard-content {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
  }

  /* Updated notice row and icon */
  .dashboard-notice {
    position: relative;
    display: flex;
    align-items: center;
    gap: clamp(8px, 1.8vw, 18px);
    min-height: clamp(58px, 8vw, 102px);
    overflow: hidden;
    border-bottom: 1px solid rgba(0, 191, 243, 0.24);
    color: #eaf4ff;
    background: linear-gradient(
      90deg,
      rgba(4, 27, 55, 0.68),
      rgba(5, 23, 50, 0.38)
    );
    font-size: clamp(0.8rem, 1.5vw, 1.5rem);
    white-space: nowrap;
  }

  .dashboard-notice-icon {
    position: relative;
    z-index: 2;
    display: block;
    flex: 0 0 auto;
    width: clamp(22px, 3.2vw, 42px);
    height: clamp(22px, 3.2vw, 42px);
    padding: clamp(3px, 0.55vw, 6px);
    object-fit: contain;
    filter: brightness(0) invert(1);
    border: 1px solid #00bff3;
    border-radius: 50%;
    background: #0b2a4d;
    opacity: 1;
    box-shadow: 0 0 14px rgba(0, 191, 243, 0.18);
  }

  .dashboard-notice-track {
    min-width: max-content;
    display: inline-block;
    padding-left: 100%;
    animation: dashboard-notice-scroll 18s linear infinite;
  }

  @keyframes dashboard-notice-scroll {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-100%);
    }
  }

  .dashboard-banner {
    width: 100%;
    height: clamp(250px, 51.6vw, 516px);
    margin-top: clamp(20px, 3.4vw, 34px);
    overflow: hidden;
    border: 1px solid #087bd0;
    border-radius: clamp(12px, 1.8vw, 18px);
    background: #062653;
  }

  .dashboard-banner video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .dashboard-intro {
    margin: clamp(22px, 3.4vw, 34px) 0 clamp(18px, 2.8vw, 28px);
    color: #f3f7ff;
    font-size: clamp(1.25rem, 3.2vw, 3rem);
    line-height: 1.32;
    letter-spacing: -0.065em;
  }

  .dashboard-black-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: clamp(8px, 1.8vw, 18px);
    min-width: clamp(180px, 29.6vw, 296px);
    height: clamp(42px, 6.4vw, 64px);
    padding: 0 clamp(18px, 2.6vw, 26px);
    border: 0;
    border-radius: 36px;
    color: #ffffff;
    background: linear-gradient(
      100deg,
      #09b8e9 0%,
      #148fe4 48%,
      #7046df 100%
    );
    font-size: clamp(0.85rem, 1.3vw, 1.3rem);
    cursor: pointer;
    box-shadow: 0 5px 18px rgba(0, 112, 210, 0.18);
  }

  .dashboard-black-button .arrow {
    font-size: clamp(1.4rem, 2.2vw, 2.2rem);
    line-height: 0;
  }

  .dashboard-divider {
    width: 100%;
    height: clamp(1px, 0.2vw, 2px);
    margin: clamp(24px, 4.2vw, 42px) 0 clamp(20px, 3.4vw, 34px);
    background: linear-gradient(
      90deg,
      #15518a 0%,
      #078ed4 55%,
      #1766a7 100%
    );
  }

  .dashboard-section-title {
    margin: 0 0 clamp(18px, 3.4vw, 34px);
    color: #e6f3ff;
    font-size: clamp(1rem, 1.9vw, 1.9rem);
    font-weight: 400;
    letter-spacing: -0.065em;
  }

  .quick-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: clamp(12px, 3.2vw, 32px);
  }

  .quick-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(150px, 30.2vw, 302px);
    padding: clamp(20px, 3.8vw, 38px)
      clamp(10px, 2vw, 20px)
      clamp(16px, 2.8vw, 28px);
    border: 1px solid #176db1;
    border-radius: clamp(12px, 2.5vw, 25px);
    color: #f2f7ff;
    font-size: clamp(1rem, 2vw, 2rem);
    letter-spacing: -0.06em;
    cursor: pointer;
    background: linear-gradient(
      145deg,
      #072952 0%,
      #061f42 100%
    );
    box-shadow: inset 0 0 25px rgba(0, 91, 174, 0.08);
  }

  .quick-link img {
    width: clamp(70px, 12.6vw, 126px);
    height: clamp(70px, 12.6vw, 126px);
    object-fit: contain;
  }

  .quick-link.event {
    border-color: #00c8f0;
    background: linear-gradient(
      145deg,
      #063d58 0%,
      #06233f 100%
    );
  }

  .quick-link.vip {
    border-color: #a45cff;
    background: linear-gradient(
      145deg,
      #351b63 0%,
      #17143f 100%
    );
  }

  .quick-link.faq {
    border-color: #ffb52e;
    background: linear-gradient(
      145deg,
      #584018 0%,
      #28200f 100%
    );
  }

  .quick-link.terms {
    border-color: #35d07f;
    background: linear-gradient(
      145deg,
      #174c3a 0%,
      #102d28 100%
    );
  }

  .quick-link.certificate {
    border-color: #ff5f8f;
    background: linear-gradient(
      145deg,
      #5a203d 0%,
      #30162d 100%
    );
  }

  .quick-link.about {
    border-color: #4d8dff;
    background: linear-gradient(
      145deg,
      #173d72 0%,
      #10254b 100%
    );
  }

  .recent-section {
    margin-top: clamp(30px, 5.6vw, 56px);
  }

  .recent-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: clamp(24px, 5.4vw, 54px) clamp(14px, 3.2vw, 32px);
  }

  .recent-card {
    min-width: 0;
  }

  .recent-image {
    width: 100%;
    aspect-ratio: 1.05;
    overflow: hidden;
    border: 1px solid #086ea9;
    border-radius: clamp(12px, 2vw, 20px);
    background: #06244a;
  }

  .recent-image img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .recent-card h3 {
    margin: clamp(10px, 1.8vw, 18px) 0 clamp(6px, 1vw, 10px);
    color: #edf6ff;
    font-size: clamp(1rem, 2vw, 2rem);
    font-weight: 400;
    letter-spacing: -0.07em;
  }

  .recent-card small {
    color: #00bff3;
    font-size: clamp(0.7rem, 1.35vw, 1.35rem);
    letter-spacing: -0.04em;
  }

  .services {
    margin-top: clamp(30px, 5.6vw, 56px);
    padding: clamp(30px, 6.2vw, 62px)
      clamp(20px, 4.2vw, 42px)
      clamp(70px, 7.4vw, 100px);
    border: 1px solid #1769b0;
    border-radius: clamp(12px, 2vw, 20px);
    background:
      radial-gradient(
        circle at 80% 80%,
        rgba(55, 61, 190, 0.18),
        transparent 30%
      ),
      linear-gradient(
        145deg,
        #071f4b 0%,
        #061b3b 55%,
        #081b45 100%
      );
  }

  .services-label {
    display: block;
    margin-bottom: clamp(42px, 9vw, 90px);
    color: #cde8ff;
    font-size: clamp(0.85rem, 1.15vw, 1.15rem);
  }

  .services h2 {
    max-width: 800px;
    margin: 0 0 clamp(40px, 9vw, 90px);
    color: #eaf4ff;
    font-size: clamp(1.8rem, 4.5vw, 4.4rem);
    font-weight: 400;
    line-height: 1.12;
    letter-spacing: -0.07em;
  }

  .services h2::first-line {
    color: #eaf4ff;
  }

  .services p {
    max-width: 950px;
    margin: 0 0 clamp(32px, 6.8vw, 68px);
    color: #c8ddf5;
    font-size: clamp(0.95rem, 2.4vw, 2.25rem);
    line-height: 1.45;
    letter-spacing: -0.06em;
  }

  .services-image-slider {
    width: 100%;
    overflow: hidden;
    margin-top: clamp(32px, 7.4vw, 74px);
    border-radius: clamp(12px, 2vw, 20px);
  }

  .services-image-track {
    display: flex;
    width: 600%;
    transition: transform 700ms ease-in-out;
  }

  .services-slide {
    flex: 0 0 16.666666%;
    width: 16.666666%;
  }

  .services-slide img {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 1.05;
    object-fit: cover;
  }

  .services-slider-dots {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 12px;
  }

  .services-slider-dot {
    width: 8px;
    height: 8px;
    padding: 0;
    border: 0;
    border-radius: 50%;
    background: rgba(88, 150, 210, 0.35);
    cursor: pointer;
  }

  .services-slider-dot.active {
    background: #08b9ec;
  }

  .dashboard-footer {
    width: 100%;
    min-height: clamp(110px, 18vw, 220px);
    padding: clamp(24px, 4vw, 42px) 0 clamp(40px, 5vw, 60px);
    background: transparent;
  }

  .dashboard-footer-divider {
    width: calc(100% - clamp(36px, 8.4vw, 84px));
    height: clamp(1px, 0.2vw, 2px);
    margin: 0 auto;
    background: #17477a;
  }

  .dashboard-footer-icon {
    display: block;
    width: clamp(72px, 11vw, 120px);
    height: clamp(72px, 11vw, 120px);
    margin: clamp(24px, 4vw, 42px) auto 0;
    object-fit: contain;
  }

  .bottom-navigation {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 90;
    height: 96px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: end;
    background: #06132d;
    border-top: 1px solid rgba(0, 200, 240, 0.08);
  }

  .bottom-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 6px;
    background: transparent;
    color: rgba(207, 226, 250, 0.72);
    height: 100%;
    cursor: pointer;
    padding-bottom: 12px;
  }

  .bottom-item img {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }

  .bottom-item.starting {
    transform: translateY(-10px);
  }

  .bottom-item.starting img {
    width: 70px;
    height: 70px;
    margin-bottom: -5px;
  }

  .bottom-item span {
    color: #d7e8ff;
    font-size: 12px;
    font-weight: 700;
  }

  .reward-overlay,
  .modal-overlay {
    position: fixed;
    inset: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    background: rgba(0, 8, 22, 0.82);
  }

  .reward-modal {
    position: relative;
    width: min(900px, 100%);
    max-height: calc(100vh - 48px);
    overflow-y: auto;
    border: 1px solid #1769b0;
    border-radius: 18px;
    background: #061c39;
  }

  .reward-image {
    display: block;
    width: 100%;
    height: auto;
  }

  .reward-close {
    position: absolute;
    top: 14px;
    right: 14px;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 46px;
    border: 1px solid #2d8bda;
    border-radius: 50%;
    color: #ffffff;
    background: rgba(2, 19, 42, 0.75);
    font-size: 2.1rem;
    line-height: 1;
    cursor: pointer;
  }

  .reward-cancel {
    display: block;
    width: calc(100% - 48px);
    height: 60px;
    margin: 18px 24px 24px;
    border: 0;
    border-radius: 34px;
    color: #ffffff;
    background: linear-gradient(
      100deg,
      #08b9eb 0%,
      #168bdd 52%,
      #7048df 100%
    );
    font-size: 1.3rem;
    cursor: pointer;
  }

  .withdraw-modal {
    width: min(390px, calc(100% - 32px));
    padding: 24px;
    border: 1px solid #1769b0;
    border-radius: 18px;
    background: #061c39;
    color: #f4f8ff;
  }

  .withdraw-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .withdraw-header h2 {
    margin: 0;
    color: #f4f8ff;
    font-size: 1.1rem;
  }

  .withdraw-header button {
    border: 0;
    color: #ffffff;
    background: transparent;
    font-size: 1.8rem;
    cursor: pointer;
  }

  .withdraw-modal input {
    width: 100%;
    height: 48px;
    padding: 0 14px;
    border: 1px solid #205c94;
    border-radius: 8px;
    outline: none;
    color: #ffffff;
    background: #04172f;
    font: inherit;
  }

  .withdraw-modal input::placeholder {
    color: #7895b5;
  }

  .withdraw-modal form > button {
    width: 100%;
    height: 48px;
    margin-top: 14px;
    border: 0;
    border-radius: 28px;
    color: #ffffff;
    background: linear-gradient(
      100deg,
      #08b9eb 0%,
      #168bdd 52%,
      #7048df 100%
    );
    font: inherit;
    cursor: pointer;
  }

  .withdraw-error {
    margin: 8px 0 0;
    color: #ff7890;
    font-size: 0.82rem;
  }

  .dashboard-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    color: #f4f8ff;
    background: #03152d;
    font-family: Arial, sans-serif;
  }

  @media (max-width: 700px) {
    .dashboard-page {
      padding-bottom: 110px;
    }

    .dashboard-header {
      display: flex;
      min-height: 72px;
      padding: 12px 14px;
    }

    .dashboard-logo {
      width: 180px;
      height: 34px;
      max-width: 58%;
    }

    .dashboard-header-actions {
      gap: 9px;
    }

    .dashboard-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .dashboard-menu {
      width: 28px;
      height: 24px;
    }

    .dashboard-menu span {
      height: 2px;
    }

    .dashboard-content {
      width: calc(100% - 36px);
      margin: 0 auto;
    }

    .dashboard-notice {
      min-height: 58px;
      gap: 8px;
      font-size: 0.78rem;
    }

    .dashboard-notice-icon {
      width: 22px;
      height: 22px;
      padding: 3px;
    }

    .dashboard-banner {
      height: 250px;
      margin-top: 20px;
      border-radius: 14px;
    }

    .dashboard-intro {
      margin: 24px 0 18px;
      font-size: 1.35rem;
      line-height: 1.35;
    }

    .dashboard-black-button {
      min-width: 190px;
      height: 44px;
      font-size: 0.85rem;
    }

    .dashboard-divider {
      margin: 26px 0 20px;
    }

    .dashboard-section-title {
      margin-bottom: 18px;
      font-size: 1rem;
    }

    .quick-links {
      gap: 12px;
    }

    .quick-link {
      min-height: 150px;
      padding: 20px 10px 16px;
      border-radius: 12px;
      font-size: 1rem;
    }

    .quick-link img {
      width: 72px;
      height: 72px;
    }

    .recent-section {
      margin-top: 30px;
    }

    .recent-grid {
      gap: 26px 12px;
    }

    .recent-card h3 {
      margin-top: 10px;
      font-size: 1rem;
    }

    .recent-card small {
      font-size: 0.7rem;
    }

    .services {
      margin-left: calc((100vw - 100%) / -2);
      margin-right: calc((100vw - 100%) / -2);
      margin-top: 30px;
      padding: 34px 20px 90px;
    }

    .services-label {
      margin-bottom: 42px;
      font-size: 0.85rem;
    }

    .services h2 {
      margin-bottom: 42px;
      font-size: 1.8rem;
    }

    .services p {
      margin-bottom: 32px;
      font-size: 0.95rem;
    }

    .services-image-slider {
      margin-top: 36px;
      border-radius: 12px;
    }

    .dashboard-footer {
      min-height: 90px;
      padding: 20px 0 44px;
    }

    .dashboard-footer-divider {
      width: calc(100% - 1px);
    }

    .dashboard-footer-icon {
      width: 76px;
      height: 76px;
      margin-top: 24px;
    }

    .bottom-navigation {
      height: 88px;
    }

    .bottom-item.starting {
      transform: translateY(-8px);
    }

    .bottom-item.starting img {
      width: 60px;
      height: 60px;
      margin-bottom: -4px;
    }
  }
`;function ah({onClose:e}){return i.jsx("div",{className:"reward-overlay",role:"dialog","aria-modal":"true",children:i.jsxs("div",{className:"reward-modal",children:[i.jsx("button",{type:"button",className:"reward-close",onClick:e,"aria-label":"Close special reward announcement",children:"×"}),i.jsx("img",{src:K2,alt:"Instrument special reward announcement",className:"reward-image"}),i.jsx("button",{type:"button",className:"reward-cancel",onClick:e,children:"Cancel"})]})})}function oh({open:e,onClose:t,onSubmit:n,password:r,setPassword:a,error:o,loading:s}){return e?i.jsx("div",{className:"modal-overlay",onClick:t,children:i.jsxs("div",{className:"withdraw-modal",onClick:l=>l.stopPropagation(),children:[i.jsxs("div",{className:"withdraw-header",children:[i.jsx("h2",{children:"Withdrawal Password"}),i.jsx("button",{type:"button",onClick:t,"aria-label":"Close",children:"×"})]}),i.jsxs("form",{onSubmit:n,children:[i.jsx("input",{type:"password",value:r,onChange:l=>a(l.target.value),placeholder:"Withdrawal Password",autoFocus:!0,disabled:s}),o&&i.jsx("p",{className:"withdraw-error",children:o}),i.jsx("button",{type:"submit",disabled:s,children:s?"Verifying...":"Submit"})]})]})}):null}function sh({navigate:e}){return i.jsxs("nav",{className:"bottom-navigation",children:[i.jsxs("button",{type:"button",className:"bottom-item",onClick:()=>e("/dashboard"),children:[i.jsx("img",{src:Zs,alt:""}),i.jsx("span",{children:"Home"})]}),i.jsxs("button",{type:"button",className:"bottom-item starting",onClick:()=>e("/tasks"),children:[i.jsx("img",{src:el,alt:""}),i.jsx("span",{children:"Starting"})]}),i.jsxs("button",{type:"button",className:"bottom-item",onClick:()=>e("/records"),children:[i.jsx("img",{src:tl,alt:""}),i.jsx("span",{children:"Records"})]})]})}function lh(){const e=ie(),[t,n]=g.useState(null),[r,a]=g.useState(0),[o,s]=g.useState(0),[l,d]=g.useState(!1),[c,h]=g.useState(!1),[u,m]=g.useState(!1),[w,y]=g.useState(""),[b,j]=g.useState(""),[f,p]=g.useState(!1),x=[Z2,eh,th,nh,rh,ih],[$,A]=g.useState(0),E=[{label:"Event",icon:_2,path:"/events",className:"event"},{label:"VIP Level",icon:V2,path:"/vip",className:"vip"},{label:"FAQs",icon:G2,path:"/faq",className:"faq"},{label:"T&C's",icon:W2,path:"/terms",className:"terms"},{label:"Certificate",icon:Q2,path:"/certificate",className:"certificate"},{label:"About Us",icon:H2,path:"/about",className:"about"}];g.useEffect(()=>{const v=localStorage.getItem("currentUser");if(!v){e("/login");return}let I;try{I=JSON.parse(v),n(I),a(I.balance||0),s(I.vipLevel||0)}catch{localStorage.removeItem("currentUser"),e("/login");return}const L=localStorage.getItem("authToken")||localStorage.getItem("token")||I.token;L&&fetch(`${Id}/api/user-profile`,{headers:{"x-auth-token":L,Authorization:`Bearer ${L}`}}).then(_=>{if(!_.ok)throw new Error("Unable to load profile");return _.json()}).then(_=>{if(!(_!=null&&_.user))return;const se={...I,..._.user};n(se),a(_.user.balance||0),s(_.user.vipLevel||0),localStorage.setItem("currentUser",JSON.stringify(se))}).catch(()=>{})},[e]),g.useEffect(()=>{sessionStorage.getItem("instrument-special-reward-shown")||(d(!0),sessionStorage.setItem("instrument-special-reward-shown","true"))},[]),g.useEffect(()=>{const v=window.setInterval(()=>{A(I=>(I+1)%x.length)},3e3);return()=>{window.clearInterval(v)}},[x.length]);const N=async v=>{v.preventDefault(),j(""),p(!0);try{const I=localStorage.getItem("authToken")||localStorage.getItem("token")||(t==null?void 0:t.token);if(!I){e("/login");return}const _=await(await fetch(`${Id}/api/verify-withdraw-password`,{method:"POST",headers:{"Content-Type":"application/json","x-auth-token":I,Authorization:`Bearer ${I}`},body:JSON.stringify({password:w})})).json();_.success?(m(!1),y(""),e("/withdraw")):j(_.message||"Incorrect withdrawal password.")}catch{j("Could not verify withdrawal password. Try again.")}finally{p(!1)}};return t?i.jsxs(i.Fragment,{children:[i.jsx("style",{children:Ld}),i.jsxs("div",{className:"dashboard-page",children:[l&&i.jsx(ah,{onClose:()=>d(!1)}),i.jsxs("header",{className:"dashboard-header",children:[i.jsx("img",{src:pe,alt:"Instrument",className:"dashboard-logo"}),i.jsxs("div",{className:"dashboard-header-actions",children:[i.jsx("button",{type:"button",className:"dashboard-contact",onClick:()=>h(!0),children:"Contact"}),i.jsxs("button",{type:"button",className:"dashboard-menu",onClick:()=>e("/profile"),"aria-label":"Open menu",children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]})]})]}),i.jsxs("main",{className:"dashboard-content",children:[i.jsxs("div",{className:"dashboard-notice",children:[i.jsx("img",{src:D2,alt:"",className:"dashboard-notice-icon"}),i.jsx("div",{className:"dashboard-notice-track",children:"Thank you for your support in Dept Platform. Kindly read Rules & regulations. Thank you."})]}),i.jsx("section",{className:"dashboard-banner",children:i.jsx("video",{src:U2,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"auto"})}),i.jsx("p",{className:"dashboard-intro",children:"We are a digitally native design agency evolving brands through creative vision & technology."}),i.jsxs("button",{type:"button",className:"dashboard-black-button",onClick:()=>e("/about"),children:["View All Work",i.jsx("span",{className:"arrow",children:"→"})]}),i.jsx("div",{className:"dashboard-divider"}),i.jsxs("section",{children:[i.jsx("h2",{className:"dashboard-section-title",children:"QUICK CLICKS"}),i.jsx("div",{className:"quick-links",children:E.map(v=>i.jsxs("button",{type:"button",className:`quick-link ${v.className}`,onClick:()=>e(v.path),children:[i.jsx("span",{children:v.label}),i.jsx("img",{src:v.icon,alt:""})]},v.label))})]}),i.jsxs("section",{className:"recent-section",children:[i.jsx("div",{className:"dashboard-divider"}),i.jsx("h2",{className:"dashboard-section-title",children:"RECENT WORK"}),i.jsxs("div",{className:"recent-grid",children:[i.jsxs("article",{className:"recent-card",children:[i.jsx("div",{className:"recent-image",children:i.jsx("img",{src:q2,alt:"Feeled project"})}),i.jsx("h3",{children:"Feeled"}),i.jsx("small",{children:"#PRODUCT"})]}),i.jsxs("article",{className:"recent-card",children:[i.jsx("div",{className:"recent-image",children:i.jsx("img",{src:J2,alt:"ŌURA project"})}),i.jsx("h3",{children:"ŌURA"}),i.jsx("small",{children:"#MARKETING"})]}),i.jsxs("article",{className:"recent-card",children:[i.jsx("div",{className:"recent-image",children:i.jsx("img",{src:Y2,alt:"AlphaSense project"})}),i.jsx("h3",{children:"AlphaSense"}),i.jsx("small",{children:"#PRODUCT"})]}),i.jsxs("article",{className:"recent-card",children:[i.jsx("div",{className:"recent-image",children:i.jsx("img",{src:X2,alt:"Perfected project"})}),i.jsx("h3",{children:"Perfected"}),i.jsx("small",{children:"#BRAND #MARKETING"})]})]})]}),i.jsxs("section",{className:"services",children:[i.jsx("span",{className:"services-label",children:"SERVICES"}),i.jsx("h2",{children:"Expressive and enduring digital experiences."}),i.jsx("p",{children:"We help our clients accelerate progress, shape outcomes, and envision the future. Through collaboration with companies across industries, we build scalable brand systems and products that leverage emerging behaviors and technologies, and ultimately unlock potential. Learn more about what we can do for you."}),i.jsxs("button",{type:"button",className:"dashboard-black-button",onClick:()=>h(!0),children:["See our offerings",i.jsx("span",{className:"arrow",children:"→"})]}),i.jsxs("div",{className:"services-image-slider",children:[i.jsx("div",{className:"services-image-track",style:{transform:`translateX(-${$*16.666666}%)`},children:x.map((v,I)=>i.jsx("div",{className:"services-slide",children:i.jsx("img",{src:v,alt:`Instrument service ${I+1}`})},`${v}-${I}`))}),i.jsx("div",{className:"services-slider-dots",children:x.map((v,I)=>i.jsx("button",{type:"button",className:`services-slider-dot ${$===I?"active":""}`,onClick:()=>A(I),"aria-label":`Show service image ${I+1}`},`${v}-${I}-dot`))})]})]}),i.jsx("section",{className:"dashboard-footer",children:i.jsx("div",{className:"dashboard-footer-divider"})})]}),i.jsx(oh,{open:u,onClose:()=>m(!1),onSubmit:N,password:w,setPassword:y,error:b,loading:f}),i.jsxs("button",{type:"button",onClick:()=>h(!0),"aria-label":"Open customer support",title:"Customer support",style:{position:"fixed",right:"16px",bottom:"112px",width:"58px",height:"58px",borderRadius:"50%",border:"2px solid #00bff3",background:"linear-gradient(145deg, #087cff, #0756d8)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",zIndex:1e3,boxShadow:"0 4px 14px rgba(0, 80, 220, 0.4)",opacity:1},children:[i.jsxs("svg",{viewBox:"0 0 64 64","aria-hidden":"true",style:{position:"absolute",width:"42px",height:"42px",top:"4px"},children:[i.jsx("path",{d:"M10 32a22 22 0 0 1 44 0",fill:"none",stroke:"white",strokeWidth:"4",strokeLinecap:"round"}),i.jsx("rect",{x:"6",y:"29",width:"10",height:"19",rx:"5",fill:"#fff"}),i.jsx("rect",{x:"48",y:"29",width:"10",height:"19",rx:"5",fill:"#fff"})]}),i.jsx("span",{style:{fontSize:"18px",fontWeight:800,lineHeight:1,marginTop:"7px"},children:"CS"}),i.jsx("span",{"aria-hidden":"true",style:{position:"absolute",width:"13px",height:"6px",borderRadius:"5px",background:"#fff",right:"12px",bottom:"10px",transform:"rotate(-25deg)"}})]}),i.jsx(me,{open:c,onClose:()=>h(!1)}),i.jsx(sh,{navigate:e})]})]}):i.jsxs(i.Fragment,{children:[i.jsx("style",{children:Ld}),i.jsx("div",{className:"dashboard-loading",children:"Loading..."})]})}const qa="https://dept-admin.onrender.com",h0=g.createContext();function dh({children:e}){const[t,n]=g.useState(0),[r,a]=g.useState(0),[o,s]=g.useState(0),[l,d]=g.useState(""),[c,h]=g.useState("VIP1"),[u,m]=g.useState(null),w=async()=>{const f=localStorage.getItem("authToken");if(f)try{const p=await fetch(`${qa}/api/user-profile`,{headers:{"Content-Type":"application/json","X-Auth-Token":f}});if(!p.ok)return;const x=await p.json();x.success&&x.user&&(d(x.user.username||""),n(x.user.balance??0),h(x.user.vipLevel||"VIP1"),a(x.user.commissionToday??0),s(typeof x.user.taskCountThisSet=="number"?x.user.taskCountThisSet:x.user.taskCountToday??0),m(x.user))}catch(p){console.error("Failed to fetch user profile",p)}};g.useEffect(()=>{w()},[]);const y=w,b=async f=>{const p=localStorage.getItem("authToken");try{(await(await fetch(`${qa}/api/deposit`,{method:"POST",headers:{"Content-Type":"application/json","X-Auth-Token":p},body:JSON.stringify({amount:f})})).json()).success&&await y()}catch(x){console.error("Failed to deposit",x)}},j=async f=>{const p=localStorage.getItem("authToken");try{const $=await(await fetch(`${qa}/api/withdraw`,{method:"POST",headers:{"Content-Type":"application/json","X-Auth-Token":p},body:JSON.stringify({amount:f})})).json();return $.success&&await y(),$.success}catch(x){return console.error("Failed to withdraw",x),!1}};return i.jsx(h0.Provider,{value:{balance:t,setBalance:n,deposit:b,withdraw:j,commissionToday:r,setCommissionToday:a,taskCountToday:o,setTaskCountToday:s,username:l,vipLevel:c,setVipLevel:h,refreshProfile:y,userProfile:u},children:e})}function ha(){return g.useContext(h0)}const m0=g.createContext(),ch=({children:e})=>{const[t,n]=g.useState([]),[r,a]=g.useState([]),[o,s]=g.useState(!1),l="https://dept-admin.onrender.com",d=async()=>{const h=localStorage.getItem("authToken");if(h){s(!0);try{const m=await(await fetch(`${l}/api/transactions`,{headers:{"Content-Type":"application/json","X-Auth-Token":h}})).json();m.success&&(n(m.deposits||[]),a(m.withdrawals||[]))}catch{n([]),a([])}s(!1)}};g.useEffect(()=>{d()},[]);const c=d;return i.jsx(m0.Provider,{value:{deposits:t,withdrawals:r,loading:o,refresh:c},children:e})},g0=()=>g.useContext(m0),uh="https://dept-admin.onrender.com",x0=g.createContext({settings:null,loading:!0,refresh:async()=>{},currency:"",formatAmount:e=>String(e)}),ma=()=>g.useContext(x0),ph=({children:e})=>{const[t,n]=g.useState(null),[r,a]=g.useState(!0),o=c=>c?c.success&&c.settings||c.settings?c.settings:typeof c=="object"&&(c.currency||c.siteName||c.defaultVip)?c:null:null,s=async()=>{a(!0);try{const c=await fetch(`${uh}/api/settings`);if(!c.ok){console.warn("Failed to fetch settings. HTTP status:",c.status);return}const h=await c.json(),u=o(h);n(u)}catch(c){console.error("Settings fetch error:",c)}finally{a(!1)}};g.useEffect(()=>{s()},[]);const l=(t==null?void 0:t.currency)??"",d=(c,h={})=>{const u=Number.isInteger(h.decimals)?h.decimals:2,w=Number(c||0).toFixed(u);return l?`${w} ${l}`:w};return i.jsx(x0.Provider,{value:{settings:t,loading:r,refresh:s,currency:l,formatAmount:d},children:e})},fh=`
  html, body, #root {
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  .deposit-page {
    min-height: 100vh;
    overflow-x: hidden;
    background: radial-gradient(circle at 50% 35%, rgba(0, 102, 190, 0.13), transparent 38%), linear-gradient(180deg, #03152d 0%, #021b38 48%, #031a34 100%);
    color: #f4f8ff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  .deposit-page button {
    font-family: inherit;
  }

  /* Header matched exactly to the updated Withdrawal page */
  .deposit-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid rgba(0, 191, 243, 0.32);
    background: linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%);
  }

  .deposit-logo {
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
    filter: brightness(0) invert(1);
  }

  .deposit-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .deposit-contact {
    min-width: clamp(112px, 14vw, 178px);
    height: clamp(40px, 5vw, 62px);
    padding: 0 clamp(16px, 2vw, 26px);
    border: 0;
    border-radius: 40px;
    color: #ffffff;
    background: linear-gradient(110deg, #00bff3 0%, #168fe4 58%, #7048df 100%);
    font-size: clamp(0.85rem, 1.65vw, 1.65rem);
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
  }

  .deposit-contact:hover {
    background: linear-gradient(110deg, rgba(8, 54, 98, 0.98), rgba(31, 35, 91, 0.98));
  }

  .deposit-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: clamp(34px, 5vw, 64px);
    height: clamp(26px, 3.5vw, 44px);
    padding: 4px 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .deposit-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    background: linear-gradient(110deg, #00bff3 0%, #168fe4 58%, #7048df 100%);
  }

  .deposit-title-bar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: clamp(50px, 6vw, 70px);
    padding: clamp(12px, 2vw, 16px) clamp(18px, 4.2vw, 42px);
    background: radial-gradient(circle at 50% 35%, rgba(0, 102, 190, 0.13), transparent 38%), linear-gradient(180deg, #03152d 0%, #021b38 48%, #031a34 100%);
    border-bottom: 1px solid rgba(0, 191, 243, 0.32);
  }

  .deposit-back {
    position: absolute;
    left: clamp(18px, 4.2vw, 42px);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .deposit-back img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    display: block;
    filter: brightness(0) invert(1);
  }

  .deposit-title-bar h1 {
    margin: 0;
    font-size: clamp(1.5rem, 2.5vw, 2.2rem);
    font-weight: 600;
    letter-spacing: -0.05em;
    color: #f4f8ff;
  }

  .deposit-content {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
    padding: clamp(20px, 3vw, 30px) 0;
  }

  .deposit-wallet-section {
    background: radial-gradient(circle at 50% 35%, rgba(0, 102, 190, 0.13), transparent 38%), linear-gradient(180deg, #03152d 0%, #021b38 48%, #031a34 100%);
    border-radius: 16px;
    padding: clamp(20px, 3vw, 32px);
    margin-bottom: 20px;
  }

  .deposit-wallet-title {
    font-size: clamp(1.1rem, 1.8vw, 1.6rem);
    font-weight: 600;
    color: #f4f8ff;
    margin-bottom: 12px;
  }

  .deposit-label {
    font-size: clamp(0.95rem, 1.5vw, 1.4rem);
    font-weight: 500;
    color: #9ec8e8;
    text-align: center;
    margin-bottom: 12px;
  }

  .deposit-amount-box {
    background: linear-gradient(110deg, #00bff3 0%, #168fe4 58%, #7048df 100%);
    color: #ffffff;
    border-radius: 12px;
    padding: clamp(14px, 2vw, 20px);
    text-align: center;
    margin-bottom: 16px;
    font-size: clamp(1.3rem, 2.5vw, 2.2rem);
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  .deposit-button {
    background: linear-gradient(110deg, #00bff3 0%, #168fe4 58%, #7048df 100%);
    color: #ffffff;
    border: 0;
    border-radius: 12px;
    padding: clamp(12px, 2vw, 16px);
    font-size: clamp(1rem, 1.6vw, 1.5rem);
    font-weight: 600;
    cursor: pointer;
    width: 100%;
    transition: background 0.2s;
  }

  .deposit-button:hover {
    background: linear-gradient(110deg, rgba(8, 54, 98, 0.98), rgba(31, 35, 91, 0.98));
  }

  .deposit-filter-tabs {
    display: flex;
    gap: 8px;
    margin-bottom: 20px;
    background: linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%);
    padding: clamp(10px, 2vw, 16px);
    border-radius: 12px;
    flex-wrap: wrap;
  }

  .deposit-filter-tab {
    padding: clamp(8px, 1.5vw, 12px) clamp(12px, 2vw, 18px);
    border: 0;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.08);
    color: #9ec8e8;
    font-size: clamp(0.85rem, 1.3vw, 1.1rem);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
  }

  .deposit-filter-tab.active {
    background: linear-gradient(110deg, #00bff3 0%, #168fe4 58%, #7048df 100%);
    color: #ffffff;
  }

  .deposit-activity-item {
    background: linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%);
    border-radius: 12px;
    padding: clamp(14px, 2vw, 18px);
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .deposit-activity-left {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .deposit-activity-amount {
    font-size: clamp(1rem, 1.6vw, 1.4rem);
    font-weight: 700;
    color: #f4f8ff;
  }

  .deposit-activity-date {
    font-size: clamp(0.85rem, 1.3vw, 1.1rem);
    color: #9ec8e8;
  }

  .deposit-activity-status {
    font-size: clamp(0.9rem, 1.4vw, 1.2rem);
    font-weight: 600;
    color: #9ec8e8;
    text-transform: capitalize;
    padding: 6px 12px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 6px;
  }

  .deposit-activity-status.completed {
    background: rgba(22, 139, 56, 0.18);
    color: #6ee7a0;
  }

  .deposit-activity-status.pending {
    background: rgba(255, 193, 7, 0.16);
    color: #ffd86b;
  }

  .deposit-activity-status.reviewing {
    background: rgba(158, 200, 232, 0.12);
    color: #9ec8e8;
  }

  .deposit-empty {
    text-align: center;
    color: #9ec8e8;
    font-size: clamp(1rem, 1.6vw, 1.4rem);
    padding: clamp(20px, 4vw, 40px);
  }

  .deposit-loading {
    text-align: center;
    color: #9ec8e8;
    font-size: clamp(1rem, 1.6vw, 1.4rem);
    padding: clamp(20px, 4vw, 40px);
  }

  @media (max-width: 720px) {
    .deposit-header {
      min-height: 72px;
      padding: 12px 14px;
    }

    .deposit-logo {
      width: 180px;
      height: 34px;
    }

    .deposit-header-actions {
      gap: 9px;
    }

    .deposit-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .deposit-menu {
      width: 28px;
      height: 24px;
    }

    .deposit-menu span {
      height: 2px;
    }

    .deposit-title-bar {
      min-height: 48px;
      padding: 10px 14px;
    }

    .deposit-back {
      width: 32px;
      height: 32px;
      left: 14px;
    }

    .deposit-back img {
      width: 20px;
      height: 20px;
    }

    .deposit-title-bar h1 {
      font-size: 1.5rem;
    }

    .deposit-content {
      width: calc(100% - 28px);
      padding: 16px 0;
    }

    .deposit-filter-tabs {
      gap: 6px;
      padding: 8px;
    }

    .deposit-filter-tab {
      padding: 6px 10px;
      font-size: 0.8rem;
    }
  }
`;function hh(){const e=ie(),[t,n]=g.useState(!1),[r,a]=g.useState("all"),{balance:o,totalBalance:s}=ha(),{deposits:l,loading:d}=g0(),{currency:c,formatAmount:h}=ma(),u=l.filter(f=>f.type==="deposit"||f.type==="admin_add_balance"||f.type==="admin_add_funds"||f.type==="add_balance_admin"||!f.type),w=r==="all"?u:u.filter(f=>(f.status||"pending").toLowerCase()===r.toLowerCase()),y=["all","reviewing","completed","pending"],b=f=>{if(!f)return"N/A";try{return new Date(f).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"})}catch{return f}},j=f=>f?f.toLowerCase():"pending";return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:fh}),i.jsxs("div",{className:"deposit-page",children:[i.jsxs("header",{className:"deposit-header",children:[i.jsx("img",{src:pe,alt:"Instrument",className:"deposit-logo"}),i.jsxs("div",{className:"deposit-header-actions",children:[i.jsx("button",{type:"button",className:"deposit-contact",onClick:()=>n(!0),children:"Contact"}),i.jsxs("button",{type:"button",className:"deposit-menu",onClick:()=>e("/profile"),"aria-label":"Open profile menu",children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]})]})]}),i.jsxs("div",{className:"deposit-title-bar",children:[i.jsx("button",{type:"button",className:"deposit-back",onClick:()=>e(-1),"aria-label":"Go back",children:i.jsx("img",{src:Ie,alt:"Back"})}),i.jsx("h1",{children:"Deposit"})]}),i.jsxs("main",{className:"deposit-content",children:[i.jsxs("div",{className:"deposit-wallet-section",children:[i.jsx("h2",{className:"deposit-wallet-title",children:"My Wallet"}),i.jsxs("div",{style:{marginBottom:"24px"},children:[i.jsx("div",{className:"deposit-label",children:"Available Balance"}),i.jsx("div",{className:"deposit-amount-box",children:h?h(o||0):`${c||""} ${Number(o||0).toFixed(2)}`})]}),i.jsx("button",{type:"button",className:"deposit-button",onClick:()=>n(!0),children:"Deposit"})]}),i.jsxs("div",{className:"deposit-wallet-section",children:[i.jsx("div",{className:"deposit-label",children:"Total Balance"}),i.jsx("div",{className:"deposit-amount-box",children:h?h(s||0):`${c||""} ${Number(s||0).toFixed(2)}`})]}),i.jsx("h2",{className:"deposit-wallet-title",style:{marginTop:"28px",marginBottom:"16px"},children:"Transaction History"}),i.jsx("div",{className:"deposit-filter-tabs",children:y.map(f=>i.jsx("button",{type:"button",className:`deposit-filter-tab ${r===f?"active":""}`,onClick:()=>a(f),children:f.charAt(0).toUpperCase()+f.slice(1)},f))}),d?i.jsx("div",{className:"deposit-loading",children:"Loading transaction history..."}):w.length===0?i.jsx("div",{className:"deposit-empty",children:"No more data"}):w.slice().reverse().map((f,p)=>{const x=Number(f.amount||0).toFixed(2),$=c?`+${x} ${c}`:`+${x}`;return i.jsxs("div",{className:"deposit-activity-item",children:[i.jsxs("div",{className:"deposit-activity-left",children:[i.jsx("div",{className:"deposit-activity-amount",children:$}),i.jsx("div",{className:"deposit-activity-date",children:b(f.createdAt||f.date)})]}),i.jsx("div",{className:`deposit-activity-status ${j(f.status)}`,children:f.status||"Pending"})]},p)})]}),i.jsx(me,{open:t,onClose:()=>n(!1)})]})]})}const mh=`
  html, body, #root {
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  .withdraw-page {
    min-height: 100vh;
    overflow-x: hidden;
    background: radial-gradient(circle at 50% 35%, rgba(0, 102, 190, 0.13), transparent 38%), linear-gradient(180deg, #03152d 0%, #021b38 48%, #031a34 100%);
    color: #f4f8ff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    padding-bottom: 40px;
  }

  .withdraw-page button {
    font-family: inherit;
  }

  .withdraw-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid rgba(0, 191, 243, 0.32);
    background: linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%);
  }

  .withdraw-logo {
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
    filter: brightness(0) invert(1);
  }

  .withdraw-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .withdraw-contact {
    min-width: clamp(112px, 14vw, 178px);
    height: clamp(40px, 5vw, 62px);
    padding: 0 clamp(16px, 2vw, 26px);
    border: 0;
    border-radius: 40px;
    color: #ffffff;
    background: linear-gradient(110deg, #00bff3 0%, #168fe4 58%, #7048df 100%);
    font-size: clamp(0.85rem, 1.65vw, 1.65rem);
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
  }

  .withdraw-contact:hover {
    background: linear-gradient(110deg, rgba(8, 54, 98, 0.98), rgba(31, 35, 91, 0.98));
  }

  .withdraw-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: clamp(34px, 5vw, 64px);
    height: clamp(26px, 3.5vw, 44px);
    padding: 4px 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .withdraw-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    background: linear-gradient(110deg, #00bff3 0%, #168fe4 58%, #7048df 100%);
  }

  .withdraw-title-bar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: clamp(50px, 6vw, 70px);
    padding: clamp(12px, 2vw, 16px) clamp(18px, 4.2vw, 42px);
    background: radial-gradient(circle at 50% 35%, rgba(0, 102, 190, 0.13), transparent 38%), linear-gradient(180deg, #03152d 0%, #021b38 48%, #031a34 100%);
    border-bottom: 1px solid rgba(0, 191, 243, 0.32);
  }

  .withdraw-back {
    position: absolute;
    left: clamp(18px, 4.2vw, 42px);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .withdraw-back img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    display: block;
    filter: brightness(0) invert(1);
  }

  .withdraw-title-bar h1 {
    margin: 0;
    font-size: clamp(1.5rem, 2.5vw, 2.2rem);
    font-weight: 600;
    letter-spacing: -0.05em;
    color: #f4f8ff;
  }

  .withdraw-tabs {
    display: flex;
    justify-content: center;
    border-bottom: 1px solid rgba(0, 191, 243, 0.32);
    background: linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%);
    margin-bottom: 0;
    font-size: 0;
  }

  .withdraw-tab-button {
    flex: 1;
    padding: 20px 0 10px 0;
    font-weight: 600;
    font-size: 20px;
    color: #9ec8e8;
    background: none;
    border: none;
    border-bottom: 3px solid transparent;
    outline: none;
    cursor: pointer;
    transition: all 0.2s;
  }

  .withdraw-tab-button.active {
    color: #f4f8ff;
    border-bottom: 3px solid #00bff3;
  }

  .withdraw-content {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
    padding: clamp(20px, 3vw, 30px);
  }

  .withdraw-wallet-section {
    background: linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%);
    border-radius: 20px;
    margin: 28px auto 18px auto;
    box-shadow: 0 4px 16px 0 rgba(0,0,0,0.07);
    padding: 0;
    overflow: hidden;
    min-height: 120px;
    width: 100%;
    display: flex;
    align-items: center;
  }

  .withdraw-wallet-content {
    padding: 22px;
    width: 100%;
  }

  .withdraw-wallet-title {
    font-weight: 700;
    color: #f4f8ff;
    font-size: 18px;
    margin-bottom: 2px;
  }

  .withdraw-amount-display {
    display: flex;
    align-items: flex-end;
    gap: 6px;
  }

  .withdraw-amount-value {
    font-size: 38px;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: 1px;
  }

  .withdraw-amount-currency {
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
    padding-bottom: 5px;
  }

  .withdraw-message-text {
    color: #b0b0b0;
    font-size: 14px;
    margin-top: 7px;
  }

  .withdraw-form {
    margin: 0 auto;
    margin-bottom: 0;
    max-width: 100%;
    width: 100%;
    border-radius: 13px;
    background: transparent;
    box-shadow: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .withdraw-input-group {
    width: 100%;
  }

  .withdraw-input-label {
    display: block;
    color: #f4f8ff;
    font-weight: 700;
    margin-bottom: 8px;
    font-size: 16px;
  }

  .withdraw-input {
    width: 100%;
    padding: 14px 16px;
    border-radius: 7px;
    background: linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%);
    border: 1px solid #d5d5d5;
    font-size: 18px;
    color: #f4f8ff;
    margin-bottom: 0;
  }

  .withdraw-input:focus {
    outline: none;
    background: linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%);
    border-color: #f4f8ff;
  }

  .withdraw-submit-button {
    width: 100%;
    background: linear-gradient(110deg, #00bff3 0%, #168fe4 58%, #7048df 100%);
    color: #ffffff;
    font-weight: 500;
    font-size: 20px;
    border-radius: 100px;
    border: none;
    padding: 13px 0;
    margin-top: 8px;
    transition: background 0.2s;
    cursor: pointer;
  }

  .withdraw-submit-button:hover {
    background: linear-gradient(110deg, #168fe4 0%, #7048df 100%);
  }

  .withdraw-message {
    text-align: center;
    margin-top: 6px;
    font-size: 15px;
    color: #c62828;
  }

  .withdraw-message.success {
    color: #168b38;
  }

  .withdraw-history-container {
    margin-top: 30px;
    width: 100%;
  }

  .withdraw-history-tabs {
    display: flex;
    border: 2px solid rgba(0, 191, 243, 0.32);
    border-radius: 25px;
    margin-bottom: 25px;
    overflow: hidden;
    background: linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%);
  }

  .withdraw-history-tab-button {
    flex: 1;
    padding: 13px 0;
    font-weight: 600;
    font-size: 18px;
    background: linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%);
    color: #9ec8e8;
    outline: none;
    border: none;
    border-right: 1px solid rgba(0, 191, 243, 0.32);
    transition: all 0.2s;
    cursor: pointer;
  }

  .withdraw-history-tab-button:last-child {
    border-right: none;
  }

  .withdraw-history-tab-button.active {
    background: linear-gradient(110deg, #00bff3 0%, #168fe4 58%, #7048df 100%);
    color: #ffffff;
    border-right-color: #00bff3;
  }

  .withdraw-loading {
    text-align: center;
    font-size: 16px;
    color: #9ec8e8;
    margin-top: 30px;
  }

  .withdraw-empty {
    text-align: center;
    font-size: 16px;
    color: #9ec8e8;
    margin-top: 30px;
  }

  .withdraw-activity-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .withdraw-activity-item {
    background: linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%);
    box-shadow: 0 4px 12px 0 rgba(0,0,0,.07);
    border-radius: 8px;
    padding: 18px 22px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .withdraw-activity-left {
    flex: 1;
  }

  .withdraw-activity-amount {
    font-weight: 700;
    font-size: 18px;
    color: #f4f8ff;
    margin-bottom: 2px;
  }

  .withdraw-activity-date {
    font-size: 14px;
    color: #9ec8e8;
    margin-top: 2px;
  }

  .withdraw-activity-status {
    font-weight: 600;
    font-size: 16px;
    text-transform: capitalize;
  }

  .withdraw-activity-status.success {
    color: #168b38;
  }

  .withdraw-activity-status.reject {
    color: #c62828;
  }

  .withdraw-activity-status.reviewing {
    color: #9ec8e8;
  }

  @media (max-width: 720px) {
    .withdraw-header {
      min-height: 72px;
      padding: 12px 14px;
    }

    .withdraw-logo {
      width: 180px;
      height: 34px;
    }

    .withdraw-header-actions {
      gap: 9px;
    }

    .withdraw-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .withdraw-menu {
      width: 28px;
      height: 24px;
    }

    .withdraw-menu span {
      height: 2px;
    }

    .withdraw-title-bar {
      min-height: 48px;
      padding: 10px 14px;
    }

    .withdraw-back {
      width: 32px;
      height: 32px;
      left: 14px;
    }

    .withdraw-back img {
      width: 20px;
      height: 20px;
    }

    .withdraw-title-bar h1 {
      font-size: 1.5rem;
    }

    .withdraw-tab-button {
      font-size: 16px;
      padding: 16px 0 8px 0;
    }

    .withdraw-content {
      width: calc(100% - 28px);
      padding: 16px 0;
    }
  }
`,Ja={reviewing:["Pending","Reviewing","In Review"],success:["Completed","Success"],reject:["Rejected","Reject","Failed"]};function Xa(e){return!e||Ja.reviewing.some(t=>e.toLowerCase().includes(t.toLowerCase()))?"reviewing":Ja.success.some(t=>e.toLowerCase().includes(t.toLowerCase()))?"success":Ja.reject.some(t=>e.toLowerCase().includes(t.toLowerCase()))?"reject":e.toLowerCase().includes("approved")?"success":"reviewing"}const gh="#00bff3",xh="#f4f8ff";function wh(){const[e,t]=g.useState("withdraw"),[n,r]=g.useState("reviewing"),[a,o]=g.useState(""),[s,l]=g.useState(""),[d,c]=g.useState(""),[h,u]=g.useState(!1),m=ie(),{balance:w,refreshProfile:y}=ha(),{withdrawals:b,loading:j,refresh:f}=g0(),{profile:p}=Vr(),{currency:x,formatAmount:$}=ma(),A=async v=>{if(v.preventDefault(),c(""),!a||Number(a)<=0){c("Please enter a valid amount.");return}if(!s){c("Please enter your withdrawal password.");return}const I=localStorage.getItem("authToken"),L="https://dept-admin.onrender.com";try{const se=await(await fetch(`${L}/api/withdraw`,{method:"POST",headers:{"Content-Type":"application/json","X-Auth-Token":I},body:JSON.stringify({amount:a,withdrawPassword:s})})).json();se.success?(c("Withdrawal request submitted and is under review."),o(""),l(""),f(),y()):c(se.message||"Failed to withdraw.")}catch{c("An error occurred. Please try again.")}},E=(b||[]).filter(v=>Xa(v.status)===n),N=v=>{const I=Number(v||0);return Number.isFinite(I)?I.toFixed(2):""};return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:mh}),i.jsxs("div",{className:"withdraw-page",children:[i.jsxs("header",{className:"withdraw-header",children:[i.jsx("img",{src:pe,alt:"Instrument",className:"withdraw-logo"}),i.jsxs("div",{className:"withdraw-header-actions",children:[i.jsx("button",{type:"button",className:"withdraw-contact",onClick:()=>u(!0),children:"Contact"}),i.jsxs("button",{type:"button",className:"withdraw-menu",onClick:()=>m("/profile"),"aria-label":"Open profile menu",children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]})]})]}),i.jsxs("div",{className:"withdraw-title-bar",children:[i.jsx("button",{type:"button",className:"withdraw-back",onClick:()=>m(-1),"aria-label":"Go back",children:i.jsx("img",{src:Ie,alt:"Back"})}),i.jsx("h1",{children:"Withdrawal"})]}),i.jsxs("div",{className:"withdraw-tabs",children:[i.jsx("button",{className:`withdraw-tab-button ${e==="withdraw"?"active":""}`,onClick:()=>t("withdraw"),children:i.jsx("span",{"data-i18n":"Withdraw",children:"Withdraw"})}),i.jsx("button",{className:`withdraw-tab-button ${e==="history"?"active":""}`,onClick:()=>t("history"),children:i.jsx("span",{"data-i18n":"History",children:"History"})})]}),e==="withdraw"?i.jsxs("div",{className:"withdraw-content",children:[i.jsx("div",{className:"withdraw-wallet-section",children:i.jsxs("div",{className:"withdraw-wallet-content",children:[i.jsx("div",{className:"withdraw-wallet-title","data-i18n":"Account Amount",children:"Account Amount"}),i.jsxs("div",{className:"withdraw-amount-display",children:[i.jsx("span",{className:"withdraw-amount-value",children:N(w)}),i.jsx("span",{className:"withdraw-amount-currency","data-i18n":"GBP",children:x||""})]}),i.jsx("div",{className:"withdraw-message-text","data-i18n":"You will receive your withdrawal within an hour",children:"You will receive your withdrawal within an hour"})]})}),i.jsxs("form",{onSubmit:A,autoComplete:"off",className:"withdraw-form",children:[i.jsxs("div",{className:"withdraw-input-group",children:[i.jsx("label",{className:"withdraw-input-label","data-i18n":"Withdraw Amount",children:"Withdraw Amount"}),i.jsx("input",{type:"number",min:"1",step:"any",value:a,onChange:v=>o(v.target.value),className:"withdraw-input",placeholder:"Withdraw Amount","data-i18n-placeholder":"Withdraw Amount",required:!0})]}),i.jsxs("div",{className:"withdraw-input-group",children:[i.jsx("label",{className:"withdraw-input-label","data-i18n":"Withdrawal Password",children:"Withdrawal Password"}),i.jsx("input",{type:"password",value:s,onChange:v=>l(v.target.value),className:"withdraw-input",placeholder:"Withdrawal Password","data-i18n-placeholder":"Withdrawal Password",required:!0})]}),i.jsx("button",{type:"submit",className:"withdraw-submit-button",children:i.jsx("span",{"data-i18n":"Withdraw",children:"Withdraw"})}),d&&i.jsx("div",{className:"withdraw-message",children:d})]})]}):i.jsx("div",{className:"withdraw-content",children:i.jsxs("div",{className:"withdraw-history-container",children:[i.jsx("div",{className:"withdraw-history-tabs",children:["reviewing","success","reject"].map(v=>i.jsx("button",{className:`withdraw-history-tab-button ${n===v?"active":""}`,onClick:()=>r(v),children:v==="reviewing"?i.jsx("span",{"data-i18n":"Reviewing",children:"Reviewing"}):v==="success"?i.jsx("span",{"data-i18n":"Completed",children:"Completed"}):i.jsx("span",{"data-i18n":"Reject",children:"Reject"})},v))}),j?i.jsx("p",{className:"withdraw-loading","data-i18n":"Loading...",children:"Loading..."}):E.length===0?i.jsx("p",{className:"withdraw-empty","data-i18n":"No more data...",children:"No more data..."}):i.jsx("div",{className:"withdraw-activity-list",children:E.slice().reverse().map((v,I)=>{const L=N(v.amount);return i.jsxs("div",{className:"withdraw-activity-item",children:[i.jsxs("div",{className:"withdraw-activity-left",children:[i.jsxs("div",{className:"withdraw-activity-amount",children:[i.jsx("span",{style:{color:xh,fontWeight:700},children:x||""})," ",i.jsx("span",{style:{color:gh},children:L})]}),i.jsx("div",{className:"withdraw-activity-date",children:v.createdAt?new Date(v.createdAt).toLocaleString():v.date||""})]}),i.jsx("div",{className:`withdraw-activity-status ${Xa(v.status)}`,children:Xa(v.status)==="success"?i.jsx("span",{"data-i18n":"Completed",children:"Completed"}):v.status?i.jsx("span",{children:v.status}):i.jsx("span",{"data-i18n":"Reviewing",children:"Reviewing"})})]},I)})})]})}),i.jsx(me,{open:h,onClose:()=>u(!1)})]})]})}const w0=g.createContext(),vh=({children:e})=>{const[t,n]=g.useState([]),r="https://dept-admin.onrender.com",a=async()=>{const m=localStorage.getItem("authToken");if(m)try{const y=await(await fetch(`${r}/api/task-records`,{headers:{"Content-Type":"application/json","X-Auth-Token":m}})).json();y.success&&Array.isArray(y.records)&&n(y.records)}catch{}},o=a;g.useEffect(()=>{let m=!1,w=null;const y=async()=>{localStorage.getItem("authToken")&&!m&&(m=!0,await a(),w&&(clearInterval(w),w=null))};y(),w=setInterval(()=>{y()},800);const b=j=>{j.key==="authToken"&&j.newValue&&a()};return window.addEventListener("storage",b),()=>{w&&clearInterval(w),window.removeEventListener("storage",b)}},[]),g.useEffect(()=>{a()},[]);const s=async m=>{const w=localStorage.getItem("authToken"),b=await(await fetch(`${r}/api/start-task`,{method:"POST",headers:{"Content-Type":"application/json","X-Auth-Token":w},body:JSON.stringify({image:m.image})})).json();return b.success?(await a(),b.isCombo?{isCombo:!0,...b}:{task:b.task}):null},l=async m=>{const w=localStorage.getItem("authToken"),b=await(await fetch(`${r}/api/submit-task`,{method:"POST",headers:{"Content-Type":"application/json","X-Auth-Token":w},body:JSON.stringify({taskCode:m})})).json();return b.success?(await a(),b):{success:!1,message:b.message,mustDeposit:!!b.mustDeposit}},d=()=>t.some(m=>m.status==="Pending"&&!m.isCombo),c=()=>t.some(m=>m.status==="Pending"&&m.isCombo),h=()=>t.find(m=>m.status==="Pending"&&!m.isCombo)||null,u=()=>{const m=t.find(w=>w.status==="Pending"&&w.isCombo);return!m||!m.comboGroupId?[]:t.filter(w=>w.status==="Pending"&&w.comboGroupId===m.comboGroupId)};return i.jsx(w0.Provider,{value:{records:t,setRecords:n,fetchTaskRecords:a,refreshRecords:o,addTaskRecord:s,submitTaskRecord:l,hasPendingTask:d,hasPendingComboTask:c,getPendingTask:h,getPendingComboTasks:u},children:e})},v0=()=>g.useContext(w0),yh=g.createContext();function bh({children:e}){const[t,n]=g.useState({show:!1,message:""}),r=g.useCallback((a,o=1600)=>{n({show:!0,message:a}),setTimeout(()=>n({show:!1,message:""}),o)},[]);return i.jsxs(yh.Provider,{value:{showToast:r},children:[e,t.show&&i.jsxs("div",{style:{position:"fixed",left:"50%",top:"22%",transform:"translateX(-50%)",background:"#eee",color:"#666",borderRadius:10,padding:"10px 28px",fontWeight:500,fontSize:15.5,boxShadow:"0 2px 12px #0001",zIndex:99999,minWidth:210,maxWidth:"80vw",display:"flex",alignItems:"center"},children:[i.jsx("span",{style:{width:22,height:22,border:"3px solid #e0e0e0",borderTop:"3px solid #bbb",borderRadius:"50%",marginRight:13,display:"inline-block",animation:"spin 0.8s linear infinite"}}),i.jsx("span",{children:t.message}),i.jsx("style",{children:"@keyframes spin { 100% { transform: rotate(360deg); } }"})]})]})}const y0="/assets/avatar-BAjli7RW.png",nl="/assets/vip1-XUMszZ5i.png",Ki="/assets/vip2-aKuU-F_0.png",rl="/assets/vip3-f99M10x_.png",il="/assets/vip4-BWc3wkmr.png",Je="data:image/svg+xml;utf8,"+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="100%" height="100%" fill="#f6f7fb"/><rect x="20" y="20" width="360" height="360" rx="36" fill="#fff" stroke="#eee" stroke-width="6"/></svg>');function $h({size:e=36,color:t="#bbb",style:n={}}){return i.jsx("div",{style:{border:"3px solid #ececec",borderTop:`3px solid ${t}`,borderRadius:"50%",width:e,height:e,animation:"spin 0.9s linear infinite",...n}})}function Pd({color:e="#1fb6fc"}){return i.jsxs("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"center",gap:"6px",height:"50px"},children:[i.jsx("style",{children:`
        @keyframes jump {
          0%, 100% { height: 8px; }
          50% { height: 28px; }
        }
        .jumping-bar {
          width: 5px;
          border-radius: 3px;
          animation: jump 0.6s ease-in-out infinite;
        }
        .bar1 { animation-delay: 0s; }
        .bar2 { animation-delay: 0.2s; }
        .bar3 { animation-delay: 0.4s; }
      `}),i.jsx("div",{className:"jumping-bar bar1",style:{background:e}}),i.jsx("div",{className:"jumping-bar bar2",style:{background:e}}),i.jsx("div",{className:"jumping-bar bar3",style:{background:e}})]})}function Rd({show:e,children:t}){return e?i.jsxs("div",{style:{position:"fixed",zIndex:11e3,top:0,left:0,width:"100vw",height:"100vh",background:"rgba(255,255,255,0.7)",display:"flex",justifyContent:"center",alignItems:"center",pointerEvents:"all"},children:[t,i.jsx("style",{children:"@keyframes spin { 100% { transform: rotate(360deg); } }"})]}):null}function jh(e,t=2500){return new Promise(n=>{if(typeof window>"u")return n(!1);const r=new Image;let a=!1;const o=s=>{a||(a=!0,r.onload=r.onerror=null,n(s))};r.onload=()=>o(!0),r.onerror=()=>o(!1),r.src=e,setTimeout(()=>o(!1),t)})}async function kh(e,t=2500){const n=e.map(a=>jh(a,t).then(o=>o?a:null));return(await Promise.all(n)).filter(Boolean)}function Ah({show:e,message:t}){return e?i.jsx("div",{style:{position:"fixed",left:"50%",top:"18%",transform:"translateX(-50%)",background:"#eee",color:"#333",borderRadius:10,padding:"10px 22px",fontWeight:600,boxShadow:"0 6px 22px rgba(0,0,0,0.18)",zIndex:2e3},children:t}):null}const Sh=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0},Nh={1:{taskLimit:40},2:{taskLimit:45},3:{taskLimit:50},4:{taskLimit:55}},Za="#1fb6fc";function Md(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[n],e[n]=r}return e}function Ch(e=100,t=200){const n="/assets/images/products/",r=[];for(let a=e;a<=t;a++)r.push(`${n}product1(${a}).png`);return r}const Eh=()=>{var dl;const[e,t]=g.useState(()=>{try{const U=JSON.parse(localStorage.getItem("productGridCache")||"null");if(Array.isArray(U)&&U.length){const T=U.slice(0,9);for(;T.length<9;)T.push(Je);return T}}catch{}const M="/assets/images/products/";return Array.from({length:9},(U,T)=>`${M}product1(${100+T}).png`)}),[n,r]=g.useState([]),[a,o]=g.useState([]),[s,l]=g.useState(null),[d,c]=g.useState(!1),[h,u]=g.useState(!1),[m,w]=g.useState(!1),[y,b]=g.useState(""),[j,f]=g.useState(!1),[p,x]=g.useState({show:!1,message:""}),[$,A]=g.useState(!1),[E,N]=g.useState(!1),v=ie(),{addTaskRecord:I,submitTaskRecord:L,hasPendingTask:_,hasPendingComboTask:se,records:ge,fetchTaskRecords:le,setRecords:yt}=v0(),{balance:k,setBalance:z,commissionToday:S,setCommissionToday:O,username:B,vipLevel:G,refreshProfile:H,userProfile:V}=ha(),{currency:ke}=ma(),Oe=g.useRef(e);g.useEffect(()=>{Oe.current=e},[e]);const it=g.useRef(0),[bt,Xn]=g.useState({username:B||"",balance:k??0,commissionToday:S??0}),gn=async()=>{try{const M=localStorage.getItem("x-auth-token")||localStorage.getItem("authToken")||localStorage.getItem("token")||localStorage.getItem("X-Auth-Token")||null;if(!M)return null;const U=await fetch("https://dept-admin.onrender.com/api/user-profile",{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${M}`,"x-auth-token":M},credentials:"include"});if(!U.ok)return null;const T=await U.json(),F=T&&(T.data||T.user||T);if(!F)return null;const R={username:F.username||F.name||B||"",balance:F.balance??F.walletBalance??k??0,commissionToday:F.commissionToday??F.commission??S??0};return Xn(R),typeof z=="function"&&R.balance!==void 0&&z(Q=>Number(R.balance)||Number(Q)||0),typeof O=="function"&&R.commissionToday!==void 0&&O(Q=>Number(R.commissionToday)||Number(Q)||0),F}catch{return null}};g.useEffect(()=>{Xn({username:B||V&&V.username||"",balance:k??(V&&V.balance||0),commissionToday:S??(V&&(V.commissionToday??V.commission)||0)})},[B,k,S,V]),g.useEffect(()=>{(async()=>{try{const T=await H();T&&typeof T=="object"?Xn({username:T.username||T.name||B||"",balance:T.balance??T.walletBalance??k??0,commissionToday:T.commissionToday??T.commission??S??0}):await gn()}catch{await gn()}})(),typeof le=="function"&&le().catch(()=>{});const M=()=>{(async()=>{try{const T=await H();T&&typeof T=="object"?Xn({username:T.username||T.name||B||"",balance:T.balance??T.walletBalance??k??0,commissionToday:T.commissionToday??T.commission??S??0}):await gn(),typeof le=="function"&&await le()}catch{await gn(),typeof le=="function"&&le().catch(()=>{})}})()};window.addEventListener("auth:login",M);const U=()=>{(async()=>{try{const T=await H();T&&typeof T=="object"?Xn({username:T.username||T.name||B||"",balance:T.balance??T.walletBalance??k??0,commissionToday:T.commissionToday??T.commission??S??0}):await gn()}catch{await gn()}})()};return window.addEventListener("profile:refresh",U),()=>{window.removeEventListener("auth:login",M),window.removeEventListener("profile:refresh",U)}},[]),g.useEffect(()=>{let M=!1;async function U(){try{const T=Ch(100,200);if(M)return;const F=Md([...T]);o(F),r(F);try{localStorage.setItem("productGridCache",JSON.stringify(F))}catch{}}catch(T){console.warn("Product pool load failed:",T)}}return U(),()=>{M=!0}},[]);const al=async(M=9)=>{const U=++it.current,T=a.length?a:n;r(T);const F=T.slice(0,Math.min(T.length,200)),R=await kh(F,3e3);let Ae=Md([...R]).slice(0,M);if(Ae.length<M){const Jt=[];for(let ya=0;ya<M-Ae.length;ya++)R.length>0?Jt.push(R[ya%R.length]):Jt.push(Je);Ae=Ae.concat(Jt)}U===it.current&&(Sh(Ae,Oe.current)||t(Ae))};g.useEffect(()=>{al(9);const M=setInterval(()=>{al(9)},7e3);return()=>clearInterval(M)},[a]),g.useEffect(()=>{if(!Array.isArray(e)||e.length!==9){const M=Array.isArray(e)?e.slice(0,9):[];for(;M.length<9;)M.push(Je);t(M)}},[]);function k0(){if(!ge||!V)return 0;const M=V.currentSet??1;let U=new Set,T=0;return ge.forEach(F=>{F.status==="Completed"&&(F.set===M||F.set===void 0)&&(F.isCombo?F.taskCode&&!U.has(F.taskCode)&&(T+=1,U.add(F.taskCode)):T+=1)}),T}const xn=V&&V.maxTasks||((dl=Nh[Number(G)])==null?void 0:dl.taskLimit)||40,Zn=k0(),A0=xn>0?Math.min(100,Math.max(0,Zn/xn*100)):0,Vt=(M,U=1600)=>{x({show:!0,message:M}),setTimeout(()=>x({show:!1,message:""}),U)},S0=async()=>{var U,T;if(_()||se()){Vt("Please submit the previous rating before you proceed.");return}if(Zn>=xn){Vt("Task set complete. Please contact customer service for reset.");return}N(!0),u(!0);const M=Oe.current&&Oe.current.length&&Oe.current[Math.floor(Oe.current.length/2)]||Je;try{const F=await I({image:M});if(N(!1),u(!1),F&&F.isCombo){Vt("Please submit the previous rating before you proceed.",1800),setTimeout(()=>v("/deposit"),1800);return}if(F&&F.task){const R=F.task;(U=R.product)!=null&&U.image||(R.product=R.product||{},R.product.image=M),l(R),c(!0),b(""),typeof((T=R.product)==null?void 0:T.price)=="number"&&z(Q=>Number(Q)-Number(R.product.price)),(async()=>{try{await H()}catch{}try{typeof le=="function"&&await le()}catch{}try{window.dispatchEvent(new Event("profile:refresh"))}catch{}try{window.dispatchEvent(new Event("balance:changed"))}catch{}})()}else Vt("Failed to start task. Please try again later.")}catch(F){N(!1),u(!1),Vt("API error: "+(F.message||F))}},N0=async()=>{var M,U;if(s){b("submitting");try{const T=await L(s.taskCode);if(T&&T.success){if(b("submitted"),T.task){const F=Number((M=T.task.product)==null?void 0:M.price)||0,R=Number((U=T.task.product)==null?void 0:U.commission)||0;O(Q=>R+(Number(Q)||0)),z(Q=>Number(Q)+F+R),yt(Q=>Q.map(Ae=>Ae.taskCode===T.task.taskCode?{...Ae,...T.task}:Ae))}(async()=>{try{await H()}catch{}try{typeof le=="function"&&await le()}catch{}try{window.dispatchEvent(new Event("profile:refresh"))}catch{}try{window.dispatchEvent(new Event("balance:changed"))}catch{}})(),setTimeout(()=>{c(!1),l(null),b(""),f(!0),setTimeout(()=>f(!1),250)},250)}else b(""),Vt(T&&T.message?T.message:"Failed to submit task")}catch(T){b(""),Vt("API error: "+(T.message||T))}}},xa=(M,U)=>{const T=M.currentTarget;T.onerror=null;const F=Oe.current&&Oe.current.length?Oe.current:n;let R=Je;if(F&&F.length)for(let Q=0;Q<F.length;Q++){const Ae=(U+Q)%F.length,Jt=F[Ae];if(Jt&&Jt!==T.src){R=Jt;break}}T.src=R},[Kt,Yt]=g.useState(0),wa=g.useRef(0),qt=g.useRef(null);g.useEffect(()=>{e.length&&Yt(Math.floor(e.length/2))},[e.length]),g.useEffect(()=>{if(e.length)return qt.current=setInterval(()=>{wa.current+=1,Yt(M=>(M+1)%e.length)},4e3),()=>clearInterval(qt.current)},[e.length]);const ol=()=>{qt.current&&clearInterval(qt.current)},sl=()=>{qt.current&&clearInterval(qt.current),qt.current=setInterval(()=>{wa.current+=1,Yt(M=>(M+1)%e.length)},4e3)},C0=()=>{if(!e.length)return null;const M=e.length,U=wa.current%2===0,T=(Kt-1+M)%M,F=(Kt+1)%M;return i.jsx("div",{className:"tasks-carousel-wrap",onMouseEnter:ol,onMouseLeave:sl,onTouchStart:ol,onTouchEnd:sl,children:i.jsxs("div",{className:"tasks-carousel","aria-roledescription":"carousel","aria-label":"Product carousel",children:[i.jsx("div",{className:`carousel-item side ${U?"left-large":""}`,onClick:()=>Yt(T),role:"button",tabIndex:0,onKeyDown:R=>{(R.key==="Enter"||R.key===" ")&&Yt(T)},"aria-label":`Show product ${T+1}`,children:i.jsx("div",{className:"carousel-card-inner",children:i.jsx("img",{src:e[T]||Je,alt:`product-${T}`,onError:R=>xa(R,T)})})},`left-${T}`),i.jsx("div",{className:"carousel-item center",onClick:()=>{},"aria-label":`Current product ${Kt+1}`,children:i.jsx("div",{className:"carousel-card-inner",children:i.jsx("img",{src:e[Kt]||Je,alt:`product-${Kt}`,onError:R=>xa(R,Kt)})})},`center-${Kt}`),i.jsx("div",{className:`carousel-item side ${U?"":"right-large"}`,onClick:()=>Yt(F),role:"button",tabIndex:0,onKeyDown:R=>{(R.key==="Enter"||R.key===" ")&&Yt(F)},"aria-label":`Show product ${F+1}`,children:i.jsx("div",{className:"carousel-card-inner",children:i.jsx("img",{src:e[F]||Je,alt:`product-${F}`,onError:R=>xa(R,F)})})},`right-${F}`)]})})},va=(()=>{const M=G??(V==null?void 0:V.vipLevel);if(M==null)return{level:null,badge:null};let U=null;if(typeof M=="number")U=M;else if(typeof M=="string"){const Q=M.match(/\d+/);U=Q?Number(Q[0]):NaN}else U=Number(M);if(!Number.isFinite(U))return{level:null,badge:null};const T=Math.max(1,Math.min(4,Math.floor(U))),R={1:nl,2:Ki,3:rl,4:il}[T]||null;return{level:T,badge:R}})();function E0(){if(!s)return null;const M=s.product||{},U=(()=>{var Ae;const R=M.price!==void 0&&M.price!==null&&M.price!==""?M.price:((Ae=s==null?void 0:s.product)==null?void 0:Ae.price)??(s==null?void 0:s.totalAmount)??"";if(R===""||R===null||R===void 0)return"";const Q=Number(R);return isNaN(Q)?String(R):Q.toFixed(2)})(),T=(()=>{const R=M.commission??"";if(R===""||R===null||R===void 0)return"";const Q=Number(R);return isNaN(Q)?String(R):Q.toFixed(2)})(),F=(R,Q=60)=>R?R.length>Q?R.substring(0,Q)+"...":R:"";return i.jsx("div",{className:"fixed inset-0 z-50",style:{display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(2, 10, 29, 0.78)",padding:16},children:i.jsxs("div",{style:{width:"100%",maxWidth:420,borderRadius:18,background:"linear-gradient(145deg, #0b2852 0%, #071b3b 58%, #111d50 100%)",padding:0,boxShadow:"0 20px 60px rgba(0,0,0,0.48)",border:"1px solid rgba(0, 200, 240, 0.55)",overflow:"hidden"},children:[i.jsxs("div",{style:{padding:"16px 18px 8px 18px",color:"#e4f1ff",fontSize:28,fontWeight:700,letterSpacing:-.5},children:[Zn," / ",xn]}),i.jsx("div",{style:{padding:"8px 18px 14px 18px"},children:i.jsx("img",{src:M.image||Je,alt:"product",style:{width:"100%",height:200,borderRadius:12,objectFit:"cover",border:"2px solid #00c8f0",display:"block"},onError:R=>{R.currentTarget.onerror=null,R.currentTarget.src=Je}})}),i.jsxs("div",{style:{padding:"0 18px 14px 18px"},children:[i.jsxs("div",{style:{fontSize:14,fontWeight:600,color:"#e4f1ff",lineHeight:1.3,marginBottom:8},children:['"',F(M.name,65),'"']}),i.jsx("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:10},children:i.jsxs("div",{style:{display:"flex",alignItems:"center",gap:5,background:"rgba(20, 55, 105, 0.9)",border:"1px solid rgba(0,200,240,0.28)",padding:"5px 10px",borderRadius:18},children:[i.jsx("span",{style:{color:"#e4f1ff",fontSize:13,fontWeight:500},children:"☆"}),i.jsx("span",{style:{color:"#e4f1ff",fontSize:13,fontWeight:600},children:"9.9"})]})}),i.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:6},children:[i.jsx("span",{style:{color:"#e4f1ff",fontSize:13,fontWeight:600},children:ke||"USD"}),i.jsx("span",{style:{color:"#e4f1ff",fontSize:24,fontWeight:800},children:U})]})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",borderTop:"1px solid rgba(0,200,240,0.28)",borderBottom:"1px solid rgba(0,200,240,0.28)"},children:[i.jsxs("div",{style:{padding:"14px 12px",textAlign:"center",borderRight:"1px solid rgba(0,200,240,0.22)"},children:[i.jsx("div",{style:{fontSize:11,fontWeight:700,color:"#e4f1ff",marginBottom:6,letterSpacing:.4},children:"TOTAL AMOUNT"}),i.jsx("div",{style:{fontSize:10,fontWeight:600,color:"#e4f1ff",marginBottom:4},children:ke||"USD"}),i.jsx("div",{style:{fontSize:18,fontWeight:800,color:"#e4f1ff"},children:U})]}),i.jsxs("div",{style:{padding:"14px 12px",textAlign:"center"},children:[i.jsx("div",{style:{fontSize:11,fontWeight:700,color:"#e4f1ff",marginBottom:6,letterSpacing:.4},children:"PROFIT"}),i.jsx("div",{style:{fontSize:10,fontWeight:600,color:"#e4f1ff",marginBottom:4},children:ke||"USD"}),i.jsx("div",{style:{fontSize:18,fontWeight:800,color:"#e4f1ff"},children:T})]})]}),i.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",borderBottom:"1px solid rgba(0,200,240,0.28)"},children:[i.jsxs("div",{style:{padding:"12px",borderRight:"1px solid rgba(0,200,240,0.22)"},children:[i.jsx("div",{style:{fontSize:12,fontWeight:600,color:"#e4f1ff",marginBottom:4},children:"Created"}),i.jsx("div",{style:{fontSize:11,fontWeight:700,color:"#e4f1ff"},children:Th(M.createdAt||s.createdAt)})]}),i.jsxs("div",{style:{padding:"12px"},children:[i.jsx("div",{style:{fontSize:12,fontWeight:600,color:"#e4f1ff",marginBottom:4},children:"Order Code"}),i.jsx("div",{style:{fontSize:11,fontWeight:700,color:"#e4f1ff",wordBreak:"break-all"},children:s.taskCode})]})]}),i.jsx("div",{style:{padding:"14px 18px"},children:i.jsx("button",{onClick:y===""?N0:void 0,disabled:y!=="",style:{width:"100%",background:y!==""?"#31547d":"linear-gradient(110deg, #00c8f0 0%, #087bda 55%, #7138e8 100%)",color:"#ffffff",border:0,padding:"14px 10px",borderRadius:50,fontWeight:800,fontSize:15,letterSpacing:.4,cursor:y!==""?"not-allowed":"pointer",transition:"all 0.2s ease",textTransform:"uppercase"},onMouseEnter:R=>{y===""&&(R.currentTarget.style.filter="brightness(1.08)")},onMouseLeave:R=>{y===""&&(R.currentTarget.style.filter="none")},children:y==="submitting"?"Submitting...":y==="submitted"?"Submitted!":"Press Here to Submit"})})]})})}const ll=M=>{const U=Number(M||0);return Number.isFinite(U)?U.toFixed(2):"0.00"};return i.jsxs("div",{className:"tasks-page",children:[i.jsxs("header",{className:"dashboard-header",style:{background:"linear-gradient(90deg, #00c8f0 0%, #087bda 55%, #7138e8 100%) bottom / 100% 2px no-repeat, #0b2d63",borderBottom:"0",boxSizing:"border-box"},children:[i.jsx("img",{src:pe,alt:"Instrument",className:"dashboard-logo",style:{filter:"brightness(0) invert(1)"}}),i.jsxs("div",{className:"dashboard-header-actions",children:[i.jsx("button",{type:"button",className:"dashboard-contact",onClick:()=>A(!0),style:{color:"#e4f1ff",background:"rgba(8, 38, 83, 0.45)",border:"1.5px solid #087bda",boxShadow:"inset 0 0 0 1px rgba(0,200,240,0.08)"},children:"Contact"}),i.jsxs("button",{type:"button",className:"dashboard-menu",onClick:()=>v("/profile"),"aria-label":"Open menu",children:[i.jsx("span",{style:{background:"#ffffff"}}),i.jsx("span",{style:{background:"#ffffff"}}),i.jsx("span",{style:{background:"#ffffff"}})]})]})]}),i.jsxs("div",{className:"tasks-content",children:[i.jsxs("section",{className:"tasks-hero",children:[i.jsxs("div",{className:"tasks-user-row",children:[i.jsxs("div",{className:"user-left",children:[i.jsx("img",{src:y0,alt:"Avatar",className:"avatar"}),i.jsxs("div",{className:"user-greeting",children:[i.jsx("small",{style:{color:"#ffffff"},children:"Hello,"}),i.jsx("div",{className:"user-name",style:{color:"#ffffff"},children:bt.username||"Champ"})]})]}),i.jsxs("div",{className:"user-vip",children:[i.jsxs("span",{style:{color:"#ffffff"},children:["VIP",va.level||1]}),i.jsx("div",{className:"vip-badge",children:va.badge?i.jsx("img",{src:va.badge,alt:"VIP"}):i.jsx("img",{src:Ki,alt:"VIP"})})]})]}),i.jsxs("div",{className:"tasks-progress",style:{color:"#ffffff"},children:[i.jsxs("div",{children:[Zn," / ",xn]}),i.jsx("div",{className:"tasks-progress-track","aria-label":`Task progress: ${Zn} of ${xn} completed`,children:i.jsx("div",{className:"tasks-progress-fill",style:{width:`${A0}%`}})})]}),C0(),i.jsx("div",{className:"tasks-product-title",style:{color:"#ffffff"},children:"Complete assigned tasks and earn commissions."}),E&&i.jsx("div",{style:{display:"flex",justifyContent:"center",marginBottom:16},children:i.jsx(Pd,{color:Za})}),i.jsx("div",{className:"tasks-cta-wrap",children:i.jsx("button",{type:"button",className:"tasks-cta",onClick:S0,disabled:h,children:"PRESS HERE TO GET STARTED"})})]}),i.jsxs("section",{className:"tasks-panel",children:[i.jsx("div",{className:"tasks-panel-header",style:{color:"#ffffff"},children:"TODAY'S COMMISSION"}),i.jsxs("div",{className:"tasks-panel-main",style:{color:"#ffffff"},children:[i.jsx("span",{className:"currency",style:{color:"#ffffff"},children:ke||"USD"}),i.jsx("span",{children:ll(bt.commissionToday)})]}),i.jsx("p",{className:"tasks-panel-note",style:{color:"#cccccc"},children:"The displayed amount reflects today's earned commissions."}),i.jsxs("div",{className:"tasks-panel-grid",children:[i.jsxs("div",{className:"task-info-box",style:{borderColor:"rgba(255,255,255,0.2)",color:"#ffffff"},children:[i.jsx("div",{className:"label",style:{color:"#ffffff"},children:"Balance"}),i.jsxs("div",{className:"value",children:[i.jsx("span",{className:"currency",style:{color:"#ffffff"},children:ke||"USD"}),i.jsx("strong",{style:{color:"#ffffff"},children:ll(bt.balance)})]}),i.jsx("div",{className:"muted",style:{color:"#cccccc"},children:"The total balance reflects both the deposited amount and earned commissions."})]}),i.jsxs("div",{className:"task-info-box",style:{borderColor:"rgba(255,255,255,0.2)",color:"#ffffff"},children:[i.jsx("div",{className:"label",style:{color:"#ffffff"},children:"Hold Amount"}),i.jsxs("div",{className:"value",children:[i.jsx("span",{className:"currency",style:{color:"#ffffff"},children:ke||"USD"}),i.jsx("strong",{style:{color:"#ffffff"},children:"0.00"})]}),i.jsx("div",{className:"muted",style:{color:"#cccccc"},children:"Contact Support for inquiries."})]})]}),i.jsxs("div",{className:"tasks-panel-bottom",style:{color:"#ffffff",borderTopColor:"rgba(255,255,255,0.2)"},children:[i.jsx("div",{style:{color:"#ffffff"},children:"Fusion Campaign Reward"}),i.jsxs("div",{className:"reward-value",children:[i.jsx("span",{className:"currency",style:{color:"#ffffff"},children:ke||"USD"}),i.jsx("strong",{style:{color:"#ffffff"},children:"0.00"})]})]})]}),i.jsxs("div",{className:"tasks-notice",style:{borderColor:"rgba(255,255,255,0.2)"},children:[i.jsx("div",{className:"tasks-notice-title",style:{color:"#ffffff"},children:"Important Notice"}),i.jsxs("div",{className:"tasks-notice-body",style:{color:"#cccccc"},children:["Online Support Hours 10:00 AM - 10:00 PM",i.jsx("br",{}),"Please contact online support for your assistance"]})]})]}),d&&E0(),E&&i.jsx(Rd,{show:!0,children:i.jsx(Pd,{color:Za})}),i.jsx(Rd,{show:j,children:i.jsx($h,{size:54,color:Za})}),i.jsx(Ah,{show:p.show,message:p.message}),i.jsxs("nav",{className:"bottom-navigation",children:[i.jsxs("button",{className:"bottom-item",type:"button",onClick:()=>v("/dashboard"),children:[i.jsx("img",{src:Zs,alt:"Home"}),i.jsx("span",{children:"Home"})]}),i.jsxs("button",{className:"bottom-item starting",type:"button",onClick:()=>v("/tasks"),children:[i.jsx("img",{src:el,alt:"Starting"}),i.jsx("span",{children:"Starting"})]}),i.jsxs("button",{className:"bottom-item",type:"button",onClick:()=>v("/records"),children:[i.jsx("img",{src:tl,alt:"Records"}),i.jsx("span",{children:"Records"})]})]}),i.jsx(me,{open:$,onClose:()=>A(!1)})]})};function Th(e){if(!e)return"";try{const t=typeof e=="string"||typeof e=="number"?new Date(e):e;return isNaN(t.getTime())?"":t.toLocaleString(void 0,{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return""}}const Ih="/assets/vip5-BSNigyet.png",Lh=`
  html, body, #root {
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  .vip-page {
    min-height: 100vh;
    overflow-x: hidden;
    background:
      radial-gradient(circle at 50% 35%, rgba(0, 102, 190, 0.13), transparent 38%),
      linear-gradient(180deg, #03152d 0%, #021b38 48%, #031a34 100%);
    color: #f4f8ff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  .vip-page button {
    font-family: inherit;
  }

  .vip-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid rgba(0, 191, 243, 0.32);
    background:
      linear-gradient(
        110deg,
        rgba(4, 25, 52, 0.99) 0%,
        rgba(3, 19, 42, 0.99) 55%,
        rgba(12, 20, 58, 0.99) 100%
      );
  }

  .vip-logo {
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
    filter: brightness(0) invert(1);
  }

  .vip-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .vip-contact {
    min-width: clamp(112px, 14vw, 178px);
    height: clamp(40px, 5vw, 62px);
    padding: 0 clamp(16px, 2vw, 26px);
    border: 1px solid #00bff3;
    border-radius: 40px;
    color: #ffffff;
    background: transparent;
    font-size: clamp(0.85rem, 1.65vw, 1.65rem);
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
  }

  .vip-contact:hover {
    background:
      linear-gradient(
        110deg,
        rgba(8, 54, 98, 0.98),
        rgba(31, 35, 91, 0.98)
      );
  }

  .vip-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: clamp(34px, 5vw, 64px);
    height: clamp(26px, 3.5vw, 44px);
    padding: 4px 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .vip-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    background: linear-gradient(
      90deg,
      #00bff3 0%,
      #168fe4 58%,
      #7048df 100%
    );
  }

  .vip-content {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
    padding-top: 0;
    padding-bottom: 80px;
  }

  .vip-title-row {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60px;
    margin: 18px 0 16px;
  }

  .vip-back {
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .vip-back img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    display: block;
    filter: brightness(0) invert(1);
  }

  .vip-title {
    margin: 0;
    font-size: clamp(2rem, 3vw, 2.8rem);
    font-weight: 500;
    letter-spacing: -0.05em;
    text-align: center;
    color: #f4f8ff;
    line-height: 1;
  }

  .vip-section {
    padding-bottom: 16px;
    margin-bottom: 14px;
    border-bottom: 1px solid rgba(0, 191, 243, 0.32);
  }

  .vip-section:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .vip-row {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 14px;
    width: 100%;
    margin-bottom: 8px;
  }

  .vip-row-main {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    flex: 1;
    min-width: 0;
  }

  .vip-badge {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    flex-shrink: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
  }

  .vip-badge img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }

  .vip-info {
    display: flex;
    flex-direction: column;
    gap: 1px;
    min-width: 0;
  }

  .vip-label {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: -0.05em;
    color: #f4f8ff;
    line-height: 1.1;
  }

  .vip-amount {
    font-size: 0.9rem;
    font-weight: 400;
    letter-spacing: -0.02em;
    color: rgba(244, 248, 255, 0.88);
    line-height: 1.15;
  }

  .vip-current-pill {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 90px;
    height: 32px;
    padding: 0 16px;
    border-radius: 999px;
    background: rgba(0, 191, 243, 0.16);
    border: 1px solid rgba(0, 191, 243, 0.45);
    color: #00bff3;
    font-size: 0.85rem;
    font-weight: 500;
    white-space: nowrap;
  }

  .vip-features {
    margin-left: 84px;
    margin-top: 4px;
  }

  .vip-features ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .vip-features li {
    position: relative;
    padding-left: 12px;
    margin-bottom: 4px;
    font-size: 0.9rem;
    line-height: 1.35;
    letter-spacing: -0.02em;
    color: rgba(244, 248, 255, 0.88);
    font-weight: 400;
  }

  .vip-features li::before {
    content: "●";
    position: absolute;
    left: 0;
    color: #00bff3;
    font-size: 0.85em;
  }

  @media (max-width: 720px) {
    .vip-header {
      min-height: 72px;
      padding: 12px 14px;
    }

    .vip-logo {
      width: 180px;
      height: 34px;
    }

    .vip-header-actions {
      gap: 9px;
    }

    .vip-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .vip-menu {
      width: 28px;
      height: 24px;
    }

    .vip-menu span {
      height: 2px;
    }

    .vip-content {
      width: calc(100% - 36px);
      margin: 0 auto;
    }

    .vip-title-row {
      min-height: 46px;
      margin: 10px 0 14px;
    }

    .vip-back {
      width: 32px;
      height: 32px;
    }

    .vip-back img {
      width: 20px;
      height: 20px;
    }

    .vip-title {
      font-size: 1.8rem;
    }

    .vip-row {
      gap: 10px;
      margin-bottom: 6px;
    }

    .vip-row-main {
      gap: 10px;
    }

    .vip-badge {
      width: 56px;
      height: 56px;
    }

    .vip-label {
      font-size: 1.15rem;
    }

    .vip-amount {
      font-size: 0.8rem;
    }

    .vip-current-pill {
      min-width: 78px;
      height: 28px;
      font-size: 0.75rem;
      padding: 0 12px;
    }

    .vip-features {
      margin-left: 66px;
      margin-top: 3px;
    }

    .vip-features li {
      font-size: 0.8rem;
      margin-bottom: 3px;
      padding-left: 10px;
    }
  }
`;function Ph(){const e=ie(),[t,n]=g.useState(!1),r=[{level:1,amount:"USD 100.00–499.00",badge:nl,current:!0,features:["Suitable for most data capture scenarios involving light to medium usage","Profit of 0.5% per product data","40 product data per set","Up to 80 data submissions per day","Can complete 2 sets of data submissions per day","No access to other Premium features"]},{level:2,amount:"USD 500.00–1,599.00",badge:Ki,current:!1,features:["Premium user have limited access to all features of the platform","Deposit according to our events","Profit of 1.0% per product data","45 product data per set","Up to 90 product data per day","Can complete 2 sets of data submissions per day","Better profit and permission","Full access to all other premium features"]},{level:3,amount:"USD 1,600.00–5,499.00",badge:rl,current:!1,features:["Premium user have limited access to all features of the platform","Deposit according to our events","Profit of 1.5% per product data","50 product data per set","Up to 100 product data per day","Can complete 2 sets of data submissions per day","Better profit and permission","Full access to all other premium features"]},{level:4,amount:"USD 5,500.00–9,999.00",badge:il,current:!1,features:["Premium user have limited access to all features of the platform","Deposit according to our events","Profit of 2.0% per product data","55 product data per set","Can complete 2 sets of product submissions per day","Better profit and permission","Up to 110 product submissions per day","Full access to all other premium features"]},{level:5,amount:"USD 10,000.00 OR ABOVE",badge:Ih,current:!1,features:["Supreme user gets unlimited access to all features of the platform","Deposits according to our events","Profit of 2.5% per product data","60 product data per set","Up to 120 product data per day","Can complete 2 set of data submissions per day","Better profits and permissions","Full access to all other premium features"]}];return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:Lh}),i.jsxs("div",{className:"vip-page",children:[i.jsxs("header",{className:"vip-header",children:[i.jsx("img",{src:pe,alt:"Stacks",className:"vip-logo"}),i.jsxs("div",{className:"vip-header-actions",children:[i.jsx("button",{type:"button",className:"vip-contact",onClick:()=>n(!0),children:"Contact"}),i.jsxs("button",{type:"button",className:"vip-menu",onClick:()=>e("/profile"),"aria-label":"Open profile menu",children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]})]})]}),i.jsxs("main",{className:"vip-content",children:[i.jsxs("div",{className:"vip-title-row",children:[i.jsx("button",{type:"button",className:"vip-back",onClick:()=>e(-1),"aria-label":"Go back",children:i.jsx("img",{src:Ie,alt:"Back"})}),i.jsx("h1",{className:"vip-title",children:"Vip Levels"})]}),r.map(a=>i.jsxs("section",{className:"vip-section",children:[i.jsxs("div",{className:"vip-row",children:[i.jsxs("div",{className:"vip-row-main",children:[i.jsx("div",{className:"vip-badge",children:i.jsx("img",{src:a.badge,alt:`VIP ${a.level}`})}),i.jsxs("div",{className:"vip-info",children:[i.jsxs("div",{className:"vip-label",children:["VIP",a.level]}),i.jsx("div",{className:"vip-amount",children:a.amount})]})]}),a.current&&i.jsx("div",{className:"vip-current-pill",children:"Current"})]}),i.jsx("div",{className:"vip-features",children:i.jsx("ul",{children:a.features.map((o,s)=>i.jsx("li",{children:o},`${a.level}-${s}`))})})]},a.level))]}),i.jsx(me,{open:t,onClose:()=>n(!1)})]})]})}const Rh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAASKADAAQAAAABAAAASAAAAACQMUbvAAAHlUlEQVR4Ae2bbYhUVRiAz3vu7M76MR9pSC6YS25rH5I/JAp/lPYjI7PdyRUL/FWQUUtoBkGabWGBgSQSEVbQjz4QbGdNDD+I1R+FkkJJGYaGJihIyc7MrruzM/ec3vfeubP33A/vjAu5d/aeHzPnvPc97znnuee852POMBaFiEBEICIQEZi0BKDWmq2RUus/NLxIFPVFUmi315pvMutxVv6j1JU6AgDSr56BgHj/4GYp4XkmZRsa4X6GQiyXDPjx2Tyx4p9OKDjb4QtI21dYI4TYjWDSzkwNmQYYns2Tc52QPHsE78vtQDh7pgwceuNSzvhXFA45X74LEMGRwDZiBt/e5TTSMGkpHpaOdisQKsOKeo4iNwAA5BjAAAh5moF2rRGgSKavx7bea2+LBmxFOZM+bMliVoS+Kz5HhQMggMNnojO5nnR83T09DFng2SFsT3mnvdqCxQiYG5AxWwmHQ0Y4Gp/+SLmz6Ue7kakUr/ogYyp3tJx6zlSGQzgMQLQIxLHYpvBBn2MNK0U+xRIGIFohY7urvclggA55irHwbK4BhbYPzqfGbOUUTsG0Achzb9UgU/lE36k6rCZqrQHzR4ACXmoEKAIUQCDgcdSDAgApezFVV7bHsoVlqqyxUoLJ9qAW+QKSUu/RGesJMtDoz6MhFvCGI0ARoAACAY8NHwQ8dk7qZUUVILaBM/mrImywhGCwWEr1wIxY2JtpAhKlYbuQ4gSnnEkcdcobKY2zNMOJSAngYBH5IAWPOxEBcjNRJBEgBYc7EQFyM1EkESAFhzsRAXIzUSQRIAWHOxEBcjNRJBEgBYc74Xvc4Vad/JJeKfm2bGGpANGFdwiWMAat+INoq1FzgMt4s+AyXjw4xSXv35JJ/LStfyiwUTcFaPrB4bnFkdIqvJplFh5YjKkAWMH4tKb915+YcaXGLDWptQ3Ilr8HC6++k81vQghzxm9Y2K5aSNmBxjpQskxnYhPqXgUG2aAC6gbU9F3uwZGR0mGsBN48s1UgqCR8TtqYdzvaeLz0dOrnGrIEqmjZwuqLg7kP0fi8QGVFQc6RTBo3VhSxI1G3DyrrbKcJx2Gp1iSCNWzUqu+jRxedeF/+PSH1vfXD8THqIa67B+GYfsDDTn2iCdogOFp//hvsAWt9CwY4g/4Gj2sk+h4K0Io9eDHW/z4zXdtn/YAATmMhS2sz76NFNiYQcFht84QDUEQ/91ETh0+KnalzXg4gvi/XXhLyJfSfPdiOuLMaQopVKDtqyeseYkh0IwM2aBmo+xvzxjS2oe58lQzkcyQTb7ryA5yINzcvFJn06wTH9bwioGekQ7p4pfCEUw/Bv0ZlWHLjuh39vKNLfcAS0rcG2nK/A7NbNYvRbIUO+U8Pn7N3QUtq3bknoWhvQ1C8/XsZPz+a+xL1uhVdYJfmp1MdF5bDaP1DDC1VpunditEaE9dr1PNSo6ncBQd7wYJ40hdO8/78PeWy3Iz5YvjSt5cyM3+xbBNQhLTufDE/D4fbQ5acyjDKYuyDuodY1cj/HOnFRSA6Z1zn2AL6HBwqa/16Di1JSiVxHPOtw6HzbFnqP6Sz6j1Myks2cLgpvY/KojJDA4hWyMYi0M4HHfLoymkXbaJqlOBgzzmCglRVyOSsIVlwXRYjG+Tcx/UoJudQmaEBRNsHtQGM0WzllFHaGw49gWszIfEbxZzByxaVGRpAOGXj3soWcJ3jNVv5wgF2XdN492AGPGdgwxbatJWArogtCQ0gY+Npq725CLQJMDrjwNAd5TI7iFHbsMIUweHaU+XOhDJTq7lJjRaW9gCt4QFk7cqr9bdWyFUBGy3SIk/OGpeYMY3D6iA4pqbDJpYZHkDOVnukQRMXPMRM11nP/b/LZq9nN5Sh5w4PIOM8x94c91FLuTON/x5kn9u1zLhceeZsvi8YktMmXAkPoOqms9Jk2nh6hK1dqRfxL5ZfuB8RpNxXbvm4BJ2yw6a8HBpA6EBPjTcFY7grp42nIsNEL/4BZ2tX8gVvSKy7af+QA4JpwbDl2OnjP1lPhgYQHZM6YdCu3Cmj9I0gAR4neuXxssUZ34cvhrF4X75jjImz9ozA2adcal/bZbc0zhnouvgWu85t1XqYW42Ffqtp2iq8m83vwm3GK5QH/dNu3Mm7ThFbDozML46NncVeaTv+gKtvZ5JzDUC47wDenxvElVGyWnhYIuZm9VG//Rg1oyU70ib5WMxrYWns6Iv5YwhnfLOKeQD4GyKTNDer9L9xFHwcFiZKPbFhdGRBDVXktsRoZtoFXzh03OGAgyvGS3emE7vIRNUH3dWc6EVsJ212wxTtxiOLYzRUaq006VIe1FfPglDAmbaRzoLIljHEKEKB3sJfYwUcuuLlkA435cjVbJX6GXTkCoy/L55JbrZyKYAsIfmklmzhbh2cCydL49Z/60y+xaR4zLcmuPHExtV1aI+uZo/elXyOXI5l1xOQ9XAyf9NLNA/vPc6nb6Li1HP0TGKLHQ6ZCS0giwEdsAum38QPhxUL6JDJ5yAcXEK4Q+gBUZOsn57pmJROAt3N9JLAVewtO2i2shyyp5aXMKwynF3qurxAK+6wtjWqd0SgQQj8B9qdCCWlPzDhAAAAAElFTkSuQmCC",Mh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAASKADAAQAAAABAAAASAAAAACQMUbvAAAFE0lEQVR4Ae2cT2gVRxjA59t9Ly9R85JCNVTwYNSjnpqLLbSHUkttRQMiCHrzoHgQPBlBchT04MkWSi899FBKIxWsDQUtpPWgJ1HBqPGgKKgQ34sxidndr9+32d3ubHYz7+1u4ua9WXiZme+b/Xbm976ZffMvQuhrSQIQp0VE6ByZ2mYDbIzTt5rMRHw2u6/7AQBgtG4SoK1XsDLxbmoYHecoZeyJZm7xdA0M47v+ju7hh1/DnF/XABDDeTRXHxOIH/vKtgwBbm2pVD/1IRk+BPactofDMMhBXBYeGBcQ9zles/J5tXXILJgJQyjxH+6QKZD6HDDEDwaaP7O+1S8H7IPoiCOhevZ4TMZdQO7bKtJ/MxxrX/f10E0tGy2NTAlb2GFAwnuDjwd9UMvWPmPFNCAFQA1IA1IQUKi1B2lACgIKtfuaV+RpSt33J651OkQwhGnq5hwyVyrCfroTZnIw5ZrIBVD599qAZYszZHHgxXStT0znVbx0dmDk9WMQMFaB8umZvWuepLOycFfmPsgYqZ2wLHGDxjDf0KcvS2FyuxfFZhoqHJrFd3dKl2q7stjNBIg9B1GcpxGemaUQy3YviqrtiJ+6L9c/TPuMTIAWmlVB4QREcMO0hceDZJORrH3QgPQ8gPuA8CN10Y4kdxPQj2gfC8sBzIvkfRNhWeY4Op00Dj8pUHzg26JhplxOX9FAmBoQv63cDjn0EIbjDFbPhURBtPTb1Ge2EBIgA8Uv1mD17yBTThHqF7ejwAMhc1tC8aaiqZtY7Ks81nOaKk9emaMenPpnR2pAedWk6HY0IMU3pAFpQAoCCrX2IAUg9zXPK4v0CpYunsjmudqka7I+15mkK6C8i+ryeVK5uK70u0m6mIlFEhcQL7sal2p1ylT1c/Esf3Qi29e5oR1FKmmLlUDcRHW5llioCBzKV3OXoiniNjFekwYw6FetvpgAL0H76/RBH8Rr0oKWXdseETFwWXggAkC8Fs1r0kTvLI2l6m0IijcvnA2vyzMDaSzmLdiformUIeX2F6Pcaduzf6wKkABPTGEcTiprePvLw0gmCZCv89rfOKX5E3utv4brXk3OxuoKKJxZapWY31ZJg7WgiRWwUoUokgak+Bo0IA1IQUCh1h6kASkIKNTagzQgBQGFOvaHouKeFVd7S9sXaOV2B40Xb5dMcWJ+T8/NlShI4ZvYmqvTH1k2jhKcnQRkHYecZrkGRATmZua/pXmqXgkGpV25JFyeROE9CEX8eZEked6YCg8o7wo3a08DUhDTgDQgBQGFWnuQBqQgoFBrD9KAFAQUau1BGpCCgEKtPWi1AwKBz+LqkCSPy5tFVngPqnSVL9Oq3mupkpR25ZJweRKFB/T2q7XPSyZ8SRNl/xKCNxxymuXLg0S2uipmFL3Zw0/8os/7kRUIC+9BK8BgyUdoQEvi8XaYKfK0tTq1B/HJvkXk6CDJItl7END+pmg5eIdLqitpW0xDxuhk3wRNqG8OMoOYpJN+o5SOnpWgbMZ6gfYXQV6OgPkXHe94KckyJhbgwG46RdQRMvUrDvbuD6UbjmZ6ixGMf+hUzf+A6AhS5JRNqCCLHY6BLd5gGroldVS2ShvCxmRJ44ZTNzF+BJ0JHSr+fka421+pft84EjlnJkB8YNY0gM5lwQvZbFFScLcsjP3+P0tKU6pMfZD/QD4TysceyY35ZB8fXsvFrm+/ydCi1dd73KzYc7LAafK5OrsmEEPgP85RgkNX2hzmAAAAAElFTkSuQmCC",zh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAASKADAAQAAAABAAAASAAAAACQMUbvAAAFFUlEQVR4Ae3ay4scRRgA8Pp6ZmeJuzu9OcTVKAQElWBuuUgwYBA9aJbs7BIFD4kXD6KCf4AQH3cvEnIREgVFDeyuJqhL0HjyFCOCCD7wsb6IIMnMOJnNzkx/VrWppqafNd1V3dXQe6nqmu7qr35bXd3VXYRUf5VAJVAJVALGCoCxkUUENvtRd9f1bTxOiNO9q2Gf+fFRuBGxq5LiUgE1Vrt7B8T5jBC8zW09wKXmFD7SPjx/VYlGSCWlAXJxwLlIEBfG2gHky+YUeVgXUimAInG4lEYk44EScTQjWbx+E9NoHHAC8SLZ3xmQC/b5azsDv2UoMBYoBmdgAawAwEuBdmtAMvISS8B5fNRqrjMca619AhGDUArHJOOAbvmkd3u/P/wqcLciwHqOh8N7j24k4y6xrf7oeVkchuS07JeBwAkO5qWKLjfjgAhgcACmAgSdKa/xvoyzbL+iC8k4oB1Qe50A/DlmgFh3AN6prV47OlYubLhIGgZu44B6R2avNOrkwVRI7HJTjGTcIM07xfS59t3bQ/I5HY928zI3BRhaiE+OlufPjpULGyoHbmOBWHtNQCoEaPqDzr3bDr5BZ+X7aACruxfs534/AH2hE3jZopFyBwp9CATy6R0L9qKJSLkCheLwvmIoUm5AsTgGI+Vym5fCYUhIHvrjSvvcnV/gDm4mpjcW7R8aCIfUPwLA+aOINfFcPK8dKBoHBrShH/NAvDQJabn5fUakV71z8QzigbX1fw/yTTHVChSHY1nwhLPUfIw+2J0SA3LzMkgpHib3X8IpOvvfFzgfLYC61Qkr1waUhDNaaq5RHKTps6mQJrzcGM7lzfZ7FKHlh6AD8enB4sxlfznb1gIkg8ODyYTELjeJnhSLQ+d4Ky37aR6PP1V+F5sERwyGdn2orXdO0vQZsdzNZ3kEsMhTzghXaD3BnsNwlprHzgKMAue8WaAUKC0OD04LEq/cl9Kem4jDDlEGlBWHx58HkiyOMiBVOHkgTYKjBEg1jk6kSXFYLJnuYrpw3P9c1kcA9+5GNjk4fSX7VtKAzPcV09RjkE4cMcAsY9LOC2h3eh36MGr9NTwyd1GsVzafCigvHN6ILEi8jrTpxECxOCHfrdIG5j+uKKSJgIrC4VhJSHvm7cO/HIItvr+KVHqQLhqHNZbehWLnbpvtzosqUMQ6pIBMwOFBM6S99zRfoNu/8jKe0h52P8+rShOBTMJhjWYTz2+/a79Ls3v8CIDWhr8s63YskIk4ka8s3Fn53GtZQfzHRw7SpcNJmJX7Gy67HQo0u9G9tddzvvZWk3q1hS9B8X7WlIl9n0Pg7ZVW83jcK4ssYdXDDr7ex2NG4fzWfp/GueSP9ebcShsOO18oEF1qsmssGHrnsEhw8dLYPho2hJ4ThRP7sktFSLGDtHcCxC2+7M0r05wRcIJvAtllpWnM8TcrvAf598p5Oxbn/zeBWi8rsblyPUg8QnNeAkf7ZSU20Sgg03AYlDFAJuIYA2QqjhFAJuMUDmQ6TqFAZcApDKgsOIUAlQknd6Cy4eQKVEac3IDKisOA5Car9NNk48PufeyANH/0NSlbFxiclUsuQUlzTlXHyAEhTg+Go29UnZTVk2Yhgcrzy9ZVyFysLDgMMQLI+ltWeNL9yoQTCTRTJ2/StWc/T9r4pP3pF4LTeb0JTIpF9vfQrxrs4IUNnPmn33kAiTUnW1ncflbN+ilqqW3ccdVvlUAlUAlUApVApMB/kSxWe8bnyVUAAAAASUVORK5CYII=",zd="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAASKADAAQAAAABAAAASAAAAACQMUbvAAAHfUlEQVR4Ae1cb4hUVRS/587szuoysxvGhgum6LaSSH6IKPxQWpBR2TqlSOGnvhghoRn0R6MNLEmQJPoQ1scoBHPW/pGGqB+sJP2QhGGoZIHikLEz47rOn3dv59yZ9+be9970ZnbJ3Tf7Lqzv3nPPOfee37v3nHvvuw5jUYoQiBCIEIgQmLYIQLM9WydlbOTQ2FJRtJZKEbu9WbnpzMdZ5bfymp7vAUA26mcgQHxkdJuU8DyTcgEq4Y0UhZguGfCf5vDkqr+HoOC2oyFAsYOFdUKIvQhMr1uoLcsAY3N4aq4bJN8RwQ/kdiM4+2YMOPTGpey+JgqH3C/fAxCBI4FtQYGGo8utpG3KUjwgXXYbINSmFY0cg64AAMgxgKMg5BkGsX/aARTJrI1o6926LTFgqyrp3sM2LW5n6FnzOSY4AAI4fCKGUhuJp6G7p8qQJZ65jvZU9ujdFixOgHkBUtFKuBwyghPjsx+sDHWc0JXMpLzjg1Qod1lOI2cmg0NwKIBoEYhzcYGBD/oce1oZ9BlWUADRChntdkaTwgAd8gzDwtdcBQptH9y1Klq5iTOwrADy3Vu1SSif7Ds1p9VktbWhfARQwEuNAIoACkAgoDoaQQEAGXsxk1cOxDOFFSatvUqCyYEgixoCJKW1yWJsU5CCdq+PpljAG44AigAKQCCgWvkg4PHz0qoYrADxzZzJXwximxUEg2VSmgdmhIVuZhUgUR7TiZQncCrp5DE3vZ3KGKUZBiIjgQuLyAcZ8HgLEUBeTAxKBJABh7cQAeTFxKBEABlweAsRQF5MDEoEkAGHtxAB5MXEoEQAGXB4Cw2PO7ys058yLCXfkSksFyDW4B2CexmDfvwg2q96DnAZbxZcxosHp7nkI9vTyR92jFwPNGpCAM3+bmxucby8Gq9mVRsPbKbKANjBxKyOr2481n2lSZGm2BYclV1/jhZeejuT34og9NVvWGhXLaQcRGWDSFlhMbEVebPAIBPUQMsAdXyZu298vHwYO4E3z7QOBLWE9cSNsu+hjkfLT/X83IRIIEssU3jm0mjufVQ+L5DZYJB9kkl1Y8Uguwot+6CKxfZUwXFparaIwCodzfI34KOLTvxA/h0hrf2tg9NAqQ+55RGEc/oeHz2tkSapg8CJjeQ/xxGwvmHDAGfR3+BxjUTfQwn6cQQvw/4vqZab+7d1gADOYCPLm1PfgIt0TCLhtNrhCw5AEf3chx0cPioO9Zz3cwCJg7mBspAvoP/chHYk3N0QUqxG2jGb3vIUQ0S3MGCjtoKWnygbj7HNLcvVBMjnSCbe8MgDnEx0di4W6d5XCBxPfY1AdcRDvHil8KSbD4F/mdqw6eq6HX3esaR11CbSMwaxlY0OzKYqilG0Qof8u4/P2b+oq2fD+cehqNsQlB/4ViYu3Mx9inxrDV5gf83v7Rn8YyXcbH2KoaZamN5rKG2ycKNJPj82CuUecHAULEqkfMHp/LqwtFIWr5OueAffWXoy+auulwBFkDZcKObn4XS736nDiKjaYmxXy1PMUXKLM8O4CETnjOscLaHPwamy3m/k3HFIdpdL4gjKPEd/lCeaJq2yJEs6cLoZo4/aojZDAxCtkNUiULOQHPLNJ2Zd0khO9tpYAaMtLhqdJPuqNIfgZEgH6XIIKiP7qM3QAETbB9MAxihauWlOGcAToXCUeGk1AT9d1OaEfJDTiVuYwZCNeyst4TrHHa1oCqlRgkDQJx2NW2WJhgEJB5YszulOnrm6CpyvOaQLMrmzWOesk6jN0ACkNp7ooe1Ei8B6iTFyyNmx/BE1rfQKWwCf9A3M/syDvFmUeUR33DWdDkDUZmimGFrXr9lK5tZWyFVqNVrpPsfk9pZknx3h6nWmTmozPADVrbh1OfTc4QFInefo2JhHLbTOwSmR1Tn+Ow/ZqozOZepEfVdC5IPU8KczHZXQzRhOmHwJOumFupP2fHe37xv4OGlS6tZJ0zg0AKEDPY0GrFDoKGvkEtp46pGsFpV+pGqKVrZDtmX0+wZXbWLtSbpKVj2CERn/J+up0EwxOiZ12cRoV+6mOWUcJU7ezvjRanV+ujjjB/HFMJY4kB8sMXHO1kNP4OxjLmOf6bQpzXMGliW+wGF/m9OP6lZjsd9qmtZEGMovIn9tNQ3Zvu7UQn3tY+vp+mZ8frFUOodRS1tIQvatdGquAgj3HcBHcqM4CVO2UGie1c3qQ377saDNKtmodvTF/HEEp75ZRToAf1WkU7sUQMTIR/I7pRCvUT6E6X877nB80MLO5DDCdiqE4FCX1+KRxXGaKs32n3hJhmTdMpzFttBZENGdEUQFGm4XS4VhKcWLIZ1uxpEr2eROQUeuwPi74unUNlvOAMgmkk/qyhTussC9cLI5pv5pMfkmk+Lhhj2ZwKE9/kTFPmtN6ln9pyp8AWrY6DSqoJdYPbz3OZ+eQD9p5Fjp5HYdHFITWoBsDOiAXTBrAh8Oaxrw/Jl8DoKDSwhvCj1AZJL96ZmOSevrHq+xJgWyOFp239mb/MB2yGZ9tdQWANmGYXRp6fLCMP4ugC0bPSMEIgSmBIF/AcD4Io0VxSrhAAAAAElFTkSuQmCC",Oh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAASKADAAQAAAABAAAASAAAAACQMUbvAAAF9klEQVR4Ae2bX4wTRRjA59tty/Wu3TaiJggXjJKQSCIgGKM+mIMokOO4q0QTE/8Qcw+AaEiIMf6LiJLogzFKRBJ90wsPkGuPu6APaHwwGM3BvUiURAMG/APC0W25/+2M37Td3m53u9Pe7Zm77kyz2Znvm/nm+36dne3OdAmRSRKQBCQBSWDeEoB6PAsmb66hkL+XUXYHtosTwM9CTowwopALKiODU4n4GadQhAHe2seiwzSzjzG2Aw0sdzLSGDL4uikY7B7raP7THI8rIDWZ3U4Z/ZQQdpu5UcPmAX6/vVlbfWUTjBgxKkam8qwk9Tcpocd8A4cDYOzuf0czB8wsHEcQwtmDl9Qhc0V7Hsa5Rbt8IUkA42dNFo9xFLFEbIUhswEKpvQHcox8j7EHjEqFM0AOCPtIVYI9S7XmXy62cUALPym96ffwW37FHEk8GovfeBR0LrNCQEGOkg+QaqX850Ag8NxUR8tZinUu4tEoCRTlN0Z5VNNpfHwsgiU7oMCJ7IZ8Lv/wdFWeg6uRILRlO1quWeX+KFkmaZqn2yvDVhTYme3QfAmHs7AAwol5swUQwGC+S0taZD4rlAEhHJywodUcPwCcMpf9mC8D0gayi3FyDlohsMvWsv9KZUA5ElhUGT4+ak1UyvxWLgPyW+C1xisBCUhJQBKQgIBALUeQBCQgIFDLESQBCQgI1HIESUACAgJ15cKYoLq7et0gCw5d0rvxofchrJnBp9+BfCL2lXsrvnDLINCXeQrPG3ldfEj+JtepHcWzcElXTepbsNJWbKahpdNrW2Ofn1kPU6I+a9V7donx7aGzl/QfcZX6MAb6NB67KWMncX37Yzdn9jOmKMlMP6WsB9s+zw+e5zKuc2vLbfM+eF/FPslh7gP3xa1dPTpXB+oxhHtnB3Ebbm1lG3T8Rf4tV8qN8oFU5gX85tuN8vSZtRd10xJzrjBy0LZZVsijDwVfbIqZCTwDhJuUfJg7ptIl4KxjpMNRgUIcTdV1xcvKsambL44NXISeAcKZA+eAqslN53Y5uOlcbLr6UtVJJ4WHgMhppw6KMlZVhztTM9LxCbl6f9VturRxVHkGKKTAy/hXhlFbL0CG+J3FJi8JImFyEG9bf9n0KCvobIqioGATbdvU6EPBF5tiZgLPAE10audDinIfBtuPx3WEdQFv04cWK7FH3G67mc2x4eaQug7rfomX6d/84Hku47pqYXGb3Dbvg/dV7BP6uQ/cl2rt6pV7+juo5Ng2wwn+I6aW/aKR9sg/WPUZc7vyvwcMocP5WidkUfxS6SjU8HqN2LMR5OB/Q4gkIMHXKAFJQAICArUcQRKQgIBALUeQBCQgIFDLESQBCQgI1HIESUACAgK1HEESkICAQC1HUK2AQjBpWw0svfYkMNHY6vKCmb41fgN6039guMuNkHF34G3o1Xfiih1f+/I2MbQ6N2kYFJK6BbT3Swtqs+qlDIhbweVLvgm3y2qRLZkDPNYuvC0tYZSsuk70HWoquzffFT0+G/OWOSgW0V5FY5dnY3AetV1Kaf4YJPWTTQPpu2bqlwUQf8MlFIQNOJR+mKnBedeOsS0Tk3AOt6nfWHWOher1z3Ee4Hvi757QN+JLMOvR4J04WzjWq7czW33+zqinCcK4G/sE7plZ3wEz+gA4r6rK7ty26LeGSE1luimlnxllfm4KhpYZr2bOTeDm3v7n/KI+fcUkJZ/gvvVj1brG77snrKr7RjojV3wHyICiJtNPUgIfIij+hrZT0kGB13C05XFSP2Ku0NAjyBxo6Y3td/Cy24MgVLOunAeSwQvdss9vBmSZpMuNGiTDfwfRRGxvQA3cjzeenxzDqoBTWaehARnBTnW2DL3VpT2IE+4uvN2kDXktZ18A4iD2A1D6ePxIS7O6En8Qf1ELHF7HN4AMIDc3Ra/iZfesCmobPjv8asinz5BvoeGMUfYdICPwXCL63T0rtdX43PY6ysYMOf5f6bj5Ga7hfgcZgdZzDqdGWyfIVAJhpNcs0466/V2nHruyriQgCUgCksAcE/gPG+7bY87hhtMAAAAASUVORK5CYII=",Bh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAASKADAAQAAAABAAAASAAAAACQMUbvAAAGmUlEQVR4Ae1cXWgcVRS+Z2Z/EpPNxrappEHrg6mhSApqER9USv3DNmm0b1UE36z6rj60xPTJdxURFBHtm82vRS1S6s+DFASLFm1ejKURmhR2s2mTzO7c6zm7CZl7Z3bvzOzuZFtmIcw959x77ne+PfdnZueGsRb6pKfz/fTXQpCY0SpgjPH8h1ZRXKE/KrcKLmgFIJQ1RIwTSyoJe9aGsrNO3VaUWyKD7JLRpwbvpVPrRCG3BEFRBBq2j5ggDXNbTpAQAgRj21WcpCObqo9ajhwABZ2aWNpvMxgRjD+LAQ8wwTo8Awd2E/V/ATO+N5mYsEa6LgIQn9F9IiMoOb28z7bt14Vgw0yIXaFCBJgHYFOmaX5cHOr8PZSPgI2aTlDbNyu7Lcs6hcS8zJho0JAGjkR9lUqlTqweap8LGHOg6k0jqOe86LyRy48KBm9hxqQDofJbGWANmPhge3d2dOEALPttFqReUwiirFlbW5tCIIO1wcAsBniBAVzD6zwm2Dzu7bHIe5HYXUhsH16fwszT3X5cSqfTw83IpoYTlJhYesLm4msMqseTHIDLyMCXCTAnrZHMZc86ijI1UdhbEvYRJOsVJG2vYl4XYcE04GhppOsnb3s4bUMJMifyxzhnnyM5SRccYFcNZpw8MZL5YhSAu+w+FKNCGKcmCq9yxsdw5bvX3QQsw2Cv2SPZ025bOE3DCFrPnB/c5JQn1LH7urve/+cArIaDKbe6/7xo+ze39DZO/CexP2XihyJm0sFGZVJDCKrMOdZF17ACVjCEccx+qWtGDrExknlm6TAHfhqzKSN7hIV0OrW/EXOSwr7cjR+JVqvKhOyac+aSpvl4s8ghbOSb+sDinIxV9BAmwibrg0t1E3Qjt/QediuvVpg5yYR5yBrO/BkcUrAW1Af1hWtfQWk5SNsMRRdYrGuIlYeWZf0t73OA40p9pJmZ4xVlebgxMSnNSbhPSqdSD9Yz1OrKINohy+Qw3NKwsajJIcKoT+pbIg83qGWMkjKYEDqD6N6qVLR/k78xdnV3d3ZPo1arYKEwRqvbXC5/Rd4CAE8kzYfD3ruFziC7yI9L5GA0tM/ZKnKITOqbMMjECqOCVdb6lUIRVHmGI4alTnCHTJtASbcFQhkDYnF2LZgYDvtsKRRB9DwHs6fXCYJuH8LukJ1+6i0TBsIi+xG9Fcyy1o8UiiB62KU6p3srVbdVshcWL8x+8IUiaP1JoMM/zPq98XQ0alqxggWkn4zcmP11H5ig9bE84HSPKX3BKbdC2QPTQJh5KDBBHVO3enEZlZ8h4/OcViBFwqBiQsxl7FIlvRCYoJLJt6lu8duaV3VbLXth8sKuwxmYIG4J5c4Zu6Anga328cDkiV2DOzBBeC/her6MP8U05XmwBntNsycmD+w1naAxOEE6j3eYPSZI84XGBMUEaRjQmOMMignSMKAxxxkUE6RhQGOOMygmSMOAxhxnUEyQhgGNOc6gmCANAxpznEExQRoGNOY4g2KCNAxozHEGxQRpGNCYExo7o8NuzrNbnME+tQ2+snrUGF926dV6UcqciQfU/gh7YnzzRTQzwa/pDu3VfD+Ijkbir5FvqB3dSTL++vERfzH7ZrWYqhLkdUyympPbXV/r+Gc8SWu+3aoE0dik9NO0v+3NFGOteajqENuIXJ2kN/TCgD7B2Y4NuZWvYLBF4ML1goWfSTrSuO75TnQkx3OP0DVox/W0DdqXs742g5yV6ymnZgoPFS1OZzl24svC15Mp46B1OPOHH5/1tPXjv1adqnNQrUZhbKUif7dCDrUWOyuyP0/1tPXXQ/VakRGEJ3G7nDBQftQp1yqrdVVftdrWa4uMII8Xmvq3nRUSaV7B3H1OZFHf77R5+HKaG1qOjiBh/Cohx+PhudW8dpeeL+SP43EHaa4E1ZfkuLFCZAS1d8AMTs62E74AGE1O5qoONbJRHWcb8tHeBtOyrnlSZAQtP5e5Dob4TAoFD5uUOPxsnMm94xxuNKxIV7LhF/dhGfHp8guZBclPEwUpdZvYT9n1Xd/e7F1ZKV3CoHe4+qr8R4WNd5v71WFVrg+w2N6eGLz1fMd/rvZNUkRKEMWQmCw8adv8HC71qWAxgWWaxjOlI5kfg7Wrr3ZkQ2wDJgVIgeLLoIsbOu0V6+JB3aejJodwRU4QdUqB0lDBA3CfqBM32Tc/YFMdqtuoU8ybvv2VIh9iKqzOs4WelVUxJIA/Vv5vC1iB9jm0lNNqFeWErGKL5ZiB+hn4HydQYWOhktD3AAAAAElFTkSuQmCC",Fh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB2ElEQVR4nO3cPYoUQQBA4ddqYuyCYKDoGgn+XMGT6NEMDTyMqCwYLIqB0SYGomDQ0tAGIoKthf1meB8UncxUD/1gCoqZmuZ5Jh6X9v4A+VlBZAoiUxCZgsgURKYgMgWRKYhMQWQKIlMQmYLIFESmIDIFkbkyYpJpmra+5Q7wBrjK8Tif5/muIshfuLnG+AxccPhuAKcjJtoryA8vgKccvpfAwxETtYbIFESmIDIFkSmITEFkCiJTEJmCyBTEZvn1+78O4NUy1RGNC+D2xq2TecSzHLWXdR/4Bnz8w9dfBq4Dn9YNRpMT4BpwC3j3v28+cnPxDHjE4XsGPNnr5q0hMgWRKYhMQWQKIlMQmYLIFESmIDIFkSmITEFkCiJTEJmCyBREpiAyBZEpiExBZAoiUxCZgsgURKYgMgWRKYhMQWQKIlMQmYLIFESmIDIFkSmIzN4HmBmdrtfnwNcNJ8oNUZDfP5PlX8JbvGaAvrJ+9Xa9Pl7O99wwHjBAQWQKIlMQmYLIFESmIDIFkSmITEFkCiIzci/rHvCew3dyDEHO113S5Vi8Y/AF+LDHjaf1EMtItIbIFESmIDIFkSmITEFkCiJTEJmCyBREpiAyBZEpiExBZAoiUxBcvgP0Kbuihr2XjQAAAABJRU5ErkJggg==",Uh="https://dept-admin.onrender.com",b0="#087fce",Dh="linear-gradient(90deg, #08c7e8 0%, #168be8 55%, #7545e8 100%)",$0=`
  html, body, #root { margin: 0; min-height:100%; padding:0; }

  .profile-page {
    min-height: 100vh;
    padding-bottom: 50px;
    overflow-x: hidden;
    background: radial-gradient(ellipse at 50% 35%, #0b3470 0%, #08295d 48%, #061d49 100%);
    color: #dceaff;
    font-family: "Century Gothic", "Trebuchet MS", Arial, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
  }

  .profile-page *, .profile-page *::before, .profile-page *::after { box-sizing: border-box; }
  .profile-page button { font-family: inherit; }

  .profile-header {
    display:flex;
    align-items:center;
    justify-content:space-between;
    min-height: 64px;
    padding: 12px 16px;
    background: #082a62;
    border-bottom: 2px solid transparent;
    border-image: linear-gradient(90deg, #08c7e8, #287ee8, #7842e8) 1;
  }

  .profile-logo {
    width: 170px;
    height: 36px;
    object-fit: contain;
    filter: brightness(0) invert(1);
  }

  .profile-header-actions {
    display:flex;
    align-items:center;
    gap:12px;
  }

  .profile-contact {
    min-width: 96px;
    height: 38px;
    padding: 0 20px;
    border: 0;
    border-radius: 999px;
    color: #f0f6ff;
    background: linear-gradient(110deg, #08336e 0%, #0b2d70 58%, #20206f 100%);
    font-size: 0.92rem;
    font-weight: 700;
    cursor: pointer;
    box-shadow: inset 0 0 0 1px rgba(8,199,232,0.38), 0 0 12px rgba(35,105,220,0.12);
  }

  .profile-body {
    width: min(calc(100% - 24px), 560px);
    margin: 0 auto;
    padding: 16px 12px 24px;
  }

  .profile-title-row {
    position: relative;
    display:flex;
    align-items:center;
    justify-content:center;
    min-height: 48px;
    margin-bottom: 28px;
  }

  .profile-back {
    position: absolute;
    left: 0;
    display:flex;
    align-items:center;
    justify-content:center;
    border:0;
    padding:8px;
    background: transparent;
    cursor:pointer;
    width:40px;
    height:40px;
  }

  .profile-title {
    margin:0;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: #dceaff;
  }

  .profile-summary {
    display:grid;
    grid-template-columns: 130px 1fr;
    gap: 24px;
    align-items:flex-start;
    margin-bottom: 32px;
  }

  .profile-avatar-area {
    position: relative;
    width: 130px;
    text-align:center;
    padding-bottom: 50px;
  }

  .profile-avatar {
    display:block;
    width: 110px;
    height: 110px;
    object-fit: cover;
    border: 3px solid #12bce3;
    border-radius: 50%;
    background: #0c3972;
    margin: 0 auto;
  }

  .profile-vip-badge {
    position:absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
    width: 42px;
    height: 42px;
    object-fit: contain;
    box-shadow: 0 3px 10px rgba(0,0,0,0.22);
    background: #082a62;
    border: 3px solid #dceaff;
    border-radius: 50%;
    padding: 4px;
  }

  .profile-vip-label {
    position:absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    margin:0;
    font-size: 0.75rem;
    color:#7fc9ee;
    text-align:center;
    font-weight: 700;
    letter-spacing: 0.06em;
    white-space: nowrap;
  }

  .profile-summary-details {
    padding-top: 6px;
  }

  .profile-username {
    margin: 0 0 12px;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1;
    color: #f0f6ff;
    letter-spacing: -0.04em;
  }

  .profile-referral {
    display:flex;
    align-items:center;
    gap:8px;
    margin-bottom: 14px;
    font-size: 0.98rem;
    color: #a9c9ed;
    font-weight: 500;
  }

  .profile-referral strong {
    color: #08c7e8;
    font-weight: 600;
    letter-spacing: 0.01em;
  }

  .profile-copy {
    border:0;
    background:transparent;
    cursor:pointer;
    padding:3px 6px;
    border-radius:6px;
  }

  .profile-copy img {
    width:18px;
    height:18px;
    display:block;
    opacity: 0.9;
  }

  .profile-credit {
    display:flex;
    align-items:center;
    gap:12px;
    font-size: 0.95rem;
    color:#a9c9ed;
  }

  .profile-credit-label {
    white-space:nowrap;
    font-weight:700;
    color:#b9d9f5;
    min-width:85px;
    font-size: 1rem;
  }

  .profile-credit-track {
    flex:1;
    height: 12px;
    border-radius: 999px;
    background: #123b78;
    overflow:hidden;
  }

  .profile-credit-fill {
    height:100%;
    background: ${Dh};
    border-radius:inherit;
    transition: width 0.3s ease;
  }

  .profile-credit-value {
    min-width: 48px;
    text-align:right;
    font-weight:700;
    color:#b9d9f5;
    font-size:1rem;
  }

  .wallet-card {
    margin: 24px 0 28px;
    padding: 18px 18px 16px;
    border-radius: 14px;
    background: linear-gradient(115deg, #07377a 0%, #0a2e70 58%, #25206f 100%);
    box-shadow: inset 0 1px 0 rgba(180,220,255,0.08), 0 5px 18px rgba(0,0,0,0.14);
    border: 2px solid transparent;
    background-clip: padding-box;
    outline: 1px solid rgba(15,190,235,0.78);
  }

  .wallet-title {
    margin:0 0 16px;
    font-size: 1.12rem;
    font-weight:700;
    color:#e3edf8;
  }

  .wallet-row {
    margin-bottom: 14px;
  }

  .wallet-row:last-child { margin-bottom:0; }

  .wallet-label {
    margin: 0 0 8px;
    font-size: 0.98rem;
    font-weight:600;
    color:#a9c9ed;
    padding-left: 4px;
  }

  .wallet-value {
    display:flex;
    align-items:center;
    justify-content:flex-end;
    gap:12px;
    min-height: 48px;
    padding: 10px 16px;
    border-radius: 14px;
    color:#fff;
    background:#062451;
    border: 1px solid #168de0;
    box-shadow: 0 2px 8px rgba(0,0,0,0.18);
  }

  .wallet-currency {
    font-size: 0.85rem;
    opacity:0.95;
    margin-right:auto;
    color:#fff;
    font-weight:600;
  }

  .wallet-number {
    font-size: 1.18rem;
    font-weight:700;
    color:#fff;
    letter-spacing: -0.02em;
  }

  .profile-section {
    margin-bottom: 16px;
  }

  .profile-section-title {
    margin: 0 0 12px;
    font-size: 1rem;
    font-weight:700;
    color:#71d9f1;
  }

  .profile-section-items {
    display:flex;
    flex-direction:column;
    gap:10px;
  }

  .profile-item {
    display:flex;
    align-items:center;
    justify-content:space-between;
    min-height: 56px;
    padding: 0 16px;
    background: linear-gradient(110deg, #08336e 0%, #0b2d70 58%, #20206f 100%);
    border-radius: 10px;
    font-size: 1.05rem;
    font-weight: 500;
    cursor:pointer;
    color:#e3edf8;
    box-shadow: inset 0 0 0 1px rgba(12,190,235,0.65), 0 3px 12px rgba(0,0,0,0.10);
    border: 1px solid rgba(75,105,225,0.55);
    transition: background 0.15s;
  }

  .profile-item:active {
    background: linear-gradient(110deg, #0b407e, #173b87 60%, #30277f);
  }

  .profile-item-left {
    display:flex;
    align-items:center;
    gap:14px;
  }

  .profile-item-icon {
    width:20px;
    height:20px;
    object-fit:contain;
    filter: none;
    opacity:0.85;
  }

  .profile-item-arrow {
    color:#76c9f2;
    font-size:1.3rem;
    font-weight: 300;
  }

  .profile-loading {
    display:flex;
    align-items:center;
    justify-content:center;
    min-height:100vh;
    background: #062451;
  }

  @media (max-width:600px) {
    .profile-body { width: calc(100% - 20px); padding: 12px 10px 20px; }
    .profile-title-row { margin-bottom: 20px; }
    .profile-summary { grid-template-columns: 110px 1fr; gap:18px; margin-bottom:24px; }
    .profile-avatar-area { padding-bottom: 45px; }
    .profile-avatar { width:95px; height:95px; border-width: 2px; }
    .profile-vip-badge { width:38px; height:38px; bottom:18px; border-width: 2px; }
    .profile-username { font-size: 2rem; margin-bottom: 10px; }
    .profile-referral { font-size:0.92rem; margin-bottom: 12px; }
    .profile-credit { font-size:0.9rem; }
    .profile-credit-track { height: 11px; }
    .wallet-card { margin: 18px 0 22px; padding: 14px 14px 12px; border-radius: 12px; }
    .wallet-title { margin-bottom: 12px; font-size: 1.05rem; }
    .wallet-row { margin-bottom: 11px; }
    .wallet-label { font-size: 0.94rem; margin-bottom: 6px; }
    .wallet-value { min-height: 44px; padding:8px 14px; font-size: 0.95rem; }
    .wallet-currency { font-size: 0.8rem; }
    .wallet-number { font-size: 1.1rem; }
    .profile-section { margin-bottom: 12px; }
    .profile-section-title { font-size: 0.96rem; margin-bottom: 10px; }
    .profile-section-items { gap:8px; }
    .profile-item { min-height: 52px; padding:0 14px; font-size: 1rem; }
    .profile-item-left { gap:12px; }
    .profile-item-icon { width:19px; height:19px; }
  }
`;function _h(){return i.jsxs("div",{className:"profile-loading",children:[i.jsx("style",{children:$0}),i.jsx("div",{style:{width:"2.2rem",height:"2.2rem",border:"4px solid #29496b",borderTop:"4px solid #18bce6",borderRadius:"50%",animation:"profile-spin 1s linear infinite"}}),i.jsx("style",{children:"@keyframes profile-spin { from {transform:rotate(0deg)} to {transform:rotate(360deg)} }"})]})}function Od({message:e,duration:t=600,onDone:n}){return g.useEffect(()=>{if(!e)return;const r=setTimeout(()=>{n&&n()},t);return()=>clearTimeout(r)},[e,t,n]),e?i.jsx("div",{style:{position:"fixed",zIndex:2e4,inset:0,display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"},children:i.jsx("div",{style:{padding:"0.7rem 1.4rem",borderRadius:10,background:"linear-gradient(110deg, #08336e, #20206f)",fontWeight:700,fontSize:"0.95rem"},children:e})}):null}function Wh({open:e,onClose:t,onLogout:n}){return e?i.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center",style:{background:"rgba(2,12,38,.78)"},onClick:t,children:i.jsxs("div",{style:{width:"min(340px, calc(100% - 32px))",padding:"1.2rem 1rem",borderRadius:10,background:"linear-gradient(110deg, #08336e, #20206f)",boxShadow:"0 6px 16px rgba(0,0,0,0.08)"},onClick:r=>r.stopPropagation(),children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:10},children:[i.jsx("div",{style:{fontSize:15,fontWeight:700,marginBottom:6},children:"Logout"}),i.jsx("div",{style:{color:"#a9c9ed",fontSize:13},children:"Are you sure you want to logout?"})]}),i.jsxs("div",{style:{display:"flex",gap:8},children:[i.jsx("button",{style:{flex:1,padding:9,borderRadius:999,border:0,background:"#123b78"},onClick:t,children:"Cancel"}),i.jsx("button",{style:{flex:1,padding:9,borderRadius:999,border:0,background:b0,color:"#fff"},onClick:n,children:"Confirm"})]})]})}):null}function Qh({open:e,onClose:t,onSubmit:n,withdrawPassword:r,setWithdrawPassword:a,errorMsg:o,submitting:s}){return e?i.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center",style:{background:"rgba(2,12,38,.82)"},onClick:t,children:i.jsxs("div",{style:{width:"min(360px, calc(100% - 32px))",padding:"1.2rem 1rem",borderRadius:10,background:"linear-gradient(110deg, #08336e, #20206f)",boxShadow:"0 6px 16px rgba(0,0,0,0.08)"},onClick:l=>l.stopPropagation(),children:[i.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[i.jsx("div",{style:{fontSize:15,fontWeight:700},children:"Withdrawal Password"}),i.jsx("button",{onClick:t,style:{border:0,background:"#123b78",padding:6,borderRadius:8},children:"×"})]}),i.jsx("input",{type:"password",placeholder:"Withdrawal Password",value:r,onChange:l=>a(l.target.value),disabled:s,autoFocus:!0,style:{width:"100%",padding:8,borderRadius:8,border:"1px solid #168de0",marginBottom:8,background:"#062451"}}),o&&i.jsx("div",{style:{color:"#ff9cae",marginBottom:8},children:o}),i.jsx("button",{onClick:n,disabled:s,style:{width:"100%",padding:9,borderRadius:999,border:0,background:b0,color:"#fff"},children:s?"Verifying...":"Submit"})]})}):null}function Gh(e){if(e==null)return{level:null,badge:null};let t=null;if(typeof e=="number")t=e;else if(typeof e=="string"){const a=e.match(/\d+/);t=a?Number(a[0]):NaN}else t=Number(e);if(!Number.isFinite(t))return{level:null,badge:null};const n=Math.max(1,Math.min(4,Math.floor(t)));return{level:n,badge:{1:nl,2:Ki,3:rl,4:il}[n]||null}}function Hh({navigate:e,setShowContactModal:t}){return i.jsxs("header",{className:"profile-header",children:[i.jsx("img",{src:pe,alt:"Instrument",className:"profile-logo"}),i.jsx("div",{className:"profile-header-actions",children:i.jsx("button",{type:"button",className:"profile-contact",onClick:()=>t(!0),children:"Contact"})})]})}function Vh(){const e=ie(),t=mn(),{profile:n,fetchProfile:r,setProfile:a}=Vr(),[o,s]=g.useState(!1),[l,d]=g.useState(""),[c,h]=g.useState(null),[u,m]=g.useState(""),[w,y]=g.useState(!1),[b,j]=g.useState(!1),[f,p]=g.useState(!0),[x,$]=g.useState(!1),[A,E]=g.useState(""),[N,v]=g.useState("");g.useEffect(()=>{let z=!0;(async()=>{p(!0);try{await r()}catch{}finally{if(!z)return;setTimeout(()=>{z&&p(!1)},180)}})();const O=async()=>{p(!0);try{await r()}catch{}p(!1)},B=async()=>{try{await r()}catch{}},G=async()=>{try{await r()}catch{}},H=()=>{try{localStorage.removeItem("authToken"),localStorage.removeItem("token"),localStorage.removeItem("currentUser"),localStorage.removeItem("userProfile")}catch{}try{a(null)}catch{}e("/login")};return window.addEventListener("auth:login",O),window.addEventListener("profile:refresh",B),window.addEventListener("balance:changed",G),window.addEventListener("auth:logout",H),()=>{z=!1,window.removeEventListener("auth:login",O),window.removeEventListener("profile:refresh",B),window.removeEventListener("balance:changed",G),window.removeEventListener("auth:logout",H)}},[t.pathname]),g.useEffect(()=>{let z=!0;const S=setInterval(async()=>{if(z)try{await r()}catch{}},1e4);return()=>{z=!1,clearInterval(S)}},[r]);const I=z=>{h(z),d(""),m(""),s(!0)},L=async()=>{m(""),y(!0);try{const z=localStorage.getItem("authToken"),O=await(await fetch(`${Uh}/api/verify-withdraw-password`,{method:"POST",headers:{"Content-Type":"application/json","X-Auth-Token":z},body:JSON.stringify({password:l})})).json();if(y(!1),O.success){s(!1),p(!0);try{await r()}catch{}p(!1),e(c)}else m(O.message||"Incorrect withdrawal password.")}catch{m("Network error. Please try again."),y(!1)}},_=()=>{$(!1),E("Logout Success"),setTimeout(()=>{E("");try{localStorage.removeItem("currentUser"),localStorage.removeItem("user"),localStorage.removeItem("authToken"),localStorage.removeItem("userProfile")}catch{}try{a(null)}catch{}e("/login")},600)},se=()=>{try{navigator.clipboard.writeText(n.inviteCode||""),v("Copied"),setTimeout(()=>v(""),700)}catch{v("Copy failed"),setTimeout(()=>v(""),700)}};if(f)return i.jsx(_h,{});if(!n)return i.jsx("div",{style:{padding:12},children:"No profile found."});const ge=Gh(n.vipLevel),le=typeof n.creditScore<"u"?Number(n.creditScore):100,yt=Number.isFinite(le)?Math.max(0,Math.min(100,Math.round(le))):100,k=`${yt}%`;return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:$0}),i.jsxs("div",{className:"profile-page",children:[i.jsx(Hh,{navigate:e,setShowContactModal:j}),N&&i.jsx(Od,{message:N,duration:700,onDone:()=>v("")}),i.jsxs("main",{className:"profile-body",children:[i.jsxs("section",{className:"profile-title-row",children:[i.jsx("button",{type:"button",className:"profile-back",onClick:()=>e(-1),"aria-label":"Back",children:i.jsx("img",{src:Ie,alt:"Back",style:{width:20,height:20,objectFit:"contain"}})}),i.jsx("h1",{className:"profile-title",children:"My Profile"})]}),i.jsxs("section",{className:"profile-summary",children:[i.jsxs("div",{className:"profile-avatar-area",children:[i.jsx("img",{src:y0,alt:"Avatar",className:"profile-avatar"}),ge.badge&&i.jsx("img",{src:ge.badge,alt:`VIP-${ge.level}`,className:"profile-vip-badge"}),i.jsxs("div",{className:"profile-vip-label",children:["VIP",ge.level||""]})]}),i.jsxs("div",{className:"profile-summary-details",children:[i.jsx("h2",{className:"profile-username",children:n.username}),i.jsxs("div",{className:"profile-referral",children:[i.jsxs("span",{children:["My Referral Code: ",i.jsx("strong",{children:n.inviteCode||"N/A"})]}),i.jsx("button",{type:"button",className:"profile-copy",onClick:se,"aria-label":"Copy referral code",title:"Copy referral code",children:i.jsx("img",{src:Fh,alt:"Copy"})})]}),i.jsxs("div",{className:"profile-credit",children:[i.jsx("span",{className:"profile-credit-label",children:"Credit Score:"}),i.jsx("div",{className:"profile-credit-track",children:i.jsx("div",{className:"profile-credit-fill",style:{width:k}})}),i.jsxs("span",{className:"profile-credit-value",children:[yt,"%"]})]})]})]}),i.jsxs("section",{className:"wallet-card",children:[i.jsx("div",{className:"wallet-title",children:"My Wallet"}),i.jsxs("div",{className:"wallet-row",children:[i.jsx("div",{className:"wallet-label",children:"Today's Profit"}),i.jsxs("div",{className:"wallet-value",children:[i.jsx("div",{className:"wallet-currency",children:"USD"}),i.jsx("div",{className:"wallet-number",children:Number(n.commissionToday||0).toFixed(2)})]})]}),i.jsxs("div",{className:"wallet-row",children:[i.jsx("div",{className:"wallet-label",children:"Total Balance"}),i.jsxs("div",{className:"wallet-value",children:[i.jsx("div",{className:"wallet-currency",children:"USD"}),i.jsx("div",{className:"wallet-number",children:Number(n.balance||0).toFixed(2)})]})]})]}),i.jsxs(eo,{title:"My Profile",children:[i.jsx(jt,{label:"Account Info",icon:zh,onClick:()=>I("/personal-info")}),i.jsx(jt,{label:"Add Wallet",icon:zd,onClick:()=>I("/bind-wallet")})]}),i.jsxs(eo,{title:"My Financial",children:[i.jsx(jt,{label:"Deposit",icon:Rh,onClick:()=>e("/deposit")}),i.jsx(jt,{label:"Withdraw",icon:Mh,onClick:()=>I("/withdraw")})]}),i.jsxs(eo,{title:"Other",children:[i.jsx(jt,{label:"Contact Us",icon:Oh,onClick:()=>j(!0)}),i.jsx(jt,{label:"Notifications",icon:Bh,onClick:()=>e("/notifications")}),i.jsx(jt,{label:"Change Language",icon:zd,onClick:()=>{}}),i.jsx(jt,{label:"Logout",onClick:()=>$(!0)})]})]}),i.jsx(Wh,{open:x,onClose:()=>$(!1),onLogout:_}),i.jsx(Qh,{open:o,onClose:()=>s(!1),onSubmit:L,withdrawPassword:l,setWithdrawPassword:d,errorMsg:u,submitting:w}),A&&i.jsx(Od,{message:A,duration:600,onDone:()=>E("")}),i.jsx(me,{open:b,onClose:()=>j(!1)})]})]})}function eo({title:e,children:t}){return i.jsxs("section",{className:"profile-section",children:[i.jsx("h2",{className:"profile-section-title",children:e}),i.jsx("div",{className:"profile-section-items",children:t})]})}function jt({label:e,icon:t,onClick:n}){return i.jsxs("button",{type:"button",className:"profile-item",onClick:n,children:[i.jsxs("span",{className:"profile-item-left",children:[t&&i.jsx("img",{src:t,alt:"",className:"profile-item-icon"}),i.jsx("span",{children:e})]}),i.jsx("span",{className:"profile-item-arrow",children:"›"})]})}const Kh="/assets/Abouts-BBoFSLv8.mp4",Yh=`
  html, body, #root {
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  .about-page {
    min-height: 100vh;
    padding-bottom: 30px;
    overflow-x: hidden;
    background: radial-gradient(
      circle at 50% 35%,
      rgba(0, 102, 190, 0.13),
      transparent 38%
    ),
    linear-gradient(
      180deg,
      #03152d 0%,
      #021b38 48%,
      #031a34 100%
    );
    color: #f4f8ff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  .about-page *,
  .about-page *::before,
  .about-page *::after {
    box-sizing: border-box;
  }

  .about-page button {
    font-family: inherit;
  }

  .about-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid rgba(0, 191, 243, 0.32);
    background: linear-gradient(
      110deg,
      rgba(4, 25, 52, 0.99) 0%,
      rgba(3, 19, 42, 0.99) 55%,
      rgba(12, 20, 58, 0.99) 100%
    );
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25), 0 1px 10px rgba(0, 191, 243, 0.06);
  }

  .about-logo {
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
    filter: brightness(0) invert(1);
  }

  .about-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .about-contact {
    min-width: clamp(112px, 14vw, 178px);
    height: clamp(40px, 5vw, 62px);
    padding: 0 clamp(16px, 2vw, 26px);
    border: 1px solid rgba(0, 191, 243, 0.8);
    border-radius: 40px;
    color: #f4f8ff;
    background: linear-gradient(
      135deg,
      rgba(7, 42, 79, 0.98),
      rgba(7, 31, 65, 0.98)
    );
    box-shadow: 0 0 12px rgba(0, 191, 243, 0.08), inset 0 0 12px rgba(0, 191, 243, 0.03);
    font-size: clamp(0.85rem, 1.65vw, 1.65rem);
    cursor: pointer;
    font-weight: 500;
    transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  }

  .about-contact:hover {
    border-color: #7048df;
    box-shadow: 0 0 16px rgba(112, 72, 223, 0.22), inset 0 0 12px rgba(0, 191, 243, 0.04);
    transform: translateY(-1px);
  }

  .about-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: clamp(34px, 5vw, 64px);
    height: clamp(26px, 3.5vw, 44px);
    padding: 4px 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .about-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    border-radius: 10px;
    background: linear-gradient(
      90deg,
      #00bff3 0%,
      #168fe4 55%,
      #7048df 100%
    );
    box-shadow: 0 0 8px rgba(0, 191, 243, 0.12);
  }

  .about-body {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
    padding-top: 0;
  }

  .about-title-row {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60px;
    margin: 30px 0 40px;
  }

  .about-back {
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  .about-back:hover {
    opacity: 0.8;
    transform: translateX(-2px);
  }

  .about-back img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    filter: brightness(0) invert(1);
  }

  .about-title-row h1 {
    margin: 0;
    font-size: clamp(2.5rem, 4vw, 3.5rem);
    font-weight: 400;
    letter-spacing: 0.02em;
    text-align: center;
    color: #f3f7ff;
    text-shadow: 0 0 16px rgba(0, 191, 243, 0.08);
  }

  .about-intro {
    margin: 0 0 40px;
    font-size: clamp(1.3rem, 2.2vw, 2rem);
    line-height: 1.5;
    letter-spacing: -0.01em;
    font-weight: 400;
    color: #e6f3ff;
  }

  .about-video-wrap {
    width: 100%;
    margin: 0 0 50px;
    border-radius: 12px;
    overflow: hidden;
    background: #02152d;
    border: 1px solid rgba(0, 143, 212, 0.45);
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.32), 0 0 18px rgba(0, 102, 190, 0.08);
  }

  .about-video {
    display: block;
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    background: #02152d;
  }

  .about-cta {
    margin: 0 0 30px;
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.2;
    letter-spacing: -0.02em;
    font-weight: 400;
    color: #eaf4ff;
    text-shadow: 0 0 14px rgba(0, 191, 243, 0.07);
  }

  .about-copy {
    margin: 0;
    font-size: clamp(1.15rem, 2.1vw, 1.8rem);
    line-height: 1.6;
    letter-spacing: -0.01em;
    color: #c8ddf5;
  }

  .about-copy strong {
    font-weight: 700;
    color: #f3f7ff;
  }

  @media (max-width: 700px) {
    .about-header {
      display: flex;
      min-height: 72px;
      padding: 12px 14px;
    }

    .about-logo {
      width: 180px;
      height: 34px;
      max-width: 58%;
    }

    .about-header-actions {
      gap: 9px;
    }

    .about-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .about-menu {
      width: 28px;
      height: 24px;
    }

    .about-menu span {
      height: 2px;
    }

    .about-body {
      width: calc(100% - 36px);
      margin: 0 auto;
    }

    .about-title-row {
      min-height: 46px;
      margin: 20px 0 24px;
    }

    .about-back {
      left: 0;
      width: 34px;
      height: 34px;
    }

    .about-back img {
      width: 20px;
      height: 20px;
    }

    .about-title-row h1 {
      font-size: 2rem;
    }

    .about-intro {
      font-size: 1.2rem;
      margin-bottom: 24px;
    }

    .about-video-wrap {
      margin-bottom: 30px;
      border-radius: 8px;
    }

    .about-cta {
      margin-bottom: 20px;
      font-size: 1.8rem;
      line-height: 1.3;
    }

    .about-copy {
      font-size: 1.1rem;
      line-height: 1.5;
    }
  }
`;function qh(){const e=ie(),[t,n]=g.useState(!1);return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:Yh}),i.jsxs("div",{className:"about-page",children:[i.jsxs("header",{className:"about-header",children:[i.jsx("img",{src:pe,alt:"Instrument",className:"about-logo"}),i.jsxs("div",{className:"about-header-actions",children:[i.jsx("button",{type:"button",className:"about-contact",onClick:()=>n(!0),children:"Contact"}),i.jsxs("button",{type:"button",className:"about-menu",onClick:()=>e("/profile"),"aria-label":"Open profile menu",children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]})]})]}),i.jsxs("main",{className:"about-body",children:[i.jsxs("div",{className:"about-title-row",children:[i.jsx("button",{type:"button",className:"about-back",onClick:()=>e(-1),"aria-label":"Go back",children:i.jsx("img",{src:Ie,alt:"Back"})}),i.jsx("h1",{children:"About Us"})]}),i.jsx("p",{className:"about-intro",children:"We're a company committed to shaping better futures. We put people first — our clients, our employees, and the users we serve. We pursue excellence — with our unwavering commitment to make work that goes above and beyond. We embrace growth — continually scaling in size, capabilities, and cultural intelligence. We own truth in action — using our powers for good to leave a lasting impact on the world."}),i.jsx("div",{className:"about-video-wrap",children:i.jsx("video",{className:"about-video",src:Kh,autoPlay:!0,loop:!0,muted:!0,playsInline:!0})}),i.jsx("h2",{className:"about-cta",children:"Meet our talented team of creators and technologists."}),i.jsx("p",{className:"about-copy",children:"We're a diverse group of designers, strategists, engineers, and wordsmiths who make things people love to use. Over the last 20 years, we've helped the world's most progressive brands solve problems, seize opportunities, and create lasting growth for their business. Together, we shape a better future."})]}),i.jsx(me,{open:t,onClose:()=>n(!1)})]})]})}const Jh="/assets/Dept3-CjxWogWF.png",Xh="/assets/Dept2-B61JRbMY.png",Zh="/assets/Dept-CThYOd-Z.png",em=' html, body, #root { margin: 0; min-height: 100%; padding: 0; } * { box-sizing: border-box; } .event-page { min-height: 100vh; overflow-x: hidden; background: radial-gradient( circle at 50% 35%, rgba(0, 102, 190, 0.13), transparent 38% ), linear-gradient( 180deg, #03152d 0%, #021b38 48%, #031a34 100% ); color: #f4f8ff; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; } .event-page button { font-family: inherit; } .event-header { display: flex; align-items: center; justify-content: space-between; min-height: clamp(72px, 9vw, 96px); padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px); border-bottom: 1px solid rgba(0, 191, 243, 0.32); background: linear-gradient( 110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100% ); box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25), 0 1px 10px rgba(0, 191, 243, 0.06); } .event-logo { width: clamp(190px, 31vw, 470px); max-width: 52%; height: clamp(32px, 5.5vw, 58px); object-fit: contain; object-position: left center; filter: brightness(0) invert(1); } .event-header-actions { display: flex; align-items: center; gap: clamp(16px, 2.5vw, 30px); } .event-contact { min-width: clamp(112px, 14vw, 178px); height: clamp(40px, 5vw, 62px); padding: 0 clamp(16px, 2vw, 26px); border: 1px solid rgba(0, 191, 243, 0.8); border-radius: 40px; color: #f4f8ff; background: linear-gradient( 135deg, rgba(7, 42, 79, 0.98), rgba(7, 31, 65, 0.98) ); box-shadow: 0 0 12px rgba(0, 191, 243, 0.08), inset 0 0 12px rgba(0, 191, 243, 0.03); font-size: clamp(0.85rem, 1.65vw, 1.65rem); font-weight: 500; cursor: pointer; transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease; } .event-contact:hover { border-color: #7048df; box-shadow: 0 0 16px rgba(112, 72, 223, 0.22), inset 0 0 12px rgba(0, 191, 243, 0.04); transform: translateY(-1px); } .event-menu { display: flex; flex-direction: column; justify-content: space-between; width: clamp(34px, 5vw, 64px); height: clamp(26px, 3.5vw, 44px); padding: 4px 0; border: 0; background: transparent; cursor: pointer; } .event-menu span { display: block; width: 100%; height: clamp(2px, 0.35vw, 4px); border-radius: 10px; background: linear-gradient( 90deg, #00bff3 0%, #168fe4 55%, #7048df 100% ); box-shadow: 0 0 8px rgba(0, 191, 243, 0.12); } .event-title-bar { position: relative; display: flex; align-items: center; justify-content: center; min-height: clamp(50px, 6vw, 70px); padding: clamp(12px, 2vw, 16px) clamp(18px, 4.2vw, 42px); background: linear-gradient( 110deg, rgba(3, 25, 51, 0.98) 0%, rgba(3, 31, 64, 0.98) 55%, rgba(9, 25, 61, 0.98) 100% ); border-bottom: 1px solid rgba(0, 143, 212, 0.45); box-shadow: 0 3px 14px rgba(0, 0, 0, 0.18), inset 0 -1px 8px rgba(0, 191, 243, 0.03); } .event-back { position: absolute; left: clamp(18px, 4.2vw, 42px); display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; padding: 0; border: 0; background: transparent; cursor: pointer; transition: opacity 0.2s ease, transform 0.2s ease; } .event-back:hover { opacity: 0.8; transform: translateX(-2px); } .event-back img { width: 24px; height: 24px; object-fit: contain; display: block; filter: brightness(0) invert(1); } .event-title-bar h1 { margin: 0; font-size: clamp(1.5rem, 2.5vw, 2.2rem); font-weight: 600; letter-spacing: -0.02em; color: #f3f7ff; text-shadow: 0 0 14px rgba(0, 191, 243, 0.07); } .event-content { width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px); margin: 0 auto; padding: clamp(20px, 3vw, 40px) 0; } .event-images { display: flex; flex-direction: column; gap: clamp(16px, 3vw, 28px); } .event-image-wrapper { width: 100%; overflow: hidden; border-radius: clamp(8px, 1.5vw, 12px); background: #02152d; border: 1px solid rgba(0, 143, 212, 0.45); box-shadow: 0 8px 28px rgba(0, 0, 0, 0.32), 0 0 18px rgba(0, 102, 190, 0.08); } .event-image-wrapper img { display: block; width: 100%; height: auto; object-fit: cover; } @media (max-width: 720px) { .event-header { min-height: 72px; padding: 12px 14px; } .event-logo { width: 180px; height: 34px; } .event-header-actions { gap: 9px; } .event-contact { min-width: 82px; height: 34px; padding: 0 12px; font-size: 0.78rem; } .event-menu { width: 28px; height: 24px; } .event-menu span { height: 2px; } .event-title-bar { min-height: 48px; padding: 10px 14px; } .event-back { width: 34px; height: 34px; left: 14px; } .event-back img { width: 20px; height: 20px; } .event-title-bar h1 { font-size: 1.5rem; } .event-content { width: calc(100% - 28px); padding: 16px 0; } .event-images { gap: 12px; } .event-image-wrapper { border-radius: 8px; } } ';function tm(){const e=ie(),[t,n]=Fn.useState(!1),r=[Jh,Xh,Zh];return i.jsxs(i.Fragment,{children:[" ",i.jsx("style",{children:em})," ",i.jsxs("div",{className:"event-page",children:[" ",i.jsxs("header",{className:"event-header",children:[" ",i.jsx("img",{src:pe,alt:"Instrument",className:"event-logo"})," ",i.jsxs("div",{className:"event-header-actions",children:[" ",i.jsx("button",{type:"button",className:"event-contact",onClick:()=>n(!0),children:" Contact "})," ",i.jsxs("button",{type:"button",className:"event-menu",onClick:()=>e("/profile"),"aria-label":"Open profile menu",children:[" ",i.jsx("span",{})," ",i.jsx("span",{})," ",i.jsx("span",{})," "]})," "]})," "]})," ",i.jsxs("div",{className:"event-title-bar",children:[" ",i.jsxs("button",{type:"button",className:"event-back",onClick:()=>e(-1),"aria-label":"Go back",children:[" ",i.jsx("img",{src:Ie,alt:"Back"})," "]})," ",i.jsx("h1",{children:"Event"})," "]})," ",i.jsxs("main",{className:"event-content",children:[" ",i.jsxs("div",{className:"event-images",children:[" ",r.map((a,o)=>i.jsxs("div",{className:"event-image-wrapper",children:[" ",i.jsx("img",{src:a,alt:`Event ${o+1}`})," "]},o))," "]})," "]})," ",i.jsx(me,{open:t,onClose:()=>n(!1)})," "]})," "]})}const nm=`
  html, body, #root {
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  .faq-page {
    min-height: 100vh;
    overflow-x: hidden;
    background:
      radial-gradient(circle at 50% 35%, rgba(0, 102, 190, 0.13), transparent 38%),
      linear-gradient(180deg, #03152d 0%, #021b38 48%, #031a34 100%);
    color: #f4f8ff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  .faq-page *,
  .faq-page *::before,
  .faq-page *::after {
    box-sizing: border-box;
  }

  .faq-page button {
    font-family: inherit;
  }

  .faq-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid rgba(0, 191, 243, 0.32);
    background:
      linear-gradient(
        110deg,
        rgba(4, 25, 52, 0.99) 0%,
        rgba(3, 19, 42, 0.99) 55%,
        rgba(12, 20, 58, 0.99) 100%
      );
  }

  .faq-logo {
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
    filter: brightness(0) invert(1);
  }

  .faq-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .faq-contact {
    min-width: clamp(112px, 14vw, 178px);
    height: clamp(40px, 5vw, 62px);
    padding: 0 clamp(16px, 2vw, 26px);
    border: 1px solid #00bff3;
    border-radius: 40px;
    color: #ffffff;
    background: transparent;
    font-size: clamp(0.85rem, 1.65vw, 1.65rem);
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
  }

  .faq-contact:hover {
    background:
      linear-gradient(
        110deg,
        rgba(8, 54, 98, 0.98),
        rgba(31, 35, 91, 0.98)
      );
  }

  .faq-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: clamp(34px, 5vw, 64px);
    height: clamp(26px, 3.5vw, 44px);
    padding: 4px 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .faq-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    background: linear-gradient(
      90deg,
      #00bff3 0%,
      #168fe4 58%,
      #7048df 100%
    );
  }

  .faq-body {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
    padding-top: 0;
    padding-bottom: 80px;
  }

  .faq-title-row {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60px;
    margin: 22px 0 18px;
  }

  .faq-back {
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .faq-back img {
    width: 22px;
    height: 22px;
    object-fit: contain;
    display: block;
    filter: brightness(0) invert(1);
  }

  .faq-title-row h1 {
    margin: 0;
    font-size: clamp(2.3rem, 4vw, 3.4rem);
    font-weight: 500;
    letter-spacing: -0.06em;
    text-align: center;
    color: #f4f8ff;
  }

  .faq-section {
    margin-top: 10px;
  }

  .faq-section h2 {
    margin: 0 0 18px;
    font-size: clamp(1.3rem, 2vw, 2.2rem);
    font-weight: 600;
    letter-spacing: -0.05em;
    color: #00bff3;
  }

  .faq-section p {
    margin: 0 0 18px;
    font-size: clamp(1.05rem, 1.7vw, 1.6rem);
    line-height: 1.42;
    letter-spacing: -0.04em;
    color: #f4f8ff;
    font-weight: 400;
  }

  .faq-section p strong {
    font-weight: 600;
    color: #ffffff;
  }

  @media (max-width: 700px) {
    .faq-header {
      display: flex;
      min-height: 72px;
      padding: 12px 14px;
    }

    .faq-logo {
      width: 180px;
      height: 34px;
      max-width: 58%;
    }

    .faq-header-actions {
      gap: 9px;
    }

    .faq-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .faq-menu {
      width: 28px;
      height: 24px;
    }

    .faq-menu span {
      height: 2px;
    }

    .faq-body {
      width: calc(100% - 36px);
      margin: 0 auto;
    }

    .faq-title-row {
      min-height: 46px;
      margin: 10px 0 16px;
    }

    .faq-back {
      width: 34px;
      height: 34px;
    }

    .faq-back img {
      width: 20px;
      height: 20px;
    }

    .faq-title-row h1 {
      font-size: 2rem;
    }

    .faq-section h2 {
      font-size: 1.5rem;
      margin-bottom: 12px;
    }

    .faq-section p {
      font-size: 1.05rem;
      line-height: 1.45;
      margin-bottom: 16px;
    }
  }
`;function rm(){const e=ie(),[t,n]=g.useState(!1);return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:nm}),i.jsxs("div",{className:"faq-page",children:[i.jsxs("header",{className:"faq-header",children:[i.jsx("img",{src:pe,alt:"Instrument",className:"faq-logo"}),i.jsxs("div",{className:"faq-header-actions",children:[i.jsx("button",{type:"button",className:"faq-contact",onClick:()=>n(!0),children:"Contact"}),i.jsxs("button",{type:"button",className:"faq-menu",onClick:()=>e("/profile"),"aria-label":"Open profile menu",children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]})]})]}),i.jsxs("main",{className:"faq-body",children:[i.jsxs("div",{className:"faq-title-row",children:[i.jsx("button",{type:"button",className:"faq-back",onClick:()=>e(-1),"aria-label":"Go back",children:i.jsx("img",{src:Ie,alt:"Back"})}),i.jsx("h1",{children:"FAQs"})]}),i.jsxs("section",{className:"faq-section",children:[i.jsx("h2",{children:"I. Start Submission"}),i.jsxs("p",{children:[i.jsx("strong",{children:"1.1"})," A minimum account balance of 50 USD is required to initiate the first set of 40 products submission."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"1.2"})," A minimum deposit of 100 USD is required to reset and begin the new daily products submission process."]})]}),i.jsxs("section",{className:"faq-section",children:[i.jsx("h2",{children:"II. Withdrawal"}),i.jsxs("p",{children:[i.jsx("strong",{children:"2.1"})," Withdrawal amount is based on the VIP level of the account, if withdrawals exceeding the amount require an upgrade to the appropriate membership level, as each level is subject to different withdrawal limits."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"2.2"})," All users must complete three sets of products submissions per day in order to be eligible to request a withdrawal. Furthermore, users are required to apply for the withdrawal of their entire account balance; partial withdrawals are not permitted."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"2.3"})," Users who choose to abandon or exit the products submission process will forfeit their eligibility to apply for a withdrawal or request a refund."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"2.4"})," If a withdrawal request has not been formally submitted by the user, Instrument is unable to process any withdrawal on their behalf."]})]}),i.jsxs("section",{className:"faq-section",children:[i.jsx("h2",{children:"III. Funds"}),i.jsxs("p",{children:[i.jsx("strong",{children:"3.1"})," All funds are securely held within the user's account and may be withdrawn in full upon successful completion of all required products submission."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"3.2"})," To ensure the security and integrity of user funds, all data processing is conducted automatically by the system; manual processing is not permitted."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"3.3"})," The platform assumes full responsibility for any accidental loss of funds resulting from system errors or platform-related issues."]})]}),i.jsxs("section",{className:"faq-section",children:[i.jsx("h2",{children:"IV. Account Security"}),i.jsxs("p",{children:[i.jsx("strong",{children:"4.1"})," Users are strictly advised not to disclose their login passwords or security codes to any third party. The platform shall not be held liable for any loss or damage resulting from unauthorized access due to such disclosure."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"4.2"})," For security purposes, it is strongly recommended that users do not use easily identifiable information such as birthdates, identification numbers, or mobile phone numbers as their login passwords or security codes."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"4.3"})," In the event that a user forgets their login password or security PIN, they must contact the platform's online customer service for assistance in resetting the credentials."]})]}),i.jsxs("section",{className:"faq-section",children:[i.jsx("h2",{children:"V. Normal Products"}),i.jsxs("p",{children:[i.jsx("strong",{children:"5.1"}),' Platform earnings are categorized into normal earnings and "ten-times revenue" earnings. Under normal circumstances, users will typically receive 1 to 3 merged product sets per submission set, with the possibility of obtaining a maximum of 3 merged data sets from a single set.']}),i.jsxs("p",{children:[i.jsx("strong",{children:"5.2"})," VIP 1 members will earn 0.5% of the profit for each normal product submission."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"5.3"})," VIP 1 members will earn 5.0% of the profit for each merged product submission."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"5.4"})," Funds and earnings from completed product submissions will be credited back to the user's account upon successful completion of each product set."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"5.5"})," The system will randomly distribute product to the user's account based on the total balance in the user's account."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"5.6"})," Once product has been distributed to the user's account, it cannot be canceled, skipped, or modified."]})]}),i.jsxs("section",{className:"faq-section",children:[i.jsx("h2",{children:"VI. Merged Product"}),i.jsxs("p",{children:[i.jsx("strong",{children:"6.1"})," Merged Product consist of 1 to 3 product data sets. Users may not necessarily receive 3 merged data sets; the system will randomly assign normal product data, with users having a higher likelihood of receiving either 1 or 3 product data sets within the merged product."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"6.2"})," Users will receive ten times the commission for each product set in the merged product compared to the commission for normal product data."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"6.3"})," Once the user is matched with merged product, all associated funds will be on-hold until the completion of each products submission. The funds will be refunded to the user's account upon successful completion of the required submissions."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"6.4"})," The system will randomly assign merged product to the user's account based on the total balance within the user's account."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"6.5"})," Once merged products have been distributed to the user's account, they cannot be canceled, skipped, or modified."]})]}),i.jsxs("section",{className:"faq-section",children:[i.jsx("h2",{children:"VII. Deposit"}),i.jsxs("p",{children:[i.jsx("strong",{children:"7.1"})," The deposit amount is determined by the user, and the platform does not impose any specific deposit requirements. It is recommended that users make advance payments based on their financial capacity."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"7.2"})," If a deposit is required when receiving a merged product, users are advised to make an advance payment to cover the insufficient amount indicated in their account."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"7.3"})," Before proceeding with an advance payment, users must contact user support to request the payment details and confirm the specific deposit information."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"7.4"})," The platform will not be held liable for any errors in depositing funds to an incorrect account."]})]}),i.jsxs("section",{className:"faq-section",children:[i.jsx("h2",{children:"VIII. Merchants' Cooperation"}),i.jsxs("p",{children:[i.jsx("strong",{children:"8.1"})," The availability of product on the platform fluctuates, and if product submissions are delayed for an extended period, merchants may be unable to offload the data, which could negatively impact their progress. It is strongly recommended that users complete all required submissions and apply for withdrawals promptly to avoid hindering the merchants' progress."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"8.2"})," Merchants will provide users with deposit details to facilitate the deposit process."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"8.3"})," Delays in completing product submissions will have a detrimental effect on merchants and the overall process."]})]}),i.jsxs("section",{className:"faq-section",children:[i.jsx("h2",{children:"IX. Invitation"}),i.jsxs("p",{children:[i.jsx("strong",{children:"9.1"})," Users may invite other users to the platform using the invitation code linked to their account."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"9.2"})," Users must complete all product submissions in their account before they can invite other users."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"9.3"})," To be eligible to use an invitation code to invite referrals, a user must first complete 15 days of work after registration."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"9.4"})," Referrers will receive 20% of the referee's daily earnings as a commission."]})]}),i.jsxs("section",{className:"faq-section",children:[i.jsx("h2",{children:"X. User Authentication"}),i.jsxs("p",{children:[i.jsx("strong",{children:"10."})," All users must undergo authentication before being eligible to apply for any withdrawal of funds from the platform. This measure is implemented to ensure the security of all users' funds and to prevent any potential loss of assets for active users on our platform."]})]}),i.jsxs("section",{className:"faq-section",children:[i.jsx("h2",{children:"XI. Operating Hours"}),i.jsxs("p",{children:[i.jsx("strong",{children:"11.1"})," The platform operates from 10:00 - 22:00 (EST)."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"11.2"})," Online customer service is available from 10:00 - 22:00 (EST)."]}),i.jsxs("p",{children:[i.jsx("strong",{children:"11.3"})," Withdrawal operations are processed between 10:00 - 22:00 (EST)."]})]})]}),i.jsx(me,{open:t,onClose:()=>n(!1)})]})]})}function im(){const[e,t]=g.useState(""),[n,r]=g.useState(!1),a=()=>{if(!e.trim()){alert("Please enter a wallet address.");return}r(!0)};return i.jsxs("div",{className:"p-6 max-w-xl mx-auto space-y-6",children:[i.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"🔗 Wallet Binding"}),i.jsxs("div",{className:"bg-white p-6 rounded shadow space-y-4",children:[i.jsx("label",{className:"block text-sm font-medium text-gray-700",children:"USDT Wallet Address (TRC20)"}),i.jsx("input",{type:"text",value:e,onChange:o=>t(o.target.value),disabled:n,className:"w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-400",placeholder:"Enter your TRC20 USDT address"}),i.jsx("button",{onClick:a,disabled:n,className:`w-full py-2 rounded text-white transition ${n?"bg-gray-400 cursor-not-allowed":"bg-blue-600 hover:bg-blue-700"}`,children:n?"Wallet Bound":"Bind Wallet"}),n&&i.jsxs("div",{className:"mt-4 bg-green-100 text-green-800 p-3 rounded",children:["✅ Wallet bound successfully: ",i.jsx("strong",{children:e})]})]})]})}const am="/assets/Depts-CK-EyFNt.png",om=' html, body, #root { margin: 0; min-height: 100%; padding: 0; } * { box-sizing: border-box; } .cert-page { min-height: 100vh; overflow-x: hidden; background: radial-gradient( circle at 50% 35%, rgba(0, 102, 190, 0.13), transparent 38% ), linear-gradient( 180deg, #03152d 0%, #021b38 48%, #031a34 100% ); color: #f4f8ff; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; } .cert-page button { font-family: inherit; } .cert-header { display: flex; align-items: center; justify-content: space-between; min-height: clamp(72px, 9vw, 96px); padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px); border-bottom: 1px solid rgba(0, 191, 243, 0.32); background: linear-gradient( 110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100% ); box-shadow: 0 4px 18px rgba(0, 0, 0, 0.25), 0 1px 10px rgba(0, 191, 243, 0.06); } .cert-logo { width: clamp(190px, 31vw, 470px); max-width: 52%; height: clamp(32px, 5.5vw, 58px); object-fit: contain; object-position: left center; filter: brightness(0) invert(1); } .cert-header-actions { display: flex; align-items: center; gap: clamp(16px, 2.5vw, 30px); } .cert-contact { min-width: clamp(112px, 14vw, 178px); height: clamp(40px, 5vw, 62px); padding: 0 clamp(16px, 2vw, 26px); border: 1px solid rgba(0, 191, 243, 0.8); border-radius: 40px; color: #f4f8ff; background: linear-gradient( 135deg, rgba(7, 42, 79, 0.98), rgba(7, 31, 65, 0.98) ); box-shadow: 0 0 12px rgba(0, 191, 243, 0.08), inset 0 0 12px rgba(0, 191, 243, 0.03); font-size: clamp(0.85rem, 1.65vw, 1.65rem); font-weight: 500; cursor: pointer; transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease; } .cert-contact:hover { border-color: #7048df; box-shadow: 0 0 16px rgba(112, 72, 223, 0.22), inset 0 0 12px rgba(0, 191, 243, 0.04); transform: translateY(-1px); } .cert-menu { display: flex; flex-direction: column; justify-content: space-between; width: clamp(34px, 5vw, 64px); height: clamp(26px, 3.5vw, 44px); padding: 4px 0; border: 0; background: transparent; cursor: pointer; } .cert-menu span { display: block; width: 100%; height: clamp(2px, 0.35vw, 4px); border-radius: 10px; background: linear-gradient( 90deg, #00bff3 0%, #168fe4 55%, #7048df 100% ); box-shadow: 0 0 8px rgba(0, 191, 243, 0.12); } .cert-title-bar { position: relative; display: flex; align-items: center; justify-content: center; min-height: clamp(50px, 6vw, 70px); padding: clamp(12px, 2vw, 16px) clamp(18px, 4.2vw, 42px); background: linear-gradient( 110deg, rgba(3, 25, 51, 0.98) 0%, rgba(3, 31, 64, 0.98) 55%, rgba(9, 25, 61, 0.98) 100% ); border-bottom: 1px solid rgba(0, 143, 212, 0.45); box-shadow: 0 3px 14px rgba(0, 0, 0, 0.18), inset 0 -1px 8px rgba(0, 191, 243, 0.03); } .cert-back { position: absolute; left: clamp(18px, 4.2vw, 42px); display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; padding: 0; border: 0; background: transparent; cursor: pointer; transition: opacity 0.2s ease, transform 0.2s ease; } .cert-back:hover { opacity: 0.8; transform: translateX(-2px); } .cert-back img { width: 24px; height: 24px; object-fit: contain; display: block; filter: brightness(0) invert(1); } .cert-title-bar h1 { margin: 0; font-size: clamp(1.5rem, 2.5vw, 2.2rem); font-weight: 600; letter-spacing: -0.02em; color: #f3f7ff; text-shadow: 0 0 14px rgba(0, 191, 243, 0.07); } .cert-content { width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px); margin: 0 auto; padding: clamp(20px, 3vw, 40px) 0; } .cert-image-wrapper { width: 100%; overflow: hidden; border-radius: clamp(8px, 1.5vw, 12px); background: #02152d; border: 1px solid rgba(0, 143, 212, 0.45); box-shadow: 0 8px 28px rgba(0, 0, 0, 0.32), 0 0 18px rgba(0, 102, 190, 0.08); } .cert-image-wrapper img { display: block; width: 100%; height: auto; object-fit: cover; } @media (max-width: 720px) { .cert-header { min-height: 72px; padding: 12px 14px; } .cert-logo { width: 180px; height: 34px; } .cert-header-actions { gap: 9px; } .cert-contact { min-width: 82px; height: 34px; padding: 0 12px; font-size: 0.78rem; } .cert-menu { width: 28px; height: 24px; } .cert-menu span { height: 2px; } .cert-title-bar { min-height: 48px; padding: 10px 14px; } .cert-back { width: 34px; height: 34px; left: 14px; } .cert-back img { width: 20px; height: 20px; } .cert-title-bar h1 { font-size: 1.5rem; } .cert-content { width: calc(100% - 28px); padding: 16px 0; } .cert-image-wrapper { border-radius: 8px; } } ';function sm(){const e=ie(),[t,n]=Fn.useState(!1);return i.jsxs(i.Fragment,{children:[" ",i.jsx("style",{children:om})," ",i.jsxs("div",{className:"cert-page",children:[" ",i.jsxs("header",{className:"cert-header",children:[" ",i.jsx("img",{src:pe,alt:"Instrument",className:"cert-logo"})," ",i.jsxs("div",{className:"cert-header-actions",children:[" ",i.jsx("button",{type:"button",className:"cert-contact",onClick:()=>n(!0),children:" Contact "})," ",i.jsxs("button",{type:"button",className:"cert-menu",onClick:()=>e("/profile"),"aria-label":"Open profile menu",children:[" ",i.jsx("span",{})," ",i.jsx("span",{})," ",i.jsx("span",{})," "]})," "]})," "]})," ",i.jsxs("div",{className:"cert-title-bar",children:[" ",i.jsxs("button",{type:"button",className:"cert-back",onClick:()=>e(-1),"aria-label":"Go back",children:[" ",i.jsx("img",{src:Ie,alt:"Back"})," "]})," ",i.jsx("h1",{children:"Certificate"})," "]})," ",i.jsxs("main",{className:"cert-content",children:[" ",i.jsxs("div",{className:"cert-image-wrapper",children:[" ",i.jsx("img",{src:am,alt:"Certificate"})," "]})," "]})," ",i.jsx(me,{open:t,onClose:()=>n(!1)})," "]})," "]})}const lm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAaVBMVEUAAAAzMzMzMzMzMzMyMjIuLi4yMjIxMTEyMjIyMjIyMjIyMjIyMjIyMjItLS0yMjIyMjIyMjIzMzMzMzMzMzMzMzMxMTEzMzMyMjIyMjIxMTEyMjIwMDAzMzMwMDAxMTEzMzMzMzMzMzMdmEIQAAAAInRSTlMASLN57xHjJqX1bSGMcgrZu5I40a2cT8nBoWRbPS4dGYGIMzfr7AAAAPRJREFUKM+NktlygzAMRUUwAuMEs2+h0N7//8jKbgsl4zY5D17myLJHMnlKbLTj92ZfvzEsqx22GnlBnqJFAK69bKAYy5rsbGZAA+1sDjYmohOyr2BlYdFTCEZNCTQFuSKmBU0UxMkefyHyDr4EGUXmuFIQ859Mn8nbCzLl0nWDU6JcvZ+lTDC0ArGv9XFnRULSxS5kSojqNjrJAM/ljM53/OMm41wlx/fw5cu+H1TThl9papERSh+nrBwa9NH1XmQKJkdxjF/EIknDUIgRd6IJWcgt0JLGaEzpoypmBV/ESAM8XNrsh7a0GujIs3YKD+ixF/EJYQsa4vs2ts4AAAAASUVORK5CYII=",dm=["All","Pending","Completed"],cm="#333333",um=`
  .records-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 2px solid transparent;
    border-image: linear-gradient(90deg, #00c8f0 0%, #087bda 55%, #7138e8 100%) 1;
    background: linear-gradient(110deg, #0b2b60 0%, #102d68 55%, #171d68 100%);
    box-sizing: border-box;
  }

  .records-logo {
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
    filter: brightness(0) invert(1);
  }

  .records-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .records-contact {
    min-width: clamp(112px, 14vw, 178px);
    height: clamp(40px, 5vw, 62px);
    padding: 0 clamp(16px, 2vw, 26px);
    border: 1px solid rgba(0, 200, 240, 0.65);
    border-radius: 40px;
    color: #e4f1ff;
    background: linear-gradient(110deg, rgba(8, 123, 218, 0.12), rgba(113, 56, 232, 0.16));
    font-size: clamp(0.85rem, 1.65vw, 1.65rem);
    cursor: pointer;
    box-shadow: inset 0 0 0 1px rgba(113, 56, 232, 0.12);
  }

  .records-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: clamp(34px, 5vw, 64px);
    height: clamp(26px, 3.5vw, 44px);
    padding: 4px 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .records-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    background: #e4f1ff;
    border-radius: 99px;
  }

  .record-title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  @media (max-width: 700px) {
    .records-header {
      display: flex;
      min-height: 72px;
      padding: 12px 14px;
    }

    .records-logo {
      width: 180px;
      height: 34px;
      max-width: 58%;
    }

    .records-header-actions {
      gap: 9px;
    }

    .records-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .records-menu {
      width: 28px;
      height: 24px;
    }

    .records-menu span {
      height: 2px;
    }
  }
`;function pm({show:e}){return e?i.jsxs("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:11e3,background:"rgba(245,247,251,0.38)",display:"flex",alignItems:"center",justifyContent:"center"},children:[i.jsx("div",{style:{width:56,height:56,border:"6px solid #ddd",borderTop:`6px solid ${cm}`,borderRadius:"50%",animation:"spin 0.8s linear infinite"}}),i.jsx("style",{children:"@keyframes spin { 100% { transform: rotate(360deg); } }"})]}):null}function fm({show:e,message:t}){return e?i.jsxs("div",{style:{position:"fixed",left:"50%",top:"22%",transform:"translateX(-50%)",background:"#eee",color:"#666",borderRadius:10,padding:"10px 28px",fontWeight:500,fontSize:15.5,boxShadow:"0 2px 12px #0001",zIndex:99999,minWidth:210,maxWidth:"80vw",display:"flex",alignItems:"center"},children:[i.jsx("span",{style:{width:22,height:22,border:"3px solid #e0e0e0",borderTop:"3px solid #bbb",borderRadius:"50%",marginRight:13,display:"inline-block",animation:"spin 0.8s linear infinite"}}),i.jsx("span",{children:t}),i.jsx("style",{children:"@keyframes spin { 100% { transform: rotate(360deg); } }"})]}):null}function hm({onContactClick:e}){const t=ie();return i.jsxs("header",{className:"records-header",children:[i.jsx("img",{src:pe,alt:"Instrument",className:"records-logo"}),i.jsxs("div",{className:"records-header-actions",children:[i.jsx("button",{type:"button",className:"records-contact",onClick:e,children:"Contact"}),i.jsxs("button",{type:"button",className:"records-menu",onClick:()=>t("/profile"),"aria-label":"Open menu",children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]})]})]})}const mm=()=>{const[e,t]=g.useState("All"),n=ie(),{records:r,submitTaskRecord:a,refreshRecords:o}=v0(),{balance:s,commissionToday:l,refreshProfile:d}=ha(),[c,h]=g.useState({}),[u,m]=g.useState({}),[w,y]=g.useState({show:!1,message:""}),[b,j]=g.useState(!1),[f,p]=g.useState(!0),{currency:x}=ma();g.useEffect(()=>{if(p(!0),o){let k=!1;const z=()=>{k||(k=!0,p(!1))},S=o();S&&typeof S.finally=="function"?S.finally(z):setTimeout(z,800)}else{const k=setTimeout(()=>{p(!1)},1e3);return()=>clearTimeout(k)}},[]),g.useEffect(()=>{if(f)return;const k=setInterval(()=>{o&&o()},1e3);return()=>clearInterval(k)},[f,o]);function $(k){const z={};for(const S of k)S.status==="Pending"&&S.comboGroupId&&(z[S.comboGroupId]||(z[S.comboGroupId]=[]),z[S.comboGroupId].push(S));return Object.values(z).forEach(S=>S.sort((O,B)=>new Date(O.createdAt)-new Date(B.createdAt))),z}function A(k){return!k||k.length===0?null:k[k.length-1].taskCode}const E=(k,z)=>k.isCombo&&typeof k.comboIndex<"u"?`${k.taskCode||k._id||"noid"}-combo-${k.comboIndex}`:k.taskCode||k._id||`idx-${z}`,N=(k,z=1600)=>{y({show:!0,message:k}),setTimeout(()=>y({show:!1,message:""}),z)},v=async k=>{if(k.isCombo&&k.canSubmit&&s<0){N("Insufficient Balance."),setTimeout(()=>{n("/deposit")},1600);return}h(z=>({...z,[k.taskCode]:!0})),m(z=>({...z,[k.taskCode]:!1})),setTimeout(async()=>{const z=await a(k.taskCode);if(h(S=>({...S,[k.taskCode]:!1})),!z.success&&z.mustDeposit){N("Insufficient Balance."),setTimeout(()=>{n("/deposit")},1600);return}z.success?(m(S=>({...S,[k.taskCode]:!0})),await d(),o&&o(),setTimeout(()=>{m(S=>({...S,[k.taskCode]:!1}))},1500)):alert(z.message||"Failed to submit task.")},3e3)},I=r.filter(k=>e==="All"||k.status&&k.status.toLowerCase()===e.toLowerCase()),L=$(I),_=Object.values(L).map(A),se=[...I].sort((k,z)=>k.comboGroupId&&z.comboGroupId&&k.comboGroupId===z.comboGroupId&&k.status==="Pending"&&z.status==="Pending"?(z.canSubmit?1:0)-(k.canSubmit?1:0):new Date(z.startedAt||z.createdAt)-new Date(k.startedAt||k.createdAt)),ge=k=>k&&typeof k.image=="string"&&k.image.trim()!==""&&k.image!=="null"?k.image:"/assets/images/products/default.png",le=k=>{const z=Number(k||0);return Number.isFinite(z)?z.toFixed(2):""},yt=(k,z)=>{var S,O,B,G,H,V;return i.jsxs("div",{className:"record-card",children:[i.jsxs("div",{className:"record-top",children:[i.jsxs("div",{className:"record-time",children:[i.jsx("img",{src:lm,alt:"date",className:"cal-icon"}),i.jsx("span",{children:k.completedAt?new Date(k.completedAt).toLocaleString():k.startedAt?new Date(k.startedAt).toLocaleString():k.createdAt?new Date(k.createdAt).toLocaleString():""})]}),i.jsx("span",{className:"badge","data-i18n":k.status||"",children:k.status})]}),i.jsxs("div",{className:"record-content",children:[i.jsx("img",{src:ge(k.product),alt:((S=k.product)==null?void 0:S.name)||"Product",className:"record-img"}),i.jsxs("div",{className:"record-info",children:[i.jsx("div",{className:"record-title",title:(O=k.product)==null?void 0:O.name,children:(B=k.product)==null?void 0:B.name}),i.jsx("div",{className:"record-meta",children:i.jsxs("div",{children:[i.jsx("span",{className:"price-currency",children:x||""})," ",i.jsx("span",{className:"price-value",children:le((G=k.product)==null?void 0:G.price)}),i.jsx("span",{style:{marginLeft:8,color:"#666",fontWeight:600},children:"x1"})]})}),i.jsxs("div",{className:"record-stars","aria-hidden":"true",children:[i.jsx("span",{children:"★"}),i.jsx("span",{children:"★"}),i.jsx("span",{children:"★"}),i.jsx("span",{children:"★"}),i.jsx("span",{children:"★"})]})]})]}),i.jsxs("div",{className:"record-footer",children:[i.jsxs("div",{className:"footer-col",children:[i.jsx("div",{className:"footer-label",children:"Total Amount"}),i.jsxs("div",{className:"footer-value",children:[x||""," ",le((H=k.product)==null?void 0:H.price)]})]}),i.jsxs("div",{className:"footer-col",children:[i.jsx("div",{className:"footer-label",children:"Profit"}),i.jsxs("div",{className:"footer-value",children:[x||""," ",le((V=k.product)==null?void 0:V.commission)]})]})]}),(k.status==="Pending"&&(!k.isCombo||k.canSubmit)||u[k.taskCode]&&k.status==="Completed")&&(!k.comboGroupId||_.includes(k.taskCode)||k.canSubmit)&&i.jsx("button",{className:"submit-btn",onClick:()=>v(k),disabled:c[k.taskCode]||u[k.taskCode],style:{width:"100%"},children:c[k.taskCode]?"Submitting...":u[k.taskCode]?"Submitted":"Submit"})]},E(k,z))};return i.jsxs("div",{className:"records-container",children:[i.jsx("style",{children:um}),i.jsx(hm,{onContactClick:()=>j(!0)}),i.jsxs("div",{className:"records-hero",children:[i.jsx("button",{className:"back-btn",onClick:()=>n(-1),"aria-label":"Go back",children:i.jsx("img",{src:Ie,alt:"back"})}),i.jsx("h1",{children:"Records"}),i.jsx("div",{style:{width:48}})," "]}),i.jsx(pm,{show:f}),i.jsx(fm,{show:w.show,message:w.message}),i.jsx("div",{className:"tabs",role:"tablist","aria-label":"Records filter tabs",children:dm.map(k=>i.jsx("div",{role:"tab","aria-selected":e===k,className:`tab ${e===k?"active":""}`,onClick:()=>t(k),"data-i18n":k,children:k},k))}),i.jsx("div",{style:{height:8}}),i.jsx("div",{className:"record-list",children:f?i.jsx("div",{style:{height:"120px"}}):se.length===0?i.jsx("p",{className:"no-records",children:"No records in this category."}):se.map((k,z)=>yt(k,z))}),i.jsxs("nav",{className:"bottom-navigation",role:"navigation","aria-label":"Footer navigation",children:[i.jsxs("button",{className:"bottom-item",type:"button",onClick:()=>n("/dashboard"),children:[i.jsx("img",{src:Zs,alt:"Home"}),i.jsx("span",{children:"Home"})]}),i.jsxs("button",{className:"bottom-item starting",type:"button",onClick:()=>n("/tasks"),children:[i.jsx("img",{src:el,alt:"Starting"}),i.jsx("span",{children:"Starting"})]}),i.jsxs("button",{className:"bottom-item",type:"button",onClick:()=>n("/records"),children:[i.jsx("img",{src:tl,alt:"Records"}),i.jsx("span",{children:"Records"})]})]}),i.jsx(me,{open:b,onClose:()=>j(!1)})]})},gm=`
  html, body, #root {
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  .personal-info-page {
    min-height: 100vh;
    overflow-x: hidden;
    background:
      radial-gradient(circle at 50% 35%, rgba(0, 102, 190, 0.13), transparent 38%),
      linear-gradient(180deg, #03152d 0%, #021b38 48%, #031a34 100%);
    color: #f4f8ff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    padding-bottom: 40px;
  }

  .personal-info-page button {
    font-family: inherit;
  }

  .personal-info-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid rgba(0, 191, 243, 0.32);
    background:
      linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%);
  }

  .personal-info-logo {
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
    filter: brightness(0) invert(1);
  }

  .personal-info-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .personal-info-contact {
    min-width: clamp(112px, 14vw, 178px);
    height: clamp(40px, 5vw, 62px);
    padding: 0 clamp(16px, 2vw, 26px);
    border: 1px solid rgba(0, 191, 243, 0.8);
    border-radius: 40px;
    color: #f4f8ff;
    background: linear-gradient(110deg, rgba(7, 39, 76, 0.96), rgba(14, 34, 72, 0.96));
    font-size: clamp(0.85rem, 1.65vw, 1.65rem);
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
  }

  .personal-info-contact:hover {
    background: linear-gradient(110deg, rgba(8, 54, 98, 0.98), rgba(31, 35, 91, 0.98));
  }

  .personal-info-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: clamp(34px, 5vw, 64px);
    height: clamp(26px, 3.5vw, 44px);
    padding: 4px 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .personal-info-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    background: linear-gradient(90deg, #00bff3 0%, #168fe4 58%, #7048df 100%);
    box-shadow: 0 0 8px rgba(0, 191, 243, 0.16);
  }

  .personal-info-title-bar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: clamp(50px, 6vw, 70px);
    padding: clamp(12px, 2vw, 16px) clamp(18px, 4.2vw, 42px);
    background:
      radial-gradient(circle at 50% 35%, rgba(0, 102, 190, 0.13), transparent 38%),
      linear-gradient(180deg, #03152d 0%, #021b38 48%, #031a34 100%);
    border-bottom: 1px solid rgba(0, 191, 243, 0.32);
  }

  .personal-info-back {
    position: absolute;
    left: clamp(18px, 4.2vw, 42px);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .personal-info-back img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    display: block;
    filter: brightness(0) invert(1);
  }

  .personal-info-title-bar h1 {
    margin: 0;
    font-size: clamp(1.5rem, 2.5vw, 2.2rem);
    font-weight: 600;
    letter-spacing: -0.05em;
    color: #f4f8ff;
  }

  .personal-info-content {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
    padding: clamp(20px, 3vw, 30px) 0;
  }

  .section-title {
    margin: clamp(20px, 3vw, 30px) 0 clamp(12px, 2vw, 18px);
    font-size: clamp(1rem, 1.6vw, 1.2rem);
    font-weight: 700;
    color: #e6f3ff;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .profile-card {
    background: linear-gradient(145deg, #072952 0%, #061f42 100%);
    border-radius: 14px;
    margin-bottom: 24px;
    padding: 0;
    overflow: hidden;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), 0 2px 8px rgba(0,0,0,0.05);
    border: 1px solid #176db1;
  }

  .info-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 56px;
    padding: 0 clamp(14px, 2vw, 20px);
    border-bottom: 1px solid #205c94;
    background: transparent;
  }

  .info-row:last-child {
    border-bottom: none;
  }

  .info-label {
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    font-weight: 600;
    color: #f4f8ff;
    letter-spacing: -0.02em;
  }

  .info-value {
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    font-weight: 500;
    color: #eaf4ff;
    text-align: right;
    letter-spacing: -0.02em;
  }

  .security-section {
    margin-top: clamp(24px, 3vw, 32px);
  }

  .security-title {
    margin: 0 0 clamp(12px, 2vw, 18px);
    font-size: clamp(1rem, 1.6vw, 1.2rem);
    font-weight: 700;
    color: #e6f3ff;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .security-card {
    background: linear-gradient(145deg, #072952 0%, #061f42 100%);
    border-radius: 14px;
    padding: 0;
    overflow: hidden;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), 0 2px 8px rgba(0,0,0,0.05);
    border: 1px solid #176db1;
  }

  .security-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 56px;
    padding: 0 clamp(14px, 2vw, 20px);
    border-bottom: 1px solid #205c94;
    background: transparent;
    border: none;
    cursor: pointer;
    width: 100%;
    text-align: left;
    transition: background 0.15s;
  }

  .security-row:hover {
    background: rgba(0, 191, 243, 0.06);
  }

  .security-row:last-child {
    border-bottom: none;
  }

  .security-label {
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    font-weight: 600;
    color: #f4f8ff;
    letter-spacing: -0.02em;
  }

  .chevron {
    font-size: clamp(1.2rem, 1.8vw, 1.4rem);
    color: #9ec8e8;
    line-height: 1;
    font-weight: 300;
  }

  @media (max-width: 720px) {
    .personal-info-header {
      min-height: 72px;
      padding: 12px 14px;
    }

    .personal-info-logo {
      width: 180px;
      height: 34px;
    }

    .personal-info-header-actions {
      gap: 9px;
    }

    .personal-info-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .personal-info-menu {
      width: 28px;
      height: 24px;
    }

    .personal-info-menu span {
      height: 2px;
    }

    .personal-info-title-bar {
      min-height: 48px;
      padding: 10px 14px;
    }

    .personal-info-back {
      width: 32px;
      height: 32px;
      left: 14px;
    }

    .personal-info-back img {
      width: 20px;
      height: 20px;
    }

    .personal-info-title-bar h1 {
      font-size: 1.5rem;
    }

    .personal-info-content {
      width: calc(100% - 28px);
      padding: 16px 0;
    }
  }
`;function xm(){const e=ie(),{profile:t}=Vr(),[n,r]=g.useState(!1);if(!t)return i.jsx("div",{style:{padding:12},children:"No profile found."});const a=(t==null?void 0:t.username)||"N/A",o=(t==null?void 0:t.phone)||"N/A",s=(t==null?void 0:t.gender)||"N/A";return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:gm}),i.jsxs("div",{className:"personal-info-page",children:[i.jsxs("header",{className:"personal-info-header",children:[i.jsx("img",{src:pe,alt:"Instrument",className:"personal-info-logo"}),i.jsxs("div",{className:"personal-info-header-actions",children:[i.jsx("button",{type:"button",className:"personal-info-contact",onClick:()=>r(!0),children:"Contact"}),i.jsxs("button",{type:"button",className:"personal-info-menu",onClick:()=>e("/profile"),"aria-label":"Open profile menu",children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]})]})]}),i.jsxs("div",{className:"personal-info-title-bar",children:[i.jsx("button",{type:"button",className:"personal-info-back",onClick:()=>e(-1),"aria-label":"Go back",children:i.jsx("img",{src:Ie,alt:"Back"})}),i.jsx("h1",{children:"Account Info"})]}),i.jsxs("main",{className:"personal-info-content",children:[i.jsx("div",{className:"section-title",children:"My Profile"}),i.jsxs("div",{className:"profile-card",children:[i.jsxs("div",{className:"info-row",children:[i.jsx("div",{className:"info-label",children:"Username"}),i.jsx("div",{className:"info-value",children:a})]}),i.jsxs("div",{className:"info-row",children:[i.jsx("div",{className:"info-label",children:"Mobile Number"}),i.jsx("div",{className:"info-value",children:o})]}),i.jsxs("div",{className:"info-row",children:[i.jsx("div",{className:"info-label",children:"Gender"}),i.jsx("div",{className:"info-value",children:s})]})]}),i.jsxs("div",{className:"security-section",children:[i.jsx("div",{className:"security-title",children:"Security"}),i.jsxs("div",{className:"security-card",children:[i.jsxs("button",{type:"button",className:"security-row",onClick:()=>e("/update-password"),children:[i.jsx("span",{className:"security-label",children:"Login Password"}),i.jsx("span",{className:"chevron",children:"⌄"})]}),i.jsxs("button",{type:"button",className:"security-row",onClick:()=>e("/update-withdraw-password"),children:[i.jsx("span",{className:"security-label",children:"Transaction Password"}),i.jsx("span",{className:"chevron",children:"⌄"})]})]})]})]}),i.jsx(me,{open:n,onClose:()=>r(!1)})]})]})}const wm=`
  html, body, #root {
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  .bind-wallet-page {
    min-height: 100vh;
    overflow-x: hidden;
    background: radial-gradient(circle at 50% 35%, rgba(0, 102, 190, 0.13), transparent 38%), linear-gradient(180deg, #03152d 0%, #021b38 48%, #031a34 100%);
    color: #f4f8ff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    padding-bottom: 40px;
  }

  .bind-wallet-page button {
    font-family: inherit;
  }

  .bind-wallet-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid rgba(0, 191, 243, 0.32);
    background: linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%);
  }

  .bind-wallet-logo {
    width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
    filter: brightness(0) invert(1);
  }

  .bind-wallet-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .bind-wallet-contact {
    min-width: clamp(112px, 14vw, 178px);
    height: clamp(40px, 5vw, 62px);
    padding: 0 clamp(16px, 2vw, 26px);
    border: 0;
    border-radius: 40px;
    color: #ffffff;
    background: linear-gradient(110deg, rgba(7, 39, 76, 0.96), rgba(14, 34, 72, 0.96));
    font-size: clamp(0.85rem, 1.65vw, 1.65rem);
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
  }

  .bind-wallet-contact:hover {
    background: linear-gradient(110deg, rgba(8, 54, 98, 0.98), rgba(31, 35, 91, 0.98));
  }

  .bind-wallet-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: clamp(34px, 5vw, 64px);
    height: clamp(26px, 3.5vw, 44px);
    padding: 4px 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .bind-wallet-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    background: linear-gradient(110deg, rgba(7, 39, 76, 0.96), rgba(14, 34, 72, 0.96));
  }

  .bind-wallet-title-bar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: clamp(50px, 6vw, 70px);
    padding: clamp(12px, 2vw, 16px) clamp(18px, 4.2vw, 42px);
    background: radial-gradient(circle at 50% 35%, rgba(0, 102, 190, 0.13), transparent 38%), linear-gradient(180deg, #03152d 0%, #021b38 48%, #031a34 100%);
    border-bottom: 1px solid rgba(0, 191, 243, 0.32);
  }

  .bind-wallet-back {
    position: absolute;
    left: clamp(18px, 4.2vw, 42px);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .bind-wallet-back img {
    filter: brightness(0) invert(1);
    width: 24px;
    height: 24px;
    object-fit: contain;
    display: block;
  }

  .bind-wallet-title-bar h1 {
    margin: 0;
    font-size: clamp(1.5rem, 2.5vw, 2.2rem);
    font-weight: 600;
    letter-spacing: -0.05em;
    color: #f4f8ff;
  }

  .bind-wallet-content {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
    padding: clamp(20px, 3vw, 30px);
  }

  .form-card {
    background: linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%);
    border-radius: 14px;
    padding: clamp(20px, 3vw, 28px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }

  .form-section {
    margin-bottom: clamp(18px, 2.5vw, 24px);
    position: relative;
  }

  .form-section:last-of-type {
    margin-bottom: clamp(20px, 3vw, 28px);
  }

  .section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: clamp(14px, 2vw, 16px) clamp(14px, 2vw, 18px);
    background: linear-gradient(145deg, #072952 0%, #061f42 100%);
    border-radius: 8px;
    border: 1px solid #176db1;
    cursor: pointer;
    width: 100%;
    font-size: inherit;
    font-family: inherit;
    transition: background 0.2s;
  }

  .section-header:hover {
    background: rgba(0, 191, 243, 0.06);
  }

  .section-header-title {
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    font-weight: 600;
    color: #f4f8ff;
    letter-spacing: -0.02em;
  }

  .dropdown-arrow {
    font-size: clamp(0.9rem, 1.4vw, 1rem);
    color: #9ec8e8;
    line-height: 1;
    transition: transform 0.2s;
  }

  .dropdown-arrow.open {
    transform: rotate(180deg);
  }

  .section-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }

  .section-content.open {
    max-height: 400px;
  }

  .section-inner {
    padding: clamp(12px, 1.8vw, 16px);
    background: #061f42;
    border: 1px solid #205c94;
    border-top: none;
    border-radius: 0 0 8px 8px;
  }

  .dropdown-item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: clamp(10px, 1.5vw, 12px) 0;
    border-bottom: 1px solid #205c94;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    color: #f4f8ff;
    font-weight: 500;
    letter-spacing: -0.02em;
    text-align: left;
    transition: background 0.2s;
  }

  .dropdown-item:last-child {
    border-bottom: none;
  }

  .dropdown-item:hover {
    background: linear-gradient(145deg, #072952 0%, #061f42 100%);
  }

  .dropdown-item.selected {
    font-weight: 600;
  }

  .dropdown-checkmark {
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    color: #168b38;
  }

  .form-group {
    margin-bottom: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .form-label {
    font-size: clamp(0.9rem, 1.4vw, 1rem);
    font-weight: 600;
    color: #f4f8ff;
    letter-spacing: -0.02em;
  }

  .form-input {
    width: 100%;
    padding: clamp(10px, 1.5vw, 12px) clamp(12px, 1.8vw, 14px);
    border-radius: 7px;
    background: linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%);
    border: 1px solid #d5d5d5;
    font-size: clamp(0.9rem, 1.4vw, 1rem);
    color: #f4f8ff;
    letter-spacing: 0.01em;
  }

  .form-input:focus {
    outline: none;
    border-color: #f4f8ff;
    background: linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%);
  }

  .form-input::placeholder {
    color: #b0b0b0;
  }

  .toggle-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: clamp(14px, 2vw, 16px) clamp(14px, 2vw, 18px);
    background: linear-gradient(145deg, #072952 0%, #061f42 100%);
    border-radius: 8px;
    border: 1px solid #176db1;
  }

  .toggle-label {
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    font-weight: 600;
    color: #f4f8ff;
    letter-spacing: -0.02em;
  }

  .toggle-switch {
    position: relative;
    width: 50px;
    height: 28px;
    background: #205c94;
    border-radius: 999px;
    border: none;
    cursor: pointer;
    padding: 0;
    margin: 0;
    transition: background 0.2s;
  }

  .toggle-switch.active {
    background: #168fe4;
  }

  .toggle-switch::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    background: linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%);
    border-radius: 50%;
    top: 2px;
    left: 2px;
    transition: left 0.2s;
  }

  .toggle-switch.active::after {
    left: 24px;
  }

  .submit-button {
    width: 100%;
    padding: clamp(14px, 2vw, 18px);
    border: none;
    border-radius: 100px;
    background: linear-gradient(110deg, #00bff3 0%, #168fe4 58%, #7048df 100%);
    color: #ffffff;
    font-size: clamp(1rem, 1.6vw, 1.2rem);
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    letter-spacing: -0.02em;
  }

  .submit-button:hover:not(:disabled) {
    background: linear-gradient(110deg, #168fe4 0%, #7048df 100%);
  }

  .submit-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .success-message {
    position: fixed;
    bottom: clamp(20px, 4vw, 30px);
    left: 50%;
    transform: translateX(-50%);
    background: #168b38;
    color: #ffffff;
    padding: clamp(12px, 2vw, 16px) clamp(16px, 2vw, 20px);
    border-radius: 8px;
    font-size: clamp(0.9rem, 1.4vw, 1rem);
    font-weight: 600;
    box-shadow: 0 2px 12px rgba(0,0,0,0.15);
    z-index: 1000;
    animation: slide-up 0.3s ease;
  }

  @keyframes slide-up {
    from { opacity: 0; transform: translateX(-50%) translateY(20px); }
    to { opacity: 1; transform: translateX(-50%) translateY(0); }
  }

  @media (max-width: 720px) {
    .bind-wallet-header {
      min-height: 72px;
      padding: 12px 14px;
    }

    .bind-wallet-logo {
      width: 180px;
      height: 34px;
    }

    .bind-wallet-header-actions {
      gap: 9px;
    }

    .bind-wallet-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .bind-wallet-menu {
      width: 28px;
      height: 24px;
    }

    .bind-wallet-menu span {
      height: 2px;
    }

    .bind-wallet-title-bar {
      min-height: 48px;
      padding: 10px 14px;
    }

    .bind-wallet-back {
      width: 32px;
      height: 32px;
      left: 14px;
    }

    .bind-wallet-back img {
      width: 20px;
      height: 20px;
    }

    .bind-wallet-title-bar h1 {
      font-size: 1.5rem;
    }

    .bind-wallet-content {
      width: calc(100% - 28px);
      padding: 16px 0;
    }

    .form-card {
      padding: 16px;
    }
  }
`,vm="https://dept-admin.onrender.com/api";function ym(){const e=ie(),{profile:t}=Vr(),[n,r]=g.useState("BTC"),[a,o]=g.useState(!1),[s,l]=g.useState(""),[d,c]=g.useState(""),[h,u]=g.useState(""),[m,w]=g.useState(!1),[y,b]=g.useState(!1),[j,f]=g.useState(null),[p,x]=g.useState(!1),$=["BTC","ETH","ERC-USDT","TRC-USDT"],A=async N=>{if(N.preventDefault(),!h.trim()){alert("Please enter a wallet address.");return}w(!0);try{const v=localStorage.getItem("authToken"),L=await(await fetch(`${vm}/bind-wallet`,{method:"POST",headers:{"Content-Type":"application/json","X-Auth-Token":v},body:JSON.stringify({walletType:n,isDefault:a,accountHolderName:s,walletName:d,walletAddress:h})})).json();w(!1),L.success?(b(!0),setTimeout(()=>{b(!1),e("/personal-info")},2e3)):alert(L.message||"Failed to bind wallet.")}catch{w(!1),alert("Network error. Please try again.")}},E=()=>{f(j==="withdrawal"?null:"withdrawal")};return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:wm}),i.jsxs("div",{className:"bind-wallet-page",children:[i.jsxs("header",{className:"bind-wallet-header",children:[i.jsx("img",{src:pe,alt:"Instrument",className:"bind-wallet-logo"}),i.jsxs("div",{className:"bind-wallet-header-actions",children:[i.jsx("button",{type:"button",className:"bind-wallet-contact",onClick:()=>x(!0),children:"Contact"}),i.jsxs("button",{type:"button",className:"bind-wallet-menu",onClick:()=>e("/profile"),"aria-label":"Open profile menu",children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]})]})]}),i.jsxs("div",{className:"bind-wallet-title-bar",children:[i.jsx("button",{type:"button",className:"bind-wallet-back",onClick:()=>e(-1),"aria-label":"Go back",children:i.jsx("img",{src:Ie,alt:"Back"})}),i.jsx("h1",{children:"Payment Methods"})]}),i.jsx("main",{className:"bind-wallet-content",children:i.jsxs("form",{onSubmit:A,className:"form-card",children:[i.jsxs("div",{className:"form-section",children:[i.jsxs("button",{type:"button",className:"section-header",onClick:E,children:[i.jsx("span",{className:"section-header-title",children:"Withdrawal Type"}),i.jsx("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:i.jsx("span",{className:"section-header-title",children:n})})]}),i.jsx("div",{className:`section-content ${j==="withdrawal"?"open":""}`,children:i.jsx("div",{className:"section-inner",children:$.map(N=>i.jsxs("button",{type:"button",className:`dropdown-item ${n===N?"selected":""}`,onClick:()=>{r(N),f(null)},children:[i.jsx("span",{children:N}),n===N&&i.jsx("span",{className:"dropdown-checkmark",children:"✓"})]},N))})})]}),i.jsx("div",{className:"form-section",children:i.jsxs("div",{className:"toggle-container",children:[i.jsx("span",{className:"toggle-label",children:"Default"}),i.jsx("button",{type:"button",className:`toggle-switch ${a?"active":""}`,onClick:()=>o(!a),"aria-label":"Toggle default wallet"})]})}),i.jsxs("div",{className:"form-section",children:[i.jsx("div",{className:"section-header",style:{cursor:"default",background:"linear-gradient(145deg, #072952 0%, #061f42 100%)"},children:i.jsx("span",{className:"section-header-title",children:"Account Holder Name"})}),i.jsx("div",{style:{padding:"clamp(12px, 1.8vw, 16px)",background:"#f9f9f9",borderRadius:"0 0 8px 8px",border:"1px solid #e8e8e8",borderTop:"none"},children:i.jsx("input",{type:"text",className:"form-input",placeholder:"Account Holder Name",value:s,onChange:N=>l(N.target.value)})})]}),i.jsxs("div",{className:"form-section",children:[i.jsx("div",{className:"section-header",style:{cursor:"default",background:"linear-gradient(145deg, #072952 0%, #061f42 100%)"},children:i.jsx("span",{className:"section-header-title",children:"Wallet Name"})}),i.jsx("div",{style:{padding:"clamp(12px, 1.8vw, 16px)",background:"#f9f9f9",borderRadius:"0 0 8px 8px",border:"1px solid #e8e8e8",borderTop:"none"},children:i.jsx("input",{type:"text",className:"form-input",placeholder:"Wallet Name",value:d,onChange:N=>c(N.target.value)})})]}),i.jsxs("div",{className:"form-section",children:[i.jsx("div",{className:"section-header",style:{cursor:"default",background:"linear-gradient(145deg, #072952 0%, #061f42 100%)"},children:i.jsx("span",{className:"section-header-title",children:"Wallet Address"})}),i.jsx("div",{style:{padding:"clamp(12px, 1.8vw, 16px)",background:"#f9f9f9",borderRadius:"0 0 8px 8px",border:"1px solid #e8e8e8",borderTop:"none"},children:i.jsx("input",{type:"text",className:"form-input",placeholder:"Wallet Address",value:h,onChange:N=>u(N.target.value),required:!0})})]}),i.jsx("button",{type:"submit",className:"submit-button",disabled:m,children:m?"Submitting...":"Submit"})]})}),y&&i.jsx("div",{className:"success-message",children:"✅ Wallet bound successfully!"}),i.jsx(me,{open:p,onClose:()=>x(!1)})]})]})}const bm="https://dept-admin.onrender.com",Bd="#00bff3";function $m(){const[e,t]=g.useState([]),[n,r]=g.useState(!0),a=ie();return g.useEffect(()=>{fetch(`${bm}/api/notifications`,{headers:{"X-Auth-Token":localStorage.getItem("authToken")}}).then(o=>o.json()).then(o=>{o.success&&(t(o.notifications),o.notifications.length>0&&localStorage.setItem("lastReadNotificationId",o.notifications[0].id)),r(!1)}).catch(()=>r(!1))},[]),i.jsxs("div",{className:"min-h-screen pb-20",style:{background:"radial-gradient(circle at 50% 35%, rgba(0, 102, 190, 0.13), transparent 38%), linear-gradient(180deg, #03152d 0%, #021b38 48%, #031a34 100%)",color:"#f4f8ff",minHeight:"100vh"},children:[i.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",minHeight:"72px",padding:"12px 14px",background:"linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%)",borderBottom:"1px solid rgba(0, 191, 243, 0.32)"},children:[i.jsx("button",{"aria-label":"Back","data-i18n-aria":"Back",onClick:()=>a(-1),style:{position:"absolute",left:"14px",top:"50%",transform:"translateY(-50%)",background:"none",border:"none",padding:0,margin:0,cursor:"pointer",lineHeight:1,zIndex:2,display:"flex",alignItems:"center",justifyContent:"center",width:"40px",height:"40px"},children:i.jsx("img",{src:Ie,alt:"Back",style:{width:"24px",height:"24px",objectFit:"contain",display:"block",filter:"brightness(0) invert(1)"}})}),i.jsx("img",{src:pe,alt:"Instrument",style:{width:"180px",height:"34px",objectFit:"contain",display:"block",filter:"brightness(0) invert(1)"}})]}),i.jsx("div",{style:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",minHeight:"48px",padding:"10px 14px",background:"radial-gradient(circle at 50% 35%, rgba(0, 102, 190, 0.13), transparent 38%), linear-gradient(180deg, #03152d 0%, #021b38 48%, #031a34 100%)",borderBottom:"1px solid rgba(0, 191, 243, 0.32)"},children:i.jsx("span",{"data-i18n":"Notifications",style:{color:Bd,fontSize:"0.95rem",fontWeight:600,lineHeight:1.2,whiteSpace:"nowrap"},children:"Notifications"})}),i.jsx("div",{style:{width:"min(calc(100% - 28px), 1046px)",margin:"0 auto",padding:"24px 0"},children:n?i.jsx("div",{className:"text-center","data-i18n":"Loading...",style:{color:"#b0b0b0",padding:"20px 0"},children:"Loading..."}):e.length===0?i.jsx("div",{className:"text-center","data-i18n":"No notifications at the moment.",style:{color:"#b0b0b0",padding:"8px 0",fontSize:"1rem"},children:"No notifications at the moment."}):i.jsx("ul",{className:"space-y-4",style:{listStyle:"none",margin:0,padding:0},children:e.map(o=>i.jsxs("li",{className:"border rounded p-4 shadow-sm",style:{background:"linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%)",border:"1px solid rgba(0, 191, 243, 0.32)",borderRadius:"14px",padding:"16px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.05)",color:"#f4f8ff"},children:[i.jsx("div",{className:"font-semibold",style:{color:Bd,fontWeight:600},children:o.title}),i.jsx("div",{className:"mt-1",style:{color:"#f4f8ff",marginTop:"6px",lineHeight:1.5},children:o.message}),i.jsx("div",{className:"mt-2 text-xs",style:{color:"#b0b0b0",marginTop:"8px",fontSize:"0.75rem"},children:o.createdAt&&!isNaN(new Date(o.createdAt).getTime())?new Date(o.createdAt).toLocaleString():""})]},o.id))})})]})}const jm=`
  html, body, #root {
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  .update-password-page {
    min-height: 100vh;
    overflow-x: hidden;
    background: radial-gradient(circle at 50% 35%, rgba(0, 102, 190, 0.13), transparent 38%), linear-gradient(180deg, #03152d 0%, #021b38 48%, #031a34 100%);
    color: #f4f8ff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    padding-bottom: 40px;
  }

  .update-password-page button {
    font-family: inherit;
  }

  .update-password-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid rgba(0, 191, 243, 0.32);
    background: linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%);
  }

  .update-password-logo {
    filter: brightness(0) invert(1); width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
  }

  .update-password-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .update-password-contact {
    min-width: clamp(112px, 14vw, 178px);
    height: clamp(40px, 5vw, 62px);
    padding: 0 clamp(16px, 2vw, 26px);
    border: 1px solid #00bff3;
    border-radius: 40px;
    color: #ffffff;
    background: transparent;
    font-size: clamp(0.85rem, 1.65vw, 1.65rem);
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
  }

  .update-password-contact:hover {
    background: linear-gradient(110deg, rgba(8, 54, 98, 0.98), rgba(31, 35, 91, 0.98));
  }

  .update-password-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: clamp(34px, 5vw, 64px);
    height: clamp(26px, 3.5vw, 44px);
    padding: 4px 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .update-password-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    background: linear-gradient(90deg, #00bff3 0%, #168fe4 58%, #7048df 100%);
  }

  .update-password-title-bar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: clamp(50px, 6vw, 70px);
    padding: clamp(12px, 2vw, 16px) clamp(18px, 4.2vw, 42px);
    background: radial-gradient(circle at 50% 35%, rgba(0, 102, 190, 0.13), transparent 38%), linear-gradient(180deg, #03152d 0%, #021b38 48%, #031a34 100%);
    border-bottom: 1px solid rgba(0, 191, 243, 0.32);
  }

  .update-password-back {
    position: absolute;
    left: clamp(18px, 4.2vw, 42px);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .update-password-back img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    display: block; filter: brightness(0) invert(1);
  }

  .update-password-title-bar h1 {
    margin: 0;
    font-size: clamp(1.5rem, 2.5vw, 2.2rem);
    font-weight: 600;
    letter-spacing: -0.05em;
    color: #f4f8ff;
  }

  .update-password-content {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
    padding: clamp(20px, 3vw, 30px);
  }

  .section-title {
    margin: clamp(20px, 3vw, 30px) 0 clamp(12px, 2vw, 18px);
    font-size: clamp(1rem, 1.6vw, 1.2rem);
    font-weight: 700;
    color: #f4f8ff;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .form-container {
    background: linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%);
    border-radius: 14px;
    padding: clamp(20px, 3vw, 24px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }

  .form-group {
    margin-bottom: clamp(16px, 2vw, 20px);
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .form-group:last-child {
    margin-bottom: 0;
  }

  .form-label {
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    font-weight: 600;
    color: #f4f8ff;
    letter-spacing: -0.02em;
  }

  .password-input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  .form-input {
    width: 100%;
    padding: clamp(12px, 2vw, 14px) clamp(12px, 2vw, 16px);
    border-radius: 7px;
    background: linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%);
    border: 1px solid #d5d5d5;
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    color: #f4f8ff;
    letter-spacing: 0.02em;
  }

  .form-input:focus {
    outline: none;
    border-color: #f4f8ff;
    background: linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%);
  }

  .form-input::placeholder {
    color: #b0b0b0;
  }

  .eye-toggle {
    position: absolute;
    right: clamp(10px, 1.5vw, 14px);
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    color: #9ec8e8;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .error-message {
    color: #c62828;
    font-size: clamp(0.85rem, 1.3vw, 1rem);
    margin-top: 8px;
    font-weight: 500;
  }

  .submit-button {
    width: 100%;
    padding: clamp(14px, 2vw, 18px);
    margin-top: clamp(16px, 2.5vw, 22px);
    border: none;
    border-radius: 100px;
    background: linear-gradient(110deg, #00bff3 0%, #168fe4 58%, #7048df 100%);
    color: #ffffff;
    font-size: clamp(1rem, 1.6vw, 1.2rem);
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    letter-spacing: -0.02em;
  }

  .submit-button:hover:not(:disabled) {
    background: linear-gradient(110deg, #168fe4 0%, #7048df 100%);
  }

  .submit-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .fade-message {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }

  .fade-message-content {
    background: rgba(4, 25, 52, 0.96);
    color: #fff;
    border-radius: 16px;
    padding: clamp(0.8rem, 2vw, 1.1rem) clamp(1.5rem, 3vw, 2.2rem);
    font-weight: 600;
    font-size: clamp(0.95rem, 1.6vw, 1.19rem);
    box-shadow: 0 2px 16px 0 rgba(0,0,0,0.2);
    opacity: 0.97;
    text-align: center;
    min-width: 140px;
    max-width: 80vw;
    letter-spacing: 0.01em;
    animation: fade-in-out 1s linear;
  }

  @keyframes fade-in-out {
    0% { opacity: 0; transform: scale(0.98); }
    10% { opacity: 1; transform: scale(1); }
    90% { opacity: 1; transform: scale(1); }
    100% { opacity: 0; transform: scale(0.98); }
  }

  @media (max-width: 720px) {
    .update-password-header {
      min-height: 72px;
      padding: 12px 14px;
    }

    .update-password-logo {
      width: 180px;
      height: 34px;
    }

    .update-password-header-actions {
      gap: 9px;
    }

    .update-password-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .update-password-menu {
      width: 28px;
      height: 24px;
    }

    .update-password-menu span {
      height: 2px;
    }

    .update-password-title-bar {
      min-height: 48px;
      padding: 10px 14px;
    }

    .update-password-back {
      width: 32px;
      height: 32px;
      left: 14px;
    }

    .update-password-back img {
      width: 20px;
      height: 20px;
    }

    .update-password-title-bar h1 {
      font-size: 1.5rem;
    }

    .update-password-content {
      width: calc(100% - 28px);
      padding: 16px 0;
    }

    .form-container {
      padding: 16px;
    }
  }
`;function km({message:e}){return i.jsx("div",{className:"fade-message",children:i.jsx("div",{className:"fade-message-content",children:i.jsx("span",{children:e})})})}function Am(){const e=ie(),[t,n]=g.useState(""),[r,a]=g.useState(""),[o,s]=g.useState(""),[l,d]=g.useState(!1),[c,h]=g.useState(!1),[u,m]=g.useState(!1),[w,y]=g.useState(!1),[b,j]=g.useState(""),[f,p]=g.useState(""),[x,$]=g.useState(!1),A=async E=>{if(E.preventDefault(),p(""),!t||!r||!o){p("All fields are required.");return}if(r!==o){p("New passwords do not match.");return}if(r.length<6){p("New password must be at least 6 characters.");return}y(!0);try{const N=localStorage.getItem("authToken"),L=await(await fetch("https://dept-admin.onrender.com/api/change-password",{method:"POST",headers:{"Content-Type":"application/json","X-Auth-Token":N},body:JSON.stringify({oldPassword:t,newPassword:r})})).json();y(!1),L.success?(j("Password updated successfully!"),setTimeout(()=>{localStorage.removeItem("currentUser"),localStorage.removeItem("authToken"),localStorage.removeItem("user"),e("/login")},1e3)):p(L.message||"Password update failed.")}catch{y(!1),p("Network error. Please try again.")}};return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:jm}),i.jsxs("div",{className:"update-password-page",children:[i.jsxs("header",{className:"update-password-header",children:[i.jsx("img",{src:pe,alt:"Instrument",className:"update-password-logo"}),i.jsxs("div",{className:"update-password-header-actions",children:[i.jsx("button",{type:"button",className:"update-password-contact",onClick:()=>$(!0),children:"Contact"}),i.jsxs("button",{type:"button",className:"update-password-menu",onClick:()=>e("/profile"),"aria-label":"Open profile menu",children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]})]})]}),i.jsxs("div",{className:"update-password-title-bar",children:[i.jsx("button",{type:"button",className:"update-password-back",onClick:()=>e(-1),"aria-label":"Go back",children:i.jsx("img",{src:Ie,alt:"Back"})}),i.jsx("h1",{children:"Security"})]}),i.jsxs("main",{className:"update-password-content",children:[i.jsx("div",{className:"section-title",children:"Login Password"}),i.jsx("div",{className:"form-container",children:i.jsxs("form",{onSubmit:A,children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Old Password"}),i.jsxs("div",{className:"password-input-wrapper",children:[i.jsx("input",{type:l?"text":"password",className:"form-input",placeholder:"Old Password",value:t,onChange:E=>n(E.target.value),required:!0}),i.jsx("button",{type:"button",className:"eye-toggle",onClick:()=>d(!l),"aria-label":"Toggle password visibility",children:"👁️"})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"New Password"}),i.jsxs("div",{className:"password-input-wrapper",children:[i.jsx("input",{type:c?"text":"password",className:"form-input",placeholder:"New Password",value:r,onChange:E=>a(E.target.value),required:!0}),i.jsx("button",{type:"button",className:"eye-toggle",onClick:()=>h(!c),"aria-label":"Toggle password visibility",children:"👁️"})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Confirm New Password"}),i.jsxs("div",{className:"password-input-wrapper",children:[i.jsx("input",{type:u?"text":"password",className:"form-input",placeholder:"Confirm New Password",value:o,onChange:E=>s(E.target.value),required:!0}),i.jsx("button",{type:"button",className:"eye-toggle",onClick:()=>m(!u),"aria-label":"Toggle password visibility",children:"👁️"})]})]}),f&&i.jsx("div",{className:"error-message",children:f}),i.jsx("button",{type:"submit",className:"submit-button",disabled:w,children:w?"Updating...":"Update"})]})})]}),b&&i.jsx(km,{message:b}),i.jsx(me,{open:x,onClose:()=>$(!1)})]})]})}const Sm=`
  html, body, #root {
    margin: 0;
    min-height: 100%;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  .update-withdraw-password-page {
    min-height: 100vh;
    overflow-x: hidden;
    background: radial-gradient(circle at 50% 35%, rgba(0, 102, 190, 0.13), transparent 38%), linear-gradient(180deg, #03152d 0%, #021b38 48%, #031a34 100%);
    color: #f4f8ff;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    padding-bottom: 40px;
  }

  .update-withdraw-password-page button {
    font-family: inherit;
  }

  .update-withdraw-password-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: clamp(72px, 9vw, 96px);
    padding: clamp(14px, 2vw, 20px) clamp(18px, 4.2vw, 42px);
    border-bottom: 1px solid rgba(0, 191, 243, 0.32);
    background: linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%);
  }

  .update-withdraw-password-logo {
    filter: brightness(0) invert(1); width: clamp(190px, 31vw, 470px);
    max-width: 52%;
    height: clamp(32px, 5.5vw, 58px);
    object-fit: contain;
    object-position: left center;
  }

  .update-withdraw-password-header-actions {
    display: flex;
    align-items: center;
    gap: clamp(16px, 2.5vw, 30px);
  }

  .update-withdraw-password-contact {
    min-width: clamp(112px, 14vw, 178px);
    height: clamp(40px, 5vw, 62px);
    padding: 0 clamp(16px, 2vw, 26px);
    border: 1px solid #00bff3;
    border-radius: 40px;
    color: #ffffff;
    background: transparent;
    font-size: clamp(0.85rem, 1.65vw, 1.65rem);
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
  }

  .update-withdraw-password-contact:hover {
    background: linear-gradient(110deg, rgba(8, 54, 98, 0.98), rgba(31, 35, 91, 0.98));
  }

  .update-withdraw-password-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: clamp(34px, 5vw, 64px);
    height: clamp(26px, 3.5vw, 44px);
    padding: 4px 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .update-withdraw-password-menu span {
    display: block;
    width: 100%;
    height: clamp(2px, 0.35vw, 4px);
    background: linear-gradient(90deg, #00bff3 0%, #168fe4 58%, #7048df 100%);
  }

  .update-withdraw-password-title-bar {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: clamp(50px, 6vw, 70px);
    padding: clamp(12px, 2vw, 16px) clamp(18px, 4.2vw, 42px);
    background: radial-gradient(circle at 50% 35%, rgba(0, 102, 190, 0.13), transparent 38%), linear-gradient(180deg, #03152d 0%, #021b38 48%, #031a34 100%);
    border-bottom: 1px solid rgba(0, 191, 243, 0.32);
  }

  .update-withdraw-password-back {
    position: absolute;
    left: clamp(18px, 4.2vw, 42px);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .update-withdraw-password-back img {
    width: 24px;
    height: 24px;
    object-fit: contain;
    display: block; filter: brightness(0) invert(1);
  }

  .update-withdraw-password-title-bar h1 {
    margin: 0;
    font-size: clamp(1.5rem, 2.5vw, 2.2rem);
    font-weight: 600;
    letter-spacing: -0.05em;
    color: #f4f8ff;
  }

  .update-withdraw-password-content {
    width: min(calc(100% - clamp(36px, 8.4vw, 84px)), 1046px);
    margin: 0 auto;
    padding: clamp(20px, 3vw, 30px);
  }

  .section-title {
    margin: clamp(20px, 3vw, 30px) 0 clamp(12px, 2vw, 18px);
    font-size: clamp(1rem, 1.6vw, 1.2rem);
    font-weight: 700;
    color: #f4f8ff;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .form-container {
    background: linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%);
    border-radius: 14px;
    padding: clamp(20px, 3vw, 24px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }

  .form-group {
    margin-bottom: clamp(16px, 2vw, 20px);
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .form-group:last-of-type {
    margin-bottom: clamp(16px, 2vw, 20px);
  }

  .form-label {
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    font-weight: 600;
    color: #f4f8ff;
    letter-spacing: -0.02em;
  }

  .password-input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  .form-input {
    width: 100%;
    padding: clamp(12px, 2vw, 14px) clamp(12px, 2vw, 16px);
    border-radius: 7px;
    background: linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%);
    border: 1px solid #d5d5d5;
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    color: #f4f8ff;
    letter-spacing: 0.02em;
  }

  .form-input:focus {
    outline: none;
    border-color: #f4f8ff;
    background: linear-gradient(110deg, rgba(4, 25, 52, 0.99) 0%, rgba(3, 19, 42, 0.99) 55%, rgba(12, 20, 58, 0.99) 100%);
  }

  .form-input::placeholder {
    color: #b0b0b0;
  }

  .eye-toggle {
    position: absolute;
    right: clamp(10px, 1.5vw, 14px);
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    font-size: clamp(1rem, 1.5vw, 1.2rem);
    color: #9ec8e8;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .error-message {
    color: #c62828;
    font-size: clamp(0.85rem, 1.3vw, 1rem);
    margin-top: 0;
    font-weight: 500;
  }

  .submit-button {
    width: 100%;
    padding: clamp(14px, 2vw, 18px);
    margin-top: clamp(16px, 2.5vw, 22px);
    border: none;
    border-radius: 100px;
    background: linear-gradient(110deg, #00bff3 0%, #168fe4 58%, #7048df 100%);
    color: #ffffff;
    font-size: clamp(1rem, 1.6vw, 1.2rem);
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    letter-spacing: -0.02em;
  }

  .submit-button:hover:not(:disabled) {
    background: linear-gradient(110deg, #168fe4 0%, #7048df 100%);
  }

  .submit-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  .success-message {
    text-align: center;
    padding: clamp(20px, 3vw, 30px) 0;
  }

  .success-text {
    color: #168b38;
    font-weight: 600;
    font-size: clamp(0.95rem, 1.5vw, 1.1rem);
    margin-bottom: 12px;
    letter-spacing: -0.02em;
  }

  .success-subtext {
    color: #b0b0b0;
    font-weight: 400;
    font-size: clamp(0.85rem, 1.3vw, 1rem);
    letter-spacing: -0.02em;
  }

  @media (max-width: 720px) {
    .update-withdraw-password-header {
      min-height: 72px;
      padding: 12px 14px;
    }

    .update-withdraw-password-logo {
      width: 180px;
      height: 34px;
    }

    .update-withdraw-password-header-actions {
      gap: 9px;
    }

    .update-withdraw-password-contact {
      min-width: 82px;
      height: 34px;
      padding: 0 12px;
      font-size: 0.78rem;
    }

    .update-withdraw-password-menu {
      width: 28px;
      height: 24px;
    }

    .update-withdraw-password-menu span {
      height: 2px;
    }

    .update-withdraw-password-title-bar {
      min-height: 48px;
      padding: 10px 14px;
    }

    .update-withdraw-password-back {
      width: 32px;
      height: 32px;
      left: 14px;
    }

    .update-withdraw-password-back img {
      width: 20px;
      height: 20px;
    }

    .update-withdraw-password-title-bar h1 {
      font-size: 1.5rem;
    }

    .update-withdraw-password-content {
      width: calc(100% - 28px);
      padding: 16px 0;
    }

    .form-container {
      padding: 16px;
    }
  }
`;function Nm(){const e=ie(),[t,n]=g.useState(""),[r,a]=g.useState(""),[o,s]=g.useState(""),[l,d]=g.useState(!1),[c,h]=g.useState(!1),[u,m]=g.useState(!1),[w,y]=g.useState(!1),[b,j]=g.useState(!1),[f,p]=g.useState(""),[x,$]=g.useState(!1),A=async E=>{if(E.preventDefault(),p(""),!t||!r||!o){p("All fields are required.");return}if(r!==o){p("New passwords do not match.");return}if(r.length<6){p("New password must be at least 6 characters.");return}y(!0);try{const N=localStorage.getItem("authToken"),L=await(await fetch("https://dept-admin.onrender.com/api/change-withdraw-password",{method:"POST",headers:{"Content-Type":"application/json","X-Auth-Token":N},body:JSON.stringify({oldPassword:t,newPassword:r})})).json();y(!1),L.success?(j(!0),setTimeout(()=>{e("/personal-info")},2e3)):p(L.message||"Withdrawal password update failed.")}catch{y(!1),p("Network error. Please try again.")}};return i.jsxs(i.Fragment,{children:[i.jsx("style",{children:Sm}),i.jsxs("div",{className:"update-withdraw-password-page",children:[i.jsxs("header",{className:"update-withdraw-password-header",children:[i.jsx("img",{src:pe,alt:"Instrument",className:"update-withdraw-password-logo"}),i.jsxs("div",{className:"update-withdraw-password-header-actions",children:[i.jsx("button",{type:"button",className:"update-withdraw-password-contact",onClick:()=>$(!0),children:"Contact"}),i.jsxs("button",{type:"button",className:"update-withdraw-password-menu",onClick:()=>e("/profile"),"aria-label":"Open profile menu",children:[i.jsx("span",{}),i.jsx("span",{}),i.jsx("span",{})]})]})]}),i.jsxs("div",{className:"update-withdraw-password-title-bar",children:[i.jsx("button",{type:"button",className:"update-withdraw-password-back",onClick:()=>e(-1),"aria-label":"Go back",children:i.jsx("img",{src:Ie,alt:"Back"})}),i.jsx("h1",{children:"Security"})]}),i.jsxs("main",{className:"update-withdraw-password-content",children:[i.jsx("div",{className:"section-title",children:"Security Pin"}),i.jsx("div",{className:"form-container",children:b?i.jsxs("div",{className:"success-message",children:[i.jsx("div",{className:"success-text",children:"Withdrawal password updated successfully!"}),i.jsx("div",{className:"success-subtext",children:"Redirecting to account info..."})]}):i.jsxs("form",{onSubmit:A,children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Old Security Pin"}),i.jsxs("div",{className:"password-input-wrapper",children:[i.jsx("input",{type:l?"text":"password",className:"form-input",placeholder:"Old Security Pin",value:t,onChange:E=>n(E.target.value),required:!0}),i.jsx("button",{type:"button",className:"eye-toggle",onClick:()=>d(!l),"aria-label":"Toggle password visibility",children:"👁️"})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"New Security Pin"}),i.jsxs("div",{className:"password-input-wrapper",children:[i.jsx("input",{type:c?"text":"password",className:"form-input",placeholder:"New Security Pin",value:r,onChange:E=>a(E.target.value),required:!0}),i.jsx("button",{type:"button",className:"eye-toggle",onClick:()=>h(!c),"aria-label":"Toggle password visibility",children:"👁️"})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{className:"form-label",children:"Confirm New Security Pin"}),i.jsxs("div",{className:"password-input-wrapper",children:[i.jsx("input",{type:u?"text":"password",className:"form-input",placeholder:"Confirm New Security Pin",value:o,onChange:E=>s(E.target.value),required:!0}),i.jsx("button",{type:"button",className:"eye-toggle",onClick:()=>m(!u),"aria-label":"Toggle password visibility",children:"👁️"})]})]}),f&&i.jsx("div",{className:"error-message",children:f}),i.jsx("button",{type:"submit",className:"submit-button",disabled:w,children:w?"Updating...":"Update"})]})})]}),i.jsx(me,{open:x,onClose:()=>$(!1)})]})]})}function Se({children:e}){const t=JSON.parse(localStorage.getItem("currentUser"));return!!(t!=null&&t.username)?e:i.jsx(Jo,{to:"/login",state:{from:mn()}})}function Cm(){return console.log("Rendering AppRoutes..."),i.jsx(r2,{children:i.jsxs(qf,{children:[i.jsx(Z,{path:"/",element:i.jsx(Jo,{to:"/login"})}),i.jsx(Z,{path:"/login",element:i.jsx(p2,{})}),i.jsx(Z,{path:"/register",element:i.jsx(O2,{})}),i.jsx(Z,{path:"/terms",element:i.jsx(F2,{})}),i.jsx(Z,{path:"/dashboard",element:i.jsx(Se,{children:i.jsx(lh,{})})}),i.jsx(Z,{path:"/deposit",element:i.jsx(Se,{children:i.jsx(hh,{})})}),i.jsx(Z,{path:"/withdraw",element:i.jsx(Se,{children:i.jsx(wh,{})})}),i.jsx(Z,{path:"/tasks",element:i.jsx(Se,{children:i.jsx(Eh,{})})}),i.jsx(Z,{path:"/vip",element:i.jsx(Se,{children:i.jsx(Ph,{})})}),i.jsx(Z,{path:"/profile",element:i.jsx(Se,{children:i.jsx(Vh,{})})}),i.jsx(Z,{path:"/about",element:i.jsx(Se,{children:i.jsx(qh,{})})}),i.jsx(Z,{path:"/events",element:i.jsx(Se,{children:i.jsx(tm,{})})}),i.jsx(Z,{path:"/faq",element:i.jsx(Se,{children:i.jsx(rm,{})})}),i.jsx(Z,{path:"/wallet-binding",element:i.jsx(Se,{children:i.jsx(im,{})})}),i.jsx(Z,{path:"/certificate",element:i.jsx(Se,{children:i.jsx(sm,{})})}),i.jsx(Z,{path:"/records",element:i.jsx(Se,{children:i.jsx(mm,{})})}),i.jsx(Z,{path:"/personal-info",element:i.jsx(Se,{children:i.jsx(xm,{})})}),i.jsx(Z,{path:"/bind-wallet",element:i.jsx(Se,{children:i.jsx(ym,{})})}),i.jsx(Z,{path:"/notifications",element:i.jsx(Se,{children:i.jsx($m,{})})}),i.jsx(Z,{path:"/update-password",element:i.jsx(Am,{})}),i.jsx(Z,{path:"/update-withdraw-password",element:i.jsx(Nm,{})}),i.jsx(Z,{path:"*",element:i.jsx(Jo,{to:"/login"})})]})})}const ga="translations:";function Xt(e,t){try{localStorage.setItem(ga+e,JSON.stringify(t||{}))}catch{}}function pr(e){try{const t=localStorage.getItem(ga+e);return t?JSON.parse(t):null}catch{return null}}function Fd(e,t){try{localStorage.setItem(ga+e+":raw",JSON.stringify(t||{}))}catch{}}function to(e){try{const t=localStorage.getItem(ga+e+":raw");return t?JSON.parse(t):null}catch{return null}}async function Ud(e){try{const t=await fetch(`/i18n/${e}.json`,{cache:"no-cache"});if(!t.ok)return null;const n=await t.json();return n&&typeof n=="object"?n:null}catch{return null}}function Em(e){const t=Array.from(document.querySelectorAll("[data-i18n]"));let n=0;return t.forEach(r=>{try{const a=(r.getAttribute("data-i18n")||"").trim();if(!a||!Object.prototype.hasOwnProperty.call(e,a))return;const o=e[a],s=(r.tagName||"").toLowerCase();if(s==="input"||s==="textarea")r.getAttribute("placeholder")!==null?r.setAttribute("placeholder",o):r.setAttribute("aria-label",o);else if(s==="img")r.getAttribute("alt")!==null&&r.setAttribute("alt",o);else try{r.innerHTML=o}catch{r.textContent=o}r.getAttribute("title")!==null&&r.setAttribute("title",o),n++}catch{}}),n}function Tm(e){const t=["placeholder","title","alt","aria-label"],n=Array.from(document.querySelectorAll("body *"));let r=0;return n.forEach(a=>{try{t.forEach(o=>{if(!a.hasAttribute||!a.hasAttribute(o))return;const s=(a.getAttribute(o)||"").trim();s&&Object.prototype.hasOwnProperty.call(e,s)&&(a.setAttribute(o,e[s]),r++)})}catch{}}),r}function j0(e){const t=Object.keys(e||{}).filter(s=>s&&s.trim().length);if(t.length===0)return 0;t.sort((s,l)=>l.length-s.length);const n=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode(s){const l=s.parentNode;if(!l||!(l instanceof HTMLElement))return NodeFilter.FILTER_REJECT;const d=l.tagName.toLowerCase();if(["script","style","noscript","template","svg","code","pre","textarea"].includes(d))return NodeFilter.FILTER_REJECT;try{const c=window.getComputedStyle(l);if(!c||c.display==="none"||c.visibility==="hidden"||c.opacity==="0")return NodeFilter.FILTER_REJECT}catch{}return!s.nodeValue||!s.nodeValue.trim()?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}});let r,a=0;const o=5e3;for(;r=n.nextNode();)try{let s=r.nodeValue,l=s,d=!1;for(const c of t)if(c&&s.includes(c)){const h=e[c];if(h==null)continue;if(s=s.split(c).join(h),d=!0,++a>o)break}if(d&&s!==l){const c=r.parentNode;if(!c)continue;if(/<\/?[a-z][\s\S]*>/i.test(s)){const u=document.createElement("span");u.innerHTML=s,c.replaceChild(u,r)}else r.nodeValue=s}if(a>o)break}catch{}return a}function vn(e){if(!e||Object.keys(e).length===0)return{applied:0,details:{}};const t=Em(e),n=Tm(e),r=j0(e);try{window.dispatchEvent(new Event("languageChanged"))}catch{}return{applied:t+n+r,details:{data:t,attrs:n,text:r}}}function Im(e){if(!window.__I18N_OBSERVER_INSTALLED__)try{const t=new MutationObserver(n=>{const r=window.__TRANSLATIONS__&&window.__TRANSLATIONS__[e]||pr(e)||{};!r||Object.keys(r).length===0||n.forEach(a=>{try{if(a.type==="childList"&&a.addedNodes&&a.addedNodes.length)a.addedNodes.forEach(o=>{if(!(o instanceof HTMLElement))return;const s=Array.from(o.querySelectorAll?o.querySelectorAll("[data-i18n]"):[]);o.getAttribute&&o.getAttribute("data-i18n")&&s.unshift(o),s.length?s.forEach(l=>{try{const d=(l.getAttribute("data-i18n")||"").trim();if(d&&Object.prototype.hasOwnProperty.call(r,d))try{l.innerHTML=r[d]}catch{l.textContent=r[d]}}catch{}}):j0(r)});else if(a.type==="attributes"&&a.target){const o=a.target;if(o instanceof HTMLElement&&o.getAttribute&&o.getAttribute("data-i18n")){const s=(o.getAttribute("data-i18n")||"").trim();if(s&&Object.prototype.hasOwnProperty.call(r,s))try{o.innerHTML=r[s]}catch{o.textContent=r[s]}}}}catch{}})});t.observe(document.documentElement||document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["data-i18n","placeholder","title"]}),window.__I18N_OBSERVER_INSTALLED__=!0,window.__I18N_OBSERVER__=t}catch{}}function Lm(){if(window.__I18N_HISTORY_PATCHED__)return;const e=()=>{try{window.dispatchEvent(new Event("spa:navigation"))}catch{}},t=history.pushState;history.pushState=function(){t.apply(this,arguments),e()};const n=history.replaceState;history.replaceState=function(){n.apply(this,arguments),e()},window.addEventListener("popstate",e),window.__I18N_HISTORY_PATCHED__=!0}function Pm(){const e=typeof window<"u"&&window.CURRENT_CURRENCY||localStorage.getItem("site:currency")||"",t=typeof window<"u"&&window.CURRENT_CURRENCY_SYMBOL||localStorage.getItem("site:currencySymbol")||"",n=typeof window<"u"&&window.CURRENT_CURRENCY_DECIMALS,r=Number.isFinite(n)?n:Number(localStorage.getItem("site:currencyDecimals"))||2,a=typeof window<"u"&&window.CURRENT_CURRENCY_POSITION||localStorage.getItem("site:currencyPosition")||"after";return{currency:e,symbol:t,decimals:r,position:a}}function Ln(e){const{currency:t,symbol:n,decimals:r,position:a}=Pm(),o=l=>{if(typeof l!="string")return l;let d=l;return d=d.split("{{currencySymbol}}").join(n||""),d=d.split("{{currency}}").join(t||""),d=d.split("{{currencyDecimals}}").join(String(r??"")),d=d.split("{{currencyPosition}}").join(String(a)),d=d.split("%CURRENCY%").join(t||""),d=d.split("%CURRENCY_SYMBOL%").join(n||""),d};if(e==null)return e;if(typeof e=="string")return o(e);if(typeof e!="object")return e;if(Array.isArray(e))return e.map(l=>Ln(l));const s={};for(const l of Object.keys(e))try{s[l]=Ln(e[l])}catch{s[l]=e[l]}return s}async function Dd(e={}){let n=e.defaultLang||localStorage.getItem("lang")||document.documentElement.getAttribute("lang")||"en";e.lang&&(n=e.lang),window.__TRANSLATIONS__=window.__TRANSLATIONS__||{},window.__RAW_TRANSLATIONS__=window.__RAW_TRANSLATIONS__||{};let r=null;try{const s=await Ud(n);if(s&&Object.keys(s).length>0){r=s;try{Fd(n,r)}catch{}window.__RAW_TRANSLATIONS__[n]=r}}catch{r=null}if(!r){const s=to(n);s&&Object.keys(s).length>0&&(r=s,window.__RAW_TRANSLATIONS__[n]=r)}let a=null;if(!r){const s=window.__TRANSLATIONS__&&window.__TRANSLATIONS__[n]||pr(n);s&&Object.keys(s).length>0&&(a=s)}if(r)try{const s=Ln(r);window.__TRANSLATIONS__[n]=Object.assign({},window.__TRANSLATIONS__[n]||{},s||{}),Xt(n,window.__TRANSLATIONS__[n])}catch{window.__TRANSLATIONS__[n]=Object.assign({},window.__TRANSLATIONS__[n]||{},r||{}),Xt(n,window.__TRANSLATIONS__[n])}else a?(window.__TRANSLATIONS__[n]=Object.assign({},window.__TRANSLATIONS__[n]||{},a||{}),Xt(n,window.__TRANSLATIONS__[n])):(window.__TRANSLATIONS__[n]=window.__TRANSLATIONS__[n]||{},Xt(n,window.__TRANSLATIONS__[n]));const o=vn(window.__TRANSLATIONS__[n]);try{document.documentElement.setAttribute("lang",n)}catch{}Im(n),Lm(),window.addEventListener("spa:navigation",()=>{try{const s=localStorage.getItem("lang")||n,l=window.__TRANSLATIONS__&&window.__TRANSLATIONS__[s]||pr(s)||{};l&&Object.keys(l).length&&vn(l)}catch{}}),window.addEventListener("storage",s=>{if(s.key==="lang"){const l=s.newValue||"en";(async()=>{try{let d=await Ud(l);if(d&&Object.keys(d).length>0){window.__RAW_TRANSLATIONS__[l]=d,Fd(l,d);const u=Ln(d);window.__TRANSLATIONS__[l]=Object.assign({},window.__TRANSLATIONS__[l]||{},u||{}),Xt(l,window.__TRANSLATIONS__[l]),vn(window.__TRANSLATIONS__[l]),document.documentElement.setAttribute("lang",l);return}const c=to(l)||window.__RAW_TRANSLATIONS__[l]||null;if(c&&Object.keys(c).length){const u=Ln(c);window.__TRANSLATIONS__[l]=Object.assign({},window.__TRANSLATIONS__[l]||{},u||{}),Xt(l,window.__TRANSLATIONS__[l]),vn(window.__TRANSLATIONS__[l]),document.documentElement.setAttribute("lang",l);return}const h=pr(l)||window.__TRANSLATIONS__&&window.__TRANSLATIONS__[l]||{};if(h&&Object.keys(h).length){window.__TRANSLATIONS__[l]=h,vn(window.__TRANSLATIONS__[l]),document.documentElement.setAttribute("lang",l);return}}catch{}})()}});try{window.__I18N_CURRENCY_LISTENER_INSTALLED__||(window.addEventListener("app:currencyChanged",s=>{try{const l=s&&s.detail||{};if(l.currency!==void 0)try{window.CURRENT_CURRENCY=l.currency}catch{}if(l.symbol!==void 0)try{window.CURRENT_CURRENCY_SYMBOL=l.symbol}catch{}if(l.decimals!==void 0)try{window.CURRENT_CURRENCY_DECIMALS=l.decimals}catch{}Object.keys(window.__RAW_TRANSLATIONS__||{}).forEach(u=>{try{const m=window.__RAW_TRANSLATIONS__[u]||to(u)||null;if(m&&Object.keys(m).length){const w=Ln(m);window.__TRANSLATIONS__[u]=Object.assign({},window.__TRANSLATIONS__[u]||{},w||{}),Xt(u,window.__TRANSLATIONS__[u])}}catch{}});const c=localStorage.getItem("lang")||n,h=window.__TRANSLATIONS__&&window.__TRANSLATIONS__[c]||pr(c)||{};h&&Object.keys(h).length&&vn(h)}catch{}}),window.__I18N_CURRENCY_LISTENER_INSTALLED__=!0)}catch{}return{lang:n,applied:o}}const Rm=g.createContext({lang:"en",changeLanguage:async e=>{},loading:!1});function Mm({children:e}){const t=typeof document<"u"&&(document.documentElement.getAttribute("lang")||localStorage.getItem("lang"))||"en",[n,r]=g.useState(t),[a,o]=g.useState(!1),[s,l]=g.useState(!1),d=()=>{try{if(typeof window<"u"&&window.i18next&&typeof window.i18next.changeLanguage=="function")return window.i18next}catch{}return null};g.useEffect(()=>{(async()=>{o(!0);try{try{typeof document<"u"&&document.documentElement.setAttribute("lang",n)}catch{}await Dd({lang:n});const u=d();if(u)try{await u.changeLanguage(n)}catch{}}catch(u){console.error("initI18n failed on startup:",u)}finally{l(!0),o(!1)}})()},[]);const c=async u=>{if(!(!u||u===n)){o(!0);try{localStorage.setItem("lang",u);try{document.documentElement.setAttribute("lang",u)}catch{}await Dd({lang:u});const m=d();if(m)try{await m.changeLanguage(u)}catch{}r(u);try{setTimeout(()=>{window.location.reload()},50)}catch(w){console.error("Failed to trigger reload after language change:",w)}}catch(m){console.error("changeLanguage failed:",m)}finally{o(!1)}}};let h=e;try{const u=Fn.Children.only(e);h=Fn.cloneElement(u,{key:n})}catch{h=e}return s?i.jsx(Rm.Provider,{value:{lang:n,changeLanguage:c,loading:a},children:h}):null}try{if(typeof window<"u"){const e=localStorage.getItem("lang");e&&e!==document.documentElement.getAttribute("lang")&&document.documentElement.setAttribute("lang",e)}}catch{}function zm(){return i.jsx(ph,{children:i.jsx(Mm,{children:i.jsx(bh,{children:i.jsx(l2,{children:i.jsx(dh,{children:i.jsx(vh,{children:i.jsx(ch,{children:i.jsxs("div",{className:"min-h-screen bg-gray-100",children:[console.log("App initialized"),i.jsx(Cm,{})]})})})})})})})})}no.createRoot(document.getElementById("root")).render(i.jsx(Fn.StrictMode,{children:i.jsx(zm,{})}));
