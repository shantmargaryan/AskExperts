const feedbackSwiper = new Swiper('.feedback__swiper', {
    loop: true,
    spaceBetween: 30,

    // Navigation arrows
    modules: [Navigation],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const businessSwiper = new Swiper('.business__swiper', {
    loop: true,
    spaceBetween: 30,

    // Navigation arrows
    modules: [Navigation],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
