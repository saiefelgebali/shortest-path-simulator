import React from "react";
import { GraphNode } from "../GraphNode";
import ActionController from "./ActionController";
import { GraphEdgeActionMap } from "./graphEdgeActions";
import { GraphNodeActionMap } from "./graphNodeActions";

export interface GraphActionMap extends GraphNodeActionMap, GraphEdgeActionMap {
	changeSnap: { type: "changeSnap"; snap: number };
	findShortestPath: {
		type: "findShortestPath";
		start: GraphNode;
		end: GraphNode;
	};
	deselect: { type: "deselect" };
}

export type GraphAction = GraphActionMap[keyof GraphActionMap];

/**
 * Handle generic actions
 * @param dispatch
 * @param action execute action
 * @param undoAction revert action
 * @returns
 */
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
export const deselect = (dispatch: React.Dispatch<GraphAction>) =>
	dispatchAction(dispatch, {
		type: "deselect",
	});

/**
 * Change snap value
 */
export const changeSnap = (
	dispatch: React.Dispatch<GraphAction>,
	snap: number
) =>
	dispatchAction(dispatch, {
		type: "changeSnap",
		snap,
	});

/**
 * Run Dijkstra's algorithm on graph
 */
export const findShortestPath = (
	dispatch: React.Dispatch<GraphAction>,
	start: GraphNode,
	end: GraphNode
) =>
	dispatchAction(dispatch, {
		type: "findShortestPath",
		start,
		end,
	});
