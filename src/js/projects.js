class Project {
  constructor(title, endPoint) {
    this.title = title
    this.endPoint = endPoint
    this.images = ['example.jpg']
    this.webSite = null
    this.technologies = ['JavaScript']
  }

  addImages(images) {
    this.images = images
  }

  addTechnologies(arr){
    this.technologies = arr
  }

  addDesc(text){
    this.description = text
  }
}

const ClickArt = new Project("ClickArt", "ClickArt")
ClickArt.addDesc('It is a rest full api art gallery style page where you can post images and search by artist title and drawing.')
ClickArt.addImages([
  'ClickArt01.jpg',
  'ClickArt02.jpg',
  'ClickArt03.jpg'
])
ClickArt.webSite = 'https://soni295.github.io/ClickArt/'

const Easybank = new Project("Easybank landing page", "Easybank-landing-page")
Easybank.addDesc('It is a landing page for practice sass')
Easybank.addImages([
  'EasyBank01.jpg',
  'EasyBank02.jpg',
  'EasyBank03.jpg',
  'EasyBank04.jpg',
  'EasyBank05.jpg',
  'EasyBank06.jpg',
  'EasyBank07.jpg'
])

const SnakeGame = new Project("Snake Game", "Snake-Game")
SnakeGame.addDesc("It's the snake game works by listening to browser events")
SnakeGame.addImages([
  'SnakeGame01.jpg',
  'SnakeGame02.jpg'
])

SnakeGame.webSite = 'https://soni295.github.io/Snake-Game'

const PricingToggle = new Project("Princing Toggle", "Princing-Toggle")
PricingToggle.addDesc('Sort practice with react')
PricingToggle.addImages([
  'PricingToggle01.jpg',
  'PricingToggle02.jpg',
  'PricingToggle03.jpg'
])

const InstaClon = new Project("InstaClon", "InstaClon")
InstaClon.addDesc("it is an instagram clone web with backend")

const ReplacePxForRem = new Project("Replace px for rem", "ReplacePxForRem")
ReplacePxForRem.addDesc('It is a tool that you create to change all the values of a px repository for their equivalence in rem')

const ChatServer = new Project("Chat Server", "Chat-ts")
ChatServer.addDesc('It is a group chat room. testing typescript')

const DogTeam = new Project("Dog team", "dog-team")
DogTeam.addDesc('It is a page with can search breed of dog and save some in a storage')


//  {title: "Timer", endPoint: "TimerJs"},
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


const ctrlModal = CreateModal()

const createProjectDiv = project => {

  const propeties =  {
    className: 'project',
    innerHTML: project.title,
    style: `background-image: url("./img/${project.images[0]}");`,
    onclick: () => {
      ctrlModal(project)
    }
  }

  document
    .getElementById('folder')
    .appendChild(create('div', propeties))
}

for(const project of projects) createProjectDiv(project, /*handleModal*/)
