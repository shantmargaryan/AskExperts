export class specialBrands extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
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
        `
    }
}


customElements.define("special-brands", specialBrands)