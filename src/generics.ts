const genericsDemo = <T, U>(value: T, num: U): T => {
  return value
}
// generics 型を引数とすることができる
console.log(genericsDemo<string, number>('hello', 23))

type K = keyof { name: string; age: number }

class DemoClass<T extends string | number | boolean> {
  private data: T[] = []

  add(item: T) {
    this.data.push(item)
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1)
  }

  get() {
    return this.data
  }
}

const useDemoClass = new DemoClass<string>()
useDemoClass.add('tom')
useDemoClass.add('ken')
useDemoClass.add('mike')
useDemoClass.remove('ken')
console.log(useDemoClass.get())

// Utility
interface TextType {
  title: string
  text: string
}

type Text = Partial<TextType>
type Tex2 = Readonly<TextType>



const fetchData: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve('hello')
  }, 2000)
})

fetchData.then((data) => {
  data.toLowerCase()
})

const name: Array<string> = ['tom', 'ken', 'mike']
