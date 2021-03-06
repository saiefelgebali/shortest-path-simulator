import { findShortestPath } from "../algorithm";
import { GraphAction } from "./graphActions";
import { GraphState } from "./graphContext";

export function graphReducer(state: GraphState, action: GraphAction) {
	switch (action.type) {
		case "deselect":
			return { ...state, current: undefined };

		case "changeSnap":
			return { ...state, snap: action.snap };

		case "findShortestPath":
			const shortestPath = findShortestPath(
				state.graph,
				action.start,
				action.end
			);
			return { ...state, shortestPath };

		case "selectNode":
			return { ...state, current: action.node };

		case "selectEdge":
			return { ...state, current: action.edge };

		case "addNode":
			state.graph.addNode(action.node);
			return { ...state };

		case "removeNode":
			state.graph.removeNode(action.node);
			return { ...state };

		case "addEdge":
			state.graph.addEdge(action.edge);
			return { ...state };

		case "removeEdge":
			state.graph.removeEdge(action.edge);
			return { ...state };

		case "moveNode":
			action.node.move(action.position);
			return { ...state };

		case "editNodeName":
			action.node.edit({ name: action.name });
			return { ...state };

		case "editNodeID":
			action.node.edit({ id: action.id });
			return { ...state };

		case "editEdgeWeight":
			action.edge.edit({ weight: action.weight });
			return { ...state };

		default:
			return { ...state };
	}
}
