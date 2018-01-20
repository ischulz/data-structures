describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });
  
  it('should correctly remove tree node from parent and return', function() {
    tree.addChild(1);
    tree.addChild(5);
    tree.addChild(3);
    expect(tree.contains(5)).to.equal(true);
    var test = tree.removeFromParent(5);
    expect(tree.contains(5)).to.equal(false);
  });

  it('should correctly remove tree node with children from parent and return', function() {
    tree.addChild(1);
    tree.addChild(5);
    tree.children[1].addChild(51);
    tree.children[1].addChild(52);
    tree.addChild(3);
    expect(tree.children[1].contains(51)).to.equal(true);
    tree.removeFromParent(5);
    expect(tree.contains(5)).to.equal(false);
  });

  it('should correctly change all tree node values with given call back function', function() {
    let multByTwo = function (a) {
      return a * 2;
    };
    tree.addChild(1);
    tree.addChild(5);
    tree.children[1].addChild(51);
    tree.children[1].addChild(52);
    tree.addChild(3);
    tree.traverse(multByTwo);
    expect(tree.contains(10)).to.equal(true);
    //expect(tree.contains(5)).to.equal(false);
    //expect(tree.contains(102)).to.equal(true);
  });
});
