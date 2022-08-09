const { Stack } = require("./index.js");
describe("Stack Class", () => {
  it("#push should add a new item to the stack ", () => {
    const stack = new Stack();
    console.log(stack);
    stack.push(1);
    expect(stack[0]).toEqual(1);
  });
  it.skip('pop should remove the last item in the stack', () => {
    const stack = new Stack();
    expect(stack.pop()).toBe(stack.length - 1);
  });
});
