(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=t(r);fetch(r.href,n)}})();class Ce extends HTMLElement{constructor(){super(),this.innerHTML=`
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
        `}}customElements.define("special-brands",Ce);class Le extends HTMLElement{constructor(){super(),this.innerHTML=`

        <style>

        contact-form {
           
        }

            .contact__form {
            }

            .form__content {
                display: grid;
                grid-template-columns: 1fr;
                gap: 28px 25px;
                margin-bottom: 30px;
            }

            .form__label {
                display: flex;
                flex-direction: column;
                gap: 10px;
                color: #181818;
            }

            .form__input {
                padding: 20px;
                border: 1px solid #C1C1C1;
                border-radius: 54px;
            }

            *[placeholder] {
                font-family: Lato;
                font-weight: 400;
                color:#181818;
            }

            .form__textarea {
                height: 150px;
                margin-bottom: 30px;
                padding: 10px;
                border: 1px solid #C1C1C1;
                border-radius: 20px;
                outline: none;
                resize: none;
            }

            .form__btn {
                border: 1px solid #C1C1C1;
                transition: background-color 0.4s,
            color 0.4s;
            }

            .form__btn:hover {
                background-color: #fff;
                color: #181818;
            }

            @media (min-width: 992px) {
                contact-form {
                    width: 50%;
                }

                .contact__form {
                    
                }

                .form__content {
                    grid-template-columns: 1fr 1fr;
                }

                .form__input {
                    width: 100%;
                    max-width: 400px;
                }
            }
        </style>

        <form class="contact__form form" action="#" method="post" enctype="multipart/form-data">
               <div class="form__content">
                  <label class="form__label">
                     Full Name
                     <input class="form__input input-reset" type="text" placeholder="john david">
                  </label>
                  <label class="form__label">
                     Email
                     <input class="form__input input-reset" type="email" placeholder="consult@mail.com">
                  </label>
                  <label class="form__label">
                     Phone
                     <input class="form__input input-reset" type="tel" placeholder="+008 654 231">
                  </label>
                  <label class="form__label">
                     Company(optional)
                     <input class="form__input input-reset" type="email" placeholder="yourcompany.com">
                  </label>
               </div>
               <label class="form__label">
                  Message
               <textarea class="form__textarea" placeholder="Briefly tell us about your project and your current goals. How can we help you?"></textarea>
               </label>
                  <button class="form__btn button-reset black-button" type="submit">
                     Send Message
                  </button>
            </form>
        `}}customElements.define("contact-form",Le);class Ie extends HTMLElement{constructor(){super(),this.innerHTML=`

        <style>
            .contact__contact-us {
            }

            .contact__subtitle {
                margin-bottom: 10px;
            }

            .contact__title {
            }

            .contact__text {
                margin-bottom: 40px;
            }

            .contact__list {
            }

            .contact__item {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 15px;
            }

            .contact__item:not(:last-child) {
                margin-bottom: 60px;
            }

            .contact__icon-box {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 10px;
                border-radius: 50%;
            }

            .contact__item:nth-child(1) .contact__icon-box {
                background-color:#FFECBB;
            }

            .contact__item:nth-child(2) .contact__icon-box {
                background-color: #A4EDA4;
            }

            .contact__item:nth-child(3) .contact__icon-box {
                background-color: #EAEAEA;
            }

            .contact__icon {
                width: 25px;
                height: 25px;
                }
                .contact__item:nth-child(1) .contact__icon {
                    fill:transparent;
                stroke:#DEAA27;
                }
                .contact__item:nth-child(2) .contact__icon {
                    fill:transparent;
                stroke:#4EAF4E;
                }
                .contact__item:nth-child(3) .contact__icon {
                    fill:transparent;
                stroke:#181818;
                }

            .contact__contact-box {}

            .contact__small-text {
                display: block;
                margin-bottom: 5px;
                font-family: Lato;
                font-weight: 400;
                color: #595566;
            }

            .contact__link {
                text-decoration: none;
                font-size: 20px;
                font-weight: 600;
                color: #181818;
            }

            .contact__strong {
                display: block;
                max-width: 260px;
                font-size: 20px;
                font-weight: 600;
                color: #181818;
            }

            @media (min-width: 768px) {
                contact-us {
                    max-width: 420px;
                }
            }
        </style>

        <div class="contact__contact-us">
               <span class="contact__subtitle first-subtitle">
                  Proccess
               </span>
               <h3 class="contact__title title">
                  Contact Us. It’s Easy.
               </h3>
               <p class="contact__text text">
                  Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches
                  to corporate strategy foster collaborative.
               </p>
               <ul class="contact__list list-reset">
                  <li class="contact__item">
                  <div class="contact__icon-box">
                     <svg class="contact__icon">
                        <use xlink:href="img/svg/sprite.svg#phone" />
                     </svg>
                     </div>
                     <div class="contact__contact-box">
                        <span class="contact__small-text">
                           Call Today
                        </span>
                        <a class="contact__link" href="tel:+1800100900">
                           +1 800 100 900
                        </a>
                     </div>
                  </li>
                  <li class="contact__item">
                  <div class="contact__icon-box">
                     <svg class="contact__icon">
                        <use xlink:href="img/svg/sprite.svg#time" />
                     </svg>
                     </div>
                     <div class="contact__contact-box">
                        <span class="contact__small-text">
                           Monday To Friday
                        </span>
                        <strong class="contact__strong">
                           9AM - 5PM
                        </strong>
                     </div>
                  </li>
                  <li class="contact__item">
                  <div class="contact__icon-box">
                     <svg class="contact__icon">
                        <use xlink:href="img/svg/sprite.svg#location" />
                     </svg>
                     </div>
                     <div class="contact__contact-box">
                        <span class="contact__small-text">
                           USA Office
                        </span>
                        <strong class="contact__strong">
                           195 Devonshire St Boston, MA 02110
                        </strong>
                     </div>
                  </li>
               </ul>
            </div>
        `}}customElements.define("contact-us",Ie);class Ae extends HTMLElement{constructor(){super();const e=this.getAttribute("img-url"),t=this.getAttribute("title"),i=this.getAttribute("small-img-url"),r=this.getAttribute("name");this.innerHTML=`

<style>

.blog {
   padding: 10% 0;
   margin-bottom: 10%;
}

.blog__container {}

.blog__content {
       display: flex;
       flex-wrap: wrap;
       justify-content: space-between;
       align-items: center;
       gap: 15px;
       margin-bottom: 50px
   }

   .blog__title-box {
       max-width: 500px
   }

   .blog__subtitle {
       margin-bottom: 6px
   }

   .blog__title {}

   .blog__link {}

   .blog__list {
      display: grid;
      grid-template-columns: repeat(1fr);
      gap: 30px
   }

   .blog__item {}

   .blog__link {
       display: inline-block;
       margin-bottom: 30px;
       text-decoration: none
   }

   .blog__img {
      aspect-ratio: 1/1;
      border-radius: 20px;
   }

   .blog__small-title {
       font-size: 30px;
       font-weight: 600
   }

   .blog__text {
       margin-bottom: 10px
   }

   .blog__item-box {
       display: flex;
       flex-wrap: wrap;
       align-items: center;
       justify-content: space-between;
       gap: 10px;
       padding: 15px 0;
       border-top: 1px solid #C1C1C1;
       border-bottom: 1px solid #C1C1C1
   }

   .blog__profile {
       display: flex;
       align-items: center;
       gap: 10px
   }

   .blog__profile-img {
       width: 60px;
       height: 60px;
       border-radius: 50%
   }

   .blog__name {
       padding-right: 20px;
       font-family: Lato;
       font-weight: 400;
       color: #595566;
       border-right: 1px solid #C1C1C1
   }

   .blog__date {
       font-family: Lato;
       font-weight: 400;
       color: #595566
   }

   .blog__profile-link {
      background-color: #fff;
      color: #181818;
   }

   .blog__profile-link:hover {
      background-color: #181818;
      color: #fff;
   }

   @media (min-width: 768px) {
       .blog__list {
           grid-template-columns: repeat(2, 1fr)
       }
   }

</style>

         <li class="blog__item">
                  <a class="blog__link" href="blog-single.html">
                     <img class="blog__img img" src=${e} alt="team-work" loading="lazy">
                  </a>
                  <h3 class="blog__small-title title">
                     ${t}
                  </h3>
                  <p class="blog__text text">
                     Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative
                     approaches to corporate strategy foster collaborative thinking to further the overall value
                     proposition.
                  </p>
                  <div class="blog__item-box">
                     <div class="blog__profile">
                           <img class="blog__profile-img img" src=${i} alt="man" loading="lazy">
                        <span class="blog__name">
                           ${r}
                        </span>
                        <span class="blog__date">
                           September 1, 2022
                        </span>
                     </div>
                     <a class="blog__profile-link black-link" href="blog-single.html">
                        Read More
                     </a>
                  </div>
               </li>
         `}}customElements.define("item-blog",Ae);class Oe extends HTMLElement{constructor(){super(),this.innerHTML=`

      <style>

      .clients__count-list {
         display: flex;
         flex-wrap: wrap;
         justify-content: space-around;
         gap: 20px;
         margin-top: 60px;
      }

      .clients__count-item {}


      .clients__number {
         display: block;
         margin-bottom: 10px;
         font-size: 50px;
         color: #181818;
         text-align: center;
      }


      .clients__small-text {
         display: block;
         font-size: 18px;
         font-weight: 500;
         color: #181818;
      }

      </style>
        <ul class="clients__count-list list-reset">
        <li class="clients__count-item">
           <strong class="clients__number" data-count="1128" data-num>
              0
           </strong>
           <span class="clients__small-text">
              Successful Work
           </span>
        </li>
        <li class="clients__count-item">
           <strong class="clients__number" data-count="908" data-num>
              0
           </strong>
           <span class="clients__small-text">
              Team member
           </span>
        </li>
        <li class="clients__count-item">
           <strong class="clients__number" data-count="258" data-num>
              0
           </strong>
           <span class="clients__small-text">
              Happy Customers
           </span>
        </li>
        <li class="clients__count-item">
           <strong class="clients__number" data-count="564" data-num>
              0
           </strong>
           <span class="clients__small-text">
              Creative Idea
           </span>
        </li>
     </ul>
        `}}customElements.define("number-count",Oe);const ve=document.querySelectorAll("[data-num]");let ze=3e3;const _e=new IntersectionObserver(s=>{s.forEach(e=>{e.isIntersecting&&ve.forEach(t=>{let i=1,r=parseInt(t.getAttribute("data-count")),n=Math.floor(ze/r),l=setInterval(function(){i+=1,t.textContent=i,i==r&&(clearInterval(l),t.textContent=r+"+"),_e.unobserve(t)},n)})})});_e.observe(ve[0]);function le(s){return s!==null&&typeof s=="object"&&"constructor"in s&&s.constructor===Object}function re(s,e){s===void 0&&(s={}),e===void 0&&(e={}),Object.keys(e).forEach(t=>{typeof s[t]>"u"?s[t]=e[t]:le(e[t])&&le(s[t])&&Object.keys(e[t]).length>0&&re(s[t],e[t])})}const be={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function H(){const s=typeof document<"u"?document:{};return re(s,be),s}const Ge={document:be,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(s){return typeof setTimeout>"u"?(s(),null):setTimeout(s,0)},cancelAnimationFrame(s){typeof setTimeout>"u"||clearTimeout(s)}};function A(){const s=typeof window<"u"?window:{};return re(s,Ge),s}function Fe(s){return s===void 0&&(s=""),s.trim().split(" ").filter(e=>!!e.trim())}function De(s){const e=s;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function se(s,e){return e===void 0&&(e=0),setTimeout(s,e)}function j(){return Date.now()}function Be(s){const e=A();let t;return e.getComputedStyle&&(t=e.getComputedStyle(s,null)),!t&&s.currentStyle&&(t=s.currentStyle),t||(t=s.style),t}function Ve(s,e){e===void 0&&(e="x");const t=A();let i,r,n;const l=Be(s);return t.WebKitCSSMatrix?(r=l.transform||l.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(o=>o.replace(",",".")).join(", ")),n=new t.WebKitCSSMatrix(r==="none"?"":r)):(n=l.MozTransform||l.OTransform||l.MsTransform||l.msTransform||l.transform||l.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=n.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?r=n.m41:i.length===16?r=parseFloat(i[12]):r=parseFloat(i[4])),e==="y"&&(t.WebKitCSSMatrix?r=n.m42:i.length===16?r=parseFloat(i[13]):r=parseFloat(i[5])),r||0}function N(s){return typeof s=="object"&&s!==null&&s.constructor&&Object.prototype.toString.call(s).slice(8,-1)==="Object"}function He(s){return typeof window<"u"&&typeof window.HTMLElement<"u"?s instanceof HTMLElement:s&&(s.nodeType===1||s.nodeType===11)}function I(){const s=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){const i=t<0||arguments.length<=t?void 0:arguments[t];if(i!=null&&!He(i)){const r=Object.keys(Object(i)).filter(n=>e.indexOf(n)<0);for(let n=0,l=r.length;n<l;n+=1){const o=r[n],a=Object.getOwnPropertyDescriptor(i,o);a!==void 0&&a.enumerable&&(N(s[o])&&N(i[o])?i[o].__swiper__?s[o]=i[o]:I(s[o],i[o]):!N(s[o])&&N(i[o])?(s[o]={},i[o].__swiper__?s[o]=i[o]:I(s[o],i[o])):s[o]=i[o])}}}return s}function $(s,e,t){s.style.setProperty(e,t)}function xe(s){let{swiper:e,targetPosition:t,side:i}=s;const r=A(),n=-e.translate;let l=null,o;const a=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const c=t>n?"next":"prev",d=(m,p)=>c==="next"&&m>=p||c==="prev"&&m<=p,f=()=>{o=new Date().getTime(),l===null&&(l=o);const m=Math.max(Math.min((o-l)/a,1),0),p=.5-Math.cos(m*Math.PI)/2;let u=n+p*(t-n);if(d(u,t)&&(u=t),e.wrapperEl.scrollTo({[i]:u}),d(u,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[i]:u})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(f)};f()}function O(s,e){return e===void 0&&(e=""),[...s.children].filter(t=>t.matches(e))}function W(s){try{console.warn(s);return}catch{}}function q(s,e){e===void 0&&(e=[]);const t=document.createElement(s);return t.classList.add(...Array.isArray(e)?e:Fe(e)),t}function Ne(s,e){const t=[];for(;s.previousElementSibling;){const i=s.previousElementSibling;e?i.matches(e)&&t.push(i):t.push(i),s=i}return t}function $e(s,e){const t=[];for(;s.nextElementSibling;){const i=s.nextElementSibling;e?i.matches(e)&&t.push(i):t.push(i),s=i}return t}function F(s,e){return A().getComputedStyle(s,null).getPropertyValue(e)}function ce(s){let e=s,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function Re(s,e){const t=[];let i=s.parentElement;for(;i;)t.push(i),i=i.parentElement;return t}function de(s,e,t){const i=A();return s[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(i.getComputedStyle(s,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(i.getComputedStyle(s,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom"))}function z(s){return(Array.isArray(s)?s:[s]).filter(e=>!!e)}let Y;function je(){const s=A(),e=H();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in s||s.DocumentTouch&&e instanceof s.DocumentTouch)}}function we(){return Y||(Y=je()),Y}let X;function We(s){let{userAgent:e}=s===void 0?{}:s;const t=we(),i=A(),r=i.navigator.platform,n=e||i.navigator.userAgent,l={ios:!1,android:!1},o=i.screen.width,a=i.screen.height,c=n.match(/(Android);?[\s\/]+([\d.]+)?/);let d=n.match(/(iPad).*OS\s([\d_]+)/);const f=n.match(/(iPod)(.*OS\s([\d_]+))?/),m=!d&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p=r==="Win32";let u=r==="MacIntel";const g=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!d&&u&&t.touch&&g.indexOf(`${o}x${a}`)>=0&&(d=n.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),u=!1),c&&!p&&(l.os="android",l.android=!0),(d||m||f)&&(l.os="ios",l.ios=!0),l}function Se(s){return s===void 0&&(s={}),X||(X=We(s)),X}let U;function qe(){const s=A(),e=Se();let t=!1;function i(){const o=s.navigator.userAgent.toLowerCase();return o.indexOf("safari")>=0&&o.indexOf("chrome")<0&&o.indexOf("android")<0}if(i()){const o=String(s.navigator.userAgent);if(o.includes("Version/")){const[a,c]=o.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));t=a<16||a===16&&c<2}}const r=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent),n=i(),l=n||r&&e.ios;return{isSafari:t||n,needPerspectiveFix:t,need3dFix:l,isWebView:r}}function Ye(){return U||(U=qe()),U}function Xe(s){let{swiper:e,on:t,emit:i}=s;const r=A();let n=null,l=null;const o=()=>{!e||e.destroyed||!e.initialized||(i("beforeResize"),i("resize"))},a=()=>{!e||e.destroyed||!e.initialized||(n=new ResizeObserver(f=>{l=r.requestAnimationFrame(()=>{const{width:m,height:p}=e;let u=m,g=p;f.forEach(_=>{let{contentBoxSize:h,contentRect:b,target:v}=_;v&&v!==e.el||(u=b?b.width:(h[0]||h).inlineSize,g=b?b.height:(h[0]||h).blockSize)}),(u!==m||g!==p)&&o()})}),n.observe(e.el))},c=()=>{l&&r.cancelAnimationFrame(l),n&&n.unobserve&&e.el&&(n.unobserve(e.el),n=null)},d=()=>{!e||e.destroyed||!e.initialized||i("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){a();return}r.addEventListener("resize",o),r.addEventListener("orientationchange",d)}),t("destroy",()=>{c(),r.removeEventListener("resize",o),r.removeEventListener("orientationchange",d)})}function Ue(s){let{swiper:e,extendParams:t,on:i,emit:r}=s;const n=[],l=A(),o=function(d,f){f===void 0&&(f={});const m=l.MutationObserver||l.WebkitMutationObserver,p=new m(u=>{if(e.__preventObserver__)return;if(u.length===1){r("observerUpdate",u[0]);return}const g=function(){r("observerUpdate",u[0])};l.requestAnimationFrame?l.requestAnimationFrame(g):l.setTimeout(g,0)});p.observe(d,{attributes:typeof f.attributes>"u"?!0:f.attributes,childList:typeof f.childList>"u"?!0:f.childList,characterData:typeof f.characterData>"u"?!0:f.characterData}),n.push(p)},a=()=>{if(e.params.observer){if(e.params.observeParents){const d=Re(e.hostEl);for(let f=0;f<d.length;f+=1)o(d[f])}o(e.hostEl,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}},c=()=>{n.forEach(d=>{d.disconnect()}),n.splice(0,n.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),i("init",a),i("destroy",c)}var Ke={on(s,e,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;const r=t?"unshift":"push";return s.split(" ").forEach(n=>{i.eventsListeners[n]||(i.eventsListeners[n]=[]),i.eventsListeners[n][r](e)}),i},once(s,e,t){const i=this;if(!i.eventsListeners||i.destroyed||typeof e!="function")return i;function r(){i.off(s,r),r.__emitterProxy&&delete r.__emitterProxy;for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];e.apply(i,l)}return r.__emitterProxy=e,i.on(s,r,t)},onAny(s,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof s!="function")return t;const i=e?"unshift":"push";return t.eventsAnyListeners.indexOf(s)<0&&t.eventsAnyListeners[i](s),t},offAny(s){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(s);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(s,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||s.split(" ").forEach(i=>{typeof e>"u"?t.eventsListeners[i]=[]:t.eventsListeners[i]&&t.eventsListeners[i].forEach((r,n)=>{(r===e||r.__emitterProxy&&r.__emitterProxy===e)&&t.eventsListeners[i].splice(n,1)})}),t},emit(){const s=this;if(!s.eventsListeners||s.destroyed||!s.eventsListeners)return s;let e,t,i;for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return typeof n[0]=="string"||Array.isArray(n[0])?(e=n[0],t=n.slice(1,n.length),i=s):(e=n[0].events,t=n[0].data,i=n[0].context||s),t.unshift(i),(Array.isArray(e)?e:e.split(" ")).forEach(a=>{s.eventsAnyListeners&&s.eventsAnyListeners.length&&s.eventsAnyListeners.forEach(c=>{c.apply(i,[a,...t])}),s.eventsListeners&&s.eventsListeners[a]&&s.eventsListeners[a].forEach(c=>{c.apply(i,t)})}),s}};function Qe(){const s=this;let e,t;const i=s.el;typeof s.params.width<"u"&&s.params.width!==null?e=s.params.width:e=i.clientWidth,typeof s.params.height<"u"&&s.params.height!==null?t=s.params.height:t=i.clientHeight,!(e===0&&s.isHorizontal()||t===0&&s.isVertical())&&(e=e-parseInt(F(i,"padding-left")||0,10)-parseInt(F(i,"padding-right")||0,10),t=t-parseInt(F(i,"padding-top")||0,10)-parseInt(F(i,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(s,{width:e,height:t,size:s.isHorizontal()?e:t}))}function Je(){const s=this;function e(x,T){return parseFloat(x.getPropertyValue(s.getDirectionLabel(T))||0)}const t=s.params,{wrapperEl:i,slidesEl:r,size:n,rtlTranslate:l,wrongRTL:o}=s,a=s.virtual&&t.virtual.enabled,c=a?s.virtual.slides.length:s.slides.length,d=O(r,`.${s.params.slideClass}, swiper-slide`),f=a?s.virtual.slides.length:d.length;let m=[];const p=[],u=[];let g=t.slidesOffsetBefore;typeof g=="function"&&(g=t.slidesOffsetBefore.call(s));let _=t.slidesOffsetAfter;typeof _=="function"&&(_=t.slidesOffsetAfter.call(s));const h=s.snapGrid.length,b=s.slidesGrid.length;let v=t.spaceBetween,w=-g,S=0,k=0;if(typeof n>"u")return;typeof v=="string"&&v.indexOf("%")>=0?v=parseFloat(v.replace("%",""))/100*n:typeof v=="string"&&(v=parseFloat(v)),s.virtualSize=-v,d.forEach(x=>{l?x.style.marginLeft="":x.style.marginRight="",x.style.marginBottom="",x.style.marginTop=""}),t.centeredSlides&&t.cssMode&&($(i,"--swiper-centered-offset-before",""),$(i,"--swiper-centered-offset-after",""));const D=t.grid&&t.grid.rows>1&&s.grid;D?s.grid.initSlides(d):s.grid&&s.grid.unsetSlides();let P;const V=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(x=>typeof t.breakpoints[x].slidesPerView<"u").length>0;for(let x=0;x<f;x+=1){P=0;let T;if(d[x]&&(T=d[x]),D&&s.grid.updateSlide(x,T,d),!(d[x]&&F(T,"display")==="none")){if(t.slidesPerView==="auto"){V&&(d[x].style[s.getDirectionLabel("width")]="");const E=getComputedStyle(T),y=T.style.transform,M=T.style.webkitTransform;if(y&&(T.style.transform="none"),M&&(T.style.webkitTransform="none"),t.roundLengths)P=s.isHorizontal()?de(T,"width"):de(T,"height");else{const C=e(E,"width"),G=e(E,"padding-left"),ke=e(E,"padding-right"),ne=e(E,"margin-left"),ae=e(E,"margin-right"),oe=E.getPropertyValue("box-sizing");if(oe&&oe==="border-box")P=C+ne+ae;else{const{clientWidth:Me,offsetWidth:Pe}=T;P=C+G+ke+ne+ae+(Pe-Me)}}y&&(T.style.transform=y),M&&(T.style.webkitTransform=M),t.roundLengths&&(P=Math.floor(P))}else P=(n-(t.slidesPerView-1)*v)/t.slidesPerView,t.roundLengths&&(P=Math.floor(P)),d[x]&&(d[x].style[s.getDirectionLabel("width")]=`${P}px`);d[x]&&(d[x].swiperSlideSize=P),u.push(P),t.centeredSlides?(w=w+P/2+S/2+v,S===0&&x!==0&&(w=w-n/2-v),x===0&&(w=w-n/2-v),Math.abs(w)<1/1e3&&(w=0),t.roundLengths&&(w=Math.floor(w)),k%t.slidesPerGroup===0&&m.push(w),p.push(w)):(t.roundLengths&&(w=Math.floor(w)),(k-Math.min(s.params.slidesPerGroupSkip,k))%s.params.slidesPerGroup===0&&m.push(w),p.push(w),w=w+P+v),s.virtualSize+=P+v,S=P,k+=1}}if(s.virtualSize=Math.max(s.virtualSize,n)+_,l&&o&&(t.effect==="slide"||t.effect==="coverflow")&&(i.style.width=`${s.virtualSize+v}px`),t.setWrapperSize&&(i.style[s.getDirectionLabel("width")]=`${s.virtualSize+v}px`),D&&s.grid.updateWrapperSize(P,m),!t.centeredSlides){const x=[];for(let T=0;T<m.length;T+=1){let E=m[T];t.roundLengths&&(E=Math.floor(E)),m[T]<=s.virtualSize-n&&x.push(E)}m=x,Math.floor(s.virtualSize-n)-Math.floor(m[m.length-1])>1&&m.push(s.virtualSize-n)}if(a&&t.loop){const x=u[0]+v;if(t.slidesPerGroup>1){const T=Math.ceil((s.virtual.slidesBefore+s.virtual.slidesAfter)/t.slidesPerGroup),E=x*t.slidesPerGroup;for(let y=0;y<T;y+=1)m.push(m[m.length-1]+E)}for(let T=0;T<s.virtual.slidesBefore+s.virtual.slidesAfter;T+=1)t.slidesPerGroup===1&&m.push(m[m.length-1]+x),p.push(p[p.length-1]+x),s.virtualSize+=x}if(m.length===0&&(m=[0]),v!==0){const x=s.isHorizontal()&&l?"marginLeft":s.getDirectionLabel("marginRight");d.filter((T,E)=>!t.cssMode||t.loop?!0:E!==d.length-1).forEach(T=>{T.style[x]=`${v}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let x=0;u.forEach(E=>{x+=E+(v||0)}),x-=v;const T=x-n;m=m.map(E=>E<=0?-g:E>T?T+_:E)}if(t.centerInsufficientSlides){let x=0;u.forEach(E=>{x+=E+(v||0)}),x-=v;const T=(t.slidesOffsetBefore||0)+(t.slidesOffsetAfter||0);if(x+T<n){const E=(n-x-T)/2;m.forEach((y,M)=>{m[M]=y-E}),p.forEach((y,M)=>{p[M]=y+E})}}if(Object.assign(s,{slides:d,snapGrid:m,slidesGrid:p,slidesSizesGrid:u}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){$(i,"--swiper-centered-offset-before",`${-m[0]}px`),$(i,"--swiper-centered-offset-after",`${s.size/2-u[u.length-1]/2}px`);const x=-s.snapGrid[0],T=-s.slidesGrid[0];s.snapGrid=s.snapGrid.map(E=>E+x),s.slidesGrid=s.slidesGrid.map(E=>E+T)}if(f!==c&&s.emit("slidesLengthChange"),m.length!==h&&(s.params.watchOverflow&&s.checkOverflow(),s.emit("snapGridLengthChange")),p.length!==b&&s.emit("slidesGridLengthChange"),t.watchSlidesProgress&&s.updateSlidesOffset(),s.emit("slidesUpdated"),!a&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const x=`${t.containerModifierClass}backface-hidden`,T=s.el.classList.contains(x);f<=t.maxBackfaceHiddenSlides?T||s.el.classList.add(x):T&&s.el.classList.remove(x)}}function Ze(s){const e=this,t=[],i=e.virtual&&e.params.virtual.enabled;let r=0,n;typeof s=="number"?e.setTransition(s):s===!0&&e.setTransition(e.params.speed);const l=o=>i?e.slides[e.getSlideIndexByData(o)]:e.slides[o];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(o=>{t.push(o)});else for(n=0;n<Math.ceil(e.params.slidesPerView);n+=1){const o=e.activeIndex+n;if(o>e.slides.length&&!i)break;t.push(l(o))}else t.push(l(e.activeIndex));for(n=0;n<t.length;n+=1)if(typeof t[n]<"u"){const o=t[n].offsetHeight;r=o>r?o:r}(r||r===0)&&(e.wrapperEl.style.height=`${r}px`)}function et(){const s=this,e=s.slides,t=s.isElement?s.isHorizontal()?s.wrapperEl.offsetLeft:s.wrapperEl.offsetTop:0;for(let i=0;i<e.length;i+=1)e[i].swiperSlideOffset=(s.isHorizontal()?e[i].offsetLeft:e[i].offsetTop)-t-s.cssOverflowAdjustment()}const fe=(s,e,t)=>{e&&!s.classList.contains(t)?s.classList.add(t):!e&&s.classList.contains(t)&&s.classList.remove(t)};function tt(s){s===void 0&&(s=this&&this.translate||0);const e=this,t=e.params,{slides:i,rtlTranslate:r,snapGrid:n}=e;if(i.length===0)return;typeof i[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let l=-s;r&&(l=s),e.visibleSlidesIndexes=[],e.visibleSlides=[];let o=t.spaceBetween;typeof o=="string"&&o.indexOf("%")>=0?o=parseFloat(o.replace("%",""))/100*e.size:typeof o=="string"&&(o=parseFloat(o));for(let a=0;a<i.length;a+=1){const c=i[a];let d=c.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(d-=i[0].swiperSlideOffset);const f=(l+(t.centeredSlides?e.minTranslate():0)-d)/(c.swiperSlideSize+o),m=(l-n[0]+(t.centeredSlides?e.minTranslate():0)-d)/(c.swiperSlideSize+o),p=-(l-d),u=p+e.slidesSizesGrid[a],g=p>=0&&p<=e.size-e.slidesSizesGrid[a],_=p>=0&&p<e.size-1||u>1&&u<=e.size||p<=0&&u>=e.size;_&&(e.visibleSlides.push(c),e.visibleSlidesIndexes.push(a)),fe(c,_,t.slideVisibleClass),fe(c,g,t.slideFullyVisibleClass),c.progress=r?-f:f,c.originalProgress=r?-m:m}}function st(s){const e=this;if(typeof s>"u"){const d=e.rtlTranslate?-1:1;s=e&&e.translate&&e.translate*d||0}const t=e.params,i=e.maxTranslate()-e.minTranslate();let{progress:r,isBeginning:n,isEnd:l,progressLoop:o}=e;const a=n,c=l;if(i===0)r=0,n=!0,l=!0;else{r=(s-e.minTranslate())/i;const d=Math.abs(s-e.minTranslate())<1,f=Math.abs(s-e.maxTranslate())<1;n=d||r<=0,l=f||r>=1,d&&(r=0),f&&(r=1)}if(t.loop){const d=e.getSlideIndexByData(0),f=e.getSlideIndexByData(e.slides.length-1),m=e.slidesGrid[d],p=e.slidesGrid[f],u=e.slidesGrid[e.slidesGrid.length-1],g=Math.abs(s);g>=m?o=(g-m)/u:o=(g+u-p)/u,o>1&&(o-=1)}Object.assign(e,{progress:r,progressLoop:o,isBeginning:n,isEnd:l}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(s),n&&!a&&e.emit("reachBeginning toEdge"),l&&!c&&e.emit("reachEnd toEdge"),(a&&!n||c&&!l)&&e.emit("fromEdge"),e.emit("progress",r)}const K=(s,e,t)=>{e&&!s.classList.contains(t)?s.classList.add(t):!e&&s.classList.contains(t)&&s.classList.remove(t)};function it(){const s=this,{slides:e,params:t,slidesEl:i,activeIndex:r}=s,n=s.virtual&&t.virtual.enabled,l=s.grid&&t.grid&&t.grid.rows>1,o=f=>O(i,`.${t.slideClass}${f}, swiper-slide${f}`)[0];let a,c,d;if(n)if(t.loop){let f=r-s.virtual.slidesBefore;f<0&&(f=s.virtual.slides.length+f),f>=s.virtual.slides.length&&(f-=s.virtual.slides.length),a=o(`[data-swiper-slide-index="${f}"]`)}else a=o(`[data-swiper-slide-index="${r}"]`);else l?(a=e.filter(f=>f.column===r)[0],d=e.filter(f=>f.column===r+1)[0],c=e.filter(f=>f.column===r-1)[0]):a=e[r];a&&(l||(d=$e(a,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!d&&(d=e[0]),c=Ne(a,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!c===0&&(c=e[e.length-1]))),e.forEach(f=>{K(f,f===a,t.slideActiveClass),K(f,f===d,t.slideNextClass),K(f,f===c,t.slidePrevClass)}),s.emitSlidesClasses()}const R=(s,e)=>{if(!s||s.destroyed||!s.params)return;const t=()=>s.isElement?"swiper-slide":`.${s.params.slideClass}`,i=e.closest(t());if(i){let r=i.querySelector(`.${s.params.lazyPreloaderClass}`);!r&&s.isElement&&(i.shadowRoot?r=i.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{i.shadowRoot&&(r=i.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`),r&&r.remove())})),r&&r.remove()}},Q=(s,e)=>{if(!s.slides[e])return;const t=s.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},ie=s=>{if(!s||s.destroyed||!s.params)return;let e=s.params.lazyPreloadPrevNext;const t=s.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const i=s.params.slidesPerView==="auto"?s.slidesPerViewDynamic():Math.ceil(s.params.slidesPerView),r=s.activeIndex;if(s.params.grid&&s.params.grid.rows>1){const l=r,o=[l-e];o.push(...Array.from({length:e}).map((a,c)=>l+i+c)),s.slides.forEach((a,c)=>{o.includes(a.column)&&Q(s,c)});return}const n=r+i-1;if(s.params.rewind||s.params.loop)for(let l=r-e;l<=n+e;l+=1){const o=(l%t+t)%t;(o<r||o>n)&&Q(s,o)}else for(let l=Math.max(r-e,0);l<=Math.min(n+e,t-1);l+=1)l!==r&&(l>n||l<r)&&Q(s,l)};function rt(s){const{slidesGrid:e,params:t}=s,i=s.rtlTranslate?s.translate:-s.translate;let r;for(let n=0;n<e.length;n+=1)typeof e[n+1]<"u"?i>=e[n]&&i<e[n+1]-(e[n+1]-e[n])/2?r=n:i>=e[n]&&i<e[n+1]&&(r=n+1):i>=e[n]&&(r=n);return t.normalizeSlideIndex&&(r<0||typeof r>"u")&&(r=0),r}function nt(s){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:i,params:r,activeIndex:n,realIndex:l,snapIndex:o}=e;let a=s,c;const d=p=>{let u=p-e.virtual.slidesBefore;return u<0&&(u=e.virtual.slides.length+u),u>=e.virtual.slides.length&&(u-=e.virtual.slides.length),u};if(typeof a>"u"&&(a=rt(e)),i.indexOf(t)>=0)c=i.indexOf(t);else{const p=Math.min(r.slidesPerGroupSkip,a);c=p+Math.floor((a-p)/r.slidesPerGroup)}if(c>=i.length&&(c=i.length-1),a===n&&!e.params.loop){c!==o&&(e.snapIndex=c,e.emit("snapIndexChange"));return}if(a===n&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=d(a);return}const f=e.grid&&r.grid&&r.grid.rows>1;let m;if(e.virtual&&r.virtual.enabled&&r.loop)m=d(a);else if(f){const p=e.slides.filter(g=>g.column===a)[0];let u=parseInt(p.getAttribute("data-swiper-slide-index"),10);Number.isNaN(u)&&(u=Math.max(e.slides.indexOf(p),0)),m=Math.floor(u/r.grid.rows)}else if(e.slides[a]){const p=e.slides[a].getAttribute("data-swiper-slide-index");p?m=parseInt(p,10):m=a}else m=a;Object.assign(e,{previousSnapIndex:o,snapIndex:c,previousRealIndex:l,realIndex:m,previousIndex:n,activeIndex:a}),e.initialized&&ie(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(l!==m&&e.emit("realIndexChange"),e.emit("slideChange"))}function at(s,e){const t=this,i=t.params;let r=s.closest(`.${i.slideClass}, swiper-slide`);!r&&t.isElement&&e&&e.length>1&&e.includes(s)&&[...e.slice(e.indexOf(s)+1,e.length)].forEach(o=>{!r&&o.matches&&o.matches(`.${i.slideClass}, swiper-slide`)&&(r=o)});let n=!1,l;if(r){for(let o=0;o<t.slides.length;o+=1)if(t.slides[o]===r){n=!0,l=o;break}}if(r&&n)t.clickedSlide=r,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=l;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}i.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var ot={updateSize:Qe,updateSlides:Je,updateAutoHeight:Ze,updateSlidesOffset:et,updateSlidesProgress:tt,updateProgress:st,updateSlidesClasses:it,updateActiveIndex:nt,updateClickedSlide:at};function lt(s){s===void 0&&(s=this.isHorizontal()?"x":"y");const e=this,{params:t,rtlTranslate:i,translate:r,wrapperEl:n}=e;if(t.virtualTranslate)return i?-r:r;if(t.cssMode)return r;let l=Ve(n,s);return l+=e.cssOverflowAdjustment(),i&&(l=-l),l||0}function ct(s,e){const t=this,{rtlTranslate:i,params:r,wrapperEl:n,progress:l}=t;let o=0,a=0;const c=0;t.isHorizontal()?o=i?-s:s:a=s,r.roundLengths&&(o=Math.floor(o),a=Math.floor(a)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?o:a,r.cssMode?n[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-o:-a:r.virtualTranslate||(t.isHorizontal()?o-=t.cssOverflowAdjustment():a-=t.cssOverflowAdjustment(),n.style.transform=`translate3d(${o}px, ${a}px, ${c}px)`);let d;const f=t.maxTranslate()-t.minTranslate();f===0?d=0:d=(s-t.minTranslate())/f,d!==l&&t.updateProgress(s),t.emit("setTranslate",t.translate,e)}function dt(){return-this.snapGrid[0]}function ft(){return-this.snapGrid[this.snapGrid.length-1]}function ut(s,e,t,i,r){s===void 0&&(s=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),i===void 0&&(i=!0);const n=this,{params:l,wrapperEl:o}=n;if(n.animating&&l.preventInteractionOnTransition)return!1;const a=n.minTranslate(),c=n.maxTranslate();let d;if(i&&s>a?d=a:i&&s<c?d=c:d=s,n.updateProgress(d),l.cssMode){const f=n.isHorizontal();if(e===0)o[f?"scrollLeft":"scrollTop"]=-d;else{if(!n.support.smoothScroll)return xe({swiper:n,targetPosition:-d,side:f?"left":"top"}),!0;o.scrollTo({[f?"left":"top"]:-d,behavior:"smooth"})}return!0}return e===0?(n.setTransition(0),n.setTranslate(d),t&&(n.emit("beforeTransitionStart",e,r),n.emit("transitionEnd"))):(n.setTransition(e),n.setTranslate(d),t&&(n.emit("beforeTransitionStart",e,r),n.emit("transitionStart")),n.animating||(n.animating=!0,n.onTranslateToWrapperTransitionEnd||(n.onTranslateToWrapperTransitionEnd=function(m){!n||n.destroyed||m.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.onTranslateToWrapperTransitionEnd=null,delete n.onTranslateToWrapperTransitionEnd,n.animating=!1,t&&n.emit("transitionEnd"))}),n.wrapperEl.addEventListener("transitionend",n.onTranslateToWrapperTransitionEnd))),!0}var pt={getTranslate:lt,setTranslate:ct,minTranslate:dt,maxTranslate:ft,translateTo:ut};function mt(s,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${s}ms`,t.wrapperEl.style.transitionDelay=s===0?"0ms":""),t.emit("setTransition",s,e)}function ye(s){let{swiper:e,runCallbacks:t,direction:i,step:r}=s;const{activeIndex:n,previousIndex:l}=e;let o=i;if(o||(n>l?o="next":n<l?o="prev":o="reset"),e.emit(`transition${r}`),t&&n!==l){if(o==="reset"){e.emit(`slideResetTransition${r}`);return}e.emit(`slideChangeTransition${r}`),o==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`)}}function gt(s,e){s===void 0&&(s=!0);const t=this,{params:i}=t;i.cssMode||(i.autoHeight&&t.updateAutoHeight(),ye({swiper:t,runCallbacks:s,direction:e,step:"Start"}))}function ht(s,e){s===void 0&&(s=!0);const t=this,{params:i}=t;t.animating=!1,!i.cssMode&&(t.setTransition(0),ye({swiper:t,runCallbacks:s,direction:e,step:"End"}))}var vt={setTransition:mt,transitionStart:gt,transitionEnd:ht};function _t(s,e,t,i,r){s===void 0&&(s=0),t===void 0&&(t=!0),typeof s=="string"&&(s=parseInt(s,10));const n=this;let l=s;l<0&&(l=0);const{params:o,snapGrid:a,slidesGrid:c,previousIndex:d,activeIndex:f,rtlTranslate:m,wrapperEl:p,enabled:u}=n;if(!u&&!i&&!r||n.destroyed||n.animating&&o.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=n.params.speed);const g=Math.min(n.params.slidesPerGroupSkip,l);let _=g+Math.floor((l-g)/n.params.slidesPerGroup);_>=a.length&&(_=a.length-1);const h=-a[_];if(o.normalizeSlideIndex)for(let v=0;v<c.length;v+=1){const w=-Math.floor(h*100),S=Math.floor(c[v]*100),k=Math.floor(c[v+1]*100);typeof c[v+1]<"u"?w>=S&&w<k-(k-S)/2?l=v:w>=S&&w<k&&(l=v+1):w>=S&&(l=v)}if(n.initialized&&l!==f&&(!n.allowSlideNext&&(m?h>n.translate&&h>n.minTranslate():h<n.translate&&h<n.minTranslate())||!n.allowSlidePrev&&h>n.translate&&h>n.maxTranslate()&&(f||0)!==l))return!1;l!==(d||0)&&t&&n.emit("beforeSlideChangeStart"),n.updateProgress(h);let b;if(l>f?b="next":l<f?b="prev":b="reset",m&&-h===n.translate||!m&&h===n.translate)return n.updateActiveIndex(l),o.autoHeight&&n.updateAutoHeight(),n.updateSlidesClasses(),o.effect!=="slide"&&n.setTranslate(h),b!=="reset"&&(n.transitionStart(t,b),n.transitionEnd(t,b)),!1;if(o.cssMode){const v=n.isHorizontal(),w=m?h:-h;if(e===0){const S=n.virtual&&n.params.virtual.enabled;S&&(n.wrapperEl.style.scrollSnapType="none",n._immediateVirtual=!0),S&&!n._cssModeVirtualInitialSet&&n.params.initialSlide>0?(n._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[v?"scrollLeft":"scrollTop"]=w})):p[v?"scrollLeft":"scrollTop"]=w,S&&requestAnimationFrame(()=>{n.wrapperEl.style.scrollSnapType="",n._immediateVirtual=!1})}else{if(!n.support.smoothScroll)return xe({swiper:n,targetPosition:w,side:v?"left":"top"}),!0;p.scrollTo({[v?"left":"top"]:w,behavior:"smooth"})}return!0}return n.setTransition(e),n.setTranslate(h),n.updateActiveIndex(l),n.updateSlidesClasses(),n.emit("beforeTransitionStart",e,i),n.transitionStart(t,b),e===0?n.transitionEnd(t,b):n.animating||(n.animating=!0,n.onSlideToWrapperTransitionEnd||(n.onSlideToWrapperTransitionEnd=function(w){!n||n.destroyed||w.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onSlideToWrapperTransitionEnd),n.onSlideToWrapperTransitionEnd=null,delete n.onSlideToWrapperTransitionEnd,n.transitionEnd(t,b))}),n.wrapperEl.addEventListener("transitionend",n.onSlideToWrapperTransitionEnd)),!0}function bt(s,e,t,i){s===void 0&&(s=0),t===void 0&&(t=!0),typeof s=="string"&&(s=parseInt(s,10));const r=this;if(r.destroyed)return;typeof e>"u"&&(e=r.params.speed);const n=r.grid&&r.params.grid&&r.params.grid.rows>1;let l=s;if(r.params.loop)if(r.virtual&&r.params.virtual.enabled)l=l+r.virtual.slidesBefore;else{let o;if(n){const m=l*r.params.grid.rows;o=r.slides.filter(p=>p.getAttribute("data-swiper-slide-index")*1===m)[0].column}else o=r.getSlideIndexByData(l);const a=n?Math.ceil(r.slides.length/r.params.grid.rows):r.slides.length,{centeredSlides:c}=r.params;let d=r.params.slidesPerView;d==="auto"?d=r.slidesPerViewDynamic():(d=Math.ceil(parseFloat(r.params.slidesPerView,10)),c&&d%2===0&&(d=d+1));let f=a-o<d;if(c&&(f=f||o<Math.ceil(d/2)),i&&c&&r.params.slidesPerView!=="auto"&&!n&&(f=!1),f){const m=c?o<r.activeIndex?"prev":"next":o-r.activeIndex-1<r.params.slidesPerView?"next":"prev";r.loopFix({direction:m,slideTo:!0,activeSlideIndex:m==="next"?o+1:o-a+1,slideRealIndex:m==="next"?r.realIndex:void 0})}if(n){const m=l*r.params.grid.rows;l=r.slides.filter(p=>p.getAttribute("data-swiper-slide-index")*1===m)[0].column}else l=r.getSlideIndexByData(l)}return requestAnimationFrame(()=>{r.slideTo(l,e,t,i)}),r}function xt(s,e,t){e===void 0&&(e=!0);const i=this,{enabled:r,params:n,animating:l}=i;if(!r||i.destroyed)return i;typeof s>"u"&&(s=i.params.speed);let o=n.slidesPerGroup;n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(o=Math.max(i.slidesPerViewDynamic("current",!0),1));const a=i.activeIndex<n.slidesPerGroupSkip?1:o,c=i.virtual&&n.virtual.enabled;if(n.loop){if(l&&!c&&n.loopPreventsSliding)return!1;if(i.loopFix({direction:"next"}),i._clientLeft=i.wrapperEl.clientLeft,i.activeIndex===i.slides.length-1&&n.cssMode)return requestAnimationFrame(()=>{i.slideTo(i.activeIndex+a,s,e,t)}),!0}return n.rewind&&i.isEnd?i.slideTo(0,s,e,t):i.slideTo(i.activeIndex+a,s,e,t)}function wt(s,e,t){e===void 0&&(e=!0);const i=this,{params:r,snapGrid:n,slidesGrid:l,rtlTranslate:o,enabled:a,animating:c}=i;if(!a||i.destroyed)return i;typeof s>"u"&&(s=i.params.speed);const d=i.virtual&&r.virtual.enabled;if(r.loop){if(c&&!d&&r.loopPreventsSliding)return!1;i.loopFix({direction:"prev"}),i._clientLeft=i.wrapperEl.clientLeft}const f=o?i.translate:-i.translate;function m(h){return h<0?-Math.floor(Math.abs(h)):Math.floor(h)}const p=m(f),u=n.map(h=>m(h));let g=n[u.indexOf(p)-1];if(typeof g>"u"&&r.cssMode){let h;n.forEach((b,v)=>{p>=b&&(h=v)}),typeof h<"u"&&(g=n[h>0?h-1:h])}let _=0;if(typeof g<"u"&&(_=l.indexOf(g),_<0&&(_=i.activeIndex-1),r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(_=_-i.slidesPerViewDynamic("previous",!0)+1,_=Math.max(_,0))),r.rewind&&i.isBeginning){const h=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(h,s,e,t)}else if(r.loop&&i.activeIndex===0&&r.cssMode)return requestAnimationFrame(()=>{i.slideTo(_,s,e,t)}),!0;return i.slideTo(_,s,e,t)}function St(s,e,t){e===void 0&&(e=!0);const i=this;if(!i.destroyed)return typeof s>"u"&&(s=i.params.speed),i.slideTo(i.activeIndex,s,e,t)}function yt(s,e,t,i){e===void 0&&(e=!0),i===void 0&&(i=.5);const r=this;if(r.destroyed)return;typeof s>"u"&&(s=r.params.speed);let n=r.activeIndex;const l=Math.min(r.params.slidesPerGroupSkip,n),o=l+Math.floor((n-l)/r.params.slidesPerGroup),a=r.rtlTranslate?r.translate:-r.translate;if(a>=r.snapGrid[o]){const c=r.snapGrid[o],d=r.snapGrid[o+1];a-c>(d-c)*i&&(n+=r.params.slidesPerGroup)}else{const c=r.snapGrid[o-1],d=r.snapGrid[o];a-c<=(d-c)*i&&(n-=r.params.slidesPerGroup)}return n=Math.max(n,0),n=Math.min(n,r.slidesGrid.length-1),r.slideTo(n,s,e,t)}function Tt(){const s=this;if(s.destroyed)return;const{params:e,slidesEl:t}=s,i=e.slidesPerView==="auto"?s.slidesPerViewDynamic():e.slidesPerView;let r=s.clickedIndex,n;const l=s.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(s.animating)return;n=parseInt(s.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?r<s.loopedSlides-i/2||r>s.slides.length-s.loopedSlides+i/2?(s.loopFix(),r=s.getSlideIndex(O(t,`${l}[data-swiper-slide-index="${n}"]`)[0]),se(()=>{s.slideTo(r)})):s.slideTo(r):r>s.slides.length-i?(s.loopFix(),r=s.getSlideIndex(O(t,`${l}[data-swiper-slide-index="${n}"]`)[0]),se(()=>{s.slideTo(r)})):s.slideTo(r)}else s.slideTo(r)}var Et={slideTo:_t,slideToLoop:bt,slideNext:xt,slidePrev:wt,slideReset:St,slideToClosest:yt,slideToClickedSlide:Tt};function kt(s){const e=this,{params:t,slidesEl:i}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;const r=()=>{O(i,`.${t.slideClass}, swiper-slide`).forEach((f,m)=>{f.setAttribute("data-swiper-slide-index",m)})},n=e.grid&&t.grid&&t.grid.rows>1,l=t.slidesPerGroup*(n?t.grid.rows:1),o=e.slides.length%l!==0,a=n&&e.slides.length%t.grid.rows!==0,c=d=>{for(let f=0;f<d;f+=1){const m=e.isElement?q("swiper-slide",[t.slideBlankClass]):q("div",[t.slideClass,t.slideBlankClass]);e.slidesEl.append(m)}};if(o){if(t.loopAddBlankSlides){const d=l-e.slides.length%l;c(d),e.recalcSlides(),e.updateSlides()}else W("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(a){if(t.loopAddBlankSlides){const d=t.grid.rows-e.slides.length%t.grid.rows;c(d),e.recalcSlides(),e.updateSlides()}else W("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();e.loopFix({slideRealIndex:s,direction:t.centeredSlides?void 0:"next"})}function Mt(s){let{slideRealIndex:e,slideTo:t=!0,direction:i,setTranslate:r,activeSlideIndex:n,byController:l,byMousewheel:o}=s===void 0?{}:s;const a=this;if(!a.params.loop)return;a.emit("beforeLoopFix");const{slides:c,allowSlidePrev:d,allowSlideNext:f,slidesEl:m,params:p}=a,{centeredSlides:u}=p;if(a.allowSlidePrev=!0,a.allowSlideNext=!0,a.virtual&&p.virtual.enabled){t&&(!p.centeredSlides&&a.snapIndex===0?a.slideTo(a.virtual.slides.length,0,!1,!0):p.centeredSlides&&a.snapIndex<p.slidesPerView?a.slideTo(a.virtual.slides.length+a.snapIndex,0,!1,!0):a.snapIndex===a.snapGrid.length-1&&a.slideTo(a.virtual.slidesBefore,0,!1,!0)),a.allowSlidePrev=d,a.allowSlideNext=f,a.emit("loopFix");return}let g=p.slidesPerView;g==="auto"?g=a.slidesPerViewDynamic():(g=Math.ceil(parseFloat(p.slidesPerView,10)),u&&g%2===0&&(g=g+1));const _=p.slidesPerGroupAuto?g:p.slidesPerGroup;let h=_;h%_!==0&&(h+=_-h%_),h+=p.loopAdditionalSlides,a.loopedSlides=h;const b=a.grid&&p.grid&&p.grid.rows>1;c.length<g+h?W("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):b&&p.grid.fill==="row"&&W("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const v=[],w=[];let S=a.activeIndex;typeof n>"u"?n=a.getSlideIndex(c.filter(y=>y.classList.contains(p.slideActiveClass))[0]):S=n;const k=i==="next"||!i,D=i==="prev"||!i;let P=0,V=0;const x=b?Math.ceil(c.length/p.grid.rows):c.length,E=(b?c[n].column:n)+(u&&typeof r>"u"?-g/2+.5:0);if(E<h){P=Math.max(h-E,_);for(let y=0;y<h-E;y+=1){const M=y-Math.floor(y/x)*x;if(b){const C=x-M-1;for(let G=c.length-1;G>=0;G-=1)c[G].column===C&&v.push(G)}else v.push(x-M-1)}}else if(E+g>x-h){V=Math.max(E-(x-h*2),_);for(let y=0;y<V;y+=1){const M=y-Math.floor(y/x)*x;b?c.forEach((C,G)=>{C.column===M&&w.push(G)}):w.push(M)}}if(a.__preventObserver__=!0,requestAnimationFrame(()=>{a.__preventObserver__=!1}),D&&v.forEach(y=>{c[y].swiperLoopMoveDOM=!0,m.prepend(c[y]),c[y].swiperLoopMoveDOM=!1}),k&&w.forEach(y=>{c[y].swiperLoopMoveDOM=!0,m.append(c[y]),c[y].swiperLoopMoveDOM=!1}),a.recalcSlides(),p.slidesPerView==="auto"?a.updateSlides():b&&(v.length>0&&D||w.length>0&&k)&&a.slides.forEach((y,M)=>{a.grid.updateSlide(M,y,a.slides)}),p.watchSlidesProgress&&a.updateSlidesOffset(),t){if(v.length>0&&D){if(typeof e>"u"){const y=a.slidesGrid[S],C=a.slidesGrid[S+P]-y;o?a.setTranslate(a.translate-C):(a.slideTo(S+Math.ceil(P),0,!1,!0),r&&(a.touchEventsData.startTranslate=a.touchEventsData.startTranslate-C,a.touchEventsData.currentTranslate=a.touchEventsData.currentTranslate-C))}else if(r){const y=b?v.length/p.grid.rows:v.length;a.slideTo(a.activeIndex+y,0,!1,!0),a.touchEventsData.currentTranslate=a.translate}}else if(w.length>0&&k)if(typeof e>"u"){const y=a.slidesGrid[S],C=a.slidesGrid[S-V]-y;o?a.setTranslate(a.translate-C):(a.slideTo(S-V,0,!1,!0),r&&(a.touchEventsData.startTranslate=a.touchEventsData.startTranslate-C,a.touchEventsData.currentTranslate=a.touchEventsData.currentTranslate-C))}else{const y=b?w.length/p.grid.rows:w.length;a.slideTo(a.activeIndex-y,0,!1,!0)}}if(a.allowSlidePrev=d,a.allowSlideNext=f,a.controller&&a.controller.control&&!l){const y={slideRealIndex:e,direction:i,setTranslate:r,activeSlideIndex:n,byController:!0};Array.isArray(a.controller.control)?a.controller.control.forEach(M=>{!M.destroyed&&M.params.loop&&M.loopFix({...y,slideTo:M.params.slidesPerView===p.slidesPerView?t:!1})}):a.controller.control instanceof a.constructor&&a.controller.control.params.loop&&a.controller.control.loopFix({...y,slideTo:a.controller.control.params.slidesPerView===p.slidesPerView?t:!1})}a.emit("loopFix")}function Pt(){const s=this,{params:e,slidesEl:t}=s;if(!e.loop||s.virtual&&s.params.virtual.enabled)return;s.recalcSlides();const i=[];s.slides.forEach(r=>{const n=typeof r.swiperSlideIndex>"u"?r.getAttribute("data-swiper-slide-index")*1:r.swiperSlideIndex;i[n]=r}),s.slides.forEach(r=>{r.removeAttribute("data-swiper-slide-index")}),i.forEach(r=>{t.append(r)}),s.recalcSlides(),s.slideTo(s.realIndex,0)}var Ct={loopCreate:kt,loopFix:Mt,loopDestroy:Pt};function Lt(s){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=s?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function It(){const s=this;s.params.watchOverflow&&s.isLocked||s.params.cssMode||(s.isElement&&(s.__preventObserver__=!0),s[s.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",s.isElement&&requestAnimationFrame(()=>{s.__preventObserver__=!1}))}var At={setGrabCursor:Lt,unsetGrabCursor:It};function Ot(s,e){e===void 0&&(e=this);function t(i){if(!i||i===H()||i===A())return null;i.assignedSlot&&(i=i.assignedSlot);const r=i.closest(s);return!r&&!i.getRootNode?null:r||t(i.getRootNode().host)}return t(e)}function ue(s,e,t){const i=A(),{params:r}=s,n=r.edgeSwipeDetection,l=r.edgeSwipeThreshold;return n&&(t<=l||t>=i.innerWidth-l)?n==="prevent"?(e.preventDefault(),!0):!1:!0}function zt(s){const e=this,t=H();let i=s;i.originalEvent&&(i=i.originalEvent);const r=e.touchEventsData;if(i.type==="pointerdown"){if(r.pointerId!==null&&r.pointerId!==i.pointerId)return;r.pointerId=i.pointerId}else i.type==="touchstart"&&i.targetTouches.length===1&&(r.touchId=i.targetTouches[0].identifier);if(i.type==="touchstart"){ue(e,i,i.targetTouches[0].pageX);return}const{params:n,touches:l,enabled:o}=e;if(!o||!n.simulateTouch&&i.pointerType==="mouse"||e.animating&&n.preventInteractionOnTransition)return;!e.animating&&n.cssMode&&n.loop&&e.loopFix();let a=i.target;if(n.touchEventsTarget==="wrapper"&&!e.wrapperEl.contains(a)||"which"in i&&i.which===3||"button"in i&&i.button>0||r.isTouched&&r.isMoved)return;const c=!!n.noSwipingClass&&n.noSwipingClass!=="",d=i.composedPath?i.composedPath():i.path;c&&i.target&&i.target.shadowRoot&&d&&(a=d[0]);const f=n.noSwipingSelector?n.noSwipingSelector:`.${n.noSwipingClass}`,m=!!(i.target&&i.target.shadowRoot);if(n.noSwiping&&(m?Ot(f,a):a.closest(f))){e.allowClick=!0;return}if(n.swipeHandler&&!a.closest(n.swipeHandler))return;l.currentX=i.pageX,l.currentY=i.pageY;const p=l.currentX,u=l.currentY;if(!ue(e,i,p))return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),l.startX=p,l.startY=u,r.touchStartTime=j(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,n.threshold>0&&(r.allowThresholdMove=!1);let g=!0;a.matches(r.focusableElements)&&(g=!1,a.nodeName==="SELECT"&&(r.isTouched=!1)),t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==a&&t.activeElement.blur();const _=g&&e.allowTouchMove&&n.touchStartPreventDefault;(n.touchStartForcePreventDefault||_)&&!a.isContentEditable&&i.preventDefault(),n.freeMode&&n.freeMode.enabled&&e.freeMode&&e.animating&&!n.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",i)}function Gt(s){const e=H(),t=this,i=t.touchEventsData,{params:r,touches:n,rtlTranslate:l,enabled:o}=t;if(!o||!r.simulateTouch&&s.pointerType==="mouse")return;let a=s;if(a.originalEvent&&(a=a.originalEvent),a.type==="pointermove"&&(i.touchId!==null||a.pointerId!==i.pointerId))return;let c;if(a.type==="touchmove"){if(c=[...a.changedTouches].filter(k=>k.identifier===i.touchId)[0],!c||c.identifier!==i.touchId)return}else c=a;if(!i.isTouched){i.startMoving&&i.isScrolling&&t.emit("touchMoveOpposite",a);return}const d=c.pageX,f=c.pageY;if(a.preventedByNestedSwiper){n.startX=d,n.startY=f;return}if(!t.allowTouchMove){a.target.matches(i.focusableElements)||(t.allowClick=!1),i.isTouched&&(Object.assign(n,{startX:d,startY:f,currentX:d,currentY:f}),i.touchStartTime=j());return}if(r.touchReleaseOnEdges&&!r.loop){if(t.isVertical()){if(f<n.startY&&t.translate<=t.maxTranslate()||f>n.startY&&t.translate>=t.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else if(d<n.startX&&t.translate<=t.maxTranslate()||d>n.startX&&t.translate>=t.minTranslate())return}if(e.activeElement&&a.target===e.activeElement&&a.target.matches(i.focusableElements)){i.isMoved=!0,t.allowClick=!1;return}i.allowTouchCallbacks&&t.emit("touchMove",a),n.previousX=n.currentX,n.previousY=n.currentY,n.currentX=d,n.currentY=f;const m=n.currentX-n.startX,p=n.currentY-n.startY;if(t.params.threshold&&Math.sqrt(m**2+p**2)<t.params.threshold)return;if(typeof i.isScrolling>"u"){let k;t.isHorizontal()&&n.currentY===n.startY||t.isVertical()&&n.currentX===n.startX?i.isScrolling=!1:m*m+p*p>=25&&(k=Math.atan2(Math.abs(p),Math.abs(m))*180/Math.PI,i.isScrolling=t.isHorizontal()?k>r.touchAngle:90-k>r.touchAngle)}if(i.isScrolling&&t.emit("touchMoveOpposite",a),typeof i.startMoving>"u"&&(n.currentX!==n.startX||n.currentY!==n.startY)&&(i.startMoving=!0),i.isScrolling||a.type==="touchmove"&&i.preventTouchMoveFromPointerMove){i.isTouched=!1;return}if(!i.startMoving)return;t.allowClick=!1,!r.cssMode&&a.cancelable&&a.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&a.stopPropagation();let u=t.isHorizontal()?m:p,g=t.isHorizontal()?n.currentX-n.previousX:n.currentY-n.previousY;r.oneWayMovement&&(u=Math.abs(u)*(l?1:-1),g=Math.abs(g)*(l?1:-1)),n.diff=u,u*=r.touchRatio,l&&(u=-u,g=-g);const _=t.touchesDirection;t.swipeDirection=u>0?"prev":"next",t.touchesDirection=g>0?"prev":"next";const h=t.params.loop&&!r.cssMode,b=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!i.isMoved){if(h&&b&&t.loopFix({direction:t.swipeDirection}),i.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const k=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(k)}i.allowMomentumBounce=!1,r.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",a)}let v;if(new Date().getTime(),i.isMoved&&i.allowThresholdMove&&_!==t.touchesDirection&&h&&b&&Math.abs(u)>=1){Object.assign(n,{startX:d,startY:f,currentX:d,currentY:f,startTranslate:i.currentTranslate}),i.loopSwapReset=!0,i.startTranslate=i.currentTranslate;return}t.emit("sliderMove",a),i.isMoved=!0,i.currentTranslate=u+i.startTranslate;let w=!0,S=r.resistanceRatio;if(r.touchReleaseOnEdges&&(S=0),u>0?(h&&b&&!v&&i.allowThresholdMove&&i.currentTranslate>(r.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),i.currentTranslate>t.minTranslate()&&(w=!1,r.resistance&&(i.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+i.startTranslate+u)**S))):u<0&&(h&&b&&!v&&i.allowThresholdMove&&i.currentTranslate<(r.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]:t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(r.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),i.currentTranslate<t.maxTranslate()&&(w=!1,r.resistance&&(i.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-i.startTranslate-u)**S))),w&&(a.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(i.currentTranslate=i.startTranslate),r.threshold>0)if(Math.abs(u)>r.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,i.currentTranslate=i.startTranslate,n.diff=t.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY;return}}else{i.currentTranslate=i.startTranslate;return}!r.followFinger||r.cssMode||((r.freeMode&&r.freeMode.enabled&&t.freeMode||r.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(i.currentTranslate),t.setTranslate(i.currentTranslate))}function Ft(s){const e=this,t=e.touchEventsData;let i=s;i.originalEvent&&(i=i.originalEvent);let r;if(i.type==="touchend"||i.type==="touchcancel"){if(r=[...i.changedTouches].filter(S=>S.identifier===t.touchId)[0],!r||r.identifier!==t.touchId)return}else{if(t.touchId!==null||i.pointerId!==t.pointerId)return;r=i}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(i.type)&&!(["pointercancel","contextmenu"].includes(i.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:l,touches:o,rtlTranslate:a,slidesGrid:c,enabled:d}=e;if(!d||!l.simulateTouch&&i.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",i),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&l.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}l.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const f=j(),m=f-t.touchStartTime;if(e.allowClick){const S=i.path||i.composedPath&&i.composedPath();e.updateClickedSlide(S&&S[0]||i.target,S),e.emit("tap click",i),m<300&&f-t.lastClickTime<300&&e.emit("doubleTap doubleClick",i)}if(t.lastClickTime=j(),se(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||o.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let p;if(l.followFinger?p=a?e.translate:-e.translate:p=-t.currentTranslate,l.cssMode)return;if(l.freeMode&&l.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:p});return}const u=p>=-e.maxTranslate()&&!e.params.loop;let g=0,_=e.slidesSizesGrid[0];for(let S=0;S<c.length;S+=S<l.slidesPerGroupSkip?1:l.slidesPerGroup){const k=S<l.slidesPerGroupSkip-1?1:l.slidesPerGroup;typeof c[S+k]<"u"?(u||p>=c[S]&&p<c[S+k])&&(g=S,_=c[S+k]-c[S]):(u||p>=c[S])&&(g=S,_=c[c.length-1]-c[c.length-2])}let h=null,b=null;l.rewind&&(e.isBeginning?b=l.virtual&&l.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(h=0));const v=(p-c[g])/_,w=g<l.slidesPerGroupSkip-1?1:l.slidesPerGroup;if(m>l.longSwipesMs){if(!l.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(v>=l.longSwipesRatio?e.slideTo(l.rewind&&e.isEnd?h:g+w):e.slideTo(g)),e.swipeDirection==="prev"&&(v>1-l.longSwipesRatio?e.slideTo(g+w):b!==null&&v<0&&Math.abs(v)>l.longSwipesRatio?e.slideTo(b):e.slideTo(g))}else{if(!l.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(i.target===e.navigation.nextEl||i.target===e.navigation.prevEl)?i.target===e.navigation.nextEl?e.slideTo(g+w):e.slideTo(g):(e.swipeDirection==="next"&&e.slideTo(h!==null?h:g+w),e.swipeDirection==="prev"&&e.slideTo(b!==null?b:g))}}function pe(){const s=this,{params:e,el:t}=s;if(t&&t.offsetWidth===0)return;e.breakpoints&&s.setBreakpoint();const{allowSlideNext:i,allowSlidePrev:r,snapGrid:n}=s,l=s.virtual&&s.params.virtual.enabled;s.allowSlideNext=!0,s.allowSlidePrev=!0,s.updateSize(),s.updateSlides(),s.updateSlidesClasses();const o=l&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&s.isEnd&&!s.isBeginning&&!s.params.centeredSlides&&!o?s.slideTo(s.slides.length-1,0,!1,!0):s.params.loop&&!l?s.slideToLoop(s.realIndex,0,!1,!0):s.slideTo(s.activeIndex,0,!1,!0),s.autoplay&&s.autoplay.running&&s.autoplay.paused&&(clearTimeout(s.autoplay.resizeTimeout),s.autoplay.resizeTimeout=setTimeout(()=>{s.autoplay&&s.autoplay.running&&s.autoplay.paused&&s.autoplay.resume()},500)),s.allowSlidePrev=r,s.allowSlideNext=i,s.params.watchOverflow&&n!==s.snapGrid&&s.checkOverflow()}function Dt(s){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&s.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(s.stopPropagation(),s.stopImmediatePropagation())))}function Bt(){const s=this,{wrapperEl:e,rtlTranslate:t,enabled:i}=s;if(!i)return;s.previousTranslate=s.translate,s.isHorizontal()?s.translate=-e.scrollLeft:s.translate=-e.scrollTop,s.translate===0&&(s.translate=0),s.updateActiveIndex(),s.updateSlidesClasses();let r;const n=s.maxTranslate()-s.minTranslate();n===0?r=0:r=(s.translate-s.minTranslate())/n,r!==s.progress&&s.updateProgress(t?-s.translate:s.translate),s.emit("setTranslate",s.translate,!1)}function Vt(s){const e=this;R(e,s.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function Ht(){const s=this;s.documentTouchHandlerProceeded||(s.documentTouchHandlerProceeded=!0,s.params.touchReleaseOnEdges&&(s.el.style.touchAction="auto"))}const Te=(s,e)=>{const t=H(),{params:i,el:r,wrapperEl:n,device:l}=s,o=!!i.nested,a=e==="on"?"addEventListener":"removeEventListener",c=e;t[a]("touchstart",s.onDocumentTouchStart,{passive:!1,capture:o}),r[a]("touchstart",s.onTouchStart,{passive:!1}),r[a]("pointerdown",s.onTouchStart,{passive:!1}),t[a]("touchmove",s.onTouchMove,{passive:!1,capture:o}),t[a]("pointermove",s.onTouchMove,{passive:!1,capture:o}),t[a]("touchend",s.onTouchEnd,{passive:!0}),t[a]("pointerup",s.onTouchEnd,{passive:!0}),t[a]("pointercancel",s.onTouchEnd,{passive:!0}),t[a]("touchcancel",s.onTouchEnd,{passive:!0}),t[a]("pointerout",s.onTouchEnd,{passive:!0}),t[a]("pointerleave",s.onTouchEnd,{passive:!0}),t[a]("contextmenu",s.onTouchEnd,{passive:!0}),(i.preventClicks||i.preventClicksPropagation)&&r[a]("click",s.onClick,!0),i.cssMode&&n[a]("scroll",s.onScroll),i.updateOnWindowResize?s[c](l.ios||l.android?"resize orientationchange observerUpdate":"resize observerUpdate",pe,!0):s[c]("observerUpdate",pe,!0),r[a]("load",s.onLoad,{capture:!0})};function Nt(){const s=this,{params:e}=s;s.onTouchStart=zt.bind(s),s.onTouchMove=Gt.bind(s),s.onTouchEnd=Ft.bind(s),s.onDocumentTouchStart=Ht.bind(s),e.cssMode&&(s.onScroll=Bt.bind(s)),s.onClick=Dt.bind(s),s.onLoad=Vt.bind(s),Te(s,"on")}function $t(){Te(this,"off")}var Rt={attachEvents:Nt,detachEvents:$t};const me=(s,e)=>s.grid&&e.grid&&e.grid.rows>1;function jt(){const s=this,{realIndex:e,initialized:t,params:i,el:r}=s,n=i.breakpoints;if(!n||n&&Object.keys(n).length===0)return;const l=s.getBreakpoint(n,s.params.breakpointsBase,s.el);if(!l||s.currentBreakpoint===l)return;const a=(l in n?n[l]:void 0)||s.originalParams,c=me(s,i),d=me(s,a),f=s.params.grabCursor,m=a.grabCursor,p=i.enabled;c&&!d?(r.classList.remove(`${i.containerModifierClass}grid`,`${i.containerModifierClass}grid-column`),s.emitContainerClasses()):!c&&d&&(r.classList.add(`${i.containerModifierClass}grid`),(a.grid.fill&&a.grid.fill==="column"||!a.grid.fill&&i.grid.fill==="column")&&r.classList.add(`${i.containerModifierClass}grid-column`),s.emitContainerClasses()),f&&!m?s.unsetGrabCursor():!f&&m&&s.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(v=>{if(typeof a[v]>"u")return;const w=i[v]&&i[v].enabled,S=a[v]&&a[v].enabled;w&&!S&&s[v].disable(),!w&&S&&s[v].enable()});const u=a.direction&&a.direction!==i.direction,g=i.loop&&(a.slidesPerView!==i.slidesPerView||u),_=i.loop;u&&t&&s.changeDirection(),I(s.params,a);const h=s.params.enabled,b=s.params.loop;Object.assign(s,{allowTouchMove:s.params.allowTouchMove,allowSlideNext:s.params.allowSlideNext,allowSlidePrev:s.params.allowSlidePrev}),p&&!h?s.disable():!p&&h&&s.enable(),s.currentBreakpoint=l,s.emit("_beforeBreakpoint",a),t&&(g?(s.loopDestroy(),s.loopCreate(e),s.updateSlides()):!_&&b?(s.loopCreate(e),s.updateSlides()):_&&!b&&s.loopDestroy()),s.emit("breakpoint",a)}function Wt(s,e,t){if(e===void 0&&(e="window"),!s||e==="container"&&!t)return;let i=!1;const r=A(),n=e==="window"?r.innerHeight:t.clientHeight,l=Object.keys(s).map(o=>{if(typeof o=="string"&&o.indexOf("@")===0){const a=parseFloat(o.substr(1));return{value:n*a,point:o}}return{value:o,point:o}});l.sort((o,a)=>parseInt(o.value,10)-parseInt(a.value,10));for(let o=0;o<l.length;o+=1){const{point:a,value:c}=l[o];e==="window"?r.matchMedia(`(min-width: ${c}px)`).matches&&(i=a):c<=t.clientWidth&&(i=a)}return i||"max"}var qt={setBreakpoint:jt,getBreakpoint:Wt};function Yt(s,e){const t=[];return s.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(r=>{i[r]&&t.push(e+r)}):typeof i=="string"&&t.push(e+i)}),t}function Xt(){const s=this,{classNames:e,params:t,rtl:i,el:r,device:n}=s,l=Yt(["initialized",t.direction,{"free-mode":s.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:i},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:n.android},{ios:n.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...l),r.classList.add(...e),s.emitContainerClasses()}function Ut(){const s=this,{el:e,classNames:t}=s;e.classList.remove(...t),s.emitContainerClasses()}var Kt={addClasses:Xt,removeClasses:Ut};function Qt(){const s=this,{isLocked:e,params:t}=s,{slidesOffsetBefore:i}=t;if(i){const r=s.slides.length-1,n=s.slidesGrid[r]+s.slidesSizesGrid[r]+i*2;s.isLocked=s.size>n}else s.isLocked=s.snapGrid.length===1;t.allowSlideNext===!0&&(s.allowSlideNext=!s.isLocked),t.allowSlidePrev===!0&&(s.allowSlidePrev=!s.isLocked),e&&e!==s.isLocked&&(s.isEnd=!1),e!==s.isLocked&&s.emit(s.isLocked?"lock":"unlock")}var Jt={checkOverflow:Qt},ge={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Zt(s,e){return function(i){i===void 0&&(i={});const r=Object.keys(i)[0],n=i[r];if(typeof n!="object"||n===null){I(e,i);return}if(s[r]===!0&&(s[r]={enabled:!0}),r==="navigation"&&s[r]&&s[r].enabled&&!s[r].prevEl&&!s[r].nextEl&&(s[r].auto=!0),["pagination","scrollbar"].indexOf(r)>=0&&s[r]&&s[r].enabled&&!s[r].el&&(s[r].auto=!0),!(r in s&&"enabled"in n)){I(e,i);return}typeof s[r]=="object"&&!("enabled"in s[r])&&(s[r].enabled=!0),s[r]||(s[r]={enabled:!1}),I(e,i)}}const J={eventsEmitter:Ke,update:ot,translate:pt,transition:vt,slide:Et,loop:Ct,grabCursor:At,events:Rt,breakpoints:qt,checkOverflow:Jt,classes:Kt},Z={};class L{constructor(){let e,t;for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];r.length===1&&r[0].constructor&&Object.prototype.toString.call(r[0]).slice(8,-1)==="Object"?t=r[0]:[e,t]=r,t||(t={}),t=I({},t),e&&!t.el&&(t.el=e);const l=H();if(t.el&&typeof t.el=="string"&&l.querySelectorAll(t.el).length>1){const d=[];return l.querySelectorAll(t.el).forEach(f=>{const m=I({},t,{el:f});d.push(new L(m))}),d}const o=this;o.__swiper__=!0,o.support=we(),o.device=Se({userAgent:t.userAgent}),o.browser=Ye(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],t.modules&&Array.isArray(t.modules)&&o.modules.push(...t.modules);const a={};o.modules.forEach(d=>{d({params:t,swiper:o,extendParams:Zt(t,a),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const c=I({},ge,a);return o.params=I({},c,Z,t),o.originalParams=I({},o.params),o.passedParams=I({},t),o.params&&o.params.on&&Object.keys(o.params.on).forEach(d=>{o.on(d,o.params.on[d])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:i}=this,r=O(t,`.${i.slideClass}, swiper-slide`),n=ce(r[0]);return ce(e)-n}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(t=>t.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:t,params:i}=e;e.slides=O(t,`.${i.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const i=this;e=Math.min(Math.max(e,0),1);const r=i.minTranslate(),l=(i.maxTranslate()-r)*e+r;i.translateTo(l,typeof t>"u"?0:t),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(i=>{const r=e.getSlideClasses(i);t.push({slideEl:i,classNames:r}),e.emit("_slideClass",i,r)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){e===void 0&&(e="current"),t===void 0&&(t=!1);const i=this,{params:r,slides:n,slidesGrid:l,slidesSizesGrid:o,size:a,activeIndex:c}=i;let d=1;if(typeof r.slidesPerView=="number")return r.slidesPerView;if(r.centeredSlides){let f=n[c]?Math.ceil(n[c].swiperSlideSize):0,m;for(let p=c+1;p<n.length;p+=1)n[p]&&!m&&(f+=Math.ceil(n[p].swiperSlideSize),d+=1,f>a&&(m=!0));for(let p=c-1;p>=0;p-=1)n[p]&&!m&&(f+=n[p].swiperSlideSize,d+=1,f>a&&(m=!0))}else if(e==="current")for(let f=c+1;f<n.length;f+=1)(t?l[f]+o[f]-l[c]<a:l[f]-l[c]<a)&&(d+=1);else for(let f=c-1;f>=0;f-=1)l[c]-l[f]<a&&(d+=1);return d}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:i}=e;i.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(l=>{l.complete&&R(e,l)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function r(){const l=e.rtlTranslate?e.translate*-1:e.translate,o=Math.min(Math.max(l,e.maxTranslate()),e.minTranslate());e.setTranslate(o),e.updateActiveIndex(),e.updateSlidesClasses()}let n;if(i.freeMode&&i.freeMode.enabled&&!i.cssMode)r(),i.autoHeight&&e.updateAutoHeight();else{if((i.slidesPerView==="auto"||i.slidesPerView>1)&&e.isEnd&&!i.centeredSlides){const l=e.virtual&&i.virtual.enabled?e.virtual.slides:e.slides;n=e.slideTo(l.length-1,0,!1,!0)}else n=e.slideTo(e.activeIndex,0,!1,!0);n||r()}i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){t===void 0&&(t=!0);const i=this,r=i.params.direction;return e||(e=r==="horizontal"?"vertical":"horizontal"),e===r||e!=="horizontal"&&e!=="vertical"||(i.el.classList.remove(`${i.params.containerModifierClass}${r}`),i.el.classList.add(`${i.params.containerModifierClass}${e}`),i.emitContainerClasses(),i.params.direction=e,i.slides.forEach(n=>{e==="vertical"?n.style.width="":n.style.height=""}),i.emit("changeDirection"),t&&i.update()),i}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let i=e||t.params.el;if(typeof i=="string"&&(i=document.querySelector(i)),!i)return!1;i.swiper=t,i.parentNode&&i.parentNode.host&&i.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const r=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let l=i&&i.shadowRoot&&i.shadowRoot.querySelector?i.shadowRoot.querySelector(r()):O(i,r())[0];return!l&&t.params.createElements&&(l=q("div",t.params.wrapperClass),i.append(l),O(i,`.${t.params.slideClass}`).forEach(o=>{l.append(o)})),Object.assign(t,{el:i,wrapperEl:l,slidesEl:t.isElement&&!i.parentNode.host.slideSlots?i.parentNode.host:l,hostEl:t.isElement?i.parentNode.host:i,mounted:!0,rtl:i.dir.toLowerCase()==="rtl"||F(i,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(i.dir.toLowerCase()==="rtl"||F(i,"direction")==="rtl"),wrongRTL:F(l,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents();const r=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),r.forEach(n=>{n.complete?R(t,n):n.addEventListener("load",l=>{R(t,l.target)})}),ie(t),t.initialized=!0,ie(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);const i=this,{params:r,el:n,wrapperEl:l,slides:o}=i;return typeof i.params>"u"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),r.loop&&i.loopDestroy(),t&&(i.removeClasses(),n.removeAttribute("style"),l.removeAttribute("style"),o&&o.length&&o.forEach(a=>{a.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),a.removeAttribute("style"),a.removeAttribute("data-swiper-slide-index")})),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(a=>{i.off(a)}),e!==!1&&(i.el.swiper=null,De(i)),i.destroyed=!0),null}static extendDefaults(e){I(Z,e)}static get extendedDefaults(){return Z}static get defaults(){return ge}static installModule(e){L.prototype.__modules__||(L.prototype.__modules__=[]);const t=L.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>L.installModule(t)),L):(L.installModule(e),L)}}Object.keys(J).forEach(s=>{Object.keys(J[s]).forEach(e=>{L.prototype[e]=J[s][e]})});L.use([Xe,Ue]);function es(s,e,t,i){return s.params.createElements&&Object.keys(i).forEach(r=>{if(!t[r]&&t.auto===!0){let n=O(s.el,`.${i[r]}`)[0];n||(n=q("div",i[r]),n.className=i[r],s.el.append(n)),t[r]=n,e[r]=n}}),t}function Ee(s){let{swiper:e,extendParams:t,on:i,emit:r}=s;t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function n(u){let g;return u&&typeof u=="string"&&e.isElement&&(g=e.el.querySelector(u),g)?g:(u&&(typeof u=="string"&&(g=[...document.querySelectorAll(u)]),e.params.uniqueNavElements&&typeof u=="string"&&g&&g.length>1&&e.el.querySelectorAll(u).length===1?g=e.el.querySelector(u):g&&g.length===1&&(g=g[0])),u&&!g?u:g)}function l(u,g){const _=e.params.navigation;u=z(u),u.forEach(h=>{h&&(h.classList[g?"add":"remove"](..._.disabledClass.split(" ")),h.tagName==="BUTTON"&&(h.disabled=g),e.params.watchOverflow&&e.enabled&&h.classList[e.isLocked?"add":"remove"](_.lockClass))})}function o(){const{nextEl:u,prevEl:g}=e.navigation;if(e.params.loop){l(g,!1),l(u,!1);return}l(g,e.isBeginning&&!e.params.rewind),l(u,e.isEnd&&!e.params.rewind)}function a(u){u.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),r("navigationPrev"))}function c(u){u.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),r("navigationNext"))}function d(){const u=e.params.navigation;if(e.params.navigation=es(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(u.nextEl||u.prevEl))return;let g=n(u.nextEl),_=n(u.prevEl);Object.assign(e.navigation,{nextEl:g,prevEl:_}),g=z(g),_=z(_);const h=(b,v)=>{b&&b.addEventListener("click",v==="next"?c:a),!e.enabled&&b&&b.classList.add(...u.lockClass.split(" "))};g.forEach(b=>h(b,"next")),_.forEach(b=>h(b,"prev"))}function f(){let{nextEl:u,prevEl:g}=e.navigation;u=z(u),g=z(g);const _=(h,b)=>{h.removeEventListener("click",b==="next"?c:a),h.classList.remove(...e.params.navigation.disabledClass.split(" "))};u.forEach(h=>_(h,"next")),g.forEach(h=>_(h,"prev"))}i("init",()=>{e.params.navigation.enabled===!1?p():(d(),o())}),i("toEdge fromEdge lock unlock",()=>{o()}),i("destroy",()=>{f()}),i("enable disable",()=>{let{nextEl:u,prevEl:g}=e.navigation;if(u=z(u),g=z(g),e.enabled){o();return}[...u,...g].filter(_=>!!_).forEach(_=>_.classList.add(e.params.navigation.lockClass))}),i("click",(u,g)=>{let{nextEl:_,prevEl:h}=e.navigation;_=z(_),h=z(h);const b=g.target;if(e.params.navigation.hideOnClick&&!h.includes(b)&&!_.includes(b)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===b||e.pagination.el.contains(b)))return;let v;_.length?v=_[0].classList.contains(e.params.navigation.hiddenClass):h.length&&(v=h[0].classList.contains(e.params.navigation.hiddenClass)),r(v===!0?"navigationShow":"navigationHide"),[..._,...h].filter(w=>!!w).forEach(w=>w.classList.toggle(e.params.navigation.hiddenClass))}});const m=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),d(),o()},p=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),f()};Object.assign(e.navigation,{enable:m,disable:p,update:o,init:d,destroy:f})}new L(".feedback__swiper",{loop:!0,spaceBetween:30,modules:[Ee],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});new L(".business__swiper",{loop:!0,spaceBetween:30,modules:[Ee],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});class ts extends HTMLElement{constructor(){super(),this.innerHTML=`

        <style>
            .book {
                ppadding-bottom: 15%;
                margin-bottom: 8%;
            }

            .book__container {
                display: flex;
                align-items: center;
                flex-direction: column;
                gap: 20px;
                padding: 0 70px;
                border-radius: 30px;
                background: rgb(24, 24, 24);

                @media (min-width: 992px) {
                    flex-direction: row;
                    justify-content: space-between;
                }
            }

            .book__content {
                max-width: 400px;
                padding: 15px 0;
            }

            .book__subtitle {
                margin-bottom: 10px;
            }

            .book__title {
                color:#FFFFFF;
            }

            .book__title-text {
                color:#727272;
            }

            .book__text {
                margin-bottom: 20px;
                color:#FFF;
            }

            .book__link {
                display: inline-flex;
                align-items: center;
                gap: 10px;
                padding: 15px 20px;
                color:#181818;
                border-radius: 42px;
                background-color: #FFCC4A;
                font-family: Lato;
                font-size: 18px;
                font-weight: 600;
                text-decoration: none;
            }

            .book__icon {
                width: 25px;
                height: 25px;
                fill: transparent;
                stroke: #181818;
            }

            .book__img {
                max-width: 500px;
            }
        </style>

        <section class="book">
        <div class="book">
           <div class="book__container container">
              <div class="book__content">
                 <span class="book__subtitle second-subtitle">
                    Book Now
                 </span>
                 <h3 class="book__title title">
                    Better Consult,
                    <strong class="book__title-text">
                       Better
                    </strong>
                    Results
                 </h3>
                 <p class="book__text text">
                    Our software development agency has a growth up to 30% per each year. If you are result-oriented,
                    not afraid to take initiative – drop us a note and join our team!
                 </p>
                 <a class="book__link" href="tel:+8884521505">
                    <svg class="book__icon">
                    <use xlink:href="img/svg/sprite.svg#phone" />
                    </svg>
                    +800 1234 654 
                 </a>
              </div>
                 <img class="book__img img" src="img/bookImg.png" alt="work" loading="lazy">
           </div>
        </div>
     </section>
        `}}customElements.define("book-component",ts);class ss extends HTMLElement{constructor(){super(),this.innerHTML=`

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
        `}}customElements.define("special-services",ss);class is extends HTMLElement{constructor(){super();const e=this.getAttribute("img-url");this.innerHTML=`

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
        `}}customElements.define("special-clients",is);class rs extends HTMLElement{constructor(){super(),this.innerHTML=`
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
      `}}customElements.define("special-header",rs);class ns extends HTMLElement{constructor(){super(),this.innerHTML=`
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
      `}}customElements.define("special-footer",ns);class as extends HTMLElement{constructor(){super();const e=this.getAttribute("subtitle"),t=this.getAttribute("title");this.innerHTML=`

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
        `}}customElements.define("special-hero",as);const he=document.querySelector(".header"),B=document.querySelector(".nav");document.querySelector(".burger");const ee=document.querySelectorAll(".burger__line"),te=document.querySelector(".main__overlay");document.querySelectorAll(".nav__link").forEach(s=>{s.href===window.location.href&&s.classList.add("nav__link_active")});function os(){document.addEventListener("click",e=>{e.target.closest(".burger")?(B.classList.toggle("nav_active"),B.style.paddingTop=he.offsetHeight+"px",ee.forEach(t=>{t.classList.toggle("burger_active"),te.classList.toggle("main__overlay_active")})):(e.target.closest(".burger")||e.target.closest(".main__overlay"))&&(B.classList.remove("nav_active"),B.style.paddingTop="",ee.forEach(t=>{t.classList.remove("burger_active")}),te.classList.remove("main__overlay_active"))}),window.matchMedia("(min-width: 1200px)").addEventListener("change",e=>e.matches?(B.style.paddingTop="",B.classList.remove("nav_active"),te.classList.remove("main__overlay_active"),ee.forEach(t=>{t.classList.remove("burger_active")}),!0):(B.style.paddingTop=he.offsetHeight+"px",!1))}os();const ls=document.querySelector(".loader-box");window.addEventListener("load",s=>{ls.classList.add("loader_hidden")});
