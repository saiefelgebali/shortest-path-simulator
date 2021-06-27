import { GraphEdge } from "./GraphEdge";

/**
 * Represents a node in a graph.
 */
export class GraphNode {
	name: string;
	edges: GraphEdge[] = [];

	/**
	 * Create a new node with name
	 * @param name name of node
	 */
	constructor(name: string) {
		this.name = name;
	}

	/**
	 * Add a connection to another node from this one.
	 * @param toNode the target node
	 * @param weight weight of edge on graph
	 * @returns newly created edge
	 */
	addEdge(toNode: GraphNode, weight: number) {
		const edge = new GraphEdge(this, toNode, weight);
		this.edges.push(edge);
		return edge;
	}
}
