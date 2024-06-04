class teamItem extends HTMLElement {
    constructor() {
        super();
        const name = this.getAttribute("name")
        const position = this.getAttribute("position")
        const imgUrl = this.getAttribute("img-url")
        this.innerHTML = `
<style>
.team__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .team__text {
        max-width: 330px
    }
}

.team__img-link {
    position: relative;
    display: block;
    width: 100%;
    margin-bottom: 25px;

    &:hover {
        .team__position {
            background-color: #181818;
            color: #fff
        }
    }
}

.team__picture {}

.team__img {
    aspect-ratio: 1 / 1;
    border-radius: 20px
}

.team__position {
    position: absolute;
    right: 20px;
    bottom: 20px;
    padding: 5px 10px;
    border-radius: 29px;
    backdrop-filter: blur(11px);
    background-color: rgb(255, 204, 74);
    color: #181818;
    font-family: Lato;
    font-weight: 600;
    transition: background-color .4s, color .4s
}

.team__name {
    display: block;
    margin-bottom: 15px;
    font-size: 25px;
    font-weight: 700;
    color: #181818
}

.team__socials {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 30px
}

.team__social-link {
    text-decoration: none
}

.team__social-icon {
    width: 23px;
    height: 20px;
    fill: #181818
}
</style>

        <li class="team__item">
        <a class="team__img-link" href="team-single.html">
                <img class="team__img img" src=${imgUrl} alt="Sarah-Jasmine">
            <span class="team__position">
            ${position}
            </span>
        </a>
        <span class="team__name" >
            ${name}
        </span>
        <p class="team__text text">
            Leverage agile frameworks to provide a robust synopsis for high level overviews.
        </p>
        <div class="team__socials">
            <a class="team__social-link" href="#">
                <svg class="team__social-icon">
                    <use xlink:href="img/svg/sprite.svg#Instagram" />
                </svg>
            </a>
            <a class="team__social-link" href="#">
                <svg class="team__social-icon">
                    <use xlink:href="img/svg/sprite.svg#Facebook" />
                </svg>
            </a>
            <a class="team__social-link" href="#">
                <svg class="team__social-icon">
                    <use xlink:href="img/svg/sprite.svg#Twitter" />
                </svg>
            </a>
        </div>
    </li>
        `
    }
}

customElements.define('team-item', teamItem)