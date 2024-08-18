import { graph, dijkstra } from "./dijkstra";

describe("Test dijkstra algorithm", () => {
  it("다익스트라 알고리즘을 활용하여 시작 노드부터 각 노드까지의 최단거리 및 이전 노드를 출력한다.", () => {
    graph.addEdge("A", "B", 4);
    graph.addEdge("A", "C", 2);
    graph.addEdge("B", "E", 3);
    graph.addEdge("C", "D", 2);
    graph.addEdge("C", "F", 4);
    graph.addEdge("D", "E", 3);
    graph.addEdge("D", "F", 1);
    graph.addEdge("E", "F", 1);

    const result = dijkstra("A");

    expect(JSON.stringify(result.distances)).toBe(
      JSON.stringify({ A: 0, B: 4, C: 2, D: 4, E: 6, F: 6 })
    );
    expect(JSON.stringify(result.previous)).toBe(
      JSON.stringify({ A: null, B: "A", C: "A", D: "C", E: "F", F: "D" })
    );
  });
});
