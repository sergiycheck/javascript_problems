import { readLinesOfFile } from '../../utils/readLinesOfFile';
import path from 'path';
import process from 'process';


// Lowercase item types a through z have priorities 1 through 26.
// Uppercase item types A through Z have priorities 27 through 52.

// The only way to tell which item type is the right one 
// is by finding the one item type that is common between all three Elves in each group.

export async function ruckSackReorganization() {
  const inputPath = 'src/adventOfCode2022/rucksack_reorganization/input';
  const testInputPath = 'src/adventOfCode2022/rucksack_reorganization/testInput';

  const linesArr = await readLinesOfFile(
    path.resolve(process.cwd(), inputPath)
  );

  const bigLettersStartCharCode = 65;
  const bigettersEndCharCode = 90;
  const bigLettersPriorityStart = 27;

  const smallLettersStartCharCode = 97;
  const smallLettersEndCharCode = 122;
  const smallLettersPriorityStart = 1;


  function getPriorityObj(startCharCode: number, endCharCode: number, priorityStartNum: number){
    const priorityObj = {};
    let counter = priorityStartNum;
    for(let i = startCharCode; i <= endCharCode; i++) {
      priorityObj[String.fromCharCode(i)] = counter++;
    }

    return priorityObj;
  }

  const allLettersPriorityObj = {
    ...getPriorityObj
      (smallLettersStartCharCode, smallLettersEndCharCode, smallLettersPriorityStart),
    ...getPriorityObj(bigLettersStartCharCode, bigettersEndCharCode, bigLettersPriorityStart)
  };


  function getSameChar(firstPart: string, secondPart: string, thridPart: string) {
    let sameChar = '';
    for(let i = 0; i < firstPart.length; i++) {
      const char = firstPart[i];
      if(secondPart.includes(char) && thridPart.includes(char)) {
        sameChar = firstPart[i];
        break;
      }
    }
    return sameChar;
  }


  let sum = 0;
  for(let i = 0; i < linesArr.length; i+=3) {
    let innerIndex = i;
    const firstLine = linesArr[innerIndex];
    const secondLine = linesArr[++innerIndex];
    const thridLine = linesArr[++innerIndex];

    const sameChar = getSameChar(firstLine, secondLine, thridLine);
    const priority = allLettersPriorityObj[sameChar];
    sum += priority;
  }

}