const closeBtn = document.getElementById('close-btn')
const modal = document.getElementsByClassName('modal')[0]
const projectName = document.getElementById('project')
const desc = document.getElementById('short-desc')

closeBtn.onclick = () => modal.style.display = 'none'

window.addEventListener('keyup', ({key})=> {
  if(key == 'Escape') modal.style.display = 'none'
})


export const handleModal = data => {
  const { name, description='example' } = data
  projectName.innerHTML = name
  desc.innerHTML = description
  modal.style.display = 'block'
}
