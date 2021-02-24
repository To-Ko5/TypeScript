export interface Scoreable {
  readonly totalScore: number
  render: () => void
}

export interface Countable {
  element: HTMLDivElement
  clickEvent: () => void
}

export interface Countsable {
  elements: NodeListOf<HTMLDivElement>
  activeElements: HTMLDivElement[]
  activeElementsScore: number[]
}
