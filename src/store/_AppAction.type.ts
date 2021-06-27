import { Graph } from "../graph/Graph";

export enum ActionType {
	addNode,
	addEdge,
}

export type AppAction = {
	type: ActionType;
	graph?: Graph;
};
