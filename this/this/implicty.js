function foo() {
  console.log(this.a);
}
const obj = {
  a: 2,
  foo: foo,
};

var bar = obj.foo;
var a = 'hello';

bar();
