const sum = (...args) => args.reduce((p, c) => p + c);

function add(...args) {
  let fn = function (...args1) {
    const result = sum(...args) + sum(...args1);
    return add(result);
  };

  fn.valueOf = function () {
    return sum(...args);
  };

  return fn;
}

export function testCurriedSum() {
  console.log(+add(1, 2, 3)(2) == 8);
  console.log(+add(1)(2)(2) == 5);
  console.log(+add(1)(2, 5, 7)(2) == 17);
}
