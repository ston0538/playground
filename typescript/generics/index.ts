function identity<T>(arg: T): T {
  return arg
}

identity(10)

function identity2<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}
identity2(3)


let myObj = { a: 1, b: 2, c: 3 }

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

console.log(getProperty(myObj, "a"))