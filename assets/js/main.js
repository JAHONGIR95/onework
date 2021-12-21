/* SIDEBAR ELEMENTS */
const burgerClose = document.querySelector("#burger_close")
const sideBar = document.querySelector(".side__nav")
const burgerMenu = document.querySelector(".burger-menu")
const languagePointer = document.querySelector(".side__langs-btn")
const languageWrapper = document.querySelector(".side__langs-wrapper")
const body = document.querySelector(".body")

const loader = document.querySelector(".center")

const allLangs = document.querySelectorAll(".side__lang")
const allClick = document.querySelectorAll(".res-click")

/* SIDEBAR LOGIC */
/* SIDEBAR OPEN AND CLOSE */
burgerMenu.onclick = () => {
  sideBar.classList.add("open")
  body.classList.add("scrolling")
}
burgerClose.onclick = () => {
  sideBar.classList.remove("open")
  body.classList.remove("scrolling")
}
/* LANGUAGE LIST OPEN AND CLOSE */
languagePointer.onclick = () => {
  languageWrapper.classList.toggle("open")
  languagePointer.classList.toggle("rotate")
}

allLangs.forEach((item) => {
  item.onclick = () => {
    sideBar.classList.remove("open")
    body.classList.remove("scrolling")
    languageWrapper.classList.remove("open")
  }
})
allClick.forEach((item) => {
  item.onclick = () => {
    sideBar.classList.remove("open")
    body.classList.remove("scrolling")
  }
})

window.addEventListener("load", function () {
  loader.style.display = "none"
})

// ==== scroll changing header ====
function scrollHeader() {
  const header = document.querySelector(".fixed__header")

  if (this.scrollY >= 100) header.classList.add("scroll-header")
  else header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)

// fixed navbar
let lastScrollTop = 0
let screenSized = window.innerWidth;
const navbar = document.querySelector(".fixed__header")
window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop
  console.log('top => ', scrollTop, '  last => ', lastScrollTop);
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-110px"
  } else {
      if(screenSized <= 576){
        navbar.style.top = "-10px"  
      } else if (scrollTop == 0){
        navbar.style.top = "0"
      } else {
        navbar.style.top = "-35px"
      }
  } 
  lastScrollTop = scrollTop
})


/* SCROLL REVEAL JS */
const sr = ScrollReveal({
  origin: 'bottom',
  distance: "30px",
  duration: 1000,
  reset: true,
})

sr.reveal(
  ` .hero__right, .hero__text, .app__responsive,
            .about__left, .about__right,
            .pills__inner,
            .download__inner, .help__inner,
            .pair, .devider, .footer__bottom`,
  {
    interval: 200,
  }
)

