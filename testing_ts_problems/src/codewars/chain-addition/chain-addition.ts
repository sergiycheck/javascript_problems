function add(n) {
  let fn = function (n1) {
    return add(n + n1);
  };

  fn.valueOf = function () {
    return n;
  };

  return fn;
}

export function testCurriedSum() {
  const a = add(1)(2);
  const b = add(3)(4);

  console.log((a as any) == 3);
  console.log((b as any) == 7);
}
