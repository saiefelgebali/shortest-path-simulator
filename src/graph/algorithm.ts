import { Graph } from "./Graph";
import { GraphNode } from "./GraphNode";

/**
 * Each entry has a distance assigned to it
 * eg.
 * const map: IndexDistanceMap = {
 *      1: 12,
 *      3: 30,
 *      4: 8
 * }
 */
interface IndexDistanceMap {
	[index: number]: number;
}

/**
 * Every entry must have a numerical index.
 * Each index has a IndexDistanceMap object.
 * eg.
 * const map: NodeDistanceMap = {
 *      0: {1: 20, 2: 20, 3: 20},
 *      1: {2: 40, 3: 10, 4: 20},
 *      ...
 * }
 */
interface NodeDistanceMap {
	[index: number]: IndexDistanceMap;
}

/**
 * Map distances from one node to its adjacent nodes using edge weights
 */
const nodeDistances = (graph: Graph, node: GraphNode) => {
	let distances: IndexDistanceMap = {};

	node.edges.forEach((edge) => {
		const nodeIndex = graph.nodes.findIndex((node) => node === edge.toNode);
		distances[nodeIndex] = edge.weight;
	});

	return distances;
};

/**
 * Get shortest unvisited node
 */
function getShortestDistanceNode(
	distances: IndexDistanceMap,
	visited: number[]
) {
	let shortest: number | null = null;

	for (const node in distances) {
		const nodeIndex = parseInt(node);

		// Check if node has shortest distance
		const isShortest =
			!shortest || distances[nodeIndex] < distances[shortest];

		// Check if node has been visited before
		if (isShortest && !visited.includes(nodeIndex)) {
			shortest = nodeIndex;
		}
	}

	return shortest;
}

export function findShortestPath(
	graph: Graph,
	start: GraphNode,
	end: GraphNode
) {
	// All nodes and the weights of edges to adjacent nodes
	const indexDistanceGraph: NodeDistanceMap = {
		...graph.nodes.map((node, index) => nodeDistances(graph, node)),
	};

	// All nodes and their distance to start node
	const startIndex = graph.nodes.findIndex((node) => node === start);
	const endIndex = graph.nodes.findIndex((node) => node === end);
	const distances: IndexDistanceMap = {
		...indexDistanceGraph[startIndex], // Map nodes adjacent to start node
	};

	distances[endIndex] = Infinity;

	// Keep track of parents
	const parents: { [index: number]: any } = {};
	parents[endIndex] = null;
	for (const child in indexDistanceGraph[startIndex]) {
		parents[child] = startIndex;
	}

	// Keep track of visited node indices
	const visited: number[] = [];

	// Find node with shortest distance
	let nodeIndex = getShortestDistanceNode(distances, visited);

	// For that node
	while (nodeIndex) {
		// Find its distance and its child nodes
		const distance = distances[nodeIndex];
		const children = indexDistanceGraph[nodeIndex];

		// For each child node
		for (const child in children) {
			const childIndex = parseInt(child);
			// Make sure child is not start node - prevent infinite loop
			if (childIndex === startIndex) continue;

			// Save the distance from start to child
			const newDistance = distance + children[childIndex];

			// Either add or update child node's distance in main distances object
			// Update if new distance is shorter than previous distance
			if (!distances[childIndex] || distances[child] > newDistance) {
				// Save the distance
				distances[childIndex] = newDistance;

				// Record the path
				parents[childIndex] = nodeIndex;
			}
		}
		// Add node to visited
		visited.push(nodeIndex);

		// Move to the next nearest node - iterates loop with new node
		nodeIndex = getShortestDistanceNode(distances, visited);
	}

	// When the end node is reached, reverse the recorded path back to the start node
	const shortestPath = [endIndex];
	let parent = parents[endIndex];
	while (parent) {
		shortestPath.push(parent);
		parent = parents[parent];
	}
	shortestPath.reverse();

	const shortestPathNodes = shortestPath.map(
		(nodeIndex) => graph.nodes[nodeIndex]
	);

	// This is the shortest path from start to end nodes
	const result = {
		distance: distances[endIndex],
		path: shortestPathNodes,
	};

	return result;
}
