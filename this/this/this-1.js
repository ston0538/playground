function identify() {
  return this.name.toUpperCase();
}

function speak() {
  const greeting = "Hello, I'm" + identify.call(this);
  console.log(greeting);
}

const me = {
  name: "Kyle",
};

const you = {
  name: "Reader",
};

identify.call(me);
identify.call(you);
speak.call(me);
speak.call(you);

// this로 자기 자신을 참조 할 수 없다.
function foo(num) {
  console.log("foo:" + num);
  this.count++;
}
foo.count = 0;

for (let index = 0; index < 10; index++) {
  if (index > 5) {
    foo(index);
  }
}
console.log(foo.count);

// 함수 자신을 참조할때는 함수 이름으로 참조한다.
function mySelf() {
  console.log(mySelf);
}

mySelf();
