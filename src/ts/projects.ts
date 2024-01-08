import { TProjectInfo, exampleProject } from "./staticInfo"

type TUpdateModal = (p: TProjectInfo) => void

export function createModalProject(project: TProjectInfo, updateModal: TUpdateModal) {
  const folder = document.getElementById('folder') as HTMLDivElement

  const projectElement = Object.assign(document.createElement('div'), {
    className: 'project',
    innerHTML: project.name,
    onclick: () => updateModal(project)
  })
  projectElement.style.setProperty('background-image', `./img/${project.images[0]}`)

  folder.appendChild(projectElement)
}
/*
class ModalTitle {
  private title: HTMLHeadingElement = document.createElement('h2')

  constructor(text: string, className: string) {
    this.title.className = className
    this.updateText(text)
  }

  updateText(text: string) {
    this.title.innerText = text
  }
}
function makeElement(type: keyof HTMLElementTagNameMap) {
  return document.createElement(type)
}

class SimpleHTMLHandler {
  private element: HTMLElement

  constructor(element: HTMLElement, text: string, className: string) {
    this.element = element
    this.element.className = className
    this.updateText(text)
  }

  updateText(text: string) {
    this.element.innerText = text
  }
}



export function createModal(project: TProjectInfo = exampleProject) {
  const title = new SimpleHTMLHandler(makeElement('h2'), project.name, 'description')
  //const title = new ModalTitle(project.name)


  const repository = createLink(project.githubRepoUrl)

  let page = document.createDocumentFragment()

  if (project.githubPageUrl) {
    const link = createLink(project.githubPageUrl)
    page.appendChild(link)
  }


}

function createLink(url: string) {
  const link = Object.assign(document.createElement('a'), {
    target: "_blank", rel: "noreferrer noopener",
    href: url
  })
  return link
}
/*
*/

/*
/*
const ctrlModal = CreateModal()
const createProjectDiv = project => {
  const propeties =  {
    className: 'project',
    innerHTML: project.title,
    style: `background-image: url("./img/${project.images[0]}");`,
    onclick: () => ctrlModal(project)
  }

  document
    .getElementById('folder')
    .appendChild(create('div', propeties))
}
for(const project of projects) createProjectDiv(project)
*/