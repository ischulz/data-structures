var BinarySearchTree = function(value, currentDepth) {
  let BST = Object.create(BinarySearchTree.prototype);
  //BST.left = null;
  //BST.right = null;
  //BST.value = value;
  BST.maxDepth = 0;
  BST.minDepth = 0;
  BST.numMinNodes = 1;
  BST.left = null;
  BST.right = null;
  BST.startNode = BSTNode(value, 0, BST);  
  return BST;
};
var BSTNode = function(value, currentDepth, BST) {
  let bstNode = Object.create(BSTNode.prototype);
  bstNode.BST = BST;
  bstNode.left = null;
  bstNode.right = null;
  bstNode.value = value;
  bstNode.depth = currentDepth;
  return bstNode;
};


BinarySearchTree.prototype.insert = function (value) {
  this.startNode.insert(value, 0);
};
BSTNode.prototype.insert = function(value, currentDepth) {
  
  console.log(this);
  if (value > this.value) {
    if (this.right) {
      this.right.insert(value, currentDepth + 1);
      if (currentDepth === this.BST.minDepth) {
        this.BST.numMinNodes--;
      }
    } else {
      this.right = BSTNode(value, currentDepth + 1, this.BST);
      if (currentDepth + 1 === this.BST.minDepth) {
        this.BST.numMinNodes++;
      }
      if (currentDepth + 1 > this.BST.minDepth && this.BST.numMinNodes === 1) {
        this.BST.minDepth = currentDepth + 1;
      }
      if (currentDepth + 1 === 1) {
        this.BST.right = this.right;
      }
    }
    if (currentDepth + 1 > this.BST.maxDepth) {
      this.BST.maxDepth = currentDepth + 1;
    }
  } else if (value < this.value) {
    if (this.left) {
      this.left.insert(value, currentDepth + 1);
    } else {
      this.left = BSTNode(value, currentDepth + 1, this.BST);
      if (currentDepth + 1 === 1) {
        this.BST.left = this.left;
      }
    }
    if (currentDepth + 1 > this.BST.maxDepth) {
      this.BST.maxDepth = currentDepth + 1;
    }
  }
};
BinarySearchTree.prototype.contains = function (value) {
  return this.startNode.contains(value);
};
BSTNode.prototype.contains = function (value) {
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
  this.startNode.depthFirstLog(cb);
};
BSTNode.prototype.depthFirstLog = function (cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  } 
  if (this.right) {
    this.right.depthFirstLog(cb);
  } 
};

BinarySearchTree.prototype.breadthFirstLog = function (cb) {
  this.startNode.breadthFirstLog(cb);
};
BSTNode.prototype.breadthFirstLog = function (cb) {
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

let rebalance = function(bst) {
  let arr = [bst.value];
  if (bst.left) {
    if (bst.right) {
      return rebalance(bst.left).concat(arr).concat(rebalance(bst.right));
    }
    return rebalance(bst.left).concat(arr);
  } else if (bst.right) {
    return arr.concat(rebalance(bst.right));
  }
  return arr;

};

let buildBalancedTree = function(arr) {
  //debugger;
  //console.log(arr);
  let balancedBST = null;
  if (arr.length) {
    let BSTroot = Math.floor(arr.length / 2); 
    //console.log('BSTroot: ' + BSTroot);
    balancedBST = BinarySearchTree(arr[BSTroot]);
    if (BSTroot !== 0) {
      balancedBST.left = buildBalancedTree(arr.slice(0, BSTroot));
      balancedBST.right = buildBalancedTree(arr.slice(BSTroot + 1));
    }
  }
  return balancedBST;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
