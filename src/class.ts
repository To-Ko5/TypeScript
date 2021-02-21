class Person {
  public name: string // 初期値はpublic
  private age: number // private class内のみで参照
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

const demo: Person = new Person('tom', 50, 'hello')
console.log(demo.greeting())
console.log(demo.comment)
