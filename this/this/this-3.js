/** 호출부와 호출 스택을 설명 */

function baz() {
  // 호출 스택: 'baz'
  // 따라서 호출부는 전역 스코프 내부다.
  console.log('baz');
  bar();
}
function bar() {
  // 호출 스택: 'baz -> 'bar'
  // 따라서 호출부는 'baz' 내부다.
  console.log('bar');
  foo();
}
function foo() {
  // 호출 스택: 'baz -> 'bar' -> 'foo'
  // 따라서 호출부는 'bar' 내부다.
  console.log('foo');
  console.log(this.count);
}
baz();

/**
 * 기본 바인딩
 */
function foo2() {
  // quokka에서는 브라우저 환경이 아니기 때문에 undefined이다.
  console.log(this.a);
}
var a = 3;
foo2();

/**
 * 암시적 바인딩
 */

function foo3() {
  console.log(this.aa);
}
const obj = {
  a: 2,
  foo: foo3,
};
obj.foo();
