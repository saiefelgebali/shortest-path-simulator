import React from "react";
import { Graph } from "../graph/Graph";
import { GraphEdge } from "../graph/GraphEdge";
import { GraphNode } from "../graph/GraphNode";
import { ActionType, AppAction } from "./_AppAction.type";

export function addNode(
	dispatch: React.Dispatch<AppAction>,
	graph: Graph,
	node: GraphNode
) {
	graph.addNode(node);
	return dispatch({ type: ActionType.addNode, graph });
}

export function addEdge(
	dispatch: React.Dispatch<AppAction>,
	graph: Graph,
	edge: GraphEdge
) {
	graph.addEdge(edge);
	return dispatch({ type: ActionType.addNode, graph });
}
