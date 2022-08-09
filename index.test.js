const { Stack, Queue } = require("./index.js");
describe("Stack Class", () => {
  it("#push should add a new item to the stack ", () => {
    const stack = new Stack();
    stack.push(1);
    console.log(stack);
    expect(stack[0]).toEqual(1);
  });
  // add more tests here...
  it('should add an item to the back', () => {
    const queue = new Queue();
    queue.enqueue('fox');
    queue.enqueue('goose');
    expect(queue.count).toBe(2);
    expect(queue.next).toBe('fox');
  })
});

