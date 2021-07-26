let cards = [
  { x: 1, y: 1 },
  { x: 2, y: 1 },
  { x: 3, y: 1 },
  { x: 1, y: 1 },
  { x: 1, y: 1 },
];

let newCard = { ...cards[1], y: 10 };
console.log(newCard);

// 객체
const person = {
  name: 'John',
  age: 28,
};

const newPerson = Object.assign({}, person, {
  age: 30,
});
console.log(person === newPerson);
console.log(person);
console.log(newPerson);

const newPerson2 = { ...person, age: 150 };
console.log(person === newPerson2);
console.log(person);
console.log(newPerson2);

// 배열
const characters = ['Obi-wan', 'Vader'];
const newCharacters = characters;

// newCharacters.push('Luke');

console.log(characters === newCharacters);

const newCharacters2 = [...characters, 'Luke'];
console.log(characters === newCharacters2);
console.log(newCharacters2);

const sortedCharacters = characters.slice().sort();
console.log(sortedCharacters);
