import { Graph } from "./Graph";
import { GraphNode } from "./GraphNode";
import { GraphEdge } from "./GraphEdge";
import { InMemoryKeyValueStore } from "../util/storage";

export interface ShortestPathResult {
	distance: number;
	path: GraphEdge[];
}

class NodeParents extends InMemoryKeyValueStore<
	GraphNode,
	{ node: GraphNode; edge: GraphEdge } | null
> {
	/**
	 * Init a new NodeParents KeyValue store.
	 * Map out existing nodes with default values of null.
	 */
	constructor(nodes: GraphNode[]) {
		super({ keys: nodes, defaultValue: null });
	}
}

class NodeDistances extends InMemoryKeyValueStore<GraphNode, number> {
	/**
	 * Init a new NodeDistances KeyValue store.
	 * Map out existing nodes with default values of Infinity.
	 */
	constructor(nodes: GraphNode[]) {
		super({ keys: nodes, defaultValue: Infinity });
	}

	/**
	 * Return node with shortest distance, excluding visited nodes
	 */
	getShortestDistanceNode(visited: GraphNode[]) {
		const unvisited = this.store.filter(
			(obj) => !visited.includes(obj.key)
		);

		if (!unvisited.length) return null;

		const shortest = unvisited.reduce((prev, current) =>
			current.value < prev.value ? current : prev
		);

		return shortest?.key;
	}
}

// class NodeParents extends InMemoryKeyValueStore<GraphNode, {node: GraphNode, edge: GraphEdge}> {

// }

export function findShortestPath(
	graph: Graph,
	startNode: GraphNode,
	endNode: GraphNode
) {
	// Setup algorithm
	const distances = new NodeDistances(graph.nodes);
	const visited: GraphNode[] = [];
	const parents = new NodeParents(graph.nodes);
	// const parents = new InMemoryKeyValueStore<GraphNode, GraphNode | undefined>(
	// 	{
	// 		keys: graph.nodes,
	// 		defaultValue: undefined,
	// 	}
	// );

	distances.set(startNode, 0);
	let current = distances.getShortestDistanceNode(visited);

	// Iterate through nodes in order of shortest distance from start
	while (current !== null) {
		const node = current;
		const distance = distances.get(node)!;
		const edges = graph.getNodeEdges(node);

		edges.forEach((edge) => {
			// Get other node from edge
			const child = edge.nodes.find((n) => n !== node)!;

			// Prevent infinite loop if child is start node
			if (child === startNode) return;

			// Check if new distance is shorter than current
			const newDistance = distance + edge.weight;
			const currentDistance = distances.get(child)!;
			if (newDistance < currentDistance) {
				// Update distance & parent
				distances.set(child, newDistance);
				parents.set(child, { node, edge } ?? null);
			}
		});

		visited.push(node);

		current = distances.getShortestDistanceNode(visited);
	}

	// Obtain result
	const distance = distances.get(endNode)!;
	const path = [];

	// Find find path by using parents
	let parent = parents.get(endNode);
	while (parent) {
		path.push(parent.edge);
		parent = parents.get(parent.node);
	}
	path.reverse();

	const result: ShortestPathResult = {
		distance,
		path,
	};

	return result;
}
