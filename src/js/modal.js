const modal = document.getElementById('modal')
const body = document.getElementById('body')

const crosses = document.getElementsByClassName('cross')

for(const cross of crosses) cross.onclick = () =>
  modal.style = "display: none"




const CreateModal = () => {
  const title = create('h2', {innerHTML: 'Example1', className:'title'})
  const description = create('p', {innerHTML: 'example', className:'description'})
  const hashTag = create('p', {innerHTML: '#JavaScript', className:'technologies'})
  const repository = create('a', {innerHTML: 'My repository'})
  const page = create('a', {innerHTML: 'Demo Page'})
  const links = create('div', {className: 'links'}, [repository, page])

  return {title, description, hashTag, links}
}
const data = CreateModal()

for(const hijo in data) {
  body.appendChild(hijo)
}
