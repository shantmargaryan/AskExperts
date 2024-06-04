export class specialHero extends HTMLElement {
    constructor() {
        super();
        const subtitle = this.getAttribute('subtitle');
        const title = this.getAttribute('title');
        this.innerHTML = `

<style>
.hero__content {
    margin-left: 0;
    padding: 40px 35px;
    border-radius: 29px;
    backdrop-filter: blur(11px);
    background-color: rgba(255, 255, 255, .85);
    transition: margin-left .4s
}

.hero__subtitle {
    margin-bottom: 20px
}

.hero__title {
    max-width: 550px
}

@media (min-width: 992px) {
        .hero__content {
        margin-left: 200px
        }
    }
</style>

        <div class="hero__content">
                    <span class="hero__subtitle first-subtitle">
                        ${subtitle}
                    </span>
                    <h1 class="hero__title special-title">
                    ${title}
                    </h1>
                </div>
        `
    }
}

customElements.define('special-hero', specialHero)