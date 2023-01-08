
export function calculateFrom0To20billions(threadCount?: number) {
  const divider = threadCount ? threadCount : 1;
  let counter = 0;
  for (let i = 0; i < 20_000_000_000 / divider; i++) {
    counter++;
  }
  return counter;
}



export function calculateCount() {
  return new Promise((resolve, reject) => {
    const counter = calculateFrom0To20billions();
    resolve(counter);
  });
}


