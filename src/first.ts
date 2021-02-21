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
let anyDemo: any = 'ddd'

// union
const unionDemo: number | string = 30
const unionDemo2: (number | string)[] = ['demo', 2]

// literal
const literalDemo: 'demo' = 'demo'
const literalDemo2: true = true
let literalDemo3: 'small' | 'medium' | 'big' = 'big'

// type
type typeSize = 'small' | 'medium' | 'big'
const typeDemo: typeSize = 'small'

// function
function add(num1: number, num2: number): number {
  return num1 + num2
}

function add2(num1: number, num2: number): void {
  console.log(num1 + num2)
}

const add3: (num1: number, num2: number) => number = add

// arrow
const add4 = (number: number): number => number * 10
const add5: (number: number) => number = (number) => number * 10

// callback
function callback1(num1: number, cb: (num: number) => number): void {
  const numberAdd = cb(num1 * 2)
  console.log(numberAdd)
}
callback1(21, (cbNum) => {
  return cbNum
})

// unknown
let unknownDemo: unknown = 'demo'
let text: string
if (typeof unknownDemo === 'string') {
  text = unknownDemo
}

// never
// 何も返さない
function error(message: string): never {
  throw new Error(message)
}
