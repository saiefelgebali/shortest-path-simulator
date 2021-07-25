import { findShortestPath } from "./algorithm";
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
		this.edges = this.edges.filter(
			(_edge) => _edge.fromNode !== node && _edge.toNode !== node
		);
		return this;
	}

	/**
	 * Create a new edge between 2 nodes
	 */
	addEdge(edge: GraphEdge) {
		this.edges.push(edge);
		return this;
	}

	/**
	 * Remove an edge from the graph
	 */
	removeEdge(edge: GraphEdge) {
		this.edges = this.edges.filter((_edge) => _edge !== edge);
		return this;
	}

	/**
	 * Find shortest path from start and end nodes
	 */
	findShortestPath(start: GraphNode, end: GraphNode) {
		return findShortestPath(this, start, end);
	}
}
