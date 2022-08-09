const { Stack, Queue } = require("./index.js");
describe("Stack Class", () => {
  it("#push should add a new item to the stack ", () => {
    const stack = new Stack();
    stack.push('fox');
    console.log(stack);
    expect(stack.peek()).toBe('fox');
  });
  it("#push should add a new item to the stack ", () => {
    const stack = new Stack();
    stack.push("fox");
    console.log(stack);
    expect(stack.count).toBe(1);
    // expect(stack).toContain('fox');
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

