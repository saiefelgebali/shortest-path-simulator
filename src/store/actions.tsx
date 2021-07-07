import React from "react";
import { Graph } from "../graph/Graph";
import { GraphEdge } from "../graph/GraphEdge";
import { GraphNode } from "../graph/GraphNode";
import { ActionType } from "./_AppAction.type";

export function addNode(dispatch: React.Dispatch<any>, node: GraphNode) {
	return dispatch({ type: ActionType.addNode, node });
}

export function moveNode(
	dispatch: React.Dispatch<any>,
	node: GraphNode,
	{ x, y }: { x: number; y: number }
) {
	node.moveNode(x, y);
	return dispatch({ type: ActionType.moveNode });
}

export function addEdge(
	dispatch: React.Dispatch<any>,
	graph: Graph,
	edge: GraphEdge
) {
	graph.addEdge(edge);
	return dispatch({ type: ActionType.addNode, graph });
}
