import { GraphEdgeAction } from "./graphEdgeActions";
import { GraphNodeAction } from "./graphNodeActions";

type GraphActionDeselect = { type: "deselect" };
type GraphActionChangeSnap = { type: "changeSnap"; snap: number };

// Union type of available graph actions
export type GraphAction =
	| GraphNodeAction
	| GraphEdgeAction
	| GraphActionDeselect
	| GraphActionChangeSnap;

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
