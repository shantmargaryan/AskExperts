class subscribe extends HTMLElement {
    constructor() {
        super()
        this.innerHTML = `

    <style>

        .subscribe {
            padding-bottom:10%;
    }

    .subscribe__container {
        position: relative;
        isolation: isolate;
        display: flex;
        flex-direction: column;
        gap: 40px;
        padding: 80px 50px;
        border-radius: 20px;
        background-color: #181818;
        overflow: hidden;
    }

    .subscribe__Pattern {
        position: absolute;
        right: -50px;
        top: -80px;
        z-index: -1;
        max-width: 200px;
        transform: rotate(40deg);
    }

    .subscribe__green {
        position: absolute;
        right: -80px;
        bottom: -230px;
        width: 225px;
        height: 285px;
        border-radius: 20px;
        background: #4EAF4E;
        transform: rotate(40deg);
    }

    .subscribe__title {
        font-size: 35px;
        color: #fff;
    }

    .Subscribe__text {
        color: #fff;
    }

    .subscribe__form {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 20px;
        flex-grow: 1;
    }

    .form__input {
        width: 100%;
        padding: 15px;
        border: 1px solid #E3E3E3;
        border-radius: 55px;
        background: #fff;
    }

    .form__input::placeholder {
        font-family: Lato;
        font-weight: 400;
        color: #A9A9A9;
    }

    .form__btn {
        width: 100%;
        padding: 15px 30px;
        font-size: 16px;
    }


    @media (min-width: 992px) {
        .subscribe__form {
            flex-wrap: nowrap;
            justify-content: center;
        }

        .form__input {
            max-width: 250px;
        }

        .form__btn {
            max-width: 170px;
        }
    }

    @media (min-width: 768px) {
        .subscribe__container {
            flex-direction: row;
            align-items: center;
        }
    }

    </style>


        <section class="subscribe">
            <div class="subscribe__container container">
                <img class="subscribe__Pattern img" src="img/Pattern.png" alt="Pattern" loading="lazy">
                <span class="subscribe__green"></span>
                <div class="subscribe__content">
                    <h2 class="subscribe__title title">
                        Subscribe Our Newsletter
                    </h2>
                    <p class="Subscribe__text text">
                        Build stronger Customer Relationships with Consultalk
                    </p>
                </div>
                <form class="subscribe__form form" action="#" method="post" enctype="multipart/form-data">
                    <input class="form__input input-reset" type="email" required placeholder="your mail address">
                    <button class="form__btn button-reset yellow-button">
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
        `
    }
}

customElements.define("subscribe-component", subscribe)