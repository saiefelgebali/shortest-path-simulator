import { GraphAction } from "./graphActions";
import { GraphState } from "./graphContext";

export function graphReducer(state: GraphState, action: GraphAction) {
	switch (action.type) {
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
			action.node.moveNode(action.position);
			return { ...state };

		case "editNodeName":
			action.node.editName(action.name);
			return { ...state };

		case "editNodeID":
			action.node.editID(action.id);
			return { ...state };

		default:
			return { ...state };
	}
}
