var BinarySearchTree = function(value) {
  let BST = Object.create(BinarySearchTree.prototype);
  BST.maxDepth = 0;
  BST.minDepth = 0;
  BST.left = null;
  BST.right = null;
  BST.startNode = BSTNode(value, 0, BST);
  BST.floorCount = {};
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

BinarySearchTree.prototype.insert = function (value, noBalance) {
  this.startNode.insert(value, 0, noBalance);
};
BSTNode.prototype.insert = function(value, currentDepth, noBalance) {
  if (value > this.value) {
    if (this.right) {
      this.right.insert(value, currentDepth + 1, noBalance);
    } else {
      this.right = BSTNode(value, currentDepth + 1, this.BST);
      this.BST.floorCount[currentDepth + 1] = this.BST.floorCount[currentDepth + 1] + 1 || 1;
      if (currentDepth === this.BST.minDepth) {
        if (this.BST.floorCount[currentDepth + 1] === Math.pow(2, currentDepth + 1)) {
          this.BST.minDepth++;
        }
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
      this.left.insert(value, currentDepth + 1, noBalance);
    } else {
      this.left = BSTNode(value, currentDepth + 1, this.BST);
      this.BST.floorCount[currentDepth + 1] = this.BST.floorCount[currentDepth + 1] + 1 || 1;
      if (currentDepth === this.BST.minDepth) {
        if (this.BST.floorCount[currentDepth + 1] === Math.pow(2, currentDepth + 1)) {
          this.BST.minDepth++;
        }
      }
      if (currentDepth + 1 === 1) {
        this.BST.left = this.left;
      }
    }
    if (currentDepth + 1 > this.BST.maxDepth) {
      this.BST.maxDepth = currentDepth + 1;
    }
  }
  
  if (!noBalance && ((this.BST.maxDepth / 2) > (this.BST.minDepth))) {
    if (this.BST.minDepth !== 0 || (this.BST.minDepth === 0 && this.BST.maxDepth - this.BST.minDepth > 2)) {
      console.log('maxdepth: ' + this.BST.maxDepth + 'mindepth: ' + this.BST.minDepth);
      this.BST.left = null;
      this.BST.right = null;
      this.BST.maxDepth = 0;
      this.BST.minDepth = 0;
      this.BST.floorCount = {};
      //console.log(this.BST.startNode);
      let arr = rebalance(this.BST.startNode);
      console.log('arr: ' + arr);
      //debugger;
      this.BST.startNode = BSTNode(arr[Math.floor((arr.length - 1) / 2)], 0, this.BST);
      buildBalancedTree(arr, this.BST);
      console.log(this.BST.startNode);
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

let buildBalancedTree = function(arr, BST) {
  if (arr.length) {
    let BSTroot = Math.floor((arr.length - 1) / 2);
    //console.log(BSTroot);
    BST.insert(arr[BSTroot], true);
    if (BSTroot !== 0) {
      buildBalancedTree(arr.slice(0, BSTroot), BST);
      buildBalancedTree(arr.slice(BSTroot + 1), BST);
    } else if (arr.length === 2) {
      BST.insert(arr[BSTroot + 1], true);
      //buildBalancedTree(arr.slice(BSTroot + 1), BST);
    }
    //console.log(arr + ' -> ' + arr.slice(0, BSTroot) + ' + ' + arr[BSTroot] + ' + ' + arr.slice(BSTroot + 1));
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */