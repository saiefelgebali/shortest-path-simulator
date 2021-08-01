import { GraphNode } from "./GraphNode";

/**
 * Represents an edge between 2 nodes
 */
export class GraphEdge {
	private _nodes: [GraphNode, GraphNode];
	public get nodes() {
		return this._nodes;
	}

	private _weight: number;
	public get weight() {
		return this._weight;
	}

	constructor(node1: GraphNode, node2: GraphNode, weight: number) {
		if (node1 === node2) throw new Error("Cannot have edge with one node");
		if (weight < 0) throw new Error("Cannot have negative value weight");
		this._nodes = [node1, node2];
		this._weight = weight;
	}

	edit({ weight }: { weight?: number }) {
		if (weight) this._weight = weight;
	}
}
