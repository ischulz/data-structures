var ProtoStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let newObj = Object.create(ProtoStackMethods);
  newObj.count = 0;
  newObj.storage = {};
  return newObj;

};

var ProtoStackMethods = {};

ProtoStackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

ProtoStackMethods.pop = function() {
  if (this.count > 0) {
    let deleted = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count --;
    return deleted;
  }
};

ProtoStackMethods.size = function() {
  return this.count;
};
