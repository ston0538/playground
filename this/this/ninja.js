// https://www.notion.so/khk0613/4-2-Invoking-Function-ac88094b82e24d12a5d0b5f8d6a1cc61


module.exports.foo = 5;
console.log(this);

function ninja() {
  return this;
}
ninja();

const samurai = () => {
  console.log('samurai');
};

samurai();

(function () {
  console.log('hi');
})();
