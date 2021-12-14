/* SIDEBAR ELEMENTS */
const burgerClose = document.querySelector('#burger_close')
const sideBar = document.querySelector('.side__nav')
const burgerMenu = document.querySelector('.burger-menu')
const languagePointer = document.querySelector('.side__langs-btn')
const languageWrapper = document.querySelector('.side__langs-wrapper')

/* SIDEBAR LOGIC */
/* SIDEBAR OPEN AND CLOSE */
burgerMenu.onclick = () => {
    sideBar.classList.add('open')
}
burgerClose.onclick = () => {
    sideBar.classList.remove('open')
}
/* LANGUAGE LIST OPEN AND CLOSE */
languagePointer.onclick = () => {
    languageWrapper.classList.toggle('open')
    languagePointer.classList.toggle('rotate')
}