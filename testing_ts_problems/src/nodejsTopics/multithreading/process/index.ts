const process_name = process.argv.slice(2)[0];

console.log(process.argv)
export const processRuns = () => {
  let count = 0;
  while (true) {
    count++;
    if (count == 2000 || count == 4000) {
      console.log(`${process_name}: ${count}`);
    }

    if (count === 1000_000_000_000) {
      console.log('exiting', count)
      break;
    }
  }

}