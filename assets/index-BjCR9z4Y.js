(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ws(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const $={},Ft=[],De=()=>{},tl=()=>!1,pr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Es=t=>t.startsWith("onUpdate:"),ie=Object.assign,Ts=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},nl=Object.prototype.hasOwnProperty,F=(t,e)=>nl.call(t,e),O=Array.isArray,Bt=t=>An(t)==="[object Map]",gr=t=>An(t)==="[object Set]",ui=t=>An(t)==="[object Date]",D=t=>typeof t=="function",X=t=>typeof t=="string",Le=t=>typeof t=="symbol",q=t=>t!==null&&typeof t=="object",Oo=t=>(q(t)||D(t))&&D(t.then)&&D(t.catch),ko=Object.prototype.toString,An=t=>ko.call(t),rl=t=>An(t).slice(8,-1),Do=t=>An(t)==="[object Object]",Ss=t=>X(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,sn=ws(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),mr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},sl=/-(\w)/g,ye=mr(t=>t.replace(sl,(e,n)=>n?n.toUpperCase():"")),il=/\B([A-Z])/g,Dt=mr(t=>t.replace(il,"-$1").toLowerCase()),_r=mr(t=>t.charAt(0).toUpperCase()+t.slice(1)),Dr=mr(t=>t?`on${_r(t)}`:""),lt=(t,e)=>!Object.is(t,e),Vn=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},No=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Xn=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let di;const vr=()=>di||(di=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function As(t){if(O(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=X(r)?ll(r):As(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(X(t)||q(t))return t}const ol=/;(?![^(]*\))/g,al=/:([^]+)/,cl=/\/\*[^]*?\*\//g;function ll(t){const e={};return t.replace(cl,"").split(ol).forEach(n=>{if(n){const r=n.split(al);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function mn(t){let e="";if(X(t))e=t;else if(O(t))for(let n=0;n<t.length;n++){const r=mn(t[n]);r&&(e+=r+" ")}else if(q(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ul="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",dl=ws(ul);function Mo(t){return!!t||t===""}function fl(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=yr(t[r],e[r]);return n}function yr(t,e){if(t===e)return!0;let n=ui(t),r=ui(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Le(t),r=Le(e),n||r)return t===e;if(n=O(t),r=O(e),n||r)return n&&r?fl(t,e):!1;if(n=q(t),r=q(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!yr(t[o],e[o]))return!1}}return String(t)===String(e)}function hl(t,e){return t.findIndex(n=>yr(n,e))}const xo=t=>!!(t&&t.__v_isRef===!0),ve=t=>X(t)?t:t==null?"":O(t)||q(t)&&(t.toString===ko||!D(t.toString))?xo(t)?ve(t.value):JSON.stringify(t,Lo,2):String(t),Lo=(t,e)=>xo(e)?Lo(t,e.value):Bt(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Nr(r,i)+" =>"]=s,n),{})}:gr(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Nr(n))}:Le(e)?Nr(e):q(e)&&!O(e)&&!Do(e)?String(e):e,Nr=(t,e="")=>{var n;return Le(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let he;class pl{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=he,!e&&he&&(this.index=(he.scopes||(he.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=he;try{return he=this,e()}finally{he=n}}}on(){he=this}off(){he=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function gl(){return he}let K;const Mr=new WeakSet;class Uo{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,he&&he.active&&he.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Mr.has(this)&&(Mr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Bo(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,fi(this),Ho(this);const e=K,n=Ie;K=this,Ie=!0;try{return this.fn()}finally{$o(this),K=e,Ie=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ps(e);this.deps=this.depsTail=void 0,fi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Mr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){es(this)&&this.run()}get dirty(){return es(this)}}let Fo=0,on,an;function Bo(t,e=!1){if(t.flags|=8,e){t.next=an,an=t;return}t.next=on,on=t}function Cs(){Fo++}function Rs(){if(--Fo>0)return;if(an){let e=an;for(an=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;on;){let e=on;for(on=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Ho(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function $o(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ps(r),ml(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function es(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(jo(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function jo(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===_n))return;t.globalVersion=_n;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!es(t)){t.flags&=-3;return}const n=K,r=Ie;K=t,Ie=!0;try{Ho(t);const s=t.fn(t._value);(e.version===0||lt(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{K=n,Ie=r,$o(t),t.flags&=-3}}function Ps(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ps(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function ml(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ie=!0;const Vo=[];function ht(){Vo.push(Ie),Ie=!1}function pt(){const t=Vo.pop();Ie=t===void 0?!0:t}function fi(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=K;K=void 0;try{e()}finally{K=n}}}let _n=0;class _l{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Os{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!K||!Ie||K===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==K)n=this.activeLink=new _l(K,this),K.deps?(n.prevDep=K.depsTail,K.depsTail.nextDep=n,K.depsTail=n):K.deps=K.depsTail=n,Wo(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=K.depsTail,n.nextDep=void 0,K.depsTail.nextDep=n,K.depsTail=n,K.deps===n&&(K.deps=r)}return n}trigger(e){this.version++,_n++,this.notify(e)}notify(e){Cs();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Rs()}}}function Wo(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Wo(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ts=new WeakMap,St=Symbol(""),ns=Symbol(""),vn=Symbol("");function Q(t,e,n){if(Ie&&K){let r=ts.get(t);r||ts.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Os),s.map=r,s.key=n),s.track()}}function We(t,e,n,r,s,i){const o=ts.get(t);if(!o){_n++;return}const a=c=>{c&&c.trigger()};if(Cs(),e==="clear")o.forEach(a);else{const c=O(t),l=c&&Ss(n);if(c&&n==="length"){const f=Number(r);o.forEach((h,y)=>{(y==="length"||y===vn||!Le(y)&&y>=f)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),l&&a(o.get(vn)),e){case"add":c?l&&a(o.get("length")):(a(o.get(St)),Bt(t)&&a(o.get(ns)));break;case"delete":c||(a(o.get(St)),Bt(t)&&a(o.get(ns)));break;case"set":Bt(t)&&a(o.get(St));break}}Rs()}function xt(t){const e=U(t);return e===t?e:(Q(e,"iterate",vn),we(t)?e:e.map(re))}function ks(t){return Q(t=U(t),"iterate",vn),t}const vl={__proto__:null,[Symbol.iterator](){return xr(this,Symbol.iterator,re)},concat(...t){return xt(this).concat(...t.map(e=>O(e)?xt(e):e))},entries(){return xr(this,"entries",t=>(t[1]=re(t[1]),t))},every(t,e){return $e(this,"every",t,e,void 0,arguments)},filter(t,e){return $e(this,"filter",t,e,n=>n.map(re),arguments)},find(t,e){return $e(this,"find",t,e,re,arguments)},findIndex(t,e){return $e(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return $e(this,"findLast",t,e,re,arguments)},findLastIndex(t,e){return $e(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return $e(this,"forEach",t,e,void 0,arguments)},includes(...t){return Lr(this,"includes",t)},indexOf(...t){return Lr(this,"indexOf",t)},join(t){return xt(this).join(t)},lastIndexOf(...t){return Lr(this,"lastIndexOf",t)},map(t,e){return $e(this,"map",t,e,void 0,arguments)},pop(){return Zt(this,"pop")},push(...t){return Zt(this,"push",t)},reduce(t,...e){return hi(this,"reduce",t,e)},reduceRight(t,...e){return hi(this,"reduceRight",t,e)},shift(){return Zt(this,"shift")},some(t,e){return $e(this,"some",t,e,void 0,arguments)},splice(...t){return Zt(this,"splice",t)},toReversed(){return xt(this).toReversed()},toSorted(t){return xt(this).toSorted(t)},toSpliced(...t){return xt(this).toSpliced(...t)},unshift(...t){return Zt(this,"unshift",t)},values(){return xr(this,"values",re)}};function xr(t,e,n){const r=ks(t),s=r[e]();return r!==t&&!we(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const yl=Array.prototype;function $e(t,e,n,r,s,i){const o=ks(t),a=o!==t&&!we(t),c=o[e];if(c!==yl[e]){const h=c.apply(t,i);return a?re(h):h}let l=n;o!==t&&(a?l=function(h,y){return n.call(this,re(h),y,t)}:n.length>2&&(l=function(h,y){return n.call(this,h,y,t)}));const f=c.call(o,l,r);return a&&s?s(f):f}function hi(t,e,n,r){const s=ks(t);let i=n;return s!==t&&(we(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,re(a),c,t)}),s[e](i,...r)}function Lr(t,e,n){const r=U(t);Q(r,"iterate",vn);const s=r[e](...n);return(s===-1||s===!1)&&xs(n[0])?(n[0]=U(n[0]),r[e](...n)):s}function Zt(t,e,n=[]){ht(),Cs();const r=U(t)[e].apply(t,n);return Rs(),pt(),r}const bl=ws("__proto__,__v_isRef,__isVue"),Ko=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Le));function Il(t){Le(t)||(t=String(t));const e=U(this);return Q(e,"has",t),e.hasOwnProperty(t)}class zo{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?kl:Yo:i?Jo:Go).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=O(e);if(!s){let c;if(o&&(c=vl[n]))return c;if(n==="hasOwnProperty")return Il}const a=Reflect.get(e,n,ee(e)?e:r);return(Le(n)?Ko.has(n):bl(n))||(s||Q(e,"get",n),i)?a:ee(a)?o&&Ss(n)?a:a.value:q(a)?s?Xo(a):Ns(a):a}}class qo extends zo{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=At(i);if(!we(r)&&!At(r)&&(i=U(i),r=U(r)),!O(e)&&ee(i)&&!ee(r))return c?!1:(i.value=r,!0)}const o=O(e)&&Ss(n)?Number(n)<e.length:F(e,n),a=Reflect.set(e,n,r,ee(e)?e:s);return e===U(s)&&(o?lt(r,i)&&We(e,"set",n,r):We(e,"add",n,r)),a}deleteProperty(e,n){const r=F(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&We(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Le(n)||!Ko.has(n))&&Q(e,"has",n),r}ownKeys(e){return Q(e,"iterate",O(e)?"length":St),Reflect.ownKeys(e)}}class wl extends zo{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const El=new qo,Tl=new wl,Sl=new qo(!0);const rs=t=>t,Bn=t=>Reflect.getPrototypeOf(t);function Al(t,e,n){return function(...r){const s=this.__v_raw,i=U(s),o=Bt(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),f=n?rs:e?ss:re;return!e&&Q(i,"iterate",c?ns:St),{next(){const{value:h,done:y}=l.next();return y?{value:h,done:y}:{value:a?[f(h[0]),f(h[1])]:f(h),done:y}},[Symbol.iterator](){return this}}}}function Hn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Cl(t,e){const n={get(s){const i=this.__v_raw,o=U(i),a=U(s);t||(lt(s,a)&&Q(o,"get",s),Q(o,"get",a));const{has:c}=Bn(o),l=e?rs:t?ss:re;if(c.call(o,s))return l(i.get(s));if(c.call(o,a))return l(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Q(U(s),"iterate",St),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=U(i),a=U(s);return t||(lt(s,a)&&Q(o,"has",s),Q(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=U(a),l=e?rs:t?ss:re;return!t&&Q(c,"iterate",St),a.forEach((f,h)=>s.call(i,l(f),l(h),o))}};return ie(n,t?{add:Hn("add"),set:Hn("set"),delete:Hn("delete"),clear:Hn("clear")}:{add(s){!e&&!we(s)&&!At(s)&&(s=U(s));const i=U(this);return Bn(i).has.call(i,s)||(i.add(s),We(i,"add",s,s)),this},set(s,i){!e&&!we(i)&&!At(i)&&(i=U(i));const o=U(this),{has:a,get:c}=Bn(o);let l=a.call(o,s);l||(s=U(s),l=a.call(o,s));const f=c.call(o,s);return o.set(s,i),l?lt(i,f)&&We(o,"set",s,i):We(o,"add",s,i),this},delete(s){const i=U(this),{has:o,get:a}=Bn(i);let c=o.call(i,s);c||(s=U(s),c=o.call(i,s)),a&&a.call(i,s);const l=i.delete(s);return c&&We(i,"delete",s,void 0),l},clear(){const s=U(this),i=s.size!==0,o=s.clear();return i&&We(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Al(s,t,e)}),n}function Ds(t,e){const n=Cl(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(F(n,s)&&s in r?n:r,s,i)}const Rl={get:Ds(!1,!1)},Pl={get:Ds(!1,!0)},Ol={get:Ds(!0,!1)};const Go=new WeakMap,Jo=new WeakMap,Yo=new WeakMap,kl=new WeakMap;function Dl(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Nl(t){return t.__v_skip||!Object.isExtensible(t)?0:Dl(rl(t))}function Ns(t){return At(t)?t:Ms(t,!1,El,Rl,Go)}function Ml(t){return Ms(t,!1,Sl,Pl,Jo)}function Xo(t){return Ms(t,!0,Tl,Ol,Yo)}function Ms(t,e,n,r,s){if(!q(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Nl(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function cn(t){return At(t)?cn(t.__v_raw):!!(t&&t.__v_isReactive)}function At(t){return!!(t&&t.__v_isReadonly)}function we(t){return!!(t&&t.__v_isShallow)}function xs(t){return t?!!t.__v_raw:!1}function U(t){const e=t&&t.__v_raw;return e?U(e):t}function xl(t){return!F(t,"__v_skip")&&Object.isExtensible(t)&&No(t,"__v_skip",!0),t}const re=t=>q(t)?Ns(t):t,ss=t=>q(t)?Xo(t):t;function ee(t){return t?t.__v_isRef===!0:!1}function Ur(t){return Ll(t,!1)}function Ll(t,e){return ee(t)?t:new Ul(t,e)}class Ul{constructor(e,n){this.dep=new Os,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:U(e),this._value=n?e:re(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||we(e)||At(e);e=r?e:U(e),lt(e,n)&&(this._rawValue=e,this._value=r?e:re(e),this.dep.trigger())}}function Fl(t){return ee(t)?t.value:t}const Bl={get:(t,e,n)=>e==="__v_raw"?t:Fl(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return ee(s)&&!ee(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Qo(t){return cn(t)?t:new Proxy(t,Bl)}class Hl{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Os(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=_n-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&K!==this)return Bo(this,!0),!0}get value(){const e=this.dep.track();return jo(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function $l(t,e,n=!1){let r,s;return D(t)?r=t:(r=t.get,s=t.set),new Hl(r,s,n)}const $n={},Qn=new WeakMap;let It;function jl(t,e=!1,n=It){if(n){let r=Qn.get(n);r||Qn.set(n,r=[]),r.push(t)}}function Vl(t,e,n=$){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,l=P=>s?P:we(P)||s===!1||s===0?Ke(P,1):Ke(P);let f,h,y,w,N=!1,M=!1;if(ee(t)?(h=()=>t.value,N=we(t)):cn(t)?(h=()=>l(t),N=!0):O(t)?(M=!0,N=t.some(P=>cn(P)||we(P)),h=()=>t.map(P=>{if(ee(P))return P.value;if(cn(P))return l(P);if(D(P))return c?c(P,2):P()})):D(t)?e?h=c?()=>c(t,2):t:h=()=>{if(y){ht();try{y()}finally{pt()}}const P=It;It=f;try{return c?c(t,3,[w]):t(w)}finally{It=P}}:h=De,e&&s){const P=h,J=s===!0?1/0:s;h=()=>Ke(P(),J)}const Y=gl(),L=()=>{f.stop(),Y&&Y.active&&Ts(Y.effects,f)};if(i&&e){const P=e;e=(...J)=>{P(...J),L()}}let z=M?new Array(t.length).fill($n):$n;const j=P=>{if(!(!(f.flags&1)||!f.dirty&&!P))if(e){const J=f.run();if(s||N||(M?J.some((_e,le)=>lt(_e,z[le])):lt(J,z))){y&&y();const _e=It;It=f;try{const le=[J,z===$n?void 0:M&&z[0]===$n?[]:z,w];c?c(e,3,le):e(...le),z=J}finally{It=_e}}}else f.run()};return a&&a(j),f=new Uo(h),f.scheduler=o?()=>o(j,!1):j,w=P=>jl(P,!1,f),y=f.onStop=()=>{const P=Qn.get(f);if(P){if(c)c(P,4);else for(const J of P)J();Qn.delete(f)}},e?r?j(!0):z=f.run():o?o(j.bind(null,!0),!0):f.run(),L.pause=f.pause.bind(f),L.resume=f.resume.bind(f),L.stop=L,L}function Ke(t,e=1/0,n){if(e<=0||!q(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,ee(t))Ke(t.value,e,n);else if(O(t))for(let r=0;r<t.length;r++)Ke(t[r],e,n);else if(gr(t)||Bt(t))t.forEach(r=>{Ke(r,e,n)});else if(Do(t)){for(const r in t)Ke(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Ke(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Cn(t,e,n,r){try{return r?t(...r):t()}catch(s){br(s,e,n)}}function Ue(t,e,n,r){if(D(t)){const s=Cn(t,e,n,r);return s&&Oo(s)&&s.catch(i=>{br(i,e,n)}),s}if(O(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Ue(t[i],e,n,r));return s}}function br(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||$;if(e){let a=e.parent;const c=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](t,c,l)===!1)return}a=a.parent}if(i){ht(),Cn(i,null,10,[t,c,l]),pt();return}}Wl(t,n,s,r,o)}function Wl(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const se=[];let Oe=-1;const Ht=[];let rt=null,Lt=0;const Zo=Promise.resolve();let Zn=null;function ea(t){const e=Zn||Zo;return t?e.then(this?t.bind(this):t):e}function Kl(t){let e=Oe+1,n=se.length;for(;e<n;){const r=e+n>>>1,s=se[r],i=yn(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Ls(t){if(!(t.flags&1)){const e=yn(t),n=se[se.length-1];!n||!(t.flags&2)&&e>=yn(n)?se.push(t):se.splice(Kl(e),0,t),t.flags|=1,ta()}}function ta(){Zn||(Zn=Zo.then(ra))}function zl(t){O(t)?Ht.push(...t):rt&&t.id===-1?rt.splice(Lt+1,0,t):t.flags&1||(Ht.push(t),t.flags|=1),ta()}function pi(t,e,n=Oe+1){for(;n<se.length;n++){const r=se[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;se.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function na(t){if(Ht.length){const e=[...new Set(Ht)].sort((n,r)=>yn(n)-yn(r));if(Ht.length=0,rt){rt.push(...e);return}for(rt=e,Lt=0;Lt<rt.length;Lt++){const n=rt[Lt];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}rt=null,Lt=0}}const yn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ra(t){try{for(Oe=0;Oe<se.length;Oe++){const e=se[Oe];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Cn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Oe<se.length;Oe++){const e=se[Oe];e&&(e.flags&=-2)}Oe=-1,se.length=0,na(),Zn=null,(se.length||Ht.length)&&ra()}}let pe=null,sa=null;function er(t){const e=pe;return pe=t,sa=t&&t.type.__scopeId||null,e}function ql(t,e=pe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Si(-1);const i=er(e);let o;try{o=t(...s)}finally{er(i),r._d&&Si(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ln(t,e){if(pe===null)return t;const n=Tr(pe),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=$]=e[s];i&&(D(i)&&(i={mounted:i,updated:i}),i.deep&&Ke(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function yt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(ht(),Ue(c,n,8,[t.el,a,t,e]),pt())}}const Gl=Symbol("_vte"),Jl=t=>t.__isTeleport;function Us(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Us(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ia(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function tr(t,e,n,r,s=!1){if(O(t)){t.forEach((N,M)=>tr(N,e&&(O(e)?e[M]:e),n,r,s));return}if(un(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&tr(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Tr(r.component):r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,f=a.refs===$?a.refs={}:a.refs,h=a.setupState,y=U(h),w=h===$?()=>!1:N=>F(y,N);if(l!=null&&l!==c&&(X(l)?(f[l]=null,w(l)&&(h[l]=null)):ee(l)&&(l.value=null)),D(c))Cn(c,a,12,[o,f]);else{const N=X(c),M=ee(c);if(N||M){const Y=()=>{if(t.f){const L=N?w(c)?h[c]:f[c]:c.value;s?O(L)&&Ts(L,i):O(L)?L.includes(i)||L.push(i):N?(f[c]=[i],w(c)&&(h[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else N?(f[c]=o,w(c)&&(h[c]=o)):M&&(c.value=o,t.k&&(f[t.k]=o))};o?(Y.id=-1,fe(Y,n)):Y()}}}vr().requestIdleCallback;vr().cancelIdleCallback;const un=t=>!!t.type.__asyncLoader,oa=t=>t.type.__isKeepAlive;function Yl(t,e){aa(t,"a",e)}function Xl(t,e){aa(t,"da",e)}function aa(t,e,n=Z){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ir(e,r,n),n){let s=n.parent;for(;s&&s.parent;)oa(s.parent.vnode)&&Ql(r,e,n,s),s=s.parent}}function Ql(t,e,n,r){const s=Ir(e,t,r,!0);ca(()=>{Ts(r[e],s)},n)}function Ir(t,e,n=Z,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{ht();const a=Rn(n),c=Ue(e,n,t,o);return a(),pt(),c});return r?s.unshift(i):s.push(i),i}}const Ze=t=>(e,n=Z)=>{(!wn||t==="sp")&&Ir(t,(...r)=>e(...r),n)},Zl=Ze("bm"),eu=Ze("m"),tu=Ze("bu"),nu=Ze("u"),ru=Ze("bum"),ca=Ze("um"),su=Ze("sp"),iu=Ze("rtg"),ou=Ze("rtc");function au(t,e=Z){Ir("ec",t,e)}const cu="components";function gi(t,e){return uu(cu,t,!0,e)||t}const lu=Symbol.for("v-ndc");function uu(t,e,n=!0,r=!1){const s=pe||Z;if(s){const i=s.type;{const a=Qu(i,!1);if(a&&(a===e||a===ye(e)||a===_r(ye(e))))return i}const o=mi(s[t]||i[t],e)||mi(s.appContext[t],e);return!o&&r?i:o}}function mi(t,e){return t&&(t[e]||t[ye(e)]||t[_r(ye(e))])}const is=t=>t?Oa(t)?Tr(t):is(t.parent):null,dn=ie(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>is(t.parent),$root:t=>is(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ua(t),$forceUpdate:t=>t.f||(t.f=()=>{Ls(t.update)}),$nextTick:t=>t.n||(t.n=ea.bind(t.proxy)),$watch:t=>Du.bind(t)}),Fr=(t,e)=>t!==$&&!t.__isScriptSetup&&F(t,e),du={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const w=o[e];if(w!==void 0)switch(w){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Fr(r,e))return o[e]=1,r[e];if(s!==$&&F(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&F(l,e))return o[e]=3,i[e];if(n!==$&&F(n,e))return o[e]=4,n[e];os&&(o[e]=0)}}const f=dn[e];let h,y;if(f)return e==="$attrs"&&Q(t.attrs,"get",""),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==$&&F(n,e))return o[e]=4,n[e];if(y=c.config.globalProperties,F(y,e))return y[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Fr(s,e)?(s[e]=n,!0):r!==$&&F(r,e)?(r[e]=n,!0):F(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==$&&F(t,o)||Fr(e,o)||(a=i[0])&&F(a,o)||F(r,o)||F(dn,o)||F(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:F(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function _i(t){return O(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let os=!0;function fu(t){const e=ua(t),n=t.proxy,r=t.ctx;os=!1,e.beforeCreate&&vi(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:f,beforeMount:h,mounted:y,beforeUpdate:w,updated:N,activated:M,deactivated:Y,beforeDestroy:L,beforeUnmount:z,destroyed:j,unmounted:P,render:J,renderTracked:_e,renderTriggered:le,errorCaptured:Te,serverPrefetch:tt,expose:He,inheritAttrs:Jt,components:xn,directives:Ln,filters:Or}=e;if(l&&hu(l,r,null),o)for(const G in o){const V=o[G];D(V)&&(r[G]=V.bind(n))}if(s){const G=s.call(n,n);q(G)&&(t.data=Ns(G))}if(os=!0,i)for(const G in i){const V=i[G],_t=D(V)?V.bind(n,n):D(V.get)?V.get.bind(n,n):De,Un=!D(V)&&D(V.set)?V.set.bind(n):De,vt=ed({get:_t,set:Un});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>vt.value,set:Se=>vt.value=Se})}if(a)for(const G in a)la(a[G],r,n,G);if(c){const G=D(c)?c.call(n):c;Reflect.ownKeys(G).forEach(V=>{yu(V,G[V])})}f&&vi(f,t,"c");function te(G,V){O(V)?V.forEach(_t=>G(_t.bind(n))):V&&G(V.bind(n))}if(te(Zl,h),te(eu,y),te(tu,w),te(nu,N),te(Yl,M),te(Xl,Y),te(au,Te),te(ou,_e),te(iu,le),te(ru,z),te(ca,P),te(su,tt),O(He))if(He.length){const G=t.exposed||(t.exposed={});He.forEach(V=>{Object.defineProperty(G,V,{get:()=>n[V],set:_t=>n[V]=_t})})}else t.exposed||(t.exposed={});J&&t.render===De&&(t.render=J),Jt!=null&&(t.inheritAttrs=Jt),xn&&(t.components=xn),Ln&&(t.directives=Ln),tt&&ia(t)}function hu(t,e,n=De){O(t)&&(t=as(t));for(const r in t){const s=t[r];let i;q(s)?"default"in s?i=Wn(s.from||r,s.default,!0):i=Wn(s.from||r):i=Wn(s),ee(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function vi(t,e,n){Ue(O(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function la(t,e,n,r){let s=r.includes(".")?Ta(n,r):()=>n[r];if(X(t)){const i=e[t];D(i)&&Hr(s,i)}else if(D(t))Hr(s,t.bind(n));else if(q(t))if(O(t))t.forEach(i=>la(i,e,n,r));else{const i=D(t.handler)?t.handler.bind(n):e[t.handler];D(i)&&Hr(s,i,t)}}function ua(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>nr(c,l,o,!0)),nr(c,e,o)),q(e)&&i.set(e,c),c}function nr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&nr(t,i,n,!0),s&&s.forEach(o=>nr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=pu[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const pu={data:yi,props:bi,emits:bi,methods:tn,computed:tn,beforeCreate:ne,created:ne,beforeMount:ne,mounted:ne,beforeUpdate:ne,updated:ne,beforeDestroy:ne,beforeUnmount:ne,destroyed:ne,unmounted:ne,activated:ne,deactivated:ne,errorCaptured:ne,serverPrefetch:ne,components:tn,directives:tn,watch:mu,provide:yi,inject:gu};function yi(t,e){return e?t?function(){return ie(D(t)?t.call(this,this):t,D(e)?e.call(this,this):e)}:e:t}function gu(t,e){return tn(as(t),as(e))}function as(t){if(O(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ne(t,e){return t?[...new Set([].concat(t,e))]:e}function tn(t,e){return t?ie(Object.create(null),t,e):e}function bi(t,e){return t?O(t)&&O(e)?[...new Set([...t,...e])]:ie(Object.create(null),_i(t),_i(e??{})):e}function mu(t,e){if(!t)return e;if(!e)return t;const n=ie(Object.create(null),t);for(const r in e)n[r]=ne(t[r],e[r]);return n}function da(){return{app:null,config:{isNativeTag:tl,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let _u=0;function vu(t,e){return function(r,s=null){D(r)||(r=ie({},r)),s!=null&&!q(s)&&(s=null);const i=da(),o=new WeakSet,a=[];let c=!1;const l=i.app={_uid:_u++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:td,get config(){return i.config},set config(f){},use(f,...h){return o.has(f)||(f&&D(f.install)?(o.add(f),f.install(l,...h)):D(f)&&(o.add(f),f(l,...h))),l},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),l},component(f,h){return h?(i.components[f]=h,l):i.components[f]},directive(f,h){return h?(i.directives[f]=h,l):i.directives[f]},mount(f,h,y){if(!c){const w=l._ceVNode||ut(r,s);return w.appContext=i,y===!0?y="svg":y===!1&&(y=void 0),t(w,f,y),c=!0,l._container=f,f.__vue_app__=l,Tr(w.component)}},onUnmount(f){a.push(f)},unmount(){c&&(Ue(a,l._instance,16),t(null,l._container),delete l._container.__vue_app__)},provide(f,h){return i.provides[f]=h,l},runWithContext(f){const h=$t;$t=l;try{return f()}finally{$t=h}}};return l}}let $t=null;function yu(t,e){if(Z){let n=Z.provides;const r=Z.parent&&Z.parent.provides;r===n&&(n=Z.provides=Object.create(r)),n[t]=e}}function Wn(t,e,n=!1){const r=Z||pe;if(r||$t){const s=$t?$t._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&D(e)?e.call(r&&r.proxy):e}}const fa={},ha=()=>Object.create(fa),pa=t=>Object.getPrototypeOf(t)===fa;function bu(t,e,n,r=!1){const s={},i=ha();t.propsDefaults=Object.create(null),ga(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ml(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Iu(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=U(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let y=f[h];if(wr(t.emitsOptions,y))continue;const w=e[y];if(c)if(F(i,y))w!==i[y]&&(i[y]=w,l=!0);else{const N=ye(y);s[N]=cs(c,a,N,w,t,!1)}else w!==i[y]&&(i[y]=w,l=!0)}}}else{ga(t,e,s,i)&&(l=!0);let f;for(const h in a)(!e||!F(e,h)&&((f=Dt(h))===h||!F(e,f)))&&(c?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=cs(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!F(e,h))&&(delete i[h],l=!0)}l&&We(t.attrs,"set","")}function ga(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(sn(c))continue;const l=e[c];let f;s&&F(s,f=ye(c))?!i||!i.includes(f)?n[f]=l:(a||(a={}))[f]=l:wr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=U(n),l=a||$;for(let f=0;f<i.length;f++){const h=i[f];n[h]=cs(s,c,h,l[h],t,!F(l,h))}}return o}function cs(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=F(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&D(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const f=Rn(s);r=l[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Dt(n))&&(r=!0))}return r}const wu=new WeakMap;function ma(t,e,n=!1){const r=n?wu:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!D(t)){const f=h=>{c=!0;const[y,w]=ma(h,e,!0);ie(o,y),w&&a.push(...w)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return q(t)&&r.set(t,Ft),Ft;if(O(i))for(let f=0;f<i.length;f++){const h=ye(i[f]);Ii(h)&&(o[h]=$)}else if(i)for(const f in i){const h=ye(f);if(Ii(h)){const y=i[f],w=o[h]=O(y)||D(y)?{type:y}:ie({},y),N=w.type;let M=!1,Y=!0;if(O(N))for(let L=0;L<N.length;++L){const z=N[L],j=D(z)&&z.name;if(j==="Boolean"){M=!0;break}else j==="String"&&(Y=!1)}else M=D(N)&&N.name==="Boolean";w[0]=M,w[1]=Y,(M||F(w,"default"))&&a.push(h)}}const l=[o,a];return q(t)&&r.set(t,l),l}function Ii(t){return t[0]!=="$"&&!sn(t)}const _a=t=>t[0]==="_"||t==="$stable",Fs=t=>O(t)?t.map(ke):[ke(t)],Eu=(t,e,n)=>{if(e._n)return e;const r=ql((...s)=>Fs(e(...s)),n);return r._c=!1,r},va=(t,e,n)=>{const r=t._ctx;for(const s in t){if(_a(s))continue;const i=t[s];if(D(i))e[s]=Eu(s,i,r);else if(i!=null){const o=Fs(i);e[s]=()=>o}}},ya=(t,e)=>{const n=Fs(e);t.slots.default=()=>n},ba=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Tu=(t,e,n)=>{const r=t.slots=ha();if(t.vnode.shapeFlag&32){const s=e._;s?(ba(r,e,n),n&&No(r,"_",s,!0)):va(e,r)}else e&&ya(t,e)},Su=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=$;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:ba(s,e,n):(i=!e.$stable,va(e,s)),o=e}else e&&(ya(t,e),o={default:1});if(i)for(const a in s)!_a(a)&&o[a]==null&&delete s[a]},fe=Bu;function Au(t){return Cu(t)}function Cu(t,e){const n=vr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:h,nextSibling:y,setScopeId:w=De,insertStaticContent:N}=t,M=(u,d,p,_=null,g=null,m=null,E=void 0,I=null,b=!!d.dynamicChildren)=>{if(u===d)return;u&&!en(u,d)&&(_=Fn(u),Se(u,g,m,!0),u=null),d.patchFlag===-2&&(b=!1,d.dynamicChildren=null);const{type:v,ref:C,shapeFlag:T}=d;switch(v){case Er:Y(u,d,p,_);break;case bn:L(u,d,p,_);break;case $r:u==null&&z(d,p,_,E);break;case Ve:xn(u,d,p,_,g,m,E,I,b);break;default:T&1?J(u,d,p,_,g,m,E,I,b):T&6?Ln(u,d,p,_,g,m,E,I,b):(T&64||T&128)&&v.process(u,d,p,_,g,m,E,I,b,Xt)}C!=null&&g&&tr(C,u&&u.ref,m,d||u,!d)},Y=(u,d,p,_)=>{if(u==null)r(d.el=a(d.children),p,_);else{const g=d.el=u.el;d.children!==u.children&&l(g,d.children)}},L=(u,d,p,_)=>{u==null?r(d.el=c(d.children||""),p,_):d.el=u.el},z=(u,d,p,_)=>{[u.el,u.anchor]=N(u.children,d,p,_,u.el,u.anchor)},j=({el:u,anchor:d},p,_)=>{let g;for(;u&&u!==d;)g=y(u),r(u,p,_),u=g;r(d,p,_)},P=({el:u,anchor:d})=>{let p;for(;u&&u!==d;)p=y(u),s(u),u=p;s(d)},J=(u,d,p,_,g,m,E,I,b)=>{d.type==="svg"?E="svg":d.type==="math"&&(E="mathml"),u==null?_e(d,p,_,g,m,E,I,b):tt(u,d,g,m,E,I,b)},_e=(u,d,p,_,g,m,E,I)=>{let b,v;const{props:C,shapeFlag:T,transition:A,dirs:k}=u;if(b=u.el=o(u.type,m,C&&C.is,C),T&8?f(b,u.children):T&16&&Te(u.children,b,null,_,g,Br(u,m),E,I),k&&yt(u,null,_,"created"),le(b,u,u.scopeId,E,_),C){for(const W in C)W!=="value"&&!sn(W)&&i(b,W,null,C[W],m,_);"value"in C&&i(b,"value",null,C.value,m),(v=C.onVnodeBeforeMount)&&Pe(v,_,u)}k&&yt(u,null,_,"beforeMount");const x=Ru(g,A);x&&A.beforeEnter(b),r(b,d,p),((v=C&&C.onVnodeMounted)||x||k)&&fe(()=>{v&&Pe(v,_,u),x&&A.enter(b),k&&yt(u,null,_,"mounted")},g)},le=(u,d,p,_,g)=>{if(p&&w(u,p),_)for(let m=0;m<_.length;m++)w(u,_[m]);if(g){let m=g.subTree;if(d===m||Aa(m.type)&&(m.ssContent===d||m.ssFallback===d)){const E=g.vnode;le(u,E,E.scopeId,E.slotScopeIds,g.parent)}}},Te=(u,d,p,_,g,m,E,I,b=0)=>{for(let v=b;v<u.length;v++){const C=u[v]=I?st(u[v]):ke(u[v]);M(null,C,d,p,_,g,m,E,I)}},tt=(u,d,p,_,g,m,E)=>{const I=d.el=u.el;let{patchFlag:b,dynamicChildren:v,dirs:C}=d;b|=u.patchFlag&16;const T=u.props||$,A=d.props||$;let k;if(p&&bt(p,!1),(k=A.onVnodeBeforeUpdate)&&Pe(k,p,d,u),C&&yt(d,u,p,"beforeUpdate"),p&&bt(p,!0),(T.innerHTML&&A.innerHTML==null||T.textContent&&A.textContent==null)&&f(I,""),v?He(u.dynamicChildren,v,I,p,_,Br(d,g),m):E||V(u,d,I,null,p,_,Br(d,g),m,!1),b>0){if(b&16)Jt(I,T,A,p,g);else if(b&2&&T.class!==A.class&&i(I,"class",null,A.class,g),b&4&&i(I,"style",T.style,A.style,g),b&8){const x=d.dynamicProps;for(let W=0;W<x.length;W++){const B=x[W],ue=T[B],ae=A[B];(ae!==ue||B==="value")&&i(I,B,ue,ae,g,p)}}b&1&&u.children!==d.children&&f(I,d.children)}else!E&&v==null&&Jt(I,T,A,p,g);((k=A.onVnodeUpdated)||C)&&fe(()=>{k&&Pe(k,p,d,u),C&&yt(d,u,p,"updated")},_)},He=(u,d,p,_,g,m,E)=>{for(let I=0;I<d.length;I++){const b=u[I],v=d[I],C=b.el&&(b.type===Ve||!en(b,v)||b.shapeFlag&70)?h(b.el):p;M(b,v,C,null,_,g,m,E,!0)}},Jt=(u,d,p,_,g)=>{if(d!==p){if(d!==$)for(const m in d)!sn(m)&&!(m in p)&&i(u,m,d[m],null,g,_);for(const m in p){if(sn(m))continue;const E=p[m],I=d[m];E!==I&&m!=="value"&&i(u,m,I,E,g,_)}"value"in p&&i(u,"value",d.value,p.value,g)}},xn=(u,d,p,_,g,m,E,I,b)=>{const v=d.el=u?u.el:a(""),C=d.anchor=u?u.anchor:a("");let{patchFlag:T,dynamicChildren:A,slotScopeIds:k}=d;k&&(I=I?I.concat(k):k),u==null?(r(v,p,_),r(C,p,_),Te(d.children||[],p,C,g,m,E,I,b)):T>0&&T&64&&A&&u.dynamicChildren?(He(u.dynamicChildren,A,p,g,m,E,I),(d.key!=null||g&&d===g.subTree)&&Ia(u,d,!0)):V(u,d,p,C,g,m,E,I,b)},Ln=(u,d,p,_,g,m,E,I,b)=>{d.slotScopeIds=I,u==null?d.shapeFlag&512?g.ctx.activate(d,p,_,E,b):Or(d,p,_,g,m,E,b):ii(u,d,b)},Or=(u,d,p,_,g,m,E)=>{const I=u.component=qu(u,_,g);if(oa(u)&&(I.ctx.renderer=Xt),Gu(I,!1,E),I.asyncDep){if(g&&g.registerDep(I,te,E),!u.el){const b=I.subTree=ut(bn);L(null,b,d,p)}}else te(I,u,d,p,g,m,E)},ii=(u,d,p)=>{const _=d.component=u.component;if(Uu(u,d,p))if(_.asyncDep&&!_.asyncResolved){G(_,d,p);return}else _.next=d,_.update();else d.el=u.el,_.vnode=d},te=(u,d,p,_,g,m,E)=>{const I=()=>{if(u.isMounted){let{next:T,bu:A,u:k,parent:x,vnode:W}=u;{const Ce=wa(u);if(Ce){T&&(T.el=W.el,G(u,T,E)),Ce.asyncDep.then(()=>{u.isUnmounted||I()});return}}let B=T,ue;bt(u,!1),T?(T.el=W.el,G(u,T,E)):T=W,A&&Vn(A),(ue=T.props&&T.props.onVnodeBeforeUpdate)&&Pe(ue,x,T,W),bt(u,!0);const ae=Ei(u),Ae=u.subTree;u.subTree=ae,M(Ae,ae,h(Ae.el),Fn(Ae),u,g,m),T.el=ae.el,B===null&&Fu(u,ae.el),k&&fe(k,g),(ue=T.props&&T.props.onVnodeUpdated)&&fe(()=>Pe(ue,x,T,W),g)}else{let T;const{el:A,props:k}=d,{bm:x,m:W,parent:B,root:ue,type:ae}=u,Ae=un(d);bt(u,!1),x&&Vn(x),!Ae&&(T=k&&k.onVnodeBeforeMount)&&Pe(T,B,d),bt(u,!0);{ue.ce&&ue.ce._injectChildStyle(ae);const Ce=u.subTree=Ei(u);M(null,Ce,p,_,u,g,m),d.el=Ce.el}if(W&&fe(W,g),!Ae&&(T=k&&k.onVnodeMounted)){const Ce=d;fe(()=>Pe(T,B,Ce),g)}(d.shapeFlag&256||B&&un(B.vnode)&&B.vnode.shapeFlag&256)&&u.a&&fe(u.a,g),u.isMounted=!0,d=p=_=null}};u.scope.on();const b=u.effect=new Uo(I);u.scope.off();const v=u.update=b.run.bind(b),C=u.job=b.runIfDirty.bind(b);C.i=u,C.id=u.uid,b.scheduler=()=>Ls(C),bt(u,!0),v()},G=(u,d,p)=>{d.component=u;const _=u.vnode.props;u.vnode=d,u.next=null,Iu(u,d.props,_,p),Su(u,d.children,p),ht(),pi(u),pt()},V=(u,d,p,_,g,m,E,I,b=!1)=>{const v=u&&u.children,C=u?u.shapeFlag:0,T=d.children,{patchFlag:A,shapeFlag:k}=d;if(A>0){if(A&128){Un(v,T,p,_,g,m,E,I,b);return}else if(A&256){_t(v,T,p,_,g,m,E,I,b);return}}k&8?(C&16&&Yt(v,g,m),T!==v&&f(p,T)):C&16?k&16?Un(v,T,p,_,g,m,E,I,b):Yt(v,g,m,!0):(C&8&&f(p,""),k&16&&Te(T,p,_,g,m,E,I,b))},_t=(u,d,p,_,g,m,E,I,b)=>{u=u||Ft,d=d||Ft;const v=u.length,C=d.length,T=Math.min(v,C);let A;for(A=0;A<T;A++){const k=d[A]=b?st(d[A]):ke(d[A]);M(u[A],k,p,null,g,m,E,I,b)}v>C?Yt(u,g,m,!0,!1,T):Te(d,p,_,g,m,E,I,b,T)},Un=(u,d,p,_,g,m,E,I,b)=>{let v=0;const C=d.length;let T=u.length-1,A=C-1;for(;v<=T&&v<=A;){const k=u[v],x=d[v]=b?st(d[v]):ke(d[v]);if(en(k,x))M(k,x,p,null,g,m,E,I,b);else break;v++}for(;v<=T&&v<=A;){const k=u[T],x=d[A]=b?st(d[A]):ke(d[A]);if(en(k,x))M(k,x,p,null,g,m,E,I,b);else break;T--,A--}if(v>T){if(v<=A){const k=A+1,x=k<C?d[k].el:_;for(;v<=A;)M(null,d[v]=b?st(d[v]):ke(d[v]),p,x,g,m,E,I,b),v++}}else if(v>A)for(;v<=T;)Se(u[v],g,m,!0),v++;else{const k=v,x=v,W=new Map;for(v=x;v<=A;v++){const de=d[v]=b?st(d[v]):ke(d[v]);de.key!=null&&W.set(de.key,v)}let B,ue=0;const ae=A-x+1;let Ae=!1,Ce=0;const Qt=new Array(ae);for(v=0;v<ae;v++)Qt[v]=0;for(v=k;v<=T;v++){const de=u[v];if(ue>=ae){Se(de,g,m,!0);continue}let Re;if(de.key!=null)Re=W.get(de.key);else for(B=x;B<=A;B++)if(Qt[B-x]===0&&en(de,d[B])){Re=B;break}Re===void 0?Se(de,g,m,!0):(Qt[Re-x]=v+1,Re>=Ce?Ce=Re:Ae=!0,M(de,d[Re],p,null,g,m,E,I,b),ue++)}const ci=Ae?Pu(Qt):Ft;for(B=ci.length-1,v=ae-1;v>=0;v--){const de=x+v,Re=d[de],li=de+1<C?d[de+1].el:_;Qt[v]===0?M(null,Re,p,li,g,m,E,I,b):Ae&&(B<0||v!==ci[B]?vt(Re,p,li,2):B--)}}},vt=(u,d,p,_,g=null)=>{const{el:m,type:E,transition:I,children:b,shapeFlag:v}=u;if(v&6){vt(u.component.subTree,d,p,_);return}if(v&128){u.suspense.move(d,p,_);return}if(v&64){E.move(u,d,p,Xt);return}if(E===Ve){r(m,d,p);for(let T=0;T<b.length;T++)vt(b[T],d,p,_);r(u.anchor,d,p);return}if(E===$r){j(u,d,p);return}if(_!==2&&v&1&&I)if(_===0)I.beforeEnter(m),r(m,d,p),fe(()=>I.enter(m),g);else{const{leave:T,delayLeave:A,afterLeave:k}=I,x=()=>r(m,d,p),W=()=>{T(m,()=>{x(),k&&k()})};A?A(m,x,W):W()}else r(m,d,p)},Se=(u,d,p,_=!1,g=!1)=>{const{type:m,props:E,ref:I,children:b,dynamicChildren:v,shapeFlag:C,patchFlag:T,dirs:A,cacheIndex:k}=u;if(T===-2&&(g=!1),I!=null&&tr(I,null,p,u,!0),k!=null&&(d.renderCache[k]=void 0),C&256){d.ctx.deactivate(u);return}const x=C&1&&A,W=!un(u);let B;if(W&&(B=E&&E.onVnodeBeforeUnmount)&&Pe(B,d,u),C&6)el(u.component,p,_);else{if(C&128){u.suspense.unmount(p,_);return}x&&yt(u,null,d,"beforeUnmount"),C&64?u.type.remove(u,d,p,Xt,_):v&&!v.hasOnce&&(m!==Ve||T>0&&T&64)?Yt(v,d,p,!1,!0):(m===Ve&&T&384||!g&&C&16)&&Yt(b,d,p),_&&oi(u)}(W&&(B=E&&E.onVnodeUnmounted)||x)&&fe(()=>{B&&Pe(B,d,u),x&&yt(u,null,d,"unmounted")},p)},oi=u=>{const{type:d,el:p,anchor:_,transition:g}=u;if(d===Ve){Zc(p,_);return}if(d===$r){P(u);return}const m=()=>{s(p),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(u.shapeFlag&1&&g&&!g.persisted){const{leave:E,delayLeave:I}=g,b=()=>E(p,m);I?I(u.el,m,b):b()}else m()},Zc=(u,d)=>{let p;for(;u!==d;)p=y(u),s(u),u=p;s(d)},el=(u,d,p)=>{const{bum:_,scope:g,job:m,subTree:E,um:I,m:b,a:v}=u;wi(b),wi(v),_&&Vn(_),g.stop(),m&&(m.flags|=8,Se(E,u,d,p)),I&&fe(I,d),fe(()=>{u.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Yt=(u,d,p,_=!1,g=!1,m=0)=>{for(let E=m;E<u.length;E++)Se(u[E],d,p,_,g)},Fn=u=>{if(u.shapeFlag&6)return Fn(u.component.subTree);if(u.shapeFlag&128)return u.suspense.next();const d=y(u.anchor||u.el),p=d&&d[Gl];return p?y(p):d};let kr=!1;const ai=(u,d,p)=>{u==null?d._vnode&&Se(d._vnode,null,null,!0):M(d._vnode||null,u,d,null,null,null,p),d._vnode=u,kr||(kr=!0,pi(),na(),kr=!1)},Xt={p:M,um:Se,m:vt,r:oi,mt:Or,mc:Te,pc:V,pbc:He,n:Fn,o:t};return{render:ai,hydrate:void 0,createApp:vu(ai)}}function Br({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function bt({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ru(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ia(t,e,n=!1){const r=t.children,s=e.children;if(O(r)&&O(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=st(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Ia(o,a)),a.type===Er&&(a.el=o.el)}}function Pu(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function wa(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:wa(e)}function wi(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Ou=Symbol.for("v-scx"),ku=()=>Wn(Ou);function Hr(t,e,n){return Ea(t,e,n)}function Ea(t,e,n=$){const{immediate:r,deep:s,flush:i,once:o}=n,a=ie({},n),c=e&&r||!e&&i!=="post";let l;if(wn){if(i==="sync"){const w=ku();l=w.__watcherHandles||(w.__watcherHandles=[])}else if(!c){const w=()=>{};return w.stop=De,w.resume=De,w.pause=De,w}}const f=Z;a.call=(w,N,M)=>Ue(w,f,N,M);let h=!1;i==="post"?a.scheduler=w=>{fe(w,f&&f.suspense)}:i!=="sync"&&(h=!0,a.scheduler=(w,N)=>{N?w():Ls(w)}),a.augmentJob=w=>{e&&(w.flags|=4),h&&(w.flags|=2,f&&(w.id=f.uid,w.i=f))};const y=Vl(t,e,a);return wn&&(l?l.push(y):c&&y()),y}function Du(t,e,n){const r=this.proxy,s=X(t)?t.includes(".")?Ta(r,t):()=>r[t]:t.bind(r,r);let i;D(e)?i=e:(i=e.handler,n=e);const o=Rn(this),a=Ea(s,i.bind(r),n);return o(),a}function Ta(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Nu=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${ye(e)}Modifiers`]||t[`${Dt(e)}Modifiers`];function Mu(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||$;let s=n;const i=e.startsWith("update:"),o=i&&Nu(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>X(f)?f.trim():f)),o.number&&(s=n.map(Xn)));let a,c=r[a=Dr(e)]||r[a=Dr(ye(e))];!c&&i&&(c=r[a=Dr(Dt(e))]),c&&Ue(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ue(l,t,6,s)}}function Sa(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!D(t)){const c=l=>{const f=Sa(l,e,!0);f&&(a=!0,ie(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(q(t)&&r.set(t,null),null):(O(i)?i.forEach(c=>o[c]=null):ie(o,i),q(t)&&r.set(t,o),o)}function wr(t,e){return!t||!pr(e)?!1:(e=e.slice(2).replace(/Once$/,""),F(t,e[0].toLowerCase()+e.slice(1))||F(t,Dt(e))||F(t,e))}function Ei(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:l,renderCache:f,props:h,data:y,setupState:w,ctx:N,inheritAttrs:M}=t,Y=er(t);let L,z;try{if(n.shapeFlag&4){const P=s||r,J=P;L=ke(l.call(J,P,f,h,w,y,N)),z=a}else{const P=e;L=ke(P.length>1?P(h,{attrs:a,slots:o,emit:c}):P(h,null)),z=e.props?a:xu(a)}}catch(P){fn.length=0,br(P,t,1),L=ut(bn)}let j=L;if(z&&M!==!1){const P=Object.keys(z),{shapeFlag:J}=j;P.length&&J&7&&(i&&P.some(Es)&&(z=Lu(z,i)),j=zt(j,z,!1,!0))}return n.dirs&&(j=zt(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&Us(j,n.transition),L=j,er(Y),L}const xu=t=>{let e;for(const n in t)(n==="class"||n==="style"||pr(n))&&((e||(e={}))[n]=t[n]);return e},Lu=(t,e)=>{const n={};for(const r in t)(!Es(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Uu(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ti(r,o,l):!!o;if(c&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const y=f[h];if(o[y]!==r[y]&&!wr(l,y))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Ti(r,o,l):!0:!!o;return!1}function Ti(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!wr(n,i))return!0}return!1}function Fu({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Aa=t=>t.__isSuspense;function Bu(t,e){e&&e.pendingBranch?O(t)?e.effects.push(...t):e.effects.push(t):zl(t)}const Ve=Symbol.for("v-fgt"),Er=Symbol.for("v-txt"),bn=Symbol.for("v-cmt"),$r=Symbol.for("v-stc"),fn=[];let ge=null;function hn(t=!1){fn.push(ge=t?null:[])}function Hu(){fn.pop(),ge=fn[fn.length-1]||null}let In=1;function Si(t,e=!1){In+=t,t<0&&ge&&e&&(ge.hasOnce=!0)}function Ca(t){return t.dynamicChildren=In>0?ge||Ft:null,Hu(),In>0&&ge&&ge.push(t),t}function Bs(t,e,n,r,s,i){return Ca(S(t,e,n,r,s,i,!0))}function Ai(t,e,n,r,s){return Ca(ut(t,e,n,r,s,!0))}function Ra(t){return t?t.__v_isVNode===!0:!1}function en(t,e){return t.type===e.type&&t.key===e.key}const Pa=({key:t})=>t??null,Kn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?X(t)||ee(t)||D(t)?{i:pe,r:t,k:e,f:!!n}:t:null);function S(t,e=null,n=null,r=0,s=null,i=t===Ve?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Pa(e),ref:e&&Kn(e),scopeId:sa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:pe};return a?(Hs(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=X(n)?8:16),In>0&&!o&&ge&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ge.push(c),c}const ut=$u;function $u(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===lu)&&(t=bn),Ra(t)){const a=zt(t,e,!0);return n&&Hs(a,n),In>0&&!i&&ge&&(a.shapeFlag&6?ge[ge.indexOf(t)]=a:ge.push(a)),a.patchFlag=-2,a}if(Zu(t)&&(t=t.__vccOpts),e){e=ju(e);let{class:a,style:c}=e;a&&!X(a)&&(e.class=mn(a)),q(c)&&(xs(c)&&!O(c)&&(c=ie({},c)),e.style=As(c))}const o=X(t)?1:Aa(t)?128:Jl(t)?64:q(t)?4:D(t)?2:0;return S(t,e,n,r,s,o,i,!0)}function ju(t){return t?xs(t)||pa(t)?ie({},t):t:null}function zt(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,l=e?Wu(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Pa(l),ref:e&&e.ref?n&&i?O(i)?i.concat(Kn(e)):[i,Kn(e)]:Kn(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ve?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&zt(t.ssContent),ssFallback:t.ssFallback&&zt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Us(f,c.clone(f)),f}function Vu(t=" ",e=0){return ut(Er,null,t,e)}function ke(t){return t==null||typeof t=="boolean"?ut(bn):O(t)?ut(Ve,null,t.slice()):Ra(t)?st(t):ut(Er,null,String(t))}function st(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:zt(t)}function Hs(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(O(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Hs(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!pa(e)?e._ctx=pe:s===3&&pe&&(pe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else D(e)?(e={default:e,_ctx:pe},n=32):(e=String(e),r&64?(n=16,e=[Vu(e)]):n=8);t.children=e,t.shapeFlag|=n}function Wu(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=mn([e.class,r.class]));else if(s==="style")e.style=As([e.style,r.style]);else if(pr(s)){const i=e[s],o=r[s];o&&i!==o&&!(O(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Pe(t,e,n,r=null){Ue(t,e,7,[n,r])}const Ku=da();let zu=0;function qu(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Ku,i={uid:zu++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new pl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ma(r,s),emitsOptions:Sa(r,s),emit:null,emitted:null,propsDefaults:$,inheritAttrs:r.inheritAttrs,ctx:$,data:$,props:$,attrs:$,slots:$,refs:$,setupState:$,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Mu.bind(null,i),t.ce&&t.ce(i),i}let Z=null,rr,ls;{const t=vr(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};rr=e("__VUE_INSTANCE_SETTERS__",n=>Z=n),ls=e("__VUE_SSR_SETTERS__",n=>wn=n)}const Rn=t=>{const e=Z;return rr(t),t.scope.on(),()=>{t.scope.off(),rr(e)}},Ci=()=>{Z&&Z.scope.off(),rr(null)};function Oa(t){return t.vnode.shapeFlag&4}let wn=!1;function Gu(t,e=!1,n=!1){e&&ls(e);const{props:r,children:s}=t.vnode,i=Oa(t);bu(t,r,i,e),Tu(t,s,n);const o=i?Ju(t,e):void 0;return e&&ls(!1),o}function Ju(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,du);const{setup:r}=n;if(r){ht();const s=t.setupContext=r.length>1?Xu(t):null,i=Rn(t),o=Cn(r,t,0,[t.props,s]),a=Oo(o);if(pt(),i(),(a||t.sp)&&!un(t)&&ia(t),a){if(o.then(Ci,Ci),e)return o.then(c=>{Ri(t,c)}).catch(c=>{br(c,t,0)});t.asyncDep=o}else Ri(t,o)}else ka(t)}function Ri(t,e,n){D(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:q(e)&&(t.setupState=Qo(e)),ka(t)}function ka(t,e,n){const r=t.type;t.render||(t.render=r.render||De);{const s=Rn(t);ht();try{fu(t)}finally{pt(),s()}}}const Yu={get(t,e){return Q(t,"get",""),t[e]}};function Xu(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Yu),slots:t.slots,emit:t.emit,expose:e}}function Tr(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Qo(xl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in dn)return dn[n](t)},has(e,n){return n in e||n in dn}})):t.proxy}function Qu(t,e=!0){return D(t)?t.displayName||t.name:t.name||e&&t.__name}function Zu(t){return D(t)&&"__vccOpts"in t}const ed=(t,e)=>$l(t,e,wn),td="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let us;const Pi=typeof window<"u"&&window.trustedTypes;if(Pi)try{us=Pi.createPolicy("vue",{createHTML:t=>t})}catch{}const Da=us?t=>us.createHTML(t):t=>t,nd="http://www.w3.org/2000/svg",rd="http://www.w3.org/1998/Math/MathML",je=typeof document<"u"?document:null,Oi=je&&je.createElement("template"),sd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?je.createElementNS(nd,t):e==="mathml"?je.createElementNS(rd,t):n?je.createElement(t,{is:n}):je.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>je.createTextNode(t),createComment:t=>je.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>je.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Oi.innerHTML=Da(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Oi.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},id=Symbol("_vtc");function od(t,e,n){const r=t[id];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ki=Symbol("_vod"),ad=Symbol("_vsh"),cd=Symbol(""),ld=/(^|;)\s*display\s*:/;function ud(t,e,n){const r=t.style,s=X(n);let i=!1;if(n&&!s){if(e)if(X(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&zn(r,a,"")}else for(const o in e)n[o]==null&&zn(r,o,"");for(const o in n)o==="display"&&(i=!0),zn(r,o,n[o])}else if(s){if(e!==n){const o=r[cd];o&&(n+=";"+o),r.cssText=n,i=ld.test(n)}}else e&&t.removeAttribute("style");ki in t&&(t[ki]=i?r.display:"",t[ad]&&(r.display="none"))}const Di=/\s*!important$/;function zn(t,e,n){if(O(n))n.forEach(r=>zn(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=dd(t,e);Di.test(n)?t.setProperty(Dt(r),n.replace(Di,""),"important"):t[r]=n}}const Ni=["Webkit","Moz","ms"],jr={};function dd(t,e){const n=jr[e];if(n)return n;let r=ye(e);if(r!=="filter"&&r in t)return jr[e]=r;r=_r(r);for(let s=0;s<Ni.length;s++){const i=Ni[s]+r;if(i in t)return jr[e]=i}return e}const Mi="http://www.w3.org/1999/xlink";function xi(t,e,n,r,s,i=dl(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Mi,e.slice(6,e.length)):t.setAttributeNS(Mi,e,n):n==null||i&&!Mo(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Le(n)?String(n):n)}function Li(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Da(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Mo(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Et(t,e,n,r){t.addEventListener(e,n,r)}function fd(t,e,n,r){t.removeEventListener(e,n,r)}const Ui=Symbol("_vei");function hd(t,e,n,r,s=null){const i=t[Ui]||(t[Ui]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=pd(e);if(r){const l=i[e]=_d(r,s);Et(t,a,l,c)}else o&&(fd(t,a,o,c),i[e]=void 0)}}const Fi=/(?:Once|Passive|Capture)$/;function pd(t){let e;if(Fi.test(t)){e={};let r;for(;r=t.match(Fi);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Dt(t.slice(2)),e]}let Vr=0;const gd=Promise.resolve(),md=()=>Vr||(gd.then(()=>Vr=0),Vr=Date.now());function _d(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ue(vd(r,n.value),e,5,[r])};return n.value=t,n.attached=md(),n}function vd(t,e){if(O(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Bi=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,yd=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?od(t,r,o):e==="style"?ud(t,n,r):pr(e)?Es(e)||hd(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):bd(t,e,r,o))?(Li(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&xi(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!X(r))?Li(t,ye(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),xi(t,e,r,o))};function bd(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Bi(e)&&D(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Bi(e)&&X(n)?!1:e in t}const sr=t=>{const e=t.props["onUpdate:modelValue"]||!1;return O(e)?n=>Vn(e,n):e};function Id(t){t.target.composing=!0}function Hi(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const jt=Symbol("_assign"),ds={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[jt]=sr(s);const i=r||s.props&&s.props.type==="number";Et(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Xn(a)),t[jt](a)}),n&&Et(t,"change",()=>{t.value=t.value.trim()}),e||(Et(t,"compositionstart",Id),Et(t,"compositionend",Hi),Et(t,"change",Hi))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[jt]=sr(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Xn(t.value):t.value,c=e??"";a!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},$i={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=gr(e);Et(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Xn(ir(o)):ir(o));t[jt](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,ea(()=>{t._assigning=!1})}),t[jt]=sr(r)},mounted(t,{value:e}){ji(t,e)},beforeUpdate(t,e,n){t[jt]=sr(n)},updated(t,{value:e}){t._assigning||ji(t,e)}};function ji(t,e){const n=t.multiple,r=O(e);if(!(n&&!r&&!gr(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],a=ir(o);if(n)if(r){const c=typeof a;c==="string"||c==="number"?o.selected=e.some(l=>String(l)===String(a)):o.selected=hl(e,a)>-1}else o.selected=e.has(a);else if(yr(ir(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ir(t){return"_value"in t?t._value:t.value}const wd=["ctrl","shift","alt","meta"],Ed={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>wd.some(n=>t[`${n}Key`]&&!e.includes(n))},Td=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=Ed[e[o]];if(a&&a(s,e))return}return t(s,...i)})},Sd=ie({patchProp:yd},sd);let Vi;function Ad(){return Vi||(Vi=Au(Sd))}const Cd=(...t)=>{const e=Ad().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Pd(r);if(!s)return;const i=e._component;!D(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Rd(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Rd(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Pd(t){return X(t)?document.querySelector(t):t}const Od=()=>{};var Wi={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},kd=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ma={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,f=i>>2,h=(i&3)<<4|a>>4;let y=(a&15)<<2|l>>6,w=l&63;c||(w=64,o||(y=64)),r.push(n[f],n[h],n[y],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Na(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kd(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new Dd;const y=i<<2|a>>4;if(r.push(y),l!==64){const w=a<<4&240|l>>2;if(r.push(w),h!==64){const N=l<<6&192|h;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Dd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Nd=function(t){const e=Na(t);return Ma.encodeByteArray(e,!0)},xa=function(t){return Nd(t).replace(/\./g,"")},La=function(t){try{return Ma.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd=()=>Md().__FIREBASE_DEFAULTS__,Ld=()=>{if(typeof process>"u"||typeof Wi>"u")return;const t=Wi.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ud=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&La(t[1]);return e&&JSON.parse(e)},$s=()=>{try{return Od()||xd()||Ld()||Ud()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fd=t=>{var e,n;return(n=(e=$s())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Ua=()=>{var t;return(t=$s())===null||t===void 0?void 0:t.config},Fa=t=>{var e;return(e=$s())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Hd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(oe())}function $d(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ba(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vd(){const t=oe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ha(){try{return typeof indexedDB=="object"}catch{return!1}}function $a(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Wd(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd="FirebaseError";class Be extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Kd,Object.setPrototypeOf(this,Be.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nt.prototype.create)}}class Nt{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?zd(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Be(s,a,r)}}function zd(t,e){return t.replace(qd,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const qd=/\{\$([^}]+)}/g;function Gd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ct(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ki(i)&&Ki(o)){if(!Ct(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ki(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function nn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function rn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Jd(t,e){const n=new Yd(t,e);return n.subscribe.bind(n)}class Yd{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Xd(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Wr),s.error===void 0&&(s.error=Wr),s.complete===void 0&&(s.complete=Wr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xd(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wr(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd=1e3,Zd=2,ef=4*60*60*1e3,tf=.5;function zi(t,e=Qd,n=Zd){const r=e*Math.pow(n,t),s=Math.round(tf*r*(Math.random()-.5)*2);return Math.min(ef,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){return t&&t._delegate?t._delegate:t}class Fe{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Bd;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sf(e))try{this.getOrInitializeService({instanceIdentifier:wt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=wt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wt){return this.instances.has(e)}getOptions(e=wt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rf(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wt){return this.component?this.component.multipleInstances?e:wt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rf(t){return t===wt?void 0:t}function sf(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nf(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(H||(H={}));const af={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},cf=H.INFO,lf={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},uf=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=lf[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class js{constructor(e){this.name=e,this._logLevel=cf,this._logHandler=uf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?af[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const df=(t,e)=>e.some(n=>t instanceof n);let qi,Gi;function ff(){return qi||(qi=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hf(){return Gi||(Gi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ja=new WeakMap,fs=new WeakMap,Va=new WeakMap,Kr=new WeakMap,Vs=new WeakMap;function pf(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(dt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ja.set(n,t)}).catch(()=>{}),Vs.set(e,t),e}function gf(t){if(fs.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});fs.set(t,e)}let hs={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Va.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mf(t){hs=t(hs)}function _f(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(zr(this),e,...n);return Va.set(r,e.sort?e.sort():[e]),dt(r)}:hf().includes(t)?function(...e){return t.apply(zr(this),e),dt(ja.get(this))}:function(...e){return dt(t.apply(zr(this),e))}}function vf(t){return typeof t=="function"?_f(t):(t instanceof IDBTransaction&&gf(t),df(t,ff())?new Proxy(t,hs):t)}function dt(t){if(t instanceof IDBRequest)return pf(t);if(Kr.has(t))return Kr.get(t);const e=vf(t);return e!==t&&(Kr.set(t,e),Vs.set(e,t)),e}const zr=t=>Vs.get(t);function Wa(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=dt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(dt(o.result),c.oldVersion,c.newVersion,dt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const yf=["get","getKey","getAll","getAllKeys","count"],bf=["put","add","delete","clear"],qr=new Map;function Ji(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qr.get(e))return qr.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=bf.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||yf.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return qr.set(e,i),i}mf(t=>({...t,get:(e,n,r)=>Ji(e,n)||t.get(e,n,r),has:(e,n)=>!!Ji(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wf(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wf(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ps="@firebase/app",Yi="0.11.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye=new js("@firebase/app"),Ef="@firebase/app-compat",Tf="@firebase/analytics-compat",Sf="@firebase/analytics",Af="@firebase/app-check-compat",Cf="@firebase/app-check",Rf="@firebase/auth",Pf="@firebase/auth-compat",Of="@firebase/database",kf="@firebase/data-connect",Df="@firebase/database-compat",Nf="@firebase/functions",Mf="@firebase/functions-compat",xf="@firebase/installations",Lf="@firebase/installations-compat",Uf="@firebase/messaging",Ff="@firebase/messaging-compat",Bf="@firebase/performance",Hf="@firebase/performance-compat",$f="@firebase/remote-config",jf="@firebase/remote-config-compat",Vf="@firebase/storage",Wf="@firebase/storage-compat",Kf="@firebase/firestore",zf="@firebase/vertexai",qf="@firebase/firestore-compat",Gf="firebase",Jf="11.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs="[DEFAULT]",Yf={[ps]:"fire-core",[Ef]:"fire-core-compat",[Sf]:"fire-analytics",[Tf]:"fire-analytics-compat",[Cf]:"fire-app-check",[Af]:"fire-app-check-compat",[Rf]:"fire-auth",[Pf]:"fire-auth-compat",[Of]:"fire-rtdb",[kf]:"fire-data-connect",[Df]:"fire-rtdb-compat",[Nf]:"fire-fn",[Mf]:"fire-fn-compat",[xf]:"fire-iid",[Lf]:"fire-iid-compat",[Uf]:"fire-fcm",[Ff]:"fire-fcm-compat",[Bf]:"fire-perf",[Hf]:"fire-perf-compat",[$f]:"fire-rc",[jf]:"fire-rc-compat",[Vf]:"fire-gcs",[Wf]:"fire-gcs-compat",[Kf]:"fire-fst",[qf]:"fire-fst-compat",[zf]:"fire-vertex","fire-js":"fire-js",[Gf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=new Map,Xf=new Map,ms=new Map;function Xi(t,e){try{t.container.addComponent(e)}catch(n){Ye.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xe(t){const e=t.name;if(ms.has(e))return Ye.debug(`There were multiple attempts to register component ${e}.`),!1;ms.set(e,t);for(const n of or.values())Xi(n,t);for(const n of Xf.values())Xi(n,t);return!0}function qt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function be(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ft=new Nt("app","Firebase",Qf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Fe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ft.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=Jf;function Ka(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:gs,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ft.create("bad-app-name",{appName:String(s)});if(n||(n=Ua()),!n)throw ft.create("no-options");const i=or.get(s);if(i){if(Ct(n,i.options)&&Ct(r,i.config))return i;throw ft.create("duplicate-app",{appName:s})}const o=new of(s);for(const c of ms.values())o.addComponent(c);const a=new Zf(n,r,o);return or.set(s,a),a}function za(t=gs){const e=or.get(t);if(!e&&t===gs&&Ua())return Ka();if(!e)throw ft.create("no-app",{appName:t});return e}function Ne(t,e,n){var r;let s=(r=Yf[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ye.warn(a.join(" "));return}Xe(new Fe(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh="firebase-heartbeat-database",th=1,En="firebase-heartbeat-store";let Gr=null;function qa(){return Gr||(Gr=Wa(eh,th,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(En)}catch(n){console.warn(n)}}}}).catch(t=>{throw ft.create("idb-open",{originalErrorMessage:t.message})})),Gr}async function nh(t){try{const n=(await qa()).transaction(En),r=await n.objectStore(En).get(Ga(t));return await n.done,r}catch(e){if(e instanceof Be)Ye.warn(e.message);else{const n=ft.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ye.warn(n.message)}}}async function Qi(t,e){try{const r=(await qa()).transaction(En,"readwrite");await r.objectStore(En).put(e,Ga(t)),await r.done}catch(n){if(n instanceof Be)Ye.warn(n.message);else{const r=ft.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ye.warn(r.message)}}}function Ga(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh=1024,sh=30;class ih{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ah(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Zi();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>sh){const o=ch(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ye.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Zi(),{heartbeatsToSend:r,unsentEntries:s}=oh(this._heartbeatsCache.heartbeats),i=xa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Ye.warn(n),""}}}function Zi(){return new Date().toISOString().substring(0,10)}function oh(t,e=rh){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),eo(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),eo(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ah{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ha()?$a().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nh(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Qi(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function eo(t){return xa(JSON.stringify({version:2,heartbeats:t})).length}function ch(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(t){Xe(new Fe("platform-logger",e=>new If(e),"PRIVATE")),Xe(new Fe("heartbeat",e=>new ih(e),"PRIVATE")),Ne(ps,Yi,t),Ne(ps,Yi,"esm2017"),Ne("fire-js","")}lh("");function Ws(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Ja(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uh=Ja,Ya=new Nt("auth","Firebase",Ja());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=new js("@firebase/auth");function dh(t,...e){ar.logLevel<=H.WARN&&ar.warn(`Auth (${On}): ${t}`,...e)}function qn(t,...e){ar.logLevel<=H.ERROR&&ar.error(`Auth (${On}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(t,...e){throw Ks(t,...e)}function Me(t,...e){return Ks(t,...e)}function Xa(t,e,n){const r=Object.assign(Object.assign({},uh()),{[e]:n});return new Nt("auth","Firebase",r).create(e,{appName:t.name})}function Je(t){return Xa(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ks(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ya.create(t,...e)}function R(t,e,...n){if(!t)throw Ks(e,...n)}function ze(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qn(e),new Error(e)}function Qe(t,e){t||ze(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function fh(){return to()==="http:"||to()==="https:"}function to(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fh()||Ba()||"connection"in navigator)?navigator.onLine:!0}function ph(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qe(n>e,"Short delay should be less than long delay!"),this.isMobile=Hd()||jd()}get(){return hh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t,e){Qe(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh=new kn(3e4,6e4);function gt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function mt(t,e,n,r,s={}){return Za(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Pn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const l=Object.assign({method:e,headers:c},i);return $d()||(l.referrerPolicy="no-referrer"),Qa.fetch()(ec(t,t.config.apiHost,n,a),l)})}async function Za(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},gh),e);try{const s=new vh(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw jn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw jn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw jn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw jn(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Xa(t,f,l);Ee(t,f)}}catch(s){if(s instanceof Be)throw s;Ee(t,"network-request-failed",{message:String(s)})}}async function Dn(t,e,n,r,s={}){const i=await mt(t,e,n,r,s);return"mfaPendingCredential"in i&&Ee(t,"multi-factor-auth-required",{_serverResponse:i}),i}function ec(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?zs(t.config,s):`${t.config.apiScheme}://${s}`}function _h(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vh{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Me(this.auth,"network-request-failed")),mh.get())})}}function jn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Me(t,e,r);return s.customData._tokenResponse=n,s}function no(t){return t!==void 0&&t.enterprise!==void 0}class yh{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return _h(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function bh(t,e){return mt(t,"GET","/v2/recaptchaConfig",gt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ih(t,e){return mt(t,"POST","/v1/accounts:delete",e)}async function tc(t,e){return mt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wh(t,e=!1){const n=et(t),r=await n.getIdToken(e),s=qs(r);R(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:pn(Jr(s.auth_time)),issuedAtTime:pn(Jr(s.iat)),expirationTime:pn(Jr(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Jr(t){return Number(t)*1e3}function qs(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return qn("JWT malformed, contained fewer than 3 sections"),null;try{const s=La(n);return s?JSON.parse(s):(qn("Failed to decode base64 JWT payload"),null)}catch(s){return qn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function ro(t){const e=qs(t);return R(e,"internal-error"),R(typeof e.exp<"u","internal-error"),R(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Be&&Eh(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Eh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=pn(this.lastLoginAt),this.creationTime=pn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cr(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Tn(t,tc(n,{idToken:r}));R(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?nc(i.providerUserInfo):[],a=Ah(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new vs(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function Sh(t){const e=et(t);await cr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ah(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function nc(t){return t.map(e=>{var{providerId:n}=e,r=Ws(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ch(t,e){const n=await Za(t,{},async()=>{const r=Pn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=ec(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Qa.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Rh(t,e){return mt(t,"POST","/v2/accounts:revokeToken",gt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(typeof e.idToken<"u","internal-error"),R(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ro(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){R(e.length!==0,"internal-error");const n=ro(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(R(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Ch(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Vt;return r&&(R(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(R(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(R(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vt,this.toJSON())}_performRefresh(){return ze("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t,e){R(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qe{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ws(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Th(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vs(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Tn(this,this.stsTokenManager.getToken(this.auth,e));return R(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wh(this,e)}reload(){return Sh(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await cr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(be(this.auth.app))return Promise.reject(Je(this.auth));const e=await this.getIdToken();return await Tn(this,Ih(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(s=n.email)!==null&&s!==void 0?s:void 0,w=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,N=(o=n.photoURL)!==null&&o!==void 0?o:void 0,M=(a=n.tenantId)!==null&&a!==void 0?a:void 0,Y=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,L=(l=n.createdAt)!==null&&l!==void 0?l:void 0,z=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:j,emailVerified:P,isAnonymous:J,providerData:_e,stsTokenManager:le}=n;R(j&&le,e,"internal-error");const Te=Vt.fromJSON(this.name,le);R(typeof j=="string",e,"internal-error"),nt(h,e.name),nt(y,e.name),R(typeof P=="boolean",e,"internal-error"),R(typeof J=="boolean",e,"internal-error"),nt(w,e.name),nt(N,e.name),nt(M,e.name),nt(Y,e.name),nt(L,e.name),nt(z,e.name);const tt=new qe({uid:j,auth:e,email:y,emailVerified:P,displayName:h,isAnonymous:J,photoURL:N,phoneNumber:w,tenantId:M,stsTokenManager:Te,createdAt:L,lastLoginAt:z});return _e&&Array.isArray(_e)&&(tt.providerData=_e.map(He=>Object.assign({},He))),Y&&(tt._redirectEventId=Y),tt}static async _fromIdTokenResponse(e,n,r=!1){const s=new Vt;s.updateFromServerResponse(n);const i=new qe({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await cr(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];R(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?nc(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Vt;a.updateFromIdToken(r);const c=new qe({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new vs(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=new Map;function Ge(t){Qe(t instanceof Function,"Expected a class definition");let e=so.get(t);return e?(Qe(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,so.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}rc.type="NONE";const io=rc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t,e,n){return`firebase:${t}:${e}:${n}`}class Wt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Gn(this.userKey,s.apiKey,i),this.fullPersistenceKey=Gn("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Wt(Ge(io),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||Ge(io);const o=Gn(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const f=await l._get(o);if(f){const h=qe._fromJSON(e,f);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Wt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Wt(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ac(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lc(e))return"Blackberry";if(uc(e))return"Webos";if(ic(e))return"Safari";if((e.includes("chrome/")||oc(e))&&!e.includes("edge/"))return"Chrome";if(cc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sc(t=oe()){return/firefox\//i.test(t)}function ic(t=oe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function oc(t=oe()){return/crios\//i.test(t)}function ac(t=oe()){return/iemobile/i.test(t)}function cc(t=oe()){return/android/i.test(t)}function lc(t=oe()){return/blackberry/i.test(t)}function uc(t=oe()){return/webos/i.test(t)}function Gs(t=oe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ph(t=oe()){var e;return Gs(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Oh(){return Vd()&&document.documentMode===10}function dc(t=oe()){return Gs(t)||cc(t)||uc(t)||lc(t)||/windows phone/i.test(t)||ac(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fc(t,e=[]){let n;switch(t){case"Browser":n=oo(oe());break;case"Worker":n=`${oo(oe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${On}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dh(t,e={}){return mt(t,"GET","/v2/passwordPolicy",gt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh=6;class Mh{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Nh,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ao(this),this.idTokenSubscription=new ao(this),this.beforeStateQueue=new kh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ya,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ge(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Wt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await tc(this,{idToken:e}),r=await qe._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(be(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await cr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ph()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(be(this.app))return Promise.reject(Je(this));const n=e?et(e):null;return n&&R(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return be(this.app)?Promise.reject(Je(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return be(this.app)?Promise.reject(Je(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ge(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Dh(this),n=new Mh(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Nt("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Rh(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ge(e)||this._popupRedirectResolver;R(n,this,"argument-error"),this.redirectPersistenceManager=await Wt.create(this,[Ge(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(R(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(be(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&dh(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Mt(t){return et(t)}class ao{constructor(e){this.auth=e,this.observer=null,this.addObserver=Jd(n=>this.observer=n)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sr={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Lh(t){Sr=t}function hc(t){return Sr.loadJS(t)}function Uh(){return Sr.recaptchaEnterpriseScript}function Fh(){return Sr.gapiScript}function Bh(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Hh{constructor(){this.enterprise=new $h}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class $h{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const jh="recaptcha-enterprise",pc="NO_RECAPTCHA";class Vh{constructor(e){this.type=jh,this.auth=Mt(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{bh(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new yh(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;no(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(pc)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Hh().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&no(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Uh();c.length!==0&&(c+=a),hc(c).then(()=>{s(a,i,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function co(t,e,n,r=!1,s=!1){const i=new Vh(t);let o;if(s)o=pc;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const a=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function ys(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await co(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await co(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(t,e){const n=qt(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ct(i,e??{}))return s;Ee(s,"already-initialized")}return n.initialize({options:e})}function Kh(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ge);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function zh(t,e,n){const r=Mt(t);R(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=gc(e),{host:o,port:a}=qh(e),c=a===null?"":`:${a}`,l={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){R(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),R(Ct(l,r.config.emulator)&&Ct(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Gh()}function gc(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function qh(t){const e=gc(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:lo(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:lo(o)}}}function lo(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Gh(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ze("not implemented")}_getIdTokenResponse(e){return ze("not implemented")}_linkToIdToken(e,n){return ze("not implemented")}_getReauthenticationResolver(e){return ze("not implemented")}}async function Jh(t,e){return mt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yh(t,e){return Dn(t,"POST","/v1/accounts:signInWithPassword",gt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xh(t,e){return Dn(t,"POST","/v1/accounts:signInWithEmailLink",gt(t,e))}async function Qh(t,e){return Dn(t,"POST","/v1/accounts:signInWithEmailLink",gt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends Js{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Sn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Sn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ys(e,n,"signInWithPassword",Yh);case"emailLink":return Xh(e,{email:this._email,oobCode:this._password});default:Ee(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ys(e,r,"signUpPassword",Jh);case"emailLink":return Qh(e,{idToken:n,email:this._email,oobCode:this._password});default:Ee(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kt(t,e){return Dn(t,"POST","/v1/accounts:signInWithIdp",gt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh="http://localhost";class Rt extends Js{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Rt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ee("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ws(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Rt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Kt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Kt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Kt(e,n)}buildRequest(){const e={requestUri:Zh,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Pn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ep(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tp(t){const e=nn(rn(t)).link,n=e?nn(rn(e)).deep_link_id:null,r=nn(rn(t)).deep_link_id;return(r?nn(rn(r)).link:null)||r||n||e||t}class Ys{constructor(e){var n,r,s,i,o,a;const c=nn(rn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,h=ep((s=c.mode)!==null&&s!==void 0?s:null);R(l&&f&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=tp(e);try{return new Ys(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(){this.providerId=Gt.PROVIDER_ID}static credential(e,n){return Sn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ys.parseLink(n);return R(r,"argument-error"),Sn._fromEmailAndCode(e,r.code,r.tenantId)}}Gt.PROVIDER_ID="password";Gt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends mc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Nn{constructor(){super("facebook.com")}static credential(e){return Rt._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return it.credential(e.oauthAccessToken)}catch{return null}}}it.FACEBOOK_SIGN_IN_METHOD="facebook.com";it.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends Nn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Rt._fromParams({providerId:ot.PROVIDER_ID,signInMethod:ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ot.credentialFromTaggedObject(e)}static credentialFromError(e){return ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ot.credential(n,r)}catch{return null}}}ot.GOOGLE_SIGN_IN_METHOD="google.com";ot.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends Nn{constructor(){super("github.com")}static credential(e){return Rt._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return at.credential(e.oauthAccessToken)}catch{return null}}}at.GITHUB_SIGN_IN_METHOD="github.com";at.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct extends Nn{constructor(){super("twitter.com")}static credential(e,n){return Rt._fromParams({providerId:ct.PROVIDER_ID,signInMethod:ct.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ct.credentialFromTaggedObject(e)}static credentialFromError(e){return ct.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ct.credential(n,r)}catch{return null}}}ct.TWITTER_SIGN_IN_METHOD="twitter.com";ct.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function np(t,e){return Dn(t,"POST","/v1/accounts:signUp",gt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await qe._fromIdTokenResponse(e,r,s),o=uo(r);return new Pt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=uo(r);return new Pt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function uo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends Be{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,lr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new lr(e,n,r,s)}}function _c(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?lr._fromErrorAndOperation(t,i,e,r):i})}async function rp(t,e,n=!1){const r=await Tn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Pt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sp(t,e,n=!1){const{auth:r}=t;if(be(r.app))return Promise.reject(Je(r));const s="reauthenticate";try{const i=await Tn(t,_c(r,s,e,t),n);R(i.idToken,r,"internal-error");const o=qs(i.idToken);R(o,r,"internal-error");const{sub:a}=o;return R(t.uid===a,r,"user-mismatch"),Pt._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ee(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vc(t,e,n=!1){if(be(t.app))return Promise.reject(Je(t));const r="signIn",s=await _c(t,r,e),i=await Pt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function ip(t,e){return vc(Mt(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yc(t){const e=Mt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function op(t,e,n){if(be(t.app))return Promise.reject(Je(t));const r=Mt(t),o=await ys(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",np).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&yc(t),c}),a=await Pt._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function ap(t,e,n){return be(t.app)?Promise.reject(Je(t)):ip(et(t),Gt.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&yc(t),r})}function cp(t,e,n,r){return et(t).onIdTokenChanged(e,n,r)}function lp(t,e,n){return et(t).beforeAuthStateChanged(e,n)}const ur="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ur,"1"),this.storage.removeItem(ur),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=1e3,dp=10;class Ic extends bc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Oh()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,dp):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},up)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ic.type="LOCAL";const fp=Ic;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc extends bc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}wc.type="SESSION";const Ec=wc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ar(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await hp(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ar.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Xs("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const y=h;if(y.data.eventId===l)switch(y.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(y.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(){return window}function gp(t){xe().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(){return typeof xe().WorkerGlobalScope<"u"&&typeof xe().importScripts=="function"}async function mp(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _p(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function vp(){return Tc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc="firebaseLocalStorageDb",yp=1,dr="firebaseLocalStorage",Ac="fbase_key";class Mn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Cr(t,e){return t.transaction([dr],e?"readwrite":"readonly").objectStore(dr)}function bp(){const t=indexedDB.deleteDatabase(Sc);return new Mn(t).toPromise()}function bs(){const t=indexedDB.open(Sc,yp);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(dr,{keyPath:Ac})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(dr)?e(r):(r.close(),await bp(),e(await bs()))})})}async function fo(t,e,n){const r=Cr(t,!0).put({[Ac]:e,value:n});return new Mn(r).toPromise()}async function Ip(t,e){const n=Cr(t,!1).get(e),r=await new Mn(n).toPromise();return r===void 0?null:r.value}function ho(t,e){const n=Cr(t,!0).delete(e);return new Mn(n).toPromise()}const wp=800,Ep=3;class Cc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bs(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ep)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ar._getInstance(vp()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await mp(),!this.activeServiceWorker)return;this.sender=new pp(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_p()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bs();return await fo(e,ur,"1"),await ho(e,ur),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>fo(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ip(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ho(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Cr(s,!1).getAll();return new Mn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wp)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Cc.type="LOCAL";const Tp=Cc;new kn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(t,e){return e?Ge(e):(R(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs extends Js{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Kt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Kt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ap(t){return vc(t.auth,new Qs(t),t.bypassAuthState)}function Cp(t){const{auth:e,user:n}=t;return R(n,e,"internal-error"),sp(n,new Qs(t),t.bypassAuthState)}async function Rp(t){const{auth:e,user:n}=t;return R(n,e,"internal-error"),rp(n,new Qs(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ap;case"linkViaPopup":case"linkViaRedirect":return Rp;case"reauthViaPopup":case"reauthViaRedirect":return Cp;default:Ee(this.auth,"internal-error")}}resolve(e){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pp=new kn(2e3,1e4);class Ut extends Rc{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ut.currentPopupAction&&Ut.currentPopupAction.cancel(),Ut.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return R(e,this.auth,"internal-error"),e}async onExecution(){Qe(this.filter.length===1,"Popup operations only handle one event");const e=Xs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Me(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Me(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ut.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Me(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Pp.get())};e()}}Ut.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op="pendingRedirect",Jn=new Map;class kp extends Rc{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Jn.get(this.auth._key());if(!e){try{const r=await Dp(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Jn.set(this.auth._key(),e)}return this.bypassAuthState||Jn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Dp(t,e){const n=xp(e),r=Mp(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Np(t,e){Jn.set(t._key(),e)}function Mp(t){return Ge(t._redirectPersistence)}function xp(t){return Gn(Op,t.config.apiKey,t.name)}async function Lp(t,e,n=!1){if(be(t.app))return Promise.reject(Je(t));const r=Mt(t),s=Sp(r,e),o=await new kp(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up=10*60*1e3;class Fp{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Bp(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Pc(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Me(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Up&&this.cachedEventUids.clear(),this.cachedEventUids.has(po(e))}saveEventToCache(e){this.cachedEventUids.add(po(e)),this.lastProcessedEventTime=Date.now()}}function po(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Pc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Bp(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hp(t,e={}){return mt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jp=/^https?/;async function Vp(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Hp(t);for(const n of e)try{if(Wp(n))return}catch{}Ee(t,"unauthorized-domain")}function Wp(t){const e=_s(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!jp.test(n))return!1;if($p.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=new kn(3e4,6e4);function go(){const t=xe().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function zp(t){return new Promise((e,n)=>{var r,s,i;function o(){go(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{go(),n(Me(t,"network-request-failed"))},timeout:Kp.get()})}if(!((s=(r=xe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=xe().gapi)===null||i===void 0)&&i.load)o();else{const a=Bh("iframefcb");return xe()[a]=()=>{gapi.load?o():n(Me(t,"network-request-failed"))},hc(`${Fh()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Yn=null,e})}let Yn=null;function qp(t){return Yn=Yn||zp(t),Yn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp=new kn(5e3,15e3),Jp="__/auth/iframe",Yp="emulator/auth/iframe",Xp={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Qp=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zp(t){const e=t.config;R(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zs(e,Yp):`https://${t.config.authDomain}/${Jp}`,r={apiKey:e.apiKey,appName:t.name,v:On},s=Qp.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Pn(r).slice(1)}`}async function eg(t){const e=await qp(t),n=xe().gapi;return R(n,t,"internal-error"),e.open({where:document.body,url:Zp(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xp,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Me(t,"network-request-failed"),a=xe().setTimeout(()=>{i(o)},Gp.get());function c(){xe().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ng=500,rg=600,sg="_blank",ig="http://localhost";class mo{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function og(t,e,n,r=ng,s=rg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},tg),{width:r.toString(),height:s.toString(),top:i,left:o}),l=oe().toLowerCase();n&&(a=oc(l)?sg:n),sc(l)&&(e=e||ig,c.scrollbars="yes");const f=Object.entries(c).reduce((y,[w,N])=>`${y}${w}=${N},`,"");if(Ph(l)&&a!=="_self")return ag(e||"",a),new mo(null);const h=window.open(e||"",a,f);R(h,t,"popup-blocked");try{h.focus()}catch{}return new mo(h)}function ag(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg="__/auth/handler",lg="emulator/auth/handler",ug=encodeURIComponent("fac");async function _o(t,e,n,r,s,i){R(t.config.authDomain,t,"auth-domain-config-required"),R(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:On,eventId:s};if(e instanceof mc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Gd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,h]of Object.entries({}))o[f]=h}if(e instanceof Nn){const f=e.getScopes().filter(h=>h!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const c=await t._getAppCheckToken(),l=c?`#${ug}=${encodeURIComponent(c)}`:"";return`${dg(t)}?${Pn(a).slice(1)}${l}`}function dg({config:t}){return t.emulator?zs(t,lg):`https://${t.authDomain}/${cg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr="webStorageSupport";class fg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ec,this._completeRedirectFn=Lp,this._overrideRedirectResult=Np}async _openPopup(e,n,r,s){var i;Qe((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await _o(e,n,r,_s(),s);return og(e,o,Xs())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await _o(e,n,r,_s(),s);return gp(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Qe(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await eg(e),r=new Fp(e);return n.register("authEvent",s=>(R(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Yr,{type:Yr},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Yr];o!==void 0&&n(!!o),Ee(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Vp(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dc()||ic()||Gs()}}const hg=fg;var vo="@firebase/auth",yo="1.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mg(t){Xe(new Fe("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;R(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fc(t)},l=new xh(r,s,i,c);return Kh(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Xe(new Fe("auth-internal",e=>{const n=Mt(e.getProvider("auth").getImmediate());return(r=>new pg(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ne(vo,yo,gg(t)),Ne(vo,yo,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g=5*60,vg=Fa("authIdTokenMaxAge")||_g;let bo=null;const yg=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vg)return;const s=n==null?void 0:n.token;bo!==s&&(bo=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function bg(t=za()){const e=qt(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Wh(t,{popupRedirectResolver:hg,persistence:[Tp,fp,Ec]}),r=Fa("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=yg(i.toString());lp(n,o,()=>o(n.currentUser)),cp(n,a=>o(a))}}const s=Fd("auth");return s&&zh(n,`http://${s}`),n}function Ig(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Lh({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Me("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Ig().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mg("Browser");var wg="firebase",Eg="11.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ne(wg,Eg,"app");const Oc="@firebase/installations",Zs="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kc=1e4,Dc=`w:${Zs}`,Nc="FIS_v2",Tg="https://firebaseinstallations.googleapis.com/v1",Sg=60*60*1e3,Ag="installations",Cg="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ot=new Nt(Ag,Cg,Rg);function Mc(t){return t instanceof Be&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc({projectId:t}){return`${Tg}/projects/${t}/installations`}function Lc(t){return{token:t.token,requestStatus:2,expiresIn:Og(t.expiresIn),creationTime:Date.now()}}async function Uc(t,e){const r=(await e.json()).error;return Ot.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Fc({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Pg(t,{refreshToken:e}){const n=Fc(t);return n.append("Authorization",kg(e)),n}async function Bc(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Og(t){return Number(t.replace("s","000"))}function kg(t){return`${Nc} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dg({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=xc(t),s=Fc(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:Nc,appId:t.appId,sdkVersion:Dc},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Bc(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Lc(l.authToken)}}else throw await Uc("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=/^[cdef][\w-]{21}$/,Is="";function xg(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Lg(t);return Mg.test(n)?n:Is}catch{return Is}}function Lg(t){return Ng(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=new Map;function jc(t,e){const n=Rr(t);Vc(n,e),Ug(n,e)}function Vc(t,e){const n=$c.get(t);if(n)for(const r of n)r(e)}function Ug(t,e){const n=Fg();n&&n.postMessage({key:t,fid:e}),Bg()}let Tt=null;function Fg(){return!Tt&&"BroadcastChannel"in self&&(Tt=new BroadcastChannel("[Firebase] FID Change"),Tt.onmessage=t=>{Vc(t.data.key,t.data.fid)}),Tt}function Bg(){$c.size===0&&Tt&&(Tt.close(),Tt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg="firebase-installations-database",$g=1,kt="firebase-installations-store";let Xr=null;function ei(){return Xr||(Xr=Wa(Hg,$g,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(kt)}}})),Xr}async function fr(t,e){const n=Rr(t),s=(await ei()).transaction(kt,"readwrite"),i=s.objectStore(kt),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&jc(t,e.fid),e}async function Wc(t){const e=Rr(t),r=(await ei()).transaction(kt,"readwrite");await r.objectStore(kt).delete(e),await r.done}async function Pr(t,e){const n=Rr(t),s=(await ei()).transaction(kt,"readwrite"),i=s.objectStore(kt),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&jc(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ti(t){let e;const n=await Pr(t.appConfig,r=>{const s=jg(r),i=Vg(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Is?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function jg(t){const e=t||{fid:xg(),registrationStatus:0};return Kc(e)}function Vg(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ot.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Wg(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Kg(t)}:{installationEntry:e}}async function Wg(t,e){try{const n=await Dg(t,e);return fr(t.appConfig,n)}catch(n){throw Mc(n)&&n.customData.serverCode===409?await Wc(t.appConfig):await fr(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Kg(t){let e=await Io(t.appConfig);for(;e.registrationStatus===1;)await Hc(100),e=await Io(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ti(t);return r||n}return e}function Io(t){return Pr(t,e=>{if(!e)throw Ot.create("installation-not-found");return Kc(e)})}function Kc(t){return zg(t)?{fid:t.fid,registrationStatus:0}:t}function zg(t){return t.registrationStatus===1&&t.registrationTime+kc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qg({appConfig:t,heartbeatServiceProvider:e},n){const r=Gg(t,n),s=Pg(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Dc,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Bc(()=>fetch(r,a));if(c.ok){const l=await c.json();return Lc(l)}else throw await Uc("Generate Auth Token",c)}function Gg(t,{fid:e}){return`${xc(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(t,e=!1){let n;const r=await Pr(t.appConfig,i=>{if(!zc(i))throw Ot.create("not-registered");const o=i.authToken;if(!e&&Xg(o))return i;if(o.requestStatus===1)return n=Jg(t,e),i;{if(!navigator.onLine)throw Ot.create("app-offline");const a=Zg(i);return n=Yg(t,a),a}});return n?await n:r.authToken}async function Jg(t,e){let n=await wo(t.appConfig);for(;n.authToken.requestStatus===1;)await Hc(100),n=await wo(t.appConfig);const r=n.authToken;return r.requestStatus===0?ni(t,e):r}function wo(t){return Pr(t,e=>{if(!zc(e))throw Ot.create("not-registered");const n=e.authToken;return em(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Yg(t,e){try{const n=await qg(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await fr(t.appConfig,r),n}catch(n){if(Mc(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Wc(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await fr(t.appConfig,r)}throw n}}function zc(t){return t!==void 0&&t.registrationStatus===2}function Xg(t){return t.requestStatus===2&&!Qg(t)}function Qg(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Sg}function Zg(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function em(t){return t.requestStatus===1&&t.requestTime+kc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tm(t){const e=t,{installationEntry:n,registrationPromise:r}=await ti(e);return r?r.catch(console.error):ni(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nm(t,e=!1){const n=t;return await rm(n),(await ni(n,e)).token}async function rm(t){const{registrationPromise:e}=await ti(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(t){if(!t||!t.options)throw Qr("App Configuration");if(!t.name)throw Qr("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Qr(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Qr(t){return Ot.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc="installations",im="installations-internal",om=t=>{const e=t.getProvider("app").getImmediate(),n=sm(e),r=qt(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},am=t=>{const e=t.getProvider("app").getImmediate(),n=qt(e,qc).getImmediate();return{getId:()=>tm(n),getToken:s=>nm(n,s)}};function cm(){Xe(new Fe(qc,om,"PUBLIC")),Xe(new Fe(im,am,"PRIVATE"))}cm();Ne(Oc,Zs);Ne(Oc,Zs,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr="analytics",lm="firebase_id",um="origin",dm=60*1e3,fm="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ri="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=new js("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},me=new Nt("analytics","Analytics",hm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(t){if(!t.startsWith(ri)){const e=me.create("invalid-gtag-resource",{gtagURL:t});return ce.warn(e.message),""}return t}function Gc(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function gm(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function mm(t,e){const n=gm("firebase-js-sdk-policy",{createScriptURL:pm}),r=document.createElement("script"),s=`${ri}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function _m(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function vm(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await Gc(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){ce.error(a)}t("config",s,i)}async function ym(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Gc(n);for(const c of o){const l=a.find(h=>h.measurementId===c),f=l&&e[l.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){ce.error(i)}}function bm(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await ym(t,e,n,a,c)}else if(i==="config"){const[a,c]=o;await vm(t,e,n,r,a,c)}else if(i==="consent"){const[a,c]=o;t("consent",a,c)}else if(i==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){ce.error(a)}}return s}function Im(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=bm(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function wm(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(ri)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em=30,Tm=1e3;class Sm{constructor(e={},n=Tm){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Jc=new Sm;function Am(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Cm(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:Am(r)},i=fm.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw me.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function Rm(t,e=Jc,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw me.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw me.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new km;return setTimeout(async()=>{a.abort()},dm),Yc({appId:r,apiKey:s,measurementId:i},o,a,e)}async function Yc(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=Jc){var i;const{appId:o,measurementId:a}=t;try{await Pm(r,e)}catch(c){if(a)return ce.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await Cm(t);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!Om(l)){if(s.deleteThrottleMetadata(o),a)return ce.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const f=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?zi(n,s.intervalMillis,Em):zi(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(o,h),ce.debug(`Calling attemptFetch again in ${f} millis`),Yc(t,h,r,s)}}function Pm(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(me.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Om(t){if(!(t instanceof Be)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class km{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Dm(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nm(){if(Ha())try{await $a()}catch(t){return ce.warn(me.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ce.warn(me.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Mm(t,e,n,r,s,i,o){var a;const c=Rm(t);c.then(w=>{n[w.measurementId]=w.appId,t.options.measurementId&&w.measurementId!==t.options.measurementId&&ce.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(w=>ce.error(w)),e.push(c);const l=Nm().then(w=>{if(w)return r.getId()}),[f,h]=await Promise.all([c,l]);wm(i)||mm(i,f.measurementId),s("js",new Date);const y=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return y[um]="firebase",y.update=!0,h!=null&&(y[lm]=h),s("config",f.measurementId,y),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(e){this.app=e}_delete(){return delete gn[this.app.options.appId],Promise.resolve()}}let gn={},Eo=[];const To={};let Zr="dataLayer",Lm="gtag",So,Xc,Ao=!1;function Um(){const t=[];if(Ba()&&t.push("This is a browser extension environment."),Wd()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=me.create("invalid-analytics-context",{errorInfo:e});ce.warn(n.message)}}function Fm(t,e,n){Um();const r=t.options.appId;if(!r)throw me.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ce.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw me.create("no-api-key");if(gn[r]!=null)throw me.create("already-exists",{id:r});if(!Ao){_m(Zr);const{wrappedGtag:i,gtagCore:o}=Im(gn,Eo,To,Zr,Lm);Xc=i,So=o,Ao=!0}return gn[r]=Mm(t,Eo,To,e,So,Zr,n),new xm(t)}function Bm(t=za()){t=et(t);const e=qt(t,hr);return e.isInitialized()?e.getImmediate():Hm(t)}function Hm(t,e={}){const n=qt(t,hr);if(n.isInitialized()){const s=n.getImmediate();if(Ct(e,n.getOptions()))return s;throw me.create("already-initialized")}return n.initialize({options:e})}function $m(t,e,n,r){t=et(t),Dm(Xc,gn[t.app.options.appId],e,n,r).catch(s=>ce.error(s))}const Co="@firebase/analytics",Ro="0.10.12";function jm(){Xe(new Fe(hr,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return Fm(r,s,n)},"PUBLIC")),Xe(new Fe("analytics-internal",t,"PRIVATE")),Ne(Co,Ro),Ne(Co,Ro,"esm2017");function t(e){try{const n=e.getProvider(hr).getImmediate();return{logEvent:(r,s,i)=>$m(n,r,s,i)}}catch(n){throw me.create("interop-component-reg-failed",{reason:n})}}}jm();const Vm={apiKey:"AIzaSyDl8FYIAd1LoWByhZ0JAJoMar26LQl45Ww",authDomain:"battersuccessrates.firebaseapp.com",projectId:"battersuccessrates",storageBucket:"battersuccessrates.firebasestorage.app",messagingSenderId:"295535221945",appId:"1:295535221945:web:1670b1322d64281cb38f68"},Qc=Ka(Vm);Bm(Qc);const Po=bg(Qc),si=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Wm={class:"auth-container"},Km={type:"submit"},zm={__name:"AuthScreen",emits:["authenticated"],setup(t,{emit:e}){const n=e,r=Ur(""),s=Ur(""),i=Ur(!0),o=async()=>{try{i.value?(await ap(Po,r.value,s.value),n("authenticated")):(await op(Po,r.value,s.value),alert("Account created!"))}catch(a){alert(a.message)}};return(a,c)=>(hn(),Bs("div",Wm,[S("h2",null,ve(i.value?"Login":"Sign Up"),1),S("form",{onSubmit:Td(o,["prevent"])},[ln(S("input",{"onUpdate:modelValue":c[0]||(c[0]=l=>r.value=l),type:"email",placeholder:"Email",required:""},null,512),[[ds,r.value]]),ln(S("input",{"onUpdate:modelValue":c[1]||(c[1]=l=>s.value=l),type:"password",placeholder:"Password",required:""},null,512),[[ds,s.value]]),S("button",Km,ve(i.value?"Login":"Sign Up"),1)],32),S("p",{onClick:c[2]||(c[2]=l=>i.value=!i.value)},ve(i.value?"Need an account? Sign Up":"Already have an account? Login"),1)]))}},qm=si(zm,[["__scopeId","data-v-0ac943f2"]]),Gm={name:"MainScreen",data(){return{batterHandedness:"R",pitchType:"FB",pitchResult:"",isSidebarMinimized:!1,successRates:{FB:"--",CB:"--",CH:"--",SL:"--"},battingPercentage:"--",sluggingPercentage:"--",expectedSuccess:"--",previousScenario:""}},methods:{toggleSidebar(){this.isSidebarMinimized=!this.isSidebarMinimized},undoPitch(){alert("Undo functionality not implemented yet.")},async getPrediction(){const n=["FB","SL"];try{const s=await(await fetch("https://term-project-script-junkies-firebase.onrender.com/predict",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({balls:1,strikes:2,prev_pitches:n})})).json();this.successRates.FB=s.FB!==void 0?s.FB:"--",this.successRates.CB=s.CB!==void 0?s.CB:"--",this.successRates.CH=s.CH!==void 0?s.CH:"--",this.successRates.SL=s.SL!==void 0?s.SL:"--"}catch(r){console.error("Prediction fetch failed:",r),alert("Failed to reach prediction API.")}}}},Jm={class:"input-group"},Ym={class:"input-group"},Xm={class:"input-group"},Qm={class:"content"},Zm={class:"stat-box-container"},e_={class:"stat-box"},t_={class:"stat-box"},n_={class:"stat-box"},r_={class:"success-rates-container"},s_={class:"success-box"},i_={class:"success-box"},o_={class:"success-box"},a_={class:"success-box"},c_={class:"previous-scenarios"};function l_(t,e,n,r,s,i){return hn(),Bs("div",{class:mn(["container",{minimized:s.isSidebarMinimized}])},[S("div",{class:mn(["sidebar",{minimized:s.isSidebarMinimized}]),id:"sidebar"},[S("button",{onClick:e[0]||(e[0]=(...o)=>i.toggleSidebar&&i.toggleSidebar(...o)),class:"toggle-icon"},"«"),e[11]||(e[11]=S("h2",null,"Pitch Input",-1)),S("div",Jm,[e[7]||(e[7]=S("label",{for:"batter-handedness"},"Batter Handedness:",-1)),ln(S("select",{"onUpdate:modelValue":e[1]||(e[1]=o=>s.batterHandedness=o),id:"batter-handedness"},e[6]||(e[6]=[S("option",{value:"R"},"Right (R)",-1),S("option",{value:"L"},"Left (L)",-1)]),512),[[$i,s.batterHandedness]])]),S("div",Ym,[e[9]||(e[9]=S("label",{for:"pitch-type"},"Pitch Type:",-1)),ln(S("select",{"onUpdate:modelValue":e[2]||(e[2]=o=>s.pitchType=o),id:"pitch-type"},e[8]||(e[8]=[S("option",{value:"FB"},"Fastball (FB)",-1),S("option",{value:"CB"},"Curveball (CB)",-1),S("option",{value:"CH"},"Changeup (CH)",-1),S("option",{value:"SL"},"Slider (SL)",-1)]),512),[[$i,s.pitchType]])]),S("div",Xm,[e[10]||(e[10]=S("label",{for:"pitch-result"},"Result of Pitch:",-1)),ln(S("input",{"onUpdate:modelValue":e[3]||(e[3]=o=>s.pitchResult=o),type:"text",id:"pitch-result",placeholder:"Enter result (e.g., Strike, Ball, Hit, Out, Foul)"},null,512),[[ds,s.pitchResult]])]),S("button",{onClick:e[4]||(e[4]=(...o)=>i.getPrediction&&i.getPrediction(...o))},"Pitch"),S("button",{onClick:e[5]||(e[5]=(...o)=>i.undoPitch&&i.undoPitch(...o))},"Undo Last Pitch")],2),S("div",Qm,[e[20]||(e[20]=S("h1",null,"Batter Success Rates",-1)),e[21]||(e[21]=S("div",{class:"count"},"Count: 0-0",-1)),e[22]||(e[22]=S("div",{class:"sequence"},"Sequence: ",-1)),S("div",Zm,[S("div",e_,[e[12]||(e[12]=S("h3",null,"Batting %",-1)),S("p",null,ve(s.battingPercentage)+"%",1)]),S("div",t_,[e[13]||(e[13]=S("h3",null,"Slugging %",-1)),S("p",null,ve(s.sluggingPercentage)+"%",1)]),S("div",n_,[e[14]||(e[14]=S("h3",null,"Expected Success %",-1)),S("p",null,ve(s.expectedSuccess)+"%",1)])]),S("div",r_,[S("div",s_,[e[15]||(e[15]=S("h4",null,"Fastball Success",-1)),S("p",null,ve(s.successRates.FB)+"%",1)]),S("div",i_,[e[16]||(e[16]=S("h4",null,"Curveball Success",-1)),S("p",null,ve(s.successRates.CB)+"%",1)]),S("div",o_,[e[17]||(e[17]=S("h4",null,"Changeup Success",-1)),S("p",null,ve(s.successRates.CH)+"%",1)]),S("div",a_,[e[18]||(e[18]=S("h4",null,"Slider Success",-1)),S("p",null,ve(s.successRates.SL)+"%",1)])]),e[23]||(e[23]=S("h2",null,"Previous Scenarios",-1)),S("div",c_,[e[19]||(e[19]=S("h3",null,"Scenario",-1)),S("p",null,ve(s.previousScenario),1)]),e[24]||(e[24]=S("div",{id:"analysis-results"},null,-1))])],2)}const u_=si(Gm,[["render",l_],["__scopeId","data-v-4794e565"]]),d_={components:{AuthScreen:qm,MainScreen:u_},data(){return{isAuthenticated:!1}}},f_={class:"app-container"};function h_(t,e,n,r,s,i){const o=gi("AuthScreen"),a=gi("MainScreen");return hn(),Bs("div",f_,[s.isAuthenticated?(hn(),Ai(a,{key:1})):(hn(),Ai(o,{key:0,onAuthenticated:e[0]||(e[0]=c=>s.isAuthenticated=!0)}))])}const p_=si(d_,[["render",h_],["__scopeId","data-v-697645ac"]]);Cd(p_).mount("#app");
