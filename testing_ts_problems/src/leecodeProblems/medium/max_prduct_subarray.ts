// problem
// https://leetcode.com/problems/maximum-product-subarray/description/

// export function maxProduct(nums: number[]): number {
//   let maxProduct = nums[0];

//   const areContiguos = (first: number, second: number) => second - first === 1;

//   for (let i = 0; i < nums.length - 1; i++) {
//     let firstNum = nums[i];
//     let currentProduct = firstNum;

//     for (let j = i + 1; j < nums.length; j++) {
//       const secondNum = nums[j];
//       if (areContiguos(firstNum, secondNum)) {
//         currentProduct *= secondNum;
//         firstNum = secondNum;
//       } else {
//         if (currentProduct > maxProduct) {
//           maxProduct = currentProduct;
//         }
//         i = j - 1;
//         break;
//       }
//     }
//   }

//   return maxProduct;
// }

export function maxProduct(nums: number[]): number {
  const length = nums.length;
  if (length == 0) return 0;

  const maxArr = new Array(length);
  const minArr = new Array(length);

  maxArr[0] = nums[0];
  minArr[0] = nums[0];

  for (let i = 1; i < length; i++) {
    const currentNum = nums[i];

    const maxArrPrevMultipliedWithCurrentNum = maxArr[i - 1] * currentNum;
    const minArrPrevMultipliedWithCurrentNum = minArr[i - 1] * currentNum;

    const innerMax = Math.max(
      maxArrPrevMultipliedWithCurrentNum,
      minArrPrevMultipliedWithCurrentNum
    );
    maxArr[i] = Math.max(innerMax, currentNum);

    const innerMin = Math.min(
      maxArrPrevMultipliedWithCurrentNum,
      minArrPrevMultipliedWithCurrentNum
    );
    minArr[i] = Math.min(innerMin, currentNum);
  }

  let result = nums[0];
  for (let i = 1; i < length; i++) {
    result = Math.max(result, maxArr[i]);
  }
  return result;
}
