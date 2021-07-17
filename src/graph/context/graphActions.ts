import { GraphNode, GraphEdge } from "../index";
import ActionController from "./ActionController";

// Different GraphAction object types
type GraphActionSelectNode = { type: "selectNode"; node: GraphNode };
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
	| GraphActionAddNode
	| GraphActionRemoveNode
	| GraphActionAddEdge
	| GraphActionRemoveEdge
	| GraphActionMoveNode
	| GraphActionEditNodeName
	| GraphActionEditNodeID;

/**
 * Select a node for a function
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
