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


