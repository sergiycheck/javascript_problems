import { readLinesOfFile } from '../../utils/readLinesOfFile';
import path from 'path';
import process from 'process';

export async function mainReadElfsCalories() {
  const inputPath = path.resolve(
    process.cwd(),
    'src/readFileElfsCalories/input'
  );

  const linesArr = await readLinesOfFile(inputPath);

  const arraysOfCalloriesPerEachElf: number[][] = [];
  let elfsCaloriesItems: number[] = [];
  for (let item of linesArr) {
    if (item) {
      elfsCaloriesItems.push(+item);
    } else {
      arraysOfCalloriesPerEachElf.push(elfsCaloriesItems);
      elfsCaloriesItems = [];
    }
  }

  const sumOfCaloriesPerEachElf = arraysOfCalloriesPerEachElf.reduce(
    (prev, curr, index) => {
      const sum = curr.reduce((prev, curr) => prev + curr);
      prev.push(sum);
      return prev;
    },
    []
  );

  let [max] = sumOfCaloriesPerEachElf;
  const elfsMaxSumOfCaloriesWithItsIndex = {
    max,
    index: 0,
  };
  for (let i = 1; i < sumOfCaloriesPerEachElf.length; i++) {
    const item = sumOfCaloriesPerEachElf[i];
    if (item > elfsMaxSumOfCaloriesWithItsIndex.max) {
      elfsMaxSumOfCaloriesWithItsIndex.max = item;
      elfsMaxSumOfCaloriesWithItsIndex.index = i;
    }
  }

}
