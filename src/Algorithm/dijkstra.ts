const createPriorityQueue = () => {
  const queue: [string, number][] = [];

  return {
    enqueue(item: string, priority: number) {
      queue.push([item, priority]);
      queue.sort((a, b) => a[1] - b[1]);
    },
    dequeue() {
      return queue.shift();
    },
    isEmpty() {
      return queue.length === 0;
    },
  };
};

export const createGraph = () => {
  const nodes: { [key: string]: { [neighbor: string]: number } } = {};

  return {
    addEdge(node1: string, node2: string, weight: number) {
      if (!graph.nodes[node1]) graph.nodes[node1] = {};
      if (!graph.nodes[node2]) graph.nodes[node2] = {};
      graph.nodes[node1][node2] = weight;
      graph.nodes[node2][node1] = weight;
    },
    nodes,
  };
};

export const graph = createGraph();

export const dijkstra = (start: string) => {
  const distances: { [key: string]: number } = {};
  const previous: { [key: string]: string | null } = {};

  for (let node in graph.nodes) {
    node === start ? (distances[start] = 0) : (distances[node] = Infinity);
    previous[node] = null;
  }

  const priorityQueue = createPriorityQueue();

  priorityQueue.enqueue(start, 0);

  while (!priorityQueue.isEmpty()) {
    const element = priorityQueue.dequeue();
    if (!element) break;
    const [currentNode, currentDistance] = element;
    const currentNeighbors = graph.nodes[currentNode];

    for (let neighbor in currentNeighbors) {
      const neighborWeight = graph.nodes[currentNode][neighbor];
      const distance = currentDistance + neighborWeight;

      if (distance < distances[neighbor]) {
        distances[neighbor] = distance;
        previous[neighbor] = currentNode;
        priorityQueue.enqueue(neighbor, distance);
      }
    }
  }

  return {
    distances,
    previous,
  };
};
