import { readLinesOfFile } from '../../utils/readLinesOfFile';
import path from 'path';
import process from 'process';

// A - rock
// B - paper
// C - scissors

// Y -- draw - rock
// X -- lose - scissors
// Z -- win - paper

type OponentChoiceType = 'A' | 'B' | 'C';
type MyChoiceType = 'X' | 'Y' | 'Z';

const pointsForMyChoice = {
  'X': 0,
  'Y': 3,
  'Z': 6,
};

const pointsForCombinationChoice = {
  'AX': 3,  'AY': 1,  'AZ': 2,
  'BX': 1,  'BY': 2,  'BZ': 3,
  'CX': 2,  'CY': 3,  'CZ': 1
}

export const calculatePoints = (
  oponent: OponentChoiceType,
  me: MyChoiceType
) => {
  let score = pointsForMyChoice[me];
  score += pointsForCombinationChoice[`${oponent}${me}`];
  return score;
};

export async function rockPaperScissors() {
  const linesArr = await readLinesOfFile(
    path.resolve(process.cwd(), 'src/adventOfCode2022/rockPaperScissors/input')
  );

  const sum = linesArr.reduce((prev, curr) => {
    const [oponentStr, meStr] = curr.split(' ');

    const oponentChoice = oponentStr as unknown as OponentChoiceType;
    const myChoiceType = meStr as unknown as MyChoiceType;

    const points = calculatePoints(oponentChoice, myChoiceType);

    return prev + points;
  }, 0);


  return sum;
}
