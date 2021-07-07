// import { Graph } from "../graph/Graph";
// import { GraphNode } from "../graph/GraphNode";

export enum ActionType {
	addNode,
	addEdge,
	moveNode,
}

export interface AppAction {
	type: ActionType;
}
