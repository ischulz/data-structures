var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count ++;
  };

  someInstance.dequeue = function() {
    if (count > 0) {
      let deleted = storage[0];
      for (let i = 0; i < count; i++) {
        storage[i] = storage[i + 1];
      }
      count --;
      return deleted;
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
