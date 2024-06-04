class contactUs extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `

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
        `
    }
}

customElements.define('contact-us', contactUs)