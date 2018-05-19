document.addEventListener('scroll', () => {
  var scroll = document.body.scrollTop
  document.getElementsByClassName('header__image')[0].style.top = scroll * 0.4 - 30
})
