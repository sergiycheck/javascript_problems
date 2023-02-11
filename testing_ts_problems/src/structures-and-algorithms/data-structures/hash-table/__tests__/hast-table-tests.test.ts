import {HashTableV2} from '../hash-table-v2'

describe('hash table tests', () => {
  test('sets and gets elements from hast-table-v2', () => {
    const valuesToSet = [
      ["Bill", '519-429-2212'],
      ["Kit", '647-232-1246'],
      ["Susan", '754-664-2397']
    ]
    
    const ht = new HashTableV2();

    ht.set(valuesToSet[0][0], valuesToSet[0][1]);
    ht.set(valuesToSet[1][0], valuesToSet[1][1]);
    ht.set(valuesToSet[2][0], valuesToSet[2][1]);

    expect(ht.get(valuesToSet[0][0])).toEqual(valuesToSet[0]);
    expect(ht.get(valuesToSet[1][0])).toEqual(valuesToSet[1]);
    expect(ht.get(valuesToSet[2][0])).toEqual(valuesToSet[2]);

  });

  test('collision of the hash table', () => {
    const ht = new HashTableV2();

    // change size to prime number 27 
    // resolves the collision

    const data = [
      ["Susan", '754-664-2397'],
      ["z", '555-123-5555']
    ];

    ht.set(data[0][0], data[0][1]);
    ht.set(data[1][0], data[1][1]);


    expect(ht.get(data[0][0])).toEqual(data[1])
    expect(ht.get(data[1][0])).toEqual(data[1])
  })
})