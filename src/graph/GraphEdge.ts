import { GraphNode } from "./GraphNode";

/**
 * Represents a directed edge between 2 nodes
 */
export class GraphEdge {
	fromNode: GraphNode;
	toNode: GraphNode;
	weight: number;

	constructor(fromNode: GraphNode, toNode: GraphNode, weight: number) {
		this.fromNode = fromNode;
		this.toNode = toNode;
		this.weight = weight;
	}
}
