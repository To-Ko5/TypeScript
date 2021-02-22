interface person {
  name: string
  age: number
  readonly comments: string
  // callMessage: (message: string) => void
  callMessage(message: string): void
}

const demo1: person = {
  name: 'tom',
  age: 23,
  comments: 'hello',
  callMessage(message: string) {
    console.log(message)
  }
}

class Demo2 implements person {
  // implements classにinterfaceを適用
  constructor(
    public name: string,
    public age: number,
    readonly comments: string
  ) {}
  callMessage() {
    console.log(this.name)
  }
}
