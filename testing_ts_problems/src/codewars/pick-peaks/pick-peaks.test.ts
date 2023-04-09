import { pickPeaks } from './pick-peaks';

describe('Sample tests', function () {
  it('test 1', function () {
    const actualArr = [1, 2, 3, 6, 4, 1, 2, 3, 2, 1];
    const expectedResponse = { pos: [3, 7], peaks: [6, 3] };
    expect(pickPeaks(actualArr)).toEqual(expectedResponse);
  });

  it('test 2', () => {
    const actualArr = [3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3];
    const expectedResponse = {
      pos: [3, 7],
      peaks: [6, 3],
    };
    expect(pickPeaks(actualArr)).toEqual(expectedResponse);
  });

  it('test 3', () => {
    const actualArr = [3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1];
    const expectedResponse = {
      pos: [3, 7, 10],
      peaks: [6, 3, 2],
    };
    expect(pickPeaks(actualArr)).toEqual(expectedResponse);
  });

  it('test 4', () => {
    const actualArr = [2, 1, 3, 1, 2, 2, 2, 2, 1];
    const expectedResponse = {
      pos: [2, 4],
      peaks: [3, 2],
    };
    expect(pickPeaks(actualArr)).toEqual(expectedResponse);
  });

  it('test 5', () => {
    const actualArr = [2, 1, 3, 1, 2, 2, 2, 2];
    const expectedResponse = {
      pos: [2],
      peaks: [3],
    };
    expect(pickPeaks(actualArr)).toEqual(expectedResponse);
  });

  it('test 6', () => {
    const actualArr = [2, 1, 3, 2, 2, 2, 2, 5, 6];
    const expectedResponse = {
      pos: [2],
      peaks: [3],
    };
    expect(pickPeaks(actualArr)).toEqual(expectedResponse);
  });

  it('test 7', () => {
    const actualArr = [2, 1, 3, 2, 2, 2, 2, 1];
    const expectedResponse = {
      pos: [2],
      peaks: [3],
    };
    expect(pickPeaks(actualArr)).toEqual(expectedResponse);
  });

  it('test 8', () => {
    const actualArr = [
      1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3,
    ];
    const expectedResponse = { pos: [2, 7, 14, 20], peaks: [5, 6, 5, 5] };
    expect(pickPeaks(actualArr)).toEqual(expectedResponse);
  });

  it('test 9', () => {
    const actualArr = [];
    const expectedResponse = { pos: [], peaks: [] };
    expect(pickPeaks(actualArr)).toEqual(expectedResponse);
  });

  it('test 10', () => {
    const actualArr = [1, 1, 1, 1];
    const expectedResponse = { pos: [], peaks: [] };
    expect(pickPeaks(actualArr)).toEqual(expectedResponse);
  });

  it('test 11', () => {
    const actualArr = [
      10, 15, 6, 7, 0, 13, 11, 8, 15, 6, 10, 2, -4, -2, 7, 4, 3, 7, 11, 2, 11,
      6, -1, 13, 3, -2, 14, 0, 5, -1, 1, 13, 13, 3, 10, 10, 13, 0, 0, 1, 3, -2,
      -3, -2, 2, -1, 14, 1,
    ];

    const expectedResponse = {
      pos: [1, 3, 5, 8, 10, 14, 18, 20, 23, 26, 28, 31, 36, 40, 44, 46],
      peaks: [15, 7, 13, 15, 10, 7, 11, 11, 13, 14, 5, 13, 13, 3, 2, 14],
    };

    expect(pickPeaks(actualArr)).toEqual(expectedResponse);
  });
});
