class Person {
  name: string
  constructor(name: string) {
    this.name = name
  }

  greeting() {
    console.log(`Hello ${this.name}`)
  }
}

const demo: Person = new Person('tom')
console.log(demo.greeting())
