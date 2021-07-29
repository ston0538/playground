function pluck<T, K extends keyof T>(o: T, propertyNames: K[]): T[K][] {
  return propertyNames.map(n => o[n])
}

interface Car {
  manufacturer: string;
  model: string;
  year: number;
}

let taxi: Car = {
  manufacturer: "Toyota",
  model: "accord",
  year: 2020
}

let makeAndModel: string[] = pluck(taxi, ['manufacturer', 'model'])
console.log(makeAndModel)
