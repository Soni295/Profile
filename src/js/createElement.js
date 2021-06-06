const create = (type, status={}, children=[]) => {
  const element = document.createElement(type)
  for(const propety in status) element[propety] = status[propety]
  for(const child of children) element.appendChild(child)
  return element
}



const createP = (text, className='') => {
  const p = document.createElement('p')
  if(className !== '') p.className = className
  p.innerHTML = text
  return p
}
const createDiv = (className='') => {
  const div = document.createElement('div')
  if(className !== '') div.className = className
  return div
}
