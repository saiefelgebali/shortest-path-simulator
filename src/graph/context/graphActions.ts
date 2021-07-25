import { GraphEdgeAction } from "./graphEdgeActions";
import { GraphNodeAction } from "./graphNodeActions";

type GraphActionDeselect = { type: "deselect" };
type GraphActionChangeSnap = { type: "changeSnap"; snap: number };
type GraphActionFindShortestPath = { type: "findShortestPath" };

// Union type of available graph actions
export type GraphAction =
	| GraphNodeAction
	| GraphEdgeAction
	| GraphActionDeselect
	| GraphActionChangeSnap
	| GraphActionFindShortestPath;

/**
 * Deselect current
 */
export function deselect(dispatch: React.Dispatch<GraphAction>) {
	return dispatch({
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
	return dispatch({
		type: "changeSnap",
		snap,
	});
}

/**
 * Run Dijkstra's algorithm on graph
 */
export function findShortestPath(dispatch: React.Dispatch<GraphAction>) {
	return dispatch({
		type: "findShortestPath",
	});
}
