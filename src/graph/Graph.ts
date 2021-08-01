import { GraphEdge } from "./GraphEdge";
import { GraphNode } from "./GraphNode";

export class Graph {
	private _nodes: GraphNode[] = [];
	public get nodes() {
		return this._nodes;
	}

	private _edges: GraphEdge[] = [];
	public get edges() {
		return this._edges;
	}

	addNode(node: GraphNode) {
		this._nodes.push(node);
		return this;
	}

	addNodes(nodes: GraphNode[]) {
		nodes.forEach((node) => {
			this.addNode(node);
		});
		return this;
	}

	addEdge(edge: GraphEdge) {
		// Validate edge nodes in graph
		let errorNodes: GraphNode[] = [];
		edge.nodes.forEach((node) => {
			if (!this.nodes.includes(node)) {
				errorNodes.push(node);
			}
		});

		// Return error if nodes not in graph
		if (errorNodes.length > 0) {
			const message = `Graph does not contain node${
				errorNodes.length > 1 ? "s" : ""
			}${errorNodes.map((node) => {
				return ` "${node.name}"`;
			})}.`;

			const error = {
				nodes: errorNodes,
				message,
			};

			throw error;
		}

		this._edges.push(edge);
		return this;
	}

	addEdges(edges: GraphEdge[]) {
		edges.forEach((edge) => this.addEdge(edge));
		return this;
	}

	removeNode(node: GraphNode) {
		this._nodes = this._nodes.filter((_node) => _node !== node);
		this._edges.filter((_edge) => !_edge.nodes.includes(node));
		return this;
	}

	removeEdge(edge: GraphEdge) {
		this._edges = this._edges.filter((_edge) => _edge !== edge);
		return this;
	}

	getNodeEdges(node: GraphNode) {
		return this.edges.filter((edge) => edge.nodes.includes(node));
	}
}
