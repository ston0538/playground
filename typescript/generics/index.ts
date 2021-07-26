function identity<T>(arg: T): T {
  return arg
}

identity(10)

function identity2<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}
identity2(3)