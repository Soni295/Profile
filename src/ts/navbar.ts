const hamburger = document.getElementById('hamburger')
const movilBar = document.getElementById('navbar-phone')

hamburger.onclick = () => {
  console.log(movilBar.classList.contains('fade-out'))
  switch(true){
    case movilBar.classList.contains('fade-out'):
      movilBar.classList.remove('fade-out')
      movilBar.classList.add('fade-in')
      break
    case movilBar.classList.contains('fade-in'):
      movilBar.classList.remove('fade-in')
      movilBar.classList.add('fade-out')
      break
    default:
      movilBar.classList.add('fade-in')
  }
}
