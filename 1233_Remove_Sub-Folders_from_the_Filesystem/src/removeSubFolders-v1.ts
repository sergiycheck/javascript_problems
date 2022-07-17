function getPath2SubfolderOfPath1(path1: string, path2: string) {
  const path1Arr = path1.split('/');
  const path2Arr = path2.split('/');

  let longer = [];
  let shorter = [];

  if (path1Arr.length > path2Arr.length) {
    longer = path1Arr;
    shorter = path2Arr;
  } else {
    longer = path2Arr;
    shorter = path1Arr;
  }

  let longerIncludesAllFromShorter = true;
  for (let i = 0; i < shorter.length; i++) {
    let indOfShorterArrEl = i;
    const indOfLongerArrEl = longer.indexOf(shorter[i]);
    if (indOfShorterArrEl !== indOfLongerArrEl) {
      longerIncludesAllFromShorter = false;
    }
  }

  return longerIncludesAllFromShorter ? longer.join('/') : undefined;
}

export default function removeSubfolders(folders: string[]): string[] {
  let subFolders: string[] = [];

  for (let i = 0; i < folders.length; i++) {
    for (let j = i + 1; j < folders.length; j++) {
      const subfolder = getPath2SubfolderOfPath1(folders[j], folders[i]);

      if (subfolder) {
        subFolders.push(subfolder);
      }
    }
  }

  const resultSubfolders = folders.filter((f) => !subFolders.includes(f));

  return resultSubfolders;
}
