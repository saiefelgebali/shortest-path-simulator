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
	addNode(node: GraphNode) {
		this.nodes.push(node);
		return this;
	}

	/**
	 * Remove node from graph
	 */
	removeNode(node: GraphNode) {
		this.nodes = this.nodes.filter((_node) => _node !== node);
	}

	/**
	 * Create a new edge between 2 nodes
	 */
	addEdge(edge: GraphEdge) {
		edge.fromNode.addEdge(edge.toNode, edge.weight);
		this.edges.push(edge);
		return this;
	}

	/**
	 * Applies Dijkstra's algorithm
	 */
	findShortestPath(start: GraphNode, end: GraphNode) {}
}
