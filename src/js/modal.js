const closeBtn = document.getElementById('close-btn')
const modal = document.getElementsByClassName('modal')[0]
const projectName = document.getElementById('project')
const desc = document.getElementById('short-desc')
const repo = document.getElementById('repo-link')
const technologies = document.getElementById('technologies')

closeBtn.onclick = () => modal.style.display = 'none'

window.addEventListener('keyup', ({key})=> {
  if(key == 'Escape') modal.style.display = 'none'
})


export const handleModal = ({name, description='example', endPoint})=> {
  projectName.innerHTML = name
  desc.innerHTML = description
  modal.style.display = 'block'

  repo.href = `https://github.com/Soni295/${endPoint}`
  repo.title = `my github repository ${name}`

}
