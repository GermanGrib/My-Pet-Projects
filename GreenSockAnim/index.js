const burgerBtn = document.querySelector('.burger')
const burgerBtnClose = document.querySelector('.close')
const burgerMenu = document.querySelector('.menu')

gsap.fromTo('.hero__left', { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
gsap.delayedCall(1, downloadMainDesc)
function downloadMainDesc() {
  gsap.to('.hero__descr', { opacity: 1, duration: 1 })
}
gsap.delayedCall(1.2, function () {
  gsap.to('.imgone', { opacity: 1, duration: 1 })
})
gsap.delayedCall(1.4, function () {
  gsap.to('.imgtwo', { opacity: 1, duration: 1 })
})
gsap.delayedCall(1.6, function () {
  gsap.to('.imgthree', { opacity: 1, duration: 1 })
})
gsap.delayedCall(1.8, function () {
  gsap.to('.photos__author', { opacity: 1, duration: 1 })
})


let tl = gsap.timeline({ paused: true })

tl.to('.menu__top', { y: 0, opacity: 1, duration: .6 })
tl.to('.menu', { backgroundColor: 'rgba(55, 55, 55, 1)', duration: .3 });
tl.fromTo('.menu__nav', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: .3 })
tl.fromTo('.menu__right, .social', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: .3 })


burgerBtn.addEventListener('click', openBurgerMenu)
function openBurgerMenu() {
  burgerMenu.classList.add('menu--open')
  tl.play()
}

burgerBtnClose.addEventListener('click', closeBurgerMenu)
function closeBurgerMenu() {
  tl.reverse()
  // burgerMenu.classList.remove('menu--open')
  // deletes immediately classlist and reverse work uncorectly, I don't know how ti fix it
}
