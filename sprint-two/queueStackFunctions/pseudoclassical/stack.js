var PseudoStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.storage = {};

};


PseudoStack.prototype.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

PseudoStack.prototype.pop = function() {
  if (this.count > 0) {
    let deleted = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count --;
    return deleted;
  }
};

PseudoStack.prototype.size = function() {
  return this.count;
};

