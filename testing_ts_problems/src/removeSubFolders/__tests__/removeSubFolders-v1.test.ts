import removeSubfolders from '../removeSubFolders-v1';

describe('remove sub folders tests index-v1', () => {
  test('["/a","/a/b","/c/d","/c/d/e","/c/f"] => ["/a","/c/d","/c/f"]', () => {
    const input = ['/a', '/a/b', '/c/d', '/c/d/e', '/c/f'];
    const expected = ['/a', '/c/d', '/c/f'];

    const actual = removeSubfolders(input);

    expect(actual.sort()).toEqual(expected.sort());
  });

  test('["/a","/a/b/c","/a/b/d"] => ["/a"]', () => {
    const input = ['/a', '/a/b/c', '/a/b/d'];
    const expected = ['/a'];

    const actual = removeSubfolders(input);

    expect(actual.sort()).toEqual(expected.sort());
  });

  test('["/a/b/c","/a/b/ca","/a/b/d"] => ["/a/b/c","/a/b/ca","/a/b/d"]', () => {
    const input = ['/a/b/c', '/a/b/ca', '/a/b/d'];
    const expected = ['/a/b/c', '/a/b/ca', '/a/b/d'];

    const actual = removeSubfolders(input);

    expect(actual.sort()).toEqual(expected.sort());
  });
  test('["/ah/al/am","/ah/al"] => ["/ah/al/am"]', () => {
    const input = ['/ah/al/am', '/ah/al'];
    const expected = ['/ah/al'];

    const actual = removeSubfolders(input);

    expect(actual.sort()).toEqual(expected.sort());
  });

  test('["/aa/ab/ac/ae","/aa/ab/af/ag","/ap/aq/ar/as","/ap/aq/ar","/ap/ax/ay/az","/ap","/ap/aq/ar/at","/aa/ab/af/ah","/aa/ai/aj/ak","/aa/ai/am/ao"] => ["/aa/ab/ac/ae","/aa/ab/af/ag","/aa/ab/af/ah","/aa/ai/aj/ak","/aa/ai/am/ao","/ap"]', () => {
    const input = [
      '/aa/ab/ac/ae',
      '/aa/ab/af/ag',
      '/ap/aq/ar/as',
      '/ap/aq/ar',
      '/ap/ax/ay/az',
      '/ap',
      '/ap/aq/ar/at',
      '/aa/ab/af/ah',
      '/aa/ai/aj/ak',
      '/aa/ai/am/ao',
    ];
    const expected = [
      '/aa/ab/ac/ae',
      '/aa/ab/af/ag',
      '/aa/ab/af/ah',
      '/aa/ai/aj/ak',
      '/aa/ai/am/ao',
      '/ap',
    ];

    const actual = removeSubfolders(input);

    expect(actual.sort()).toEqual(expected.sort());
  });
});
