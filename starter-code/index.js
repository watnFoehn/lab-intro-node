class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length ++;
    this.items.sort((a, b) => 
     a-b)
  }
  get(pos) {
    return this.items[pos-1];
    
  }
  max() {
    if (this.length === 0)
    {
      throw new Error("EmptySortedList")
    }
    else {
      return Math.max(...this.items);
    }
     
    
  }
  min() {
    if (this.length === 0)
    {
      throw new Error("EmptySortedList")
    }
    else {
      return Math.min(...this.items);
    }
  }
  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.reduce((a, b) => a + b, 0) / this.items.length;
    }
  }
  sum() {
    if (this.length === 0) {
      return 0;
    } else {
      return this.items.reduce((a, b) => a + b, 0);
    }
  }
};

module.exports = SortedList;
