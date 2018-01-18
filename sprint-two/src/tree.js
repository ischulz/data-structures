var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; 
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let tree = Tree(value);
  this.children.push(tree);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;  
  }
  let contains = false;
  this.children.forEach(function(child) {
    if (child.contains(target)) {
      contains = true;
    }
  });
  return contains;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
