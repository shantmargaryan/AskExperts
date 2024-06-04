export class specialHeader extends HTMLElement {
   constructor() {
      super();
      this.innerHTML = `
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
      `
   }
}

customElements.define("special-header", specialHeader);

class specialFooter extends HTMLElement {
   constructor() {
      super();
      this.innerHTML = `
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
      `
   }
}

customElements.define("special-footer", specialFooter);