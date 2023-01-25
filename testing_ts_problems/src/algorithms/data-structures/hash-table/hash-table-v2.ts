export class HashTableV2 {

  table: number[][];
  size: number;

  constructor() {
    this.table = new Array(200);
    this.size = 0;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  set(key, value) {
    const index = this._hash(key);
    this.table[index] = [key, value];
    this.size++;
  }

  get(key) {
    const index = this._hash(key);
    return this.table[index];
  }


  remove(key) {
    const index = this._hash(key);
    const itemExists = this.table[index] && this.table[index].length
  
    if (itemExists) {
      this.table[index] = undefined;
      this.size--;
    } 
  
  }

}