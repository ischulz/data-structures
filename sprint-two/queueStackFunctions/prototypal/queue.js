var ProtoQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let newObj = Object.create(ProtoQueueMethods);
  newObj.count = 0;
  newObj.storage = {};
  return newObj;
};

var ProtoQueueMethods = {};


ProtoQueueMethods.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

ProtoQueueMethods.dequeue = function() {
  if (this.count > 0) {
    let deleted = this.storage[0];
    for (let i = 0; i < this.count; i++) {
      this.storage[i] = this.storage[i + 1];
    }
    this.count --;
    return deleted;
  }
};

ProtoQueueMethods.size = function() {
  return this.count;
};


