class Person {
  public name: string // 初期値はpublic
  private age: number // private class内のみで参照

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  incrementAge() {
    this.age += 1
  }

  greeting() {
    console.log(`Hello ${this.name}  ${this.age} `)
  }
}

const demo: Person = new Person('tom', 50)
console.log(demo.greeting())
