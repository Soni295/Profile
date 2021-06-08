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
  addDesc(text){
    this.description = text
  }
}
