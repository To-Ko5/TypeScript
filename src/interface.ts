interface person {
  name: string
  age: number
  // callMessage: (message: string) => void
  callMessage(message: string): void
}

const demo1: person = {
  name: 'tom',
  age: 23,
  callMessage(message: string) {
    console.log(message)
  }
}
