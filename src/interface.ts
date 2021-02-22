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

class Demo2 implements person {
  // implements classにinterfaceを適用
  constructor(public name: string, public age: number) {}
  callMessage() {
    console.log(this.name)
  }
}
