class HashTableV1 {

  values: object;
  length: number;
  size: number;

  constructor() {
    this.values = {};
    this.length =  0;
    this.size =  0;
  }

  calculateHash(key: string) {
    return key.toString().length % this.size;
  }

  add(key: string, value: any) {
    const hash = this.calculateHash(key);

    if (!this.values.hasOwnProperty(hash)) {
      this.values[hash] = {};
    }

    if (!this.values[hash].hasOwnProperty(key)) {
      this.length++;
    }

    this.values[hash][key] = value;
  }

  search(key: string) {
    const hash = this.calculateHash(key);
    
    if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
      return this.values[hash][key];
    } else {
      return null;
    }
 }

 }