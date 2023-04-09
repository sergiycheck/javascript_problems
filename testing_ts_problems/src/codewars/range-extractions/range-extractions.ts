// export function rangeExtractions(list) {
//   let solutionStr = '';

//   let temporaryArr = [];
//   for (let i = 1; i < list.length; i++) {
//     let isLast = i == list.length - 1;
//     let appendAtTheEnd = isLast ? '' : ',';

//     const checkForPrevElAndLastElInTemporaryArr = () => {
//       if (
//         Math.abs(temporaryArr[temporaryArr.length - 1] - list[i - 1]) == 1 &&
//         temporaryArr[temporaryArr.length - 1] < list[i - 1]
//       ) {
//         temporaryArr.push(list[i - 1]);
//         return true;
//       }
//       return false;
//     };

//     const getRangeStrFromTemporaryArr = () => {
//       return `${temporaryArr[0]}-${temporaryArr[temporaryArr.length - 1]}`;
//     };

//     if (Math.abs(list[i - 1] - list[i]) == 1 && list[i - 1] < list[i]) {
//       temporaryArr.push(list[i - 1]);

//       if (isLast) {
//         temporaryArr.push(list[i]);

//         if (temporaryArr.length >= 3) {
//           let rangeStr = getRangeStrFromTemporaryArr();
//           solutionStr = solutionStr.concat(`${rangeStr}${appendAtTheEnd}`);
//         } else {
//           solutionStr = solutionStr.concat(
//             `${temporaryArr.join(',')}${appendAtTheEnd}`
//           );
//         }
//       }
//     } else if (temporaryArr.length >= 3) {
//       checkForPrevElAndLastElInTemporaryArr();

//       let rangeStr = getRangeStrFromTemporaryArr();
//       solutionStr = solutionStr.concat(`${rangeStr}${appendAtTheEnd}`);

//       temporaryArr = [];
//     } else if (temporaryArr.length) {
//       const existsForEls = checkForPrevElAndLastElInTemporaryArr();

//       if (existsForEls && temporaryArr.length >= 3) {
//         let rangeStr = getRangeStrFromTemporaryArr();
//         solutionStr = solutionStr.concat(`${rangeStr}${appendAtTheEnd}`);
//       } else {
//         solutionStr = solutionStr.concat(
//           `${temporaryArr.join(',')}${appendAtTheEnd}`
//         );
//       }
//       if (isLast) {
//         solutionStr = solutionStr.concat(`,${list[i]}`);
//       }

//       temporaryArr = [];
//     } else {
//       if (isLast) {
//         solutionStr = solutionStr.concat(`${list[i - 1]},`);
//         solutionStr = solutionStr.concat(`${list[i]}`);
//       } else {
//         solutionStr = solutionStr.concat(`${list[i - 1]}${appendAtTheEnd}`);
//       }
//     }
//   }

//   return solutionStr;
// }

//solutions
//https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/solutions/javascript

//solution 1
export function rangeExtractions(individualIntegers) {
  return individualIntegers
    .reduce(splitIntoRanges, [])
    .map(convertToRange)
    .join(',');
}

function splitIntoRanges(ranges, number) {
  if (!ranges.length) {
    ranges.push([number]);
    return ranges;
  }

  var lastRange = ranges[ranges.length - 1];
  var lastNumber = lastRange[lastRange.length - 1];

  number === lastNumber + 1 ? lastRange.push(number) : ranges.push([number]);
  return ranges;
}

function convertToRange(range) {
  return range.length < 3
    ? range.join(',')
    : range[0] + '-' + range[range.length - 1];
}

//solution 2
// function solution(list){
//   for(var i = 0; i < list.length; i++){
//      var j = i;
//      while(list[j] - list[j+1] == -1) j++;
//      if(j != i && j-i>1) list.splice(i, j-i+1, list[i] +'-'+list[j]);
//  }
//  return list.join();
// }

export function testSplitIntoRanges() {
  const actualArr = [
    -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
  ];

  const result = rangeExtractions(actualArr);

  console.log(result);
}
