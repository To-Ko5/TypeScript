import { Scoreable } from './interface'
import { Counts } from './counts'

export class Score implements Scoreable {
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
