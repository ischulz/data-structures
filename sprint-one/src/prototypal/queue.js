var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let newObj = Object.create(queueMethods);
  newObj.count = 0;
  newObj.storage = {};
  return newObj;
};

var queueMethods = {};


queueMethods.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

queueMethods.dequeue = function() {
  if (this.count > 0) {
    let deleted = this.storage[0];
    for (let i = 0; i < this.count; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    this.count --;
    return deleted;
  }
};

queueMethods.size = function() {
  return this.count;
};


