import { GraphEdge } from "../index";
import ActionController from "./ActionController";

type GraphActionSelectEdge = { type: "selectEdge"; edge: GraphEdge };
type GraphActionAddEdge = { type: "addEdge"; edge: GraphEdge };
type GraphActionRemoveEdge = { type: "removeEdge"; edge: GraphEdge };
type GraphActionEditEdgeWeight = {
	type: "editEdgeWeight";
	edge: GraphEdge;
	weight: number;
};

export type GraphEdgeAction =
	| GraphActionSelectEdge
	| GraphActionAddEdge
	| GraphActionRemoveEdge
	| GraphActionEditEdgeWeight;

/**
 * Select an edge
 */
export function selectEdge(
	dispatch: React.Dispatch<GraphEdgeAction>,
	edge: GraphEdge
) {
	return dispatch({
		type: "selectEdge",
		edge,
	});
}

/**
 * Add a new edge object to graph
 */
export function addEdge(
	dispatch: React.Dispatch<GraphEdgeAction>,
	edge: GraphEdge
) {
	const execute = () =>
		dispatch({
			type: "addEdge",
			edge,
		});

	const undo = () =>
		dispatch({
			type: "removeEdge",
			edge,
		});

	ActionController.addAction(execute, undo);
	return execute();
}

/**
 * Remove an edge from graph
 */
export function removeEdge(
	dispatch: React.Dispatch<GraphEdgeAction>,
	edge: GraphEdge
) {
	const execute = () =>
		dispatch({
			type: "removeEdge",
			edge,
		});

	const undo = () =>
		dispatch({
			type: "addEdge",
			edge,
		});

	ActionController.addAction(execute, undo);
	return execute();
}

/**
 * Edit edge weight
 */
export function editEdgeWeight(
	dispatch: React.Dispatch<GraphEdgeAction>,
	edge: GraphEdge,
	weight: number
) {
	return dispatch({
		type: "editEdgeWeight",
		edge,
		weight,
	});
}
