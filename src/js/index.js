import { projects, createProjectDiv } from './projects.js'
import { handleModal } from './modal.js'
for(const project of projects) createProjectDiv(project, handleModal)
/*
const templateProject = ({endPoint, name, img='example.png'}) => `
<div class='project' style='background-image: url("/public/img/${img}");'>
  <a
    href="https://github.com/Soni295/${endPoint}"
    target="_blank"
    rel="noreferrer noopener"
  >${name}
  </a>
</div>
`



*/
