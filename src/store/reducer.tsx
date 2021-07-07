import { ActionType } from "./_AppAction.type";
import { AppState } from "./_AppState.type";

export function reducer(state: AppState, action: any) {
	switch (action.type) {
		case ActionType.addNode:
			state.graph.addNode(action.node);
			return { ...state };

		case ActionType.addEdge:
			state.graph.addEdge(action.edge);
			return { ...state };

		case ActionType.moveNode:
			return { ...state };

		default:
			return state;
	}
}
