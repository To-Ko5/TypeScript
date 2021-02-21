class Person {
  public name: string // 初期値はpublic
  // private age: number private class内のみで参照
  protected age: number // protected 継承先でも使用できる
  public readonly comment: string // readonly 書き換えせず、参照のみ

  constructor(name: string, age: number, comment: string) {
    this.name = name
    this.age = age
    this.comment = comment
  }

  incrementAge() {
    this.age += 1
  }

  greeting() {
    console.log(` ${this.name} ${this.age} ${this.comment} `)
  }
}

class Person2 extends Person {
  private type: string
  get getType() {
    if (!this.type) {
      throw new Error('Error no type')
    }
    return this.type
  }
  constructor(name: string, age: number, comment: string, type: string) {
    super(name, age, comment) // 継承先で初期化する場合は、superは必須
    this.type = type
  }

  greeting() {
    console.log(` ${this.name} ${this.age} ${this.comment} ${this.type} `)
  }
}

const demo = new Person2('tom', 30, 'hello', 'A')
console.log(demo.getType)
