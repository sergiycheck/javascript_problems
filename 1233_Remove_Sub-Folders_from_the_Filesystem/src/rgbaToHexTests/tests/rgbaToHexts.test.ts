import { RGBAToHex } from '../rbaToHex';

describe('convert rgba color to hex', () => {
  test('converts color 1 correctly', () => {
    const rgbaSrt = 'rgba(242, 241, 241, 0)';
    const expectedHex = '#f2f1f1';

    expect(RGBAToHex(rgbaSrt)).toEqual(expectedHex);
  });

  test('converts color 2  correctly', () => {
    const rgbaSrt = 'rgb(51, 144, 255)';
    const expectedHex = '#3390ff';

    expect(RGBAToHex(rgbaSrt)).toEqual(expectedHex);
  });

  test('converts color 3 correctly', () => {
    const rgbaSrt = 'rgba(242, 241, 241, 0.32)';
    const expectedHex = '#f2f1f1';

    expect(RGBAToHex(rgbaSrt)).toEqual(expectedHex);
  });

  test('converts color 4 correctly', () => {
    const rgbaSrt = 'rgb(191, 224, 252)';
    const expectedHex = '#bfe0fc';

    expect(RGBAToHex(rgbaSrt)).toEqual(expectedHex);
  });
});

describe('convert bad rgba color to hex', () => {
  test('converts bad color 1 correctly', () => {
    const rgbaSrt = 'rgba(fe1, 144, 255, 3)';
    const expectedHex = '#000000';

    expect(RGBAToHex(rgbaSrt)).toEqual(expectedHex);
  });

  test('converts bad color 2 correctly', () => {
    const rgbaSrt = 'rgb(fe1, 144, 255)';
    const expectedHex = '#000000';

    expect(RGBAToHex(rgbaSrt)).toEqual(expectedHex);
  });

  test('converts bad color 3 correctly', () => {
    const rgbaSrt = 'cabbage';
    const expectedHex = '#000000';

    expect(RGBAToHex(rgbaSrt)).toEqual(expectedHex);
  });
});
