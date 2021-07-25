import { GraphNode } from "../index";
import { GraphAction, dispatchAction } from "./graphActions";

export interface GraphNodeActionMap {
	selectNode: { type: "selectNode"; node: GraphNode };
	addNode: { type: "addNode"; node: GraphNode };
	removeNode: { type: "removeNode"; node: GraphNode };
	moveNode: {
		type: "moveNode";
		node: GraphNode;
		position: { x: number; y: number };
	};
	editNodeName: {
		type: "editNodeName";
		node: GraphNode;
		name: string;
	};
	editNodeID: {
		type: "editNodeID";
		node: GraphNode;
		id: string;
	};
}

/**
 * Select a node
 */
export function selectNode(
	dispatch: React.Dispatch<GraphAction>,
	node: GraphNode
) {
	return dispatchAction(dispatch, {
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
	dispatchAction(
		dispatch,
		{
			type: "addNode",
			node,
		},
		{
			type: "removeNode",
			node,
		}
	);
}

/**
 * Remove node from graph
 */
export function removeNode(
	dispatch: React.Dispatch<GraphAction>,
	node: GraphNode
) {
	dispatchAction(
		dispatch,
		{
			type: "removeNode",
			node,
		},
		{
			type: "addNode",
			node,
		}
	);
}

/**
 * Move node to new position
 */
export function moveNode(
	dispatch: React.Dispatch<GraphAction>,
	node: GraphNode,
	position: { x: number; y: number }
) {
	return dispatchAction(dispatch, {
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
	return dispatchAction(dispatch, {
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
	return dispatchAction(dispatch, {
		type: "editNodeID",
		node,
		id,
	});
}
