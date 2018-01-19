

var HashTable = function() {
  this._limit = 8;
  this._items = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  let index = getIndexBelowMaxForKey(k, this._limit);
  let dll = this._storage.get(index);
  if (dll === undefined) {
    dll = DoublyLinkedList();
    this._storage.set(index, dll);
  }
  let node = dll.head;
  let hasKey = false;
  while (node && !hasKey) {
    if (node.key === k) {
      node.value = v;
      hasKey = true;
    }
    node = node.next;
  }
  if (!hasKey) {
    this._items++;
  }
  if (this._items > this._limit * .75) {
    let tempStorage = this._storage;
    let tempLimit = this._limit;
    this._limit *= 2;
    this._storage = LimitedArray(this._limit);
    this._items = 0;
    for (let i = 0; i < tempLimit; i++) {
      let dll = tempStorage.get(i);
      if (dll) {      
        let node = dll.head;
        while (node) {
          this.insert(node.key, node.value);
          node = node.next;
        }
      }  
    }
    this.insert(k, v);
  } else {
    dll.addToTail(v, k);
  }

};


HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let dll = this._storage.get(index);
  if (dll) {
    let node = dll.head;
    while (node) {
      if (node.key === k) {
        return node.value;
      }
      node = node.next;
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  let index = getIndexBelowMaxForKey(k, this._limit);
  let dll = this._storage.get(index);
  if (dll) {
    let node = dll.head;
    while (node) {
      if (node.key === k) {
        if (node.next) {
          if (node.prev) {
            node.prev.next = node.next;
            node.next.prev = node.prev;
          } else {
            dll.removeHead();
          }
        } else {
          dll.removeTail();
        }
        this._items--;
      }
      node = node.next;
    }
  }
  if (this._items < this._limit * .25) {
    let tempStorage = this._storage;
    let tempLimit = this._limit;
    this._limit = Math.floor(this._limit * 0.5);
    this._storage = LimitedArray(this._limit);
    this._items = 0;
    for (let i = 0; i < tempLimit; i++) {
      let dll = tempStorage.get(i);
      if (dll) {      
        let node = dll.head;
        while (node) {
          this.insert(node.key, node.value);
          node = node.next;
        }
      }  
    }  
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


