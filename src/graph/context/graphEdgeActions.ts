import { GraphEdge } from "../index";
import { GraphAction, dispatchAction } from "./graphActions";

export interface GraphEdgeActionMap {
	selectEdge: { type: "selectEdge"; edge: GraphEdge };
	addEdge: { type: "addEdge"; edge: GraphEdge };
	removeEdge: { type: "removeEdge"; edge: GraphEdge };
	editEdgeWeight: {
		type: "editEdgeWeight";
		edge: GraphEdge;
		weight: number;
	};
}

/**
 * Select an edge
 */
export function selectEdge(
	dispatch: React.Dispatch<GraphAction>,
	edge: GraphEdge
) {
	return dispatchAction(dispatch, {
		type: "selectEdge",
		edge,
	});
}

/**
 * Add a new edge object to graph
 */
export function addEdge(
	dispatch: React.Dispatch<GraphAction>,
	edge: GraphEdge
) {
	dispatchAction(
		dispatch,
		{
			type: "addEdge",
			edge,
		},
		{
			type: "removeEdge",
			edge,
		}
	);
}

/**
 * Remove an edge from graph
 */
export function removeEdge(
	dispatch: React.Dispatch<GraphAction>,
	edge: GraphEdge
) {
	dispatchAction(
		dispatch,
		{
			type: "removeEdge",
			edge,
		},
		{
			type: "addEdge",
			edge,
		}
	);
}

/**
 * Edit edge weight
 */
export function editEdgeWeight(
	dispatch: React.Dispatch<GraphAction>,
	edge: GraphEdge,
	weight: number
) {
	return dispatchAction(dispatch, {
		type: "editEdgeWeight",
		edge,
		weight,
	});
}
