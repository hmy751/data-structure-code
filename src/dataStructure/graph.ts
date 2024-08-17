type ValueType = string | number | Record<string, unknown> | Array<unknown>;

class GraphNode {
  value: ValueType;
  neighbors: GraphNode[];

  constructor(value: ValueType) {
    this.value = value;
    this.neighbors = [];
  }
}

export class Graph {
  map: Map<ValueType, GraphNode>;

  constructor() {
    this.map = new Map();
  }

  addNode(value: ValueType) {
    const prev = this.map.get(value);

    if (!prev) {
      const newNode = new GraphNode(value);
      this.map.set(value, newNode);
    }
  }

  addEdge(prevValue: ValueType, nextValue: ValueType) {
    const prevNode = this.map.get(prevValue);
    const nextNode = this.map.get(nextValue);

    if (!prevNode || !nextNode) return;

    if (!prevNode.neighbors.includes(nextNode)) {
      prevNode.neighbors.push(nextNode);
    }

    if (!nextNode.neighbors.includes(prevNode)) {
      nextNode.neighbors.push(prevNode);
    }
  }

  dfs(target: ValueType): ValueType[] {
    const result: ValueType[] = [];
    const visited = new Set();

    const helper = (current: ValueType) => {
      if (!current || visited.has(current)) return;

      const currentNode = this.map.get(current);
      result.push(current);
      visited.add(current);

      const neighbors = currentNode?.neighbors;
      if (!neighbors?.length) return;

      for (let i = 0; i < neighbors?.length; i++) {
        helper(neighbors[i].value);
      }
    };

    helper(target);

    return result;
  }
}
