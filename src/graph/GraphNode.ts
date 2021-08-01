interface Position {
	x: number;
	y: number;
}

/**
 * Represents a node in a graph.
 */
export class GraphNode {
	position: Position;
	name: string;
	id: string;

	constructor(name: string, id: string, initialPosition?: Position) {
		this.name = name;
		this.id = id;
		this.position = initialPosition ?? { x: 0, y: 0 };
	}

	edit({ name, id }: { name?: string; id?: string }) {
		if (name) this.name = name;
		if (id) this.id = id;
	}

	move(newPosition: Position) {
		this.position = newPosition;
	}
}
