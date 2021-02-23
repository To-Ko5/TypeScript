const Logging = (target: Function) => {
  console.log('logging')
  console.log(target)
}

@Logging
class DecoratorDemo {
  name = 'tome'
  constructor() {
    console.log(name)
  }
}
