// problem
// https://leetcode.com/problems/maximum-product-subarray/description/

export function maxProduct(nums: number[]): number {
  let maxProduct = nums[0];

  const areContiguos = (first: number, second: number) => second - first === 1;

  for (let i = 0; i < nums.length - 1; i++) {
    let firstNum = nums[i];
    let currentProduct = firstNum;

    for (let j = i + 1; j < nums.length; j++) {
      const secondNum = nums[j];
      if (areContiguos(firstNum, secondNum)) {
        currentProduct *= secondNum;
        firstNum = secondNum;
      } else {
        if (currentProduct > maxProduct) {
          maxProduct = currentProduct;
        }
        i = j - 1;
        break;
      }
    }
  }

  return maxProduct;
}
