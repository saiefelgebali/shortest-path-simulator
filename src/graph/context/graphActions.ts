import React from "react";
import ActionController from "./ActionController";
import { GraphEdgeActionMap } from "./graphEdgeActions";
import { GraphNodeActionMap } from "./graphNodeActions";

export interface GraphActionMap extends GraphNodeActionMap, GraphEdgeActionMap {
	changeSnap: { type: "changeSnap"; snap: number };
	findShortestPath: { type: "findShortestPath" };
	deselect: { type: "deselect" };
}

export type GraphAction = GraphActionMap[keyof GraphActionMap];

export function dispatchAction(
	dispatch: React.Dispatch<GraphAction>,
	action: GraphAction,
	undoAction?: GraphAction
) {
	if (undoAction) {
		const execute = () => dispatch(action);

		const undo = () => dispatch(undoAction);

		ActionController.addAction(execute, undo);

		return dispatch(action);
	}

	dispatch(action);
}

/**
 * Deselect current
 */
export function deselect(dispatch: React.Dispatch<GraphAction>) {
	return dispatchAction(dispatch, {
		type: "deselect",
	});
}

/**
 * Change snap value
 */
export function changeSnap(
	dispatch: React.Dispatch<GraphAction>,
	snap: number
) {
	return dispatchAction(dispatch, {
		type: "changeSnap",
		snap,
	});
}

/**
 * Run Dijkstra's algorithm on graph
 */
export function findShortestPath(dispatch: React.Dispatch<GraphAction>) {
	return dispatchAction(dispatch, {
		type: "findShortestPath",
	});
}
