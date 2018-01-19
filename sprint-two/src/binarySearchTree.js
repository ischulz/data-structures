var BinarySearchTree = function(value) {
  let BST = Object.create(BinarySearchTree.prototype);
  BST.left = null;
  BST.right = null;
  BST.value = value;
  return BST;
};

BinarySearchTree.prototype.insert = function (value) {
  if (value > this.value) {
    if (this.right) {
      this.right.insert(value);
    } else {
      this.right = BinarySearchTree(value);
    }
  } else if (value < this.value) {
    if (this.left) {
      this.left.insert(value);
    } else {
      this.left = BinarySearchTree(value);
    }
  }
};

BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) {
    return true;
  }
  if (this.left && this.left.contains(value)) {
    return true;  
  }
  if (this.right && this.right.contains(value)) {
    return true;
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function (cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  } 
  if (this.right) {
    this.right.depthFirstLog(cb);
  } 
};

BinarySearchTree.prototype.breadthFirstLog = function (cb) {
  let order = [];
  order.push(this);
  while (order.length) {
    let currentNode = order.shift();
    cb(currentNode);
    if (currentNode.left) {
      order.push(currentNode.left);
    }
    if (currentNode.right) {
      order.push(currentNode.right);
    }
  }


};


/*
 * Complexity: What is the time complexity of the above functions?
 */
