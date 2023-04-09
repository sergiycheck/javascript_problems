import { rangeExtractions } from './range-extractions';

describe('Sample tests', function () {
  it('test 1', () => {
    const actualArr = [
      -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
    ];
    const expectedRes = '-6,-3-1,3-5,7-11,14,15,17-20';

    expect(rangeExtractions(actualArr)).toEqual(expectedRes);
  });

  it('test 2', () => {
    const actualArr = [
      -99, -98, -97, -94, -93, -90, -88, -87, -85, -83, -82, -79, -77, -76, -74,
      -73, -72, -69, -66, -64, -61, -58, -56, -54,
    ];

    const expectedRes =
      '-99--97,-94,-93,-90,-88,-87,-85,-83,-82,-79,-77,-76,-74--72,-69,-66,-64,-61,-58,-56,-54';

    expect(rangeExtractions(actualArr)).toEqual(expectedRes);
  });

  it('test 3', () => {
    const actualArr = [
      -66, -63, -61, -58, -55, -52, -49, -46, -45, -43, -41, -38, -35, -33, -32,
      -31, -30, -28, -25, -24, -21, -20, -17, -15, -13, -12, -10, -7, -6, -5,
      -2,
    ];

    const expectedRes =
      '-66,-63,-61,-58,-55,-52,-49,-46,-45,-43,-41,-38,-35,-33--30,-28,-25,-24,-21,-20,-17,-15,-13,-12,-10,-7--5,-2';

    expect(rangeExtractions(actualArr)).toEqual(expectedRes);
  });
});
