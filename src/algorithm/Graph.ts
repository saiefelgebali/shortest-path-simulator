import { GraphEdge } from "./GraphEdge";
import { GraphNode } from "./GraphNode";

/**
 * Represents a traversable graph with nodes and edges.
 */
export class Graph {
	nodes: GraphNode[] = [];
	edges: GraphEdge[] = [];

	/**
	 * Create a new node in graph
	 */
	addNode(name: string) {
		const node = new GraphNode(name);
		this.nodes.push(node);
	}

	/**
	 * Create a new edge between 2 nodes
	 */
	addEdge(fromNode: GraphNode, toNode: GraphNode, weight: number) {
		const edge = fromNode.addEdge(toNode, weight);
		this.edges.push(edge);
	}
}
