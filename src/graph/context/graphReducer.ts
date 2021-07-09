import { GraphAction } from "./graphActions";
import { GraphState } from "./graphContext";

export function graphReducer(state: GraphState, action: GraphAction) {
	switch (action.type) {
		case "addNode":
			state.graph.addNode(action.node);
			return { ...state };

		case "removeNode":
			state.graph.removeNode(action.node);
			return { ...state };

		case "addEdge":
			state.graph.addEdge(action.edge);
			return { ...state };

		case "moveNode":
			action.node.moveNode(action.position);
			return { ...state };

		default:
			return { ...state };
	}
}
