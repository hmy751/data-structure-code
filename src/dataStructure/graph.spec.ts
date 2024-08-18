import { Graph } from "./graph";

describe("Test Graph", () => {
  it("dfs로 조회하면 깊은 탐색으로 조회한다.", () => {
    const graph = new Graph();

    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);
    graph.addNode(4);
    graph.addNode(5);

    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(2, 4);
    graph.addEdge(3, 5);
    graph.addEdge(4, 5);

    expect(graph.dfs(1)).toStrictEqual([1, 2, 4, 5, 3]);
  });

  it("bfs로 조회하면 가장 가까운 노드부터 조회한다.", () => {
    const graph = new Graph();

    graph.addNode(1);
    graph.addNode(2);
    graph.addNode(3);
    graph.addNode(4);
    graph.addNode(5);

    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(2, 4);
    graph.addEdge(3, 5);
    graph.addEdge(4, 5);

    expect(graph.bfs(1)).toStrictEqual([1, 2, 3, 4, 5]);
  });
});
