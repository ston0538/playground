interface Person {
  firstName: string
  lastName: string
  fullName: string
}

const hk: Person = {
  firstName: "hyunki",
  lastName: "kim",
  fullName: this.firstName + this.lastName
}