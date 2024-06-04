class talk extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `

        <style>

        .talk {
            padding-bottom: 10%;
        }

        .talk__container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0;
            border-radius: 30px;
            background-color: rgb(24, 24, 24);
        }

        .talk__content {
            max-width: 500px;
            padding: 7% 15px 7% 8%;
        }

        .talk__subtitle {
            margin-bottom: 10px;
            background-color: #323232;
            color: #fff;
        }

        .talk__title {
            margin-bottom: 5px;
            color: #fff;
        }

        .talk__text {
            margin-bottom: 10px;
            color: #fff;
            letter-spacing: 1px;
        }

        .talk__form {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 30px;
        }

        .form__input {
            flex-grow: 1;
            padding: 15px;
            border: 1px solid rgb(193, 193, 193);
            border-radius: 54px;
            background-color: rgb(255, 255, 255);
        }

        .form__input::placeholder {
            font-family: Lato;
            font-weight: 400;
            color:#A9A9A9;
        }

        .form__btn {
            flex-grow: 1;
            padding: 15px 25px;
            color: #fff;
            border-radius: 42px;
            background-color: #4EAF4E;
        }

        @media(min-width: 992px) {
            .talk__container {
                flex-direction: row;
            }

            .form__btn {
                flex-grow: 0;
            }
        }
        </style>

        <section class="talk">
            <div class="talk__container container">
                <div class="talk__content">
                    <span class="talk__subtitle first-subtitle">
                        Contact
                    </span>
                    <h3 class="talk__title title">
                        Ready To Talk?
                    </h3>
                    <p class="talk__text text">
                        Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.
                        Massa placerat duis ultricies lacus sed turpis. Pellentesque pellentesque habitant morbi
                        tristique.
                    </p>
                    <form class="talk__form form" action="#" method="post" enctype="multipart/form-data">
                        <input class="form__input input-reset" type="email" required placeholder="your mail address">
                        <button class="form__btn button-reset">
                            Send Message
                        </button>
                    </form>
                </div>
                <img class="talk__img img" src="img/contactImg.png" alt="hand">
            </div>
        </section>
        `
    }
}

customElements.define('talk-component', talk)