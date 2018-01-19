var FSQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let newObj = {
    storage: {},
    count: 0
  };
  _.extend(newObj, fsQueueMethods);
  return newObj;
};

var fsQueueMethods = {};


fsQueueMethods.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

fsQueueMethods.dequeue = function() {
  if (this.count > 0) {
    let deleted = this.storage[0];
    for (let i = 0; i < this.count; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    this.count --;
    return deleted;
  }
};

fsQueueMethods.size = function() {
  return this.count;
};

