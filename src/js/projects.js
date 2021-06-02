const json = [{"name":"ClickArt","endPoint":"ClickArt","images":["ClickArt01.png","ClickArt02.png","ClickArt03.png"],"webSite":"hola","description":"It is a rest full api art gallery style page where you can post images and search by artist name and drawing."},{"name":"Snake Game","endPoint":"Snake-Game","images":["SnakeGame01.png","SnakeGame02.png"],"webSite":"hola","description":"It's the snake game works by listening to browser events"},{"name":"Princing Toggle","endPoint":"Princing-Toggle","images":["PricingToggle01.png","PricingToggle02.png","PricingToggle03.png"],"webSite":"hola","description":"Sort practice with react"},{"name":"Easybank landing page","endPoint":"Easybank-landing-page","images":["EasyBank01.png","EasyBank02.png","EasyBank03.png","EasyBank04.png","EasyBank05.png","EasyBank06.png","EasyBank07.png"],"webSite":"hola","description":"It is a landing page for practice sass"}]


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
export const projects = [
  ClickArt,
  SnakeGame,
//  InstaClon,
//  ReplacePxForRem,
//  ChatServer,
//  DogTeam,
  PricingToggle,
  Easybank,
]

export const createProjectDiv = (project, handleModal) => {
  const {name, images} = project
  let div = document.createElement('div')
  div.className = 'project'
  div.style = `background-image: url("/public/img/${images[0]}");`
  div.innerHTML = name
  div.onclick = () => handleModal(project)
  document.getElementById('folder').appendChild(div)
}
