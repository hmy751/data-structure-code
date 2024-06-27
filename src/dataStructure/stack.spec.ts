import { Stack } from "./stack";

describe("Test Stack", () => {
  it("가장 나중에 넣은 데이터가 먼저 나온다.", () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    const firstNode = stack.pop();
    expect(firstNode.value).toBe(3);

    const secondNode = stack.pop();
    expect(secondNode.value).toBe(2);
  });
});
