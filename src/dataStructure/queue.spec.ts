import { Queue } from "./queue";

describe("Test Queue", () => {
  it("가장 먼저 넣은 데이터가 먼저 나온다.", () => {
    const queue = new Queue();

    queue.push(1);
    queue.push(2);
    queue.push(3);

    const first = queue.shift();
    expect(first).toBe(1);
    expect(queue.size).toBe(2);

    const second = queue.shift();
    expect(second).toBe(2);
    expect(queue.size).toBe(1);
  });
});
