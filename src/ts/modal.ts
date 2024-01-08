import { getElementById } from "./utils"
import { TProjectInfo } from "./staticInfo"

class HandlerModal {

  private crosses = document.querySelectorAll('span.cross')

  private modal = getElementById('modal')
  private title = getElementById(`modal__body__title`)
  private img = getElementById('img')
  private desc = getElementById(`modal__body__description`)
  private tech = getElementById(`modal__body__technologies`)
  private repositoryPage = getElementById(`modal__body__repository-page`)
  private demoPage = getElementById(`modal__body__demo-page`)

  constructor() {
    window.document.addEventListener('keyup', ({ key }) => {
      key == 'Escape' && this.close()
    })

    for (const cross of this.crosses) {
      cross.onclick = () => this.close()
    }
  }

  update(project: TProjectInfo) {
    this.title.innerText = project.name
    this.desc.innerText = project.description
    this.tech.innerText = project.technologies.map(tech => "#" + tech).join(" ")
    this.repositoryPage.innerText = project.githubRepoUrl
    if (project.githubPageUrl) {
      this.demoPage.innerText = project.githubPageUrl
    }
    this.open()
  }

  private open() {
    this.modal.classList.remove('fade-out')
    this.modal.classList.add('fade-in')
  }

  private close() {
    this.modal.classList.add('fade-out')
  }
}

export const handlerModal = new HandlerModal()