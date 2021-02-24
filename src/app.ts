class Score {}

class Count {
  constructor(public element: HTMLDivElement) {
    
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
