import fs from 'fs';
import * as readline from 'node:readline';

export async function readLinesOfFile(path: string) {
  const readStresm = fs.createReadStream(path);
  const readLineFile = readline.createInterface({
    input: readStresm,
    crlfDelay: Infinity,
  });

  const linesArr: string[] = [];

  for await (const line of readLineFile) {
    linesArr.push(line);
  }

  return linesArr;
}
