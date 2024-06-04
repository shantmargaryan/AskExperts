class contactForm extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `

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
        `
    }
}

customElements.define('contact-form', contactForm)