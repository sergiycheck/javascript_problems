import { readLinesOfFile } from '../../utils/readLinesOfFile';
import path from 'path';
import process from 'process';

// A - rock
// B - paper
// C - scissors

// X rock ( 1 point )
// Y paper ( 2 point )
// Z scissors ( 3 scissors )

// 0 for loss
// sum of choices for draw
// 6 for win

// A < Y
// B < Z
// C < X

const winningCombinations = [
  ['A', 'Y'],
  ['B', 'Z'],
  ['C', 'X'],
];
const drawCombinations = [
  ['A', 'X'],
  ['B', 'Y'],
  ['C', 'Z'],
];

type OponentChoiceType = 'A' | 'B' | 'C';
type MyChoiceType = 'X' | 'Y' | 'Z';

const getPointsForChoice = (choice: OponentChoiceType | MyChoiceType) => {
  if (choice == 'A' || choice == 'X') {
    return 1;
  }
  if (choice == 'Y' || choice == 'B') {
    return 2;
  }
  if (choice == 'C' || choice == 'Z') {
    return 3;
  }
};

const includesCombination = (
  combinationOfArrs: string[][],
  predicate: (combination: string[]) => string[]
) => {
  let includes = false;
  const foundElement = combinationOfArrs.find(predicate) as unknown as
    | string[]
    | undefined;

  includes = foundElement && !!foundElement.length;

  return includes;
};

export const calculatePoints = (
  oponent: OponentChoiceType,
  me: MyChoiceType
) => {
  const pointsForMyChoice = getPointsForChoice(me);

  const pointsForWin = 6;

  const findCombination = (combination: string[]) => {
    const [first, second] = combination;
    return first === oponent && second === me ? combination : undefined;
  };

  const win = includesCombination(winningCombinations, findCombination);
  if (win) {
    return pointsForMyChoice + pointsForWin;
  }

  const draw = includesCombination(drawCombinations, findCombination);
  if (draw) {
    return 3 + pointsForMyChoice;
  }

  return pointsForMyChoice;
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
