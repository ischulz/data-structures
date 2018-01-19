var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  
  list.addToHead = function(value) {
    let node = DLLNode(value);
    if (list.tail === null) {
      list.tail = node;
    } else {
      list.head.prev = node;
      node.next = list.head;
    }
    list.head = node;
  };
  list.addToTail = function(value) {
    let node = DLLNode(value);
    if (list.head === null) {
      list.head = node;
    } else {
      list.tail.next = node;
      node.prev = list.tail;
    }
    list.tail = node;
  };

  list.removeHead = function() {
    if (list.head !== null) {
      let node = list.head;
      list.head = node.next;
      if (list.head !== null) {
        list.head.prev = null;
      }
      return node.value;
    }
  };

  list.removeTail = function() {
    if (list.tail !== null) {
      let node = list.tail;
      list.tail = node.prev;
      if (list.tail !== null) {
        list.tail.next = null;
      }
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

var DLLNode = function(value) {
  var node = {};

  node.value = value;
  node.prev = null;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
