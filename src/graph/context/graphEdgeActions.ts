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
export const selectEdge = (
	dispatch: React.Dispatch<GraphAction>,
	edge: GraphEdge
) =>
	dispatchAction(dispatch, {
		type: "selectEdge",
		edge,
	});

/**
 * Add a new edge object to graph
 */
export const addEdge = (
	dispatch: React.Dispatch<GraphAction>,
	edge: GraphEdge
) =>
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

/**
 * Remove an edge from graph
 */
export const removeEdge = (
	dispatch: React.Dispatch<GraphAction>,
	edge: GraphEdge
) =>
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

/**
 * Edit edge weight
 */
export const editEdgeWeight = (
	dispatch: React.Dispatch<GraphAction>,
	edge: GraphEdge,
	weight: number
) =>
	dispatchAction(dispatch, {
		type: "editEdgeWeight",
		edge,
		weight,
	});
