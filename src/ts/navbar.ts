class NavBarHandler {
  private hamburger = document.getElementById('hamburger') as HTMLDivElement
  private movilBar = document.getElementById('navbar-phone') as HTMLDivElement

  constructor() {
    this.movilBar.classList.add('fade-out')

    this.hamburger.onclick = () => {
      this.movilBar.classList.toggle('fade-out')
      this.movilBar.classList.toggle('fade-in')
    }
  }
}

export const navBarHandler = new NavBarHandler()