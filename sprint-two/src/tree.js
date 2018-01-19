var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.key;
  newTree.childCount = 0;
  
  // your code here
  newTree.parent = null;
  newTree.children = {}; 
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let tree = Tree(value);
  tree.parent = this;
  this.children[this.childCount] = tree;
  tree.key = this.childCount;
  this.childCount++;
};

// treeMethods.removeFromParent = function(value) {
//   var subTree = {};
//   var parent = null;
//   if (this.value === value) {
//     subTree = this;
//     parent = this.parent; 
//     this.parent = null;
//   }
//   if (parent !== null) {
//     delete parent.children[this.key];
//   }

//   return subTree;
// };

treeMethods.removeFromParent = function(value) {
  var subTree = {};
  var parent = null;
  if (this.value === value) {
    subTree = Object.assign({}, this);
    parent = this.parent; 
    subTree.parent = null;
    if (parent !== null) {
      delete parent.children[this.key];
    }
  } else {
    for (let child in this.children) {
      this.children[child].removeFromParent(value);
    }
  }


  return subTree;
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;  
  }
  let contains = false;
  for (let key in this.children) {
    if (this.children[key].contains(target)) {
      contains = true;
    }
  }
  return contains;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
