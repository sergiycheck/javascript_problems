import { maxProduct } from '../max_prduct_subarray';

describe('finds the larges product correctly', () => {
  test('input 1', () => {
    const input = [2, 3, -2, 4];
    const expected = 6;
    expect(maxProduct(input)).toBe(expected);
  });

  test('input 2', () => {
    const input = [-2, 0, -1];
    const expected = 0;
    expect(maxProduct(input)).toBe(expected);
  });
  test('input 3', () => {
    const input = [-2];
    const expected = -2;
    expect(maxProduct(input)).toBe(expected);
  });
});
