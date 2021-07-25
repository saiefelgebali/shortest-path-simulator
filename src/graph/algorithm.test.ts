import "jest";
import { findShortestPath } from "./algorithm";
import { Graph } from "./Graph";
import { GraphEdge } from "./GraphEdge";
import { GraphNode } from "./GraphNode";

class GraphTester {
	private graph = new Graph();
	static instance = new GraphTester();

	private constructor() {}

	createTree(n: number, weight: number) {
		for (let i = 0; i < n; i++) {
			this.graph.addNode(new GraphNode(`Node ${i}`, `N${i}`));
		}
		this.graph.nodes.forEach((node, index) => {
			if (index === 0) return;
			const fromNode = this.graph.nodes[index - 1];
			this.graph.addEdge(new GraphEdge(fromNode, node, weight));
		});
		return this;
	}
	add(n: number) {
		for (let i = 0; i < n; i++) {
			this.graph.addNode(new GraphNode(`Node ${i}`, `N${i}`));
		}
		return this;
	}

	info() {
		console.log(this.graph);
		return this;
	}
	reset() {
		this.graph = new Graph();
	}
}

describe("Find Shortest Path", () => {
	test("3 Node Tree", () => {
		GraphTester.instance.createTree(12, 10).info();
	});
});
