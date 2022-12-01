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
  folders.sort((path1, path2) => path1.length - path2.length);
  for (let i = 0; i < folders.length; i++) {
    for (let j = i + 1; j < folders.length; j++) {
      let path1 = folders[i];
      let path2 = folders[j];
      const subfolder = getPath2SubfolderOfPath1(path2, path1);

      if (subfolder) {
        folders.splice(folders.indexOf(subfolder), 1);
        j--;
      }
    }
  }

  return folders;
}
