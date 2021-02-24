interface Scoreable {
  readonly totalScore: number
  render: () => void
}

interface Countable {
  element: HTMLDivElement
  clickEvent: () => void
}

interface Countsable {
  elements: NodeListOf<HTMLDivElement>
  activeElements: HTMLDivElement[]
  activeElementsScore: number[]
}

class Score implements Scoreable {
  private static instance: Score
  get totalScore() {
    const count = Counts.getInstance()
    return count.activeElementsScore.reduce((total, score) => total + score + 0)
  }

  render() {
    document.querySelector('.score__number')!.textContent = String(
      this.totalScore
    )
  }

  private constructor() {}

  static getInstance() {
    if (!Score.instance) {
      Score.instance = new Score()
    }
    return Score.instance
  }
}

class Count implements Countable {
  constructor(public element: HTMLDivElement) {
    element.addEventListener('click', this.clickEvent.bind(this))
  }

  clickEvent() {
    this.element.classList.toggle('count--active')
    const score = Score.getInstance()
    score.render()
  }
}

class Counts implements Countsable {
  private static instance: Counts
  elements = document.querySelectorAll<HTMLDivElement>('.count')
  private _activeElements: HTMLDivElement[] = []
  private _activeElementsScore: number[] = []

  get activeElements() {
    this._activeElements = []
    this.elements.forEach((e) => {
      if (e.classList.contains('count--active')) {
        this._activeElements.push(e)
      }
    })
    return this._activeElements
  }

  get activeElementsScore() {
    this._activeElementsScore = []
    this.activeElements.forEach((e) => {
      const score = e.querySelector('.count__score')
      if (score) {
        this._activeElementsScore.push(Number(score.textContent))
      }
    })
    return this._activeElementsScore
  }

  private constructor() {
    this.elements.forEach((e) => {
      new Count(e)
    })
  }
  static getInstance() {
    if (!Counts.instance) {
      Counts.instance = new Counts()
    }
    return Counts.instance
  }
}

const counts = Counts.getInstance()
