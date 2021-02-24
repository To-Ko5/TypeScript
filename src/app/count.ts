import { Countable } from './interface'
import { Score } from './score'

export class Count implements Countable {
  constructor(public element: HTMLDivElement) {
    element.addEventListener('click', this.clickEvent.bind(this))
  }

  clickEvent() {
    this.element.classList.toggle('count--active')
    const score = Score.getInstance()
    score.render()
  }
}
