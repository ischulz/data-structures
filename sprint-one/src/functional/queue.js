// var Queue = function() {
//   var someInstance = {};

//   // Use an object with numeric keys to store values
//   var storage = {};
//   var count = 0;

//   // Implement the methods below

//   someInstance.enqueue = function(value) {
//     storage[count] = value;
//     count ++;
//   };

//   someInstance.dequeue = function() {
//     if (count > 0) {
//       let deleted = storage[0];
//       for (let i = 0; i < count; i++) {
//         storage[i] = storage[i + 1];
//       }
//       count --;
//       return deleted;
//     }
//   };

//   someInstance.size = function() {
//     return count;
//   };

//   return someInstance;
// };

var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var first = 0;
  var last = 0;

  someInstance.enqueue = function(value) {
    storage[last] = value;
    last ++;
  };

  someInstance.dequeue = function() {
    if ((last - first) > 0) {
      let deleted = storage[first];
      delete storage[first];
      first ++;
      return deleted;
    }
  };

  someInstance.size = function() {
    return last - first;
  };

  return someInstance;
};
