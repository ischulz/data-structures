var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let node = Node(value);
    if (list.head === null) {
      list.head = node;
    } else {
      list.tail.next = node;
    }
    list.tail = node;
    node.tail = null;
  };

  list.removeHead = function() {
    if (list.head !== null) {
      let node = list.head;
      list.head = node.next;
      return node.value;
    }
  };

  list.contains = function(target) {  
    let node = list.head;
    while (node) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
