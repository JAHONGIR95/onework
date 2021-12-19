/* SIDEBAR ELEMENTS */
const burgerClose = document.querySelector('#burger_close')
const sideBar = document.querySelector('.side__nav')
const burgerMenu = document.querySelector('.burger-menu')
const languagePointer = document.querySelector('.side__langs-btn')
const languageWrapper = document.querySelector('.side__langs-wrapper')
const body = document.querySelector('.body')

const loader =  document.querySelector('.center')

const allLangs = document.querySelectorAll('.side__lang')
const allClick = document.querySelectorAll('.res-click')

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
        body.classList.remove('scrolling')
    }
})
allClick.forEach(item => {
    item.onclick = () => {
        sideBar.classList.remove('open')
        body.classList.remove('scrolling')
    }
})

window.addEventListener("load", function() {
    loader.style.display = 'none'
})


// ==== scroll changing header ====
function scrollHeader(){
    const header = document.querySelector('.fixed__header');

    if(this.scrollY >= 100)
        header.classList.add('scroll-header');
    else
        header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)


/* SCROLL REVEAL JS */
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});
let screen;
window.addEventListener('resize', function() {
    screen = window.innerWidth;
    screenSized()
})

screenSized()
function screenSized () {

    if(screen <= 576){
        sr.reveal(` .hero__right, 
                    .hero__text, .app__responsive,
                    .about__left, .about__right,
                    .pills__right-one, .pills__left-one,
                    .pills__right-two, .pills__left-two,
                    .pills__left-three, .pills__right-three,
                    .download__inner, .help__inner,
                    .pair, .devider, .footer__bottom`
                    , {
            interval: 200
        })
    } else {
        sr.reveal(` .hero__right, .hero__left,
                    .about__left, .about__right,
                    .pills__right-one, .pills__left-one,
                    .pills__right-two, .pills__left-two,
                    .pills__left-three, .pills__right-three,
                    .download__inner, .help__inner,
                    .pair, .devider, .footer__bottom`
                    , {
            interval: 200
        })
    }
}

