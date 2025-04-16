(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function qc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const we={},Mr=[],$t=()=>{},b_=()=>!1,xo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Hc=t=>t.startsWith("onUpdate:"),ct=Object.assign,Kc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},S_=Object.prototype.hasOwnProperty,ve=(t,e)=>S_.call(t,e),se=Array.isArray,Lr=t=>ri(t)==="[object Map]",Mo=t=>ri(t)==="[object Set]",Hu=t=>ri(t)==="[object Date]",ce=t=>typeof t=="function",Oe=t=>typeof t=="string",Gt=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",of=t=>(Se(t)||ce(t))&&ce(t.then)&&ce(t.catch),af=Object.prototype.toString,ri=t=>af.call(t),R_=t=>ri(t).slice(8,-1),cf=t=>ri(t)==="[object Object]",Wc=t=>Oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Cs=qc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Lo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},P_=/-(\w)/g,bt=Lo(t=>t.replace(P_,(e,n)=>n?n.toUpperCase():"")),C_=/\B([A-Z])/g,_r=Lo(t=>t.replace(C_,"-$1").toLowerCase()),Fo=Lo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Da=Lo(t=>t?`on${Fo(t)}`:""),Dn=(t,e)=>!Object.is(t,e),$i=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},lf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},no=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ku;const Uo=()=>Ku||(Ku=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function zc(t){if(se(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Oe(r)?V_(r):zc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Oe(t)||Se(t))return t}const k_=/;(?![^(]*\))/g,D_=/:([^]+)/,O_=/\/\*[^]*?\*\//g;function V_(t){const e={};return t.replace(O_,"").split(k_).forEach(n=>{if(n){const r=n.split(D_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function an(t){let e="";if(Oe(t))e=t;else if(se(t))for(let n=0;n<t.length;n++){const r=an(t[n]);r&&(e+=r+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const N_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",x_=qc(N_);function uf(t){return!!t||t===""}function M_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Bo(t[r],e[r]);return n}function Bo(t,e){if(t===e)return!0;let n=Hu(t),r=Hu(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Gt(t),r=Gt(e),n||r)return t===e;if(n=se(t),r=se(e),n||r)return n&&r?M_(t,e):!1;if(n=Se(t),r=Se(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in t){const c=t.hasOwnProperty(a),l=e.hasOwnProperty(a);if(c&&!l||!c&&l||!Bo(t[a],e[a]))return!1}}return String(t)===String(e)}function L_(t,e){return t.findIndex(n=>Bo(n,e))}const hf=t=>!!(t&&t.__v_isRef===!0),qe=t=>Oe(t)?t:t==null?"":se(t)||Se(t)&&(t.toString===af||!ce(t.toString))?hf(t)?qe(t.value):JSON.stringify(t,df,2):String(t),df=(t,e)=>hf(e)?df(t,e.value):Lr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Oa(r,i)+" =>"]=s,n),{})}:Mo(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Oa(n))}:Gt(e)?Oa(e):Se(e)&&!se(e)&&!cf(e)?String(e):e,Oa=(t,e="")=>{var n;return Gt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gt;class F_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=gt,!e&&gt&&(this.index=(gt.scopes||(gt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=gt;try{return gt=this,e()}finally{gt=n}}}on(){gt=this}off(){gt=this.parent}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function U_(){return gt}let Ae;const Va=new WeakSet;class ff{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,gt&&gt.active&&gt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Va.has(this)&&(Va.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||gf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Wu(this),mf(this);const e=Ae,n=Dt;Ae=this,Dt=!0;try{return this.fn()}finally{_f(this),Ae=e,Dt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Jc(e);this.deps=this.depsTail=void 0,Wu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Va.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){sc(this)&&this.run()}get dirty(){return sc(this)}}let pf=0,ks,Ds;function gf(t,e=!1){if(t.flags|=8,e){t.next=Ds,Ds=t;return}t.next=ks,ks=t}function Gc(){pf++}function Qc(){if(--pf>0)return;if(Ds){let e=Ds;for(Ds=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ks;){let e=ks;for(ks=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function mf(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function _f(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Jc(r),B_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function sc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(yf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function yf(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===js))return;t.globalVersion=js;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!sc(t)){t.flags&=-3;return}const n=Ae,r=Dt;Ae=t,Dt=!0;try{mf(t);const s=t.fn(t._value);(e.version===0||Dn(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ae=n,Dt=r,_f(t),t.flags&=-3}}function Jc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Jc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function B_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Dt=!0;const vf=[];function Kn(){vf.push(Dt),Dt=!1}function Wn(){const t=vf.pop();Dt=t===void 0?!0:t}function Wu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ae;Ae=void 0;try{e()}finally{Ae=n}}}let js=0;class j_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Yc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ae||!Dt||Ae===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ae)n=this.activeLink=new j_(Ae,this),Ae.deps?(n.prevDep=Ae.depsTail,Ae.depsTail.nextDep=n,Ae.depsTail=n):Ae.deps=Ae.depsTail=n,Ef(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ae.depsTail,n.nextDep=void 0,Ae.depsTail.nextDep=n,Ae.depsTail=n,Ae.deps===n&&(Ae.deps=r)}return n}trigger(e){this.version++,js++,this.notify(e)}notify(e){Gc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Qc()}}}function Ef(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Ef(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ic=new WeakMap,lr=Symbol(""),oc=Symbol(""),$s=Symbol("");function Ze(t,e,n){if(Dt&&Ae){let r=ic.get(t);r||ic.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Yc),s.map=r,s.key=n),s.track()}}function cn(t,e,n,r,s,i){const a=ic.get(t);if(!a){js++;return}const c=l=>{l&&l.trigger()};if(Gc(),e==="clear")a.forEach(c);else{const l=se(t),h=l&&Wc(n);if(l&&n==="length"){const f=Number(r);a.forEach((g,E)=>{(E==="length"||E===$s||!Gt(E)&&E>=f)&&c(g)})}else switch((n!==void 0||a.has(void 0))&&c(a.get(n)),h&&c(a.get($s)),e){case"add":l?h&&c(a.get("length")):(c(a.get(lr)),Lr(t)&&c(a.get(oc)));break;case"delete":l||(c(a.get(lr)),Lr(t)&&c(a.get(oc)));break;case"set":Lr(t)&&c(a.get(lr));break}}Qc()}function Cr(t){const e=ye(t);return e===t?e:(Ze(e,"iterate",$s),wt(t)?e:e.map(et))}function jo(t){return Ze(t=ye(t),"iterate",$s),t}const $_={__proto__:null,[Symbol.iterator](){return Na(this,Symbol.iterator,et)},concat(...t){return Cr(this).concat(...t.map(e=>se(e)?Cr(e):e))},entries(){return Na(this,"entries",t=>(t[1]=et(t[1]),t))},every(t,e){return rn(this,"every",t,e,void 0,arguments)},filter(t,e){return rn(this,"filter",t,e,n=>n.map(et),arguments)},find(t,e){return rn(this,"find",t,e,et,arguments)},findIndex(t,e){return rn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return rn(this,"findLast",t,e,et,arguments)},findLastIndex(t,e){return rn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return rn(this,"forEach",t,e,void 0,arguments)},includes(...t){return xa(this,"includes",t)},indexOf(...t){return xa(this,"indexOf",t)},join(t){return Cr(this).join(t)},lastIndexOf(...t){return xa(this,"lastIndexOf",t)},map(t,e){return rn(this,"map",t,e,void 0,arguments)},pop(){return Ts(this,"pop")},push(...t){return Ts(this,"push",t)},reduce(t,...e){return zu(this,"reduce",t,e)},reduceRight(t,...e){return zu(this,"reduceRight",t,e)},shift(){return Ts(this,"shift")},some(t,e){return rn(this,"some",t,e,void 0,arguments)},splice(...t){return Ts(this,"splice",t)},toReversed(){return Cr(this).toReversed()},toSorted(t){return Cr(this).toSorted(t)},toSpliced(...t){return Cr(this).toSpliced(...t)},unshift(...t){return Ts(this,"unshift",t)},values(){return Na(this,"values",et)}};function Na(t,e,n){const r=jo(t),s=r[e]();return r!==t&&!wt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const q_=Array.prototype;function rn(t,e,n,r,s,i){const a=jo(t),c=a!==t&&!wt(t),l=a[e];if(l!==q_[e]){const g=l.apply(t,i);return c?et(g):g}let h=n;a!==t&&(c?h=function(g,E){return n.call(this,et(g),E,t)}:n.length>2&&(h=function(g,E){return n.call(this,g,E,t)}));const f=l.call(a,h,r);return c&&s?s(f):f}function zu(t,e,n,r){const s=jo(t);let i=n;return s!==t&&(wt(t)?n.length>3&&(i=function(a,c,l){return n.call(this,a,c,l,t)}):i=function(a,c,l){return n.call(this,a,et(c),l,t)}),s[e](i,...r)}function xa(t,e,n){const r=ye(t);Ze(r,"iterate",$s);const s=r[e](...n);return(s===-1||s===!1)&&tl(n[0])?(n[0]=ye(n[0]),r[e](...n)):s}function Ts(t,e,n=[]){Kn(),Gc();const r=ye(t)[e].apply(t,n);return Qc(),Wn(),r}const H_=qc("__proto__,__v_isRef,__isVue"),Tf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Gt));function K_(t){Gt(t)||(t=String(t));const e=ye(this);return Ze(e,"has",t),e.hasOwnProperty(t)}class If{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?ty:Sf:i?bf:Af).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=se(e);if(!s){let l;if(a&&(l=$_[n]))return l;if(n==="hasOwnProperty")return K_}const c=Reflect.get(e,n,rt(e)?e:r);return(Gt(n)?Tf.has(n):H_(n))||(s||Ze(e,"get",n),i)?c:rt(c)?a&&Wc(n)?c:c.value:Se(c)?s?Rf(c):Zc(c):c}}class wf extends If{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=ur(i);if(!wt(r)&&!ur(r)&&(i=ye(i),r=ye(r)),!se(e)&&rt(i)&&!rt(r))return l?!1:(i.value=r,!0)}const a=se(e)&&Wc(n)?Number(n)<e.length:ve(e,n),c=Reflect.set(e,n,r,rt(e)?e:s);return e===ye(s)&&(a?Dn(r,i)&&cn(e,"set",n,r):cn(e,"add",n,r)),c}deleteProperty(e,n){const r=ve(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&cn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Gt(n)||!Tf.has(n))&&Ze(e,"has",n),r}ownKeys(e){return Ze(e,"iterate",se(e)?"length":lr),Reflect.ownKeys(e)}}class W_ extends If{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const z_=new wf,G_=new W_,Q_=new wf(!0);const ac=t=>t,Oi=t=>Reflect.getPrototypeOf(t);function J_(t,e,n){return function(...r){const s=this.__v_raw,i=ye(s),a=Lr(i),c=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,h=s[t](...r),f=n?ac:e?cc:et;return!e&&Ze(i,"iterate",l?oc:lr),{next(){const{value:g,done:E}=h.next();return E?{value:g,done:E}:{value:c?[f(g[0]),f(g[1])]:f(g),done:E}},[Symbol.iterator](){return this}}}}function Vi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Y_(t,e){const n={get(s){const i=this.__v_raw,a=ye(i),c=ye(s);t||(Dn(s,c)&&Ze(a,"get",s),Ze(a,"get",c));const{has:l}=Oi(a),h=e?ac:t?cc:et;if(l.call(a,s))return h(i.get(s));if(l.call(a,c))return h(i.get(c));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Ze(ye(s),"iterate",lr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=ye(i),c=ye(s);return t||(Dn(s,c)&&Ze(a,"has",s),Ze(a,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const a=this,c=a.__v_raw,l=ye(c),h=e?ac:t?cc:et;return!t&&Ze(l,"iterate",lr),c.forEach((f,g)=>s.call(i,h(f),h(g),a))}};return ct(n,t?{add:Vi("add"),set:Vi("set"),delete:Vi("delete"),clear:Vi("clear")}:{add(s){!e&&!wt(s)&&!ur(s)&&(s=ye(s));const i=ye(this);return Oi(i).has.call(i,s)||(i.add(s),cn(i,"add",s,s)),this},set(s,i){!e&&!wt(i)&&!ur(i)&&(i=ye(i));const a=ye(this),{has:c,get:l}=Oi(a);let h=c.call(a,s);h||(s=ye(s),h=c.call(a,s));const f=l.call(a,s);return a.set(s,i),h?Dn(i,f)&&cn(a,"set",s,i):cn(a,"add",s,i),this},delete(s){const i=ye(this),{has:a,get:c}=Oi(i);let l=a.call(i,s);l||(s=ye(s),l=a.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&cn(i,"delete",s,void 0),h},clear(){const s=ye(this),i=s.size!==0,a=s.clear();return i&&cn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=J_(s,t,e)}),n}function Xc(t,e){const n=Y_(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ve(n,s)&&s in r?n:r,s,i)}const X_={get:Xc(!1,!1)},Z_={get:Xc(!1,!0)},ey={get:Xc(!0,!1)};const Af=new WeakMap,bf=new WeakMap,Sf=new WeakMap,ty=new WeakMap;function ny(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ry(t){return t.__v_skip||!Object.isExtensible(t)?0:ny(R_(t))}function Zc(t){return ur(t)?t:el(t,!1,z_,X_,Af)}function sy(t){return el(t,!1,Q_,Z_,bf)}function Rf(t){return el(t,!0,G_,ey,Sf)}function el(t,e,n,r,s){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const a=ry(t);if(a===0)return t;const c=new Proxy(t,a===2?r:n);return s.set(t,c),c}function Fr(t){return ur(t)?Fr(t.__v_raw):!!(t&&t.__v_isReactive)}function ur(t){return!!(t&&t.__v_isReadonly)}function wt(t){return!!(t&&t.__v_isShallow)}function tl(t){return t?!!t.__v_raw:!1}function ye(t){const e=t&&t.__v_raw;return e?ye(e):t}function iy(t){return!ve(t,"__v_skip")&&Object.isExtensible(t)&&lf(t,"__v_skip",!0),t}const et=t=>Se(t)?Zc(t):t,cc=t=>Se(t)?Rf(t):t;function rt(t){return t?t.__v_isRef===!0:!1}function Ma(t){return oy(t,!1)}function oy(t,e){return rt(t)?t:new ay(t,e)}class ay{constructor(e,n){this.dep=new Yc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ye(e),this._value=n?e:et(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||wt(e)||ur(e);e=r?e:ye(e),Dn(e,n)&&(this._rawValue=e,this._value=r?e:et(e),this.dep.trigger())}}function cy(t){return rt(t)?t.value:t}const ly={get:(t,e,n)=>e==="__v_raw"?t:cy(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return rt(s)&&!rt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Pf(t){return Fr(t)?t:new Proxy(t,ly)}class uy{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Yc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=js-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ae!==this)return gf(this,!0),!0}get value(){const e=this.dep.track();return yf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function hy(t,e,n=!1){let r,s;return ce(t)?r=t:(r=t.get,s=t.set),new uy(r,s,n)}const Ni={},ro=new WeakMap;let sr;function dy(t,e=!1,n=sr){if(n){let r=ro.get(n);r||ro.set(n,r=[]),r.push(t)}}function fy(t,e,n=we){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:l}=n,h=K=>s?K:wt(K)||s===!1||s===0?ln(K,1):ln(K);let f,g,E,S,O=!1,L=!1;if(rt(t)?(g=()=>t.value,O=wt(t)):Fr(t)?(g=()=>h(t),O=!0):se(t)?(L=!0,O=t.some(K=>Fr(K)||wt(K)),g=()=>t.map(K=>{if(rt(K))return K.value;if(Fr(K))return h(K);if(ce(K))return l?l(K,2):K()})):ce(t)?e?g=l?()=>l(t,2):t:g=()=>{if(E){Kn();try{E()}finally{Wn()}}const K=sr;sr=f;try{return l?l(t,3,[S]):t(S)}finally{sr=K}}:g=$t,e&&s){const K=g,pe=s===!0?1/0:s;g=()=>ln(K(),pe)}const F=U_(),z=()=>{f.stop(),F&&F.active&&Kc(F.effects,f)};if(i&&e){const K=e;e=(...pe)=>{K(...pe),z()}}let Q=L?new Array(t.length).fill(Ni):Ni;const J=K=>{if(!(!(f.flags&1)||!f.dirty&&!K))if(e){const pe=f.run();if(s||O||(L?pe.some((_e,w)=>Dn(_e,Q[w])):Dn(pe,Q))){E&&E();const _e=sr;sr=f;try{const w=[pe,Q===Ni?void 0:L&&Q[0]===Ni?[]:Q,S];l?l(e,3,w):e(...w),Q=pe}finally{sr=_e}}}else f.run()};return c&&c(J),f=new ff(g),f.scheduler=a?()=>a(J,!1):J,S=K=>dy(K,!1,f),E=f.onStop=()=>{const K=ro.get(f);if(K){if(l)l(K,4);else for(const pe of K)pe();ro.delete(f)}},e?r?J(!0):Q=f.run():a?a(J.bind(null,!0),!0):f.run(),z.pause=f.pause.bind(f),z.resume=f.resume.bind(f),z.stop=z,z}function ln(t,e=1/0,n){if(e<=0||!Se(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,rt(t))ln(t.value,e,n);else if(se(t))for(let r=0;r<t.length;r++)ln(t[r],e,n);else if(Mo(t)||Lr(t))t.forEach(r=>{ln(r,e,n)});else if(cf(t)){for(const r in t)ln(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&ln(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function si(t,e,n,r){try{return r?t(...r):t()}catch(s){$o(s,e,n)}}function Qt(t,e,n,r){if(ce(t)){const s=si(t,e,n,r);return s&&of(s)&&s.catch(i=>{$o(i,e,n)}),s}if(se(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Qt(t[i],e,n,r));return s}}function $o(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||we;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let g=0;g<f.length;g++)if(f[g](t,l,h)===!1)return}c=c.parent}if(i){Kn(),si(i,null,10,[t,l,h]),Wn();return}}py(t,n,s,r,a)}function py(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const at=[];let Ft=-1;const Ur=[];let An=null,kr=0;const Cf=Promise.resolve();let so=null;function kf(t){const e=so||Cf;return t?e.then(this?t.bind(this):t):e}function gy(t){let e=Ft+1,n=at.length;for(;e<n;){const r=e+n>>>1,s=at[r],i=qs(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function nl(t){if(!(t.flags&1)){const e=qs(t),n=at[at.length-1];!n||!(t.flags&2)&&e>=qs(n)?at.push(t):at.splice(gy(e),0,t),t.flags|=1,Df()}}function Df(){so||(so=Cf.then(Vf))}function my(t){se(t)?Ur.push(...t):An&&t.id===-1?An.splice(kr+1,0,t):t.flags&1||(Ur.push(t),t.flags|=1),Df()}function Gu(t,e,n=Ft+1){for(;n<at.length;n++){const r=at[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;at.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Of(t){if(Ur.length){const e=[...new Set(Ur)].sort((n,r)=>qs(n)-qs(r));if(Ur.length=0,An){An.push(...e);return}for(An=e,kr=0;kr<An.length;kr++){const n=An[kr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}An=null,kr=0}}const qs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Vf(t){try{for(Ft=0;Ft<at.length;Ft++){const e=at[Ft];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),si(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ft<at.length;Ft++){const e=at[Ft];e&&(e.flags&=-2)}Ft=-1,at.length=0,Of(),so=null,(at.length||Ur.length)&&Vf()}}let mt=null,Nf=null;function io(t){const e=mt;return mt=t,Nf=t&&t.type.__scopeId||null,e}function _y(t,e=mt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ih(-1);const i=io(e);let a;try{a=t(...s)}finally{io(i),r._d&&ih(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function oo(t,e){if(mt===null)return t;const n=Wo(mt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,c,l=we]=e[s];i&&(ce(i)&&(i={mounted:i,updated:i}),i.deep&&ln(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function nr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let l=c.dir[r];l&&(Kn(),Qt(l,n,8,[t.el,c,t,e]),Wn())}}const yy=Symbol("_vte"),vy=t=>t.__isTeleport;function rl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,rl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function xf(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ao(t,e,n,r,s=!1){if(se(t)){t.forEach((O,L)=>ao(O,e&&(se(e)?e[L]:e),n,r,s));return}if(Os(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ao(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Wo(r.component):r.el,a=s?null:i,{i:c,r:l}=t,h=e&&e.r,f=c.refs===we?c.refs={}:c.refs,g=c.setupState,E=ye(g),S=g===we?()=>!1:O=>ve(E,O);if(h!=null&&h!==l&&(Oe(h)?(f[h]=null,S(h)&&(g[h]=null)):rt(h)&&(h.value=null)),ce(l))si(l,c,12,[a,f]);else{const O=Oe(l),L=rt(l);if(O||L){const F=()=>{if(t.f){const z=O?S(l)?g[l]:f[l]:l.value;s?se(z)&&Kc(z,i):se(z)?z.includes(i)||z.push(i):O?(f[l]=[i],S(l)&&(g[l]=f[l])):(l.value=[i],t.k&&(f[t.k]=l.value))}else O?(f[l]=a,S(l)&&(g[l]=a)):L&&(l.value=a,t.k&&(f[t.k]=a))};a?(F.id=-1,pt(F,n)):F()}}}Uo().requestIdleCallback;Uo().cancelIdleCallback;const Os=t=>!!t.type.__asyncLoader,Mf=t=>t.type.__isKeepAlive;function Ey(t,e){Lf(t,"a",e)}function Ty(t,e){Lf(t,"da",e)}function Lf(t,e,n=nt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(qo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Mf(s.parent.vnode)&&Iy(r,e,n,s),s=s.parent}}function Iy(t,e,n,r){const s=qo(e,t,r,!0);Ff(()=>{Kc(r[e],s)},n)}function qo(t,e,n=nt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{Kn();const c=ii(n),l=Qt(e,n,t,a);return c(),Wn(),l});return r?s.unshift(i):s.push(i),i}}const _n=t=>(e,n=nt)=>{(!Ws||t==="sp")&&qo(t,(...r)=>e(...r),n)},wy=_n("bm"),Ay=_n("m"),by=_n("bu"),Sy=_n("u"),Ry=_n("bum"),Ff=_n("um"),Py=_n("sp"),Cy=_n("rtg"),ky=_n("rtc");function Dy(t,e=nt){qo("ec",t,e)}const Oy="components";function Qu(t,e){return Ny(Oy,t,!0,e)||t}const Vy=Symbol.for("v-ndc");function Ny(t,e,n=!0,r=!1){const s=mt||nt;if(s){const i=s.type;{const c=Iv(i,!1);if(c&&(c===e||c===bt(e)||c===Fo(bt(e))))return i}const a=Ju(s[t]||i[t],e)||Ju(s.appContext[t],e);return!a&&r?i:a}}function Ju(t,e){return t&&(t[e]||t[bt(e)]||t[Fo(bt(e))])}function xy(t,e,n,r){let s;const i=n,a=se(t);if(a||Oe(t)){const c=a&&Fr(t);let l=!1;c&&(l=!wt(t),t=jo(t)),s=new Array(t.length);for(let h=0,f=t.length;h<f;h++)s[h]=e(l?et(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Se(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const lc=t=>t?op(t)?Wo(t):lc(t.parent):null,Vs=ct(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>lc(t.parent),$root:t=>lc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Bf(t),$forceUpdate:t=>t.f||(t.f=()=>{nl(t.update)}),$nextTick:t=>t.n||(t.n=kf.bind(t.proxy)),$watch:t=>rv.bind(t)}),La=(t,e)=>t!==we&&!t.__isScriptSetup&&ve(t,e),My={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const S=a[e];if(S!==void 0)switch(S){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(La(r,e))return a[e]=1,r[e];if(s!==we&&ve(s,e))return a[e]=2,s[e];if((h=t.propsOptions[0])&&ve(h,e))return a[e]=3,i[e];if(n!==we&&ve(n,e))return a[e]=4,n[e];uc&&(a[e]=0)}}const f=Vs[e];let g,E;if(f)return e==="$attrs"&&Ze(t.attrs,"get",""),f(t);if((g=c.__cssModules)&&(g=g[e]))return g;if(n!==we&&ve(n,e))return a[e]=4,n[e];if(E=l.config.globalProperties,ve(E,e))return E[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return La(s,e)?(s[e]=n,!0):r!==we&&ve(r,e)?(r[e]=n,!0):ve(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let c;return!!n[a]||t!==we&&ve(t,a)||La(e,a)||(c=i[0])&&ve(c,a)||ve(r,a)||ve(Vs,a)||ve(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ve(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Yu(t){return se(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let uc=!0;function Ly(t){const e=Bf(t),n=t.proxy,r=t.ctx;uc=!1,e.beforeCreate&&Xu(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:c,provide:l,inject:h,created:f,beforeMount:g,mounted:E,beforeUpdate:S,updated:O,activated:L,deactivated:F,beforeDestroy:z,beforeUnmount:Q,destroyed:J,unmounted:K,render:pe,renderTracked:_e,renderTriggered:w,errorCaptured:m,serverPrefetch:v,expose:I,inheritAttrs:A,components:R,directives:y,filters:dt}=e;if(h&&Fy(h,r,null),a)for(const Te in a){const ge=a[Te];ce(ge)&&(r[Te]=ge.bind(n))}if(s){const Te=s.call(n,n);Se(Te)&&(t.data=Zc(Te))}if(uc=!0,i)for(const Te in i){const ge=i[Te],St=ce(ge)?ge.bind(n,n):ce(ge.get)?ge.get.bind(n,n):$t,Qn=!ce(ge)&&ce(ge.set)?ge.set.bind(n):$t,Zt=Av({get:St,set:Qn});Object.defineProperty(r,Te,{enumerable:!0,configurable:!0,get:()=>Zt.value,set:Ve=>Zt.value=Ve})}if(c)for(const Te in c)Uf(c[Te],r,n,Te);if(l){const Te=ce(l)?l.call(n):l;Reflect.ownKeys(Te).forEach(ge=>{Hy(ge,Te[ge])})}f&&Xu(f,t,"c");function Ue(Te,ge){se(ge)?ge.forEach(St=>Te(St.bind(n))):ge&&Te(ge.bind(n))}if(Ue(wy,g),Ue(Ay,E),Ue(by,S),Ue(Sy,O),Ue(Ey,L),Ue(Ty,F),Ue(Dy,m),Ue(ky,_e),Ue(Cy,w),Ue(Ry,Q),Ue(Ff,K),Ue(Py,v),se(I))if(I.length){const Te=t.exposed||(t.exposed={});I.forEach(ge=>{Object.defineProperty(Te,ge,{get:()=>n[ge],set:St=>n[ge]=St})})}else t.exposed||(t.exposed={});pe&&t.render===$t&&(t.render=pe),A!=null&&(t.inheritAttrs=A),R&&(t.components=R),y&&(t.directives=y),v&&xf(t)}function Fy(t,e,n=$t){se(t)&&(t=hc(t));for(const r in t){const s=t[r];let i;Se(s)?"default"in s?i=qi(s.from||r,s.default,!0):i=qi(s.from||r):i=qi(s),rt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function Xu(t,e,n){Qt(se(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Uf(t,e,n,r){let s=r.includes(".")?ep(n,r):()=>n[r];if(Oe(t)){const i=e[t];ce(i)&&Ua(s,i)}else if(ce(t))Ua(s,t.bind(n));else if(Se(t))if(se(t))t.forEach(i=>Uf(i,e,n,r));else{const i=ce(t.handler)?t.handler.bind(n):e[t.handler];ce(i)&&Ua(s,i,t)}}function Bf(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>co(l,h,a,!0)),co(l,e,a)),Se(e)&&i.set(e,l),l}function co(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&co(t,i,n,!0),s&&s.forEach(a=>co(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const c=Uy[a]||n&&n[a];t[a]=c?c(t[a],e[a]):e[a]}return t}const Uy={data:Zu,props:eh,emits:eh,methods:ws,computed:ws,beforeCreate:ot,created:ot,beforeMount:ot,mounted:ot,beforeUpdate:ot,updated:ot,beforeDestroy:ot,beforeUnmount:ot,destroyed:ot,unmounted:ot,activated:ot,deactivated:ot,errorCaptured:ot,serverPrefetch:ot,components:ws,directives:ws,watch:jy,provide:Zu,inject:By};function Zu(t,e){return e?t?function(){return ct(ce(t)?t.call(this,this):t,ce(e)?e.call(this,this):e)}:e:t}function By(t,e){return ws(hc(t),hc(e))}function hc(t){if(se(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ot(t,e){return t?[...new Set([].concat(t,e))]:e}function ws(t,e){return t?ct(Object.create(null),t,e):e}function eh(t,e){return t?se(t)&&se(e)?[...new Set([...t,...e])]:ct(Object.create(null),Yu(t),Yu(e??{})):e}function jy(t,e){if(!t)return e;if(!e)return t;const n=ct(Object.create(null),t);for(const r in e)n[r]=ot(t[r],e[r]);return n}function jf(){return{app:null,config:{isNativeTag:b_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $y=0;function qy(t,e){return function(r,s=null){ce(r)||(r=ct({},r)),s!=null&&!Se(s)&&(s=null);const i=jf(),a=new WeakSet,c=[];let l=!1;const h=i.app={_uid:$y++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:bv,get config(){return i.config},set config(f){},use(f,...g){return a.has(f)||(f&&ce(f.install)?(a.add(f),f.install(h,...g)):ce(f)&&(a.add(f),f(h,...g))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,g){return g?(i.components[f]=g,h):i.components[f]},directive(f,g){return g?(i.directives[f]=g,h):i.directives[f]},mount(f,g,E){if(!l){const S=h._ceVNode||On(r,s);return S.appContext=i,E===!0?E="svg":E===!1&&(E=void 0),t(S,f,E),l=!0,h._container=f,f.__vue_app__=h,Wo(S.component)}},onUnmount(f){c.push(f)},unmount(){l&&(Qt(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,g){return i.provides[f]=g,h},runWithContext(f){const g=Br;Br=h;try{return f()}finally{Br=g}}};return h}}let Br=null;function Hy(t,e){if(nt){let n=nt.provides;const r=nt.parent&&nt.parent.provides;r===n&&(n=nt.provides=Object.create(r)),n[t]=e}}function qi(t,e,n=!1){const r=nt||mt;if(r||Br){const s=Br?Br._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ce(e)?e.call(r&&r.proxy):e}}const $f={},qf=()=>Object.create($f),Hf=t=>Object.getPrototypeOf(t)===$f;function Ky(t,e,n,r=!1){const s={},i=qf();t.propsDefaults=Object.create(null),Kf(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:sy(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Wy(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,c=ye(s),[l]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=t.vnode.dynamicProps;for(let g=0;g<f.length;g++){let E=f[g];if(Ho(t.emitsOptions,E))continue;const S=e[E];if(l)if(ve(i,E))S!==i[E]&&(i[E]=S,h=!0);else{const O=bt(E);s[O]=dc(l,c,O,S,t,!1)}else S!==i[E]&&(i[E]=S,h=!0)}}}else{Kf(t,e,s,i)&&(h=!0);let f;for(const g in c)(!e||!ve(e,g)&&((f=_r(g))===g||!ve(e,f)))&&(l?n&&(n[g]!==void 0||n[f]!==void 0)&&(s[g]=dc(l,c,g,void 0,t,!0)):delete s[g]);if(i!==c)for(const g in i)(!e||!ve(e,g))&&(delete i[g],h=!0)}h&&cn(t.attrs,"set","")}function Kf(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,c;if(e)for(let l in e){if(Cs(l))continue;const h=e[l];let f;s&&ve(s,f=bt(l))?!i||!i.includes(f)?n[f]=h:(c||(c={}))[f]=h:Ho(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,a=!0)}if(i){const l=ye(n),h=c||we;for(let f=0;f<i.length;f++){const g=i[f];n[g]=dc(s,l,g,h[g],t,!ve(h,g))}}return a}function dc(t,e,n,r,s,i){const a=t[n];if(a!=null){const c=ve(a,"default");if(c&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ce(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=ii(s);r=h[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===_r(n))&&(r=!0))}return r}const zy=new WeakMap;function Wf(t,e,n=!1){const r=n?zy:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},c=[];let l=!1;if(!ce(t)){const f=g=>{l=!0;const[E,S]=Wf(g,e,!0);ct(a,E),S&&c.push(...S)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Se(t)&&r.set(t,Mr),Mr;if(se(i))for(let f=0;f<i.length;f++){const g=bt(i[f]);th(g)&&(a[g]=we)}else if(i)for(const f in i){const g=bt(f);if(th(g)){const E=i[f],S=a[g]=se(E)||ce(E)?{type:E}:ct({},E),O=S.type;let L=!1,F=!0;if(se(O))for(let z=0;z<O.length;++z){const Q=O[z],J=ce(Q)&&Q.name;if(J==="Boolean"){L=!0;break}else J==="String"&&(F=!1)}else L=ce(O)&&O.name==="Boolean";S[0]=L,S[1]=F,(L||ve(S,"default"))&&c.push(g)}}const h=[a,c];return Se(t)&&r.set(t,h),h}function th(t){return t[0]!=="$"&&!Cs(t)}const zf=t=>t[0]==="_"||t==="$stable",sl=t=>se(t)?t.map(jt):[jt(t)],Gy=(t,e,n)=>{if(e._n)return e;const r=_y((...s)=>sl(e(...s)),n);return r._c=!1,r},Gf=(t,e,n)=>{const r=t._ctx;for(const s in t){if(zf(s))continue;const i=t[s];if(ce(i))e[s]=Gy(s,i,r);else if(i!=null){const a=sl(i);e[s]=()=>a}}},Qf=(t,e)=>{const n=sl(e);t.slots.default=()=>n},Jf=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Qy=(t,e,n)=>{const r=t.slots=qf();if(t.vnode.shapeFlag&32){const s=e._;s?(Jf(r,e,n),n&&lf(r,"_",s,!0)):Gf(e,r)}else e&&Qf(t,e)},Jy=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=we;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Jf(s,e,n):(i=!e.$stable,Gf(e,s)),a=e}else e&&(Qf(t,e),a={default:1});if(i)for(const c in s)!zf(c)&&a[c]==null&&delete s[c]},pt=uv;function Yy(t){return Xy(t)}function Xy(t,e){const n=Uo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:l,setText:h,setElementText:f,parentNode:g,nextSibling:E,setScopeId:S=$t,insertStaticContent:O}=t,L=(_,T,C,N=null,D=null,x=null,$=void 0,B=null,U=!!T.dynamicChildren)=>{if(_===T)return;_&&!Is(_,T)&&(N=en(_),Ve(_,D,x,!0),_=null),T.patchFlag===-2&&(U=!1,T.dynamicChildren=null);const{type:M,ref:Z,shapeFlag:q}=T;switch(M){case Ko:F(_,T,C,N);break;case Hs:z(_,T,C,N);break;case Ba:_==null&&Q(T,C,N,$);break;case Bt:R(_,T,C,N,D,x,$,B,U);break;default:q&1?pe(_,T,C,N,D,x,$,B,U):q&6?y(_,T,C,N,D,x,$,B,U):(q&64||q&128)&&M.process(_,T,C,N,D,x,$,B,U,Mt)}Z!=null&&D&&ao(Z,_&&_.ref,x,T||_,!T)},F=(_,T,C,N)=>{if(_==null)r(T.el=c(T.children),C,N);else{const D=T.el=_.el;T.children!==_.children&&h(D,T.children)}},z=(_,T,C,N)=>{_==null?r(T.el=l(T.children||""),C,N):T.el=_.el},Q=(_,T,C,N)=>{[_.el,_.anchor]=O(_.children,T,C,N,_.el,_.anchor)},J=({el:_,anchor:T},C,N)=>{let D;for(;_&&_!==T;)D=E(_),r(_,C,N),_=D;r(T,C,N)},K=({el:_,anchor:T})=>{let C;for(;_&&_!==T;)C=E(_),s(_),_=C;s(T)},pe=(_,T,C,N,D,x,$,B,U)=>{T.type==="svg"?$="svg":T.type==="math"&&($="mathml"),_==null?_e(T,C,N,D,x,$,B,U):v(_,T,D,x,$,B,U)},_e=(_,T,C,N,D,x,$,B)=>{let U,M;const{props:Z,shapeFlag:q,transition:G,dirs:ne}=_;if(U=_.el=a(_.type,x,Z&&Z.is,Z),q&8?f(U,_.children):q&16&&m(_.children,U,null,N,D,Fa(_,x),$,B),ne&&nr(_,null,N,"created"),w(U,_,_.scopeId,$,N),Z){for(const ae in Z)ae!=="value"&&!Cs(ae)&&i(U,ae,null,Z[ae],x,N);"value"in Z&&i(U,"value",null,Z.value,x),(M=Z.onVnodeBeforeMount)&&Lt(M,N,_)}ne&&nr(_,null,N,"beforeMount");const ee=Zy(D,G);ee&&G.beforeEnter(U),r(U,T,C),((M=Z&&Z.onVnodeMounted)||ee||ne)&&pt(()=>{M&&Lt(M,N,_),ee&&G.enter(U),ne&&nr(_,null,N,"mounted")},D)},w=(_,T,C,N,D)=>{if(C&&S(_,C),N)for(let x=0;x<N.length;x++)S(_,N[x]);if(D){let x=D.subTree;if(T===x||np(x.type)&&(x.ssContent===T||x.ssFallback===T)){const $=D.vnode;w(_,$,$.scopeId,$.slotScopeIds,D.parent)}}},m=(_,T,C,N,D,x,$,B,U=0)=>{for(let M=U;M<_.length;M++){const Z=_[M]=B?bn(_[M]):jt(_[M]);L(null,Z,T,C,N,D,x,$,B)}},v=(_,T,C,N,D,x,$)=>{const B=T.el=_.el;let{patchFlag:U,dynamicChildren:M,dirs:Z}=T;U|=_.patchFlag&16;const q=_.props||we,G=T.props||we;let ne;if(C&&rr(C,!1),(ne=G.onVnodeBeforeUpdate)&&Lt(ne,C,T,_),Z&&nr(T,_,C,"beforeUpdate"),C&&rr(C,!0),(q.innerHTML&&G.innerHTML==null||q.textContent&&G.textContent==null)&&f(B,""),M?I(_.dynamicChildren,M,B,C,N,Fa(T,D),x):$||ge(_,T,B,null,C,N,Fa(T,D),x,!1),U>0){if(U&16)A(B,q,G,C,D);else if(U&2&&q.class!==G.class&&i(B,"class",null,G.class,D),U&4&&i(B,"style",q.style,G.style,D),U&8){const ee=T.dynamicProps;for(let ae=0;ae<ee.length;ae++){const de=ee[ae],ze=q[de],Be=G[de];(Be!==ze||de==="value")&&i(B,de,ze,Be,D,C)}}U&1&&_.children!==T.children&&f(B,T.children)}else!$&&M==null&&A(B,q,G,C,D);((ne=G.onVnodeUpdated)||Z)&&pt(()=>{ne&&Lt(ne,C,T,_),Z&&nr(T,_,C,"updated")},N)},I=(_,T,C,N,D,x,$)=>{for(let B=0;B<T.length;B++){const U=_[B],M=T[B],Z=U.el&&(U.type===Bt||!Is(U,M)||U.shapeFlag&70)?g(U.el):C;L(U,M,Z,null,N,D,x,$,!0)}},A=(_,T,C,N,D)=>{if(T!==C){if(T!==we)for(const x in T)!Cs(x)&&!(x in C)&&i(_,x,T[x],null,D,N);for(const x in C){if(Cs(x))continue;const $=C[x],B=T[x];$!==B&&x!=="value"&&i(_,x,B,$,D,N)}"value"in C&&i(_,"value",T.value,C.value,D)}},R=(_,T,C,N,D,x,$,B,U)=>{const M=T.el=_?_.el:c(""),Z=T.anchor=_?_.anchor:c("");let{patchFlag:q,dynamicChildren:G,slotScopeIds:ne}=T;ne&&(B=B?B.concat(ne):ne),_==null?(r(M,C,N),r(Z,C,N),m(T.children||[],C,Z,D,x,$,B,U)):q>0&&q&64&&G&&_.dynamicChildren?(I(_.dynamicChildren,G,C,D,x,$,B),(T.key!=null||D&&T===D.subTree)&&Yf(_,T,!0)):ge(_,T,C,Z,D,x,$,B,U)},y=(_,T,C,N,D,x,$,B,U)=>{T.slotScopeIds=B,_==null?T.shapeFlag&512?D.ctx.activate(T,C,N,$,U):dt(T,C,N,D,x,$,U):yn(_,T,U)},dt=(_,T,C,N,D,x,$)=>{const B=_.component=_v(_,N,D);if(Mf(_)&&(B.ctx.renderer=Mt),yv(B,!1,$),B.asyncDep){if(D&&D.registerDep(B,Ue,$),!_.el){const U=B.subTree=On(Hs);z(null,U,T,C)}}else Ue(B,_,T,C,D,x,$)},yn=(_,T,C)=>{const N=T.component=_.component;if(cv(_,T,C))if(N.asyncDep&&!N.asyncResolved){Te(N,T,C);return}else N.next=T,N.update();else T.el=_.el,N.vnode=T},Ue=(_,T,C,N,D,x,$)=>{const B=()=>{if(_.isMounted){let{next:q,bu:G,u:ne,parent:ee,vnode:ae}=_;{const Ge=Xf(_);if(Ge){q&&(q.el=ae.el,Te(_,q,$)),Ge.asyncDep.then(()=>{_.isUnmounted||B()});return}}let de=q,ze;rr(_,!1),q?(q.el=ae.el,Te(_,q,$)):q=ae,G&&$i(G),(ze=q.props&&q.props.onVnodeBeforeUpdate)&&Lt(ze,ee,q,ae),rr(_,!0);const Be=rh(_),vt=_.subTree;_.subTree=Be,L(vt,Be,g(vt.el),en(vt),_,D,x),q.el=Be.el,de===null&&lv(_,Be.el),ne&&pt(ne,D),(ze=q.props&&q.props.onVnodeUpdated)&&pt(()=>Lt(ze,ee,q,ae),D)}else{let q;const{el:G,props:ne}=T,{bm:ee,m:ae,parent:de,root:ze,type:Be}=_,vt=Os(T);rr(_,!1),ee&&$i(ee),!vt&&(q=ne&&ne.onVnodeBeforeMount)&&Lt(q,de,T),rr(_,!0);{ze.ce&&ze.ce._injectChildStyle(Be);const Ge=_.subTree=rh(_);L(null,Ge,C,N,_,D,x),T.el=Ge.el}if(ae&&pt(ae,D),!vt&&(q=ne&&ne.onVnodeMounted)){const Ge=T;pt(()=>Lt(q,de,Ge),D)}(T.shapeFlag&256||de&&Os(de.vnode)&&de.vnode.shapeFlag&256)&&_.a&&pt(_.a,D),_.isMounted=!0,T=C=N=null}};_.scope.on();const U=_.effect=new ff(B);_.scope.off();const M=_.update=U.run.bind(U),Z=_.job=U.runIfDirty.bind(U);Z.i=_,Z.id=_.uid,U.scheduler=()=>nl(Z),rr(_,!0),M()},Te=(_,T,C)=>{T.component=_;const N=_.vnode.props;_.vnode=T,_.next=null,Wy(_,T.props,N,C),Jy(_,T.children,C),Kn(),Gu(_),Wn()},ge=(_,T,C,N,D,x,$,B,U=!1)=>{const M=_&&_.children,Z=_?_.shapeFlag:0,q=T.children,{patchFlag:G,shapeFlag:ne}=T;if(G>0){if(G&128){Qn(M,q,C,N,D,x,$,B,U);return}else if(G&256){St(M,q,C,N,D,x,$,B,U);return}}ne&8?(Z&16&&Yn(M,D,x),q!==M&&f(C,q)):Z&16?ne&16?Qn(M,q,C,N,D,x,$,B,U):Yn(M,D,x,!0):(Z&8&&f(C,""),ne&16&&m(q,C,N,D,x,$,B,U))},St=(_,T,C,N,D,x,$,B,U)=>{_=_||Mr,T=T||Mr;const M=_.length,Z=T.length,q=Math.min(M,Z);let G;for(G=0;G<q;G++){const ne=T[G]=U?bn(T[G]):jt(T[G]);L(_[G],ne,C,null,D,x,$,B,U)}M>Z?Yn(_,D,x,!0,!1,q):m(T,C,N,D,x,$,B,U,q)},Qn=(_,T,C,N,D,x,$,B,U)=>{let M=0;const Z=T.length;let q=_.length-1,G=Z-1;for(;M<=q&&M<=G;){const ne=_[M],ee=T[M]=U?bn(T[M]):jt(T[M]);if(Is(ne,ee))L(ne,ee,C,null,D,x,$,B,U);else break;M++}for(;M<=q&&M<=G;){const ne=_[q],ee=T[G]=U?bn(T[G]):jt(T[G]);if(Is(ne,ee))L(ne,ee,C,null,D,x,$,B,U);else break;q--,G--}if(M>q){if(M<=G){const ne=G+1,ee=ne<Z?T[ne].el:N;for(;M<=G;)L(null,T[M]=U?bn(T[M]):jt(T[M]),C,ee,D,x,$,B,U),M++}}else if(M>G)for(;M<=q;)Ve(_[M],D,x,!0),M++;else{const ne=M,ee=M,ae=new Map;for(M=ee;M<=G;M++){const je=T[M]=U?bn(T[M]):jt(T[M]);je.key!=null&&ae.set(je.key,M)}let de,ze=0;const Be=G-ee+1;let vt=!1,Ge=0;const vn=new Array(Be);for(M=0;M<Be;M++)vn[M]=0;for(M=ne;M<=q;M++){const je=_[M];if(ze>=Be){Ve(je,D,x,!0);continue}let Et;if(je.key!=null)Et=ae.get(je.key);else for(de=ee;de<=G;de++)if(vn[de-ee]===0&&Is(je,T[de])){Et=de;break}Et===void 0?Ve(je,D,x,!0):(vn[Et-ee]=M+1,Et>=Ge?Ge=Et:vt=!0,L(je,T[Et],C,null,D,x,$,B,U),ze++)}const cs=vt?ev(vn):Mr;for(de=cs.length-1,M=Be-1;M>=0;M--){const je=ee+M,Et=T[je],mi=je+1<Z?T[je+1].el:N;vn[M]===0?L(null,Et,C,mi,D,x,$,B,U):vt&&(de<0||M!==cs[de]?Zt(Et,C,mi,2):de--)}}},Zt=(_,T,C,N,D=null)=>{const{el:x,type:$,transition:B,children:U,shapeFlag:M}=_;if(M&6){Zt(_.component.subTree,T,C,N);return}if(M&128){_.suspense.move(T,C,N);return}if(M&64){$.move(_,T,C,Mt);return}if($===Bt){r(x,T,C);for(let q=0;q<U.length;q++)Zt(U[q],T,C,N);r(_.anchor,T,C);return}if($===Ba){J(_,T,C);return}if(N!==2&&M&1&&B)if(N===0)B.beforeEnter(x),r(x,T,C),pt(()=>B.enter(x),D);else{const{leave:q,delayLeave:G,afterLeave:ne}=B,ee=()=>r(x,T,C),ae=()=>{q(x,()=>{ee(),ne&&ne()})};G?G(x,ee,ae):ae()}else r(x,T,C)},Ve=(_,T,C,N=!1,D=!1)=>{const{type:x,props:$,ref:B,children:U,dynamicChildren:M,shapeFlag:Z,patchFlag:q,dirs:G,cacheIndex:ne}=_;if(q===-2&&(D=!1),B!=null&&ao(B,null,C,_,!0),ne!=null&&(T.renderCache[ne]=void 0),Z&256){T.ctx.deactivate(_);return}const ee=Z&1&&G,ae=!Os(_);let de;if(ae&&(de=$&&$.onVnodeBeforeUnmount)&&Lt(de,T,_),Z&6)Jn(_.component,C,N);else{if(Z&128){_.suspense.unmount(C,N);return}ee&&nr(_,null,T,"beforeUnmount"),Z&64?_.type.remove(_,T,C,Mt,N):M&&!M.hasOnce&&(x!==Bt||q>0&&q&64)?Yn(M,T,C,!1,!0):(x===Bt&&q&384||!D&&Z&16)&&Yn(U,T,C),N&&Ne(_)}(ae&&(de=$&&$.onVnodeUnmounted)||ee)&&pt(()=>{de&&Lt(de,T,_),ee&&nr(_,null,T,"unmounted")},C)},Ne=_=>{const{type:T,el:C,anchor:N,transition:D}=_;if(T===Bt){ga(C,N);return}if(T===Ba){K(_);return}const x=()=>{s(C),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(_.shapeFlag&1&&D&&!D.persisted){const{leave:$,delayLeave:B}=D,U=()=>$(C,x);B?B(_.el,x,U):U()}else x()},ga=(_,T)=>{let C;for(;_!==T;)C=E(_),s(_),_=C;s(T)},Jn=(_,T,C)=>{const{bum:N,scope:D,job:x,subTree:$,um:B,m:U,a:M}=_;nh(U),nh(M),N&&$i(N),D.stop(),x&&(x.flags|=8,Ve($,_,T,C)),B&&pt(B,T),pt(()=>{_.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},Yn=(_,T,C,N=!1,D=!1,x=0)=>{for(let $=x;$<_.length;$++)Ve(_[$],T,C,N,D)},en=_=>{if(_.shapeFlag&6)return en(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const T=E(_.anchor||_.el),C=T&&T[yy];return C?E(C):T};let os=!1;const gi=(_,T,C)=>{_==null?T._vnode&&Ve(T._vnode,null,null,!0):L(T._vnode||null,_,T,null,null,null,C),T._vnode=_,os||(os=!0,Gu(),Of(),os=!1)},Mt={p:L,um:Ve,m:Zt,r:Ne,mt:dt,mc:m,pc:ge,pbc:I,n:en,o:t};return{render:gi,hydrate:void 0,createApp:qy(gi)}}function Fa({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function rr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Zy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Yf(t,e,n=!1){const r=t.children,s=e.children;if(se(r)&&se(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=bn(s[i]),c.el=a.el),!n&&c.patchFlag!==-2&&Yf(a,c)),c.type===Ko&&(c.el=a.el)}}function ev(t){const e=t.slice(),n=[0];let r,s,i,a,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)c=i+a>>1,t[n[c]]<h?i=c+1:a=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function Xf(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Xf(e)}function nh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const tv=Symbol.for("v-scx"),nv=()=>qi(tv);function Ua(t,e,n){return Zf(t,e,n)}function Zf(t,e,n=we){const{immediate:r,deep:s,flush:i,once:a}=n,c=ct({},n),l=e&&r||!e&&i!=="post";let h;if(Ws){if(i==="sync"){const S=nv();h=S.__watcherHandles||(S.__watcherHandles=[])}else if(!l){const S=()=>{};return S.stop=$t,S.resume=$t,S.pause=$t,S}}const f=nt;c.call=(S,O,L)=>Qt(S,f,O,L);let g=!1;i==="post"?c.scheduler=S=>{pt(S,f&&f.suspense)}:i!=="sync"&&(g=!0,c.scheduler=(S,O)=>{O?S():nl(S)}),c.augmentJob=S=>{e&&(S.flags|=4),g&&(S.flags|=2,f&&(S.id=f.uid,S.i=f))};const E=fy(t,e,c);return Ws&&(h?h.push(E):l&&E()),E}function rv(t,e,n){const r=this.proxy,s=Oe(t)?t.includes(".")?ep(r,t):()=>r[t]:t.bind(r,r);let i;ce(e)?i=e:(i=e.handler,n=e);const a=ii(this),c=Zf(s,i.bind(r),n);return a(),c}function ep(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const sv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${bt(e)}Modifiers`]||t[`${_r(e)}Modifiers`];function iv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||we;let s=n;const i=e.startsWith("update:"),a=i&&sv(r,e.slice(7));a&&(a.trim&&(s=n.map(f=>Oe(f)?f.trim():f)),a.number&&(s=n.map(no)));let c,l=r[c=Da(e)]||r[c=Da(bt(e))];!l&&i&&(l=r[c=Da(_r(e))]),l&&Qt(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Qt(h,t,6,s)}}function tp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},c=!1;if(!ce(t)){const l=h=>{const f=tp(h,e,!0);f&&(c=!0,ct(a,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Se(t)&&r.set(t,null),null):(se(i)?i.forEach(l=>a[l]=null):ct(a,i),Se(t)&&r.set(t,a),a)}function Ho(t,e){return!t||!xo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ve(t,e[0].toLowerCase()+e.slice(1))||ve(t,_r(e))||ve(t,e))}function rh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:l,render:h,renderCache:f,props:g,data:E,setupState:S,ctx:O,inheritAttrs:L}=t,F=io(t);let z,Q;try{if(n.shapeFlag&4){const K=s||r,pe=K;z=jt(h.call(pe,K,f,g,S,E,O)),Q=c}else{const K=e;z=jt(K.length>1?K(g,{attrs:c,slots:a,emit:l}):K(g,null)),Q=e.props?c:ov(c)}}catch(K){Ns.length=0,$o(K,t,1),z=On(Hs)}let J=z;if(Q&&L!==!1){const K=Object.keys(Q),{shapeFlag:pe}=J;K.length&&pe&7&&(i&&K.some(Hc)&&(Q=av(Q,i)),J=Wr(J,Q,!1,!0))}return n.dirs&&(J=Wr(J,null,!1,!0),J.dirs=J.dirs?J.dirs.concat(n.dirs):n.dirs),n.transition&&rl(J,n.transition),z=J,io(F),z}const ov=t=>{let e;for(const n in t)(n==="class"||n==="style"||xo(n))&&((e||(e={}))[n]=t[n]);return e},av=(t,e)=>{const n={};for(const r in t)(!Hc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function cv(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?sh(r,a,h):!!a;if(l&8){const f=e.dynamicProps;for(let g=0;g<f.length;g++){const E=f[g];if(a[E]!==r[E]&&!Ho(h,E))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?sh(r,a,h):!0:!!a;return!1}function sh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ho(n,i))return!0}return!1}function lv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const np=t=>t.__isSuspense;function uv(t,e){e&&e.pendingBranch?se(t)?e.effects.push(...t):e.effects.push(t):my(t)}const Bt=Symbol.for("v-fgt"),Ko=Symbol.for("v-txt"),Hs=Symbol.for("v-cmt"),Ba=Symbol.for("v-stc"),Ns=[];let _t=null;function Pt(t=!1){Ns.push(_t=t?null:[])}function hv(){Ns.pop(),_t=Ns[Ns.length-1]||null}let Ks=1;function ih(t,e=!1){Ks+=t,t<0&&_t&&e&&(_t.hasOnce=!0)}function rp(t){return t.dynamicChildren=Ks>0?_t||Mr:null,hv(),Ks>0&&_t&&_t.push(t),t}function sn(t,e,n,r,s,i){return rp(W(t,e,n,r,s,i,!0))}function oh(t,e,n,r,s){return rp(On(t,e,n,r,s,!0))}function sp(t){return t?t.__v_isVNode===!0:!1}function Is(t,e){return t.type===e.type&&t.key===e.key}const ip=({key:t})=>t??null,Hi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Oe(t)||rt(t)||ce(t)?{i:mt,r:t,k:e,f:!!n}:t:null);function W(t,e=null,n=null,r=0,s=null,i=t===Bt?0:1,a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ip(e),ref:e&&Hi(e),scopeId:Nf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:mt};return c?(il(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Oe(n)?8:16),Ks>0&&!a&&_t&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&_t.push(l),l}const On=dv;function dv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Vy)&&(t=Hs),sp(t)){const c=Wr(t,e,!0);return n&&il(c,n),Ks>0&&!i&&_t&&(c.shapeFlag&6?_t[_t.indexOf(t)]=c:_t.push(c)),c.patchFlag=-2,c}if(wv(t)&&(t=t.__vccOpts),e){e=fv(e);let{class:c,style:l}=e;c&&!Oe(c)&&(e.class=an(c)),Se(l)&&(tl(l)&&!se(l)&&(l=ct({},l)),e.style=zc(l))}const a=Oe(t)?1:np(t)?128:vy(t)?64:Se(t)?4:ce(t)?2:0;return W(t,e,n,r,s,a,i,!0)}function fv(t){return t?tl(t)||Hf(t)?ct({},t):t:null}function Wr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:l}=t,h=e?pv(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&ip(h),ref:e&&e.ref?n&&i?se(i)?i.concat(Hi(e)):[i,Hi(e)]:Hi(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Bt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Wr(t.ssContent),ssFallback:t.ssFallback&&Wr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&rl(f,l.clone(f)),f}function fc(t=" ",e=0){return On(Ko,null,t,e)}function jt(t){return t==null||typeof t=="boolean"?On(Hs):se(t)?On(Bt,null,t.slice()):sp(t)?bn(t):On(Ko,null,String(t))}function bn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Wr(t)}function il(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(se(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),il(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Hf(e)?e._ctx=mt:s===3&&mt&&(mt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ce(e)?(e={default:e,_ctx:mt},n=32):(e=String(e),r&64?(n=16,e=[fc(e)]):n=8);t.children=e,t.shapeFlag|=n}function pv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=an([e.class,r.class]));else if(s==="style")e.style=zc([e.style,r.style]);else if(xo(s)){const i=e[s],a=r[s];a&&i!==a&&!(se(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Lt(t,e,n,r=null){Qt(t,e,7,[n,r])}const gv=jf();let mv=0;function _v(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||gv,i={uid:mv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new F_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wf(r,s),emitsOptions:tp(r,s),emit:null,emitted:null,propsDefaults:we,inheritAttrs:r.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=iv.bind(null,i),t.ce&&t.ce(i),i}let nt=null,lo,pc;{const t=Uo(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};lo=e("__VUE_INSTANCE_SETTERS__",n=>nt=n),pc=e("__VUE_SSR_SETTERS__",n=>Ws=n)}const ii=t=>{const e=nt;return lo(t),t.scope.on(),()=>{t.scope.off(),lo(e)}},ah=()=>{nt&&nt.scope.off(),lo(null)};function op(t){return t.vnode.shapeFlag&4}let Ws=!1;function yv(t,e=!1,n=!1){e&&pc(e);const{props:r,children:s}=t.vnode,i=op(t);Ky(t,r,i,e),Qy(t,s,n);const a=i?vv(t,e):void 0;return e&&pc(!1),a}function vv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,My);const{setup:r}=n;if(r){Kn();const s=t.setupContext=r.length>1?Tv(t):null,i=ii(t),a=si(r,t,0,[t.props,s]),c=of(a);if(Wn(),i(),(c||t.sp)&&!Os(t)&&xf(t),c){if(a.then(ah,ah),e)return a.then(l=>{ch(t,l)}).catch(l=>{$o(l,t,0)});t.asyncDep=a}else ch(t,a)}else ap(t)}function ch(t,e,n){ce(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(t.setupState=Pf(e)),ap(t)}function ap(t,e,n){const r=t.type;t.render||(t.render=r.render||$t);{const s=ii(t);Kn();try{Ly(t)}finally{Wn(),s()}}}const Ev={get(t,e){return Ze(t,"get",""),t[e]}};function Tv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Ev),slots:t.slots,emit:t.emit,expose:e}}function Wo(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Pf(iy(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Vs)return Vs[n](t)},has(e,n){return n in e||n in Vs}})):t.proxy}function Iv(t,e=!0){return ce(t)?t.displayName||t.name:t.name||e&&t.__name}function wv(t){return ce(t)&&"__vccOpts"in t}const Av=(t,e)=>hy(t,e,Ws),bv="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let gc;const lh=typeof window<"u"&&window.trustedTypes;if(lh)try{gc=lh.createPolicy("vue",{createHTML:t=>t})}catch{}const cp=gc?t=>gc.createHTML(t):t=>t,Sv="http://www.w3.org/2000/svg",Rv="http://www.w3.org/1998/Math/MathML",on=typeof document<"u"?document:null,uh=on&&on.createElement("template"),Pv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?on.createElementNS(Sv,t):e==="mathml"?on.createElementNS(Rv,t):n?on.createElement(t,{is:n}):on.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>on.createTextNode(t),createComment:t=>on.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>on.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{uh.innerHTML=cp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=uh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Cv=Symbol("_vtc");function kv(t,e,n){const r=t[Cv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const hh=Symbol("_vod"),Dv=Symbol("_vsh"),Ov=Symbol(""),Vv=/(^|;)\s*display\s*:/;function Nv(t,e,n){const r=t.style,s=Oe(n);let i=!1;if(n&&!s){if(e)if(Oe(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&Ki(r,c,"")}else for(const a in e)n[a]==null&&Ki(r,a,"");for(const a in n)a==="display"&&(i=!0),Ki(r,a,n[a])}else if(s){if(e!==n){const a=r[Ov];a&&(n+=";"+a),r.cssText=n,i=Vv.test(n)}}else e&&t.removeAttribute("style");hh in t&&(t[hh]=i?r.display:"",t[Dv]&&(r.display="none"))}const dh=/\s*!important$/;function Ki(t,e,n){if(se(n))n.forEach(r=>Ki(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=xv(t,e);dh.test(n)?t.setProperty(_r(r),n.replace(dh,""),"important"):t[r]=n}}const fh=["Webkit","Moz","ms"],ja={};function xv(t,e){const n=ja[e];if(n)return n;let r=bt(e);if(r!=="filter"&&r in t)return ja[e]=r;r=Fo(r);for(let s=0;s<fh.length;s++){const i=fh[s]+r;if(i in t)return ja[e]=i}return e}const ph="http://www.w3.org/1999/xlink";function gh(t,e,n,r,s,i=x_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ph,e.slice(6,e.length)):t.setAttributeNS(ph,e,n):n==null||i&&!uf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Gt(n)?String(n):n)}function mh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?cp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=uf(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function or(t,e,n,r){t.addEventListener(e,n,r)}function Mv(t,e,n,r){t.removeEventListener(e,n,r)}const _h=Symbol("_vei");function Lv(t,e,n,r,s=null){const i=t[_h]||(t[_h]={}),a=i[e];if(r&&a)a.value=r;else{const[c,l]=Fv(e);if(r){const h=i[e]=jv(r,s);or(t,c,h,l)}else a&&(Mv(t,c,a,l),i[e]=void 0)}}const yh=/(?:Once|Passive|Capture)$/;function Fv(t){let e;if(yh.test(t)){e={};let r;for(;r=t.match(yh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):_r(t.slice(2)),e]}let $a=0;const Uv=Promise.resolve(),Bv=()=>$a||(Uv.then(()=>$a=0),$a=Date.now());function jv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Qt($v(r,n.value),e,5,[r])};return n.value=t,n.attached=Bv(),n}function $v(t,e){if(se(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const vh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,qv=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?kv(t,r,a):e==="style"?Nv(t,n,r):xo(e)?Hc(e)||Lv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Hv(t,e,r,a))?(mh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&gh(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Oe(r))?mh(t,bt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),gh(t,e,r,a))};function Hv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&vh(e)&&ce(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return vh(e)&&Oe(n)?!1:e in t}const uo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return se(e)?n=>$i(e,n):e};function Kv(t){t.target.composing=!0}function Eh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const jr=Symbol("_assign"),mc={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[jr]=uo(s);const i=r||s.props&&s.props.type==="number";or(t,e?"change":"input",a=>{if(a.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=no(c)),t[jr](c)}),n&&or(t,"change",()=>{t.value=t.value.trim()}),e||(or(t,"compositionstart",Kv),or(t,"compositionend",Eh),or(t,"change",Eh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[jr]=uo(a),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?no(t.value):t.value,l=e??"";c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},Wv={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Mo(e);or(t,"change",()=>{const i=Array.prototype.filter.call(t.options,a=>a.selected).map(a=>n?no(ho(a)):ho(a));t[jr](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,kf(()=>{t._assigning=!1})}),t[jr]=uo(r)},mounted(t,{value:e}){Th(t,e)},beforeUpdate(t,e,n){t[jr]=uo(n)},updated(t,{value:e}){t._assigning||Th(t,e)}};function Th(t,e){const n=t.multiple,r=se(e);if(!(n&&!r&&!Mo(e))){for(let s=0,i=t.options.length;s<i;s++){const a=t.options[s],c=ho(a);if(n)if(r){const l=typeof c;l==="string"||l==="number"?a.selected=e.some(h=>String(h)===String(c)):a.selected=L_(e,c)>-1}else a.selected=e.has(c);else if(Bo(ho(a),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ho(t){return"_value"in t?t._value:t.value}const zv=["ctrl","shift","alt","meta"],Gv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>zv.some(n=>t[`${n}Key`]&&!e.includes(n))},Qv=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const c=Gv[e[a]];if(c&&c(s,e))return}return t(s,...i)})},Jv=ct({patchProp:qv},Pv);let Ih;function Yv(){return Ih||(Ih=Yy(Jv))}const Xv=(...t)=>{const e=Yv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=eE(r);if(!s)return;const i=e._component;!ce(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,Zv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Zv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function eE(t){return Oe(t)?document.querySelector(t):t}const tE=()=>{};var wh={};/**
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
 */const lp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},nE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},up={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,c=a?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,f=i>>2,g=(i&3)<<4|c>>4;let E=(c&15)<<2|h>>6,S=h&63;l||(S=64,a||(E=64)),r.push(n[f],n[g],n[E],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):nE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const g=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||g==null)throw new rE;const E=i<<2|c>>4;if(r.push(E),h!==64){const S=c<<4&240|h>>2;if(r.push(S),g!==64){const O=h<<6&192|g;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class rE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const sE=function(t){const e=lp(t);return up.encodeByteArray(e,!0)},fo=function(t){return sE(t).replace(/\./g,"")},hp=function(t){try{return up.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function iE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const oE=()=>iE().__FIREBASE_DEFAULTS__,aE=()=>{if(typeof process>"u"||typeof wh>"u")return;const t=wh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&hp(t[1]);return e&&JSON.parse(e)},zo=()=>{try{return tE()||oE()||aE()||cE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},dp=t=>{var e,n;return(n=(e=zo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},lE=t=>{const e=dp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},fp=()=>{var t;return(t=zo())===null||t===void 0?void 0:t.config},pp=t=>{var e;return(e=zo())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class uE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function hE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[fo(JSON.stringify(n)),fo(JSON.stringify(a)),""].join(".")}/**
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
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function fE(){var t;const e=(t=zo())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function gp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mE(){const t=st();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _E(){return!fE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mp(){try{return typeof indexedDB=="object"}catch{return!1}}function _p(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function yE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const vE="FirebaseError";class xt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vE,Object.setPrototypeOf(this,xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yr.prototype.create)}}class yr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?EE(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new xt(s,c,r)}}function EE(t,e){return t.replace(TE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const TE=/\{\$([^}]+)}/g;function IE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fn(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(Ah(i)&&Ah(a)){if(!Fn(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ah(t){return t!==null&&typeof t=="object"}/**
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
 */function oi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function As(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function bs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function wE(t,e){const n=new AE(t,e);return n.subscribe.bind(n)}class AE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");bE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=qa),s.error===void 0&&(s.error=qa),s.complete===void 0&&(s.complete=qa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qa(){}/**
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
 */const SE=1e3,RE=2,PE=4*60*60*1e3,CE=.5;function bh(t,e=SE,n=RE){const r=e*Math.pow(n,t),s=Math.round(CE*r*(Math.random()-.5)*2);return Math.min(PE,r+s)}/**
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
 */function ht(t){return t&&t._delegate?t._delegate:t}class Vt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ir="[DEFAULT]";/**
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
 */class kE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new uE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(OE(e))try{this.getOrInitializeService({instanceIdentifier:ir})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ir){return this.instances.has(e)}getOptions(e=ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:DE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ir){return this.component?this.component.multipleInstances?e:ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function DE(t){return t===ir?void 0:t}function OE(t){return t.instantiationMode==="EAGER"}/**
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
 */class VE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const NE={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},xE=ue.INFO,ME={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},LE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=ME[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Go{constructor(e){this.name=e,this._logLevel=xE,this._logHandler=LE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?NE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const FE=(t,e)=>e.some(n=>t instanceof n);let Sh,Rh;function UE(){return Sh||(Sh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BE(){return Rh||(Rh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yp=new WeakMap,_c=new WeakMap,vp=new WeakMap,Ha=new WeakMap,ol=new WeakMap;function jE(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(Vn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&yp.set(n,t)}).catch(()=>{}),ol.set(e,t),e}function $E(t){if(_c.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});_c.set(t,e)}let yc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _c.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qE(t){yc=t(yc)}function HE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ka(this),e,...n);return vp.set(r,e.sort?e.sort():[e]),Vn(r)}:BE().includes(t)?function(...e){return t.apply(Ka(this),e),Vn(yp.get(this))}:function(...e){return Vn(t.apply(Ka(this),e))}}function KE(t){return typeof t=="function"?HE(t):(t instanceof IDBTransaction&&$E(t),FE(t,UE())?new Proxy(t,yc):t)}function Vn(t){if(t instanceof IDBRequest)return jE(t);if(Ha.has(t))return Ha.get(t);const e=KE(t);return e!==t&&(Ha.set(t,e),ol.set(e,t)),e}const Ka=t=>ol.get(t);function Ep(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),c=Vn(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Vn(a.result),l.oldVersion,l.newVersion,Vn(a.transaction),l)}),n&&a.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const WE=["get","getKey","getAll","getAllKeys","count"],zE=["put","add","delete","clear"],Wa=new Map;function Ph(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wa.get(e))return Wa.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=zE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||WE.includes(n)))return;const i=async function(a,...c){const l=this.transaction(a,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return Wa.set(e,i),i}qE(t=>({...t,get:(e,n,r)=>Ph(e,n)||t.get(e,n,r),has:(e,n)=>!!Ph(e,n)||t.has(e,n)}));/**
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
 */class GE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(QE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function QE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const vc="@firebase/app",Ch="0.11.4";/**
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
 */const fn=new Go("@firebase/app"),JE="@firebase/app-compat",YE="@firebase/analytics-compat",XE="@firebase/analytics",ZE="@firebase/app-check-compat",eT="@firebase/app-check",tT="@firebase/auth",nT="@firebase/auth-compat",rT="@firebase/database",sT="@firebase/data-connect",iT="@firebase/database-compat",oT="@firebase/functions",aT="@firebase/functions-compat",cT="@firebase/installations",lT="@firebase/installations-compat",uT="@firebase/messaging",hT="@firebase/messaging-compat",dT="@firebase/performance",fT="@firebase/performance-compat",pT="@firebase/remote-config",gT="@firebase/remote-config-compat",mT="@firebase/storage",_T="@firebase/storage-compat",yT="@firebase/firestore",vT="@firebase/vertexai",ET="@firebase/firestore-compat",TT="firebase",IT="11.6.0";/**
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
 */const Ec="[DEFAULT]",wT={[vc]:"fire-core",[JE]:"fire-core-compat",[XE]:"fire-analytics",[YE]:"fire-analytics-compat",[eT]:"fire-app-check",[ZE]:"fire-app-check-compat",[tT]:"fire-auth",[nT]:"fire-auth-compat",[rT]:"fire-rtdb",[sT]:"fire-data-connect",[iT]:"fire-rtdb-compat",[oT]:"fire-fn",[aT]:"fire-fn-compat",[cT]:"fire-iid",[lT]:"fire-iid-compat",[uT]:"fire-fcm",[hT]:"fire-fcm-compat",[dT]:"fire-perf",[fT]:"fire-perf-compat",[pT]:"fire-rc",[gT]:"fire-rc-compat",[mT]:"fire-gcs",[_T]:"fire-gcs-compat",[yT]:"fire-fst",[ET]:"fire-fst-compat",[vT]:"fire-vertex","fire-js":"fire-js",[TT]:"fire-js-all"};/**
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
 */const po=new Map,AT=new Map,Tc=new Map;function kh(t,e){try{t.container.addComponent(e)}catch(n){fn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Jt(t){const e=t.name;if(Tc.has(e))return fn.debug(`There were multiple attempts to register component ${e}.`),!1;Tc.set(e,t);for(const n of po.values())kh(n,t);for(const n of AT.values())kh(n,t);return!0}function vr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Tt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const bT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nn=new yr("app","Firebase",bT);/**
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
 */class ST{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nn.create("app-deleted",{appName:this._name})}}/**
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
 */const es=IT;function Tp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ec,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Nn.create("bad-app-name",{appName:String(s)});if(n||(n=fp()),!n)throw Nn.create("no-options");const i=po.get(s);if(i){if(Fn(n,i.options)&&Fn(r,i.config))return i;throw Nn.create("duplicate-app",{appName:s})}const a=new VE(s);for(const l of Tc.values())a.addComponent(l);const c=new ST(n,r,a);return po.set(s,c),c}function al(t=Ec){const e=po.get(t);if(!e&&t===Ec&&fp())return Tp();if(!e)throw Nn.create("no-app",{appName:t});return e}function At(t,e,n){var r;let s=(r=wT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fn.warn(c.join(" "));return}Jt(new Vt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const RT="firebase-heartbeat-database",PT=1,zs="firebase-heartbeat-store";let za=null;function Ip(){return za||(za=Ep(RT,PT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(zs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nn.create("idb-open",{originalErrorMessage:t.message})})),za}async function CT(t){try{const n=(await Ip()).transaction(zs),r=await n.objectStore(zs).get(wp(t));return await n.done,r}catch(e){if(e instanceof xt)fn.warn(e.message);else{const n=Nn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fn.warn(n.message)}}}async function Dh(t,e){try{const r=(await Ip()).transaction(zs,"readwrite");await r.objectStore(zs).put(e,wp(t)),await r.done}catch(n){if(n instanceof xt)fn.warn(n.message);else{const r=Nn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fn.warn(r.message)}}}function wp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const kT=1024,DT=30;class OT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new NT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Oh();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>DT){const a=xT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){fn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Oh(),{heartbeatsToSend:r,unsentEntries:s}=VT(this._heartbeatsCache.heartbeats),i=fo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return fn.warn(n),""}}}function Oh(){return new Date().toISOString().substring(0,10)}function VT(t,e=kT){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Vh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Vh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class NT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mp()?_p().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await CT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Dh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Dh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Vh(t){return fo(JSON.stringify({version:2,heartbeats:t})).length}function xT(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function MT(t){Jt(new Vt("platform-logger",e=>new GE(e),"PRIVATE")),Jt(new Vt("heartbeat",e=>new OT(e),"PRIVATE")),At(vc,Ch,t),At(vc,Ch,"esm2017"),At("fire-js","")}MT("");function cl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Ap(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const LT=Ap,bp=new yr("auth","Firebase",Ap());/**
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
 */const go=new Go("@firebase/auth");function FT(t,...e){go.logLevel<=ue.WARN&&go.warn(`Auth (${es}): ${t}`,...e)}function Wi(t,...e){go.logLevel<=ue.ERROR&&go.error(`Auth (${es}): ${t}`,...e)}/**
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
 */function Nt(t,...e){throw ll(t,...e)}function qt(t,...e){return ll(t,...e)}function Sp(t,e,n){const r=Object.assign(Object.assign({},LT()),{[e]:n});return new yr("auth","Firebase",r).create(e,{appName:t.name})}function dn(t){return Sp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ll(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return bp.create(t,...e)}function te(t,e,...n){if(!t)throw ll(e,...n)}function un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wi(e),new Error(e)}function pn(t,e){t||un(e)}/**
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
 */function Ic(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function UT(){return Nh()==="http:"||Nh()==="https:"}function Nh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function BT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(UT()||gp()||"connection"in navigator)?navigator.onLine:!0}function jT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ai{constructor(e,n){this.shortDelay=e,this.longDelay=n,pn(n>e,"Short delay should be less than long delay!"),this.isMobile=dE()||gE()}get(){return BT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ul(t,e){pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Rp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const $T={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const qT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],HT=new ai(3e4,6e4);function zn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Gn(t,e,n,r,s={}){return Pp(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=oi(Object.assign({key:t.config.apiKey},a)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:l},i);return pE()||(h.referrerPolicy="no-referrer"),Rp.fetch()(await Cp(t,t.config.apiHost,n,c),h)})}async function Pp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},$T),e);try{const s=new WT(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw xi(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw xi(t,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw xi(t,"email-already-in-use",a);if(l==="USER_DISABLED")throw xi(t,"user-disabled",a);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Sp(t,f,h);Nt(t,f)}}catch(s){if(s instanceof xt)throw s;Nt(t,"network-request-failed",{message:String(s)})}}async function ci(t,e,n,r,s={}){const i=await Gn(t,e,n,r,s);return"mfaPendingCredential"in i&&Nt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Cp(t,e,n,r){const s=`${e}${n}?${r}`,i=t,a=i.config.emulator?ul(t.config,s):`${t.config.apiScheme}://${s}`;return qT.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function KT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class WT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qt(this.auth,"network-request-failed")),HT.get())})}}function xi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=qt(t,e,r);return s.customData._tokenResponse=n,s}function xh(t){return t!==void 0&&t.enterprise!==void 0}class zT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return KT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function GT(t,e){return Gn(t,"GET","/v2/recaptchaConfig",zn(t,e))}/**
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
 */async function QT(t,e){return Gn(t,"POST","/v1/accounts:delete",e)}async function mo(t,e){return Gn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function xs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function JT(t,e=!1){const n=ht(t),r=await n.getIdToken(e),s=hl(r);te(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:xs(Ga(s.auth_time)),issuedAtTime:xs(Ga(s.iat)),expirationTime:xs(Ga(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ga(t){return Number(t)*1e3}function hl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Wi("JWT malformed, contained fewer than 3 sections"),null;try{const s=hp(n);return s?JSON.parse(s):(Wi("Failed to decode base64 JWT payload"),null)}catch(s){return Wi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Mh(t){const e=hl(t);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Gs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xt&&YT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function YT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class XT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class wc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xs(this.lastLoginAt),this.creationTime=xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _o(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Gs(t,mo(n,{idToken:r}));te(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?kp(i.providerUserInfo):[],c=eI(t.providerData,a),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new wc(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,g)}async function ZT(t){const e=ht(t);await _o(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function eI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function kp(t){return t.map(e=>{var{providerId:n}=e,r=cl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function tI(t,e){const n=await Pp(t,{},async()=>{const r=oi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=await Cp(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Rp.fetch()(a,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function nI(t,e){return Gn(t,"POST","/v2/accounts:revokeToken",zn(t,e))}/**
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
 */class $r{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Mh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){te(e.length!==0,"internal-error");const n=Mh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await tI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new $r;return r&&(te(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(te(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(te(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $r,this.toJSON())}_performRefresh(){return un("not implemented")}}/**
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
 */function wn(t,e){te(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ct{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=cl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new XT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new wc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Gs(this,this.stsTokenManager.getToken(this.auth,e));return te(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return JT(this,e)}reload(){return ZT(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ct(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await _o(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tt(this.auth.app))return Promise.reject(dn(this.auth));const e=await this.getIdToken();return await Gs(this,QT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,c,l,h,f;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,E=(s=n.email)!==null&&s!==void 0?s:void 0,S=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,O=(a=n.photoURL)!==null&&a!==void 0?a:void 0,L=(c=n.tenantId)!==null&&c!==void 0?c:void 0,F=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,z=(h=n.createdAt)!==null&&h!==void 0?h:void 0,Q=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:J,emailVerified:K,isAnonymous:pe,providerData:_e,stsTokenManager:w}=n;te(J&&w,e,"internal-error");const m=$r.fromJSON(this.name,w);te(typeof J=="string",e,"internal-error"),wn(g,e.name),wn(E,e.name),te(typeof K=="boolean",e,"internal-error"),te(typeof pe=="boolean",e,"internal-error"),wn(S,e.name),wn(O,e.name),wn(L,e.name),wn(F,e.name),wn(z,e.name),wn(Q,e.name);const v=new Ct({uid:J,auth:e,email:E,emailVerified:K,displayName:g,isAnonymous:pe,photoURL:O,phoneNumber:S,tenantId:L,stsTokenManager:m,createdAt:z,lastLoginAt:Q});return _e&&Array.isArray(_e)&&(v.providerData=_e.map(I=>Object.assign({},I))),F&&(v._redirectEventId=F),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new $r;s.updateFromServerResponse(n);const i=new Ct({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await _o(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];te(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?kp(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new $r;c.updateFromIdToken(r);const l=new Ct({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new wc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
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
 */const Lh=new Map;function hn(t){pn(t instanceof Function,"Expected a class definition");let e=Lh.get(t);return e?(pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Lh.set(t,e),e)}/**
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
 */class Dp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Dp.type="NONE";const Fh=Dp;/**
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
 */function zi(t,e,n){return`firebase:${t}:${e}:${n}`}class qr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=zi(this.userKey,s.apiKey,i),this.fullPersistenceKey=zi("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await mo(this.auth,{idToken:e}).catch(()=>{});return n?Ct._fromGetAccountInfoResponse(this.auth,n,e):null}return Ct._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qr(hn(Fh),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||hn(Fh);const a=zi(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(a);if(f){let g;if(typeof f=="string"){const E=await mo(e,{idToken:f}).catch(()=>{});if(!E)break;g=await Ct._fromGetAccountInfoResponse(e,E,f)}else g=Ct._fromJSON(e,f);h!==i&&(c=g),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new qr(i,e,r):(i=l[0],c&&await i._set(a,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new qr(i,e,r))}}/**
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
 */function Uh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Op(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lp(e))return"Blackberry";if(Fp(e))return"Webos";if(Vp(e))return"Safari";if((e.includes("chrome/")||Np(e))&&!e.includes("edge/"))return"Chrome";if(Mp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Op(t=st()){return/firefox\//i.test(t)}function Vp(t=st()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Np(t=st()){return/crios\//i.test(t)}function xp(t=st()){return/iemobile/i.test(t)}function Mp(t=st()){return/android/i.test(t)}function Lp(t=st()){return/blackberry/i.test(t)}function Fp(t=st()){return/webos/i.test(t)}function dl(t=st()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rI(t=st()){var e;return dl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sI(){return mE()&&document.documentMode===10}function Up(t=st()){return dl(t)||Mp(t)||Fp(t)||Lp(t)||/windows phone/i.test(t)||xp(t)}/**
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
 */function Bp(t,e=[]){let n;switch(t){case"Browser":n=Uh(st());break;case"Worker":n=`${Uh(st())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${es}/${r}`}/**
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
 */class iI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,c)=>{try{const l=e(i);a(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function oI(t,e={}){return Gn(t,"GET","/v2/passwordPolicy",zn(t,e))}/**
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
 */const aI=6;class cI{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:aI,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class lI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bh(this),this.idTokenSubscription=new Bh(this),this.beforeStateQueue=new iI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=hn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await qr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await mo(this,{idToken:e}),r=await Ct._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Tt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _o(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tt(this.app))return Promise.reject(dn(this));const n=e?ht(e):null;return n&&te(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tt(this.app)?Promise.reject(dn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tt(this.app)?Promise.reject(dn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await oI(this),n=new cI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new yr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await nI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&hn(e)||this._popupRedirectResolver;te(n,this,"argument-error"),this.redirectPersistenceManager=await qr.create(this,[hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(n);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Bp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Tt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&FT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Er(t){return ht(t)}class Bh{constructor(e){this.auth=e,this.observer=null,this.addObserver=wE(n=>this.observer=n)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Qo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function uI(t){Qo=t}function jp(t){return Qo.loadJS(t)}function hI(){return Qo.recaptchaEnterpriseScript}function dI(){return Qo.gapiScript}function fI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class pI{constructor(){this.enterprise=new gI}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class gI{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const mI="recaptcha-enterprise",$p="NO_RECAPTCHA";class _I{constructor(e){this.type=mI,this.auth=Er(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,c)=>{GT(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new zT(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,a(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,a,c){const l=window.grecaptcha;xh(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{a(h)}).catch(()=>{a($p)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new pI().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(c=>{if(!n&&xh(window.grecaptcha))s(c,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=hI();l.length!==0&&(l+=c),jp(l).then(()=>{s(c,i,a)}).catch(h=>{a(h)})}}).catch(c=>{a(c)})})}}async function jh(t,e,n,r=!1,s=!1){const i=new _I(t);let a;if(s)a=$p;else try{a=await i.verify(n)}catch{a=await i.verify(n,!0)}const c=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:a}):Object.assign(c,{captchaResponse:a}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Ac(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await jh(t,e,n,n==="getOobCode");return r(t,a)}else return r(t,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await jh(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(a)})}/**
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
 */function yI(t,e){const n=vr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Fn(i,e??{}))return s;Nt(s,"already-initialized")}return n.initialize({options:e})}function vI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function EI(t,e,n){const r=Er(t);te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=qp(e),{host:a,port:c}=TI(e),l=c===null?"":`:${c}`,h={url:`${i}//${a}${l}/`},f=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){te(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),te(Fn(h,r.config.emulator)&&Fn(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,II()}function qp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function TI(t){const e=qp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:$h(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:$h(a)}}}function $h(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function II(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class fl{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return un("not implemented")}_getIdTokenResponse(e){return un("not implemented")}_linkToIdToken(e,n){return un("not implemented")}_getReauthenticationResolver(e){return un("not implemented")}}async function wI(t,e){return Gn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function AI(t,e){return ci(t,"POST","/v1/accounts:signInWithPassword",zn(t,e))}/**
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
 */async function bI(t,e){return ci(t,"POST","/v1/accounts:signInWithEmailLink",zn(t,e))}async function SI(t,e){return ci(t,"POST","/v1/accounts:signInWithEmailLink",zn(t,e))}/**
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
 */class Qs extends fl{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Qs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Qs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ac(e,n,"signInWithPassword",AI);case"emailLink":return bI(e,{email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ac(e,r,"signUpPassword",wI);case"emailLink":return SI(e,{idToken:n,email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Hr(t,e){return ci(t,"POST","/v1/accounts:signInWithIdp",zn(t,e))}/**
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
 */const RI="http://localhost";class hr extends fl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=cl(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new hr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Hr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Hr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hr(e,n)}buildRequest(){const e={requestUri:RI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=oi(n)}return e}}/**
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
 */function PI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function CI(t){const e=As(bs(t)).link,n=e?As(bs(e)).deep_link_id:null,r=As(bs(t)).deep_link_id;return(r?As(bs(r)).link:null)||r||n||e||t}class pl{constructor(e){var n,r,s,i,a,c;const l=As(bs(e)),h=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,g=PI((s=l.mode)!==null&&s!==void 0?s:null);te(h&&f&&g,"argument-error"),this.apiKey=h,this.operation=g,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=l.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=CI(e);try{return new pl(n)}catch{return null}}}/**
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
 */class ts{constructor(){this.providerId=ts.PROVIDER_ID}static credential(e,n){return Qs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=pl.parseLink(n);return te(r,"argument-error"),Qs._fromEmailAndCode(e,r.code,r.tenantId)}}ts.PROVIDER_ID="password";ts.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ts.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Hp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class li extends Hp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Sn extends li{constructor(){super("facebook.com")}static credential(e){return hr._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sn.credential(e.oauthAccessToken)}catch{return null}}}Sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sn.PROVIDER_ID="facebook.com";/**
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
 */class Rn extends li{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hr._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Rn.credential(n,r)}catch{return null}}}Rn.GOOGLE_SIGN_IN_METHOD="google.com";Rn.PROVIDER_ID="google.com";/**
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
 */class Pn extends li{constructor(){super("github.com")}static credential(e){return hr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pn.credential(e.oauthAccessToken)}catch{return null}}}Pn.GITHUB_SIGN_IN_METHOD="github.com";Pn.PROVIDER_ID="github.com";/**
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
 */class Cn extends li{constructor(){super("twitter.com")}static credential(e,n){return hr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Cn.credential(n,r)}catch{return null}}}Cn.TWITTER_SIGN_IN_METHOD="twitter.com";Cn.PROVIDER_ID="twitter.com";/**
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
 */async function kI(t,e){return ci(t,"POST","/v1/accounts:signUp",zn(t,e))}/**
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
 */class dr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ct._fromIdTokenResponse(e,r,s),a=qh(r);return new dr({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=qh(r);return new dr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function qh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class yo extends xt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,yo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new yo(e,n,r,s)}}function Kp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?yo._fromErrorAndOperation(t,i,e,r):i})}async function DI(t,e,n=!1){const r=await Gs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return dr._forOperation(t,"link",r)}/**
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
 */async function OI(t,e,n=!1){const{auth:r}=t;if(Tt(r.app))return Promise.reject(dn(r));const s="reauthenticate";try{const i=await Gs(t,Kp(r,s,e,t),n);te(i.idToken,r,"internal-error");const a=hl(i.idToken);te(a,r,"internal-error");const{sub:c}=a;return te(t.uid===c,r,"user-mismatch"),dr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Nt(r,"user-mismatch"),i}}/**
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
 */async function Wp(t,e,n=!1){if(Tt(t.app))return Promise.reject(dn(t));const r="signIn",s=await Kp(t,r,e),i=await dr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function VI(t,e){return Wp(Er(t),e)}/**
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
 */async function zp(t){const e=Er(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function NI(t,e,n){if(Tt(t.app))return Promise.reject(dn(t));const r=Er(t),a=await Ac(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",kI).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&zp(t),l}),c=await dr._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}function xI(t,e,n){return Tt(t.app)?Promise.reject(dn(t)):VI(ht(t),ts.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&zp(t),r})}function MI(t,e,n,r){return ht(t).onIdTokenChanged(e,n,r)}function LI(t,e,n){return ht(t).beforeAuthStateChanged(e,n)}const vo="__sak";/**
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
 */class Gp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vo,"1"),this.storage.removeItem(vo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const FI=1e3,UI=10;class Qp extends Gp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Up(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,c,l)=>{this.notifyListeners(a,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);sI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,UI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},FI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qp.type="LOCAL";const BI=Qp;/**
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
 */class Jp extends Gp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Jp.type="SESSION";const Yp=Jp;/**
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
 */function jI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Jo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Jo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async h=>h(n.origin,i)),l=await jI(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Jo.receivers=[];/**
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
 */function gl(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class $I{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,l)=>{const h=gl("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const E=g;if(E.data.eventId===h)switch(E.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(E.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Ht(){return window}function qI(t){Ht().location.href=t}/**
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
 */function Xp(){return typeof Ht().WorkerGlobalScope<"u"&&typeof Ht().importScripts=="function"}async function HI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function KI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function WI(){return Xp()?self:null}/**
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
 */const Zp="firebaseLocalStorageDb",zI=1,Eo="firebaseLocalStorage",eg="fbase_key";class ui{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yo(t,e){return t.transaction([Eo],e?"readwrite":"readonly").objectStore(Eo)}function GI(){const t=indexedDB.deleteDatabase(Zp);return new ui(t).toPromise()}function bc(){const t=indexedDB.open(Zp,zI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Eo,{keyPath:eg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Eo)?e(r):(r.close(),await GI(),e(await bc()))})})}async function Hh(t,e,n){const r=Yo(t,!0).put({[eg]:e,value:n});return new ui(r).toPromise()}async function QI(t,e){const n=Yo(t,!1).get(e),r=await new ui(n).toPromise();return r===void 0?null:r.value}function Kh(t,e){const n=Yo(t,!0).delete(e);return new ui(n).toPromise()}const JI=800,YI=3;class tg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>YI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Jo._getInstance(WI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await HI(),!this.activeServiceWorker)return;this.sender=new $I(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||KI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bc();return await Hh(e,vo,"1"),await Kh(e,vo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>QI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Kh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Yo(s,!1).getAll();return new ui(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),JI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tg.type="LOCAL";const XI=tg;new ai(3e4,6e4);/**
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
 */function ZI(t,e){return e?hn(e):(te(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ml extends fl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Hr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Hr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ew(t){return Wp(t.auth,new ml(t),t.bypassAuthState)}function tw(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),OI(n,new ml(t),t.bypassAuthState)}async function nw(t){const{auth:e,user:n}=t;return te(n,e,"internal-error"),DI(n,new ml(t),t.bypassAuthState)}/**
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
 */class ng{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ew;case"linkViaPopup":case"linkViaRedirect":return nw;case"reauthViaPopup":case"reauthViaRedirect":return tw;default:Nt(this.auth,"internal-error")}}resolve(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const rw=new ai(2e3,1e4);class xr extends ng{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,xr.currentPopupAction&&xr.currentPopupAction.cancel(),xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){pn(this.filter.length===1,"Popup operations only handle one event");const e=gl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rw.get())};e()}}xr.currentPopupAction=null;/**
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
 */const sw="pendingRedirect",Gi=new Map;class iw extends ng{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Gi.get(this.auth._key());if(!e){try{const r=await ow(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Gi.set(this.auth._key(),e)}return this.bypassAuthState||Gi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ow(t,e){const n=lw(e),r=cw(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function aw(t,e){Gi.set(t._key(),e)}function cw(t){return hn(t._redirectPersistence)}function lw(t){return zi(sw,t.config.apiKey,t.name)}async function uw(t,e,n=!1){if(Tt(t.app))return Promise.reject(dn(t));const r=Er(t),s=ZI(r,e),a=await new iw(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const hw=10*60*1e3;class dw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!rg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(qt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wh(e))}saveEventToCache(e){this.cachedEventUids.add(Wh(e)),this.lastProcessedEventTime=Date.now()}}function Wh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function rg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rg(t);default:return!1}}/**
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
 */async function pw(t,e={}){return Gn(t,"GET","/v1/projects",e)}/**
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
 */const gw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mw=/^https?/;async function _w(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pw(t);for(const n of e)try{if(yw(n))return}catch{}Nt(t,"unauthorized-domain")}function yw(t){const e=Ic(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!mw.test(n))return!1;if(gw.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const vw=new ai(3e4,6e4);function zh(){const t=Ht().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ew(t){return new Promise((e,n)=>{var r,s,i;function a(){zh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zh(),n(qt(t,"network-request-failed"))},timeout:vw.get()})}if(!((s=(r=Ht().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ht().gapi)===null||i===void 0)&&i.load)a();else{const c=fI("iframefcb");return Ht()[c]=()=>{gapi.load?a():n(qt(t,"network-request-failed"))},jp(`${dI()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Qi=null,e})}let Qi=null;function Tw(t){return Qi=Qi||Ew(t),Qi}/**
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
 */const Iw=new ai(5e3,15e3),ww="__/auth/iframe",Aw="emulator/auth/iframe",bw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Rw(t){const e=t.config;te(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ul(e,Aw):`https://${t.config.authDomain}/${ww}`,r={apiKey:e.apiKey,appName:t.name,v:es},s=Sw.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${oi(r).slice(1)}`}async function Pw(t){const e=await Tw(t),n=Ht().gapi;return te(n,t,"internal-error"),e.open({where:document.body,url:Rw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=qt(t,"network-request-failed"),c=Ht().setTimeout(()=>{i(a)},Iw.get());function l(){Ht().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
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
 */const Cw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kw=500,Dw=600,Ow="_blank",Vw="http://localhost";class Gh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Nw(t,e,n,r=kw,s=Dw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Cw),{width:r.toString(),height:s.toString(),top:i,left:a}),h=st().toLowerCase();n&&(c=Np(h)?Ow:n),Op(h)&&(e=e||Vw,l.scrollbars="yes");const f=Object.entries(l).reduce((E,[S,O])=>`${E}${S}=${O},`,"");if(rI(h)&&c!=="_self")return xw(e||"",c),new Gh(null);const g=window.open(e||"",c,f);te(g,t,"popup-blocked");try{g.focus()}catch{}return new Gh(g)}function xw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Mw="__/auth/handler",Lw="emulator/auth/handler",Fw=encodeURIComponent("fac");async function Qh(t,e,n,r,s,i){te(t.config.authDomain,t,"auth-domain-config-required"),te(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:es,eventId:s};if(e instanceof Hp){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",IE(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))a[f]=g}if(e instanceof li){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const c=a;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),h=l?`#${Fw}=${encodeURIComponent(l)}`:"";return`${Uw(t)}?${oi(c).slice(1)}${h}`}function Uw({config:t}){return t.emulator?ul(t,Lw):`https://${t.authDomain}/${Mw}`}/**
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
 */const Qa="webStorageSupport";class Bw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Yp,this._completeRedirectFn=uw,this._overrideRedirectResult=aw}async _openPopup(e,n,r,s){var i;pn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Qh(e,n,r,Ic(),s);return Nw(e,a,gl())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Qh(e,n,r,Ic(),s);return qI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(pn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Pw(e),r=new dw(e);return n.register("authEvent",s=>(te(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Qa,{type:Qa},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Qa];a!==void 0&&n(!!a),Nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_w(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Up()||Vp()||dl()}}const jw=Bw;var Jh="@firebase/auth",Yh="1.10.0";/**
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
 */class $w{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function qw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Hw(t){Jt(new Vt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;te(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Bp(t)},h=new lI(r,s,i,l);return vI(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Jt(new Vt("auth-internal",e=>{const n=Er(e.getProvider("auth").getImmediate());return(r=>new $w(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),At(Jh,Yh,qw(t)),At(Jh,Yh,"esm2017")}/**
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
 */const Kw=5*60,Ww=pp("authIdTokenMaxAge")||Kw;let Xh=null;const zw=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ww)return;const s=n==null?void 0:n.token;Xh!==s&&(Xh=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Gw(t=al()){const e=vr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=yI(t,{popupRedirectResolver:jw,persistence:[XI,BI,Yp]}),r=pp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=zw(i.toString());LI(n,a,()=>a(n.currentUser)),MI(n,c=>a(c))}}const s=dp("auth");return s&&EI(n,`http://${s}`),n}function Qw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}uI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=qt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Qw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Hw("Browser");var Jw="firebase",Yw="11.6.0";/**
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
 */At(Jw,Yw,"app");const sg="@firebase/installations",_l="0.6.13";/**
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
 */const ig=1e4,og=`w:${_l}`,ag="FIS_v2",Xw="https://firebaseinstallations.googleapis.com/v1",Zw=60*60*1e3,eA="installations",tA="Installations";/**
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
 */const nA={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},fr=new yr(eA,tA,nA);function cg(t){return t instanceof xt&&t.code.includes("request-failed")}/**
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
 */function lg({projectId:t}){return`${Xw}/projects/${t}/installations`}function ug(t){return{token:t.token,requestStatus:2,expiresIn:sA(t.expiresIn),creationTime:Date.now()}}async function hg(t,e){const r=(await e.json()).error;return fr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function dg({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function rA(t,{refreshToken:e}){const n=dg(t);return n.append("Authorization",iA(e)),n}async function fg(t){const e=await t();return e.status>=500&&e.status<600?t():e}function sA(t){return Number(t.replace("s","000"))}function iA(t){return`${ag} ${t}`}/**
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
 */async function oA({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=lg(t),s=dg(t),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={fid:n,authVersion:ag,appId:t.appId,sdkVersion:og},c={method:"POST",headers:s,body:JSON.stringify(a)},l=await fg(()=>fetch(r,c));if(l.ok){const h=await l.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:ug(h.authToken)}}else throw await hg("Create Installation",l)}/**
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
 */function pg(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function aA(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const cA=/^[cdef][\w-]{21}$/,Sc="";function lA(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=uA(t);return cA.test(n)?n:Sc}catch{return Sc}}function uA(t){return aA(t).substr(0,22)}/**
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
 */function Xo(t){return`${t.appName}!${t.appId}`}/**
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
 */const gg=new Map;function mg(t,e){const n=Xo(t);_g(n,e),hA(n,e)}function _g(t,e){const n=gg.get(t);if(n)for(const r of n)r(e)}function hA(t,e){const n=dA();n&&n.postMessage({key:t,fid:e}),fA()}let ar=null;function dA(){return!ar&&"BroadcastChannel"in self&&(ar=new BroadcastChannel("[Firebase] FID Change"),ar.onmessage=t=>{_g(t.data.key,t.data.fid)}),ar}function fA(){gg.size===0&&ar&&(ar.close(),ar=null)}/**
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
 */const pA="firebase-installations-database",gA=1,pr="firebase-installations-store";let Ja=null;function yl(){return Ja||(Ja=Ep(pA,gA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(pr)}}})),Ja}async function To(t,e){const n=Xo(t),s=(await yl()).transaction(pr,"readwrite"),i=s.objectStore(pr),a=await i.get(n);return await i.put(e,n),await s.done,(!a||a.fid!==e.fid)&&mg(t,e.fid),e}async function yg(t){const e=Xo(t),r=(await yl()).transaction(pr,"readwrite");await r.objectStore(pr).delete(e),await r.done}async function Zo(t,e){const n=Xo(t),s=(await yl()).transaction(pr,"readwrite"),i=s.objectStore(pr),a=await i.get(n),c=e(a);return c===void 0?await i.delete(n):await i.put(c,n),await s.done,c&&(!a||a.fid!==c.fid)&&mg(t,c.fid),c}/**
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
 */async function vl(t){let e;const n=await Zo(t.appConfig,r=>{const s=mA(r),i=_A(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Sc?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function mA(t){const e=t||{fid:lA(),registrationStatus:0};return vg(e)}function _A(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(fr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=yA(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:vA(t)}:{installationEntry:e}}async function yA(t,e){try{const n=await oA(t,e);return To(t.appConfig,n)}catch(n){throw cg(n)&&n.customData.serverCode===409?await yg(t.appConfig):await To(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function vA(t){let e=await Zh(t.appConfig);for(;e.registrationStatus===1;)await pg(100),e=await Zh(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await vl(t);return r||n}return e}function Zh(t){return Zo(t,e=>{if(!e)throw fr.create("installation-not-found");return vg(e)})}function vg(t){return EA(t)?{fid:t.fid,registrationStatus:0}:t}function EA(t){return t.registrationStatus===1&&t.registrationTime+ig<Date.now()}/**
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
 */async function TA({appConfig:t,heartbeatServiceProvider:e},n){const r=IA(t,n),s=rA(t,n),i=e.getImmediate({optional:!0});if(i){const h=await i.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const a={installation:{sdkVersion:og,appId:t.appId}},c={method:"POST",headers:s,body:JSON.stringify(a)},l=await fg(()=>fetch(r,c));if(l.ok){const h=await l.json();return ug(h)}else throw await hg("Generate Auth Token",l)}function IA(t,{fid:e}){return`${lg(t)}/${e}/authTokens:generate`}/**
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
 */async function El(t,e=!1){let n;const r=await Zo(t.appConfig,i=>{if(!Eg(i))throw fr.create("not-registered");const a=i.authToken;if(!e&&bA(a))return i;if(a.requestStatus===1)return n=wA(t,e),i;{if(!navigator.onLine)throw fr.create("app-offline");const c=RA(i);return n=AA(t,c),c}});return n?await n:r.authToken}async function wA(t,e){let n=await ed(t.appConfig);for(;n.authToken.requestStatus===1;)await pg(100),n=await ed(t.appConfig);const r=n.authToken;return r.requestStatus===0?El(t,e):r}function ed(t){return Zo(t,e=>{if(!Eg(e))throw fr.create("not-registered");const n=e.authToken;return PA(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function AA(t,e){try{const n=await TA(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await To(t.appConfig,r),n}catch(n){if(cg(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await yg(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await To(t.appConfig,r)}throw n}}function Eg(t){return t!==void 0&&t.registrationStatus===2}function bA(t){return t.requestStatus===2&&!SA(t)}function SA(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Zw}function RA(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function PA(t){return t.requestStatus===1&&t.requestTime+ig<Date.now()}/**
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
 */async function CA(t){const e=t,{installationEntry:n,registrationPromise:r}=await vl(e);return r?r.catch(console.error):El(e).catch(console.error),n.fid}/**
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
 */async function kA(t,e=!1){const n=t;return await DA(n),(await El(n,e)).token}async function DA(t){const{registrationPromise:e}=await vl(t);e&&await e}/**
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
 */function OA(t){if(!t||!t.options)throw Ya("App Configuration");if(!t.name)throw Ya("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ya(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ya(t){return fr.create("missing-app-config-values",{valueName:t})}/**
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
 */const Tg="installations",VA="installations-internal",NA=t=>{const e=t.getProvider("app").getImmediate(),n=OA(e),r=vr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},xA=t=>{const e=t.getProvider("app").getImmediate(),n=vr(e,Tg).getImmediate();return{getId:()=>CA(n),getToken:s=>kA(n,s)}};function MA(){Jt(new Vt(Tg,NA,"PUBLIC")),Jt(new Vt(VA,xA,"PRIVATE"))}MA();At(sg,_l);At(sg,_l,"esm2017");/**
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
 */const Io="analytics",LA="firebase_id",FA="origin",UA=60*1e3,BA="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Tl="https://www.googletagmanager.com/gtag/js";/**
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
 */const ut=new Go("@firebase/analytics");/**
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
 */const jA={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},yt=new yr("analytics","Analytics",jA);/**
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
 */function $A(t){if(!t.startsWith(Tl)){const e=yt.create("invalid-gtag-resource",{gtagURL:t});return ut.warn(e.message),""}return t}function Ig(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function qA(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function HA(t,e){const n=qA("firebase-js-sdk-policy",{createScriptURL:$A}),r=document.createElement("script"),s=`${Tl}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function KA(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function WA(t,e,n,r,s,i){const a=r[s];try{if(a)await e[a];else{const l=(await Ig(n)).find(h=>h.measurementId===s);l&&await e[l.appId]}}catch(c){ut.error(c)}t("config",s,i)}async function zA(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const c=await Ig(n);for(const l of a){const h=c.find(g=>g.measurementId===l),f=h&&e[h.appId];if(f)i.push(f);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){ut.error(i)}}function GA(t,e,n,r){async function s(i,...a){try{if(i==="event"){const[c,l]=a;await zA(t,e,n,c,l)}else if(i==="config"){const[c,l]=a;await WA(t,e,n,r,c,l)}else if(i==="consent"){const[c,l]=a;t("consent",c,l)}else if(i==="get"){const[c,l,h]=a;t("get",c,l,h)}else if(i==="set"){const[c]=a;t("set",c)}else t(i,...a)}catch(c){ut.error(c)}}return s}function QA(t,e,n,r,s){let i=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=GA(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function JA(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Tl)&&n.src.includes(t))return n;return null}/**
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
 */const YA=30,XA=1e3;class ZA{constructor(e={},n=XA){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const wg=new ZA;function eb(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function tb(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:eb(r)},i=BA.replace("{app-id}",n),a=await fetch(i,s);if(a.status!==200&&a.status!==304){let c="";try{const l=await a.json();!((e=l.error)===null||e===void 0)&&e.message&&(c=l.error.message)}catch{}throw yt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:c})}return a.json()}async function nb(t,e=wg,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw yt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw yt.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new ib;return setTimeout(async()=>{c.abort()},UA),Ag({appId:r,apiKey:s,measurementId:i},a,c,e)}async function Ag(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=wg){var i;const{appId:a,measurementId:c}=t;try{await rb(r,e)}catch(l){if(c)return ut.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:a,measurementId:c};throw l}try{const l=await tb(t);return s.deleteThrottleMetadata(a),l}catch(l){const h=l;if(!sb(h)){if(s.deleteThrottleMetadata(a),c)return ut.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:c};throw l}const f=Number((i=h==null?void 0:h.customData)===null||i===void 0?void 0:i.httpStatus)===503?bh(n,s.intervalMillis,YA):bh(n,s.intervalMillis),g={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return s.setThrottleMetadata(a,g),ut.debug(`Calling attemptFetch again in ${f} millis`),Ag(t,g,r,s)}}function rb(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(yt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function sb(t){if(!(t instanceof xt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class ib{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ob(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,a=Object.assign(Object.assign({},r),{send_to:i});t("event",n,a)}}/**
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
 */async function ab(){if(mp())try{await _p()}catch(t){return ut.warn(yt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ut.warn(yt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function cb(t,e,n,r,s,i,a){var c;const l=nb(t);l.then(S=>{n[S.measurementId]=S.appId,t.options.measurementId&&S.measurementId!==t.options.measurementId&&ut.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${S.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(S=>ut.error(S)),e.push(l);const h=ab().then(S=>{if(S)return r.getId()}),[f,g]=await Promise.all([l,h]);JA(i)||HA(i,f.measurementId),s("js",new Date);const E=(c=a==null?void 0:a.config)!==null&&c!==void 0?c:{};return E[FA]="firebase",E.update=!0,g!=null&&(E[LA]=g),s("config",f.measurementId,E),f.measurementId}/**
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
 */class lb{constructor(e){this.app=e}_delete(){return delete Ms[this.app.options.appId],Promise.resolve()}}let Ms={},td=[];const nd={};let Xa="dataLayer",ub="gtag",rd,bg,sd=!1;function hb(){const t=[];if(gp()&&t.push("This is a browser extension environment."),yE()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=yt.create("invalid-analytics-context",{errorInfo:e});ut.warn(n.message)}}function db(t,e,n){hb();const r=t.options.appId;if(!r)throw yt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ut.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw yt.create("no-api-key");if(Ms[r]!=null)throw yt.create("already-exists",{id:r});if(!sd){KA(Xa);const{wrappedGtag:i,gtagCore:a}=QA(Ms,td,nd,Xa,ub);bg=i,rd=a,sd=!0}return Ms[r]=cb(t,td,nd,e,rd,Xa,n),new lb(t)}function fb(t=al()){t=ht(t);const e=vr(t,Io);return e.isInitialized()?e.getImmediate():pb(t)}function pb(t,e={}){const n=vr(t,Io);if(n.isInitialized()){const s=n.getImmediate();if(Fn(e,n.getOptions()))return s;throw yt.create("already-initialized")}return n.initialize({options:e})}function gb(t,e,n,r){t=ht(t),ob(bg,Ms[t.app.options.appId],e,n,r).catch(s=>ut.error(s))}const id="@firebase/analytics",od="0.10.12";function mb(){Jt(new Vt(Io,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return db(r,s,n)},"PUBLIC")),Jt(new Vt("analytics-internal",t,"PRIVATE")),At(id,od),At(id,od,"esm2017");function t(e){try{const n=e.getProvider(Io).getImmediate();return{logEvent:(r,s,i)=>gb(n,r,s,i)}}catch(n){throw yt.create("interop-component-reg-failed",{reason:n})}}}mb();var ad=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xn,Sg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,m){function v(){}v.prototype=m.prototype,w.D=m.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(I,A,R){for(var y=Array(arguments.length-2),dt=2;dt<arguments.length;dt++)y[dt-2]=arguments[dt];return m.prototype[A].apply(I,y)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,m,v){v||(v=0);var I=Array(16);if(typeof m=="string")for(var A=0;16>A;++A)I[A]=m.charCodeAt(v++)|m.charCodeAt(v++)<<8|m.charCodeAt(v++)<<16|m.charCodeAt(v++)<<24;else for(A=0;16>A;++A)I[A]=m[v++]|m[v++]<<8|m[v++]<<16|m[v++]<<24;m=w.g[0],v=w.g[1],A=w.g[2];var R=w.g[3],y=m+(R^v&(A^R))+I[0]+3614090360&4294967295;m=v+(y<<7&4294967295|y>>>25),y=R+(A^m&(v^A))+I[1]+3905402710&4294967295,R=m+(y<<12&4294967295|y>>>20),y=A+(v^R&(m^v))+I[2]+606105819&4294967295,A=R+(y<<17&4294967295|y>>>15),y=v+(m^A&(R^m))+I[3]+3250441966&4294967295,v=A+(y<<22&4294967295|y>>>10),y=m+(R^v&(A^R))+I[4]+4118548399&4294967295,m=v+(y<<7&4294967295|y>>>25),y=R+(A^m&(v^A))+I[5]+1200080426&4294967295,R=m+(y<<12&4294967295|y>>>20),y=A+(v^R&(m^v))+I[6]+2821735955&4294967295,A=R+(y<<17&4294967295|y>>>15),y=v+(m^A&(R^m))+I[7]+4249261313&4294967295,v=A+(y<<22&4294967295|y>>>10),y=m+(R^v&(A^R))+I[8]+1770035416&4294967295,m=v+(y<<7&4294967295|y>>>25),y=R+(A^m&(v^A))+I[9]+2336552879&4294967295,R=m+(y<<12&4294967295|y>>>20),y=A+(v^R&(m^v))+I[10]+4294925233&4294967295,A=R+(y<<17&4294967295|y>>>15),y=v+(m^A&(R^m))+I[11]+2304563134&4294967295,v=A+(y<<22&4294967295|y>>>10),y=m+(R^v&(A^R))+I[12]+1804603682&4294967295,m=v+(y<<7&4294967295|y>>>25),y=R+(A^m&(v^A))+I[13]+4254626195&4294967295,R=m+(y<<12&4294967295|y>>>20),y=A+(v^R&(m^v))+I[14]+2792965006&4294967295,A=R+(y<<17&4294967295|y>>>15),y=v+(m^A&(R^m))+I[15]+1236535329&4294967295,v=A+(y<<22&4294967295|y>>>10),y=m+(A^R&(v^A))+I[1]+4129170786&4294967295,m=v+(y<<5&4294967295|y>>>27),y=R+(v^A&(m^v))+I[6]+3225465664&4294967295,R=m+(y<<9&4294967295|y>>>23),y=A+(m^v&(R^m))+I[11]+643717713&4294967295,A=R+(y<<14&4294967295|y>>>18),y=v+(R^m&(A^R))+I[0]+3921069994&4294967295,v=A+(y<<20&4294967295|y>>>12),y=m+(A^R&(v^A))+I[5]+3593408605&4294967295,m=v+(y<<5&4294967295|y>>>27),y=R+(v^A&(m^v))+I[10]+38016083&4294967295,R=m+(y<<9&4294967295|y>>>23),y=A+(m^v&(R^m))+I[15]+3634488961&4294967295,A=R+(y<<14&4294967295|y>>>18),y=v+(R^m&(A^R))+I[4]+3889429448&4294967295,v=A+(y<<20&4294967295|y>>>12),y=m+(A^R&(v^A))+I[9]+568446438&4294967295,m=v+(y<<5&4294967295|y>>>27),y=R+(v^A&(m^v))+I[14]+3275163606&4294967295,R=m+(y<<9&4294967295|y>>>23),y=A+(m^v&(R^m))+I[3]+4107603335&4294967295,A=R+(y<<14&4294967295|y>>>18),y=v+(R^m&(A^R))+I[8]+1163531501&4294967295,v=A+(y<<20&4294967295|y>>>12),y=m+(A^R&(v^A))+I[13]+2850285829&4294967295,m=v+(y<<5&4294967295|y>>>27),y=R+(v^A&(m^v))+I[2]+4243563512&4294967295,R=m+(y<<9&4294967295|y>>>23),y=A+(m^v&(R^m))+I[7]+1735328473&4294967295,A=R+(y<<14&4294967295|y>>>18),y=v+(R^m&(A^R))+I[12]+2368359562&4294967295,v=A+(y<<20&4294967295|y>>>12),y=m+(v^A^R)+I[5]+4294588738&4294967295,m=v+(y<<4&4294967295|y>>>28),y=R+(m^v^A)+I[8]+2272392833&4294967295,R=m+(y<<11&4294967295|y>>>21),y=A+(R^m^v)+I[11]+1839030562&4294967295,A=R+(y<<16&4294967295|y>>>16),y=v+(A^R^m)+I[14]+4259657740&4294967295,v=A+(y<<23&4294967295|y>>>9),y=m+(v^A^R)+I[1]+2763975236&4294967295,m=v+(y<<4&4294967295|y>>>28),y=R+(m^v^A)+I[4]+1272893353&4294967295,R=m+(y<<11&4294967295|y>>>21),y=A+(R^m^v)+I[7]+4139469664&4294967295,A=R+(y<<16&4294967295|y>>>16),y=v+(A^R^m)+I[10]+3200236656&4294967295,v=A+(y<<23&4294967295|y>>>9),y=m+(v^A^R)+I[13]+681279174&4294967295,m=v+(y<<4&4294967295|y>>>28),y=R+(m^v^A)+I[0]+3936430074&4294967295,R=m+(y<<11&4294967295|y>>>21),y=A+(R^m^v)+I[3]+3572445317&4294967295,A=R+(y<<16&4294967295|y>>>16),y=v+(A^R^m)+I[6]+76029189&4294967295,v=A+(y<<23&4294967295|y>>>9),y=m+(v^A^R)+I[9]+3654602809&4294967295,m=v+(y<<4&4294967295|y>>>28),y=R+(m^v^A)+I[12]+3873151461&4294967295,R=m+(y<<11&4294967295|y>>>21),y=A+(R^m^v)+I[15]+530742520&4294967295,A=R+(y<<16&4294967295|y>>>16),y=v+(A^R^m)+I[2]+3299628645&4294967295,v=A+(y<<23&4294967295|y>>>9),y=m+(A^(v|~R))+I[0]+4096336452&4294967295,m=v+(y<<6&4294967295|y>>>26),y=R+(v^(m|~A))+I[7]+1126891415&4294967295,R=m+(y<<10&4294967295|y>>>22),y=A+(m^(R|~v))+I[14]+2878612391&4294967295,A=R+(y<<15&4294967295|y>>>17),y=v+(R^(A|~m))+I[5]+4237533241&4294967295,v=A+(y<<21&4294967295|y>>>11),y=m+(A^(v|~R))+I[12]+1700485571&4294967295,m=v+(y<<6&4294967295|y>>>26),y=R+(v^(m|~A))+I[3]+2399980690&4294967295,R=m+(y<<10&4294967295|y>>>22),y=A+(m^(R|~v))+I[10]+4293915773&4294967295,A=R+(y<<15&4294967295|y>>>17),y=v+(R^(A|~m))+I[1]+2240044497&4294967295,v=A+(y<<21&4294967295|y>>>11),y=m+(A^(v|~R))+I[8]+1873313359&4294967295,m=v+(y<<6&4294967295|y>>>26),y=R+(v^(m|~A))+I[15]+4264355552&4294967295,R=m+(y<<10&4294967295|y>>>22),y=A+(m^(R|~v))+I[6]+2734768916&4294967295,A=R+(y<<15&4294967295|y>>>17),y=v+(R^(A|~m))+I[13]+1309151649&4294967295,v=A+(y<<21&4294967295|y>>>11),y=m+(A^(v|~R))+I[4]+4149444226&4294967295,m=v+(y<<6&4294967295|y>>>26),y=R+(v^(m|~A))+I[11]+3174756917&4294967295,R=m+(y<<10&4294967295|y>>>22),y=A+(m^(R|~v))+I[2]+718787259&4294967295,A=R+(y<<15&4294967295|y>>>17),y=v+(R^(A|~m))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+m&4294967295,w.g[1]=w.g[1]+(A+(y<<21&4294967295|y>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+R&4294967295}r.prototype.u=function(w,m){m===void 0&&(m=w.length);for(var v=m-this.blockSize,I=this.B,A=this.h,R=0;R<m;){if(A==0)for(;R<=v;)s(this,w,R),R+=this.blockSize;if(typeof w=="string"){for(;R<m;)if(I[A++]=w.charCodeAt(R++),A==this.blockSize){s(this,I),A=0;break}}else for(;R<m;)if(I[A++]=w[R++],A==this.blockSize){s(this,I),A=0;break}}this.h=A,this.o+=m},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var m=1;m<w.length-8;++m)w[m]=0;var v=8*this.o;for(m=w.length-8;m<w.length;++m)w[m]=v&255,v/=256;for(this.u(w),w=Array(16),m=v=0;4>m;++m)for(var I=0;32>I;I+=8)w[v++]=this.g[m]>>>I&255;return w};function i(w,m){var v=c;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=m(w)}function a(w,m){this.h=m;for(var v=[],I=!0,A=w.length-1;0<=A;A--){var R=w[A]|0;I&&R==m||(v[A]=R,I=!1)}this.g=v}var c={};function l(w){return-128<=w&&128>w?i(w,function(m){return new a([m|0],0>m?-1:0)}):new a([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return g;if(0>w)return F(h(-w));for(var m=[],v=1,I=0;w>=v;I++)m[I]=w/v|0,v*=4294967296;return new a(m,0)}function f(w,m){if(w.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(w.charAt(0)=="-")return F(f(w.substring(1),m));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(m,8)),I=g,A=0;A<w.length;A+=8){var R=Math.min(8,w.length-A),y=parseInt(w.substring(A,A+R),m);8>R?(R=h(Math.pow(m,R)),I=I.j(R).add(h(y))):(I=I.j(v),I=I.add(h(y)))}return I}var g=l(0),E=l(1),S=l(16777216);t=a.prototype,t.m=function(){if(L(this))return-F(this).m();for(var w=0,m=1,v=0;v<this.g.length;v++){var I=this.i(v);w+=(0<=I?I:4294967296+I)*m,m*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(O(this))return"0";if(L(this))return"-"+F(this).toString(w);for(var m=h(Math.pow(w,6)),v=this,I="";;){var A=K(v,m).g;v=z(v,A.j(m));var R=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=A,O(v))return R+I;for(;6>R.length;)R="0"+R;I=R+I}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function O(w){if(w.h!=0)return!1;for(var m=0;m<w.g.length;m++)if(w.g[m]!=0)return!1;return!0}function L(w){return w.h==-1}t.l=function(w){return w=z(this,w),L(w)?-1:O(w)?0:1};function F(w){for(var m=w.g.length,v=[],I=0;I<m;I++)v[I]=~w.g[I];return new a(v,~w.h).add(E)}t.abs=function(){return L(this)?F(this):this},t.add=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],I=0,A=0;A<=m;A++){var R=I+(this.i(A)&65535)+(w.i(A)&65535),y=(R>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);I=y>>>16,R&=65535,y&=65535,v[A]=y<<16|R}return new a(v,v[v.length-1]&-2147483648?-1:0)};function z(w,m){return w.add(F(m))}t.j=function(w){if(O(this)||O(w))return g;if(L(this))return L(w)?F(this).j(F(w)):F(F(this).j(w));if(L(w))return F(this.j(F(w)));if(0>this.l(S)&&0>w.l(S))return h(this.m()*w.m());for(var m=this.g.length+w.g.length,v=[],I=0;I<2*m;I++)v[I]=0;for(I=0;I<this.g.length;I++)for(var A=0;A<w.g.length;A++){var R=this.i(I)>>>16,y=this.i(I)&65535,dt=w.i(A)>>>16,yn=w.i(A)&65535;v[2*I+2*A]+=y*yn,Q(v,2*I+2*A),v[2*I+2*A+1]+=R*yn,Q(v,2*I+2*A+1),v[2*I+2*A+1]+=y*dt,Q(v,2*I+2*A+1),v[2*I+2*A+2]+=R*dt,Q(v,2*I+2*A+2)}for(I=0;I<m;I++)v[I]=v[2*I+1]<<16|v[2*I];for(I=m;I<2*m;I++)v[I]=0;return new a(v,0)};function Q(w,m){for(;(w[m]&65535)!=w[m];)w[m+1]+=w[m]>>>16,w[m]&=65535,m++}function J(w,m){this.g=w,this.h=m}function K(w,m){if(O(m))throw Error("division by zero");if(O(w))return new J(g,g);if(L(w))return m=K(F(w),m),new J(F(m.g),F(m.h));if(L(m))return m=K(w,F(m)),new J(F(m.g),m.h);if(30<w.g.length){if(L(w)||L(m))throw Error("slowDivide_ only works with positive integers.");for(var v=E,I=m;0>=I.l(w);)v=pe(v),I=pe(I);var A=_e(v,1),R=_e(I,1);for(I=_e(I,2),v=_e(v,2);!O(I);){var y=R.add(I);0>=y.l(w)&&(A=A.add(v),R=y),I=_e(I,1),v=_e(v,1)}return m=z(w,A.j(m)),new J(A,m)}for(A=g;0<=w.l(m);){for(v=Math.max(1,Math.floor(w.m()/m.m())),I=Math.ceil(Math.log(v)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),R=h(v),y=R.j(m);L(y)||0<y.l(w);)v-=I,R=h(v),y=R.j(m);O(R)&&(R=E),A=A.add(R),w=z(w,y)}return new J(A,w)}t.A=function(w){return K(this,w).h},t.and=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],I=0;I<m;I++)v[I]=this.i(I)&w.i(I);return new a(v,this.h&w.h)},t.or=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],I=0;I<m;I++)v[I]=this.i(I)|w.i(I);return new a(v,this.h|w.h)},t.xor=function(w){for(var m=Math.max(this.g.length,w.g.length),v=[],I=0;I<m;I++)v[I]=this.i(I)^w.i(I);return new a(v,this.h^w.h)};function pe(w){for(var m=w.g.length+1,v=[],I=0;I<m;I++)v[I]=w.i(I)<<1|w.i(I-1)>>>31;return new a(v,w.h)}function _e(w,m){var v=m>>5;m%=32;for(var I=w.g.length-v,A=[],R=0;R<I;R++)A[R]=0<m?w.i(R+v)>>>m|w.i(R+v+1)<<32-m:w.i(R+v);return new a(A,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Sg=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,xn=a}).apply(typeof ad<"u"?ad:typeof self<"u"?self:typeof window<"u"?window:{});var Mi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rg,Ss,Pg,Ji,Rc,Cg,kg,Dg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mi=="object"&&Mi];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var b=o[p];if(!(b in d))break e;d=d[b]}o=o[o.length-1],p=d[o],u=u(p),u!=p&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var d=0,p=!1,b={next:function(){if(!p&&d<o.length){var P=d++;return{value:u(P,o[P]),done:!1}}return p=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function l(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function g(o,u,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,p),o.apply(u,b)}}return function(){return o.apply(u,arguments)}}function E(o,u,d){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,E.apply(null,arguments)}function S(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function O(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,b,P){for(var j=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)j[Ie-2]=arguments[Ie];return u.prototype[b].apply(p,j)}}function L(o){const u=o.length;if(0<u){const d=Array(u);for(let p=0;p<u;p++)d[p]=o[p];return d}return[]}function F(o,u){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(l(p)){const b=o.length||0,P=p.length||0;o.length=b+P;for(let j=0;j<P;j++)o[b+j]=p[j]}else o.push(p)}}class z{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function Q(o){return/^[\s\xa0]*$/.test(o)}function J(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function K(o){return K[" "](o),o}K[" "]=function(){};var pe=J().indexOf("Gecko")!=-1&&!(J().toLowerCase().indexOf("webkit")!=-1&&J().indexOf("Edge")==-1)&&!(J().indexOf("Trident")!=-1||J().indexOf("MSIE")!=-1)&&J().indexOf("Edge")==-1;function _e(o,u,d){for(const p in o)u.call(d,o[p],p,o)}function w(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function m(o){const u={};for(const d in o)u[d]=o[d];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,u){let d,p;for(let b=1;b<arguments.length;b++){p=arguments[b];for(d in p)o[d]=p[d];for(let P=0;P<v.length;P++)d=v[P],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function A(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function R(o){c.setTimeout(()=>{throw o},0)}function y(){var o=St;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class dt{constructor(){this.h=this.g=null}add(u,d){const p=yn.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var yn=new z(()=>new Ue,o=>o.reset());class Ue{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Te,ge=!1,St=new dt,Qn=()=>{const o=c.Promise.resolve(void 0);Te=()=>{o.then(Zt)}};var Zt=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(d){R(d)}var u=yn;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}ge=!1};function Ve(){this.s=this.s,this.C=this.C}Ve.prototype.s=!1,Ve.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ve.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ne(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Ne.prototype.h=function(){this.defaultPrevented=!0};var ga=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return o}();function Jn(o,u){if(Ne.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(pe){e:{try{K(u.nodeName);var b=!0;break e}catch{}b=!1}b||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Yn[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Jn.aa.h.call(this)}}O(Jn,Ne);var Yn={2:"touch",3:"pen",4:"mouse"};Jn.prototype.h=function(){Jn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var en="closure_listenable_"+(1e6*Math.random()|0),os=0;function gi(o,u,d,p,b){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=b,this.key=++os,this.da=this.fa=!1}function Mt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function as(o){this.src=o,this.g={},this.h=0}as.prototype.add=function(o,u,d,p,b){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var j=T(o,u,p,b);return-1<j?(u=o[j],d||(u.fa=!1)):(u=new gi(u,this.src,P,!!p,b),u.fa=d,o.push(u)),u};function _(o,u){var d=u.type;if(d in o.g){var p=o.g[d],b=Array.prototype.indexOf.call(p,u,void 0),P;(P=0<=b)&&Array.prototype.splice.call(p,b,1),P&&(Mt(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function T(o,u,d,p){for(var b=0;b<o.length;++b){var P=o[b];if(!P.da&&P.listener==u&&P.capture==!!d&&P.ha==p)return b}return-1}var C="closure_lm_"+(1e6*Math.random()|0),N={};function D(o,u,d,p,b){if(Array.isArray(u)){for(var P=0;P<u.length;P++)D(o,u[P],d,p,b);return null}return d=ne(d),o&&o[en]?o.K(u,d,h(p)?!!p.capture:!1,b):x(o,u,d,!1,p,b)}function x(o,u,d,p,b,P){if(!u)throw Error("Invalid event type");var j=h(b)?!!b.capture:!!b,Ie=q(o);if(Ie||(o[C]=Ie=new as(o)),d=Ie.add(u,d,p,j,P),d.proxy)return d;if(p=$(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)ga||(b=j),b===void 0&&(b=!1),o.addEventListener(u.toString(),p,b);else if(o.attachEvent)o.attachEvent(M(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function $(){function o(d){return u.call(o.src,o.listener,d)}const u=Z;return o}function B(o,u,d,p,b){if(Array.isArray(u))for(var P=0;P<u.length;P++)B(o,u[P],d,p,b);else p=h(p)?!!p.capture:!!p,d=ne(d),o&&o[en]?(o=o.i,u=String(u).toString(),u in o.g&&(P=o.g[u],d=T(P,d,p,b),-1<d&&(Mt(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete o.g[u],o.h--)))):o&&(o=q(o))&&(u=o.g[u.toString()],o=-1,u&&(o=T(u,d,p,b)),(d=-1<o?u[o]:null)&&U(d))}function U(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[en])_(u.i,o);else{var d=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(d,p,o.capture):u.detachEvent?u.detachEvent(M(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=q(u))?(_(d,o),d.h==0&&(d.src=null,u[C]=null)):Mt(o)}}}function M(o){return o in N?N[o]:N[o]="on"+o}function Z(o,u){if(o.da)o=!0;else{u=new Jn(u,this);var d=o.listener,p=o.ha||o.src;o.fa&&U(o),o=d.call(p,u)}return o}function q(o){return o=o[C],o instanceof as?o:null}var G="__closure_events_fn_"+(1e9*Math.random()>>>0);function ne(o){return typeof o=="function"?o:(o[G]||(o[G]=function(u){return o.handleEvent(u)}),o[G])}function ee(){Ve.call(this),this.i=new as(this),this.M=this,this.F=null}O(ee,Ve),ee.prototype[en]=!0,ee.prototype.removeEventListener=function(o,u,d,p){B(this,o,u,d,p)};function ae(o,u){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new Ne(u,o);else if(u instanceof Ne)u.target=u.target||o;else{var b=u;u=new Ne(p,o),I(u,b)}if(b=!0,d)for(var P=d.length-1;0<=P;P--){var j=u.g=d[P];b=de(j,p,!0,u)&&b}if(j=u.g=o,b=de(j,p,!0,u)&&b,b=de(j,p,!1,u)&&b,d)for(P=0;P<d.length;P++)j=u.g=d[P],b=de(j,p,!1,u)&&b}ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],p=0;p<d.length;p++)Mt(d[p]);delete o.g[u],o.h--}}this.F=null},ee.prototype.K=function(o,u,d,p){return this.i.add(String(o),u,!1,d,p)},ee.prototype.L=function(o,u,d,p){return this.i.add(String(o),u,!0,d,p)};function de(o,u,d,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var b=!0,P=0;P<u.length;++P){var j=u[P];if(j&&!j.da&&j.capture==d){var Ie=j.listener,$e=j.ha||j.src;j.fa&&_(o.i,j),b=Ie.call($e,p)!==!1&&b}}return b&&!p.defaultPrevented}function ze(o,u,d){if(typeof o=="function")d&&(o=E(o,d));else if(o&&typeof o.handleEvent=="function")o=E(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(o,u||0)}function Be(o){o.g=ze(()=>{o.g=null,o.i&&(o.i=!1,Be(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class vt extends Ve{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Be(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ge(o){Ve.call(this),this.h=o,this.g={}}O(Ge,Ve);var vn=[];function cs(o){_e(o.g,function(u,d){this.g.hasOwnProperty(d)&&U(u)},o),o.g={}}Ge.prototype.N=function(){Ge.aa.N.call(this),cs(this)},Ge.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var je=c.JSON.stringify,Et=c.JSON.parse,mi=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function ma(){}ma.prototype.h=null;function Zl(o){return o.h||(o.h=o.i())}function eu(){}var ls={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function _a(){Ne.call(this,"d")}O(_a,Ne);function ya(){Ne.call(this,"c")}O(ya,Ne);var Xn={},tu=null;function _i(){return tu=tu||new ee}Xn.La="serverreachability";function nu(o){Ne.call(this,Xn.La,o)}O(nu,Ne);function us(o){const u=_i();ae(u,new nu(u))}Xn.STAT_EVENT="statevent";function ru(o,u){Ne.call(this,Xn.STAT_EVENT,o),this.stat=u}O(ru,Ne);function it(o){const u=_i();ae(u,new ru(u,o))}Xn.Ma="timingevent";function su(o,u){Ne.call(this,Xn.Ma,o),this.size=u}O(su,Ne);function hs(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},u)}function ds(){this.g=!0}ds.prototype.xa=function(){this.g=!1};function n_(o,u,d,p,b,P){o.info(function(){if(o.g)if(P)for(var j="",Ie=P.split("&"),$e=0;$e<Ie.length;$e++){var me=Ie[$e].split("=");if(1<me.length){var Qe=me[0];me=me[1];var Je=Qe.split("_");j=2<=Je.length&&Je[1]=="type"?j+(Qe+"="+me+"&"):j+(Qe+"=redacted&")}}else j=null;else j=P;return"XMLHTTP REQ ("+p+") [attempt "+b+"]: "+u+`
`+d+`
`+j})}function r_(o,u,d,p,b,P,j){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+b+"]: "+u+`
`+d+`
`+P+" "+j})}function br(o,u,d,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+i_(o,d)+(p?" "+p:"")})}function s_(o,u){o.info(function(){return"TIMEOUT: "+u})}ds.prototype.info=function(){};function i_(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var b=p[1];if(Array.isArray(b)&&!(1>b.length)){var P=b[0];if(P!="noop"&&P!="stop"&&P!="close")for(var j=1;j<b.length;j++)b[j]=""}}}}return je(d)}catch{return u}}var yi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},iu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},va;function vi(){}O(vi,ma),vi.prototype.g=function(){return new XMLHttpRequest},vi.prototype.i=function(){return{}},va=new vi;function En(o,u,d,p){this.j=o,this.i=u,this.l=d,this.R=p||1,this.U=new Ge(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ou}function ou(){this.i=null,this.g="",this.h=!1}var au={},Ea={};function Ta(o,u,d){o.L=1,o.v=wi(tn(u)),o.m=d,o.P=!0,cu(o,null)}function cu(o,u){o.F=Date.now(),Ei(o),o.A=tn(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Iu(d.i,"t",p),o.C=0,d=o.j.J,o.h=new ou,o.g=Bu(o.j,d?u:null,!o.m),0<o.O&&(o.M=new vt(E(o.Y,o,o.g),o.O)),u=o.U,d=o.g,p=o.ca;var b="readystatechange";Array.isArray(b)||(b&&(vn[0]=b.toString()),b=vn);for(var P=0;P<b.length;P++){var j=D(d,b[P],p||u.handleEvent,!1,u.h||u);if(!j)break;u.g[j.key]=j}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),us(),n_(o.i,o.u,o.A,o.l,o.R,o.m)}En.prototype.ca=function(o){o=o.target;const u=this.M;u&&nn(o)==3?u.j():this.Y(o)},En.prototype.Y=function(o){try{if(o==this.g)e:{const Je=nn(this.g);var u=this.g.Ba();const Pr=this.g.Z();if(!(3>Je)&&(Je!=3||this.g&&(this.h.h||this.g.oa()||Cu(this.g)))){this.J||Je!=4||u==7||(u==8||0>=Pr?us(3):us(2)),Ia(this);var d=this.g.Z();this.X=d;t:if(lu(this)){var p=Cu(this.g);o="";var b=p.length,P=nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zn(this),fs(this);var j="";break t}this.h.i=new c.TextDecoder}for(u=0;u<b;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(P&&u==b-1)});p.length=0,this.h.g+=o,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=d==200,r_(this.i,this.u,this.A,this.l,this.R,Je,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Ie,$e=this.g;if((Ie=$e.g?$e.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Q(Ie)){var me=Ie;break t}}me=null}if(d=me)br(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wa(this,d);else{this.o=!1,this.s=3,it(12),Zn(this),fs(this);break e}}if(this.P){d=!0;let Rt;for(;!this.J&&this.C<j.length;)if(Rt=o_(this,j),Rt==Ea){Je==4&&(this.s=4,it(14),d=!1),br(this.i,this.l,null,"[Incomplete Response]");break}else if(Rt==au){this.s=4,it(15),br(this.i,this.l,j,"[Invalid Chunk]"),d=!1;break}else br(this.i,this.l,Rt,null),wa(this,Rt);if(lu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Je!=4||j.length!=0||this.h.h||(this.s=1,it(16),d=!1),this.o=this.o&&d,!d)br(this.i,this.l,j,"[Invalid Chunked Response]"),Zn(this),fs(this);else if(0<j.length&&!this.W){this.W=!0;var Qe=this.j;Qe.g==this&&Qe.ba&&!Qe.M&&(Qe.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),Ca(Qe),Qe.M=!0,it(11))}}else br(this.i,this.l,j,null),wa(this,j);Je==4&&Zn(this),this.o&&!this.J&&(Je==4?Mu(this.j,this):(this.o=!1,Ei(this)))}else w_(this.g),d==400&&0<j.indexOf("Unknown SID")?(this.s=3,it(12)):(this.s=0,it(13)),Zn(this),fs(this)}}}catch{}finally{}};function lu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function o_(o,u){var d=o.C,p=u.indexOf(`
`,d);return p==-1?Ea:(d=Number(u.substring(d,p)),isNaN(d)?au:(p+=1,p+d>u.length?Ea:(u=u.slice(p,p+d),o.C=p+d,u)))}En.prototype.cancel=function(){this.J=!0,Zn(this)};function Ei(o){o.S=Date.now()+o.I,uu(o,o.I)}function uu(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=hs(E(o.ba,o),u)}function Ia(o){o.B&&(c.clearTimeout(o.B),o.B=null)}En.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(s_(this.i,this.A),this.L!=2&&(us(),it(17)),Zn(this),this.s=2,fs(this)):uu(this,this.S-o)};function fs(o){o.j.G==0||o.J||Mu(o.j,o)}function Zn(o){Ia(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,cs(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function wa(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||Aa(d.h,o))){if(!o.K&&Aa(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var b=p;if(b[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Ci(d),Ri(d);else break e;Pa(d),it(18)}}else d.za=b[1],0<d.za-d.T&&37500>b[2]&&d.F&&d.v==0&&!d.C&&(d.C=hs(E(d.Za,d),6e3));if(1>=fu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else tr(d,11)}else if((o.K||d.g==o)&&Ci(d),!Q(u))for(b=d.Da.g.parse(u),u=0;u<b.length;u++){let me=b[u];if(d.T=me[0],me=me[1],d.G==2)if(me[0]=="c"){d.K=me[1],d.ia=me[2];const Qe=me[3];Qe!=null&&(d.la=Qe,d.j.info("VER="+d.la));const Je=me[4];Je!=null&&(d.Aa=Je,d.j.info("SVER="+d.Aa));const Pr=me[5];Pr!=null&&typeof Pr=="number"&&0<Pr&&(p=1.5*Pr,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Rt=o.g;if(Rt){const Di=Rt.g?Rt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Di){var P=p.h;P.g||Di.indexOf("spdy")==-1&&Di.indexOf("quic")==-1&&Di.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(ba(P,P.h),P.h=null))}if(p.D){const ka=Rt.g?Rt.g.getResponseHeader("X-HTTP-Session-Id"):null;ka&&(p.ya=ka,be(p.I,p.D,ka))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var j=o;if(p.qa=Uu(p,p.J?p.ia:null,p.W),j.K){pu(p.h,j);var Ie=j,$e=p.L;$e&&(Ie.I=$e),Ie.B&&(Ia(Ie),Ei(Ie)),p.g=j}else Nu(p);0<d.i.length&&Pi(d)}else me[0]!="stop"&&me[0]!="close"||tr(d,7);else d.G==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?tr(d,7):Ra(d):me[0]!="noop"&&d.l&&d.l.ta(me),d.v=0)}}us(4)}catch{}}var a_=class{constructor(o,u){this.g=o,this.map=u}};function hu(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function du(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function fu(o){return o.h?1:o.g?o.g.size:0}function Aa(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function ba(o,u){o.g?o.g.add(u):o.h=u}function pu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}hu.prototype.cancel=function(){if(this.i=gu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function gu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return L(o.i)}function c_(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var u=[],d=o.length,p=0;p<d;p++)u.push(o[p]);return u}u=[],d=0;for(p in o)u[d++]=o[p];return u}function l_(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const p in o)u[d++]=p;return u}}}function mu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=l_(o),p=c_(o),b=p.length,P=0;P<b;P++)u.call(void 0,p[P],d&&d[P],o)}var _u=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function u_(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),b=null;if(0<=p){var P=o[d].substring(0,p);b=o[d].substring(p+1)}else P=o[d];u(P,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function er(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof er){this.h=o.h,Ti(this,o.j),this.o=o.o,this.g=o.g,Ii(this,o.s),this.l=o.l;var u=o.i,d=new ms;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),yu(this,d),this.m=o.m}else o&&(u=String(o).match(_u))?(this.h=!1,Ti(this,u[1]||"",!0),this.o=ps(u[2]||""),this.g=ps(u[3]||"",!0),Ii(this,u[4]),this.l=ps(u[5]||"",!0),yu(this,u[6]||"",!0),this.m=ps(u[7]||"")):(this.h=!1,this.i=new ms(null,this.h))}er.prototype.toString=function(){var o=[],u=this.j;u&&o.push(gs(u,vu,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(gs(u,vu,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(gs(d,d.charAt(0)=="/"?f_:d_,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",gs(d,g_)),o.join("")};function tn(o){return new er(o)}function Ti(o,u,d){o.j=d?ps(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ii(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function yu(o,u,d){u instanceof ms?(o.i=u,m_(o.i,o.h)):(d||(u=gs(u,p_)),o.i=new ms(u,o.h))}function be(o,u,d){o.i.set(u,d)}function wi(o){return be(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function ps(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function gs(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,h_),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function h_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var vu=/[#\/\?@]/g,d_=/[#\?:]/g,f_=/[#\?]/g,p_=/[#\?@]/g,g_=/#/g;function ms(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Tn(o){o.g||(o.g=new Map,o.h=0,o.i&&u_(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=ms.prototype,t.add=function(o,u){Tn(this),this.i=null,o=Sr(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Eu(o,u){Tn(o),u=Sr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Tu(o,u){return Tn(o),u=Sr(o,u),o.g.has(u)}t.forEach=function(o,u){Tn(this),this.g.forEach(function(d,p){d.forEach(function(b){o.call(u,b,p,this)},this)},this)},t.na=function(){Tn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let p=0;p<u.length;p++){const b=o[p];for(let P=0;P<b.length;P++)d.push(u[p])}return d},t.V=function(o){Tn(this);let u=[];if(typeof o=="string")Tu(this,o)&&(u=u.concat(this.g.get(Sr(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},t.set=function(o,u){return Tn(this),this.i=null,o=Sr(this,o),Tu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Iu(o,u,d){Eu(o,u),0<d.length&&(o.i=null,o.g.set(Sr(o,u),L(d)),o.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var p=u[d];const P=encodeURIComponent(String(p)),j=this.V(p);for(p=0;p<j.length;p++){var b=P;j[p]!==""&&(b+="="+encodeURIComponent(String(j[p]))),o.push(b)}}return this.i=o.join("&")};function Sr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function m_(o,u){u&&!o.j&&(Tn(o),o.i=null,o.g.forEach(function(d,p){var b=p.toLowerCase();p!=b&&(Eu(this,p),Iu(this,b,d))},o)),o.j=u}function __(o,u){const d=new ds;if(c.Image){const p=new Image;p.onload=S(In,d,"TestLoadImage: loaded",!0,u,p),p.onerror=S(In,d,"TestLoadImage: error",!1,u,p),p.onabort=S(In,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=S(In,d,"TestLoadImage: timeout",!1,u,p),c.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function y_(o,u){const d=new ds,p=new AbortController,b=setTimeout(()=>{p.abort(),In(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(P=>{clearTimeout(b),P.ok?In(d,"TestPingServer: ok",!0,u):In(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(b),In(d,"TestPingServer: error",!1,u)})}function In(o,u,d,p,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),p(d)}catch{}}function v_(){this.g=new mi}function E_(o,u,d){const p=d||"";try{mu(o,function(b,P){let j=b;h(b)&&(j=je(b)),u.push(p+P+"="+encodeURIComponent(j))})}catch(b){throw u.push(p+"type="+encodeURIComponent("_badmap")),b}}function Ai(o){this.l=o.Ub||null,this.j=o.eb||!1}O(Ai,ma),Ai.prototype.g=function(){return new bi(this.l,this.j)},Ai.prototype.i=function(o){return function(){return o}}({});function bi(o,u){ee.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}O(bi,ee),t=bi.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,ys(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_s(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ys(this)),this.g&&(this.readyState=3,ys(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;wu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function wu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?_s(this):ys(this),this.readyState==3&&wu(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,_s(this))},t.Qa=function(o){this.g&&(this.response=o,_s(this))},t.ga=function(){this.g&&_s(this)};function _s(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ys(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function ys(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(bi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Au(o){let u="";return _e(o,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function Sa(o,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Au(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):be(o,u,d))}function Ce(o){ee.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}O(Ce,ee);var T_=/^https?$/i,I_=["POST","PUT"];t=Ce.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():va.g(),this.v=this.o?Zl(this.o):Zl(va),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){bu(this,P);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var b in p)d.set(b,p[b]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const P of p.keys())d.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),b=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(I_,u,void 0))||p||b||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,j]of d)this.g.setRequestHeader(P,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Pu(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){bu(this,P)}};function bu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Su(o),Si(o)}function Su(o){o.A||(o.A=!0,ae(o,"complete"),ae(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ae(this,"complete"),ae(this,"abort"),Si(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Si(this,!0)),Ce.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ru(this):this.bb())},t.bb=function(){Ru(this)};function Ru(o){if(o.h&&typeof a<"u"&&(!o.v[1]||nn(o)!=4||o.Z()!=2)){if(o.u&&nn(o)==4)ze(o.Ea,0,o);else if(ae(o,"readystatechange"),nn(o)==4){o.h=!1;try{const j=o.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=j===0){var b=String(o.D).match(_u)[1]||null;!b&&c.self&&c.self.location&&(b=c.self.location.protocol.slice(0,-1)),p=!T_.test(b?b.toLowerCase():"")}d=p}if(d)ae(o,"complete"),ae(o,"success");else{o.m=6;try{var P=2<nn(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",Su(o)}}finally{Si(o)}}}}function Si(o,u){if(o.g){Pu(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ae(o,"ready");try{d.onreadystatechange=p}catch{}}}function Pu(o){o.I&&(c.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function nn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<nn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Et(u)}};function Cu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function w_(o){const u={};o=(o.g&&2<=nn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(Q(o[p]))continue;var d=A(o[p]);const b=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=u[b]||[];u[b]=P,P.push(d)}w(u,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function vs(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function ku(o){this.Aa=0,this.i=[],this.j=new ds,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=vs("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=vs("baseRetryDelayMs",5e3,o),this.cb=vs("retryDelaySeedMs",1e4,o),this.Wa=vs("forwardChannelMaxRetries",2,o),this.wa=vs("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new hu(o&&o.concurrentRequestLimit),this.Da=new v_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=ku.prototype,t.la=8,t.G=1,t.connect=function(o,u,d,p){it(0),this.W=o,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Uu(this,null,this.W),Pi(this)};function Ra(o){if(Du(o),o.G==3){var u=o.U++,d=tn(o.I);if(be(d,"SID",o.K),be(d,"RID",u),be(d,"TYPE","terminate"),Es(o,d),u=new En(o,o.j,u),u.L=2,u.v=wi(tn(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=Bu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ei(u)}Fu(o)}function Ri(o){o.g&&(Ca(o),o.g.cancel(),o.g=null)}function Du(o){Ri(o),o.u&&(c.clearTimeout(o.u),o.u=null),Ci(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Pi(o){if(!du(o.h)&&!o.s){o.s=!0;var u=o.Ga;Te||Qn(),ge||(Te(),ge=!0),St.add(u,o),o.B=0}}function A_(o,u){return fu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=hs(E(o.Ga,o,u),Lu(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const b=new En(this,this.j,o);let P=this.o;if(this.S&&(P?(P=m(P),I(P,this.S)):P=this.S),this.m!==null||this.O||(b.H=P,P=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Vu(this,b,u),d=tn(this.I),be(d,"RID",o),be(d,"CVER",22),this.D&&be(d,"X-HTTP-Session-Id",this.D),Es(this,d),P&&(this.O?u="headers="+encodeURIComponent(String(Au(P)))+"&"+u:this.m&&Sa(d,this.m,P)),ba(this.h,b),this.Ua&&be(d,"TYPE","init"),this.P?(be(d,"$req",u),be(d,"SID","null"),b.T=!0,Ta(b,d,null)):Ta(b,d,u),this.G=2}}else this.G==3&&(o?Ou(this,o):this.i.length==0||du(this.h)||Ou(this))};function Ou(o,u){var d;u?d=u.l:d=o.U++;const p=tn(o.I);be(p,"SID",o.K),be(p,"RID",d),be(p,"AID",o.T),Es(o,p),o.m&&o.o&&Sa(p,o.m,o.o),d=new En(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Vu(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ba(o.h,d),Ta(d,p,u)}function Es(o,u){o.H&&_e(o.H,function(d,p){be(u,p,d)}),o.l&&mu({},function(d,p){be(u,p,d)})}function Vu(o,u,d){d=Math.min(o.i.length,d);var p=o.l?E(o.l.Na,o.l,o):null;e:{var b=o.i;let P=-1;for(;;){const j=["count="+d];P==-1?0<d?(P=b[0].g,j.push("ofs="+P)):P=0:j.push("ofs="+P);let Ie=!0;for(let $e=0;$e<d;$e++){let me=b[$e].g;const Qe=b[$e].map;if(me-=P,0>me)P=Math.max(0,b[$e].g-100),Ie=!1;else try{E_(Qe,j,"req"+me+"_")}catch{p&&p(Qe)}}if(Ie){p=j.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,p}function Nu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Te||Qn(),ge||(Te(),ge=!0),St.add(u,o),o.v=0}}function Pa(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=hs(E(o.Fa,o),Lu(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,xu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=hs(E(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,it(10),Ri(this),xu(this))};function Ca(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function xu(o){o.g=new En(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=tn(o.qa);be(u,"RID","rpc"),be(u,"SID",o.K),be(u,"AID",o.T),be(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&be(u,"TO",o.ja),be(u,"TYPE","xmlhttp"),Es(o,u),o.m&&o.o&&Sa(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=wi(tn(u)),d.m=null,d.P=!0,cu(d,o)}t.Za=function(){this.C!=null&&(this.C=null,Ri(this),Pa(this),it(19))};function Ci(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Mu(o,u){var d=null;if(o.g==u){Ci(o),Ca(o),o.g=null;var p=2}else if(Aa(o.h,u))d=u.D,pu(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var b=o.B;p=_i(),ae(p,new su(p,d)),Pi(o)}else Nu(o);else if(b=u.s,b==3||b==0&&0<u.X||!(p==1&&A_(o,u)||p==2&&Pa(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),b){case 1:tr(o,5);break;case 4:tr(o,10);break;case 3:tr(o,6);break;default:tr(o,2)}}}function Lu(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function tr(o,u){if(o.j.info("Error code "+u),u==2){var d=E(o.fb,o),p=o.Xa;const b=!p;p=new er(p||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ti(p,"https"),wi(p),b?__(p.toString(),d):y_(p.toString(),d)}else it(2);o.G=0,o.l&&o.l.sa(u),Fu(o),Du(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Fu(o){if(o.G=0,o.ka=[],o.l){const u=gu(o.h);(u.length!=0||o.i.length!=0)&&(F(o.ka,u),F(o.ka,o.i),o.h.i.length=0,L(o.i),o.i.length=0),o.l.ra()}}function Uu(o,u,d){var p=d instanceof er?tn(d):new er(d);if(p.g!="")u&&(p.g=u+"."+p.g),Ii(p,p.s);else{var b=c.location;p=b.protocol,u=u?u+"."+b.hostname:b.hostname,b=+b.port;var P=new er(null);p&&Ti(P,p),u&&(P.g=u),b&&Ii(P,b),d&&(P.l=d),p=P}return d=o.D,u=o.ya,d&&u&&be(p,d,u),be(p,"VER",o.la),Es(o,p),p}function Bu(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Ce(new Ai({eb:d})):new Ce(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ju(){}t=ju.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ki(){}ki.prototype.g=function(o,u){return new ft(o,u)};function ft(o,u){ee.call(this),this.g=new ku(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!Q(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!Q(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Rr(this)}O(ft,ee),ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ft.prototype.close=function(){Ra(this.g)},ft.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=je(o),o=d);u.i.push(new a_(u.Ya++,o)),u.G==3&&Pi(u)},ft.prototype.N=function(){this.g.l=null,delete this.j,Ra(this.g),delete this.g,ft.aa.N.call(this)};function $u(o){_a.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}O($u,_a);function qu(){ya.call(this),this.status=1}O(qu,ya);function Rr(o){this.g=o}O(Rr,ju),Rr.prototype.ua=function(){ae(this.g,"a")},Rr.prototype.ta=function(o){ae(this.g,new $u(o))},Rr.prototype.sa=function(o){ae(this.g,new qu)},Rr.prototype.ra=function(){ae(this.g,"b")},ki.prototype.createWebChannel=ki.prototype.g,ft.prototype.send=ft.prototype.o,ft.prototype.open=ft.prototype.m,ft.prototype.close=ft.prototype.close,Dg=function(){return new ki},kg=function(){return _i()},Cg=Xn,Rc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},yi.NO_ERROR=0,yi.TIMEOUT=8,yi.HTTP_ERROR=6,Ji=yi,iu.COMPLETE="complete",Pg=iu,eu.EventType=ls,ls.OPEN="a",ls.CLOSE="b",ls.ERROR="c",ls.MESSAGE="d",ee.prototype.listen=ee.prototype.K,Ss=eu,Ce.prototype.listenOnce=Ce.prototype.L,Ce.prototype.getLastError=Ce.prototype.Ka,Ce.prototype.getLastErrorCode=Ce.prototype.Ba,Ce.prototype.getStatus=Ce.prototype.Z,Ce.prototype.getResponseJson=Ce.prototype.Oa,Ce.prototype.getResponseText=Ce.prototype.oa,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Ha,Rg=Ce}).apply(typeof Mi<"u"?Mi:typeof self<"u"?self:typeof window<"u"?window:{});const cd="@firebase/firestore",ld="4.7.10";/**
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
 */class Xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
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
 */let ns="11.5.0";/**
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
 */const gr=new Go("@firebase/firestore");function Dr(){return gr.logLevel}function H(t,...e){if(gr.logLevel<=ue.DEBUG){const n=e.map(Il);gr.debug(`Firestore (${ns}): ${t}`,...n)}}function gn(t,...e){if(gr.logLevel<=ue.ERROR){const n=e.map(Il);gr.error(`Firestore (${ns}): ${t}`,...n)}}function zr(t,...e){if(gr.logLevel<=ue.WARN){const n=e.map(Il);gr.warn(`Firestore (${ns}): ${t}`,...n)}}function Il(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function re(t="Unexpected state"){const e=`FIRESTORE (${ns}) INTERNAL ASSERTION FAILED: `+t;throw gn(e),new Error(e)}function Ee(t,e){t||re()}function oe(t,e){return t}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends xt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Mn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Og{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _b{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Xe.UNAUTHENTICATED))}shutdown(){}}class yb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class vb{constructor(e){this.t=e,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ee(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Mn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Mn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Mn)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ee(typeof r.accessToken=="string"),new Og(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ee(e===null||typeof e=="string"),new Xe(e)}}class Eb{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class Tb{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Eb(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ud{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ib{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Tt(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){Ee(this.o===void 0);const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,H("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new ud(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ee(typeof n.token=="string"),this.R=n.token,new ud(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function wb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function Vg(){return new TextEncoder}/**
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
 */class Ng{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=wb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function Pc(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return le(r,s);{const i=Vg(),a=Ab(i.encode(hd(t,n)),i.encode(hd(e,n)));return a!==0?a:le(r,s)}}n+=r>65535?2:1}return le(t.length,e.length)}function hd(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function Ab(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return le(t[n],e[n]);return le(t.length,e.length)}function Gr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const dd=-62135596800,fd=1e6;class Me{static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*fd);return new Me(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<dd)throw new Y(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/fd}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-dd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ie{static fromTimestamp(e){return new ie(e)}static min(){return new ie(new Me(0,0))}static max(){return new ie(new Me(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const pd="__name__";class Ut{constructor(e,n,r){n===void 0?n=0:n>e.length&&re(),r===void 0?r=e.length-n:r>e.length-n&&re(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ut.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ut?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Ut.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return le(e.length,n.length)}static compareSegments(e,n){const r=Ut.isNumericId(e),s=Ut.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Ut.extractNumericId(e).compare(Ut.extractNumericId(n)):Pc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return xn.fromString(e.substring(4,e.length-2))}}class Re extends Ut{construct(e,n,r){return new Re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Re(n)}static emptyPath(){return new Re([])}}const bb=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends Ut{construct(e,n,r){return new Ke(e,n,r)}static isValidIdentifier(e){return bb.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===pd}static keyField(){return new Ke([pd])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Y(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Y(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new Y(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(n)}static emptyPath(){return new Ke([])}}/**
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
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Re.fromString(e))}static fromName(e){return new X(Re.fromString(e).popFirst(5))}static empty(){return new X(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Re(e.slice()))}}/**
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
 */const Js=-1;function Sb(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ie.fromTimestamp(r===1e9?new Me(n+1,0):new Me(n,r));return new Un(s,X.empty(),e)}function Rb(t){return new Un(t.readTime,t.key,Js)}class Un{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Un(ie.min(),X.empty(),Js)}static max(){return new Un(ie.max(),X.empty(),Js)}}function Pb(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
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
 */const Cb="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kb{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function rs(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==Cb)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&re(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,r)=>{n(e)})}static reject(e){return new k((n,r)=>{r(e)})}static waitFor(e){return new k((n,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&n()},l=>r(l))}),a=!0,i===s&&n()})}static or(e){let n=k.resolve(!1);for(const r of e)n=n.next(s=>s?k.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new k((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(f=>{a[h]=f,++c,c===i&&r(a)},f=>s(f))}})}static doWhile(e,n){return new k((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Db(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ss(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ea{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}ea.ae=-1;/**
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
 */const wl=-1;function ta(t){return t==null}function wo(t){return t===0&&1/t==-1/0}function Ob(t){return typeof t=="number"&&Number.isInteger(t)&&!wo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const xg="";function Vb(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=gd(e)),e=Nb(t.get(n),e);return gd(e)}function Nb(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case xg:n+="";break;default:n+=i}}return n}function gd(t){return t+xg+""}/**
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
 */function md(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Tr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Mg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Pe{constructor(e,n){this.comparator=e,this.root=n||He.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,He.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,He.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Li(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Li(this.root,e,this.comparator,!1)}getReverseIterator(){return new Li(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Li(this.root,e,this.comparator,!0)}}class Li{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class He{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??He.RED,this.left=s??He.EMPTY,this.right=i??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new He(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return He.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw re();const e=this.left.check();if(e!==this.right.check())throw re();return e+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw re()}get value(){throw re()}get color(){throw re()}get left(){throw re()}get right(){throw re()}copy(e,n,r,s,i){return this}insert(e,n,r){return new He(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Le{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new _d(this.data.getIterator())}getIteratorFrom(e){return new _d(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Le)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Le(this.comparator);return n.data=e,n}}class _d{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class kt{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new kt([])}unionWith(e){let n=new Le(Ke.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new kt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Gr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Lg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class We{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Lg("Invalid base64 string: "+i):i}}(e);return new We(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new We(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}We.EMPTY_BYTE_STRING=new We("");const xb=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bn(t){if(Ee(!!t),typeof t=="string"){let e=0;const n=xb.exec(t);if(Ee(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function jn(t){return typeof t=="string"?We.fromBase64String(t):We.fromUint8Array(t)}/**
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
 */const Fg="server_timestamp",Ug="__type__",Bg="__previous_value__",jg="__local_write_time__";function Al(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ug])===null||n===void 0?void 0:n.stringValue)===Fg}function na(t){const e=t.mapValue.fields[Bg];return Al(e)?na(e):e}function Ys(t){const e=Bn(t.mapValue.fields[jg].timestampValue);return new Me(e.seconds,e.nanos)}/**
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
 */class Mb{constructor(e,n,r,s,i,a,c,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}const Ao="(default)";class Xs{constructor(e,n){this.projectId=e,this.database=n||Ao}static empty(){return new Xs("","")}get isDefaultDatabase(){return this.database===Ao}isEqual(e){return e instanceof Xs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const $g="__type__",Lb="__max__",Fi={mapValue:{}},qg="__vector__",bo="value";function $n(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Al(t)?4:Ub(t)?9007199254740991:Fb(t)?10:11:re()}function Yt(t,e){if(t===e)return!0;const n=$n(t);if(n!==$n(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ys(t).isEqual(Ys(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Bn(s.timestampValue),c=Bn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return jn(s.bytesValue).isEqual(jn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ke(s.geoPointValue.latitude)===ke(i.geoPointValue.latitude)&&ke(s.geoPointValue.longitude)===ke(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ke(s.integerValue)===ke(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ke(s.doubleValue),c=ke(i.doubleValue);return a===c?wo(a)===wo(c):isNaN(a)&&isNaN(c)}return!1}(t,e);case 9:return Gr(t.arrayValue.values||[],e.arrayValue.values||[],Yt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(md(a)!==md(c))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(c[l]===void 0||!Yt(a[l],c[l])))return!1;return!0}(t,e);default:return re()}}function Zs(t,e){return(t.values||[]).find(n=>Yt(n,e))!==void 0}function Qr(t,e){if(t===e)return 0;const n=$n(t),r=$n(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(i,a){const c=ke(i.integerValue||i.doubleValue),l=ke(a.integerValue||a.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return yd(t.timestampValue,e.timestampValue);case 4:return yd(Ys(t),Ys(e));case 5:return Pc(t.stringValue,e.stringValue);case 6:return function(i,a){const c=jn(i),l=jn(a);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),l=a.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=le(c[h],l[h]);if(f!==0)return f}return le(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const c=le(ke(i.latitude),ke(a.latitude));return c!==0?c:le(ke(i.longitude),ke(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return vd(t.arrayValue,e.arrayValue);case 10:return function(i,a){var c,l,h,f;const g=i.fields||{},E=a.fields||{},S=(c=g[bo])===null||c===void 0?void 0:c.arrayValue,O=(l=E[bo])===null||l===void 0?void 0:l.arrayValue,L=le(((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0,((f=O==null?void 0:O.values)===null||f===void 0?void 0:f.length)||0);return L!==0?L:vd(S,O)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===Fi.mapValue&&a===Fi.mapValue)return 0;if(i===Fi.mapValue)return 1;if(a===Fi.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=a.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let g=0;g<l.length&&g<f.length;++g){const E=Pc(l[g],f[g]);if(E!==0)return E;const S=Qr(c[l[g]],h[f[g]]);if(S!==0)return S}return le(l.length,f.length)}(t.mapValue,e.mapValue);default:throw re()}}function yd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=Bn(t),r=Bn(e),s=le(n.seconds,r.seconds);return s!==0?s:le(n.nanos,r.nanos)}function vd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Qr(n[s],r[s]);if(i)return i}return le(n.length,r.length)}function Jr(t){return Cc(t)}function Cc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Bn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return jn(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Cc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Cc(n.fields[a])}`;return s+"}"}(t.mapValue):re()}function Yi(t){switch($n(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=na(t);return e?16+Yi(e):16;case 5:return 2*t.stringValue.length;case 6:return jn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Yi(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Tr(r.fields,(i,a)=>{s+=i.length+Yi(a)}),s}(t.mapValue);default:throw re()}}function kc(t){return!!t&&"integerValue"in t}function bl(t){return!!t&&"arrayValue"in t}function Ed(t){return!!t&&"nullValue"in t}function Td(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Xi(t){return!!t&&"mapValue"in t}function Fb(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[$g])===null||n===void 0?void 0:n.stringValue)===qg}function Ls(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Tr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ls(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ls(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ub(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Lb}/**
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
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Xi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ls(n)}setAll(e){let n=Ke.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}a?r[c.lastSegment()]=Ls(a):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Xi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Yt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Xi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Tr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new It(Ls(this.value))}}function Hg(t){const e=[];return Tr(t.fields,(n,r)=>{const s=new Ke([n]);if(Xi(r)){const i=Hg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new kt(e)}/**
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
 */class tt{constructor(e,n,r,s,i,a,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new tt(e,0,ie.min(),ie.min(),ie.min(),It.empty(),0)}static newFoundDocument(e,n,r,s){return new tt(e,1,n,ie.min(),r,s,0)}static newNoDocument(e,n){return new tt(e,2,n,ie.min(),ie.min(),It.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,ie.min(),ie.min(),It.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class So{constructor(e,n){this.position=e,this.inclusive=n}}function Id(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(a.referenceValue),n.key):r=Qr(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function wd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Yt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ro{constructor(e,n="asc"){this.field=e,this.dir=n}}function Bb(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Kg{}class xe extends Kg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new $b(e,n,r):n==="array-contains"?new Kb(e,r):n==="in"?new Wb(e,r):n==="not-in"?new zb(e,r):n==="array-contains-any"?new Gb(e,r):new xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new qb(e,r):new Hb(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Qr(n,this.value)):n!==null&&$n(this.value)===$n(n)&&this.matchesComparison(Qr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return re()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xt extends Kg{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Xt(e,n)}matches(e){return Wg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Wg(t){return t.op==="and"}function zg(t){return jb(t)&&Wg(t)}function jb(t){for(const e of t.filters)if(e instanceof Xt)return!1;return!0}function Dc(t){if(t instanceof xe)return t.field.canonicalString()+t.op.toString()+Jr(t.value);if(zg(t))return t.filters.map(e=>Dc(e)).join(",");{const e=t.filters.map(n=>Dc(n)).join(",");return`${t.op}(${e})`}}function Gg(t,e){return t instanceof xe?function(r,s){return s instanceof xe&&r.op===s.op&&r.field.isEqual(s.field)&&Yt(r.value,s.value)}(t,e):t instanceof Xt?function(r,s){return s instanceof Xt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Gg(a,s.filters[c]),!0):!1}(t,e):void re()}function Qg(t){return t instanceof xe?function(n){return`${n.field.canonicalString()} ${n.op} ${Jr(n.value)}`}(t):t instanceof Xt?function(n){return n.op.toString()+" {"+n.getFilters().map(Qg).join(" ,")+"}"}(t):"Filter"}class $b extends xe{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class qb extends xe{constructor(e,n){super(e,"in",n),this.keys=Jg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Hb extends xe{constructor(e,n){super(e,"not-in",n),this.keys=Jg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Jg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class Kb extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return bl(n)&&Zs(n.arrayValue,this.value)}}class Wb extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Zs(this.value.arrayValue,n)}}class zb extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Zs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Zs(this.value.arrayValue,n)}}class Gb extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!bl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Zs(this.value.arrayValue,r))}}/**
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
 */class Qb{constructor(e,n=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.le=null}}function Ad(t,e=null,n=[],r=[],s=null,i=null,a=null){return new Qb(t,e,n,r,s,i,a)}function Sl(t){const e=oe(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Dc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ta(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Jr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Jr(r)).join(",")),e.le=n}return e.le}function Rl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Bb(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Gg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!wd(t.startAt,e.startAt)&&wd(t.endAt,e.endAt)}function Oc(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ra{constructor(e,n=null,r=[],s=[],i=null,a="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=l,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function Jb(t,e,n,r,s,i,a,c){return new ra(t,e,n,r,s,i,a,c)}function Yg(t){return new ra(t)}function bd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Yb(t){return t.collectionGroup!==null}function Fs(t){const e=oe(t);if(e.he===null){e.he=[];const n=new Set;for(const i of e.explicitOrderBy)e.he.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Le(Ke.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.he.push(new Ro(i,r))}),n.has(Ke.keyField().canonicalString())||e.he.push(new Ro(Ke.keyField(),r))}return e.he}function Kt(t){const e=oe(t);return e.Pe||(e.Pe=Xb(e,Fs(t))),e.Pe}function Xb(t,e){if(t.limitType==="F")return Ad(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ro(s.field,i)});const n=t.endAt?new So(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new So(t.startAt.position,t.startAt.inclusive):null;return Ad(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Vc(t,e,n){return new ra(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function sa(t,e){return Rl(Kt(t),Kt(e))&&t.limitType===e.limitType}function Xg(t){return`${Sl(Kt(t))}|lt:${t.limitType}`}function Or(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Qg(s)).join(", ")}]`),ta(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Jr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Jr(s)).join(",")),`Target(${r})`}(Kt(t))}; limitType=${t.limitType})`}function ia(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Fs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,c,l){const h=Id(a,c,l);return a.inclusive?h<=0:h<0}(r.startAt,Fs(r),s)||r.endAt&&!function(a,c,l){const h=Id(a,c,l);return a.inclusive?h>=0:h>0}(r.endAt,Fs(r),s))}(t,e)}function Zb(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Zg(t){return(e,n)=>{let r=!1;for(const s of Fs(t)){const i=eS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function eS(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(i,a,c){const l=a.data.field(i),h=c.data.field(i);return l!==null&&h!==null?Qr(l,h):re()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return re()}}/**
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
 */class Ir{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Tr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Mg(this.inner)}size(){return this.innerSize}}/**
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
 */const tS=new Pe(X.comparator);function mn(){return tS}const em=new Pe(X.comparator);function Rs(...t){let e=em;for(const n of t)e=e.insert(n.key,n);return e}function tm(t){let e=em;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function cr(){return Us()}function nm(){return Us()}function Us(){return new Ir(t=>t.toString(),(t,e)=>t.isEqual(e))}const nS=new Pe(X.comparator),rS=new Le(X.comparator);function he(...t){let e=rS;for(const n of t)e=e.add(n);return e}const sS=new Le(le);function iS(){return sS}/**
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
 */function Pl(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wo(e)?"-0":e}}function rm(t){return{integerValue:""+t}}function oS(t,e){return Ob(e)?rm(e):Pl(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class oa{constructor(){this._=void 0}}function aS(t,e,n){return t instanceof Po?function(s,i){const a={fields:{[Ug]:{stringValue:Fg},[jg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Al(i)&&(i=na(i)),i&&(a.fields[Bg]=i),{mapValue:a}}(n,e):t instanceof ei?im(t,e):t instanceof ti?om(t,e):function(s,i){const a=sm(s,i),c=Sd(a)+Sd(s.Ie);return kc(a)&&kc(s.Ie)?rm(c):Pl(s.serializer,c)}(t,e)}function cS(t,e,n){return t instanceof ei?im(t,e):t instanceof ti?om(t,e):n}function sm(t,e){return t instanceof Co?function(r){return kc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Po extends oa{}class ei extends oa{constructor(e){super(),this.elements=e}}function im(t,e){const n=am(e);for(const r of t.elements)n.some(s=>Yt(s,r))||n.push(r);return{arrayValue:{values:n}}}class ti extends oa{constructor(e){super(),this.elements=e}}function om(t,e){let n=am(e);for(const r of t.elements)n=n.filter(s=>!Yt(s,r));return{arrayValue:{values:n}}}class Co extends oa{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Sd(t){return ke(t.integerValue||t.doubleValue)}function am(t){return bl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function lS(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ei&&s instanceof ei||r instanceof ti&&s instanceof ti?Gr(r.elements,s.elements,Yt):r instanceof Co&&s instanceof Co?Yt(r.Ie,s.Ie):r instanceof Po&&s instanceof Po}(t.transform,e.transform)}class uS{constructor(e,n){this.version=e,this.transformResults=n}}class Wt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wt}static exists(e){return new Wt(void 0,e)}static updateTime(e){return new Wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class aa{}function cm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Cl(t.key,Wt.none()):new hi(t.key,t.data,Wt.none());{const n=t.data,r=It.empty();let s=new Le(Ke.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new wr(t.key,r,new kt(s.toArray()),Wt.none())}}function hS(t,e,n){t instanceof hi?function(s,i,a){const c=s.value.clone(),l=Pd(s.fieldTransforms,i,a.transformResults);c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):t instanceof wr?function(s,i,a){if(!Zi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=Pd(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(lm(s)),l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Bs(t,e,n,r){return t instanceof hi?function(i,a,c,l){if(!Zi(i.precondition,a))return c;const h=i.value.clone(),f=Cd(i.fieldTransforms,l,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof wr?function(i,a,c,l){if(!Zi(i.precondition,a))return c;const h=Cd(i.fieldTransforms,l,a),f=a.data;return f.setAll(lm(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(i,a,c){return Zi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(t,e,n)}function dS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=sm(r.transform,s||null);i!=null&&(n===null&&(n=It.empty()),n.set(r.field,i))}return n||null}function Rd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Gr(r,s,(i,a)=>lS(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class hi extends aa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class wr extends aa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function lm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Pd(t,e,n){const r=new Map;Ee(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,cS(a,c,n[s]))}return r}function Cd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,aS(i,a,e))}return r}class Cl extends aa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fS extends aa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class pS{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&hS(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Bs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Bs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=nm();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=n.has(s.key)?null:c;const l=cm(a,c);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(ie.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&Gr(this.mutations,e.mutations,(n,r)=>Rd(n,r))&&Gr(this.baseMutations,e.baseMutations,(n,r)=>Rd(n,r))}}class kl{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ee(e.mutations.length===r.length);let s=function(){return nS}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new kl(e,n,r,s)}}/**
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
 */class gS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class mS{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var De,fe;function _S(t){switch(t){case V.OK:return re();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return re()}}function um(t){if(t===void 0)return gn("GRPC error has no .code"),V.UNKNOWN;switch(t){case De.OK:return V.OK;case De.CANCELLED:return V.CANCELLED;case De.UNKNOWN:return V.UNKNOWN;case De.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case De.INTERNAL:return V.INTERNAL;case De.UNAVAILABLE:return V.UNAVAILABLE;case De.UNAUTHENTICATED:return V.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case De.NOT_FOUND:return V.NOT_FOUND;case De.ALREADY_EXISTS:return V.ALREADY_EXISTS;case De.PERMISSION_DENIED:return V.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case De.ABORTED:return V.ABORTED;case De.OUT_OF_RANGE:return V.OUT_OF_RANGE;case De.UNIMPLEMENTED:return V.UNIMPLEMENTED;case De.DATA_LOSS:return V.DATA_LOSS;default:return re()}}(fe=De||(De={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const yS=new xn([4294967295,4294967295],0);function kd(t){const e=Vg().encode(t),n=new Sg;return n.update(e),new Uint8Array(n.digest())}function Dd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new xn([n,r],0),new xn([s,i],0)]}class Dl{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ps(`Invalid padding: ${n}`);if(r<0)throw new Ps(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ps(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ps(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=xn.fromNumber(this.Ee)}Ae(e,n,r){let s=e.add(n.multiply(xn.fromNumber(r)));return s.compare(yS)===1&&(s=new xn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=kd(e),[r,s]=Dd(n);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);if(!this.Re(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Dl(i,s,n);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.Ee===0)return;const n=kd(e),[r,s]=Dd(n);for(let i=0;i<this.hashCount;i++){const a=this.Ae(r,s,i);this.Ve(a)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ps extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ca{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,di.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ca(ie.min(),s,new Pe(le),mn(),he())}}class di{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new di(r,n,he(),he(),he())}}/**
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
 */class eo{constructor(e,n,r,s){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=s}}class hm{constructor(e,n){this.targetId=e,this.ge=n}}class dm{constructor(e,n,r=We.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Od{constructor(){this.pe=0,this.ye=Vd(),this.we=We.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=he(),n=he(),r=he();return this.ye.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:re()}}),new di(this.we,this.Se,e,n,r)}Me(){this.be=!1,this.ye=Vd()}xe(e,n){this.be=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Ee(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class vS{constructor(e){this.ke=e,this.qe=new Map,this.Qe=mn(),this.$e=Ui(),this.Ue=Ui(),this.Ke=new Pe(le)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Ce(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.Ce(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.Je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Ce(e.resumeToken));break;default:re()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,s)=>{this.Je(s)&&n(s)})}Ze(e){const n=e.targetId,r=e.ge.count,s=this.Xe(n);if(s){const i=s.target;if(Oc(i))if(r===0){const a=new X(i.path);this.ze(n,a,tt.newNoDocument(a,ie.min()))}else Ee(r===1);else{const a=this.et(n);if(a!==r){const c=this.tt(e),l=c?this.nt(c,e,a):1;if(l!==0){this.Ye(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,h)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,c;try{a=jn(r).toUint8Array()}catch(l){if(l instanceof Lg)return zr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Dl(a,s,i)}catch(l){return zr(l instanceof Ps?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ee===0?null:c}nt(e,n,r){return n.ge.count===r-this.st(e,n.targetId)?0:2}st(e,n){const r=this.ke.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.ke.it(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.ze(n,i,null),s++)}),s}ot(e){const n=new Map;this.qe.forEach((i,a)=>{const c=this.Xe(a);if(c){if(i.current&&Oc(c.target)){const l=new X(c.target.path);this._t(l).has(a)||this.ut(a,l)||this.ze(a,l,tt.newNoDocument(l,e))}i.ve&&(n.set(a,i.Fe()),i.Me())}});let r=he();this.Ue.forEach((i,a)=>{let c=!0;a.forEachWhile(l=>{const h=this.Xe(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.Qe.forEach((i,a)=>a.setReadTime(e));const s=new ca(e,n,this.Ke,this.Qe,r);return this.Qe=mn(),this.$e=Ui(),this.Ue=Ui(),this.Ke=new Pe(le),s}Ge(e,n){if(!this.Je(e))return;const r=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const s=this.He(e);this.ut(e,n)?s.xe(n,1):s.Oe(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),this.Ue=this.Ue.insert(n,this.ct(n).add(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new Od,this.qe.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new Le(le),this.Ue=this.Ue.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Le(le),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new Od),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function Ui(){return new Pe(X.comparator)}function Vd(){return new Pe(X.comparator)}const ES={asc:"ASCENDING",desc:"DESCENDING"},TS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},IS={and:"AND",or:"OR"};class wS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Nc(t,e){return t.useProto3Json||ta(e)?e:{value:e}}function ko(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function AS(t,e){return ko(t,e.toTimestamp())}function zt(t){return Ee(!!t),ie.fromTimestamp(function(n){const r=Bn(n);return new Me(r.seconds,r.nanos)}(t))}function Ol(t,e){return xc(t,e).canonicalString()}function xc(t,e){const n=function(s){return new Re(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function pm(t){const e=Re.fromString(t);return Ee(vm(e)),e}function Mc(t,e){return Ol(t.databaseId,e.path)}function Za(t,e){const n=pm(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(mm(n))}function gm(t,e){return Ol(t.databaseId,e)}function bS(t){const e=pm(t);return e.length===4?Re.emptyPath():mm(e)}function Lc(t){return new Re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function mm(t){return Ee(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Nd(t,e,n){return{name:Mc(t,e),fields:n.value.mapValue.fields}}function SS(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:re()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Ee(f===void 0||typeof f=="string"),We.fromBase64String(f||"")):(Ee(f===void 0||f instanceof Buffer||f instanceof Uint8Array),We.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(h){const f=h.code===void 0?V.UNKNOWN:um(h.code);return new Y(f,h.message||"")}(a);n=new dm(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Za(t,r.document.name),i=zt(r.document.updateTime),a=r.document.createTime?zt(r.document.createTime):ie.min(),c=new It({mapValue:{fields:r.document.fields}}),l=tt.newFoundDocument(s,i,a,c),h=r.targetIds||[],f=r.removedTargetIds||[];n=new eo(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Za(t,r.document),i=r.readTime?zt(r.readTime):ie.min(),a=tt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new eo([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Za(t,r.document),i=r.removedTargetIds||[];n=new eo([],i,s,null)}else{if(!("filter"in e))return re();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new mS(s,i),c=r.targetId;n=new hm(c,a)}}return n}function RS(t,e){let n;if(e instanceof hi)n={update:Nd(t,e.key,e.value)};else if(e instanceof Cl)n={delete:Mc(t,e.key)};else if(e instanceof wr)n={update:Nd(t,e.key,e.data),updateMask:MS(e.fieldMask)};else{if(!(e instanceof fS))return re();n={verify:Mc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof Po)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ei)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ti)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Co)return{fieldPath:a.field.canonicalString(),increment:c.Ie};throw re()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:AS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:re()}(t,e.precondition)),n}function PS(t,e){return t&&t.length>0?(Ee(e!==void 0),t.map(n=>function(s,i){let a=s.updateTime?zt(s.updateTime):zt(i);return a.isEqual(ie.min())&&(a=zt(i)),new uS(a,s.transformResults||[])}(n,e))):[]}function CS(t,e){return{documents:[gm(t,e.path)]}}function kS(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=gm(t,s);const i=function(h){if(h.length!==0)return ym(Xt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(E){return{field:Vr(E.field),direction:VS(E.dir)}}(f))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const c=Nc(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ht:n,parent:s}}function DS(t){let e=bS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ee(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(g){const E=_m(g);return E instanceof Xt&&zg(E)?E.getFilters():[E]}(n.where));let a=[];n.orderBy&&(a=function(g){return g.map(E=>function(O){return new Ro(Nr(O.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(E))}(n.orderBy));let c=null;n.limit&&(c=function(g){let E;return E=typeof g=="object"?g.value:g,ta(E)?null:E}(n.limit));let l=null;n.startAt&&(l=function(g){const E=!!g.before,S=g.values||[];return new So(S,E)}(n.startAt));let h=null;return n.endAt&&(h=function(g){const E=!g.before,S=g.values||[];return new So(S,E)}(n.endAt)),Jb(e,s,a,i,c,"F",l,h)}function OS(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return re()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function _m(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Nr(n.unaryFilter.field);return xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Nr(n.unaryFilter.field);return xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Nr(n.unaryFilter.field);return xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Nr(n.unaryFilter.field);return xe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return re()}}(t):t.fieldFilter!==void 0?function(n){return xe.create(Nr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return re()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Xt.create(n.compositeFilter.filters.map(r=>_m(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return re()}}(n.compositeFilter.op))}(t):re()}function VS(t){return ES[t]}function NS(t){return TS[t]}function xS(t){return IS[t]}function Vr(t){return{fieldPath:t.canonicalString()}}function Nr(t){return Ke.fromServerFormat(t.fieldPath)}function ym(t){return t instanceof xe?function(n){if(n.op==="=="){if(Td(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NAN"}};if(Ed(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Td(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NOT_NAN"}};if(Ed(n.value))return{unaryFilter:{field:Vr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vr(n.field),op:NS(n.op),value:n.value}}}(t):t instanceof Xt?function(n){const r=n.getFilters().map(s=>ym(s));return r.length===1?r[0]:{compositeFilter:{op:xS(n.op),filters:r}}}(t):re()}function MS(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function vm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class kn{constructor(e,n,r,s,i=ie.min(),a=ie.min(),c=We.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class LS{constructor(e){this.Tt=e}}function FS(t){const e=DS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Vc(e,e.limit,"L"):e}/**
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
 */class US{constructor(){this.Tn=new BS}addToCollectionParentIndex(e,n){return this.Tn.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(Un.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(Un.min())}updateCollectionGroup(e,n,r){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class BS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Le(Re.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Le(Re.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const xd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Em=41943040;class lt{static withCacheSize(e){return new lt(e,lt.DEFAULT_COLLECTION_PERCENTILE,lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */lt.DEFAULT_COLLECTION_PERCENTILE=10,lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,lt.DEFAULT=new lt(Em,lt.DEFAULT_COLLECTION_PERCENTILE,lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),lt.DISABLED=new lt(-1,0,0);/**
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
 */class Yr{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new Yr(0)}static Kn(){return new Yr(-1)}}/**
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
 */const Md="LruGarbageCollector",jS=1048576;function Ld([t,e],[n,r]){const s=le(t,n);return s===0?le(e,r):s}class $S{constructor(e){this.Hn=e,this.buffer=new Le(Ld),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Ld(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class qS{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){H(Md,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ss(n)?H(Md,"Ignoring IndexedDB error during garbage collection: ",n):await rs(n)}await this.er(3e5)})}}class HS{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return k.resolve(ea.ae);const r=new $S(n);return this.tr.forEachTarget(e,s=>r.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>r.Zn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.tr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(xd)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),xd):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let r,s,i,a,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(e,s))).next(g=>(r=g,c=Date.now(),this.removeTargets(e,r,n))).next(g=>(i=g,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(h=Date.now(),Dr()<=ue.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${g} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function KS(t,e){return new HS(t,e)}/**
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
 */class WS{constructor(){this.changes=new Ir(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?k.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class zS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class GS{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Bs(r.mutation,s,kt.empty(),Me.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,n,r=he()){const s=cr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=Rs();return i.forEach((c,l)=>{a=a.insert(c,l.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=cr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,he()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{n.set(a,c)})})}computeViews(e,n,r,s){let i=mn();const a=Us(),c=function(){return Us()}();return n.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof wr)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Bs(f.mutation,h,f.mutation.getFieldMask(),Me.now())):a.set(h.key,kt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>a.set(h,f)),n.forEach((h,f)=>{var g;return c.set(h,new zS(f,(g=a.get(h))!==null&&g!==void 0?g:null))}),c))}recalculateAndSaveOverlays(e,n){const r=Us();let s=new Pe((a,c)=>a-c),i=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const c of a)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let f=r.get(l)||kt.empty();f=c.applyToLocalView(h,f),r.set(l,f);const g=(s.get(c.batchId)||he()).add(l);s=s.insert(c.batchId,g)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,g=nm();f.forEach(E=>{if(!i.has(E)){const S=cm(n.get(E),r.get(E));S!==null&&g.set(E,S),i=i.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return k.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return X.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Yb(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):k.resolve(cr());let c=Js,l=i;return a.next(h=>k.forEach(h,(f,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(f)?k.resolve():this.remoteDocumentCache.getEntry(e,f).next(E=>{l=l.insert(f,E)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,he())).next(f=>({batchId:c,changes:tm(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let s=Rs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=Rs();return this.indexManager.getCollectionParents(e,i).next(c=>k.forEach(c,l=>{const h=function(g,E){return new ra(E,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((g,E)=>{a=a.insert(g,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((l,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,tt.newInvalidDocument(f)))});let c=Rs();return a.forEach((l,h)=>{const f=i.get(l);f!==void 0&&Bs(f.mutation,h,kt.empty(),Me.now()),ia(n,h)&&(c=c.insert(l,h))}),c})}}/**
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
 */class QS{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return k.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:zt(s.createTime)}}(n)),k.resolve()}getNamedQuery(e,n){return k.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(s){return{name:s.name,query:FS(s.bundledQuery),readTime:zt(s.readTime)}}(n)),k.resolve()}}/**
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
 */class JS{constructor(){this.overlays=new Pe(X.comparator),this.Rr=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const r=cr();return k.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.Et(e,n,i)}),k.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Rr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(r)),k.resolve()}getOverlaysForCollection(e,n,r){const s=cr(),i=n.length+1,a=new X(n.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return k.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Pe((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=cr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=cr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return k.resolve(c)}Et(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Rr.get(s.largestBatchId).delete(r.key);this.Rr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new gS(n,r));let i=this.Rr.get(n);i===void 0&&(i=he(),this.Rr.set(n,i)),this.Rr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class YS{constructor(){this.sessionToken=We.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,k.resolve()}}/**
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
 */class Vl{constructor(){this.Vr=new Le(Fe.mr),this.gr=new Le(Fe.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const r=new Fe(e,n);this.Vr=this.Vr.add(r),this.gr=this.gr.add(r)}yr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.wr(new Fe(e,n))}Sr(e,n){e.forEach(r=>this.removeReference(r,n))}br(e){const n=new X(new Re([])),r=new Fe(n,e),s=new Fe(n,e+1),i=[];return this.gr.forEachInRange([r,s],a=>{this.wr(a),i.push(a.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new X(new Re([])),r=new Fe(n,e),s=new Fe(n,e+1);let i=he();return this.gr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new Fe(e,0),r=this.Vr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Fe{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return X.comparator(e.key,n.key)||le(e.Cr,n.Cr)}static pr(e,n){return le(e.Cr,n.Cr)||X.comparator(e.key,n.key)}}/**
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
 */class XS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new Le(Fe.mr)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new pS(i,n,r,s);this.mutationQueue.push(a);for(const c of s)this.Mr=this.Mr.add(new Fe(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return k.resolve(a)}lookupMutationBatch(e,n){return k.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Nr(r),i=s<0?0:s;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?wl:this.Fr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Fe(n,0),s=new Fe(n,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([r,s],a=>{const c=this.Or(a.Cr);i.push(c)}),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Le(le);return n.forEach(s=>{const i=new Fe(s,0),a=new Fe(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,a],c=>{r=r.add(c.Cr)})}),k.resolve(this.Br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const a=new Fe(new X(i),0);let c=new Le(le);return this.Mr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Cr)),!0)},a),k.resolve(this.Br(c))}Br(e){const n=[];return e.forEach(r=>{const s=this.Or(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ee(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Mr;return k.forEach(n.mutations,s=>{const i=new Fe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=r})}qn(e){}containsKey(e,n){const r=new Fe(n,0),s=this.Mr.firstAfterOrEqual(r);return k.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class ZS{constructor(e){this.kr=e,this.docs=function(){return new Pe(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.kr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return k.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let r=mn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():tt.newInvalidDocument(s))}),k.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=mn();const a=n.path,c=new X(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Pb(Rb(f),r)<=0||(s.has(f.key)||ia(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return k.resolve(i)}getAllFromCollectionGroup(e,n,r,s){re()}qr(e,n){return k.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new e0(this)}getSize(e){return k.resolve(this.size)}}class e0 extends WS{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(r)}),k.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
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
 */class t0{constructor(e){this.persistence=e,this.Qr=new Ir(n=>Sl(n),Rl),this.lastRemoteSnapshotVersion=ie.min(),this.highestTargetId=0,this.$r=0,this.Ur=new Vl,this.targetCount=0,this.Kr=Yr.Un()}forEachTarget(e,n){return this.Qr.forEach((r,s)=>n(s)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.$r&&(this.$r=n),k.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Kr=new Yr(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.zn(n),k.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Ur.br(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Qr.forEach((a,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Qr.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),k.waitFor(i).next(()=>s)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const r=this.Qr.get(n)||null;return k.resolve(r)}addMatchingKeys(e,n,r){return this.Ur.yr(n,r),k.resolve()}removeMatchingKeys(e,n,r){this.Ur.Sr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),k.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ur.br(n),k.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ur.vr(n);return k.resolve(r)}containsKey(e,n){return k.resolve(this.Ur.containsKey(n))}}/**
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
 */class Tm{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new ea(0),this.zr=!1,this.zr=!0,this.jr=new YS,this.referenceDelegate=e(this),this.Hr=new t0(this),this.indexManager=new US,this.remoteDocumentCache=function(s){return new ZS(s)}(r=>this.referenceDelegate.Jr(r)),this.serializer=new LS(n),this.Yr=new QS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new JS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Wr[e.toKey()];return r||(r=new XS(n,this.referenceDelegate),this.Wr[e.toKey()]=r),r}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const s=new n0(this.Gr.next());return this.referenceDelegate.Zr(),r(s).next(i=>this.referenceDelegate.Xr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}ei(e,n){return k.or(Object.values(this.Wr).map(r=>()=>r.containsKey(e,n)))}}class n0 extends kb{constructor(e){super(),this.currentSequenceNumber=e}}class Nl{constructor(e){this.persistence=e,this.ti=new Vl,this.ni=null}static ri(e){return new Nl(e)}get ii(){if(this.ni)return this.ni;throw re()}addReference(e,n,r){return this.ti.addReference(r,n),this.ii.delete(r.toString()),k.resolve()}removeReference(e,n,r){return this.ti.removeReference(r,n),this.ii.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),k.resolve()}removeTarget(e,n){this.ti.br(n.targetId).forEach(s=>this.ii.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.ii.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.ii,r=>{const s=X.fromPath(r);return this.si(e,s).next(i=>{i||n.removeEntry(s,ie.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(r=>{r?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return k.or([()=>k.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class Do{constructor(e,n){this.persistence=e,this.oi=new Ir(r=>Vb(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=KS(this,n)}static ri(e,n){return new Do(e,n)}Zr(){}Xr(e){return k.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}sr(e){let n=0;return this.rr(e,r=>{n++}).next(()=>n)}rr(e,n){return k.forEach(this.oi,(r,s)=>this.ar(e,r,s).next(i=>i?k.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.qr(e,a=>this.ar(e,a,n).next(c=>{c||(r++,i.removeEntry(a,ie.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),k.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),k.resolve()}removeReference(e,n,r){return this.oi.set(r,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),k.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Yi(e.data.value)),n}ar(e,n,r){return k.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.oi.get(n);return k.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class xl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Hi=r,this.Ji=s}static Yi(e,n){let r=he(),s=he();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new xl(e,n.fromCache,r,s)}}/**
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
 */class r0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class s0{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return _E()?8:Db(st())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.rs(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ss(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new r0;return this._s(e,n,a).next(c=>{if(i.result=c,this.Xi)return this.us(e,n,a,c.size)})}).next(()=>i.result)}us(e,n,r,s){return r.documentReadCount<this.es?(Dr()<=ue.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Or(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),k.resolve()):(Dr()<=ue.DEBUG&&H("QueryEngine","Query:",Or(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ts*s?(Dr()<=ue.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Or(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kt(n))):k.resolve())}rs(e,n){if(bd(n))return k.resolve(null);let r=Kt(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Vc(n,null,"F"),r=Kt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=he(...i);return this.ns.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.cs(n,c);return this.ls(n,h,a,l.readTime)?this.rs(e,Vc(n,null,"F")):this.hs(e,h,n,l)}))})))}ss(e,n,r,s){return bd(n)||s.isEqual(ie.min())?k.resolve(null):this.ns.getDocuments(e,r).next(i=>{const a=this.cs(n,i);return this.ls(n,a,r,s)?k.resolve(null):(Dr()<=ue.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Or(n)),this.hs(e,a,n,Sb(s,Js)).next(c=>c))})}cs(e,n){let r=new Le(Zg(e));return n.forEach((s,i)=>{ia(e,i)&&(r=r.add(i))}),r}ls(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}_s(e,n,r){return Dr()<=ue.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Or(n)),this.ns.getDocumentsMatchingQuery(e,n,Un.min(),r)}hs(e,n,r,s){return this.ns.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const Ml="LocalStore",i0=3e8;class o0{constructor(e,n,r,s){this.persistence=e,this.Ps=n,this.serializer=s,this.Ts=new Pe(le),this.Is=new Ir(i=>Sl(i),Rl),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(r)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new GS(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function a0(t,e,n,r){return new o0(t,e,n,r)}async function Im(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.As(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let l=he();for(const h of s){a.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(h=>({Rs:h,removedBatchIds:a,addedBatchIds:c}))})})}function c0(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const g=h.batch,E=g.keys();let S=k.resolve();return E.forEach(O=>{S=S.next(()=>f.getEntry(l,O)).next(L=>{const F=h.docVersions.get(O);Ee(F!==null),L.version.compareTo(F)<0&&(g.applyToRemoteDocument(L,h),L.isValidDocument()&&(L.setReadTime(h.commitVersion),f.addEntry(L)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(l,g))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=he();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function wm(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function l0(t,e){const n=oe(t),r=e.snapshotVersion;let s=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.ds.newChangeBuffer({trackRemovals:!0});s=n.Ts;const c=[];e.targetChanges.forEach((f,g)=>{const E=s.get(g);if(!E)return;c.push(n.Hr.removeMatchingKeys(i,f.removedDocuments,g).next(()=>n.Hr.addMatchingKeys(i,f.addedDocuments,g)));let S=E.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?S=S.withResumeToken(We.EMPTY_BYTE_STRING,ie.min()).withLastLimboFreeSnapshotVersion(ie.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),s=s.insert(g,S),function(L,F,z){return L.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=i0?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(E,S,f)&&c.push(n.Hr.updateTargetData(i,S))});let l=mn(),h=he();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(u0(i,a,e.documentUpdates).next(f=>{l=f.Vs,h=f.fs})),!r.isEqual(ie.min())){const f=n.Hr.getLastRemoteSnapshotVersion(i).next(g=>n.Hr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return k.waitFor(c).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.Ts=s,i))}function u0(t,e,n){let r=he(),s=he();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let a=mn();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ie.min())?(e.removeEntry(c,l.readTime),a=a.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),a=a.insert(c,l)):H(Ml,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{Vs:a,fs:s}})}function h0(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=wl),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function d0(t,e){const n=oe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Hr.getTargetData(r,e).next(i=>i?(s=i,k.resolve(s)):n.Hr.allocateTargetId(r).next(a=>(s=new kn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Hr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(r.targetId,r),n.Is.set(e,r.targetId)),r})}async function Fc(t,e,n){const r=oe(t),s=r.Ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ss(a))throw a;H(Ml,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ts=r.Ts.remove(e),r.Is.delete(s.target)}function Fd(t,e,n){const r=oe(t);let s=ie.min(),i=he();return r.persistence.runTransaction("Execute query","readwrite",a=>function(l,h,f){const g=oe(l),E=g.Is.get(f);return E!==void 0?k.resolve(g.Ts.get(E)):g.Hr.getTargetData(h,f)}(r,a,Kt(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Hr.getMatchingKeysForTargetId(a,c.targetId).next(l=>{i=l})}).next(()=>r.Ps.getDocumentsMatchingQuery(a,e,n?s:ie.min(),n?i:he())).next(c=>(f0(r,Zb(e),c),{documents:c,gs:i})))}function f0(t,e,n){let r=t.Es.get(e)||ie.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Es.set(e,r)}class Ud{constructor(){this.activeTargetIds=iS()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class p0{constructor(){this.ho=new Ud,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,r){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new Ud,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class g0{To(e){}shutdown(){}}/**
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
 */const Bd="ConnectivityMonitor";class jd{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){H(Bd,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){H(Bd,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Bi=null;function Uc(){return Bi===null?Bi=function(){return 268435456+Math.round(2147483648*Math.random())}():Bi++,"0x"+Bi.toString(16)}/**
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
 */const ec="RestConnection",m0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class _0{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${r}/databases/${s}`,this.wo=this.databaseId.database===Ao?`project_id=${r}`:`project_id=${r}&database_id=${s}`}So(e,n,r,s,i){const a=Uc(),c=this.bo(e,n.toUriEncodedString());H(ec,`Sending RPC '${e}' ${a}:`,c,r);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(l,s,i),this.vo(e,c,l,r).then(h=>(H(ec,`Received RPC '${e}' ${a}: `,h),h),h=>{throw zr(ec,`RPC '${e}' ${a} failed with error: `,h,"url: ",c,"request:",r),h})}Co(e,n,r,s,i,a){return this.So(e,n,r,s,i)}Do(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ns}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}bo(e,n){const r=m0[e];return`${this.po}/v1/${n}:${r}`}terminate(){}}/**
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
 */class y0{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
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
 */const Ye="WebChannelConnection";class v0 extends _0{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,r,s){const i=Uc();return new Promise((a,c)=>{const l=new Rg;l.setWithCredentials(!0),l.listenOnce(Pg.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ji.NO_ERROR:const f=l.getResponseJson();H(Ye,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case Ji.TIMEOUT:H(Ye,`RPC '${e}' ${i} timed out`),c(new Y(V.DEADLINE_EXCEEDED,"Request time out"));break;case Ji.HTTP_ERROR:const g=l.getStatus();if(H(Ye,`RPC '${e}' ${i} failed with status:`,g,"response text:",l.getResponseText()),g>0){let E=l.getResponseJson();Array.isArray(E)&&(E=E[0]);const S=E==null?void 0:E.error;if(S&&S.status&&S.message){const O=function(F){const z=F.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(z)>=0?z:V.UNKNOWN}(S.status);c(new Y(O,S.message))}else c(new Y(V.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new Y(V.UNAVAILABLE,"Connection failed."));break;default:re()}}finally{H(Ye,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);H(Ye,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}Wo(e,n,r){const s=Uc(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Dg(),c=kg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");H(Ye,`Creating RPC '${e}' stream ${s}: ${f}`,l);const g=a.createWebChannel(f,l);let E=!1,S=!1;const O=new y0({Fo:F=>{S?H(Ye,`Not sending because RPC '${e}' stream ${s} is closed:`,F):(E||(H(Ye,`Opening RPC '${e}' stream ${s} transport.`),g.open(),E=!0),H(Ye,`RPC '${e}' stream ${s} sending:`,F),g.send(F))},Mo:()=>g.close()}),L=(F,z,Q)=>{F.listen(z,J=>{try{Q(J)}catch(K){setTimeout(()=>{throw K},0)}})};return L(g,Ss.EventType.OPEN,()=>{S||(H(Ye,`RPC '${e}' stream ${s} transport opened.`),O.Qo())}),L(g,Ss.EventType.CLOSE,()=>{S||(S=!0,H(Ye,`RPC '${e}' stream ${s} transport closed`),O.Uo())}),L(g,Ss.EventType.ERROR,F=>{S||(S=!0,zr(Ye,`RPC '${e}' stream ${s} transport errored:`,F),O.Uo(new Y(V.UNAVAILABLE,"The operation could not be completed")))}),L(g,Ss.EventType.MESSAGE,F=>{var z;if(!S){const Q=F.data[0];Ee(!!Q);const J=Q,K=(J==null?void 0:J.error)||((z=J[0])===null||z===void 0?void 0:z.error);if(K){H(Ye,`RPC '${e}' stream ${s} received error:`,K);const pe=K.status;let _e=function(v){const I=De[v];if(I!==void 0)return um(I)}(pe),w=K.message;_e===void 0&&(_e=V.INTERNAL,w="Unknown error status: "+pe+" with message "+K.message),S=!0,O.Uo(new Y(_e,w)),g.close()}else H(Ye,`RPC '${e}' stream ${s} received:`,Q),O.Ko(Q)}}),L(c,Cg.STAT_EVENT,F=>{F.stat===Rc.PROXY?H(Ye,`RPC '${e}' stream ${s} detected buffering proxy`):F.stat===Rc.NOPROXY&&H(Ye,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{O.$o()},0),O}}function tc(){return typeof document<"u"?document:null}/**
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
 */function la(t){return new wS(t,!0)}/**
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
 */class Am{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ti=e,this.timerId=n,this.Go=r,this.zo=s,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),r=Math.max(0,Date.now()-this.Yo),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const $d="PersistentStream";class bm{constructor(e,n,r,s,i,a,c,l){this.Ti=e,this.n_=r,this.r_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new Am(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(gn(n.toString()),gn("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.i_===n&&this.V_(r,s)},r=>{e(()=>{const s=new Y(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.m_(s)})})}V_(e,n){const r=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{r(()=>this.listener.xo())}),this.stream.No(()=>{r(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{r(()=>this.m_(s))}),this.stream.onMessage(s=>{r(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return H($d,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(H($d,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class E0 extends bm{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=SS(this.serializer,e),r=function(i){if(!("targetChange"in i))return ie.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ie.min():a.readTime?zt(a.readTime):ie.min()}(e);return this.listener.p_(n,r)}y_(e){const n={};n.database=Lc(this.serializer),n.addTarget=function(i,a){let c;const l=a.target;if(c=Oc(l)?{documents:CS(i,l)}:{query:kS(i,l).ht},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=fm(i,a.resumeToken);const h=Nc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}else if(a.snapshotVersion.compareTo(ie.min())>0){c.readTime=ko(i,a.snapshotVersion.toTimestamp());const h=Nc(i,a.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=OS(this.serializer,e);r&&(n.labels=r),this.I_(n)}w_(e){const n={};n.database=Lc(this.serializer),n.removeTarget=e,this.I_(n)}}class T0 extends bm{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return Ee(!!e.streamToken),this.lastStreamToken=e.streamToken,Ee(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=PS(e.writeResults,e.commitTime),r=zt(e.commitTime);return this.listener.v_(r,n)}C_(){const e={};e.database=Lc(this.serializer),this.I_(e)}b_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>RS(this.serializer,r))};this.I_(n)}}/**
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
 */class I0{}class w0 extends I0{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new Y(V.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.So(e,xc(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(V.UNKNOWN,i.toString())})}Co(e,n,r,s,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Co(e,xc(n,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Y(V.UNKNOWN,a.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class A0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(gn(n),this.N_=!1):H("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const mr="RemoteStore";class b0{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(a=>{r.enqueueAndForget(async()=>{Ar(this)&&(H(mr,"Restarting streams for network reachability change."),await async function(l){const h=oe(l);h.W_.add(4),await fi(h),h.j_.set("Unknown"),h.W_.delete(4),await ua(h)}(this))})}),this.j_=new A0(r,s)}}async function ua(t){if(Ar(t))for(const e of t.G_)await e(!0)}async function fi(t){for(const e of t.G_)await e(!1)}function Sm(t,e){const n=oe(t);n.K_.has(e.targetId)||(n.K_.set(e.targetId,e),Bl(n)?Ul(n):is(n).c_()&&Fl(n,e))}function Ll(t,e){const n=oe(t),r=is(n);n.K_.delete(e),r.c_()&&Rm(n,e),n.K_.size===0&&(r.c_()?r.P_():Ar(n)&&n.j_.set("Unknown"))}function Fl(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ie.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}is(t).y_(e)}function Rm(t,e){t.H_.Ne(e),is(t).w_(e)}function Ul(t){t.H_=new vS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.K_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),is(t).start(),t.j_.B_()}function Bl(t){return Ar(t)&&!is(t).u_()&&t.K_.size>0}function Ar(t){return oe(t).W_.size===0}function Pm(t){t.H_=void 0}async function S0(t){t.j_.set("Online")}async function R0(t){t.K_.forEach((e,n)=>{Fl(t,e)})}async function P0(t,e){Pm(t),Bl(t)?(t.j_.q_(e),Ul(t)):t.j_.set("Unknown")}async function C0(t,e,n){if(t.j_.set("Online"),e instanceof dm&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.K_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.K_.delete(c),s.H_.removeTarget(c))}(t,e)}catch(r){H(mr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Oo(t,r)}else if(e instanceof eo?t.H_.We(e):e instanceof hm?t.H_.Ze(e):t.H_.je(e),!n.isEqual(ie.min()))try{const r=await wm(t.localStore);n.compareTo(r)>=0&&await function(i,a){const c=i.H_.ot(a);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.K_.get(h);f&&i.K_.set(h,f.withResumeToken(l.resumeToken,a))}}),c.targetMismatches.forEach((l,h)=>{const f=i.K_.get(l);if(!f)return;i.K_.set(l,f.withResumeToken(We.EMPTY_BYTE_STRING,f.snapshotVersion)),Rm(i,l);const g=new kn(f.target,l,h,f.sequenceNumber);Fl(i,g)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){H(mr,"Failed to raise snapshot:",r),await Oo(t,r)}}async function Oo(t,e,n){if(!ss(e))throw e;t.W_.add(1),await fi(t),t.j_.set("Offline"),n||(n=()=>wm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H(mr,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await ua(t)})}function Cm(t,e){return e().catch(n=>Oo(t,n,e))}async function ha(t){const e=oe(t),n=qn(e);let r=e.U_.length>0?e.U_[e.U_.length-1].batchId:wl;for(;k0(e);)try{const s=await h0(e.localStore,r);if(s===null){e.U_.length===0&&n.P_();break}r=s.batchId,D0(e,s)}catch(s){await Oo(e,s)}km(e)&&Dm(e)}function k0(t){return Ar(t)&&t.U_.length<10}function D0(t,e){t.U_.push(e);const n=qn(t);n.c_()&&n.S_&&n.b_(e.mutations)}function km(t){return Ar(t)&&!qn(t).u_()&&t.U_.length>0}function Dm(t){qn(t).start()}async function O0(t){qn(t).C_()}async function V0(t){const e=qn(t);for(const n of t.U_)e.b_(n.mutations)}async function N0(t,e,n){const r=t.U_.shift(),s=kl.from(r,e,n);await Cm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ha(t)}async function x0(t,e){e&&qn(t).S_&&await async function(r,s){if(function(a){return _S(a)&&a!==V.ABORTED}(s.code)){const i=r.U_.shift();qn(r).h_(),await Cm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ha(r)}}(t,e),km(t)&&Dm(t)}async function qd(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),H(mr,"RemoteStore received new credentials");const r=Ar(n);n.W_.add(3),await fi(n),r&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await ua(n)}async function M0(t,e){const n=oe(t);e?(n.W_.delete(2),await ua(n)):e||(n.W_.add(2),await fi(n),n.j_.set("Unknown"))}function is(t){return t.J_||(t.J_=function(n,r,s){const i=oe(n);return i.M_(),new E0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:S0.bind(null,t),No:R0.bind(null,t),Lo:P0.bind(null,t),p_:C0.bind(null,t)}),t.G_.push(async e=>{e?(t.J_.h_(),Bl(t)?Ul(t):t.j_.set("Unknown")):(await t.J_.stop(),Pm(t))})),t.J_}function qn(t){return t.Y_||(t.Y_=function(n,r,s){const i=oe(n);return i.M_(),new T0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:O0.bind(null,t),Lo:x0.bind(null,t),D_:V0.bind(null,t),v_:N0.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await ha(t)):(await t.Y_.stop(),t.U_.length>0&&(H(mr,`Stopping write stream with ${t.U_.length} pending writes`),t.U_=[]))})),t.Y_}/**
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
 */class jl{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Mn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,c=new jl(e,n,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $l(t,e){if(gn("AsyncQueue",`${e}: ${t}`),ss(t))return new Y(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Kr{static emptySet(e){return new Kr(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=Rs(),this.sortedSet=new Pe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Kr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Kr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Hd{constructor(){this.Z_=new Pe(X.comparator)}track(e){const n=e.doc.key,r=this.Z_.get(n);r?e.type!==0&&r.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&r.type!==1?this.Z_=this.Z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Z_=this.Z_.remove(n):e.type===1&&r.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):re():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Xr{constructor(e,n,r,s,i,a,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach(c=>{a.push({type:0,doc:c})}),new Xr(e,n,Kr.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&sa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class L0{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class F0{constructor(){this.queries=Kd(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,r){const s=oe(n),i=s.queries;s.queries=Kd(),i.forEach((a,c)=>{for(const l of c.ta)l.onError(r)})})(this,new Y(V.ABORTED,"Firestore shutting down"))}}function Kd(){return new Ir(t=>Xg(t),sa)}async function U0(t,e){const n=oe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.na()&&e.ra()&&(r=2):(i=new L0,r=e.ra()?0:1);try{switch(r){case 0:i.ea=await n.onListen(s,!0);break;case 1:i.ea=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const c=$l(a,`Initialization of query '${Or(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.ta.push(e),e.sa(n.onlineState),i.ea&&e.oa(i.ea)&&ql(n)}async function B0(t,e){const n=oe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.ta.indexOf(e);a>=0&&(i.ta.splice(a,1),i.ta.length===0?s=e.ra()?0:1:!i.na()&&e.ra()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function j0(t,e){const n=oe(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const c of a.ta)c.oa(s)&&(r=!0);a.ea=s}}r&&ql(n)}function $0(t,e,n){const r=oe(t),s=r.queries.get(e);if(s)for(const i of s.ta)i.onError(n);r.queries.delete(e)}function ql(t){t.ia.forEach(e=>{e.next()})}var Bc,Wd;(Wd=Bc||(Bc={}))._a="default",Wd.Cache="cache";class q0{constructor(e,n,r){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=r||{}}oa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Xr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const r=n!=="Offline";return(!this.options.Ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=Xr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Bc.Cache}}/**
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
 */class Om{constructor(e){this.key=e}}class Vm{constructor(e){this.key=e}}class H0{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=he(),this.mutatedKeys=he(),this.ya=Zg(e),this.wa=new Kr(this.ya)}get Sa(){return this.fa}ba(e,n){const r=n?n.Da:new Hd,s=n?n.wa:this.wa;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,g)=>{const E=s.get(f),S=ia(this.query,g)?g:null,O=!!E&&this.mutatedKeys.has(E.key),L=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let F=!1;E&&S?E.data.isEqual(S.data)?O!==L&&(r.track({type:3,doc:S}),F=!0):this.va(E,S)||(r.track({type:2,doc:S}),F=!0,(l&&this.ya(S,l)>0||h&&this.ya(S,h)<0)&&(c=!0)):!E&&S?(r.track({type:0,doc:S}),F=!0):E&&!S&&(r.track({type:1,doc:E}),F=!0,(l||h)&&(c=!0)),F&&(S?(a=a.add(S),i=L?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{wa:a,Da:r,ls:c,mutatedKeys:i}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const a=e.Da.X_();a.sort((f,g)=>function(S,O){const L=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return re()}};return L(S)-L(O)}(f.type,g.type)||this.ya(f.doc,g.doc)),this.Ca(r),s=s!=null&&s;const c=n&&!s?this.Fa():[],l=this.pa.size===0&&this.current&&!s?1:0,h=l!==this.ga;return this.ga=l,a.length!==0||h?{snapshot:new Xr(this.query,e.wa,i,a,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ma:c}:{Ma:c}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new Hd,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=he(),this.wa.forEach(r=>{this.xa(r.key)&&(this.pa=this.pa.add(r.key))});const n=[];return e.forEach(r=>{this.pa.has(r)||n.push(new Vm(r))}),this.pa.forEach(r=>{e.has(r)||n.push(new Om(r))}),n}Oa(e){this.fa=e.gs,this.pa=he();const n=this.ba(e.documents);return this.applyChanges(n,!0)}Na(){return Xr.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Hl="SyncEngine";class K0{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class W0{constructor(e){this.key=e,this.Ba=!1}}class z0{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.La={},this.ka=new Ir(c=>Xg(c),sa),this.qa=new Map,this.Qa=new Set,this.$a=new Pe(X.comparator),this.Ua=new Map,this.Ka=new Vl,this.Wa={},this.Ga=new Map,this.za=Yr.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function G0(t,e,n=!0){const r=Um(t);let s;const i=r.ka.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Na()):s=await Nm(r,e,n,!0),s}async function Q0(t,e){const n=Um(t);await Nm(n,e,!0,!1)}async function Nm(t,e,n,r){const s=await d0(t.localStore,Kt(e)),i=s.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await J0(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&Sm(t.remoteStore,s),c}async function J0(t,e,n,r,s){t.Ha=(g,E,S)=>async function(L,F,z,Q){let J=F.view.ba(z);J.ls&&(J=await Fd(L.localStore,F.query,!1).then(({documents:w})=>F.view.ba(w,J)));const K=Q&&Q.targetChanges.get(F.targetId),pe=Q&&Q.targetMismatches.get(F.targetId)!=null,_e=F.view.applyChanges(J,L.isPrimaryClient,K,pe);return Gd(L,F.targetId,_e.Ma),_e.snapshot}(t,g,E,S);const i=await Fd(t.localStore,e,!0),a=new H0(e,i.gs),c=a.ba(i.documents),l=di.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=a.applyChanges(c,t.isPrimaryClient,l);Gd(t,n,h.Ma);const f=new K0(e,n,a);return t.ka.set(e,f),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),h.snapshot}async function Y0(t,e,n){const r=oe(t),s=r.ka.get(e),i=r.qa.get(s.targetId);if(i.length>1)return r.qa.set(s.targetId,i.filter(a=>!sa(a,e))),void r.ka.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Fc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ll(r.remoteStore,s.targetId),jc(r,s.targetId)}).catch(rs)):(jc(r,s.targetId),await Fc(r.localStore,s.targetId,!0))}async function X0(t,e){const n=oe(t),r=n.ka.get(e),s=n.qa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ll(n.remoteStore,r.targetId))}async function Z0(t,e,n){const r=oR(t);try{const s=await function(a,c){const l=oe(a),h=Me.now(),f=c.reduce((S,O)=>S.add(O.key),he());let g,E;return l.persistence.runTransaction("Locally write mutations","readwrite",S=>{let O=mn(),L=he();return l.ds.getEntries(S,f).next(F=>{O=F,O.forEach((z,Q)=>{Q.isValidDocument()||(L=L.add(z))})}).next(()=>l.localDocuments.getOverlayedDocuments(S,O)).next(F=>{g=F;const z=[];for(const Q of c){const J=dS(Q,g.get(Q.key).overlayedDocument);J!=null&&z.push(new wr(Q.key,J,Hg(J.value.mapValue),Wt.exists(!0)))}return l.mutationQueue.addMutationBatch(S,h,z,c)}).next(F=>{E=F;const z=F.applyToLocalDocumentSet(g,L);return l.documentOverlayCache.saveOverlays(S,F.batchId,z)})}).then(()=>({batchId:E.batchId,changes:tm(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,l){let h=a.Wa[a.currentUser.toKey()];h||(h=new Pe(le)),h=h.insert(c,l),a.Wa[a.currentUser.toKey()]=h}(r,s.batchId,n),await pi(r,s.changes),await ha(r.remoteStore)}catch(s){const i=$l(s,"Failed to persist write");n.reject(i)}}async function xm(t,e){const n=oe(t);try{const r=await l0(n.localStore,e);e.targetChanges.forEach((s,i)=>{const a=n.Ua.get(i);a&&(Ee(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.Ba=!0:s.modifiedDocuments.size>0?Ee(a.Ba):s.removedDocuments.size>0&&(Ee(a.Ba),a.Ba=!1))}),await pi(n,r,e)}catch(r){await rs(r)}}function zd(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ka.forEach((i,a)=>{const c=a.view.sa(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const l=oe(a);l.onlineState=c;let h=!1;l.queries.forEach((f,g)=>{for(const E of g.ta)E.sa(c)&&(h=!0)}),h&&ql(l)}(r.eventManager,e),s.length&&r.La.p_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function eR(t,e,n){const r=oe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ua.get(e),i=s&&s.key;if(i){let a=new Pe(X.comparator);a=a.insert(i,tt.newNoDocument(i,ie.min()));const c=he().add(i),l=new ca(ie.min(),new Map,new Pe(le),a,c);await xm(r,l),r.$a=r.$a.remove(i),r.Ua.delete(e),Kl(r)}else await Fc(r.localStore,e,!1).then(()=>jc(r,e,n)).catch(rs)}async function tR(t,e){const n=oe(t),r=e.batch.batchId;try{const s=await c0(n.localStore,e);Lm(n,r,null),Mm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await pi(n,s)}catch(s){await rs(s)}}async function nR(t,e,n){const r=oe(t);try{const s=await function(a,c){const l=oe(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(g=>(Ee(g!==null),f=g.keys(),l.mutationQueue.removeMutationBatch(h,g))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);Lm(r,e,n),Mm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await pi(r,s)}catch(s){await rs(s)}}function Mm(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function Lm(t,e,n){const r=oe(t);let s=r.Wa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Wa[r.currentUser.toKey()]=s}}function jc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.qa.get(e))t.ka.delete(r),n&&t.La.Ja(r,n);t.qa.delete(e),t.isPrimaryClient&&t.Ka.br(e).forEach(r=>{t.Ka.containsKey(r)||Fm(t,r)})}function Fm(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);n!==null&&(Ll(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ua.delete(n),Kl(t))}function Gd(t,e,n){for(const r of n)r instanceof Om?(t.Ka.addReference(r.key,e),rR(t,r)):r instanceof Vm?(H(Hl,"Document no longer in limbo: "+r.key),t.Ka.removeReference(r.key,e),t.Ka.containsKey(r.key)||Fm(t,r.key)):re()}function rR(t,e){const n=e.key,r=n.path.canonicalString();t.$a.get(n)||t.Qa.has(r)||(H(Hl,"New document in limbo: "+n),t.Qa.add(r),Kl(t))}function Kl(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new X(Re.fromString(e)),r=t.za.next();t.Ua.set(r,new W0(n)),t.$a=t.$a.insert(n,r),Sm(t.remoteStore,new kn(Kt(Yg(n.path)),r,"TargetPurposeLimboResolution",ea.ae))}}async function pi(t,e,n){const r=oe(t),s=[],i=[],a=[];r.ka.isEmpty()||(r.ka.forEach((c,l)=>{a.push(r.Ha(l,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const g=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(h){s.push(h);const g=xl.Yi(l.targetId,h);i.push(g)}}))}),await Promise.all(a),r.La.p_(s),await async function(l,h){const f=oe(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>k.forEach(h,E=>k.forEach(E.Hi,S=>f.persistence.referenceDelegate.addReference(g,E.targetId,S)).next(()=>k.forEach(E.Ji,S=>f.persistence.referenceDelegate.removeReference(g,E.targetId,S)))))}catch(g){if(!ss(g))throw g;H(Ml,"Failed to update sequence numbers: "+g)}for(const g of h){const E=g.targetId;if(!g.fromCache){const S=f.Ts.get(E),O=S.snapshotVersion,L=S.withLastLimboFreeSnapshotVersion(O);f.Ts=f.Ts.insert(E,L)}}}(r.localStore,i))}async function sR(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){H(Hl,"User change. New user:",e.toKey());const r=await Im(n.localStore,e);n.currentUser=e,function(i,a){i.Ga.forEach(c=>{c.forEach(l=>{l.reject(new Y(V.CANCELLED,a))})}),i.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await pi(n,r.Rs)}}function iR(t,e){const n=oe(t),r=n.Ua.get(e);if(r&&r.Ba)return he().add(r.key);{let s=he();const i=n.qa.get(e);if(!i)return s;for(const a of i){const c=n.ka.get(a);s=s.unionWith(c.view.Sa)}return s}}function Um(t){const e=oe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=xm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=eR.bind(null,e),e.La.p_=j0.bind(null,e.eventManager),e.La.Ja=$0.bind(null,e.eventManager),e}function oR(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=tR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=nR.bind(null,e),e}class Vo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=la(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return a0(this.persistence,new s0,e.initialUser,this.serializer)}Xa(e){return new Tm(Nl.ri,this.serializer)}Za(e){return new p0}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vo.provider={build:()=>new Vo};class aR extends Vo{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){Ee(this.persistence.referenceDelegate instanceof Do);const r=this.persistence.referenceDelegate.garbageCollector;return new qS(r,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?lt.withCacheSize(this.cacheSizeBytes):lt.DEFAULT;return new Tm(r=>Do.ri(r,n),this.serializer)}}class $c{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>zd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=sR.bind(null,this.syncEngine),await M0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new F0}()}createDatastore(e){const n=la(e.databaseInfo.databaseId),r=function(i){return new v0(i)}(e.databaseInfo);return function(i,a,c,l){return new w0(i,a,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,c){return new b0(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,n=>zd(this.syncEngine,n,0),function(){return jd.D()?new jd:new g0}())}createSyncEngine(e,n){return function(s,i,a,c,l,h,f){const g=new z0(s,i,a,c,l,h);return f&&(g.ja=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=oe(s);H(mr,"RemoteStore shutting down."),i.W_.add(5),await fi(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}$c.provider={build:()=>new $c};/**
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
 *//**
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
 */class cR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):gn("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Hn="FirestoreClient";class lR{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Xe.UNAUTHENTICATED,this.clientId=Ng.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{H(Hn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(H(Hn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Mn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=$l(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function nc(t,e){t.asyncQueue.verifyOperationInProgress(),H(Hn,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Im(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Qd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await uR(t);H(Hn,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>qd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>qd(e.remoteStore,s)),t._onlineComponents=e}async function uR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H(Hn,"Using user provided OfflineComponentProvider");try{await nc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;zr("Error using user provided cache. Falling back to memory cache: "+n),await nc(t,new Vo)}}else H(Hn,"Using default OfflineComponentProvider"),await nc(t,new aR(void 0));return t._offlineComponents}async function Bm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H(Hn,"Using user provided OnlineComponentProvider"),await Qd(t,t._uninitializedComponentsProvider._online)):(H(Hn,"Using default OnlineComponentProvider"),await Qd(t,new $c))),t._onlineComponents}function hR(t){return Bm(t).then(e=>e.syncEngine)}async function dR(t){const e=await Bm(t),n=e.eventManager;return n.onListen=G0.bind(null,e.syncEngine),n.onUnlisten=Y0.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Q0.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=X0.bind(null,e.syncEngine),n}function fR(t,e,n={}){const r=new Mn;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,c,l,h){const f=new cR({next:E=>{f.su(),a.enqueueAndForget(()=>B0(i,g)),E.fromCache&&l.source==="server"?h.reject(new Y(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(E)},error:E=>h.reject(E)}),g=new q0(c,f,{includeMetadataChanges:!0,Ta:!0});return U0(i,g)}(await dR(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function jm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Jd=new Map;/**
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
 */function $m(t,e,n){if(!n)throw new Y(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function pR(t,e,n,r){if(e===!0&&r===!0)throw new Y(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yd(t){if(!X.isDocumentKey(t))throw new Y(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Xd(t){if(X.isDocumentKey(t))throw new Y(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Wl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":re()}function ni(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wl(t);throw new Y(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const qm="firestore.googleapis.com",Zd=!0;class ef{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=qm,this.ssl=Zd}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Zd;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Em;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<jS)throw new Y(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}pR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Y(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Y(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Y(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class da{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ef({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ef(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new _b;switch(r.type){case"firstParty":return new Tb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Jd.get(n);r&&(H("ComponentProvider","Removing Datastore"),Jd.delete(n),r.terminate())}(this),Promise.resolve()}}function gR(t,e,n,r={}){var s;const i=(t=ni(t,da))._getSettings(),a=Object.assign(Object.assign({},i),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i.host!==qm&&i.host!==c&&zr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l=Object.assign(Object.assign({},i),{host:c,ssl:!1,emulatorOptions:r});if(!Fn(l,a)&&(t._setSettings(l),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=Xe.MOCK_USER;else{h=hE(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new Y(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Xe(g)}t._authCredentials=new yb(new Og(h,f))}}/**
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
 */class fa{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new fa(this.firestore,e,this._query)}}class Ot{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ln(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ot(this.firestore,e,this._key)}}class Ln extends fa{constructor(e,n,r){super(e,n,Yg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ot(this.firestore,null,new X(e))}withConverter(e){return new Ln(this.firestore,e,this._path)}}function tf(t,e,...n){if(t=ht(t),$m("collection","path",e),t instanceof da){const r=Re.fromString(e,...n);return Xd(r),new Ln(t,null,r)}{if(!(t instanceof Ot||t instanceof Ln))throw new Y(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return Xd(r),new Ln(t.firestore,null,r)}}function Hm(t,e,...n){if(t=ht(t),arguments.length===1&&(e=Ng.newId()),$m("doc","path",e),t instanceof da){const r=Re.fromString(e,...n);return Yd(r),new Ot(t,null,new X(r))}{if(!(t instanceof Ot||t instanceof Ln))throw new Y(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return Yd(r),new Ot(t.firestore,t instanceof Ln?t.converter:null,new X(r))}}/**
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
 */const nf="AsyncQueue";class rf{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new Am(this,"async_queue_retry"),this.Su=()=>{const r=tc();r&&H(nf,"Visibility state changed to "+r.visibilityState),this.a_.t_()},this.bu=e;const n=tc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=tc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new Mn;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!ss(e))throw e;H(nf,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.bu.then(()=>(this.pu=!0,e().catch(r=>{this.gu=r,this.pu=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw gn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.pu=!1,r))));return this.bu=n,n}enqueueAfterDelay(e,n,r){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const s=jl.createAndSchedule(this,e,n,r,i=>this.Fu(i));return this.fu.push(s),s}Du(){this.gu&&re()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class pa extends da{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new rf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new rf(e),this._firestoreClient=void 0,await e}}}function mR(t,e){const n=typeof t=="object"?t:al(),r=typeof t=="string"?t:Ao,s=vr(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=lE("firestore");i&&gR(s,...i)}return s}function Km(t){if(t._terminated)throw new Y(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||_R(t),t._firestoreClient}function _R(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,f){return new Mb(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,jm(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new lR(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class Zr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zr(We.fromBase64String(e))}catch(n){throw new Y(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Zr(We.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class zl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Wm{constructor(e){this._methodName=e}}/**
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
 */class Gl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Ql{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const yR=/^__.*__$/;class vR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new wr(e,this.data,this.fieldMask,n,this.fieldTransforms):new hi(e,this.data,n,this.fieldTransforms)}}function zm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw re()}}class Jl{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Jl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.$u(e),s}Uu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ku({path:r,Qu:!1});return s.Bu(),s}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return No(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(zm(this.Lu)&&yR.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class ER{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||la(e)}ju(e,n,r,s=!1){return new Jl({Lu:e,methodName:n,zu:r,path:Ke.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function TR(t){const e=t._freezeSettings(),n=la(t._databaseId);return new ER(t._databaseId,!!e.ignoreUndefinedProperties,n)}function IR(t,e,n,r,s,i={}){const a=t.ju(i.merge||i.mergeFields?2:0,e,n,s);Ym("Data must be an object, but it was:",a,r);const c=Qm(r,a);let l,h;if(i.merge)l=new kt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const E=wR(e,g,n);if(!a.contains(E))throw new Y(V.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);bR(f,E)||f.push(E)}l=new kt(f),h=a.fieldTransforms.filter(g=>l.covers(g.field))}else l=null,h=a.fieldTransforms;return new vR(new It(c),l,h)}function Gm(t,e){if(Jm(t=ht(t)))return Ym("Unsupported field value:",e,t),Qm(t,e);if(t instanceof Wm)return function(r,s){if(!zm(s.Lu))throw s.Wu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let l=Gm(c,s.Ku(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ht(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return oS(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Me.fromDate(r);return{timestampValue:ko(s.serializer,i)}}if(r instanceof Me){const i=new Me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ko(s.serializer,i)}}if(r instanceof Gl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Zr)return{bytesValue:fm(s.serializer,r._byteString)};if(r instanceof Ot){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Wu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ol(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ql)return function(a,c){return{mapValue:{fields:{[$g]:{stringValue:qg},[bo]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw c.Wu("VectorValues must only contain numeric values.");return Pl(c.serializer,h)})}}}}}}(r,s);throw s.Wu(`Unsupported field value: ${Wl(r)}`)}(t,e)}function Qm(t,e){const n={};return Mg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Tr(t,(r,s)=>{const i=Gm(s,e.qu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Jm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof Gl||t instanceof Zr||t instanceof Ot||t instanceof Wm||t instanceof Ql)}function Ym(t,e,n){if(!Jm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Wl(n);throw r==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+r)}}function wR(t,e,n){if((e=ht(e))instanceof zl)return e._internalPath;if(typeof e=="string")return Xm(t,e);throw No("Field path arguments must be of type string or ",t,!1,void 0,n)}const AR=new RegExp("[~\\*/\\[\\]]");function Xm(t,e,n){if(e.search(AR)>=0)throw No(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zl(...e.split("."))._internalPath}catch{throw No(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function No(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new Y(V.INVALID_ARGUMENT,c+t+l)}function bR(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Zm{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new SR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(e_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class SR extends Zm{data(){return super.data()}}function e_(t,e){return typeof e=="string"?Xm(t,e):e instanceof zl?e._internalPath:e._delegate._internalPath}/**
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
 */function RR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class PR{convertValue(e,n="none"){switch($n(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(jn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw re()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Tr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[bo].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>ke(a.doubleValue));return new Ql(i)}convertGeoPoint(e){return new Gl(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=na(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ys(e));default:return null}}convertTimestamp(e){const n=Bn(e);return new Me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Re.fromString(e);Ee(vm(r));const s=new Xs(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(n)||gn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function CR(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class ji{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kR extends Zm{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new to(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(e_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class to extends kR{data(e={}){return super.data(e)}}class DR{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ji(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new to(this._firestore,this._userDataWriter,r.key,r,new ji(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const l=new to(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ji(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new to(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ji(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),f=a.indexOf(c.doc.key)),{type:OR(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function OR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return re()}}class VR extends PR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ot(this.firestore,null,n)}}function NR(t){t=ni(t,fa);const e=ni(t.firestore,pa),n=Km(e),r=new VR(e);return RR(t._query),fR(n,t._query).then(s=>new DR(e,r,t,s))}function xR(t){return t_(ni(t.firestore,pa),[new Cl(t._key,Wt.none())])}function MR(t,e){const n=ni(t.firestore,pa),r=Hm(t),s=CR(t.converter,e);return t_(n,[IR(TR(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Wt.exists(!1))]).then(()=>r)}function t_(t,e){return function(r,s){const i=new Mn;return r.asyncQueue.enqueueAndForget(async()=>Z0(await hR(r),s,i)),i.promise}(Km(t),e)}(function(e,n=!0){(function(s){ns=s})(es),Jt(new Vt("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new pa(new vb(r.getProvider("auth-internal")),new Ib(a,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Y(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xs(h.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),At(cd,ld,e),At(cd,ld,"esm2017")})();console.log("apikey","AIzaSyDl8FYIAd1LoWByhZ0JAJoMar26LQl45Ww");console.log("authDomain","battersuccessrates.firebaseapp.com");console.log("projectId","battersuccessrates");console.log("storageBucket","battersuccessrates.firebasestorage.app");console.log("messagingSenderId","295535221945");console.log("appId","1:295535221945:web:1670b1322d64281cb38f68");console.log("measurementId",void 0);const LR={apiKey:"AIzaSyDl8FYIAd1LoWByhZ0JAJoMar26LQl45Ww",authDomain:"battersuccessrates.firebaseapp.com",projectId:"battersuccessrates",storageBucket:"battersuccessrates.firebasestorage.app",messagingSenderId:"295535221945",appId:"1:295535221945:web:1670b1322d64281cb38f68"},Yl=Tp(LR);fb(Yl);const sf=Gw(Yl),rc=mR(Yl),Xl=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},FR={class:"auth-container"},UR={type:"submit"},BR={__name:"AuthScreen",emits:["authenticated"],setup(t,{emit:e}){const n=e,r=Ma(""),s=Ma(""),i=Ma(!0),a=async()=>{try{i.value?(await xI(sf,r.value,s.value),n("authenticated")):(await NI(sf,r.value,s.value),alert("Account created!"))}catch(c){alert(c.message)}};return(c,l)=>(Pt(),sn("div",FR,[W("h2",null,qe(i.value?"Login":"Sign Up"),1),W("form",{onSubmit:Qv(a,["prevent"])},[oo(W("input",{"onUpdate:modelValue":l[0]||(l[0]=h=>r.value=h),type:"email",placeholder:"Email",required:""},null,512),[[mc,r.value]]),oo(W("input",{"onUpdate:modelValue":l[1]||(l[1]=h=>s.value=h),type:"password",placeholder:"Password",required:""},null,512),[[mc,s.value]]),W("button",UR,qe(i.value?"Login":"Sign Up"),1)],32),W("p",{onClick:l[2]||(l[2]=h=>i.value=!i.value)},qe(i.value?"Need an account? Sign Up":"Already have an account? Login"),1)]))}},jR=Xl(BR,[["__scopeId","data-v-94345881"]]),$R={name:"MainScreen",data(){return{pitchType:"FB",pitchResult:"",isSidebarMinimized:!1,successRates:{FB:"--",CB:"--",CH:"--",SL:"--"},battingPercentage:"--",sluggingPercentage:"--",expectedSuccess:"--",previousScenario:"",count:"--",savedScenarios:[],balls:0,strikes:0,sequence:[],previousCount:null,isNewAtBat:!1,countHistory:[]}},methods:{toggleSidebar(){this.isSidebarMinimized=!this.isSidebarMinimized},async handlePitchAndPredict(){const t=this.pitchResult.trim().toLowerCase();if(!["strike","ball","hit","out","foul"].includes(t)){alert("Invalid result. Please enter: Strike, Ball, Hit, Out, Foul"),this.pitchResult="";return}t.charAt(0).toUpperCase()+t.slice(1),this.isNewAtBat&&(this.resetAtBat(),this.isNewAtBat=!1),this.storePreviousCount(),this.sequence.push(this.pitchType),this.updateSequenceDisplay(),t==="strike"?(this.strikes++,this.updateCountDisplay(this.strikes>=3?"strikeout":null),this.isNewAtBat=this.strikes>=3):t==="foul"?(this.strikes<2&&this.strikes++,this.updateCountDisplay()):t==="ball"?(this.balls++,this.updateCountDisplay(this.balls>=4?"walk":null),this.isNewAtBat=this.balls>=4):["hit","out"].includes(t)&&(this.updateCountDisplay(),this.isNewAtBat=!0),this.pitchResult="",this.updatePrediction()},updateCountDisplay(t=null){t==="strikeout"?this.previousScenario="Result: K":t==="walk"?this.previousScenario="Result: BB":this.previousScenario=`Count: ${this.balls}-${this.strikes}`},updateSequenceDisplay(){this.sequenceDisplay=this.sequence.join(" - ")},resetAtBat(){this.balls=0,this.strikes=0,this.sequence=[],this.isNewAtBat=!0,this.previousScenario="",this.updatePrediction()},async updatePrediction(){try{const e=await(await fetch("https://term-project-script-junkies-firebase.onrender.com/predict",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({balls:this.balls,strikes:this.strikes,prev_pitches:this.sequence})})).json();this.successRates={FB:e.FB??"--",CB:e.CB??"--",CH:e.CH??"--",SL:e.SL??"--"},console.log("Updated prediction:",e)}catch(t){console.error("Prediction fetch failed:",t),alert("Failed to reach prediction API.")}},storePreviousCount(){this.countHistory.push({balls:this.balls,strikes:this.strikes})},undoLastPitch(){if(this.sequence.length===0||this.countHistory.length===0){alert("No pitch to undo!");return}this.sequence.pop();const t=this.countHistory.pop();this.balls=t.balls,this.strikes=t.strikes,this.updateSequenceDisplay(),this.updateCountDisplay(),this.updatePrediction()},async addScenario(){const t={count:`${this.balls}-${this.strikes}`,sequence:this.sequence.join("-")};try{await MR(tf(rc,"scenarios"),t),this.fetchScenarios()}catch(e){console.error("Error adding scenario:",e)}},async fetchScenarios(){try{const t=await NR(tf(rc,"scenarios"));this.savedScenarios=t.docs.map(e=>({id:e.id,...e.data()})),console.log("Fetched scenarios:",this.savedScenarios)}catch(t){console.error("Error fetching scenarios:",t)}},async deleteScenario(t){if(confirm("Are you sure you want to delete this scenario?"))try{await xR(Hm(rc,"scenarios",t)),this.fetchScenarios()}catch(e){console.error("Error deleting scenario:",e)}},loadScenario(t){const[e,n]=t.count.split("-").map(Number);this.balls=e,this.strikes=n,this.sequence=Array.isArray(t.sequence)?t.sequence:t.sequence.split("-"),this.previousScenario=`Count: ${t.count}, Sequence: ${this.sequence.join(" - ")}`,this.updatePrediction()}},computed:{highestSuccessKey(){let t="",e=-1;for(const[n,r]of Object.entries(this.successRates)){const s=parseFloat(r);!isNaN(s)&&s>e&&(e=s,t=n)}return t},lowestSuccessKey(){let t="",e=101;for(const[n,r]of Object.entries(this.successRates)){const s=parseFloat(r);!isNaN(s)&&s<e&&(e=s,t=n)}return t}},mounted(){this.updatePrediction(),this.fetchScenarios()}},qR={class:"input-group"},HR={class:"input-group"},KR={class:"content"},WR={class:"count"},zR={key:0},GR={key:1},QR={class:"sequence"},JR={class:"stat-box-container"},YR={class:"stat-box"},XR={class:"stat-box"},ZR={class:"stat-box"},eP={class:"success-rates-container"},tP={class:"previous-scenarios-wrapper"},nP={key:0,class:"no-scenarios-box"},rP={key:1,class:"scenario-list"},sP=["onClick"],iP=["onClick"];function oP(t,e,n,r,s,i){return Pt(),sn("div",{class:an(["container",{minimized:s.isSidebarMinimized}])},[W("div",{class:an(["sidebar",{minimized:s.isSidebarMinimized}]),id:"sidebar"},[W("button",{onClick:e[0]||(e[0]=(...a)=>i.toggleSidebar&&i.toggleSidebar(...a)),class:"toggle-icon"},"«"),e[10]||(e[10]=W("h2",null,"Pitch Input",-1)),W("div",qR,[e[8]||(e[8]=W("label",{for:"pitch-type"},"Pitch Type:",-1)),oo(W("select",{"onUpdate:modelValue":e[1]||(e[1]=a=>s.pitchType=a),id:"pitch-type"},e[7]||(e[7]=[W("option",{value:"FB"},"Fastball (FB)",-1),W("option",{value:"CB"},"Curveball (CB)",-1),W("option",{value:"CH"},"Changeup (CH)",-1),W("option",{value:"SL"},"Slider (SL)",-1)]),512),[[Wv,s.pitchType]])]),W("div",HR,[e[9]||(e[9]=W("label",{for:"pitch-result"},"Result of Pitch:",-1)),oo(W("input",{"onUpdate:modelValue":e[2]||(e[2]=a=>s.pitchResult=a),type:"text",id:"pitch-result",placeholder:"Enter result (e.g., Strike, Ball, Hit, Out, Foul)"},null,512),[[mc,s.pitchResult]])]),W("button",{onClick:e[3]||(e[3]=(...a)=>i.handlePitchAndPredict&&i.handlePitchAndPredict(...a))},"Pitch"),W("button",{onClick:e[4]||(e[4]=(...a)=>i.undoLastPitch&&i.undoLastPitch(...a))},"Undo Last Pitch"),W("button",{onClick:e[5]||(e[5]=(...a)=>i.resetAtBat&&i.resetAtBat(...a))},"Reset At Bat"),W("button",{onClick:e[6]||(e[6]=(...a)=>i.addScenario&&i.addScenario(...a))},"Save Current Scenario")],2),W("div",KR,[e[22]||(e[22]=W("h1",null,"Batter Success Rates",-1)),W("div",WR,[s.previousScenario?(Pt(),sn("span",zR,qe(s.previousScenario),1)):(Pt(),sn("span",GR,"Count: "+qe(s.balls)+"-"+qe(s.strikes),1))]),W("div",QR,"Sequence: "+qe(s.sequence.join(" - ")),1),W("div",JR,[W("div",YR,[e[11]||(e[11]=W("h3",null,"Batting %",-1)),W("p",null,qe(s.battingPercentage)+"%",1)]),W("div",XR,[e[12]||(e[12]=W("h3",null,"Slugging %",-1)),W("p",null,qe(s.sluggingPercentage)+"%",1)]),W("div",ZR,[e[13]||(e[13]=W("h3",null,"Expected Success %",-1)),W("p",null,qe(s.expectedSuccess)+"%",1)])]),W("div",eP,[W("div",{class:an(["success-box",{highlight:i.highestSuccessKey==="FB",lowlight:i.lowestSuccessKey==="FB"}])},[e[14]||(e[14]=W("h4",null,"Fastball Success",-1)),W("p",null,qe(s.successRates.FB)+"%",1)],2),W("div",{class:an(["success-box",{highlight:i.highestSuccessKey==="CB",lowlight:i.lowestSuccessKey==="CB"}])},[e[15]||(e[15]=W("h4",null,"Curveball Success",-1)),W("p",null,qe(s.successRates.CB)+"%",1)],2),W("div",{class:an(["success-box",{highlight:i.highestSuccessKey==="CH",lowlight:i.lowestSuccessKey==="CH"}])},[e[16]||(e[16]=W("h4",null,"Changeup Success",-1)),W("p",null,qe(s.successRates.CH)+"%",1)],2),W("div",{class:an(["success-box",{highlight:i.highestSuccessKey==="SL",lowlight:i.lowestSuccessKey==="SL"}])},[e[17]||(e[17]=W("h4",null,"Slider Success",-1)),W("p",null,qe(s.successRates.SL)+"%",1)],2)]),e[23]||(e[23]=W("h2",null,"Previous Scenarios",-1)),W("div",tP,[s.savedScenarios.length===0?(Pt(),sn("div",nP,e[18]||(e[18]=[W("p",null,"No previous scenarios to display.",-1)]))):(Pt(),sn("div",rP,[(Pt(!0),sn(Bt,null,xy(s.savedScenarios,a=>(Pt(),sn("div",{key:a.id,class:"scenario-card"},[e[21]||(e[21]=W("h3",null,"Scenario",-1)),W("p",null,[e[19]||(e[19]=W("strong",null,"Count:",-1)),fc(" "+qe(a.count),1)]),W("p",null,[e[20]||(e[20]=W("strong",null,"Sequence:",-1)),fc(" "+qe(a.sequence),1)]),W("button",{onClick:c=>i.loadScenario(a)},"Load",8,sP),W("button",{onClick:c=>i.deleteScenario(a.id)},"Delete",8,iP)]))),128))]))])])],2)}const aP=Xl($R,[["render",oP]]),cP={components:{AuthScreen:jR,MainScreen:aP},data(){return{isAuthenticated:!1}}},lP={class:"app-container"};function uP(t,e,n,r,s,i){const a=Qu("AuthScreen"),c=Qu("MainScreen");return Pt(),sn("div",lP,[s.isAuthenticated?(Pt(),oh(c,{key:1})):(Pt(),oh(a,{key:0,onAuthenticated:e[0]||(e[0]=l=>s.isAuthenticated=!0)}))])}const hP=Xl(cP,[["render",uP],["__scopeId","data-v-65553591"]]);Xv(hP).mount("#app");
