const typeSpan = create('span', {innerHTML: 'hola'})

class TypeWriter {
  constructor({element, msg, timing}){
    this.element = document.getElementById(element)
    this.typer = create('span', {innerHTML: 'hola'})
    this.element.appendChild(this.typer)
    this.wordIndex = 0
    this.msg = msg
    this.txt = ''
    this.wait = parseInt(timing, 10)
    this.isDeleting = false
    this.typing()
  }
  typing(){
    const cur = this.wordIndex % this.msg.length
    const curText = this.msg[cur]
    const addOrRemove = this.isDeleting ? -1 : 1
    this.txt = curText.substring(0, this.txt.length + addOrRemove)
    this.typer.innerHTML = this.txt
    let typeSpeed = 100

    if(this.isDeleting) typeSpeed /=2

    if(!this.isDeleting && curText === this.txt) {
      typeSpeed = this.wait
      this.isDeleting = true
    } else if (this.isDeleting && this.txt === ''){
      this.isDeleting = false
      this.wordIndex++
      typeSpeed = 700
    }

    setTimeout(()=> this.typing() ,typeSpeed)
  }

}


const TypeSet = {
  element: 'text-write',
  timing: 2000,
  msg: ["hello, I'm Sion", "estudie en tal colegio"],
}

new TypeWriter(TypeSet)
