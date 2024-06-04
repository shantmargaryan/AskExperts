(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=t(n);fetch(n.href,r)}})();class Pe extends HTMLElement{constructor(){super(),this.innerHTML=`
        <style>

        .hero__brand-box {
            display: flex;
            justify-content: space-between;
            gap: 20px;
            margin-bottom: 10%;
            padding:0 15px;
            overflow-x: auto;
        }

        .hero__brand {
         flex-shrink: 0;
            width: 100px;
            height: 100px;
            fill:rgba(3, 2, 17, 0.5);
        }
        </style>
        <div class="hero__brand-box">
        <svg class="hero__brand">
           <use xlink:href="img/svg/sprite.svg#studioGreen" />
        </svg>
        <svg class="hero__brand">
           <use xlink:href="img/svg/sprite.svg#Norto" />
        </svg>
        <svg class="hero__brand">
           <use xlink:href="img/svg/sprite.svg#points" />
        </svg>
        <svg class="hero__brand">
           <use xlink:href="img/svg/sprite.svg#OutOfTheSandBox" />
        </svg>
        <svg class="hero__brand">
           <use xlink:href="img/svg/sprite.svg#Brand" />
        </svg>
        <svg class="hero__brand">
           <use xlink:href="img/svg/sprite.svg#fortne" />
        </svg>
     </div>
        `}}customElements.define("special-brands",Pe);function oe(s){return s!==null&&typeof s=="object"&&"constructor"in s&&s.constructor===Object}function re(s,e){s===void 0&&(s={}),e===void 0&&(e={}),Object.keys(e).forEach(t=>{typeof s[t]>"u"?s[t]=e[t]:oe(e[t])&&oe(s[t])&&Object.keys(e[t]).length>0&&re(s[t],e[t])})}const ve={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function N(){const s=typeof document<"u"?document:{};return re(s,ve),s}const ke={document:ve,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(s){return typeof setTimeout>"u"?(s(),null):setTimeout(s,0)},cancelAnimationFrame(s){typeof setTimeout>"u"||clearTimeout(s)}};function A(){const s=typeof window<"u"?window:{};return re(s,ke),s}function Ce(s){return s===void 0&&(s=""),s.trim().split(" ").filter(e=>!!e.trim())}function Le(s){const e=s;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function se(s,e){return e===void 0&&(e=0),setTimeout(s,e)}function W(){return Date.now()}function Ie(s){const e=A();let t;return e.getComputedStyle&&(t=e.getComputedStyle(s,null)),!t&&s.currentStyle&&(t=s.currentStyle),t||(t=s.style),t}function Ae(s,e){e===void 0&&(e="x");const t=A();let i,n,r;const o=Ie(s);return t.WebKitCSSMatrix?(n=o.transform||o.webkitTransform,n.split(",").length>6&&(n=n.split(", ").map(l=>l.replace(",",".")).join(", ")),r=new t.WebKitCSSMatrix(n==="none"?"":n)):(r=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=r.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?n=r.m41:i.length===16?n=parseFloat(i[12]):n=parseFloat(i[4])),e==="y"&&(t.WebKitCSSMatrix?n=r.m42:i.length===16?n=parseFloat(i[13]):n=parseFloat(i[5])),n||0}function H(s){return typeof s=="object"&&s!==null&&s.constructor&&Object.prototype.toString.call(s).slice(8,-1)==="Object"}function Oe(s){return typeof window<"u"&&typeof window.HTMLElement<"u"?s instanceof HTMLElement:s&&(s.nodeType===1||s.nodeType===11)}function I(){const s=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){const i=t<0||arguments.length<=t?void 0:arguments[t];if(i!=null&&!Oe(i)){const n=Object.keys(Object(i)).filter(r=>e.indexOf(r)<0);for(let r=0,o=n.length;r<o;r+=1){const l=n[r],a=Object.getOwnPropertyDescriptor(i,l);a!==void 0&&a.enumerable&&(H(s[l])&&H(i[l])?i[l].__swiper__?s[l]=i[l]:I(s[l],i[l]):!H(s[l])&&H(i[l])?(s[l]={},i[l].__swiper__?s[l]=i[l]:I(s[l],i[l])):s[l]=i[l])}}}return s}function $(s,e,t){s.style.setProperty(e,t)}function we(s){let{swiper:e,targetPosition:t,side:i}=s;const n=A(),r=-e.translate;let o=null,l;const a=e.params.speed;e.wrapperEl.style.scrollSnapType="none",n.cancelAnimationFrame(e.cssModeFrameID);const d=t>r?"next":"prev",c=(m,p)=>d==="next"&&m>=p||d==="prev"&&m<=p,f=()=>{l=new Date().getTime(),o===null&&(o=l);const m=Math.max(Math.min((l-o)/a,1),0),p=.5-Math.cos(m*Math.PI)/2;let u=r+p*(t-r);if(c(u,t)&&(u=t),e.wrapperEl.scrollTo({[i]:u}),c(u,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[i]:u})}),n.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=n.requestAnimationFrame(f)};f()}function O(s,e){return e===void 0&&(e=""),[...s.children].filter(t=>t.matches(e))}function j(s){try{console.warn(s);return}catch{}}function q(s,e){e===void 0&&(e=[]);const t=document.createElement(s);return t.classList.add(...Array.isArray(e)?e:Ce(e)),t}function ze(s,e){const t=[];for(;s.previousElementSibling;){const i=s.previousElementSibling;e?i.matches(e)&&t.push(i):t.push(i),s=i}return t}function Ge(s,e){const t=[];for(;s.nextElementSibling;){const i=s.nextElementSibling;e?i.matches(e)&&t.push(i):t.push(i),s=i}return t}function D(s,e){return A().getComputedStyle(s,null).getPropertyValue(e)}function de(s){let e=s,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function De(s,e){const t=[];let i=s.parentElement;for(;i;)t.push(i),i=i.parentElement;return t}function ce(s,e,t){const i=A();return s[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(s,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(s,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom"))}function z(s){return(Array.isArray(s)?s:[s]).filter(e=>!!e)}let Y;function Fe(){const s=A(),e=N();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in s||s.DocumentTouch&&e instanceof s.DocumentTouch)}}function xe(){return Y||(Y=Fe()),Y}let X;function Be(s){let{userAgent:e}=s===void 0?{}:s;const t=xe(),i=A(),n=i.navigator.platform,r=e||i.navigator.userAgent,o={ios:!1,android:!1},l=i.screen.width,a=i.screen.height,d=r.match(/(Android);?[\s\/]+([\d.]+)?/);let c=r.match(/(iPad).*OS\s([\d_]+)/);const f=r.match(/(iPod)(.*OS\s([\d_]+))?/),m=!c&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p=n==="Win32";let u=n==="MacIntel";const h=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&u&&t.touch&&h.indexOf(`${l}x${a}`)>=0&&(c=r.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),u=!1),d&&!p&&(o.os="android",o.android=!0),(c||m||f)&&(o.os="ios",o.ios=!0),o}function be(s){return s===void 0&&(s={}),X||(X=Be(s)),X}let U;function Ve(){const s=A(),e=be();let t=!1;function i(){const l=s.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(i()){const l=String(s.navigator.userAgent);if(l.includes("Version/")){const[a,d]=l.split("Version/")[1].split(" ")[0].split(".").map(c=>Number(c));t=a<16||a===16&&d<2}}const n=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent),r=i(),o=r||n&&e.ios;return{isSafari:t||r,needPerspectiveFix:t,need3dFix:o,isWebView:n}}function Ne(){return U||(U=Ve()),U}function He(s){let{swiper:e,on:t,emit:i}=s;const n=A();let r=null,o=null;const l=()=>{!e||e.destroyed||!e.initialized||(i("beforeResize"),i("resize"))},a=()=>{!e||e.destroyed||!e.initialized||(r=new ResizeObserver(f=>{o=n.requestAnimationFrame(()=>{const{width:m,height:p}=e;let u=m,h=p;f.forEach(w=>{let{contentBoxSize:g,contentRect:x,target:v}=w;v&&v!==e.el||(u=x?x.width:(g[0]||g).inlineSize,h=x?x.height:(g[0]||g).blockSize)}),(u!==m||h!==p)&&l()})}),r.observe(e.el))},d=()=>{o&&n.cancelAnimationFrame(o),r&&r.unobserve&&e.el&&(r.unobserve(e.el),r=null)},c=()=>{!e||e.destroyed||!e.initialized||i("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof n.ResizeObserver<"u"){a();return}n.addEventListener("resize",l),n.addEventListener("orientationchange",c)}),t("destroy",()=>{d(),n.removeEventListener("resize",l),n.removeEventListener("orientationchange",c)})}function $e(s){let{swiper:e,extendParams:t,on:i,emit:n}=s;const r=[],o=A(),l=function(c,f){f===void 0&&(f={});const m=o.MutationObserver||o.WebkitMutationObserver,p=new m(u=>{if(e.__preventObserver__)return;if(u.length===1){n("observerUpdate",u[0]);return}const h=function(){n("observerUpdate",u[0])};o.requestAnimationFrame?o.requestAnimationFrame(h):o.setTimeout(h,0)});p.observe(c,{attributes:typeof f.attributes>"u"?!0:f.attributes,childList:typeof f.childList>"u"?!0:f.childList,characterData:typeof f.characterData>"u"?!0:f.characterData}),r.push(p)},a=()=>{if(e.params.observer){if(e.params.observeParents){const c=De(e.hostEl);for(let f=0;f<c.length;f+=1)l(c[f])}l(e.hostEl,{childList:e.params.observeSlideChildren}),l(e.wrapperEl,{attributes:!1})}},d=()=>{r.forEach(c=>{c.disconnect()}),r.splice(0,r.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),i("init",a),i("destroy",d)}var Re={on(s,e,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;const n=t?"unshift":"push";return s.split(" ").forEach(r=>{i.eventsListeners[r]||(i.eventsListeners[r]=[]),i.eventsListeners[r][n](e)}),i},once(s,e,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;function n(){i.off(s,n),n.__emitterProxy&&delete n.__emitterProxy;for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];e.apply(i,o)}return n.__emitterProxy=e,i.on(s,n,t)},onAny(s,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof s!="function")return t;const i=e?"unshift":"push";return t.eventsAnyListeners.indexOf(s)<0&&t.eventsAnyListeners[i](s),t},offAny(s){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(s);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(s,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||s.split(" ").forEach(i=>{typeof e>"u"?t.eventsListeners[i]=[]:t.eventsListeners[i]&&t.eventsListeners[i].forEach((n,r)=>{(n===e||n.__emitterProxy&&n.__emitterProxy===e)&&t.eventsListeners[i].splice(r,1)})}),t},emit(){const s=this;if(!s.eventsListeners||s.destroyed||!s.eventsListeners)return s;let e,t,i;for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return typeof r[0]=="string"||Array.isArray(r[0])?(e=r[0],t=r.slice(1,r.length),i=s):(e=r[0].events,t=r[0].data,i=r[0].context||s),t.unshift(i),(Array.isArray(e)?e:e.split(" ")).forEach(a=>{s.eventsAnyListeners&&s.eventsAnyListeners.length&&s.eventsAnyListeners.forEach(d=>{d.apply(i,[a,...t])}),s.eventsListeners&&s.eventsListeners[a]&&s.eventsListeners[a].forEach(d=>{d.apply(i,t)})}),s}};function We(){const s=this;let e,t;const i=s.el;typeof s.params.width<"u"&&s.params.width!==null?e=s.params.width:e=i.clientWidth,typeof s.params.height<"u"&&s.params.height!==null?t=s.params.height:t=i.clientHeight,!(e===0&&s.isHorizontal()||t===0&&s.isVertical())&&(e=e-parseInt(D(i,"padding-left")||0,10)-parseInt(D(i,"padding-right")||0,10),t=t-parseInt(D(i,"padding-top")||0,10)-parseInt(D(i,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(s,{width:e,height:t,size:s.isHorizontal()?e:t}))}function je(){const s=this;function e(b,y){return parseFloat(b.getPropertyValue(s.getDirectionLabel(y))||0)}const t=s.params,{wrapperEl:i,slidesEl:n,size:r,rtlTranslate:o,wrongRTL:l}=s,a=s.virtual&&t.virtual.enabled,d=a?s.virtual.slides.length:s.slides.length,c=O(n,`.${s.params.slideClass}, swiper-slide`),f=a?s.virtual.slides.length:c.length;let m=[];const p=[],u=[];let h=t.slidesOffsetBefore;typeof h=="function"&&(h=t.slidesOffsetBefore.call(s));let w=t.slidesOffsetAfter;typeof w=="function"&&(w=t.slidesOffsetAfter.call(s));const g=s.snapGrid.length,x=s.slidesGrid.length;let v=t.spaceBetween,S=-h,_=0,M=0;if(typeof r>"u")return;typeof v=="string"&&v.indexOf("%")>=0?v=parseFloat(v.replace("%",""))/100*r:typeof v=="string"&&(v=parseFloat(v)),s.virtualSize=-v,c.forEach(b=>{o?b.style.marginLeft="":b.style.marginRight="",b.style.marginBottom="",b.style.marginTop=""}),t.centeredSlides&&t.cssMode&&($(i,"--swiper-centered-offset-before",""),$(i,"--swiper-centered-offset-after",""));const F=t.grid&&t.grid.rows>1&&s.grid;F?s.grid.initSlides(c):s.grid&&s.grid.unsetSlides();let k;const V=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(b=>typeof t.breakpoints[b].slidesPerView<"u").length>0;for(let b=0;b<f;b+=1){k=0;let y;if(c[b]&&(y=c[b]),F&&s.grid.updateSlide(b,y,c),!(c[b]&&D(y,"display")==="none")){if(t.slidesPerView==="auto"){V&&(c[b].style[s.getDirectionLabel("width")]="");const E=getComputedStyle(y),T=y.style.transform,P=y.style.webkitTransform;if(T&&(y.style.transform="none"),P&&(y.style.webkitTransform="none"),t.roundLengths)k=s.isHorizontal()?ce(y,"width"):ce(y,"height");else{const C=e(E,"width"),G=e(E,"padding-left"),ye=e(E,"padding-right"),ne=e(E,"margin-left"),ae=e(E,"margin-right"),le=E.getPropertyValue("box-sizing");if(le&&le==="border-box")k=C+ne+ae;else{const{clientWidth:Ee,offsetWidth:Me}=y;k=C+G+ye+ne+ae+(Me-Ee)}}T&&(y.style.transform=T),P&&(y.style.webkitTransform=P),t.roundLengths&&(k=Math.floor(k))}else k=(r-(t.slidesPerView-1)*v)/t.slidesPerView,t.roundLengths&&(k=Math.floor(k)),c[b]&&(c[b].style[s.getDirectionLabel("width")]=`${k}px`);c[b]&&(c[b].swiperSlideSize=k),u.push(k),t.centeredSlides?(S=S+k/2+_/2+v,_===0&&b!==0&&(S=S-r/2-v),b===0&&(S=S-r/2-v),Math.abs(S)<1/1e3&&(S=0),t.roundLengths&&(S=Math.floor(S)),M%t.slidesPerGroup===0&&m.push(S),p.push(S)):(t.roundLengths&&(S=Math.floor(S)),(M-Math.min(s.params.slidesPerGroupSkip,M))%s.params.slidesPerGroup===0&&m.push(S),p.push(S),S=S+k+v),s.virtualSize+=k+v,_=k,M+=1}}if(s.virtualSize=Math.max(s.virtualSize,r)+w,o&&l&&(t.effect==="slide"||t.effect==="coverflow")&&(i.style.width=`${s.virtualSize+v}px`),t.setWrapperSize&&(i.style[s.getDirectionLabel("width")]=`${s.virtualSize+v}px`),F&&s.grid.updateWrapperSize(k,m),!t.centeredSlides){const b=[];for(let y=0;y<m.length;y+=1){let E=m[y];t.roundLengths&&(E=Math.floor(E)),m[y]<=s.virtualSize-r&&b.push(E)}m=b,Math.floor(s.virtualSize-r)-Math.floor(m[m.length-1])>1&&m.push(s.virtualSize-r)}if(a&&t.loop){const b=u[0]+v;if(t.slidesPerGroup>1){const y=Math.ceil((s.virtual.slidesBefore+s.virtual.slidesAfter)/t.slidesPerGroup),E=b*t.slidesPerGroup;for(let T=0;T<y;T+=1)m.push(m[m.length-1]+E)}for(let y=0;y<s.virtual.slidesBefore+s.virtual.slidesAfter;y+=1)t.slidesPerGroup===1&&m.push(m[m.length-1]+b),p.push(p[p.length-1]+b),s.virtualSize+=b}if(m.length===0&&(m=[0]),v!==0){const b=s.isHorizontal()&&o?"marginLeft":s.getDirectionLabel("marginRight");c.filter((y,E)=>!t.cssMode||t.loop?!0:E!==c.length-1).forEach(y=>{y.style[b]=`${v}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let b=0;u.forEach(E=>{b+=E+(v||0)}),b-=v;const y=b-r;m=m.map(E=>E<=0?-h:E>y?y+w:E)}if(t.centerInsufficientSlides){let b=0;u.forEach(E=>{b+=E+(v||0)}),b-=v;const y=(t.slidesOffsetBefore||0)+(t.slidesOffsetAfter||0);if(b+y<r){const E=(r-b-y)/2;m.forEach((T,P)=>{m[P]=T-E}),p.forEach((T,P)=>{p[P]=T+E})}}if(Object.assign(s,{slides:c,snapGrid:m,slidesGrid:p,slidesSizesGrid:u}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){$(i,"--swiper-centered-offset-before",`${-m[0]}px`),$(i,"--swiper-centered-offset-after",`${s.size/2-u[u.length-1]/2}px`);const b=-s.snapGrid[0],y=-s.slidesGrid[0];s.snapGrid=s.snapGrid.map(E=>E+b),s.slidesGrid=s.slidesGrid.map(E=>E+y)}if(f!==d&&s.emit("slidesLengthChange"),m.length!==g&&(s.params.watchOverflow&&s.checkOverflow(),s.emit("snapGridLengthChange")),p.length!==x&&s.emit("slidesGridLengthChange"),t.watchSlidesProgress&&s.updateSlidesOffset(),s.emit("slidesUpdated"),!a&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const b=`${t.containerModifierClass}backface-hidden`,y=s.el.classList.contains(b);f<=t.maxBackfaceHiddenSlides?y||s.el.classList.add(b):y&&s.el.classList.remove(b)}}function qe(s){const e=this,t=[],i=e.virtual&&e.params.virtual.enabled;let n=0,r;typeof s=="number"?e.setTransition(s):s===!0&&e.setTransition(e.params.speed);const o=l=>i?e.slides[e.getSlideIndexByData(l)]:e.slides[l];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(l=>{t.push(l)});else for(r=0;r<Math.ceil(e.params.slidesPerView);r+=1){const l=e.activeIndex+r;if(l>e.slides.length&&!i)break;t.push(o(l))}else t.push(o(e.activeIndex));for(r=0;r<t.length;r+=1)if(typeof t[r]<"u"){const l=t[r].offsetHeight;n=l>n?l:n}(n||n===0)&&(e.wrapperEl.style.height=`${n}px`)}function Ye(){const s=this,e=s.slides,t=s.isElement?s.isHorizontal()?s.wrapperEl.offsetLeft:s.wrapperEl.offsetTop:0;for(let i=0;i<e.length;i+=1)e[i].swiperSlideOffset=(s.isHorizontal()?e[i].offsetLeft:e[i].offsetTop)-t-s.cssOverflowAdjustment()}const fe=(s,e,t)=>{e&&!s.classList.contains(t)?s.classList.add(t):!e&&s.classList.contains(t)&&s.classList.remove(t)};function Xe(s){s===void 0&&(s=this&&this.translate||0);const e=this,t=e.params,{slides:i,rtlTranslate:n,snapGrid:r}=e;if(i.length===0)return;typeof i[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let o=-s;n&&(o=s),e.visibleSlidesIndexes=[],e.visibleSlides=[];let l=t.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*e.size:typeof l=="string"&&(l=parseFloat(l));for(let a=0;a<i.length;a+=1){const d=i[a];let c=d.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(c-=i[0].swiperSlideOffset);const f=(o+(t.centeredSlides?e.minTranslate():0)-c)/(d.swiperSlideSize+l),m=(o-r[0]+(t.centeredSlides?e.minTranslate():0)-c)/(d.swiperSlideSize+l),p=-(o-c),u=p+e.slidesSizesGrid[a],h=p>=0&&p<=e.size-e.slidesSizesGrid[a],w=p>=0&&p<e.size-1||u>1&&u<=e.size||p<=0&&u>=e.size;w&&(e.visibleSlides.push(d),e.visibleSlidesIndexes.push(a)),fe(d,w,t.slideVisibleClass),fe(d,h,t.slideFullyVisibleClass),d.progress=n?-f:f,d.originalProgress=n?-m:m}}function Ue(s){const e=this;if(typeof s>"u"){const c=e.rtlTranslate?-1:1;s=e&&e.translate&&e.translate*c||0}const t=e.params,i=e.maxTranslate()-e.minTranslate();let{progress:n,isBeginning:r,isEnd:o,progressLoop:l}=e;const a=r,d=o;if(i===0)n=0,r=!0,o=!0;else{n=(s-e.minTranslate())/i;const c=Math.abs(s-e.minTranslate())<1,f=Math.abs(s-e.maxTranslate())<1;r=c||n<=0,o=f||n>=1,c&&(n=0),f&&(n=1)}if(t.loop){const c=e.getSlideIndexByData(0),f=e.getSlideIndexByData(e.slides.length-1),m=e.slidesGrid[c],p=e.slidesGrid[f],u=e.slidesGrid[e.slidesGrid.length-1],h=Math.abs(s);h>=m?l=(h-m)/u:l=(h+u-p)/u,l>1&&(l-=1)}Object.assign(e,{progress:n,progressLoop:l,isBeginning:r,isEnd:o}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(s),r&&!a&&e.emit("reachBeginning toEdge"),o&&!d&&e.emit("reachEnd toEdge"),(a&&!r||d&&!o)&&e.emit("fromEdge"),e.emit("progress",n)}const K=(s,e,t)=>{e&&!s.classList.contains(t)?s.classList.add(t):!e&&s.classList.contains(t)&&s.classList.remove(t)};function Ke(){const s=this,{slides:e,params:t,slidesEl:i,activeIndex:n}=s,r=s.virtual&&t.virtual.enabled,o=s.grid&&t.grid&&t.grid.rows>1,l=f=>O(i,`.${t.slideClass}${f}, swiper-slide${f}`)[0];let a,d,c;if(r)if(t.loop){let f=n-s.virtual.slidesBefore;f<0&&(f=s.virtual.slides.length+f),f>=s.virtual.slides.length&&(f-=s.virtual.slides.length),a=l(`[data-swiper-slide-index="${f}"]`)}else a=l(`[data-swiper-slide-index="${n}"]`);else o?(a=e.filter(f=>f.column===n)[0],c=e.filter(f=>f.column===n+1)[0],d=e.filter(f=>f.column===n-1)[0]):a=e[n];a&&(o||(c=Ge(a,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!c&&(c=e[0]),d=ze(a,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!d===0&&(d=e[e.length-1]))),e.forEach(f=>{K(f,f===a,t.slideActiveClass),K(f,f===c,t.slideNextClass),K(f,f===d,t.slidePrevClass)}),s.emitSlidesClasses()}const R=(s,e)=>{if(!s||s.destroyed||!s.params)return;const t=()=>s.isElement?"swiper-slide":`.${s.params.slideClass}`,i=e.closest(t());if(i){let n=i.querySelector(`.${s.params.lazyPreloaderClass}`);!n&&s.isElement&&(i.shadowRoot?n=i.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{i.shadowRoot&&(n=i.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`),n&&n.remove())})),n&&n.remove()}},Q=(s,e)=>{if(!s.slides[e])return;const t=s.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},ie=s=>{if(!s||s.destroyed||!s.params)return;let e=s.params.lazyPreloadPrevNext;const t=s.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const i=s.params.slidesPerView==="auto"?s.slidesPerViewDynamic():Math.ceil(s.params.slidesPerView),n=s.activeIndex;if(s.params.grid&&s.params.grid.rows>1){const o=n,l=[o-e];l.push(...Array.from({length:e}).map((a,d)=>o+i+d)),s.slides.forEach((a,d)=>{l.includes(a.column)&&Q(s,d)});return}const r=n+i-1;if(s.params.rewind||s.params.loop)for(let o=n-e;o<=r+e;o+=1){const l=(o%t+t)%t;(l<n||l>r)&&Q(s,l)}else for(let o=Math.max(n-e,0);o<=Math.min(r+e,t-1);o+=1)o!==n&&(o>r||o<n)&&Q(s,o)};function Qe(s){const{slidesGrid:e,params:t}=s,i=s.rtlTranslate?s.translate:-s.translate;let n;for(let r=0;r<e.length;r+=1)typeof e[r+1]<"u"?i>=e[r]&&i<e[r+1]-(e[r+1]-e[r])/2?n=r:i>=e[r]&&i<e[r+1]&&(n=r+1):i>=e[r]&&(n=r);return t.normalizeSlideIndex&&(n<0||typeof n>"u")&&(n=0),n}function Je(s){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:i,params:n,activeIndex:r,realIndex:o,snapIndex:l}=e;let a=s,d;const c=p=>{let u=p-e.virtual.slidesBefore;return u<0&&(u=e.virtual.slides.length+u),u>=e.virtual.slides.length&&(u-=e.virtual.slides.length),u};if(typeof a>"u"&&(a=Qe(e)),i.indexOf(t)>=0)d=i.indexOf(t);else{const p=Math.min(n.slidesPerGroupSkip,a);d=p+Math.floor((a-p)/n.slidesPerGroup)}if(d>=i.length&&(d=i.length-1),a===r&&!e.params.loop){d!==l&&(e.snapIndex=d,e.emit("snapIndexChange"));return}if(a===r&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=c(a);return}const f=e.grid&&n.grid&&n.grid.rows>1;let m;if(e.virtual&&n.virtual.enabled&&n.loop)m=c(a);else if(f){const p=e.slides.filter(h=>h.column===a)[0];let u=parseInt(p.getAttribute("data-swiper-slide-index"),10);Number.isNaN(u)&&(u=Math.max(e.slides.indexOf(p),0)),m=Math.floor(u/n.grid.rows)}else if(e.slides[a]){const p=e.slides[a].getAttribute("data-swiper-slide-index");p?m=parseInt(p,10):m=a}else m=a;Object.assign(e,{previousSnapIndex:l,snapIndex:d,previousRealIndex:o,realIndex:m,previousIndex:r,activeIndex:a}),e.initialized&&ie(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(o!==m&&e.emit("realIndexChange"),e.emit("slideChange"))}function Ze(s,e){const t=this,i=t.params;let n=s.closest(`.${i.slideClass}, swiper-slide`);!n&&t.isElement&&e&&e.length>1&&e.includes(s)&&[...e.slice(e.indexOf(s)+1,e.length)].forEach(l=>{!n&&l.matches&&l.matches(`.${i.slideClass}, swiper-slide`)&&(n=l)});let r=!1,o;if(n){for(let l=0;l<t.slides.length;l+=1)if(t.slides[l]===n){r=!0,o=l;break}}if(n&&r)t.clickedSlide=n,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(n.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=o;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}i.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var et={updateSize:We,updateSlides:je,updateAutoHeight:qe,updateSlidesOffset:Ye,updateSlidesProgress:Xe,updateProgress:Ue,updateSlidesClasses:Ke,updateActiveIndex:Je,updateClickedSlide:Ze};function tt(s){s===void 0&&(s=this.isHorizontal()?"x":"y");const e=this,{params:t,rtlTranslate:i,translate:n,wrapperEl:r}=e;if(t.virtualTranslate)return i?-n:n;if(t.cssMode)return n;let o=Ae(r,s);return o+=e.cssOverflowAdjustment(),i&&(o=-o),o||0}function st(s,e){const t=this,{rtlTranslate:i,params:n,wrapperEl:r,progress:o}=t;let l=0,a=0;const d=0;t.isHorizontal()?l=i?-s:s:a=s,n.roundLengths&&(l=Math.floor(l),a=Math.floor(a)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?l:a,n.cssMode?r[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-l:-a:n.virtualTranslate||(t.isHorizontal()?l-=t.cssOverflowAdjustment():a-=t.cssOverflowAdjustment(),r.style.transform=`translate3d(${l}px, ${a}px, ${d}px)`);let c;const f=t.maxTranslate()-t.minTranslate();f===0?c=0:c=(s-t.minTranslate())/f,c!==o&&t.updateProgress(s),t.emit("setTranslate",t.translate,e)}function it(){return-this.snapGrid[0]}function rt(){return-this.snapGrid[this.snapGrid.length-1]}function nt(s,e,t,i,n){s===void 0&&(s=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),i===void 0&&(i=!0);const r=this,{params:o,wrapperEl:l}=r;if(r.animating&&o.preventInteractionOnTransition)return!1;const a=r.minTranslate(),d=r.maxTranslate();let c;if(i&&s>a?c=a:i&&s<d?c=d:c=s,r.updateProgress(c),o.cssMode){const f=r.isHorizontal();if(e===0)l[f?"scrollLeft":"scrollTop"]=-c;else{if(!r.support.smoothScroll)return we({swiper:r,targetPosition:-c,side:f?"left":"top"}),!0;l.scrollTo({[f?"left":"top"]:-c,behavior:"smooth"})}return!0}return e===0?(r.setTransition(0),r.setTranslate(c),t&&(r.emit("beforeTransitionStart",e,n),r.emit("transitionEnd"))):(r.setTransition(e),r.setTranslate(c),t&&(r.emit("beforeTransitionStart",e,n),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(m){!r||r.destroyed||m.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,r.animating=!1,t&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}var at={getTranslate:tt,setTranslate:st,minTranslate:it,maxTranslate:rt,translateTo:nt};function lt(s,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${s}ms`,t.wrapperEl.style.transitionDelay=s===0?"0ms":""),t.emit("setTransition",s,e)}function Se(s){let{swiper:e,runCallbacks:t,direction:i,step:n}=s;const{activeIndex:r,previousIndex:o}=e;let l=i;if(l||(r>o?l="next":r<o?l="prev":l="reset"),e.emit(`transition${n}`),t&&r!==o){if(l==="reset"){e.emit(`slideResetTransition${n}`);return}e.emit(`slideChangeTransition${n}`),l==="next"?e.emit(`slideNextTransition${n}`):e.emit(`slidePrevTransition${n}`)}}function ot(s,e){s===void 0&&(s=!0);const t=this,{params:i}=t;i.cssMode||(i.autoHeight&&t.updateAutoHeight(),Se({swiper:t,runCallbacks:s,direction:e,step:"Start"}))}function dt(s,e){s===void 0&&(s=!0);const t=this,{params:i}=t;t.animating=!1,!i.cssMode&&(t.setTransition(0),Se({swiper:t,runCallbacks:s,direction:e,step:"End"}))}var ct={setTransition:lt,transitionStart:ot,transitionEnd:dt};function ft(s,e,t,i,n){s===void 0&&(s=0),t===void 0&&(t=!0),typeof s=="string"&&(s=parseInt(s,10));const r=this;let o=s;o<0&&(o=0);const{params:l,snapGrid:a,slidesGrid:d,previousIndex:c,activeIndex:f,rtlTranslate:m,wrapperEl:p,enabled:u}=r;if(!u&&!i&&!n||r.destroyed||r.animating&&l.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=r.params.speed);const h=Math.min(r.params.slidesPerGroupSkip,o);let w=h+Math.floor((o-h)/r.params.slidesPerGroup);w>=a.length&&(w=a.length-1);const g=-a[w];if(l.normalizeSlideIndex)for(let v=0;v<d.length;v+=1){const S=-Math.floor(g*100),_=Math.floor(d[v]*100),M=Math.floor(d[v+1]*100);typeof d[v+1]<"u"?S>=_&&S<M-(M-_)/2?o=v:S>=_&&S<M&&(o=v+1):S>=_&&(o=v)}if(r.initialized&&o!==f&&(!r.allowSlideNext&&(m?g>r.translate&&g>r.minTranslate():g<r.translate&&g<r.minTranslate())||!r.allowSlidePrev&&g>r.translate&&g>r.maxTranslate()&&(f||0)!==o))return!1;o!==(c||0)&&t&&r.emit("beforeSlideChangeStart"),r.updateProgress(g);let x;if(o>f?x="next":o<f?x="prev":x="reset",m&&-g===r.translate||!m&&g===r.translate)return r.updateActiveIndex(o),l.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),l.effect!=="slide"&&r.setTranslate(g),x!=="reset"&&(r.transitionStart(t,x),r.transitionEnd(t,x)),!1;if(l.cssMode){const v=r.isHorizontal(),S=m?g:-g;if(e===0){const _=r.virtual&&r.params.virtual.enabled;_&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),_&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[v?"scrollLeft":"scrollTop"]=S})):p[v?"scrollLeft":"scrollTop"]=S,_&&requestAnimationFrame(()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1})}else{if(!r.support.smoothScroll)return we({swiper:r,targetPosition:S,side:v?"left":"top"}),!0;p.scrollTo({[v?"left":"top"]:S,behavior:"smooth"})}return!0}return r.setTransition(e),r.setTranslate(g),r.updateActiveIndex(o),r.updateSlidesClasses(),r.emit("beforeTransitionStart",e,i),r.transitionStart(t,x),e===0?r.transitionEnd(t,x):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(S){!r||r.destroyed||S.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(t,x))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0}function ut(s,e,t,i){s===void 0&&(s=0),t===void 0&&(t=!0),typeof s=="string"&&(s=parseInt(s,10));const n=this;if(n.destroyed)return;typeof e>"u"&&(e=n.params.speed);const r=n.grid&&n.params.grid&&n.params.grid.rows>1;let o=s;if(n.params.loop)if(n.virtual&&n.params.virtual.enabled)o=o+n.virtual.slidesBefore;else{let l;if(r){const m=o*n.params.grid.rows;l=n.slides.filter(p=>p.getAttribute("data-swiper-slide-index")*1===m)[0].column}else l=n.getSlideIndexByData(o);const a=r?Math.ceil(n.slides.length/n.params.grid.rows):n.slides.length,{centeredSlides:d}=n.params;let c=n.params.slidesPerView;c==="auto"?c=n.slidesPerViewDynamic():(c=Math.ceil(parseFloat(n.params.slidesPerView,10)),d&&c%2===0&&(c=c+1));let f=a-l<c;if(d&&(f=f||l<Math.ceil(c/2)),i&&d&&n.params.slidesPerView!=="auto"&&!r&&(f=!1),f){const m=d?l<n.activeIndex?"prev":"next":l-n.activeIndex-1<n.params.slidesPerView?"next":"prev";n.loopFix({direction:m,slideTo:!0,activeSlideIndex:m==="next"?l+1:l-a+1,slideRealIndex:m==="next"?n.realIndex:void 0})}if(r){const m=o*n.params.grid.rows;o=n.slides.filter(p=>p.getAttribute("data-swiper-slide-index")*1===m)[0].column}else o=n.getSlideIndexByData(o)}return requestAnimationFrame(()=>{n.slideTo(o,e,t,i)}),n}function pt(s,e,t){e===void 0&&(e=!0);const i=this,{enabled:n,params:r,animating:o}=i;if(!n||i.destroyed)return i;typeof s>"u"&&(s=i.params.speed);let l=r.slidesPerGroup;r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(l=Math.max(i.slidesPerViewDynamic("current",!0),1));const a=i.activeIndex<r.slidesPerGroupSkip?1:l,d=i.virtual&&r.virtual.enabled;if(r.loop){if(o&&!d&&r.loopPreventsSliding)return!1;if(i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft,i.activeIndex===i.slides.length-1&&r.cssMode)return requestAnimationFrame(()=>{i.slideTo(i.activeIndex+a,s,e,t)}),!0}return r.rewind&&i.isEnd?i.slideTo(0,s,e,t):i.slideTo(i.activeIndex+a,s,e,t)}function mt(s,e,t){e===void 0&&(e=!0);const i=this,{params:n,snapGrid:r,slidesGrid:o,rtlTranslate:l,enabled:a,animating:d}=i;if(!a||i.destroyed)return i;typeof s>"u"&&(s=i.params.speed);const c=i.virtual&&n.virtual.enabled;if(n.loop){if(d&&!c&&n.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}const f=l?i.translate:-i.translate;function m(g){return g<0?-Math.floor(Math.abs(g)):Math.floor(g)}const p=m(f),u=r.map(g=>m(g));let h=r[u.indexOf(p)-1];if(typeof h>"u"&&n.cssMode){let g;r.forEach((x,v)=>{p>=x&&(g=v)}),typeof g<"u"&&(h=r[g>0?g-1:g])}let w=0;if(typeof h<"u"&&(w=o.indexOf(h),w<0&&(w=i.activeIndex-1),n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(w=w-i.slidesPerViewDynamic("previous",!0)+1,w=Math.max(w,0))),n.rewind&&i.isBeginning){const g=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(g,s,e,t)}else if(n.loop&&i.activeIndex===0&&n.cssMode)return requestAnimationFrame(()=>{i.slideTo(w,s,e,t)}),!0;return i.slideTo(w,s,e,t)}function ht(s,e,t){e===void 0&&(e=!0);const i=this;if(!i.destroyed)return typeof s>"u"&&(s=i.params.speed),i.slideTo(i.activeIndex,s,e,t)}function gt(s,e,t,i){e===void 0&&(e=!0),i===void 0&&(i=.5);const n=this;if(n.destroyed)return;typeof s>"u"&&(s=n.params.speed);let r=n.activeIndex;const o=Math.min(n.params.slidesPerGroupSkip,r),l=o+Math.floor((r-o)/n.params.slidesPerGroup),a=n.rtlTranslate?n.translate:-n.translate;if(a>=n.snapGrid[l]){const d=n.snapGrid[l],c=n.snapGrid[l+1];a-d>(c-d)*i&&(r+=n.params.slidesPerGroup)}else{const d=n.snapGrid[l-1],c=n.snapGrid[l];a-d<=(c-d)*i&&(r-=n.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,n.slidesGrid.length-1),n.slideTo(r,s,e,t)}function vt(){const s=this;if(s.destroyed)return;const{params:e,slidesEl:t}=s,i=e.slidesPerView==="auto"?s.slidesPerViewDynamic():e.slidesPerView;let n=s.clickedIndex,r;const o=s.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(s.animating)return;r=parseInt(s.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?n<s.loopedSlides-i/2||n>s.slides.length-s.loopedSlides+i/2?(s.loopFix(),n=s.getSlideIndex(O(t,`${o}[data-swiper-slide-index="${r}"]`)[0]),se(()=>{s.slideTo(n)})):s.slideTo(n):n>s.slides.length-i?(s.loopFix(),n=s.getSlideIndex(O(t,`${o}[data-swiper-slide-index="${r}"]`)[0]),se(()=>{s.slideTo(n)})):s.slideTo(n)}else s.slideTo(n)}var wt={slideTo:ft,slideToLoop:ut,slideNext:pt,slidePrev:mt,slideReset:ht,slideToClosest:gt,slideToClickedSlide:vt};function xt(s){const e=this,{params:t,slidesEl:i}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;const n=()=>{O(i,`.${t.slideClass}, swiper-slide`).forEach((f,m)=>{f.setAttribute("data-swiper-slide-index",m)})},r=e.grid&&t.grid&&t.grid.rows>1,o=t.slidesPerGroup*(r?t.grid.rows:1),l=e.slides.length%o!==0,a=r&&e.slides.length%t.grid.rows!==0,d=c=>{for(let f=0;f<c;f+=1){const m=e.isElement?q("swiper-slide",[t.slideBlankClass]):q("div",[t.slideClass,t.slideBlankClass]);e.slidesEl.append(m)}};if(l){if(t.loopAddBlankSlides){const c=o-e.slides.length%o;d(c),e.recalcSlides(),e.updateSlides()}else j("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");n()}else if(a){if(t.loopAddBlankSlides){const c=t.grid.rows-e.slides.length%t.grid.rows;d(c),e.recalcSlides(),e.updateSlides()}else j("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");n()}else n();e.loopFix({slideRealIndex:s,direction:t.centeredSlides?void 0:"next"})}function bt(s){let{slideRealIndex:e,slideTo:t=!0,direction:i,setTranslate:n,activeSlideIndex:r,byController:o,byMousewheel:l}=s===void 0?{}:s;const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:d,allowSlidePrev:c,allowSlideNext:f,slidesEl:m,params:p}=a,{centeredSlides:u}=p;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&p.virtual.enabled){t&&(!p.centeredSlides&&a.snapIndex===0?a.slideTo(a.virtual.slides.length,0,!1,!0):p.centeredSlides&&a.snapIndex<p.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0)),a.allowSlidePrev=c,a.allowSlideNext=f,a.emit("loopFix");return}let h=p.slidesPerView;h==="auto"?h=a.slidesPerViewDynamic():(h=Math.ceil(parseFloat(p.slidesPerView,10)),u&&h%2===0&&(h=h+1));const w=p.slidesPerGroupAuto?h:p.slidesPerGroup;let g=w;g%w!==0&&(g+=w-g%w),g+=p.loopAdditionalSlides,a.loopedSlides=g;const x=a.grid&&p.grid&&p.grid.rows>1;d.length<h+g?j("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):x&&p.grid.fill==="row"&&j("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const v=[],S=[];let _=a.activeIndex;typeof r>"u"?r=a.getSlideIndex(d.filter(T=>T.classList.contains(p.slideActiveClass))[0]):_=r;const M=i==="next"||!i,F=i==="prev"||!i;let k=0,V=0;const b=x?Math.ceil(d.length/p.grid.rows):d.length,E=(x?d[r].column:r)+(u&&typeof n>"u"?-h/2+.5:0);if(E<g){k=Math.max(g-E,w);for(let T=0;T<g-E;T+=1){const P=T-Math.floor(T/b)*b;if(x){const C=b-P-1;for(let G=d.length-1;G>=0;G-=1)d[G].column===C&&v.push(G)}else v.push(b-P-1)}}else if(E+h>b-g){V=Math.max(E-(b-g*2),w);for(let T=0;T<V;T+=1){const P=T-Math.floor(T/b)*b;x?d.forEach((C,G)=>{C.column===P&&S.push(G)}):S.push(P)}}if(a.__preventObserver__=!0,requestAnimationFrame(()=>{a.__preventObserver__=!1}),F&&v.forEach(T=>{d[T].swiperLoopMoveDOM=!0,m.prepend(d[T]),d[T].swiperLoopMoveDOM=!1}),M&&S.forEach(T=>{d[T].swiperLoopMoveDOM=!0,m.append(d[T]),d[T].swiperLoopMoveDOM=!1}),a.recalcSlides(),p.slidesPerView==="auto"?a.updateSlides():x&&(v.length>0&&F||S.length>0&&M)&&a.slides.forEach((T,P)=>{a.grid.updateSlide(P,T,a.slides)}),p.watchSlidesProgress&&a.updateSlidesOffset(),t){if(v.length>0&&F){if(typeof e>"u"){const T=a.slidesGrid[_],C=a.slidesGrid[_+k]-T;l?a.setTranslate(a.translate-C):(a.slideTo(_+Math.ceil(k),0,!1,!0),n&&(a.touchEventsData.startTranslate=a.touchEventsData.startTranslate-C,a.touchEventsData.currentTranslate=a.touchEventsData.currentTranslate-C))}else if(n){const T=x?v.length/p.grid.rows:v.length;a.slideTo(a.activeIndex+T,0,!1,!0),a.touchEventsData.currentTranslate=a.translate}}else if(S.length>0&&M)if(typeof e>"u"){const T=a.slidesGrid[_],C=a.slidesGrid[_-V]-T;l?a.setTranslate(a.translate-C):(a.slideTo(_-V,0,!1,!0),n&&(a.touchEventsData.startTranslate=a.touchEventsData.startTranslate-C,a.touchEventsData.currentTranslate=a.touchEventsData.currentTranslate-C))}else{const T=x?S.length/p.grid.rows:S.length;a.slideTo(a.activeIndex-T,0,!1,!0)}}if(a.allowSlidePrev=c,a.allowSlideNext=f,a.controller&&a.controller.control&&!o){const T={slideRealIndex:e,direction:i,setTranslate:n,activeSlideIndex:r,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach(P=>{!P.destroyed&&P.params.loop&&P.loopFix({...T,slideTo:P.params.slidesPerView===p.slidesPerView?t:!1})}):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix({...T,slideTo:a.controller.control.params.slidesPerView===p.slidesPerView?t:!1})}a.emit("loopFix")}function St(){const s=this,{params:e,slidesEl:t}=s;if(!e.loop||s.virtual&&s.params.virtual.enabled)return;s.recalcSlides();const i=[];s.slides.forEach(n=>{const r=typeof n.swiperSlideIndex>"u"?n.getAttribute("data-swiper-slide-index")*1:n.swiperSlideIndex;i[r]=n}),s.slides.forEach(n=>{n.removeAttribute("data-swiper-slide-index")}),i.forEach(n=>{t.append(n)}),s.recalcSlides(),s.slideTo(s.realIndex,0)}var _t={loopCreate:xt,loopFix:bt,loopDestroy:St};function Tt(s){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=s?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function yt(){const s=this;s.params.watchOverflow&&s.isLocked||s.params.cssMode||(s.isElement&&(s.__preventObserver__=!0),s[s.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",s.isElement&&requestAnimationFrame(()=>{s.__preventObserver__=!1}))}var Et={setGrabCursor:Tt,unsetGrabCursor:yt};function Mt(s,e){e===void 0&&(e=this);function t(i){if(!i||i===N()||i===A())return null;i.assignedSlot&&(i=i.assignedSlot);const n=i.closest(s);return!n&&!i.getRootNode?null:n||t(i.getRootNode().host)}return t(e)}function ue(s,e,t){const i=A(),{params:n}=s,r=n.edgeSwipeDetection,o=n.edgeSwipeThreshold;return r&&(t<=o||t>=i.innerWidth-o)?r==="prevent"?(e.preventDefault(),!0):!1:!0}function Pt(s){const e=this,t=N();let i=s;i.originalEvent&&(i=i.originalEvent);const n=e.touchEventsData;if(i.type==="pointerdown"){if(n.pointerId!==null&&n.pointerId!==i.pointerId)return;n.pointerId=i.pointerId}else i.type==="touchstart"&&i.targetTouches.length===1&&(n.touchId=i.targetTouches[0].identifier);if(i.type==="touchstart"){ue(e,i,i.targetTouches[0].pageX);return}const{params:r,touches:o,enabled:l}=e;if(!l||!r.simulateTouch&&i.pointerType==="mouse"||e.animating&&r.preventInteractionOnTransition)return;!e.animating&&r.cssMode&&r.loop&&e.loopFix();let a=i.target;if(r.touchEventsTarget==="wrapper"&&!e.wrapperEl.contains(a)||"which"in i&&i.which===3||"button"in i&&i.button>0||n.isTouched&&n.isMoved)return;const d=!!r.noSwipingClass&&r.noSwipingClass!=="",c=i.composedPath?i.composedPath():i.path;d&&i.target&&i.target.shadowRoot&&c&&(a=c[0]);const f=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,m=!!(i.target&&i.target.shadowRoot);if(r.noSwiping&&(m?Mt(f,a):a.closest(f))){e.allowClick=!0;return}if(r.swipeHandler&&!a.closest(r.swipeHandler))return;o.currentX=i.pageX,o.currentY=i.pageY;const p=o.currentX,u=o.currentY;if(!ue(e,i,p))return;Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=p,o.startY=u,n.touchStartTime=W(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,r.threshold>0&&(n.allowThresholdMove=!1);let h=!0;a.matches(n.focusableElements)&&(h=!1,a.nodeName==="SELECT"&&(n.isTouched=!1)),t.activeElement&&t.activeElement.matches(n.focusableElements)&&t.activeElement!==a&&t.activeElement.blur();const w=h&&e.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||w)&&!a.isContentEditable&&i.preventDefault(),r.freeMode&&r.freeMode.enabled&&e.freeMode&&e.animating&&!r.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",i)}function kt(s){const e=N(),t=this,i=t.touchEventsData,{params:n,touches:r,rtlTranslate:o,enabled:l}=t;if(!l||!n.simulateTouch&&s.pointerType==="mouse")return;let a=s;if(a.originalEvent&&(a=a.originalEvent),a.type==="pointermove"&&(i.touchId!==null||a.pointerId!==i.pointerId))return;let d;if(a.type==="touchmove"){if(d=[...a.changedTouches].filter(M=>M.identifier===i.touchId)[0],!d||d.identifier!==i.touchId)return}else d=a;if(!i.isTouched){i.startMoving&&i.isScrolling&&t.emit("touchMoveOpposite",a);return}const c=d.pageX,f=d.pageY;if(a.preventedByNestedSwiper){r.startX=c,r.startY=f;return}if(!t.allowTouchMove){a.target.matches(i.focusableElements)||(t.allowClick=!1),i.isTouched&&(Object.assign(r,{startX:c,startY:f,currentX:c,currentY:f}),i.touchStartTime=W());return}if(n.touchReleaseOnEdges&&!n.loop){if(t.isVertical()){if(f<r.startY&&t.translate<=t.maxTranslate()||f>r.startY&&t.translate>=t.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else if(c<r.startX&&t.translate<=t.maxTranslate()||c>r.startX&&t.translate>=t.minTranslate())return}if(e.activeElement&&a.target===e.activeElement&&a.target.matches(i.focusableElements)){i.isMoved=!0,t.allowClick=!1;return}i.allowTouchCallbacks&&t.emit("touchMove",a),r.previousX=r.currentX,r.previousY=r.currentY,r.currentX=c,r.currentY=f;const m=r.currentX-r.startX,p=r.currentY-r.startY;if(t.params.threshold&&Math.sqrt(m**2+p**2)<t.params.threshold)return;if(typeof i.isScrolling>"u"){let M;t.isHorizontal()&&r.currentY===r.startY||t.isVertical()&&r.currentX===r.startX?i.isScrolling=!1:m*m+p*p>=25&&(M=Math.atan2(Math.abs(p),Math.abs(m))*180/Math.PI,i.isScrolling=t.isHorizontal()?M>n.touchAngle:90-M>n.touchAngle)}if(i.isScrolling&&t.emit("touchMoveOpposite",a),typeof i.startMoving>"u"&&(r.currentX!==r.startX||r.currentY!==r.startY)&&(i.startMoving=!0),i.isScrolling||a.type==="touchmove"&&i.preventTouchMoveFromPointerMove){i.isTouched=!1;return}if(!i.startMoving)return;t.allowClick=!1,!n.cssMode&&a.cancelable&&a.preventDefault(),n.touchMoveStopPropagation&&!n.nested&&a.stopPropagation();let u=t.isHorizontal()?m:p,h=t.isHorizontal()?r.currentX-r.previousX:r.currentY-r.previousY;n.oneWayMovement&&(u=Math.abs(u)*(o?1:-1),h=Math.abs(h)*(o?1:-1)),r.diff=u,u*=n.touchRatio,o&&(u=-u,h=-h);const w=t.touchesDirection;t.swipeDirection=u>0?"prev":"next",t.touchesDirection=h>0?"prev":"next";const g=t.params.loop&&!n.cssMode,x=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!i.isMoved){if(g&&x&&t.loopFix({direction:t.swipeDirection}),i.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const M=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(M)}i.allowMomentumBounce=!1,n.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",a)}let v;if(new Date().getTime(),i.isMoved&&i.allowThresholdMove&&w!==t.touchesDirection&&g&&x&&Math.abs(u)>=1){Object.assign(r,{startX:c,startY:f,currentX:c,currentY:f,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,i.startTranslate=i.currentTranslate;return}t.emit("sliderMove",a),i.isMoved=!0,i.currentTranslate=u+i.startTranslate;let S=!0,_=n.resistanceRatio;if(n.touchReleaseOnEdges&&(_=0),u>0?(g&&x&&!v&&i.allowThresholdMove&&i.currentTranslate>(n.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>t.minTranslate()&&(S=!1,n.resistance&&(i.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+i.startTranslate+u)**_))):u<0&&(g&&x&&!v&&i.allowThresholdMove&&i.currentTranslate<(n.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]:t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(n.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(n.slidesPerView,10)))}),i.currentTranslate<t.maxTranslate()&&(S=!1,n.resistance&&(i.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-i.startTranslate-u)**_))),S&&(a.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(i.currentTranslate=i.startTranslate),n.threshold>0)if(Math.abs(u)>n.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,i.currentTranslate=i.startTranslate,r.diff=t.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY;return}}else{i.currentTranslate=i.startTranslate;return}!n.followFinger||n.cssMode||((n.freeMode&&n.freeMode.enabled&&t.freeMode||n.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),n.freeMode&&n.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(i.currentTranslate),t.setTranslate(i.currentTranslate))}function Ct(s){const e=this,t=e.touchEventsData;let i=s;i.originalEvent&&(i=i.originalEvent);let n;if(i.type==="touchend"||i.type==="touchcancel"){if(n=[...i.changedTouches].filter(_=>_.identifier===t.touchId)[0],!n||n.identifier!==t.touchId)return}else{if(t.touchId!==null||i.pointerId!==t.pointerId)return;n=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:o,touches:l,rtlTranslate:a,slidesGrid:d,enabled:c}=e;if(!c||!o.simulateTouch&&i.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",i),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&o.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}o.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const f=W(),m=f-t.touchStartTime;if(e.allowClick){const _=i.path||i.composedPath&&i.composedPath();e.updateClickedSlide(_&&_[0]||i.target,_),e.emit("tap click",i),m<300&&f-t.lastClickTime<300&&e.emit("doubleTap doubleClick",i)}if(t.lastClickTime=W(),se(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||l.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let p;if(o.followFinger?p=a?e.translate:-e.translate:p=-t.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:p});return}const u=p>=-e.maxTranslate()&&!e.params.loop;let h=0,w=e.slidesSizesGrid[0];for(let _=0;_<d.length;_+=_<o.slidesPerGroupSkip?1:o.slidesPerGroup){const M=_<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof d[_+M]<"u"?(u||p>=d[_]&&p<d[_+M])&&(h=_,w=d[_+M]-d[_]):(u||p>=d[_])&&(h=_,w=d[d.length-1]-d[d.length-2])}let g=null,x=null;o.rewind&&(e.isBeginning?x=o.virtual&&o.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(g=0));const v=(p-d[h])/w,S=h<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(m>o.longSwipesMs){if(!o.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(v>=o.longSwipesRatio?e.slideTo(o.rewind&&e.isEnd?g:h+S):e.slideTo(h)),e.swipeDirection==="prev"&&(v>1-o.longSwipesRatio?e.slideTo(h+S):x!==null&&v<0&&Math.abs(v)>o.longSwipesRatio?e.slideTo(x):e.slideTo(h))}else{if(!o.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(i.target===e.navigation.nextEl||i.target===e.navigation.prevEl)?i.target===e.navigation.nextEl?e.slideTo(h+S):e.slideTo(h):(e.swipeDirection==="next"&&e.slideTo(g!==null?g:h+S),e.swipeDirection==="prev"&&e.slideTo(x!==null?x:h))}}function pe(){const s=this,{params:e,el:t}=s;if(t&&t.offsetWidth===0)return;e.breakpoints&&s.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:n,snapGrid:r}=s,o=s.virtual&&s.params.virtual.enabled;s.allowSlideNext=!0,s.allowSlidePrev=!0,s.updateSize(),s.updateSlides(),s.updateSlidesClasses();const l=o&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&s.isEnd&&!s.isBeginning&&!s.params.centeredSlides&&!l?s.slideTo(s.slides.length-1,0,!1,!0):s.params.loop&&!o?s.slideToLoop(s.realIndex,0,!1,!0):s.slideTo(s.activeIndex,0,!1,!0),s.autoplay&&s.autoplay.running&&s.autoplay.paused&&(clearTimeout(s.autoplay.resizeTimeout),s.autoplay.resizeTimeout=setTimeout(()=>{s.autoplay&&s.autoplay.running&&s.autoplay.paused&&s.autoplay.resume()},500)),s.allowSlidePrev=n,s.allowSlideNext=i,s.params.watchOverflow&&r!==s.snapGrid&&s.checkOverflow()}function Lt(s){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&s.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(s.stopPropagation(),s.stopImmediatePropagation())))}function It(){const s=this,{wrapperEl:e,rtlTranslate:t,enabled:i}=s;if(!i)return;s.previousTranslate=s.translate,s.isHorizontal()?s.translate=-e.scrollLeft:s.translate=-e.scrollTop,s.translate===0&&(s.translate=0),s.updateActiveIndex(),s.updateSlidesClasses();let n;const r=s.maxTranslate()-s.minTranslate();r===0?n=0:n=(s.translate-s.minTranslate())/r,n!==s.progress&&s.updateProgress(t?-s.translate:s.translate),s.emit("setTranslate",s.translate,!1)}function At(s){const e=this;R(e,s.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function Ot(){const s=this;s.documentTouchHandlerProceeded||(s.documentTouchHandlerProceeded=!0,s.params.touchReleaseOnEdges&&(s.el.style.touchAction="auto"))}const _e=(s,e)=>{const t=N(),{params:i,el:n,wrapperEl:r,device:o}=s,l=!!i.nested,a=e==="on"?"addEventListener":"removeEventListener",d=e;t[a]("touchstart",s.onDocumentTouchStart,{passive:!1,capture:l}),n[a]("touchstart",s.onTouchStart,{passive:!1}),n[a]("pointerdown",s.onTouchStart,{passive:!1}),t[a]("touchmove",s.onTouchMove,{passive:!1,capture:l}),t[a]("pointermove",s.onTouchMove,{passive:!1,capture:l}),t[a]("touchend",s.onTouchEnd,{passive:!0}),t[a]("pointerup",s.onTouchEnd,{passive:!0}),t[a]("pointercancel",s.onTouchEnd,{passive:!0}),t[a]("touchcancel",s.onTouchEnd,{passive:!0}),t[a]("pointerout",s.onTouchEnd,{passive:!0}),t[a]("pointerleave",s.onTouchEnd,{passive:!0}),t[a]("contextmenu",s.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&n[a]("click",s.onClick,!0),i.cssMode&&r[a]("scroll",s.onScroll),i.updateOnWindowResize?s[d](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",pe,!0):s[d]("observerUpdate",pe,!0),n[a]("load",s.onLoad,{capture:!0})};function zt(){const s=this,{params:e}=s;s.onTouchStart=Pt.bind(s),s.onTouchMove=kt.bind(s),s.onTouchEnd=Ct.bind(s),s.onDocumentTouchStart=Ot.bind(s),e.cssMode&&(s.onScroll=It.bind(s)),s.onClick=Lt.bind(s),s.onLoad=At.bind(s),_e(s,"on")}function Gt(){_e(this,"off")}var Dt={attachEvents:zt,detachEvents:Gt};const me=(s,e)=>s.grid&&e.grid&&e.grid.rows>1;function Ft(){const s=this,{realIndex:e,initialized:t,params:i,el:n}=s,r=i.breakpoints;if(!r||r&&Object.keys(r).length===0)return;const o=s.getBreakpoint(r,s.params.breakpointsBase,s.el);if(!o||s.currentBreakpoint===o)return;const a=(o in r?r[o]:void 0)||s.originalParams,d=me(s,i),c=me(s,a),f=s.params.grabCursor,m=a.grabCursor,p=i.enabled;d&&!c?(n.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),s.emitContainerClasses()):!d&&c&&(n.classList.add(`${i.containerModifierClass}grid`),(a.grid.fill&&a.grid.fill==="column"||!a.grid.fill&&i.grid.fill==="column")&&n.classList.add(`${i.containerModifierClass}grid-column`),s.emitContainerClasses()),f&&!m?s.unsetGrabCursor():!f&&m&&s.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(v=>{if(typeof a[v]>"u")return;const S=i[v]&&i[v].enabled,_=a[v]&&a[v].enabled;S&&!_&&s[v].disable(),!S&&_&&s[v].enable()});const u=a.direction&&a.direction!==i.direction,h=i.loop&&(a.slidesPerView!==i.slidesPerView||u),w=i.loop;u&&t&&s.changeDirection(),I(s.params,a);const g=s.params.enabled,x=s.params.loop;Object.assign(s,{allowTouchMove:s.params.allowTouchMove,allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev}),p&&!g?s.disable():!p&&g&&s.enable(),s.currentBreakpoint=o,s.emit("_beforeBreakpoint",a),t&&(h?(s.loopDestroy(),s.loopCreate(e),s.updateSlides()):!w&&x?(s.loopCreate(e),s.updateSlides()):w&&!x&&s.loopDestroy()),s.emit("breakpoint",a)}function Bt(s,e,t){if(e===void 0&&(e="window"),!s||e==="container"&&!t)return;let i=!1;const n=A(),r=e==="window"?n.innerHeight:t.clientHeight,o=Object.keys(s).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const a=parseFloat(l.substr(1));return{value:r*a,point:l}}return{value:l,point:l}});o.sort((l,a)=>parseInt(l.value,10)-parseInt(a.value,10));for(let l=0;l<o.length;l+=1){const{point:a,value:d}=o[l];e==="window"?n.matchMedia(`(min-width: ${d}px)`).matches&&(i=a):d<=t.clientWidth&&(i=a)}return i||"max"}var Vt={setBreakpoint:Ft,getBreakpoint:Bt};function Nt(s,e){const t=[];return s.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(n=>{i[n]&&t.push(e+n)}):typeof i=="string"&&t.push(e+i)}),t}function Ht(){const s=this,{classNames:e,params:t,rtl:i,el:n,device:r}=s,o=Nt(["initialized",t.direction,{"free-mode":s.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:i},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:r.android},{ios:r.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...o),n.classList.add(...e),s.emitContainerClasses()}function $t(){const s=this,{el:e,classNames:t}=s;e.classList.remove(...t),s.emitContainerClasses()}var Rt={addClasses:Ht,removeClasses:$t};function Wt(){const s=this,{isLocked:e,params:t}=s,{slidesOffsetBefore:i}=t;if(i){const n=s.slides.length-1,r=s.slidesGrid[n]+s.slidesSizesGrid[n]+i*2;s.isLocked=s.size>r}else s.isLocked=s.snapGrid.length===1;t.allowSlideNext===!0&&(s.allowSlideNext=!s.isLocked),t.allowSlidePrev===!0&&(s.allowSlidePrev=!s.isLocked),e&&e!==s.isLocked&&(s.isEnd=!1),e!==s.isLocked&&s.emit(s.isLocked?"lock":"unlock")}var jt={checkOverflow:Wt},he={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function qt(s,e){return function(i){i===void 0&&(i={});const n=Object.keys(i)[0],r=i[n];if(typeof r!="object"||r===null){I(e,i);return}if(s[n]===!0&&(s[n]={enabled:!0}),n==="navigation"&&s[n]&&s[n].enabled&&!s[n].prevEl&&!s[n].nextEl&&(s[n].auto=!0),["pagination","scrollbar"].indexOf(n)>=0&&s[n]&&s[n].enabled&&!s[n].el&&(s[n].auto=!0),!(n in s&&"enabled"in r)){I(e,i);return}typeof s[n]=="object"&&!("enabled"in s[n])&&(s[n].enabled=!0),s[n]||(s[n]={enabled:!1}),I(e,i)}}const J={eventsEmitter:Re,update:et,translate:at,transition:ct,slide:wt,loop:_t,grabCursor:Et,events:Dt,breakpoints:Vt,checkOverflow:jt,classes:Rt},Z={};class L{constructor(){let e,t;for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];n.length===1&&n[0].constructor&&Object.prototype.toString.call(n[0]).slice(8,-1)==="Object"?t=n[0]:[e,t]=n,t||(t={}),t=I({},t),e&&!t.el&&(t.el=e);const o=N();if(t.el&&typeof t.el=="string"&&o.querySelectorAll(t.el).length>1){const c=[];return o.querySelectorAll(t.el).forEach(f=>{const m=I({},t,{el:f});c.push(new L(m))}),c}const l=this;l.__swiper__=!0,l.support=xe(),l.device=be({userAgent:t.userAgent}),l.browser=Ne(),l.eventsListeners={},l.eventsAnyListeners=[],l.modules=[...l.__modules__],t.modules&&Array.isArray(t.modules)&&l.modules.push(...t.modules);const a={};l.modules.forEach(c=>{c({params:t,swiper:l,extendParams:qt(t,a),on:l.on.bind(l),once:l.once.bind(l),off:l.off.bind(l),emit:l.emit.bind(l)})});const d=I({},he,a);return l.params=I({},d,Z,t),l.originalParams=I({},l.params),l.passedParams=I({},t),l.params&&l.params.on&&Object.keys(l.params.on).forEach(c=>{l.on(c,l.params.on[c])}),l.params&&l.params.onAny&&l.onAny(l.params.onAny),Object.assign(l,{enabled:l.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return l.params.direction==="horizontal"},isVertical(){return l.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:l.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.emit("_swiper"),l.params.init&&l.init(),l}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:i}=this,n=O(t,`.${i.slideClass}, swiper-slide`),r=de(n[0]);return de(e)-r}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(t=>t.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:t,params:i}=e;e.slides=O(t,`.${i.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const i=this;e=Math.min(Math.max(e,0),1);const n=i.minTranslate(),o=(i.maxTranslate()-n)*e+n;i.translateTo(o,typeof t>"u"?0:t),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(i=>{const n=e.getSlideClasses(i);t.push({slideEl:i,classNames:n}),e.emit("_slideClass",i,n)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){e===void 0&&(e="current"),t===void 0&&(t=!1);const i=this,{params:n,slides:r,slidesGrid:o,slidesSizesGrid:l,size:a,activeIndex:d}=i;let c=1;if(typeof n.slidesPerView=="number")return n.slidesPerView;if(n.centeredSlides){let f=r[d]?Math.ceil(r[d].swiperSlideSize):0,m;for(let p=d+1;p<r.length;p+=1)r[p]&&!m&&(f+=Math.ceil(r[p].swiperSlideSize),c+=1,f>a&&(m=!0));for(let p=d-1;p>=0;p-=1)r[p]&&!m&&(f+=r[p].swiperSlideSize,c+=1,f>a&&(m=!0))}else if(e==="current")for(let f=d+1;f<r.length;f+=1)(t?o[f]+l[f]-o[d]<a:o[f]-o[d]<a)&&(c+=1);else for(let f=d-1;f>=0;f-=1)o[d]-o[f]<a&&(c+=1);return c}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:i}=e;i.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&R(e,o)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function n(){const o=e.rtlTranslate?e.translate*-1:e.translate,l=Math.min(Math.max(o,e.maxTranslate()),e.minTranslate());e.setTranslate(l),e.updateActiveIndex(),e.updateSlidesClasses()}let r;if(i.freeMode&&i.freeMode.enabled&&!i.cssMode)n(),i.autoHeight&&e.updateAutoHeight();else{if((i.slidesPerView==="auto"||i.slidesPerView>1)&&e.isEnd&&!i.centeredSlides){const o=e.virtual&&i.virtual.enabled?e.virtual.slides:e.slides;r=e.slideTo(o.length-1,0,!1,!0)}else r=e.slideTo(e.activeIndex,0,!1,!0);r||n()}i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){t===void 0&&(t=!0);const i=this,n=i.params.direction;return e||(e=n==="horizontal"?"vertical":"horizontal"),e===n||e!=="horizontal"&&e!=="vertical"||(i.el.classList.remove(`${i.params.containerModifierClass}${n}`),i.el.classList.add(`${i.params.containerModifierClass}${e}`),i.emitContainerClasses(),i.params.direction=e,i.slides.forEach(r=>{e==="vertical"?r.style.width="":r.style.height=""}),i.emit("changeDirection"),t&&i.update()),i}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let i=e||t.params.el;if(typeof i=="string"&&(i=document.querySelector(i)),!i)return!1;i.swiper=t,i.parentNode&&i.parentNode.host&&i.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const n=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=i&&i.shadowRoot&&i.shadowRoot.querySelector?i.shadowRoot.querySelector(n()):O(i,n())[0];return!o&&t.params.createElements&&(o=q("div",t.params.wrapperClass),i.append(o),O(i,`.${t.params.slideClass}`).forEach(l=>{o.append(l)})),Object.assign(t,{el:i,wrapperEl:o,slidesEl:t.isElement&&!i.parentNode.host.slideSlots?i.parentNode.host:o,hostEl:t.isElement?i.parentNode.host:i,mounted:!0,rtl:i.dir.toLowerCase()==="rtl"||D(i,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(i.dir.toLowerCase()==="rtl"||D(i,"direction")==="rtl"),wrongRTL:D(o,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents();const n=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&n.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),n.forEach(r=>{r.complete?R(t,r):r.addEventListener("load",o=>{R(t,o.target)})}),ie(t),t.initialized=!0,ie(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);const i=this,{params:n,el:r,wrapperEl:o,slides:l}=i;return typeof i.params>"u"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),n.loop&&i.loopDestroy(),t&&(i.removeClasses(),r.removeAttribute("style"),o.removeAttribute("style"),l&&l.length&&l.forEach(a=>{a.classList.remove(n.slideVisibleClass,n.slideFullyVisibleClass,n.slideActiveClass,n.slideNextClass,n.slidePrevClass),a.removeAttribute("style"),a.removeAttribute("data-swiper-slide-index")})),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(a=>{i.off(a)}),e!==!1&&(i.el.swiper=null,Le(i)),i.destroyed=!0),null}static extendDefaults(e){I(Z,e)}static get extendedDefaults(){return Z}static get defaults(){return he}static installModule(e){L.prototype.__modules__||(L.prototype.__modules__=[]);const t=L.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>L.installModule(t)),L):(L.installModule(e),L)}}Object.keys(J).forEach(s=>{Object.keys(J[s]).forEach(e=>{L.prototype[e]=J[s][e]})});L.use([He,$e]);function Yt(s,e,t,i){return s.params.createElements&&Object.keys(i).forEach(n=>{if(!t[n]&&t.auto===!0){let r=O(s.el,`.${i[n]}`)[0];r||(r=q("div",i[n]),r.className=i[n],s.el.append(r)),t[n]=r,e[n]=r}}),t}function Te(s){let{swiper:e,extendParams:t,on:i,emit:n}=s;t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function r(u){let h;return u&&typeof u=="string"&&e.isElement&&(h=e.el.querySelector(u),h)?h:(u&&(typeof u=="string"&&(h=[...document.querySelectorAll(u)]),e.params.uniqueNavElements&&typeof u=="string"&&h&&h.length>1&&e.el.querySelectorAll(u).length===1?h=e.el.querySelector(u):h&&h.length===1&&(h=h[0])),u&&!h?u:h)}function o(u,h){const w=e.params.navigation;u=z(u),u.forEach(g=>{g&&(g.classList[h?"add":"remove"](...w.disabledClass.split(" ")),g.tagName==="BUTTON"&&(g.disabled=h),e.params.watchOverflow&&e.enabled&&g.classList[e.isLocked?"add":"remove"](w.lockClass))})}function l(){const{nextEl:u,prevEl:h}=e.navigation;if(e.params.loop){o(h,!1),o(u,!1);return}o(h,e.isBeginning&&!e.params.rewind),o(u,e.isEnd&&!e.params.rewind)}function a(u){u.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),n("navigationPrev"))}function d(u){u.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),n("navigationNext"))}function c(){const u=e.params.navigation;if(e.params.navigation=Yt(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(u.nextEl||u.prevEl))return;let h=r(u.nextEl),w=r(u.prevEl);Object.assign(e.navigation,{nextEl:h,prevEl:w}),h=z(h),w=z(w);const g=(x,v)=>{x&&x.addEventListener("click",v==="next"?d:a),!e.enabled&&x&&x.classList.add(...u.lockClass.split(" "))};h.forEach(x=>g(x,"next")),w.forEach(x=>g(x,"prev"))}function f(){let{nextEl:u,prevEl:h}=e.navigation;u=z(u),h=z(h);const w=(g,x)=>{g.removeEventListener("click",x==="next"?d:a),g.classList.remove(...e.params.navigation.disabledClass.split(" "))};u.forEach(g=>w(g,"next")),h.forEach(g=>w(g,"prev"))}i("init",()=>{e.params.navigation.enabled===!1?p():(c(),l())}),i("toEdge fromEdge lock unlock",()=>{l()}),i("destroy",()=>{f()}),i("enable disable",()=>{let{nextEl:u,prevEl:h}=e.navigation;if(u=z(u),h=z(h),e.enabled){l();return}[...u,...h].filter(w=>!!w).forEach(w=>w.classList.add(e.params.navigation.lockClass))}),i("click",(u,h)=>{let{nextEl:w,prevEl:g}=e.navigation;w=z(w),g=z(g);const x=h.target;if(e.params.navigation.hideOnClick&&!g.includes(x)&&!w.includes(x)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===x||e.pagination.el.contains(x)))return;let v;w.length?v=w[0].classList.contains(e.params.navigation.hiddenClass):g.length&&(v=g[0].classList.contains(e.params.navigation.hiddenClass)),n(v===!0?"navigationShow":"navigationHide"),[...w,...g].filter(S=>!!S).forEach(S=>S.classList.toggle(e.params.navigation.hiddenClass))}});const m=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),c(),l()},p=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),f()};Object.assign(e.navigation,{enable:m,disable:p,update:l,init:c,destroy:f})}new L(".feedback__swiper",{loop:!0,spaceBetween:30,modules:[Te],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});new L(".business__swiper",{loop:!0,spaceBetween:30,modules:[Te],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});class Xt extends HTMLElement{constructor(){super(),this.innerHTML=`

      <style>
      .services {
         margin-bottom: 7%;
         padding: 10% 0;
         background-color: #F5F5F5;
      }
    
      .services__container {}
    
      .services__content {
             display: flex;
             flex-direction: column;
             align-items: center
         }
    
         .services__subtitle {
             margin-bottom: 10px
         }
    
         .services__title {
             max-width: 750px;
             margin-bottom: 40px;
             text-align: center
         }
    
         .services__list {
             display: grid;
             grid-template-columns: repeat(auto-fill, minmax(301px, 1fr));
             gap: 20px
         }
    
         .services__item {
            position: relative;
             padding: 5%;
             background-color: #EBEBEB;
             border-radius: 20px;
             transition: background-color .4s, color .4s;
         }
             .services__item:hover {
               background-color: #181818
             }
    
             .services__item:hover .services__small-title,
             .services__item:hover .services__text {
                 color: #fff
             }

         .services__link {
             position: absolute;
             z-index: 10;
             inset: 0;
             text-decoration: none;
         }

         .services__icon {
             margin-bottom: 25px
         }
    
         .services__small-title {
             font-size: 25px;
             transition: color .4s
         }
    
         .services__text {
             transition: color .4s
         }
      </style>


        <section class="services">
        <div class="services__container container">
           <div class="services__content">
              <span class="services__subtitle second-subtitle">
                 Services
              </span>
              <h2 class="services__title title">
                 Get Control Over Your Business I take your finance to next level
              </h2>
           </div>
           <ul class="services__list list-reset">
              <li class="services__item">
              <a class="services__link" href="services-single.html"></a>
                 <svg class="services__icon icon">
                    <use xlink:href="img/svg/sprite.svg#AuditEvaluation" />
                 </svg>
                 <h3 class="services__small-title small-title">
                    Audit & Evaluation
                 </h3>
                 <p class="services__text text">
                    Get help from Alex Moore, a professional business coach with advanced experience on growth and
                    business scaling.
                 </p>
              </li>
              <li class="services__item">
              <a class="services__link" href="services-single.html"></a>
                 <svg class="services__icon icon">
                    <use xlink:href="img/svg/sprite.svg#FinancialProjections" />
                 </svg>
                 <h3 class="services__small-title small-title">
                    Financial Projections
                 </h3>
                 <p class="services__text text">
                    Get help from Alex Moore, a professional business coach with advanced experience on growth and
                    business scaling.
                 </p>
              </li>
              <li class="services__item">
              <a class="services__link" href="services-single.html"></a>
                 <svg class="services__icon icon">
                    <use xlink:href="img/svg/sprite.svg#FundsAndInvestments" />
                 </svg>
                 <h3 class="services__small-title small-title">
                    Funds and investments
                 </h3>
                 <p class="services__text text">
                    Get help from Alex Moore, a professional business coach with advanced experience on growth and
                    business scaling.
                 </p>
              </li>
              <li class="services__item">
              <a class="services__link" href="services-single.html"></a>
                 <svg class="services__icon icon">
                    <use xlink:href="img/svg/sprite.svg#FinanceRestructuring" />
                 </svg>
                 <h3 class="services__small-title small-title">
                    Finance & Restructuring
                 </h3>
                 <p class="services__text text">
                    Get help from Alex Moore, a professional business coach with advanced experience on growth and
                    business scaling.
                 </p>
              </li>
              <li class="services__item">
              <a class="services__link" href="services-single.html"></a>
                 <svg class="services__icon icon">
                    <use xlink:href="img/svg/sprite.svg#TaxesEfficiency" />
                 </svg>
                 <h3 class="services__small-title small-title">
                    Taxes & Efficiency
                 </h3>
                 <p class="services__text text">
                    Get help from Alex Moore, a professional business coach with advanced experience on growth and
                    business scaling.
                 </p>
              </li>
              <li class="services__item">
              <a class="services__link" href="services-single.html"></a>
                 <svg class="services__icon icon">
                    <use xlink:href="img/svg/sprite.svg#InvestmentBanking" />
                 </svg>
                 <h3 class="services__small-title small-title">
                    Investment banking
                 </h3>
                 <p class="services__text text">
                    Get help from Alex Moore, a professional business coach with advanced experience on growth and
                    business scaling.s
                 </p>
              </li>
           </ul>
        </div>
     </section>
        `}}customElements.define("special-services",Xt);class Ut extends HTMLElement{constructor(){super();const e=this.getAttribute("img-url");this.innerHTML=`

      <style>
      .clients__list {
         display: grid;
         grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
         gap: 20px;
         padding: 15px;
         border-radius: 30px;
         background-color: rgb(250, 250, 250);
      }

      .clients__item {
         position: relative;
         isolation: isolate;
         display: flex;
         min-height: 300px;
         padding: 20px;

         &::before {
            content:"";
            position: absolute;
            inset: 0;
            z-index: 1;
            border-radius: 20px;
            transition: background-color 0.5s,
               backdrop-filter 0.5s;
         }

         .clients__link {
            position: absolute;
            inset: 0;
            z-index: 10;
         }

         .clients__img {
            position: absolute;
            inset: 0;
            height: 100%;
            width: 100%;
            z-index: -1;
            border-radius: 20px;
         }

         &:hover::before {
            backdrop-filter: blur(4px);
            background-color: rgba(24, 24, 24, 0.6);
         }

         &:hover::after {
            opacity: 1;
            pointer-events: all;
         }

         &:hover .clients__text-box {
            opacity: 1;
            pointer-events: all;
         }

         &::after {
            content: "+";
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9;
            width: 50px;
            height: 50px;
            margin-left: auto;
            padding-bottom: 5px;
            border-radius: 50%;
            font-size: 50px;
            font-weight: 400;
            color:#181818;
            background: linear-gradient(153.88deg, rgb(255, 233, 177) -8.686%,rgb(221, 160, 3) 120.59%);
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.5s ease;
      }

      .clients__text-box {
         align-self: end;
         z-index: 9;
         opacity: 0;
         pointer-events: none;
         transition: opacity 0.5s ease;
      }

      .clients__small-title {
         margin-bottom: 4px;
         color:#FFFFFF;
      }

      .clients__subtitle {
         font-weight: 400;
         color:#FFCC4A;
      }
      </style>

        
        <li class="clients__item">
           <a class="clients__link" href="case-studies-single.html"></a>
           <img class="clients__img img" src=${e} alt=${e} loading="lazy">
           <div class="clients__text-box">
           <h3 class="clients__small-title small-title">
              Taxes & Efficiency
           </h3>
           <span class="clients__subtitle">
              Business
           </span>
           </div>
        </li>
        `}}customElements.define("special-clients",Ut);class Kt extends HTMLElement{constructor(){super(),this.innerHTML=`
        <header class="header">
        <div class="header__contact-box">
           <div class="header__time-box">
              <svg class="header__icon">
                 <use xlink:href="img/svg/sprite.svg#time" />
              </svg>
              <span class="header__text">
                 Monday - Friday8AM - 9PM
              </span>
           </div>
           <div class="header__address">
              <svg class="header__icon">
                 <use xlink:href="img/svg/sprite.svg#location" />
              </svg>
              <span class="header__text">
                 725 Park Ave, New York
              </span>
           </div>
           <div class="header__socials">
              <a class="header__social-link" href="#">
                 <svg class="header__social-icon social-icon">
                    <use xlink:href="img/svg/sprite.svg#Instagram" />
                 </svg>
              </a>
              <a class="header__social-link" href="#">
                 <svg class="header__social-icon social-icon">
                    <use xlink:href="img/svg/sprite.svg#Facebook" />
                 </svg>
              </a>
              <a class="header__social-link" href="#">
                 <svg class="header__social-icon social-icon">
                    <use xlink:href="img/svg/sprite.svg#Twitter" />
                 </svg>
              </a>
              <a class="header__social-link" href="#">
                 <svg class="header__social-icon social-icon">
                    <use xlink:href="img/svg/sprite.svg#Linked-In" />
                 </svg>
              </a>
           </div>
        </div>
        <div class="header__container container">
           <a class="header__logo logo" href="index.html">
              <svg class="header__logo-icon">
                 <use xlink:href="img/svg/sprite.svg#Logo" />
              </svg>
              <strong class="header__logo-text">
                 AskExperts
              </strong>
           </a>
           <nav class="header__nav nav">
              <ul class="nav__list list-reset">
                 <li class="nav__item">
                    <a class="nav__link special-link" href="index.html">
                       Home
                    </a>
                 </li>
                 <li class="nav__item">
                    <a class="nav__link special-link" href="about.html">
                       about
                    </a>
                 </li>
                 <li class="nav__item">
                    <a class="nav__link special-link" href="services.html">
                       Services
                    </a>
                 </li>
                 <li class="nav__item">
                    <a class="nav__link special-link" href="team.html">
                       Our team
                    </a>
                 </li>
                 <li class="nav__item">
                    <a class="nav__link special-link" href="blog.html">
                       blog
                    </a>
                 </li>
                 <li class="nav__item">
                    <a class="nav__link special-link" href="contact.html">
                       Contact
                    </a>
                 </li>
                 <li class="nav__item nav__item_phone">
                 <div class="nav__icon-box">
               <svg class="nav__phone-icon">
                  <use xlink:href="img/svg/sprite.svg#phone" />
               </svg>
               </div>
                    <a class="nav__link-phone" href="tel:+8884521505">
                    + (888) 452 1505
                    </a>
                 </li>
              </ul>
           </nav>
           <button class="header__burger burger button-reset">
              <span class="burger__line"></span>
              <span class="burger__line"></span>
              <span class="burger__line"></span>
           </button>
        </div>
     </header>
      `}}customElements.define("special-header",Kt);class Qt extends HTMLElement{constructor(){super(),this.innerHTML=`
      <footer class="footer" style="background-image: url(img/footerBg.jpeg);
      background-image: image-set(url(img/footerBg.webp), url(img/footerBg.webp));
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;">
         <div class="footer__container container">
            <div class="footer__wrapper">
               <div class="footer__content">
                  <a class="footer__logo logo" href="index.html">
                     <svg class="footer__logo-icon">
                        <use xlink:href="img/svg/sprite.svg#Logo" />
                     </svg>
                     <strong class="footer__logo-text">
                        AskExperts
                     </strong>
                  </a>
                  <div class="footer__socials">
                     <a class="footer__social" href="#">
                        Fb./
                     </a>
                     <a class="footer__social" href="#">
                        Ig./
                     </a>
                     <a class="footer__social" href="#">
                        Tw./
                     </a>
                     <a class="footer__social" href="#">
                        Be.
                     </a>
                  </div>
               </div>
               <ul class="footer__list list-reset">
                  <li class="footer__item">
                     <h3 class="footer__title small-title">
                        Product
                     </h3>
                     <ul class="footer__sublist list-reset">
                        <li class="footer__subitem">
                           <a class="footer__sublink special-link" href="services.html">
                              Service
                           </a>
                        </li>
                        <li class="footer__subitem">
                           <a class="footer__sublink special-link" href="#">
                              FAQ
                           </a>
                        </li>
                        <li class="footer__subitem">
                           <a class="footer__sublink special-link" href="services-single.html">
                              Single Service
                           </a>
                        </li>
                        <li class="footer__subitem">
                           <a class="footer__sublink special-link" href="#">
                              Get Quote
                           </a>
                        </li>
                        <li class="footer__subitem">
                           <a class="footer__sublink special-link" href="#">
                              Prices
                           </a>
                        </li>
                     </ul>
                  </li>
                  <li class="footer__item">
                     <h3 class="footer__title small-title">
                        Company
                     </h3>
                     <ul class="footer__sublist list-reset">
                        <li class="footer__subitem">
                           <a class="footer__sublink special-link" href="about.html">
                              About
                           </a>
                        </li>
                        <li class="footer__subitem">
                           <a class="footer__sublink special-link" href="#">
                              News
                           </a>
                        </li>
                        <li class="footer__subitem">
                           <a class="footer__sublink special-link" href="contact.html">
                              Contacts
                           </a>
                        </li>
                        <li class="footer__subitem">
                           <a class="footer__sublink special-link" href="#">
                              Testimonials
                           </a>
                        </li>
                        <li class="footer__subitem">
                           <a class="footer__sublink special-link" href="team.html">
                              Our team
                           </a>
                        </li>
                        <li class="footer__subitem">
                           <a class="footer__sublink special-link" href="#">
                              Our approach
                           </a>
                        </li>
                     </ul>
                  </li>
               </ul>
               <div class="footer__address">
                  <h3 class="footer__title small-title">
                     Address
                  </h3>
                  <p class="footer__text text">
                     1700 W Blancke St, kiyev port south USA, America
                  </p>
                  <a class="footer__link" href="#">
                     Book an Appoinment
                  </a>
               </div>
            </div>
            <p class="footer__copyright text">
               ©2022 Consultalk. All rights reserved | Terms of Service | Privacy Policy
            </p>
         </div>
      </footer>
      `}}customElements.define("special-footer",Qt);class Jt extends HTMLElement{constructor(){super();const e=this.getAttribute("subtitle"),t=this.getAttribute("title");this.innerHTML=`

<style>
.hero__content {
    margin-left: 0;
    padding: 40px 35px;
    border-radius: 29px;
    backdrop-filter: blur(11px);
    background-color: rgba(255, 255, 255, .85);
    transition: margin-left .4s
}

.hero__subtitle {
    margin-bottom: 20px
}

.hero__title {
    max-width: 550px
}

@media (min-width: 992px) {
        .hero__content {
        margin-left: 200px
        }
    }
</style>

        <div class="hero__content">
                    <span class="hero__subtitle first-subtitle">
                        ${e}
                    </span>
                    <h1 class="hero__title special-title">
                    ${t}
                    </h1>
                </div>
        `}}customElements.define("special-hero",Jt);const ge=document.querySelector(".header"),B=document.querySelector(".nav");document.querySelector(".burger");const ee=document.querySelectorAll(".burger__line"),te=document.querySelector(".main__overlay");document.querySelectorAll(".nav__link").forEach(s=>{s.href===window.location.href&&s.classList.add("nav__link_active")});function Zt(){document.addEventListener("click",e=>{e.target.closest(".burger")?(B.classList.toggle("nav_active"),B.style.paddingTop=ge.offsetHeight+"px",ee.forEach(t=>{t.classList.toggle("burger_active"),te.classList.toggle("main__overlay_active")})):(e.target.closest(".burger")||e.target.closest(".main__overlay"))&&(B.classList.remove("nav_active"),B.style.paddingTop="",ee.forEach(t=>{t.classList.remove("burger_active")}),te.classList.remove("main__overlay_active"))}),window.matchMedia("(min-width: 1200px)").addEventListener("change",e=>e.matches?(B.style.paddingTop="",B.classList.remove("nav_active"),te.classList.remove("main__overlay_active"),ee.forEach(t=>{t.classList.remove("burger_active")}),!0):(B.style.paddingTop=ge.offsetHeight+"px",!1))}Zt();const es=document.querySelector(".loader-box");window.addEventListener("load",s=>{es.classList.add("loader_hidden")});
