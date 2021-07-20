import { GraphEdgeAction } from "./graphEdgeActions";
import { GraphNodeAction } from "./graphNodeActions";

type GraphActionDeselect = { type: "deselect" };

// Union type of available graph actions
export type GraphAction =
	| GraphNodeAction
	| GraphEdgeAction
	| GraphActionDeselect;

/**
 * Deselect current
 */
export function deselect(dispatch: React.Dispatch<GraphAction>) {
	return dispatch({
		type: "deselect",
	});
}
