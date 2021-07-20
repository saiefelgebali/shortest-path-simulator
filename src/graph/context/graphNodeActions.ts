import { GraphNode } from "../index";
import ActionController from "./ActionController";

type GraphActionSelectNode = { type: "selectNode"; node: GraphNode };
type GraphActionAddNode = { type: "addNode"; node: GraphNode };
type GraphActionRemoveNode = { type: "removeNode"; node: GraphNode };
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
export type GraphNodeAction =
	| GraphActionSelectNode
	| GraphActionAddNode
	| GraphActionRemoveNode
	| GraphActionMoveNode
	| GraphActionEditNodeName
	| GraphActionEditNodeID;

/**
 * Select a node
 */
export function selectNode(
	dispatch: React.Dispatch<GraphNodeAction>,
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
	dispatch: React.Dispatch<GraphNodeAction>,
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
 * Remove node from graph
 */
export function removeNode(
	dispatch: React.Dispatch<GraphNodeAction>,
	node: GraphNode
) {
	const execute = () =>
		dispatch({
			type: "removeNode",
			node,
		});

	const undo = () =>
		dispatch({
			type: "addNode",
			node,
		});

	ActionController.addAction(execute, undo);

	return execute();
}

/**
 * Move node to new position
 */
export function moveNode(
	dispatch: React.Dispatch<GraphNodeAction>,
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
	dispatch: React.Dispatch<GraphNodeAction>,
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
	dispatch: React.Dispatch<GraphNodeAction>,
	node: GraphNode,
	id: string
) {
	return dispatch({
		type: "editNodeID",
		node,
		id,
	});
}
