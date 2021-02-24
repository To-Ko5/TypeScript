import { Countsable } from './interface.j'
import { Count } from './count'

export class Counts implements Countsable {
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
