import { GraphNode, GraphEdge } from "../index";
import ActionController from "./ActionController";

// Different GraphAction object types
type GraphActionAddNode = { type: "addNode"; node: GraphNode };
type GraphActionRemoveNode = { type: "removeNode"; node: GraphNode };
type GraphActionAddEdge = { type: "addEdge"; edge: GraphEdge };
type GraphActionMoveNode = {
	type: "moveNode";
	node: GraphNode;
	position: { x: number; y: number };
};

// Union Type
export type GraphAction =
	| GraphActionAddNode
	| GraphActionRemoveNode
	| GraphActionAddEdge
	| GraphActionMoveNode;

/**
 * Add a new node object to graph
 */
export function addNode(
	dispatch: React.Dispatch<GraphAction>,
	node: GraphNode
) {
	const execute = () =>
		dispatch({
			type: "addNode",
			node,
		});

	const undo = () =>
		dispatch({
			type: "removeNode",
			node,
		});

	ActionController.addAction(execute, undo);

	return execute;
}

/**
 * Add a new edge object to graph
 */
export function addEdge(
	dispatch: React.Dispatch<GraphAction>,
	edge: GraphEdge
) {
	return dispatch({
		type: "addEdge",
		edge,
	});
}

/**
 * Move node to new position
 */
export function moveNode(
	dispatch: React.Dispatch<GraphAction>,
	node: GraphNode,
	position: { x: number; y: number }
) {
	return dispatch({
		type: "moveNode",
		node,
		position,
	});
}
