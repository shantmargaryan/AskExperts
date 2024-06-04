export class specialServices extends HTMLElement {
   constructor() {
      super()
      this.innerHTML = `

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
        `
   }
}

customElements.define("special-services", specialServices)