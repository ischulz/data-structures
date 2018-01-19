class ES6Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.storage = {};
  }
}

ES6Stack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

ES6Stack.prototype.pop = function() {
  if (this.count > 0) {
    let deleted = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count --;
    return deleted;
  }
};

ES6Stack.prototype.size = function() {
  return this.count;
};