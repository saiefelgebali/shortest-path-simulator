import { GraphEdge } from "./GraphEdge";

/**
 * Represents a node in a graph.
 */
export class GraphNode {
	name: string;
	id: string;
	edges: GraphEdge[] = [];
	position: { x: number; y: number } = { x: 200, y: 200 };

	/**
	 * Create a new node with name
	 * @param name name of node
	 * @param id short name of node
	 */
	constructor(name: string, id: string) {
		this.name = name;
		this.id = id.toUpperCase();
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

	/**
	 * Move node to new position
	 */
	moveNode(newPosition: { x: number; y: number }) {
		this.position = newPosition;
	}

	/**
	 * Edit name of node
	 */
	editName(newName: string) {
		this.name = newName;
	}

	/**
	 * Edit ID of node
	 */
	editID(newID: string) {
		this.id = newID.toUpperCase();
	}
}
