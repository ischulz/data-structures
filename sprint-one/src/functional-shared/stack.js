var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let newObj = {
    storage: {},
    count: 0
  };
  _.extend(newObj, stackMethods);
  return newObj;

};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

stackMethods.pop = function() {
  if (this.count > 0) {
    let deleted = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count --;
    return deleted;
  }
};

stackMethods.size = function() {
  return this.count;
};


