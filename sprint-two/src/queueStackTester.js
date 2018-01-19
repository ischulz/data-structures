var queueStackTester = function(numRuns) {
  let funcStack = FunctionalStack();
  let funcQueue = FunctionalQueue();
  let fsStack = FSStack();
  let fsQueue = FSQueue();
  let protoStack = ProtoStack();
  let protoQueue = ProtoQueue();
  let pseudoStack = new PseudoStack();
  let pseudoQueue = new PseudoQueue();
  let es6Stack = new ES6Stack();
  let es6Queue = new ES6Queue();
  let stacks = {
    'funcStack': funcStack,
    'fsStack': fsStack,
    'protoStack': protoStack,
    'pseudoStack': pseudoStack,
    'es6Stack': es6Stack
  };
  // let queues = {
  //   'funcQueue': funcQueue,
  //   'fsQueue': fsQueue,
  //   'protoQueue': protoQueue,
  //   'pseudoQueue': pseudoQueue,
  //   'es6Queue': es6Queue
  // };
  _.each(stacks, (stack, key) => {
    let startTime = performance.now();
    for (let i = 0; i < numRuns; i++) {
      stack.push(Math.floor(Math.random() * 101));
    }
    for (let i = 0; i < numRuns; i++) {
      stack.size();
      stack.pop();
    }
    console.log(`${key}: (time) ${performance.now() - startTime}`);
  });
  // _.each(queues, (queue, key) => {
  //   let startTime = Date.now();
  //   for (let i = 0; i < numRuns; i++) {
  //     queue.enqueue(Math.floor(Math.random() * 101));
  //   }
  //   for (let i = 0; i < numRuns; i++) {
  //     queue.size();
  //     queue.dequeue();
  //   }
  //   console.log(`${key}: (time) ${Date.now() - startTime}`);
  // });
};
queueStackTester(10000000);