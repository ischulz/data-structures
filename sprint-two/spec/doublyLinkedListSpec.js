describe('doublyLinkedList', function() {
  var dlLinkedList;

  beforeEach(function() {
    dlLinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(dlLinkedList).to.have.property('head');
    expect(dlLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "addToHead", "removeHead", "removeTail", and "contains"', function() {
    expect(dlLinkedList.addToTail).to.be.a('function');
    expect(dlLinkedList.addToHead).to.be.a('function');
    expect(dlLinkedList.removeHead).to.be.a('function');
    expect(dlLinkedList.removeTail).to.be.a('function');
    expect(dlLinkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    dlLinkedList.addToTail(4);
    expect(dlLinkedList.tail.value).to.equal(4);
    dlLinkedList.addToTail(5);
    expect(dlLinkedList.tail.value).to.equal(5);
  });
  it('should designate a new head when new nodes are added', function() {
    dlLinkedList.addToHead(4);
    expect(dlLinkedList.head.value).to.equal(4);
    dlLinkedList.addToHead(5);
    expect(dlLinkedList.head.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    dlLinkedList.addToTail(4);
    dlLinkedList.addToTail(5);
    expect(dlLinkedList.head.value).to.equal(4);
    dlLinkedList.removeHead();
    expect(dlLinkedList.head.value).to.equal(5);
  });
  it('should remove the tail from the list when removeTail is called', function() {
    dlLinkedList.addToHead(4);
    dlLinkedList.addToHead(5);
    expect(dlLinkedList.tail.value).to.equal(4);
    dlLinkedList.removeTail();
    expect(dlLinkedList.tail.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    dlLinkedList.addToTail(4);
    expect(dlLinkedList.removeHead()).to.equal(4);
  });
  it('should return the value of the former tail when removeTail is called', function() {
    dlLinkedList.addToHead(4);
    expect(dlLinkedList.removeTail()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    dlLinkedList.addToTail(4);
    dlLinkedList.addToTail(5);
    expect(dlLinkedList.contains(4)).to.equal(true);
    expect(dlLinkedList.contains(5)).to.equal(true);
    expect(dlLinkedList.contains(6)).to.equal(false);
    dlLinkedList.addToHead(2);
    dlLinkedList.addToHead(3);
    expect(dlLinkedList.contains(2)).to.equal(true);
    expect(dlLinkedList.contains(3)).to.equal(true);
    expect(dlLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    dlLinkedList.addToTail(4);
    dlLinkedList.addToTail(5);
    dlLinkedList.removeHead();
    expect(dlLinkedList.contains(4)).to.equal(false);
    dlLinkedList.addToHead(2);
    dlLinkedList.addToTail(3);
    dlLinkedList.removeTail();
    expect(dlLinkedList.contains(3)).to.equal(false);
  });

  // add more tests here to test the functionality of dlLinkedList
});
