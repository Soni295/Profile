const folder = document.getElementById('folder')
import { projects } from './projects.js'

const templateProject = ({endPoint, name, img='example.png'}) => `
<div class='project'
  style='background-image: url("/public/img/${img}");'
>
  <a
    href="https://github.com/Soni295/${endPoint}"
    target="_blank"
    rel="noreferrer noopener"
  >${name}
  </a>
</div>
`

folder.innerHTML = projects.reduce(
  (acc, cur) => acc + templateProject(cur) , ''
)
