/**
 *
 * 잘못 이해하고 있는 this
 * 자기 자신
 */

// this로 자기 자신을 참조 할 수 없다.
let count = 0;
function foo(num) {
  console.log("foo:" + num);
  this.count++;
  console.log(this.count);
}
foo.count = 0;
for (let index = 0; index < 10; index++) {
  if (index > 5) {
    foo(index);
  }
}
// count는 0이다
console.log(foo.count);

/**
 * 함수는 자신을 참조할때는 함수 이름으로 참조한다.
 * 따라서 foo에서 올바르게 count를 출력하기 위해서는 함수 이름 자신을 써줘야 한다.(foo2)
 * 혹은 call을 이용하여 함수 호출에 제공되는 this값을 명시(foo3)
 */

function foo2(num) {
  console.log("foo:" + num);
  foo2.count++;
}
foo2.count = 0;
for (let index = 0; index < 10; index++) {
  if (index > 5) {
    foo2(index);
  }
}
console.log(foo2.count);

function foo3(num) {
  console.log("foo:" + num);
  this.count++;
}
foo3.count = 0;
for (let index = 0; index < 10; index++) {
  if (index > 5) {
    foo3.call(foo3, index);
  }
}
console.log(foo3.count);
