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
export const selectNode = (
	dispatch: React.Dispatch<GraphAction>,
	node: GraphNode
) =>
	dispatchAction(dispatch, {
		type: "selectNode",
		node,
	});

/**
 * Add a new node object to graph
 */
export const addNode = (
	dispatch: React.Dispatch<GraphAction>,
	node: GraphNode
) =>
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

/**
 * Remove node from graph
 */
export const removeNode = (
	dispatch: React.Dispatch<GraphAction>,
	node: GraphNode
) =>
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

/**
 * Move node to new position
 */
export const moveNode = (
	dispatch: React.Dispatch<GraphAction>,
	node: GraphNode,
	position: { x: number; y: number }
) =>
	dispatchAction(dispatch, {
		type: "moveNode",
		node,
		position,
	});

/**
 * Edit node name
 */
export const editNodeName = (
	dispatch: React.Dispatch<GraphAction>,
	node: GraphNode,
	name: string
) =>
	dispatchAction(dispatch, {
		type: "editNodeName",
		node,
		name,
	});

/**
 * Edit node name
 */
export const editNodeID = (
	dispatch: React.Dispatch<GraphAction>,
	node: GraphNode,
	id: string
) =>
	dispatchAction(dispatch, {
		type: "editNodeID",
		node,
		id,
	});
