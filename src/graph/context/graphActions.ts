import { GraphNode, GraphEdge } from "../index";
import ActionController from "./ActionController";

// Different GraphAction object types
type GraphActionSelectNode = { type: "selectNode"; node: GraphNode };
type GraphActionSelectEdge = { type: "selectEdge"; edge: GraphEdge };
type GraphActionDeselect = { type: "deselect" };
type GraphActionAddNode = { type: "addNode"; node: GraphNode };
type GraphActionRemoveNode = { type: "removeNode"; node: GraphNode };
type GraphActionAddEdge = { type: "addEdge"; edge: GraphEdge };
type GraphActionRemoveEdge = { type: "removeEdge"; edge: GraphEdge };
type GraphActionMoveNode = {
	type: "moveNode";
	node: GraphNode;
	position: { x: number; y: number };
};
type GraphActionEditNodeName = {
	type: "editNodeName";
	node: GraphNode;
	name: string;
};
type GraphActionEditNodeID = {
	type: "editNodeID";
	node: GraphNode;
	id: string;
};

// Union Type
export type GraphAction =
	| GraphActionSelectNode
	| GraphActionSelectEdge
	| GraphActionDeselect
	| GraphActionAddNode
	| GraphActionRemoveNode
	| GraphActionAddEdge
	| GraphActionRemoveEdge
	| GraphActionMoveNode
	| GraphActionEditNodeName
	| GraphActionEditNodeID;

/**
 * Deselect current
 */
export function deselect(dispatch: React.Dispatch<GraphAction>) {
	return dispatch({
		type: "deselect",
	});
}
/**
 * Select a node
 */
export function selectNode(
	dispatch: React.Dispatch<GraphAction>,
	node: GraphNode
) {
	return dispatch({
		type: "selectNode",
		node,
	});
}
/**
 * Select an edge
 */
export function selectEdge(
	dispatch: React.Dispatch<GraphAction>,
	edge: GraphEdge
) {
	return dispatch({
		type: "selectEdge",
		edge,
	});
}

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

	return execute();
}

/**
 * Add a new edge object to graph
 */
export function addEdge(
	dispatch: React.Dispatch<GraphAction>,
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
	dispatch: React.Dispatch<GraphAction>,
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

/**
 * Edit node name
 */
export function editNodeName(
	dispatch: React.Dispatch<GraphAction>,
	node: GraphNode,
	name: string
) {
	return dispatch({
		type: "editNodeName",
		node,
		name,
	});
}

/**
 * Edit node name
 */
export function editNodeID(
	dispatch: React.Dispatch<GraphAction>,
	node: GraphNode,
	id: string
) {
	return dispatch({
		type: "editNodeID",
		node,
		id,
	});
}
