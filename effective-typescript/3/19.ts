const person: {
  name: string;
  born: {
    where: string;
    when: string
  }
  died: {
    where: string;
    when: string
  }
} = {
  name: "HK",
  born: {
    where: "Seoul",
    when: "c.1798"
  },
  died: {
    where: "yet",
    when: "yet"
  }
}

const person2 = {
  name: "HK",
  born: {
    where: "Seoul",
    when: "c.1798"
  },
  died: {
    where: "yet",
    when: "yet"
  }
}

function square(nums: number[]) {
  return nums.map(x => x * x)
}
const squares = square([1, 2, 3, 4])

const axis1: string = "x"
const axis2 = "y"

interface Product {
  id: number | string
  name: string;
  price: number
}

function logProduct(product: Product) {
  const id: number = product.id
  const name: string = product.name
  const price: number = product.price
  console.log(id, name, price)
}
function logProduct2(product: Product) {
  const { id, name, price } = product
  console.log(id, name, price)
}
const product = {
  id: 1,
  name: "A.P.C",
  price: 1200,
}
const product2 = {
  id: "hello",
  name: "A.P.C",
  price: 1200,
}
logProduct(product)
logProduct2(product2)

function parseNumber(str: string, base = 10) {
  ///
}



const elmo: Product = {
  id: '123412 12121',
  name: "HK",
  price: 28.99
}

interface Vector2D { x: number, y: number }
function add(a: Vector2D, b: Vector2D) {
  return { x: a.x + b.x, y: a.y + b.y }
}