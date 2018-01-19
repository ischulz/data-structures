var FSStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let newObj = {
    storage: {},
    count: 0
  };
  _.extend(newObj, FSStackMethods);
  return newObj;

};

var FSStackMethods = {};

FSStackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

FSStackMethods.pop = function() {
  if (this.count > 0) {
    let deleted = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count --;
    return deleted;
  }
};

FSStackMethods.size = function() {
  return this.count;
};


