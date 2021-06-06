/*
const carousel = document.getElementById('carousel')
const closeBtn = document.getElementById('close-btn')
const modal = document.getElementsByClassName('modal')[0]
const links = document.getElementsByClassName("modal__box__info__links")[0]
const projectName = document.getElementById('project')
const desc = document.getElementById('short-desc')
const technologies = document.getElementById('technologies')

closeBtn.onclick = () => modal.style.display = 'none'

window.addEventListener('keyup', ({key})=> {
  if(key == 'Escape') modal.style.display = 'none'
})

const handleModal = ({name, description='example', endPoint, images, webSite})=> {
  projectName.innerHTML = name
  desc.innerHTML = description
  modal.style.display = 'block'

  links.appendChild(createLink(endPoint))
  webSite && links.appendChild(createLink(endPoint, 'Page'))

  carousel.innerHTML = `<img src="./img/${images[0]}" alt="" srcset="">`
}
*/
