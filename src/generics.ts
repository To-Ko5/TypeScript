const genericsDemo = <T, U>(value: T, num: U): T => {
  return value
}
// generics 型を引数とすることができる
console.log(genericsDemo<string, number>('hello', 23))

type K = keyof {name:string, age:number}