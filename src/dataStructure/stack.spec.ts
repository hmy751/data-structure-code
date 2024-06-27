import { Stack } from "./stack";

describe("Test Stack", () => {
  it("가장 나중에 넣은 데이터가 먼저 나온다.", () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    const first = stack.pop();
    expect(first).toBe(3);
    expect(stack.size).toBe(2);

    const second = stack.pop();
    expect(second).toBe(2);
    expect(stack.size).toBe(1);
  });
});
