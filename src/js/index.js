class Project {
  constructor(name, endPoint) {
    this.name = name
    this.endPoint = endPoint
    this.images = ['example.png']
    this.webSite = 'hola'
  }
  addImages(images) {
    this.images = images
  }
  addDesc(text){
    this.description = text
  }
  webSite(link){
    this.webSite=link
  }
}

const ClickArt =  new Project("ClickArt", "ClickArt")
ClickArt.addDesc('It is a rest full api art gallery style page where you can post images and search by artist name and drawing.')
ClickArt.addImages([
  'ClickArt01.png',
  'ClickArt02.png',
  'ClickArt03.png'
])

const Easybank = new Project("Easybank landing page", "Easybank-landing-page")
Easybank.addDesc('It is a landing page for practice sass')
Easybank.addImages([
  'EasyBank01.png',
  'EasyBank02.png',
  'EasyBank03.png',
  'EasyBank04.png',
  'EasyBank05.png',
  'EasyBank06.png',
  'EasyBank07.png'
])

const SnakeGame = new Project("Snake Game", "Snake-Game")
SnakeGame.addDesc("It's the snake game works by listening to browser events")
SnakeGame.addImages([
  'SnakeGame01.png',
  'SnakeGame02.png'
])

const PricingToggle = new Project("Princing Toggle", "Princing-Toggle")
PricingToggle.addDesc('Sort practice with react')
PricingToggle.addImages([
  'PricingToggle01.png',
  'PricingToggle02.png',
  'PricingToggle03.png'
])




const InstaClon = new Project("InstaClon", "InstaClon")
InstaClon.addDesc("it is an instagram clone web with backend")

const ReplacePxForRem = new Project("Replace px for rem", "ReplacePxForRem")
ReplacePxForRem.addDesc('It is a tool that you create to change all the values of a px repository for their equivalence in rem')

const ChatServer = new Project("Chat Server", "Chat-ts")
ChatServer.addDesc('It is a group chat room. testing typescript')

const DogTeam = new Project("Dog team", "dog-team")
DogTeam.addDesc('It is a page with can search breed of dog and save some in a storage')


//  {name: "Timer", endPoint: "TimerJs"},
const projects = [
  ClickArt,
  SnakeGame,
//  InstaClon,
//  ReplacePxForRem,
//  ChatServer,
//  DogTeam,
  PricingToggle,
  Easybank,
]

const createProjectDiv = (project, handleModal) => {
  const {name, images} = project
  let div = document.createElement('div')
  div.className = 'project'
  div.style = `background-image: url("./img/${images[0]}");`
  div.innerHTML = name
  div.onclick = () => handleModal(project)
  document.getElementById('folder').appendChild(div)
}


const carousel = document.getElementById('carousel')
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


const handleModal = ({name, description='example', endPoint, images})=> {
  projectName.innerHTML = name
  desc.innerHTML = description
  modal.style.display = 'block'

  repo.href = `https://github.com/Soni295/${endPoint}`
  repo.title = `my github repository ${name}`
  carousel.innerHTML = `<img src="./img/${images[0]}" alt="" srcset="">`
}






















for(const project of projects) createProjectDiv(project, handleModal)
/*
const templateProject = ({endPoint, name, img='example.png'}) => `
<div class='project' style='background-image: url("/img/${img}");'>
  <a
    href="https://github.com/Soni295/${endPoint}"
    target="_blank"
    rel="noreferrer noopener"
  >${name}
  </a>
</div>
`



*/
