/* SIDEBAR ELEMENTS */
const burgerClose = document.querySelector('#burger_close')
const sideBar = document.querySelector('.side__nav')
const burgerMenu = document.querySelector('.burger-menu')
const languagePointer = document.querySelector('.side__langs-btn')
const languageWrapper = document.querySelector('.side__langs-wrapper')
const body = document.querySelector('.body')

const allLangs = document.querySelectorAll('.side__lang')

/* SIDEBAR LOGIC */
/* SIDEBAR OPEN AND CLOSE */
burgerMenu.onclick = () => {
    sideBar.classList.add('open')
    body.classList.add('scrolling')
}
burgerClose.onclick = () => {
    sideBar.classList.remove('open')
    body.classList.remove('scrolling')
}
/* LANGUAGE LIST OPEN AND CLOSE */
languagePointer.onclick = () => {
    languageWrapper.classList.toggle('open')
    languagePointer.classList.toggle('rotate')
}

allLangs.forEach(item => {
    item.onclick = () => {
        sideBar.classList.remove('open')
    }
})




/* SCROLL REVEAL JS */
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.hero__left, .hero__right, .app__responsive,
            .about__left, .about__right,
            .pills__right-one, .pills__left-one,
            .pills__right-two, .pills__left-two,
            .pills__left-three, .pills__right-three,
            .download__inner, .help__inner,
            .pair, .devider, .footer__bottom, side__about,
            .side__langs, .side__help`
            , {
    interval: 200
})