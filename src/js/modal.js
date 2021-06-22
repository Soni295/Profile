const modal = document.getElementById('modal')
const body = document.getElementById('body')
const img = document.getElementById('img')
const crosses = document.getElementsByClassName('cross')

const closeModal = () => modal.classList.add('fade-out')


window.addEventListener('keyup', ({key})=> {
  key == 'Escape' && closeModal()
})


for(const cross of crosses) cross.onclick = () => closeModal()

const CreateModal = () => {

  const _title = create('h2', {innerHTML: 'Example1', className:'title'})
  const _description = create('p', {innerHTML: 'example', className:'description'})
  const a = { target:"_blank", rel:"noreferrer noopener" }

  const hashTag = create('p', {innerHTML: '#JavaScript', className:'technologies'})
  const repository = create('a', {innerHTML: 'My repository',  href: '#', ...a})
  const page = create('a', {innerHTML: 'Demo Page',id: 'Demo Page', href: '#', ...a})
  const links = create('div', {className: 'links'}, [repository, page])

  const github = 'https://github.com/Soni295/'

  const mmm = [_title, _description, hashTag, links]
  mmm.forEach(child => body.appendChild(child))

  const handleModal = () => {
    modal.classList.remove('fade-out')
    modal.classList.add('fade-in')
    //modal.style = "display: grid;"
  }

  return ({title, description, technologies, endPoint, webSite, images}) => {
    _title.innerHTML = title
    _description.innerHTML = description
    hashTag.innerHTML = technologies.reduce((acc, cur) => acc +`#${cur} `  , '')
    page.style = webSite === null ? 'display: none;' : 'display: block;'
    page.href = webSite
    img.style.backgroundImage = `url(./img/${images[0]})`
    repository.href = github + endPoint
    handleModal()
  }
}
