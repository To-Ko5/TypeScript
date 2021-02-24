class Score {}

class Count {
  constructor(public element: HTMLDivElement) {
    element.addEventListener('click', this.clickEvent.bind(this))
  }
  clickEvent() {
    this.element.classList.toggle('count--active')
  }
}

class Counts {
  elements = document.querySelectorAll<HTMLDivElement>('.count')
  constructor() {
    this.elements.forEach((e) => {
      new Count(e)
    })
  }
}

const counts = new Counts()
