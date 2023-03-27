
menubtn = document.querySelector('#menu-icon')
navbar = document.querySelector('.navbar')

menubtn.onclick = function() {
  if (!navbar.classList.contains('open')) {
    navbar.classList.add('open')
    menubtn.style.transform = 'rotate(180deg)'
    menubtn.classList.remove('uil-bars')
    menubtn.classList.add('uil-times')
  }
  else {
    navbar.classList.remove('open')
    menubtn.style.transform = 'rotate(0deg)'
    menubtn.classList.add('uil-bars')
    menubtn.classList.remove('uil-times')
}
}
