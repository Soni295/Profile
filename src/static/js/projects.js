class Project {
  constructor(name, endPoint) {
    this.name = name
    this.endPoint = endPoint
    this.images = ['example.png']
  }
  addImages(images) {
    this.images = images
  }
  addDesc(text){
    this.description = text
  }
}


const ClickArt =  new Project("ClickArt", "ClickArt")
ClickArt.addDesc('It is a rest full api art gallery style page where you can post images and search by artist name and drawing.')

const SnakeGame = new Project("Snake Game", "Snake-Game")
SnakeGame.addDesc("It's the snake game works by listening to browser events")

const InstaClon = new Project("InstaClon", "InstaClon")
InstaClon.addDesc("it is an instagram clone web with backend")

const ReplacePxForRem = new Project("Replace px for rem", "ReplacePxForRem")
ReplacePxForRem.addDesc('It is a tool that you create to change all the values of a px repository for their equivalence in rem')

const ChatServer = new Project("Chat Server", "Chat-ts")
ChatServer.addDesc('It is a group chat room. testing typescript')

const DogTeam = new Project("Dog team", "dog-team")
DogTeam.addDesc('It is a page with can search breed of dog and save some in a storage')

const PrincingToggle = new Project("Princing Toggle", "Princing-Toggle")
PrincingToggle.addDesc('Sort practice with react')

const Easybank = new Project("Easybank landing page", "Easybank-landing-page")
Easybank.addDesc('It is a landing page for practice sass')


//  {name: "Timer", endPoint: "TimerJs"},
export const projects = [
  ClickArt,
  SnakeGame,
  InstaClon,
  ReplacePxForRem,
  ChatServer,
  DogTeam,
  PrincingToggle,
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
