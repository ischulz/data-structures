

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  let index = getIndexBelowMaxForKey(k, this._limit);
  let obj = this._storage.get(index);
  if (obj === undefined) {
    obj = {};
    this._storage.set(index, obj);
  }
  obj[k] = v;
};


HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  let index = getIndexBelowMaxForKey(k, this._limit);
  let obj = this._storage.get(index);
  if (obj !== undefined) {
    delete obj[k];  
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


