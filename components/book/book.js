class book extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `

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
        `
    }
}

customElements.define('book-component', book)