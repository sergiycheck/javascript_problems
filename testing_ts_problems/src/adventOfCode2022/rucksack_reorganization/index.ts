import { readLinesOfFile } from '../../utils/readLinesOfFile';
import path from 'path';
import process from 'process';

//  A given rucksack always has the same number of items in each of its two compartments, 
// so the first half of the characters represent items 
// in the first compartment, while the second half of the characters represent items in the second compartment.

// Lowercase item types a through z have priorities 1 through 26.
// Uppercase item types A through Z have priorities 27 through 52.

// find same characters in both parts and calculate the sum according to rules

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


  function getSameChar(firstPart: string, secondPart: string) {
    let sameChar = '';
    for(let i = 0; i < firstPart.length; i++) {
      if(secondPart.includes(firstPart[i])) {
        sameChar = firstPart[i];
        break;
      }
    }
    return sameChar;
  }

  const sum = linesArr.reduce((prev, curr) => {

    const currentLength = curr.length;
    const half = currentLength / 2;
    const firstPart = curr.slice(0, half);
    const secondPart = curr.slice(half, currentLength);
  
    const sameChar = getSameChar(firstPart, secondPart);

    const priority = allLettersPriorityObj[sameChar];


    if(!Number.isNaN(priority)) {
      return prev + priority;
    }

    return prev;

  }, 0);


}