export class specialClients extends HTMLElement {
   constructor() {
      super();
      const imgUrl = this.getAttribute("img-url");
      this.innerHTML = `

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
           <img class="clients__img img" src=${imgUrl} alt=${imgUrl} loading="lazy">
           <div class="clients__text-box">
           <h3 class="clients__small-title small-title">
              Taxes & Efficiency
           </h3>
           <span class="clients__subtitle">
              Business
           </span>
           </div>
        </li>
        `
   }
}

customElements.define('special-clients', specialClients)