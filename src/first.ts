const hasValue: boolean = true

// object
const person: { name: string; age: number } = {
  name: 'demo',
  age: 20
}

// array
const fruits: string[] = ['apple', 'banana', 'strawberry']
const fruits2: (string | number)[] = ['apple', 'banana', 'strawberry']

// tuple
const book: [string, number, boolean] = ['story', 2000, true]

// enum
enum Size {
  short = 1,
  medium = 2,
  big = 3
}
const drink = {
  hot: true,
  size: Size.big
}

// any
let demo: any = 'ddd'
