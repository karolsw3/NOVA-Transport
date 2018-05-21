document.addEventListener('scroll', () => {
  var scroll = document.body.scrollTop
  document.getElementsByClassName('header__image')[0].style.top = scroll * 0.4 - 30

  Array.from(document.getElementsByClassName('revealOnScroll')).forEach((element, index) => {
    let rect = element.getBoundingClientRect()
    if (scroll > (rect.top + element.style.height)) {
      if (!element.classList.contains('revealAnimation')) {
        element.classList.add('revealAnimation')
      }
    }
  })
})
