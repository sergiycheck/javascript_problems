// export function pickPeaks(arr: number[]) {
//   console.log('arr', arr);

//   const peaks = [];
//   const pos = [];

//   let probablePeak = [];
//   let startPlateusIndex = undefined;
//   let endOfPeak = false;

//   const restItermediateFlags = () => {
//     probablePeak = [];
//     startPlateusIndex = undefined;
//     endOfPeak = false;
//   };

//   let plateaus = false;

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] < arr[i + 1] && !plateaus) {
//       plateaus = false;
//       probablePeak.push(arr[i]);
//     } else if (arr[i] > probablePeak[probablePeak.length - 1]) {
//       endOfPeak = true;
//       probablePeak.push(arr[i]);
//     } else if (arr[i] > arr[i - 1]) {
//       probablePeak.push(arr[i - 1], arr[i]);
//       endOfPeak = true;
//     }

//     if (endOfPeak) {
//       if (probablePeak.length && !plateaus) {
//         if (probablePeak[probablePeak.length - 1] === arr[i + 1]) {
//           plateaus = true;
//           startPlateusIndex = i;
//         } else {
//           if (startPlateusIndex) {
//             peaks.push(arr[startPlateusIndex]);
//             pos.push(startPlateusIndex);
//           } else {
//             peaks.push(arr[i]);
//             pos.push(i);
//           }

//           restItermediateFlags();
//         }
//       } else if (plateaus && arr[i] > arr[i + 1]) {
//         peaks.push(arr[startPlateusIndex]);
//         pos.push(startPlateusIndex);

//         restItermediateFlags();

//         plateaus = false;
//       } else if (plateaus && arr[i] < arr[i + 1]) {
//         restItermediateFlags();

//         plateaus = false;
//       }
//     }
//   }

//   console.log('pos', pos);
//   console.log('peak', peaks);

//   return { pos, peaks };
// }
// TODO: go over other solutions and understand them

//solutions
// https://www.codewars.com/kata/5279f6fe5ab7f447890006a7/solutions/javascript

// solution 1
export function pickPeaks(arr) {
  var result = { pos: [], peaks: [] };
  if (arr.length > 2) {
    var pos = -1;
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > arr[i - 1]) {
        pos = i;
      } else if (arr[i] < arr[i - 1] && pos != -1) {
        result.pos.push(pos);
        result.peaks.push(arr[pos]);
        pos = -1;
      }
    }
  }
  return result;
}

//solution 2
// export function pickPeaks(arr){
//   var pos = arr.map((x,i)=>i > 0 ? Math.sign(x - arr[i-1]) * i : 0)
//     .filter(i => i != 0)
//     .filter((x,i,a) => i < a.length-1 && (a[i+1] < 0 && x > 0));
//   return {pos:pos, peaks:pos.map(i=>arr[i])}
// }
